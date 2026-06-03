(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function mu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const xt={},os=[],li=()=>{},Sd=()=>!1,Io=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),gu=n=>n.startsWith("onUpdate:"),Vt=Object.assign,_u=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ym=Object.prototype.hasOwnProperty,ht=(n,e)=>Ym.call(n,e),Xe=Array.isArray,ls=n=>Lo(n)==="[object Map]",bd=n=>Lo(n)==="[object Set]",Ye=n=>typeof n=="function",Lt=n=>typeof n=="string",ir=n=>typeof n=="symbol",Mt=n=>n!==null&&typeof n=="object",Md=n=>(Mt(n)||Ye(n))&&Ye(n.then)&&Ye(n.catch),yd=Object.prototype.toString,Lo=n=>yd.call(n),jm=n=>Lo(n).slice(8,-1),Ed=n=>Lo(n)==="[object Object]",vu=n=>Lt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,$s=mu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Uo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Km=/-\w/g,Ln=Uo(n=>n.replace(Km,e=>e.slice(1).toUpperCase())),Zm=/\B([A-Z])/g,Ir=Uo(n=>n.replace(Zm,"-$1").toLowerCase()),No=Uo(n=>n.charAt(0).toUpperCase()+n.slice(1)),rl=Uo(n=>n?`on${No(n)}`:""),Qi=(n,e)=>!Object.is(n,e),Qa=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Td=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},xu=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Jm=n=>{const e=Lt(n)?Number(n):NaN;return isNaN(e)?n:e};let mf;const Fo=()=>mf||(mf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jt(n){if(Xe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Lt(i)?ng(i):Jt(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Lt(n)||Mt(n))return n}const Qm=/;(?![^(]*\))/g,eg=/:([^]+)/,tg=/\/\*[^]*?\*\//g;function ng(n){const e={};return n.replace(tg,"").split(Qm).forEach(t=>{if(t){const i=t.split(eg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function it(n){let e="";if(Lt(n))e=n;else if(Xe(n))for(let t=0;t<n.length;t++){const i=it(n[t]);i&&(e+=i+" ")}else if(Mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ig="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rg=mu(ig);function Ad(n){return!!n||n===""}const wd=n=>!!(n&&n.__v_isRef===!0),Tt=n=>Lt(n)?n:n==null?"":Xe(n)||Mt(n)&&(n.toString===yd||!Ye(n.toString))?wd(n)?Tt(n.value):JSON.stringify(n,Cd,2):String(n),Cd=(n,e)=>wd(e)?Cd(n,e.value):ls(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[sl(i,s)+" =>"]=r,t),{})}:bd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>sl(t))}:ir(e)?sl(e):Mt(e)&&!Xe(e)&&!Ed(e)?String(e):e,sl=(n,e="")=>{var t;return ir(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let hn;class sg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=hn,!e&&hn&&(this.index=(hn.scopes||(hn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=hn;try{return hn=this,e()}finally{hn=t}}}on(){++this._on===1&&(this.prevScope=hn,hn=this)}off(){this._on>0&&--this._on===0&&(hn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function ag(){return hn}let bt;const al=new WeakSet;class Rd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,hn&&hn.active&&hn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,al.has(this)&&(al.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Dd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gf(this),Id(this);const e=bt,t=Vn;bt=this,Vn=!0;try{return this.fn()}finally{Ld(this),bt=e,Vn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Mu(e);this.deps=this.depsTail=void 0,gf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?al.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){tc(this)&&this.run()}get dirty(){return tc(this)}}let Pd=0,qs,Ys;function Dd(n,e=!1){if(n.flags|=8,e){n.next=Ys,Ys=n;return}n.next=qs,qs=n}function Su(){Pd++}function bu(){if(--Pd>0)return;if(Ys){let e=Ys;for(Ys=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;qs;){let e=qs;for(qs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Id(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ld(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Mu(i),og(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function tc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ud(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Ud(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ea)||(n.globalVersion=ea,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!tc(n))))return;n.flags|=2;const e=n.dep,t=bt,i=Vn;bt=n,Vn=!0;try{Id(n);const r=n.fn(n._value);(e.version===0||Qi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{bt=t,Vn=i,Ld(n),n.flags&=-3}}function Mu(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Mu(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function og(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Vn=!0;const Nd=[];function Pi(){Nd.push(Vn),Vn=!1}function Di(){const n=Nd.pop();Vn=n===void 0?!0:n}function gf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=bt;bt=void 0;try{e()}finally{bt=t}}}let ea=0;class lg{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class yu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!bt||!Vn||bt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==bt)t=this.activeLink=new lg(bt,this),bt.deps?(t.prevDep=bt.depsTail,bt.depsTail.nextDep=t,bt.depsTail=t):bt.deps=bt.depsTail=t,Fd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=bt.depsTail,t.nextDep=void 0,bt.depsTail.nextDep=t,bt.depsTail=t,bt.deps===t&&(bt.deps=i)}return t}trigger(e){this.version++,ea++,this.notify(e)}notify(e){Su();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{bu()}}}function Fd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Fd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const nc=new WeakMap,wr=Symbol(""),ic=Symbol(""),ta=Symbol("");function Kt(n,e,t){if(Vn&&bt){let i=nc.get(n);i||nc.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new yu),r.map=i,r.key=t),r.track()}}function Ai(n,e,t,i,r,s){const a=nc.get(n);if(!a){ea++;return}const o=l=>{l&&l.trigger()};if(Su(),e==="clear")a.forEach(o);else{const l=Xe(n),c=l&&vu(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===ta||!ir(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(ta)),e){case"add":l?c&&o(a.get("length")):(o(a.get(wr)),ls(n)&&o(a.get(ic)));break;case"delete":l||(o(a.get(wr)),ls(n)&&o(a.get(ic)));break;case"set":ls(n)&&o(a.get(wr));break}}bu()}function Or(n){const e=ct(n);return e===n?e:(Kt(e,"iterate",ta),Dn(n)?e:e.map(Wn))}function Oo(n){return Kt(n=ct(n),"iterate",ta),n}function qi(n,e){return Ii(n)?Cr(n)?ds(Wn(e)):ds(e):Wn(e)}const cg={__proto__:null,[Symbol.iterator](){return ol(this,Symbol.iterator,n=>qi(this,n))},concat(...n){return Or(this).concat(...n.map(e=>Xe(e)?Or(e):e))},entries(){return ol(this,"entries",n=>(n[1]=qi(this,n[1]),n))},every(n,e){return gi(this,"every",n,e,void 0,arguments)},filter(n,e){return gi(this,"filter",n,e,t=>t.map(i=>qi(this,i)),arguments)},find(n,e){return gi(this,"find",n,e,t=>qi(this,t),arguments)},findIndex(n,e){return gi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return gi(this,"findLast",n,e,t=>qi(this,t),arguments)},findLastIndex(n,e){return gi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return gi(this,"forEach",n,e,void 0,arguments)},includes(...n){return ll(this,"includes",n)},indexOf(...n){return ll(this,"indexOf",n)},join(n){return Or(this).join(n)},lastIndexOf(...n){return ll(this,"lastIndexOf",n)},map(n,e){return gi(this,"map",n,e,void 0,arguments)},pop(){return Cs(this,"pop")},push(...n){return Cs(this,"push",n)},reduce(n,...e){return _f(this,"reduce",n,e)},reduceRight(n,...e){return _f(this,"reduceRight",n,e)},shift(){return Cs(this,"shift")},some(n,e){return gi(this,"some",n,e,void 0,arguments)},splice(...n){return Cs(this,"splice",n)},toReversed(){return Or(this).toReversed()},toSorted(n){return Or(this).toSorted(n)},toSpliced(...n){return Or(this).toSpliced(...n)},unshift(...n){return Cs(this,"unshift",n)},values(){return ol(this,"values",n=>qi(this,n))}};function ol(n,e,t){const i=Oo(n),r=i[e]();return i!==n&&!Dn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const ug=Array.prototype;function gi(n,e,t,i,r,s){const a=Oo(n),o=a!==n&&!Dn(n),l=a[e];if(l!==ug[e]){const f=l.apply(n,s);return o?Wn(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,qi(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function _f(n,e,t,i){const r=Oo(n);let s=t;return r!==n&&(Dn(n)?t.length>3&&(s=function(a,o,l){return t.call(this,a,o,l,n)}):s=function(a,o,l){return t.call(this,a,qi(n,o),l,n)}),r[e](s,...i)}function ll(n,e,t){const i=ct(n);Kt(i,"iterate",ta);const r=i[e](...t);return(r===-1||r===!1)&&Au(t[0])?(t[0]=ct(t[0]),i[e](...t)):r}function Cs(n,e,t=[]){Pi(),Su();const i=ct(n)[e].apply(n,t);return bu(),Di(),i}const fg=mu("__proto__,__v_isRef,__isVue"),Od=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ir));function hg(n){ir(n)||(n=String(n));const e=ct(this);return Kt(e,"has",n),e.hasOwnProperty(n)}class kd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Mg:Hd:s?Vd:zd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Xe(e);if(!r){let l;if(a&&(l=cg[t]))return l;if(t==="hasOwnProperty")return hg}const o=Reflect.get(e,t,tn(e)?e:i);if((ir(t)?Od.has(t):fg(t))||(r||Kt(e,"get",t),s))return o;if(tn(o)){const l=a&&vu(t)?o:o.value;return r&&Mt(l)?sc(l):l}return Mt(o)?r?sc(o):ko(o):o}}class Bd extends kd{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=Xe(e)&&vu(t);if(!this._isShallow){const c=Ii(s);if(!Dn(i)&&!Ii(i)&&(s=ct(s),i=ct(i)),!a&&tn(s)&&!tn(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:ht(e,t),l=Reflect.set(e,t,i,tn(e)?e:r);return e===ct(r)&&(o?Qi(i,s)&&Ai(e,"set",t,i):Ai(e,"add",t,i)),l}deleteProperty(e,t){const i=ht(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Ai(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!ir(t)||!Od.has(t))&&Kt(e,"has",t),i}ownKeys(e){return Kt(e,"iterate",Xe(e)?"length":wr),Reflect.ownKeys(e)}}class dg extends kd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const pg=new Bd,mg=new dg,gg=new Bd(!0);const rc=n=>n,ba=n=>Reflect.getPrototypeOf(n);function _g(n,e,t){return function(...i){const r=this.__v_raw,s=ct(r),a=ls(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?rc:e?ds:Wn;return!e&&Kt(s,"iterate",l?ic:wr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Ma(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function vg(n,e){const t={get(r){const s=this.__v_raw,a=ct(s),o=ct(r);n||(Qi(r,o)&&Kt(a,"get",r),Kt(a,"get",o));const{has:l}=ba(a),c=e?rc:n?ds:Wn;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Kt(ct(r),"iterate",wr),r.size},has(r){const s=this.__v_raw,a=ct(s),o=ct(r);return n||(Qi(r,o)&&Kt(a,"has",r),Kt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=ct(o),c=e?rc:n?ds:Wn;return!n&&Kt(l,"iterate",wr),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return Vt(t,n?{add:Ma("add"),set:Ma("set"),delete:Ma("delete"),clear:Ma("clear")}:{add(r){!e&&!Dn(r)&&!Ii(r)&&(r=ct(r));const s=ct(this);return ba(s).has.call(s,r)||(s.add(r),Ai(s,"add",r,r)),this},set(r,s){!e&&!Dn(s)&&!Ii(s)&&(s=ct(s));const a=ct(this),{has:o,get:l}=ba(a);let c=o.call(a,r);c||(r=ct(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?Qi(s,u)&&Ai(a,"set",r,s):Ai(a,"add",r,s),this},delete(r){const s=ct(this),{has:a,get:o}=ba(s);let l=a.call(s,r);l||(r=ct(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Ai(s,"delete",r,void 0),c},clear(){const r=ct(this),s=r.size!==0,a=r.clear();return s&&Ai(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=_g(r,n,e)}),t}function Eu(n,e){const t=vg(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ht(t,r)&&r in i?t:i,r,s)}const xg={get:Eu(!1,!1)},Sg={get:Eu(!1,!0)},bg={get:Eu(!0,!1)};const zd=new WeakMap,Vd=new WeakMap,Hd=new WeakMap,Mg=new WeakMap;function yg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Eg(n){return n.__v_skip||!Object.isExtensible(n)?0:yg(jm(n))}function ko(n){return Ii(n)?n:Tu(n,!1,pg,xg,zd)}function Gd(n){return Tu(n,!1,gg,Sg,Vd)}function sc(n){return Tu(n,!0,mg,bg,Hd)}function Tu(n,e,t,i,r){if(!Mt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Eg(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function Cr(n){return Ii(n)?Cr(n.__v_raw):!!(n&&n.__v_isReactive)}function Ii(n){return!!(n&&n.__v_isReadonly)}function Dn(n){return!!(n&&n.__v_isShallow)}function Au(n){return n?!!n.__v_raw:!1}function ct(n){const e=n&&n.__v_raw;return e?ct(e):n}function Tg(n){return!ht(n,"__v_skip")&&Object.isExtensible(n)&&Td(n,"__v_skip",!0),n}const Wn=n=>Mt(n)?ko(n):n,ds=n=>Mt(n)?sc(n):n;function tn(n){return n?n.__v_isRef===!0:!1}function Ue(n){return Wd(n,!1)}function Ag(n){return Wd(n,!0)}function Wd(n,e){return tn(n)?n:new wg(n,e)}class wg{constructor(e,t){this.dep=new yu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ct(e),this._value=t?e:Wn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Dn(e)||Ii(e);e=i?e:ct(e),Qi(e,t)&&(this._rawValue=e,this._value=i?e:Wn(e),this.dep.trigger())}}function si(n){return tn(n)?n.value:n}const Cg={get:(n,e,t)=>e==="__v_raw"?n:si(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return tn(r)&&!tn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Xd(n){return Cr(n)?n:new Proxy(n,Cg)}class Rg{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new yu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ea-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&bt!==this)return Dd(this,!0),!0}get value(){const e=this.dep.track();return Ud(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Pg(n,e,t=!1){let i,r;return Ye(n)?i=n:(i=n.get,r=n.set),new Rg(i,r,t)}const ya={},ho=new WeakMap;let gr;function Dg(n,e=!1,t=gr){if(t){let i=ho.get(t);i||ho.set(t,i=[]),i.push(n)}}function Ig(n,e,t=xt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=S=>r?S:Dn(S)||r===!1||r===0?wi(S,1):wi(S);let u,f,h,p,g=!1,b=!1;if(tn(n)?(f=()=>n.value,g=Dn(n)):Cr(n)?(f=()=>c(n),g=!0):Xe(n)?(b=!0,g=n.some(S=>Cr(S)||Dn(S)),f=()=>n.map(S=>{if(tn(S))return S.value;if(Cr(S))return c(S);if(Ye(S))return l?l(S,2):S()})):Ye(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Pi();try{h()}finally{Di()}}const S=gr;gr=u;try{return l?l(n,3,[p]):n(p)}finally{gr=S}}:f=li,e&&r){const S=f,P=r===!0?1/0:r;f=()=>wi(S(),P)}const m=ag(),d=()=>{u.stop(),m&&m.active&&_u(m.effects,u)};if(s&&e){const S=e;e=(...P)=>{S(...P),d()}}let v=b?new Array(n.length).fill(ya):ya;const y=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const P=u.run();if(r||g||(b?P.some((T,I)=>Qi(T,v[I])):Qi(P,v))){h&&h();const T=gr;gr=u;try{const I=[P,v===ya?void 0:b&&v[0]===ya?[]:v,p];v=P,l?l(e,3,I):e(...I)}finally{gr=T}}}else u.run()};return o&&o(y),u=new Rd(f),u.scheduler=a?()=>a(y,!1):y,p=S=>Dg(S,!1,u),h=u.onStop=()=>{const S=ho.get(u);if(S){if(l)l(S,4);else for(const P of S)P();ho.delete(u)}},e?i?y(!0):v=u.run():a?a(y.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function wi(n,e=1/0,t){if(e<=0||!Mt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,tn(n))wi(n.value,e,t);else if(Xe(n))for(let i=0;i<n.length;i++)wi(n[i],e,t);else if(bd(n)||ls(n))n.forEach(i=>{wi(i,e,t)});else if(Ed(n)){for(const i in n)wi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&wi(n[i],e,t)}return n}function fa(n,e,t,i){try{return i?n(...i):n()}catch(r){Bo(r,e,t)}}function Xn(n,e,t,i){if(Ye(n)){const r=fa(n,e,t,i);return r&&Md(r)&&r.catch(s=>{Bo(s,e,t)}),r}if(Xe(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Xn(n[s],e,t,i));return r}}function Bo(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||xt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){Pi(),fa(s,null,10,[n,l,c]),Di();return}}Lg(n,t,r,i,a)}function Lg(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const cn=[];let ei=-1;const cs=[];let Yi=null,is=0;const $d=Promise.resolve();let po=null;function Wt(n){const e=po||$d;return n?e.then(this?n.bind(this):n):e}function Ug(n){let e=ei+1,t=cn.length;for(;e<t;){const i=e+t>>>1,r=cn[i],s=na(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function wu(n){if(!(n.flags&1)){const e=na(n),t=cn[cn.length-1];!t||!(n.flags&2)&&e>=na(t)?cn.push(n):cn.splice(Ug(e),0,n),n.flags|=1,qd()}}function qd(){po||(po=$d.then(jd))}function Ng(n){Xe(n)?cs.push(...n):Yi&&n.id===-1?Yi.splice(is+1,0,n):n.flags&1||(cs.push(n),n.flags|=1),qd()}function vf(n,e,t=ei+1){for(;t<cn.length;t++){const i=cn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;cn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Yd(n){if(cs.length){const e=[...new Set(cs)].sort((t,i)=>na(t)-na(i));if(cs.length=0,Yi){Yi.push(...e);return}for(Yi=e,is=0;is<Yi.length;is++){const t=Yi[is];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Yi=null,is=0}}const na=n=>n.id==null?n.flags&2?-1:1/0:n.id;function jd(n){try{for(ei=0;ei<cn.length;ei++){const e=cn[ei];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),fa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ei<cn.length;ei++){const e=cn[ei];e&&(e.flags&=-2)}ei=-1,cn.length=0,Yd(),po=null,(cn.length||cs.length)&&jd()}}let bn=null,Kd=null;function mo(n){const e=bn;return bn=n,Kd=n&&n.type.__scopeId||null,e}function Gt(n,e=bn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&vo(-1);const s=mo(e);let a;try{a=n(...r)}finally{mo(s),i._d&&vo(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function yn(n,e){if(bn===null)return n;const t=Xo(bn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=xt]=e[r];s&&(Ye(s)&&(s={mounted:s,updated:s}),s.deep&&wi(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function ar(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Pi(),Xn(l,t,8,[n.el,o,n,e]),Di())}}function eo(n,e){if(Zt){let t=Zt.provides;const i=Zt.parent&&Zt.parent.provides;i===t&&(t=Zt.provides=Object.create(i)),t[n]=e}}function Hn(n,e,t=!1){const i=Rp();if(i||us){let r=us?us._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ye(e)?e.call(i&&i.proxy):e}}const Fg=Symbol.for("v-scx"),Og=()=>Hn(Fg);function ci(n,e,t){return Zd(n,e,t)}function Zd(n,e,t=xt){const{immediate:i,deep:r,flush:s,once:a}=t,o=Vt({},t),l=e&&i||!e&&s!=="post";let c;if(sa){if(s==="sync"){const p=Og();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=li,p.resume=li,p.pause=li,p}}const u=Zt;o.call=(p,g,b)=>Xn(p,u,g,b);let f=!1;s==="post"?o.scheduler=p=>{Sn(p,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(p,g)=>{g?p():wu(p)}),o.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=Ig(n,e,o);return sa&&(c?c.push(h):l&&h()),h}function kg(n,e,t){const i=this.proxy,r=Lt(n)?n.includes(".")?Jd(i,n):()=>i[n]:n.bind(i,i);let s;Ye(e)?s=e:(s=e.handler,t=e);const a=pa(this),o=Zd(r,s.bind(i),t);return a(),o}function Jd(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Bg=Symbol("_vte"),Qd=n=>n.__isTeleport,Ti=Symbol("_leaveCb"),Ea=Symbol("_enterCb");function zg(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Yn(()=>{n.isMounted=!0}),Ho(()=>{n.isUnmounting=!0}),n}const Tn=[Function,Array],ep={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Tn,onEnter:Tn,onAfterEnter:Tn,onEnterCancelled:Tn,onBeforeLeave:Tn,onLeave:Tn,onAfterLeave:Tn,onLeaveCancelled:Tn,onBeforeAppear:Tn,onAppear:Tn,onAfterAppear:Tn,onAppearCancelled:Tn},tp=n=>{const e=n.subTree;return e.component?tp(e.component):e},Vg={name:"BaseTransition",props:ep,setup(n,{slots:e}){const t=Rp(),i=zg();return()=>{const r=e.default&&rp(e.default(),!0);if(!r||!r.length)return;const s=np(r),a=ct(n),{mode:o}=a;if(i.isLeaving)return cl(s);const l=xf(s);if(!l)return cl(s);let c=ac(l,a,i,t,f=>c=f);l.type!==un&&ia(l,c);let u=t.subTree&&xf(t.subTree);if(u&&u.type!==un&&!vr(u,l)&&tp(t).type!==un){let f=ac(u,a,i,t);if(ia(u,f),o==="out-in"&&l.type!==un)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},cl(s);o==="in-out"&&l.type!==un?f.delayLeave=(h,p,g)=>{const b=ip(i,u);b[String(u.key)]=u,h[Ti]=()=>{p(),h[Ti]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function np(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==un){e=t;break}}return e}const Hg=Vg;function ip(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function ac(n,e,t,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:g,onLeaveCancelled:b,onBeforeAppear:m,onAppear:d,onAfterAppear:v,onAppearCancelled:y}=e,S=String(n.key),P=ip(t,n),T=(A,K)=>{A&&Xn(A,i,9,K)},I=(A,K)=>{const D=K[1];T(A,K),Xe(A)?A.every(F=>F.length<=1)&&D():A.length<=1&&D()},x={mode:a,persisted:o,beforeEnter(A){let K=l;if(!t.isMounted)if(s)K=m||l;else return;A[Ti]&&A[Ti](!0);const D=P[S];D&&vr(n,D)&&D.el[Ti]&&D.el[Ti](),T(K,[A])},enter(A){let K=c,D=u,F=f;if(!t.isMounted)if(s)K=d||c,D=v||u,F=y||f;else return;let z=!1;const Z=A[Ea]=W=>{z||(z=!0,W?T(F,[A]):T(D,[A]),x.delayedLeave&&x.delayedLeave(),A[Ea]=void 0)};K?I(K,[A,Z]):Z()},leave(A,K){const D=String(n.key);if(A[Ea]&&A[Ea](!0),t.isUnmounting)return K();T(h,[A]);let F=!1;const z=A[Ti]=Z=>{F||(F=!0,K(),Z?T(b,[A]):T(g,[A]),A[Ti]=void 0,P[D]===n&&delete P[D])};P[D]=n,p?I(p,[A,z]):z()},clone(A){const K=ac(A,e,t,i,r);return r&&r(K),K}};return x}function cl(n){if(zo(n))return n=tr(n),n.children=null,n}function xf(n){if(!zo(n))return Qd(n.type)&&n.children?np(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ye(t.default))return t.default()}}function ia(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ia(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function rp(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===Et?(a.patchFlag&128&&r++,i=i.concat(rp(a.children,e,o))):(e||a.type!==un)&&i.push(o!=null?tr(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function sp(n,e){return Ye(n)?Vt({name:n.name},e,{setup:n}):n}function ap(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const go=new WeakMap;function js(n,e,t,i,r=!1){if(Xe(n)){n.forEach((g,b)=>js(g,e&&(Xe(e)?e[b]:e),t,i,r));return}if(Ks(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&js(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Xo(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===xt?o.refs={}:o.refs,f=o.setupState,h=ct(f),p=f===xt?Sd:g=>ht(h,g);if(c!=null&&c!==l){if(Sf(e),Lt(c))u[c]=null,p(c)&&(f[c]=null);else if(tn(c)){c.value=null;const g=e;g.k&&(u[g.k]=null)}}if(Ye(l))fa(l,o,12,[a,u]);else{const g=Lt(l),b=tn(l);if(g||b){const m=()=>{if(n.f){const d=g?p(l)?f[l]:u[l]:l.value;if(r)Xe(d)&&_u(d,s);else if(Xe(d))d.includes(s)||d.push(s);else if(g)u[l]=[s],p(l)&&(f[l]=u[l]);else{const v=[s];l.value=v,n.k&&(u[n.k]=v)}}else g?(u[l]=a,p(l)&&(f[l]=a)):b&&(l.value=a,n.k&&(u[n.k]=a))};if(a){const d=()=>{m(),go.delete(n)};d.id=-1,go.set(n,d),Sn(d,t)}else Sf(n),m()}}}function Sf(n){const e=go.get(n);e&&(e.flags|=8,go.delete(n))}Fo().requestIdleCallback;Fo().cancelIdleCallback;const Ks=n=>!!n.type.__asyncLoader,zo=n=>n.type.__isKeepAlive;function Gg(n,e){op(n,"a",e)}function Wg(n,e){op(n,"da",e)}function op(n,e,t=Zt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Vo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)zo(r.parent.vnode)&&Xg(i,e,t,r),r=r.parent}}function Xg(n,e,t,i){const r=Vo(e,n,i,!0);Lr(()=>{_u(i[e],r)},t)}function Vo(n,e,t=Zt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Pi();const o=pa(t),l=Xn(e,t,n,a);return o(),Di(),l});return i?r.unshift(s):r.push(s),s}}const Ni=n=>(e,t=Zt)=>{(!sa||n==="sp")&&Vo(n,(...i)=>e(...i),t)},$g=Ni("bm"),Yn=Ni("m"),qg=Ni("bu"),Yg=Ni("u"),Ho=Ni("bum"),Lr=Ni("um"),jg=Ni("sp"),Kg=Ni("rtg"),Zg=Ni("rtc");function Jg(n,e=Zt){Vo("ec",n,e)}const lp="components",Qg="directives";function ha(n,e){return cp(lp,n,!0,e)||n}const e0=Symbol.for("v-ndc");function da(n){return cp(Qg,n)}function cp(n,e,t=!0,i=!1){const r=bn||Zt;if(r){const s=r.type;if(n===lp){const o=k0(s,!1);if(o&&(o===e||o===Ln(e)||o===No(Ln(e))))return s}const a=bf(r[n]||s[n],e)||bf(r.appContext[n],e);return!a&&i?s:a}}function bf(n,e){return n&&(n[e]||n[Ln(e)]||n[No(Ln(e))])}function hi(n,e,t,i){let r;const s=t,a=Xe(n);if(a||Lt(n)){const o=a&&Cr(n);let l=!1,c=!1;o&&(l=!Dn(n),c=Ii(n),n=Oo(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?ds(Wn(n[u])):Wn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(Mt(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const oc=n=>n?Pp(n)?Xo(n):oc(n.parent):null,Zs=Vt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>oc(n.parent),$root:n=>oc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>fp(n),$forceUpdate:n=>n.f||(n.f=()=>{wu(n.update)}),$nextTick:n=>n.n||(n.n=Wt.bind(n.proxy)),$watch:n=>kg.bind(n)}),ul=(n,e)=>n!==xt&&!n.__isScriptSetup&&ht(n,e),t0={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ul(i,e))return a[e]=1,i[e];if(r!==xt&&ht(r,e))return a[e]=2,r[e];if(ht(s,e))return a[e]=3,s[e];if(t!==xt&&ht(t,e))return a[e]=4,t[e];lc&&(a[e]=0)}}const c=Zs[e];let u,f;if(c)return e==="$attrs"&&Kt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==xt&&ht(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,ht(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return ul(r,e)?(r[e]=t,!0):i!==xt&&ht(i,e)?(i[e]=t,!0):ht(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==xt&&o[0]!=="$"&&ht(n,o)||ul(e,o)||ht(s,o)||ht(i,o)||ht(Zs,o)||ht(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ht(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Mf(n){return Xe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let lc=!0;function n0(n){const e=fp(n),t=n.proxy,i=n.ctx;lc=!1,e.beforeCreate&&yf(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:b,deactivated:m,beforeDestroy:d,beforeUnmount:v,destroyed:y,unmounted:S,render:P,renderTracked:T,renderTriggered:I,errorCaptured:x,serverPrefetch:A,expose:K,inheritAttrs:D,components:F,directives:z,filters:Z}=e;if(c&&i0(c,i,null),a)for(const k in a){const oe=a[k];Ye(oe)&&(i[k]=oe.bind(t))}if(r){const k=r.call(t,t);Mt(k)&&(n.data=ko(k))}if(lc=!0,s)for(const k in s){const oe=s[k],he=Ye(oe)?oe.bind(t,t):Ye(oe.get)?oe.get.bind(t,t):li,ge=!Ye(oe)&&Ye(oe.set)?oe.set.bind(t):li,Me=wt({get:he,set:ge});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>Me.value,set:xe=>Me.value=xe})}if(o)for(const k in o)up(o[k],i,t,k);if(l){const k=Ye(l)?l.call(t):l;Reflect.ownKeys(k).forEach(oe=>{eo(oe,k[oe])})}u&&yf(u,n,"c");function X(k,oe){Xe(oe)?oe.forEach(he=>k(he.bind(t))):oe&&k(oe.bind(t))}if(X($g,f),X(Yn,h),X(qg,p),X(Yg,g),X(Gg,b),X(Wg,m),X(Jg,x),X(Zg,T),X(Kg,I),X(Ho,v),X(Lr,S),X(jg,A),Xe(K))if(K.length){const k=n.exposed||(n.exposed={});K.forEach(oe=>{Object.defineProperty(k,oe,{get:()=>t[oe],set:he=>t[oe]=he,enumerable:!0})})}else n.exposed||(n.exposed={});P&&n.render===li&&(n.render=P),D!=null&&(n.inheritAttrs=D),F&&(n.components=F),z&&(n.directives=z),A&&ap(n)}function i0(n,e,t=li){Xe(n)&&(n=cc(n));for(const i in n){const r=n[i];let s;Mt(r)?"default"in r?s=Hn(r.from||i,r.default,!0):s=Hn(r.from||i):s=Hn(r),tn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function yf(n,e,t){Xn(Xe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function up(n,e,t,i){let r=i.includes(".")?Jd(t,i):()=>t[i];if(Lt(n)){const s=e[n];Ye(s)&&ci(r,s)}else if(Ye(n))ci(r,n.bind(t));else if(Mt(n))if(Xe(n))n.forEach(s=>up(s,e,t,i));else{const s=Ye(n.handler)?n.handler.bind(t):e[n.handler];Ye(s)&&ci(r,s,n)}}function fp(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>_o(l,c,a,!0)),_o(l,e,a)),Mt(e)&&s.set(e,l),l}function _o(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&_o(n,s,t,!0),r&&r.forEach(a=>_o(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=r0[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const r0={data:Ef,props:Tf,emits:Tf,methods:Hs,computed:Hs,beforeCreate:an,created:an,beforeMount:an,mounted:an,beforeUpdate:an,updated:an,beforeDestroy:an,beforeUnmount:an,destroyed:an,unmounted:an,activated:an,deactivated:an,errorCaptured:an,serverPrefetch:an,components:Hs,directives:Hs,watch:a0,provide:Ef,inject:s0};function Ef(n,e){return e?n?function(){return Vt(Ye(n)?n.call(this,this):n,Ye(e)?e.call(this,this):e)}:e:n}function s0(n,e){return Hs(cc(n),cc(e))}function cc(n){if(Xe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function an(n,e){return n?[...new Set([].concat(n,e))]:e}function Hs(n,e){return n?Vt(Object.create(null),n,e):e}function Tf(n,e){return n?Xe(n)&&Xe(e)?[...new Set([...n,...e])]:Vt(Object.create(null),Mf(n),Mf(e??{})):e}function a0(n,e){if(!n)return e;if(!e)return n;const t=Vt(Object.create(null),n);for(const i in e)t[i]=an(n[i],e[i]);return t}function hp(){return{app:null,config:{isNativeTag:Sd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let o0=0;function l0(n,e){return function(i,r=null){Ye(i)||(i=Vt({},i)),r!=null&&!Mt(r)&&(r=null);const s=hp(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:o0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:z0,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&Ye(u.install)?(a.add(u),u.install(c,...f)):Ye(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||nt(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Xo(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Xn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=us;us=c;try{return u()}finally{us=f}}};return c}}let us=null;const c0=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Ln(e)}Modifiers`]||n[`${Ir(e)}Modifiers`];function u0(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||xt;let r=t;const s=e.startsWith("update:"),a=s&&c0(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>Lt(u)?u.trim():u)),a.number&&(r=t.map(xu)));let o,l=i[o=rl(e)]||i[o=rl(Ln(e))];!l&&s&&(l=i[o=rl(Ir(e))]),l&&Xn(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Xn(c,n,6,r)}}const f0=new WeakMap;function dp(n,e,t=!1){const i=t?f0:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Ye(n)){const l=c=>{const u=dp(c,e,!0);u&&(o=!0,Vt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(Mt(n)&&i.set(n,null),null):(Xe(s)?s.forEach(l=>a[l]=null):Vt(a,s),Mt(n)&&i.set(n,a),a)}function Go(n,e){return!n||!Io(e)?!1:(e=e.slice(2).replace(/Once$/,""),ht(n,e[0].toLowerCase()+e.slice(1))||ht(n,Ir(e))||ht(n,e))}function Af(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:g,inheritAttrs:b}=n,m=mo(n);let d,v;try{if(t.shapeFlag&4){const S=r||i,P=S;d=ti(c.call(P,S,u,f,p,h,g)),v=o}else{const S=e;d=ti(S.length>1?S(f,{attrs:o,slots:a,emit:l}):S(f,null)),v=e.props?o:h0(o)}}catch(S){Js.length=0,Bo(S,n,1),d=nt(un)}let y=d;if(v&&b!==!1){const S=Object.keys(v),{shapeFlag:P}=y;S.length&&P&7&&(s&&S.some(gu)&&(v=d0(v,s)),y=tr(y,v,!1,!0))}return t.dirs&&(y=tr(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&ia(y,t.transition),d=y,mo(m),d}const h0=n=>{let e;for(const t in n)(t==="class"||t==="style"||Io(t))&&((e||(e={}))[t]=n[t]);return e},d0=(n,e)=>{const t={};for(const i in n)(!gu(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function p0(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?wf(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!Go(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?wf(i,a,c):!0:!!a;return!1}function wf(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Go(t,s))return!0}return!1}function m0({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const pp={},mp=()=>Object.create(pp),gp=n=>Object.getPrototypeOf(n)===pp;function g0(n,e,t,i=!1){const r={},s=mp();n.propsDefaults=Object.create(null),_p(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Gd(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function _0(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=ct(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Go(n.emitsOptions,h))continue;const p=e[h];if(l)if(ht(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const g=Ln(h);r[g]=uc(l,o,g,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{_p(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!ht(e,f)&&((u=Ir(f))===f||!ht(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=uc(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!ht(e,f))&&(delete s[f],c=!0)}c&&Ai(n.attrs,"set","")}function _p(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if($s(l))continue;const c=e[l];let u;r&&ht(r,u=Ln(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Go(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=ct(t),c=o||xt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=uc(r,l,f,c[f],n,!ht(c,f))}}return a}function uc(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=ht(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ye(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=pa(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Ir(t))&&(i=!0))}return i}const v0=new WeakMap;function vp(n,e,t=!1){const i=t?v0:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Ye(n)){const u=f=>{l=!0;const[h,p]=vp(f,e,!0);Vt(a,h),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return Mt(n)&&i.set(n,os),os;if(Xe(s))for(let u=0;u<s.length;u++){const f=Ln(s[u]);Cf(f)&&(a[f]=xt)}else if(s)for(const u in s){const f=Ln(u);if(Cf(f)){const h=s[u],p=a[f]=Xe(h)||Ye(h)?{type:h}:Vt({},h),g=p.type;let b=!1,m=!0;if(Xe(g))for(let d=0;d<g.length;++d){const v=g[d],y=Ye(v)&&v.name;if(y==="Boolean"){b=!0;break}else y==="String"&&(m=!1)}else b=Ye(g)&&g.name==="Boolean";p[0]=b,p[1]=m,(b||ht(p,"default"))&&o.push(f)}}const c=[a,o];return Mt(n)&&i.set(n,c),c}function Cf(n){return n[0]!=="$"&&!$s(n)}const Cu=n=>n==="_"||n==="_ctx"||n==="$stable",Ru=n=>Xe(n)?n.map(ti):[ti(n)],x0=(n,e,t)=>{if(e._n)return e;const i=Gt((...r)=>Ru(e(...r)),t);return i._c=!1,i},xp=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Cu(r))continue;const s=n[r];if(Ye(s))e[r]=x0(r,s,i);else if(s!=null){const a=Ru(s);e[r]=()=>a}}},Sp=(n,e)=>{const t=Ru(e);n.slots.default=()=>t},bp=(n,e,t)=>{for(const i in e)(t||!Cu(i))&&(n[i]=e[i])},S0=(n,e,t)=>{const i=n.slots=mp();if(n.vnode.shapeFlag&32){const r=e._;r?(bp(i,e,t),t&&Td(i,"_",r,!0)):xp(e,i)}else e&&Sp(n,e)},b0=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=xt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:bp(r,e,t):(s=!e.$stable,xp(e,r)),a=e}else e&&(Sp(n,e),a={default:1});if(s)for(const o in r)!Cu(o)&&a[o]==null&&delete r[o]},Sn=A0;function M0(n){return y0(n)}function y0(n,e){const t=Fo();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=li,insertStaticContent:g}=n,b=(R,w,N,H=null,L=null,$=null,C=void 0,fe=null,se=!!w.dynamicChildren)=>{if(R===w)return;R&&!vr(R,w)&&(H=U(R),xe(R,L,$,!0),R=null),w.patchFlag===-2&&(se=!1,w.dynamicChildren=null);const{type:re,ref:ce,shapeFlag:M}=w;switch(re){case Wo:m(R,w,N,H);break;case un:d(R,w,N,H);break;case to:R==null&&v(w,N,H,C);break;case Et:F(R,w,N,H,L,$,C,fe,se);break;default:M&1?P(R,w,N,H,L,$,C,fe,se):M&6?z(R,w,N,H,L,$,C,fe,se):(M&64||M&128)&&re.process(R,w,N,H,L,$,C,fe,se,ue)}ce!=null&&L?js(ce,R&&R.ref,$,w||R,!w):ce==null&&R&&R.ref!=null&&js(R.ref,null,$,R,!0)},m=(R,w,N,H)=>{if(R==null)i(w.el=o(w.children),N,H);else{const L=w.el=R.el;w.children!==R.children&&c(L,w.children)}},d=(R,w,N,H)=>{R==null?i(w.el=l(w.children||""),N,H):w.el=R.el},v=(R,w,N,H)=>{[R.el,R.anchor]=g(R.children,w,N,H,R.el,R.anchor)},y=({el:R,anchor:w},N,H)=>{let L;for(;R&&R!==w;)L=h(R),i(R,N,H),R=L;i(w,N,H)},S=({el:R,anchor:w})=>{let N;for(;R&&R!==w;)N=h(R),r(R),R=N;r(w)},P=(R,w,N,H,L,$,C,fe,se)=>{if(w.type==="svg"?C="svg":w.type==="math"&&(C="mathml"),R==null)T(w,N,H,L,$,C,fe,se);else{const re=R.el&&R.el._isVueCE?R.el:null;try{re&&re._beginPatch(),A(R,w,L,$,C,fe,se)}finally{re&&re._endPatch()}}},T=(R,w,N,H,L,$,C,fe)=>{let se,re;const{props:ce,shapeFlag:M,transition:_,dirs:O}=R;if(se=R.el=a(R.type,$,ce&&ce.is,ce),M&8?u(se,R.children):M&16&&x(R.children,se,null,H,L,fl(R,$),C,fe),O&&ar(R,null,H,"created"),I(se,R,R.scopeId,C,H),ce){for(const ae in ce)ae!=="value"&&!$s(ae)&&s(se,ae,null,ce[ae],$,H);"value"in ce&&s(se,"value",null,ce.value,$),(re=ce.onVnodeBeforeMount)&&Kn(re,H,R)}O&&ar(R,null,H,"beforeMount");const J=E0(L,_);J&&_.beforeEnter(se),i(se,w,N),((re=ce&&ce.onVnodeMounted)||J||O)&&Sn(()=>{re&&Kn(re,H,R),J&&_.enter(se),O&&ar(R,null,H,"mounted")},L)},I=(R,w,N,H,L)=>{if(N&&p(R,N),H)for(let $=0;$<H.length;$++)p(R,H[$]);if(L){let $=L.subTree;if(w===$||Tp($.type)&&($.ssContent===w||$.ssFallback===w)){const C=L.vnode;I(R,C,C.scopeId,C.slotScopeIds,L.parent)}}},x=(R,w,N,H,L,$,C,fe,se=0)=>{for(let re=se;re<R.length;re++){const ce=R[re]=fe?ji(R[re]):ti(R[re]);b(null,ce,w,N,H,L,$,C,fe)}},A=(R,w,N,H,L,$,C)=>{const fe=w.el=R.el;let{patchFlag:se,dynamicChildren:re,dirs:ce}=w;se|=R.patchFlag&16;const M=R.props||xt,_=w.props||xt;let O;if(N&&or(N,!1),(O=_.onVnodeBeforeUpdate)&&Kn(O,N,w,R),ce&&ar(w,R,N,"beforeUpdate"),N&&or(N,!0),(M.innerHTML&&_.innerHTML==null||M.textContent&&_.textContent==null)&&u(fe,""),re?K(R.dynamicChildren,re,fe,N,H,fl(w,L),$):C||oe(R,w,fe,null,N,H,fl(w,L),$,!1),se>0){if(se&16)D(fe,M,_,N,L);else if(se&2&&M.class!==_.class&&s(fe,"class",null,_.class,L),se&4&&s(fe,"style",M.style,_.style,L),se&8){const J=w.dynamicProps;for(let ae=0;ae<J.length;ae++){const Q=J[ae],ye=M[Q],pe=_[Q];(pe!==ye||Q==="value")&&s(fe,Q,ye,pe,L,N)}}se&1&&R.children!==w.children&&u(fe,w.children)}else!C&&re==null&&D(fe,M,_,N,L);((O=_.onVnodeUpdated)||ce)&&Sn(()=>{O&&Kn(O,N,w,R),ce&&ar(w,R,N,"updated")},H)},K=(R,w,N,H,L,$,C)=>{for(let fe=0;fe<w.length;fe++){const se=R[fe],re=w[fe],ce=se.el&&(se.type===Et||!vr(se,re)||se.shapeFlag&198)?f(se.el):N;b(se,re,ce,null,H,L,$,C,!0)}},D=(R,w,N,H,L)=>{if(w!==N){if(w!==xt)for(const $ in w)!$s($)&&!($ in N)&&s(R,$,w[$],null,L,H);for(const $ in N){if($s($))continue;const C=N[$],fe=w[$];C!==fe&&$!=="value"&&s(R,$,fe,C,L,H)}"value"in N&&s(R,"value",w.value,N.value,L)}},F=(R,w,N,H,L,$,C,fe,se)=>{const re=w.el=R?R.el:o(""),ce=w.anchor=R?R.anchor:o("");let{patchFlag:M,dynamicChildren:_,slotScopeIds:O}=w;O&&(fe=fe?fe.concat(O):O),R==null?(i(re,N,H),i(ce,N,H),x(w.children||[],N,ce,L,$,C,fe,se)):M>0&&M&64&&_&&R.dynamicChildren&&R.dynamicChildren.length===_.length?(K(R.dynamicChildren,_,N,L,$,C,fe),(w.key!=null||L&&w===L.subTree)&&Mp(R,w,!0)):oe(R,w,N,ce,L,$,C,fe,se)},z=(R,w,N,H,L,$,C,fe,se)=>{w.slotScopeIds=fe,R==null?w.shapeFlag&512?L.ctx.activate(w,N,H,C,se):Z(w,N,H,L,$,C,se):W(R,w,se)},Z=(R,w,N,H,L,$,C)=>{const fe=R.component=L0(R,H,L);if(zo(R)&&(fe.ctx.renderer=ue),U0(fe,!1,C),fe.asyncDep){if(L&&L.registerDep(fe,X,C),!R.el){const se=fe.subTree=nt(un);d(null,se,w,N),R.placeholder=se.el}}else X(fe,R,w,N,L,$,C)},W=(R,w,N)=>{const H=w.component=R.component;if(p0(R,w,N))if(H.asyncDep&&!H.asyncResolved){k(H,w,N);return}else H.next=w,H.update();else w.el=R.el,H.vnode=w},X=(R,w,N,H,L,$,C)=>{const fe=()=>{if(R.isMounted){let{next:M,bu:_,u:O,parent:J,vnode:ae}=R;{const ke=yp(R);if(ke){M&&(M.el=ae.el,k(R,M,C)),ke.asyncDep.then(()=>{R.isUnmounted||fe()});return}}let Q=M,ye;or(R,!1),M?(M.el=ae.el,k(R,M,C)):M=ae,_&&Qa(_),(ye=M.props&&M.props.onVnodeBeforeUpdate)&&Kn(ye,J,M,ae),or(R,!0);const pe=Af(R),Ie=R.subTree;R.subTree=pe,b(Ie,pe,f(Ie.el),U(Ie),R,L,$),M.el=pe.el,Q===null&&m0(R,pe.el),O&&Sn(O,L),(ye=M.props&&M.props.onVnodeUpdated)&&Sn(()=>Kn(ye,J,M,ae),L)}else{let M;const{el:_,props:O}=w,{bm:J,m:ae,parent:Q,root:ye,type:pe}=R,Ie=Ks(w);or(R,!1),J&&Qa(J),!Ie&&(M=O&&O.onVnodeBeforeMount)&&Kn(M,Q,w),or(R,!0);{ye.ce&&ye.ce._def.shadowRoot!==!1&&ye.ce._injectChildStyle(pe);const ke=R.subTree=Af(R);b(null,ke,N,H,R,L,$),w.el=ke.el}if(ae&&Sn(ae,L),!Ie&&(M=O&&O.onVnodeMounted)){const ke=w;Sn(()=>Kn(M,Q,ke),L)}(w.shapeFlag&256||Q&&Ks(Q.vnode)&&Q.vnode.shapeFlag&256)&&R.a&&Sn(R.a,L),R.isMounted=!0,w=N=H=null}};R.scope.on();const se=R.effect=new Rd(fe);R.scope.off();const re=R.update=se.run.bind(se),ce=R.job=se.runIfDirty.bind(se);ce.i=R,ce.id=R.uid,se.scheduler=()=>wu(ce),or(R,!0),re()},k=(R,w,N)=>{w.component=R;const H=R.vnode.props;R.vnode=w,R.next=null,_0(R,w.props,H,N),b0(R,w.children,N),Pi(),vf(R),Di()},oe=(R,w,N,H,L,$,C,fe,se=!1)=>{const re=R&&R.children,ce=R?R.shapeFlag:0,M=w.children,{patchFlag:_,shapeFlag:O}=w;if(_>0){if(_&128){ge(re,M,N,H,L,$,C,fe,se);return}else if(_&256){he(re,M,N,H,L,$,C,fe,se);return}}O&8?(ce&16&&V(re,L,$),M!==re&&u(N,M)):ce&16?O&16?ge(re,M,N,H,L,$,C,fe,se):V(re,L,$,!0):(ce&8&&u(N,""),O&16&&x(M,N,H,L,$,C,fe,se))},he=(R,w,N,H,L,$,C,fe,se)=>{R=R||os,w=w||os;const re=R.length,ce=w.length,M=Math.min(re,ce);let _;for(_=0;_<M;_++){const O=w[_]=se?ji(w[_]):ti(w[_]);b(R[_],O,N,null,L,$,C,fe,se)}re>ce?V(R,L,$,!0,!1,M):x(w,N,H,L,$,C,fe,se,M)},ge=(R,w,N,H,L,$,C,fe,se)=>{let re=0;const ce=w.length;let M=R.length-1,_=ce-1;for(;re<=M&&re<=_;){const O=R[re],J=w[re]=se?ji(w[re]):ti(w[re]);if(vr(O,J))b(O,J,N,null,L,$,C,fe,se);else break;re++}for(;re<=M&&re<=_;){const O=R[M],J=w[_]=se?ji(w[_]):ti(w[_]);if(vr(O,J))b(O,J,N,null,L,$,C,fe,se);else break;M--,_--}if(re>M){if(re<=_){const O=_+1,J=O<ce?w[O].el:H;for(;re<=_;)b(null,w[re]=se?ji(w[re]):ti(w[re]),N,J,L,$,C,fe,se),re++}}else if(re>_)for(;re<=M;)xe(R[re],L,$,!0),re++;else{const O=re,J=re,ae=new Map;for(re=J;re<=_;re++){const Ee=w[re]=se?ji(w[re]):ti(w[re]);Ee.key!=null&&ae.set(Ee.key,re)}let Q,ye=0;const pe=_-J+1;let Ie=!1,ke=0;const de=new Array(pe);for(re=0;re<pe;re++)de[re]=0;for(re=O;re<=M;re++){const Ee=R[re];if(ye>=pe){xe(Ee,L,$,!0);continue}let Ce;if(Ee.key!=null)Ce=ae.get(Ee.key);else for(Q=J;Q<=_;Q++)if(de[Q-J]===0&&vr(Ee,w[Q])){Ce=Q;break}Ce===void 0?xe(Ee,L,$,!0):(de[Ce-J]=re+1,Ce>=ke?ke=Ce:Ie=!0,b(Ee,w[Ce],N,null,L,$,C,fe,se),ye++)}const ve=Ie?T0(de):os;for(Q=ve.length-1,re=pe-1;re>=0;re--){const Ee=J+re,Ce=w[Ee],Re=w[Ee+1],Ke=Ee+1<ce?Re.el||Ep(Re):H;de[re]===0?b(null,Ce,N,Ke,L,$,C,fe,se):Ie&&(Q<0||re!==ve[Q]?Me(Ce,N,Ke,2):Q--)}}},Me=(R,w,N,H,L=null)=>{const{el:$,type:C,transition:fe,children:se,shapeFlag:re}=R;if(re&6){Me(R.component.subTree,w,N,H);return}if(re&128){R.suspense.move(w,N,H);return}if(re&64){C.move(R,w,N,ue);return}if(C===Et){i($,w,N);for(let M=0;M<se.length;M++)Me(se[M],w,N,H);i(R.anchor,w,N);return}if(C===to){y(R,w,N);return}if(H!==2&&re&1&&fe)if(H===0)fe.beforeEnter($),i($,w,N),Sn(()=>fe.enter($),L);else{const{leave:M,delayLeave:_,afterLeave:O}=fe,J=()=>{R.ctx.isUnmounted?r($):i($,w,N)},ae=()=>{$._isLeaving&&$[Ti](!0),M($,()=>{J(),O&&O()})};_?_($,J,ae):ae()}else i($,w,N)},xe=(R,w,N,H=!1,L=!1)=>{const{type:$,props:C,ref:fe,children:se,dynamicChildren:re,shapeFlag:ce,patchFlag:M,dirs:_,cacheIndex:O}=R;if(M===-2&&(L=!1),fe!=null&&(Pi(),js(fe,null,N,R,!0),Di()),O!=null&&(w.renderCache[O]=void 0),ce&256){w.ctx.deactivate(R);return}const J=ce&1&&_,ae=!Ks(R);let Q;if(ae&&(Q=C&&C.onVnodeBeforeUnmount)&&Kn(Q,w,R),ce&6)je(R.component,N,H);else{if(ce&128){R.suspense.unmount(N,H);return}J&&ar(R,null,w,"beforeUnmount"),ce&64?R.type.remove(R,w,N,ue,H):re&&!re.hasOnce&&($!==Et||M>0&&M&64)?V(re,w,N,!1,!0):($===Et&&M&384||!L&&ce&16)&&V(se,w,N),H&&He(R)}(ae&&(Q=C&&C.onVnodeUnmounted)||J)&&Sn(()=>{Q&&Kn(Q,w,R),J&&ar(R,null,w,"unmounted")},N)},He=R=>{const{type:w,el:N,anchor:H,transition:L}=R;if(w===Et){et(N,H);return}if(w===to){S(R);return}const $=()=>{r(N),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(R.shapeFlag&1&&L&&!L.persisted){const{leave:C,delayLeave:fe}=L,se=()=>C(N,$);fe?fe(R.el,$,se):se()}else $()},et=(R,w)=>{let N;for(;R!==w;)N=h(R),r(R),R=N;r(w)},je=(R,w,N)=>{const{bum:H,scope:L,job:$,subTree:C,um:fe,m:se,a:re}=R;Rf(se),Rf(re),H&&Qa(H),L.stop(),$&&($.flags|=8,xe(C,R,w,N)),fe&&Sn(fe,w),Sn(()=>{R.isUnmounted=!0},w)},V=(R,w,N,H=!1,L=!1,$=0)=>{for(let C=$;C<R.length;C++)xe(R[C],w,N,H,L)},U=R=>{if(R.shapeFlag&6)return U(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const w=h(R.anchor||R.el),N=w&&w[Bg];return N?h(N):w};let Y=!1;const ie=(R,w,N)=>{let H;R==null?w._vnode&&(xe(w._vnode,null,null,!0),H=w._vnode.component):b(w._vnode||null,R,w,null,null,null,N),w._vnode=R,Y||(Y=!0,vf(H),Yd(),Y=!1)},ue={p:b,um:xe,m:Me,r:He,mt:Z,mc:x,pc:oe,pbc:K,n:U,o:n};return{render:ie,hydrate:void 0,createApp:l0(ie)}}function fl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function or({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function E0(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Mp(n,e,t=!1){const i=n.children,r=e.children;if(Xe(i)&&Xe(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=ji(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Mp(a,o)),o.type===Wo&&(o.patchFlag!==-1?o.el=a.el:o.__elIndex=s+(n.type===Et?1:0)),o.type===un&&!o.el&&(o.el=a.el)}}function T0(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function yp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:yp(e)}function Rf(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Ep(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Ep(e.subTree):null}const Tp=n=>n.__isSuspense;function A0(n,e){e&&e.pendingBranch?Xe(n)?e.effects.push(...n):e.effects.push(n):Ng(n)}const Et=Symbol.for("v-fgt"),Wo=Symbol.for("v-txt"),un=Symbol.for("v-cmt"),to=Symbol.for("v-stc"),Js=[];let Mn=null;function Pe(n=!1){Js.push(Mn=n?null:[])}function w0(){Js.pop(),Mn=Js[Js.length-1]||null}let ra=1;function vo(n,e=!1){ra+=n,n<0&&Mn&&e&&(Mn.hasOnce=!0)}function Ap(n){return n.dynamicChildren=ra>0?Mn||os:null,w0(),ra>0&&Mn&&Mn.push(n),n}function Ne(n,e,t,i,r,s){return Ap(j(n,e,t,i,r,s,!0))}function Rr(n,e,t,i,r){return Ap(nt(n,e,t,i,r,!0))}function xo(n){return n?n.__v_isVNode===!0:!1}function vr(n,e){return n.type===e.type&&n.key===e.key}const wp=({key:n})=>n??null,no=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Lt(n)||tn(n)||Ye(n)?{i:bn,r:n,k:e,f:!!t}:n:null);function j(n,e=null,t=null,i=0,r=null,s=n===Et?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&wp(e),ref:e&&no(e),scopeId:Kd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:bn};return o?(Pu(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Lt(t)?8:16),ra>0&&!a&&Mn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Mn.push(l),l}const nt=C0;function C0(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===e0)&&(n=un),xo(n)){const o=tr(n,e,!0);return t&&Pu(o,t),ra>0&&!s&&Mn&&(o.shapeFlag&6?Mn[Mn.indexOf(n)]=o:Mn.push(o)),o.patchFlag=-2,o}if(B0(n)&&(n=n.__vccOpts),e){e=R0(e);let{class:o,style:l}=e;o&&!Lt(o)&&(e.class=it(o)),Mt(l)&&(Au(l)&&!Xe(l)&&(l=Vt({},l)),e.style=Jt(l))}const a=Lt(n)?1:Tp(n)?128:Qd(n)?64:Mt(n)?4:Ye(n)?2:0;return j(n,e,t,i,r,a,s,!0)}function R0(n){return n?Au(n)||gp(n)?Vt({},n):n:null}function tr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?P0(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&wp(c),ref:e&&e.ref?t&&s?Xe(s)?s.concat(no(e)):[s,no(e)]:no(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Et?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&tr(n.ssContent),ssFallback:n.ssFallback&&tr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&ia(u,l.clone(u)),u}function yt(n=" ",e=0){return nt(Wo,null,n,e)}function Cp(n,e){const t=nt(to,null,n);return t.staticCount=e,t}function At(n="",e=!1){return e?(Pe(),Rr(un,null,n)):nt(un,null,n)}function ti(n){return n==null||typeof n=="boolean"?nt(un):Xe(n)?nt(Et,null,n.slice()):xo(n)?ji(n):nt(Wo,null,String(n))}function ji(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:tr(n)}function Pu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Xe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Pu(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!gp(e)?e._ctx=bn:r===3&&bn&&(bn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ye(e)?(e={default:e,_ctx:bn},t=32):(e=String(e),i&64?(t=16,e=[yt(e)]):t=8);n.children=e,n.shapeFlag|=t}function P0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=it([e.class,i.class]));else if(r==="style")e.style=Jt([e.style,i.style]);else if(Io(r)){const s=e[r],a=i[r];a&&s!==a&&!(Xe(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Kn(n,e,t,i=null){Xn(n,e,7,[t,i])}const D0=hp();let I0=0;function L0(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||D0,s={uid:I0++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new sg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vp(i,r),emitsOptions:dp(i,r),emit:null,emitted:null,propsDefaults:xt,inheritAttrs:i.inheritAttrs,ctx:xt,data:xt,props:xt,attrs:xt,slots:xt,refs:xt,setupState:xt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=u0.bind(null,s),n.ce&&n.ce(s),s}let Zt=null;const Rp=()=>Zt||bn;let So,fc;{const n=Fo(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};So=e("__VUE_INSTANCE_SETTERS__",t=>Zt=t),fc=e("__VUE_SSR_SETTERS__",t=>sa=t)}const pa=n=>{const e=Zt;return So(n),n.scope.on(),()=>{n.scope.off(),So(e)}},Pf=()=>{Zt&&Zt.scope.off(),So(null)};function Pp(n){return n.vnode.shapeFlag&4}let sa=!1;function U0(n,e=!1,t=!1){e&&fc(e);const{props:i,children:r}=n.vnode,s=Pp(n);g0(n,i,s,e),S0(n,r,t||e);const a=s?N0(n,e):void 0;return e&&fc(!1),a}function N0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,t0);const{setup:i}=t;if(i){Pi();const r=n.setupContext=i.length>1?O0(n):null,s=pa(n),a=fa(i,n,0,[n.props,r]),o=Md(a);if(Di(),s(),(o||n.sp)&&!Ks(n)&&ap(n),o){if(a.then(Pf,Pf),e)return a.then(l=>{Df(n,l)}).catch(l=>{Bo(l,n,0)});n.asyncDep=a}else Df(n,a)}else Dp(n)}function Df(n,e,t){Ye(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Mt(e)&&(n.setupState=Xd(e)),Dp(n)}function Dp(n,e,t){const i=n.type;n.render||(n.render=i.render||li);{const r=pa(n);Pi();try{n0(n)}finally{Di(),r()}}}const F0={get(n,e){return Kt(n,"get",""),n[e]}};function O0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,F0),slots:n.slots,emit:n.emit,expose:e}}function Xo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Xd(Tg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Zs)return Zs[t](n)},has(e,t){return t in e||t in Zs}})):n.proxy}function k0(n,e=!0){return Ye(n)?n.displayName||n.name:n.name||e&&n.__name}function B0(n){return Ye(n)&&"__vccOpts"in n}const wt=(n,e)=>Pg(n,e,sa);function Du(n,e,t){try{vo(-1);const i=arguments.length;return i===2?Mt(e)&&!Xe(e)?xo(e)?nt(n,null,[e]):nt(n,e):nt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&xo(t)&&(t=[t]),nt(n,e,t))}finally{vo(1)}}const z0="3.5.26";let hc;const If=typeof window<"u"&&window.trustedTypes;if(If)try{hc=If.createPolicy("vue",{createHTML:n=>n})}catch{}const Ip=hc?n=>hc.createHTML(n):n=>n,V0="http://www.w3.org/2000/svg",H0="http://www.w3.org/1998/Math/MathML",Ei=typeof document<"u"?document:null,Lf=Ei&&Ei.createElement("template"),G0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Ei.createElementNS(V0,n):e==="mathml"?Ei.createElementNS(H0,n):t?Ei.createElement(n,{is:t}):Ei.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Ei.createTextNode(n),createComment:n=>Ei.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ei.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Lf.innerHTML=Ip(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Lf.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ki="transition",Rs="animation",aa=Symbol("_vtc"),Lp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},W0=Vt({},ep,Lp),X0=n=>(n.displayName="Transition",n.props=W0,n),$0=X0((n,{slots:e})=>Du(Hg,q0(n),e)),lr=(n,e=[])=>{Xe(n)?n.forEach(t=>t(...e)):n&&n(...e)},Uf=n=>n?Xe(n)?n.some(e=>e.length>1):n.length>1:!1;function q0(n){const e={};for(const F in n)F in Lp||(e[F]=n[F]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,g=Y0(r),b=g&&g[0],m=g&&g[1],{onBeforeEnter:d,onEnter:v,onEnterCancelled:y,onLeave:S,onLeaveCancelled:P,onBeforeAppear:T=d,onAppear:I=v,onAppearCancelled:x=y}=e,A=(F,z,Z,W)=>{F._enterCancelled=W,cr(F,z?u:o),cr(F,z?c:a),Z&&Z()},K=(F,z)=>{F._isLeaving=!1,cr(F,f),cr(F,p),cr(F,h),z&&z()},D=F=>(z,Z)=>{const W=F?I:v,X=()=>A(z,F,Z);lr(W,[z,X]),Nf(()=>{cr(z,F?l:s),_i(z,F?u:o),Uf(W)||Ff(z,i,b,X)})};return Vt(e,{onBeforeEnter(F){lr(d,[F]),_i(F,s),_i(F,a)},onBeforeAppear(F){lr(T,[F]),_i(F,l),_i(F,c)},onEnter:D(!1),onAppear:D(!0),onLeave(F,z){F._isLeaving=!0;const Z=()=>K(F,z);_i(F,f),F._enterCancelled?(_i(F,h),Bf(F)):(Bf(F),_i(F,h)),Nf(()=>{F._isLeaving&&(cr(F,f),_i(F,p),Uf(S)||Ff(F,i,m,Z))}),lr(S,[F,Z])},onEnterCancelled(F){A(F,!1,void 0,!0),lr(y,[F])},onAppearCancelled(F){A(F,!0,void 0,!0),lr(x,[F])},onLeaveCancelled(F){K(F),lr(P,[F])}})}function Y0(n){if(n==null)return null;if(Mt(n))return[hl(n.enter),hl(n.leave)];{const e=hl(n);return[e,e]}}function hl(n){return Jm(n)}function _i(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[aa]||(n[aa]=new Set)).add(e)}function cr(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[aa];t&&(t.delete(e),t.size||(n[aa]=void 0))}function Nf(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let j0=0;function Ff(n,e,t,i){const r=n._endId=++j0,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:a,timeout:o,propCount:l}=K0(n,e);if(!a)return i();const c=a+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=p=>{p.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},o+1),n.addEventListener(c,h)}function K0(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${ki}Delay`),s=i(`${ki}Duration`),a=Of(r,s),o=i(`${Rs}Delay`),l=i(`${Rs}Duration`),c=Of(o,l);let u=null,f=0,h=0;e===ki?a>0&&(u=ki,f=a,h=s.length):e===Rs?c>0&&(u=Rs,f=c,h=l.length):(f=Math.max(a,c),u=f>0?a>c?ki:Rs:null,h=u?u===ki?s.length:l.length:0);const p=u===ki&&/\b(?:transform|all)(?:,|$)/.test(i(`${ki}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function Of(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>kf(t)+kf(n[i])))}function kf(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Bf(n){return(n?n.ownerDocument:document).body.offsetHeight}function Z0(n,e,t){const i=n[aa];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const bo=Symbol("_vod"),Up=Symbol("_vsh"),ps={name:"show",beforeMount(n,{value:e},{transition:t}){n[bo]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Ps(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Ps(n,!0),i.enter(n)):i.leave(n,()=>{Ps(n,!1)}):Ps(n,e))},beforeUnmount(n,{value:e}){Ps(n,e)}};function Ps(n,e){n.style.display=e?n[bo]:"none",n[Up]=!e}const J0=Symbol(""),Q0=/(?:^|;)\s*display\s*:/;function e_(n,e,t){const i=n.style,r=Lt(t);let s=!1;if(t&&!r){if(e)if(Lt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&io(i,o,"")}else for(const a in e)t[a]==null&&io(i,a,"");for(const a in t)a==="display"&&(s=!0),io(i,a,t[a])}else if(r){if(e!==t){const a=i[J0];a&&(t+=";"+a),i.cssText=t,s=Q0.test(t)}}else e&&n.removeAttribute("style");bo in n&&(n[bo]=s?i.display:"",n[Up]&&(i.display="none"))}const zf=/\s*!important$/;function io(n,e,t){if(Xe(t))t.forEach(i=>io(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=t_(n,e);zf.test(t)?n.setProperty(Ir(i),t.replace(zf,""),"important"):n[i]=t}}const Vf=["Webkit","Moz","ms"],dl={};function t_(n,e){const t=dl[e];if(t)return t;let i=Ln(e);if(i!=="filter"&&i in n)return dl[e]=i;i=No(i);for(let r=0;r<Vf.length;r++){const s=Vf[r]+i;if(s in n)return dl[e]=s}return e}const Hf="http://www.w3.org/1999/xlink";function Gf(n,e,t,i,r,s=rg(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Hf,e.slice(6,e.length)):n.setAttributeNS(Hf,e,t):t==null||s&&!Ad(t)?n.removeAttribute(e):n.setAttribute(e,s?"":ir(t)?String(t):t)}function Wf(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Ip(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Ad(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function rs(n,e,t,i){n.addEventListener(e,t,i)}function n_(n,e,t,i){n.removeEventListener(e,t,i)}const Xf=Symbol("_vei");function i_(n,e,t,i,r=null){const s=n[Xf]||(n[Xf]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=r_(e);if(i){const c=s[e]=o_(i,r);rs(n,o,c,l)}else a&&(n_(n,o,a,l),s[e]=void 0)}}const $f=/(?:Once|Passive|Capture)$/;function r_(n){let e;if($f.test(n)){e={};let i;for(;i=n.match($f);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ir(n.slice(2)),e]}let pl=0;const s_=Promise.resolve(),a_=()=>pl||(s_.then(()=>pl=0),pl=Date.now());function o_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Xn(l_(i,t.value),e,5,[i])};return t.value=n,t.attached=a_(),t}function l_(n,e){if(Xe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const qf=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,c_=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?Z0(n,i,a):e==="style"?e_(n,t,i):Io(e)?gu(e)||i_(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):u_(n,e,i,a))?(Wf(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Gf(n,e,i,a,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Lt(i))?Wf(n,Ln(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Gf(n,e,i,a))};function u_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&qf(e)&&Ye(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return qf(e)&&Lt(t)?!1:e in n}const Yf=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Xe(e)?t=>Qa(e,t):e};function f_(n){n.target.composing=!0}function jf(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ml=Symbol("_assign");function Kf(n,e,t){return e&&(n=n.trim()),t&&(n=xu(n)),n}const Zf={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[ml]=Yf(r);const s=i||r.props&&r.props.type==="number";rs(n,e?"change":"input",a=>{a.target.composing||n[ml](Kf(n.value,t,s))}),(t||s)&&rs(n,"change",()=>{n.value=Kf(n.value,t,s)}),e||(rs(n,"compositionstart",f_),rs(n,"compositionend",jf),rs(n,"change",jf))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[ml]=Yf(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?xu(n.value):n.value,l=e??"";o!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},h_=["ctrl","shift","alt","meta"],d_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>h_.some(t=>n[`${t}Key`]&&!e.includes(t))},Nt=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((r,...s)=>{for(let a=0;a<e.length;a++){const o=d_[e[a]];if(o&&o(r,e))return}return n(r,...s)}))},p_=Vt({patchProp:c_},G0);let Jf;function m_(){return Jf||(Jf=M0(p_))}const g_=((...n)=>{const e=m_().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=v_(i);if(!r)return;const s=e._component;!Ye(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,__(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function __(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function v_(n){return Lt(n)?document.querySelector(n):n}const x_="/Profile_Picture_CyberCubed.ico";const ss=typeof document<"u";function Np(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function S_(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Np(n.default)}const ft=Object.assign;function gl(n,e){const t={};for(const i in e){const r=e[i];t[i]=$n(r)?r.map(n):n(r)}return t}const Qs=()=>{},$n=Array.isArray;function Qf(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const Fp=/#/g,b_=/&/g,M_=/\//g,y_=/=/g,E_=/\?/g,Op=/\+/g,T_=/%5B/g,A_=/%5D/g,kp=/%5E/g,w_=/%60/g,Bp=/%7B/g,C_=/%7C/g,zp=/%7D/g,R_=/%20/g;function Iu(n){return n==null?"":encodeURI(""+n).replace(C_,"|").replace(T_,"[").replace(A_,"]")}function P_(n){return Iu(n).replace(Bp,"{").replace(zp,"}").replace(kp,"^")}function dc(n){return Iu(n).replace(Op,"%2B").replace(R_,"+").replace(Fp,"%23").replace(b_,"%26").replace(w_,"`").replace(Bp,"{").replace(zp,"}").replace(kp,"^")}function D_(n){return dc(n).replace(y_,"%3D")}function I_(n){return Iu(n).replace(Fp,"%23").replace(E_,"%3F")}function L_(n){return I_(n).replace(M_,"%2F")}function oa(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const U_=/\/$/,N_=n=>n.replace(U_,"");function _l(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,o>0?o:e.length),r=n(s.slice(1))),o>=0&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=B_(i??e,t),{fullPath:i+s+a,path:i,query:r,hash:oa(a)}}function F_(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function eh(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function O_(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&ms(e.matched[i],t.matched[r])&&Vp(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function ms(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Vp(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!k_(n[t],e[t]))return!1;return!0}function k_(n,e){return $n(n)?th(n,e):$n(e)?th(e,n):n?.valueOf()===e?.valueOf()}function th(n,e){return $n(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function B_(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const Bi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let pc=(function(n){return n.pop="pop",n.push="push",n})({}),vl=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function z_(n){if(!n)if(ss){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),N_(n)}const V_=/^[^#]+#/;function H_(n,e){return n.replace(V_,"#")+e}function G_(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const $o=()=>({left:window.scrollX,top:window.scrollY});function W_(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=G_(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function nh(n,e){return(history.state?history.state.position-e:-1)+n}const mc=new Map;function X_(n,e){mc.set(n,e)}function $_(n){const e=mc.get(n);return mc.delete(n),e}function q_(n){return typeof n=="string"||n&&typeof n=="object"}function Hp(n){return typeof n=="string"||typeof n=="symbol"}let Rt=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const Gp=Symbol("");Rt.MATCHER_NOT_FOUND+"",Rt.NAVIGATION_GUARD_REDIRECT+"",Rt.NAVIGATION_ABORTED+"",Rt.NAVIGATION_CANCELLED+"",Rt.NAVIGATION_DUPLICATED+"";function gs(n,e){return ft(new Error,{type:n,[Gp]:!0},e)}function vi(n,e){return n instanceof Error&&Gp in n&&(e==null||!!(n.type&e))}const Y_=["params","query","hash"];function j_(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of Y_)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function K_(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const r=t[i].replace(Op," "),s=r.indexOf("="),a=oa(s<0?r:r.slice(0,s)),o=s<0?null:oa(r.slice(s+1));if(a in e){let l=e[a];$n(l)||(l=e[a]=[l]),l.push(o)}else e[a]=o}return e}function ih(n){let e="";for(let t in n){const i=n[t];if(t=D_(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}($n(i)?i.map(r=>r&&dc(r)):[i&&dc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function Z_(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=$n(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const J_=Symbol(""),rh=Symbol(""),qo=Symbol(""),Lu=Symbol(""),gc=Symbol("");function Ds(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Ki(n,e,t,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const c=h=>{h===!1?l(gs(Rt.NAVIGATION_ABORTED,{from:t,to:e})):h instanceof Error?l(h):q_(h)?l(gs(Rt.NAVIGATION_GUARD_REDIRECT,{from:e,to:h})):(a&&i.enterCallbacks[r]===a&&typeof h=="function"&&a.push(h),o())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function xl(n,e,t,i,r=s=>s()){const s=[];for(const a of n)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(Np(l)){const c=(l.__vccOpts||l)[e];c&&s.push(Ki(c,t,i,a,o,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=S_(u)?u.default:u;a.mods[o]=u,a.components[o]=f;const h=(f.__vccOpts||f)[e];return h&&Ki(h,t,i,a,o,r)()}))}}return s}function Q_(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>ms(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>ms(c,l))||r.push(l))}return[t,i,r]}let ev=()=>location.protocol+"//"+location.host;function Wp(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,o=r.slice(a);return o[0]!=="/"&&(o="/"+o),eh(o,"")}return eh(t,n)+i+r}function tv(n,e,t,i){let r=[],s=[],a=null;const o=({state:h})=>{const p=Wp(n,location),g=t.value,b=e.value;let m=0;if(h){if(t.value=p,e.value=h,a&&a===g){a=null;return}m=b?h.position-b.position:0}else i(p);r.forEach(d=>{d(t.value,g,{delta:m,type:pc.pop,direction:m?m>0?vl.forward:vl.back:vl.unknown})})};function l(){a=t.value}function c(h){r.push(h);const p=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(ft({},h.state,{scroll:$o()}),"")}}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function sh(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?$o():null}}function nv(n){const{history:e,location:t}=window,i={value:Wp(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:ev()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),t[u?"replace":"assign"](h)}}function a(l,c){s(l,ft({},e.state,sh(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function o(l,c){const u=ft({},r.value,e.state,{forward:l,scroll:$o()});s(u.current,u,!0),s(l,ft({},sh(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function iv(n){n=z_(n);const e=nv(n),t=tv(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=ft({location:"",base:n,go:i,createHref:H_.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let Mr=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var Ft=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(Ft||{});const rv={type:Mr.Static,value:""},sv=/[a-zA-Z0-9_]/;function av(n){if(!n)return[[]];if(n==="/")return[[rv]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=Ft.Static,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(t===Ft.Static?s.push({type:Mr.Static,value:c}):t===Ft.Param||t===Ft.ParamRegExp||t===Ft.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Mr.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==Ft.ParamRegExp){i=t,t=Ft.EscapeNext;continue}switch(t){case Ft.Static:l==="/"?(c&&f(),a()):l===":"?(f(),t=Ft.Param):h();break;case Ft.EscapeNext:h(),t=i;break;case Ft.Param:l==="("?t=Ft.ParamRegExp:sv.test(l)?h():(f(),t=Ft.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case Ft.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=Ft.ParamRegExpEnd:u+=l;break;case Ft.ParamRegExpEnd:f(),t=Ft.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===Ft.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}const ah="[^/]+?",ov={sensitive:!1,strict:!1,start:!0,end:!0};var ln=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(ln||{});const lv=/[.+*?^${}()[\]/\\]/g;function cv(n,e){const t=ft({},ov,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[ln.Root];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=ln.Segment+(t.sensitive?ln.BonusCaseSensitive:0);if(h.type===Mr.Static)f||(r+="/"),r+=h.value.replace(lv,"\\$&"),p+=ln.Static;else if(h.type===Mr.Param){const{value:g,repeatable:b,optional:m,regexp:d}=h;s.push({name:g,repeatable:b,optional:m});const v=d||ah;if(v!==ah){p+=ln.BonusCustomRegExp;try{`${v}`}catch(S){throw new Error(`Invalid custom RegExp for param "${g}" (${v}): `+S.message)}}let y=b?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;f||(y=m&&c.length<2?`(?:/${y})`:"/"+y),m&&(y+="?"),r+=y,p+=ln.Dynamic,m&&(p+=ln.BonusOptional),b&&(p+=ln.BonusRepeatable),v===".*"&&(p+=ln.BonusWildcard)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=ln.BonusStrict}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",g=s[h-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===Mr.Static)u+=p.value;else if(p.type===Mr.Param){const{value:g,repeatable:b,optional:m}=p,d=g in c?c[g]:"";if($n(d)&&!b)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const v=$n(d)?d.join("/"):d;if(!v)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=v}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function uv(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===ln.Static+ln.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===ln.Static+ln.Segment?1:-1:0}function Xp(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=uv(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(oh(i))return 1;if(oh(r))return-1}return r.length-i.length}function oh(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const fv={strict:!1,end:!0,sensitive:!1};function hv(n,e,t){const i=cv(av(n.path),t),r=ft(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function dv(n,e){const t=[],i=new Map;e=Qf(fv,e);function r(f){return i.get(f)}function s(f,h,p){const g=!p,b=ch(f);b.aliasOf=p&&p.record;const m=Qf(e,f),d=[b];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const P of S)d.push(ch(ft({},b,{components:p?p.record.components:b.components,path:P,aliasOf:p?p.record:b})))}let v,y;for(const S of d){const{path:P}=S;if(h&&P[0]!=="/"){const T=h.record.path,I=T[T.length-1]==="/"?"":"/";S.path=h.record.path+(P&&I+P)}if(v=hv(S,h,m),p?p.alias.push(v):(y=y||v,y!==v&&y.alias.push(v),g&&f.name&&!uh(v)&&a(f.name)),$p(v)&&l(v),b.children){const T=b.children;for(let I=0;I<T.length;I++)s(T[I],v,p&&p.children[I])}p=p||v}return y?()=>{a(y)}:Qs}function a(f){if(Hp(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return t}function l(f){const h=gv(f,t);t.splice(h,0,f),f.record.name&&!uh(f)&&i.set(f.record.name,f)}function c(f,h){let p,g={},b,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw gs(Rt.MATCHER_NOT_FOUND,{location:f});m=p.record.name,g=ft(lh(h.params,p.keys.filter(y=>!y.optional).concat(p.parent?p.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),f.params&&lh(f.params,p.keys.map(y=>y.name))),b=p.stringify(g)}else if(f.path!=null)b=f.path,p=t.find(y=>y.re.test(b)),p&&(g=p.parse(b),m=p.record.name);else{if(p=h.name?i.get(h.name):t.find(y=>y.re.test(h.path)),!p)throw gs(Rt.MATCHER_NOT_FOUND,{location:f,currentLocation:h});m=p.record.name,g=ft({},h.params,f.params),b=p.stringify(g)}const d=[];let v=p;for(;v;)d.unshift(v.record),v=v.parent;return{name:m,path:b,params:g,matched:d,meta:mv(d)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:r}}function lh(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function ch(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:pv(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function pv(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function uh(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function mv(n){return n.reduce((e,t)=>ft(e,t.meta),{})}function gv(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;Xp(n,e[s])<0?i=s:t=s+1}const r=_v(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function _v(n){let e=n;for(;e=e.parent;)if($p(e)&&Xp(n,e)===0)return e}function $p({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function fh(n){const e=Hn(qo),t=Hn(Lu),i=wt(()=>{const l=si(n.to);return e.resolve(l)}),r=wt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(ms.bind(null,u));if(h>-1)return h;const p=hh(l[c-2]);return c>1&&hh(u)===p&&f[f.length-1].path!==p?f.findIndex(ms.bind(null,l[c-2])):h}),s=wt(()=>r.value>-1&&Mv(t.params,i.value.params)),a=wt(()=>r.value>-1&&r.value===t.matched.length-1&&Vp(t.params,i.value.params));function o(l={}){if(bv(l)){const c=e[si(n.replace)?"replace":"push"](si(n.to)).catch(Qs);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:wt(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}function vv(n){return n.length===1?n[0]:n}const xv=sp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:fh,setup(n,{slots:e}){const t=ko(fh(n)),{options:i}=Hn(qo),r=wt(()=>({[dh(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[dh(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&vv(e.default(t));return n.custom?s:Du("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Sv=xv;function bv(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Mv(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!$n(r)||r.length!==i.length||i.some((s,a)=>s.valueOf()!==r[a].valueOf()))return!1}return!0}function hh(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const dh=(n,e,t)=>n??e??t,yv=sp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Hn(gc),r=wt(()=>n.route||i.value),s=Hn(rh,0),a=wt(()=>{let c=si(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=wt(()=>r.value.matched[a.value]);eo(rh,wt(()=>a.value+1)),eo(J_,o),eo(gc,r);const l=Ue();return ci(()=>[l.value,o.value,n.name],([c,u,f],[h,p,g])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!ms(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=o.value,h=f&&f.components[u];if(!h)return ph(t.default,{Component:h,route:c});const p=f.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Du(h,ft({},g,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return ph(t.default,{Component:m,route:c})||m}}});function ph(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Ev=yv;function Tv(n){const e=dv(n.routes,n),t=n.parseQuery||K_,i=n.stringifyQuery||ih,r=n.history,s=Ds(),a=Ds(),o=Ds(),l=Ag(Bi);let c=Bi;ss&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=gl.bind(null,U=>""+U),f=gl.bind(null,L_),h=gl.bind(null,oa);function p(U,Y){let ie,ue;return Hp(U)?(ie=e.getRecordMatcher(U),ue=Y):ue=U,e.addRoute(ue,ie)}function g(U){const Y=e.getRecordMatcher(U);Y&&e.removeRoute(Y)}function b(){return e.getRoutes().map(U=>U.record)}function m(U){return!!e.getRecordMatcher(U)}function d(U,Y){if(Y=ft({},Y||l.value),typeof U=="string"){const N=_l(t,U,Y.path),H=e.resolve({path:N.path},Y),L=r.createHref(N.fullPath);return ft(N,H,{params:h(H.params),hash:oa(N.hash),redirectedFrom:void 0,href:L})}let ie;if(U.path!=null)ie=ft({},U,{path:_l(t,U.path,Y.path).path});else{const N=ft({},U.params);for(const H in N)N[H]==null&&delete N[H];ie=ft({},U,{params:f(N)}),Y.params=f(Y.params)}const ue=e.resolve(ie,Y),_e=U.hash||"";ue.params=u(h(ue.params));const R=F_(i,ft({},U,{hash:P_(_e),path:ue.path})),w=r.createHref(R);return ft({fullPath:R,hash:_e,query:i===ih?Z_(U.query):U.query||{}},ue,{redirectedFrom:void 0,href:w})}function v(U){return typeof U=="string"?_l(t,U,l.value.path):ft({},U)}function y(U,Y){if(c!==U)return gs(Rt.NAVIGATION_CANCELLED,{from:Y,to:U})}function S(U){return I(U)}function P(U){return S(ft(v(U),{replace:!0}))}function T(U,Y){const ie=U.matched[U.matched.length-1];if(ie&&ie.redirect){const{redirect:ue}=ie;let _e=typeof ue=="function"?ue(U,Y):ue;return typeof _e=="string"&&(_e=_e.includes("?")||_e.includes("#")?_e=v(_e):{path:_e},_e.params={}),ft({query:U.query,hash:U.hash,params:_e.path!=null?{}:U.params},_e)}}function I(U,Y){const ie=c=d(U),ue=l.value,_e=U.state,R=U.force,w=U.replace===!0,N=T(ie,ue);if(N)return I(ft(v(N),{state:typeof N=="object"?ft({},_e,N.state):_e,force:R,replace:w}),Y||ie);const H=ie;H.redirectedFrom=Y;let L;return!R&&O_(i,ue,ie)&&(L=gs(Rt.NAVIGATION_DUPLICATED,{to:H,from:ue}),Me(ue,ue,!0,!1)),(L?Promise.resolve(L):K(H,ue)).catch($=>vi($)?vi($,Rt.NAVIGATION_GUARD_REDIRECT)?$:ge($):oe($,H,ue)).then($=>{if($){if(vi($,Rt.NAVIGATION_GUARD_REDIRECT))return I(ft({replace:w},v($.to),{state:typeof $.to=="object"?ft({},_e,$.to.state):_e,force:R}),Y||H)}else $=F(H,ue,!0,w,_e);return D(H,ue,$),$})}function x(U,Y){const ie=y(U,Y);return ie?Promise.reject(ie):Promise.resolve()}function A(U){const Y=et.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(U):U()}function K(U,Y){let ie;const[ue,_e,R]=Q_(U,Y);ie=xl(ue.reverse(),"beforeRouteLeave",U,Y);for(const N of ue)N.leaveGuards.forEach(H=>{ie.push(Ki(H,U,Y))});const w=x.bind(null,U,Y);return ie.push(w),V(ie).then(()=>{ie=[];for(const N of s.list())ie.push(Ki(N,U,Y));return ie.push(w),V(ie)}).then(()=>{ie=xl(_e,"beforeRouteUpdate",U,Y);for(const N of _e)N.updateGuards.forEach(H=>{ie.push(Ki(H,U,Y))});return ie.push(w),V(ie)}).then(()=>{ie=[];for(const N of R)if(N.beforeEnter)if($n(N.beforeEnter))for(const H of N.beforeEnter)ie.push(Ki(H,U,Y));else ie.push(Ki(N.beforeEnter,U,Y));return ie.push(w),V(ie)}).then(()=>(U.matched.forEach(N=>N.enterCallbacks={}),ie=xl(R,"beforeRouteEnter",U,Y,A),ie.push(w),V(ie))).then(()=>{ie=[];for(const N of a.list())ie.push(Ki(N,U,Y));return ie.push(w),V(ie)}).catch(N=>vi(N,Rt.NAVIGATION_CANCELLED)?N:Promise.reject(N))}function D(U,Y,ie){o.list().forEach(ue=>A(()=>ue(U,Y,ie)))}function F(U,Y,ie,ue,_e){const R=y(U,Y);if(R)return R;const w=Y===Bi,N=ss?history.state:{};ie&&(ue||w?r.replace(U.fullPath,ft({scroll:w&&N&&N.scroll},_e)):r.push(U.fullPath,_e)),l.value=U,Me(U,Y,ie,w),ge()}let z;function Z(){z||(z=r.listen((U,Y,ie)=>{if(!je.listening)return;const ue=d(U),_e=T(ue,je.currentRoute.value);if(_e){I(ft(_e,{replace:!0,force:!0}),ue).catch(Qs);return}c=ue;const R=l.value;ss&&X_(nh(R.fullPath,ie.delta),$o()),K(ue,R).catch(w=>vi(w,Rt.NAVIGATION_ABORTED|Rt.NAVIGATION_CANCELLED)?w:vi(w,Rt.NAVIGATION_GUARD_REDIRECT)?(I(ft(v(w.to),{force:!0}),ue).then(N=>{vi(N,Rt.NAVIGATION_ABORTED|Rt.NAVIGATION_DUPLICATED)&&!ie.delta&&ie.type===pc.pop&&r.go(-1,!1)}).catch(Qs),Promise.reject()):(ie.delta&&r.go(-ie.delta,!1),oe(w,ue,R))).then(w=>{w=w||F(ue,R,!1),w&&(ie.delta&&!vi(w,Rt.NAVIGATION_CANCELLED)?r.go(-ie.delta,!1):ie.type===pc.pop&&vi(w,Rt.NAVIGATION_ABORTED|Rt.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),D(ue,R,w)}).catch(Qs)}))}let W=Ds(),X=Ds(),k;function oe(U,Y,ie){ge(U);const ue=X.list();return ue.length?ue.forEach(_e=>_e(U,Y,ie)):console.error(U),Promise.reject(U)}function he(){return k&&l.value!==Bi?Promise.resolve():new Promise((U,Y)=>{W.add([U,Y])})}function ge(U){return k||(k=!U,Z(),W.list().forEach(([Y,ie])=>U?ie(U):Y()),W.reset()),U}function Me(U,Y,ie,ue){const{scrollBehavior:_e}=n;if(!ss||!_e)return Promise.resolve();const R=!ie&&$_(nh(U.fullPath,0))||(ue||!ie)&&history.state&&history.state.scroll||null;return Wt().then(()=>_e(U,Y,R)).then(w=>w&&W_(w)).catch(w=>oe(w,U,Y))}const xe=U=>r.go(U);let He;const et=new Set,je={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:b,resolve:d,options:n,push:S,replace:P,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:X.add,isReady:he,install(U){U.component("RouterLink",Sv),U.component("RouterView",Ev),U.config.globalProperties.$router=je,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>si(l)}),ss&&!He&&l.value===Bi&&(He=!0,S(r.location).catch(ue=>{}));const Y={};for(const ue in Bi)Object.defineProperty(Y,ue,{get:()=>l.value[ue],enumerable:!0});U.provide(qo,je),U.provide(Lu,Gd(Y)),U.provide(gc,l);const ie=U.unmount;et.add(U),U.unmount=function(){et.delete(U),et.size<1&&(c=Bi,z&&z(),z=null,l.value=Bi,He=!1,k=!1),ie()}}};function V(U){return U.reduce((Y,ie)=>Y.then(()=>A(ie)),Promise.resolve())}return je}function qp(){return Hn(qo)}function _c(n){return Hn(Lu)}const Av="http://localhost:8000",Gn=Av+"/api",rn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},wv={class:"burger-wrap"},Cv={__name:"HeaderNav",setup(n){const e=_c();function t(){const P=e.path;return P==="/"?0:P==="/coding"?1:P==="/blender"?2:P.startsWith("/dnd")?3:P==="/about"?4:0}const i=Ue(t());ci(()=>e.path,()=>{i.value=t(),Wt(()=>g())});const r=Ue(null),s=Ue(null),a=Ue(null),o=Ue([]),l=Ue(window.innerWidth<640),c=Ue(!1),u=Ue({opacity:0}),f=Ue({opacity:0});async function h(){try{const P=await fetch(`${Gn}/campaigns/`);if(!P.ok)return;const T=await P.json();o.value=Array.isArray(T)?T:[]}catch(P){console.warn("Failed to load campaigns",P)}}const p=wt(()=>"/dnd");function g(P=!0){if(!s.value||!a.value)return;const T=l.value,I=T?".nav-link-burger":".nav-link",x=Array.from(s.value.querySelectorAll(I));let A;T?A=s.value.getBoundingClientRect():A=a.value.getBoundingClientRect();const K=(D,F)=>{if(D==null||!x[D]){T?F.value={opacity:0,top:"0px",height:"0px"}:F.value={opacity:0,left:"0px",width:"0px"};return}const z=x[D].getBoundingClientRect();if(T){const Z=z.top-A.top,W=z.height;F.value={opacity:1,top:`${Z}px`,height:`${W}px`,transition:P?"top 320ms cubic-bezier(.2,.9,.2,1), height 260ms cubic-bezier(.2,.9,.2,1), opacity 180ms":"none"}}else{const Z=z.left-A.left-15,W=z.width+30;F.value={opacity:1,left:`${Z}px`,width:`${W}px`,transition:P?"left 320ms cubic-bezier(.2,.9,.2,1), width 260ms cubic-bezier(.2,.9,.2,1), opacity 180ms":"none"}}};K(i.value,u),K(r.value,f)}function b(){c.value=!c.value}function m(P){i.value=P,c.value=!1,Wt(()=>g())}function d(P){r.value=P,g()}function v(){r.value=null,g()}function y(){const P=window.innerWidth<640;P||(c.value=!1),l.value=P}let S;return Yn(()=>{h(),y(),Wt(()=>g(!1)),S=new ResizeObserver(()=>g()),a.value&&S.observe(a.value),window.addEventListener("resize",()=>{y(),g()})}),Lr(()=>{S&&a.value&&S.unobserve(a.value),window.removeEventListener("resize",g)}),(P,T)=>{const I=ha("router-link");return Pe(),Ne("div",{class:it(["nav-wrap liquid-glass",{"menu-open":c.value}]),ref_key:"navWrap",ref:a},[l.value?(Pe(),Ne(Et,{key:0},[j("div",wv,[j("button",{type:"button",class:it(["burger",{active:c.value}]),onClick:T[0]||(T[0]=x=>b()),"aria-label":"Toggle navigation","aria-expanded":"isMenuOpen"},"☰",2)]),nt($0,{name:"fade"},{default:Gt(()=>[c.value?(Pe(),Ne("div",{key:0,class:"burger-overlay",onClick:T[1]||(T[1]=x=>c.value=!1)})):At("",!0)]),_:1}),j("div",{class:it(["burgermenu",{open:c.value}])},[j("nav",{class:"nav-burger",ref_key:"nav",ref:s,onMouseleave:v},[j("div",{class:"nav-bubble-burger selected",style:Jt(u.value),"aria-hidden":"true"},null,4),j("div",{class:"nav-bubble-burger liquid-glass",style:Jt(f.value),"aria-hidden":"true"},null,4),nt(I,{to:"/",href:"#",class:it(["nav-link-burger",{active:i.value===0}]),onClick:T[2]||(T[2]=Nt(x=>m(0),["prevent"])),onMouseenter:T[3]||(T[3]=x=>d(0))},{default:Gt(()=>[...T[22]||(T[22]=[yt("Home",-1)])]),_:1},8,["class"]),nt(I,{to:"/coding",href:"#",class:it(["nav-link-burger",{active:i.value===1}]),onClick:T[4]||(T[4]=Nt(x=>m(1),["prevent"])),onMouseenter:T[5]||(T[5]=x=>d(1))},{default:Gt(()=>[...T[23]||(T[23]=[yt("Coding",-1)])]),_:1},8,["class"]),nt(I,{to:"/blender",href:"#",class:it(["nav-link-burger",{active:i.value===2}]),onClick:T[6]||(T[6]=Nt(x=>m(2),["prevent"])),onMouseenter:T[7]||(T[7]=x=>d(2))},{default:Gt(()=>[...T[24]||(T[24]=[yt("Blender",-1)])]),_:1},8,["class"]),nt(I,{to:p.value,href:"#",class:it(["nav-link-burger",{active:i.value===3}]),onClick:T[8]||(T[8]=Nt(x=>m(3),["prevent"])),onMouseenter:T[9]||(T[9]=x=>d(3))},{default:Gt(()=>[...T[25]||(T[25]=[yt("D&D",-1)])]),_:1},8,["to","class"]),nt(I,{to:"/about",href:"#",class:it(["nav-link-burger",{active:i.value===4}]),onClick:T[10]||(T[10]=Nt(x=>m(4),["prevent"])),onMouseenter:T[11]||(T[11]=x=>d(4))},{default:Gt(()=>[...T[26]||(T[26]=[yt("About",-1)])]),_:1},8,["class"])],544)],2)],64)):(Pe(),Ne(Et,{key:1},[j("div",{class:"nav-bubble selected",style:Jt(u.value),"aria-hidden":"true"},null,4),j("div",{class:"nav-bubble liquid-glass",style:Jt(f.value),"aria-hidden":"true"},null,4),j("nav",{class:"nav",ref_key:"nav",ref:s,onMouseleave:v},[nt(I,{to:"/",href:"#",class:it(["nav-link",{active:i.value===0}]),onClick:T[12]||(T[12]=Nt(x=>m(0),["prevent"])),onMouseenter:T[13]||(T[13]=x=>d(0))},{default:Gt(()=>[...T[27]||(T[27]=[yt("Home",-1)])]),_:1},8,["class"]),nt(I,{to:"/coding",href:"#",class:it(["nav-link",{active:i.value===1}]),onClick:T[14]||(T[14]=Nt(x=>m(1),["prevent"])),onMouseenter:T[15]||(T[15]=x=>d(1))},{default:Gt(()=>[...T[28]||(T[28]=[yt("Coding",-1)])]),_:1},8,["class"]),nt(I,{to:"/blender",href:"#",class:it(["nav-link",{active:i.value===2}]),onClick:T[16]||(T[16]=Nt(x=>m(2),["prevent"])),onMouseenter:T[17]||(T[17]=x=>d(2))},{default:Gt(()=>[...T[29]||(T[29]=[yt("Blender",-1)])]),_:1},8,["class"]),nt(I,{to:p.value,href:"#",class:it(["nav-link",{active:i.value===3}]),onClick:T[18]||(T[18]=Nt(x=>m(3),["prevent"])),onMouseenter:T[19]||(T[19]=x=>d(3))},{default:Gt(()=>[...T[30]||(T[30]=[yt("D&D",-1)])]),_:1},8,["to","class"]),nt(I,{to:"/about",href:"#",class:it(["nav-link",{active:i.value===4}]),onClick:T[20]||(T[20]=Nt(x=>m(4),["prevent"])),onMouseenter:T[21]||(T[21]=x=>d(4))},{default:Gt(()=>[...T[31]||(T[31]=[yt("About",-1)])]),_:1},8,["class"])],544)],64))],2)}}},Rv=rn(Cv,[["__scopeId","data-v-e1b5a3e7"]]),Pv={class:"header"},Dv={class:"header-container"},Iv={class:"header-left liquid-glass"},Lv={__name:"HeaderV2",setup(n){return(e,t)=>{const i=ha("router-link");return Pe(),Ne("header",Pv,[j("div",Dv,[j("div",Iv,[nt(i,{to:"/admin-view","aria-label":"Admin"},{default:Gt(()=>[...t[0]||(t[0]=[j("img",{src:x_,alt:"Logo",class:"logo-image"},null,-1)])]),_:1})]),t[1]||(t[1]=j("div",{class:"header-spacer"},null,-1)),nt(Rv)])])}}},Uv=rn(Lv,[["__scopeId","data-v-713927ae"]]),Nv={__name:"LoadingScreen",props:{visible:{type:Boolean,default:!0}},setup(n){return(e,t)=>(Pe(),Ne("div",{class:it(["loading-screen",{"fade-out":!n.visible}])},[...t[0]||(t[0]=[j("div",{class:"spinner"},null,-1),j("p",{class:"loading-text"},"Loading…",-1)])],2))}},Fv=rn(Nv,[["__scopeId","data-v-e841dd92"]]);const Uu="183",Ov=0,mh=1,kv=2,ro=1,Bv=2,Gs=3,nr=0,dn=1,ii=2,ui=0,fs=1,yr=2,gh=3,_h=4,zv=5,xr=100,Vv=101,Hv=102,Gv=103,Wv=104,Xv=200,$v=201,qv=202,Yv=203,vc=204,xc=205,jv=206,Kv=207,Zv=208,Jv=209,Qv=210,ex=211,tx=212,nx=213,ix=214,Sc=0,bc=1,Mc=2,_s=3,yc=4,Ec=5,Tc=6,Ac=7,Yp=0,rx=1,sx=2,fi=0,jp=1,Kp=2,Zp=3,Nu=4,Jp=5,Qp=6,em=7,tm=300,Pr=301,vs=302,Sl=303,bl=304,Yo=306,wc=1e3,Ci=1001,Cc=1002,Xt=1003,ax=1004,Ta=1005,Qt=1006,Ml=1007,Er=1008,Rn=1009,nm=1010,im=1011,la=1012,Fu=1013,di=1014,ai=1015,En=1016,Ou=1017,ku=1018,ca=1020,rm=35902,sm=35899,am=1021,om=1022,zn=1023,Li=1026,Tr=1027,lm=1028,Bu=1029,xs=1030,zu=1031,Vu=1033,so=33776,ao=33777,oo=33778,lo=33779,Rc=35840,Pc=35841,Dc=35842,Ic=35843,Lc=36196,Uc=37492,Nc=37496,Fc=37488,Oc=37489,kc=37490,Bc=37491,zc=37808,Vc=37809,Hc=37810,Gc=37811,Wc=37812,Xc=37813,$c=37814,qc=37815,Yc=37816,jc=37817,Kc=37818,Zc=37819,Jc=37820,Qc=37821,eu=36492,tu=36494,nu=36495,iu=36283,ru=36284,su=36285,au=36286,ox=3200,lx=0,cx=1,Zi="",wn="srgb",Ss="srgb-linear",Mo="linear",pt="srgb",kr=7680,vh=519,ux=512,fx=513,hx=514,Hu=515,dx=516,px=517,Gu=518,mx=519,ou=35044,xh="300 es",oi=2e3,yo=2001;function gx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Eo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _x(){const n=Eo("canvas");return n.style.display="block",n}const Sh={};function To(...n){const e="THREE."+n.shift();console.log(e,...n)}function cm(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function $e(...n){n=cm(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function at(...n){n=cm(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ao(...n){const e=n.join(" ");e in Sh||(Sh[e]=!0,$e(...n))}function vx(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const xx={[Sc]:bc,[Mc]:Tc,[yc]:Ac,[_s]:Ec,[bc]:Sc,[Tc]:Mc,[Ac]:yc,[Ec]:_s};class ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yl=Math.PI/180,lu=180/Math.PI;function er(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function Sx(n,e){return(n%e+e)%e}function El(n,e,t){return(1-t)*n+t*e}function ri(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Es{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[a+0],p=s[a+1],g=s[a+2],b=s[a+3];if(f!==b||l!==h||c!==p||u!==g){let m=l*h+c*p+u*g+f*b;m<0&&(h=-h,p=-p,g=-g,b=-b,m=-m);let d=1-o;if(m<.9995){const v=Math.acos(m),y=Math.sin(v);d=Math.sin(d*v)/y,o=Math.sin(o*v)/y,l=l*d+h*o,c=c*d+p*o,u=u*d+g*o,f=f*d+b*o}else{l=l*d+h*o,c=c*d+p*o,u=u*d+g*o,f=f*d+b*o;const v=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=v,c*=v,u*=v,f*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-o*p,e[t+2]=c*g+u*p+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tl.copy(this).projectOnVector(e),this.sub(Tl)}reflect(e){return this.sub(Tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tl=new q,bh=new Es;class Je{constructor(e,t,i,r,s,a,o,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],b=r[0],m=r[3],d=r[6],v=r[1],y=r[4],S=r[7],P=r[2],T=r[5],I=r[8];return s[0]=a*b+o*v+l*P,s[3]=a*m+o*y+l*T,s[6]=a*d+o*S+l*I,s[1]=c*b+u*v+f*P,s[4]=c*m+u*y+f*T,s[7]=c*d+u*S+f*I,s[2]=h*b+p*v+g*P,s[5]=h*m+p*y+g*T,s[8]=h*d+p*S+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,p=c*s-a*l,g=t*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=f*b,e[1]=(r*c-u*i)*b,e[2]=(o*i-r*a)*b,e[3]=h*b,e[4]=(u*t-r*l)*b,e[5]=(r*s-o*t)*b,e[6]=p*b,e[7]=(i*l-c*t)*b,e[8]=(a*t-i*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Al.makeScale(e,t)),this}rotate(e){return this.premultiply(Al.makeRotation(-e)),this}translate(e,t){return this.premultiply(Al.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Al=new Je,Mh=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yh=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bx(){const n={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===pt&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(r.r=hs(r.r),r.g=hs(r.g),r.b=hs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Zi?Mo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ao("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ao("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ss]:{primaries:e,whitePoint:i,transfer:Mo,toXYZ:Mh,fromXYZ:yh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:Mh,fromXYZ:yh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),n}const ot=bx();function Ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Br;class Mx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Br===void 0&&(Br=Eo("canvas")),Br.width=e.width,Br.height=e.height;const r=Br.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Br}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Eo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ri(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ri(t[i]/255)*255):t[i]=Ri(t[i]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yx=0;class Wu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=er(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(wl(r[a].image)):s.push(wl(r[a]))}else s=wl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function wl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Mx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let Ex=0;const Cl=new q;class nn extends ys{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,i=Ci,r=Ci,s=Qt,a=Er,o=zn,l=Rn,c=nn.DEFAULT_ANISOTROPY,u=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=er(),this.name="",this.source=new Wu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cl).x}get height(){return this.source.getSize(Cl).y}get depth(){return this.source.getSize(Cl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wc:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case Cc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wc:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case Cc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=tm;nn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],b=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(p+1)/2,P=(d+1)/2,T=(u+h)/4,I=(f+b)/4,x=(g+m)/4;return y>S&&y>P?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=I/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=x/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=I/s,r=x/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(f-b)*(f-b)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-b)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tx extends ys{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new nn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Wu(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pn extends Tx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class um extends nn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ax extends nn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pt{constructor(e,t,i,r,s,a,o,l,c,u,f,h,p,g,b,m){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,p,g,b,m)}set(e,t,i,r,s,a,o,l,c,u,f,h,p,g,b,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=b,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/zr.setFromMatrixColumn(e,0).length(),s=1/zr.setFromMatrixColumn(e,1).length(),a=1/zr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*f,g=o*u,b=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-b*c,t[9]=-o*l,t[2]=b-h*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,b=c*f;t[0]=h+b*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=b+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,b=c*f;t[0]=h-b*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=b-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*f,g=o*u,b=o*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+b,t[1]=l*f,t[5]=b*c+h,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,g=o*l,b=o*c;t[0]=l*u,t[4]=b-h*f,t[8]=g*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-b*f}else if(e.order==="XZY"){const h=a*l,p=a*c,g=o*l,b=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+b,t[5]=a*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*u,t[10]=b*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wx,e,Cx)}lookAt(e,t,i){const r=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),zi.crossVectors(i,vn),zi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),zi.crossVectors(i,vn)),zi.normalize(),Aa.crossVectors(vn,zi),r[0]=zi.x,r[4]=Aa.x,r[8]=vn.x,r[1]=zi.y,r[5]=Aa.y,r[9]=vn.y,r[2]=zi.z,r[6]=Aa.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],b=i[6],m=i[10],d=i[14],v=i[3],y=i[7],S=i[11],P=i[15],T=r[0],I=r[4],x=r[8],A=r[12],K=r[1],D=r[5],F=r[9],z=r[13],Z=r[2],W=r[6],X=r[10],k=r[14],oe=r[3],he=r[7],ge=r[11],Me=r[15];return s[0]=a*T+o*K+l*Z+c*oe,s[4]=a*I+o*D+l*W+c*he,s[8]=a*x+o*F+l*X+c*ge,s[12]=a*A+o*z+l*k+c*Me,s[1]=u*T+f*K+h*Z+p*oe,s[5]=u*I+f*D+h*W+p*he,s[9]=u*x+f*F+h*X+p*ge,s[13]=u*A+f*z+h*k+p*Me,s[2]=g*T+b*K+m*Z+d*oe,s[6]=g*I+b*D+m*W+d*he,s[10]=g*x+b*F+m*X+d*ge,s[14]=g*A+b*z+m*k+d*Me,s[3]=v*T+y*K+S*Z+P*oe,s[7]=v*I+y*D+S*W+P*he,s[11]=v*x+y*F+S*X+P*ge,s[15]=v*A+y*z+S*k+P*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],b=e[7],m=e[11],d=e[15],v=l*p-c*h,y=o*p-c*f,S=o*h-l*f,P=a*p-c*u,T=a*h-l*u,I=a*f-o*u;return t*(b*v-m*y+d*S)-i*(g*v-m*P+d*T)+r*(g*y-b*P+d*I)-s*(g*S-b*T+m*I)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],b=e[13],m=e[14],d=e[15],v=t*o-i*a,y=t*l-r*a,S=t*c-s*a,P=i*l-r*o,T=i*c-s*o,I=r*c-s*l,x=u*b-f*g,A=u*m-h*g,K=u*d-p*g,D=f*m-h*b,F=f*d-p*b,z=h*d-p*m,Z=v*z-y*F+S*D+P*K-T*A+I*x;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/Z;return e[0]=(o*z-l*F+c*D)*W,e[1]=(r*F-i*z-s*D)*W,e[2]=(b*I-m*T+d*P)*W,e[3]=(h*T-f*I-p*P)*W,e[4]=(l*K-a*z-c*A)*W,e[5]=(t*z-r*K+s*A)*W,e[6]=(m*S-g*I-d*y)*W,e[7]=(u*I-h*S+p*y)*W,e[8]=(a*F-o*K+c*x)*W,e[9]=(i*K-t*F-s*x)*W,e[10]=(g*T-b*S+d*v)*W,e[11]=(f*S-u*T-p*v)*W,e[12]=(o*A-a*D-l*x)*W,e[13]=(t*D-i*A+r*x)*W,e[14]=(b*y-g*P-m*v)*W,e[15]=(u*P-f*y+h*v)*W,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,p=s*u,g=s*f,b=a*u,m=a*f,d=o*f,v=l*c,y=l*u,S=l*f,P=i.x,T=i.y,I=i.z;return r[0]=(1-(b+d))*P,r[1]=(p+S)*P,r[2]=(g-y)*P,r[3]=0,r[4]=(p-S)*T,r[5]=(1-(h+d))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(g+y)*I,r[9]=(m-v)*I,r[10]=(1-(h+b))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=zr.set(r[0],r[1],r[2]).length();const o=zr.set(r[4],r[5],r[6]).length(),l=zr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Nn.copy(this);const c=1/a,u=1/o,f=1/l;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=f,Nn.elements[9]*=f,Nn.elements[10]*=f,t.setFromRotationMatrix(Nn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=oi,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r);let g,b;if(l)g=s/(a-s),b=a*s/(a-s);else if(o===oi)g=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===yo)g=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=oi,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,b;if(l)g=1/(a-s),b=a/(a-s);else if(o===oi)g=-2/(a-s),b=-(a+s)/(a-s);else if(o===yo)g=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const zr=new q,Nn=new Pt,wx=new q(0,0,0),Cx=new q(1,1,1),zi=new q,Aa=new q,vn=new q,Eh=new Pt,Th=new Es;class Ui{constructor(e=0,t=0,i=0,r=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Th.setFromEuler(this),this.setFromQuaternion(Th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class fm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rx=0;const Ah=new q,Vr=new Es,xi=new Pt,wa=new q,Is=new q,Px=new q,Dx=new Es,wh=new q(1,0,0),Ch=new q(0,1,0),Rh=new q(0,0,1),Ph={type:"added"},Ix={type:"removed"},Hr={type:"childadded",child:null},Rl={type:"childremoved",child:null};class fn extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new q,t=new Ui,i=new Es,r=new q(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Je}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(wh,e)}rotateY(e){return this.rotateOnAxis(Ch,e)}rotateZ(e){return this.rotateOnAxis(Rh,e)}translateOnAxis(e,t){return Ah.copy(e).applyQuaternion(this.quaternion),this.position.add(Ah.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wh,e)}translateY(e){return this.translateOnAxis(Ch,e)}translateZ(e){return this.translateOnAxis(Rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wa.copy(e):wa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Is,wa,this.up):xi.lookAt(wa,Is,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),Vr.setFromRotationMatrix(xi),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ph),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ix),Rl.child=e,this.dispatchEvent(Rl),Rl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ph),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,Px),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,Dx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}fn.DEFAULT_UP=new q(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ar extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lx={type:"move"};class Pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,i),d=this._getHandJoint(c,b);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Lx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ar;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const hm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Ca={h:0,s:0,l:0};function Dl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ot.workingColorSpace){if(e=Sx(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Dl(a,s,e+1/3),this.g=Dl(a,s,e),this.b=Dl(a,s,e-1/3)}return ot.colorSpaceToWorking(this,r),this}setStyle(e,t=wn){function i(s){s!==void 0&&parseFloat(s)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wn){const i=hm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return ot.workingToColorSpace(jt.copy(this),e),Math.round(rt(jt.r*255,0,255))*65536+Math.round(rt(jt.g*255,0,255))*256+Math.round(rt(jt.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(jt.copy(this),t);const i=jt.r,r=jt.g,s=jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=wn){ot.workingToColorSpace(jt.copy(this),e);const t=jt.r,i=jt.g,r=jt.b;return e!==wn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(Ca);const i=El(Vi.h,Ca.h,t),r=El(Vi.s,Ca.s,t),s=El(Vi.l,Ca.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new We;We.NAMES=hm;class Ux extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Fn=new q,Si=new q,Il=new q,bi=new q,Gr=new q,Wr=new q,Dh=new q,Ll=new q,Ul=new q,Nl=new q,Fl=new It,Ol=new It,kl=new It;class Pn{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Fn.subVectors(e,t),r.cross(Fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Fn.subVectors(r,t),Si.subVectors(i,t),Il.subVectors(e,t);const a=Fn.dot(Fn),o=Fn.dot(Si),l=Fn.dot(Il),c=Si.dot(Si),u=Si.dot(Il),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bi.x),l.addScaledVector(a,bi.y),l.addScaledVector(o,bi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Fl.setScalar(0),Ol.setScalar(0),kl.setScalar(0),Fl.fromBufferAttribute(e,t),Ol.fromBufferAttribute(e,i),kl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Fl,s.x),a.addScaledVector(Ol,s.y),a.addScaledVector(kl,s.z),a}static isFrontFacing(e,t,i,r){return Fn.subVectors(i,t),Si.subVectors(e,t),Fn.cross(Si).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Fn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Pn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Gr.subVectors(r,i),Wr.subVectors(s,i),Ll.subVectors(e,i);const l=Gr.dot(Ll),c=Wr.dot(Ll);if(l<=0&&c<=0)return t.copy(i);Ul.subVectors(e,r);const u=Gr.dot(Ul),f=Wr.dot(Ul);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Gr,a);Nl.subVectors(e,s);const p=Gr.dot(Nl),g=Wr.dot(Nl);if(g>=0&&p<=g)return t.copy(s);const b=p*c-l*g;if(b<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Wr,o);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Dh.subVectors(s,r),o=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(Dh,o);const d=1/(m+b+h);return a=b*d,o=h*d,t.copy(i).addScaledVector(Gr,a).addScaledVector(Wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ma{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(s,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ra.copy(i.boundingBox)),Ra.applyMatrix4(e.matrixWorld),this.union(Ra)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),Pa.subVectors(this.max,Ls),Xr.subVectors(e.a,Ls),$r.subVectors(e.b,Ls),qr.subVectors(e.c,Ls),Hi.subVectors($r,Xr),Gi.subVectors(qr,$r),ur.subVectors(Xr,qr);let t=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-ur.z,ur.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,ur.z,0,-ur.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-ur.y,ur.x,0];return!Bl(t,Xr,$r,qr,Pa)||(t=[1,0,0,0,1,0,0,0,1],!Bl(t,Xr,$r,qr,Pa))?!1:(Da.crossVectors(Hi,Gi),t=[Da.x,Da.y,Da.z],Bl(t,Xr,$r,qr,Pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new q,new q,new q,new q,new q,new q,new q,new q],On=new q,Ra=new ma,Xr=new q,$r=new q,qr=new q,Hi=new q,Gi=new q,ur=new q,Ls=new q,Pa=new q,Da=new q,fr=new q;function Bl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){fr.fromArray(n,s);const o=r.x*Math.abs(fr.x)+r.y*Math.abs(fr.y)+r.z*Math.abs(fr.z),l=e.dot(fr),c=t.dot(fr),u=i.dot(fr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ut=new q,Ia=new Ge;let Nx=0;class mn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ou,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ia.fromBufferAttribute(this,t),Ia.applyMatrix3(e),this.setXY(t,Ia.x,Ia.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ou&&(e.usage=this.usage),e}}class dm extends mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class pm extends mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class In extends mn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Fx=new ma,Us=new q,zl=new q;class jo{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Fx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);const t=Us.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Us,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(zl)),this.expandByPoint(Us.copy(e.center).sub(zl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ox=0;const An=new Pt,Vl=new fn,Yr=new q,xn=new ma,Ns=new ma,zt=new q;class gn extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gx(e)?pm:dm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,i){return An.makeTranslation(e,t,i),this.applyMatrix4(An),this}scale(e,t,i){return An.makeScale(e,t,i),this.applyMatrix4(An),this}lookAt(e){return Vl.lookAt(e),Vl.updateMatrix(),this.applyMatrix4(Vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yr).negate(),this.translate(Yr.x,Yr.y,Yr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new In(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ma);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ns.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(xn.min,Ns.min),xn.expandByPoint(zt),zt.addVectors(xn.max,Ns.max),xn.expandByPoint(zt)):(xn.expandByPoint(Ns.min),xn.expandByPoint(Ns.max))}xn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)zt.fromBufferAttribute(o,c),l&&(Yr.fromBufferAttribute(e,c),zt.add(Yr)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new q,l[x]=new q;const c=new q,u=new q,f=new q,h=new Ge,p=new Ge,g=new Ge,b=new q,m=new q;function d(x,A,K){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,K),h.fromBufferAttribute(s,x),p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,K),u.sub(c),f.sub(c),p.sub(h),g.sub(h);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(b.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(D),o[x].add(b),o[A].add(b),o[K].add(b),l[x].add(m),l[A].add(m),l[K].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,A=v.length;x<A;++x){const K=v[x],D=K.start,F=K.count;for(let z=D,Z=D+F;z<Z;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const y=new q,S=new q,P=new q,T=new q;function I(x){P.fromBufferAttribute(r,x),T.copy(P);const A=o[x];y.copy(A),y.sub(P.multiplyScalar(P.dot(A))).normalize(),S.crossVectors(T,A);const D=S.dot(l[x])<0?-1:1;a.setXYZW(x,y.x,y.y,y.z,D)}for(let x=0,A=v.length;x<A;++x){const K=v[x],D=K.start,F=K.count;for(let z=D,Z=D+F;z<Z;z+=3)I(e.getX(z+0)),I(e.getX(z+1)),I(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new q,s=new q,a=new q,o=new q,l=new q,c=new q,u=new q,f=new q;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),b=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?p=l[b]*o.data.stride+o.offset:p=l[b]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new mn(h,u,f)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ou,this.updateRanges=[],this.version=0,this.uuid=er()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=er()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=er()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new q;class wo{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){To("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){To("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Bx=0;class Ts extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=er(),this.name="",this.type="Material",this.blending=fs,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vc,this.blendDst=xc,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(i.blending=this.blending),this.side!==nr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vc&&(i.blendSrc=this.blendSrc),this.blendDst!==xc&&(i.blendDst=this.blendDst),this.blendEquation!==xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class co extends Ts{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let jr;const Fs=new q,Kr=new q,Zr=new q,Jr=new Ge,Os=new Ge,mm=new Pt,La=new q,ks=new q,Ua=new q,Ih=new Ge,Hl=new Ge,Lh=new Ge;class Gl extends fn{constructor(e=new co){if(super(),this.isSprite=!0,this.type="Sprite",jr===void 0){jr=new gn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new kx(t,5);jr.setIndex([0,1,2,0,2,3]),jr.setAttribute("position",new wo(i,3,0,!1)),jr.setAttribute("uv",new wo(i,2,3,!1))}this.geometry=jr,this.material=e,this.center=new Ge(.5,.5),this.count=1}raycast(e,t){e.camera===null&&at('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Kr.setFromMatrixScale(this.matrixWorld),mm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Zr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Kr.multiplyScalar(-Zr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Na(La.set(-.5,-.5,0),Zr,a,Kr,r,s),Na(ks.set(.5,-.5,0),Zr,a,Kr,r,s),Na(Ua.set(.5,.5,0),Zr,a,Kr,r,s),Ih.set(0,0),Hl.set(1,0),Lh.set(1,1);let o=e.ray.intersectTriangle(La,ks,Ua,!1,Fs);if(o===null&&(Na(ks.set(-.5,.5,0),Zr,a,Kr,r,s),Hl.set(0,1),o=e.ray.intersectTriangle(La,Ua,ks,!1,Fs),o===null))return;const l=e.ray.origin.distanceTo(Fs);l<e.near||l>e.far||t.push({distance:l,point:Fs.clone(),uv:Pn.getInterpolation(Fs,La,ks,Ua,Ih,Hl,Lh,new Ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Na(n,e,t,i,r,s){Jr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Os.x=s*Jr.x-r*Jr.y,Os.y=r*Jr.x+s*Jr.y):Os.copy(Jr),n.copy(e),n.x+=Os.x,n.y+=Os.y,n.applyMatrix4(mm)}const yi=new q,Wl=new q,Fa=new q,Wi=new q,Xl=new q,Oa=new q,$l=new q;class gm{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Wl.copy(e).add(t).multiplyScalar(.5),Fa.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(Wl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Fa),o=Wi.dot(this.direction),l=-Wi.dot(Fa),c=Wi.lengthSq(),u=Math.abs(1-a*a);let f,h,p,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const b=1/u;f*=b,h*=b,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Wl).addScaledVector(Fa,h),p}intersectSphere(e,t){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),r=yi.dot(yi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,r,s){Xl.subVectors(t,e),Oa.subVectors(i,e),$l.crossVectors(Xl,Oa);let a=this.direction.dot($l),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wi.subVectors(this.origin,e);const l=o*this.direction.dot(Oa.crossVectors(Wi,Oa));if(l<0)return null;const c=o*this.direction.dot(Xl.cross(Wi));if(c<0||l+c>a)return null;const u=-o*Wi.dot($l);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xu extends Ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Yp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Uh=new Pt,hr=new gm,ka=new jo,Nh=new q,Ba=new q,za=new q,Va=new q,ql=new q,Ha=new q,Fh=new q,Ga=new q;class qn extends fn{constructor(e=new gn,t=new Xu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ha.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(ql.fromBufferAttribute(f,e),a?Ha.addScaledVector(ql,u):Ha.addScaledVector(ql.sub(t),u))}t.add(Ha)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(s),hr.copy(e.ray).recast(e.near),!(ka.containsPoint(hr.origin)===!1&&(hr.intersectSphere(ka,Nh)===null||hr.origin.distanceToSquared(Nh)>(e.far-e.near)**2))&&(Uh.copy(s).invert(),hr.copy(e.ray).applyMatrix4(Uh),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=h.length;g<b;g++){const m=h[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,P=y;S<P;S+=3){const T=o.getX(S),I=o.getX(S+1),x=o.getX(S+2);r=Wa(this,d,e,i,c,u,f,T,I,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),b=Math.min(o.count,p.start+p.count);for(let m=g,d=b;m<d;m+=3){const v=o.getX(m),y=o.getX(m+1),S=o.getX(m+2);r=Wa(this,a,e,i,c,u,f,v,y,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,b=h.length;g<b;g++){const m=h[g],d=a[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,P=y;S<P;S+=3){const T=S,I=S+1,x=S+2;r=Wa(this,d,e,i,c,u,f,T,I,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let m=g,d=b;m<d;m+=3){const v=m,y=m+1,S=m+2;r=Wa(this,a,e,i,c,u,f,v,y,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function zx(n,e,t,i,r,s,a,o){let l;if(e.side===dn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===nr,o),l===null)return null;Ga.copy(o),Ga.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ga);return c<t.near||c>t.far?null:{distance:c,point:Ga.clone(),object:n}}function Wa(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Ba),n.getVertexPosition(l,za),n.getVertexPosition(c,Va);const u=zx(n,e,t,i,Ba,za,Va,Fh);if(u){const f=new q;Pn.getBarycoord(Fh,Ba,za,Va,f),r&&(u.uv=Pn.getInterpolatedAttribute(r,o,l,c,f,new Ge)),s&&(u.uv1=Pn.getInterpolatedAttribute(s,o,l,c,f,new Ge)),a&&(u.normal=Pn.getInterpolatedAttribute(a,o,l,c,f,new q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new q,materialIndex:0};Pn.getNormal(Ba,za,Va,h.normal),u.face=h,u.barycoord=f}return u}class Vx extends nn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Xt,u=Xt,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yl=new q,Hx=new q,Gx=new Je;class _r{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Yl.subVectors(i,t).cross(Hx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Yl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Gx.getNormalMatrix(e),r=this.coplanarPoint(Yl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new jo,Wx=new Ge(.5,.5),Xa=new q;class _m{constructor(e=new _r,t=new _r,i=new _r,r=new _r,s=new _r,a=new _r){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=oi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],p=s[7],g=s[8],b=s[9],m=s[10],d=s[11],v=s[12],y=s[13],S=s[14],P=s[15];if(r[0].setComponents(c-a,p-u,d-g,P-v).normalize(),r[1].setComponents(c+a,p+u,d+g,P+v).normalize(),r[2].setComponents(c+o,p+f,d+b,P+y).normalize(),r[3].setComponents(c-o,p-f,d-b,P-y).normalize(),i)r[4].setComponents(l,h,m,S).normalize(),r[5].setComponents(c-l,p-h,d-m,P-S).normalize();else if(r[4].setComponents(c-l,p-h,d-m,P-S).normalize(),t===oi)r[5].setComponents(c+l,p+h,d+m,P+S).normalize();else if(t===yo)r[5].setComponents(l,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){dr.center.set(0,0,0);const t=Wx.distanceTo(e.center);return dr.radius=.7071067811865476+t,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Xa.x=r.normal.x>0?e.max.x:e.min.x,Xa.y=r.normal.y>0?e.max.y:e.min.y,Xa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vm extends Ts{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Oh=new Pt,cu=new gm,$a=new jo,qa=new q;class Xx extends fn{constructor(e=new gn,t=new vm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$a.copy(i.boundingSphere),$a.applyMatrix4(r),$a.radius+=s,e.ray.intersectsSphere($a)===!1)return;Oh.copy(r).invert(),cu.copy(e.ray).applyMatrix4(Oh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=h,b=p;g<b;g++){const m=c.getX(g);qa.fromBufferAttribute(f,m),kh(qa,m,l,r,e,t,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let g=h,b=p;g<b;g++)qa.fromBufferAttribute(f,g),kh(qa,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function kh(n,e,t,i,r,s,a){const o=cu.distanceSqToPoint(n);if(o<t){const l=new q;cu.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class xm extends nn{constructor(e=[],t=Pr,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ko extends nn{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ua extends nn{constructor(e,t,i=di,r,s,a,o=Xt,l=Xt,c,u=Li,f=1){if(u!==Li&&u!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $x extends ua{constructor(e,t=di,i=Pr,r,s,a=Xt,o=Xt,l,c=Li){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Sm extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ga extends gn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new In(c,3)),this.setAttribute("normal",new In(u,3)),this.setAttribute("uv",new In(f,2));function g(b,m,d,v,y,S,P,T,I,x,A){const K=S/I,D=P/x,F=S/2,z=P/2,Z=T/2,W=I+1,X=x+1;let k=0,oe=0;const he=new q;for(let ge=0;ge<X;ge++){const Me=ge*D-z;for(let xe=0;xe<W;xe++){const He=xe*K-F;he[b]=He*v,he[m]=Me*y,he[d]=Z,c.push(he.x,he.y,he.z),he[b]=0,he[m]=0,he[d]=T>0?1:-1,u.push(he.x,he.y,he.z),f.push(xe/I),f.push(1-ge/x),k+=1}}for(let ge=0;ge<x;ge++)for(let Me=0;Me<I;Me++){const xe=h+Me+W*ge,He=h+Me+W*(ge+1),et=h+(Me+1)+W*(ge+1),je=h+(Me+1)+W*ge;l.push(xe,He,je),l.push(He,et,je),oe+=6}o.addGroup(p,oe,A),p+=oe,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Zo extends gn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,p=[],g=[],b=[],m=[];for(let d=0;d<u;d++){const v=d*h-a;for(let y=0;y<c;y++){const S=y*f-s;g.push(S,-v,0),b.push(0,0,1),m.push(y/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){const y=v+c*d,S=v+c*(d+1),P=v+1+c*(d+1),T=v+1+c*d;p.push(y,S,T),p.push(S,P,T)}this.setIndex(p),this.setAttribute("position",new In(g,3)),this.setAttribute("normal",new In(b,3)),this.setAttribute("uv",new In(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.widthSegments,e.heightSegments)}}function bs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function on(n){const e={};for(let t=0;t<n.length;t++){const i=bs(n[t]);for(const r in i)e[r]=i[r]}return e}function qx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function bm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Co={clone:bs,merge:on};var Yx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $t extends Ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yx,this.fragmentShader=jx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=qx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Kx extends $t{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zx extends Ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ox,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jx extends Ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ya=new q,ja=new Es,Zn=new q;class Mm extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ya,ja,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,ja,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ya,ja,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ya,ja,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new q,Bh=new Ge,zh=new Ge;class Cn extends Mm{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=lu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lu*2*Math.atan(Math.tan(yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,Bh,zh),t.subVectors(zh,Bh)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class $u extends Mm{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qr=-90,es=1;class Qx extends fn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Cn(Qr,es,e,t);r.layers=this.layers,this.add(r);const s=new Cn(Qr,es,e,t);s.layers=this.layers,this.add(s);const a=new Cn(Qr,es,e,t);a.layers=this.layers,this.add(a);const o=new Cn(Qr,es,e,t);o.layers=this.layers,this.add(o);const l=new Cn(Qr,es,e,t);l.layers=this.layers,this.add(l);const c=new Cn(Qr,es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class eS extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class tS{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=nS.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function nS(){this._document.hidden===!1&&this.reset()}class iS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,$e("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Vh(n,e,t,i){const r=rS(i);switch(t){case am:return n*e;case lm:return n*e/r.components*r.byteLength;case Bu:return n*e/r.components*r.byteLength;case xs:return n*e*2/r.components*r.byteLength;case zu:return n*e*2/r.components*r.byteLength;case om:return n*e*3/r.components*r.byteLength;case zn:return n*e*4/r.components*r.byteLength;case Vu:return n*e*4/r.components*r.byteLength;case so:case ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oo:case lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pc:case Ic:return Math.max(n,16)*Math.max(e,8)/4;case Rc:case Dc:return Math.max(n,8)*Math.max(e,8)/2;case Lc:case Uc:case Fc:case Oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Nc:case kc:case Bc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case $c:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case qc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Yc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case jc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Jc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Qc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case eu:case tu:case nu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case iu:case ru:return Math.ceil(n/4)*Math.ceil(e/4)*8;case su:case au:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rS(n){switch(n){case Rn:case nm:return{byteLength:1,components:1};case la:case im:case En:return{byteLength:2,components:1};case Ou:case ku:return{byteLength:2,components:4};case di:case Fu:case ai:return{byteLength:4,components:1};case rm:case sm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uu}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uu);function ym(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function sS(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],b=f[p];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++h,f[h]=b)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const b=f[p];n.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var aS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oS=`#ifdef USE_ALPHAHASH
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
#endif`,lS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hS=`#ifdef USE_AOMAP
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
#endif`,dS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pS=`#ifdef USE_BATCHING
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
#endif`,mS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_S=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xS=`#ifdef USE_IRIDESCENCE
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
#endif`,SS=`#ifdef USE_BUMPMAP
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
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,MS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ES=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,AS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,CS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,RS=`#define PI 3.141592653589793
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
} // validated`,PS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,DS=`vec3 transformedNormal = objectNormal;
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
#endif`,IS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,US=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FS="gl_FragColor = linearToOutputTexel( gl_FragColor );",OS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kS=`#ifdef USE_ENVMAP
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
#endif`,BS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zS=`#ifdef USE_ENVMAP
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
#endif`,VS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HS=`#ifdef USE_ENVMAP
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
#endif`,GS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$S=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qS=`#ifdef USE_GRADIENTMAP
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
}`,YS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZS=`uniform bool receiveShadow;
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
#endif`,JS=`#ifdef USE_ENVMAP
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
#endif`,QS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ib=`PhysicalMaterial material;
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
#endif`,rb=`uniform sampler2D dfgLUT;
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
}`,sb=`
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
#endif`,ab=`#if defined( RE_IndirectDiffuse )
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
#endif`,ob=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ub=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,db=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mb=`#if defined( USE_POINTS_UV )
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
#endif`,gb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_b=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bb=`#ifdef USE_MORPHTARGETS
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
#endif`,Mb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Eb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cb=`#ifdef USE_NORMALMAP
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
#endif`,Rb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Db=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ib=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ub=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ob=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wb=`float getShadowMask() {
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
}`,Xb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$b=`#ifdef USE_SKINNING
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
#endif`,qb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yb=`#ifdef USE_SKINNING
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
#endif`,jb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qb=`#ifdef USE_TRANSMISSION
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
#endif`,eM=`#ifdef USE_TRANSMISSION
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
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aM=`uniform sampler2D t2D;
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
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`#include <common>
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
}`,hM=`#if DEPTH_PACKING == 3200
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
}`,dM=`#define DISTANCE
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
}`,pM=`#define DISTANCE
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
}`,mM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_M=`uniform float scale;
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
}`,vM=`uniform vec3 diffuse;
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
}`,xM=`#include <common>
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
}`,SM=`uniform vec3 diffuse;
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
}`,bM=`#define LAMBERT
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
}`,MM=`#define LAMBERT
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
}`,yM=`#define MATCAP
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
}`,EM=`#define MATCAP
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
}`,TM=`#define NORMAL
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
}`,AM=`#define NORMAL
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
}`,wM=`#define PHONG
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
}`,CM=`#define PHONG
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
}`,RM=`#define STANDARD
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
}`,PM=`#define STANDARD
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
}`,DM=`#define TOON
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
}`,IM=`#define TOON
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
}`,LM=`uniform float size;
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
}`,UM=`uniform vec3 diffuse;
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
}`,NM=`#include <common>
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
}`,FM=`uniform vec3 color;
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
}`,OM=`uniform float rotation;
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
}`,kM=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:aS,alphahash_pars_fragment:oS,alphamap_fragment:lS,alphamap_pars_fragment:cS,alphatest_fragment:uS,alphatest_pars_fragment:fS,aomap_fragment:hS,aomap_pars_fragment:dS,batching_pars_vertex:pS,batching_vertex:mS,begin_vertex:gS,beginnormal_vertex:_S,bsdfs:vS,iridescence_fragment:xS,bumpmap_pars_fragment:SS,clipping_planes_fragment:bS,clipping_planes_pars_fragment:MS,clipping_planes_pars_vertex:yS,clipping_planes_vertex:ES,color_fragment:TS,color_pars_fragment:AS,color_pars_vertex:wS,color_vertex:CS,common:RS,cube_uv_reflection_fragment:PS,defaultnormal_vertex:DS,displacementmap_pars_vertex:IS,displacementmap_vertex:LS,emissivemap_fragment:US,emissivemap_pars_fragment:NS,colorspace_fragment:FS,colorspace_pars_fragment:OS,envmap_fragment:kS,envmap_common_pars_fragment:BS,envmap_pars_fragment:zS,envmap_pars_vertex:VS,envmap_physical_pars_fragment:JS,envmap_vertex:HS,fog_vertex:GS,fog_pars_vertex:WS,fog_fragment:XS,fog_pars_fragment:$S,gradientmap_pars_fragment:qS,lightmap_pars_fragment:YS,lights_lambert_fragment:jS,lights_lambert_pars_fragment:KS,lights_pars_begin:ZS,lights_toon_fragment:QS,lights_toon_pars_fragment:eb,lights_phong_fragment:tb,lights_phong_pars_fragment:nb,lights_physical_fragment:ib,lights_physical_pars_fragment:rb,lights_fragment_begin:sb,lights_fragment_maps:ab,lights_fragment_end:ob,logdepthbuf_fragment:lb,logdepthbuf_pars_fragment:cb,logdepthbuf_pars_vertex:ub,logdepthbuf_vertex:fb,map_fragment:hb,map_pars_fragment:db,map_particle_fragment:pb,map_particle_pars_fragment:mb,metalnessmap_fragment:gb,metalnessmap_pars_fragment:_b,morphinstance_vertex:vb,morphcolor_vertex:xb,morphnormal_vertex:Sb,morphtarget_pars_vertex:bb,morphtarget_vertex:Mb,normal_fragment_begin:yb,normal_fragment_maps:Eb,normal_pars_fragment:Tb,normal_pars_vertex:Ab,normal_vertex:wb,normalmap_pars_fragment:Cb,clearcoat_normal_fragment_begin:Rb,clearcoat_normal_fragment_maps:Pb,clearcoat_pars_fragment:Db,iridescence_pars_fragment:Ib,opaque_fragment:Lb,packing:Ub,premultiplied_alpha_fragment:Nb,project_vertex:Fb,dithering_fragment:Ob,dithering_pars_fragment:kb,roughnessmap_fragment:Bb,roughnessmap_pars_fragment:zb,shadowmap_pars_fragment:Vb,shadowmap_pars_vertex:Hb,shadowmap_vertex:Gb,shadowmask_pars_fragment:Wb,skinbase_vertex:Xb,skinning_pars_vertex:$b,skinning_vertex:qb,skinnormal_vertex:Yb,specularmap_fragment:jb,specularmap_pars_fragment:Kb,tonemapping_fragment:Zb,tonemapping_pars_fragment:Jb,transmission_fragment:Qb,transmission_pars_fragment:eM,uv_pars_fragment:tM,uv_pars_vertex:nM,uv_vertex:iM,worldpos_vertex:rM,background_vert:sM,background_frag:aM,backgroundCube_vert:oM,backgroundCube_frag:lM,cube_vert:cM,cube_frag:uM,depth_vert:fM,depth_frag:hM,distance_vert:dM,distance_frag:pM,equirect_vert:mM,equirect_frag:gM,linedashed_vert:_M,linedashed_frag:vM,meshbasic_vert:xM,meshbasic_frag:SM,meshlambert_vert:bM,meshlambert_frag:MM,meshmatcap_vert:yM,meshmatcap_frag:EM,meshnormal_vert:TM,meshnormal_frag:AM,meshphong_vert:wM,meshphong_frag:CM,meshphysical_vert:RM,meshphysical_frag:PM,meshtoon_vert:DM,meshtoon_frag:IM,points_vert:LM,points_frag:UM,shadow_vert:NM,shadow_frag:FM,sprite_vert:OM,sprite_frag:kM},Te={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},ni={basic:{uniforms:on([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:on([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new We(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:on([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:on([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:on([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new We(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:on([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:on([Te.points,Te.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:on([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:on([Te.common,Te.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:on([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:on([Te.sprite,Te.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:on([Te.common,Te.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:on([Te.lights,Te.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};ni.physical={uniforms:on([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Ka={r:0,b:0,g:0},pr=new Ui,BM=new Pt;function zM(n,e,t,i,r,s){const a=new We(0);let o=r===!0?0:1,l,c,u=null,f=0,h=null;function p(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const S=v.backgroundBlurriness>0;y=e.get(y,S)}return y}function g(v){let y=!1;const S=p(v);S===null?m(a,o):S&&S.isColor&&(m(S,1),y=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(v,y){const S=p(y);S&&(S.isCubeTexture||S.mapping===Yo)?(c===void 0&&(c=new qn(new ga(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:bs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),pr.copy(y.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(BM.makeRotationFromEuler(pr)),c.material.toneMapped=ot.getTransfer(S.colorSpace)!==pt,(u!==S||f!==S.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,h=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new qn(new Zo(2,2),new $t({name:"BackgroundMaterial",uniforms:bs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ot.getTransfer(S.colorSpace)!==pt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,h=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,y){v.getRGB(Ka,bm(n)),t.buffers.color.setClear(Ka.r,Ka.g,Ka.b,y,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:b,dispose:d}}function VM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(D,F,z,Z,W){let X=!1;const k=f(D,Z,z,F);s!==k&&(s=k,c(s.object)),X=p(D,Z,z,W),X&&g(D,Z,z,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(D,F,z,Z),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function f(D,F,z,Z){const W=Z.wireframe===!0;let X=i[F.id];X===void 0&&(X={},i[F.id]=X);const k=D.isInstancedMesh===!0?D.id:0;let oe=X[k];oe===void 0&&(oe={},X[k]=oe);let he=oe[z.id];he===void 0&&(he={},oe[z.id]=he);let ge=he[W];return ge===void 0&&(ge=h(l()),he[W]=ge),ge}function h(D){const F=[],z=[],Z=[];for(let W=0;W<t;W++)F[W]=0,z[W]=0,Z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:Z,object:D,attributes:{},index:null}}function p(D,F,z,Z){const W=s.attributes,X=F.attributes;let k=0;const oe=z.getAttributes();for(const he in oe)if(oe[he].location>=0){const Me=W[he];let xe=X[he];if(xe===void 0&&(he==="instanceMatrix"&&D.instanceMatrix&&(xe=D.instanceMatrix),he==="instanceColor"&&D.instanceColor&&(xe=D.instanceColor)),Me===void 0||Me.attribute!==xe||xe&&Me.data!==xe.data)return!0;k++}return s.attributesNum!==k||s.index!==Z}function g(D,F,z,Z){const W={},X=F.attributes;let k=0;const oe=z.getAttributes();for(const he in oe)if(oe[he].location>=0){let Me=X[he];Me===void 0&&(he==="instanceMatrix"&&D.instanceMatrix&&(Me=D.instanceMatrix),he==="instanceColor"&&D.instanceColor&&(Me=D.instanceColor));const xe={};xe.attribute=Me,Me&&Me.data&&(xe.data=Me.data),W[he]=xe,k++}s.attributes=W,s.attributesNum=k,s.index=Z}function b(){const D=s.newAttributes;for(let F=0,z=D.length;F<z;F++)D[F]=0}function m(D){d(D,0)}function d(D,F){const z=s.newAttributes,Z=s.enabledAttributes,W=s.attributeDivisors;z[D]=1,Z[D]===0&&(n.enableVertexAttribArray(D),Z[D]=1),W[D]!==F&&(n.vertexAttribDivisor(D,F),W[D]=F)}function v(){const D=s.newAttributes,F=s.enabledAttributes;for(let z=0,Z=F.length;z<Z;z++)F[z]!==D[z]&&(n.disableVertexAttribArray(z),F[z]=0)}function y(D,F,z,Z,W,X,k){k===!0?n.vertexAttribIPointer(D,F,z,W,X):n.vertexAttribPointer(D,F,z,Z,W,X)}function S(D,F,z,Z){b();const W=Z.attributes,X=z.getAttributes(),k=F.defaultAttributeValues;for(const oe in X){const he=X[oe];if(he.location>=0){let ge=W[oe];if(ge===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(ge=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(ge=D.instanceColor)),ge!==void 0){const Me=ge.normalized,xe=ge.itemSize,He=e.get(ge);if(He===void 0)continue;const et=He.buffer,je=He.type,V=He.bytesPerElement,U=je===n.INT||je===n.UNSIGNED_INT||ge.gpuType===Fu;if(ge.isInterleavedBufferAttribute){const Y=ge.data,ie=Y.stride,ue=ge.offset;if(Y.isInstancedInterleavedBuffer){for(let _e=0;_e<he.locationSize;_e++)d(he.location+_e,Y.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let _e=0;_e<he.locationSize;_e++)m(he.location+_e);n.bindBuffer(n.ARRAY_BUFFER,et);for(let _e=0;_e<he.locationSize;_e++)y(he.location+_e,xe/he.locationSize,je,Me,ie*V,(ue+xe/he.locationSize*_e)*V,U)}else{if(ge.isInstancedBufferAttribute){for(let Y=0;Y<he.locationSize;Y++)d(he.location+Y,ge.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Y=0;Y<he.locationSize;Y++)m(he.location+Y);n.bindBuffer(n.ARRAY_BUFFER,et);for(let Y=0;Y<he.locationSize;Y++)y(he.location+Y,xe/he.locationSize,je,Me,xe*V,xe/he.locationSize*Y*V,U)}}else if(k!==void 0){const Me=k[oe];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(he.location,Me);break;case 3:n.vertexAttrib3fv(he.location,Me);break;case 4:n.vertexAttrib4fv(he.location,Me);break;default:n.vertexAttrib1fv(he.location,Me)}}}}v()}function P(){A();for(const D in i){const F=i[D];for(const z in F){const Z=F[z];for(const W in Z){const X=Z[W];for(const k in X)u(X[k].object),delete X[k];delete Z[W]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;const F=i[D.id];for(const z in F){const Z=F[z];for(const W in Z){const X=Z[W];for(const k in X)u(X[k].object),delete X[k];delete Z[W]}}delete i[D.id]}function I(D){for(const F in i){const z=i[F];for(const Z in z){const W=z[Z];if(W[D.id]===void 0)continue;const X=W[D.id];for(const k in X)u(X[k].object),delete X[k];delete W[D.id]}}}function x(D){for(const F in i){const z=i[F],Z=D.isInstancedMesh===!0?D.id:0,W=z[Z];if(W!==void 0){for(const X in W){const k=W[X];for(const oe in k)u(k[oe].object),delete k[oe];delete W[X]}delete z[Z],Object.keys(z).length===0&&delete i[F]}}}function A(){K(),a=!0,s!==r&&(s=r,c(s.object))}function K(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:K,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:m,disableUnusedAttributes:v}}function HM(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];t.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let b=0;b<f;b++)g+=u[b]*h[b];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function GM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(I){return!(I!==zn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const x=I===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Rn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ai&&!x)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&($e("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:S,maxSamples:P,samples:T}}function WM(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new _r,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,b=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,y=v*4;let S=d.clippingState||null;l.value=S,S=u(g,h,y,p);for(let P=0;P!==y;++P)S[P]=t[P];d.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const b=f!==null?f.length:0;let m=null;if(b!==0){if(m=l.value,g!==!0||m===null){const d=p+b*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,S=p;y!==b;++y,S+=4)a.copy(f[y]).applyMatrix4(v,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}const Ji=4,Hh=[.125,.215,.35,.446,.526,.582],Sr=20,XM=256,Bs=new $u,Gh=new We;let jl=null,Kl=0,Zl=0,Jl=!1;const $M=new q;class Wh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=$M}=s;jl=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),Jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(jl,Kl,Zl),this._renderer.xr.enabled=Jl,e.scissorTest=!1,ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pr||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jl=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),Jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:En,format:zn,colorSpace:Ss,depthBuffer:!1},r=Xh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xh(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qM(s)),this._blurMaterial=jM(s,e,t),this._ggxMaterial=YM(s,e,t)}return r}_compileMaterial(e){const t=new qn(new gn,e);this._renderer.compile(t,Bs)}_sceneToCubeUV(e,t,i,r,s){const l=new Cn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Gh),f.toneMapping=fi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qn(new ga,new Xu({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,m=b.material;let d=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,d=!0):(m.color.copy(Gh),d=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):S===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const P=this._cubeSize;ts(r,S*P,y>2?P:0,P,P),f.setRenderTarget(r),d&&f.render(b,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Pr||e.mapping===vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$h());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ts(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Bs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,p=f*h,{_lodMax:g}=this,b=this._sizeLods[i],m=3*b*(i>g-Ji?i-g+Ji:0),d=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,ts(s,m,d,3*b,2*b),r.setRenderTarget(s),r.render(o,Bs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,ts(e,m,d,3*b,2*b),r.setRenderTarget(e),r.render(o,Bs)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&at("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Sr-1),b=s/g,m=isFinite(s)?1+Math.floor(u*b):Sr;m>Sr&&$e(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Sr}`);const d=[];let v=0;for(let I=0;I<Sr;++I){const x=I/b,A=Math.exp(-x*x/2);d.push(A),I===0?v+=A:I<m&&(v+=2*A)}for(let I=0;I<d.length;I++)d[I]=d[I]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const S=this._sizeLods[r],P=3*S*(r>y-Ji?r-y+Ji:0),T=4*(this._cubeSize-S);ts(t,P,T,3*S,2*S),l.setRenderTarget(t),l.render(f,Bs)}}function qM(n){const e=[],t=[],i=[];let r=n;const s=n-Ji+1+Hh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Ji?l=Hh[a-n+Ji-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,b=3,m=2,d=1,v=new Float32Array(b*g*p),y=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let T=0;T<p;T++){const I=T%3*2/3-1,x=T>2?0:-1,A=[I,x,0,I+2/3,x,0,I+2/3,x+1,0,I,x,0,I+2/3,x+1,0,I,x+1,0];v.set(A,b*g*T),y.set(h,m*g*T);const K=[T,T,T,T,T,T];S.set(K,d*g*T)}const P=new gn;P.setAttribute("position",new mn(v,b)),P.setAttribute("uv",new mn(y,m)),P.setAttribute("faceIndex",new mn(S,d)),i.push(new qn(P,null)),r>Ji&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Xh(n,e,t){const i=new pn(n,e,t);return i.texture.mapping=Yo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ts(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function YM(n,e,t){return new $t({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:XM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function jM(n,e,t){const i=new Float32Array(Sr),r=new q(0,1,0);return new $t({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function $h(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jo(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function qh(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Jo(){return`

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
	`}class Em extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new xm(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ga(5,5,5),s=new $t({name:"CubemapFromEquirect",uniforms:bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:ui});s.uniforms.tEquirect.value=t;const a=new qn(r,s),o=t.minFilter;return t.minFilter===Er&&(t.minFilter=Qt),new Qx(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function KM(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,p=!1){return h==null?null:p?a(h):s(h)}function s(h){if(h&&h.isTexture){const p=h.mapping;if(p===Sl||p===bl)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const b=new Em(g.height);return b.fromEquirectangularTexture(n,h),e.set(h,b),h.addEventListener("dispose",c),o(b.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,g=p===Sl||p===bl,b=p===Pr||p===vs;if(g||b){let m=t.get(h);const d=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new Wh(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const v=h.image;return g&&v&&v.height>0||b&&v&&l(v)?(i===null&&(i=new Wh(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===Sl?h.mapping=Pr:p===bl&&(h.mapping=vs),h}function l(h){let p=0;const g=6;for(let b=0;b<g;b++)h[b]!==void 0&&p++;return p===g}function c(h){const p=h.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function ZM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ao("WebGLRenderer: "+i+" extension not supported."),r}}}function JM(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,g=f.attributes.position;let b=0;if(g===void 0)return;if(p!==null){const v=p.array;b=p.version;for(let y=0,S=v.length;y<S;y+=3){const P=v[y+0],T=v[y+1],I=v[y+2];h.push(P,T,T,I,I,P)}}else{const v=g.array;b=g.version;for(let y=0,S=v.length/3-1;y<S;y+=3){const P=y+0,T=y+1,I=y+2;h.push(P,T,T,I,I,P)}}const m=new(g.count>=65535?pm:dm)(h,1);m.version=b;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function QM(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*a),t.update(p,i,1)}function c(h,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,h*a,g),t.update(p,i,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function f(h,p,g,b){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/a,p[d],b[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,b,0,g);let d=0;for(let v=0;v<g;v++)d+=p[v]*b[v];t.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function ey(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:at("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ty(n,e,t){const i=new WeakMap,r=new It;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let K=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",K)};var p=K;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),b===!0&&(S=2),m===!0&&(S=3);let P=o.attributes.position.count*S,T=1;P>e.maxTextureSize&&(T=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const I=new Float32Array(P*T*4*f),x=new um(I,P,T,f);x.type=ai,x.needsUpdate=!0;const A=S*4;for(let D=0;D<f;D++){const F=d[D],z=v[D],Z=y[D],W=P*T*4*D;for(let X=0;X<F.count;X++){const k=X*A;g===!0&&(r.fromBufferAttribute(F,X),I[W+k+0]=r.x,I[W+k+1]=r.y,I[W+k+2]=r.z,I[W+k+3]=0),b===!0&&(r.fromBufferAttribute(z,X),I[W+k+4]=r.x,I[W+k+5]=r.y,I[W+k+6]=r.z,I[W+k+7]=0),m===!0&&(r.fromBufferAttribute(Z,X),I[W+k+8]=r.x,I[W+k+9]=r.y,I[W+k+10]=r.z,I[W+k+11]=Z.itemSize===4?r.w:1)}}h={count:f,texture:x,size:new Ge(P,T)},i.set(o,h),o.addEventListener("dispose",K)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const b=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",b),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function ny(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const iy={[jp]:"LINEAR_TONE_MAPPING",[Kp]:"REINHARD_TONE_MAPPING",[Zp]:"CINEON_TONE_MAPPING",[Nu]:"ACES_FILMIC_TONE_MAPPING",[Qp]:"AGX_TONE_MAPPING",[em]:"NEUTRAL_TONE_MAPPING",[Jp]:"CUSTOM_TONE_MAPPING"};function ry(n,e,t,i,r){const s=new pn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new pn(e,t,{type:En,depthBuffer:!1,stencilBuffer:!1}),o=new gn;o.setAttribute("position",new In([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new In([0,2,0,0,2,0],2));const l=new Kx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new qn(o,l),u=new $u(-1,1,1,-1,0,1);let f=null,h=null,p=!1,g,b=null,m=[],d=!1;this.setSize=function(v,y){s.setSize(v,y),a.setSize(v,y);for(let S=0;S<m.length;S++){const P=m[S];P.setSize&&P.setSize(v,y)}},this.setEffects=function(v){m=v,d=m.length>0&&m[0].isRenderPass===!0;const y=s.width,S=s.height;for(let P=0;P<m.length;P++){const T=m[P];T.setSize&&T.setSize(y,S)}},this.begin=function(v,y){if(p||v.toneMapping===fi&&m.length===0)return!1;if(b=y,y!==null){const S=y.width,P=y.height;(s.width!==S||s.height!==P)&&this.setSize(S,P)}return d===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=fi,!0},this.hasRenderPass=function(){return d},this.end=function(v,y){v.toneMapping=g,p=!0;let S=s,P=a;for(let T=0;T<m.length;T++){const I=m[T];if(I.enabled!==!1&&(I.render(v,P,S,y),I.needsSwap!==!1)){const x=S;S=P,P=x}}if(f!==v.outputColorSpace||h!==v.toneMapping){f=v.outputColorSpace,h=v.toneMapping,l.defines={},ot.getTransfer(f)===pt&&(l.defines.SRGB_TRANSFER="");const T=iy[h];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(b),v.render(c,u),b=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Tm=new nn,uu=new ua(1,1),Am=new um,wm=new Ax,Cm=new xm,Yh=[],jh=[],Kh=new Float32Array(16),Zh=new Float32Array(9),Jh=new Float32Array(4);function As(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Yh[r];if(s===void 0&&(s=new Float32Array(r),Yh[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Qo(n,e){let t=jh[e];t===void 0&&(t=new Int32Array(e),jh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function sy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ay(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function oy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function ly(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function cy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,i))return;Jh.set(i),n.uniformMatrix2fv(this.addr,!1,Jh),kt(t,i)}}function uy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,i))return;Zh.set(i),n.uniformMatrix3fv(this.addr,!1,Zh),kt(t,i)}}function fy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,i))return;Kh.set(i),n.uniformMatrix4fv(this.addr,!1,Kh),kt(t,i)}}function hy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function dy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function py(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function my(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function gy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _y(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function vy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function Sy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(uu.compareFunction=t.isReversedDepthBuffer()?Gu:Hu,s=uu):s=Tm,t.setTexture2D(e||s,r)}function by(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||wm,r)}function My(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Cm,r)}function yy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Am,r)}function Ey(n){switch(n){case 5126:return sy;case 35664:return ay;case 35665:return oy;case 35666:return ly;case 35674:return cy;case 35675:return uy;case 35676:return fy;case 5124:case 35670:return hy;case 35667:case 35671:return dy;case 35668:case 35672:return py;case 35669:case 35673:return my;case 5125:return gy;case 36294:return _y;case 36295:return vy;case 36296:return xy;case 35678:case 36198:case 36298:case 36306:case 35682:return Sy;case 35679:case 36299:case 36307:return by;case 35680:case 36300:case 36308:case 36293:return My;case 36289:case 36303:case 36311:case 36292:return yy}}function Ty(n,e){n.uniform1fv(this.addr,e)}function Ay(n,e){const t=As(e,this.size,2);n.uniform2fv(this.addr,t)}function wy(n,e){const t=As(e,this.size,3);n.uniform3fv(this.addr,t)}function Cy(n,e){const t=As(e,this.size,4);n.uniform4fv(this.addr,t)}function Ry(n,e){const t=As(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Py(n,e){const t=As(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Dy(n,e){const t=As(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Iy(n,e){n.uniform1iv(this.addr,e)}function Ly(n,e){n.uniform2iv(this.addr,e)}function Uy(n,e){n.uniform3iv(this.addr,e)}function Ny(n,e){n.uniform4iv(this.addr,e)}function Fy(n,e){n.uniform1uiv(this.addr,e)}function Oy(n,e){n.uniform2uiv(this.addr,e)}function ky(n,e){n.uniform3uiv(this.addr,e)}function By(n,e){n.uniform4uiv(this.addr,e)}function zy(n,e,t){const i=this.cache,r=e.length,s=Qo(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=uu:a=Tm;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Vy(n,e,t){const i=this.cache,r=e.length,s=Qo(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||wm,s[a])}function Hy(n,e,t){const i=this.cache,r=e.length,s=Qo(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Cm,s[a])}function Gy(n,e,t){const i=this.cache,r=e.length,s=Qo(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Am,s[a])}function Wy(n){switch(n){case 5126:return Ty;case 35664:return Ay;case 35665:return wy;case 35666:return Cy;case 35674:return Ry;case 35675:return Py;case 35676:return Dy;case 5124:case 35670:return Iy;case 35667:case 35671:return Ly;case 35668:case 35672:return Uy;case 35669:case 35673:return Ny;case 5125:return Fy;case 36294:return Oy;case 36295:return ky;case 36296:return By;case 35678:case 36198:case 36298:case 36306:case 35682:return zy;case 35679:case 36299:case 36307:return Vy;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Gy}}class Xy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ey(t.type)}}class $y{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wy(t.type)}}class qy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ql=/(\w+)(\])?(\[|\.)?/g;function Qh(n,e){n.seq.push(e),n.map[e.id]=e}function Yy(n,e,t){const i=n.name,r=i.length;for(Ql.lastIndex=0;;){const s=Ql.exec(i),a=Ql.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Qh(t,c===void 0?new Xy(o,n,e):new $y(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new qy(o),Qh(t,f)),t=f}}}class uo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Yy(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function ed(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const jy=37297;let Ky=0;function Zy(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const td=new Je;function Jy(n){ot._getMatrix(td,ot.workingColorSpace,n);const e=`mat3( ${td.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(n)){case Mo:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function nd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Zy(n.getShaderSource(e),o)}else return s}function Qy(n,e){const t=Jy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const eE={[jp]:"Linear",[Kp]:"Reinhard",[Zp]:"Cineon",[Nu]:"ACESFilmic",[Qp]:"AgX",[em]:"Neutral",[Jp]:"Custom"};function tE(n,e){const t=eE[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Za=new q;function nE(){ot.getLuminanceCoefficients(Za);const n=Za.x.toFixed(4),e=Za.y.toFixed(4),t=Za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function rE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ws(n){return n!==""}function id(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aE=/^[ \t]*#include +<([\w\d./]+)>/gm;function fu(n){return n.replace(aE,lE)}const oE=new Map;function lE(n,e){let t=Qe[e];if(t===void 0){const i=oE.get(e);if(i!==void 0)t=Qe[i],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fu(t)}const cE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sd(n){return n.replace(cE,uE)}function uE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ad(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const fE={[ro]:"SHADOWMAP_TYPE_PCF",[Gs]:"SHADOWMAP_TYPE_VSM"};function hE(n){return fE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dE={[Pr]:"ENVMAP_TYPE_CUBE",[vs]:"ENVMAP_TYPE_CUBE",[Yo]:"ENVMAP_TYPE_CUBE_UV"};function pE(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":dE[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const mE={[vs]:"ENVMAP_MODE_REFRACTION"};function gE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":mE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _E={[Yp]:"ENVMAP_BLENDING_MULTIPLY",[rx]:"ENVMAP_BLENDING_MIX",[sx]:"ENVMAP_BLENDING_ADD"};function vE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":_E[n.combine]||"ENVMAP_BLENDING_NONE"}function xE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function SE(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=hE(t),c=pE(t),u=gE(t),f=vE(t),h=xE(t),p=iE(t),g=rE(s),b=r.createProgram();let m,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ws).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ws).join(`
`),d.length>0&&(d+=`
`)):(m=[ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),d=[ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==fi?tE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Qy("linearToOutputTexel",t.outputColorSpace),nE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ws).join(`
`)),a=fu(a),a=id(a,t),a=rd(a,t),o=fu(o),o=id(o,t),o=rd(o,t),a=sd(a),o=sd(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=v+m+a,S=v+d+o,P=ed(r,r.VERTEX_SHADER,y),T=ed(r,r.FRAGMENT_SHADER,S);r.attachShader(b,P),r.attachShader(b,T),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function I(D){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(b)||"",z=r.getShaderInfoLog(P)||"",Z=r.getShaderInfoLog(T)||"",W=F.trim(),X=z.trim(),k=Z.trim();let oe=!0,he=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(oe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,b,P,T);else{const ge=nd(r,P,"vertex"),Me=nd(r,T,"fragment");at("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+ge+`
`+Me)}else W!==""?$e("WebGLProgram: Program Info Log:",W):(X===""||k==="")&&(he=!1);he&&(D.diagnostics={runnable:oe,programLog:W,vertexShader:{log:X,prefix:m},fragmentShader:{log:k,prefix:d}})}r.deleteShader(P),r.deleteShader(T),x=new uo(r,b),A=sE(r,b)}let x;this.getUniforms=function(){return x===void 0&&I(this),x};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let K=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=r.getProgramParameter(b,jy)),K},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ky++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=P,this.fragmentShader=T,this}let bE=0;class ME{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new yE(e),t.set(e,i)),i}}class yE{constructor(e){this.id=bE++,this.code=e,this.usedTimes=0}}function EE(n,e,t,i,r,s){const a=new fm,o=new ME,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function b(x,A,K,D,F){const z=D.fog,Z=F.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=e.get(x.envMap||W,X),oe=k&&k.mapping===Yo?k.image.height:null,he=p[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&$e("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const ge=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Me=ge!==void 0?ge.length:0;let xe=0;Z.morphAttributes.position!==void 0&&(xe=1),Z.morphAttributes.normal!==void 0&&(xe=2),Z.morphAttributes.color!==void 0&&(xe=3);let He,et,je,V;if(he){const dt=ni[he];He=dt.vertexShader,et=dt.fragmentShader}else He=x.vertexShader,et=x.fragmentShader,o.update(x),je=o.getVertexShaderID(x),V=o.getFragmentShaderID(x);const U=n.getRenderTarget(),Y=n.state.buffers.depth.getReversed(),ie=F.isInstancedMesh===!0,ue=F.isBatchedMesh===!0,_e=!!x.map,R=!!x.matcap,w=!!k,N=!!x.aoMap,H=!!x.lightMap,L=!!x.bumpMap,$=!!x.normalMap,C=!!x.displacementMap,fe=!!x.emissiveMap,se=!!x.metalnessMap,re=!!x.roughnessMap,ce=x.anisotropy>0,M=x.clearcoat>0,_=x.dispersion>0,O=x.iridescence>0,J=x.sheen>0,ae=x.transmission>0,Q=ce&&!!x.anisotropyMap,ye=M&&!!x.clearcoatMap,pe=M&&!!x.clearcoatNormalMap,Ie=M&&!!x.clearcoatRoughnessMap,ke=O&&!!x.iridescenceMap,de=O&&!!x.iridescenceThicknessMap,ve=J&&!!x.sheenColorMap,Ee=J&&!!x.sheenRoughnessMap,Ce=!!x.specularMap,Re=!!x.specularColorMap,Ke=!!x.specularIntensityMap,B=ae&&!!x.transmissionMap,be=ae&&!!x.thicknessMap,Se=!!x.gradientMap,Le=!!x.alphaMap,me=x.alphaTest>0,le=!!x.alphaHash,Fe=!!x.extensions;let qe=fi;x.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(qe=n.toneMapping);const St={shaderID:he,shaderType:x.type,shaderName:x.name,vertexShader:He,fragmentShader:et,defines:x.defines,customVertexShaderID:je,customFragmentShaderID:V,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:ue,batchingColor:ue&&F._colorsTexture!==null,instancing:ie,instancingColor:ie&&F.instanceColor!==null,instancingMorph:ie&&F.morphTexture!==null,outputColorSpace:U===null?n.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ss,alphaToCoverage:!!x.alphaToCoverage,map:_e,matcap:R,envMap:w,envMapMode:w&&k.mapping,envMapCubeUVHeight:oe,aoMap:N,lightMap:H,bumpMap:L,normalMap:$,displacementMap:C,emissiveMap:fe,normalMapObjectSpace:$&&x.normalMapType===cx,normalMapTangentSpace:$&&x.normalMapType===lx,metalnessMap:se,roughnessMap:re,anisotropy:ce,anisotropyMap:Q,clearcoat:M,clearcoatMap:ye,clearcoatNormalMap:pe,clearcoatRoughnessMap:Ie,dispersion:_,iridescence:O,iridescenceMap:ke,iridescenceThicknessMap:de,sheen:J,sheenColorMap:ve,sheenRoughnessMap:Ee,specularMap:Ce,specularColorMap:Re,specularIntensityMap:Ke,transmission:ae,transmissionMap:B,thicknessMap:be,gradientMap:Se,opaque:x.transparent===!1&&x.blending===fs&&x.alphaToCoverage===!1,alphaMap:Le,alphaTest:me,alphaHash:le,combine:x.combine,mapUv:_e&&g(x.map.channel),aoMapUv:N&&g(x.aoMap.channel),lightMapUv:H&&g(x.lightMap.channel),bumpMapUv:L&&g(x.bumpMap.channel),normalMapUv:$&&g(x.normalMap.channel),displacementMapUv:C&&g(x.displacementMap.channel),emissiveMapUv:fe&&g(x.emissiveMap.channel),metalnessMapUv:se&&g(x.metalnessMap.channel),roughnessMapUv:re&&g(x.roughnessMap.channel),anisotropyMapUv:Q&&g(x.anisotropyMap.channel),clearcoatMapUv:ye&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:de&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&g(x.sheenRoughnessMap.channel),specularMapUv:Ce&&g(x.specularMap.channel),specularColorMapUv:Re&&g(x.specularColorMap.channel),specularIntensityMapUv:Ke&&g(x.specularIntensityMap.channel),transmissionMapUv:B&&g(x.transmissionMap.channel),thicknessMapUv:be&&g(x.thicknessMap.channel),alphaMapUv:Le&&g(x.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&($||ce),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Z.attributes.uv&&(_e||Le),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||Z.attributes.normal===void 0&&$===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Y,skinning:F.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:xe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&K.length>0,shadowMapType:n.shadowMap.type,toneMapping:qe,decodeVideoTexture:_e&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===pt,decodeVideoTextureEmissive:fe&&x.emissiveMap.isVideoTexture===!0&&ot.getTransfer(x.emissiveMap.colorSpace)===pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ii,flipSided:x.side===dn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Fe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&x.extensions.multiDraw===!0||ue)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function m(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const K in x.defines)A.push(K),A.push(x.defines[K]);return x.isRawShaderMaterial===!1&&(d(A,x),v(A,x),A.push(n.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function d(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function v(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),x.push(a.mask)}function y(x){const A=p[x.type];let K;if(A){const D=ni[A];K=Co.clone(D.uniforms)}else K=x.uniforms;return K}function S(x,A){let K=u.get(A);return K!==void 0?++K.usedTimes:(K=new SE(n,A,x,r),c.push(K),u.set(A,K)),K}function P(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function I(){o.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:y,acquireProgram:S,releaseProgram:P,releaseShaderCache:T,programs:c,dispose:I}}function TE(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function AE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function od(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ld(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,g,b,m,d){let v=n[e];return v===void 0?(v={id:h.id,object:h,geometry:p,material:g,materialVariant:a(h),groupOrder:b,renderOrder:h.renderOrder,z:m,group:d},n[e]=v):(v.id=h.id,v.object=h,v.geometry=p,v.material=g,v.materialVariant=a(h),v.groupOrder=b,v.renderOrder=h.renderOrder,v.z=m,v.group=d),e++,v}function l(h,p,g,b,m,d){const v=o(h,p,g,b,m,d);g.transmission>0?i.push(v):g.transparent===!0?r.push(v):t.push(v)}function c(h,p,g,b,m,d){const v=o(h,p,g,b,m,d);g.transmission>0?i.unshift(v):g.transparent===!0?r.unshift(v):t.unshift(v)}function u(h,p){t.length>1&&t.sort(h||AE),i.length>1&&i.sort(p||od),r.length>1&&r.sort(p||od)}function f(){for(let h=e,p=n.length;h<p;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function wE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new ld,n.set(i,[a])):r>=s.length?(a=new ld,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function CE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new We};break;case"SpotLight":t={position:new q,direction:new q,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function RE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let PE=0;function DE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function IE(n){const e=new CE,t=RE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new q);const r=new q,s=new Pt,a=new Pt;function o(c){let u=0,f=0,h=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,g=0,b=0,m=0,d=0,v=0,y=0,S=0,P=0,T=0,I=0;c.sort(DE);for(let A=0,K=c.length;A<K;A++){const D=c[A],F=D.color,z=D.intensity,Z=D.distance;let W=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===xs?W=D.shadow.map.texture:W=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=F.r*z,f+=F.g*z,h+=F.b*z;else if(D.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(D.sh.coefficients[X],z);I++}else if(D.isDirectionalLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const k=D.shadow,oe=t.get(D);oe.shadowIntensity=k.intensity,oe.shadowBias=k.bias,oe.shadowNormalBias=k.normalBias,oe.shadowRadius=k.radius,oe.shadowMapSize=k.mapSize,i.directionalShadow[p]=oe,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=D.shadow.matrix,v++}i.directional[p]=X,p++}else if(D.isSpotLight){const X=e.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(F).multiplyScalar(z),X.distance=Z,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,i.spot[b]=X;const k=D.shadow;if(D.map&&(i.spotLightMap[P]=D.map,P++,k.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[b]=k.matrix,D.castShadow){const oe=t.get(D);oe.shadowIntensity=k.intensity,oe.shadowBias=k.bias,oe.shadowNormalBias=k.normalBias,oe.shadowRadius=k.radius,oe.shadowMapSize=k.mapSize,i.spotShadow[b]=oe,i.spotShadowMap[b]=W,S++}b++}else if(D.isRectAreaLight){const X=e.get(D);X.color.copy(F).multiplyScalar(z),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=X,m++}else if(D.isPointLight){const X=e.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const k=D.shadow,oe=t.get(D);oe.shadowIntensity=k.intensity,oe.shadowBias=k.bias,oe.shadowNormalBias=k.normalBias,oe.shadowRadius=k.radius,oe.shadowMapSize=k.mapSize,oe.shadowCameraNear=k.camera.near,oe.shadowCameraFar=k.camera.far,i.pointShadow[g]=oe,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=D.shadow.matrix,y++}i.point[g]=X,g++}else if(D.isHemisphereLight){const X=e.get(D);X.skyColor.copy(D.color).multiplyScalar(z),X.groundColor.copy(D.groundColor).multiplyScalar(z),i.hemi[d]=X,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const x=i.hash;(x.directionalLength!==p||x.pointLength!==g||x.spotLength!==b||x.rectAreaLength!==m||x.hemiLength!==d||x.numDirectionalShadows!==v||x.numPointShadows!==y||x.numSpotShadows!==S||x.numSpotMaps!==P||x.numLightProbes!==I)&&(i.directional.length=p,i.spot.length=b,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+P-T,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=I,x.directionalLength=p,x.pointLength=g,x.spotLength=b,x.rectAreaLength=m,x.hemiLength=d,x.numDirectionalShadows=v,x.numPointShadows=y,x.numSpotShadows=S,x.numSpotMaps=P,x.numLightProbes=I,i.version=PE++)}function l(c,u){let f=0,h=0,p=0,g=0,b=0;const m=u.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){const y=c[d];if(y.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(y.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){const S=i.hemi[b];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),b++}}}return{setup:o,setupView:l,state:i}}function cd(n){const e=new IE(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function LE(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new cd(n),e.set(r,[o])):s>=a.length?(o=new cd(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const UE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NE=`uniform sampler2D shadow_pass;
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
}`,FE=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],OE=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],ud=new Pt,zs=new q,ec=new q;function kE(n,e,t){let i=new _m;const r=new Ge,s=new Ge,a=new It,o=new Zx,l=new Jx,c={},u=t.maxTextureSize,f={[nr]:dn,[dn]:nr,[ii]:ii},h=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:UE,fragmentShader:NE}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new gn;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new qn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ro;let d=this.type;this.render=function(T,I,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Bv&&($e("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ro);const A=n.getRenderTarget(),K=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ui),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=d!==this.type;z&&I.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(W=>W.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,W=T.length;Z<W;Z++){const X=T[Z],k=X.shadow;if(k===void 0){$e("WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const oe=k.getFrameExtents();r.multiply(oe),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/oe.x),r.x=s.x*oe.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/oe.y),r.y=s.y*oe.y,k.mapSize.y=s.y));const he=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=he,k.map===null||z===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Gs){if(X.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new pn(r.x,r.y,{format:xs,type:En,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),k.map.texture.name=X.name+".shadowMap",k.map.depthTexture=new ua(r.x,r.y,ai),k.map.depthTexture.name=X.name+".shadowMapDepth",k.map.depthTexture.format=Li,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Xt,k.map.depthTexture.magFilter=Xt}else X.isPointLight?(k.map=new Em(r.x),k.map.depthTexture=new $x(r.x,di)):(k.map=new pn(r.x,r.y),k.map.depthTexture=new ua(r.x,r.y,di)),k.map.depthTexture.name=X.name+".shadowMap",k.map.depthTexture.format=Li,this.type===ro?(k.map.depthTexture.compareFunction=he?Gu:Hu,k.map.depthTexture.minFilter=Qt,k.map.depthTexture.magFilter=Qt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Xt,k.map.depthTexture.magFilter=Xt);k.camera.updateProjectionMatrix()}const ge=k.map.isWebGLCubeRenderTarget?6:1;for(let Me=0;Me<ge;Me++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,Me),n.clear();else{Me===0&&(n.setRenderTarget(k.map),n.clear());const xe=k.getViewport(Me);a.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),F.viewport(a)}if(X.isPointLight){const xe=k.camera,He=k.matrix,et=X.distance||xe.far;et!==xe.far&&(xe.far=et,xe.updateProjectionMatrix()),zs.setFromMatrixPosition(X.matrixWorld),xe.position.copy(zs),ec.copy(xe.position),ec.add(FE[Me]),xe.up.copy(OE[Me]),xe.lookAt(ec),xe.updateMatrixWorld(),He.makeTranslation(-zs.x,-zs.y,-zs.z),ud.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),k._frustum.setFromProjectionMatrix(ud,xe.coordinateSystem,xe.reversedDepth)}else k.updateMatrices(X);i=k.getFrustum(),S(I,x,k.camera,X,this.type)}k.isPointLightShadow!==!0&&this.type===Gs&&v(k,x),k.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(A,K,D)};function v(T,I){const x=e.update(b);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new pn(r.x,r.y,{format:xs,type:En})),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(I,null,x,h,b,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(I,null,x,p,b,null)}function y(T,I,x,A){let K=null;const D=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)K=D;else if(K=x.isPointLight===!0?l:o,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const F=K.uuid,z=I.uuid;let Z=c[F];Z===void 0&&(Z={},c[F]=Z);let W=Z[z];W===void 0&&(W=K.clone(),Z[z]=W,I.addEventListener("dispose",P)),K=W}if(K.visible=I.visible,K.wireframe=I.wireframe,A===Gs?K.side=I.shadowSide!==null?I.shadowSide:I.side:K.side=I.shadowSide!==null?I.shadowSide:f[I.side],K.alphaMap=I.alphaMap,K.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,K.map=I.map,K.clipShadows=I.clipShadows,K.clippingPlanes=I.clippingPlanes,K.clipIntersection=I.clipIntersection,K.displacementMap=I.displacementMap,K.displacementScale=I.displacementScale,K.displacementBias=I.displacementBias,K.wireframeLinewidth=I.wireframeLinewidth,K.linewidth=I.linewidth,x.isPointLight===!0&&K.isMeshDistanceMaterial===!0){const F=n.properties.get(K);F.light=x}return K}function S(T,I,x,A,K){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&K===Gs)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const z=e.update(T),Z=T.material;if(Array.isArray(Z)){const W=z.groups;for(let X=0,k=W.length;X<k;X++){const oe=W[X],he=Z[oe.materialIndex];if(he&&he.visible){const ge=y(T,he,A,K);T.onBeforeShadow(n,T,I,x,z,ge,oe),n.renderBufferDirect(x,null,z,ge,T,oe),T.onAfterShadow(n,T,I,x,z,ge,oe)}}}else if(Z.visible){const W=y(T,Z,A,K);T.onBeforeShadow(n,T,I,x,z,W,null),n.renderBufferDirect(x,null,z,W,T,null),T.onAfterShadow(n,T,I,x,z,W,null)}}const F=T.children;for(let z=0,Z=F.length;z<Z;z++)S(F[z],I,x,A,K)}function P(T){T.target.removeEventListener("dispose",P);for(const x in c){const A=c[x],K=T.target.uuid;K in A&&(A[K].dispose(),delete A[K])}}}function BE(n,e){function t(){let B=!1;const be=new It;let Se=null;const Le=new It(0,0,0,0);return{setMask:function(me){Se!==me&&!B&&(n.colorMask(me,me,me,me),Se=me)},setLocked:function(me){B=me},setClear:function(me,le,Fe,qe,St){St===!0&&(me*=qe,le*=qe,Fe*=qe),be.set(me,le,Fe,qe),Le.equals(be)===!1&&(n.clearColor(me,le,Fe,qe),Le.copy(be))},reset:function(){B=!1,Se=null,Le.set(-1,0,0,0)}}}function i(){let B=!1,be=!1,Se=null,Le=null,me=null;return{setReversed:function(le){if(be!==le){const Fe=e.get("EXT_clip_control");le?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),be=le;const qe=me;me=null,this.setClear(qe)}},getReversed:function(){return be},setTest:function(le){le?U(n.DEPTH_TEST):Y(n.DEPTH_TEST)},setMask:function(le){Se!==le&&!B&&(n.depthMask(le),Se=le)},setFunc:function(le){if(be&&(le=xx[le]),Le!==le){switch(le){case Sc:n.depthFunc(n.NEVER);break;case bc:n.depthFunc(n.ALWAYS);break;case Mc:n.depthFunc(n.LESS);break;case _s:n.depthFunc(n.LEQUAL);break;case yc:n.depthFunc(n.EQUAL);break;case Ec:n.depthFunc(n.GEQUAL);break;case Tc:n.depthFunc(n.GREATER);break;case Ac:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Le=le}},setLocked:function(le){B=le},setClear:function(le){me!==le&&(me=le,be&&(le=1-le),n.clearDepth(le))},reset:function(){B=!1,Se=null,Le=null,me=null,be=!1}}}function r(){let B=!1,be=null,Se=null,Le=null,me=null,le=null,Fe=null,qe=null,St=null;return{setTest:function(dt){B||(dt?U(n.STENCIL_TEST):Y(n.STENCIL_TEST))},setMask:function(dt){be!==dt&&!B&&(n.stencilMask(dt),be=dt)},setFunc:function(dt,pi,mi){(Se!==dt||Le!==pi||me!==mi)&&(n.stencilFunc(dt,pi,mi),Se=dt,Le=pi,me=mi)},setOp:function(dt,pi,mi){(le!==dt||Fe!==pi||qe!==mi)&&(n.stencilOp(dt,pi,mi),le=dt,Fe=pi,qe=mi)},setLocked:function(dt){B=dt},setClear:function(dt){St!==dt&&(n.clearStencil(dt),St=dt)},reset:function(){B=!1,be=null,Se=null,Le=null,me=null,le=null,Fe=null,qe=null,St=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],g=null,b=!1,m=null,d=null,v=null,y=null,S=null,P=null,T=null,I=new We(0,0,0),x=0,A=!1,K=null,D=null,F=null,z=null,Z=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,k=0;const oe=n.getParameter(n.VERSION);oe.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(oe)[1]),X=k>=1):oe.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),X=k>=2);let he=null,ge={};const Me=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),He=new It().fromArray(Me),et=new It().fromArray(xe);function je(B,be,Se,Le){const me=new Uint8Array(4),le=n.createTexture();n.bindTexture(B,le),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<Se;Fe++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,Le,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(be+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return le}const V={};V[n.TEXTURE_2D]=je(n.TEXTURE_2D,n.TEXTURE_2D,1),V[n.TEXTURE_CUBE_MAP]=je(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[n.TEXTURE_2D_ARRAY]=je(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),V[n.TEXTURE_3D]=je(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),U(n.DEPTH_TEST),a.setFunc(_s),L(!1),$(mh),U(n.CULL_FACE),N(ui);function U(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function Y(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function ie(B,be){return f[B]!==be?(n.bindFramebuffer(B,be),f[B]=be,B===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=be),B===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=be),!0):!1}function ue(B,be){let Se=p,Le=!1;if(B){Se=h.get(be),Se===void 0&&(Se=[],h.set(be,Se));const me=B.textures;if(Se.length!==me.length||Se[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Fe=me.length;le<Fe;le++)Se[le]=n.COLOR_ATTACHMENT0+le;Se.length=me.length,Le=!0}}else Se[0]!==n.BACK&&(Se[0]=n.BACK,Le=!0);Le&&n.drawBuffers(Se)}function _e(B){return g!==B?(n.useProgram(B),g=B,!0):!1}const R={[xr]:n.FUNC_ADD,[Vv]:n.FUNC_SUBTRACT,[Hv]:n.FUNC_REVERSE_SUBTRACT};R[Gv]=n.MIN,R[Wv]=n.MAX;const w={[Xv]:n.ZERO,[$v]:n.ONE,[qv]:n.SRC_COLOR,[vc]:n.SRC_ALPHA,[Qv]:n.SRC_ALPHA_SATURATE,[Zv]:n.DST_COLOR,[jv]:n.DST_ALPHA,[Yv]:n.ONE_MINUS_SRC_COLOR,[xc]:n.ONE_MINUS_SRC_ALPHA,[Jv]:n.ONE_MINUS_DST_COLOR,[Kv]:n.ONE_MINUS_DST_ALPHA,[ex]:n.CONSTANT_COLOR,[tx]:n.ONE_MINUS_CONSTANT_COLOR,[nx]:n.CONSTANT_ALPHA,[ix]:n.ONE_MINUS_CONSTANT_ALPHA};function N(B,be,Se,Le,me,le,Fe,qe,St,dt){if(B===ui){b===!0&&(Y(n.BLEND),b=!1);return}if(b===!1&&(U(n.BLEND),b=!0),B!==zv){if(B!==m||dt!==A){if((d!==xr||S!==xr)&&(n.blendEquation(n.FUNC_ADD),d=xr,S=xr),dt)switch(B){case fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yr:n.blendFunc(n.ONE,n.ONE);break;case gh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _h:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:at("WebGLState: Invalid blending: ",B);break}else switch(B){case fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case gh:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _h:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",B);break}v=null,y=null,P=null,T=null,I.set(0,0,0),x=0,m=B,A=dt}return}me=me||be,le=le||Se,Fe=Fe||Le,(be!==d||me!==S)&&(n.blendEquationSeparate(R[be],R[me]),d=be,S=me),(Se!==v||Le!==y||le!==P||Fe!==T)&&(n.blendFuncSeparate(w[Se],w[Le],w[le],w[Fe]),v=Se,y=Le,P=le,T=Fe),(qe.equals(I)===!1||St!==x)&&(n.blendColor(qe.r,qe.g,qe.b,St),I.copy(qe),x=St),m=B,A=!1}function H(B,be){B.side===ii?Y(n.CULL_FACE):U(n.CULL_FACE);let Se=B.side===dn;be&&(Se=!Se),L(Se),B.blending===fs&&B.transparent===!1?N(ui):N(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);const Le=B.stencilWrite;o.setTest(Le),Le&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),fe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?U(n.SAMPLE_ALPHA_TO_COVERAGE):Y(n.SAMPLE_ALPHA_TO_COVERAGE)}function L(B){K!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),K=B)}function $(B){B!==Ov?(U(n.CULL_FACE),B!==D&&(B===mh?n.cullFace(n.BACK):B===kv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Y(n.CULL_FACE),D=B}function C(B){B!==F&&(X&&n.lineWidth(B),F=B)}function fe(B,be,Se){B?(U(n.POLYGON_OFFSET_FILL),(z!==be||Z!==Se)&&(z=be,Z=Se,a.getReversed()&&(be=-be),n.polygonOffset(be,Se))):Y(n.POLYGON_OFFSET_FILL)}function se(B){B?U(n.SCISSOR_TEST):Y(n.SCISSOR_TEST)}function re(B){B===void 0&&(B=n.TEXTURE0+W-1),he!==B&&(n.activeTexture(B),he=B)}function ce(B,be,Se){Se===void 0&&(he===null?Se=n.TEXTURE0+W-1:Se=he);let Le=ge[Se];Le===void 0&&(Le={type:void 0,texture:void 0},ge[Se]=Le),(Le.type!==B||Le.texture!==be)&&(he!==Se&&(n.activeTexture(Se),he=Se),n.bindTexture(B,be||V[B]),Le.type=B,Le.texture=be)}function M(){const B=ge[he];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(B){at("WebGLState:",B)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(B){at("WebGLState:",B)}}function J(){try{n.texSubImage2D(...arguments)}catch(B){at("WebGLState:",B)}}function ae(){try{n.texSubImage3D(...arguments)}catch(B){at("WebGLState:",B)}}function Q(){try{n.compressedTexSubImage2D(...arguments)}catch(B){at("WebGLState:",B)}}function ye(){try{n.compressedTexSubImage3D(...arguments)}catch(B){at("WebGLState:",B)}}function pe(){try{n.texStorage2D(...arguments)}catch(B){at("WebGLState:",B)}}function Ie(){try{n.texStorage3D(...arguments)}catch(B){at("WebGLState:",B)}}function ke(){try{n.texImage2D(...arguments)}catch(B){at("WebGLState:",B)}}function de(){try{n.texImage3D(...arguments)}catch(B){at("WebGLState:",B)}}function ve(B){He.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),He.copy(B))}function Ee(B){et.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),et.copy(B))}function Ce(B,be){let Se=c.get(be);Se===void 0&&(Se=new WeakMap,c.set(be,Se));let Le=Se.get(B);Le===void 0&&(Le=n.getUniformBlockIndex(be,B.name),Se.set(B,Le))}function Re(B,be){const Le=c.get(be).get(B);l.get(be)!==Le&&(n.uniformBlockBinding(be,Le,B.__bindingPointIndex),l.set(be,Le))}function Ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},he=null,ge={},f={},h=new WeakMap,p=[],g=null,b=!1,m=null,d=null,v=null,y=null,S=null,P=null,T=null,I=new We(0,0,0),x=0,A=!1,K=null,D=null,F=null,z=null,Z=null,He.set(0,0,n.canvas.width,n.canvas.height),et.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:U,disable:Y,bindFramebuffer:ie,drawBuffers:ue,useProgram:_e,setBlending:N,setMaterial:H,setFlipSided:L,setCullFace:$,setLineWidth:C,setPolygonOffset:fe,setScissorTest:se,activeTexture:re,bindTexture:ce,unbindTexture:M,compressedTexImage2D:_,compressedTexImage3D:O,texImage2D:ke,texImage3D:de,updateUBOMapping:Ce,uniformBlockBinding:Re,texStorage2D:pe,texStorage3D:Ie,texSubImage2D:J,texSubImage3D:ae,compressedTexSubImage2D:Q,compressedTexSubImage3D:ye,scissor:ve,viewport:Ee,reset:Ke}}function zE(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,_){return p?new OffscreenCanvas(M,_):Eo("canvas")}function b(M,_,O){let J=1;const ae=ce(M);if((ae.width>O||ae.height>O)&&(J=O/Math.max(ae.width,ae.height)),J<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const Q=Math.floor(J*ae.width),ye=Math.floor(J*ae.height);f===void 0&&(f=g(Q,ye));const pe=_?g(Q,ye):f;return pe.width=Q,pe.height=ye,pe.getContext("2d").drawImage(M,0,0,Q,ye),$e("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+Q+"x"+ye+")."),pe}else return"data"in M&&$e("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),M;return M}function m(M){return M.generateMipmaps}function d(M){n.generateMipmap(M)}function v(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(M,_,O,J,ae=!1){if(M!==null){if(n[M]!==void 0)return n[M];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Q=_;if(_===n.RED&&(O===n.FLOAT&&(Q=n.R32F),O===n.HALF_FLOAT&&(Q=n.R16F),O===n.UNSIGNED_BYTE&&(Q=n.R8)),_===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Q=n.R8UI),O===n.UNSIGNED_SHORT&&(Q=n.R16UI),O===n.UNSIGNED_INT&&(Q=n.R32UI),O===n.BYTE&&(Q=n.R8I),O===n.SHORT&&(Q=n.R16I),O===n.INT&&(Q=n.R32I)),_===n.RG&&(O===n.FLOAT&&(Q=n.RG32F),O===n.HALF_FLOAT&&(Q=n.RG16F),O===n.UNSIGNED_BYTE&&(Q=n.RG8)),_===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(Q=n.RG8UI),O===n.UNSIGNED_SHORT&&(Q=n.RG16UI),O===n.UNSIGNED_INT&&(Q=n.RG32UI),O===n.BYTE&&(Q=n.RG8I),O===n.SHORT&&(Q=n.RG16I),O===n.INT&&(Q=n.RG32I)),_===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),O===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),O===n.UNSIGNED_INT&&(Q=n.RGB32UI),O===n.BYTE&&(Q=n.RGB8I),O===n.SHORT&&(Q=n.RGB16I),O===n.INT&&(Q=n.RGB32I)),_===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),O===n.UNSIGNED_INT&&(Q=n.RGBA32UI),O===n.BYTE&&(Q=n.RGBA8I),O===n.SHORT&&(Q=n.RGBA16I),O===n.INT&&(Q=n.RGBA32I)),_===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),_===n.RGBA){const ye=ae?Mo:ot.getTransfer(J);O===n.FLOAT&&(Q=n.RGBA32F),O===n.HALF_FLOAT&&(Q=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Q=ye===pt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function S(M,_){let O;return M?_===null||_===di||_===ca?O=n.DEPTH24_STENCIL8:_===ai?O=n.DEPTH32F_STENCIL8:_===la&&(O=n.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===di||_===ca?O=n.DEPTH_COMPONENT24:_===ai?O=n.DEPTH_COMPONENT32F:_===la&&(O=n.DEPTH_COMPONENT16),O}function P(M,_){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Xt&&M.minFilter!==Qt?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function T(M){const _=M.target;_.removeEventListener("dispose",T),x(_),_.isVideoTexture&&u.delete(_)}function I(M){const _=M.target;_.removeEventListener("dispose",I),K(_)}function x(M){const _=i.get(M);if(_.__webglInit===void 0)return;const O=M.source,J=h.get(O);if(J){const ae=J[_.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&A(M),Object.keys(J).length===0&&h.delete(O)}i.remove(M)}function A(M){const _=i.get(M);n.deleteTexture(_.__webglTexture);const O=M.source,J=h.get(O);delete J[_.__cacheKey],a.memory.textures--}function K(M){const _=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(_.__webglFramebuffer[J]))for(let ae=0;ae<_.__webglFramebuffer[J].length;ae++)n.deleteFramebuffer(_.__webglFramebuffer[J][ae]);else n.deleteFramebuffer(_.__webglFramebuffer[J]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[J])}else{if(Array.isArray(_.__webglFramebuffer))for(let J=0;J<_.__webglFramebuffer.length;J++)n.deleteFramebuffer(_.__webglFramebuffer[J]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let J=0;J<_.__webglColorRenderbuffer.length;J++)_.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[J]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=M.textures;for(let J=0,ae=O.length;J<ae;J++){const Q=i.get(O[J]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(O[J])}i.remove(M)}let D=0;function F(){D=0}function z(){const M=D;return M>=r.maxTextures&&$e("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),D+=1,M}function Z(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function W(M,_){const O=i.get(M);if(M.isVideoTexture&&se(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&O.__version!==M.version){const J=M.image;if(J===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{V(O,M,_);return}}else M.isExternalTexture&&(O.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+_)}function X(M,_){const O=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){V(O,M,_);return}else M.isExternalTexture&&(O.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+_)}function k(M,_){const O=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){V(O,M,_);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+_)}function oe(M,_){const O=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&O.__version!==M.version){U(O,M,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+_)}const he={[wc]:n.REPEAT,[Ci]:n.CLAMP_TO_EDGE,[Cc]:n.MIRRORED_REPEAT},ge={[Xt]:n.NEAREST,[ax]:n.NEAREST_MIPMAP_NEAREST,[Ta]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[Ml]:n.LINEAR_MIPMAP_NEAREST,[Er]:n.LINEAR_MIPMAP_LINEAR},Me={[ux]:n.NEVER,[mx]:n.ALWAYS,[fx]:n.LESS,[Hu]:n.LEQUAL,[hx]:n.EQUAL,[Gu]:n.GEQUAL,[dx]:n.GREATER,[px]:n.NOTEQUAL};function xe(M,_){if(_.type===ai&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Qt||_.magFilter===Ml||_.magFilter===Ta||_.magFilter===Er||_.minFilter===Qt||_.minFilter===Ml||_.minFilter===Ta||_.minFilter===Er)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,he[_.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,he[_.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,he[_.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,ge[_.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,ge[_.minFilter]),_.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Me[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Xt||_.minFilter!==Ta&&_.minFilter!==Er||_.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function He(M,_){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",T));const J=_.source;let ae=h.get(J);ae===void 0&&(ae={},h.set(J,ae));const Q=Z(_);if(Q!==M.__cacheKey){ae[Q]===void 0&&(ae[Q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),ae[Q].usedTimes++;const ye=ae[M.__cacheKey];ye!==void 0&&(ae[M.__cacheKey].usedTimes--,ye.usedTimes===0&&A(_)),M.__cacheKey=Q,M.__webglTexture=ae[Q].texture}return O}function et(M,_,O){return Math.floor(Math.floor(M/O)/_)}function je(M,_,O,J){const Q=M.updateRanges;if(Q.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,O,J,_.data);else{Q.sort((de,ve)=>de.start-ve.start);let ye=0;for(let de=1;de<Q.length;de++){const ve=Q[ye],Ee=Q[de],Ce=ve.start+ve.count,Re=et(Ee.start,_.width,4),Ke=et(ve.start,_.width,4);Ee.start<=Ce+1&&Re===Ke&&et(Ee.start+Ee.count-1,_.width,4)===Re?ve.count=Math.max(ve.count,Ee.start+Ee.count-ve.start):(++ye,Q[ye]=Ee)}Q.length=ye+1;const pe=n.getParameter(n.UNPACK_ROW_LENGTH),Ie=n.getParameter(n.UNPACK_SKIP_PIXELS),ke=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let de=0,ve=Q.length;de<ve;de++){const Ee=Q[de],Ce=Math.floor(Ee.start/4),Re=Math.ceil(Ee.count/4),Ke=Ce%_.width,B=Math.floor(Ce/_.width),be=Re,Se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,B),t.texSubImage2D(n.TEXTURE_2D,0,Ke,B,be,Se,O,J,_.data)}M.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,pe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ie),n.pixelStorei(n.UNPACK_SKIP_ROWS,ke)}}function V(M,_,O){let J=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(J=n.TEXTURE_3D);const ae=He(M,_),Q=_.source;t.bindTexture(J,M.__webglTexture,n.TEXTURE0+O);const ye=i.get(Q);if(Q.version!==ye.__version||ae===!0){t.activeTexture(n.TEXTURE0+O);const pe=ot.getPrimaries(ot.workingColorSpace),Ie=_.colorSpace===Zi?null:ot.getPrimaries(_.colorSpace),ke=_.colorSpace===Zi||pe===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let de=b(_.image,!1,r.maxTextureSize);de=re(_,de);const ve=s.convert(_.format,_.colorSpace),Ee=s.convert(_.type);let Ce=y(_.internalFormat,ve,Ee,_.colorSpace,_.isVideoTexture);xe(J,_);let Re;const Ke=_.mipmaps,B=_.isVideoTexture!==!0,be=ye.__version===void 0||ae===!0,Se=Q.dataReady,Le=P(_,de);if(_.isDepthTexture)Ce=S(_.format===Tr,_.type),be&&(B?t.texStorage2D(n.TEXTURE_2D,1,Ce,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Ce,de.width,de.height,0,ve,Ee,null));else if(_.isDataTexture)if(Ke.length>0){B&&be&&t.texStorage2D(n.TEXTURE_2D,Le,Ce,Ke[0].width,Ke[0].height);for(let me=0,le=Ke.length;me<le;me++)Re=Ke[me],B?Se&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Re.width,Re.height,ve,Ee,Re.data):t.texImage2D(n.TEXTURE_2D,me,Ce,Re.width,Re.height,0,ve,Ee,Re.data);_.generateMipmaps=!1}else B?(be&&t.texStorage2D(n.TEXTURE_2D,Le,Ce,de.width,de.height),Se&&je(_,de,ve,Ee)):t.texImage2D(n.TEXTURE_2D,0,Ce,de.width,de.height,0,ve,Ee,de.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){B&&be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ce,Ke[0].width,Ke[0].height,de.depth);for(let me=0,le=Ke.length;me<le;me++)if(Re=Ke[me],_.format!==zn)if(ve!==null)if(B){if(Se)if(_.layerUpdates.size>0){const Fe=Vh(Re.width,Re.height,_.format,_.type);for(const qe of _.layerUpdates){const St=Re.data.subarray(qe*Fe/Re.data.BYTES_PER_ELEMENT,(qe+1)*Fe/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,qe,Re.width,Re.height,1,ve,St)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Re.width,Re.height,de.depth,ve,Re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,Ce,Re.width,Re.height,de.depth,0,Re.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?Se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Re.width,Re.height,de.depth,ve,Ee,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,Ce,Re.width,Re.height,de.depth,0,ve,Ee,Re.data)}else{B&&be&&t.texStorage2D(n.TEXTURE_2D,Le,Ce,Ke[0].width,Ke[0].height);for(let me=0,le=Ke.length;me<le;me++)Re=Ke[me],_.format!==zn?ve!==null?B?Se&&t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,Re.width,Re.height,ve,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,me,Ce,Re.width,Re.height,0,Re.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?Se&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Re.width,Re.height,ve,Ee,Re.data):t.texImage2D(n.TEXTURE_2D,me,Ce,Re.width,Re.height,0,ve,Ee,Re.data)}else if(_.isDataArrayTexture)if(B){if(be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ce,de.width,de.height,de.depth),Se)if(_.layerUpdates.size>0){const me=Vh(de.width,de.height,_.format,_.type);for(const le of _.layerUpdates){const Fe=de.data.subarray(le*me/de.data.BYTES_PER_ELEMENT,(le+1)*me/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,de.width,de.height,1,ve,Ee,Fe)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,ve,Ee,de.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,de.width,de.height,de.depth,0,ve,Ee,de.data);else if(_.isData3DTexture)B?(be&&t.texStorage3D(n.TEXTURE_3D,Le,Ce,de.width,de.height,de.depth),Se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,ve,Ee,de.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,de.width,de.height,de.depth,0,ve,Ee,de.data);else if(_.isFramebufferTexture){if(be)if(B)t.texStorage2D(n.TEXTURE_2D,Le,Ce,de.width,de.height);else{let me=de.width,le=de.height;for(let Fe=0;Fe<Le;Fe++)t.texImage2D(n.TEXTURE_2D,Fe,Ce,me,le,0,ve,Ee,null),me>>=1,le>>=1}}else if(Ke.length>0){if(B&&be){const me=ce(Ke[0]);t.texStorage2D(n.TEXTURE_2D,Le,Ce,me.width,me.height)}for(let me=0,le=Ke.length;me<le;me++)Re=Ke[me],B?Se&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,ve,Ee,Re):t.texImage2D(n.TEXTURE_2D,me,Ce,ve,Ee,Re);_.generateMipmaps=!1}else if(B){if(be){const me=ce(de);t.texStorage2D(n.TEXTURE_2D,Le,Ce,me.width,me.height)}Se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Ee,de)}else t.texImage2D(n.TEXTURE_2D,0,Ce,ve,Ee,de);m(_)&&d(J),ye.__version=Q.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function U(M,_,O){if(_.image.length!==6)return;const J=He(M,_),ae=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+O);const Q=i.get(ae);if(ae.version!==Q.__version||J===!0){t.activeTexture(n.TEXTURE0+O);const ye=ot.getPrimaries(ot.workingColorSpace),pe=_.colorSpace===Zi?null:ot.getPrimaries(_.colorSpace),Ie=_.colorSpace===Zi||ye===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const ke=_.isCompressedTexture||_.image[0].isCompressedTexture,de=_.image[0]&&_.image[0].isDataTexture,ve=[];for(let le=0;le<6;le++)!ke&&!de?ve[le]=b(_.image[le],!0,r.maxCubemapSize):ve[le]=de?_.image[le].image:_.image[le],ve[le]=re(_,ve[le]);const Ee=ve[0],Ce=s.convert(_.format,_.colorSpace),Re=s.convert(_.type),Ke=y(_.internalFormat,Ce,Re,_.colorSpace),B=_.isVideoTexture!==!0,be=Q.__version===void 0||J===!0,Se=ae.dataReady;let Le=P(_,Ee);xe(n.TEXTURE_CUBE_MAP,_);let me;if(ke){B&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,Ke,Ee.width,Ee.height);for(let le=0;le<6;le++){me=ve[le].mipmaps;for(let Fe=0;Fe<me.length;Fe++){const qe=me[Fe];_.format!==zn?Ce!==null?B?Se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe,0,0,qe.width,qe.height,Ce,qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe,Ke,qe.width,qe.height,0,qe.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe,0,0,qe.width,qe.height,Ce,Re,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe,Ke,qe.width,qe.height,0,Ce,Re,qe.data)}}}else{if(me=_.mipmaps,B&&be){me.length>0&&Le++;const le=ce(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,Ke,le.width,le.height)}for(let le=0;le<6;le++)if(de){B?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ve[le].width,ve[le].height,Ce,Re,ve[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ke,ve[le].width,ve[le].height,0,Ce,Re,ve[le].data);for(let Fe=0;Fe<me.length;Fe++){const St=me[Fe].image[le].image;B?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe+1,0,0,St.width,St.height,Ce,Re,St.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe+1,Ke,St.width,St.height,0,Ce,Re,St.data)}}else{B?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ce,Re,ve[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ke,Ce,Re,ve[le]);for(let Fe=0;Fe<me.length;Fe++){const qe=me[Fe];B?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe+1,0,0,Ce,Re,qe.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe+1,Ke,Ce,Re,qe.image[le])}}}m(_)&&d(n.TEXTURE_CUBE_MAP),Q.__version=ae.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Y(M,_,O,J,ae,Q){const ye=s.convert(O.format,O.colorSpace),pe=s.convert(O.type),Ie=y(O.internalFormat,ye,pe,O.colorSpace),ke=i.get(_),de=i.get(O);if(de.__renderTarget=_,!ke.__hasExternalTextures){const ve=Math.max(1,_.width>>Q),Ee=Math.max(1,_.height>>Q);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,Q,Ie,ve,Ee,_.depth,0,ye,pe,null):t.texImage2D(ae,Q,Ie,ve,Ee,0,ye,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),fe(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ae,de.__webglTexture,0,C(_)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ae,de.__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(M,_,O){if(n.bindRenderbuffer(n.RENDERBUFFER,M),_.depthBuffer){const J=_.depthTexture,ae=J&&J.isDepthTexture?J.type:null,Q=S(_.stencilBuffer,ae),ye=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;fe(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(_),Q,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(_),Q,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Q,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,M)}else{const J=_.textures;for(let ae=0;ae<J.length;ae++){const Q=J[ae],ye=s.convert(Q.format,Q.colorSpace),pe=s.convert(Q.type),Ie=y(Q.internalFormat,ye,pe,Q.colorSpace);fe(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(_),Ie,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(_),Ie,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Ie,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(M,_,O){const J=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=i.get(_.depthTexture);if(ae.__renderTarget=_,(!ae.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,_.depthTexture.addEventListener("dispose",T)),ae.__webglTexture===void 0){ae.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),xe(n.TEXTURE_CUBE_MAP,_.depthTexture);const ke=s.convert(_.depthTexture.format),de=s.convert(_.depthTexture.type);let ve;_.depthTexture.format===Li?ve=n.DEPTH_COMPONENT24:_.depthTexture.format===Tr&&(ve=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ve,_.width,_.height,0,ke,de,null)}}else W(_.depthTexture,0);const Q=ae.__webglTexture,ye=C(_),pe=J?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,Ie=_.depthTexture.format===Tr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Li)fe(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ie,pe,Q,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,Ie,pe,Q,0);else if(_.depthTexture.format===Tr)fe(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ie,pe,Q,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,Ie,pe,Q,0);else throw new Error("Unknown depthTexture format")}function _e(M){const _=i.get(M),O=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){const J=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),J){const ae=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,J.removeEventListener("dispose",ae)};J.addEventListener("dispose",ae),_.__depthDisposeCallback=ae}_.__boundDepthTexture=J}if(M.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let J=0;J<6;J++)ue(_.__webglFramebuffer[J],M,J);else{const J=M.texture.mipmaps;J&&J.length>0?ue(_.__webglFramebuffer[0],M,0):ue(_.__webglFramebuffer,M,0)}else if(O){_.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[J]),_.__webglDepthbuffer[J]===void 0)_.__webglDepthbuffer[J]=n.createRenderbuffer(),ie(_.__webglDepthbuffer[J],M,!1);else{const ae=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=_.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,Q)}}else{const J=M.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),ie(_.__webglDepthbuffer,M,!1);else{const ae=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,Q)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function R(M,_,O){const J=i.get(M);_!==void 0&&Y(J.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&_e(M)}function w(M){const _=M.texture,O=i.get(M),J=i.get(_);M.addEventListener("dispose",I);const ae=M.textures,Q=M.isWebGLCubeRenderTarget===!0,ye=ae.length>1;if(ye||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=_.version,a.memory.textures++),Q){O.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[pe]=[];for(let Ie=0;Ie<_.mipmaps.length;Ie++)O.__webglFramebuffer[pe][Ie]=n.createFramebuffer()}else O.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let pe=0;pe<_.mipmaps.length;pe++)O.__webglFramebuffer[pe]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(ye)for(let pe=0,Ie=ae.length;pe<Ie;pe++){const ke=i.get(ae[pe]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),a.memory.textures++)}if(M.samples>0&&fe(M)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let pe=0;pe<ae.length;pe++){const Ie=ae[pe];O.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[pe]);const ke=s.convert(Ie.format,Ie.colorSpace),de=s.convert(Ie.type),ve=y(Ie.internalFormat,ke,de,Ie.colorSpace,M.isXRRenderTarget===!0),Ee=C(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,ve,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,O.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ie(O.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),xe(n.TEXTURE_CUBE_MAP,_);for(let pe=0;pe<6;pe++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ie=0;Ie<_.mipmaps.length;Ie++)Y(O.__webglFramebuffer[pe][Ie],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie);else Y(O.__webglFramebuffer[pe],M,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(_)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let pe=0,Ie=ae.length;pe<Ie;pe++){const ke=ae[pe],de=i.get(ke);let ve=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ve=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,de.__webglTexture),xe(ve,ke),Y(O.__webglFramebuffer,M,ke,n.COLOR_ATTACHMENT0+pe,ve,0),m(ke)&&d(ve)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(pe=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,J.__webglTexture),xe(pe,_),_.mipmaps&&_.mipmaps.length>0)for(let Ie=0;Ie<_.mipmaps.length;Ie++)Y(O.__webglFramebuffer[Ie],M,_,n.COLOR_ATTACHMENT0,pe,Ie);else Y(O.__webglFramebuffer,M,_,n.COLOR_ATTACHMENT0,pe,0);m(_)&&d(pe),t.unbindTexture()}M.depthBuffer&&_e(M)}function N(M){const _=M.textures;for(let O=0,J=_.length;O<J;O++){const ae=_[O];if(m(ae)){const Q=v(M),ye=i.get(ae).__webglTexture;t.bindTexture(Q,ye),d(Q),t.unbindTexture()}}}const H=[],L=[];function $(M){if(M.samples>0){if(fe(M)===!1){const _=M.textures,O=M.width,J=M.height;let ae=n.COLOR_BUFFER_BIT;const Q=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(M),pe=_.length>1;if(pe)for(let ke=0;ke<_.length;ke++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const Ie=M.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ke=0;ke<_.length;ke++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[ke]);const de=i.get(_[ke]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,O,J,0,0,O,J,ae,n.NEAREST),l===!0&&(H.length=0,L.length=0,H.push(n.COLOR_ATTACHMENT0+ke),M.depthBuffer&&M.resolveDepthBuffer===!1&&(H.push(Q),L.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,H))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let ke=0;ke<_.length;ke++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,ye.__webglColorRenderbuffer[ke]);const de=i.get(_[ke]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,de,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const _=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function C(M){return Math.min(r.maxSamples,M.samples)}function fe(M){const _=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function se(M){const _=a.render.frame;u.get(M)!==_&&(u.set(M,_),M.update())}function re(M,_){const O=M.colorSpace,J=M.format,ae=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||O!==Ss&&O!==Zi&&(ot.getTransfer(O)===pt?(J!==zn||ae!==Rn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",O)),_}function ce(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=k,this.setTextureCube=oe,this.rebindTextures=R,this.setupRenderTarget=w,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function VE(n,e){function t(i,r=Zi){let s;const a=ot.getTransfer(r);if(i===Rn)return n.UNSIGNED_BYTE;if(i===Ou)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ku)return n.UNSIGNED_SHORT_5_5_5_1;if(i===rm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===sm)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===nm)return n.BYTE;if(i===im)return n.SHORT;if(i===la)return n.UNSIGNED_SHORT;if(i===Fu)return n.INT;if(i===di)return n.UNSIGNED_INT;if(i===ai)return n.FLOAT;if(i===En)return n.HALF_FLOAT;if(i===am)return n.ALPHA;if(i===om)return n.RGB;if(i===zn)return n.RGBA;if(i===Li)return n.DEPTH_COMPONENT;if(i===Tr)return n.DEPTH_STENCIL;if(i===lm)return n.RED;if(i===Bu)return n.RED_INTEGER;if(i===xs)return n.RG;if(i===zu)return n.RG_INTEGER;if(i===Vu)return n.RGBA_INTEGER;if(i===so||i===ao||i===oo||i===lo)if(a===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===so)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===so)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ao)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===lo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rc||i===Pc||i===Dc||i===Ic)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Rc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Dc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ic)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lc||i===Uc||i===Nc||i===Fc||i===Oc||i===kc||i===Bc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Lc||i===Uc)return a===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Nc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Fc)return s.COMPRESSED_R11_EAC;if(i===Oc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===kc)return s.COMPRESSED_RG11_EAC;if(i===Bc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===zc||i===Vc||i===Hc||i===Gc||i===Wc||i===Xc||i===$c||i===qc||i===Yc||i===jc||i===Kc||i===Zc||i===Jc||i===Qc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===zc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$c)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===jc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===eu||i===tu||i===nu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===eu)return a===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===iu||i===ru||i===su||i===au)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===iu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ru)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===su)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===au)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ca?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const HE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GE=`
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

}`;class WE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Sm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new $t({vertexShader:HE,fragmentShader:GE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qn(new Zo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XE extends ys{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const b=typeof XRWebGLBinding<"u",m=new WE,d={},v=t.getContextAttributes();let y=null,S=null;const P=[],T=[],I=new Ge;let x=null;const A=new Cn;A.viewport=new It;const K=new Cn;K.viewport=new It;const D=[A,K],F=new eS;let z=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let U=P[V];return U===void 0&&(U=new Pl,P[V]=U),U.getTargetRaySpace()},this.getControllerGrip=function(V){let U=P[V];return U===void 0&&(U=new Pl,P[V]=U),U.getGripSpace()},this.getHand=function(V){let U=P[V];return U===void 0&&(U=new Pl,P[V]=U),U.getHandSpace()};function W(V){const U=T.indexOf(V.inputSource);if(U===-1)return;const Y=P[U];Y!==void 0&&(Y.update(V.inputSource,V.frame,c||a),Y.dispatchEvent({type:V.type,data:V.inputSource}))}function X(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",k);for(let V=0;V<P.length;V++){const U=T[V];U!==null&&(T[V]=null,P[V].disconnect(U))}z=null,Z=null,m.reset();for(const V in d)delete d[V];e.setRenderTarget(y),p=null,h=null,f=null,r=null,S=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",X),r.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(I),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Y=null,ie=null,ue=null;v.depth&&(ue=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=v.stencil?Tr:Li,ie=v.stencil?ca:di);const _e={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(_e),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new pn(h.textureWidth,h.textureHeight,{format:zn,type:Rn,depthTexture:new ua(h.textureWidth,h.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Y={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new pn(p.framebufferWidth,p.framebufferHeight,{format:zn,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(V){for(let U=0;U<V.removed.length;U++){const Y=V.removed[U],ie=T.indexOf(Y);ie>=0&&(T[ie]=null,P[ie].disconnect(Y))}for(let U=0;U<V.added.length;U++){const Y=V.added[U];let ie=T.indexOf(Y);if(ie===-1){for(let _e=0;_e<P.length;_e++)if(_e>=T.length){T.push(Y),ie=_e;break}else if(T[_e]===null){T[_e]=Y,ie=_e;break}if(ie===-1)break}const ue=P[ie];ue&&ue.connect(Y)}}const oe=new q,he=new q;function ge(V,U,Y){oe.setFromMatrixPosition(U.matrixWorld),he.setFromMatrixPosition(Y.matrixWorld);const ie=oe.distanceTo(he),ue=U.projectionMatrix.elements,_e=Y.projectionMatrix.elements,R=ue[14]/(ue[10]-1),w=ue[14]/(ue[10]+1),N=(ue[9]+1)/ue[5],H=(ue[9]-1)/ue[5],L=(ue[8]-1)/ue[0],$=(_e[8]+1)/_e[0],C=R*L,fe=R*$,se=ie/(-L+$),re=se*-L;if(U.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(re),V.translateZ(se),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),ue[10]===-1)V.projectionMatrix.copy(U.projectionMatrix),V.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const ce=R+se,M=w+se,_=C-re,O=fe+(ie-re),J=N*w/M*ce,ae=H*w/M*ce;V.projectionMatrix.makePerspective(_,O,J,ae,ce,M),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function Me(V,U){U===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(U.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let U=V.near,Y=V.far;m.texture!==null&&(m.depthNear>0&&(U=m.depthNear),m.depthFar>0&&(Y=m.depthFar)),F.near=K.near=A.near=U,F.far=K.far=A.far=Y,(z!==F.near||Z!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,Z=F.far),F.layers.mask=V.layers.mask|6,A.layers.mask=F.layers.mask&-5,K.layers.mask=F.layers.mask&-3;const ie=V.parent,ue=F.cameras;Me(F,ie);for(let _e=0;_e<ue.length;_e++)Me(ue[_e],ie);ue.length===2?ge(F,A,K):F.projectionMatrix.copy(A.projectionMatrix),xe(V,F,ie)};function xe(V,U,Y){Y===null?V.matrix.copy(U.matrixWorld):(V.matrix.copy(Y.matrixWorld),V.matrix.invert(),V.matrix.multiply(U.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(U.projectionMatrix),V.projectionMatrixInverse.copy(U.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=lu*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(V){return d[V]};let He=null;function et(V,U){if(u=U.getViewerPose(c||a),g=U,u!==null){const Y=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let ie=!1;Y.length!==F.cameras.length&&(F.cameras.length=0,ie=!0);for(let w=0;w<Y.length;w++){const N=Y[w];let H=null;if(p!==null)H=p.getViewport(N);else{const $=f.getViewSubImage(h,N);H=$.viewport,w===0&&(e.setRenderTargetTextures(S,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(S))}let L=D[w];L===void 0&&(L=new Cn,L.layers.enable(w),L.viewport=new It,D[w]=L),L.matrix.fromArray(N.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(N.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(H.x,H.y,H.width,H.height),w===0&&(F.matrix.copy(L.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ie===!0&&F.cameras.push(L)}const ue=r.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){f=i.getBinding();const w=f.getDepthInformation(Y[0]);w&&w.isValid&&w.texture&&m.init(w,r.renderState)}if(ue&&ue.includes("camera-access")&&b){e.state.unbindTexture(),f=i.getBinding();for(let w=0;w<Y.length;w++){const N=Y[w].camera;if(N){let H=d[N];H||(H=new Sm,d[N]=H);const L=f.getCameraImage(N);H.sourceTexture=L}}}}for(let Y=0;Y<P.length;Y++){const ie=T[Y],ue=P[Y];ie!==null&&ue!==void 0&&ue.update(ie,U,c||a)}He&&He(V,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),g=null}const je=new ym;je.setAnimationLoop(et),this.setAnimationLoop=function(V){He=V},this.dispose=function(){}}}const mr=new Ui,$E=new Pt;function qE(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,bm(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,y,S){d.isMeshBasicMaterial?s(m,d):d.isMeshLambertMaterial?(s(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),b(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,v,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===dn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===dn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),y=v.envMap,S=v.envMapRotation;y&&(m.envMap.value=y,mr.copy(S),mr.x*=-1,mr.y*=-1,mr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),m.envMapRotation.value.setFromMatrix4($E.makeRotationFromEuler(mr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=y*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===dn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function b(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function YE(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const S=y.program;i.uniformBlockBinding(v,S)}function c(v,y){let S=r[v.id];S===void 0&&(g(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",m));const P=y.program;i.updateUBOMapping(v,P);const T=e.render.frame;s[v.id]!==T&&(h(v),s[v.id]=T)}function u(v){const y=f();v.__bindingPointIndex=y;const S=n.createBuffer(),P=v.__size,T=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,P,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,S),S}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=r[v.id],S=v.uniforms,P=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,I=S.length;T<I;T++){const x=Array.isArray(S[T])?S[T]:[S[T]];for(let A=0,K=x.length;A<K;A++){const D=x[A];if(p(D,T,A,P)===!0){const F=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let Z=0;for(let W=0;W<z.length;W++){const X=z[W],k=b(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,F+Z,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,Z),Z+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,y,S,P){const T=v.value,I=y+"_"+S;if(P[I]===void 0)return typeof T=="number"||typeof T=="boolean"?P[I]=T:P[I]=T.clone(),!0;{const x=P[I];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return P[I]=T,!0}else if(x.equals(T)===!1)return x.copy(T),!0}return!1}function g(v){const y=v.uniforms;let S=0;const P=16;for(let I=0,x=y.length;I<x;I++){const A=Array.isArray(y[I])?y[I]:[y[I]];for(let K=0,D=A.length;K<D;K++){const F=A[K],z=Array.isArray(F.value)?F.value:[F.value];for(let Z=0,W=z.length;Z<W;Z++){const X=z[Z],k=b(X),oe=S%P,he=oe%k.boundary,ge=oe+he;S+=he,ge!==0&&P-ge<k.storage&&(S+=P-ge),F.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=k.storage}}}const T=S%P;return T>0&&(S+=P-T),v.__size=S,v.__cache={},this}function b(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):$e("WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const v in r)n.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}const jE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Jn=null;function KE(){return Jn===null&&(Jn=new Vx(jE,16,16,xs,En),Jn.name="DFG_LUT",Jn.minFilter=Qt,Jn.magFilter=Qt,Jn.wrapS=Ci,Jn.wrapT=Ci,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}class ZE{constructor(e={}){const{canvas:t=_x(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=Rn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const b=p,m=new Set([Vu,zu,Bu]),d=new Set([Rn,di,la,ca,Ou,ku]),v=new Uint32Array(4),y=new Int32Array(4);let S=null,P=null;const T=[],I=[];let x=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let K=!1;this._outputColorSpace=wn;let D=0,F=0,z=null,Z=-1,W=null;const X=new It,k=new It;let oe=null;const he=new We(0);let ge=0,Me=t.width,xe=t.height,He=1,et=null,je=null;const V=new It(0,0,Me,xe),U=new It(0,0,Me,xe);let Y=!1;const ie=new _m;let ue=!1,_e=!1;const R=new Pt,w=new q,N=new It,H={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let L=!1;function $(){return z===null?He:1}let C=i;function fe(E,G){return t.getContext(E,G)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uu}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",St,!1),C===null){const G="webgl2";if(C=fe(G,E),C===null)throw fe(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw at("WebGLRenderer: "+E.message),E}let se,re,ce,M,_,O,J,ae,Q,ye,pe,Ie,ke,de,ve,Ee,Ce,Re,Ke,B,be,Se,Le;function me(){se=new ZM(C),se.init(),be=new VE(C,se),re=new GM(C,se,e,be),ce=new BE(C,se),re.reversedDepthBuffer&&h&&ce.buffers.depth.setReversed(!0),M=new ey(C),_=new TE,O=new zE(C,se,ce,_,re,be,M),J=new KM(A),ae=new sS(C),Se=new VM(C,ae),Q=new JM(C,ae,M,Se),ye=new ny(C,Q,ae,Se,M),Re=new ty(C,re,O),ve=new WM(_),pe=new EE(A,J,se,re,Se,ve),Ie=new qE(A,_),ke=new wE,de=new LE(se),Ce=new zM(A,J,ce,ye,g,l),Ee=new kE(A,ye,re),Le=new YE(C,M,re,ce),Ke=new HM(C,se,M),B=new QM(C,se,M),M.programs=pe.programs,A.capabilities=re,A.extensions=se,A.properties=_,A.renderLists=ke,A.shadowMap=Ee,A.state=ce,A.info=M}me(),b!==Rn&&(x=new ry(b,t.width,t.height,r,s));const le=new XE(A,C);this.xr=le,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const E=se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return He},this.setPixelRatio=function(E){E!==void 0&&(He=E,this.setSize(Me,xe,!1))},this.getSize=function(E){return E.set(Me,xe)},this.setSize=function(E,G,ne=!0){if(le.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=E,xe=G,t.width=Math.floor(E*He),t.height=Math.floor(G*He),ne===!0&&(t.style.width=E+"px",t.style.height=G+"px"),x!==null&&x.setSize(t.width,t.height),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(Me*He,xe*He).floor()},this.setDrawingBufferSize=function(E,G,ne){Me=E,xe=G,He=ne,t.width=Math.floor(E*ne),t.height=Math.floor(G*ne),this.setViewport(0,0,E,G)},this.setEffects=function(E){if(b===Rn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let G=0;G<E.length;G++)if(E[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(X)},this.getViewport=function(E){return E.copy(V)},this.setViewport=function(E,G,ne,te){E.isVector4?V.set(E.x,E.y,E.z,E.w):V.set(E,G,ne,te),ce.viewport(X.copy(V).multiplyScalar(He).round())},this.getScissor=function(E){return E.copy(U)},this.setScissor=function(E,G,ne,te){E.isVector4?U.set(E.x,E.y,E.z,E.w):U.set(E,G,ne,te),ce.scissor(k.copy(U).multiplyScalar(He).round())},this.getScissorTest=function(){return Y},this.setScissorTest=function(E){ce.setScissorTest(Y=E)},this.setOpaqueSort=function(E){et=E},this.setTransparentSort=function(E){je=E},this.getClearColor=function(E){return E.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(E=!0,G=!0,ne=!0){let te=0;if(E){let ee=!1;if(z!==null){const Ae=z.texture.format;ee=m.has(Ae)}if(ee){const Ae=z.texture.type,De=d.has(Ae),we=Ce.getClearColor(),Oe=Ce.getClearAlpha(),ze=we.r,Ze=we.g,tt=we.b;De?(v[0]=ze,v[1]=Ze,v[2]=tt,v[3]=Oe,C.clearBufferuiv(C.COLOR,0,v)):(y[0]=ze,y[1]=Ze,y[2]=tt,y[3]=Oe,C.clearBufferiv(C.COLOR,0,y))}else te|=C.COLOR_BUFFER_BIT}G&&(te|=C.DEPTH_BUFFER_BIT),ne&&(te|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&C.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",St,!1),Ce.dispose(),ke.dispose(),de.dispose(),_.dispose(),J.dispose(),ye.dispose(),Se.dispose(),Le.dispose(),pe.dispose(),le.dispose(),le.removeEventListener("sessionstart",of),le.removeEventListener("sessionend",lf),rr.stop()};function Fe(E){E.preventDefault(),To("WebGLRenderer: Context Lost."),K=!0}function qe(){To("WebGLRenderer: Context Restored."),K=!1;const E=M.autoReset,G=Ee.enabled,ne=Ee.autoUpdate,te=Ee.needsUpdate,ee=Ee.type;me(),M.autoReset=E,Ee.enabled=G,Ee.autoUpdate=ne,Ee.needsUpdate=te,Ee.type=ee}function St(E){at("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function dt(E){const G=E.target;G.removeEventListener("dispose",dt),pi(G)}function pi(E){mi(E),_.remove(E)}function mi(E){const G=_.get(E).programs;G!==void 0&&(G.forEach(function(ne){pe.releaseProgram(ne)}),E.isShaderMaterial&&pe.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,ne,te,ee,Ae){G===null&&(G=H);const De=ee.isMesh&&ee.matrixWorld.determinant()<0,we=Hm(E,G,ne,te,ee);ce.setMaterial(te,De);let Oe=ne.index,ze=1;if(te.wireframe===!0){if(Oe=Q.getWireframeAttribute(ne),Oe===void 0)return;ze=2}const Ze=ne.drawRange,tt=ne.attributes.position;let Ve=Ze.start*ze,mt=(Ze.start+Ze.count)*ze;Ae!==null&&(Ve=Math.max(Ve,Ae.start*ze),mt=Math.min(mt,(Ae.start+Ae.count)*ze)),Oe!==null?(Ve=Math.max(Ve,0),mt=Math.min(mt,Oe.count)):tt!=null&&(Ve=Math.max(Ve,0),mt=Math.min(mt,tt.count));const Dt=mt-Ve;if(Dt<0||Dt===1/0)return;Se.setup(ee,te,we,ne,Oe);let Ct,gt=Ke;if(Oe!==null&&(Ct=ae.get(Oe),gt=B,gt.setIndex(Ct)),ee.isMesh)te.wireframe===!0?(ce.setLineWidth(te.wireframeLinewidth*$()),gt.setMode(C.LINES)):gt.setMode(C.TRIANGLES);else if(ee.isLine){let qt=te.linewidth;qt===void 0&&(qt=1),ce.setLineWidth(qt*$()),ee.isLineSegments?gt.setMode(C.LINES):ee.isLineLoop?gt.setMode(C.LINE_LOOP):gt.setMode(C.LINE_STRIP)}else ee.isPoints?gt.setMode(C.POINTS):ee.isSprite&&gt.setMode(C.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)Ao("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))gt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const qt=ee._multiDrawStarts,Be=ee._multiDrawCounts,_n=ee._multiDrawCount,lt=Oe?ae.get(Oe).bytesPerElement:1,Un=_.get(te).currentProgram.getUniforms();for(let jn=0;jn<_n;jn++)Un.setValue(C,"_gl_DrawID",jn),gt.render(qt[jn]/lt,Be[jn])}else if(ee.isInstancedMesh)gt.renderInstances(Ve,Dt,ee.count);else if(ne.isInstancedBufferGeometry){const qt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Be=Math.min(ne.instanceCount,qt);gt.renderInstances(Ve,Dt,Be)}else gt.render(Ve,Dt)};function af(E,G,ne){E.transparent===!0&&E.side===ii&&E.forceSinglePass===!1?(E.side=dn,E.needsUpdate=!0,Sa(E,G,ne),E.side=nr,E.needsUpdate=!0,Sa(E,G,ne),E.side=ii):Sa(E,G,ne)}this.compile=function(E,G,ne=null){ne===null&&(ne=E),P=de.get(ne),P.init(G),I.push(P),ne.traverseVisible(function(ee){ee.isLight&&ee.layers.test(G.layers)&&(P.pushLight(ee),ee.castShadow&&P.pushShadow(ee))}),E!==ne&&E.traverseVisible(function(ee){ee.isLight&&ee.layers.test(G.layers)&&(P.pushLight(ee),ee.castShadow&&P.pushShadow(ee))}),P.setupLights();const te=new Set;return E.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Ae=ee.material;if(Ae)if(Array.isArray(Ae))for(let De=0;De<Ae.length;De++){const we=Ae[De];af(we,ne,ee),te.add(we)}else af(Ae,ne,ee),te.add(Ae)}),P=I.pop(),te},this.compileAsync=function(E,G,ne=null){const te=this.compile(E,G,ne);return new Promise(ee=>{function Ae(){if(te.forEach(function(De){_.get(De).currentProgram.isReady()&&te.delete(De)}),te.size===0){ee(E);return}setTimeout(Ae,10)}se.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let nl=null;function Vm(E){nl&&nl(E)}function of(){rr.stop()}function lf(){rr.start()}const rr=new ym;rr.setAnimationLoop(Vm),typeof self<"u"&&rr.setContext(self),this.setAnimationLoop=function(E){nl=E,le.setAnimationLoop(E),E===null?rr.stop():rr.start()},le.addEventListener("sessionstart",of),le.addEventListener("sessionend",lf),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;const ne=le.enabled===!0&&le.isPresenting===!0,te=x!==null&&(z===null||ne)&&x.begin(A,z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(G),G=le.getCamera()),E.isScene===!0&&E.onBeforeRender(A,E,G,z),P=de.get(E,I.length),P.init(G),I.push(P),R.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ie.setFromProjectionMatrix(R,oi,G.reversedDepth),_e=this.localClippingEnabled,ue=ve.init(this.clippingPlanes,_e),S=ke.get(E,T.length),S.init(),T.push(S),le.enabled===!0&&le.isPresenting===!0){const De=A.xr.getDepthSensingMesh();De!==null&&il(De,G,-1/0,A.sortObjects)}il(E,G,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(et,je),L=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,L&&Ce.addToRenderList(S,E),this.info.render.frame++,ue===!0&&ve.beginShadows();const ee=P.state.shadowsArray;if(Ee.render(ee,E,G),ue===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&x.hasRenderPass())===!1){const De=S.opaque,we=S.transmissive;if(P.setupLights(),G.isArrayCamera){const Oe=G.cameras;if(we.length>0)for(let ze=0,Ze=Oe.length;ze<Ze;ze++){const tt=Oe[ze];uf(De,we,E,tt)}L&&Ce.render(E);for(let ze=0,Ze=Oe.length;ze<Ze;ze++){const tt=Oe[ze];cf(S,E,tt,tt.viewport)}}else we.length>0&&uf(De,we,E,G),L&&Ce.render(E),cf(S,E,G)}z!==null&&F===0&&(O.updateMultisampleRenderTarget(z),O.updateRenderTargetMipmap(z)),te&&x.end(A),E.isScene===!0&&E.onAfterRender(A,E,G),Se.resetDefaultState(),Z=-1,W=null,I.pop(),I.length>0?(P=I[I.length-1],ue===!0&&ve.setGlobalState(A.clippingPlanes,P.state.camera)):P=null,T.pop(),T.length>0?S=T[T.length-1]:S=null};function il(E,G,ne,te){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)ne=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)P.pushLight(E),E.castShadow&&P.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ie.intersectsSprite(E)){te&&N.setFromMatrixPosition(E.matrixWorld).applyMatrix4(R);const De=ye.update(E),we=E.material;we.visible&&S.push(E,De,we,ne,N.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ie.intersectsObject(E))){const De=ye.update(E),we=E.material;if(te&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),N.copy(E.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),N.copy(De.boundingSphere.center)),N.applyMatrix4(E.matrixWorld).applyMatrix4(R)),Array.isArray(we)){const Oe=De.groups;for(let ze=0,Ze=Oe.length;ze<Ze;ze++){const tt=Oe[ze],Ve=we[tt.materialIndex];Ve&&Ve.visible&&S.push(E,De,Ve,ne,N.z,tt)}}else we.visible&&S.push(E,De,we,ne,N.z,null)}}const Ae=E.children;for(let De=0,we=Ae.length;De<we;De++)il(Ae[De],G,ne,te)}function cf(E,G,ne,te){const{opaque:ee,transmissive:Ae,transparent:De}=E;P.setupLightsView(ne),ue===!0&&ve.setGlobalState(A.clippingPlanes,ne),te&&ce.viewport(X.copy(te)),ee.length>0&&xa(ee,G,ne),Ae.length>0&&xa(Ae,G,ne),De.length>0&&xa(De,G,ne),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function uf(E,G,ne,te){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[te.id]===void 0){const Ve=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[te.id]=new pn(1,1,{generateMipmaps:!0,type:Ve?En:Rn,minFilter:Er,samples:re.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const Ae=P.state.transmissionRenderTarget[te.id],De=te.viewport||X;Ae.setSize(De.z*A.transmissionResolutionScale,De.w*A.transmissionResolutionScale);const we=A.getRenderTarget(),Oe=A.getActiveCubeFace(),ze=A.getActiveMipmapLevel();A.setRenderTarget(Ae),A.getClearColor(he),ge=A.getClearAlpha(),ge<1&&A.setClearColor(16777215,.5),A.clear(),L&&Ce.render(ne);const Ze=A.toneMapping;A.toneMapping=fi;const tt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),P.setupLightsView(te),ue===!0&&ve.setGlobalState(A.clippingPlanes,te),xa(E,ne,te),O.updateMultisampleRenderTarget(Ae),O.updateRenderTargetMipmap(Ae),se.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let mt=0,Dt=G.length;mt<Dt;mt++){const Ct=G[mt],{object:gt,geometry:qt,material:Be,group:_n}=Ct;if(Be.side===ii&&gt.layers.test(te.layers)){const lt=Be.side;Be.side=dn,Be.needsUpdate=!0,ff(gt,ne,te,qt,Be,_n),Be.side=lt,Be.needsUpdate=!0,Ve=!0}}Ve===!0&&(O.updateMultisampleRenderTarget(Ae),O.updateRenderTargetMipmap(Ae))}A.setRenderTarget(we,Oe,ze),A.setClearColor(he,ge),tt!==void 0&&(te.viewport=tt),A.toneMapping=Ze}function xa(E,G,ne){const te=G.isScene===!0?G.overrideMaterial:null;for(let ee=0,Ae=E.length;ee<Ae;ee++){const De=E[ee],{object:we,geometry:Oe,group:ze}=De;let Ze=De.material;Ze.allowOverride===!0&&te!==null&&(Ze=te),we.layers.test(ne.layers)&&ff(we,G,ne,Oe,Ze,ze)}}function ff(E,G,ne,te,ee,Ae){E.onBeforeRender(A,G,ne,te,ee,Ae),E.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),ee.onBeforeRender(A,G,ne,te,E,Ae),ee.transparent===!0&&ee.side===ii&&ee.forceSinglePass===!1?(ee.side=dn,ee.needsUpdate=!0,A.renderBufferDirect(ne,G,te,ee,E,Ae),ee.side=nr,ee.needsUpdate=!0,A.renderBufferDirect(ne,G,te,ee,E,Ae),ee.side=ii):A.renderBufferDirect(ne,G,te,ee,E,Ae),E.onAfterRender(A,G,ne,te,ee,Ae)}function Sa(E,G,ne){G.isScene!==!0&&(G=H);const te=_.get(E),ee=P.state.lights,Ae=P.state.shadowsArray,De=ee.state.version,we=pe.getParameters(E,ee.state,Ae,G,ne),Oe=pe.getProgramCacheKey(we);let ze=te.programs;te.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?G.environment:null,te.fog=G.fog;const Ze=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;te.envMap=J.get(E.envMap||te.environment,Ze),te.envMapRotation=te.environment!==null&&E.envMap===null?G.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",dt),ze=new Map,te.programs=ze);let tt=ze.get(Oe);if(tt!==void 0){if(te.currentProgram===tt&&te.lightsStateVersion===De)return df(E,we),tt}else we.uniforms=pe.getUniforms(E),E.onBeforeCompile(we,A),tt=pe.acquireProgram(we,Oe),ze.set(Oe,tt),te.uniforms=we.uniforms;const Ve=te.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ve.clippingPlanes=ve.uniform),df(E,we),te.needsLights=Wm(E),te.lightsStateVersion=De,te.needsLights&&(Ve.ambientLightColor.value=ee.state.ambient,Ve.lightProbe.value=ee.state.probe,Ve.directionalLights.value=ee.state.directional,Ve.directionalLightShadows.value=ee.state.directionalShadow,Ve.spotLights.value=ee.state.spot,Ve.spotLightShadows.value=ee.state.spotShadow,Ve.rectAreaLights.value=ee.state.rectArea,Ve.ltc_1.value=ee.state.rectAreaLTC1,Ve.ltc_2.value=ee.state.rectAreaLTC2,Ve.pointLights.value=ee.state.point,Ve.pointLightShadows.value=ee.state.pointShadow,Ve.hemisphereLights.value=ee.state.hemi,Ve.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ve.spotLightMatrix.value=ee.state.spotLightMatrix,Ve.spotLightMap.value=ee.state.spotLightMap,Ve.pointShadowMatrix.value=ee.state.pointShadowMatrix),te.currentProgram=tt,te.uniformsList=null,tt}function hf(E){if(E.uniformsList===null){const G=E.currentProgram.getUniforms();E.uniformsList=uo.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function df(E,G){const ne=_.get(E);ne.outputColorSpace=G.outputColorSpace,ne.batching=G.batching,ne.batchingColor=G.batchingColor,ne.instancing=G.instancing,ne.instancingColor=G.instancingColor,ne.instancingMorph=G.instancingMorph,ne.skinning=G.skinning,ne.morphTargets=G.morphTargets,ne.morphNormals=G.morphNormals,ne.morphColors=G.morphColors,ne.morphTargetsCount=G.morphTargetsCount,ne.numClippingPlanes=G.numClippingPlanes,ne.numIntersection=G.numClipIntersection,ne.vertexAlphas=G.vertexAlphas,ne.vertexTangents=G.vertexTangents,ne.toneMapping=G.toneMapping}function Hm(E,G,ne,te,ee){G.isScene!==!0&&(G=H),O.resetTextureUnits();const Ae=G.fog,De=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?G.environment:null,we=z===null?A.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Ss,Oe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,ze=J.get(te.envMap||De,Oe),Ze=te.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,tt=!!ne.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ve=!!ne.morphAttributes.position,mt=!!ne.morphAttributes.normal,Dt=!!ne.morphAttributes.color;let Ct=fi;te.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ct=A.toneMapping);const gt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,qt=gt!==void 0?gt.length:0,Be=_.get(te),_n=P.state.lights;if(ue===!0&&(_e===!0||E!==W)){const Bt=E===W&&te.id===Z;ve.setState(te,E,Bt)}let lt=!1;te.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==_n.state.version||Be.outputColorSpace!==we||ee.isBatchedMesh&&Be.batching===!1||!ee.isBatchedMesh&&Be.batching===!0||ee.isBatchedMesh&&Be.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Be.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Be.instancing===!1||!ee.isInstancedMesh&&Be.instancing===!0||ee.isSkinnedMesh&&Be.skinning===!1||!ee.isSkinnedMesh&&Be.skinning===!0||ee.isInstancedMesh&&Be.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Be.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Be.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Be.instancingMorph===!1&&ee.morphTexture!==null||Be.envMap!==ze||te.fog===!0&&Be.fog!==Ae||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ve.numPlanes||Be.numIntersection!==ve.numIntersection)||Be.vertexAlphas!==Ze||Be.vertexTangents!==tt||Be.morphTargets!==Ve||Be.morphNormals!==mt||Be.morphColors!==Dt||Be.toneMapping!==Ct||Be.morphTargetsCount!==qt)&&(lt=!0):(lt=!0,Be.__version=te.version);let Un=Be.currentProgram;lt===!0&&(Un=Sa(te,G,ee));let jn=!1,sr=!1,Nr=!1;const vt=Un.getUniforms(),Ht=Be.uniforms;if(ce.useProgram(Un.program)&&(jn=!0,sr=!0,Nr=!0),te.id!==Z&&(Z=te.id,sr=!0),jn||W!==E){ce.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),vt.setValue(C,"projectionMatrix",E.projectionMatrix),vt.setValue(C,"viewMatrix",E.matrixWorldInverse);const Oi=vt.map.cameraPosition;Oi!==void 0&&Oi.setValue(C,w.setFromMatrixPosition(E.matrixWorld)),re.logarithmicDepthBuffer&&vt.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&vt.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),W!==E&&(W=E,sr=!0,Nr=!0)}if(Be.needsLights&&(_n.state.directionalShadowMap.length>0&&vt.setValue(C,"directionalShadowMap",_n.state.directionalShadowMap,O),_n.state.spotShadowMap.length>0&&vt.setValue(C,"spotShadowMap",_n.state.spotShadowMap,O),_n.state.pointShadowMap.length>0&&vt.setValue(C,"pointShadowMap",_n.state.pointShadowMap,O)),ee.isSkinnedMesh){vt.setOptional(C,ee,"bindMatrix"),vt.setOptional(C,ee,"bindMatrixInverse");const Bt=ee.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),vt.setValue(C,"boneTexture",Bt.boneTexture,O))}ee.isBatchedMesh&&(vt.setOptional(C,ee,"batchingTexture"),vt.setValue(C,"batchingTexture",ee._matricesTexture,O),vt.setOptional(C,ee,"batchingIdTexture"),vt.setValue(C,"batchingIdTexture",ee._indirectTexture,O),vt.setOptional(C,ee,"batchingColorTexture"),ee._colorsTexture!==null&&vt.setValue(C,"batchingColorTexture",ee._colorsTexture,O));const Fi=ne.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&Re.update(ee,ne,Un),(sr||Be.receiveShadow!==ee.receiveShadow)&&(Be.receiveShadow=ee.receiveShadow,vt.setValue(C,"receiveShadow",ee.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&G.environment!==null&&(Ht.envMapIntensity.value=G.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=KE()),sr&&(vt.setValue(C,"toneMappingExposure",A.toneMappingExposure),Be.needsLights&&Gm(Ht,Nr),Ae&&te.fog===!0&&Ie.refreshFogUniforms(Ht,Ae),Ie.refreshMaterialUniforms(Ht,te,He,xe,P.state.transmissionRenderTarget[E.id]),uo.upload(C,hf(Be),Ht,O)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(uo.upload(C,hf(Be),Ht,O),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&vt.setValue(C,"center",ee.center),vt.setValue(C,"modelViewMatrix",ee.modelViewMatrix),vt.setValue(C,"normalMatrix",ee.normalMatrix),vt.setValue(C,"modelMatrix",ee.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Bt=te.uniformsGroups;for(let Oi=0,Fr=Bt.length;Oi<Fr;Oi++){const pf=Bt[Oi];Le.update(pf,Un),Le.bind(pf,Un)}}return Un}function Gm(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function Wm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(E,G,ne){const te=_.get(E);te.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),_.get(E.texture).__webglTexture=G,_.get(E.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ne,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,G){const ne=_.get(E);ne.__webglFramebuffer=G,ne.__useDefaultFramebuffer=G===void 0};const Xm=C.createFramebuffer();this.setRenderTarget=function(E,G=0,ne=0){z=E,D=G,F=ne;let te=null,ee=!1,Ae=!1;if(E){const we=_.get(E);if(we.__useDefaultFramebuffer!==void 0){ce.bindFramebuffer(C.FRAMEBUFFER,we.__webglFramebuffer),X.copy(E.viewport),k.copy(E.scissor),oe=E.scissorTest,ce.viewport(X),ce.scissor(k),ce.setScissorTest(oe),Z=-1;return}else if(we.__webglFramebuffer===void 0)O.setupRenderTarget(E);else if(we.__hasExternalTextures)O.rebindTextures(E,_.get(E.texture).__webglTexture,_.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ze=E.depthTexture;if(we.__boundDepthTexture!==Ze){if(Ze!==null&&_.has(Ze)&&(E.width!==Ze.image.width||E.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(E)}}const Oe=E.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ae=!0);const ze=_.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ze[G])?te=ze[G][ne]:te=ze[G],ee=!0):E.samples>0&&O.useMultisampledRTT(E)===!1?te=_.get(E).__webglMultisampledFramebuffer:Array.isArray(ze)?te=ze[ne]:te=ze,X.copy(E.viewport),k.copy(E.scissor),oe=E.scissorTest}else X.copy(V).multiplyScalar(He).floor(),k.copy(U).multiplyScalar(He).floor(),oe=Y;if(ne!==0&&(te=Xm),ce.bindFramebuffer(C.FRAMEBUFFER,te)&&ce.drawBuffers(E,te),ce.viewport(X),ce.scissor(k),ce.setScissorTest(oe),ee){const we=_.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+G,we.__webglTexture,ne)}else if(Ae){const we=G;for(let Oe=0;Oe<E.textures.length;Oe++){const ze=_.get(E.textures[Oe]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Oe,ze.__webglTexture,ne,we)}}else if(E!==null&&ne!==0){const we=_.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,we.__webglTexture,ne)}Z=-1},this.readRenderTargetPixels=function(E,G,ne,te,ee,Ae,De,we=0){if(!(E&&E.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=_.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe){ce.bindFramebuffer(C.FRAMEBUFFER,Oe);try{const ze=E.textures[we],Ze=ze.format,tt=ze.type;if(E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+we),!re.textureFormatReadable(Ze)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(tt)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-te&&ne>=0&&ne<=E.height-ee&&C.readPixels(G,ne,te,ee,be.convert(Ze),be.convert(tt),Ae)}finally{const ze=z!==null?_.get(z).__webglFramebuffer:null;ce.bindFramebuffer(C.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(E,G,ne,te,ee,Ae,De,we=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=_.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&De!==void 0&&(Oe=Oe[De]),Oe)if(G>=0&&G<=E.width-te&&ne>=0&&ne<=E.height-ee){ce.bindFramebuffer(C.FRAMEBUFFER,Oe);const ze=E.textures[we],Ze=ze.format,tt=ze.type;if(E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+we),!re.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ve),C.bufferData(C.PIXEL_PACK_BUFFER,Ae.byteLength,C.STREAM_READ),C.readPixels(G,ne,te,ee,be.convert(Ze),be.convert(tt),0);const mt=z!==null?_.get(z).__webglFramebuffer:null;ce.bindFramebuffer(C.FRAMEBUFFER,mt);const Dt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await vx(C,Dt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ve),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Ae),C.deleteBuffer(Ve),C.deleteSync(Dt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,G=null,ne=0){const te=Math.pow(2,-ne),ee=Math.floor(E.image.width*te),Ae=Math.floor(E.image.height*te),De=G!==null?G.x:0,we=G!==null?G.y:0;O.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,ne,0,0,De,we,ee,Ae),ce.unbindTexture()};const $m=C.createFramebuffer(),qm=C.createFramebuffer();this.copyTextureToTexture=function(E,G,ne=null,te=null,ee=0,Ae=0){let De,we,Oe,ze,Ze,tt,Ve,mt,Dt;const Ct=E.isCompressedTexture?E.mipmaps[Ae]:E.image;if(ne!==null)De=ne.max.x-ne.min.x,we=ne.max.y-ne.min.y,Oe=ne.isBox3?ne.max.z-ne.min.z:1,ze=ne.min.x,Ze=ne.min.y,tt=ne.isBox3?ne.min.z:0;else{const Ht=Math.pow(2,-ee);De=Math.floor(Ct.width*Ht),we=Math.floor(Ct.height*Ht),E.isDataArrayTexture?Oe=Ct.depth:E.isData3DTexture?Oe=Math.floor(Ct.depth*Ht):Oe=1,ze=0,Ze=0,tt=0}te!==null?(Ve=te.x,mt=te.y,Dt=te.z):(Ve=0,mt=0,Dt=0);const gt=be.convert(G.format),qt=be.convert(G.type);let Be;G.isData3DTexture?(O.setTexture3D(G,0),Be=C.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(O.setTexture2DArray(G,0),Be=C.TEXTURE_2D_ARRAY):(O.setTexture2D(G,0),Be=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,G.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,G.unpackAlignment);const _n=C.getParameter(C.UNPACK_ROW_LENGTH),lt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Un=C.getParameter(C.UNPACK_SKIP_PIXELS),jn=C.getParameter(C.UNPACK_SKIP_ROWS),sr=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ct.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ct.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ze),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ze),C.pixelStorei(C.UNPACK_SKIP_IMAGES,tt);const Nr=E.isDataArrayTexture||E.isData3DTexture,vt=G.isDataArrayTexture||G.isData3DTexture;if(E.isDepthTexture){const Ht=_.get(E),Fi=_.get(G),Bt=_.get(Ht.__renderTarget),Oi=_.get(Fi.__renderTarget);ce.bindFramebuffer(C.READ_FRAMEBUFFER,Bt.__webglFramebuffer),ce.bindFramebuffer(C.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let Fr=0;Fr<Oe;Fr++)Nr&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_.get(E).__webglTexture,ee,tt+Fr),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_.get(G).__webglTexture,Ae,Dt+Fr)),C.blitFramebuffer(ze,Ze,De,we,Ve,mt,De,we,C.DEPTH_BUFFER_BIT,C.NEAREST);ce.bindFramebuffer(C.READ_FRAMEBUFFER,null),ce.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(ee!==0||E.isRenderTargetTexture||_.has(E)){const Ht=_.get(E),Fi=_.get(G);ce.bindFramebuffer(C.READ_FRAMEBUFFER,$m),ce.bindFramebuffer(C.DRAW_FRAMEBUFFER,qm);for(let Bt=0;Bt<Oe;Bt++)Nr?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ht.__webglTexture,ee,tt+Bt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ht.__webglTexture,ee),vt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Fi.__webglTexture,Ae,Dt+Bt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Fi.__webglTexture,Ae),ee!==0?C.blitFramebuffer(ze,Ze,De,we,Ve,mt,De,we,C.COLOR_BUFFER_BIT,C.NEAREST):vt?C.copyTexSubImage3D(Be,Ae,Ve,mt,Dt+Bt,ze,Ze,De,we):C.copyTexSubImage2D(Be,Ae,Ve,mt,ze,Ze,De,we);ce.bindFramebuffer(C.READ_FRAMEBUFFER,null),ce.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else vt?E.isDataTexture||E.isData3DTexture?C.texSubImage3D(Be,Ae,Ve,mt,Dt,De,we,Oe,gt,qt,Ct.data):G.isCompressedArrayTexture?C.compressedTexSubImage3D(Be,Ae,Ve,mt,Dt,De,we,Oe,gt,Ct.data):C.texSubImage3D(Be,Ae,Ve,mt,Dt,De,we,Oe,gt,qt,Ct):E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Ae,Ve,mt,De,we,gt,qt,Ct.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Ae,Ve,mt,Ct.width,Ct.height,gt,Ct.data):C.texSubImage2D(C.TEXTURE_2D,Ae,Ve,mt,De,we,gt,qt,Ct);C.pixelStorei(C.UNPACK_ROW_LENGTH,_n),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,lt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Un),C.pixelStorei(C.UNPACK_SKIP_ROWS,jn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,sr),Ae===0&&G.generateMipmaps&&C.generateMipmap(Be),ce.unbindTexture()},this.initRenderTarget=function(E){_.get(E).__webglFramebuffer===void 0&&O.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?O.setTextureCube(E,0):E.isData3DTexture?O.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?O.setTexture2DArray(E,0):O.setTexture2D(E,0),ce.unbindTexture()},this.resetState=function(){D=0,F=0,z=null,ce.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}const fo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class _a{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const JE=new $u(-1,1,1,-1,0,1);class QE extends gn{constructor(){super(),this.setAttribute("position",new In([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new In([0,2,0,0,2,0],2))}}const eT=new QE;class Rm{constructor(e){this._mesh=new qn(eT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,JE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class as extends _a{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof $t?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Co.clone(e.uniforms),this.material=new $t({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Rm(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class fd extends _a{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class tT extends _a{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class nT{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ge);this._width=i.width,this._height=i.height,t=new pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:En}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new as(fo),this.copyPass.material.blending=ui,this.timer=new tS}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}fd!==void 0&&(a instanceof fd?i=!0:a instanceof tT&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class iT extends _a{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new We}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const rT={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new We(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ms extends _a{constructor(e,t=1,i,r){super(),this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ge(e.x,e.y):new Ge(256,256),this.clearColor=new We(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new pn(s,a,{type:En}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new pn(s,a,{type:En});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const h=new pn(s,a,{type:En});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),s=Math.round(s/2),a=Math.round(a/2)}const o=rT;this.highPassUniforms=Co.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new $t({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ge(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new q(1,1,1),new q(1,1,1),new q(1,1,1),new q(1,1,1),new q(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Co.clone(fo.uniforms),this.blendMaterial=new $t({uniforms:this.copyUniforms,vertexShader:fo.vertexShader,fragmentShader:fo.fragmentShader,premultipliedAlpha:!0,blending:yr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new We,this._oldClearAlpha=1,this._basic=new Xu,this._fsQuad=new Rm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ge(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ms.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ms.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(i*i))/i);return new $t({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ge(.5,.5)},direction:{value:new Ge(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new $t({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Ms.BlurDirectionX=new Ge(1,0);Ms.BlurDirectionY=new Ge(0,1);const sT=`// Fullscreen triangle technique: a single oversized triangle that
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
`,aT=`precision highp float;

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
`,oT=`precision highp float;

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
`,lT=`precision highp float;

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
`,cT=`precision highp float;

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
`,uT=`precision highp float;

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
`,fT=`precision highp float;

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
`;function hT(n=64){const e=document.createElement("canvas");e.width=n,e.height=n;const t=e.getContext("2d"),i=n/2,r=n/2,s=t.createRadialGradient(i,i,0,i,i,r);s.addColorStop(0,"rgba(255, 255, 255, 1.0)"),s.addColorStop(.15,"rgba(220, 230, 255, 0.8)"),s.addColorStop(.4,"rgba(180, 200, 255, 0.3)"),s.addColorStop(1,"rgba(100, 150, 255, 0.0)"),t.fillStyle=s,t.fillRect(0,0,n,n);const a=new Ko(e);return a.needsUpdate=!0,a}function dT(n=64){const e=document.createElement("canvas");e.width=n,e.height=n;const t=e.getContext("2d"),i=n/2,r=n/2,s=t.createRadialGradient(i,i,0,i,i,r);s.addColorStop(0,"rgba(255, 255, 255, 1.0)"),s.addColorStop(.1,"rgba(200, 220, 255, 0.6)"),s.addColorStop(.3,"rgba(14, 91, 255, 0.3)"),s.addColorStop(.6,"rgba(14, 91, 255, 0.1)"),s.addColorStop(1,"rgba(14, 91, 255, 0.0)"),t.fillStyle=s,t.fillRect(0,0,n,n);const a=new Ko(e);return a.needsUpdate=!0,a}function pT(n=128){const e=document.createElement("canvas");e.width=n,e.height=n;const t=e.getContext("2d"),i=n/2,r=n/2,s=t.createRadialGradient(i,i,0,i,i,r);s.addColorStop(0,"rgba(100, 180, 255, 0.0)"),s.addColorStop(.3,"rgba(60, 140, 255, 0.08)"),s.addColorStop(.6,"rgba(30, 80, 200, 0.04)"),s.addColorStop(1,"rgba(10, 40, 150, 0.0)"),t.fillStyle=s,t.fillRect(0,0,n,n);const a=t.createRadialGradient(i,i,0,i,i,r*.5);a.addColorStop(0,"rgba(180, 220, 255, 0.0)"),a.addColorStop(.2,"rgba(100, 200, 255, 0.5)"),a.addColorStop(.5,"rgba(40, 120, 255, 0.25)"),a.addColorStop(1,"rgba(14, 91, 255, 0.0)"),t.fillStyle=a,t.fillRect(0,0,n,n);const o=t.createRadialGradient(i,i,0,i,i,r*.2);o.addColorStop(0,"rgba(255, 255, 255, 2.0)"),o.addColorStop(.15,"rgba(240, 248, 255, 1.5)"),o.addColorStop(.4,"rgba(180, 220, 255, 0.8)"),o.addColorStop(.7,"rgba(100, 180, 255, 0.3)"),o.addColorStop(1,"rgba(50, 120, 255, 0.0)"),t.fillStyle=o,t.fillRect(0,0,n,n),t.globalCompositeOperation="lighter";const l=n*.8,c=n*.02,u=t.createRadialGradient(i,i,0,i,i,l*.5);u.addColorStop(0,"rgba(200, 230, 255, 0.6)"),u.addColorStop(.3,"rgba(100, 180, 255, 0.2)"),u.addColorStop(1,"rgba(50, 100, 255, 0.0)"),t.save(),t.translate(i,i),t.scale(1,c/(l*.5)),t.translate(-i,-i),t.fillStyle=u,t.fillRect(0,0,n,n),t.restore();const f=n*.3,h=n*.015,p=t.createRadialGradient(i,i,0,i,i,f*.5);p.addColorStop(0,"rgba(200, 230, 255, 0.3)"),p.addColorStop(.5,"rgba(100, 160, 255, 0.08)"),p.addColorStop(1,"rgba(50, 100, 255, 0.0)"),t.save(),t.translate(i,i),t.scale(h/(f*.5),1),t.translate(-i,-i),t.fillStyle=p,t.fillRect(0,0,n,n),t.restore(),t.globalCompositeOperation="source-over";const g=new Ko(e);return g.needsUpdate=!0,g}function mT(n=128){const e=document.createElement("canvas");e.width=n,e.height=n;const t=e.getContext("2d"),i=n/2,r=n/2,s=t.createRadialGradient(i,i,0,i,i,r*.15);s.addColorStop(0,"rgba(255, 255, 255, 2.5)"),s.addColorStop(.3,"rgba(220, 240, 255, 1.2)"),s.addColorStop(.7,"rgba(150, 200, 255, 0.4)"),s.addColorStop(1,"rgba(80, 150, 255, 0.0)"),t.fillStyle=s,t.fillRect(0,0,n,n),t.globalCompositeOperation="lighter";const a=r*.9,o=1.5;for(let c=0;c<4;c++){const u=(c*45+45)*Math.PI/180;t.save(),t.translate(i,i),t.rotate(u);const f=t.createLinearGradient(0,0,a,0);f.addColorStop(0,"rgba(200, 230, 255, 0.8)"),f.addColorStop(.1,"rgba(150, 200, 255, 0.4)"),f.addColorStop(.4,"rgba(80, 150, 255, 0.1)"),f.addColorStop(1,"rgba(40, 80, 200, 0.0)"),t.fillStyle=f,t.fillRect(0,-o/2,a,o);const h=t.createLinearGradient(0,0,-a,0);h.addColorStop(0,"rgba(200, 230, 255, 0.8)"),h.addColorStop(.1,"rgba(150, 200, 255, 0.4)"),h.addColorStop(.4,"rgba(80, 150, 255, 0.1)"),h.addColorStop(1,"rgba(40, 80, 200, 0.0)"),t.fillStyle=h,t.fillRect(-a,-o/2,a,o),t.restore()}t.globalCompositeOperation="source-over";const l=new Ko(e);return l.needsUpdate=!0,l}const gT={__name:"WebGLBackground",emits:["ready"],setup(n,{emit:e}){const t=e,i=Ue(null),r={high:{pixelRatio:Math.min(window.devicePixelRatio,2),particles:150,piercingParticles:18,diffractionStars:8,stars:[2e3,800,200],bloom:!0,bloomStrength:1.2,bloomRadius:.8,bloomThreshold:.35,dof:!0,lightRays:!0,grain:!0,chromatic:!0,anamorphicFlare:!0,flareIntensity:.7,streakIntensity:.9,bleedIntensity:.5},medium:{pixelRatio:Math.min(window.devicePixelRatio,1.5),particles:80,piercingParticles:10,diffractionStars:4,stars:[1200,500,100],bloom:!0,bloomStrength:.9,bloomRadius:.6,bloomThreshold:.4,dof:!1,lightRays:!0,grain:!0,chromatic:!1,anamorphicFlare:!0,flareIntensity:.5,streakIntensity:.6,bleedIntensity:.3},low:{pixelRatio:1,particles:40,piercingParticles:5,diffractionStars:2,stars:[600,250,50],bloom:!0,bloomStrength:.6,bloomRadius:.4,bloomThreshold:.5,dof:!1,lightRays:!1,grain:!0,chromatic:!1,anamorphicFlare:!1,flareIntensity:0,streakIntensity:0,bleedIntensity:0}};function s(){const w=window.innerWidth<768||"ontouchstart"in window,N=window.matchMedia("(prefers-reduced-motion: reduce)").matches;return w||N?"low":"high"}let a=s(),o=r[a],l=null,c=null,u=null,f=null,h=null,p=null,g=null,b=[],m=null,d=[],v=null,y=[],S=null,P=[],T=null,I=null,x=null,A=null,K=null,D=null;const F={x:0,y:0},z={x:0,y:0};let Z=!1;function W(w){z.x=w.clientX/window.innerWidth*2-1,z.y=-(w.clientY/window.innerHeight)*2+1}function X(w){if(w.touches.length>0){const N=w.touches[0];z.x=N.clientX/window.innerWidth*2-1,z.y=-(N.clientY/window.innerHeight)*2+1}}const k=[];let oe=0,he=0;function ge(w){if(k.push(w),k.length>60&&k.shift(),k.length>=30){const N=k.reduce((H,L)=>H+L,0)/k.length;a==="high"&&N>22?(he++,he>2&&Me("medium")):a==="medium"&&N>33?(he++,he>2&&Me("low")):he=Math.max(0,he-1)}}function Me(w){w!==a&&(a=w,o=r[w],he=0,k.length=0,T&&(T.enabled=o.bloom,T.strength=o.bloomStrength,T.radius=o.bloomRadius,T.threshold=o.bloomThreshold),I&&(I.enabled=o.lightRays),A&&(A.enabled=o.chromatic),D&&(D.enabled=o.anamorphicFlare,o.anamorphicFlare&&(D.uniforms.uFlareIntensity.value=o.flareIntensity,D.uniforms.uStreakIntensity.value=o.streakIntensity,D.uniforms.uBleedIntensity.value=o.bleedIntensity)),K&&(K.uniforms.uDofRadius.value=o.dof?1.5:0),l&&(l.setPixelRatio(o.pixelRatio),f.setPixelRatio(o.pixelRatio)))}function xe(w){w.matches&&Me("low")}function He(){document.hidden?p!==null&&(cancelAnimationFrame(p),p=null):p===null&&(oe=performance.now(),R())}let et=null;function je(){if(!l||!u||!f)return;const w=window.innerWidth,N=window.innerHeight;l.setSize(w,N),f.setSize(w,N),u.aspect=w/N,u.updateProjectionMatrix(),g&&g.material.uniforms.uResolution.value.set(w,N),I&&I.uniforms.uResolution.value.set(w,N),A&&A.uniforms.uResolution.value.set(w,N),K&&K.uniforms.uResolution.value.set(w,N),D&&D.uniforms.uResolution.value.set(w,N)}function V(){const w=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),N=new gn;N.setAttribute("position",new In(w,3));const H=new $t({vertexShader:sT,fragmentShader:aT,uniforms:{uTime:{value:0},uResolution:{value:new Ge(window.innerWidth,window.innerHeight)},uMouse:{value:new Ge(0,0)},uAccentColor:{value:new We(941055)},uDeepColor:{value:new We(2068)},uMidColor:{value:new We(661032)}},depthWrite:!1,depthTest:!0,side:ii});g=new qn(N,H),g.frustumCulled=!1,g.renderOrder=-10,c.add(g)}function U(){const w=hT(64),N=o.stars,H=[{count:N[0],sizeRange:[.5,1],depthRange:[-80,-50],parallax:.015},{count:N[1],sizeRange:[1,2],depthRange:[-50,-20],parallax:.04},{count:N[2],sizeRange:[2,3.5],depthRange:[-20,-5],parallax:.08}];b=[];for(const L of H){const $=new Float32Array(L.count*3),C=new Float32Array(L.count),fe=new Float32Array(L.count);for(let M=0;M<L.count;M++)$[M*3]=(Math.random()-.5)*200,$[M*3+1]=(Math.random()-.5)*120,$[M*3+2]=L.depthRange[0]+Math.random()*(L.depthRange[1]-L.depthRange[0]),C[M]=L.sizeRange[0]+Math.random()*(L.sizeRange[1]-L.sizeRange[0]),fe[M]=Math.random()*Math.PI*2;const se=new gn;se.setAttribute("position",new mn($,3)),se.setAttribute("aSize",new mn(C,1)),se.setAttribute("aPhase",new mn(fe,1));const re=new vm({map:w,size:1.5,sizeAttenuation:!0,transparent:!0,blending:yr,depthWrite:!1,color:13162744}),ce=new Xx(se,re);ce.userData.parallax=L.parallax,ce.renderOrder=-5,c.add(ce),b.push(ce)}}function Y(){const w=dT(64);m=new Ar,d=[];const N=[new We(941055),new We(13162744),new We(3864063)],H=[.6,.3,.1];for(let L=0;L<o.particles;L++){const $=new co({map:w,transparent:!0,blending:yr,depthWrite:!1,opacity:.15+Math.random()*.45}),C=Math.random();let fe=0;C>H[0]+H[1]?fe=2:C>H[0]&&(fe=1),$.color=N[fe];const se=new Gl($),re=(Math.random()-.5)*100,ce=(Math.random()-.5)*60,M=-5-Math.random()*40;se.position.set(re,ce,M);const _=.5+Math.random()*2;se.scale.set(_,_,1),d.push({sprite:se,baseSize:_,velocity:new q((Math.random()-.5)*.01,(Math.random()-.5)*.008,(Math.random()-.5)*.003),phaseOffset:Math.random()*Math.PI*2,pulseSpeed:.3+Math.random()*.4}),m.add(se)}m.renderOrder=-3,c.add(m)}function ie(){const w=pT(128);v=new Ar,y=[];const N=[new We(15266047),new We(13691135),new We(12644607),new We(15791359),new We(16771312)];for(let H=0;H<o.piercingParticles;H++){const L=new co({map:w,transparent:!0,blending:yr,depthWrite:!1,opacity:.7+Math.random()*.3}),$=Math.random();let C;$>.95?C=4:$>.75?C=2:$>.5?C=1:$>.25?C=3:C=0,L.color=N[C];const fe=new Gl(L),se=(Math.random()-.5)*90,re=(Math.random()-.5)*50,ce=-3-Math.random()*30;fe.position.set(se,re,ce);const M=1.5+Math.random()*3.5,_=2.2+Math.random()*1;fe.scale.set(M*_,M,1),y.push({sprite:fe,baseSize:M,aspectRatio:_,velocity:new q((Math.random()-.5)*.006,(Math.random()-.5)*.004,(Math.random()-.5)*.002),phaseOffset:Math.random()*Math.PI*2,pulseSpeed:.15+Math.random()*.25,pulseAmplitude:.4+Math.random()*.6,burstPhase:Math.random()*Math.PI*2,burstSpeed:.05+Math.random()*.1,burstActive:!1}),v.add(fe)}v.renderOrder=-2,c.add(v)}function ue(){const w=mT(128);S=new Ar,P=[];for(let N=0;N<o.diffractionStars;N++){const H=new co({map:w,transparent:!0,blending:yr,depthWrite:!1,opacity:.85+Math.random()*.15}),L=Math.random();L>.8?H.color=new We(16773344):L>.5?H.color=new We(15791359):H.color=new We(14215423);const $=new Gl(H),C=(Math.random()-.5)*80,fe=(Math.random()-.5)*45,se=-2-Math.random()*20;$.position.set(C,fe,se);const re=3+Math.random()*5,ce=2.5+Math.random()*1.5;$.scale.set(re*ce,re,1),P.push({sprite:$,baseSize:re,aspectRatio:ce,velocity:new q((Math.random()-.5)*.003,(Math.random()-.5)*.002,0),phaseOffset:Math.random()*Math.PI*2,pulseSpeed:.08+Math.random()*.12,pulseAmplitude:.3+Math.random()*.5,breathPhase:Math.random()*Math.PI*2,breathSpeed:.03+Math.random()*.05}),S.add($)}S.renderOrder=-1,c.add(S)}function _e(){const w=window.innerWidth,N=window.innerHeight;f=new nT(l),f.setPixelRatio(o.pixelRatio);const H=new iT(c,u);f.addPass(H),T=new Ms(new Ge(w,N),o.bloomStrength,o.bloomRadius,o.bloomThreshold),T.enabled=o.bloom,f.addPass(T);const L={uniforms:{tDiffuse:{value:null},uResolution:{value:new Ge(w,N)},uTime:{value:0},uFlareIntensity:{value:o.flareIntensity},uStreakIntensity:{value:o.streakIntensity},uBleedIntensity:{value:o.bleedIntensity}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:fT};D=new as(L),D.enabled=o.anamorphicFlare,f.addPass(D);const $={uniforms:{tDiffuse:{value:null},uResolution:{value:new Ge(w,N)},uTime:{value:0},uIntensity:{value:.15}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:oT};I=new as($),I.enabled=o.lightRays,f.addPass(I);const C={uniforms:{tDiffuse:{value:null},uTime:{value:0},uIntensity:{value:.04}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:lT};x=new as(C),x.enabled=o.grain,f.addPass(x);const fe={uniforms:{tDiffuse:{value:null},uResolution:{value:new Ge(w,N)},uIntensity:{value:.0015}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:cT};A=new as(fe),A.enabled=o.chromatic,f.addPass(A);const se={uniforms:{tDiffuse:{value:null},uResolution:{value:new Ge(w,N)},uVignetteIntensity:{value:.5},uDofRadius:{value:o.dof?1.5:0}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:uT};K=new as(se),f.addPass(K)}function R(){p=requestAnimationFrame(R);const w=performance.now(),N=w-oe;oe=w,ge(N);const H=h.getElapsedTime();if(Z&&(z.x=.3*Math.sin(H*.05),z.y=.2*Math.cos(H*.037)),F.x+=(z.x-F.x)*.02,F.y+=(z.y-F.y)*.02,g){const L=g.material.uniforms;L.uTime.value=H,L.uMouse.value.set(F.x,F.y)}for(const L of b){const $=L.userData.parallax;L.position.x=F.x*$*10,L.position.y=F.y*$*10,L.material&&(L.material.opacity=.7+.3*Math.sin(H*.5))}for(const L of d){L.sprite.position.add(L.velocity),L.sprite.position.x>50&&(L.sprite.position.x=-50),L.sprite.position.x<-50&&(L.sprite.position.x=50),L.sprite.position.y>30&&(L.sprite.position.y=-30),L.sprite.position.y<-30&&(L.sprite.position.y=30);const $=1+.3*Math.sin(H*L.pulseSpeed+L.phaseOffset),C=L.baseSize*$;L.sprite.scale.set(C,C,1)}for(const L of y){L.sprite.position.add(L.velocity),L.sprite.position.x>45&&(L.sprite.position.x=-45),L.sprite.position.x<-45&&(L.sprite.position.x=45),L.sprite.position.y>25&&(L.sprite.position.y=-25),L.sprite.position.y<-25&&(L.sprite.position.y=25);const $=1+L.pulseAmplitude*Math.sin(H*L.pulseSpeed+L.phaseOffset),C=L.baseSize*$;L.sprite.scale.set(C*L.aspectRatio,C,1);const fe=.6+.4*Math.sin(H*L.pulseSpeed*.7+L.phaseOffset);L.sprite.material.opacity=fe;const se=Math.sin(H*L.burstSpeed+L.burstPhase);se>.98&&!L.burstActive?(L.burstActive=!0,L.sprite.scale.multiplyScalar(1.8)):se<.5&&L.burstActive&&(L.burstActive=!1)}for(const L of P){L.sprite.position.add(L.velocity),L.sprite.position.x>40&&(L.sprite.position.x=-40),L.sprite.position.x<-40&&(L.sprite.position.x=40),L.sprite.position.y>22&&(L.sprite.position.y=-22),L.sprite.position.y<-22&&(L.sprite.position.y=22);const $=1+L.pulseAmplitude*Math.sin(H*L.breathSpeed+L.breathPhase),C=1+.15*Math.sin(H*L.pulseSpeed+L.phaseOffset),fe=$*C,se=L.baseSize*fe;L.sprite.scale.set(se*L.aspectRatio,se,1);const re=.75+.25*Math.sin(H*L.breathSpeed*.8+L.breathPhase);L.sprite.material.opacity=re}m&&(m.position.x=F.x*.6,m.position.y=F.y*.6),v&&(v.position.x=F.x*.9,v.position.y=F.y*.9),S&&(S.position.x=F.x*1.2,S.position.y=F.y*1.2),D&&D.enabled&&(D.uniforms.uTime.value=H),I&&I.enabled&&(I.uniforms.uTime.value=H),x&&x.enabled&&(x.uniforms.uTime.value=H),f.render()}return Yn(()=>{const w=i.value;if(!w)return;Z="ontouchstart"in window||navigator.maxTouchPoints>0,l=new ZE({canvas:w,antialias:!1,alpha:!1,powerPreference:"high-performance"}),l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(o.pixelRatio),l.setClearColor(2068,1),l.autoClear=!1,l.toneMapping=Nu,l.toneMappingExposure=1.4,c=new Ux,u=new Cn(60,window.innerWidth/window.innerHeight,.1,200),u.position.z=5,h=new iS,V(),U(),Y(),ie(),ue(),_e(),Z?window.addEventListener("touchmove",X,{passive:!0}):window.addEventListener("mousemove",W),document.addEventListener("visibilitychange",He),window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",xe),et=new ResizeObserver(je),et.observe(document.body),window.addEventListener("resize",je),oe=performance.now(),R(),requestAnimationFrame(()=>{t("ready")})}),Ho(()=>{p!==null&&(cancelAnimationFrame(p),p=null),window.removeEventListener("mousemove",W),window.removeEventListener("touchmove",X),document.removeEventListener("visibilitychange",He),window.removeEventListener("resize",je),window.matchMedia("(prefers-reduced-motion: reduce)").removeEventListener("change",xe),et&&(et.disconnect(),et=null),l&&l.dispose(),f&&f.dispose(),c&&c.traverse(w=>{w.geometry&&w.geometry.dispose(),w.material&&(Array.isArray(w.material)?w.material.forEach(N=>N.dispose()):w.material.dispose())}),l=null,c=null,u=null,f=null,h=null,g=null,b=[],m=null,d=[],v=null,y=[],S=null,P=[]}),(w,N)=>(Pe(),Ne("canvas",{ref_key:"canvasRef",ref:i,id:"webgl-bg"},null,512))}},_T=rn(gT,[["__scopeId","data-v-e6659274"]]),vT={id:"app",class:"site-main"},xT={class:"site-footer"},ST={class:"wrap"},bT={__name:"App",setup(n){const e=Ue(!1);return(t,i)=>{const r=ha("router-view");return Pe(),Ne("div",vT,[nt(Fv,{visible:!e.value},null,8,["visible"]),nt(_T,{onReady:i[0]||(i[0]=s=>e.value=!0)}),nt(Uv),j("main",null,[nt(r)]),j("footer",xT,[j("div",ST,"© "+Tt(new Date().getFullYear())+" CyberCubed",1)])])}}},MT=rn(bT,[["__scopeId","data-v-03cf6e3e"]]);function qu(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ur=qu();function Pm(n){Ur=n}var br={exec:()=>null};function ns(n){let e=[];return t=>{let i=Math.max(0,Math.min(3,t-1)),r=e[i];return r||(r=n(i),e[i]=r),r}}function st(n,e=""){let t=typeof n=="string"?n:n.source,i={replace:(r,s)=>{let a=typeof s=="string"?s:s.source;return a=a.replace(en.caret,"$1"),t=t.replace(r,a),i},getRegex:()=>new RegExp(t,e)};return i}var yT=((n="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+n)}catch{return!1}})(),en={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:ns(n=>new RegExp(`^ {0,${n}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:ns(n=>new RegExp(`^ {0,${n}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:ns(n=>new RegExp(`^ {0,${n}}(?:\`\`\`|~~~)`)),headingBeginRegex:ns(n=>new RegExp(`^ {0,${n}}#`)),htmlBeginRegex:ns(n=>new RegExp(`^ {0,${n}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:ns(n=>new RegExp(`^ {0,${n}}>`))},ET=/^(?:[ \t]*(?:\n|$))+/,TT=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,AT=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,va=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,wT=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Yu=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Dm=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Im=st(Dm).replace(/bull/g,Yu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),CT=st(Dm).replace(/bull/g,Yu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ju=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,RT=/^[^\n]+/,Ku=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,PT=st(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ku).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),DT=st(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Yu).getRegex(),el="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Zu=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,IT=st("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Zu).replace("tag",el).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Lm=st(ju).replace("hr",va).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",el).getRegex(),LT=st(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Lm).getRegex(),Ju={blockquote:LT,code:TT,def:PT,fences:AT,heading:wT,hr:va,html:IT,lheading:Im,list:DT,newline:ET,paragraph:Lm,table:br,text:RT},hd=st("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",va).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",el).getRegex(),UT={...Ju,lheading:CT,table:hd,paragraph:st(ju).replace("hr",va).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",hd).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",el).getRegex()},NT={...Ju,html:st(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Zu).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:br,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:st(ju).replace("hr",va).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Im).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},FT=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,OT=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Um=/^( {2,}|\\)\n(?!\s*$)/,kT=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ws=/[\p{P}\p{S}]/u,tl=/[\s\p{P}\p{S}]/u,Qu=/[^\s\p{P}\p{S}]/u,BT=st(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,tl).getRegex(),Nm=/(?!~)[\p{P}\p{S}]/u,zT=/(?!~)[\s\p{P}\p{S}]/u,VT=/(?:[^\s\p{P}\p{S}]|~)/u,HT=st(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",yT?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Fm=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,GT=st(Fm,"u").replace(/punct/g,ws).getRegex(),WT=st(Fm,"u").replace(/punct/g,Nm).getRegex(),Om="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",XT=st(Om,"gu").replace(/notPunctSpace/g,Qu).replace(/punctSpace/g,tl).replace(/punct/g,ws).getRegex(),$T=st(Om,"gu").replace(/notPunctSpace/g,VT).replace(/punctSpace/g,zT).replace(/punct/g,Nm).getRegex(),qT=st("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Qu).replace(/punctSpace/g,tl).replace(/punct/g,ws).getRegex(),YT=st(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,ws).getRegex(),jT="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",KT=st(jT,"gu").replace(/notPunctSpace/g,Qu).replace(/punctSpace/g,tl).replace(/punct/g,ws).getRegex(),ZT=st(/\\(punct)/,"gu").replace(/punct/g,ws).getRegex(),JT=st(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),QT=st(Zu).replace("(?:-->|$)","-->").getRegex(),eA=st("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",QT).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ro=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,tA=st(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Ro).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),km=st(/^!?\[(label)\]\[(ref)\]/).replace("label",Ro).replace("ref",Ku).getRegex(),Bm=st(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ku).getRegex(),nA=st("reflink|nolink(?!\\()","g").replace("reflink",km).replace("nolink",Bm).getRegex(),dd=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,ef={_backpedal:br,anyPunctuation:ZT,autolink:JT,blockSkip:HT,br:Um,code:OT,del:br,delLDelim:br,delRDelim:br,emStrongLDelim:GT,emStrongRDelimAst:XT,emStrongRDelimUnd:qT,escape:FT,link:tA,nolink:Bm,punctuation:BT,reflink:km,reflinkSearch:nA,tag:eA,text:kT,url:br},iA={...ef,link:st(/^!?\[(label)\]\((.*?)\)/).replace("label",Ro).getRegex(),reflink:st(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ro).getRegex()},hu={...ef,emStrongRDelimAst:$T,emStrongLDelim:WT,delLDelim:YT,delRDelim:KT,url:st(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",dd).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:st(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",dd).getRegex()},rA={...hu,br:st(Um).replace("{2,}","*").getRegex(),text:st(hu.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ja={normal:Ju,gfm:UT,pedantic:NT},Vs={normal:ef,gfm:hu,breaks:rA,pedantic:iA},sA={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},pd=n=>sA[n];function Qn(n,e){if(e){if(en.escapeTest.test(n))return n.replace(en.escapeReplace,pd)}else if(en.escapeTestNoEncode.test(n))return n.replace(en.escapeReplaceNoEncode,pd);return n}function md(n){try{n=encodeURI(n).replace(en.percentDecode,"%")}catch{return null}return n}function gd(n,e){let t=n.replace(en.findPipe,(s,a,o)=>{let l=!1,c=a;for(;--c>=0&&o[c]==="\\";)l=!l;return l?"|":" |"}),i=t.split(en.splitPipe),r=0;if(i[0].trim()||i.shift(),i.length>0&&!i.at(-1)?.trim()&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;r<i.length;r++)i[r]=i[r].trim().replace(en.slashPipe,"|");return i}function $i(n,e,t){let i=n.length;if(i===0)return"";let r=0;for(;r<i&&n.charAt(i-r-1)===e;)r++;return n.slice(0,i-r)}function _d(n){let e=n.split(`
`),t=e.length-1;for(;t>=0&&en.blankLine.test(e[t]);)t--;return e.length-t<=2?n:e.slice(0,t+1).join(`
`)}function aA(n,e){if(n.indexOf(e[1])===-1)return-1;let t=0;for(let i=0;i<n.length;i++)if(n[i]==="\\")i++;else if(n[i]===e[0])t++;else if(n[i]===e[1]&&(t--,t<0))return i;return t>0?-2:-1}function oA(n,e=0){let t=e,i="";for(let r of n)if(r==="	"){let s=4-t%4;i+=" ".repeat(s),t+=s}else i+=r,t++;return i}function vd(n,e,t,i,r){let s=e.href,a=e.title||null,o=n[1].replace(r.other.outputLinkReplace,"$1");i.state.inLink=!0;let l={type:n[0].charAt(0)==="!"?"image":"link",raw:t,href:s,title:a,text:o,tokens:i.inlineTokens(o)};return i.state.inLink=!1,l}function lA(n,e,t){let i=n.match(t.other.indentCodeCompensation);if(i===null)return e;let r=i[1];return e.split(`
`).map(s=>{let a=s.match(t.other.beginningSpace);if(a===null)return s;let[o]=a;return o.length>=r.length?s.slice(r.length):s}).join(`
`)}var Po=class{options;rules;lexer;constructor(n){this.options=n||Ur}space(n){let e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){let e=this.rules.block.code.exec(n);if(e){let t=this.options.pedantic?e[0]:_d(e[0]),i=t.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t,codeBlockStyle:"indented",text:i}}}fences(n){let e=this.rules.block.fences.exec(n);if(e){let t=e[0],i=lA(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:i}}}heading(n){let e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let i=$i(t,"#");(this.options.pedantic||!i||this.rules.other.endingSpaceChar.test(i))&&(t=i.trim())}return{type:"heading",raw:$i(e[0],`
`),depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){let e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:$i(e[0],`
`)}}blockquote(n){let e=this.rules.block.blockquote.exec(n);if(e){let t=$i(e[0],`
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
`);continue}}return{type:"blockquote",raw:i,tokens:s,text:r}}}list(n){let e=this.rules.block.list.exec(n);if(e){let t=e[1].trim(),i=t.length>1,r={type:"list",raw:"",ordered:i,start:i?+t.slice(0,-1):"",loose:!1,items:[]};t=i?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=i?t:"[*+-]");let s=this.rules.other.listItemRegex(t),a=!1;for(;n;){let l=!1,c="",u="";if(!(e=s.exec(n))||this.rules.block.hr.test(n))break;c=e[0],n=n.substring(c.length);let f=oA(e[2].split(`
`,1)[0],e[1].length),h=n.split(`
`,1)[0],p=!f.trim(),g=0;if(this.options.pedantic?(g=2,u=f.trimStart()):p?g=e[1].length+1:(g=f.search(this.rules.other.nonSpaceChar),g=g>4?1:g,u=f.slice(g),g+=e[1].length),p&&this.rules.other.blankLine.test(h)&&(c+=h+`
`,n=n.substring(h.length+1),l=!0),!l){let b=this.rules.other.nextBulletRegex(g),m=this.rules.other.hrRegex(g),d=this.rules.other.fencesBeginRegex(g),v=this.rules.other.headingBeginRegex(g),y=this.rules.other.htmlBeginRegex(g),S=this.rules.other.blockquoteBeginRegex(g);for(;n;){let P=n.split(`
`,1)[0],T;if(h=P,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),T=h):T=h.replace(this.rules.other.tabCharGlobal,"    "),d.test(h)||v.test(h)||y.test(h)||S.test(h)||b.test(h)||m.test(h))break;if(T.search(this.rules.other.nonSpaceChar)>=g||!h.trim())u+=`
`+T.slice(g);else{if(p||f.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||d.test(f)||v.test(f)||m.test(f))break;u+=`
`+h}p=!h.trim(),c+=P+`
`,n=n.substring(P.length+1),f=T.slice(g)}}r.loose||(a?r.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(a=!0)),r.items.push({type:"list_item",raw:c,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),r.raw+=c}let o=r.items.at(-1);if(o)o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let l of r.items){this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]);let c=l.tokens[0];if(l.task&&(c?.type==="text"||c?.type==="paragraph")){l.text=l.text.replace(this.rules.other.listReplaceTask,""),c.raw=c.raw.replace(this.rules.other.listReplaceTask,""),c.text=c.text.replace(this.rules.other.listReplaceTask,"");for(let f=this.lexer.inlineQueue.length-1;f>=0;f--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[f].src)){this.lexer.inlineQueue[f].src=this.lexer.inlineQueue[f].src.replace(this.rules.other.listReplaceTask,"");break}let u=this.rules.other.listTaskCheckbox.exec(l.raw);if(u){let f={type:"checkbox",raw:u[0]+" ",checked:u[0]!=="[ ]"};l.checked=f.checked,r.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=f.raw+l.tokens[0].raw,l.tokens[0].text=f.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(f)):l.tokens.unshift({type:"paragraph",raw:f.raw,text:f.raw,tokens:[f]}):l.tokens.unshift(f)}}else l.task&&(l.task=!1);if(!r.loose){let u=l.tokens.filter(h=>h.type==="space"),f=u.length>0&&u.some(h=>this.rules.other.anyLine.test(h.raw));r.loose=f}}if(r.loose)for(let l of r.items){l.loose=!0;for(let c of l.tokens)c.type==="text"&&(c.type="paragraph")}return r}}html(n){let e=this.rules.block.html.exec(n);if(e){let t=_d(e[0]);return{type:"html",block:!0,raw:t,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:t}}}def(n){let e=this.rules.block.def.exec(n);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:$i(e[0],`
`),href:i,title:r}}}table(n){let e=this.rules.block.table.exec(n);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=gd(e[1]),i=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:$i(e[0],`
`),header:[],align:[],rows:[]};if(t.length===i.length){for(let a of i)this.rules.other.tableAlignRight.test(a)?s.align.push("right"):this.rules.other.tableAlignCenter.test(a)?s.align.push("center"):this.rules.other.tableAlignLeft.test(a)?s.align.push("left"):s.align.push(null);for(let a=0;a<t.length;a++)s.header.push({text:t[a],tokens:this.lexer.inline(t[a]),header:!0,align:s.align[a]});for(let a of r)s.rows.push(gd(a,s.header.length).map((o,l)=>({text:o,tokens:this.lexer.inline(o),header:!1,align:s.align[l]})));return s}}lheading(n){let e=this.rules.block.lheading.exec(n);if(e){let t=e[1].trim();return{type:"heading",raw:$i(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:t,tokens:this.lexer.inline(t)}}}paragraph(n){let e=this.rules.block.paragraph.exec(n);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){let e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){let e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(n){let e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){let e=this.rules.inline.link.exec(n);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let s=$i(t.slice(0,-1),"\\");if((t.length-s.length)%2===0)return}else{let s=aA(e[2],"()");if(s===-2)return;if(s>-1){let a=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let i=e[2],r="";if(this.options.pedantic){let s=this.rules.other.pedanticHrefTitle.exec(i);s&&(i=s[1],r=s[3])}else r=e[3]?e[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?i=i.slice(1):i=i.slice(1,-1)),vd(e,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){let i=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[i.toLowerCase()];if(!r){let s=t[0].charAt(0);return{type:"text",raw:s,text:s}}return vd(t,r,t[0],this.lexer,this.rules)}}emStrong(n,e,t=""){let i=this.rules.inline.emStrongLDelim.exec(n);if(!(!i||!i[1]&&!i[2]&&!i[3]&&!i[4]||i[4]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(i[1]||i[3])||!t||this.rules.inline.punctuation.exec(t))){let r=[...i[0]].length-1,s,a,o=r,l=0,c=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,e=e.slice(-1*n.length+r);(i=c.exec(e))!==null;){if(s=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!s)continue;if(a=[...s].length,i[3]||i[4]){o+=a;continue}else if((i[5]||i[6])&&r%3&&!((r+a)%3)){l+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+l);let u=[...i[0]][0].length,f=n.slice(0,r+i.index+u+a);if(Math.min(r,a)%2){let p=f.slice(1,-1);return{type:"em",raw:f,text:p,tokens:this.lexer.inlineTokens(p)}}let h=f.slice(2,-2);return{type:"strong",raw:f,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(n){let e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(t),r=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return i&&r&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(n){let e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n,e,t=""){let i=this.rules.inline.delLDelim.exec(n);if(i&&(!i[1]||!t||this.rules.inline.punctuation.exec(t))){let r=[...i[0]].length-1,s,a,o=r,l=this.rules.inline.delRDelim;for(l.lastIndex=0,e=e.slice(-1*n.length+r);(i=l.exec(e))!==null;){if(s=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!s||(a=[...s].length,a!==r))continue;if(i[3]||i[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let c=[...i[0]][0].length,u=n.slice(0,r+i.index+c+a),f=u.slice(r,-r);return{type:"del",raw:u,text:f,tokens:this.lexer.inlineTokens(f)}}}}autolink(n){let e=this.rules.inline.autolink.exec(n);if(e){let t,i;return e[2]==="@"?(t=e[1],i="mailto:"+t):(t=e[1],i=t),{type:"link",raw:e[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}url(n){let e;if(e=this.rules.inline.url.exec(n)){let t,i;if(e[2]==="@")t=e[0],i="mailto:"+t;else{let r;do r=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(r!==e[0]);t=e[0],e[1]==="www."?i="http://"+e[0]:i=e[0]}return{type:"link",raw:e[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(n){let e=this.rules.inline.text.exec(n);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},kn=class du{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ur,this.options.tokenizer=this.options.tokenizer||new Po,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:en,block:Ja.normal,inline:Vs.normal};this.options.pedantic?(t.block=Ja.pedantic,t.inline=Vs.pedantic):this.options.gfm&&(t.block=Ja.gfm,this.options.breaks?t.inline=Vs.breaks:t.inline=Vs.gfm),this.tokenizer.rules=t}static get rules(){return{block:Ja,inline:Vs}}static lex(e,t){return new du(t).lex(e)}static lexInline(e,t){return new du(t).inlineTokens(e)}lex(e){e=e.replace(en.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let i=this.inlineQueue[t];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],i=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(en.tabCharGlobal,"    ").replace(en.spaceLine,""));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let s;if(this.options.extensions?.block?.some(o=>(s=o.call({lexer:this},e,t))?(e=e.substring(s.raw.length),t.push(s),!0):!1))continue;if(s=this.tokenizer.space(e)){e=e.substring(s.raw.length);let o=t.at(-1);s.raw.length===1&&o!==void 0?o.raw+=`
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
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(s);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let i=e,r=null;if(this.tokens.links){let c=Object.keys(this.tokens.links);if(c.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(i))!==null;)c.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(i))!==null;)i=i.slice(0,r.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let s;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(i))!==null;)s=r[2]?r[2].length:0,i=i.slice(0,r.index+s)+"["+"a".repeat(r[0].length-s-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);i=this.options.hooks?.emStrongMask?.call({lexer:this},i)??i;let a=!1,o="",l=1/0;for(;e;){if(e.length<l)l=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}a||(o=""),a=!1;let c;if(this.options.extensions?.inline?.some(f=>(c=f.call({lexer:this},e,t))?(e=e.substring(c.raw.length),t.push(c),!0):!1))continue;if(c=this.tokenizer.escape(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.tag(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.link(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(c.raw.length);let f=t.at(-1);c.type==="text"&&f?.type==="text"?(f.raw+=c.raw,f.text+=c.text):t.push(c);continue}if(c=this.tokenizer.emStrong(e,i,o)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.codespan(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.br(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.del(e,i,o)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.autolink(e)){e=e.substring(c.raw.length),t.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(e))){e=e.substring(c.raw.length),t.push(c);continue}let u=e;if(this.options.extensions?.startInline){let f=1/0,h=e.slice(1),p;this.options.extensions.startInline.forEach(g=>{p=g.call({lexer:this},h),typeof p=="number"&&p>=0&&(f=Math.min(f,p))}),f<1/0&&f>=0&&(u=e.substring(0,f+1))}if(c=this.tokenizer.inlineText(u)){e=e.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(o=c.raw.slice(-1)),a=!0;let f=t.at(-1);f?.type==="text"?(f.raw+=c.raw,f.text+=c.text):t.push(c);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t="Infinite loop on byte: "+e;if(this.options.silent)console.error(t);else throw new Error(t)}},Do=class{options;parser;constructor(n){this.options=n||Ur}space(n){return""}code({text:n,lang:e,escaped:t}){let i=(e||"").match(en.notSpaceStart)?.[0],r=n.replace(en.endingNewline,"")+`
`;return i?'<pre><code class="language-'+Qn(i)+'">'+(t?r:Qn(r,!0))+`</code></pre>
`:"<pre><code>"+(t?r:Qn(r,!0))+`</code></pre>
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
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${Qn(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:e,tokens:t}){let i=this.parser.parseInline(t),r=md(n);if(r===null)return i;n=r;let s='<a href="'+n+'"';return e&&(s+=' title="'+Qn(e)+'"'),s+=">"+i+"</a>",s}image({href:n,title:e,text:t,tokens:i}){i&&(t=this.parser.parseInline(i,this.parser.textRenderer));let r=md(n);if(r===null)return Qn(t);n=r;let s=`<img src="${n}" alt="${Qn(t)}"`;return e&&(s+=` title="${Qn(e)}"`),s+=">",s}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:Qn(n.text)}},tf=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}checkbox({raw:n}){return n}},Bn=class pu{options;renderer;textRenderer;constructor(e){this.options=e||Ur,this.options.renderer=this.options.renderer||new Do,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new tf}static parse(e,t){return new pu(t).parse(e)}static parseInline(e,t){return new pu(t).parseInline(e)}parse(e){this.renderer.parser=this;let t="";for(let i=0;i<e.length;i++){let r=e[i];if(this.options.extensions?.renderers?.[r.type]){let a=r,o=this.options.extensions.renderers[a.type].call({parser:this},a);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(a.type)){t+=o||"";continue}}let s=r;switch(s.type){case"space":{t+=this.renderer.space(s);break}case"hr":{t+=this.renderer.hr(s);break}case"heading":{t+=this.renderer.heading(s);break}case"code":{t+=this.renderer.code(s);break}case"table":{t+=this.renderer.table(s);break}case"blockquote":{t+=this.renderer.blockquote(s);break}case"list":{t+=this.renderer.list(s);break}case"checkbox":{t+=this.renderer.checkbox(s);break}case"html":{t+=this.renderer.html(s);break}case"def":{t+=this.renderer.def(s);break}case"paragraph":{t+=this.renderer.paragraph(s);break}case"text":{t+=this.renderer.text(s);break}default:{let a='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let i="";for(let r=0;r<e.length;r++){let s=e[r];if(this.options.extensions?.renderers?.[s.type]){let o=this.options.extensions.renderers[s.type].call({parser:this},s);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){i+=o||"";continue}}let a=s;switch(a.type){case"escape":{i+=t.text(a);break}case"html":{i+=t.html(a);break}case"link":{i+=t.link(a);break}case"image":{i+=t.image(a);break}case"checkbox":{i+=t.checkbox(a);break}case"strong":{i+=t.strong(a);break}case"em":{i+=t.em(a);break}case"codespan":{i+=t.codespan(a);break}case"br":{i+=t.br(a);break}case"del":{i+=t.del(a);break}case"text":{i+=t.text(a);break}default:{let o='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return i}},Xs=class{options;block;constructor(n){this.options=n||Ur}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(n=this.block){return n?kn.lex:kn.lexInline}provideParser(n=this.block){return n?Bn.parse:Bn.parseInline}},cA=class{defaults=qu();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Bn;Renderer=Do;TextRenderer=tf;Lexer=kn;Tokenizer=Po;Hooks=Xs;constructor(...n){this.use(...n)}walkTokens(n,e){let t=[];for(let i of n)switch(t=t.concat(e.call(this,i)),i.type){case"table":{let r=i;for(let s of r.header)t=t.concat(this.walkTokens(s.tokens,e));for(let s of r.rows)for(let a of s)t=t.concat(this.walkTokens(a.tokens,e));break}case"list":{let r=i;t=t.concat(this.walkTokens(r.items,e));break}default:{let r=i;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(s=>{let a=r[s].flat(1/0);t=t.concat(this.walkTokens(a,e))}):r.tokens&&(t=t.concat(this.walkTokens(r.tokens,e)))}}return t}use(...n){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{let i={...t};if(i.async=this.defaults.async||i.async||!1,t.extensions&&(t.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let s=e.renderers[r.name];s?e.renderers[r.name]=function(...a){let o=r.renderer.apply(this,a);return o===!1&&(o=s.apply(this,a)),o}:e.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let s=e[r.level];s?s.unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),i.extensions=e),t.renderer){let r=this.defaults.renderer||new Do(this.defaults);for(let s in t.renderer){if(!(s in r))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;let a=s,o=t.renderer[a],l=r[a];r[a]=(...c)=>{let u=o.apply(r,c);return u===!1&&(u=l.apply(r,c)),u||""}}i.renderer=r}if(t.tokenizer){let r=this.defaults.tokenizer||new Po(this.defaults);for(let s in t.tokenizer){if(!(s in r))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;let a=s,o=t.tokenizer[a],l=r[a];r[a]=(...c)=>{let u=o.apply(r,c);return u===!1&&(u=l.apply(r,c)),u}}i.tokenizer=r}if(t.hooks){let r=this.defaults.hooks||new Xs;for(let s in t.hooks){if(!(s in r))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;let a=s,o=t.hooks[a],l=r[a];Xs.passThroughHooks.has(s)?r[a]=c=>{if(this.defaults.async&&Xs.passThroughHooksRespectAsync.has(s))return(async()=>{let f=await o.call(r,c);return l.call(r,f)})();let u=o.call(r,c);return l.call(r,u)}:r[a]=(...c)=>{if(this.defaults.async)return(async()=>{let f=await o.apply(r,c);return f===!1&&(f=await l.apply(r,c)),f})();let u=o.apply(r,c);return u===!1&&(u=l.apply(r,c)),u}}i.hooks=r}if(t.walkTokens){let r=this.defaults.walkTokens,s=t.walkTokens;i.walkTokens=function(a){let o=[];return o.push(s.call(this,a)),r&&(o=o.concat(r.call(this,a))),o}}this.defaults={...this.defaults,...i}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return kn.lex(n,e??this.defaults)}parser(n,e){return Bn.parse(n,e??this.defaults)}parseMarkdown(n){return(e,t)=>{let i={...t},r={...this.defaults,...i},s=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&i.async===!1)return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(r.hooks&&(r.hooks.options=r,r.hooks.block=n),r.async)return(async()=>{let a=r.hooks?await r.hooks.preprocess(e):e,o=await(r.hooks?await r.hooks.provideLexer(n):n?kn.lex:kn.lexInline)(a,r),l=r.hooks?await r.hooks.processAllTokens(o):o;r.walkTokens&&await Promise.all(this.walkTokens(l,r.walkTokens));let c=await(r.hooks?await r.hooks.provideParser(n):n?Bn.parse:Bn.parseInline)(l,r);return r.hooks?await r.hooks.postprocess(c):c})().catch(s);try{r.hooks&&(e=r.hooks.preprocess(e));let a=(r.hooks?r.hooks.provideLexer(n):n?kn.lex:kn.lexInline)(e,r);r.hooks&&(a=r.hooks.processAllTokens(a)),r.walkTokens&&this.walkTokens(a,r.walkTokens);let o=(r.hooks?r.hooks.provideParser(n):n?Bn.parse:Bn.parseInline)(a,r);return r.hooks&&(o=r.hooks.postprocess(o)),o}catch(a){return s(a)}}}onError(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let i="<p>An error occurred:</p><pre>"+Qn(t.message+"",!0)+"</pre>";return e?Promise.resolve(i):i}if(e)return Promise.reject(t);throw t}}},Dr=new cA;function ut(n,e){return Dr.parse(n,e)}ut.options=ut.setOptions=function(n){return Dr.setOptions(n),ut.defaults=Dr.defaults,Pm(ut.defaults),ut};ut.getDefaults=qu;ut.defaults=Ur;ut.use=function(...n){return Dr.use(...n),ut.defaults=Dr.defaults,Pm(ut.defaults),ut};ut.walkTokens=function(n,e){return Dr.walkTokens(n,e)};ut.parseInline=Dr.parseInline;ut.Parser=Bn;ut.parser=Bn.parse;ut.Renderer=Do;ut.TextRenderer=tf;ut.Lexer=kn;ut.lexer=kn.lex;ut.Tokenizer=Po;ut.Hooks=Xs;ut.parse=ut;ut.options;ut.setOptions;ut.use;ut.walkTokens;ut.parseInline;Bn.parse;kn.lex;const uA={class:"switch-container"},fA={class:"switch"},hA=["checked"],dA=["onClick","onMouseenter"],pA=["onClick","onMouseenter"],mA={__name:"PageNav",props:{compactMode:{type:Boolean,default:!1}},emits:["update:compactMode","filterChange","campaignChange"],setup(n,{emit:e}){const t=Ue(!1),i=_c(),r=qp(),s=e,a={Blender:["All","Projects","Scenes","Characters","Assets","Renders"],Dnd:["All","Characters","Maps and Locations","Items","Lore","Misc"],Coding:["All","Releases","Updates","Tutorials","Misc"]},o=wt(()=>{const V=i.name;return V==="Coding"||V==="Blender"?"Projects":"Campaigns"}),l=Ue([]),c=Ue([]),u=Ue([]);async function f(){try{const V=await fetch(`${Gn}/campaigns/`);if(!V.ok)return;const U=await V.json();l.value=Array.isArray(U)?U:[]}catch(V){console.warn("Failed to load campaigns",V)}}async function h(){try{const V=await fetch(`${Gn}/coding-projects/`);if(!V.ok)return;const U=await V.json();c.value=Array.isArray(U)?U:[]}catch(V){console.warn("Failed to load coding projects",V)}}async function p(){try{const V=await fetch(`${Gn}/blender-projects/`);if(!V.ok)return;const U=await V.json();u.value=Array.isArray(U)?U:[]}catch(V){console.warn("Failed to load blender projects",V)}}const g=wt(()=>{const V=i.name;return["Blender","Dnd","Campaign","Coding"].includes(V)}),b=wt(()=>{switch(i.name){case"Blender":return"Type";case"Dnd":return"Tags";case"Campaign":return"Campaigns";case"Coding":return"Type";default:return"Filter"}}),m=wt(()=>i.name==="Campaign"?l.value.length>0?l.value:["Campaigns","Characters","Resources"]:a[i.name]||[]),d=wt(()=>i.name==="Dnd"||i.name==="Campaign"?["All",...l.value,"Standalone"]:i.name==="Coding"?["All",...c.value,"Standalone"]:i.name==="Blender"?["All",...u.value,"Standalone"]:[]),v=Ue(0),y=Ue(null),S=Ue({opacity:0});function P(V){return typeof V=="string"?V:V.title}function T(V=!0){if(!y.value)return;const U=Array.from(y.value.querySelectorAll(".nav-link")),Y=y.value.offsetTop,ie=v.value;if(ie==null||!U[ie]){S.value={opacity:0,top:"0px",height:"0px"};return}const ue=U[ie];if(ue.offsetHeight===0){S.value={opacity:0,top:"0px",height:"0px"};return}const _e=Y+ue.offsetTop-8,R=ue.offsetHeight+16;S.value={opacity:1,top:`${_e}px`,height:`${R}px`,transition:V?"top 320ms cubic-bezier(.2,.9,.2,1), height 260ms cubic-bezier(.2,.9,.2,1), opacity 180ms":"none"}}function I(V){v.value=V;const U=d.value[V];U==="All"?s("campaignChange","all"):U==="Standalone"?s("campaignChange","none"):typeof U=="object"&&U.id&&s("campaignChange",U.id),Wt(()=>T())}function x(V){if(!y.value)return;const U=Array.from(y.value.querySelectorAll(".nav-link")),Y=y.value.offsetTop,ie=U[V];if(!ie||ie.offsetHeight===0){he.value={opacity:0,top:"0px",height:"0px"};return}const ue=Y+ie.offsetTop-8,_e=ie.offsetHeight+16;he.value={opacity:1,top:`${ue}px`,height:`${_e}px`,transition:"top 320ms cubic-bezier(.2,.9,.2,1), height 260ms cubic-bezier(.2,.9,.2,1), opacity 180ms"}}function A(){he.value={opacity:0,top:"0px",height:"0px"}}function K(V){return typeof V=="string"?V:V.title}function D(V){const U=m.value[V];typeof U=="object"&&U.id&&r.push(`/dnd/${U.id}`),Me(V)}const F=Ue(0),z=Ue(null),Z=Ue(null),W=Ue(null),X=Ue(!1);function k(){X.value=!X.value,Wt(()=>ge(!1))}const oe=Ue({opacity:0}),he=Ue({opacity:0});function ge(V=!0){if(!Z.value)return;const U=Array.from(Z.value.querySelectorAll(".nav-link")),Y=Z.value.offsetTop,ie=(ue,_e)=>{if(ue==null||!U[ue]){_e.value={opacity:0,top:"0px",height:"0px"};return}const R=U[ue];if(R.offsetHeight===0){_e.value={opacity:0,top:"0px",height:"0px"};return}const w=Y+R.offsetTop-8,N=R.offsetHeight+16;_e.value={opacity:1,top:`${w}px`,height:`${N}px`,transition:V?"top 320ms cubic-bezier(.2,.9,.2,1), height 260ms cubic-bezier(.2,.9,.2,1), opacity 180ms":"none"}};ie(F.value,oe),ie(z.value,he),T(V)}function Me(V){F.value=V;const U=m.value[V];s("filterChange",typeof U=="string"?U:U.title||"All"),Wt(()=>ge())}function xe(V){z.value=V,ge()}function He(){z.value=null,ge()}function et(){let V=document.querySelector(".sidebar-close");V.classList.contains("sidebar-close")?V.classList.add("sidebar-open"):V.classList.remove("sidebar-open")}let je;return Yn(()=>{f(),h(),p(),Wt(()=>{Wt(()=>{ge(!1),T(!1),t.value=!0})}),je=new ResizeObserver(()=>{ge(),T()}),W.value&&je.observe(W.value),window.addEventListener("resize",()=>{ge(),T()});const V=_c();ci(V,(U,Y)=>{g.value&&et(),v.value=0,s("campaignChange","all"),Wt(()=>{ge(),T()})}),ci(d,()=>{Wt(()=>{ge(!1),T(!1)})})}),Lr(()=>{je&&W.value&&je.unobserve(W.value),window.removeEventListener("resize",ge)}),(V,U)=>(Pe(),Ne("div",{class:it(["container liquid-glass fade-in-expand",{visible:t.value}])},[j("div",{class:"nav-wrap sidebar-close",ref_key:"navWrap",ref:W},[j("div",{class:"nav-bubble selected",style:Jt(oe.value),"aria-hidden":"true"},null,4),j("div",{class:"nav-bubble hover liquid-glass",style:Jt(he.value),"aria-hidden":"true"},null,4),j("div",{class:"nav-bubble campaign-selected",style:Jt(S.value),"aria-hidden":"true"},null,4),j("div",{class:"filters-header",onClick:k},[U[2]||(U[2]=j("h1",null,"Filters",-1)),(Pe(),Ne("svg",{class:it(["expand-arrow",{expanded:X.value}]),xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[...U[1]||(U[1]=[j("polyline",{points:"9 18 15 12 9 6"},null,-1)])],2))]),j("div",{class:it(["filters-content",{expanded:X.value}])},[U[5]||(U[5]=Cp('<div class="search-container" data-v-ec556d37><input type="text" class="search-input" placeholder="Search..." data-v-ec556d37></div><div class="sort-container" data-v-ec556d37><span class="sort-label" data-v-ec556d37>Sort By</span><select class="sort-select" data-v-ec556d37><option value="newest" data-v-ec556d37>Newest</option><option value="oldest" data-v-ec556d37>Oldest</option><option value="az" data-v-ec556d37>A-Z</option><option value="za" data-v-ec556d37>Z-A</option></select></div>',2)),j("div",uA,[U[4]||(U[4]=j("span",{class:"switch-label"},"Compact Mode",-1)),j("label",fA,[j("input",{type:"checkbox",checked:n.compactMode,onChange:U[0]||(U[0]=Y=>s("update:compactMode",Y.target.checked))},null,40,hA),U[3]||(U[3]=j("span",{class:"slider round"},null,-1))])]),si(i).name==="Dnd"||si(i).name==="Campaign"||si(i).name==="Coding"||si(i).name==="Blender"?(Pe(),Ne(Et,{key:0},[j("h2",null,Tt(o.value),1),j("nav",{class:"nav",ref_key:"campaignNav",ref:y,onMouseleave:A},[(Pe(!0),Ne(Et,null,hi(d.value,(Y,ie)=>(Pe(),Ne("button",{key:"c-"+ie,class:it(["nav-link",{active:v.value===ie}]),onClick:ue=>I(ie),onMouseenter:ue=>x(ie)},Tt(P(Y)),43,dA))),128))],544)],64)):At("",!0),j("h2",null,Tt(b.value),1),j("nav",{class:"nav",ref_key:"nav",ref:Z,onMouseleave:He},[(Pe(!0),Ne(Et,null,hi(m.value,(Y,ie)=>(Pe(),Ne("button",{key:ie,class:it(["nav-link",{active:F.value===ie}]),onClick:ue=>D(ie),onMouseenter:ue=>xe(ie)},Tt(K(Y)),43,pA))),128))],544)],2)],512)],2))}},nf=rn(mA,[["__scopeId","data-v-ec556d37"]]),gA={key:0,class:"downloads","aria-labelledby":"downloads-title"},_A={class:"downloads__list",role:"list"},vA={class:"downloads__meta"},xA={class:"downloads__nameRow"},SA={class:"downloads__nameBlock"},bA={class:"downloads__name"},MA=["href","download"],yA={__name:"DownloadFilesSection",props:{files:{type:Array,required:!0}},setup(n){return(e,t)=>n.files&&n.files.length?(Pe(),Ne("section",gA,[j("ul",_A,[(Pe(!0),Ne(Et,null,hi(n.files,i=>(Pe(),Ne("li",{key:i.id??i.url,class:"downloads__item"},[j("div",vA,[j("div",xA,[j("div",SA,[j("div",bA,Tt(i.name),1)])])]),j("a",{class:"downloads__btn liquid-glass",href:i.url,download:i.name}," Download ",8,MA)]))),128))])])):At("",!0)}},rf=rn(yA,[["__scopeId","data-v-ac3918b7"]]),EA={class:"viewport"},TA=["src","alt"],AA={class:"controls"},wA={class:"dots"},CA=["onClick","aria-label"],RA={__name:"Carousel",props:{images:{type:Array,required:!0}},setup(n){const e=n,t=Ue(0);let i=null;function r(){i&&(clearInterval(i),i=null)}function s(){const h=e.images.length-1;t.value<h?t.value++:r()}function a(){t.value>0&&t.value--}function o(h){t.value=Math.min(Math.max(h,0),e.images.length-1)}let l=0,c=0;function u(h){h.touches.length===1&&(l=h.touches[0].clientX,c=h.touches[0].clientY)}function f(h){if(h.changedTouches.length===1){const p=h.changedTouches[0].clientX-l,g=h.changedTouches[0].clientY-c;Math.abs(p)>50&&Math.abs(p)>Math.abs(g)&&(p<0?s():a())}}return Yn(()=>{i=setInterval(s,3500)}),Ho(()=>r()),(h,p)=>n.images&&n.images.length?(Pe(),Ne("div",{key:0,class:"carousel",onTouchstart:u,onTouchend:f},[j("div",EA,[j("img",{src:n.images[t.value],alt:`slide-${t.value}`},null,8,TA)]),j("div",AA,[j("button",{onClick:a,class:"carousel-btn","aria-label":"Previous image"},"◀"),j("div",wA,[(Pe(!0),Ne(Et,null,hi(n.images,(g,b)=>(Pe(),Ne("button",{key:b,class:it([{active:b===t.value},"dot-btn"]),onClick:m=>o(b),"aria-label":`Go to slide ${b+1}`},null,10,CA))),128))]),j("button",{onClick:s,class:"carousel-btn","aria-label":"Next image"},"▶")])],32)):At("",!0)}},sf=rn(RA,[["__scopeId","data-v-fd400f35"]]),PA={class:"hero"},DA={class:"content-grid"},IA={key:0,class:"grid"},LA={key:1,class:"grid"},UA={class:"grid"},NA=["onClick"],FA={class:"grid"},OA=["src","alt"],kA={class:"wrapper"},BA={class:"compact-grid"},zA=["onClick"],VA=["src","alt"],HA=["innerHTML"],GA={key:0},WA={key:2},XA={__name:"Blender",setup(n){const e=Ue([]),t=Ue(!1),i=Ue(null),r=Ue("All"),s=Ue("all"),a=Ue(!1),o=Ue(!1),l=Ue(null),c=Ue(!1),u={All:null,Projects:"PROJECT",Scenes:"SCENE",Characters:"CHARACTER",Assets:"ASSET",Renders:"RENDER"},f=wt(()=>{let d=e.value;const v=u[r.value];return v&&(d=d.filter(y=>y.type===v)),s.value==="none"?d=d.filter(y=>!y.project):s.value!=="all"&&(d=d.filter(y=>y.project===s.value)),d}),h=wt(()=>!i.value||!i.value.content?"":ut(i.value.content));function p(d){r.value=d}function g(d){s.value=d}async function b(){t.value=!0;try{let d=await fetch(`${Gn}/blender-posts/`);if(d.ok||(d=await fetch(`${Gn}/blender-posts`)),d.ok){const v=await d.json();e.value=Array.isArray(v)?v:[]}else e.value=[]}catch(d){console.warn("Failed to load Blender posts",d),e.value=[]}finally{t.value=!1}}function m(d){o.value&&l.value&&!l.value.contains(d.target)&&(o.value=!1)}return Yn(()=>{b(),document.addEventListener("click",m)}),ci(t,d=>{d||Wt(()=>{c.value=!0})}),Lr(()=>{document.removeEventListener("click",m)}),(d,v)=>{const y=da("typewriter");return Pe(),Ne("div",PA,[yn((Pe(),Ne("h1",null,[...v[3]||(v[3]=[j("span",null,"Blender",-1),yt(" Projects & Renders",-1)])])),[[y]]),v[6]||(v[6]=j("p",null,"A showcase of Blender renders and small project notes.",-1)),j("div",DA,[nt(nf,{compactMode:a.value,"onUpdate:compactMode":v[0]||(v[0]=S=>a.value=S),onFilterChange:p,onCampaignChange:g},null,8,["compactMode"]),t.value?(Pe(),Ne("section",IA,[...v[4]||(v[4]=[j("p",null,"Loading Blender posts…",-1)])])):f.value.length===0?(Pe(),Ne("section",LA,[...v[5]||(v[5]=[j("p",null,"No Blender posts found.",-1)])])):At("",!0),yn(j("section",UA,[(Pe(!0),Ne(Et,null,hi(f.value,(S,P)=>(Pe(),Ne("article",{key:S.id,class:it(["card liquid-glass fade-in-expand",{visible:c.value}]),style:Jt({"--fade-delay":P*80+"ms"}),onClick:Nt(T=>{i.value=S,o.value=!0},["stop"])},[j("div",FA,[j("img",{src:S.thumbnail_url||"/blender_icon_512x512.png",alt:S.title,class:"thumb"},null,8,OA),j("div",kA,[j("h1",null,Tt(S.title),1)])]),j("p",null,Tt(S.content),1)],14,NA))),128))],512),[[ps,!a.value&&!t.value&&f.value.length>0]]),yn(j("section",BA,[(Pe(!0),Ne(Et,null,hi(f.value,(S,P)=>(Pe(),Ne("article",{key:S.id,class:it(["compact-card liquid-glass fade-in-expand",{visible:c.value}]),style:Jt({"--fade-delay":P*80+"ms"}),onClick:Nt(T=>{i.value=S,o.value=!0},["stop"])},[j("img",{src:S.thumbnail_url||"/blender_icon_512x512.png",alt:S.title,class:"thumb"},null,8,VA),j("div",null,[j("h1",null,Tt(S.title),1),j("p",null,Tt(S.content),1)])],14,zA))),128))],512),[[ps,a.value&&!t.value&&f.value.length>0]]),o.value&&i.value?(Pe(),Ne("div",{key:2,class:"cover",onClick:v[2]||(v[2]=Nt(S=>o.value=!1,["self"]))},[j("article",{ref_key:"coverCard",ref:l,class:"cover-card liquid-glass"},[j("button",{class:"cover-close",onClick:v[1]||(v[1]=S=>o.value=!1),"aria-label":"Close"},"✕"),j("div",null,[j("h1",null,Tt(i.value.title),1),j("div",{innerHTML:h.value,class:"markdown-body"},null,8,HA)]),i.value.image_urls&&i.value.image_urls.length?(Pe(),Ne("h2",GA,"Gallery")):At("",!0),i.value.image_urls&&i.value.image_urls.length?(Pe(),Rr(sf,{key:1,images:i.value.image_urls},null,8,["images"])):At("",!0),i.value.files&&i.value.files.length?(Pe(),Ne("h2",WA,"Downloads")):At("",!0),i.value.files&&i.value.files.length?(Pe(),Rr(rf,{key:3,files:i.value.files},null,8,["files"])):At("",!0)],512)])):At("",!0)])])}}},$A=rn(XA,[["__scopeId","data-v-fdfa47c0"]]),qA={class:"login-page"},YA={class:"card"},jA=["disabled"],KA={__name:"Login",setup(n){const e=Ue(""),t=Ue(""),i=Ue(!1),r=Ue(""),s=Ue(null),a=Ue(""),o=qp();async function l(){r.value="",i.value=!0;try{console.log("Login submit",{username:e.value}),s.value=null,a.value="";const c=await fetch(`${Gn}/auth/login/`,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e.value,password:t.value})});s.value=c.status;const u=await c.text().catch(()=>"");let f={};try{f=u?JSON.parse(u):{}}catch{f={text:u}}if(a.value=JSON.stringify(f,null,2),!c.ok){r.value=f.detail||f.error||f.non_field_errors&&f.non_field_errors.join(" ")||c.statusText||"Login failed";return}f.access&&localStorage.setItem("accessToken",f.access),f.refresh&&localStorage.setItem("refreshToken",f.refresh);const h=f.token||f.key||f.access||null;h&&localStorage.setItem("authToken",h);try{window.dispatchEvent(new Event("storage"))}catch{}o.push("/")}catch(c){console.error("Login error",c),r.value=c.message||"Network error",a.value=c.stack||String(c)}finally{i.value=!1}}return(c,u)=>(Pe(),Ne("div",qA,[j("div",YA,[u[4]||(u[4]=j("h2",null,"Sign in",-1)),u[5]||(u[5]=j("p",{class:"subtitle"},"Sign in with your username and password.",-1)),j("form",{onSubmit:Nt(l,["prevent"])},[j("label",null,[u[2]||(u[2]=yt(" Username ",-1)),yn(j("input",{type:"text","onUpdate:modelValue":u[0]||(u[0]=f=>e.value=f),placeholder:"your username"},null,512),[[Zf,e.value]])]),j("label",null,[u[3]||(u[3]=yt(" Password ",-1)),yn(j("input",{type:"password","onUpdate:modelValue":u[1]||(u[1]=f=>t.value=f),placeholder:"••••••••"},null,512),[[Zf,t.value]])]),j("button",{class:"login-btn",type:"submit",disabled:i.value},Tt(i.value?"Signing in…":"Login"),9,jA)],32)])]))}},ZA=rn(KA,[["__scopeId","data-v-c44c6076"]]),zm="/Profile_Picture_CyberCubed.jpg",JA="/blender_logo.svg",QA="/dungeons-dragons-5th-edition-seeklogo.svg",ew="/jellyfin-horizontal--color-on-dark.svg",tw="/jellyfin-logo.svg",nw="/minecraft-launcher.svg",iw="/Minecraft_Logo-en.svg",rw={class:"hero"},sw={class:"hero-intro"},aw={class:"card-grid"},ow={class:"home-card-action"},lw={class:"home-card-action"},cw={class:"home-card-action"},uw={class:"servers-section"},fw={class:"server-row-action"},hw=["title"],dw={__name:"Home",setup(n){const e=Ue(!1),t=Ue(!1);Yn(()=>{Wt(()=>{e.value=!0})});async function i(){try{await navigator.clipboard.writeText("mc.cybercubed.dk"),t.value=!0,setTimeout(()=>{t.value=!1},1500)}catch{const r=document.createElement("textarea");r.value="mc.cybercubed.dk",r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r),t.value=!0,setTimeout(()=>{t.value=!1},1500)}}return(r,s)=>{const a=ha("router-link"),o=da("typewriter");return Pe(),Ne("main",rw,[j("section",sw,[s[1]||(s[1]=j("img",{src:zm,alt:"Home Image",class:"home-img"},null,-1)),yn((Pe(),Ne("h1",null,[...s[0]||(s[0]=[yt("Welcome to Cyber",-1),j("span",null,"Cubed",-1)])])),[[o]]),s[2]||(s[2]=j("p",null,"My personal website to explore the technicalities of building one and to share projects.",-1))]),j("section",aw,[j("article",{class:it(["home-card liquid-glass fade-in-expand",{visible:e.value}])},[s[4]||(s[4]=j("h1",{class:"home-card-title",style:{"font-size":"3rem"}},[j("span",{textContent:"</>"}),yt(" Coding")],-1)),s[5]||(s[5]=j("p",null,"I have for many years had a fascination with computers and how they work. I have been coding since I was a teenager and have developed a passion for building software and games. here i will be sharing my experiences and self publishing some of my projects.",-1)),j("div",ow,[nt(a,{to:"/coding",class:"btn btn-primary liquid-glass"},{default:Gt(()=>[...s[3]||(s[3]=[yt("See More",-1)])]),_:1})])],2),j("article",{class:it(["home-card liquid-glass fade-in-expand",{visible:e.value}]),style:{"--fade-delay":"80ms"}},[s[7]||(s[7]=j("img",{src:JA,alt:"Blender",class:"home-card-img"},null,-1)),s[8]||(s[8]=j("p",null,"Having grown up with animation studios moving to 3D animation, i have always been fascinated by the possibilities of 3D art. I have been using Blender for a few years now and have developed a passion for creating 3D art. here i will be sharing my work and my knowledge with others.",-1)),j("div",lw,[nt(a,{to:"/blender",class:"btn btn-primary liquid-glass"},{default:Gt(()=>[...s[6]||(s[6]=[yt("See More",-1)])]),_:1})])],2),j("article",{class:it(["home-card liquid-glass fade-in-expand",{visible:e.value}]),style:{"--fade-delay":"160ms"}},[s[10]||(s[10]=j("img",{src:QA,alt:"D&D",class:"home-card-img-dnd"},null,-1)),s[11]||(s[11]=j("p",null,"A more recent hobby of mine is Dungeons & Dragons. I have been playing for a few years now and have developed a passion for creating characters and telling stories. here i will be sharing my work as a Dungeon Master as i have dared venture forth into the complicated nature of DM'ing.",-1)),j("div",cw,[nt(a,{to:"/dnd",class:"btn btn-primary liquid-glass"},{default:Gt(()=>[...s[9]||(s[9]=[yt("See More",-1)])]),_:1})])],2)]),j("section",uw,[s[16]||(s[16]=j("div",{class:"servers-header"},[j("h2",{class:"servers-title"},"Servers"),j("p",{class:"servers-subtitle"},"(whitelisted)")],-1)),j("article",{class:it(["server-row liquid-glass fade-in-expand",{visible:e.value}]),style:{"--fade-delay":"240ms"}},[...s[12]||(s[12]=[Cp('<img src="'+ew+'" alt="Jellyfin" class="server-row-img" data-v-65b0d7c8><div class="server-row-spacer" data-v-65b0d7c8></div><div class="server-row-action" data-v-65b0d7c8><a href="https://jellyfin.cybercubed.dk" target="_blank" rel="noopener noreferrer" class="external-link liquid-glass" data-v-65b0d7c8><img src="'+tw+'" alt="Jellyfin" class="external-link-logo" data-v-65b0d7c8> Visit Server </a></div>',3)])],2),j("article",{class:it(["server-row-minecraft liquid-glass fade-in-expand",{visible:e.value}]),style:{"--fade-delay":"240ms"}},[s[13]||(s[13]=j("img",{src:nw,alt:"Minecraft",class:"server-row-minecraft-icon"},null,-1)),s[14]||(s[14]=j("img",{src:iw,alt:"Minecraft",class:"server-row-minecraft-logo"},null,-1)),s[15]||(s[15]=j("div",{class:"server-row-spacer"},null,-1)),j("div",fw,[j("div",{class:it(["frame-glass copy-server-ip",{"copy-success":t.value}]),onClick:i,title:t.value?"Copied!":"Click to copy server IP"},Tt(t.value?"✓ Copied!":"mc.cybercubed.dk"),11,hw)])],2)])])}}},pw=rn(dw,[["__scopeId","data-v-65b0d7c8"]]),mw={class:"hero"},gw={class:"content-grid"},_w={key:0,class:"grid"},vw={key:1,class:"grid"},xw={class:"grid"},Sw=["onClick"],bw={class:"grid"},Mw=["src","alt"],yw={class:"wrapper"},Ew={class:"compact-grid"},Tw=["onClick"],Aw=["src","alt"],ww=["innerHTML"],Cw={key:0},Rw={key:2},Pw={__name:"Dnd",setup(n){const e=Ue([]),t=Ue(!1),i=Ue(null),r=Ue("All"),s=Ue("all"),a=Ue(!1),o=Ue(!1),l=Ue(null),c=Ue(!1),u=wt(()=>{let m=e.value;return r.value!=="All"&&(m=m.filter(d=>d.tags&&d.tags.some(v=>v.name===r.value))),s.value==="none"?m=m.filter(d=>!d.campaign):s.value!=="all"&&(m=m.filter(d=>d.campaign===s.value)),m}),f=wt(()=>!i.value||!i.value.content?"":ut(i.value.content));function h(m){r.value=m}function p(m){s.value=m}async function g(){t.value=!0;try{let m=await fetch(`${Gn}/dnd-posts/`);if(m.ok||(m=await fetch(`${Gn}/dnd-posts`)),m.ok){const d=await m.json();e.value=Array.isArray(d)?d:[]}else e.value=[]}catch(m){console.warn("Failed to load D&D posts",m),e.value=[]}finally{t.value=!1}}function b(m){o.value&&l.value&&!l.value.contains(m.target)&&(o.value=!1)}return Yn(()=>{g(),document.addEventListener("click",b)}),ci(t,m=>{m||Wt(()=>{c.value=!0})}),Lr(()=>{document.removeEventListener("click",b)}),(m,d)=>{const v=da("typewriter");return Pe(),Ne("div",mw,[yn((Pe(),Ne("h1",null,[...d[3]||(d[3]=[j("span",null,"D&D",-1),yt(" Campaigns & Resources",-1)])])),[[v]]),d[6]||(d[6]=j("p",null,"A collection of D&D characters, maps, lore, and more.",-1)),j("div",gw,[nt(nf,{compactMode:a.value,"onUpdate:compactMode":d[0]||(d[0]=y=>a.value=y),onFilterChange:h,onCampaignChange:p},null,8,["compactMode"]),t.value?(Pe(),Ne("section",_w,[...d[4]||(d[4]=[j("p",null,"Loading D&D posts…",-1)])])):u.value.length===0?(Pe(),Ne("section",vw,[...d[5]||(d[5]=[j("p",null,"No D&D posts found.",-1)])])):At("",!0),yn(j("section",xw,[(Pe(!0),Ne(Et,null,hi(u.value,(y,S)=>(Pe(),Ne("article",{key:y.id,class:it(["card liquid-glass fade-in-expand",{visible:c.value}]),style:Jt({"--fade-delay":S*80+"ms"}),onClick:Nt(P=>{i.value=y,o.value=!0},["stop"])},[j("div",bw,[j("img",{src:y.thumbnail_url||"/dungeons-dragons-5th-edition-seeklogo.svg",alt:y.title,class:"thumb"},null,8,Mw),j("div",yw,[j("h1",null,Tt(y.title),1)])]),j("p",null,Tt(y.content),1)],14,Sw))),128))],512),[[ps,!a.value&&!t.value&&u.value.length>0]]),yn(j("section",Ew,[(Pe(!0),Ne(Et,null,hi(u.value,(y,S)=>(Pe(),Ne("article",{key:y.id,class:it(["compact-card liquid-glass fade-in-expand",{visible:c.value}]),style:Jt({"--fade-delay":S*80+"ms"}),onClick:Nt(P=>{i.value=y,o.value=!0},["stop"])},[j("img",{src:y.thumbnail_url||"/dungeons-dragons-5th-edition-seeklogo.svg",alt:y.title,class:"thumb"},null,8,Aw),j("div",null,[j("h1",null,Tt(y.title),1),j("p",null,Tt(y.content),1)])],14,Tw))),128))],512),[[ps,a.value&&!t.value&&u.value.length>0]]),o.value&&i.value?(Pe(),Ne("div",{key:2,class:"cover",onClick:d[2]||(d[2]=Nt(y=>o.value=!1,["self"]))},[j("article",{ref_key:"coverCard",ref:l,class:"cover-card liquid-glass"},[j("button",{class:"cover-close",onClick:d[1]||(d[1]=y=>o.value=!1),"aria-label":"Close"},"✕"),j("div",null,[j("h1",null,Tt(i.value.title),1),j("div",{innerHTML:f.value,class:"markdown-body"},null,8,ww)]),i.value.image_urls&&i.value.image_urls.length?(Pe(),Ne("h2",Cw,"Gallery")):At("",!0),i.value.image_urls&&i.value.image_urls.length?(Pe(),Rr(sf,{key:1,images:i.value.image_urls},null,8,["images"])):At("",!0),i.value.files&&i.value.files.length?(Pe(),Ne("h2",Rw,"Downloads")):At("",!0),i.value.files&&i.value.files.length?(Pe(),Rr(rf,{key:3,files:i.value.files},null,8,["files"])):At("",!0)],512)])):At("",!0)])])}}},xd=rn(Pw,[["__scopeId","data-v-19a5e4fe"]]),Dw={class:"hero"},Iw={__name:"About",setup(n){const e=Ue(!1);return Yn(()=>{Wt(()=>{e.value=!0})}),(t,i)=>(Pe(),Ne("div",Dw,[j("div",{class:it(["wrap content liquid-glass fade-in-expand",{visible:e.value}])},[...i[0]||(i[0]=[j("div",{class:"about-grid"},[j("img",{src:zm,alt:"About image",class:"about-img"}),j("div",null,[j("h1",null,"About"),j("p",null," This is the personal website of Niklas J. Haunstrup aka. CyberCubed. It features various projects in 3D, coding, and more. and a Dungeons & Dragons campaign manager. "),j("p",{class:"muted"},"Built with Vue 3, Vite, and small components.")])],-1)])],2)]))}},Lw=rn(Iw,[["__scopeId","data-v-cec282b3"]]),Uw={},Nw={src:"/admin/",style:{width:"100%",height:"100vh"}};function Fw(n,e){return Pe(),Ne("iframe",Nw)}const Ow=rn(Uw,[["render",Fw]]),kw="/github-logo.svg",Bw={class:"hero"},zw={class:"content-grid"},Vw={key:0,class:"grid"},Hw={key:1,class:"grid"},Gw={class:"grid"},Ww=["onClick"],Xw={class:"grid"},$w=["src","alt"],qw={class:"wrapper"},Yw={class:"compact-grid"},jw=["onClick"],Kw=["src","alt"],Zw=["href"],Jw=["innerHTML"],Qw={key:0},e1={key:2},t1={__name:"Coding",setup(n){const e=Ue([]),t=Ue(!1),i=Ue(null),r=Ue("All"),s=Ue("all"),a=Ue(!1),o=Ue(!1),l=Ue(null),c=Ue(!1),u={All:null,Releases:"RELEASE",Updates:"UPDATE",Tutorials:"TUTORIAL",Misc:"MISC"},f=wt(()=>{let d=e.value;const v=u[r.value];return v&&(d=d.filter(y=>y.type===v)),s.value==="none"?d=d.filter(y=>!y.project):s.value!=="all"&&(d=d.filter(y=>y.project===s.value)),d}),h=wt(()=>!i.value||!i.value.content?"":ut(i.value.content));function p(d){r.value=d}function g(d){s.value=d}async function b(){t.value=!0;try{let d=await fetch(`${Gn}/coding-posts/`);if(d.ok||(d=await fetch(`${Gn}/coding-posts`)),d.ok){const v=await d.json();e.value=Array.isArray(v)?v:[]}else e.value=[]}catch(d){console.warn("Failed to load coding posts",d),e.value=[]}finally{t.value=!1}}function m(d){o.value&&l.value&&!l.value.contains(d.target)&&(o.value=!1)}return Yn(()=>{b(),document.addEventListener("click",m)}),ci(t,d=>{d||Wt(()=>{c.value=!0})}),Lr(()=>{document.removeEventListener("click",m)}),(d,v)=>{const y=da("typewriter");return Pe(),Ne("div",Bw,[yn((Pe(),Ne("h1",null,[...v[3]||(v[3]=[j("span",{class:"code-bracket",textContent:"</>"},null,-1),yt(" Coding Projects",-1)])])),[[y]]),v[7]||(v[7]=j("p",null,"A collection of coding projects, tutorials, and resources.",-1)),j("div",zw,[nt(nf,{compactMode:a.value,"onUpdate:compactMode":v[0]||(v[0]=S=>a.value=S),onFilterChange:p,onCampaignChange:g},null,8,["compactMode"]),t.value?(Pe(),Ne("section",Vw,[...v[4]||(v[4]=[j("p",null,"Loading coding posts…",-1)])])):f.value.length===0?(Pe(),Ne("section",Hw,[...v[5]||(v[5]=[j("p",null,"No coding posts found.",-1)])])):At("",!0),yn(j("section",Gw,[(Pe(!0),Ne(Et,null,hi(f.value,(S,P)=>(Pe(),Ne("article",{key:S.id,class:it(["card liquid-glass fade-in-expand",{visible:c.value}]),style:Jt({"--fade-delay":P*80+"ms"}),onClick:Nt(T=>{i.value=S,o.value=!0},["stop"])},[j("div",Xw,[j("img",{src:S.thumbnail_url||"/code-icon.svg",alt:S.title,class:"thumb"},null,8,$w),j("div",qw,[j("h1",null,Tt(S.title),1)])]),j("p",null,Tt(S.content),1)],14,Ww))),128))],512),[[ps,!a.value&&!t.value&&f.value.length>0]]),yn(j("section",Yw,[(Pe(!0),Ne(Et,null,hi(f.value,(S,P)=>(Pe(),Ne("article",{key:S.id,class:it(["compact-card liquid-glass fade-in-expand",{visible:c.value}]),style:Jt({"--fade-delay":P*80+"ms"}),onClick:Nt(T=>{i.value=S,o.value=!0},["stop"])},[j("img",{src:S.thumbnail_url||"/code-icon.svg",alt:S.title,class:"thumb"},null,8,Kw),j("div",null,[j("h1",null,Tt(S.title),1),j("p",null,Tt(S.content),1)])],14,jw))),128))],512),[[ps,a.value&&!t.value&&f.value.length>0]]),o.value&&i.value?(Pe(),Ne("div",{key:2,class:"cover",onClick:v[2]||(v[2]=Nt(S=>o.value=!1,["self"]))},[j("article",{ref_key:"coverCard",ref:l,class:"cover-card liquid-glass"},[j("button",{class:"cover-close",onClick:v[1]||(v[1]=S=>o.value=!1),"aria-label":"Close"},"✕"),j("div",null,[j("h1",null,Tt(i.value.title),1),i.value.project_detail&&i.value.project_detail.github_url?(Pe(),Ne("a",{key:0,href:i.value.project_detail.github_url,target:"_blank",rel:"noopener noreferrer",class:"external-link liquid-glass"},[...v[6]||(v[6]=[j("img",{src:kw,alt:"GitHub",class:"external-link-logo"},null,-1),yt(" View on GitHub ",-1)])],8,Zw)):At("",!0),j("div",{innerHTML:h.value,class:"markdown-body"},null,8,Jw)]),i.value.image_urls&&i.value.image_urls.length?(Pe(),Ne("h2",Qw,"Gallery")):At("",!0),i.value.image_urls&&i.value.image_urls.length?(Pe(),Rr(sf,{key:1,images:i.value.image_urls},null,8,["images"])):At("",!0),i.value.files&&i.value.files.length?(Pe(),Ne("h2",e1,"Downloads")):At("",!0),i.value.files&&i.value.files.length?(Pe(),Rr(rf,{key:3,files:i.value.files},null,8,["files"])):At("",!0)],512)])):At("",!0)])])}}},n1=rn(t1,[["__scopeId","data-v-72bf018f"]]),i1={},r1={class:"hero"},s1={class:"not-found liquid-glass"};function a1(n,e){const t=ha("router-link"),i=da("typewriter");return Pe(),Ne("div",r1,[j("div",s1,[yn((Pe(),Ne("h1",null,[...e[0]||(e[0]=[yt("404 - Page Not Found",-1)])])),[[i]]),e[2]||(e[2]=j("p",null,"The page you are looking for does not exist.",-1)),nt(t,{to:"/",class:"btn btn-primary liquid-glass"},{default:Gt(()=>[...e[1]||(e[1]=[yt("Go back home",-1)])]),_:1})])])}const o1=rn(i1,[["render",a1],["__scopeId","data-v-19a29a88"]]),l1=[{path:"/",name:"Home",component:pw},{path:"/blender",name:"Blender",component:$A},{path:"/dnd/:id",name:"Campaign",component:xd},{path:"/dnd",name:"Dnd",component:xd},{path:"/about",name:"About",component:Lw},{path:"/login",name:"Login",component:ZA},{path:"/admin-view",name:"Admin",component:Ow},{path:"/coding",name:"Coding",component:n1},{path:"/:pathMatch(.*)",name:"NotFound",component:o1}],c1=Tv({history:iv(),routes:l1});function u1(n,{speed:e=50}={}){let t=null,i=null;function r(l){const c=[];function u(f,h){if(f.nodeType===Node.TEXT_NODE)for(const p of f.textContent)c.push({type:"char",char:p,container:h});else if(f.nodeType===Node.ELEMENT_NODE){const p=f.cloneNode(!1);c.push({type:"open",element:p,container:h});for(const g of f.childNodes)u(g,p);c.push({type:"close",container:h})}}for(const f of l.childNodes)u(f,l);return c}function s(l){if(l.dataset.typewriterDone)return;l.dataset.typewriterDone="true",l.classList.remove("typewriter-ready"),l.style.visibility="";const c=l.innerHTML,u=r(l);l.innerHTML="";const f=document.createElement("span");f.className="typewriter-cursor",f.setAttribute("aria-hidden","true"),f.textContent="|",l.appendChild(f);const h=[{container:l}];let p=0;i=setInterval(()=>{if(p>=u.length){clearInterval(i),i=null,l.innerHTML=c;return}const g=u[p],b=h[h.length-1].container;switch(g.type){case"char":{const m=document.createTextNode(g.char);b.insertBefore(m,f.parentNode===b?f:null);break}case"open":{const m=g.element;b.insertBefore(m,f.parentNode===b?f:null),h.push({container:m});break}case"close":{h.pop();break}}p++},e)}function a(){const l=n.value;l&&(l.dataset.typewriterDone||(t=new IntersectionObserver(c=>{for(const u of c)u.isIntersecting&&(s(l),t.disconnect(),t=null)},{threshold:.1}),t.observe(l)))}function o(){t&&(t.disconnect(),t=null),i&&(clearInterval(i),i=null)}return{observe:a,cleanup:o}}const f1={mounted(n,e){const t=e.value?.speed??50;n.classList.add("typewriter-ready");const i={value:n},{observe:r,cleanup:s}=u1(i,{speed:t});n._typewriterCleanup=s,r()},unmounted(n){n._typewriterCleanup&&(n._typewriterCleanup(),delete n._typewriterCleanup)}};g_(MT).use(c1).directive("typewriter",f1).mount("#app");
