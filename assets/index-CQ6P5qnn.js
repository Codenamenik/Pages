(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function bu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const St={},os=[],ci=()=>{},wd=()=>!1,Fo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Mu=n=>n.startsWith("onUpdate:"),Ht=Object.assign,yu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Qm=Object.prototype.hasOwnProperty,ht=(n,e)=>Qm.call(n,e),We=Array.isArray,ls=n=>ha(n)==="[object Map]",Oo=n=>ha(n)==="[object Set]",bf=n=>ha(n)==="[object Date]",Ye=n=>typeof n=="function",Lt=n=>typeof n=="string",hi=n=>typeof n=="symbol",vt=n=>n!==null&&typeof n=="object",Ad=n=>(vt(n)||Ye(n))&&Ye(n.then)&&Ye(n.catch),Cd=Object.prototype.toString,ha=n=>Cd.call(n),eg=n=>ha(n).slice(8,-1),Rd=n=>ha(n)==="[object Object]",Eu=n=>Lt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,qs=bu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ko=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},tg=/-\w/g,Un=ko(n=>n.replace(tg,e=>e.slice(1).toUpperCase())),ng=/\B([A-Z])/g,Lr=ko(n=>n.replace(ng,"-$1").toLowerCase()),Bo=ko(n=>n.charAt(0).toUpperCase()+n.slice(1)),ul=ko(n=>n?`on${Bo(n)}`:""),er=(n,e)=>!Object.is(n,e),to=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Pd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},zo=n=>{const e=parseFloat(n);return isNaN(e)?n:e},ig=n=>{const e=Lt(n)?Number(n):NaN;return isNaN(e)?n:e};let Mf;const Vo=()=>Mf||(Mf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jt(n){if(We(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Lt(i)?og(i):Jt(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Lt(n)||vt(n))return n}const rg=/;(?![^(]*\))/g,sg=/:([^]+)/,ag=/\/\*[^]*?\*\//g;function og(n){const e={};return n.replace(ag,"").split(rg).forEach(t=>{if(t){const i=t.split(sg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function it(n){let e="";if(Lt(n))e=n;else if(We(n))for(let t=0;t<n.length;t++){const i=it(n[t]);i&&(e+=i+" ")}else if(vt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const lg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cg=bu(lg);function Dd(n){return!!n||n===""}function ug(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Ho(n[i],e[i]);return t}function Ho(n,e){if(n===e)return!0;let t=bf(n),i=bf(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=hi(n),i=hi(e),t||i)return n===e;if(t=We(n),i=We(e),t||i)return t&&i?ug(n,e):!1;if(t=vt(n),i=vt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!Ho(n[a],e[a]))return!1}}return String(n)===String(e)}function fg(n,e){return n.findIndex(t=>Ho(t,e))}const Id=n=>!!(n&&n.__v_isRef===!0),Tt=n=>Lt(n)?n:n==null?"":We(n)||vt(n)&&(n.toString===Cd||!Ye(n.toString))?Id(n)?Tt(n.value):JSON.stringify(n,Ld,2):String(n),Ld=(n,e)=>Id(e)?Ld(n,e.value):ls(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[fl(i,s)+" =>"]=r,t),{})}:Oo(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>fl(t))}:hi(e)?fl(e):vt(e)&&!We(e)&&!Rd(e)?String(e):e,fl=(n,e="")=>{var t;return hi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let dn;class hg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=dn,!e&&dn&&(this.index=(dn.scopes||(dn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=dn;try{return dn=this,e()}finally{dn=t}}}on(){++this._on===1&&(this.prevScope=dn,dn=this)}off(){this._on>0&&--this._on===0&&(dn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function dg(){return dn}let Mt;const hl=new WeakSet;class Ud{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,dn&&dn.active&&dn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,hl.has(this)&&(hl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yf(this),Od(this);const e=Mt,t=Hn;Mt=this,Hn=!0;try{return this.fn()}finally{kd(this),Mt=e,Hn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Au(e);this.deps=this.depsTail=void 0,yf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?hl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ac(this)&&this.run()}get dirty(){return ac(this)}}let Nd=0,Ys,js;function Fd(n,e=!1){if(n.flags|=8,e){n.next=js,js=n;return}n.next=Ys,Ys=n}function Tu(){Nd++}function wu(){if(--Nd>0)return;if(js){let e=js;for(js=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ys;){let e=Ys;for(Ys=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Od(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function kd(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Au(i),pg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function ac(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Bd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Bd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ta)||(n.globalVersion=ta,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ac(n))))return;n.flags|=2;const e=n.dep,t=Mt,i=Hn;Mt=n,Hn=!0;try{Od(n);const r=n.fn(n._value);(e.version===0||er(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Mt=t,Hn=i,kd(n),n.flags&=-3}}function Au(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Au(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function pg(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Hn=!0;const zd=[];function Di(){zd.push(Hn),Hn=!1}function Ii(){const n=zd.pop();Hn=n===void 0?!0:n}function yf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Mt;Mt=void 0;try{e()}finally{Mt=t}}}let ta=0;class mg{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Cu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Mt||!Hn||Mt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Mt)t=this.activeLink=new mg(Mt,this),Mt.deps?(t.prevDep=Mt.depsTail,Mt.depsTail.nextDep=t,Mt.depsTail=t):Mt.deps=Mt.depsTail=t,Vd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Mt.depsTail,t.nextDep=void 0,Mt.depsTail.nextDep=t,Mt.depsTail=t,Mt.deps===t&&(Mt.deps=i)}return t}trigger(e){this.version++,ta++,this.notify(e)}notify(e){Tu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{wu()}}}function Vd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Vd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const oc=new WeakMap,Cr=Symbol(""),lc=Symbol(""),na=Symbol("");function Kt(n,e,t){if(Hn&&Mt){let i=oc.get(n);i||oc.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Cu),r.map=i,r.key=t),r.track()}}function Ai(n,e,t,i,r,s){const a=oc.get(n);if(!a){ta++;return}const o=l=>{l&&l.trigger()};if(Tu(),e==="clear")a.forEach(o);else{const l=We(n),c=l&&Eu(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===na||!hi(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(na)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Cr)),ls(n)&&o(a.get(lc)));break;case"delete":l||(o(a.get(Cr)),ls(n)&&o(a.get(lc)));break;case"set":ls(n)&&o(a.get(Cr));break}}wu()}function kr(n){const e=ct(n);return e===n?e:(Kt(e,"iterate",na),In(n)?e:e.map(Xn))}function Go(n){return Kt(n=ct(n),"iterate",na),n}function Yi(n,e){return Li(n)?Rr(n)?ps(Xn(e)):ps(e):Xn(e)}const gg={__proto__:null,[Symbol.iterator](){return dl(this,Symbol.iterator,n=>Yi(this,n))},concat(...n){return kr(this).concat(...n.map(e=>We(e)?kr(e):e))},entries(){return dl(this,"entries",n=>(n[1]=Yi(this,n[1]),n))},every(n,e){return _i(this,"every",n,e,void 0,arguments)},filter(n,e){return _i(this,"filter",n,e,t=>t.map(i=>Yi(this,i)),arguments)},find(n,e){return _i(this,"find",n,e,t=>Yi(this,t),arguments)},findIndex(n,e){return _i(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return _i(this,"findLast",n,e,t=>Yi(this,t),arguments)},findLastIndex(n,e){return _i(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return _i(this,"forEach",n,e,void 0,arguments)},includes(...n){return pl(this,"includes",n)},indexOf(...n){return pl(this,"indexOf",n)},join(n){return kr(this).join(n)},lastIndexOf(...n){return pl(this,"lastIndexOf",n)},map(n,e){return _i(this,"map",n,e,void 0,arguments)},pop(){return Rs(this,"pop")},push(...n){return Rs(this,"push",n)},reduce(n,...e){return Ef(this,"reduce",n,e)},reduceRight(n,...e){return Ef(this,"reduceRight",n,e)},shift(){return Rs(this,"shift")},some(n,e){return _i(this,"some",n,e,void 0,arguments)},splice(...n){return Rs(this,"splice",n)},toReversed(){return kr(this).toReversed()},toSorted(n){return kr(this).toSorted(n)},toSpliced(...n){return kr(this).toSpliced(...n)},unshift(...n){return Rs(this,"unshift",n)},values(){return dl(this,"values",n=>Yi(this,n))}};function dl(n,e,t){const i=Go(n),r=i[e]();return i!==n&&!In(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const _g=Array.prototype;function _i(n,e,t,i,r,s){const a=Go(n),o=a!==n&&!In(n),l=a[e];if(l!==_g[e]){const f=l.apply(n,s);return o?Xn(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,Yi(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function Ef(n,e,t,i){const r=Go(n);let s=t;return r!==n&&(In(n)?t.length>3&&(s=function(a,o,l){return t.call(this,a,o,l,n)}):s=function(a,o,l){return t.call(this,a,Yi(n,o),l,n)}),r[e](s,...i)}function pl(n,e,t){const i=ct(n);Kt(i,"iterate",na);const r=i[e](...t);return(r===-1||r===!1)&&Du(t[0])?(t[0]=ct(t[0]),i[e](...t)):r}function Rs(n,e,t=[]){Di(),Tu();const i=ct(n)[e].apply(n,t);return wu(),Ii(),i}const vg=bu("__proto__,__v_isRef,__isVue"),Hd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(hi));function xg(n){hi(n)||(n=String(n));const e=ct(this);return Kt(e,"has",n),e.hasOwnProperty(n)}class Gd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Rg:qd:s?$d:Xd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=We(e);if(!r){let l;if(a&&(l=gg[t]))return l;if(t==="hasOwnProperty")return xg}const o=Reflect.get(e,t,tn(e)?e:i);if((hi(t)?Hd.has(t):vg(t))||(r||Kt(e,"get",t),s))return o;if(tn(o)){const l=a&&Eu(t)?o:o.value;return r&&vt(l)?uc(l):l}return vt(o)?r?uc(o):Wo(o):o}}class Wd extends Gd{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=We(e)&&Eu(t);if(!this._isShallow){const c=Li(s);if(!In(i)&&!Li(i)&&(s=ct(s),i=ct(i)),!a&&tn(s)&&!tn(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:ht(e,t),l=Reflect.set(e,t,i,tn(e)?e:r);return e===ct(r)&&(o?er(i,s)&&Ai(e,"set",t,i):Ai(e,"add",t,i)),l}deleteProperty(e,t){const i=ht(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Ai(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!hi(t)||!Hd.has(t))&&Kt(e,"has",t),i}ownKeys(e){return Kt(e,"iterate",We(e)?"length":Cr),Reflect.ownKeys(e)}}class Sg extends Gd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const bg=new Wd,Mg=new Sg,yg=new Wd(!0);const cc=n=>n,ya=n=>Reflect.getPrototypeOf(n);function Eg(n,e,t){return function(...i){const r=this.__v_raw,s=ct(r),a=ls(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?cc:e?ps:Xn;return!e&&Kt(s,"iterate",l?lc:Cr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Ea(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Tg(n,e){const t={get(r){const s=this.__v_raw,a=ct(s),o=ct(r);n||(er(r,o)&&Kt(a,"get",r),Kt(a,"get",o));const{has:l}=ya(a),c=e?cc:n?ps:Xn;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Kt(ct(r),"iterate",Cr),r.size},has(r){const s=this.__v_raw,a=ct(s),o=ct(r);return n||(er(r,o)&&Kt(a,"has",r),Kt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=ct(o),c=e?cc:n?ps:Xn;return!n&&Kt(l,"iterate",Cr),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return Ht(t,n?{add:Ea("add"),set:Ea("set"),delete:Ea("delete"),clear:Ea("clear")}:{add(r){!e&&!In(r)&&!Li(r)&&(r=ct(r));const s=ct(this);return ya(s).has.call(s,r)||(s.add(r),Ai(s,"add",r,r)),this},set(r,s){!e&&!In(s)&&!Li(s)&&(s=ct(s));const a=ct(this),{has:o,get:l}=ya(a);let c=o.call(a,r);c||(r=ct(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?er(s,u)&&Ai(a,"set",r,s):Ai(a,"add",r,s),this},delete(r){const s=ct(this),{has:a,get:o}=ya(s);let l=a.call(s,r);l||(r=ct(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Ai(s,"delete",r,void 0),c},clear(){const r=ct(this),s=r.size!==0,a=r.clear();return s&&Ai(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Eg(r,n,e)}),t}function Ru(n,e){const t=Tg(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ht(t,r)&&r in i?t:i,r,s)}const wg={get:Ru(!1,!1)},Ag={get:Ru(!1,!0)},Cg={get:Ru(!0,!1)};const Xd=new WeakMap,$d=new WeakMap,qd=new WeakMap,Rg=new WeakMap;function Pg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dg(n){return n.__v_skip||!Object.isExtensible(n)?0:Pg(eg(n))}function Wo(n){return Li(n)?n:Pu(n,!1,bg,wg,Xd)}function Yd(n){return Pu(n,!1,yg,Ag,$d)}function uc(n){return Pu(n,!0,Mg,Cg,qd)}function Pu(n,e,t,i,r){if(!vt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Dg(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function Rr(n){return Li(n)?Rr(n.__v_raw):!!(n&&n.__v_isReactive)}function Li(n){return!!(n&&n.__v_isReadonly)}function In(n){return!!(n&&n.__v_isShallow)}function Du(n){return n?!!n.__v_raw:!1}function ct(n){const e=n&&n.__v_raw;return e?ct(e):n}function Ig(n){return!ht(n,"__v_skip")&&Object.isExtensible(n)&&Pd(n,"__v_skip",!0),n}const Xn=n=>vt(n)?Wo(n):n,ps=n=>vt(n)?uc(n):n;function tn(n){return n?n.__v_isRef===!0:!1}function Pe(n){return jd(n,!1)}function Lg(n){return jd(n,!0)}function jd(n,e){return tn(n)?n:new Ug(n,e)}class Ug{constructor(e,t){this.dep=new Cu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ct(e),this._value=t?e:Xn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||In(e)||Li(e);e=i?e:ct(e),er(e,t)&&(this._rawValue=e,this._value=i?e:Xn(e),this.dep.trigger())}}function ai(n){return tn(n)?n.value:n}const Ng={get:(n,e,t)=>e==="__v_raw"?n:ai(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return tn(r)&&!tn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Kd(n){return Rr(n)?n:new Proxy(n,Ng)}class Fg{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Cu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ta-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Mt!==this)return Fd(this,!0),!0}get value(){const e=this.dep.track();return Bd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Og(n,e,t=!1){let i,r;return Ye(n)?i=n:(i=n.get,r=n.set),new Fg(i,r,t)}const Ta={},mo=new WeakMap;let gr;function kg(n,e=!1,t=gr){if(t){let i=mo.get(t);i||mo.set(t,i=[]),i.push(n)}}function Bg(n,e,t=St){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=E=>r?E:In(E)||r===!1||r===0?Ci(E,1):Ci(E);let u,f,h,d,m=!1,b=!1;if(tn(n)?(f=()=>n.value,m=In(n)):Rr(n)?(f=()=>c(n),m=!0):We(n)?(b=!0,m=n.some(E=>Rr(E)||In(E)),f=()=>n.map(E=>{if(tn(E))return E.value;if(Rr(E))return c(E);if(Ye(E))return l?l(E,2):E()})):Ye(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Di();try{h()}finally{Ii()}}const E=gr;gr=u;try{return l?l(n,3,[d]):n(d)}finally{gr=E}}:f=ci,e&&r){const E=f,R=r===!0?1/0:r;f=()=>Ci(E(),R)}const g=dg(),p=()=>{u.stop(),g&&g.active&&yu(g.effects,u)};if(s&&e){const E=e;e=(...R)=>{E(...R),p()}}let M=b?new Array(n.length).fill(Ta):Ta;const A=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const R=u.run();if(r||m||(b?R.some((x,P)=>er(x,M[P])):er(R,M))){h&&h();const x=gr;gr=u;try{const P=[R,M===Ta?void 0:b&&M[0]===Ta?[]:M,d];M=R,l?l(e,3,P):e(...P)}finally{gr=x}}}else u.run()};return o&&o(A),u=new Ud(f),u.scheduler=a?()=>a(A,!1):A,d=E=>kg(E,!1,u),h=u.onStop=()=>{const E=mo.get(u);if(E){if(l)l(E,4);else for(const R of E)R();mo.delete(u)}},e?i?A(!0):M=u.run():a?a(A.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Ci(n,e=1/0,t){if(e<=0||!vt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,tn(n))Ci(n.value,e,t);else if(We(n))for(let i=0;i<n.length;i++)Ci(n[i],e,t);else if(Oo(n)||ls(n))n.forEach(i=>{Ci(i,e,t)});else if(Rd(n)){for(const i in n)Ci(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ci(n[i],e,t)}return n}function da(n,e,t,i){try{return i?n(...i):n()}catch(r){Xo(r,e,t)}}function $n(n,e,t,i){if(Ye(n)){const r=da(n,e,t,i);return r&&Ad(r)&&r.catch(s=>{Xo(s,e,t)}),r}if(We(n)){const r=[];for(let s=0;s<n.length;s++)r.push($n(n[s],e,t,i));return r}}function Xo(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||St;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){Di(),da(s,null,10,[n,l,c]),Ii();return}}zg(n,t,r,i,a)}function zg(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const cn=[];let ti=-1;const cs=[];let ji=null,rs=0;const Zd=Promise.resolve();let go=null;function Vt(n){const e=go||Zd;return n?e.then(this?n.bind(this):n):e}function Vg(n){let e=ti+1,t=cn.length;for(;e<t;){const i=e+t>>>1,r=cn[i],s=ia(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Iu(n){if(!(n.flags&1)){const e=ia(n),t=cn[cn.length-1];!t||!(n.flags&2)&&e>=ia(t)?cn.push(n):cn.splice(Vg(e),0,n),n.flags|=1,Jd()}}function Jd(){go||(go=Zd.then(ep))}function Hg(n){We(n)?cs.push(...n):ji&&n.id===-1?ji.splice(rs+1,0,n):n.flags&1||(cs.push(n),n.flags|=1),Jd()}function Tf(n,e,t=ti+1){for(;t<cn.length;t++){const i=cn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;cn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Qd(n){if(cs.length){const e=[...new Set(cs)].sort((t,i)=>ia(t)-ia(i));if(cs.length=0,ji){ji.push(...e);return}for(ji=e,rs=0;rs<ji.length;rs++){const t=ji[rs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ji=null,rs=0}}const ia=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ep(n){try{for(ti=0;ti<cn.length;ti++){const e=cn[ti];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),da(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ti<cn.length;ti++){const e=cn[ti];e&&(e.flags&=-2)}ti=-1,cn.length=0,Qd(),go=null,(cn.length||cs.length)&&ep()}}let Mn=null,tp=null;function _o(n){const e=Mn;return Mn=n,tp=n&&n.type.__scopeId||null,e}function Wt(n,e=Mn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&So(-1);const s=_o(e);let a;try{a=n(...r)}finally{_o(s),i._d&&So(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function fn(n,e){if(Mn===null)return n;const t=Zo(Mn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=St]=e[r];s&&(Ye(s)&&(s={mounted:s,updated:s}),s.deep&&Ci(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function ar(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Di(),$n(l,t,8,[n.el,o,n,e]),Ii())}}function no(n,e){if(Zt){let t=Zt.provides;const i=Zt.parent&&Zt.parent.provides;i===t&&(t=Zt.provides=Object.create(i)),t[n]=e}}function Gn(n,e,t=!1){const i=Up();if(i||us){let r=us?us._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ye(e)?e.call(i&&i.proxy):e}}const Gg=Symbol.for("v-scx"),Wg=()=>Gn(Gg);function Dn(n,e,t){return np(n,e,t)}function np(n,e,t=St){const{immediate:i,deep:r,flush:s,once:a}=t,o=Ht({},t),l=e&&i||!e&&s!=="post";let c;if(aa){if(s==="sync"){const d=Wg();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=ci,d.resume=ci,d.pause=ci,d}}const u=Zt;o.call=(d,m,b)=>$n(d,u,m,b);let f=!1;s==="post"?o.scheduler=d=>{bn(d,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(d,m)=>{m?d():Iu(d)}),o.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Bg(n,e,o);return aa&&(c?c.push(h):l&&h()),h}function Xg(n,e,t){const i=this.proxy,r=Lt(n)?n.includes(".")?ip(i,n):()=>i[n]:n.bind(i,i);let s;Ye(e)?s=e:(s=e.handler,t=e);const a=ga(this),o=np(r,s.bind(i),t);return a(),o}function ip(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const $g=Symbol("_vte"),rp=n=>n.__isTeleport,wi=Symbol("_leaveCb"),wa=Symbol("_enterCb");function qg(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return jn(()=>{n.isMounted=!0}),Yo(()=>{n.isUnmounting=!0}),n}const Tn=[Function,Array],sp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Tn,onEnter:Tn,onAfterEnter:Tn,onEnterCancelled:Tn,onBeforeLeave:Tn,onLeave:Tn,onAfterLeave:Tn,onLeaveCancelled:Tn,onBeforeAppear:Tn,onAppear:Tn,onAfterAppear:Tn,onAppearCancelled:Tn},ap=n=>{const e=n.subTree;return e.component?ap(e.component):e},Yg={name:"BaseTransition",props:sp,setup(n,{slots:e}){const t=Up(),i=qg();return()=>{const r=e.default&&cp(e.default(),!0);if(!r||!r.length)return;const s=op(r),a=ct(n),{mode:o}=a;if(i.isLeaving)return ml(s);const l=wf(s);if(!l)return ml(s);let c=fc(l,a,i,t,f=>c=f);l.type!==un&&ra(l,c);let u=t.subTree&&wf(t.subTree);if(u&&u.type!==un&&!vr(u,l)&&ap(t).type!==un){let f=fc(u,a,i,t);if(ra(u,f),o==="out-in"&&l.type!==un)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},ml(s);o==="in-out"&&l.type!==un?f.delayLeave=(h,d,m)=>{const b=lp(i,u);b[String(u.key)]=u,h[wi]=()=>{d(),h[wi]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{m(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function op(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==un){e=t;break}}return e}const jg=Yg;function lp(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function fc(n,e,t,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:m,onLeaveCancelled:b,onBeforeAppear:g,onAppear:p,onAfterAppear:M,onAppearCancelled:A}=e,E=String(n.key),R=lp(t,n),x=(S,W)=>{S&&$n(S,i,9,W)},P=(S,W)=>{const I=W[1];x(S,W),We(S)?S.every(N=>N.length<=1)&&I():S.length<=1&&I()},v={mode:a,persisted:o,beforeEnter(S){let W=l;if(!t.isMounted)if(s)W=g||l;else return;S[wi]&&S[wi](!0);const I=R[E];I&&vr(n,I)&&I.el[wi]&&I.el[wi](),x(W,[S])},enter(S){let W=c,I=u,N=f;if(!t.isMounted)if(s)W=p||c,I=M||u,N=A||f;else return;let z=!1;const ee=S[wa]=X=>{z||(z=!0,X?x(N,[S]):x(I,[S]),v.delayedLeave&&v.delayedLeave(),S[wa]=void 0)};W?P(W,[S,ee]):ee()},leave(S,W){const I=String(n.key);if(S[wa]&&S[wa](!0),t.isUnmounting)return W();x(h,[S]);let N=!1;const z=S[wi]=ee=>{N||(N=!0,W(),ee?x(b,[S]):x(m,[S]),S[wi]=void 0,R[I]===n&&delete R[I])};R[I]=n,d?P(d,[S,z]):z()},clone(S){const W=fc(S,e,t,i,r);return r&&r(W),W}};return v}function ml(n){if($o(n))return n=nr(n),n.children=null,n}function wf(n){if(!$o(n))return rp(n.type)&&n.children?op(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ye(t.default))return t.default()}}function ra(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ra(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function cp(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===Et?(a.patchFlag&128&&r++,i=i.concat(cp(a.children,e,o))):(e||a.type!==un)&&i.push(o!=null?nr(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function up(n,e){return Ye(n)?Ht({name:n.name},e,{setup:n}):n}function fp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const vo=new WeakMap;function Ks(n,e,t,i,r=!1){if(We(n)){n.forEach((m,b)=>Ks(m,e&&(We(e)?e[b]:e),t,i,r));return}if(Zs(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ks(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Zo(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===St?o.refs={}:o.refs,f=o.setupState,h=ct(f),d=f===St?wd:m=>ht(h,m);if(c!=null&&c!==l){if(Af(e),Lt(c))u[c]=null,d(c)&&(f[c]=null);else if(tn(c)){c.value=null;const m=e;m.k&&(u[m.k]=null)}}if(Ye(l))da(l,o,12,[a,u]);else{const m=Lt(l),b=tn(l);if(m||b){const g=()=>{if(n.f){const p=m?d(l)?f[l]:u[l]:l.value;if(r)We(p)&&yu(p,s);else if(We(p))p.includes(s)||p.push(s);else if(m)u[l]=[s],d(l)&&(f[l]=u[l]);else{const M=[s];l.value=M,n.k&&(u[n.k]=M)}}else m?(u[l]=a,d(l)&&(f[l]=a)):b&&(l.value=a,n.k&&(u[n.k]=a))};if(a){const p=()=>{g(),vo.delete(n)};p.id=-1,vo.set(n,p),bn(p,t)}else Af(n),g()}}}function Af(n){const e=vo.get(n);e&&(e.flags|=8,vo.delete(n))}Vo().requestIdleCallback;Vo().cancelIdleCallback;const Zs=n=>!!n.type.__asyncLoader,$o=n=>n.type.__isKeepAlive;function Kg(n,e){hp(n,"a",e)}function Zg(n,e){hp(n,"da",e)}function hp(n,e,t=Zt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(qo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)$o(r.parent.vnode)&&Jg(i,e,t,r),r=r.parent}}function Jg(n,e,t,i){const r=qo(e,n,i,!0);Ur(()=>{yu(i[e],r)},t)}function qo(n,e,t=Zt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Di();const o=ga(t),l=$n(e,t,n,a);return o(),Ii(),l});return i?r.unshift(s):r.push(s),s}}const Fi=n=>(e,t=Zt)=>{(!aa||n==="sp")&&qo(n,(...i)=>e(...i),t)},Qg=Fi("bm"),jn=Fi("m"),e0=Fi("bu"),t0=Fi("u"),Yo=Fi("bum"),Ur=Fi("um"),n0=Fi("sp"),i0=Fi("rtg"),r0=Fi("rtc");function s0(n,e=Zt){qo("ec",n,e)}const dp="components",a0="directives";function pa(n,e){return pp(dp,n,!0,e)||n}const o0=Symbol.for("v-ndc");function ma(n){return pp(a0,n)}function pp(n,e,t=!0,i=!1){const r=Mn||Zt;if(r){const s=r.type;if(n===dp){const o=X0(s,!1);if(o&&(o===e||o===Un(e)||o===Bo(Un(e))))return s}const a=Cf(r[n]||s[n],e)||Cf(r.appContext[n],e);return!a&&i?s:a}}function Cf(n,e){return n&&(n[e]||n[Un(e)]||n[Bo(Un(e))])}function di(n,e,t,i){let r;const s=t,a=We(n);if(a||Lt(n)){const o=a&&Rr(n);let l=!1,c=!1;o&&(l=!In(n),c=Li(n),n=Go(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?ps(Xn(n[u])):Xn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(vt(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const hc=n=>n?Np(n)?Zo(n):hc(n.parent):null,Js=Ht(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>hc(n.parent),$root:n=>hc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>gp(n),$forceUpdate:n=>n.f||(n.f=()=>{Iu(n.update)}),$nextTick:n=>n.n||(n.n=Vt.bind(n.proxy)),$watch:n=>Xg.bind(n)}),gl=(n,e)=>n!==St&&!n.__isScriptSetup&&ht(n,e),l0={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(gl(i,e))return a[e]=1,i[e];if(r!==St&&ht(r,e))return a[e]=2,r[e];if(ht(s,e))return a[e]=3,s[e];if(t!==St&&ht(t,e))return a[e]=4,t[e];dc&&(a[e]=0)}}const c=Js[e];let u,f;if(c)return e==="$attrs"&&Kt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==St&&ht(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,ht(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return gl(r,e)?(r[e]=t,!0):i!==St&&ht(i,e)?(i[e]=t,!0):ht(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==St&&o[0]!=="$"&&ht(n,o)||gl(e,o)||ht(s,o)||ht(i,o)||ht(Js,o)||ht(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ht(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Rf(n){return We(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let dc=!0;function c0(n){const e=gp(n),t=n.proxy,i=n.ctx;dc=!1,e.beforeCreate&&Pf(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:m,activated:b,deactivated:g,beforeDestroy:p,beforeUnmount:M,destroyed:A,unmounted:E,render:R,renderTracked:x,renderTriggered:P,errorCaptured:v,serverPrefetch:S,expose:W,inheritAttrs:I,components:N,directives:z,filters:ee}=e;if(c&&u0(c,i,null),a)for(const k in a){const oe=a[k];Ye(oe)&&(i[k]=oe.bind(t))}if(r){const k=r.call(t,t);vt(k)&&(n.data=Wo(k))}if(dc=!0,s)for(const k in s){const oe=s[k],he=Ye(oe)?oe.bind(t,t):Ye(oe.get)?oe.get.bind(t,t):ci,be=!Ye(oe)&&Ye(oe.set)?oe.set.bind(t):ci,Se=At({get:he,set:be});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>Se.value,set:me=>Se.value=me})}if(o)for(const k in o)mp(o[k],i,t,k);if(l){const k=Ye(l)?l.call(t):l;Reflect.ownKeys(k).forEach(oe=>{no(oe,k[oe])})}u&&Pf(u,n,"c");function $(k,oe){We(oe)?oe.forEach(he=>k(he.bind(t))):oe&&k(oe.bind(t))}if($(Qg,f),$(jn,h),$(e0,d),$(t0,m),$(Kg,b),$(Zg,g),$(s0,v),$(r0,x),$(i0,P),$(Yo,M),$(Ur,E),$(n0,S),We(W))if(W.length){const k=n.exposed||(n.exposed={});W.forEach(oe=>{Object.defineProperty(k,oe,{get:()=>t[oe],set:he=>t[oe]=he,enumerable:!0})})}else n.exposed||(n.exposed={});R&&n.render===ci&&(n.render=R),I!=null&&(n.inheritAttrs=I),N&&(n.components=N),z&&(n.directives=z),S&&fp(n)}function u0(n,e,t=ci){We(n)&&(n=pc(n));for(const i in n){const r=n[i];let s;vt(r)?"default"in r?s=Gn(r.from||i,r.default,!0):s=Gn(r.from||i):s=Gn(r),tn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Pf(n,e,t){$n(We(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function mp(n,e,t,i){let r=i.includes(".")?ip(t,i):()=>t[i];if(Lt(n)){const s=e[n];Ye(s)&&Dn(r,s)}else if(Ye(n))Dn(r,n.bind(t));else if(vt(n))if(We(n))n.forEach(s=>mp(s,e,t,i));else{const s=Ye(n.handler)?n.handler.bind(t):e[n.handler];Ye(s)&&Dn(r,s,n)}}function gp(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>xo(l,c,a,!0)),xo(l,e,a)),vt(e)&&s.set(e,l),l}function xo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&xo(n,s,t,!0),r&&r.forEach(a=>xo(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=f0[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const f0={data:Df,props:If,emits:If,methods:Gs,computed:Gs,beforeCreate:an,created:an,beforeMount:an,mounted:an,beforeUpdate:an,updated:an,beforeDestroy:an,beforeUnmount:an,destroyed:an,unmounted:an,activated:an,deactivated:an,errorCaptured:an,serverPrefetch:an,components:Gs,directives:Gs,watch:d0,provide:Df,inject:h0};function Df(n,e){return e?n?function(){return Ht(Ye(n)?n.call(this,this):n,Ye(e)?e.call(this,this):e)}:e:n}function h0(n,e){return Gs(pc(n),pc(e))}function pc(n){if(We(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function an(n,e){return n?[...new Set([].concat(n,e))]:e}function Gs(n,e){return n?Ht(Object.create(null),n,e):e}function If(n,e){return n?We(n)&&We(e)?[...new Set([...n,...e])]:Ht(Object.create(null),Rf(n),Rf(e??{})):e}function d0(n,e){if(!n)return e;if(!e)return n;const t=Ht(Object.create(null),n);for(const i in e)t[i]=an(n[i],e[i]);return t}function _p(){return{app:null,config:{isNativeTag:wd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let p0=0;function m0(n,e){return function(i,r=null){Ye(i)||(i=Ht({},i)),r!=null&&!vt(r)&&(r=null);const s=_p(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:p0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:q0,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&Ye(u.install)?(a.add(u),u.install(c,...f)):Ye(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||nt(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Zo(d.component)}},onUnmount(u){o.push(u)},unmount(){l&&($n(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=us;us=c;try{return u()}finally{us=f}}};return c}}let us=null;const g0=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Un(e)}Modifiers`]||n[`${Lr(e)}Modifiers`];function _0(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||St;let r=t;const s=e.startsWith("update:"),a=s&&g0(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>Lt(u)?u.trim():u)),a.number&&(r=t.map(zo)));let o,l=i[o=ul(e)]||i[o=ul(Un(e))];!l&&s&&(l=i[o=ul(Lr(e))]),l&&$n(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,$n(c,n,6,r)}}const v0=new WeakMap;function vp(n,e,t=!1){const i=t?v0:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Ye(n)){const l=c=>{const u=vp(c,e,!0);u&&(o=!0,Ht(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(vt(n)&&i.set(n,null),null):(We(s)?s.forEach(l=>a[l]=null):Ht(a,s),vt(n)&&i.set(n,a),a)}function jo(n,e){return!n||!Fo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ht(n,e[0].toLowerCase()+e.slice(1))||ht(n,Lr(e))||ht(n,e))}function Lf(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:m,inheritAttrs:b}=n,g=_o(n);let p,M;try{if(t.shapeFlag&4){const E=r||i,R=E;p=ni(c.call(R,E,u,f,d,h,m)),M=o}else{const E=e;p=ni(E.length>1?E(f,{attrs:o,slots:a,emit:l}):E(f,null)),M=e.props?o:x0(o)}}catch(E){Qs.length=0,Xo(E,n,1),p=nt(un)}let A=p;if(M&&b!==!1){const E=Object.keys(M),{shapeFlag:R}=A;E.length&&R&7&&(s&&E.some(Mu)&&(M=S0(M,s)),A=nr(A,M,!1,!0))}return t.dirs&&(A=nr(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&ra(A,t.transition),p=A,_o(g),p}const x0=n=>{let e;for(const t in n)(t==="class"||t==="style"||Fo(t))&&((e||(e={}))[t]=n[t]);return e},S0=(n,e)=>{const t={};for(const i in n)(!Mu(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function b0(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Uf(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!jo(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Uf(i,a,c):!0:!!a;return!1}function Uf(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!jo(t,s))return!0}return!1}function M0({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const xp={},Sp=()=>Object.create(xp),bp=n=>Object.getPrototypeOf(n)===xp;function y0(n,e,t,i=!1){const r={},s=Sp();n.propsDefaults=Object.create(null),Mp(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Yd(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function E0(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=ct(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(jo(n.emitsOptions,h))continue;const d=e[h];if(l)if(ht(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const m=Un(h);r[m]=mc(l,o,m,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{Mp(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!ht(e,f)&&((u=Lr(f))===f||!ht(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=mc(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!ht(e,f))&&(delete s[f],c=!0)}c&&Ai(n.attrs,"set","")}function Mp(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(qs(l))continue;const c=e[l];let u;r&&ht(r,u=Un(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:jo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=ct(t),c=o||St;for(let u=0;u<s.length;u++){const f=s[u];t[f]=mc(r,l,f,c[f],n,!ht(c,f))}}return a}function mc(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=ht(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ye(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=ga(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Lr(t))&&(i=!0))}return i}const T0=new WeakMap;function yp(n,e,t=!1){const i=t?T0:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Ye(n)){const u=f=>{l=!0;const[h,d]=yp(f,e,!0);Ht(a,h),d&&o.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return vt(n)&&i.set(n,os),os;if(We(s))for(let u=0;u<s.length;u++){const f=Un(s[u]);Nf(f)&&(a[f]=St)}else if(s)for(const u in s){const f=Un(u);if(Nf(f)){const h=s[u],d=a[f]=We(h)||Ye(h)?{type:h}:Ht({},h),m=d.type;let b=!1,g=!0;if(We(m))for(let p=0;p<m.length;++p){const M=m[p],A=Ye(M)&&M.name;if(A==="Boolean"){b=!0;break}else A==="String"&&(g=!1)}else b=Ye(m)&&m.name==="Boolean";d[0]=b,d[1]=g,(b||ht(d,"default"))&&o.push(f)}}const c=[a,o];return vt(n)&&i.set(n,c),c}function Nf(n){return n[0]!=="$"&&!qs(n)}const Lu=n=>n==="_"||n==="_ctx"||n==="$stable",Uu=n=>We(n)?n.map(ni):[ni(n)],w0=(n,e,t)=>{if(e._n)return e;const i=Wt((...r)=>Uu(e(...r)),t);return i._c=!1,i},Ep=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Lu(r))continue;const s=n[r];if(Ye(s))e[r]=w0(r,s,i);else if(s!=null){const a=Uu(s);e[r]=()=>a}}},Tp=(n,e)=>{const t=Uu(e);n.slots.default=()=>t},wp=(n,e,t)=>{for(const i in e)(t||!Lu(i))&&(n[i]=e[i])},A0=(n,e,t)=>{const i=n.slots=Sp();if(n.vnode.shapeFlag&32){const r=e._;r?(wp(i,e,t),t&&Pd(i,"_",r,!0)):Ep(e,i)}else e&&Tp(n,e)},C0=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=St;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:wp(r,e,t):(s=!e.$stable,Ep(e,r)),a=e}else e&&(Tp(n,e),a={default:1});if(s)for(const o in r)!Lu(o)&&a[o]==null&&delete r[o]},bn=L0;function R0(n){return P0(n)}function P0(n,e){const t=Vo();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=ci,insertStaticContent:m}=n,b=(D,w,U,H=null,L=null,j=null,C=void 0,fe=null,re=!!w.dynamicChildren)=>{if(D===w)return;D&&!vr(D,w)&&(H=B(D),me(D,L,j,!0),D=null),w.patchFlag===-2&&(re=!1,w.dynamicChildren=null);const{type:ie,ref:ue,shapeFlag:y}=w;switch(ie){case Ko:g(D,w,U,H);break;case un:p(D,w,U,H);break;case io:D==null&&M(w,U,H,C);break;case Et:N(D,w,U,H,L,j,C,fe,re);break;default:y&1?R(D,w,U,H,L,j,C,fe,re):y&6?z(D,w,U,H,L,j,C,fe,re):(y&64||y&128)&&ie.process(D,w,U,H,L,j,C,fe,re,ce)}ue!=null&&L?Ks(ue,D&&D.ref,j,w||D,!w):ue==null&&D&&D.ref!=null&&Ks(D.ref,null,j,D,!0)},g=(D,w,U,H)=>{if(D==null)i(w.el=o(w.children),U,H);else{const L=w.el=D.el;w.children!==D.children&&c(L,w.children)}},p=(D,w,U,H)=>{D==null?i(w.el=l(w.children||""),U,H):w.el=D.el},M=(D,w,U,H)=>{[D.el,D.anchor]=m(D.children,w,U,H,D.el,D.anchor)},A=({el:D,anchor:w},U,H)=>{let L;for(;D&&D!==w;)L=h(D),i(D,U,H),D=L;i(w,U,H)},E=({el:D,anchor:w})=>{let U;for(;D&&D!==w;)U=h(D),r(D),D=U;r(w)},R=(D,w,U,H,L,j,C,fe,re)=>{if(w.type==="svg"?C="svg":w.type==="math"&&(C="mathml"),D==null)x(w,U,H,L,j,C,fe,re);else{const ie=D.el&&D.el._isVueCE?D.el:null;try{ie&&ie._beginPatch(),S(D,w,L,j,C,fe,re)}finally{ie&&ie._endPatch()}}},x=(D,w,U,H,L,j,C,fe)=>{let re,ie;const{props:ue,shapeFlag:y,transition:_,dirs:F}=D;if(re=D.el=a(D.type,j,ue&&ue.is,ue),y&8?u(re,D.children):y&16&&v(D.children,re,null,H,L,_l(D,j),C,fe),F&&ar(D,null,H,"created"),P(re,D,D.scopeId,C,H),ue){for(const ae in ue)ae!=="value"&&!qs(ae)&&s(re,ae,null,ue[ae],j,H);"value"in ue&&s(re,"value",null,ue.value,j),(ie=ue.onVnodeBeforeMount)&&Zn(ie,H,D)}F&&ar(D,null,H,"beforeMount");const Z=D0(L,_);Z&&_.beforeEnter(re),i(re,w,U),((ie=ue&&ue.onVnodeMounted)||Z||F)&&bn(()=>{ie&&Zn(ie,H,D),Z&&_.enter(re),F&&ar(D,null,H,"mounted")},L)},P=(D,w,U,H,L)=>{if(U&&d(D,U),H)for(let j=0;j<H.length;j++)d(D,H[j]);if(L){let j=L.subTree;if(w===j||Pp(j.type)&&(j.ssContent===w||j.ssFallback===w)){const C=L.vnode;P(D,C,C.scopeId,C.slotScopeIds,L.parent)}}},v=(D,w,U,H,L,j,C,fe,re=0)=>{for(let ie=re;ie<D.length;ie++){const ue=D[ie]=fe?Ki(D[ie]):ni(D[ie]);b(null,ue,w,U,H,L,j,C,fe)}},S=(D,w,U,H,L,j,C)=>{const fe=w.el=D.el;let{patchFlag:re,dynamicChildren:ie,dirs:ue}=w;re|=D.patchFlag&16;const y=D.props||St,_=w.props||St;let F;if(U&&or(U,!1),(F=_.onVnodeBeforeUpdate)&&Zn(F,U,w,D),ue&&ar(w,D,U,"beforeUpdate"),U&&or(U,!0),(y.innerHTML&&_.innerHTML==null||y.textContent&&_.textContent==null)&&u(fe,""),ie?W(D.dynamicChildren,ie,fe,U,H,_l(w,L),j):C||oe(D,w,fe,null,U,H,_l(w,L),j,!1),re>0){if(re&16)I(fe,y,_,U,L);else if(re&2&&y.class!==_.class&&s(fe,"class",null,_.class,L),re&4&&s(fe,"style",y.style,_.style,L),re&8){const Z=w.dynamicProps;for(let ae=0;ae<Z.length;ae++){const J=Z[ae],ye=y[J],ge=_[J];(ge!==ye||J==="value")&&s(fe,J,ye,ge,L,U)}}re&1&&D.children!==w.children&&u(fe,w.children)}else!C&&ie==null&&I(fe,y,_,U,L);((F=_.onVnodeUpdated)||ue)&&bn(()=>{F&&Zn(F,U,w,D),ue&&ar(w,D,U,"updated")},H)},W=(D,w,U,H,L,j,C)=>{for(let fe=0;fe<w.length;fe++){const re=D[fe],ie=w[fe],ue=re.el&&(re.type===Et||!vr(re,ie)||re.shapeFlag&198)?f(re.el):U;b(re,ie,ue,null,H,L,j,C,!0)}},I=(D,w,U,H,L)=>{if(w!==U){if(w!==St)for(const j in w)!qs(j)&&!(j in U)&&s(D,j,w[j],null,L,H);for(const j in U){if(qs(j))continue;const C=U[j],fe=w[j];C!==fe&&j!=="value"&&s(D,j,fe,C,L,H)}"value"in U&&s(D,"value",w.value,U.value,L)}},N=(D,w,U,H,L,j,C,fe,re)=>{const ie=w.el=D?D.el:o(""),ue=w.anchor=D?D.anchor:o("");let{patchFlag:y,dynamicChildren:_,slotScopeIds:F}=w;F&&(fe=fe?fe.concat(F):F),D==null?(i(ie,U,H),i(ue,U,H),v(w.children||[],U,ue,L,j,C,fe,re)):y>0&&y&64&&_&&D.dynamicChildren&&D.dynamicChildren.length===_.length?(W(D.dynamicChildren,_,U,L,j,C,fe),(w.key!=null||L&&w===L.subTree)&&Ap(D,w,!0)):oe(D,w,U,ue,L,j,C,fe,re)},z=(D,w,U,H,L,j,C,fe,re)=>{w.slotScopeIds=fe,D==null?w.shapeFlag&512?L.ctx.activate(w,U,H,C,re):ee(w,U,H,L,j,C,re):X(D,w,re)},ee=(D,w,U,H,L,j,C)=>{const fe=D.component=z0(D,H,L);if($o(D)&&(fe.ctx.renderer=ce),V0(fe,!1,C),fe.asyncDep){if(L&&L.registerDep(fe,$,C),!D.el){const re=fe.subTree=nt(un);p(null,re,w,U),D.placeholder=re.el}}else $(fe,D,w,U,L,j,C)},X=(D,w,U)=>{const H=w.component=D.component;if(b0(D,w,U))if(H.asyncDep&&!H.asyncResolved){k(H,w,U);return}else H.next=w,H.update();else w.el=D.el,H.vnode=w},$=(D,w,U,H,L,j,C)=>{const fe=()=>{if(D.isMounted){let{next:y,bu:_,u:F,parent:Z,vnode:ae}=D;{const ke=Cp(D);if(ke){y&&(y.el=ae.el,k(D,y,C)),ke.asyncDep.then(()=>{D.isUnmounted||fe()});return}}let J=y,ye;or(D,!1),y?(y.el=ae.el,k(D,y,C)):y=ae,_&&to(_),(ye=y.props&&y.props.onVnodeBeforeUpdate)&&Zn(ye,Z,y,ae),or(D,!0);const ge=Lf(D),Le=D.subTree;D.subTree=ge,b(Le,ge,f(Le.el),B(Le),D,L,j),y.el=ge.el,J===null&&M0(D,ge.el),F&&bn(F,L),(ye=y.props&&y.props.onVnodeUpdated)&&bn(()=>Zn(ye,Z,y,ae),L)}else{let y;const{el:_,props:F}=w,{bm:Z,m:ae,parent:J,root:ye,type:ge}=D,Le=Zs(w);or(D,!1),Z&&to(Z),!Le&&(y=F&&F.onVnodeBeforeMount)&&Zn(y,J,w),or(D,!0);{ye.ce&&ye.ce._def.shadowRoot!==!1&&ye.ce._injectChildStyle(ge);const ke=D.subTree=Lf(D);b(null,ke,U,H,D,L,j),w.el=ke.el}if(ae&&bn(ae,L),!Le&&(y=F&&F.onVnodeMounted)){const ke=w;bn(()=>Zn(y,J,ke),L)}(w.shapeFlag&256||J&&Zs(J.vnode)&&J.vnode.shapeFlag&256)&&D.a&&bn(D.a,L),D.isMounted=!0,w=U=H=null}};D.scope.on();const re=D.effect=new Ud(fe);D.scope.off();const ie=D.update=re.run.bind(re),ue=D.job=re.runIfDirty.bind(re);ue.i=D,ue.id=D.uid,re.scheduler=()=>Iu(ue),or(D,!0),ie()},k=(D,w,U)=>{w.component=D;const H=D.vnode.props;D.vnode=w,D.next=null,E0(D,w.props,H,U),C0(D,w.children,U),Di(),Tf(D),Ii()},oe=(D,w,U,H,L,j,C,fe,re=!1)=>{const ie=D&&D.children,ue=D?D.shapeFlag:0,y=w.children,{patchFlag:_,shapeFlag:F}=w;if(_>0){if(_&128){be(ie,y,U,H,L,j,C,fe,re);return}else if(_&256){he(ie,y,U,H,L,j,C,fe,re);return}}F&8?(ue&16&&se(ie,L,j),y!==ie&&u(U,y)):ue&16?F&16?be(ie,y,U,H,L,j,C,fe,re):se(ie,L,j,!0):(ue&8&&u(U,""),F&16&&v(y,U,H,L,j,C,fe,re))},he=(D,w,U,H,L,j,C,fe,re)=>{D=D||os,w=w||os;const ie=D.length,ue=w.length,y=Math.min(ie,ue);let _;for(_=0;_<y;_++){const F=w[_]=re?Ki(w[_]):ni(w[_]);b(D[_],F,U,null,L,j,C,fe,re)}ie>ue?se(D,L,j,!0,!1,y):v(w,U,H,L,j,C,fe,re,y)},be=(D,w,U,H,L,j,C,fe,re)=>{let ie=0;const ue=w.length;let y=D.length-1,_=ue-1;for(;ie<=y&&ie<=_;){const F=D[ie],Z=w[ie]=re?Ki(w[ie]):ni(w[ie]);if(vr(F,Z))b(F,Z,U,null,L,j,C,fe,re);else break;ie++}for(;ie<=y&&ie<=_;){const F=D[y],Z=w[_]=re?Ki(w[_]):ni(w[_]);if(vr(F,Z))b(F,Z,U,null,L,j,C,fe,re);else break;y--,_--}if(ie>y){if(ie<=_){const F=_+1,Z=F<ue?w[F].el:H;for(;ie<=_;)b(null,w[ie]=re?Ki(w[ie]):ni(w[ie]),U,Z,L,j,C,fe,re),ie++}}else if(ie>_)for(;ie<=y;)me(D[ie],L,j,!0),ie++;else{const F=ie,Z=ie,ae=new Map;for(ie=Z;ie<=_;ie++){const Ee=w[ie]=re?Ki(w[ie]):ni(w[ie]);Ee.key!=null&&ae.set(Ee.key,ie)}let J,ye=0;const ge=_-Z+1;let Le=!1,ke=0;const pe=new Array(ge);for(ie=0;ie<ge;ie++)pe[ie]=0;for(ie=F;ie<=y;ie++){const Ee=D[ie];if(ye>=ge){me(Ee,L,j,!0);continue}let Ce;if(Ee.key!=null)Ce=ae.get(Ee.key);else for(J=Z;J<=_;J++)if(pe[J-Z]===0&&vr(Ee,w[J])){Ce=J;break}Ce===void 0?me(Ee,L,j,!0):(pe[Ce-Z]=ie+1,Ce>=ke?ke=Ce:Le=!0,b(Ee,w[Ce],U,null,L,j,C,fe,re),ye++)}const ve=Le?I0(pe):os;for(J=ve.length-1,ie=ge-1;ie>=0;ie--){const Ee=Z+ie,Ce=w[Ee],Re=w[Ee+1],je=Ee+1<ue?Re.el||Rp(Re):H;pe[ie]===0?b(null,Ce,U,je,L,j,C,fe,re):Le&&(J<0||ie!==ve[J]?Se(Ce,U,je,2):J--)}}},Se=(D,w,U,H,L=null)=>{const{el:j,type:C,transition:fe,children:re,shapeFlag:ie}=D;if(ie&6){Se(D.component.subTree,w,U,H);return}if(ie&128){D.suspense.move(w,U,H);return}if(ie&64){C.move(D,w,U,ce);return}if(C===Et){i(j,w,U);for(let y=0;y<re.length;y++)Se(re[y],w,U,H);i(D.anchor,w,U);return}if(C===io){A(D,w,U);return}if(H!==2&&ie&1&&fe)if(H===0)fe.beforeEnter(j),i(j,w,U),bn(()=>fe.enter(j),L);else{const{leave:y,delayLeave:_,afterLeave:F}=fe,Z=()=>{D.ctx.isUnmounted?r(j):i(j,w,U)},ae=()=>{j._isLeaving&&j[wi](!0),y(j,()=>{Z(),F&&F()})};_?_(j,Z,ae):ae()}else i(j,w,U)},me=(D,w,U,H=!1,L=!1)=>{const{type:j,props:C,ref:fe,children:re,dynamicChildren:ie,shapeFlag:ue,patchFlag:y,dirs:_,cacheIndex:F}=D;if(y===-2&&(L=!1),fe!=null&&(Di(),Ks(fe,null,U,D,!0),Ii()),F!=null&&(w.renderCache[F]=void 0),ue&256){w.ctx.deactivate(D);return}const Z=ue&1&&_,ae=!Zs(D);let J;if(ae&&(J=C&&C.onVnodeBeforeUnmount)&&Zn(J,w,D),ue&6)et(D.component,U,H);else{if(ue&128){D.suspense.unmount(U,H);return}Z&&ar(D,null,w,"beforeUnmount"),ue&64?D.type.remove(D,w,U,ce,H):ie&&!ie.hasOnce&&(j!==Et||y>0&&y&64)?se(ie,w,U,!1,!0):(j===Et&&y&384||!L&&ue&16)&&se(re,w,U),H&&He(D)}(ae&&(J=C&&C.onVnodeUnmounted)||Z)&&bn(()=>{J&&Zn(J,w,D),Z&&ar(D,null,w,"unmounted")},U)},He=D=>{const{type:w,el:U,anchor:H,transition:L}=D;if(w===Et){Qe(U,H);return}if(w===io){E(D);return}const j=()=>{r(U),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(D.shapeFlag&1&&L&&!L.persisted){const{leave:C,delayLeave:fe}=L,re=()=>C(U,j);fe?fe(D.el,j,re):re()}else j()},Qe=(D,w)=>{let U;for(;D!==w;)U=h(D),r(D),D=U;r(w)},et=(D,w,U)=>{const{bum:H,scope:L,job:j,subTree:C,um:fe,m:re,a:ie}=D;Ff(re),Ff(ie),H&&to(H),L.stop(),j&&(j.flags|=8,me(C,D,w,U)),fe&&bn(fe,w),bn(()=>{D.isUnmounted=!0},w)},se=(D,w,U,H=!1,L=!1,j=0)=>{for(let C=j;C<D.length;C++)me(D[C],w,U,H,L)},B=D=>{if(D.shapeFlag&6)return B(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const w=h(D.anchor||D.el),U=w&&w[$g];return U?h(U):w};let O=!1;const q=(D,w,U)=>{let H;D==null?w._vnode&&(me(w._vnode,null,null,!0),H=w._vnode.component):b(w._vnode||null,D,w,null,null,null,U),w._vnode=D,O||(O=!0,Tf(H),Qd(),O=!1)},ce={p:b,um:me,m:Se,r:He,mt:ee,mc:v,pc:oe,pbc:W,n:B,o:n};return{render:q,hydrate:void 0,createApp:m0(q)}}function _l({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function or({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function D0(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Ap(n,e,t=!1){const i=n.children,r=e.children;if(We(i)&&We(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Ki(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Ap(a,o)),o.type===Ko&&(o.patchFlag!==-1?o.el=a.el:o.__elIndex=s+(n.type===Et?1:0)),o.type===un&&!o.el&&(o.el=a.el)}}function I0(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Cp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Cp(e)}function Ff(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Rp(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Rp(e.subTree):null}const Pp=n=>n.__isSuspense;function L0(n,e){e&&e.pendingBranch?We(n)?e.effects.push(...n):e.effects.push(n):Hg(n)}const Et=Symbol.for("v-fgt"),Ko=Symbol.for("v-txt"),un=Symbol.for("v-cmt"),io=Symbol.for("v-stc"),Qs=[];let yn=null;function De(n=!1){Qs.push(yn=n?null:[])}function U0(){Qs.pop(),yn=Qs[Qs.length-1]||null}let sa=1;function So(n,e=!1){sa+=n,n<0&&yn&&e&&(yn.hasOnce=!0)}function Dp(n){return n.dynamicChildren=sa>0?yn||os:null,U0(),sa>0&&yn&&yn.push(n),n}function Ne(n,e,t,i,r,s){return Dp(Y(n,e,t,i,r,s,!0))}function Pr(n,e,t,i,r){return Dp(nt(n,e,t,i,r,!0))}function bo(n){return n?n.__v_isVNode===!0:!1}function vr(n,e){return n.type===e.type&&n.key===e.key}const Ip=({key:n})=>n??null,ro=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Lt(n)||tn(n)||Ye(n)?{i:Mn,r:n,k:e,f:!!t}:n:null);function Y(n,e=null,t=null,i=0,r=null,s=n===Et?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ip(e),ref:e&&ro(e),scopeId:tp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Mn};return o?(Nu(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Lt(t)?8:16),sa>0&&!a&&yn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&yn.push(l),l}const nt=N0;function N0(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===o0)&&(n=un),bo(n)){const o=nr(n,e,!0);return t&&Nu(o,t),sa>0&&!s&&yn&&(o.shapeFlag&6?yn[yn.indexOf(n)]=o:yn.push(o)),o.patchFlag=-2,o}if($0(n)&&(n=n.__vccOpts),e){e=F0(e);let{class:o,style:l}=e;o&&!Lt(o)&&(e.class=it(o)),vt(l)&&(Du(l)&&!We(l)&&(l=Ht({},l)),e.style=Jt(l))}const a=Lt(n)?1:Pp(n)?128:rp(n)?64:vt(n)?4:Ye(n)?2:0;return Y(n,e,t,i,r,a,s,!0)}function F0(n){return n?Du(n)||bp(n)?Ht({},n):n:null}function nr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?O0(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Ip(c),ref:e&&e.ref?t&&s?We(s)?s.concat(ro(e)):[s,ro(e)]:ro(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Et?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&nr(n.ssContent),ssFallback:n.ssFallback&&nr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&ra(u,l.clone(u)),u}function yt(n=" ",e=0){return nt(Ko,null,n,e)}function Lp(n,e){const t=nt(io,null,n);return t.staticCount=e,t}function wt(n="",e=!1){return e?(De(),Pr(un,null,n)):nt(un,null,n)}function ni(n){return n==null||typeof n=="boolean"?nt(un):We(n)?nt(Et,null,n.slice()):bo(n)?Ki(n):nt(Ko,null,String(n))}function Ki(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:nr(n)}function Nu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(We(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Nu(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!bp(e)?e._ctx=Mn:r===3&&Mn&&(Mn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ye(e)?(e={default:e,_ctx:Mn},t=32):(e=String(e),i&64?(t=16,e=[yt(e)]):t=8);n.children=e,n.shapeFlag|=t}function O0(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=it([e.class,i.class]));else if(r==="style")e.style=Jt([e.style,i.style]);else if(Fo(r)){const s=e[r],a=i[r];a&&s!==a&&!(We(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Zn(n,e,t,i=null){$n(n,e,7,[t,i])}const k0=_p();let B0=0;function z0(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||k0,s={uid:B0++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new hg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yp(i,r),emitsOptions:vp(i,r),emit:null,emitted:null,propsDefaults:St,inheritAttrs:i.inheritAttrs,ctx:St,data:St,props:St,attrs:St,slots:St,refs:St,setupState:St,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=_0.bind(null,s),n.ce&&n.ce(s),s}let Zt=null;const Up=()=>Zt||Mn;let Mo,gc;{const n=Vo(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Mo=e("__VUE_INSTANCE_SETTERS__",t=>Zt=t),gc=e("__VUE_SSR_SETTERS__",t=>aa=t)}const ga=n=>{const e=Zt;return Mo(n),n.scope.on(),()=>{n.scope.off(),Mo(e)}},Of=()=>{Zt&&Zt.scope.off(),Mo(null)};function Np(n){return n.vnode.shapeFlag&4}let aa=!1;function V0(n,e=!1,t=!1){e&&gc(e);const{props:i,children:r}=n.vnode,s=Np(n);y0(n,i,s,e),A0(n,r,t||e);const a=s?H0(n,e):void 0;return e&&gc(!1),a}function H0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,l0);const{setup:i}=t;if(i){Di();const r=n.setupContext=i.length>1?W0(n):null,s=ga(n),a=da(i,n,0,[n.props,r]),o=Ad(a);if(Ii(),s(),(o||n.sp)&&!Zs(n)&&fp(n),o){if(a.then(Of,Of),e)return a.then(l=>{kf(n,l)}).catch(l=>{Xo(l,n,0)});n.asyncDep=a}else kf(n,a)}else Fp(n)}function kf(n,e,t){Ye(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:vt(e)&&(n.setupState=Kd(e)),Fp(n)}function Fp(n,e,t){const i=n.type;n.render||(n.render=i.render||ci);{const r=ga(n);Di();try{c0(n)}finally{Ii(),r()}}}const G0={get(n,e){return Kt(n,"get",""),n[e]}};function W0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,G0),slots:n.slots,emit:n.emit,expose:e}}function Zo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Kd(Ig(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Js)return Js[t](n)},has(e,t){return t in e||t in Js}})):n.proxy}function X0(n,e=!0){return Ye(n)?n.displayName||n.name:n.name||e&&n.__name}function $0(n){return Ye(n)&&"__vccOpts"in n}const At=(n,e)=>Og(n,e,aa);function Fu(n,e,t){try{So(-1);const i=arguments.length;return i===2?vt(e)&&!We(e)?bo(e)?nt(n,null,[e]):nt(n,e):nt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&bo(t)&&(t=[t]),nt(n,e,t))}finally{So(1)}}const q0="3.5.26";let _c;const Bf=typeof window<"u"&&window.trustedTypes;if(Bf)try{_c=Bf.createPolicy("vue",{createHTML:n=>n})}catch{}const Op=_c?n=>_c.createHTML(n):n=>n,Y0="http://www.w3.org/2000/svg",j0="http://www.w3.org/1998/Math/MathML",Ti=typeof document<"u"?document:null,zf=Ti&&Ti.createElement("template"),K0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Ti.createElementNS(Y0,n):e==="mathml"?Ti.createElementNS(j0,n):t?Ti.createElement(n,{is:t}):Ti.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Ti.createTextNode(n),createComment:n=>Ti.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ti.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{zf.innerHTML=Op(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=zf.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Bi="transition",Ps="animation",oa=Symbol("_vtc"),kp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Z0=Ht({},sp,kp),J0=n=>(n.displayName="Transition",n.props=Z0,n),Q0=J0((n,{slots:e})=>Fu(jg,e_(n),e)),lr=(n,e=[])=>{We(n)?n.forEach(t=>t(...e)):n&&n(...e)},Vf=n=>n?We(n)?n.some(e=>e.length>1):n.length>1:!1;function e_(n){const e={};for(const N in n)N in kp||(e[N]=n[N]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,m=t_(r),b=m&&m[0],g=m&&m[1],{onBeforeEnter:p,onEnter:M,onEnterCancelled:A,onLeave:E,onLeaveCancelled:R,onBeforeAppear:x=p,onAppear:P=M,onAppearCancelled:v=A}=e,S=(N,z,ee,X)=>{N._enterCancelled=X,cr(N,z?u:o),cr(N,z?c:a),ee&&ee()},W=(N,z)=>{N._isLeaving=!1,cr(N,f),cr(N,d),cr(N,h),z&&z()},I=N=>(z,ee)=>{const X=N?P:M,$=()=>S(z,N,ee);lr(X,[z,$]),Hf(()=>{cr(z,N?l:s),vi(z,N?u:o),Vf(X)||Gf(z,i,b,$)})};return Ht(e,{onBeforeEnter(N){lr(p,[N]),vi(N,s),vi(N,a)},onBeforeAppear(N){lr(x,[N]),vi(N,l),vi(N,c)},onEnter:I(!1),onAppear:I(!0),onLeave(N,z){N._isLeaving=!0;const ee=()=>W(N,z);vi(N,f),N._enterCancelled?(vi(N,h),$f(N)):($f(N),vi(N,h)),Hf(()=>{N._isLeaving&&(cr(N,f),vi(N,d),Vf(E)||Gf(N,i,g,ee))}),lr(E,[N,ee])},onEnterCancelled(N){S(N,!1,void 0,!0),lr(A,[N])},onAppearCancelled(N){S(N,!0,void 0,!0),lr(v,[N])},onLeaveCancelled(N){W(N),lr(R,[N])}})}function t_(n){if(n==null)return null;if(vt(n))return[vl(n.enter),vl(n.leave)];{const e=vl(n);return[e,e]}}function vl(n){return ig(n)}function vi(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[oa]||(n[oa]=new Set)).add(e)}function cr(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[oa];t&&(t.delete(e),t.size||(n[oa]=void 0))}function Hf(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let n_=0;function Gf(n,e,t,i){const r=n._endId=++n_,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:a,timeout:o,propCount:l}=i_(n,e);if(!a)return i();const c=a+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=d=>{d.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},o+1),n.addEventListener(c,h)}function i_(n,e){const t=window.getComputedStyle(n),i=m=>(t[m]||"").split(", "),r=i(`${Bi}Delay`),s=i(`${Bi}Duration`),a=Wf(r,s),o=i(`${Ps}Delay`),l=i(`${Ps}Duration`),c=Wf(o,l);let u=null,f=0,h=0;e===Bi?a>0&&(u=Bi,f=a,h=s.length):e===Ps?c>0&&(u=Ps,f=c,h=l.length):(f=Math.max(a,c),u=f>0?a>c?Bi:Ps:null,h=u?u===Bi?s.length:l.length:0);const d=u===Bi&&/\b(?:transform|all)(?:,|$)/.test(i(`${Bi}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function Wf(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Xf(t)+Xf(n[i])))}function Xf(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function $f(n){return(n?n.ownerDocument:document).body.offsetHeight}function r_(n,e,t){const i=n[oa];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const yo=Symbol("_vod"),Bp=Symbol("_vsh"),ms={name:"show",beforeMount(n,{value:e},{transition:t}){n[yo]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Ds(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Ds(n,!0),i.enter(n)):i.leave(n,()=>{Ds(n,!1)}):Ds(n,e))},beforeUnmount(n,{value:e}){Ds(n,e)}};function Ds(n,e){n.style.display=e?n[yo]:"none",n[Bp]=!e}const s_=Symbol(""),a_=/(?:^|;)\s*display\s*:/;function o_(n,e,t){const i=n.style,r=Lt(t);let s=!1;if(t&&!r){if(e)if(Lt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&so(i,o,"")}else for(const a in e)t[a]==null&&so(i,a,"");for(const a in t)a==="display"&&(s=!0),so(i,a,t[a])}else if(r){if(e!==t){const a=i[s_];a&&(t+=";"+a),i.cssText=t,s=a_.test(t)}}else e&&n.removeAttribute("style");yo in n&&(n[yo]=s?i.display:"",n[Bp]&&(i.display="none"))}const qf=/\s*!important$/;function so(n,e,t){if(We(t))t.forEach(i=>so(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=l_(n,e);qf.test(t)?n.setProperty(Lr(i),t.replace(qf,""),"important"):n[i]=t}}const Yf=["Webkit","Moz","ms"],xl={};function l_(n,e){const t=xl[e];if(t)return t;let i=Un(e);if(i!=="filter"&&i in n)return xl[e]=i;i=Bo(i);for(let r=0;r<Yf.length;r++){const s=Yf[r]+i;if(s in n)return xl[e]=s}return e}const jf="http://www.w3.org/1999/xlink";function Kf(n,e,t,i,r,s=cg(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(jf,e.slice(6,e.length)):n.setAttributeNS(jf,e,t):t==null||s&&!Dd(t)?n.removeAttribute(e):n.setAttribute(e,s?"":hi(t)?String(t):t)}function Zf(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Op(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Dd(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function xr(n,e,t,i){n.addEventListener(e,t,i)}function c_(n,e,t,i){n.removeEventListener(e,t,i)}const Jf=Symbol("_vei");function u_(n,e,t,i,r=null){const s=n[Jf]||(n[Jf]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=f_(e);if(i){const c=s[e]=p_(i,r);xr(n,o,c,l)}else a&&(c_(n,o,a,l),s[e]=void 0)}}const Qf=/(?:Once|Passive|Capture)$/;function f_(n){let e;if(Qf.test(n)){e={};let i;for(;i=n.match(Qf);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Lr(n.slice(2)),e]}let Sl=0;const h_=Promise.resolve(),d_=()=>Sl||(h_.then(()=>Sl=0),Sl=Date.now());function p_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;$n(m_(i,t.value),e,5,[i])};return t.value=n,t.attached=d_(),t}function m_(n,e){if(We(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const eh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,g_=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?r_(n,i,a):e==="style"?o_(n,t,i):Fo(e)?Mu(e)||u_(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):__(n,e,i,a))?(Zf(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Kf(n,e,i,a,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Lt(i))?Zf(n,Un(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Kf(n,e,i,a))};function __(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&eh(e)&&Ye(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return eh(e)&&Lt(t)?!1:e in n}const Eo=n=>{const e=n.props["onUpdate:modelValue"]||!1;return We(e)?t=>to(e,t):e};function v_(n){n.target.composing=!0}function th(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fs=Symbol("_assign");function nh(n,e,t){return e&&(n=n.trim()),t&&(n=zo(n)),n}const vc={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[fs]=Eo(r);const s=i||r.props&&r.props.type==="number";xr(n,e?"change":"input",a=>{a.target.composing||n[fs](nh(n.value,t,s))}),(t||s)&&xr(n,"change",()=>{n.value=nh(n.value,t,s)}),e||(xr(n,"compositionstart",v_),xr(n,"compositionend",th),xr(n,"change",th))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[fs]=Eo(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?zo(n.value):n.value,l=e??"";o!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},x_={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const r=Oo(e);xr(n,"change",()=>{const s=Array.prototype.filter.call(n.options,a=>a.selected).map(a=>t?zo(To(a)):To(a));n[fs](n.multiple?r?new Set(s):s:s[0]),n._assigning=!0,Vt(()=>{n._assigning=!1})}),n[fs]=Eo(i)},mounted(n,{value:e}){ih(n,e)},beforeUpdate(n,e,t){n[fs]=Eo(t)},updated(n,{value:e}){n._assigning||ih(n,e)}};function ih(n,e){const t=n.multiple,i=We(e);if(!(t&&!i&&!Oo(e))){for(let r=0,s=n.options.length;r<s;r++){const a=n.options[r],o=To(a);if(t)if(i){const l=typeof o;l==="string"||l==="number"?a.selected=e.some(c=>String(c)===String(o)):a.selected=fg(e,o)>-1}else a.selected=e.has(o);else if(Ho(To(a),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function To(n){return"_value"in n?n._value:n.value}const S_=["ctrl","shift","alt","meta"],b_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>S_.some(t=>n[`${t}Key`]&&!e.includes(t))},Nt=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((r,...s)=>{for(let a=0;a<e.length;a++){const o=b_[e[a]];if(o&&o(r,e))return}return n(r,...s)}))},M_=Ht({patchProp:g_},K0);let rh;function y_(){return rh||(rh=R0(M_))}const E_=((...n)=>{const e=y_().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=w_(i);if(!r)return;const s=e._component;!Ye(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,T_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function T_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function w_(n){return Lt(n)?document.querySelector(n):n}const A_="/Profile_Picture_CyberCubed.ico";const ss=typeof document<"u";function zp(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function C_(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&zp(n.default)}const ft=Object.assign;function bl(n,e){const t={};for(const i in e){const r=e[i];t[i]=qn(r)?r.map(n):n(r)}return t}const ea=()=>{},qn=Array.isArray;function sh(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const Vp=/#/g,R_=/&/g,P_=/\//g,D_=/=/g,I_=/\?/g,Hp=/\+/g,L_=/%5B/g,U_=/%5D/g,Gp=/%5E/g,N_=/%60/g,Wp=/%7B/g,F_=/%7C/g,Xp=/%7D/g,O_=/%20/g;function Ou(n){return n==null?"":encodeURI(""+n).replace(F_,"|").replace(L_,"[").replace(U_,"]")}function k_(n){return Ou(n).replace(Wp,"{").replace(Xp,"}").replace(Gp,"^")}function xc(n){return Ou(n).replace(Hp,"%2B").replace(O_,"+").replace(Vp,"%23").replace(R_,"%26").replace(N_,"`").replace(Wp,"{").replace(Xp,"}").replace(Gp,"^")}function B_(n){return xc(n).replace(D_,"%3D")}function z_(n){return Ou(n).replace(Vp,"%23").replace(I_,"%3F")}function V_(n){return z_(n).replace(P_,"%2F")}function la(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const H_=/\/$/,G_=n=>n.replace(H_,"");function Ml(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,o>0?o:e.length),r=n(s.slice(1))),o>=0&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=q_(i??e,t),{fullPath:i+s+a,path:i,query:r,hash:la(a)}}function W_(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function ah(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function X_(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&gs(e.matched[i],t.matched[r])&&$p(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function gs(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function $p(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!$_(n[t],e[t]))return!1;return!0}function $_(n,e){return qn(n)?oh(n,e):qn(e)?oh(e,n):n?.valueOf()===e?.valueOf()}function oh(n,e){return qn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function q_(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const zi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Sc=(function(n){return n.pop="pop",n.push="push",n})({}),yl=(function(n){return n.back="back",n.forward="forward",n.unknown="",n})({});function Y_(n){if(!n)if(ss){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),G_(n)}const j_=/^[^#]+#/;function K_(n,e){return n.replace(j_,"#")+e}function Z_(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Jo=()=>({left:window.scrollX,top:window.scrollY});function J_(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Z_(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function lh(n,e){return(history.state?history.state.position-e:-1)+n}const bc=new Map;function Q_(n,e){bc.set(n,e)}function ev(n){const e=bc.get(n);return bc.delete(n),e}function tv(n){return typeof n=="string"||n&&typeof n=="object"}function qp(n){return typeof n=="string"||typeof n=="symbol"}let Rt=(function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n})({});const Yp=Symbol("");Rt.MATCHER_NOT_FOUND+"",Rt.NAVIGATION_GUARD_REDIRECT+"",Rt.NAVIGATION_ABORTED+"",Rt.NAVIGATION_CANCELLED+"",Rt.NAVIGATION_DUPLICATED+"";function _s(n,e){return ft(new Error,{type:n,[Yp]:!0},e)}function xi(n,e){return n instanceof Error&&Yp in n&&(e==null||!!(n.type&e))}const nv=["params","query","hash"];function iv(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of nv)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function rv(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const r=t[i].replace(Hp," "),s=r.indexOf("="),a=la(s<0?r:r.slice(0,s)),o=s<0?null:la(r.slice(s+1));if(a in e){let l=e[a];qn(l)||(l=e[a]=[l]),l.push(o)}else e[a]=o}return e}function ch(n){let e="";for(let t in n){const i=n[t];if(t=B_(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(qn(i)?i.map(r=>r&&xc(r)):[i&&xc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function sv(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=qn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const av=Symbol(""),uh=Symbol(""),Qo=Symbol(""),ku=Symbol(""),Mc=Symbol("");function Is(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Zi(n,e,t,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const c=h=>{h===!1?l(_s(Rt.NAVIGATION_ABORTED,{from:t,to:e})):h instanceof Error?l(h):tv(h)?l(_s(Rt.NAVIGATION_GUARD_REDIRECT,{from:e,to:h})):(a&&i.enterCallbacks[r]===a&&typeof h=="function"&&a.push(h),o())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function El(n,e,t,i,r=s=>s()){const s=[];for(const a of n)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(zp(l)){const c=(l.__vccOpts||l)[e];c&&s.push(Zi(c,t,i,a,o,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=C_(u)?u.default:u;a.mods[o]=u,a.components[o]=f;const h=(f.__vccOpts||f)[e];return h&&Zi(h,t,i,a,o,r)()}))}}return s}function ov(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>gs(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>gs(c,l))||r.push(l))}return[t,i,r]}let lv=()=>location.protocol+"//"+location.host;function jp(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,o=r.slice(a);return o[0]!=="/"&&(o="/"+o),ah(o,"")}return ah(t,n)+i+r}function cv(n,e,t,i){let r=[],s=[],a=null;const o=({state:h})=>{const d=jp(n,location),m=t.value,b=e.value;let g=0;if(h){if(t.value=d,e.value=h,a&&a===m){a=null;return}g=b?h.position-b.position:0}else i(d);r.forEach(p=>{p(t.value,m,{delta:g,type:Sc.pop,direction:g?g>0?yl.forward:yl.back:yl.unknown})})};function l(){a=t.value}function c(h){r.push(h);const d=()=>{const m=r.indexOf(h);m>-1&&r.splice(m,1)};return s.push(d),d}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(ft({},h.state,{scroll:Jo()}),"")}}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function fh(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Jo():null}}function uv(n){const{history:e,location:t}=window,i={value:jp(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:lv()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function a(l,c){s(l,ft({},e.state,fh(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function o(l,c){const u=ft({},r.value,e.state,{forward:l,scroll:Jo()});s(u.current,u,!0),s(l,ft({},fh(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function fv(n){n=Y_(n);const e=uv(n),t=cv(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=ft({location:"",base:n,go:i,createHref:K_.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let yr=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n})({});var Ft=(function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n})(Ft||{});const hv={type:yr.Static,value:""},dv=/[a-zA-Z0-9_]/;function pv(n){if(!n)return[[]];if(n==="/")return[[hv]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=Ft.Static,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(t===Ft.Static?s.push({type:yr.Static,value:c}):t===Ft.Param||t===Ft.ParamRegExp||t===Ft.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:yr.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==Ft.ParamRegExp){i=t,t=Ft.EscapeNext;continue}switch(t){case Ft.Static:l==="/"?(c&&f(),a()):l===":"?(f(),t=Ft.Param):h();break;case Ft.EscapeNext:h(),t=i;break;case Ft.Param:l==="("?t=Ft.ParamRegExp:dv.test(l)?h():(f(),t=Ft.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case Ft.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=Ft.ParamRegExpEnd:u+=l;break;case Ft.ParamRegExpEnd:f(),t=Ft.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===Ft.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}const hh="[^/]+?",mv={sensitive:!1,strict:!1,start:!0,end:!0};var ln=(function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n})(ln||{});const gv=/[.+*?^${}()[\]/\\]/g;function _v(n,e){const t=ft({},mv,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[ln.Root];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=ln.Segment+(t.sensitive?ln.BonusCaseSensitive:0);if(h.type===yr.Static)f||(r+="/"),r+=h.value.replace(gv,"\\$&"),d+=ln.Static;else if(h.type===yr.Param){const{value:m,repeatable:b,optional:g,regexp:p}=h;s.push({name:m,repeatable:b,optional:g});const M=p||hh;if(M!==hh){d+=ln.BonusCustomRegExp;try{`${M}`}catch(E){throw new Error(`Invalid custom RegExp for param "${m}" (${M}): `+E.message)}}let A=b?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(A=g&&c.length<2?`(?:/${A})`:"/"+A),g&&(A+="?"),r+=A,d+=ln.Dynamic,g&&(d+=ln.BonusOptional),b&&(d+=ln.BonusRepeatable),M===".*"&&(d+=ln.BonusWildcard)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=ln.BonusStrict}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",m=s[h-1];f[m.name]=d&&m.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===yr.Static)u+=d.value;else if(d.type===yr.Param){const{value:m,repeatable:b,optional:g}=d,p=m in c?c[m]:"";if(qn(p)&&!b)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const M=qn(p)?p.join("/"):p;if(!M)if(g)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);u+=M}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function vv(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===ln.Static+ln.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===ln.Static+ln.Segment?1:-1:0}function Kp(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=vv(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(dh(i))return 1;if(dh(r))return-1}return r.length-i.length}function dh(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const xv={strict:!1,end:!0,sensitive:!1};function Sv(n,e,t){const i=_v(pv(n.path),t),r=ft(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function bv(n,e){const t=[],i=new Map;e=sh(xv,e);function r(f){return i.get(f)}function s(f,h,d){const m=!d,b=mh(f);b.aliasOf=d&&d.record;const g=sh(e,f),p=[b];if("alias"in f){const E=typeof f.alias=="string"?[f.alias]:f.alias;for(const R of E)p.push(mh(ft({},b,{components:d?d.record.components:b.components,path:R,aliasOf:d?d.record:b})))}let M,A;for(const E of p){const{path:R}=E;if(h&&R[0]!=="/"){const x=h.record.path,P=x[x.length-1]==="/"?"":"/";E.path=h.record.path+(R&&P+R)}if(M=Sv(E,h,g),d?d.alias.push(M):(A=A||M,A!==M&&A.alias.push(M),m&&f.name&&!gh(M)&&a(f.name)),Zp(M)&&l(M),b.children){const x=b.children;for(let P=0;P<x.length;P++)s(x[P],M,d&&d.children[P])}d=d||M}return A?()=>{a(A)}:ea}function a(f){if(qp(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return t}function l(f){const h=Ev(f,t);t.splice(h,0,f),f.record.name&&!gh(f)&&i.set(f.record.name,f)}function c(f,h){let d,m={},b,g;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw _s(Rt.MATCHER_NOT_FOUND,{location:f});g=d.record.name,m=ft(ph(h.params,d.keys.filter(A=>!A.optional).concat(d.parent?d.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),f.params&&ph(f.params,d.keys.map(A=>A.name))),b=d.stringify(m)}else if(f.path!=null)b=f.path,d=t.find(A=>A.re.test(b)),d&&(m=d.parse(b),g=d.record.name);else{if(d=h.name?i.get(h.name):t.find(A=>A.re.test(h.path)),!d)throw _s(Rt.MATCHER_NOT_FOUND,{location:f,currentLocation:h});g=d.record.name,m=ft({},h.params,f.params),b=d.stringify(m)}const p=[];let M=d;for(;M;)p.unshift(M.record),M=M.parent;return{name:g,path:b,params:m,matched:p,meta:yv(p)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:r}}function ph(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function mh(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Mv(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Mv(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function gh(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function yv(n){return n.reduce((e,t)=>ft(e,t.meta),{})}function Ev(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;Kp(n,e[s])<0?i=s:t=s+1}const r=Tv(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function Tv(n){let e=n;for(;e=e.parent;)if(Zp(e)&&Kp(n,e)===0)return e}function Zp({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function _h(n){const e=Gn(Qo),t=Gn(ku),i=At(()=>{const l=ai(n.to);return e.resolve(l)}),r=At(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(gs.bind(null,u));if(h>-1)return h;const d=vh(l[c-2]);return c>1&&vh(u)===d&&f[f.length-1].path!==d?f.findIndex(gs.bind(null,l[c-2])):h}),s=At(()=>r.value>-1&&Pv(t.params,i.value.params)),a=At(()=>r.value>-1&&r.value===t.matched.length-1&&$p(t.params,i.value.params));function o(l={}){if(Rv(l)){const c=e[ai(n.replace)?"replace":"push"](ai(n.to)).catch(ea);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:At(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}function wv(n){return n.length===1?n[0]:n}const Av=up({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:_h,setup(n,{slots:e}){const t=Wo(_h(n)),{options:i}=Gn(Qo),r=At(()=>({[xh(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[xh(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&wv(e.default(t));return n.custom?s:Fu("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Cv=Av;function Rv(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function Pv(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!qn(r)||r.length!==i.length||i.some((s,a)=>s.valueOf()!==r[a].valueOf()))return!1}return!0}function vh(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const xh=(n,e,t)=>n??e??t,Dv=up({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Gn(Mc),r=At(()=>n.route||i.value),s=Gn(uh,0),a=At(()=>{let c=ai(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=At(()=>r.value.matched[a.value]);no(uh,At(()=>a.value+1)),no(av,o),no(Mc,r);const l=Pe();return Dn(()=>[l.value,o.value,n.name],([c,u,f],[h,d,m])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!gs(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=o.value,h=f&&f.components[u];if(!h)return Sh(t.default,{Component:h,route:c});const d=f.props[u],m=d?d===!0?c.params:typeof d=="function"?d(c):d:null,g=Fu(h,ft({},m,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Sh(t.default,{Component:g,route:c})||g}}});function Sh(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Iv=Dv;function Lv(n){const e=bv(n.routes,n),t=n.parseQuery||rv,i=n.stringifyQuery||ch,r=n.history,s=Is(),a=Is(),o=Is(),l=Lg(zi);let c=zi;ss&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=bl.bind(null,B=>""+B),f=bl.bind(null,V_),h=bl.bind(null,la);function d(B,O){let q,ce;return qp(B)?(q=e.getRecordMatcher(B),ce=O):ce=B,e.addRoute(ce,q)}function m(B){const O=e.getRecordMatcher(B);O&&e.removeRoute(O)}function b(){return e.getRoutes().map(B=>B.record)}function g(B){return!!e.getRecordMatcher(B)}function p(B,O){if(O=ft({},O||l.value),typeof B=="string"){const U=Ml(t,B,O.path),H=e.resolve({path:U.path},O),L=r.createHref(U.fullPath);return ft(U,H,{params:h(H.params),hash:la(U.hash),redirectedFrom:void 0,href:L})}let q;if(B.path!=null)q=ft({},B,{path:Ml(t,B.path,O.path).path});else{const U=ft({},B.params);for(const H in U)U[H]==null&&delete U[H];q=ft({},B,{params:f(U)}),O.params=f(O.params)}const ce=e.resolve(q,O),de=B.hash||"";ce.params=u(h(ce.params));const D=W_(i,ft({},B,{hash:k_(de),path:ce.path})),w=r.createHref(D);return ft({fullPath:D,hash:de,query:i===ch?sv(B.query):B.query||{}},ce,{redirectedFrom:void 0,href:w})}function M(B){return typeof B=="string"?Ml(t,B,l.value.path):ft({},B)}function A(B,O){if(c!==B)return _s(Rt.NAVIGATION_CANCELLED,{from:O,to:B})}function E(B){return P(B)}function R(B){return E(ft(M(B),{replace:!0}))}function x(B,O){const q=B.matched[B.matched.length-1];if(q&&q.redirect){const{redirect:ce}=q;let de=typeof ce=="function"?ce(B,O):ce;return typeof de=="string"&&(de=de.includes("?")||de.includes("#")?de=M(de):{path:de},de.params={}),ft({query:B.query,hash:B.hash,params:de.path!=null?{}:B.params},de)}}function P(B,O){const q=c=p(B),ce=l.value,de=B.state,D=B.force,w=B.replace===!0,U=x(q,ce);if(U)return P(ft(M(U),{state:typeof U=="object"?ft({},de,U.state):de,force:D,replace:w}),O||q);const H=q;H.redirectedFrom=O;let L;return!D&&X_(i,ce,q)&&(L=_s(Rt.NAVIGATION_DUPLICATED,{to:H,from:ce}),Se(ce,ce,!0,!1)),(L?Promise.resolve(L):W(H,ce)).catch(j=>xi(j)?xi(j,Rt.NAVIGATION_GUARD_REDIRECT)?j:be(j):oe(j,H,ce)).then(j=>{if(j){if(xi(j,Rt.NAVIGATION_GUARD_REDIRECT))return P(ft({replace:w},M(j.to),{state:typeof j.to=="object"?ft({},de,j.to.state):de,force:D}),O||H)}else j=N(H,ce,!0,w,de);return I(H,ce,j),j})}function v(B,O){const q=A(B,O);return q?Promise.reject(q):Promise.resolve()}function S(B){const O=Qe.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(B):B()}function W(B,O){let q;const[ce,de,D]=ov(B,O);q=El(ce.reverse(),"beforeRouteLeave",B,O);for(const U of ce)U.leaveGuards.forEach(H=>{q.push(Zi(H,B,O))});const w=v.bind(null,B,O);return q.push(w),se(q).then(()=>{q=[];for(const U of s.list())q.push(Zi(U,B,O));return q.push(w),se(q)}).then(()=>{q=El(de,"beforeRouteUpdate",B,O);for(const U of de)U.updateGuards.forEach(H=>{q.push(Zi(H,B,O))});return q.push(w),se(q)}).then(()=>{q=[];for(const U of D)if(U.beforeEnter)if(qn(U.beforeEnter))for(const H of U.beforeEnter)q.push(Zi(H,B,O));else q.push(Zi(U.beforeEnter,B,O));return q.push(w),se(q)}).then(()=>(B.matched.forEach(U=>U.enterCallbacks={}),q=El(D,"beforeRouteEnter",B,O,S),q.push(w),se(q))).then(()=>{q=[];for(const U of a.list())q.push(Zi(U,B,O));return q.push(w),se(q)}).catch(U=>xi(U,Rt.NAVIGATION_CANCELLED)?U:Promise.reject(U))}function I(B,O,q){o.list().forEach(ce=>S(()=>ce(B,O,q)))}function N(B,O,q,ce,de){const D=A(B,O);if(D)return D;const w=O===zi,U=ss?history.state:{};q&&(ce||w?r.replace(B.fullPath,ft({scroll:w&&U&&U.scroll},de)):r.push(B.fullPath,de)),l.value=B,Se(B,O,q,w),be()}let z;function ee(){z||(z=r.listen((B,O,q)=>{if(!et.listening)return;const ce=p(B),de=x(ce,et.currentRoute.value);if(de){P(ft(de,{replace:!0,force:!0}),ce).catch(ea);return}c=ce;const D=l.value;ss&&Q_(lh(D.fullPath,q.delta),Jo()),W(ce,D).catch(w=>xi(w,Rt.NAVIGATION_ABORTED|Rt.NAVIGATION_CANCELLED)?w:xi(w,Rt.NAVIGATION_GUARD_REDIRECT)?(P(ft(M(w.to),{force:!0}),ce).then(U=>{xi(U,Rt.NAVIGATION_ABORTED|Rt.NAVIGATION_DUPLICATED)&&!q.delta&&q.type===Sc.pop&&r.go(-1,!1)}).catch(ea),Promise.reject()):(q.delta&&r.go(-q.delta,!1),oe(w,ce,D))).then(w=>{w=w||N(ce,D,!1),w&&(q.delta&&!xi(w,Rt.NAVIGATION_CANCELLED)?r.go(-q.delta,!1):q.type===Sc.pop&&xi(w,Rt.NAVIGATION_ABORTED|Rt.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),I(ce,D,w)}).catch(ea)}))}let X=Is(),$=Is(),k;function oe(B,O,q){be(B);const ce=$.list();return ce.length?ce.forEach(de=>de(B,O,q)):console.error(B),Promise.reject(B)}function he(){return k&&l.value!==zi?Promise.resolve():new Promise((B,O)=>{X.add([B,O])})}function be(B){return k||(k=!B,ee(),X.list().forEach(([O,q])=>B?q(B):O()),X.reset()),B}function Se(B,O,q,ce){const{scrollBehavior:de}=n;if(!ss||!de)return Promise.resolve();const D=!q&&ev(lh(B.fullPath,0))||(ce||!q)&&history.state&&history.state.scroll||null;return Vt().then(()=>de(B,O,D)).then(w=>w&&J_(w)).catch(w=>oe(w,B,O))}const me=B=>r.go(B);let He;const Qe=new Set,et={currentRoute:l,listening:!0,addRoute:d,removeRoute:m,clearRoutes:e.clearRoutes,hasRoute:g,getRoutes:b,resolve:p,options:n,push:E,replace:R,go:me,back:()=>me(-1),forward:()=>me(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:$.add,isReady:he,install(B){B.component("RouterLink",Cv),B.component("RouterView",Iv),B.config.globalProperties.$router=et,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>ai(l)}),ss&&!He&&l.value===zi&&(He=!0,E(r.location).catch(ce=>{}));const O={};for(const ce in zi)Object.defineProperty(O,ce,{get:()=>l.value[ce],enumerable:!0});B.provide(Qo,et),B.provide(ku,Yd(O)),B.provide(Mc,l);const q=B.unmount;Qe.add(B),B.unmount=function(){Qe.delete(B),Qe.size<1&&(c=zi,z&&z(),z=null,l.value=zi,He=!1,k=!1),q()}}};function se(B){return B.reduce((O,q)=>O.then(()=>S(q)),Promise.resolve())}return et}function Jp(){return Gn(Qo)}function yc(n){return Gn(ku)}const Uv="http://localhost:8000",Wn=Uv+"/api",rn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Nv={class:"burger-wrap"},Fv={__name:"HeaderNav",setup(n){const e=yc();function t(){const R=e.path;return R==="/"?0:R==="/coding"?1:R==="/blender"?2:R.startsWith("/dnd")?3:R==="/about"?4:0}const i=Pe(t());Dn(()=>e.path,()=>{i.value=t(),Vt(()=>m())});const r=Pe(null),s=Pe(null),a=Pe(null),o=Pe([]),l=Pe(window.innerWidth<640),c=Pe(!1),u=Pe({opacity:0}),f=Pe({opacity:0});async function h(){try{const R=await fetch(`${Wn}/campaigns/`);if(!R.ok)return;const x=await R.json();o.value=Array.isArray(x)?x:[]}catch(R){console.warn("Failed to load campaigns",R)}}const d=At(()=>"/dnd");function m(R=!0){if(!s.value||!a.value)return;const x=l.value,P=x?".nav-link-burger":".nav-link",v=Array.from(s.value.querySelectorAll(P));let S;x?S=s.value.getBoundingClientRect():S=a.value.getBoundingClientRect();const W=(I,N)=>{if(I==null||!v[I]){x?N.value={opacity:0,top:"0px",height:"0px"}:N.value={opacity:0,left:"0px",width:"0px"};return}const z=v[I].getBoundingClientRect();if(x){const ee=z.top-S.top,X=z.height;N.value={opacity:1,top:`${ee}px`,height:`${X}px`,transition:R?"top 320ms cubic-bezier(.2,.9,.2,1), height 260ms cubic-bezier(.2,.9,.2,1), opacity 180ms":"none"}}else{const ee=z.left-S.left-15,X=z.width+30;N.value={opacity:1,left:`${ee}px`,width:`${X}px`,transition:R?"left 320ms cubic-bezier(.2,.9,.2,1), width 260ms cubic-bezier(.2,.9,.2,1), opacity 180ms":"none"}}};W(i.value,u),W(r.value,f)}function b(){c.value=!c.value}function g(R){i.value=R,c.value=!1,Vt(()=>m())}function p(R){r.value=R,m()}function M(){r.value=null,m()}function A(){const R=window.innerWidth<640;R||(c.value=!1),l.value=R}let E;return jn(()=>{h(),A(),Vt(()=>m(!1)),E=new ResizeObserver(()=>m()),a.value&&E.observe(a.value),window.addEventListener("resize",()=>{A(),m()})}),Ur(()=>{E&&a.value&&E.unobserve(a.value),window.removeEventListener("resize",m)}),(R,x)=>{const P=pa("router-link");return De(),Ne("div",{class:it(["nav-wrap liquid-glass",{"menu-open":c.value}]),ref_key:"navWrap",ref:a},[l.value?(De(),Ne(Et,{key:0},[Y("div",Nv,[Y("button",{type:"button",class:it(["burger",{active:c.value}]),onClick:x[0]||(x[0]=v=>b()),"aria-label":"Toggle navigation","aria-expanded":"isMenuOpen"},"☰",2)]),nt(Q0,{name:"fade"},{default:Wt(()=>[c.value?(De(),Ne("div",{key:0,class:"burger-overlay",onClick:x[1]||(x[1]=v=>c.value=!1)})):wt("",!0)]),_:1}),Y("div",{class:it(["burgermenu",{open:c.value}])},[Y("nav",{class:"nav-burger",ref_key:"nav",ref:s,onMouseleave:M},[Y("div",{class:"nav-bubble-burger selected",style:Jt(u.value),"aria-hidden":"true"},null,4),Y("div",{class:"nav-bubble-burger liquid-glass",style:Jt(f.value),"aria-hidden":"true"},null,4),nt(P,{to:"/",href:"#",class:it(["nav-link-burger",{active:i.value===0}]),onClick:x[2]||(x[2]=Nt(v=>g(0),["prevent"])),onMouseenter:x[3]||(x[3]=v=>p(0))},{default:Wt(()=>[...x[22]||(x[22]=[yt("Home",-1)])]),_:1},8,["class"]),nt(P,{to:"/coding",href:"#",class:it(["nav-link-burger",{active:i.value===1}]),onClick:x[4]||(x[4]=Nt(v=>g(1),["prevent"])),onMouseenter:x[5]||(x[5]=v=>p(1))},{default:Wt(()=>[...x[23]||(x[23]=[yt("Coding",-1)])]),_:1},8,["class"]),nt(P,{to:"/blender",href:"#",class:it(["nav-link-burger",{active:i.value===2}]),onClick:x[6]||(x[6]=Nt(v=>g(2),["prevent"])),onMouseenter:x[7]||(x[7]=v=>p(2))},{default:Wt(()=>[...x[24]||(x[24]=[yt("Blender",-1)])]),_:1},8,["class"]),nt(P,{to:d.value,href:"#",class:it(["nav-link-burger",{active:i.value===3}]),onClick:x[8]||(x[8]=Nt(v=>g(3),["prevent"])),onMouseenter:x[9]||(x[9]=v=>p(3))},{default:Wt(()=>[...x[25]||(x[25]=[yt("D&D",-1)])]),_:1},8,["to","class"]),nt(P,{to:"/about",href:"#",class:it(["nav-link-burger",{active:i.value===4}]),onClick:x[10]||(x[10]=Nt(v=>g(4),["prevent"])),onMouseenter:x[11]||(x[11]=v=>p(4))},{default:Wt(()=>[...x[26]||(x[26]=[yt("About",-1)])]),_:1},8,["class"])],544)],2)],64)):(De(),Ne(Et,{key:1},[Y("div",{class:"nav-bubble selected",style:Jt(u.value),"aria-hidden":"true"},null,4),Y("div",{class:"nav-bubble liquid-glass",style:Jt(f.value),"aria-hidden":"true"},null,4),Y("nav",{class:"nav",ref_key:"nav",ref:s,onMouseleave:M},[nt(P,{to:"/",href:"#",class:it(["nav-link",{active:i.value===0}]),onClick:x[12]||(x[12]=Nt(v=>g(0),["prevent"])),onMouseenter:x[13]||(x[13]=v=>p(0))},{default:Wt(()=>[...x[27]||(x[27]=[yt("Home",-1)])]),_:1},8,["class"]),nt(P,{to:"/coding",href:"#",class:it(["nav-link",{active:i.value===1}]),onClick:x[14]||(x[14]=Nt(v=>g(1),["prevent"])),onMouseenter:x[15]||(x[15]=v=>p(1))},{default:Wt(()=>[...x[28]||(x[28]=[yt("Coding",-1)])]),_:1},8,["class"]),nt(P,{to:"/blender",href:"#",class:it(["nav-link",{active:i.value===2}]),onClick:x[16]||(x[16]=Nt(v=>g(2),["prevent"])),onMouseenter:x[17]||(x[17]=v=>p(2))},{default:Wt(()=>[...x[29]||(x[29]=[yt("Blender",-1)])]),_:1},8,["class"]),nt(P,{to:d.value,href:"#",class:it(["nav-link",{active:i.value===3}]),onClick:x[18]||(x[18]=Nt(v=>g(3),["prevent"])),onMouseenter:x[19]||(x[19]=v=>p(3))},{default:Wt(()=>[...x[30]||(x[30]=[yt("D&D",-1)])]),_:1},8,["to","class"]),nt(P,{to:"/about",href:"#",class:it(["nav-link",{active:i.value===4}]),onClick:x[20]||(x[20]=Nt(v=>g(4),["prevent"])),onMouseenter:x[21]||(x[21]=v=>p(4))},{default:Wt(()=>[...x[31]||(x[31]=[yt("About",-1)])]),_:1},8,["class"])],544)],64))],2)}}},Ov=rn(Fv,[["__scopeId","data-v-e1b5a3e7"]]),kv={class:"header"},Bv={class:"header-container"},zv={class:"header-left liquid-glass"},Vv={__name:"HeaderV2",setup(n){return(e,t)=>{const i=pa("router-link");return De(),Ne("header",kv,[Y("div",Bv,[Y("div",zv,[nt(i,{to:"/admin-view","aria-label":"Admin"},{default:Wt(()=>[...t[0]||(t[0]=[Y("img",{src:A_,alt:"Logo",class:"logo-image"},null,-1)])]),_:1})]),t[1]||(t[1]=Y("div",{class:"header-spacer"},null,-1)),nt(Ov)])])}}},Hv=rn(Vv,[["__scopeId","data-v-713927ae"]]),Gv={__name:"LoadingScreen",props:{visible:{type:Boolean,default:!0}},setup(n){return(e,t)=>(De(),Ne("div",{class:it(["loading-screen",{"fade-out":!n.visible}])},[...t[0]||(t[0]=[Y("div",{class:"spinner"},null,-1),Y("p",{class:"loading-text"},"Loading…",-1)])],2))}},Wv=rn(Gv,[["__scopeId","data-v-e841dd92"]]);const Bu="183",Xv=0,bh=1,$v=2,ao=1,qv=2,Ws=3,ir=0,pn=1,ri=2,ui=0,hs=1,Er=2,Mh=3,yh=4,Yv=5,Sr=100,jv=101,Kv=102,Zv=103,Jv=104,Qv=200,ex=201,tx=202,nx=203,Ec=204,Tc=205,ix=206,rx=207,sx=208,ax=209,ox=210,lx=211,cx=212,ux=213,fx=214,wc=0,Ac=1,Cc=2,vs=3,Rc=4,Pc=5,Dc=6,Ic=7,Qp=0,hx=1,dx=2,fi=0,em=1,tm=2,nm=3,zu=4,im=5,rm=6,sm=7,am=300,Dr=301,xs=302,Tl=303,wl=304,el=306,Lc=1e3,Ri=1001,Uc=1002,Xt=1003,px=1004,Aa=1005,Qt=1006,Al=1007,Tr=1008,Rn=1009,om=1010,lm=1011,ca=1012,Vu=1013,pi=1014,oi=1015,En=1016,Hu=1017,Gu=1018,ua=1020,cm=35902,um=35899,fm=1021,hm=1022,Vn=1023,Ui=1026,wr=1027,dm=1028,Wu=1029,Ss=1030,Xu=1031,$u=1033,oo=33776,lo=33777,co=33778,uo=33779,Nc=35840,Fc=35841,Oc=35842,kc=35843,Bc=36196,zc=37492,Vc=37496,Hc=37488,Gc=37489,Wc=37490,Xc=37491,$c=37808,qc=37809,Yc=37810,jc=37811,Kc=37812,Zc=37813,Jc=37814,Qc=37815,eu=37816,tu=37817,nu=37818,iu=37819,ru=37820,su=37821,au=36492,ou=36494,lu=36495,cu=36283,uu=36284,fu=36285,hu=36286,mx=3200,gx=0,_x=1,Ji="",An="srgb",bs="srgb-linear",wo="linear",pt="srgb",Br=7680,Eh=519,vx=512,xx=513,Sx=514,qu=515,bx=516,Mx=517,Yu=518,yx=519,du=35044,Th="300 es",li=2e3,Ao=2001;function Ex(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Co(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Tx(){const n=Co("canvas");return n.style.display="block",n}const wh={};function Ro(...n){const e="THREE."+n.shift();console.log(e,...n)}function pm(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function $e(...n){n=pm(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function at(...n){n=pm(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Po(...n){const e=n.join(" ");e in wh||(wh[e]=!0,$e(...n))}function wx(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Ax={[wc]:Ac,[Cc]:Dc,[Rc]:Ic,[vs]:Pc,[Ac]:wc,[Dc]:Cc,[Ic]:Rc,[Pc]:vs};class Es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cl=Math.PI/180,pu=180/Math.PI;function tr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function Cx(n,e){return(n%e+e)%e}function Rl(n,e,t){return(1-t)*n+t*e}function si(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ts{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[a+0],d=s[a+1],m=s[a+2],b=s[a+3];if(f!==b||l!==h||c!==d||u!==m){let g=l*h+c*d+u*m+f*b;g<0&&(h=-h,d=-d,m=-m,b=-b,g=-g);let p=1-o;if(g<.9995){const M=Math.acos(g),A=Math.sin(M);p=Math.sin(p*M)/A,o=Math.sin(o*M)/A,l=l*p+h*o,c=c*p+d*o,u=u*p+m*o,f=f*p+b*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+m*o,f=f*p+b*o;const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],d=s[a+2],m=s[a+3];return e[t]=o*m+u*f+l*d-c*h,e[t+1]=l*m+u*h+c*f-o*d,e[t+2]=c*m+u*d+o*h-l*f,e[t+3]=u*m-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),d=l(r/2),m=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"YZX":this._x=h*u*f+c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f-h*d*m;break;case"XZY":this._x=h*u*f-c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f+h*d*m;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ah.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ah.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pl.copy(this).projectOnVector(e),this.sub(Pl)}reflect(e){return this.sub(Pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pl=new K,Ah=new Ts;class Ze{constructor(e,t,i,r,s,a,o,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],m=i[8],b=r[0],g=r[3],p=r[6],M=r[1],A=r[4],E=r[7],R=r[2],x=r[5],P=r[8];return s[0]=a*b+o*M+l*R,s[3]=a*g+o*A+l*x,s[6]=a*p+o*E+l*P,s[1]=c*b+u*M+f*R,s[4]=c*g+u*A+f*x,s[7]=c*p+u*E+f*P,s[2]=h*b+d*M+m*R,s[5]=h*g+d*A+m*x,s[8]=h*p+d*E+m*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,m=t*f+i*h+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/m;return e[0]=f*b,e[1]=(r*c-u*i)*b,e[2]=(o*i-r*a)*b,e[3]=h*b,e[4]=(u*t-r*l)*b,e[5]=(r*s-o*t)*b,e[6]=d*b,e[7]=(i*l-c*t)*b,e[8]=(a*t-i*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Dl.makeScale(e,t)),this}rotate(e){return this.premultiply(Dl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Dl=new Ze,Ch=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rh=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rx(){const n={enabled:!0,workingColorSpace:bs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===pt&&(r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(r.r=ds(r.r),r.g=ds(r.g),r.b=ds(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ji?wo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Po("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Po("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[bs]:{primaries:e,whitePoint:i,transfer:wo,toXYZ:Ch,fromXYZ:Rh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:Ch,fromXYZ:Rh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),n}const ot=Rx();function Pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ds(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let zr;class Px{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{zr===void 0&&(zr=Co("canvas")),zr.width=e.width,zr.height=e.height;const r=zr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=zr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Co("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Pi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pi(t[i]/255)*255):t[i]=Pi(t[i]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dx=0;class ju{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=tr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Il(r[a].image)):s.push(Il(r[a]))}else s=Il(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Il(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Px.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let Ix=0;const Ll=new K;class nn extends Es{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,i=Ri,r=Ri,s=Qt,a=Tr,o=Vn,l=Rn,c=nn.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=tr(),this.name="",this.source=new ju(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ll).x}get height(){return this.source.getSize(Ll).y}get depth(){return this.source.getSize(Ll).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==am)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lc:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case Uc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lc:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case Uc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=am;nn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],m=l[9],b=l[2],g=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+b)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,E=(d+1)/2,R=(p+1)/2,x=(u+h)/4,P=(f+b)/4,v=(m+g)/4;return A>E&&A>R?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=x/i,s=P/i):E>R?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=x/r,s=v/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=P/s,r=v/s),this.set(i,r,s,t),this}let M=Math.sqrt((g-m)*(g-m)+(f-b)*(f-b)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(f-b)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lx extends Es{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new nn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ju(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mn extends Lx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class mm extends nn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ux extends nn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pt{constructor(e,t,i,r,s,a,o,l,c,u,f,h,d,m,b,g){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,d,m,b,g)}set(e,t,i,r,s,a,o,l,c,u,f,h,d,m,b,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,m=o*u,b=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=h-b*c,t[9]=-o*l,t[2]=b-h*c,t[6]=m+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,m=c*u,b=c*f;t[0]=h+b*o,t[4]=m*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-m,t[6]=b+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,m=c*u,b=c*f;t[0]=h-b*o,t[4]=-a*f,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*u,t[9]=b-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,m=o*u,b=o*f;t[0]=l*u,t[4]=m*c-d,t[8]=h*c+b,t[1]=l*f,t[5]=b*c+h,t[9]=d*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,m=o*l,b=o*c;t[0]=l*u,t[4]=b-h*f,t[8]=m*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+m,t[10]=h-b*f}else if(e.order==="XZY"){const h=a*l,d=a*c,m=o*l,b=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+b,t[5]=a*u,t[9]=d*f-m,t[2]=m*f-d,t[6]=o*u,t[10]=b*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nx,e,Fx)}lookAt(e,t,i){const r=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Vi.crossVectors(i,xn),Vi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Vi.crossVectors(i,xn)),Vi.normalize(),Ca.crossVectors(xn,Vi),r[0]=Vi.x,r[4]=Ca.x,r[8]=xn.x,r[1]=Vi.y,r[5]=Ca.y,r[9]=xn.y,r[2]=Vi.z,r[6]=Ca.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],m=i[2],b=i[6],g=i[10],p=i[14],M=i[3],A=i[7],E=i[11],R=i[15],x=r[0],P=r[4],v=r[8],S=r[12],W=r[1],I=r[5],N=r[9],z=r[13],ee=r[2],X=r[6],$=r[10],k=r[14],oe=r[3],he=r[7],be=r[11],Se=r[15];return s[0]=a*x+o*W+l*ee+c*oe,s[4]=a*P+o*I+l*X+c*he,s[8]=a*v+o*N+l*$+c*be,s[12]=a*S+o*z+l*k+c*Se,s[1]=u*x+f*W+h*ee+d*oe,s[5]=u*P+f*I+h*X+d*he,s[9]=u*v+f*N+h*$+d*be,s[13]=u*S+f*z+h*k+d*Se,s[2]=m*x+b*W+g*ee+p*oe,s[6]=m*P+b*I+g*X+p*he,s[10]=m*v+b*N+g*$+p*be,s[14]=m*S+b*z+g*k+p*Se,s[3]=M*x+A*W+E*ee+R*oe,s[7]=M*P+A*I+E*X+R*he,s[11]=M*v+A*N+E*$+R*be,s[15]=M*S+A*z+E*k+R*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],m=e[3],b=e[7],g=e[11],p=e[15],M=l*d-c*h,A=o*d-c*f,E=o*h-l*f,R=a*d-c*u,x=a*h-l*u,P=a*f-o*u;return t*(b*M-g*A+p*E)-i*(m*M-g*R+p*x)+r*(m*A-b*R+p*P)-s*(m*E-b*x+g*P)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],m=e[12],b=e[13],g=e[14],p=e[15],M=t*o-i*a,A=t*l-r*a,E=t*c-s*a,R=i*l-r*o,x=i*c-s*o,P=r*c-s*l,v=u*b-f*m,S=u*g-h*m,W=u*p-d*m,I=f*g-h*b,N=f*p-d*b,z=h*p-d*g,ee=M*z-A*N+E*I+R*W-x*S+P*v;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/ee;return e[0]=(o*z-l*N+c*I)*X,e[1]=(r*N-i*z-s*I)*X,e[2]=(b*P-g*x+p*R)*X,e[3]=(h*x-f*P-d*R)*X,e[4]=(l*W-a*z-c*S)*X,e[5]=(t*z-r*W+s*S)*X,e[6]=(g*E-m*P-p*A)*X,e[7]=(u*P-h*E+d*A)*X,e[8]=(a*N-o*W+c*v)*X,e[9]=(i*W-t*N-s*v)*X,e[10]=(m*x-b*E+p*M)*X,e[11]=(f*E-u*x-d*M)*X,e[12]=(o*S-a*I-l*v)*X,e[13]=(t*I-i*S+r*v)*X,e[14]=(b*A-m*R-g*M)*X,e[15]=(u*R-f*A+h*M)*X,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,m=s*f,b=a*u,g=a*f,p=o*f,M=l*c,A=l*u,E=l*f,R=i.x,x=i.y,P=i.z;return r[0]=(1-(b+p))*R,r[1]=(d+E)*R,r[2]=(m-A)*R,r[3]=0,r[4]=(d-E)*x,r[5]=(1-(h+p))*x,r[6]=(g+M)*x,r[7]=0,r[8]=(m+A)*P,r[9]=(g-M)*P,r[10]=(1-(h+b))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Vr.set(r[0],r[1],r[2]).length();const o=Vr.set(r[4],r[5],r[6]).length(),l=Vr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Fn.copy(this);const c=1/a,u=1/o,f=1/l;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=f,Fn.elements[9]*=f,Fn.elements[10]*=f,t.setFromRotationMatrix(Fn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=li,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let m,b;if(l)m=s/(a-s),b=a*s/(a-s);else if(o===li)m=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===Ao)m=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=li,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),d=-(i+r)/(i-r);let m,b;if(l)m=1/(a-s),b=a/(a-s);else if(o===li)m=-2/(a-s),b=-(a+s)/(a-s);else if(o===Ao)m=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Vr=new K,Fn=new Pt,Nx=new K(0,0,0),Fx=new K(1,1,1),Vi=new K,Ca=new K,xn=new K,Ph=new Pt,Dh=new Ts;class Ni{constructor(e=0,t=0,i=0,r=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ph.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ph,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dh.setFromEuler(this),this.setFromQuaternion(Dh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class gm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ox=0;const Ih=new K,Hr=new Ts,Si=new Pt,Ra=new K,Ls=new K,kx=new K,Bx=new Ts,Lh=new K(1,0,0),Uh=new K(0,1,0),Nh=new K(0,0,1),Fh={type:"added"},zx={type:"removed"},Gr={type:"childadded",child:null},Ul={type:"childremoved",child:null};class hn extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new K,t=new Ni,i=new Ts,r=new K(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Ze}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(Lh,e)}rotateY(e){return this.rotateOnAxis(Uh,e)}rotateZ(e){return this.rotateOnAxis(Nh,e)}translateOnAxis(e,t){return Ih.copy(e).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lh,e)}translateY(e){return this.translateOnAxis(Uh,e)}translateZ(e){return this.translateOnAxis(Nh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ra.copy(e):Ra.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Ls,Ra,this.up):Si.lookAt(Ra,Ls,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),Hr.setFromRotationMatrix(Si),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fh),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zx),Ul.child=e,this.dispatchEvent(Ul),Ul.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fh),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,e,kx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,Bx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DEFAULT_UP=new K(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ar extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vx={type:"move"};class Nl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ar,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ar,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ar,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const b of e.hand.values()){const g=t.getJointPose(b,i),p=this._getHandJoint(c,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&h>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ar;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const _m={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function Fl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=ot.workingColorSpace){if(e=Cx(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Fl(a,s,e+1/3),this.g=Fl(a,s,e),this.b=Fl(a,s,e-1/3)}return ot.colorSpaceToWorking(this,r),this}setStyle(e,t=An){function i(s){s!==void 0&&parseFloat(s)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=An){const i=_m[e.toLowerCase()];return i!==void 0?this.setHex(i,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return ot.workingToColorSpace(jt.copy(this),e),Math.round(rt(jt.r*255,0,255))*65536+Math.round(rt(jt.g*255,0,255))*256+Math.round(rt(jt.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(jt.copy(this),t);const i=jt.r,r=jt.g,s=jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=An){ot.workingToColorSpace(jt.copy(this),e);const t=jt.r,i=jt.g,r=jt.b;return e!==An?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(Pa);const i=Rl(Hi.h,Pa.h,t),r=Rl(Hi.s,Pa.s,t),s=Rl(Hi.l,Pa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Xe;Xe.NAMES=_m;class Hx extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const On=new K,bi=new K,Ol=new K,Mi=new K,Wr=new K,Xr=new K,Oh=new K,kl=new K,Bl=new K,zl=new K,Vl=new It,Hl=new It,Gl=new It;class Pn{constructor(e=new K,t=new K,i=new K){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),On.subVectors(e,t),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){On.subVectors(r,t),bi.subVectors(i,t),Ol.subVectors(e,t);const a=On.dot(On),o=On.dot(bi),l=On.dot(Ol),c=bi.dot(bi),u=bi.dot(Ol),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,m=(a*u-o*l)*h;return s.set(1-d-m,m,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mi.x),l.addScaledVector(a,Mi.y),l.addScaledVector(o,Mi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Vl.setScalar(0),Hl.setScalar(0),Gl.setScalar(0),Vl.fromBufferAttribute(e,t),Hl.fromBufferAttribute(e,i),Gl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Vl,s.x),a.addScaledVector(Hl,s.y),a.addScaledVector(Gl,s.z),a}static isFrontFacing(e,t,i,r){return On.subVectors(i,t),bi.subVectors(e,t),On.cross(bi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),On.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Pn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Wr.subVectors(r,i),Xr.subVectors(s,i),kl.subVectors(e,i);const l=Wr.dot(kl),c=Xr.dot(kl);if(l<=0&&c<=0)return t.copy(i);Bl.subVectors(e,r);const u=Wr.dot(Bl),f=Xr.dot(Bl);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Wr,a);zl.subVectors(e,s);const d=Wr.dot(zl),m=Xr.dot(zl);if(m>=0&&d<=m)return t.copy(s);const b=d*c-l*m;if(b<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(i).addScaledVector(Xr,o);const g=u*m-d*f;if(g<=0&&f-u>=0&&d-m>=0)return Oh.subVectors(s,r),o=(f-u)/(f-u+(d-m)),t.copy(r).addScaledVector(Oh,o);const p=1/(g+b+h);return a=b*p,o=h*p,t.copy(i).addScaledVector(Wr,a).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class _a{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,kn):kn.fromBufferAttribute(s,a),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Da.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Da.copy(i.boundingBox)),Da.applyMatrix4(e.matrixWorld),this.union(Da)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),Ia.subVectors(this.max,Us),$r.subVectors(e.a,Us),qr.subVectors(e.b,Us),Yr.subVectors(e.c,Us),Gi.subVectors(qr,$r),Wi.subVectors(Yr,qr),ur.subVectors($r,Yr);let t=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-ur.z,ur.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,ur.z,0,-ur.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-ur.y,ur.x,0];return!Wl(t,$r,qr,Yr,Ia)||(t=[1,0,0,0,1,0,0,0,1],!Wl(t,$r,qr,Yr,Ia))?!1:(La.crossVectors(Gi,Wi),t=[La.x,La.y,La.z],Wl(t,$r,qr,Yr,Ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yi=[new K,new K,new K,new K,new K,new K,new K,new K],kn=new K,Da=new _a,$r=new K,qr=new K,Yr=new K,Gi=new K,Wi=new K,ur=new K,Us=new K,Ia=new K,La=new K,fr=new K;function Wl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){fr.fromArray(n,s);const o=r.x*Math.abs(fr.x)+r.y*Math.abs(fr.y)+r.z*Math.abs(fr.z),l=e.dot(fr),c=t.dot(fr),u=i.dot(fr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ut=new K,Ua=new Ge;let Gx=0;class gn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=du,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ua.fromBufferAttribute(this,t),Ua.applyMatrix3(e),this.setXY(t,Ua.x,Ua.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==du&&(e.usage=this.usage),e}}class vm extends gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class xm extends gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ln extends gn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Wx=new _a,Ns=new K,Xl=new K;class tl{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Wx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);const t=Ns.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ns,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(Xl)),this.expandByPoint(Ns.copy(e.center).sub(Xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Xx=0;const wn=new Pt,$l=new hn,jr=new K,Sn=new _a,Fs=new _a,zt=new K;class _n extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ex(e)?xm:vm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,i){return wn.makeTranslation(e,t,i),this.applyMatrix4(wn),this}scale(e,t,i){return wn.makeScale(e,t,i),this.applyMatrix4(wn),this}lookAt(e){return $l.lookAt(e),$l.updateMatrix(),this.applyMatrix4($l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ln(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Fs.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(Sn.min,Fs.min),Sn.expandByPoint(zt),zt.addVectors(Sn.max,Fs.max),Sn.expandByPoint(zt)):(Sn.expandByPoint(Fs.min),Sn.expandByPoint(Fs.max))}Sn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)zt.fromBufferAttribute(o,c),l&&(jr.fromBufferAttribute(e,c),zt.add(jr)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new K,l[v]=new K;const c=new K,u=new K,f=new K,h=new Ge,d=new Ge,m=new Ge,b=new K,g=new K;function p(v,S,W){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,W),h.fromBufferAttribute(s,v),d.fromBufferAttribute(s,S),m.fromBufferAttribute(s,W),u.sub(c),f.sub(c),d.sub(h),m.sub(h);const I=1/(d.x*m.y-m.x*d.y);isFinite(I)&&(b.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(I),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(I),o[v].add(b),o[S].add(b),o[W].add(b),l[v].add(g),l[S].add(g),l[W].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,S=M.length;v<S;++v){const W=M[v],I=W.start,N=W.count;for(let z=I,ee=I+N;z<ee;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const A=new K,E=new K,R=new K,x=new K;function P(v){R.fromBufferAttribute(r,v),x.copy(R);const S=o[v];A.copy(S),A.sub(R.multiplyScalar(R.dot(S))).normalize(),E.crossVectors(x,S);const I=E.dot(l[v])<0?-1:1;a.setXYZW(v,A.x,A.y,A.z,I)}for(let v=0,S=M.length;v<S;++v){const W=M[v],I=W.start,N=W.count;for(let z=I,ee=I+N;z<ee;z+=3)P(e.getX(z+0)),P(e.getX(z+1)),P(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new K,s=new K,a=new K,o=new K,l=new K,c=new K,u=new K,f=new K;if(e)for(let h=0,d=e.count;h<d;h+=3){const m=e.getX(h+0),b=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,m=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?d=l[b]*o.data.stride+o.offset:d=l[b]*u;for(let p=0;p<u;p++)h[m++]=c[d++]}return new gn(h,u,f)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _n,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $x{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=du,this.updateRanges=[],this.version=0,this.uuid=tr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new K;class Do{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ro("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new gn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Do(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ro("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let qx=0;class ws extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=hs,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ec,this.blendDst=Tc,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ec&&(i.blendSrc=this.blendSrc),this.blendDst!==Tc&&(i.blendDst=this.blendDst),this.blendEquation!==Sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Eh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fo extends ws{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Kr;const Os=new K,Zr=new K,Jr=new K,Qr=new Ge,ks=new Ge,Sm=new Pt,Na=new K,Bs=new K,Fa=new K,kh=new Ge,ql=new Ge,Bh=new Ge;class Yl extends hn{constructor(e=new fo){if(super(),this.isSprite=!0,this.type="Sprite",Kr===void 0){Kr=new _n;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new $x(t,5);Kr.setIndex([0,1,2,0,2,3]),Kr.setAttribute("position",new Do(i,3,0,!1)),Kr.setAttribute("uv",new Do(i,2,3,!1))}this.geometry=Kr,this.material=e,this.center=new Ge(.5,.5),this.count=1}raycast(e,t){e.camera===null&&at('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zr.setFromMatrixScale(this.matrixWorld),Sm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Jr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zr.multiplyScalar(-Jr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Oa(Na.set(-.5,-.5,0),Jr,a,Zr,r,s),Oa(Bs.set(.5,-.5,0),Jr,a,Zr,r,s),Oa(Fa.set(.5,.5,0),Jr,a,Zr,r,s),kh.set(0,0),ql.set(1,0),Bh.set(1,1);let o=e.ray.intersectTriangle(Na,Bs,Fa,!1,Os);if(o===null&&(Oa(Bs.set(-.5,.5,0),Jr,a,Zr,r,s),ql.set(0,1),o=e.ray.intersectTriangle(Na,Fa,Bs,!1,Os),o===null))return;const l=e.ray.origin.distanceTo(Os);l<e.near||l>e.far||t.push({distance:l,point:Os.clone(),uv:Pn.getInterpolation(Os,Na,Bs,Fa,kh,ql,Bh,new Ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Oa(n,e,t,i,r,s){Qr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(ks.x=s*Qr.x-r*Qr.y,ks.y=r*Qr.x+s*Qr.y):ks.copy(Qr),n.copy(e),n.x+=ks.x,n.y+=ks.y,n.applyMatrix4(Sm)}const Ei=new K,jl=new K,ka=new K,Xi=new K,Kl=new K,Ba=new K,Zl=new K;class bm{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){jl.copy(e).add(t).multiplyScalar(.5),ka.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(jl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ka),o=Xi.dot(this.direction),l=-Xi.dot(ka),c=Xi.lengthSq(),u=Math.abs(1-a*a);let f,h,d,m;if(u>0)if(f=a*l-o,h=a*o-l,m=s*u,f>=0)if(h>=-m)if(h<=m){const b=1/u;f*=b,h*=b,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-m?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=m?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(jl).addScaledVector(ka,h),d}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);const i=Ei.dot(this.direction),r=Ei.dot(Ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,i,r,s){Kl.subVectors(t,e),Ba.subVectors(i,e),Zl.crossVectors(Kl,Ba);let a=this.direction.dot(Zl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xi.subVectors(this.origin,e);const l=o*this.direction.dot(Ba.crossVectors(Xi,Ba));if(l<0)return null;const c=o*this.direction.dot(Kl.cross(Xi));if(c<0||l+c>a)return null;const u=-o*Xi.dot(Zl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ku extends ws{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Qp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zh=new Pt,hr=new bm,za=new tl,Vh=new K,Va=new K,Ha=new K,Ga=new K,Jl=new K,Wa=new K,Hh=new K,Xa=new K;class Yn extends hn{constructor(e=new _n,t=new Ku){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Wa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Jl.fromBufferAttribute(f,e),a?Wa.addScaledVector(Jl,u):Wa.addScaledVector(Jl.sub(t),u))}t.add(Wa)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(s),hr.copy(e.ray).recast(e.near),!(za.containsPoint(hr.origin)===!1&&(hr.intersectSphere(za,Vh)===null||hr.origin.distanceToSquared(Vh)>(e.far-e.near)**2))&&(zh.copy(s).invert(),hr.copy(e.ray).applyMatrix4(zh),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=h.length;m<b;m++){const g=h[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),A=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let E=M,R=A;E<R;E+=3){const x=o.getX(E),P=o.getX(E+1),v=o.getX(E+2);r=$a(this,p,e,i,c,u,f,x,P,v),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),b=Math.min(o.count,d.start+d.count);for(let g=m,p=b;g<p;g+=3){const M=o.getX(g),A=o.getX(g+1),E=o.getX(g+2);r=$a(this,a,e,i,c,u,f,M,A,E),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,b=h.length;m<b;m++){const g=h[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),A=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let E=M,R=A;E<R;E+=3){const x=E,P=E+1,v=E+2;r=$a(this,p,e,i,c,u,f,x,P,v),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const m=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let g=m,p=b;g<p;g+=3){const M=g,A=g+1,E=g+2;r=$a(this,a,e,i,c,u,f,M,A,E),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Yx(n,e,t,i,r,s,a,o){let l;if(e.side===pn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ir,o),l===null)return null;Xa.copy(o),Xa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Xa);return c<t.near||c>t.far?null:{distance:c,point:Xa.clone(),object:n}}function $a(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Va),n.getVertexPosition(l,Ha),n.getVertexPosition(c,Ga);const u=Yx(n,e,t,i,Va,Ha,Ga,Hh);if(u){const f=new K;Pn.getBarycoord(Hh,Va,Ha,Ga,f),r&&(u.uv=Pn.getInterpolatedAttribute(r,o,l,c,f,new Ge)),s&&(u.uv1=Pn.getInterpolatedAttribute(s,o,l,c,f,new Ge)),a&&(u.normal=Pn.getInterpolatedAttribute(a,o,l,c,f,new K),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new K,materialIndex:0};Pn.getNormal(Va,Ha,Ga,h.normal),u.face=h,u.barycoord=f}return u}class jx extends nn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Xt,u=Xt,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ql=new K,Kx=new K,Zx=new Ze;class _r{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ql.subVectors(i,t).cross(Kx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ql),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Zx.getNormalMatrix(e),r=this.coplanarPoint(Ql).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new tl,Jx=new Ge(.5,.5),qa=new K;class Mm{constructor(e=new _r,t=new _r,i=new _r,r=new _r,s=new _r,a=new _r){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=li,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],m=s[8],b=s[9],g=s[10],p=s[11],M=s[12],A=s[13],E=s[14],R=s[15];if(r[0].setComponents(c-a,d-u,p-m,R-M).normalize(),r[1].setComponents(c+a,d+u,p+m,R+M).normalize(),r[2].setComponents(c+o,d+f,p+b,R+A).normalize(),r[3].setComponents(c-o,d-f,p-b,R-A).normalize(),i)r[4].setComponents(l,h,g,E).normalize(),r[5].setComponents(c-l,d-h,p-g,R-E).normalize();else if(r[4].setComponents(c-l,d-h,p-g,R-E).normalize(),t===li)r[5].setComponents(c+l,d+h,p+g,R+E).normalize();else if(t===Ao)r[5].setComponents(l,h,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){dr.center.set(0,0,0);const t=Jx.distanceTo(e.center);return dr.radius=.7071067811865476+t,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(qa.x=r.normal.x>0?e.max.x:e.min.x,qa.y=r.normal.y>0?e.max.y:e.min.y,qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ym extends ws{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gh=new Pt,mu=new bm,Ya=new tl,ja=new K;class Qx extends hn{constructor(e=new _n,t=new ym){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(r),Ya.radius+=s,e.ray.intersectsSphere(Ya)===!1)return;Gh.copy(r).invert(),mu.copy(e.ray).applyMatrix4(Gh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=h,b=d;m<b;m++){const g=c.getX(m);ja.fromBufferAttribute(f,g),Wh(ja,g,l,r,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let m=h,b=d;m<b;m++)ja.fromBufferAttribute(f,m),Wh(ja,m,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Wh(n,e,t,i,r,s,a){const o=mu.distanceSqToPoint(n);if(o<t){const l=new K;mu.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Em extends nn{constructor(e=[],t=Dr,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nl extends nn{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fa extends nn{constructor(e,t,i=pi,r,s,a,o=Xt,l=Xt,c,u=Ui,f=1){if(u!==Ui&&u!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ju(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class eS extends fa{constructor(e,t=pi,i=Dr,r,s,a=Xt,o=Xt,l,c=Ui){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Tm extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class va extends _n{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;m("z","y","x",-1,-1,i,t,e,a,s,0),m("z","y","x",1,-1,i,t,-e,a,s,1),m("x","z","y",1,1,e,i,t,r,a,2),m("x","z","y",1,-1,e,i,-t,r,a,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ln(c,3)),this.setAttribute("normal",new Ln(u,3)),this.setAttribute("uv",new Ln(f,2));function m(b,g,p,M,A,E,R,x,P,v,S){const W=E/P,I=R/v,N=E/2,z=R/2,ee=x/2,X=P+1,$=v+1;let k=0,oe=0;const he=new K;for(let be=0;be<$;be++){const Se=be*I-z;for(let me=0;me<X;me++){const He=me*W-N;he[b]=He*M,he[g]=Se*A,he[p]=ee,c.push(he.x,he.y,he.z),he[b]=0,he[g]=0,he[p]=x>0?1:-1,u.push(he.x,he.y,he.z),f.push(me/P),f.push(1-be/v),k+=1}}for(let be=0;be<v;be++)for(let Se=0;Se<P;Se++){const me=h+Se+X*be,He=h+Se+X*(be+1),Qe=h+(Se+1)+X*(be+1),et=h+(Se+1)+X*be;l.push(me,He,et),l.push(He,Qe,et),oe+=6}o.addGroup(d,oe,S),d+=oe,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class il extends _n{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,d=[],m=[],b=[],g=[];for(let p=0;p<u;p++){const M=p*h-a;for(let A=0;A<c;A++){const E=A*f-s;m.push(E,-M,0),b.push(0,0,1),g.push(A/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const A=M+c*p,E=M+c*(p+1),R=M+1+c*(p+1),x=M+1+c*p;d.push(A,E,x),d.push(E,R,x)}this.setIndex(d),this.setAttribute("position",new Ln(m,3)),this.setAttribute("normal",new Ln(b,3)),this.setAttribute("uv",new Ln(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ms(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function on(n){const e={};for(let t=0;t<n.length;t++){const i=Ms(n[t]);for(const r in i)e[r]=i[r]}return e}function tS(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Io={clone:Ms,merge:on};var nS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $t extends ws{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nS,this.fragmentShader=iS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=tS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class rS extends $t{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sS extends ws{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aS extends ws{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ka=new K,Za=new Ts,Jn=new K;class Am extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ka,Za,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,Za,Jn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ka,Za,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,Za,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $i=new K,Xh=new Ge,$h=new Ge;class Cn extends Am{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pu*2*Math.atan(Math.tan(Cl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,Xh,$h),t.subVectors($h,Xh)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Zu extends Am{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const es=-90,ts=1;class oS extends hn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Cn(es,ts,e,t);r.layers=this.layers,this.add(r);const s=new Cn(es,ts,e,t);s.layers=this.layers,this.add(s);const a=new Cn(es,ts,e,t);a.layers=this.layers,this.add(a);const o=new Cn(es,ts,e,t);o.layers=this.layers,this.add(o);const l=new Cn(es,ts,e,t);l.layers=this.layers,this.add(l);const c=new Cn(es,ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ao)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class lS extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class cS{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=uS.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function uS(){this._document.hidden===!1&&this.reset()}class fS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,$e("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function qh(n,e,t,i){const r=hS(i);switch(t){case fm:return n*e;case dm:return n*e/r.components*r.byteLength;case Wu:return n*e/r.components*r.byteLength;case Ss:return n*e*2/r.components*r.byteLength;case Xu:return n*e*2/r.components*r.byteLength;case hm:return n*e*3/r.components*r.byteLength;case Vn:return n*e*4/r.components*r.byteLength;case $u:return n*e*4/r.components*r.byteLength;case oo:case lo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case co:case uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fc:case kc:return Math.max(n,16)*Math.max(e,8)/4;case Nc:case Oc:return Math.max(n,8)*Math.max(e,8)/2;case Bc:case zc:case Hc:case Gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Vc:case Wc:case Xc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $c:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Yc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case jc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case eu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case tu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case nu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case iu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ru:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case su:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case au:case ou:case lu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case cu:case uu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case fu:case hu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hS(n){switch(n){case Rn:case om:return{byteLength:1,components:1};case ca:case lm:case En:return{byteLength:2,components:1};case Hu:case Gu:return{byteLength:2,components:4};case pi:case Vu:case oi:return{byteLength:4,components:1};case cm:case um:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bu}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bu);function Cm(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function dS(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){const m=f[h],b=f[d];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++h,f[h]=b)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){const b=f[d];n.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var pS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mS=`#ifdef USE_ALPHAHASH
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
#endif`,gS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_S=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SS=`#ifdef USE_AOMAP
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
#endif`,bS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MS=`#ifdef USE_BATCHING
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
#endif`,yS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ES=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AS=`#ifdef USE_IRIDESCENCE
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
#endif`,CS=`#ifdef USE_BUMPMAP
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
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,US=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,NS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,FS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,OS=`#define PI 3.141592653589793
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
} // validated`,kS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,BS=`vec3 transformedNormal = objectNormal;
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
#endif`,zS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WS="gl_FragColor = linearToOutputTexel( gl_FragColor );",XS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$S=`#ifdef USE_ENVMAP
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
#endif`,qS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,YS=`#ifdef USE_ENVMAP
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
#endif`,jS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KS=`#ifdef USE_ENVMAP
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
#endif`,ZS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tb=`#ifdef USE_GRADIENTMAP
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
}`,nb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ib=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sb=`uniform bool receiveShadow;
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
#endif`,ab=`#ifdef USE_ENVMAP
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
#endif`,ob=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ub=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fb=`PhysicalMaterial material;
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
#endif`,hb=`uniform sampler2D dfgLUT;
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
}`,db=`
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
#endif`,pb=`#if defined( RE_IndirectDiffuse )
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
#endif`,mb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_b=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yb=`#if defined( USE_POINTS_UV )
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
#endif`,Eb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ab=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rb=`#ifdef USE_MORPHTARGETS
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
#endif`,Pb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Db=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ib=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fb=`#ifdef USE_NORMALMAP
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
#endif`,Ob=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$b=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jb=`float getShadowMask() {
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
}`,Qb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eM=`#ifdef USE_SKINNING
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
#endif`,tM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nM=`#ifdef USE_SKINNING
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
#endif`,iM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oM=`#ifdef USE_TRANSMISSION
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
#endif`,lM=`#ifdef USE_TRANSMISSION
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
#endif`,cM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pM=`uniform sampler2D t2D;
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
}`,mM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xM=`#include <common>
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
}`,SM=`#if DEPTH_PACKING == 3200
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
}`,bM=`#define DISTANCE
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
}`,MM=`#define DISTANCE
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
}`,yM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TM=`uniform float scale;
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
}`,wM=`uniform vec3 diffuse;
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
}`,AM=`#include <common>
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
}`,CM=`uniform vec3 diffuse;
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
}`,RM=`#define LAMBERT
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
}`,PM=`#define LAMBERT
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
}`,DM=`#define MATCAP
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
}`,IM=`#define MATCAP
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
}`,LM=`#define NORMAL
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
}`,UM=`#define NORMAL
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
}`,NM=`#define PHONG
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
}`,FM=`#define PHONG
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
}`,OM=`#define STANDARD
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
}`,kM=`#define STANDARD
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
}`,BM=`#define TOON
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
}`,zM=`#define TOON
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
}`,VM=`uniform float size;
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
}`,HM=`uniform vec3 diffuse;
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
}`,GM=`#include <common>
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
}`,WM=`uniform vec3 color;
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
}`,XM=`uniform float rotation;
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
}`,$M=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:pS,alphahash_pars_fragment:mS,alphamap_fragment:gS,alphamap_pars_fragment:_S,alphatest_fragment:vS,alphatest_pars_fragment:xS,aomap_fragment:SS,aomap_pars_fragment:bS,batching_pars_vertex:MS,batching_vertex:yS,begin_vertex:ES,beginnormal_vertex:TS,bsdfs:wS,iridescence_fragment:AS,bumpmap_pars_fragment:CS,clipping_planes_fragment:RS,clipping_planes_pars_fragment:PS,clipping_planes_pars_vertex:DS,clipping_planes_vertex:IS,color_fragment:LS,color_pars_fragment:US,color_pars_vertex:NS,color_vertex:FS,common:OS,cube_uv_reflection_fragment:kS,defaultnormal_vertex:BS,displacementmap_pars_vertex:zS,displacementmap_vertex:VS,emissivemap_fragment:HS,emissivemap_pars_fragment:GS,colorspace_fragment:WS,colorspace_pars_fragment:XS,envmap_fragment:$S,envmap_common_pars_fragment:qS,envmap_pars_fragment:YS,envmap_pars_vertex:jS,envmap_physical_pars_fragment:ab,envmap_vertex:KS,fog_vertex:ZS,fog_pars_vertex:JS,fog_fragment:QS,fog_pars_fragment:eb,gradientmap_pars_fragment:tb,lightmap_pars_fragment:nb,lights_lambert_fragment:ib,lights_lambert_pars_fragment:rb,lights_pars_begin:sb,lights_toon_fragment:ob,lights_toon_pars_fragment:lb,lights_phong_fragment:cb,lights_phong_pars_fragment:ub,lights_physical_fragment:fb,lights_physical_pars_fragment:hb,lights_fragment_begin:db,lights_fragment_maps:pb,lights_fragment_end:mb,logdepthbuf_fragment:gb,logdepthbuf_pars_fragment:_b,logdepthbuf_pars_vertex:vb,logdepthbuf_vertex:xb,map_fragment:Sb,map_pars_fragment:bb,map_particle_fragment:Mb,map_particle_pars_fragment:yb,metalnessmap_fragment:Eb,metalnessmap_pars_fragment:Tb,morphinstance_vertex:wb,morphcolor_vertex:Ab,morphnormal_vertex:Cb,morphtarget_pars_vertex:Rb,morphtarget_vertex:Pb,normal_fragment_begin:Db,normal_fragment_maps:Ib,normal_pars_fragment:Lb,normal_pars_vertex:Ub,normal_vertex:Nb,normalmap_pars_fragment:Fb,clearcoat_normal_fragment_begin:Ob,clearcoat_normal_fragment_maps:kb,clearcoat_pars_fragment:Bb,iridescence_pars_fragment:zb,opaque_fragment:Vb,packing:Hb,premultiplied_alpha_fragment:Gb,project_vertex:Wb,dithering_fragment:Xb,dithering_pars_fragment:$b,roughnessmap_fragment:qb,roughnessmap_pars_fragment:Yb,shadowmap_pars_fragment:jb,shadowmap_pars_vertex:Kb,shadowmap_vertex:Zb,shadowmask_pars_fragment:Jb,skinbase_vertex:Qb,skinning_pars_vertex:eM,skinning_vertex:tM,skinnormal_vertex:nM,specularmap_fragment:iM,specularmap_pars_fragment:rM,tonemapping_fragment:sM,tonemapping_pars_fragment:aM,transmission_fragment:oM,transmission_pars_fragment:lM,uv_pars_fragment:cM,uv_pars_vertex:uM,uv_vertex:fM,worldpos_vertex:hM,background_vert:dM,background_frag:pM,backgroundCube_vert:mM,backgroundCube_frag:gM,cube_vert:_M,cube_frag:vM,depth_vert:xM,depth_frag:SM,distance_vert:bM,distance_frag:MM,equirect_vert:yM,equirect_frag:EM,linedashed_vert:TM,linedashed_frag:wM,meshbasic_vert:AM,meshbasic_frag:CM,meshlambert_vert:RM,meshlambert_frag:PM,meshmatcap_vert:DM,meshmatcap_frag:IM,meshnormal_vert:LM,meshnormal_frag:UM,meshphong_vert:NM,meshphong_frag:FM,meshphysical_vert:OM,meshphysical_frag:kM,meshtoon_vert:BM,meshtoon_frag:zM,points_vert:VM,points_frag:HM,shadow_vert:GM,shadow_frag:WM,sprite_vert:XM,sprite_frag:$M},Te={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ii={basic:{uniforms:on([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:on([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:on([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:on([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:on([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:on([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:on([Te.points,Te.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:on([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:on([Te.common,Te.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:on([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:on([Te.sprite,Te.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:on([Te.common,Te.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:on([Te.lights,Te.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};ii.physical={uniforms:on([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Ja={r:0,b:0,g:0},pr=new Ni,qM=new Pt;function YM(n,e,t,i,r,s){const a=new Xe(0);let o=r===!0?0:1,l,c,u=null,f=0,h=null;function d(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){const E=M.backgroundBlurriness>0;A=e.get(A,E)}return A}function m(M){let A=!1;const E=d(M);E===null?g(a,o):E&&E.isColor&&(g(E,1),A=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(M,A){const E=d(A);E&&(E.isCubeTexture||E.mapping===el)?(c===void 0&&(c=new Yn(new va(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:Ms(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,x,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),pr.copy(A.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(qM.makeRotationFromEuler(pr)),c.material.toneMapped=ot.getTransfer(E.colorSpace)!==pt,(u!==E||f!==E.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,h=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Yn(new il(2,2),new $t({name:"BackgroundMaterial",uniforms:Ms(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=ot.getTransfer(E.colorSpace)!==pt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=E,f=E.version,h=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,A){M.getRGB(Ja,wm(n)),t.buffers.color.setClear(Ja.r,Ja.g,Ja.b,A,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:m,addToRenderList:b,dispose:p}}function jM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(I,N,z,ee,X){let $=!1;const k=f(I,ee,z,N);s!==k&&(s=k,c(s.object)),$=d(I,ee,z,X),$&&m(I,ee,z,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,E(I,N,z,ee),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(I){return n.bindVertexArray(I)}function u(I){return n.deleteVertexArray(I)}function f(I,N,z,ee){const X=ee.wireframe===!0;let $=i[N.id];$===void 0&&($={},i[N.id]=$);const k=I.isInstancedMesh===!0?I.id:0;let oe=$[k];oe===void 0&&(oe={},$[k]=oe);let he=oe[z.id];he===void 0&&(he={},oe[z.id]=he);let be=he[X];return be===void 0&&(be=h(l()),he[X]=be),be}function h(I){const N=[],z=[],ee=[];for(let X=0;X<t;X++)N[X]=0,z[X]=0,ee[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:ee,object:I,attributes:{},index:null}}function d(I,N,z,ee){const X=s.attributes,$=N.attributes;let k=0;const oe=z.getAttributes();for(const he in oe)if(oe[he].location>=0){const Se=X[he];let me=$[he];if(me===void 0&&(he==="instanceMatrix"&&I.instanceMatrix&&(me=I.instanceMatrix),he==="instanceColor"&&I.instanceColor&&(me=I.instanceColor)),Se===void 0||Se.attribute!==me||me&&Se.data!==me.data)return!0;k++}return s.attributesNum!==k||s.index!==ee}function m(I,N,z,ee){const X={},$=N.attributes;let k=0;const oe=z.getAttributes();for(const he in oe)if(oe[he].location>=0){let Se=$[he];Se===void 0&&(he==="instanceMatrix"&&I.instanceMatrix&&(Se=I.instanceMatrix),he==="instanceColor"&&I.instanceColor&&(Se=I.instanceColor));const me={};me.attribute=Se,Se&&Se.data&&(me.data=Se.data),X[he]=me,k++}s.attributes=X,s.attributesNum=k,s.index=ee}function b(){const I=s.newAttributes;for(let N=0,z=I.length;N<z;N++)I[N]=0}function g(I){p(I,0)}function p(I,N){const z=s.newAttributes,ee=s.enabledAttributes,X=s.attributeDivisors;z[I]=1,ee[I]===0&&(n.enableVertexAttribArray(I),ee[I]=1),X[I]!==N&&(n.vertexAttribDivisor(I,N),X[I]=N)}function M(){const I=s.newAttributes,N=s.enabledAttributes;for(let z=0,ee=N.length;z<ee;z++)N[z]!==I[z]&&(n.disableVertexAttribArray(z),N[z]=0)}function A(I,N,z,ee,X,$,k){k===!0?n.vertexAttribIPointer(I,N,z,X,$):n.vertexAttribPointer(I,N,z,ee,X,$)}function E(I,N,z,ee){b();const X=ee.attributes,$=z.getAttributes(),k=N.defaultAttributeValues;for(const oe in $){const he=$[oe];if(he.location>=0){let be=X[oe];if(be===void 0&&(oe==="instanceMatrix"&&I.instanceMatrix&&(be=I.instanceMatrix),oe==="instanceColor"&&I.instanceColor&&(be=I.instanceColor)),be!==void 0){const Se=be.normalized,me=be.itemSize,He=e.get(be);if(He===void 0)continue;const Qe=He.buffer,et=He.type,se=He.bytesPerElement,B=et===n.INT||et===n.UNSIGNED_INT||be.gpuType===Vu;if(be.isInterleavedBufferAttribute){const O=be.data,q=O.stride,ce=be.offset;if(O.isInstancedInterleavedBuffer){for(let de=0;de<he.locationSize;de++)p(he.location+de,O.meshPerAttribute);I.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let de=0;de<he.locationSize;de++)g(he.location+de);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let de=0;de<he.locationSize;de++)A(he.location+de,me/he.locationSize,et,Se,q*se,(ce+me/he.locationSize*de)*se,B)}else{if(be.isInstancedBufferAttribute){for(let O=0;O<he.locationSize;O++)p(he.location+O,be.meshPerAttribute);I.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let O=0;O<he.locationSize;O++)g(he.location+O);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let O=0;O<he.locationSize;O++)A(he.location+O,me/he.locationSize,et,Se,me*se,me/he.locationSize*O*se,B)}}else if(k!==void 0){const Se=k[oe];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(he.location,Se);break;case 3:n.vertexAttrib3fv(he.location,Se);break;case 4:n.vertexAttrib4fv(he.location,Se);break;default:n.vertexAttrib1fv(he.location,Se)}}}}M()}function R(){S();for(const I in i){const N=i[I];for(const z in N){const ee=N[z];for(const X in ee){const $=ee[X];for(const k in $)u($[k].object),delete $[k];delete ee[X]}}delete i[I]}}function x(I){if(i[I.id]===void 0)return;const N=i[I.id];for(const z in N){const ee=N[z];for(const X in ee){const $=ee[X];for(const k in $)u($[k].object),delete $[k];delete ee[X]}}delete i[I.id]}function P(I){for(const N in i){const z=i[N];for(const ee in z){const X=z[ee];if(X[I.id]===void 0)continue;const $=X[I.id];for(const k in $)u($[k].object),delete $[k];delete X[I.id]}}}function v(I){for(const N in i){const z=i[N],ee=I.isInstancedMesh===!0?I.id:0,X=z[ee];if(X!==void 0){for(const $ in X){const k=X[$];for(const oe in k)u(k[oe].object),delete k[oe];delete X[$]}delete z[ee],Object.keys(z).length===0&&delete i[N]}}}function S(){W(),a=!0,s!==r&&(s=r,c(s.object))}function W(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:S,resetDefaultState:W,dispose:R,releaseStatesOfGeometry:x,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:g,disableUnusedAttributes:M}}function KM(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let m=0;m<f;m++)d+=u[m];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)a(c[m],u[m],h[m]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let m=0;for(let b=0;b<f;b++)m+=u[b]*h[b];t.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ZM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==Vn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const v=P===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Rn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==oi&&!v)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&($e("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=n.getParameter(n.MAX_SAMPLES),x=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:E,maxSamples:R,samples:x}}function JM(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new _r,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const m=f.clippingPlanes,b=f.clipIntersection,g=f.clipShadows,p=n.get(f);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{const M=s?0:i,A=M*4;let E=p.clippingState||null;l.value=E,E=u(m,h,A,d);for(let R=0;R!==A;++R)E[R]=t[R];p.clippingState=E,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,m){const b=f!==null?f.length:0;let g=null;if(b!==0){if(g=l.value,m!==!0||g===null){const p=d+b*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let A=0,E=d;A!==b;++A,E+=4)a.copy(f[A]).applyMatrix4(M,o),a.normal.toArray(g,E),g[E+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}const Qi=4,Yh=[.125,.215,.35,.446,.526,.582],br=20,QM=256,zs=new Zu,jh=new Xe;let ec=null,tc=0,nc=0,ic=!1;const ey=new K;class Kh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=ey}=s;ec=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ec,tc,nc),this._renderer.xr.enabled=ic,e.scissorTest=!1,ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Dr||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ec=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:En,format:Vn,colorSpace:bs,depthBuffer:!1},r=Zh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zh(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ty(s)),this._blurMaterial=iy(s,e,t),this._ggxMaterial=ny(s,e,t)}return r}_compileMaterial(e){const t=new Yn(new _n,e);this._renderer.compile(t,zs)}_sceneToCubeUV(e,t,i,r,s){const l=new Cn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(jh),f.toneMapping=fi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yn(new va,new Ku({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,g=b.material;let p=!1;const M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,p=!0):(g.color.copy(jh),p=!0);for(let A=0;A<6;A++){const E=A%3;E===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[A],s.y,s.z)):E===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[A]));const R=this._cubeSize;ns(r,E*R,A>2?R:0,R,R),f.setRenderTarget(r),p&&f.render(b,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Dr||e.mapping===xs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ns(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,zs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:m}=this,b=this._sizeLods[i],g=3*b*(i>m-Qi?i-m+Qi:0),p=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,ns(s,g,p,3*b,2*b),r.setRenderTarget(s),r.render(o,zs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,ns(e,g,p,3*b,2*b),r.setRenderTarget(e),r.render(o,zs)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&at("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*br-1),b=s/m,g=isFinite(s)?1+Math.floor(u*b):br;g>br&&$e(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${br}`);const p=[];let M=0;for(let P=0;P<br;++P){const v=P/b,S=Math.exp(-v*v/2);p.push(S),P===0?M+=S:P<g&&(M+=2*S)}for(let P=0;P<p.length;P++)p[P]=p[P]/M;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:A}=this;h.dTheta.value=m,h.mipInt.value=A-i;const E=this._sizeLods[r],R=3*E*(r>A-Qi?r-A+Qi:0),x=4*(this._cubeSize-E);ns(t,R,x,3*E,2*E),l.setRenderTarget(t),l.render(f,zs)}}function ty(n){const e=[],t=[],i=[];let r=n;const s=n-Qi+1+Yh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Qi?l=Yh[a-n+Qi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,m=6,b=3,g=2,p=1,M=new Float32Array(b*m*d),A=new Float32Array(g*m*d),E=new Float32Array(p*m*d);for(let x=0;x<d;x++){const P=x%3*2/3-1,v=x>2?0:-1,S=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];M.set(S,b*m*x),A.set(h,g*m*x);const W=[x,x,x,x,x,x];E.set(W,p*m*x)}const R=new _n;R.setAttribute("position",new gn(M,b)),R.setAttribute("uv",new gn(A,g)),R.setAttribute("faceIndex",new gn(E,p)),i.push(new Yn(R,null)),r>Qi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Zh(n,e,t){const i=new mn(n,e,t);return i.texture.mapping=el,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ns(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ny(n,e,t){return new $t({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:QM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function iy(n,e,t){const i=new Float32Array(br),r=new K(0,1,0);return new $t({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Jh(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Qh(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function rl(){return`

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
	`}class Rm extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Em(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new va(5,5,5),s=new $t({name:"CubemapFromEquirect",uniforms:Ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:ui});s.uniforms.tEquirect.value=t;const a=new Yn(r,s),o=t.minFilter;return t.minFilter===Tr&&(t.minFilter=Qt),new oS(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function ry(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,d=!1){return h==null?null:d?a(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Tl||d===wl)if(e.has(h)){const m=e.get(h).texture;return o(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const b=new Rm(m.height);return b.fromEquirectangularTexture(n,h),e.set(h,b),h.addEventListener("dispose",c),o(b.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,m=d===Tl||d===wl,b=d===Dr||d===xs;if(m||b){let g=t.get(h);const p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Kh(n)),g=m?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const M=h.image;return m&&M&&M.height>0||b&&M&&l(M)?(i===null&&(i=new Kh(n)),g=m?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,d){return d===Tl?h.mapping=Dr:d===wl&&(h.mapping=xs),h}function l(h){let d=0;const m=6;for(let b=0;b<m;b++)h[b]!==void 0&&d++;return d===m}function c(h){const d=h.target;d.removeEventListener("dispose",c);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function sy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Po("WebGLRenderer: "+i+" extension not supported."),r}}}function ay(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,m=f.attributes.position;let b=0;if(m===void 0)return;if(d!==null){const M=d.array;b=d.version;for(let A=0,E=M.length;A<E;A+=3){const R=M[A+0],x=M[A+1],P=M[A+2];h.push(R,x,x,P,P,R)}}else{const M=m.array;b=m.version;for(let A=0,E=M.length/3-1;A<E;A+=3){const R=A+0,x=A+1,P=A+2;h.push(R,x,x,P,P,R)}}const g=new(m.count>=65535?xm:vm)(h,1);g.version=b;const p=s.get(f);p&&e.remove(p),s.set(f,g)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function oy(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*a),t.update(d,i,1)}function c(h,d,m){m!==0&&(n.drawElementsInstanced(i,d,s,h*a,m),t.update(d,i,m))}function u(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,i,1)}function f(h,d,m,b){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)c(h[p]/a,d[p],b[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,b,0,m);let p=0;for(let M=0;M<m;M++)p+=d[M]*b[M];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function ly(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:at("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function cy(n,e,t){const i=new WeakMap,r=new It;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let W=function(){v.dispose(),i.delete(o),o.removeEventListener("dispose",W)};var d=W;h!==void 0&&h.texture.dispose();const m=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let E=0;m===!0&&(E=1),b===!0&&(E=2),g===!0&&(E=3);let R=o.attributes.position.count*E,x=1;R>e.maxTextureSize&&(x=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const P=new Float32Array(R*x*4*f),v=new mm(P,R,x,f);v.type=oi,v.needsUpdate=!0;const S=E*4;for(let I=0;I<f;I++){const N=p[I],z=M[I],ee=A[I],X=R*x*4*I;for(let $=0;$<N.count;$++){const k=$*S;m===!0&&(r.fromBufferAttribute(N,$),P[X+k+0]=r.x,P[X+k+1]=r.y,P[X+k+2]=r.z,P[X+k+3]=0),b===!0&&(r.fromBufferAttribute(z,$),P[X+k+4]=r.x,P[X+k+5]=r.y,P[X+k+6]=r.z,P[X+k+7]=0),g===!0&&(r.fromBufferAttribute(ee,$),P[X+k+8]=r.x,P[X+k+9]=r.y,P[X+k+10]=r.z,P[X+k+11]=ee.itemSize===4?r.w:1)}}h={count:f,texture:v,size:new Ge(R,x)},i.set(o,h),o.addEventListener("dispose",W)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const b=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",b),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function uy(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const fy={[em]:"LINEAR_TONE_MAPPING",[tm]:"REINHARD_TONE_MAPPING",[nm]:"CINEON_TONE_MAPPING",[zu]:"ACES_FILMIC_TONE_MAPPING",[rm]:"AGX_TONE_MAPPING",[sm]:"NEUTRAL_TONE_MAPPING",[im]:"CUSTOM_TONE_MAPPING"};function hy(n,e,t,i,r){const s=new mn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new mn(e,t,{type:En,depthBuffer:!1,stencilBuffer:!1}),o=new _n;o.setAttribute("position",new Ln([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ln([0,2,0,0,2,0],2));const l=new rS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Yn(o,l),u=new Zu(-1,1,1,-1,0,1);let f=null,h=null,d=!1,m,b=null,g=[],p=!1;this.setSize=function(M,A){s.setSize(M,A),a.setSize(M,A);for(let E=0;E<g.length;E++){const R=g[E];R.setSize&&R.setSize(M,A)}},this.setEffects=function(M){g=M,p=g.length>0&&g[0].isRenderPass===!0;const A=s.width,E=s.height;for(let R=0;R<g.length;R++){const x=g[R];x.setSize&&x.setSize(A,E)}},this.begin=function(M,A){if(d||M.toneMapping===fi&&g.length===0)return!1;if(b=A,A!==null){const E=A.width,R=A.height;(s.width!==E||s.height!==R)&&this.setSize(E,R)}return p===!1&&M.setRenderTarget(s),m=M.toneMapping,M.toneMapping=fi,!0},this.hasRenderPass=function(){return p},this.end=function(M,A){M.toneMapping=m,d=!0;let E=s,R=a;for(let x=0;x<g.length;x++){const P=g[x];if(P.enabled!==!1&&(P.render(M,R,E,A),P.needsSwap!==!1)){const v=E;E=R,R=v}}if(f!==M.outputColorSpace||h!==M.toneMapping){f=M.outputColorSpace,h=M.toneMapping,l.defines={},ot.getTransfer(f)===pt&&(l.defines.SRGB_TRANSFER="");const x=fy[h];x&&(l.defines[x]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(b),M.render(c,u),b=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Pm=new nn,gu=new fa(1,1),Dm=new mm,Im=new Ux,Lm=new Em,ed=[],td=[],nd=new Float32Array(16),id=new Float32Array(9),rd=new Float32Array(4);function As(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ed[r];if(s===void 0&&(s=new Float32Array(r),ed[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function sl(n,e){let t=td[e];t===void 0&&(t=new Int32Array(e),td[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function dy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function py(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function my(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function gy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function _y(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,i))return;rd.set(i),n.uniformMatrix2fv(this.addr,!1,rd),kt(t,i)}}function vy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,i))return;id.set(i),n.uniformMatrix3fv(this.addr,!1,id),kt(t,i)}}function xy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,i))return;nd.set(i),n.uniformMatrix4fv(this.addr,!1,nd),kt(t,i)}}function Sy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function by(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function My(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function yy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function Ey(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ty(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function wy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function Ay(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function Cy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(gu.compareFunction=t.isReversedDepthBuffer()?Yu:qu,s=gu):s=Pm,t.setTexture2D(e||s,r)}function Ry(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Im,r)}function Py(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Lm,r)}function Dy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Dm,r)}function Iy(n){switch(n){case 5126:return dy;case 35664:return py;case 35665:return my;case 35666:return gy;case 35674:return _y;case 35675:return vy;case 35676:return xy;case 5124:case 35670:return Sy;case 35667:case 35671:return by;case 35668:case 35672:return My;case 35669:case 35673:return yy;case 5125:return Ey;case 36294:return Ty;case 36295:return wy;case 36296:return Ay;case 35678:case 36198:case 36298:case 36306:case 35682:return Cy;case 35679:case 36299:case 36307:return Ry;case 35680:case 36300:case 36308:case 36293:return Py;case 36289:case 36303:case 36311:case 36292:return Dy}}function Ly(n,e){n.uniform1fv(this.addr,e)}function Uy(n,e){const t=As(e,this.size,2);n.uniform2fv(this.addr,t)}function Ny(n,e){const t=As(e,this.size,3);n.uniform3fv(this.addr,t)}function Fy(n,e){const t=As(e,this.size,4);n.uniform4fv(this.addr,t)}function Oy(n,e){const t=As(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ky(n,e){const t=As(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function By(n,e){const t=As(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zy(n,e){n.uniform1iv(this.addr,e)}function Vy(n,e){n.uniform2iv(this.addr,e)}function Hy(n,e){n.uniform3iv(this.addr,e)}function Gy(n,e){n.uniform4iv(this.addr,e)}function Wy(n,e){n.uniform1uiv(this.addr,e)}function Xy(n,e){n.uniform2uiv(this.addr,e)}function $y(n,e){n.uniform3uiv(this.addr,e)}function qy(n,e){n.uniform4uiv(this.addr,e)}function Yy(n,e,t){const i=this.cache,r=e.length,s=sl(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=gu:a=Pm;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function jy(n,e,t){const i=this.cache,r=e.length,s=sl(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Im,s[a])}function Ky(n,e,t){const i=this.cache,r=e.length,s=sl(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Lm,s[a])}function Zy(n,e,t){const i=this.cache,r=e.length,s=sl(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Dm,s[a])}function Jy(n){switch(n){case 5126:return Ly;case 35664:return Uy;case 35665:return Ny;case 35666:return Fy;case 35674:return Oy;case 35675:return ky;case 35676:return By;case 5124:case 35670:return zy;case 35667:case 35671:return Vy;case 35668:case 35672:return Hy;case 35669:case 35673:return Gy;case 5125:return Wy;case 36294:return Xy;case 36295:return $y;case 36296:return qy;case 35678:case 36198:case 36298:case 36306:case 35682:return Yy;case 35679:case 36299:case 36307:return jy;case 35680:case 36300:case 36308:case 36293:return Ky;case 36289:case 36303:case 36311:case 36292:return Zy}}class Qy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Iy(t.type)}}class eE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jy(t.type)}}class tE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const rc=/(\w+)(\])?(\[|\.)?/g;function sd(n,e){n.seq.push(e),n.map[e.id]=e}function nE(n,e,t){const i=n.name,r=i.length;for(rc.lastIndex=0;;){const s=rc.exec(i),a=rc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){sd(t,c===void 0?new Qy(o,n,e):new eE(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new tE(o),sd(t,f)),t=f}}}class ho{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);nE(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function ad(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const iE=37297;let rE=0;function sE(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const od=new Ze;function aE(n){ot._getMatrix(od,ot.workingColorSpace,n);const e=`mat3( ${od.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(n)){case wo:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ld(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+sE(n.getShaderSource(e),o)}else return s}function oE(n,e){const t=aE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const lE={[em]:"Linear",[tm]:"Reinhard",[nm]:"Cineon",[zu]:"ACESFilmic",[rm]:"AgX",[sm]:"Neutral",[im]:"Custom"};function cE(n,e){const t=lE[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qa=new K;function uE(){ot.getLuminanceCoefficients(Qa);const n=Qa.x.toFixed(4),e=Qa.y.toFixed(4),t=Qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function hE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Xs(n){return n!==""}function cd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ud(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pE=/^[ \t]*#include +<([\w\d./]+)>/gm;function _u(n){return n.replace(pE,gE)}const mE=new Map;function gE(n,e){let t=Je[e];if(t===void 0){const i=mE.get(e);if(i!==void 0)t=Je[i],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _u(t)}const _E=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fd(n){return n.replace(_E,vE)}function vE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hd(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const xE={[ao]:"SHADOWMAP_TYPE_PCF",[Ws]:"SHADOWMAP_TYPE_VSM"};function SE(n){return xE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bE={[Dr]:"ENVMAP_TYPE_CUBE",[xs]:"ENVMAP_TYPE_CUBE",[el]:"ENVMAP_TYPE_CUBE_UV"};function ME(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":bE[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const yE={[xs]:"ENVMAP_MODE_REFRACTION"};function EE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":yE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const TE={[Qp]:"ENVMAP_BLENDING_MULTIPLY",[hx]:"ENVMAP_BLENDING_MIX",[dx]:"ENVMAP_BLENDING_ADD"};function wE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":TE[n.combine]||"ENVMAP_BLENDING_NONE"}function AE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function CE(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=SE(t),c=ME(t),u=EE(t),f=wE(t),h=AE(t),d=fE(t),m=hE(s),b=r.createProgram();let g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Xs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Xs).join(`
`),p.length>0&&(p+=`
`)):(g=[hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),p=[hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?Je.tonemapping_pars_fragment:"",t.toneMapping!==fi?cE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,oE("linearToOutputTexel",t.outputColorSpace),uE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),a=_u(a),a=cd(a,t),a=ud(a,t),o=_u(o),o=cd(o,t),o=ud(o,t),a=fd(a),o=fd(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=M+g+a,E=M+p+o,R=ad(r,r.VERTEX_SHADER,A),x=ad(r,r.FRAGMENT_SHADER,E);r.attachShader(b,R),r.attachShader(b,x),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function P(I){if(n.debug.checkShaderErrors){const N=r.getProgramInfoLog(b)||"",z=r.getShaderInfoLog(R)||"",ee=r.getShaderInfoLog(x)||"",X=N.trim(),$=z.trim(),k=ee.trim();let oe=!0,he=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(oe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,b,R,x);else{const be=ld(r,R,"vertex"),Se=ld(r,x,"fragment");at("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+X+`
`+be+`
`+Se)}else X!==""?$e("WebGLProgram: Program Info Log:",X):($===""||k==="")&&(he=!1);he&&(I.diagnostics={runnable:oe,programLog:X,vertexShader:{log:$,prefix:g},fragmentShader:{log:k,prefix:p}})}r.deleteShader(R),r.deleteShader(x),v=new ho(r,b),S=dE(r,b)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let W=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=r.getProgramParameter(b,iE)),W},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rE++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=R,this.fragmentShader=x,this}let RE=0;class PE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new DE(e),t.set(e,i)),i}}class DE{constructor(e){this.id=RE++,this.code=e,this.usedTimes=0}}function IE(n,e,t,i,r,s){const a=new gm,o=new PE,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function b(v,S,W,I,N){const z=I.fog,ee=N.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,k=e.get(v.envMap||X,$),oe=k&&k.mapping===el?k.image.height:null,he=d[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&$e("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const be=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Se=be!==void 0?be.length:0;let me=0;ee.morphAttributes.position!==void 0&&(me=1),ee.morphAttributes.normal!==void 0&&(me=2),ee.morphAttributes.color!==void 0&&(me=3);let He,Qe,et,se;if(he){const dt=ii[he];He=dt.vertexShader,Qe=dt.fragmentShader}else He=v.vertexShader,Qe=v.fragmentShader,o.update(v),et=o.getVertexShaderID(v),se=o.getFragmentShaderID(v);const B=n.getRenderTarget(),O=n.state.buffers.depth.getReversed(),q=N.isInstancedMesh===!0,ce=N.isBatchedMesh===!0,de=!!v.map,D=!!v.matcap,w=!!k,U=!!v.aoMap,H=!!v.lightMap,L=!!v.bumpMap,j=!!v.normalMap,C=!!v.displacementMap,fe=!!v.emissiveMap,re=!!v.metalnessMap,ie=!!v.roughnessMap,ue=v.anisotropy>0,y=v.clearcoat>0,_=v.dispersion>0,F=v.iridescence>0,Z=v.sheen>0,ae=v.transmission>0,J=ue&&!!v.anisotropyMap,ye=y&&!!v.clearcoatMap,ge=y&&!!v.clearcoatNormalMap,Le=y&&!!v.clearcoatRoughnessMap,ke=F&&!!v.iridescenceMap,pe=F&&!!v.iridescenceThicknessMap,ve=Z&&!!v.sheenColorMap,Ee=Z&&!!v.sheenRoughnessMap,Ce=!!v.specularMap,Re=!!v.specularColorMap,je=!!v.specularIntensityMap,V=ae&&!!v.transmissionMap,Me=ae&&!!v.thicknessMap,xe=!!v.gradientMap,Ue=!!v.alphaMap,_e=v.alphaTest>0,le=!!v.alphaHash,Fe=!!v.extensions;let qe=fi;v.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(qe=n.toneMapping);const bt={shaderID:he,shaderType:v.type,shaderName:v.name,vertexShader:He,fragmentShader:Qe,defines:v.defines,customVertexShaderID:et,customFragmentShaderID:se,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:ce,batchingColor:ce&&N._colorsTexture!==null,instancing:q,instancingColor:q&&N.instanceColor!==null,instancingMorph:q&&N.morphTexture!==null,outputColorSpace:B===null?n.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:bs,alphaToCoverage:!!v.alphaToCoverage,map:de,matcap:D,envMap:w,envMapMode:w&&k.mapping,envMapCubeUVHeight:oe,aoMap:U,lightMap:H,bumpMap:L,normalMap:j,displacementMap:C,emissiveMap:fe,normalMapObjectSpace:j&&v.normalMapType===_x,normalMapTangentSpace:j&&v.normalMapType===gx,metalnessMap:re,roughnessMap:ie,anisotropy:ue,anisotropyMap:J,clearcoat:y,clearcoatMap:ye,clearcoatNormalMap:ge,clearcoatRoughnessMap:Le,dispersion:_,iridescence:F,iridescenceMap:ke,iridescenceThicknessMap:pe,sheen:Z,sheenColorMap:ve,sheenRoughnessMap:Ee,specularMap:Ce,specularColorMap:Re,specularIntensityMap:je,transmission:ae,transmissionMap:V,thicknessMap:Me,gradientMap:xe,opaque:v.transparent===!1&&v.blending===hs&&v.alphaToCoverage===!1,alphaMap:Ue,alphaTest:_e,alphaHash:le,combine:v.combine,mapUv:de&&m(v.map.channel),aoMapUv:U&&m(v.aoMap.channel),lightMapUv:H&&m(v.lightMap.channel),bumpMapUv:L&&m(v.bumpMap.channel),normalMapUv:j&&m(v.normalMap.channel),displacementMapUv:C&&m(v.displacementMap.channel),emissiveMapUv:fe&&m(v.emissiveMap.channel),metalnessMapUv:re&&m(v.metalnessMap.channel),roughnessMapUv:ie&&m(v.roughnessMap.channel),anisotropyMapUv:J&&m(v.anisotropyMap.channel),clearcoatMapUv:ye&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ge&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(v.sheenRoughnessMap.channel),specularMapUv:Ce&&m(v.specularMap.channel),specularColorMapUv:Re&&m(v.specularColorMap.channel),specularIntensityMapUv:je&&m(v.specularIntensityMap.channel),transmissionMapUv:V&&m(v.transmissionMap.channel),thicknessMapUv:Me&&m(v.thicknessMap.channel),alphaMapUv:Ue&&m(v.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(j||ue),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!ee.attributes.uv&&(de||Ue),fog:!!z,useFog:v.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||ee.attributes.normal===void 0&&j===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:O,skinning:N.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:me,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:qe,decodeVideoTexture:de&&v.map.isVideoTexture===!0&&ot.getTransfer(v.map.colorSpace)===pt,decodeVideoTextureEmissive:fe&&v.emissiveMap.isVideoTexture===!0&&ot.getTransfer(v.emissiveMap.colorSpace)===pt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ri,flipSided:v.side===pn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Fe&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&v.extensions.multiDraw===!0||ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function g(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const W in v.defines)S.push(W),S.push(v.defines[W]);return v.isRawShaderMaterial===!1&&(p(S,v),M(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function p(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function M(v,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),v.push(a.mask)}function A(v){const S=d[v.type];let W;if(S){const I=ii[S];W=Io.clone(I.uniforms)}else W=v.uniforms;return W}function E(v,S){let W=u.get(S);return W!==void 0?++W.usedTimes:(W=new CE(n,S,v,r),c.push(W),u.set(S,W)),W}function R(v){if(--v.usedTimes===0){const S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function x(v){o.remove(v)}function P(){o.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:A,acquireProgram:E,releaseProgram:R,releaseShaderCache:x,programs:c,dispose:P}}function LE(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function UE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function dd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function pd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,m,b,g,p){let M=n[e];return M===void 0?(M={id:h.id,object:h,geometry:d,material:m,materialVariant:a(h),groupOrder:b,renderOrder:h.renderOrder,z:g,group:p},n[e]=M):(M.id=h.id,M.object=h,M.geometry=d,M.material=m,M.materialVariant=a(h),M.groupOrder=b,M.renderOrder=h.renderOrder,M.z=g,M.group=p),e++,M}function l(h,d,m,b,g,p){const M=o(h,d,m,b,g,p);m.transmission>0?i.push(M):m.transparent===!0?r.push(M):t.push(M)}function c(h,d,m,b,g,p){const M=o(h,d,m,b,g,p);m.transmission>0?i.unshift(M):m.transparent===!0?r.unshift(M):t.unshift(M)}function u(h,d){t.length>1&&t.sort(h||UE),i.length>1&&i.sort(d||dd),r.length>1&&r.sort(d||dd)}function f(){for(let h=e,d=n.length;h<d;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function NE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new pd,n.set(i,[a])):r>=s.length?(a=new pd,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function FE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Xe};break;case"SpotLight":t={position:new K,direction:new K,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new K,halfWidth:new K,halfHeight:new K};break}return n[e.id]=t,t}}}function OE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let kE=0;function BE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function zE(n){const e=new FE,t=OE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new K);const r=new K,s=new Pt,a=new Pt;function o(c){let u=0,f=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,m=0,b=0,g=0,p=0,M=0,A=0,E=0,R=0,x=0,P=0;c.sort(BE);for(let S=0,W=c.length;S<W;S++){const I=c[S],N=I.color,z=I.intensity,ee=I.distance;let X=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ss?X=I.shadow.map.texture:X=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=N.r*z,f+=N.g*z,h+=N.b*z;else if(I.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(I.sh.coefficients[$],z);P++}else if(I.isDirectionalLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const k=I.shadow,oe=t.get(I);oe.shadowIntensity=k.intensity,oe.shadowBias=k.bias,oe.shadowNormalBias=k.normalBias,oe.shadowRadius=k.radius,oe.shadowMapSize=k.mapSize,i.directionalShadow[d]=oe,i.directionalShadowMap[d]=X,i.directionalShadowMatrix[d]=I.shadow.matrix,M++}i.directional[d]=$,d++}else if(I.isSpotLight){const $=e.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(N).multiplyScalar(z),$.distance=ee,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,i.spot[b]=$;const k=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,k.updateMatrices(I),I.castShadow&&x++),i.spotLightMatrix[b]=k.matrix,I.castShadow){const oe=t.get(I);oe.shadowIntensity=k.intensity,oe.shadowBias=k.bias,oe.shadowNormalBias=k.normalBias,oe.shadowRadius=k.radius,oe.shadowMapSize=k.mapSize,i.spotShadow[b]=oe,i.spotShadowMap[b]=X,E++}b++}else if(I.isRectAreaLight){const $=e.get(I);$.color.copy(N).multiplyScalar(z),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=$,g++}else if(I.isPointLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){const k=I.shadow,oe=t.get(I);oe.shadowIntensity=k.intensity,oe.shadowBias=k.bias,oe.shadowNormalBias=k.normalBias,oe.shadowRadius=k.radius,oe.shadowMapSize=k.mapSize,oe.shadowCameraNear=k.camera.near,oe.shadowCameraFar=k.camera.far,i.pointShadow[m]=oe,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=I.shadow.matrix,A++}i.point[m]=$,m++}else if(I.isHemisphereLight){const $=e.get(I);$.skyColor.copy(I.color).multiplyScalar(z),$.groundColor.copy(I.groundColor).multiplyScalar(z),i.hemi[p]=$,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const v=i.hash;(v.directionalLength!==d||v.pointLength!==m||v.spotLength!==b||v.rectAreaLength!==g||v.hemiLength!==p||v.numDirectionalShadows!==M||v.numPointShadows!==A||v.numSpotShadows!==E||v.numSpotMaps!==R||v.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=b,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=E+R-x,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=x,i.numLightProbes=P,v.directionalLength=d,v.pointLength=m,v.spotLength=b,v.rectAreaLength=g,v.hemiLength=p,v.numDirectionalShadows=M,v.numPointShadows=A,v.numSpotShadows=E,v.numSpotMaps=R,v.numLightProbes=P,i.version=kE++)}function l(c,u){let f=0,h=0,d=0,m=0,b=0;const g=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const A=c[p];if(A.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),f++}else if(A.isSpotLight){const E=i.spot[d];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),d++}else if(A.isRectAreaLight){const E=i.rectArea[m];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(g),a.identity(),s.copy(A.matrixWorld),s.premultiply(g),a.extractRotation(s),E.halfWidth.set(A.width*.5,0,0),E.halfHeight.set(0,A.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),m++}else if(A.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(g),h++}else if(A.isHemisphereLight){const E=i.hemi[b];E.direction.setFromMatrixPosition(A.matrixWorld),E.direction.transformDirection(g),b++}}}return{setup:o,setupView:l,state:i}}function md(n){const e=new zE(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function VE(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new md(n),e.set(r,[o])):s>=a.length?(o=new md(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const HE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GE=`uniform sampler2D shadow_pass;
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
}`,WE=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],XE=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],gd=new Pt,Vs=new K,sc=new K;function $E(n,e,t){let i=new Mm;const r=new Ge,s=new Ge,a=new It,o=new sS,l=new aS,c={},u=t.maxTextureSize,f={[ir]:pn,[pn]:ir,[ri]:ri},h=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:HE,fragmentShader:GE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new _n;m.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Yn(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ao;let p=this.type;this.render=function(x,P,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||x.length===0)return;this.type===qv&&($e("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ao);const S=n.getRenderTarget(),W=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),N=n.state;N.setBlending(ui),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=p!==this.type;z&&P.traverse(function(ee){ee.material&&(Array.isArray(ee.material)?ee.material.forEach(X=>X.needsUpdate=!0):ee.material.needsUpdate=!0)});for(let ee=0,X=x.length;ee<X;ee++){const $=x[ee],k=$.shadow;if(k===void 0){$e("WebGLShadowMap:",$,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const oe=k.getFrameExtents();r.multiply(oe),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/oe.x),r.x=s.x*oe.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/oe.y),r.y=s.y*oe.y,k.mapSize.y=s.y));const he=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=he,k.map===null||z===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Ws){if($.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new mn(r.x,r.y,{format:Ss,type:En,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),k.map.texture.name=$.name+".shadowMap",k.map.depthTexture=new fa(r.x,r.y,oi),k.map.depthTexture.name=$.name+".shadowMapDepth",k.map.depthTexture.format=Ui,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Xt,k.map.depthTexture.magFilter=Xt}else $.isPointLight?(k.map=new Rm(r.x),k.map.depthTexture=new eS(r.x,pi)):(k.map=new mn(r.x,r.y),k.map.depthTexture=new fa(r.x,r.y,pi)),k.map.depthTexture.name=$.name+".shadowMap",k.map.depthTexture.format=Ui,this.type===ao?(k.map.depthTexture.compareFunction=he?Yu:qu,k.map.depthTexture.minFilter=Qt,k.map.depthTexture.magFilter=Qt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Xt,k.map.depthTexture.magFilter=Xt);k.camera.updateProjectionMatrix()}const be=k.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<be;Se++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,Se),n.clear();else{Se===0&&(n.setRenderTarget(k.map),n.clear());const me=k.getViewport(Se);a.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),N.viewport(a)}if($.isPointLight){const me=k.camera,He=k.matrix,Qe=$.distance||me.far;Qe!==me.far&&(me.far=Qe,me.updateProjectionMatrix()),Vs.setFromMatrixPosition($.matrixWorld),me.position.copy(Vs),sc.copy(me.position),sc.add(WE[Se]),me.up.copy(XE[Se]),me.lookAt(sc),me.updateMatrixWorld(),He.makeTranslation(-Vs.x,-Vs.y,-Vs.z),gd.multiplyMatrices(me.projectionMatrix,me.matrixWorldInverse),k._frustum.setFromProjectionMatrix(gd,me.coordinateSystem,me.reversedDepth)}else k.updateMatrices($);i=k.getFrustum(),E(P,v,k.camera,$,this.type)}k.isPointLightShadow!==!0&&this.type===Ws&&M(k,v),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(S,W,I)};function M(x,P){const v=e.update(b);h.defines.VSM_SAMPLES!==x.blurSamples&&(h.defines.VSM_SAMPLES=x.blurSamples,d.defines.VSM_SAMPLES=x.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new mn(r.x,r.y,{format:Ss,type:En})),h.uniforms.shadow_pass.value=x.map.depthTexture,h.uniforms.resolution.value=x.mapSize,h.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(P,null,v,h,b,null),d.uniforms.shadow_pass.value=x.mapPass.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(P,null,v,d,b,null)}function A(x,P,v,S){let W=null;const I=v.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(I!==void 0)W=I;else if(W=v.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const N=W.uuid,z=P.uuid;let ee=c[N];ee===void 0&&(ee={},c[N]=ee);let X=ee[z];X===void 0&&(X=W.clone(),ee[z]=X,P.addEventListener("dispose",R)),W=X}if(W.visible=P.visible,W.wireframe=P.wireframe,S===Ws?W.side=P.shadowSide!==null?P.shadowSide:P.side:W.side=P.shadowSide!==null?P.shadowSide:f[P.side],W.alphaMap=P.alphaMap,W.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,W.map=P.map,W.clipShadows=P.clipShadows,W.clippingPlanes=P.clippingPlanes,W.clipIntersection=P.clipIntersection,W.displacementMap=P.displacementMap,W.displacementScale=P.displacementScale,W.displacementBias=P.displacementBias,W.wireframeLinewidth=P.wireframeLinewidth,W.linewidth=P.linewidth,v.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const N=n.properties.get(W);N.light=v}return W}function E(x,P,v,S,W){if(x.visible===!1)return;if(x.layers.test(P.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&W===Ws)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,x.matrixWorld);const z=e.update(x),ee=x.material;if(Array.isArray(ee)){const X=z.groups;for(let $=0,k=X.length;$<k;$++){const oe=X[$],he=ee[oe.materialIndex];if(he&&he.visible){const be=A(x,he,S,W);x.onBeforeShadow(n,x,P,v,z,be,oe),n.renderBufferDirect(v,null,z,be,x,oe),x.onAfterShadow(n,x,P,v,z,be,oe)}}}else if(ee.visible){const X=A(x,ee,S,W);x.onBeforeShadow(n,x,P,v,z,X,null),n.renderBufferDirect(v,null,z,X,x,null),x.onAfterShadow(n,x,P,v,z,X,null)}}const N=x.children;for(let z=0,ee=N.length;z<ee;z++)E(N[z],P,v,S,W)}function R(x){x.target.removeEventListener("dispose",R);for(const v in c){const S=c[v],W=x.target.uuid;W in S&&(S[W].dispose(),delete S[W])}}}function qE(n,e){function t(){let V=!1;const Me=new It;let xe=null;const Ue=new It(0,0,0,0);return{setMask:function(_e){xe!==_e&&!V&&(n.colorMask(_e,_e,_e,_e),xe=_e)},setLocked:function(_e){V=_e},setClear:function(_e,le,Fe,qe,bt){bt===!0&&(_e*=qe,le*=qe,Fe*=qe),Me.set(_e,le,Fe,qe),Ue.equals(Me)===!1&&(n.clearColor(_e,le,Fe,qe),Ue.copy(Me))},reset:function(){V=!1,xe=null,Ue.set(-1,0,0,0)}}}function i(){let V=!1,Me=!1,xe=null,Ue=null,_e=null;return{setReversed:function(le){if(Me!==le){const Fe=e.get("EXT_clip_control");le?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Me=le;const qe=_e;_e=null,this.setClear(qe)}},getReversed:function(){return Me},setTest:function(le){le?B(n.DEPTH_TEST):O(n.DEPTH_TEST)},setMask:function(le){xe!==le&&!V&&(n.depthMask(le),xe=le)},setFunc:function(le){if(Me&&(le=Ax[le]),Ue!==le){switch(le){case wc:n.depthFunc(n.NEVER);break;case Ac:n.depthFunc(n.ALWAYS);break;case Cc:n.depthFunc(n.LESS);break;case vs:n.depthFunc(n.LEQUAL);break;case Rc:n.depthFunc(n.EQUAL);break;case Pc:n.depthFunc(n.GEQUAL);break;case Dc:n.depthFunc(n.GREATER);break;case Ic:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ue=le}},setLocked:function(le){V=le},setClear:function(le){_e!==le&&(_e=le,Me&&(le=1-le),n.clearDepth(le))},reset:function(){V=!1,xe=null,Ue=null,_e=null,Me=!1}}}function r(){let V=!1,Me=null,xe=null,Ue=null,_e=null,le=null,Fe=null,qe=null,bt=null;return{setTest:function(dt){V||(dt?B(n.STENCIL_TEST):O(n.STENCIL_TEST))},setMask:function(dt){Me!==dt&&!V&&(n.stencilMask(dt),Me=dt)},setFunc:function(dt,mi,gi){(xe!==dt||Ue!==mi||_e!==gi)&&(n.stencilFunc(dt,mi,gi),xe=dt,Ue=mi,_e=gi)},setOp:function(dt,mi,gi){(le!==dt||Fe!==mi||qe!==gi)&&(n.stencilOp(dt,mi,gi),le=dt,Fe=mi,qe=gi)},setLocked:function(dt){V=dt},setClear:function(dt){bt!==dt&&(n.clearStencil(dt),bt=dt)},reset:function(){V=!1,Me=null,xe=null,Ue=null,_e=null,le=null,Fe=null,qe=null,bt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],m=null,b=!1,g=null,p=null,M=null,A=null,E=null,R=null,x=null,P=new Xe(0,0,0),v=0,S=!1,W=null,I=null,N=null,z=null,ee=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,k=0;const oe=n.getParameter(n.VERSION);oe.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(oe)[1]),$=k>=1):oe.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),$=k>=2);let he=null,be={};const Se=n.getParameter(n.SCISSOR_BOX),me=n.getParameter(n.VIEWPORT),He=new It().fromArray(Se),Qe=new It().fromArray(me);function et(V,Me,xe,Ue){const _e=new Uint8Array(4),le=n.createTexture();n.bindTexture(V,le),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<xe;Fe++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(Me+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return le}const se={};se[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),B(n.DEPTH_TEST),a.setFunc(vs),L(!1),j(bh),B(n.CULL_FACE),U(ui);function B(V){u[V]!==!0&&(n.enable(V),u[V]=!0)}function O(V){u[V]!==!1&&(n.disable(V),u[V]=!1)}function q(V,Me){return f[V]!==Me?(n.bindFramebuffer(V,Me),f[V]=Me,V===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Me),V===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function ce(V,Me){let xe=d,Ue=!1;if(V){xe=h.get(Me),xe===void 0&&(xe=[],h.set(Me,xe));const _e=V.textures;if(xe.length!==_e.length||xe[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Fe=_e.length;le<Fe;le++)xe[le]=n.COLOR_ATTACHMENT0+le;xe.length=_e.length,Ue=!0}}else xe[0]!==n.BACK&&(xe[0]=n.BACK,Ue=!0);Ue&&n.drawBuffers(xe)}function de(V){return m!==V?(n.useProgram(V),m=V,!0):!1}const D={[Sr]:n.FUNC_ADD,[jv]:n.FUNC_SUBTRACT,[Kv]:n.FUNC_REVERSE_SUBTRACT};D[Zv]=n.MIN,D[Jv]=n.MAX;const w={[Qv]:n.ZERO,[ex]:n.ONE,[tx]:n.SRC_COLOR,[Ec]:n.SRC_ALPHA,[ox]:n.SRC_ALPHA_SATURATE,[sx]:n.DST_COLOR,[ix]:n.DST_ALPHA,[nx]:n.ONE_MINUS_SRC_COLOR,[Tc]:n.ONE_MINUS_SRC_ALPHA,[ax]:n.ONE_MINUS_DST_COLOR,[rx]:n.ONE_MINUS_DST_ALPHA,[lx]:n.CONSTANT_COLOR,[cx]:n.ONE_MINUS_CONSTANT_COLOR,[ux]:n.CONSTANT_ALPHA,[fx]:n.ONE_MINUS_CONSTANT_ALPHA};function U(V,Me,xe,Ue,_e,le,Fe,qe,bt,dt){if(V===ui){b===!0&&(O(n.BLEND),b=!1);return}if(b===!1&&(B(n.BLEND),b=!0),V!==Yv){if(V!==g||dt!==S){if((p!==Sr||E!==Sr)&&(n.blendEquation(n.FUNC_ADD),p=Sr,E=Sr),dt)switch(V){case hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Er:n.blendFunc(n.ONE,n.ONE);break;case Mh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:at("WebGLState: Invalid blending: ",V);break}else switch(V){case hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Mh:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yh:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",V);break}M=null,A=null,R=null,x=null,P.set(0,0,0),v=0,g=V,S=dt}return}_e=_e||Me,le=le||xe,Fe=Fe||Ue,(Me!==p||_e!==E)&&(n.blendEquationSeparate(D[Me],D[_e]),p=Me,E=_e),(xe!==M||Ue!==A||le!==R||Fe!==x)&&(n.blendFuncSeparate(w[xe],w[Ue],w[le],w[Fe]),M=xe,A=Ue,R=le,x=Fe),(qe.equals(P)===!1||bt!==v)&&(n.blendColor(qe.r,qe.g,qe.b,bt),P.copy(qe),v=bt),g=V,S=!1}function H(V,Me){V.side===ri?O(n.CULL_FACE):B(n.CULL_FACE);let xe=V.side===pn;Me&&(xe=!xe),L(xe),V.blending===hs&&V.transparent===!1?U(ui):U(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),s.setMask(V.colorWrite);const Ue=V.stencilWrite;o.setTest(Ue),Ue&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),fe(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?B(n.SAMPLE_ALPHA_TO_COVERAGE):O(n.SAMPLE_ALPHA_TO_COVERAGE)}function L(V){W!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),W=V)}function j(V){V!==Xv?(B(n.CULL_FACE),V!==I&&(V===bh?n.cullFace(n.BACK):V===$v?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):O(n.CULL_FACE),I=V}function C(V){V!==N&&($&&n.lineWidth(V),N=V)}function fe(V,Me,xe){V?(B(n.POLYGON_OFFSET_FILL),(z!==Me||ee!==xe)&&(z=Me,ee=xe,a.getReversed()&&(Me=-Me),n.polygonOffset(Me,xe))):O(n.POLYGON_OFFSET_FILL)}function re(V){V?B(n.SCISSOR_TEST):O(n.SCISSOR_TEST)}function ie(V){V===void 0&&(V=n.TEXTURE0+X-1),he!==V&&(n.activeTexture(V),he=V)}function ue(V,Me,xe){xe===void 0&&(he===null?xe=n.TEXTURE0+X-1:xe=he);let Ue=be[xe];Ue===void 0&&(Ue={type:void 0,texture:void 0},be[xe]=Ue),(Ue.type!==V||Ue.texture!==Me)&&(he!==xe&&(n.activeTexture(xe),he=xe),n.bindTexture(V,Me||se[V]),Ue.type=V,Ue.texture=Me)}function y(){const V=be[he];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(V){at("WebGLState:",V)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(V){at("WebGLState:",V)}}function Z(){try{n.texSubImage2D(...arguments)}catch(V){at("WebGLState:",V)}}function ae(){try{n.texSubImage3D(...arguments)}catch(V){at("WebGLState:",V)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(V){at("WebGLState:",V)}}function ye(){try{n.compressedTexSubImage3D(...arguments)}catch(V){at("WebGLState:",V)}}function ge(){try{n.texStorage2D(...arguments)}catch(V){at("WebGLState:",V)}}function Le(){try{n.texStorage3D(...arguments)}catch(V){at("WebGLState:",V)}}function ke(){try{n.texImage2D(...arguments)}catch(V){at("WebGLState:",V)}}function pe(){try{n.texImage3D(...arguments)}catch(V){at("WebGLState:",V)}}function ve(V){He.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),He.copy(V))}function Ee(V){Qe.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Qe.copy(V))}function Ce(V,Me){let xe=c.get(Me);xe===void 0&&(xe=new WeakMap,c.set(Me,xe));let Ue=xe.get(V);Ue===void 0&&(Ue=n.getUniformBlockIndex(Me,V.name),xe.set(V,Ue))}function Re(V,Me){const Ue=c.get(Me).get(V);l.get(Me)!==Ue&&(n.uniformBlockBinding(Me,Ue,V.__bindingPointIndex),l.set(Me,Ue))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},he=null,be={},f={},h=new WeakMap,d=[],m=null,b=!1,g=null,p=null,M=null,A=null,E=null,R=null,x=null,P=new Xe(0,0,0),v=0,S=!1,W=null,I=null,N=null,z=null,ee=null,He.set(0,0,n.canvas.width,n.canvas.height),Qe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:B,disable:O,bindFramebuffer:q,drawBuffers:ce,useProgram:de,setBlending:U,setMaterial:H,setFlipSided:L,setCullFace:j,setLineWidth:C,setPolygonOffset:fe,setScissorTest:re,activeTexture:ie,bindTexture:ue,unbindTexture:y,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:ke,texImage3D:pe,updateUBOMapping:Ce,uniformBlockBinding:Re,texStorage2D:ge,texStorage3D:Le,texSubImage2D:Z,texSubImage3D:ae,compressedTexSubImage2D:J,compressedTexSubImage3D:ye,scissor:ve,viewport:Ee,reset:je}}function YE(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(y,_){return d?new OffscreenCanvas(y,_):Co("canvas")}function b(y,_,F){let Z=1;const ae=ue(y);if((ae.width>F||ae.height>F)&&(Z=F/Math.max(ae.width,ae.height)),Z<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const J=Math.floor(Z*ae.width),ye=Math.floor(Z*ae.height);f===void 0&&(f=m(J,ye));const ge=_?m(J,ye):f;return ge.width=J,ge.height=ye,ge.getContext("2d").drawImage(y,0,0,J,ye),$e("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+J+"x"+ye+")."),ge}else return"data"in y&&$e("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),y;return y}function g(y){return y.generateMipmaps}function p(y){n.generateMipmap(y)}function M(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(y,_,F,Z,ae=!1){if(y!==null){if(n[y]!==void 0)return n[y];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let J=_;if(_===n.RED&&(F===n.FLOAT&&(J=n.R32F),F===n.HALF_FLOAT&&(J=n.R16F),F===n.UNSIGNED_BYTE&&(J=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(J=n.R8UI),F===n.UNSIGNED_SHORT&&(J=n.R16UI),F===n.UNSIGNED_INT&&(J=n.R32UI),F===n.BYTE&&(J=n.R8I),F===n.SHORT&&(J=n.R16I),F===n.INT&&(J=n.R32I)),_===n.RG&&(F===n.FLOAT&&(J=n.RG32F),F===n.HALF_FLOAT&&(J=n.RG16F),F===n.UNSIGNED_BYTE&&(J=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(J=n.RG8UI),F===n.UNSIGNED_SHORT&&(J=n.RG16UI),F===n.UNSIGNED_INT&&(J=n.RG32UI),F===n.BYTE&&(J=n.RG8I),F===n.SHORT&&(J=n.RG16I),F===n.INT&&(J=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(J=n.RGB8UI),F===n.UNSIGNED_SHORT&&(J=n.RGB16UI),F===n.UNSIGNED_INT&&(J=n.RGB32UI),F===n.BYTE&&(J=n.RGB8I),F===n.SHORT&&(J=n.RGB16I),F===n.INT&&(J=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),F===n.UNSIGNED_INT&&(J=n.RGBA32UI),F===n.BYTE&&(J=n.RGBA8I),F===n.SHORT&&(J=n.RGBA16I),F===n.INT&&(J=n.RGBA32I)),_===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),_===n.RGBA){const ye=ae?wo:ot.getTransfer(Z);F===n.FLOAT&&(J=n.RGBA32F),F===n.HALF_FLOAT&&(J=n.RGBA16F),F===n.UNSIGNED_BYTE&&(J=ye===pt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function E(y,_){let F;return y?_===null||_===pi||_===ua?F=n.DEPTH24_STENCIL8:_===oi?F=n.DEPTH32F_STENCIL8:_===ca&&(F=n.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===pi||_===ua?F=n.DEPTH_COMPONENT24:_===oi?F=n.DEPTH_COMPONENT32F:_===ca&&(F=n.DEPTH_COMPONENT16),F}function R(y,_){return g(y)===!0||y.isFramebufferTexture&&y.minFilter!==Xt&&y.minFilter!==Qt?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function x(y){const _=y.target;_.removeEventListener("dispose",x),v(_),_.isVideoTexture&&u.delete(_)}function P(y){const _=y.target;_.removeEventListener("dispose",P),W(_)}function v(y){const _=i.get(y);if(_.__webglInit===void 0)return;const F=y.source,Z=h.get(F);if(Z){const ae=Z[_.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&S(y),Object.keys(Z).length===0&&h.delete(F)}i.remove(y)}function S(y){const _=i.get(y);n.deleteTexture(_.__webglTexture);const F=y.source,Z=h.get(F);delete Z[_.__cacheKey],a.memory.textures--}function W(y){const _=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let ae=0;ae<_.__webglFramebuffer[Z].length;ae++)n.deleteFramebuffer(_.__webglFramebuffer[Z][ae]);else n.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[Z]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=y.textures;for(let Z=0,ae=F.length;Z<ae;Z++){const J=i.get(F[Z]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(F[Z])}i.remove(y)}let I=0;function N(){I=0}function z(){const y=I;return y>=r.maxTextures&&$e("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),I+=1,y}function ee(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function X(y,_){const F=i.get(y);if(y.isVideoTexture&&re(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&F.__version!==y.version){const Z=y.image;if(Z===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{se(F,y,_);return}}else y.isExternalTexture&&(F.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function $(y,_){const F=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){se(F,y,_);return}else y.isExternalTexture&&(F.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function k(y,_){const F=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){se(F,y,_);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function oe(y,_){const F=i.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&F.__version!==y.version){B(F,y,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}const he={[Lc]:n.REPEAT,[Ri]:n.CLAMP_TO_EDGE,[Uc]:n.MIRRORED_REPEAT},be={[Xt]:n.NEAREST,[px]:n.NEAREST_MIPMAP_NEAREST,[Aa]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[Al]:n.LINEAR_MIPMAP_NEAREST,[Tr]:n.LINEAR_MIPMAP_LINEAR},Se={[vx]:n.NEVER,[yx]:n.ALWAYS,[xx]:n.LESS,[qu]:n.LEQUAL,[Sx]:n.EQUAL,[Yu]:n.GEQUAL,[bx]:n.GREATER,[Mx]:n.NOTEQUAL};function me(y,_){if(_.type===oi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Qt||_.magFilter===Al||_.magFilter===Aa||_.magFilter===Tr||_.minFilter===Qt||_.minFilter===Al||_.minFilter===Aa||_.minFilter===Tr)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,he[_.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,he[_.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,he[_.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,be[_.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,be[_.minFilter]),_.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,Se[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Xt||_.minFilter!==Aa&&_.minFilter!==Tr||_.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function He(y,_){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",x));const Z=_.source;let ae=h.get(Z);ae===void 0&&(ae={},h.set(Z,ae));const J=ee(_);if(J!==y.__cacheKey){ae[J]===void 0&&(ae[J]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ae[J].usedTimes++;const ye=ae[y.__cacheKey];ye!==void 0&&(ae[y.__cacheKey].usedTimes--,ye.usedTimes===0&&S(_)),y.__cacheKey=J,y.__webglTexture=ae[J].texture}return F}function Qe(y,_,F){return Math.floor(Math.floor(y/F)/_)}function et(y,_,F,Z){const J=y.updateRanges;if(J.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,F,Z,_.data);else{J.sort((pe,ve)=>pe.start-ve.start);let ye=0;for(let pe=1;pe<J.length;pe++){const ve=J[ye],Ee=J[pe],Ce=ve.start+ve.count,Re=Qe(Ee.start,_.width,4),je=Qe(ve.start,_.width,4);Ee.start<=Ce+1&&Re===je&&Qe(Ee.start+Ee.count-1,_.width,4)===Re?ve.count=Math.max(ve.count,Ee.start+Ee.count-ve.start):(++ye,J[ye]=Ee)}J.length=ye+1;const ge=n.getParameter(n.UNPACK_ROW_LENGTH),Le=n.getParameter(n.UNPACK_SKIP_PIXELS),ke=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let pe=0,ve=J.length;pe<ve;pe++){const Ee=J[pe],Ce=Math.floor(Ee.start/4),Re=Math.ceil(Ee.count/4),je=Ce%_.width,V=Math.floor(Ce/_.width),Me=Re,xe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,je),n.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,je,V,Me,xe,F,Z,_.data)}y.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ge),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),n.pixelStorei(n.UNPACK_SKIP_ROWS,ke)}}function se(y,_,F){let Z=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=n.TEXTURE_3D);const ae=He(y,_),J=_.source;t.bindTexture(Z,y.__webglTexture,n.TEXTURE0+F);const ye=i.get(J);if(J.version!==ye.__version||ae===!0){t.activeTexture(n.TEXTURE0+F);const ge=ot.getPrimaries(ot.workingColorSpace),Le=_.colorSpace===Ji?null:ot.getPrimaries(_.colorSpace),ke=_.colorSpace===Ji||ge===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let pe=b(_.image,!1,r.maxTextureSize);pe=ie(_,pe);const ve=s.convert(_.format,_.colorSpace),Ee=s.convert(_.type);let Ce=A(_.internalFormat,ve,Ee,_.colorSpace,_.isVideoTexture);me(Z,_);let Re;const je=_.mipmaps,V=_.isVideoTexture!==!0,Me=ye.__version===void 0||ae===!0,xe=J.dataReady,Ue=R(_,pe);if(_.isDepthTexture)Ce=E(_.format===wr,_.type),Me&&(V?t.texStorage2D(n.TEXTURE_2D,1,Ce,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,Ce,pe.width,pe.height,0,ve,Ee,null));else if(_.isDataTexture)if(je.length>0){V&&Me&&t.texStorage2D(n.TEXTURE_2D,Ue,Ce,je[0].width,je[0].height);for(let _e=0,le=je.length;_e<le;_e++)Re=je[_e],V?xe&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Re.width,Re.height,ve,Ee,Re.data):t.texImage2D(n.TEXTURE_2D,_e,Ce,Re.width,Re.height,0,ve,Ee,Re.data);_.generateMipmaps=!1}else V?(Me&&t.texStorage2D(n.TEXTURE_2D,Ue,Ce,pe.width,pe.height),xe&&et(_,pe,ve,Ee)):t.texImage2D(n.TEXTURE_2D,0,Ce,pe.width,pe.height,0,ve,Ee,pe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){V&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,Ce,je[0].width,je[0].height,pe.depth);for(let _e=0,le=je.length;_e<le;_e++)if(Re=je[_e],_.format!==Vn)if(ve!==null)if(V){if(xe)if(_.layerUpdates.size>0){const Fe=qh(Re.width,Re.height,_.format,_.type);for(const qe of _.layerUpdates){const bt=Re.data.subarray(qe*Fe/Re.data.BYTES_PER_ELEMENT,(qe+1)*Fe/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,qe,Re.width,Re.height,1,ve,bt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Re.width,Re.height,pe.depth,ve,Re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,Ce,Re.width,Re.height,pe.depth,0,Re.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?xe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Re.width,Re.height,pe.depth,ve,Ee,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,Ce,Re.width,Re.height,pe.depth,0,ve,Ee,Re.data)}else{V&&Me&&t.texStorage2D(n.TEXTURE_2D,Ue,Ce,je[0].width,je[0].height);for(let _e=0,le=je.length;_e<le;_e++)Re=je[_e],_.format!==Vn?ve!==null?V?xe&&t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,Re.width,Re.height,ve,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,Ce,Re.width,Re.height,0,Re.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?xe&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Re.width,Re.height,ve,Ee,Re.data):t.texImage2D(n.TEXTURE_2D,_e,Ce,Re.width,Re.height,0,ve,Ee,Re.data)}else if(_.isDataArrayTexture)if(V){if(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,Ce,pe.width,pe.height,pe.depth),xe)if(_.layerUpdates.size>0){const _e=qh(pe.width,pe.height,_.format,_.type);for(const le of _.layerUpdates){const Fe=pe.data.subarray(le*_e/pe.data.BYTES_PER_ELEMENT,(le+1)*_e/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,pe.width,pe.height,1,ve,Ee,Fe)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,ve,Ee,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,pe.width,pe.height,pe.depth,0,ve,Ee,pe.data);else if(_.isData3DTexture)V?(Me&&t.texStorage3D(n.TEXTURE_3D,Ue,Ce,pe.width,pe.height,pe.depth),xe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,ve,Ee,pe.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,pe.width,pe.height,pe.depth,0,ve,Ee,pe.data);else if(_.isFramebufferTexture){if(Me)if(V)t.texStorage2D(n.TEXTURE_2D,Ue,Ce,pe.width,pe.height);else{let _e=pe.width,le=pe.height;for(let Fe=0;Fe<Ue;Fe++)t.texImage2D(n.TEXTURE_2D,Fe,Ce,_e,le,0,ve,Ee,null),_e>>=1,le>>=1}}else if(je.length>0){if(V&&Me){const _e=ue(je[0]);t.texStorage2D(n.TEXTURE_2D,Ue,Ce,_e.width,_e.height)}for(let _e=0,le=je.length;_e<le;_e++)Re=je[_e],V?xe&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,ve,Ee,Re):t.texImage2D(n.TEXTURE_2D,_e,Ce,ve,Ee,Re);_.generateMipmaps=!1}else if(V){if(Me){const _e=ue(pe);t.texStorage2D(n.TEXTURE_2D,Ue,Ce,_e.width,_e.height)}xe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Ee,pe)}else t.texImage2D(n.TEXTURE_2D,0,Ce,ve,Ee,pe);g(_)&&p(Z),ye.__version=J.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function B(y,_,F){if(_.image.length!==6)return;const Z=He(y,_),ae=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+F);const J=i.get(ae);if(ae.version!==J.__version||Z===!0){t.activeTexture(n.TEXTURE0+F);const ye=ot.getPrimaries(ot.workingColorSpace),ge=_.colorSpace===Ji?null:ot.getPrimaries(_.colorSpace),Le=_.colorSpace===Ji||ye===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const ke=_.isCompressedTexture||_.image[0].isCompressedTexture,pe=_.image[0]&&_.image[0].isDataTexture,ve=[];for(let le=0;le<6;le++)!ke&&!pe?ve[le]=b(_.image[le],!0,r.maxCubemapSize):ve[le]=pe?_.image[le].image:_.image[le],ve[le]=ie(_,ve[le]);const Ee=ve[0],Ce=s.convert(_.format,_.colorSpace),Re=s.convert(_.type),je=A(_.internalFormat,Ce,Re,_.colorSpace),V=_.isVideoTexture!==!0,Me=J.__version===void 0||Z===!0,xe=ae.dataReady;let Ue=R(_,Ee);me(n.TEXTURE_CUBE_MAP,_);let _e;if(ke){V&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,je,Ee.width,Ee.height);for(let le=0;le<6;le++){_e=ve[le].mipmaps;for(let Fe=0;Fe<_e.length;Fe++){const qe=_e[Fe];_.format!==Vn?Ce!==null?V?xe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe,0,0,qe.width,qe.height,Ce,qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe,je,qe.width,qe.height,0,qe.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe,0,0,qe.width,qe.height,Ce,Re,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe,je,qe.width,qe.height,0,Ce,Re,qe.data)}}}else{if(_e=_.mipmaps,V&&Me){_e.length>0&&Ue++;const le=ue(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,je,le.width,le.height)}for(let le=0;le<6;le++)if(pe){V?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ve[le].width,ve[le].height,Ce,Re,ve[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,je,ve[le].width,ve[le].height,0,Ce,Re,ve[le].data);for(let Fe=0;Fe<_e.length;Fe++){const bt=_e[Fe].image[le].image;V?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe+1,0,0,bt.width,bt.height,Ce,Re,bt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe+1,je,bt.width,bt.height,0,Ce,Re,bt.data)}}else{V?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ce,Re,ve[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,je,Ce,Re,ve[le]);for(let Fe=0;Fe<_e.length;Fe++){const qe=_e[Fe];V?xe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe+1,0,0,Ce,Re,qe.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe+1,je,Ce,Re,qe.image[le])}}}g(_)&&p(n.TEXTURE_CUBE_MAP),J.__version=ae.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function O(y,_,F,Z,ae,J){const ye=s.convert(F.format,F.colorSpace),ge=s.convert(F.type),Le=A(F.internalFormat,ye,ge,F.colorSpace),ke=i.get(_),pe=i.get(F);if(pe.__renderTarget=_,!ke.__hasExternalTextures){const ve=Math.max(1,_.width>>J),Ee=Math.max(1,_.height>>J);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,J,Le,ve,Ee,_.depth,0,ye,ge,null):t.texImage2D(ae,J,Le,ve,Ee,0,ye,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),fe(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ae,pe.__webglTexture,0,C(_)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ae,pe.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function q(y,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,y),_.depthBuffer){const Z=_.depthTexture,ae=Z&&Z.isDepthTexture?Z.type:null,J=E(_.stencilBuffer,ae),ye=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;fe(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(_),J,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(_),J,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,J,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ye,n.RENDERBUFFER,y)}else{const Z=_.textures;for(let ae=0;ae<Z.length;ae++){const J=Z[ae],ye=s.convert(J.format,J.colorSpace),ge=s.convert(J.type),Le=A(J.internalFormat,ye,ge,J.colorSpace);fe(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C(_),Le,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,C(_),Le,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Le,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(y,_,F){const Z=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=i.get(_.depthTexture);if(ae.__renderTarget=_,(!ae.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,_.depthTexture.addEventListener("dispose",x)),ae.__webglTexture===void 0){ae.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),me(n.TEXTURE_CUBE_MAP,_.depthTexture);const ke=s.convert(_.depthTexture.format),pe=s.convert(_.depthTexture.type);let ve;_.depthTexture.format===Ui?ve=n.DEPTH_COMPONENT24:_.depthTexture.format===wr&&(ve=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ve,_.width,_.height,0,ke,pe,null)}}else X(_.depthTexture,0);const J=ae.__webglTexture,ye=C(_),ge=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Le=_.depthTexture.format===wr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ui)fe(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Le,ge,J,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,Le,ge,J,0);else if(_.depthTexture.format===wr)fe(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Le,ge,J,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,Le,ge,J,0);else throw new Error("Unknown depthTexture format")}function de(y){const _=i.get(y),F=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const Z=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){const ae=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",ae)};Z.addEventListener("dispose",ae),_.__depthDisposeCallback=ae}_.__boundDepthTexture=Z}if(y.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let Z=0;Z<6;Z++)ce(_.__webglFramebuffer[Z],y,Z);else{const Z=y.texture.mipmaps;Z&&Z.length>0?ce(_.__webglFramebuffer[0],y,0):ce(_.__webglFramebuffer,y,0)}else if(F){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=n.createRenderbuffer(),q(_.__webglDepthbuffer[Z],y,!1);else{const ae=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,J)}}else{const Z=y.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),q(_.__webglDepthbuffer,y,!1);else{const ae=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,J)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function D(y,_,F){const Z=i.get(y);_!==void 0&&O(Z.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&de(y)}function w(y){const _=y.texture,F=i.get(y),Z=i.get(_);y.addEventListener("dispose",P);const ae=y.textures,J=y.isWebGLCubeRenderTarget===!0,ye=ae.length>1;if(ye||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=_.version,a.memory.textures++),J){F.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[ge]=[];for(let Le=0;Le<_.mipmaps.length;Le++)F.__webglFramebuffer[ge][Le]=n.createFramebuffer()}else F.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let ge=0;ge<_.mipmaps.length;ge++)F.__webglFramebuffer[ge]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(ye)for(let ge=0,Le=ae.length;ge<Le;ge++){const ke=i.get(ae[ge]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),a.memory.textures++)}if(y.samples>0&&fe(y)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ge=0;ge<ae.length;ge++){const Le=ae[ge];F.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ge]);const ke=s.convert(Le.format,Le.colorSpace),pe=s.convert(Le.type),ve=A(Le.internalFormat,ke,pe,Le.colorSpace,y.isXRRenderTarget===!0),Ee=C(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,ve,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,F.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),q(F.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),me(n.TEXTURE_CUBE_MAP,_);for(let ge=0;ge<6;ge++)if(_.mipmaps&&_.mipmaps.length>0)for(let Le=0;Le<_.mipmaps.length;Le++)O(F.__webglFramebuffer[ge][Le],y,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le);else O(F.__webglFramebuffer[ge],y,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);g(_)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ge=0,Le=ae.length;ge<Le;ge++){const ke=ae[ge],pe=i.get(ke);let ve=n.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ve=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,pe.__webglTexture),me(ve,ke),O(F.__webglFramebuffer,y,ke,n.COLOR_ATTACHMENT0+ge,ve,0),g(ke)&&p(ve)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ge=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,Z.__webglTexture),me(ge,_),_.mipmaps&&_.mipmaps.length>0)for(let Le=0;Le<_.mipmaps.length;Le++)O(F.__webglFramebuffer[Le],y,_,n.COLOR_ATTACHMENT0,ge,Le);else O(F.__webglFramebuffer,y,_,n.COLOR_ATTACHMENT0,ge,0);g(_)&&p(ge),t.unbindTexture()}y.depthBuffer&&de(y)}function U(y){const _=y.textures;for(let F=0,Z=_.length;F<Z;F++){const ae=_[F];if(g(ae)){const J=M(y),ye=i.get(ae).__webglTexture;t.bindTexture(J,ye),p(J),t.unbindTexture()}}}const H=[],L=[];function j(y){if(y.samples>0){if(fe(y)===!1){const _=y.textures,F=y.width,Z=y.height;let ae=n.COLOR_BUFFER_BIT;const J=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(y),ge=_.length>1;if(ge)for(let ke=0;ke<_.length;ke++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const Le=y.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ke=0;ke<_.length;ke++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[ke]);const pe=i.get(_[ke]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,pe,0)}n.blitFramebuffer(0,0,F,Z,0,0,F,Z,ae,n.NEAREST),l===!0&&(H.length=0,L.length=0,H.push(n.COLOR_ATTACHMENT0+ke),y.depthBuffer&&y.resolveDepthBuffer===!1&&(H.push(J),L.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,H))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let ke=0;ke<_.length;ke++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,ye.__webglColorRenderbuffer[ke]);const pe=i.get(_[ke]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const _=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function C(y){return Math.min(r.maxSamples,y.samples)}function fe(y){const _=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function re(y){const _=a.render.frame;u.get(y)!==_&&(u.set(y,_),y.update())}function ie(y,_){const F=y.colorSpace,Z=y.format,ae=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||F!==bs&&F!==Ji&&(ot.getTransfer(F)===pt?(Z!==Vn||ae!==Rn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",F)),_}function ue(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=k,this.setTextureCube=oe,this.rebindTextures=D,this.setupRenderTarget=w,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=O,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function jE(n,e){function t(i,r=Ji){let s;const a=ot.getTransfer(r);if(i===Rn)return n.UNSIGNED_BYTE;if(i===Hu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Gu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===cm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===um)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===om)return n.BYTE;if(i===lm)return n.SHORT;if(i===ca)return n.UNSIGNED_SHORT;if(i===Vu)return n.INT;if(i===pi)return n.UNSIGNED_INT;if(i===oi)return n.FLOAT;if(i===En)return n.HALF_FLOAT;if(i===fm)return n.ALPHA;if(i===hm)return n.RGB;if(i===Vn)return n.RGBA;if(i===Ui)return n.DEPTH_COMPONENT;if(i===wr)return n.DEPTH_STENCIL;if(i===dm)return n.RED;if(i===Wu)return n.RED_INTEGER;if(i===Ss)return n.RG;if(i===Xu)return n.RG_INTEGER;if(i===$u)return n.RGBA_INTEGER;if(i===oo||i===lo||i===co||i===uo)if(a===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===oo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===oo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===co)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===uo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nc||i===Fc||i===Oc||i===kc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Nc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Oc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bc||i===zc||i===Vc||i===Hc||i===Gc||i===Wc||i===Xc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Bc||i===zc)return a===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Vc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Hc)return s.COMPRESSED_R11_EAC;if(i===Gc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Wc)return s.COMPRESSED_RG11_EAC;if(i===Xc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$c||i===qc||i===Yc||i===jc||i===Kc||i===Zc||i===Jc||i===Qc||i===eu||i===tu||i===nu||i===iu||i===ru||i===su)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===$c)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===eu)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tu)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nu)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===iu)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ru)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===su)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===au||i===ou||i===lu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===au)return a===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ou)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cu||i===uu||i===fu||i===hu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===cu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===uu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ua?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const KE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZE=`
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

}`;class JE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Tm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new $t({vertexShader:KE,fragmentShader:ZE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yn(new il(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QE extends Es{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,m=null;const b=typeof XRWebGLBinding<"u",g=new JE,p={},M=t.getContextAttributes();let A=null,E=null;const R=[],x=[],P=new Ge;let v=null;const S=new Cn;S.viewport=new It;const W=new Cn;W.viewport=new It;const I=[S,W],N=new lS;let z=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let B=R[se];return B===void 0&&(B=new Nl,R[se]=B),B.getTargetRaySpace()},this.getControllerGrip=function(se){let B=R[se];return B===void 0&&(B=new Nl,R[se]=B),B.getGripSpace()},this.getHand=function(se){let B=R[se];return B===void 0&&(B=new Nl,R[se]=B),B.getHandSpace()};function X(se){const B=x.indexOf(se.inputSource);if(B===-1)return;const O=R[B];O!==void 0&&(O.update(se.inputSource,se.frame,c||a),O.dispatchEvent({type:se.type,data:se.inputSource}))}function $(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",k);for(let se=0;se<R.length;se++){const B=x[se];B!==null&&(x[se]=null,R[se].disconnect(B))}z=null,ee=null,g.reset();for(const se in p)delete p[se];e.setRenderTarget(A),d=null,h=null,f=null,r=null,E=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,i.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,i.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",$),r.addEventListener("inputsourceschange",k),M.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(P),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let O=null,q=null,ce=null;M.depth&&(ce=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,O=M.stencil?wr:Ui,q=M.stencil?ua:pi);const de={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(de),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new mn(h.textureWidth,h.textureHeight,{format:Vn,type:Rn,depthTexture:new fa(h.textureWidth,h.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const O={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,O),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new mn(d.framebufferWidth,d.framebufferHeight,{format:Vn,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(se){for(let B=0;B<se.removed.length;B++){const O=se.removed[B],q=x.indexOf(O);q>=0&&(x[q]=null,R[q].disconnect(O))}for(let B=0;B<se.added.length;B++){const O=se.added[B];let q=x.indexOf(O);if(q===-1){for(let de=0;de<R.length;de++)if(de>=x.length){x.push(O),q=de;break}else if(x[de]===null){x[de]=O,q=de;break}if(q===-1)break}const ce=R[q];ce&&ce.connect(O)}}const oe=new K,he=new K;function be(se,B,O){oe.setFromMatrixPosition(B.matrixWorld),he.setFromMatrixPosition(O.matrixWorld);const q=oe.distanceTo(he),ce=B.projectionMatrix.elements,de=O.projectionMatrix.elements,D=ce[14]/(ce[10]-1),w=ce[14]/(ce[10]+1),U=(ce[9]+1)/ce[5],H=(ce[9]-1)/ce[5],L=(ce[8]-1)/ce[0],j=(de[8]+1)/de[0],C=D*L,fe=D*j,re=q/(-L+j),ie=re*-L;if(B.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(ie),se.translateZ(re),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),ce[10]===-1)se.projectionMatrix.copy(B.projectionMatrix),se.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{const ue=D+re,y=w+re,_=C-ie,F=fe+(q-ie),Z=U*w/y*ue,ae=H*w/y*ue;se.projectionMatrix.makePerspective(_,F,Z,ae,ue,y),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function Se(se,B){B===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(B.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;let B=se.near,O=se.far;g.texture!==null&&(g.depthNear>0&&(B=g.depthNear),g.depthFar>0&&(O=g.depthFar)),N.near=W.near=S.near=B,N.far=W.far=S.far=O,(z!==N.near||ee!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),z=N.near,ee=N.far),N.layers.mask=se.layers.mask|6,S.layers.mask=N.layers.mask&-5,W.layers.mask=N.layers.mask&-3;const q=se.parent,ce=N.cameras;Se(N,q);for(let de=0;de<ce.length;de++)Se(ce[de],q);ce.length===2?be(N,S,W):N.projectionMatrix.copy(S.projectionMatrix),me(se,N,q)};function me(se,B,O){O===null?se.matrix.copy(B.matrixWorld):(se.matrix.copy(O.matrixWorld),se.matrix.invert(),se.matrix.multiply(B.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(B.projectionMatrix),se.projectionMatrixInverse.copy(B.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=pu*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(se){l=se,h!==null&&(h.fixedFoveation=se),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=se)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(se){return p[se]};let He=null;function Qe(se,B){if(u=B.getViewerPose(c||a),m=B,u!==null){const O=u.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let q=!1;O.length!==N.cameras.length&&(N.cameras.length=0,q=!0);for(let w=0;w<O.length;w++){const U=O[w];let H=null;if(d!==null)H=d.getViewport(U);else{const j=f.getViewSubImage(h,U);H=j.viewport,w===0&&(e.setRenderTargetTextures(E,j.colorTexture,j.depthStencilTexture),e.setRenderTarget(E))}let L=I[w];L===void 0&&(L=new Cn,L.layers.enable(w),L.viewport=new It,I[w]=L),L.matrix.fromArray(U.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(U.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(H.x,H.y,H.width,H.height),w===0&&(N.matrix.copy(L.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),q===!0&&N.cameras.push(L)}const ce=r.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){f=i.getBinding();const w=f.getDepthInformation(O[0]);w&&w.isValid&&w.texture&&g.init(w,r.renderState)}if(ce&&ce.includes("camera-access")&&b){e.state.unbindTexture(),f=i.getBinding();for(let w=0;w<O.length;w++){const U=O[w].camera;if(U){let H=p[U];H||(H=new Tm,p[U]=H);const L=f.getCameraImage(U);H.sourceTexture=L}}}}for(let O=0;O<R.length;O++){const q=x[O],ce=R[O];q!==null&&ce!==void 0&&ce.update(q,B,c||a)}He&&He(se,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),m=null}const et=new Cm;et.setAnimationLoop(Qe),this.setAnimationLoop=function(se){He=se},this.dispose=function(){}}}const mr=new Ni,eT=new Pt;function tT(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,wm(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,M,A,E){p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),f(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,E)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),b(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,M,A):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===pn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===pn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=e.get(p),A=M.envMap,E=M.envMapRotation;A&&(g.envMap.value=A,mr.copy(E),mr.x*=-1,mr.y*=-1,mr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),g.envMapRotation.value.setFromMatrix4(eT.makeRotationFromEuler(mr)),g.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,A){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=A*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){const M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nT(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,A){const E=A.program;i.uniformBlockBinding(M,E)}function c(M,A){let E=r[M.id];E===void 0&&(m(M),E=u(M),r[M.id]=E,M.addEventListener("dispose",g));const R=A.program;i.updateUBOMapping(M,R);const x=e.render.frame;s[M.id]!==x&&(h(M),s[M.id]=x)}function u(M){const A=f();M.__bindingPointIndex=A;const E=n.createBuffer(),R=M.__size,x=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,E),E}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const A=r[M.id],E=M.uniforms,R=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let x=0,P=E.length;x<P;x++){const v=Array.isArray(E[x])?E[x]:[E[x]];for(let S=0,W=v.length;S<W;S++){const I=v[S];if(d(I,x,S,R)===!0){const N=I.__offset,z=Array.isArray(I.value)?I.value:[I.value];let ee=0;for(let X=0;X<z.length;X++){const $=z[X],k=b($);typeof $=="number"||typeof $=="boolean"?(I.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,N+ee,I.__data)):$.isMatrix3?(I.__data[0]=$.elements[0],I.__data[1]=$.elements[1],I.__data[2]=$.elements[2],I.__data[3]=0,I.__data[4]=$.elements[3],I.__data[5]=$.elements[4],I.__data[6]=$.elements[5],I.__data[7]=0,I.__data[8]=$.elements[6],I.__data[9]=$.elements[7],I.__data[10]=$.elements[8],I.__data[11]=0):($.toArray(I.__data,ee),ee+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,A,E,R){const x=M.value,P=A+"_"+E;if(R[P]===void 0)return typeof x=="number"||typeof x=="boolean"?R[P]=x:R[P]=x.clone(),!0;{const v=R[P];if(typeof x=="number"||typeof x=="boolean"){if(v!==x)return R[P]=x,!0}else if(v.equals(x)===!1)return v.copy(x),!0}return!1}function m(M){const A=M.uniforms;let E=0;const R=16;for(let P=0,v=A.length;P<v;P++){const S=Array.isArray(A[P])?A[P]:[A[P]];for(let W=0,I=S.length;W<I;W++){const N=S[W],z=Array.isArray(N.value)?N.value:[N.value];for(let ee=0,X=z.length;ee<X;ee++){const $=z[ee],k=b($),oe=E%R,he=oe%k.boundary,be=oe+he;E+=he,be!==0&&R-be<k.storage&&(E+=R-be),N.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=k.storage}}}const x=E%R;return x>0&&(E+=R-x),M.__size=E,M.__cache={},this}function b(M){const A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):$e("WebGLRenderer: Unsupported uniform value type.",M),A}function g(M){const A=M.target;A.removeEventListener("dispose",g);const E=a.indexOf(A.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function p(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}const iT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qn=null;function rT(){return Qn===null&&(Qn=new jx(iT,16,16,Ss,En),Qn.name="DFG_LUT",Qn.minFilter=Qt,Qn.magFilter=Qt,Qn.wrapS=Ri,Qn.wrapT=Ri,Qn.generateMipmaps=!1,Qn.needsUpdate=!0),Qn}class sT{constructor(e={}){const{canvas:t=Tx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Rn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const b=d,g=new Set([$u,Xu,Wu]),p=new Set([Rn,pi,ca,ua,Hu,Gu]),M=new Uint32Array(4),A=new Int32Array(4);let E=null,R=null;const x=[],P=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let W=!1;this._outputColorSpace=An;let I=0,N=0,z=null,ee=-1,X=null;const $=new It,k=new It;let oe=null;const he=new Xe(0);let be=0,Se=t.width,me=t.height,He=1,Qe=null,et=null;const se=new It(0,0,Se,me),B=new It(0,0,Se,me);let O=!1;const q=new Mm;let ce=!1,de=!1;const D=new Pt,w=new K,U=new It,H={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let L=!1;function j(){return z===null?He:1}let C=i;function fe(T,G){return t.getContext(T,G)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bu}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",bt,!1),C===null){const G="webgl2";if(C=fe(G,T),C===null)throw fe(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw at("WebGLRenderer: "+T.message),T}let re,ie,ue,y,_,F,Z,ae,J,ye,ge,Le,ke,pe,ve,Ee,Ce,Re,je,V,Me,xe,Ue;function _e(){re=new sy(C),re.init(),Me=new jE(C,re),ie=new ZM(C,re,e,Me),ue=new qE(C,re),ie.reversedDepthBuffer&&h&&ue.buffers.depth.setReversed(!0),y=new ly(C),_=new LE,F=new YE(C,re,ue,_,ie,Me,y),Z=new ry(S),ae=new dS(C),xe=new jM(C,ae),J=new ay(C,ae,y,xe),ye=new uy(C,J,ae,xe,y),Re=new cy(C,ie,F),ve=new JM(_),ge=new IE(S,Z,re,ie,xe,ve),Le=new tT(S,_),ke=new NE,pe=new VE(re),Ce=new YM(S,Z,ue,ye,m,l),Ee=new $E(S,ye,ie),Ue=new nT(C,y,ie,ue),je=new KM(C,re,y),V=new oy(C,re,y),y.programs=ge.programs,S.capabilities=ie,S.extensions=re,S.properties=_,S.renderLists=ke,S.shadowMap=Ee,S.state=ue,S.info=y}_e(),b!==Rn&&(v=new hy(b,t.width,t.height,r,s));const le=new QE(S,C);this.xr=le,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const T=re.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=re.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return He},this.setPixelRatio=function(T){T!==void 0&&(He=T,this.setSize(Se,me,!1))},this.getSize=function(T){return T.set(Se,me)},this.setSize=function(T,G,ne=!0){if(le.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=T,me=G,t.width=Math.floor(T*He),t.height=Math.floor(G*He),ne===!0&&(t.style.width=T+"px",t.style.height=G+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(Se*He,me*He).floor()},this.setDrawingBufferSize=function(T,G,ne){Se=T,me=G,He=ne,t.width=Math.floor(T*ne),t.height=Math.floor(G*ne),this.setViewport(0,0,T,G)},this.setEffects=function(T){if(b===Rn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let G=0;G<T.length;G++)if(T[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy($)},this.getViewport=function(T){return T.copy(se)},this.setViewport=function(T,G,ne,te){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,G,ne,te),ue.viewport($.copy(se).multiplyScalar(He).round())},this.getScissor=function(T){return T.copy(B)},this.setScissor=function(T,G,ne,te){T.isVector4?B.set(T.x,T.y,T.z,T.w):B.set(T,G,ne,te),ue.scissor(k.copy(B).multiplyScalar(He).round())},this.getScissorTest=function(){return O},this.setScissorTest=function(T){ue.setScissorTest(O=T)},this.setOpaqueSort=function(T){Qe=T},this.setTransparentSort=function(T){et=T},this.getClearColor=function(T){return T.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(T=!0,G=!0,ne=!0){let te=0;if(T){let Q=!1;if(z!==null){const we=z.texture.format;Q=g.has(we)}if(Q){const we=z.texture.type,Ie=p.has(we),Ae=Ce.getClearColor(),Oe=Ce.getClearAlpha(),ze=Ae.r,Ke=Ae.g,tt=Ae.b;Ie?(M[0]=ze,M[1]=Ke,M[2]=tt,M[3]=Oe,C.clearBufferuiv(C.COLOR,0,M)):(A[0]=ze,A[1]=Ke,A[2]=tt,A[3]=Oe,C.clearBufferiv(C.COLOR,0,A))}else te|=C.COLOR_BUFFER_BIT}G&&(te|=C.DEPTH_BUFFER_BIT),ne&&(te|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&C.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",bt,!1),Ce.dispose(),ke.dispose(),pe.dispose(),_.dispose(),Z.dispose(),ye.dispose(),xe.dispose(),Ue.dispose(),ge.dispose(),le.dispose(),le.removeEventListener("sessionstart",df),le.removeEventListener("sessionend",pf),rr.stop()};function Fe(T){T.preventDefault(),Ro("WebGLRenderer: Context Lost."),W=!0}function qe(){Ro("WebGLRenderer: Context Restored."),W=!1;const T=y.autoReset,G=Ee.enabled,ne=Ee.autoUpdate,te=Ee.needsUpdate,Q=Ee.type;_e(),y.autoReset=T,Ee.enabled=G,Ee.autoUpdate=ne,Ee.needsUpdate=te,Ee.type=Q}function bt(T){at("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function dt(T){const G=T.target;G.removeEventListener("dispose",dt),mi(G)}function mi(T){gi(T),_.remove(T)}function gi(T){const G=_.get(T).programs;G!==void 0&&(G.forEach(function(ne){ge.releaseProgram(ne)}),T.isShaderMaterial&&ge.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,ne,te,Q,we){G===null&&(G=H);const Ie=Q.isMesh&&Q.matrixWorld.determinant()<0,Ae=qm(T,G,ne,te,Q);ue.setMaterial(te,Ie);let Oe=ne.index,ze=1;if(te.wireframe===!0){if(Oe=J.getWireframeAttribute(ne),Oe===void 0)return;ze=2}const Ke=ne.drawRange,tt=ne.attributes.position;let Ve=Ke.start*ze,mt=(Ke.start+Ke.count)*ze;we!==null&&(Ve=Math.max(Ve,we.start*ze),mt=Math.min(mt,(we.start+we.count)*ze)),Oe!==null?(Ve=Math.max(Ve,0),mt=Math.min(mt,Oe.count)):tt!=null&&(Ve=Math.max(Ve,0),mt=Math.min(mt,tt.count));const Dt=mt-Ve;if(Dt<0||Dt===1/0)return;xe.setup(Q,te,Ae,ne,Oe);let Ct,gt=je;if(Oe!==null&&(Ct=ae.get(Oe),gt=V,gt.setIndex(Ct)),Q.isMesh)te.wireframe===!0?(ue.setLineWidth(te.wireframeLinewidth*j()),gt.setMode(C.LINES)):gt.setMode(C.TRIANGLES);else if(Q.isLine){let qt=te.linewidth;qt===void 0&&(qt=1),ue.setLineWidth(qt*j()),Q.isLineSegments?gt.setMode(C.LINES):Q.isLineLoop?gt.setMode(C.LINE_LOOP):gt.setMode(C.LINE_STRIP)}else Q.isPoints?gt.setMode(C.POINTS):Q.isSprite&&gt.setMode(C.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Po("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))gt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const qt=Q._multiDrawStarts,Be=Q._multiDrawCounts,vn=Q._multiDrawCount,lt=Oe?ae.get(Oe).bytesPerElement:1,Nn=_.get(te).currentProgram.getUniforms();for(let Kn=0;Kn<vn;Kn++)Nn.setValue(C,"_gl_DrawID",Kn),gt.render(qt[Kn]/lt,Be[Kn])}else if(Q.isInstancedMesh)gt.renderInstances(Ve,Dt,Q.count);else if(ne.isInstancedBufferGeometry){const qt=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Be=Math.min(ne.instanceCount,qt);gt.renderInstances(Ve,Dt,Be)}else gt.render(Ve,Dt)};function hf(T,G,ne){T.transparent===!0&&T.side===ri&&T.forceSinglePass===!1?(T.side=pn,T.needsUpdate=!0,Ma(T,G,ne),T.side=ir,T.needsUpdate=!0,Ma(T,G,ne),T.side=ri):Ma(T,G,ne)}this.compile=function(T,G,ne=null){ne===null&&(ne=T),R=pe.get(ne),R.init(G),P.push(R),ne.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(R.pushLight(Q),Q.castShadow&&R.pushShadow(Q))}),T!==ne&&T.traverseVisible(function(Q){Q.isLight&&Q.layers.test(G.layers)&&(R.pushLight(Q),Q.castShadow&&R.pushShadow(Q))}),R.setupLights();const te=new Set;return T.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const we=Q.material;if(we)if(Array.isArray(we))for(let Ie=0;Ie<we.length;Ie++){const Ae=we[Ie];hf(Ae,ne,Q),te.add(Ae)}else hf(we,ne,Q),te.add(we)}),R=P.pop(),te},this.compileAsync=function(T,G,ne=null){const te=this.compile(T,G,ne);return new Promise(Q=>{function we(){if(te.forEach(function(Ie){_.get(Ie).currentProgram.isReady()&&te.delete(Ie)}),te.size===0){Q(T);return}setTimeout(we,10)}re.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let ll=null;function $m(T){ll&&ll(T)}function df(){rr.stop()}function pf(){rr.start()}const rr=new Cm;rr.setAnimationLoop($m),typeof self<"u"&&rr.setContext(self),this.setAnimationLoop=function(T){ll=T,le.setAnimationLoop(T),T===null?rr.stop():rr.start()},le.addEventListener("sessionstart",df),le.addEventListener("sessionend",pf),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;const ne=le.enabled===!0&&le.isPresenting===!0,te=v!==null&&(z===null||ne)&&v.begin(S,z);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(G),G=le.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,G,z),R=pe.get(T,P.length),R.init(G),P.push(R),D.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),q.setFromProjectionMatrix(D,li,G.reversedDepth),de=this.localClippingEnabled,ce=ve.init(this.clippingPlanes,de),E=ke.get(T,x.length),E.init(),x.push(E),le.enabled===!0&&le.isPresenting===!0){const Ie=S.xr.getDepthSensingMesh();Ie!==null&&cl(Ie,G,-1/0,S.sortObjects)}cl(T,G,0,S.sortObjects),E.finish(),S.sortObjects===!0&&E.sort(Qe,et),L=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,L&&Ce.addToRenderList(E,T),this.info.render.frame++,ce===!0&&ve.beginShadows();const Q=R.state.shadowsArray;if(Ee.render(Q,T,G),ce===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&v.hasRenderPass())===!1){const Ie=E.opaque,Ae=E.transmissive;if(R.setupLights(),G.isArrayCamera){const Oe=G.cameras;if(Ae.length>0)for(let ze=0,Ke=Oe.length;ze<Ke;ze++){const tt=Oe[ze];gf(Ie,Ae,T,tt)}L&&Ce.render(T);for(let ze=0,Ke=Oe.length;ze<Ke;ze++){const tt=Oe[ze];mf(E,T,tt,tt.viewport)}}else Ae.length>0&&gf(Ie,Ae,T,G),L&&Ce.render(T),mf(E,T,G)}z!==null&&N===0&&(F.updateMultisampleRenderTarget(z),F.updateRenderTargetMipmap(z)),te&&v.end(S),T.isScene===!0&&T.onAfterRender(S,T,G),xe.resetDefaultState(),ee=-1,X=null,P.pop(),P.length>0?(R=P[P.length-1],ce===!0&&ve.setGlobalState(S.clippingPlanes,R.state.camera)):R=null,x.pop(),x.length>0?E=x[x.length-1]:E=null};function cl(T,G,ne,te){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)ne=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)R.pushLight(T),T.castShadow&&R.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){te&&U.setFromMatrixPosition(T.matrixWorld).applyMatrix4(D);const Ie=ye.update(T),Ae=T.material;Ae.visible&&E.push(T,Ie,Ae,ne,U.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){const Ie=ye.update(T),Ae=T.material;if(te&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),U.copy(T.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),U.copy(Ie.boundingSphere.center)),U.applyMatrix4(T.matrixWorld).applyMatrix4(D)),Array.isArray(Ae)){const Oe=Ie.groups;for(let ze=0,Ke=Oe.length;ze<Ke;ze++){const tt=Oe[ze],Ve=Ae[tt.materialIndex];Ve&&Ve.visible&&E.push(T,Ie,Ve,ne,U.z,tt)}}else Ae.visible&&E.push(T,Ie,Ae,ne,U.z,null)}}const we=T.children;for(let Ie=0,Ae=we.length;Ie<Ae;Ie++)cl(we[Ie],G,ne,te)}function mf(T,G,ne,te){const{opaque:Q,transmissive:we,transparent:Ie}=T;R.setupLightsView(ne),ce===!0&&ve.setGlobalState(S.clippingPlanes,ne),te&&ue.viewport($.copy(te)),Q.length>0&&ba(Q,G,ne),we.length>0&&ba(we,G,ne),Ie.length>0&&ba(Ie,G,ne),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function gf(T,G,ne,te){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[te.id]===void 0){const Ve=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[te.id]=new mn(1,1,{generateMipmaps:!0,type:Ve?En:Rn,minFilter:Tr,samples:ie.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const we=R.state.transmissionRenderTarget[te.id],Ie=te.viewport||$;we.setSize(Ie.z*S.transmissionResolutionScale,Ie.w*S.transmissionResolutionScale);const Ae=S.getRenderTarget(),Oe=S.getActiveCubeFace(),ze=S.getActiveMipmapLevel();S.setRenderTarget(we),S.getClearColor(he),be=S.getClearAlpha(),be<1&&S.setClearColor(16777215,.5),S.clear(),L&&Ce.render(ne);const Ke=S.toneMapping;S.toneMapping=fi;const tt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),R.setupLightsView(te),ce===!0&&ve.setGlobalState(S.clippingPlanes,te),ba(T,ne,te),F.updateMultisampleRenderTarget(we),F.updateRenderTargetMipmap(we),re.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let mt=0,Dt=G.length;mt<Dt;mt++){const Ct=G[mt],{object:gt,geometry:qt,material:Be,group:vn}=Ct;if(Be.side===ri&&gt.layers.test(te.layers)){const lt=Be.side;Be.side=pn,Be.needsUpdate=!0,_f(gt,ne,te,qt,Be,vn),Be.side=lt,Be.needsUpdate=!0,Ve=!0}}Ve===!0&&(F.updateMultisampleRenderTarget(we),F.updateRenderTargetMipmap(we))}S.setRenderTarget(Ae,Oe,ze),S.setClearColor(he,be),tt!==void 0&&(te.viewport=tt),S.toneMapping=Ke}function ba(T,G,ne){const te=G.isScene===!0?G.overrideMaterial:null;for(let Q=0,we=T.length;Q<we;Q++){const Ie=T[Q],{object:Ae,geometry:Oe,group:ze}=Ie;let Ke=Ie.material;Ke.allowOverride===!0&&te!==null&&(Ke=te),Ae.layers.test(ne.layers)&&_f(Ae,G,ne,Oe,Ke,ze)}}function _f(T,G,ne,te,Q,we){T.onBeforeRender(S,G,ne,te,Q,we),T.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Q.onBeforeRender(S,G,ne,te,T,we),Q.transparent===!0&&Q.side===ri&&Q.forceSinglePass===!1?(Q.side=pn,Q.needsUpdate=!0,S.renderBufferDirect(ne,G,te,Q,T,we),Q.side=ir,Q.needsUpdate=!0,S.renderBufferDirect(ne,G,te,Q,T,we),Q.side=ri):S.renderBufferDirect(ne,G,te,Q,T,we),T.onAfterRender(S,G,ne,te,Q,we)}function Ma(T,G,ne){G.isScene!==!0&&(G=H);const te=_.get(T),Q=R.state.lights,we=R.state.shadowsArray,Ie=Q.state.version,Ae=ge.getParameters(T,Q.state,we,G,ne),Oe=ge.getProgramCacheKey(Ae);let ze=te.programs;te.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,te.fog=G.fog;const Ke=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;te.envMap=Z.get(T.envMap||te.environment,Ke),te.envMapRotation=te.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,ze===void 0&&(T.addEventListener("dispose",dt),ze=new Map,te.programs=ze);let tt=ze.get(Oe);if(tt!==void 0){if(te.currentProgram===tt&&te.lightsStateVersion===Ie)return xf(T,Ae),tt}else Ae.uniforms=ge.getUniforms(T),T.onBeforeCompile(Ae,S),tt=ge.acquireProgram(Ae,Oe),ze.set(Oe,tt),te.uniforms=Ae.uniforms;const Ve=te.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ve.clippingPlanes=ve.uniform),xf(T,Ae),te.needsLights=jm(T),te.lightsStateVersion=Ie,te.needsLights&&(Ve.ambientLightColor.value=Q.state.ambient,Ve.lightProbe.value=Q.state.probe,Ve.directionalLights.value=Q.state.directional,Ve.directionalLightShadows.value=Q.state.directionalShadow,Ve.spotLights.value=Q.state.spot,Ve.spotLightShadows.value=Q.state.spotShadow,Ve.rectAreaLights.value=Q.state.rectArea,Ve.ltc_1.value=Q.state.rectAreaLTC1,Ve.ltc_2.value=Q.state.rectAreaLTC2,Ve.pointLights.value=Q.state.point,Ve.pointLightShadows.value=Q.state.pointShadow,Ve.hemisphereLights.value=Q.state.hemi,Ve.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ve.spotLightMatrix.value=Q.state.spotLightMatrix,Ve.spotLightMap.value=Q.state.spotLightMap,Ve.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.currentProgram=tt,te.uniformsList=null,tt}function vf(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=ho.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function xf(T,G){const ne=_.get(T);ne.outputColorSpace=G.outputColorSpace,ne.batching=G.batching,ne.batchingColor=G.batchingColor,ne.instancing=G.instancing,ne.instancingColor=G.instancingColor,ne.instancingMorph=G.instancingMorph,ne.skinning=G.skinning,ne.morphTargets=G.morphTargets,ne.morphNormals=G.morphNormals,ne.morphColors=G.morphColors,ne.morphTargetsCount=G.morphTargetsCount,ne.numClippingPlanes=G.numClippingPlanes,ne.numIntersection=G.numClipIntersection,ne.vertexAlphas=G.vertexAlphas,ne.vertexTangents=G.vertexTangents,ne.toneMapping=G.toneMapping}function qm(T,G,ne,te,Q){G.isScene!==!0&&(G=H),F.resetTextureUnits();const we=G.fog,Ie=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?G.environment:null,Ae=z===null?S.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:bs,Oe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,ze=Z.get(te.envMap||Ie,Oe),Ke=te.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,tt=!!ne.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ve=!!ne.morphAttributes.position,mt=!!ne.morphAttributes.normal,Dt=!!ne.morphAttributes.color;let Ct=fi;te.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Ct=S.toneMapping);const gt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,qt=gt!==void 0?gt.length:0,Be=_.get(te),vn=R.state.lights;if(ce===!0&&(de===!0||T!==X)){const Bt=T===X&&te.id===ee;ve.setState(te,T,Bt)}let lt=!1;te.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==vn.state.version||Be.outputColorSpace!==Ae||Q.isBatchedMesh&&Be.batching===!1||!Q.isBatchedMesh&&Be.batching===!0||Q.isBatchedMesh&&Be.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Be.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Be.instancing===!1||!Q.isInstancedMesh&&Be.instancing===!0||Q.isSkinnedMesh&&Be.skinning===!1||!Q.isSkinnedMesh&&Be.skinning===!0||Q.isInstancedMesh&&Be.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Be.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Be.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Be.instancingMorph===!1&&Q.morphTexture!==null||Be.envMap!==ze||te.fog===!0&&Be.fog!==we||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ve.numPlanes||Be.numIntersection!==ve.numIntersection)||Be.vertexAlphas!==Ke||Be.vertexTangents!==tt||Be.morphTargets!==Ve||Be.morphNormals!==mt||Be.morphColors!==Dt||Be.toneMapping!==Ct||Be.morphTargetsCount!==qt)&&(lt=!0):(lt=!0,Be.__version=te.version);let Nn=Be.currentProgram;lt===!0&&(Nn=Ma(te,G,Q));let Kn=!1,sr=!1,Fr=!1;const xt=Nn.getUniforms(),Gt=Be.uniforms;if(ue.useProgram(Nn.program)&&(Kn=!0,sr=!0,Fr=!0),te.id!==ee&&(ee=te.id,sr=!0),Kn||X!==T){ue.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),xt.setValue(C,"projectionMatrix",T.projectionMatrix),xt.setValue(C,"viewMatrix",T.matrixWorldInverse);const ki=xt.map.cameraPosition;ki!==void 0&&ki.setValue(C,w.setFromMatrixPosition(T.matrixWorld)),ie.logarithmicDepthBuffer&&xt.setValue(C,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&xt.setValue(C,"isOrthographic",T.isOrthographicCamera===!0),X!==T&&(X=T,sr=!0,Fr=!0)}if(Be.needsLights&&(vn.state.directionalShadowMap.length>0&&xt.setValue(C,"directionalShadowMap",vn.state.directionalShadowMap,F),vn.state.spotShadowMap.length>0&&xt.setValue(C,"spotShadowMap",vn.state.spotShadowMap,F),vn.state.pointShadowMap.length>0&&xt.setValue(C,"pointShadowMap",vn.state.pointShadowMap,F)),Q.isSkinnedMesh){xt.setOptional(C,Q,"bindMatrix"),xt.setOptional(C,Q,"bindMatrixInverse");const Bt=Q.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),xt.setValue(C,"boneTexture",Bt.boneTexture,F))}Q.isBatchedMesh&&(xt.setOptional(C,Q,"batchingTexture"),xt.setValue(C,"batchingTexture",Q._matricesTexture,F),xt.setOptional(C,Q,"batchingIdTexture"),xt.setValue(C,"batchingIdTexture",Q._indirectTexture,F),xt.setOptional(C,Q,"batchingColorTexture"),Q._colorsTexture!==null&&xt.setValue(C,"batchingColorTexture",Q._colorsTexture,F));const Oi=ne.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&Re.update(Q,ne,Nn),(sr||Be.receiveShadow!==Q.receiveShadow)&&(Be.receiveShadow=Q.receiveShadow,xt.setValue(C,"receiveShadow",Q.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&G.environment!==null&&(Gt.envMapIntensity.value=G.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=rT()),sr&&(xt.setValue(C,"toneMappingExposure",S.toneMappingExposure),Be.needsLights&&Ym(Gt,Fr),we&&te.fog===!0&&Le.refreshFogUniforms(Gt,we),Le.refreshMaterialUniforms(Gt,te,He,me,R.state.transmissionRenderTarget[T.id]),ho.upload(C,vf(Be),Gt,F)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(ho.upload(C,vf(Be),Gt,F),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&xt.setValue(C,"center",Q.center),xt.setValue(C,"modelViewMatrix",Q.modelViewMatrix),xt.setValue(C,"normalMatrix",Q.normalMatrix),xt.setValue(C,"modelMatrix",Q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Bt=te.uniformsGroups;for(let ki=0,Or=Bt.length;ki<Or;ki++){const Sf=Bt[ki];Ue.update(Sf,Nn),Ue.bind(Sf,Nn)}}return Nn}function Ym(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function jm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(T,G,ne){const te=_.get(T);te.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),_.get(T.texture).__webglTexture=G,_.get(T.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ne,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,G){const ne=_.get(T);ne.__webglFramebuffer=G,ne.__useDefaultFramebuffer=G===void 0};const Km=C.createFramebuffer();this.setRenderTarget=function(T,G=0,ne=0){z=T,I=G,N=ne;let te=null,Q=!1,we=!1;if(T){const Ae=_.get(T);if(Ae.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(C.FRAMEBUFFER,Ae.__webglFramebuffer),$.copy(T.viewport),k.copy(T.scissor),oe=T.scissorTest,ue.viewport($),ue.scissor(k),ue.setScissorTest(oe),ee=-1;return}else if(Ae.__webglFramebuffer===void 0)F.setupRenderTarget(T);else if(Ae.__hasExternalTextures)F.rebindTextures(T,_.get(T.texture).__webglTexture,_.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ke=T.depthTexture;if(Ae.__boundDepthTexture!==Ke){if(Ke!==null&&_.has(Ke)&&(T.width!==Ke.image.width||T.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(T)}}const Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(we=!0);const ze=_.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[G])?te=ze[G][ne]:te=ze[G],Q=!0):T.samples>0&&F.useMultisampledRTT(T)===!1?te=_.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?te=ze[ne]:te=ze,$.copy(T.viewport),k.copy(T.scissor),oe=T.scissorTest}else $.copy(se).multiplyScalar(He).floor(),k.copy(B).multiplyScalar(He).floor(),oe=O;if(ne!==0&&(te=Km),ue.bindFramebuffer(C.FRAMEBUFFER,te)&&ue.drawBuffers(T,te),ue.viewport($),ue.scissor(k),ue.setScissorTest(oe),Q){const Ae=_.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ae.__webglTexture,ne)}else if(we){const Ae=G;for(let Oe=0;Oe<T.textures.length;Oe++){const ze=_.get(T.textures[Oe]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Oe,ze.__webglTexture,ne,Ae)}}else if(T!==null&&ne!==0){const Ae=_.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ae.__webglTexture,ne)}ee=-1},this.readRenderTargetPixels=function(T,G,ne,te,Q,we,Ie,Ae=0){if(!(T&&T.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=_.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){ue.bindFramebuffer(C.FRAMEBUFFER,Oe);try{const ze=T.textures[Ae],Ke=ze.format,tt=ze.type;if(T.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ae),!ie.textureFormatReadable(Ke)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(tt)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-te&&ne>=0&&ne<=T.height-Q&&C.readPixels(G,ne,te,Q,Me.convert(Ke),Me.convert(tt),we)}finally{const ze=z!==null?_.get(z).__webglFramebuffer:null;ue.bindFramebuffer(C.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(T,G,ne,te,Q,we,Ie,Ae=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=_.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe)if(G>=0&&G<=T.width-te&&ne>=0&&ne<=T.height-Q){ue.bindFramebuffer(C.FRAMEBUFFER,Oe);const ze=T.textures[Ae],Ke=ze.format,tt=ze.type;if(T.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ae),!ie.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ve),C.bufferData(C.PIXEL_PACK_BUFFER,we.byteLength,C.STREAM_READ),C.readPixels(G,ne,te,Q,Me.convert(Ke),Me.convert(tt),0);const mt=z!==null?_.get(z).__webglFramebuffer:null;ue.bindFramebuffer(C.FRAMEBUFFER,mt);const Dt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await wx(C,Dt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ve),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,we),C.deleteBuffer(Ve),C.deleteSync(Dt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,G=null,ne=0){const te=Math.pow(2,-ne),Q=Math.floor(T.image.width*te),we=Math.floor(T.image.height*te),Ie=G!==null?G.x:0,Ae=G!==null?G.y:0;F.setTexture2D(T,0),C.copyTexSubImage2D(C.TEXTURE_2D,ne,0,0,Ie,Ae,Q,we),ue.unbindTexture()};const Zm=C.createFramebuffer(),Jm=C.createFramebuffer();this.copyTextureToTexture=function(T,G,ne=null,te=null,Q=0,we=0){let Ie,Ae,Oe,ze,Ke,tt,Ve,mt,Dt;const Ct=T.isCompressedTexture?T.mipmaps[we]:T.image;if(ne!==null)Ie=ne.max.x-ne.min.x,Ae=ne.max.y-ne.min.y,Oe=ne.isBox3?ne.max.z-ne.min.z:1,ze=ne.min.x,Ke=ne.min.y,tt=ne.isBox3?ne.min.z:0;else{const Gt=Math.pow(2,-Q);Ie=Math.floor(Ct.width*Gt),Ae=Math.floor(Ct.height*Gt),T.isDataArrayTexture?Oe=Ct.depth:T.isData3DTexture?Oe=Math.floor(Ct.depth*Gt):Oe=1,ze=0,Ke=0,tt=0}te!==null?(Ve=te.x,mt=te.y,Dt=te.z):(Ve=0,mt=0,Dt=0);const gt=Me.convert(G.format),qt=Me.convert(G.type);let Be;G.isData3DTexture?(F.setTexture3D(G,0),Be=C.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(F.setTexture2DArray(G,0),Be=C.TEXTURE_2D_ARRAY):(F.setTexture2D(G,0),Be=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,G.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,G.unpackAlignment);const vn=C.getParameter(C.UNPACK_ROW_LENGTH),lt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Nn=C.getParameter(C.UNPACK_SKIP_PIXELS),Kn=C.getParameter(C.UNPACK_SKIP_ROWS),sr=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ct.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ct.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ze),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ke),C.pixelStorei(C.UNPACK_SKIP_IMAGES,tt);const Fr=T.isDataArrayTexture||T.isData3DTexture,xt=G.isDataArrayTexture||G.isData3DTexture;if(T.isDepthTexture){const Gt=_.get(T),Oi=_.get(G),Bt=_.get(Gt.__renderTarget),ki=_.get(Oi.__renderTarget);ue.bindFramebuffer(C.READ_FRAMEBUFFER,Bt.__webglFramebuffer),ue.bindFramebuffer(C.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Or=0;Or<Oe;Or++)Fr&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_.get(T).__webglTexture,Q,tt+Or),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_.get(G).__webglTexture,we,Dt+Or)),C.blitFramebuffer(ze,Ke,Ie,Ae,Ve,mt,Ie,Ae,C.DEPTH_BUFFER_BIT,C.NEAREST);ue.bindFramebuffer(C.READ_FRAMEBUFFER,null),ue.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(Q!==0||T.isRenderTargetTexture||_.has(T)){const Gt=_.get(T),Oi=_.get(G);ue.bindFramebuffer(C.READ_FRAMEBUFFER,Zm),ue.bindFramebuffer(C.DRAW_FRAMEBUFFER,Jm);for(let Bt=0;Bt<Oe;Bt++)Fr?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Gt.__webglTexture,Q,tt+Bt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Gt.__webglTexture,Q),xt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Oi.__webglTexture,we,Dt+Bt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Oi.__webglTexture,we),Q!==0?C.blitFramebuffer(ze,Ke,Ie,Ae,Ve,mt,Ie,Ae,C.COLOR_BUFFER_BIT,C.NEAREST):xt?C.copyTexSubImage3D(Be,we,Ve,mt,Dt+Bt,ze,Ke,Ie,Ae):C.copyTexSubImage2D(Be,we,Ve,mt,ze,Ke,Ie,Ae);ue.bindFramebuffer(C.READ_FRAMEBUFFER,null),ue.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else xt?T.isDataTexture||T.isData3DTexture?C.texSubImage3D(Be,we,Ve,mt,Dt,Ie,Ae,Oe,gt,qt,Ct.data):G.isCompressedArrayTexture?C.compressedTexSubImage3D(Be,we,Ve,mt,Dt,Ie,Ae,Oe,gt,Ct.data):C.texSubImage3D(Be,we,Ve,mt,Dt,Ie,Ae,Oe,gt,qt,Ct):T.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,we,Ve,mt,Ie,Ae,gt,qt,Ct.data):T.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,we,Ve,mt,Ct.width,Ct.height,gt,Ct.data):C.texSubImage2D(C.TEXTURE_2D,we,Ve,mt,Ie,Ae,gt,qt,Ct);C.pixelStorei(C.UNPACK_ROW_LENGTH,vn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,lt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Nn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Kn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,sr),we===0&&G.generateMipmaps&&C.generateMipmap(Be),ue.unbindTexture()},this.initRenderTarget=function(T){_.get(T).__webglFramebuffer===void 0&&F.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?F.setTextureCube(T,0):T.isData3DTexture?F.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?F.setTexture2DArray(T,0):F.setTexture2D(T,0),ue.unbindTexture()},this.resetState=function(){I=0,N=0,z=null,ue.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}const po={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class xa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const aT=new Zu(-1,1,1,-1,0,1);class oT extends _n{constructor(){super(),this.setAttribute("position",new Ln([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ln([0,2,0,0,2,0],2))}}const lT=new oT;class Um{constructor(e){this._mesh=new Yn(lT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,aT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class as extends xa{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof $t?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Io.clone(e.uniforms),this.material=new $t({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Um(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class _d extends xa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class cT extends xa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class uT{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ge);this._width=i.width,this._height=i.height,t=new mn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:En}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new as(po),this.copyPass.material.blending=ui,this.timer=new cS}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}_d!==void 0&&(a instanceof _d?i=!0:a instanceof cT&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ge);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class fT extends xa{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Xe}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const hT={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ys extends xa{constructor(e,t=1,i,r){super(),this.strength=t,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ge(e.x,e.y):new Ge(256,256),this.clearColor=new Xe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new mn(s,a,{type:En}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new mn(s,a,{type:En});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const h=new mn(s,a,{type:En});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),s=Math.round(s/2),a=Math.round(a/2)}const o=hT;this.highPassUniforms=Io.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new $t({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ge(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Io.clone(po.uniforms),this.blendMaterial=new $t({uniforms:this.copyUniforms,vertexShader:po.vertexShader,fragmentShader:po.fragmentShader,premultipliedAlpha:!0,blending:Er,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Xe,this._oldClearAlpha=1,this._basic=new Ku,this._fsQuad=new Um(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Ge(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ys.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ys.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(i*i))/i);return new $t({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ge(.5,.5)},direction:{value:new Ge(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}}ys.BlurDirectionX=new Ge(1,0);ys.BlurDirectionY=new Ge(0,1);const dT=`// Fullscreen triangle technique: a single oversized triangle that
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
`,pT=`precision highp float;

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
`,mT=`precision highp float;

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
`,gT=`precision highp float;

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
`,_T=`precision highp float;

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
`,vT=`precision highp float;

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
`,xT=`precision highp float;

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
`;function ST(n=64){const e=document.createElement("canvas");e.width=n,e.height=n;const t=e.getContext("2d"),i=n/2,r=n/2,s=t.createRadialGradient(i,i,0,i,i,r);s.addColorStop(0,"rgba(255, 255, 255, 1.0)"),s.addColorStop(.15,"rgba(220, 230, 255, 0.8)"),s.addColorStop(.4,"rgba(180, 200, 255, 0.3)"),s.addColorStop(1,"rgba(100, 150, 255, 0.0)"),t.fillStyle=s,t.fillRect(0,0,n,n);const a=new nl(e);return a.needsUpdate=!0,a}function bT(n=64){const e=document.createElement("canvas");e.width=n,e.height=n;const t=e.getContext("2d"),i=n/2,r=n/2,s=t.createRadialGradient(i,i,0,i,i,r);s.addColorStop(0,"rgba(255, 255, 255, 1.0)"),s.addColorStop(.1,"rgba(200, 220, 255, 0.6)"),s.addColorStop(.3,"rgba(14, 91, 255, 0.3)"),s.addColorStop(.6,"rgba(14, 91, 255, 0.1)"),s.addColorStop(1,"rgba(14, 91, 255, 0.0)"),t.fillStyle=s,t.fillRect(0,0,n,n);const a=new nl(e);return a.needsUpdate=!0,a}function MT(n=128){const e=document.createElement("canvas");e.width=n,e.height=n;const t=e.getContext("2d"),i=n/2,r=n/2,s=t.createRadialGradient(i,i,0,i,i,r);s.addColorStop(0,"rgba(100, 180, 255, 0.0)"),s.addColorStop(.3,"rgba(60, 140, 255, 0.08)"),s.addColorStop(.6,"rgba(30, 80, 200, 0.04)"),s.addColorStop(1,"rgba(10, 40, 150, 0.0)"),t.fillStyle=s,t.fillRect(0,0,n,n);const a=t.createRadialGradient(i,i,0,i,i,r*.5);a.addColorStop(0,"rgba(180, 220, 255, 0.0)"),a.addColorStop(.2,"rgba(100, 200, 255, 0.5)"),a.addColorStop(.5,"rgba(40, 120, 255, 0.25)"),a.addColorStop(1,"rgba(14, 91, 255, 0.0)"),t.fillStyle=a,t.fillRect(0,0,n,n);const o=t.createRadialGradient(i,i,0,i,i,r*.2);o.addColorStop(0,"rgba(255, 255, 255, 2.0)"),o.addColorStop(.15,"rgba(240, 248, 255, 1.5)"),o.addColorStop(.4,"rgba(180, 220, 255, 0.8)"),o.addColorStop(.7,"rgba(100, 180, 255, 0.3)"),o.addColorStop(1,"rgba(50, 120, 255, 0.0)"),t.fillStyle=o,t.fillRect(0,0,n,n),t.globalCompositeOperation="lighter";const l=n*.8,c=n*.02,u=t.createRadialGradient(i,i,0,i,i,l*.5);u.addColorStop(0,"rgba(200, 230, 255, 0.6)"),u.addColorStop(.3,"rgba(100, 180, 255, 0.2)"),u.addColorStop(1,"rgba(50, 100, 255, 0.0)"),t.save(),t.translate(i,i),t.scale(1,c/(l*.5)),t.translate(-i,-i),t.fillStyle=u,t.fillRect(0,0,n,n),t.restore();const f=n*.3,h=n*.015,d=t.createRadialGradient(i,i,0,i,i,f*.5);d.addColorStop(0,"rgba(200, 230, 255, 0.3)"),d.addColorStop(.5,"rgba(100, 160, 255, 0.08)"),d.addColorStop(1,"rgba(50, 100, 255, 0.0)"),t.save(),t.translate(i,i),t.scale(h/(f*.5),1),t.translate(-i,-i),t.fillStyle=d,t.fillRect(0,0,n,n),t.restore(),t.globalCompositeOperation="source-over";const m=new nl(e);return m.needsUpdate=!0,m}function yT(n=128){const e=document.createElement("canvas");e.width=n,e.height=n;const t=e.getContext("2d"),i=n/2,r=n/2,s=t.createRadialGradient(i,i,0,i,i,r*.15);s.addColorStop(0,"rgba(255, 255, 255, 2.5)"),s.addColorStop(.3,"rgba(220, 240, 255, 1.2)"),s.addColorStop(.7,"rgba(150, 200, 255, 0.4)"),s.addColorStop(1,"rgba(80, 150, 255, 0.0)"),t.fillStyle=s,t.fillRect(0,0,n,n),t.globalCompositeOperation="lighter";const a=r*.9,o=1.5;for(let c=0;c<4;c++){const u=(c*45+45)*Math.PI/180;t.save(),t.translate(i,i),t.rotate(u);const f=t.createLinearGradient(0,0,a,0);f.addColorStop(0,"rgba(200, 230, 255, 0.8)"),f.addColorStop(.1,"rgba(150, 200, 255, 0.4)"),f.addColorStop(.4,"rgba(80, 150, 255, 0.1)"),f.addColorStop(1,"rgba(40, 80, 200, 0.0)"),t.fillStyle=f,t.fillRect(0,-o/2,a,o);const h=t.createLinearGradient(0,0,-a,0);h.addColorStop(0,"rgba(200, 230, 255, 0.8)"),h.addColorStop(.1,"rgba(150, 200, 255, 0.4)"),h.addColorStop(.4,"rgba(80, 150, 255, 0.1)"),h.addColorStop(1,"rgba(40, 80, 200, 0.0)"),t.fillStyle=h,t.fillRect(-a,-o/2,a,o),t.restore()}t.globalCompositeOperation="source-over";const l=new nl(e);return l.needsUpdate=!0,l}const ET={__name:"WebGLBackground",emits:["ready"],setup(n,{emit:e}){const t=e,i=Pe(null),r={high:{pixelRatio:Math.min(window.devicePixelRatio,2),particles:150,piercingParticles:18,diffractionStars:8,stars:[2e3,800,200],bloom:!0,bloomStrength:1.2,bloomRadius:.8,bloomThreshold:.35,dof:!0,lightRays:!0,grain:!0,chromatic:!0,anamorphicFlare:!0,flareIntensity:.7,streakIntensity:.9,bleedIntensity:.5},medium:{pixelRatio:Math.min(window.devicePixelRatio,1.5),particles:80,piercingParticles:10,diffractionStars:4,stars:[1200,500,100],bloom:!0,bloomStrength:.9,bloomRadius:.6,bloomThreshold:.4,dof:!1,lightRays:!0,grain:!0,chromatic:!1,anamorphicFlare:!0,flareIntensity:.5,streakIntensity:.6,bleedIntensity:.3},low:{pixelRatio:1,particles:40,piercingParticles:5,diffractionStars:2,stars:[600,250,50],bloom:!0,bloomStrength:.6,bloomRadius:.4,bloomThreshold:.5,dof:!1,lightRays:!1,grain:!0,chromatic:!1,anamorphicFlare:!1,flareIntensity:0,streakIntensity:0,bleedIntensity:0}};function s(){const w=window.innerWidth<768||"ontouchstart"in window,U=window.matchMedia("(prefers-reduced-motion: reduce)").matches;return w||U?"low":"high"}let a=s(),o=r[a],l=null,c=null,u=null,f=null,h=null,d=null,m=null,b=[],g=null,p=[],M=null,A=[],E=null,R=[],x=null,P=null,v=null,S=null,W=null,I=null;const N={x:0,y:0},z={x:0,y:0};let ee=!1;function X(w){z.x=w.clientX/window.innerWidth*2-1,z.y=-(w.clientY/window.innerHeight)*2+1}function $(w){if(w.touches.length>0){const U=w.touches[0];z.x=U.clientX/window.innerWidth*2-1,z.y=-(U.clientY/window.innerHeight)*2+1}}const k=[];let oe=0,he=0;function be(w){if(k.push(w),k.length>60&&k.shift(),k.length>=30){const U=k.reduce((H,L)=>H+L,0)/k.length;a==="high"&&U>22?(he++,he>2&&Se("medium")):a==="medium"&&U>33?(he++,he>2&&Se("low")):he=Math.max(0,he-1)}}function Se(w){w!==a&&(a=w,o=r[w],he=0,k.length=0,x&&(x.enabled=o.bloom,x.strength=o.bloomStrength,x.radius=o.bloomRadius,x.threshold=o.bloomThreshold),P&&(P.enabled=o.lightRays),S&&(S.enabled=o.chromatic),I&&(I.enabled=o.anamorphicFlare,o.anamorphicFlare&&(I.uniforms.uFlareIntensity.value=o.flareIntensity,I.uniforms.uStreakIntensity.value=o.streakIntensity,I.uniforms.uBleedIntensity.value=o.bleedIntensity)),W&&(W.uniforms.uDofRadius.value=o.dof?1.5:0),l&&(l.setPixelRatio(o.pixelRatio),f.setPixelRatio(o.pixelRatio)))}function me(w){w.matches&&Se("low")}function He(){document.hidden?d!==null&&(cancelAnimationFrame(d),d=null):d===null&&(oe=performance.now(),D())}let Qe=null;function et(){if(!l||!u||!f)return;const w=window.innerWidth,U=window.innerHeight;l.setSize(w,U),f.setSize(w,U),u.aspect=w/U,u.updateProjectionMatrix(),m&&m.material.uniforms.uResolution.value.set(w,U),P&&P.uniforms.uResolution.value.set(w,U),S&&S.uniforms.uResolution.value.set(w,U),W&&W.uniforms.uResolution.value.set(w,U),I&&I.uniforms.uResolution.value.set(w,U)}function se(){const w=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),U=new _n;U.setAttribute("position",new Ln(w,3));const H=new $t({vertexShader:dT,fragmentShader:pT,uniforms:{uTime:{value:0},uResolution:{value:new Ge(window.innerWidth,window.innerHeight)},uMouse:{value:new Ge(0,0)},uAccentColor:{value:new Xe(941055)},uDeepColor:{value:new Xe(2068)},uMidColor:{value:new Xe(661032)}},depthWrite:!1,depthTest:!0,side:ri});m=new Yn(U,H),m.frustumCulled=!1,m.renderOrder=-10,c.add(m)}function B(){const w=ST(64),U=o.stars,H=[{count:U[0],sizeRange:[.5,1],depthRange:[-80,-50],parallax:.015},{count:U[1],sizeRange:[1,2],depthRange:[-50,-20],parallax:.04},{count:U[2],sizeRange:[2,3.5],depthRange:[-20,-5],parallax:.08}];b=[];for(const L of H){const j=new Float32Array(L.count*3),C=new Float32Array(L.count),fe=new Float32Array(L.count);for(let y=0;y<L.count;y++)j[y*3]=(Math.random()-.5)*200,j[y*3+1]=(Math.random()-.5)*120,j[y*3+2]=L.depthRange[0]+Math.random()*(L.depthRange[1]-L.depthRange[0]),C[y]=L.sizeRange[0]+Math.random()*(L.sizeRange[1]-L.sizeRange[0]),fe[y]=Math.random()*Math.PI*2;const re=new _n;re.setAttribute("position",new gn(j,3)),re.setAttribute("aSize",new gn(C,1)),re.setAttribute("aPhase",new gn(fe,1));const ie=new ym({map:w,size:1.5,sizeAttenuation:!0,transparent:!0,blending:Er,depthWrite:!1,color:13162744}),ue=new Qx(re,ie);ue.userData.parallax=L.parallax,ue.renderOrder=-5,c.add(ue),b.push(ue)}}function O(){const w=bT(64);g=new Ar,p=[];const U=[new Xe(941055),new Xe(13162744),new Xe(3864063)],H=[.6,.3,.1];for(let L=0;L<o.particles;L++){const j=new fo({map:w,transparent:!0,blending:Er,depthWrite:!1,opacity:.15+Math.random()*.45}),C=Math.random();let fe=0;C>H[0]+H[1]?fe=2:C>H[0]&&(fe=1),j.color=U[fe];const re=new Yl(j),ie=(Math.random()-.5)*100,ue=(Math.random()-.5)*60,y=-5-Math.random()*40;re.position.set(ie,ue,y);const _=.5+Math.random()*2;re.scale.set(_,_,1),p.push({sprite:re,baseSize:_,velocity:new K((Math.random()-.5)*.01,(Math.random()-.5)*.008,(Math.random()-.5)*.003),phaseOffset:Math.random()*Math.PI*2,pulseSpeed:.3+Math.random()*.4}),g.add(re)}g.renderOrder=-3,c.add(g)}function q(){const w=MT(128);M=new Ar,A=[];const U=[new Xe(15266047),new Xe(13691135),new Xe(12644607),new Xe(15791359),new Xe(16771312)];for(let H=0;H<o.piercingParticles;H++){const L=new fo({map:w,transparent:!0,blending:Er,depthWrite:!1,opacity:.7+Math.random()*.3}),j=Math.random();let C;j>.95?C=4:j>.75?C=2:j>.5?C=1:j>.25?C=3:C=0,L.color=U[C];const fe=new Yl(L),re=(Math.random()-.5)*90,ie=(Math.random()-.5)*50,ue=-3-Math.random()*30;fe.position.set(re,ie,ue);const y=1.5+Math.random()*3.5,_=2.2+Math.random()*1;fe.scale.set(y*_,y,1),A.push({sprite:fe,baseSize:y,aspectRatio:_,velocity:new K((Math.random()-.5)*.006,(Math.random()-.5)*.004,(Math.random()-.5)*.002),phaseOffset:Math.random()*Math.PI*2,pulseSpeed:.15+Math.random()*.25,pulseAmplitude:.4+Math.random()*.6,burstPhase:Math.random()*Math.PI*2,burstSpeed:.05+Math.random()*.1,burstActive:!1}),M.add(fe)}M.renderOrder=-2,c.add(M)}function ce(){const w=yT(128);E=new Ar,R=[];for(let U=0;U<o.diffractionStars;U++){const H=new fo({map:w,transparent:!0,blending:Er,depthWrite:!1,opacity:.85+Math.random()*.15}),L=Math.random();L>.8?H.color=new Xe(16773344):L>.5?H.color=new Xe(15791359):H.color=new Xe(14215423);const j=new Yl(H),C=(Math.random()-.5)*80,fe=(Math.random()-.5)*45,re=-2-Math.random()*20;j.position.set(C,fe,re);const ie=3+Math.random()*5,ue=2.5+Math.random()*1.5;j.scale.set(ie*ue,ie,1),R.push({sprite:j,baseSize:ie,aspectRatio:ue,velocity:new K((Math.random()-.5)*.003,(Math.random()-.5)*.002,0),phaseOffset:Math.random()*Math.PI*2,pulseSpeed:.08+Math.random()*.12,pulseAmplitude:.3+Math.random()*.5,breathPhase:Math.random()*Math.PI*2,breathSpeed:.03+Math.random()*.05}),E.add(j)}E.renderOrder=-1,c.add(E)}function de(){const w=window.innerWidth,U=window.innerHeight;f=new uT(l),f.setPixelRatio(o.pixelRatio);const H=new fT(c,u);f.addPass(H),x=new ys(new Ge(w,U),o.bloomStrength,o.bloomRadius,o.bloomThreshold),x.enabled=o.bloom,f.addPass(x);const L={uniforms:{tDiffuse:{value:null},uResolution:{value:new Ge(w,U)},uTime:{value:0},uFlareIntensity:{value:o.flareIntensity},uStreakIntensity:{value:o.streakIntensity},uBleedIntensity:{value:o.bleedIntensity}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:xT};I=new as(L),I.enabled=o.anamorphicFlare,f.addPass(I);const j={uniforms:{tDiffuse:{value:null},uResolution:{value:new Ge(w,U)},uTime:{value:0},uIntensity:{value:.15}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:mT};P=new as(j),P.enabled=o.lightRays,f.addPass(P);const C={uniforms:{tDiffuse:{value:null},uTime:{value:0},uIntensity:{value:.04}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:gT};v=new as(C),v.enabled=o.grain,f.addPass(v);const fe={uniforms:{tDiffuse:{value:null},uResolution:{value:new Ge(w,U)},uIntensity:{value:.0015}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:_T};S=new as(fe),S.enabled=o.chromatic,f.addPass(S);const re={uniforms:{tDiffuse:{value:null},uResolution:{value:new Ge(w,U)},uVignetteIntensity:{value:.5},uDofRadius:{value:o.dof?1.5:0}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:vT};W=new as(re),f.addPass(W)}function D(){d=requestAnimationFrame(D);const w=performance.now(),U=w-oe;oe=w,be(U);const H=h.getElapsedTime();if(ee&&(z.x=.3*Math.sin(H*.05),z.y=.2*Math.cos(H*.037)),N.x+=(z.x-N.x)*.02,N.y+=(z.y-N.y)*.02,m){const L=m.material.uniforms;L.uTime.value=H,L.uMouse.value.set(N.x,N.y)}for(const L of b){const j=L.userData.parallax;L.position.x=N.x*j*10,L.position.y=N.y*j*10,L.material&&(L.material.opacity=.7+.3*Math.sin(H*.5))}for(const L of p){L.sprite.position.add(L.velocity),L.sprite.position.x>50&&(L.sprite.position.x=-50),L.sprite.position.x<-50&&(L.sprite.position.x=50),L.sprite.position.y>30&&(L.sprite.position.y=-30),L.sprite.position.y<-30&&(L.sprite.position.y=30);const j=1+.3*Math.sin(H*L.pulseSpeed+L.phaseOffset),C=L.baseSize*j;L.sprite.scale.set(C,C,1)}for(const L of A){L.sprite.position.add(L.velocity),L.sprite.position.x>45&&(L.sprite.position.x=-45),L.sprite.position.x<-45&&(L.sprite.position.x=45),L.sprite.position.y>25&&(L.sprite.position.y=-25),L.sprite.position.y<-25&&(L.sprite.position.y=25);const j=1+L.pulseAmplitude*Math.sin(H*L.pulseSpeed+L.phaseOffset),C=L.baseSize*j;L.sprite.scale.set(C*L.aspectRatio,C,1);const fe=.6+.4*Math.sin(H*L.pulseSpeed*.7+L.phaseOffset);L.sprite.material.opacity=fe;const re=Math.sin(H*L.burstSpeed+L.burstPhase);re>.98&&!L.burstActive?(L.burstActive=!0,L.sprite.scale.multiplyScalar(1.8)):re<.5&&L.burstActive&&(L.burstActive=!1)}for(const L of R){L.sprite.position.add(L.velocity),L.sprite.position.x>40&&(L.sprite.position.x=-40),L.sprite.position.x<-40&&(L.sprite.position.x=40),L.sprite.position.y>22&&(L.sprite.position.y=-22),L.sprite.position.y<-22&&(L.sprite.position.y=22);const j=1+L.pulseAmplitude*Math.sin(H*L.breathSpeed+L.breathPhase),C=1+.15*Math.sin(H*L.pulseSpeed+L.phaseOffset),fe=j*C,re=L.baseSize*fe;L.sprite.scale.set(re*L.aspectRatio,re,1);const ie=.75+.25*Math.sin(H*L.breathSpeed*.8+L.breathPhase);L.sprite.material.opacity=ie}g&&(g.position.x=N.x*.6,g.position.y=N.y*.6),M&&(M.position.x=N.x*.9,M.position.y=N.y*.9),E&&(E.position.x=N.x*1.2,E.position.y=N.y*1.2),I&&I.enabled&&(I.uniforms.uTime.value=H),P&&P.enabled&&(P.uniforms.uTime.value=H),v&&v.enabled&&(v.uniforms.uTime.value=H),f.render()}return jn(()=>{const w=i.value;if(!w)return;ee="ontouchstart"in window||navigator.maxTouchPoints>0,l=new sT({canvas:w,antialias:!1,alpha:!1,powerPreference:"high-performance"}),l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(o.pixelRatio),l.setClearColor(2068,1),l.autoClear=!1,l.toneMapping=zu,l.toneMappingExposure=1.4,c=new Hx,u=new Cn(60,window.innerWidth/window.innerHeight,.1,200),u.position.z=5,h=new fS,se(),B(),O(),q(),ce(),de(),ee?window.addEventListener("touchmove",$,{passive:!0}):window.addEventListener("mousemove",X),document.addEventListener("visibilitychange",He),window.matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",me),Qe=new ResizeObserver(et),Qe.observe(document.body),window.addEventListener("resize",et),oe=performance.now(),D(),requestAnimationFrame(()=>{t("ready")})}),Yo(()=>{d!==null&&(cancelAnimationFrame(d),d=null),window.removeEventListener("mousemove",X),window.removeEventListener("touchmove",$),document.removeEventListener("visibilitychange",He),window.removeEventListener("resize",et),window.matchMedia("(prefers-reduced-motion: reduce)").removeEventListener("change",me),Qe&&(Qe.disconnect(),Qe=null),l&&l.dispose(),f&&f.dispose(),c&&c.traverse(w=>{w.geometry&&w.geometry.dispose(),w.material&&(Array.isArray(w.material)?w.material.forEach(U=>U.dispose()):w.material.dispose())}),l=null,c=null,u=null,f=null,h=null,m=null,b=[],g=null,p=[],M=null,A=[],E=null,R=[]}),(w,U)=>(De(),Ne("canvas",{ref_key:"canvasRef",ref:i,id:"webgl-bg"},null,512))}},TT=rn(ET,[["__scopeId","data-v-e6659274"]]),wT={id:"app",class:"site-main"},AT={class:"site-footer"},CT={class:"wrap"},RT={__name:"App",setup(n){const e=Pe(!1);return(t,i)=>{const r=pa("router-view");return De(),Ne("div",wT,[nt(Wv,{visible:!e.value},null,8,["visible"]),nt(TT,{onReady:i[0]||(i[0]=s=>e.value=!0)}),nt(Hv),Y("main",null,[nt(r)]),Y("footer",AT,[Y("div",CT,"© "+Tt(new Date().getFullYear())+" CyberCubed",1)])])}}},PT=rn(RT,[["__scopeId","data-v-03cf6e3e"]]);function Ju(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Nr=Ju();function Nm(n){Nr=n}var Mr={exec:()=>null};function is(n){let e=[];return t=>{let i=Math.max(0,Math.min(3,t-1)),r=e[i];return r||(r=n(i),e[i]=r),r}}function st(n,e=""){let t=typeof n=="string"?n:n.source,i={replace:(r,s)=>{let a=typeof s=="string"?s:s.source;return a=a.replace(en.caret,"$1"),t=t.replace(r,a),i},getRegex:()=>new RegExp(t,e)};return i}var DT=((n="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+n)}catch{return!1}})(),en={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:n=>new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:is(n=>new RegExp(`^ {0,${n}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:is(n=>new RegExp(`^ {0,${n}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:is(n=>new RegExp(`^ {0,${n}}(?:\`\`\`|~~~)`)),headingBeginRegex:is(n=>new RegExp(`^ {0,${n}}#`)),htmlBeginRegex:is(n=>new RegExp(`^ {0,${n}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:is(n=>new RegExp(`^ {0,${n}}>`))},IT=/^(?:[ \t]*(?:\n|$))+/,LT=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,UT=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Sa=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,NT=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Qu=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Fm=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Om=st(Fm).replace(/bull/g,Qu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),FT=st(Fm).replace(/bull/g,Qu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ef=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,OT=/^[^\n]+/,tf=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,kT=st(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",tf).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),BT=st(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Qu).getRegex(),al="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",nf=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,zT=st("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",nf).replace("tag",al).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),km=st(ef).replace("hr",Sa).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",al).getRegex(),VT=st(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",km).getRegex(),rf={blockquote:VT,code:LT,def:kT,fences:UT,heading:NT,hr:Sa,html:zT,lheading:Om,list:BT,newline:IT,paragraph:km,table:Mr,text:OT},vd=st("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Sa).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",al).getRegex(),HT={...rf,lheading:FT,table:vd,paragraph:st(ef).replace("hr",Sa).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",vd).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",al).getRegex()},GT={...rf,html:st(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",nf).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Mr,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:st(ef).replace("hr",Sa).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Om).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},WT=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,XT=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Bm=/^( {2,}|\\)\n(?!\s*$)/,$T=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Cs=/[\p{P}\p{S}]/u,ol=/[\s\p{P}\p{S}]/u,sf=/[^\s\p{P}\p{S}]/u,qT=st(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,ol).getRegex(),zm=/(?!~)[\p{P}\p{S}]/u,YT=/(?!~)[\s\p{P}\p{S}]/u,jT=/(?:[^\s\p{P}\p{S}]|~)/u,KT=st(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",DT?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Vm=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,ZT=st(Vm,"u").replace(/punct/g,Cs).getRegex(),JT=st(Vm,"u").replace(/punct/g,zm).getRegex(),Hm="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",QT=st(Hm,"gu").replace(/notPunctSpace/g,sf).replace(/punctSpace/g,ol).replace(/punct/g,Cs).getRegex(),ew=st(Hm,"gu").replace(/notPunctSpace/g,jT).replace(/punctSpace/g,YT).replace(/punct/g,zm).getRegex(),tw=st("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,sf).replace(/punctSpace/g,ol).replace(/punct/g,Cs).getRegex(),nw=st(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Cs).getRegex(),iw="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",rw=st(iw,"gu").replace(/notPunctSpace/g,sf).replace(/punctSpace/g,ol).replace(/punct/g,Cs).getRegex(),sw=st(/\\(punct)/,"gu").replace(/punct/g,Cs).getRegex(),aw=st(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),ow=st(nf).replace("(?:-->|$)","-->").getRegex(),lw=st("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",ow).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Lo=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,cw=st(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Lo).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Gm=st(/^!?\[(label)\]\[(ref)\]/).replace("label",Lo).replace("ref",tf).getRegex(),Wm=st(/^!?\[(ref)\](?:\[\])?/).replace("ref",tf).getRegex(),uw=st("reflink|nolink(?!\\()","g").replace("reflink",Gm).replace("nolink",Wm).getRegex(),xd=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,af={_backpedal:Mr,anyPunctuation:sw,autolink:aw,blockSkip:KT,br:Bm,code:XT,del:Mr,delLDelim:Mr,delRDelim:Mr,emStrongLDelim:ZT,emStrongRDelimAst:QT,emStrongRDelimUnd:tw,escape:WT,link:cw,nolink:Wm,punctuation:qT,reflink:Gm,reflinkSearch:uw,tag:lw,text:$T,url:Mr},fw={...af,link:st(/^!?\[(label)\]\((.*?)\)/).replace("label",Lo).getRegex(),reflink:st(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Lo).getRegex()},vu={...af,emStrongRDelimAst:ew,emStrongLDelim:JT,delLDelim:nw,delRDelim:rw,url:st(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",xd).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:st(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",xd).getRegex()},hw={...vu,br:st(Bm).replace("{2,}","*").getRegex(),text:st(vu.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},eo={normal:rf,gfm:HT,pedantic:GT},Hs={normal:af,gfm:vu,breaks:hw,pedantic:fw},dw={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Sd=n=>dw[n];function ei(n,e){if(e){if(en.escapeTest.test(n))return n.replace(en.escapeReplace,Sd)}else if(en.escapeTestNoEncode.test(n))return n.replace(en.escapeReplaceNoEncode,Sd);return n}function bd(n){try{n=encodeURI(n).replace(en.percentDecode,"%")}catch{return null}return n}function Md(n,e){let t=n.replace(en.findPipe,(s,a,o)=>{let l=!1,c=a;for(;--c>=0&&o[c]==="\\";)l=!l;return l?"|":" |"}),i=t.split(en.splitPipe),r=0;if(i[0].trim()||i.shift(),i.length>0&&!i.at(-1)?.trim()&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;r<i.length;r++)i[r]=i[r].trim().replace(en.slashPipe,"|");return i}function qi(n,e,t){let i=n.length;if(i===0)return"";let r=0;for(;r<i&&n.charAt(i-r-1)===e;)r++;return n.slice(0,i-r)}function yd(n){let e=n.split(`
`),t=e.length-1;for(;t>=0&&en.blankLine.test(e[t]);)t--;return e.length-t<=2?n:e.slice(0,t+1).join(`
`)}function pw(n,e){if(n.indexOf(e[1])===-1)return-1;let t=0;for(let i=0;i<n.length;i++)if(n[i]==="\\")i++;else if(n[i]===e[0])t++;else if(n[i]===e[1]&&(t--,t<0))return i;return t>0?-2:-1}function mw(n,e=0){let t=e,i="";for(let r of n)if(r==="	"){let s=4-t%4;i+=" ".repeat(s),t+=s}else i+=r,t++;return i}function Ed(n,e,t,i,r){let s=e.href,a=e.title||null,o=n[1].replace(r.other.outputLinkReplace,"$1");i.state.inLink=!0;let l={type:n[0].charAt(0)==="!"?"image":"link",raw:t,href:s,title:a,text:o,tokens:i.inlineTokens(o)};return i.state.inLink=!1,l}function gw(n,e,t){let i=n.match(t.other.indentCodeCompensation);if(i===null)return e;let r=i[1];return e.split(`
`).map(s=>{let a=s.match(t.other.beginningSpace);if(a===null)return s;let[o]=a;return o.length>=r.length?s.slice(r.length):s}).join(`
`)}var Uo=class{options;rules;lexer;constructor(n){this.options=n||Nr}space(n){let e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){let e=this.rules.block.code.exec(n);if(e){let t=this.options.pedantic?e[0]:yd(e[0]),i=t.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t,codeBlockStyle:"indented",text:i}}}fences(n){let e=this.rules.block.fences.exec(n);if(e){let t=e[0],i=gw(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:i}}}heading(n){let e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let i=qi(t,"#");(this.options.pedantic||!i||this.rules.other.endingSpaceChar.test(i))&&(t=i.trim())}return{type:"heading",raw:qi(e[0],`
`),depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){let e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:qi(e[0],`
`)}}blockquote(n){let e=this.rules.block.blockquote.exec(n);if(e){let t=qi(e[0],`
`).split(`
`),i="",r="",s=[];for(;t.length>0;){let a=!1,o=[],l;for(l=0;l<t.length;l++)if(this.rules.other.blockquoteStart.test(t[l]))o.push(t[l]),a=!0;else if(!a)o.push(t[l]);else break;t=t.slice(l);let c=o.join(`
`),u=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}
${c}`:c,r=r?`${r}
${u}`:u;let f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,s,!0),this.lexer.state.top=f,t.length===0)break;let h=s.at(-1);if(h?.type==="code")break;if(h?.type==="blockquote"){let d=h,m=d.raw+`
`+t.join(`
`),b=this.blockquote(m);s[s.length-1]=b,i=i.substring(0,i.length-d.raw.length)+b.raw,r=r.substring(0,r.length-d.text.length)+b.text;break}else if(h?.type==="list"){let d=h,m=d.raw+`
`+t.join(`
`),b=this.list(m);s[s.length-1]=b,i=i.substring(0,i.length-h.raw.length)+b.raw,r=r.substring(0,r.length-d.raw.length)+b.raw,t=m.substring(s.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:i,tokens:s,text:r}}}list(n){let e=this.rules.block.list.exec(n);if(e){let t=e[1].trim(),i=t.length>1,r={type:"list",raw:"",ordered:i,start:i?+t.slice(0,-1):"",loose:!1,items:[]};t=i?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=i?t:"[*+-]");let s=this.rules.other.listItemRegex(t),a=!1;for(;n;){let l=!1,c="",u="";if(!(e=s.exec(n))||this.rules.block.hr.test(n))break;c=e[0],n=n.substring(c.length);let f=mw(e[2].split(`
`,1)[0],e[1].length),h=n.split(`
`,1)[0],d=!f.trim(),m=0;if(this.options.pedantic?(m=2,u=f.trimStart()):d?m=e[1].length+1:(m=f.search(this.rules.other.nonSpaceChar),m=m>4?1:m,u=f.slice(m),m+=e[1].length),d&&this.rules.other.blankLine.test(h)&&(c+=h+`
`,n=n.substring(h.length+1),l=!0),!l){let b=this.rules.other.nextBulletRegex(m),g=this.rules.other.hrRegex(m),p=this.rules.other.fencesBeginRegex(m),M=this.rules.other.headingBeginRegex(m),A=this.rules.other.htmlBeginRegex(m),E=this.rules.other.blockquoteBeginRegex(m);for(;n;){let R=n.split(`
`,1)[0],x;if(h=R,this.options.pedantic?(h=h.replace(this.rules.other.listReplaceNesting,"  "),x=h):x=h.replace(this.rules.other.tabCharGlobal,"    "),p.test(h)||M.test(h)||A.test(h)||E.test(h)||b.test(h)||g.test(h))break;if(x.search(this.rules.other.nonSpaceChar)>=m||!h.trim())u+=`
`+x.slice(m);else{if(d||f.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||p.test(f)||M.test(f)||g.test(f))break;u+=`
`+h}d=!h.trim(),c+=R+`
`,n=n.substring(R.length+1),f=x.slice(m)}}r.loose||(a?r.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(a=!0)),r.items.push({type:"list_item",raw:c,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),r.raw+=c}let o=r.items.at(-1);if(o)o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let l of r.items){this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]);let c=l.tokens[0];if(l.task&&(c?.type==="text"||c?.type==="paragraph")){l.text=l.text.replace(this.rules.other.listReplaceTask,""),c.raw=c.raw.replace(this.rules.other.listReplaceTask,""),c.text=c.text.replace(this.rules.other.listReplaceTask,"");for(let f=this.lexer.inlineQueue.length-1;f>=0;f--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[f].src)){this.lexer.inlineQueue[f].src=this.lexer.inlineQueue[f].src.replace(this.rules.other.listReplaceTask,"");break}let u=this.rules.other.listTaskCheckbox.exec(l.raw);if(u){let f={type:"checkbox",raw:u[0]+" ",checked:u[0]!=="[ ]"};l.checked=f.checked,r.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=f.raw+l.tokens[0].raw,l.tokens[0].text=f.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(f)):l.tokens.unshift({type:"paragraph",raw:f.raw,text:f.raw,tokens:[f]}):l.tokens.unshift(f)}}else l.task&&(l.task=!1);if(!r.loose){let u=l.tokens.filter(h=>h.type==="space"),f=u.length>0&&u.some(h=>this.rules.other.anyLine.test(h.raw));r.loose=f}}if(r.loose)for(let l of r.items){l.loose=!0;for(let c of l.tokens)c.type==="text"&&(c.type="paragraph")}return r}}html(n){let e=this.rules.block.html.exec(n);if(e){let t=yd(e[0]);return{type:"html",block:!0,raw:t,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:t}}}def(n){let e=this.rules.block.def.exec(n);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:qi(e[0],`
`),href:i,title:r}}}table(n){let e=this.rules.block.table.exec(n);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let t=Md(e[1]),i=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:qi(e[0],`
`),header:[],align:[],rows:[]};if(t.length===i.length){for(let a of i)this.rules.other.tableAlignRight.test(a)?s.align.push("right"):this.rules.other.tableAlignCenter.test(a)?s.align.push("center"):this.rules.other.tableAlignLeft.test(a)?s.align.push("left"):s.align.push(null);for(let a=0;a<t.length;a++)s.header.push({text:t[a],tokens:this.lexer.inline(t[a]),header:!0,align:s.align[a]});for(let a of r)s.rows.push(Md(a,s.header.length).map((o,l)=>({text:o,tokens:this.lexer.inline(o),header:!1,align:s.align[l]})));return s}}lheading(n){let e=this.rules.block.lheading.exec(n);if(e){let t=e[1].trim();return{type:"heading",raw:qi(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:t,tokens:this.lexer.inline(t)}}}paragraph(n){let e=this.rules.block.paragraph.exec(n);if(e){let t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){let e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){let e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(n){let e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){let e=this.rules.inline.link.exec(n);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let s=qi(t.slice(0,-1),"\\");if((t.length-s.length)%2===0)return}else{let s=pw(e[2],"()");if(s===-2)return;if(s>-1){let a=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,a).trim(),e[3]=""}}let i=e[2],r="";if(this.options.pedantic){let s=this.rules.other.pedanticHrefTitle.exec(i);s&&(i=s[1],r=s[3])}else r=e[3]?e[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?i=i.slice(1):i=i.slice(1,-1)),Ed(e,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){let i=(t[2]||t[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[i.toLowerCase()];if(!r){let s=t[0].charAt(0);return{type:"text",raw:s,text:s}}return Ed(t,r,t[0],this.lexer,this.rules)}}emStrong(n,e,t=""){let i=this.rules.inline.emStrongLDelim.exec(n);if(!(!i||!i[1]&&!i[2]&&!i[3]&&!i[4]||i[4]&&t.match(this.rules.other.unicodeAlphaNumeric))&&(!(i[1]||i[3])||!t||this.rules.inline.punctuation.exec(t))){let r=[...i[0]].length-1,s,a,o=r,l=0,c=i[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,e=e.slice(-1*n.length+r);(i=c.exec(e))!==null;){if(s=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!s)continue;if(a=[...s].length,i[3]||i[4]){o+=a;continue}else if((i[5]||i[6])&&r%3&&!((r+a)%3)){l+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+l);let u=[...i[0]][0].length,f=n.slice(0,r+i.index+u+a);if(Math.min(r,a)%2){let d=f.slice(1,-1);return{type:"em",raw:f,text:d,tokens:this.lexer.inlineTokens(d)}}let h=f.slice(2,-2);return{type:"strong",raw:f,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(n){let e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(t),r=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return i&&r&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(n){let e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n,e,t=""){let i=this.rules.inline.delLDelim.exec(n);if(i&&(!i[1]||!t||this.rules.inline.punctuation.exec(t))){let r=[...i[0]].length-1,s,a,o=r,l=this.rules.inline.delRDelim;for(l.lastIndex=0,e=e.slice(-1*n.length+r);(i=l.exec(e))!==null;){if(s=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!s||(a=[...s].length,a!==r))continue;if(i[3]||i[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let c=[...i[0]][0].length,u=n.slice(0,r+i.index+c+a),f=u.slice(r,-r);return{type:"del",raw:u,text:f,tokens:this.lexer.inlineTokens(f)}}}}autolink(n){let e=this.rules.inline.autolink.exec(n);if(e){let t,i;return e[2]==="@"?(t=e[1],i="mailto:"+t):(t=e[1],i=t),{type:"link",raw:e[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}url(n){let e;if(e=this.rules.inline.url.exec(n)){let t,i;if(e[2]==="@")t=e[0],i="mailto:"+t;else{let r;do r=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(r!==e[0]);t=e[0],e[1]==="www."?i="http://"+e[0]:i=e[0]}return{type:"link",raw:e[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(n){let e=this.rules.inline.text.exec(n);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},Bn=class xu{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Nr,this.options.tokenizer=this.options.tokenizer||new Uo,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:en,block:eo.normal,inline:Hs.normal};this.options.pedantic?(t.block=eo.pedantic,t.inline=Hs.pedantic):this.options.gfm&&(t.block=eo.gfm,this.options.breaks?t.inline=Hs.breaks:t.inline=Hs.gfm),this.tokenizer.rules=t}static get rules(){return{block:eo,inline:Hs}}static lex(e,t){return new xu(t).lex(e)}static lexInline(e,t){return new xu(t).inlineTokens(e)}lex(e){e=e.replace(en.carriageReturn,`
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
`+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):t.push(s);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let i=e,r=null;if(this.tokens.links){let c=Object.keys(this.tokens.links);if(c.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(i))!==null;)c.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(i))!==null;)i=i.slice(0,r.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let s;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(i))!==null;)s=r[2]?r[2].length:0,i=i.slice(0,r.index+s)+"["+"a".repeat(r[0].length-s-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);i=this.options.hooks?.emStrongMask?.call({lexer:this},i)??i;let a=!1,o="",l=1/0;for(;e;){if(e.length<l)l=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}a||(o=""),a=!1;let c;if(this.options.extensions?.inline?.some(f=>(c=f.call({lexer:this},e,t))?(e=e.substring(c.raw.length),t.push(c),!0):!1))continue;if(c=this.tokenizer.escape(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.tag(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.link(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(c.raw.length);let f=t.at(-1);c.type==="text"&&f?.type==="text"?(f.raw+=c.raw,f.text+=c.text):t.push(c);continue}if(c=this.tokenizer.emStrong(e,i,o)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.codespan(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.br(e)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.del(e,i,o)){e=e.substring(c.raw.length),t.push(c);continue}if(c=this.tokenizer.autolink(e)){e=e.substring(c.raw.length),t.push(c);continue}if(!this.state.inLink&&(c=this.tokenizer.url(e))){e=e.substring(c.raw.length),t.push(c);continue}let u=e;if(this.options.extensions?.startInline){let f=1/0,h=e.slice(1),d;this.options.extensions.startInline.forEach(m=>{d=m.call({lexer:this},h),typeof d=="number"&&d>=0&&(f=Math.min(f,d))}),f<1/0&&f>=0&&(u=e.substring(0,f+1))}if(c=this.tokenizer.inlineText(u)){e=e.substring(c.raw.length),c.raw.slice(-1)!=="_"&&(o=c.raw.slice(-1)),a=!0;let f=t.at(-1);f?.type==="text"?(f.raw+=c.raw,f.text+=c.text):t.push(c);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t="Infinite loop on byte: "+e;if(this.options.silent)console.error(t);else throw new Error(t)}},No=class{options;parser;constructor(n){this.options=n||Nr}space(n){return""}code({text:n,lang:e,escaped:t}){let i=(e||"").match(en.notSpaceStart)?.[0],r=n.replace(en.endingNewline,"")+`
`;return i?'<pre><code class="language-'+ei(i)+'">'+(t?r:ei(r,!0))+`</code></pre>
`:"<pre><code>"+(t?r:ei(r,!0))+`</code></pre>
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
`}strong({tokens:n}){return`<strong>${this.parser.parseInline(n)}</strong>`}em({tokens:n}){return`<em>${this.parser.parseInline(n)}</em>`}codespan({text:n}){return`<code>${ei(n,!0)}</code>`}br(n){return"<br>"}del({tokens:n}){return`<del>${this.parser.parseInline(n)}</del>`}link({href:n,title:e,tokens:t}){let i=this.parser.parseInline(t),r=bd(n);if(r===null)return i;n=r;let s='<a href="'+n+'"';return e&&(s+=' title="'+ei(e)+'"'),s+=">"+i+"</a>",s}image({href:n,title:e,text:t,tokens:i}){i&&(t=this.parser.parseInline(i,this.parser.textRenderer));let r=bd(n);if(r===null)return ei(t);n=r;let s=`<img src="${n}" alt="${ei(t)}"`;return e&&(s+=` title="${ei(e)}"`),s+=">",s}text(n){return"tokens"in n&&n.tokens?this.parser.parseInline(n.tokens):"escaped"in n&&n.escaped?n.text:ei(n.text)}},of=class{strong({text:n}){return n}em({text:n}){return n}codespan({text:n}){return n}del({text:n}){return n}html({text:n}){return n}text({text:n}){return n}link({text:n}){return""+n}image({text:n}){return""+n}br(){return""}checkbox({raw:n}){return n}},zn=class Su{options;renderer;textRenderer;constructor(e){this.options=e||Nr,this.options.renderer=this.options.renderer||new No,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new of}static parse(e,t){return new Su(t).parse(e)}static parseInline(e,t){return new Su(t).parseInline(e)}parse(e){this.renderer.parser=this;let t="";for(let i=0;i<e.length;i++){let r=e[i];if(this.options.extensions?.renderers?.[r.type]){let a=r,o=this.options.extensions.renderers[a.type].call({parser:this},a);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(a.type)){t+=o||"";continue}}let s=r;switch(s.type){case"space":{t+=this.renderer.space(s);break}case"hr":{t+=this.renderer.hr(s);break}case"heading":{t+=this.renderer.heading(s);break}case"code":{t+=this.renderer.code(s);break}case"table":{t+=this.renderer.table(s);break}case"blockquote":{t+=this.renderer.blockquote(s);break}case"list":{t+=this.renderer.list(s);break}case"checkbox":{t+=this.renderer.checkbox(s);break}case"html":{t+=this.renderer.html(s);break}case"def":{t+=this.renderer.def(s);break}case"paragraph":{t+=this.renderer.paragraph(s);break}case"text":{t+=this.renderer.text(s);break}default:{let a='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let i="";for(let r=0;r<e.length;r++){let s=e[r];if(this.options.extensions?.renderers?.[s.type]){let o=this.options.extensions.renderers[s.type].call({parser:this},s);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){i+=o||"";continue}}let a=s;switch(a.type){case"escape":{i+=t.text(a);break}case"html":{i+=t.html(a);break}case"link":{i+=t.link(a);break}case"image":{i+=t.image(a);break}case"checkbox":{i+=t.checkbox(a);break}case"strong":{i+=t.strong(a);break}case"em":{i+=t.em(a);break}case"codespan":{i+=t.codespan(a);break}case"br":{i+=t.br(a);break}case"del":{i+=t.del(a);break}case"text":{i+=t.text(a);break}default:{let o='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return i}},$s=class{options;block;constructor(n){this.options=n||Nr}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(n){return n}postprocess(n){return n}processAllTokens(n){return n}emStrongMask(n){return n}provideLexer(n=this.block){return n?Bn.lex:Bn.lexInline}provideParser(n=this.block){return n?zn.parse:zn.parseInline}},_w=class{defaults=Ju();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=zn;Renderer=No;TextRenderer=of;Lexer=Bn;Tokenizer=Uo;Hooks=$s;constructor(...n){this.use(...n)}walkTokens(n,e){let t=[];for(let i of n)switch(t=t.concat(e.call(this,i)),i.type){case"table":{let r=i;for(let s of r.header)t=t.concat(this.walkTokens(s.tokens,e));for(let s of r.rows)for(let a of s)t=t.concat(this.walkTokens(a.tokens,e));break}case"list":{let r=i;t=t.concat(this.walkTokens(r.items,e));break}default:{let r=i;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(s=>{let a=r[s].flat(1/0);t=t.concat(this.walkTokens(a,e))}):r.tokens&&(t=t.concat(this.walkTokens(r.tokens,e)))}}return t}use(...n){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{let i={...t};if(i.async=this.defaults.async||i.async||!1,t.extensions&&(t.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let s=e.renderers[r.name];s?e.renderers[r.name]=function(...a){let o=r.renderer.apply(this,a);return o===!1&&(o=s.apply(this,a)),o}:e.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let s=e[r.level];s?s.unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),i.extensions=e),t.renderer){let r=this.defaults.renderer||new No(this.defaults);for(let s in t.renderer){if(!(s in r))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;let a=s,o=t.renderer[a],l=r[a];r[a]=(...c)=>{let u=o.apply(r,c);return u===!1&&(u=l.apply(r,c)),u||""}}i.renderer=r}if(t.tokenizer){let r=this.defaults.tokenizer||new Uo(this.defaults);for(let s in t.tokenizer){if(!(s in r))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;let a=s,o=t.tokenizer[a],l=r[a];r[a]=(...c)=>{let u=o.apply(r,c);return u===!1&&(u=l.apply(r,c)),u}}i.tokenizer=r}if(t.hooks){let r=this.defaults.hooks||new $s;for(let s in t.hooks){if(!(s in r))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;let a=s,o=t.hooks[a],l=r[a];$s.passThroughHooks.has(s)?r[a]=c=>{if(this.defaults.async&&$s.passThroughHooksRespectAsync.has(s))return(async()=>{let f=await o.call(r,c);return l.call(r,f)})();let u=o.call(r,c);return l.call(r,u)}:r[a]=(...c)=>{if(this.defaults.async)return(async()=>{let f=await o.apply(r,c);return f===!1&&(f=await l.apply(r,c)),f})();let u=o.apply(r,c);return u===!1&&(u=l.apply(r,c)),u}}i.hooks=r}if(t.walkTokens){let r=this.defaults.walkTokens,s=t.walkTokens;i.walkTokens=function(a){let o=[];return o.push(s.call(this,a)),r&&(o=o.concat(r.call(this,a))),o}}this.defaults={...this.defaults,...i}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}lexer(n,e){return Bn.lex(n,e??this.defaults)}parser(n,e){return zn.parse(n,e??this.defaults)}parseMarkdown(n){return(e,t)=>{let i={...t},r={...this.defaults,...i},s=this.onError(!!r.silent,!!r.async);if(this.defaults.async===!0&&i.async===!1)return s(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return s(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return s(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(r.hooks&&(r.hooks.options=r,r.hooks.block=n),r.async)return(async()=>{let a=r.hooks?await r.hooks.preprocess(e):e,o=await(r.hooks?await r.hooks.provideLexer(n):n?Bn.lex:Bn.lexInline)(a,r),l=r.hooks?await r.hooks.processAllTokens(o):o;r.walkTokens&&await Promise.all(this.walkTokens(l,r.walkTokens));let c=await(r.hooks?await r.hooks.provideParser(n):n?zn.parse:zn.parseInline)(l,r);return r.hooks?await r.hooks.postprocess(c):c})().catch(s);try{r.hooks&&(e=r.hooks.preprocess(e));let a=(r.hooks?r.hooks.provideLexer(n):n?Bn.lex:Bn.lexInline)(e,r);r.hooks&&(a=r.hooks.processAllTokens(a)),r.walkTokens&&this.walkTokens(a,r.walkTokens);let o=(r.hooks?r.hooks.provideParser(n):n?zn.parse:zn.parseInline)(a,r);return r.hooks&&(o=r.hooks.postprocess(o)),o}catch(a){return s(a)}}}onError(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){let i="<p>An error occurred:</p><pre>"+ei(t.message+"",!0)+"</pre>";return e?Promise.resolve(i):i}if(e)return Promise.reject(t);throw t}}},Ir=new _w;function ut(n,e){return Ir.parse(n,e)}ut.options=ut.setOptions=function(n){return Ir.setOptions(n),ut.defaults=Ir.defaults,Nm(ut.defaults),ut};ut.getDefaults=Ju;ut.defaults=Nr;ut.use=function(...n){return Ir.use(...n),ut.defaults=Ir.defaults,Nm(ut.defaults),ut};ut.walkTokens=function(n,e){return Ir.walkTokens(n,e)};ut.parseInline=Ir.parseInline;ut.Parser=zn;ut.parser=zn.parse;ut.Renderer=No;ut.TextRenderer=of;ut.Lexer=Bn;ut.lexer=Bn.lex;ut.Tokenizer=Uo;ut.Hooks=$s;ut.parse=ut;ut.options;ut.setOptions;ut.use;ut.walkTokens;ut.parseInline;zn.parse;Bn.lex;function lf(n="newest"){const e=Pe(n);function t(i,r){const s=r??e.value;return[...i].sort((a,o)=>{switch(s){case"newest":return new Date(o.created_at)-new Date(a.created_at);case"oldest":return new Date(a.created_at)-new Date(o.created_at);case"recently-modified":return new Date(o.modified_at)-new Date(a.modified_at);case"least-recently-modified":return new Date(a.modified_at)-new Date(o.modified_at);case"az":return(a.title||"").localeCompare(o.title||"");case"za":return(o.title||"").localeCompare(a.title||"");default:return 0}})}return{activeSort:e,sortItems:t}}const vw={class:"search-container"},xw={class:"sort-container"},Sw={class:"switch-container"},bw={class:"switch"},Mw=["checked"],yw=["onClick","onMouseenter"],Ew=["onClick","onMouseenter"],Tw={__name:"PageNav",props:{compactMode:{type:Boolean,default:!1}},emits:["update:compactMode","filterChange","campaignChange","searchChange","sortChange"],setup(n,{emit:e}){const t=Pe(!1),i=yc(),r=Jp(),s=e,a={Blender:["All","Projects","Scenes","Characters","Assets","Renders"],Dnd:["All","Characters","Maps and Locations","Items","Lore","Misc"],Coding:["All","Releases","Updates","Tutorials","Misc"]},o=At(()=>{const O=i.name;return O==="Coding"||O==="Blender"?"Projects":"Campaigns"}),l=Pe("");Dn(l,O=>{s("searchChange",O)});const c=Pe("newest");Dn(c,O=>{s("sortChange",O)});const u=Pe([]),f=Pe([]),h=Pe([]);async function d(){try{const O=await fetch(`${Wn}/campaigns/`);if(!O.ok)return;const q=await O.json();u.value=Array.isArray(q)?q:[]}catch(O){console.warn("Failed to load campaigns",O)}}async function m(){try{const O=await fetch(`${Wn}/coding-projects/`);if(!O.ok)return;const q=await O.json();f.value=Array.isArray(q)?q:[]}catch(O){console.warn("Failed to load coding projects",O)}}async function b(){try{const O=await fetch(`${Wn}/blender-projects/`);if(!O.ok)return;const q=await O.json();h.value=Array.isArray(q)?q:[]}catch(O){console.warn("Failed to load blender projects",O)}}const g=At(()=>{const O=i.name;return["Blender","Dnd","Campaign","Coding"].includes(O)}),p=At(()=>{switch(i.name){case"Blender":return"Type";case"Dnd":return"Tags";case"Campaign":return"Campaigns";case"Coding":return"Type";default:return"Filter"}}),M=At(()=>i.name==="Campaign"?u.value.length>0?u.value:["Campaigns","Characters","Resources"]:a[i.name]||[]),A=At(()=>i.name==="Dnd"||i.name==="Campaign"?["All",...u.value,"Standalone"]:i.name==="Coding"?["All",...f.value,"Standalone"]:i.name==="Blender"?["All",...h.value,"Standalone"]:[]),E=Pe(0),R=Pe(null),x=Pe({opacity:0});function P(O){return typeof O=="string"?O:O.title}function v(O=!0){if(!R.value)return;const q=Array.from(R.value.querySelectorAll(".nav-link")),ce=R.value.offsetTop,de=E.value;if(de==null||!q[de]){x.value={opacity:0,top:"0px",height:"0px"};return}const D=q[de];if(D.offsetHeight===0){x.value={opacity:0,top:"0px",height:"0px"};return}const w=ce+D.offsetTop-8,U=D.offsetHeight+16;x.value={opacity:1,top:`${w}px`,height:`${U}px`,transition:O?"top 320ms cubic-bezier(.2,.9,.2,1), height 260ms cubic-bezier(.2,.9,.2,1), opacity 180ms":"none"}}function S(O){E.value=O;const q=A.value[O];q==="All"?s("campaignChange","all"):q==="Standalone"?s("campaignChange","none"):typeof q=="object"&&q.id&&s("campaignChange",q.id),Vt(()=>v())}function W(O){if(!R.value)return;const q=Array.from(R.value.querySelectorAll(".nav-link")),ce=R.value.offsetTop,de=q[O];if(!de||de.offsetHeight===0){Se.value={opacity:0,top:"0px",height:"0px"};return}const D=ce+de.offsetTop-8,w=de.offsetHeight+16;Se.value={opacity:1,top:`${D}px`,height:`${w}px`,transition:"top 320ms cubic-bezier(.2,.9,.2,1), height 260ms cubic-bezier(.2,.9,.2,1), opacity 180ms"}}function I(){Se.value={opacity:0,top:"0px",height:"0px"}}function N(O){return typeof O=="string"?O:O.title}function z(O){const q=M.value[O];typeof q=="object"&&q.id&&r.push(`/dnd/${q.id}`),He(O)}const ee=Pe(0),X=Pe(null),$=Pe(null),k=Pe(null),oe=Pe(!1);function he(){oe.value=!oe.value,Vt(()=>me(!1))}const be=Pe({opacity:0}),Se=Pe({opacity:0});function me(O=!0){if(!$.value)return;const q=Array.from($.value.querySelectorAll(".nav-link")),ce=$.value.offsetTop,de=(D,w)=>{if(D==null||!q[D]){w.value={opacity:0,top:"0px",height:"0px"};return}const U=q[D];if(U.offsetHeight===0){w.value={opacity:0,top:"0px",height:"0px"};return}const H=ce+U.offsetTop-8,L=U.offsetHeight+16;w.value={opacity:1,top:`${H}px`,height:`${L}px`,transition:O?"top 320ms cubic-bezier(.2,.9,.2,1), height 260ms cubic-bezier(.2,.9,.2,1), opacity 180ms":"none"}};de(ee.value,be),de(X.value,Se),v(O)}function He(O){ee.value=O;const q=M.value[O];s("filterChange",typeof q=="string"?q:q.title||"All"),Vt(()=>me())}function Qe(O){X.value=O,me()}function et(){X.value=null,me()}function se(){let O=document.querySelector(".sidebar-close");O.classList.contains("sidebar-close")?O.classList.add("sidebar-open"):O.classList.remove("sidebar-open")}let B;return jn(()=>{d(),m(),b(),Vt(()=>{Vt(()=>{me(!1),v(!1),t.value=!0})}),B=new ResizeObserver(()=>{me(),v()}),k.value&&B.observe(k.value),window.addEventListener("resize",()=>{me(),v()});const O=yc();Dn(O,(q,ce)=>{g.value&&se(),E.value=0,s("campaignChange","all"),l.value="",s("searchChange",""),c.value="newest",s("sortChange","newest"),Vt(()=>{me(),v()})}),Dn(A,()=>{Vt(()=>{me(!1),v(!1)})})}),Ur(()=>{B&&k.value&&B.unobserve(k.value),window.removeEventListener("resize",me)}),(O,q)=>(De(),Ne("div",{class:it(["container liquid-glass fade-in-expand",{visible:t.value}])},[Y("div",{class:"nav-wrap sidebar-close",ref_key:"navWrap",ref:k},[Y("div",{class:"nav-bubble selected",style:Jt(be.value),"aria-hidden":"true"},null,4),Y("div",{class:"nav-bubble hover liquid-glass",style:Jt(Se.value),"aria-hidden":"true"},null,4),Y("div",{class:"nav-bubble campaign-selected",style:Jt(x.value),"aria-hidden":"true"},null,4),Y("div",{class:"filters-header",onClick:he},[q[4]||(q[4]=Y("h1",null,"Filters",-1)),(De(),Ne("svg",{class:it(["expand-arrow",{expanded:oe.value}]),xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[...q[3]||(q[3]=[Y("polyline",{points:"9 18 15 12 9 6"},null,-1)])],2))]),Y("div",{class:it(["filters-content",{expanded:oe.value}])},[Y("div",vw,[fn(Y("input",{type:"text",class:"search-input",placeholder:"Search...","onUpdate:modelValue":q[0]||(q[0]=ce=>l.value=ce)},null,512),[[vc,l.value]])]),Y("div",xw,[q[6]||(q[6]=Y("span",{class:"sort-label"},"Sort By",-1)),fn(Y("select",{class:"sort-select","onUpdate:modelValue":q[1]||(q[1]=ce=>c.value=ce)},[...q[5]||(q[5]=[Lp('<option value="newest" data-v-8f39337a>Latest First</option><option value="oldest" data-v-8f39337a>Oldest First</option><option value="recently-modified" data-v-8f39337a>Recently Modified</option><option value="least-recently-modified" data-v-8f39337a>Least Recently Modified</option><option value="az" data-v-8f39337a>A-Z</option><option value="za" data-v-8f39337a>Z-A</option>',6)])],512),[[x_,c.value]])]),Y("div",Sw,[q[8]||(q[8]=Y("span",{class:"switch-label"},"Compact Mode",-1)),Y("label",bw,[Y("input",{type:"checkbox",checked:n.compactMode,onChange:q[2]||(q[2]=ce=>s("update:compactMode",ce.target.checked))},null,40,Mw),q[7]||(q[7]=Y("span",{class:"slider round"},null,-1))])]),ai(i).name==="Dnd"||ai(i).name==="Campaign"||ai(i).name==="Coding"||ai(i).name==="Blender"?(De(),Ne(Et,{key:0},[Y("h2",null,Tt(o.value),1),Y("nav",{class:"nav",ref_key:"campaignNav",ref:R,onMouseleave:I},[(De(!0),Ne(Et,null,di(A.value,(ce,de)=>(De(),Ne("button",{key:"c-"+de,class:it(["nav-link",{active:E.value===de}]),onClick:D=>S(de),onMouseenter:D=>W(de)},Tt(P(ce)),43,yw))),128))],544)],64)):wt("",!0),Y("h2",null,Tt(p.value),1),Y("nav",{class:"nav",ref_key:"nav",ref:$,onMouseleave:et},[(De(!0),Ne(Et,null,di(M.value,(ce,de)=>(De(),Ne("button",{key:de,class:it(["nav-link",{active:ee.value===de}]),onClick:D=>z(de),onMouseenter:D=>Qe(de)},Tt(N(ce)),43,Ew))),128))],544)],2)],512)],2))}},cf=rn(Tw,[["__scopeId","data-v-8f39337a"]]),ww={key:0,class:"downloads","aria-labelledby":"downloads-title"},Aw={class:"downloads__list",role:"list"},Cw={class:"downloads__meta"},Rw={class:"downloads__nameRow"},Pw={class:"downloads__nameBlock"},Dw={class:"downloads__name"},Iw=["href","download"],Lw={__name:"DownloadFilesSection",props:{files:{type:Array,required:!0}},setup(n){return(e,t)=>n.files&&n.files.length?(De(),Ne("section",ww,[Y("ul",Aw,[(De(!0),Ne(Et,null,di(n.files,i=>(De(),Ne("li",{key:i.id??i.url,class:"downloads__item"},[Y("div",Cw,[Y("div",Rw,[Y("div",Pw,[Y("div",Dw,Tt(i.name),1)])])]),Y("a",{class:"downloads__btn liquid-glass",href:i.url,download:i.name}," Download ",8,Iw)]))),128))])])):wt("",!0)}},uf=rn(Lw,[["__scopeId","data-v-ac3918b7"]]),Uw={class:"viewport"},Nw=["src","alt"],Fw={class:"controls"},Ow={class:"dots"},kw=["onClick","aria-label"],Bw={__name:"Carousel",props:{images:{type:Array,required:!0}},setup(n){const e=n,t=Pe(0);let i=null;function r(){i&&(clearInterval(i),i=null)}function s(){const h=e.images.length-1;t.value<h?t.value++:r()}function a(){t.value>0&&t.value--}function o(h){t.value=Math.min(Math.max(h,0),e.images.length-1)}let l=0,c=0;function u(h){h.touches.length===1&&(l=h.touches[0].clientX,c=h.touches[0].clientY)}function f(h){if(h.changedTouches.length===1){const d=h.changedTouches[0].clientX-l,m=h.changedTouches[0].clientY-c;Math.abs(d)>50&&Math.abs(d)>Math.abs(m)&&(d<0?s():a())}}return jn(()=>{i=setInterval(s,3500)}),Yo(()=>r()),(h,d)=>n.images&&n.images.length?(De(),Ne("div",{key:0,class:"carousel",onTouchstart:u,onTouchend:f},[Y("div",Uw,[Y("img",{src:n.images[t.value],alt:`slide-${t.value}`},null,8,Nw)]),Y("div",Fw,[Y("button",{onClick:a,class:"carousel-btn","aria-label":"Previous image"},"◀"),Y("div",Ow,[(De(!0),Ne(Et,null,di(n.images,(m,b)=>(De(),Ne("button",{key:b,class:it([{active:b===t.value},"dot-btn"]),onClick:g=>o(b),"aria-label":`Go to slide ${b+1}`},null,10,kw))),128))]),Y("button",{onClick:s,class:"carousel-btn","aria-label":"Next image"},"▶")])],32)):wt("",!0)}},ff=rn(Bw,[["__scopeId","data-v-fd400f35"]]),zw={class:"hero"},Vw={class:"content-grid"},Hw={key:0,class:"grid"},Gw={key:1,class:"grid"},Ww={class:"grid"},Xw=["onClick"],$w={class:"grid"},qw=["src","alt"],Yw={class:"wrapper"},jw={class:"compact-grid"},Kw=["onClick"],Zw=["src","alt"],Jw=["innerHTML"],Qw={key:0},eA={key:2},tA={__name:"Blender",setup(n){const e=Pe([]),t=Pe(!1),i=Pe(null),r=Pe("All"),s=Pe("all"),a=Pe(""),{activeSort:o,sortItems:l}=lf(),c=Pe(!1),u=Pe(!1),f=Pe(null),h=Pe(!1),d={All:null,Projects:"PROJECT",Scenes:"SCENE",Characters:"CHARACTER",Assets:"ASSET",Renders:"RENDER"},m=At(()=>{let x=e.value;const P=d[r.value];if(P&&(x=x.filter(v=>v.type===P)),s.value==="none"?x=x.filter(v=>!v.project):s.value!=="all"&&(x=x.filter(v=>v.project===s.value)),a.value.trim()){const v=a.value.toLowerCase().trim();x=x.filter(S=>{const W=S.title?.toLowerCase().includes(v),I=S.content?.toLowerCase().includes(v),N=S.files?.some(z=>z.name?.toLowerCase().includes(v));return W||I||N})}return l(x)}),b=At(()=>!i.value||!i.value.content?"":ut(i.value.content));function g(x){r.value=x}function p(x){s.value=x}function M(x){a.value=x}function A(x){o.value=x}async function E(){t.value=!0;try{let x=await fetch(`${Wn}/blender-posts/`);if(x.ok||(x=await fetch(`${Wn}/blender-posts`)),x.ok){const P=await x.json();e.value=Array.isArray(P)?P:[]}else e.value=[]}catch(x){console.warn("Failed to load Blender posts",x),e.value=[]}finally{t.value=!1}}function R(x){u.value&&f.value&&!f.value.contains(x.target)&&(u.value=!1)}return jn(()=>{E(),document.addEventListener("click",R)}),Dn(t,x=>{x||Vt(()=>{h.value=!0})}),Ur(()=>{document.removeEventListener("click",R)}),(x,P)=>{const v=ma("typewriter");return De(),Ne("div",zw,[fn((De(),Ne("h1",null,[...P[3]||(P[3]=[Y("span",null,"Blender",-1),yt(" Projects & Renders",-1)])])),[[v]]),P[6]||(P[6]=Y("p",null,"A showcase of Blender renders and small project notes.",-1)),Y("div",Vw,[nt(cf,{compactMode:c.value,"onUpdate:compactMode":P[0]||(P[0]=S=>c.value=S),onFilterChange:g,onCampaignChange:p,onSearchChange:M,onSortChange:A},null,8,["compactMode"]),t.value?(De(),Ne("section",Hw,[...P[4]||(P[4]=[Y("p",null,"Loading Blender posts…",-1)])])):m.value.length===0?(De(),Ne("section",Gw,[...P[5]||(P[5]=[Y("p",null,"No Blender posts found.",-1)])])):wt("",!0),fn(Y("section",Ww,[(De(!0),Ne(Et,null,di(m.value,(S,W)=>(De(),Ne("article",{key:S.id,class:it(["card liquid-glass fade-in-expand",{visible:h.value}]),style:Jt({"--fade-delay":W*80+"ms"}),onClick:Nt(I=>{i.value=S,u.value=!0},["stop"])},[Y("div",$w,[Y("img",{src:S.thumbnail_url||"/blender_icon_512x512.png",alt:S.title,class:"thumb"},null,8,qw),Y("div",Yw,[Y("h1",null,Tt(S.title),1)])]),Y("p",null,Tt(S.content),1)],14,Xw))),128))],512),[[ms,!c.value&&!t.value&&m.value.length>0]]),fn(Y("section",jw,[(De(!0),Ne(Et,null,di(m.value,(S,W)=>(De(),Ne("article",{key:S.id,class:it(["compact-card liquid-glass fade-in-expand",{visible:h.value}]),style:Jt({"--fade-delay":W*80+"ms"}),onClick:Nt(I=>{i.value=S,u.value=!0},["stop"])},[Y("img",{src:S.thumbnail_url||"/blender_icon_512x512.png",alt:S.title,class:"thumb"},null,8,Zw),Y("div",null,[Y("h1",null,Tt(S.title),1),Y("p",null,Tt(S.content),1)])],14,Kw))),128))],512),[[ms,c.value&&!t.value&&m.value.length>0]]),u.value&&i.value?(De(),Ne("div",{key:2,class:"cover",onClick:P[2]||(P[2]=Nt(S=>u.value=!1,["self"]))},[Y("article",{ref_key:"coverCard",ref:f,class:"cover-card liquid-glass"},[Y("button",{class:"cover-close",onClick:P[1]||(P[1]=S=>u.value=!1),"aria-label":"Close"},"✕"),Y("div",null,[Y("h1",null,Tt(i.value.title),1),Y("div",{innerHTML:b.value,class:"markdown-body"},null,8,Jw)]),i.value.image_urls&&i.value.image_urls.length?(De(),Ne("h2",Qw,"Gallery")):wt("",!0),i.value.image_urls&&i.value.image_urls.length?(De(),Pr(ff,{key:1,images:i.value.image_urls},null,8,["images"])):wt("",!0),i.value.files&&i.value.files.length?(De(),Ne("h2",eA,"Downloads")):wt("",!0),i.value.files&&i.value.files.length?(De(),Pr(uf,{key:3,files:i.value.files},null,8,["files"])):wt("",!0)],512)])):wt("",!0)])])}}},nA=rn(tA,[["__scopeId","data-v-da94b1da"]]),iA={class:"login-page"},rA={class:"card"},sA=["disabled"],aA={__name:"Login",setup(n){const e=Pe(""),t=Pe(""),i=Pe(!1),r=Pe(""),s=Pe(null),a=Pe(""),o=Jp();async function l(){r.value="",i.value=!0;try{console.log("Login submit",{username:e.value}),s.value=null,a.value="";const c=await fetch(`${Wn}/auth/login/`,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e.value,password:t.value})});s.value=c.status;const u=await c.text().catch(()=>"");let f={};try{f=u?JSON.parse(u):{}}catch{f={text:u}}if(a.value=JSON.stringify(f,null,2),!c.ok){r.value=f.detail||f.error||f.non_field_errors&&f.non_field_errors.join(" ")||c.statusText||"Login failed";return}f.access&&localStorage.setItem("accessToken",f.access),f.refresh&&localStorage.setItem("refreshToken",f.refresh);const h=f.token||f.key||f.access||null;h&&localStorage.setItem("authToken",h);try{window.dispatchEvent(new Event("storage"))}catch{}o.push("/")}catch(c){console.error("Login error",c),r.value=c.message||"Network error",a.value=c.stack||String(c)}finally{i.value=!1}}return(c,u)=>(De(),Ne("div",iA,[Y("div",rA,[u[4]||(u[4]=Y("h2",null,"Sign in",-1)),u[5]||(u[5]=Y("p",{class:"subtitle"},"Sign in with your username and password.",-1)),Y("form",{onSubmit:Nt(l,["prevent"])},[Y("label",null,[u[2]||(u[2]=yt(" Username ",-1)),fn(Y("input",{type:"text","onUpdate:modelValue":u[0]||(u[0]=f=>e.value=f),placeholder:"your username"},null,512),[[vc,e.value]])]),Y("label",null,[u[3]||(u[3]=yt(" Password ",-1)),fn(Y("input",{type:"password","onUpdate:modelValue":u[1]||(u[1]=f=>t.value=f),placeholder:"••••••••"},null,512),[[vc,t.value]])]),Y("button",{class:"login-btn",type:"submit",disabled:i.value},Tt(i.value?"Signing in…":"Login"),9,sA)],32)])]))}},oA=rn(aA,[["__scopeId","data-v-c44c6076"]]),Xm="/Profile_Picture_CyberCubed.jpg",lA="/blender_logo.svg",cA="/dungeons-dragons-5th-edition-seeklogo.svg",uA="/jellyfin-horizontal--color-on-dark.svg",fA="/jellyfin-logo.svg",hA="/minecraft-launcher.svg",dA="/Minecraft_Logo-en.svg",pA={class:"hero"},mA={class:"hero-intro"},gA={class:"card-grid"},_A={class:"home-card-action"},vA={class:"home-card-action"},xA={class:"home-card-action"},SA={class:"servers-section"},bA={class:"server-row-action"},MA=["title"],yA={__name:"Home",setup(n){const e=Pe(!1),t=Pe(!1);jn(()=>{Vt(()=>{e.value=!0})});async function i(){try{await navigator.clipboard.writeText("mc.cybercubed.dk"),t.value=!0,setTimeout(()=>{t.value=!1},1500)}catch{const r=document.createElement("textarea");r.value="mc.cybercubed.dk",r.style.position="fixed",r.style.opacity="0",document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r),t.value=!0,setTimeout(()=>{t.value=!1},1500)}}return(r,s)=>{const a=pa("router-link"),o=ma("typewriter");return De(),Ne("main",pA,[Y("section",mA,[s[1]||(s[1]=Y("img",{src:Xm,alt:"Home Image",class:"home-img"},null,-1)),fn((De(),Ne("h1",null,[...s[0]||(s[0]=[yt("Welcome to Cyber",-1),Y("span",null,"Cubed",-1)])])),[[o]]),s[2]||(s[2]=Y("p",null,"My personal website to explore the technicalities of building one and to share projects.",-1))]),Y("section",gA,[Y("article",{class:it(["home-card liquid-glass fade-in-expand",{visible:e.value}])},[s[4]||(s[4]=Y("h1",{class:"home-card-title",style:{"font-size":"3rem"}},[Y("span",{textContent:"</>"}),yt(" Coding")],-1)),s[5]||(s[5]=Y("p",null,"I have for many years had a fascination with computers and how they work. I have been coding since I was a teenager and have developed a passion for building software and games. here i will be sharing my experiences and self publishing some of my projects.",-1)),Y("div",_A,[nt(a,{to:"/coding",class:"btn btn-primary liquid-glass"},{default:Wt(()=>[...s[3]||(s[3]=[yt("See More",-1)])]),_:1})])],2),Y("article",{class:it(["home-card liquid-glass fade-in-expand",{visible:e.value}]),style:{"--fade-delay":"80ms"}},[s[7]||(s[7]=Y("img",{src:lA,alt:"Blender",class:"home-card-img"},null,-1)),s[8]||(s[8]=Y("p",null,"Having grown up with animation studios moving to 3D animation, i have always been fascinated by the possibilities of 3D art. I have been using Blender for a few years now and have developed a passion for creating 3D art. here i will be sharing my work and my knowledge with others.",-1)),Y("div",vA,[nt(a,{to:"/blender",class:"btn btn-primary liquid-glass"},{default:Wt(()=>[...s[6]||(s[6]=[yt("See More",-1)])]),_:1})])],2),Y("article",{class:it(["home-card liquid-glass fade-in-expand",{visible:e.value}]),style:{"--fade-delay":"160ms"}},[s[10]||(s[10]=Y("img",{src:cA,alt:"D&D",class:"home-card-img-dnd"},null,-1)),s[11]||(s[11]=Y("p",null,"A more recent hobby of mine is Dungeons & Dragons. I have been playing for a few years now and have developed a passion for creating characters and telling stories. here i will be sharing my work as a Dungeon Master as i have dared venture forth into the complicated nature of DM'ing.",-1)),Y("div",xA,[nt(a,{to:"/dnd",class:"btn btn-primary liquid-glass"},{default:Wt(()=>[...s[9]||(s[9]=[yt("See More",-1)])]),_:1})])],2)]),Y("section",SA,[s[16]||(s[16]=Y("div",{class:"servers-header"},[Y("h2",{class:"servers-title"},"Servers"),Y("p",{class:"servers-subtitle"},"(whitelisted)")],-1)),Y("article",{class:it(["server-row liquid-glass fade-in-expand",{visible:e.value}]),style:{"--fade-delay":"240ms"}},[...s[12]||(s[12]=[Lp('<img src="'+uA+'" alt="Jellyfin" class="server-row-img" data-v-65b0d7c8><div class="server-row-spacer" data-v-65b0d7c8></div><div class="server-row-action" data-v-65b0d7c8><a href="https://jellyfin.cybercubed.dk" target="_blank" rel="noopener noreferrer" class="external-link liquid-glass" data-v-65b0d7c8><img src="'+fA+'" alt="Jellyfin" class="external-link-logo" data-v-65b0d7c8> Visit Server </a></div>',3)])],2),Y("article",{class:it(["server-row-minecraft liquid-glass fade-in-expand",{visible:e.value}]),style:{"--fade-delay":"240ms"}},[s[13]||(s[13]=Y("img",{src:hA,alt:"Minecraft",class:"server-row-minecraft-icon"},null,-1)),s[14]||(s[14]=Y("img",{src:dA,alt:"Minecraft",class:"server-row-minecraft-logo"},null,-1)),s[15]||(s[15]=Y("div",{class:"server-row-spacer"},null,-1)),Y("div",bA,[Y("div",{class:it(["frame-glass copy-server-ip",{"copy-success":t.value}]),onClick:i,title:t.value?"Copied!":"Click to copy server IP"},Tt(t.value?"✓ Copied!":"mc.cybercubed.dk"),11,MA)])],2)])])}}},EA=rn(yA,[["__scopeId","data-v-65b0d7c8"]]),TA={class:"hero"},wA={class:"content-grid"},AA={key:0,class:"grid"},CA={key:1,class:"grid"},RA={class:"grid"},PA=["onClick"],DA={class:"grid"},IA=["src","alt"],LA={class:"wrapper"},UA={class:"compact-grid"},NA=["onClick"],FA=["src","alt"],OA=["innerHTML"],kA={key:0},BA={key:2},zA={__name:"Dnd",setup(n){const e=Pe([]),t=Pe(!1),i=Pe(null),r=Pe("All"),s=Pe("all"),a=Pe(""),{activeSort:o,sortItems:l}=lf(),c=Pe(!1),u=Pe(!1),f=Pe(null),h=Pe(!1),d=At(()=>{let R=e.value;if(r.value!=="All"&&(R=R.filter(x=>x.tags&&x.tags.some(P=>P.name===r.value))),s.value==="none"?R=R.filter(x=>!x.campaign):s.value!=="all"&&(R=R.filter(x=>x.campaign===s.value)),a.value.trim()){const x=a.value.toLowerCase().trim();R=R.filter(P=>{const v=P.title?.toLowerCase().includes(x),S=P.content?.toLowerCase().includes(x),W=P.files?.some(I=>I.name?.toLowerCase().includes(x));return v||S||W})}return l(R)}),m=At(()=>!i.value||!i.value.content?"":ut(i.value.content));function b(R){r.value=R}function g(R){s.value=R}function p(R){a.value=R}function M(R){o.value=R}async function A(){t.value=!0;try{let R=await fetch(`${Wn}/dnd-posts/`);if(R.ok||(R=await fetch(`${Wn}/dnd-posts`)),R.ok){const x=await R.json();e.value=Array.isArray(x)?x:[]}else e.value=[]}catch(R){console.warn("Failed to load D&D posts",R),e.value=[]}finally{t.value=!1}}function E(R){u.value&&f.value&&!f.value.contains(R.target)&&(u.value=!1)}return jn(()=>{A(),document.addEventListener("click",E)}),Dn(t,R=>{R||Vt(()=>{h.value=!0})}),Ur(()=>{document.removeEventListener("click",E)}),(R,x)=>{const P=ma("typewriter");return De(),Ne("div",TA,[fn((De(),Ne("h1",null,[...x[3]||(x[3]=[Y("span",null,"D&D",-1),yt(" Campaigns & Resources",-1)])])),[[P]]),x[6]||(x[6]=Y("p",null,"A collection of D&D characters, maps, lore, and more.",-1)),Y("div",wA,[nt(cf,{compactMode:c.value,"onUpdate:compactMode":x[0]||(x[0]=v=>c.value=v),onFilterChange:b,onCampaignChange:g,onSearchChange:p,onSortChange:M},null,8,["compactMode"]),t.value?(De(),Ne("section",AA,[...x[4]||(x[4]=[Y("p",null,"Loading D&D posts…",-1)])])):d.value.length===0?(De(),Ne("section",CA,[...x[5]||(x[5]=[Y("p",null,"No D&D posts found.",-1)])])):wt("",!0),fn(Y("section",RA,[(De(!0),Ne(Et,null,di(d.value,(v,S)=>(De(),Ne("article",{key:v.id,class:it(["card liquid-glass fade-in-expand",{visible:h.value}]),style:Jt({"--fade-delay":S*80+"ms"}),onClick:Nt(W=>{i.value=v,u.value=!0},["stop"])},[Y("div",DA,[Y("img",{src:v.thumbnail_url||"/dungeons-dragons-5th-edition-seeklogo.svg",alt:v.title,class:"thumb"},null,8,IA),Y("div",LA,[Y("h1",null,Tt(v.title),1)])]),Y("p",null,Tt(v.content),1)],14,PA))),128))],512),[[ms,!c.value&&!t.value&&d.value.length>0]]),fn(Y("section",UA,[(De(!0),Ne(Et,null,di(d.value,(v,S)=>(De(),Ne("article",{key:v.id,class:it(["compact-card liquid-glass fade-in-expand",{visible:h.value}]),style:Jt({"--fade-delay":S*80+"ms"}),onClick:Nt(W=>{i.value=v,u.value=!0},["stop"])},[Y("img",{src:v.thumbnail_url||"/dungeons-dragons-5th-edition-seeklogo.svg",alt:v.title,class:"thumb"},null,8,FA),Y("div",null,[Y("h1",null,Tt(v.title),1),Y("p",null,Tt(v.content),1)])],14,NA))),128))],512),[[ms,c.value&&!t.value&&d.value.length>0]]),u.value&&i.value?(De(),Ne("div",{key:2,class:"cover",onClick:x[2]||(x[2]=Nt(v=>u.value=!1,["self"]))},[Y("article",{ref_key:"coverCard",ref:f,class:"cover-card liquid-glass"},[Y("button",{class:"cover-close",onClick:x[1]||(x[1]=v=>u.value=!1),"aria-label":"Close"},"✕"),Y("div",null,[Y("h1",null,Tt(i.value.title),1),Y("div",{innerHTML:m.value,class:"markdown-body"},null,8,OA)]),i.value.image_urls&&i.value.image_urls.length?(De(),Ne("h2",kA,"Gallery")):wt("",!0),i.value.image_urls&&i.value.image_urls.length?(De(),Pr(ff,{key:1,images:i.value.image_urls},null,8,["images"])):wt("",!0),i.value.files&&i.value.files.length?(De(),Ne("h2",BA,"Downloads")):wt("",!0),i.value.files&&i.value.files.length?(De(),Pr(uf,{key:3,files:i.value.files},null,8,["files"])):wt("",!0)],512)])):wt("",!0)])])}}},Td=rn(zA,[["__scopeId","data-v-e1134250"]]),VA={class:"hero"},HA={__name:"About",setup(n){const e=Pe(!1);return jn(()=>{Vt(()=>{e.value=!0})}),(t,i)=>(De(),Ne("div",VA,[Y("div",{class:it(["wrap content liquid-glass fade-in-expand",{visible:e.value}])},[...i[0]||(i[0]=[Y("div",{class:"about-grid"},[Y("img",{src:Xm,alt:"About image",class:"about-img"}),Y("div",null,[Y("h1",null,"About"),Y("p",null," This is the personal website of Niklas J. Haunstrup aka. CyberCubed. It features various projects in 3D, coding, and more. and a Dungeons & Dragons campaign manager. "),Y("p",{class:"muted"},"Built with Vue 3, Vite, and small components.")])],-1)])],2)]))}},GA=rn(HA,[["__scopeId","data-v-cec282b3"]]),WA={},XA={src:"/admin/",style:{width:"100%",height:"100vh"}};function $A(n,e){return De(),Ne("iframe",XA)}const qA=rn(WA,[["render",$A]]),YA="/github-logo.svg",jA={class:"hero"},KA={class:"content-grid"},ZA={key:0,class:"grid"},JA={key:1,class:"grid"},QA={class:"grid"},e1=["onClick"],t1={class:"grid"},n1=["src","alt"],i1={class:"wrapper"},r1={class:"compact-grid"},s1=["onClick"],a1=["src","alt"],o1=["href"],l1=["innerHTML"],c1={key:0},u1={key:2},f1={__name:"Coding",setup(n){const e=Pe([]),t=Pe(!1),i=Pe(null),r=Pe("All"),s=Pe("all"),a=Pe(""),{activeSort:o,sortItems:l}=lf(),c=Pe(!1),u=Pe(!1),f=Pe(null),h=Pe(!1),d={All:null,Releases:"RELEASE",Updates:"UPDATE",Tutorials:"TUTORIAL",Misc:"MISC"},m=At(()=>{let x=e.value;const P=d[r.value];if(P&&(x=x.filter(v=>v.type===P)),s.value==="none"?x=x.filter(v=>!v.project):s.value!=="all"&&(x=x.filter(v=>v.project===s.value)),a.value.trim()){const v=a.value.toLowerCase().trim();x=x.filter(S=>{const W=S.title?.toLowerCase().includes(v),I=S.content?.toLowerCase().includes(v),N=S.files?.some(z=>z.name?.toLowerCase().includes(v));return W||I||N})}return l(x)}),b=At(()=>!i.value||!i.value.content?"":ut(i.value.content));function g(x){r.value=x}function p(x){s.value=x}function M(x){a.value=x}function A(x){o.value=x}async function E(){t.value=!0;try{let x=await fetch(`${Wn}/coding-posts/`);if(x.ok||(x=await fetch(`${Wn}/coding-posts`)),x.ok){const P=await x.json();e.value=Array.isArray(P)?P:[]}else e.value=[]}catch(x){console.warn("Failed to load coding posts",x),e.value=[]}finally{t.value=!1}}function R(x){u.value&&f.value&&!f.value.contains(x.target)&&(u.value=!1)}return jn(()=>{E(),document.addEventListener("click",R)}),Dn(t,x=>{x||Vt(()=>{h.value=!0})}),Ur(()=>{document.removeEventListener("click",R)}),(x,P)=>{const v=ma("typewriter");return De(),Ne("div",jA,[fn((De(),Ne("h1",null,[...P[3]||(P[3]=[Y("span",{class:"code-bracket",textContent:"</>"},null,-1),yt(" Coding Projects",-1)])])),[[v]]),P[7]||(P[7]=Y("p",null,"A collection of coding projects, tutorials, and resources.",-1)),Y("div",KA,[nt(cf,{compactMode:c.value,"onUpdate:compactMode":P[0]||(P[0]=S=>c.value=S),onFilterChange:g,onCampaignChange:p,onSearchChange:M,onSortChange:A},null,8,["compactMode"]),t.value?(De(),Ne("section",ZA,[...P[4]||(P[4]=[Y("p",null,"Loading coding posts…",-1)])])):m.value.length===0?(De(),Ne("section",JA,[...P[5]||(P[5]=[Y("p",null,"No coding posts found.",-1)])])):wt("",!0),fn(Y("section",QA,[(De(!0),Ne(Et,null,di(m.value,(S,W)=>(De(),Ne("article",{key:S.id,class:it(["card liquid-glass fade-in-expand",{visible:h.value}]),style:Jt({"--fade-delay":W*80+"ms"}),onClick:Nt(I=>{i.value=S,u.value=!0},["stop"])},[Y("div",t1,[Y("img",{src:S.thumbnail_url||"/code-icon.svg",alt:S.title,class:"thumb"},null,8,n1),Y("div",i1,[Y("h1",null,Tt(S.title),1)])]),Y("p",null,Tt(S.content),1)],14,e1))),128))],512),[[ms,!c.value&&!t.value&&m.value.length>0]]),fn(Y("section",r1,[(De(!0),Ne(Et,null,di(m.value,(S,W)=>(De(),Ne("article",{key:S.id,class:it(["compact-card liquid-glass fade-in-expand",{visible:h.value}]),style:Jt({"--fade-delay":W*80+"ms"}),onClick:Nt(I=>{i.value=S,u.value=!0},["stop"])},[Y("img",{src:S.thumbnail_url||"/code-icon.svg",alt:S.title,class:"thumb"},null,8,a1),Y("div",null,[Y("h1",null,Tt(S.title),1),Y("p",null,Tt(S.content),1)])],14,s1))),128))],512),[[ms,c.value&&!t.value&&m.value.length>0]]),u.value&&i.value?(De(),Ne("div",{key:2,class:"cover",onClick:P[2]||(P[2]=Nt(S=>u.value=!1,["self"]))},[Y("article",{ref_key:"coverCard",ref:f,class:"cover-card liquid-glass"},[Y("button",{class:"cover-close",onClick:P[1]||(P[1]=S=>u.value=!1),"aria-label":"Close"},"✕"),Y("div",null,[Y("h1",null,Tt(i.value.title),1),i.value.project_detail&&i.value.project_detail.github_url?(De(),Ne("a",{key:0,href:i.value.project_detail.github_url,target:"_blank",rel:"noopener noreferrer",class:"external-link liquid-glass"},[...P[6]||(P[6]=[Y("img",{src:YA,alt:"GitHub",class:"external-link-logo"},null,-1),yt(" View on GitHub ",-1)])],8,o1)):wt("",!0),Y("div",{innerHTML:b.value,class:"markdown-body"},null,8,l1)]),i.value.image_urls&&i.value.image_urls.length?(De(),Ne("h2",c1,"Gallery")):wt("",!0),i.value.image_urls&&i.value.image_urls.length?(De(),Pr(ff,{key:1,images:i.value.image_urls},null,8,["images"])):wt("",!0),i.value.files&&i.value.files.length?(De(),Ne("h2",u1,"Downloads")):wt("",!0),i.value.files&&i.value.files.length?(De(),Pr(uf,{key:3,files:i.value.files},null,8,["files"])):wt("",!0)],512)])):wt("",!0)])])}}},h1=rn(f1,[["__scopeId","data-v-750ea911"]]),d1={},p1={class:"hero"},m1={class:"not-found liquid-glass"};function g1(n,e){const t=pa("router-link"),i=ma("typewriter");return De(),Ne("div",p1,[Y("div",m1,[fn((De(),Ne("h1",null,[...e[0]||(e[0]=[yt("404 - Page Not Found",-1)])])),[[i]]),e[2]||(e[2]=Y("p",null,"The page you are looking for does not exist.",-1)),nt(t,{to:"/",class:"btn btn-primary liquid-glass"},{default:Wt(()=>[...e[1]||(e[1]=[yt("Go back home",-1)])]),_:1})])])}const _1=rn(d1,[["render",g1],["__scopeId","data-v-19a29a88"]]),v1=[{path:"/",name:"Home",component:EA},{path:"/blender",name:"Blender",component:nA},{path:"/dnd/:id",name:"Campaign",component:Td},{path:"/dnd",name:"Dnd",component:Td},{path:"/about",name:"About",component:GA},{path:"/login",name:"Login",component:oA},{path:"/admin-view",name:"Admin",component:qA},{path:"/coding",name:"Coding",component:h1},{path:"/:pathMatch(.*)",name:"NotFound",component:_1}],x1=Lv({history:fv(),routes:v1});function S1(n,{speed:e=50}={}){let t=null,i=null;function r(l){const c=[];function u(f,h){if(f.nodeType===Node.TEXT_NODE)for(const d of f.textContent)c.push({type:"char",char:d,container:h});else if(f.nodeType===Node.ELEMENT_NODE){const d=f.cloneNode(!1);c.push({type:"open",element:d,container:h});for(const m of f.childNodes)u(m,d);c.push({type:"close",container:h})}}for(const f of l.childNodes)u(f,l);return c}function s(l){if(l.dataset.typewriterDone)return;l.dataset.typewriterDone="true",l.classList.remove("typewriter-ready"),l.style.visibility="";const c=l.innerHTML,u=r(l);l.innerHTML="";const f=document.createElement("span");f.className="typewriter-cursor",f.setAttribute("aria-hidden","true"),f.textContent="|",l.appendChild(f);const h=[{container:l}];let d=0;i=setInterval(()=>{if(d>=u.length){clearInterval(i),i=null,l.innerHTML=c;return}const m=u[d],b=h[h.length-1].container;switch(m.type){case"char":{const g=document.createTextNode(m.char);b.insertBefore(g,f.parentNode===b?f:null);break}case"open":{const g=m.element;b.insertBefore(g,f.parentNode===b?f:null),h.push({container:g});break}case"close":{h.pop();break}}d++},e)}function a(){const l=n.value;l&&(l.dataset.typewriterDone||(t=new IntersectionObserver(c=>{for(const u of c)u.isIntersecting&&(s(l),t.disconnect(),t=null)},{threshold:.1}),t.observe(l)))}function o(){t&&(t.disconnect(),t=null),i&&(clearInterval(i),i=null)}return{observe:a,cleanup:o}}const b1={mounted(n,e){const t=e.value?.speed??50;n.classList.add("typewriter-ready");const i={value:n},{observe:r,cleanup:s}=S1(i,{speed:t});n._typewriterCleanup=s,r()},unmounted(n){n._typewriterCleanup&&(n._typewriterCleanup(),delete n._typewriterCleanup)}};E_(PT).use(x1).directive("typewriter",b1).mount("#app");
