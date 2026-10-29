(()=>{var as=Object.defineProperty;var Pt=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(r){throw n=[r],r}};var is=(e,t)=>{for(var n in t)as(e,n,{get:t[n],enumerable:!0})};function fs(e){for(var t=0;t<e.length;t++)e[t]()}function Ya(){var e,t,n=new Promise((r,a)=>{e=r,t=a});return{promise:n,resolve:e,reject:t}}function Xa(e){return e===this.v}function Ja(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function gs(e){return!Ja(e,this.v)}function bs(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function ms(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function ys(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function _s(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ws(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ks(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function xs(){throw new Error("https://svelte.dev/e/hydration_failed")}function Es(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ss(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Cs(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function As(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}function zt(e){me=e}function ct(e,t=!1,n){me={p:me,i:!1,c:null,e:null,s:e,x:null,r:$,l:null}}function ut(e){var t=me,n=t.e;if(n!==null){t.e=null;for(var r of n)$i(r)}return e!==void 0&&(t.x=e),t.i=!0,me=t.p,Br(e)}function Br(e={}){return Ft(e,qa,{value:!0}),e}function ti(){return!0}function ni(){var e=wt;wt=[],fs(e)}function Ze(e){if(wt.length===0&&!un){var t=wt;queueMicrotask(()=>{t===wt&&ni()})}wt.push(e)}function Os(){for(;wt.length>0;)ni()}function Ls(){console.warn("https://svelte.dev/e/derived_inert")}function mn(e){console.warn("https://svelte.dev/e/hydration_mismatch")}function Ns(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Ms(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Qe(e){T=e}function we(e){if(e===null)throw mn(),At;return M=e}function Tt(){return we(at(M))}function ae(e){if(T){if(at(M)!==null)throw mn(),At;M=e}}function Kr(e=1){if(T){for(var t=e,n=M;t--;)n=at(n);M=n}}function Gr(e=!0){for(var t=0,n=M;;){if(n.nodeType===bn){var r=n.data;if(r===Qa){if(t===0)return n;t-=1}else(r===zr||r===Za||r[0]==="["&&!isNaN(Number(r.slice(1))))&&(t+=1)}var a=at(n);e&&n.remove(),n=a}}function ri(e){if(!e||e.nodeType!==bn)throw mn(),At;return e.data}function st(e){if(typeof e!="object"||e===null||Vt in e||qa in e)return e;let t=Ga(e);if(t!==cs&&t!==us)return e;var n=new Map,r=Vr(e),a=I(0),i=St,l=s=>{if(St===i)return s();var u=O,c=St;De(null),Oa(i);var d=s();return De(u),Oa(c),d};return r&&n.set("length",I(e.length)),new Proxy(e,{defineProperty(s,u,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Es();var d=n.get(u);return d===void 0?l(()=>{var h=I(c.value);return n.set(u,h),h}):_(d,c.value,!0),!0},deleteProperty(s,u){var c=n.get(u);if(c===void 0){if(u in s){let d=l(()=>I(re));n.set(u,d),fn(a)}}else _(c,re),fn(a);return!0},get(s,u,c){if(u===Vt)return e;var d=n.get(u),h=u in s;if(d===void 0&&(!h||Ht(s,u)?.writable)&&(d=l(()=>{var g=st(h?s[u]:re),b=I(g);return b}),n.set(u,d)),d!==void 0){var p=o(d);return p===re?void 0:p}return Reflect.get(s,u,c)},getOwnPropertyDescriptor(s,u){var c=Reflect.getOwnPropertyDescriptor(s,u);if(c&&"value"in c){var d=n.get(u);d&&(c.value=o(d))}else if(c===void 0){var h=n.get(u),p=h?.v;if(h!==void 0&&p!==re)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return c},has(s,u){if(u===Vt)return!0;var c=n.get(u),d=c!==void 0&&c.v!==re||Reflect.has(s,u);if(c!==void 0||$!==null&&(!d||Ht(s,u)?.writable)){c===void 0&&(c=l(()=>{var p=d?st(s[u]):re,g=I(p);return g}),n.set(u,c));var h=o(c);if(h===re)return!1}return d},set(s,u,c,d){var h=n.get(u),p=u in s;if(r&&u==="length")for(var g=c;g<h.v;g+=1){var b=n.get(g+"");b!==void 0?_(b,re):g in s&&(b=l(()=>I(re)),n.set(g+"",b))}if(h===void 0)(!p||Ht(s,u)?.writable)&&(h=l(()=>I(void 0)),_(h,st(c)),n.set(u,h));else{p=h.v!==re;var x=l(()=>st(c));_(h,x)}var P=Reflect.getOwnPropertyDescriptor(s,u);if(P?.set&&P.set.call(d,c),!p){if(r&&typeof u=="string"){var B=n.get("length"),V=Number(u);Number.isInteger(V)&&V>=B.v&&_(B,V+1)}fn(a)}return!0},ownKeys(s){o(a);var u=Reflect.ownKeys(s).filter(h=>{var p=n.get(h);return p===void 0||p.v!==re});for(var[c,d]of n)d.v!==re&&!(c in s)&&u.push(c);return u},setPrototypeOf(){Ss()}})}function Aa(e){try{if(e!==null&&typeof e=="object"&&Vt in e)return e[Vt]}catch{}return e}function ai(e,t){return Object.is(Aa(e),Aa(t))}function Cr(){if(Et===void 0){Et=window,Sr=document,ii=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;oi=Ht(t,"firstChild").get,si=Ht(t,"nextSibling").get,Sa(e)&&(e[kr]=void 0,e[Wa]=null,e[xr]=void 0,e.__e=void 0),Sa(n)&&(n[Er]=void 0)}}function Be(e=""){return document.createTextNode(e)}function Ee(e){return oi.call(e)}function at(e){return si.call(e)}function de(e,t){if(!T)return Ee(e);var n=Ee(M);if(n===null)n=M.appendChild(Be());else if(t&&n.nodeType!==gn){var r=Be();return n?.before(r),we(r),r}return t&&jn(n),we(n),n}function Nt(e,t=!1){if(!T){var n=Ee(e);return n instanceof Comment&&n.data===""?at(n):n}if(t){if(M?.nodeType!==gn){var r=Be();return M?.before(r),we(r),r}jn(M)}return M}function Mt(e,t=!1){if(!T)return Ee(e);var n=de(e,t);return ae(e),n}function X(e,t=1,n=!1){let r=T?M:e;for(var a;t--;)a=r,r=at(r);if(!T)return r;if(n){if(r?.nodeType!==gn){var i=Be();return r===null?a?.after(i):r.before(i),we(i),i}jn(r)}return we(r),r}function Ds(e){e.textContent=""}function Hs(){return!1}function Yr(e,t,n){return t==null||t===ei?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function jn(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===gn;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function Us(e){var t=$;if(t===null)return O.f|=vt,e;if((t.f&$t)===0&&(t.f&jt)===0)throw e;Je(e,t)}function Je(e,t){if(!(t!==null&&(t.f&$e)!==0)){for(;t!==null;){if((t.f&wr)!==0&&(t.f&($e|Nn))===0){if((t.f&$t)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function te(e,t){e.f=e.f&Vs|t}function qr(e){(e.f&Ne)!==0||e.deps===null?te(e,le):te(e,je)}function li(e){if(e!==null)for(let t of e)(t.f&he)===0||(t.f&Ct)===0||(t.f^=Ct,li(t.deps))}function ci(e,t,n){(e.f&ce)!==0?t.add(e):(e.f&je)!==0&&n.add(e),li(e.deps),te(e,le)}function ui(e,t,n){if(e==null)return t(void 0),ht;let r=wn(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}function Fs(e,t=ht){let n=null,r=new Set;function a(s){if(Ja(e,s)&&(e=s,n)){let u=!Ot.length;for(let c of r)c[1](),Ot.push(c,e);if(u){for(let c=0;c<Ot.length;c+=2)Ot[c][0](Ot[c+1]);Ot.length=0}}}function i(s){a(s(e))}function l(s,u=ht){let c=[s,u];return r.add(c),r.size===1&&(n=t(a,i)||ht),s(e),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:a,update:i,subscribe:l}}function on(e){let t;return ui(e,n=>t=n)(),t}function Ta(e,t,n){let r=n[t]??={store:null,source:_i(void 0),unsubscribe:ht};if(r.store!==e&&!(Ar in n))if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=ht;else{var a=!0;r.unsubscribe=ui(e,i=>{a?r.source.v=i:_(r.source,i)}),a=!1}return e&&Ar in n?on(e):o(r.source)}function js(){let e={};function t(){zn(()=>{for(var n in e)e[n].unsubscribe();Ft(e,Ar,{enumerable:!1,value:!0})})}return[e,t]}function zs(e,t){if(t){let n=document.body;e.autofocus=!0,Ze(()=>{document.activeElement===n&&e.focus()})}}function fi(){$a||($a=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(let t of e.target.elements)t[cn]?.()})},{capture:!0}))}function Gt(e){var t=O,n=$;De(null),rt(null);try{return e()}finally{De(t),rt(n)}}function Bs(e,t,n,r=n){e.addEventListener(t,()=>Gt(n));let a=e[cn];a?e[cn]=()=>{a(),r(!0)}:e[cn]=()=>r(!0),fi()}function di(e,t,n,r){let a=Wr;var i=e.filter(g=>!g.settled),l=t.map(a);if(n.length===0&&i.length===0){r(l);return}var s=$,u=Ks(),c=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(g=>g.promise)):null;function d(g){if((s.f&$e)===0){u();try{r([...l,...g])}catch(b){Je(b,s)}Hn()}}var h=hi();if(n.length===0){c.then(()=>d([])).finally(h);return}function p(){Promise.all(n.map(g=>Gs(g))).then(d).catch(g=>Je(g,s)).finally(h)}c?c.then(()=>{u(),p(),Hn()}):p()}function Ks(){var e=$,t=O,n=me,r=R;return function(i=!0){rt(e),De(t),zt(n),i&&(e.f&$e)===0&&(r?.activate(),r?.apply())}}function Hn(e=!0){rt(null),De(null),zt(null),e&&R?.deactivate()}function hi(){var e=$,t=e.b,n=R,r=!!t?.is_rendered();return t?.update_pending_count(1,n),n.increment(r,e),()=>{t?.update_pending_count(-1,n),n.decrement(r,e)}}function Wr(e){var t=he|ce;return $!==null&&($.f|=Rt),{ctx:me,deps:null,effects:null,equals:Xa,f:t,fn:e,reactions:null,rv:0,v:re,wv:0,parent:$,ac:null}}function Gs(e,t,n){let r=$;r===null&&ms();var a=void 0,i=yn(re),l=!O,s=new Set;return al(()=>{var u=$,c=Ya();a=c.promise;try{Promise.resolve(e()).then(c.resolve,g=>{g!==vn&&c.reject(g)}).finally(Hn)}catch(g){c.reject(g),Hn()}var d=R;if(l){if((u.f&$t)!==0)var h=hi();if(r.b?.is_rendered())d.async_deriveds.get(u)?.reject(sn);else for(let g of s.values())g.reject(sn);s.add(c),d.async_deriveds.set(u,c)}let p=(g,b=void 0)=>{h?.(),s.delete(c),b!==sn&&(d.activate(),b?(i.f|=vt,Vn(i,b)):((i.f&vt)!==0&&(i.f^=vt),Vn(i,g)),d.deactivate())};c.promise.then(p,g=>p(null,g||"unknown"))}),zn(()=>{for(let u of s)u.reject(sn)}),new Promise(u=>{function c(d){function h(){d===a?u(i):c(a)}d.then(h,h)}c(a)})}function _e(e){let t=Wr(e);return ki(t),t}function Ys(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)pe(t[n])}}function Xr(e){var t,n=$,r=e.parent;if(!lt&&r!==null&&e.v!==re&&(r.f&($e|Me))!==0)return Ls(),e.v;rt(r);try{e.f&=~Ct,Ys(e),t=Ci(e)}finally{rt(n)}return t}function vi(e){var t=Xr(e);if(!e.equals(t)&&(e.wv=Ei(),(!R?.is_fork||e.deps===null)&&(R!==null?(R.capture(e,t,!0),Tr?.capture(e,t,!0)):e.v=t,e.deps===null))){te(e,le);return}lt||(Ve!==null?(Qr()||R?.is_fork)&&Ve.set(e,t):qr(e))}function qs(e){if(e.effects!==null)for(let t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac!==null&&Gt(()=>{t.ac.abort(vn),t.ac=null}),t.fn!==null&&(t.teardown=ht),hn(t,0),ta(t))}function pi(e){if(e.effects!==null)for(let t of e.effects)t.teardown&&t.fn!==null&&Bt(t)}function G(e){var t=un;un=!0;try{for(var n;;){if(Os(),R===null)return n;R.flush()}}finally{un=t}}function Xs(){try{ks()}catch(e){Je(e,$r)}}function Ia(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&($e|Me))===0&&_n(r)&&(ot=new Set,Bt(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Oi(r),ot?.size>0)){et.clear();for(let a of ot){if((a.f&($e|Me))!==0)continue;let i=[a],l=a.parent;for(;l!==null;)ot.has(l)&&(ot.delete(l),i.push(l)),l=l.parent;for(let s=i.length-1;s>=0;s--){let u=i[s];(u.f&($e|Me))===0&&Bt(u)}}ot.clear()}}ot=null}}function gi(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(let a of e.reactions){let i=a.f;(i&he)!==0?gi(a,t,n,r):(i&(Ut|Ue))!==0&&(i&ce)===0&&Jr(a,t,r)&&(te(a,ce),Zr(a))}}function Jr(e,t,n){let r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(let a of e.deps){if(On.call(t,a))return!0;if((a.f&he)!==0&&Jr(a,t,n))return n.set(a,!0),!0}return n.set(e,!1),!1}function Zr(e){R.schedule(e)}function bi(e,t){if(!((e.f&ze)!==0&&(e.f&le)!==0)){(e.f&ce)!==0?t.d.push(e):(e.f&je)!==0&&t.m.push(e),te(e,le);for(var n=e.first;n!==null;)bi(n,t),n=n.next}}function mi(e){te(e,le);for(var t=e.first;t!==null;)mi(t),t=t.next}function yn(e,t){var n={f:0,v:e,reactions:null,equals:Xa,rv:0,wv:0};return n}function I(e,t){let n=yn(e);return ki(n),n}function _i(e,t=!1,n=!0){let r=yn(e);return t||(r.equals=gs),r}function _(e,t,n=!1){O!==null&&(!Fe||(O.f&Mn)!==0)&&ti()&&(O.f&(he|Ue|Ut|Mn))!==0&&(tt===null||!tt.has(e))&&Cs();let r=n?st(t):t;return Vn(e,r,Rn)}function Vn(e,t,n=null){if(!e.equals(t)){lt?et.set(e,t):et.has(e)||et.set(e,e.v);var r=gt.ensure();if(r.capture(e,t),(e.f&he)!==0){let a=e;(e.f&ce)!==0&&Xr(a),Ve===null&&qr(a)}e.wv=Ei(),wi(e,ce,n),$!==null&&($.f&le)!==0&&($.f&(ze|nt))===0&&(Le===null?Zs([e]):Le.push(e)),!r.is_fork&&Un.size>0&&!yi&&Js()}return t}function Js(){yi=!1;for(let e of Un){(e.f&le)!==0&&te(e,je);let t;try{t=_n(e)}catch{t=!0}t&&Bt(e)}Un.clear()}function fn(e){_(e,e.v+1)}function wi(e,t,n){var r=e.reactions;if(r!==null)for(var a=r.length,i=0;i<a;i++){var l=r[i],s=l.f,u=(s&ce)===0;if(u&&te(l,t),(s&Mn)!==0)Un.add(l);else if((s&he)!==0){var c=l;Ve?.delete(c),(s&Ct)===0&&(s&Ne&&($===null||($.f&Dn)===0)&&(l.f|=Ct),wi(c,je,n))}else if(u){var d=l;(s&Ue)!==0&&ot!==null&&ot.add(d),n!==null?n.push(d):Zr(d)}}}function Pa(e){lt=e}function De(e){O=e}function rt(e){$=e}function ki(e){O!==null&&(tt??=new Set).add(e)}function Zs(e){Le=e}function Oa(e){St=e}function Ei(){return++xi}function _n(e){var t=e.f;if((t&ce)!==0)return!0;if(t&he&&(e.f&=~Ct),(t&je)!==0){for(var n=e.deps,r=n.length,a=0;a<r;a++){var i=n[a];if(_n(i)&&vi(i),i.wv>e.wv)return!0}(t&Ne)!==0&&Ve===null&&te(e,le)}return!1}function Si(e,t,n=!0){var r=e.reactions;if(r!==null&&!(tt!==null&&tt.has(e)))for(var a=0;a<r.length;a++){var i=r[a];(i.f&he)!==0?Si(i,t,!1):t===i&&(n?te(i,ce):(i.f&le)!==0&&te(i,je),Zr(i))}}function Ci(e){var t=Se,n=Te,r=Le,a=O,i=tt,l=me,s=Fe,u=St,c=e.f;Se=null,Te=0,Le=null,O=(c&(ze|nt))===0?e:null,tt=null,zt(e.ctx),Fe=!1,St=++kt,e.ac!==null&&(Gt(()=>{e.ac.abort(vn)}),e.ac=null);try{e.f|=Dn;var d=e.fn,h=d();e.f|=$t;var p=La(e);if(ti()&&Le!==null&&!Fe&&p!==null&&(e.f&(he|je|ce))===0)for(var g=0;g<Le.length;g++)Si(Le[g],e);if(a!==null&&a!==e){if(kt++,a.deps!==null)for(let b=0;b<n;b+=1)a.deps[b].rv=kt;if(t!==null)for(let b of t)b.rv=kt;Le!==null&&(r===null?r=Le:r.push(...Le))}return(e.f&vt)!==0&&(e.f^=vt),h}catch(b){return La(e),Us(b)}finally{e.f^=Dn,Se=t,Te=n,Le=r,O=a,tt=i,zt(l),Fe=s,St=u}}function La(e){var t=e.deps,n=R?.is_fork;if(Se!==null){var r;if(n||hn(e,Te),t!==null&&Te>0)for(t.length=Te+Se.length,r=0;r<Se.length;r++)t[Te+r]=Se[r];else e.deps=t=Se;if(Qr()&&(e.f&Ne)!==0)for(r=Te;r<t.length;r++)(t[r].reactions??=[]).push(e)}else!n&&t!==null&&Te<t.length&&(hn(e,Te),t.length=Te);return t}function Qs(e,t){let n=t.reactions;if(n!==null){var r=os.call(n,e);if(r!==-1){var a=n.length-1;a===0?n=t.reactions=null:(n[r]=n[a],n.pop())}}if(n===null&&(t.f&he)!==0&&(Se===null||!On.call(Se,t))){var i=t;(i.f&Ne)!==0&&(i.f^=Ne,i.f&=~Ct),i.v!==re&&qr(i),i.ac!==null&&Gt(()=>{i.ac.abort(vn),i.ac=null,te(i,ce)}),qs(i),hn(i,0)}}function hn(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Qs(e,n[r])}function Bt(e){var t=e.f;if((t&$e)===0){te(e,le);var n=$,r=In;$=e,In=(t&(ze|nt))===0;try{(t&(Ue|Fr))!==0?il(e):ta(e),Ii(e);var a=Ci(e);e.teardown=typeof a=="function"?a:null,e.wv=xi;var i}finally{In=r,$=n}}}async function xt(){await Promise.resolve(),G()}function o(e){var t=e.f,n=(t&he)!==0;if(O!==null&&!Fe){var r=$!==null&&($.f&$e)!==0;if(!r&&(tt===null||!tt.has(e))){var a=O.deps;if((O.f&Dn)!==0)e.rv<kt&&(e.rv=kt,Se===null&&a!==null&&a[Te]===e?Te++:Se===null?Se=[e]:Se.push(e));else{O.deps??=[],On.call(O.deps,e)||O.deps.push(e);var i=e.reactions;i===null?e.reactions=[O]:On.call(i,O)||i.push(O)}}}if(lt&&et.has(e))return et.get(e);if(n){var l=e;if(lt){var s=l.v;return((l.f&le)===0&&l.reactions!==null||Ti(l))&&(s=Xr(l)),et.set(l,s),s}var u=(l.f&Ne)===0&&!Fe&&O!==null&&(In||(O.f&Ne)!==0),c=(l.f&$t)===0;_n(l)&&(u&&(l.f|=Ne),vi(l)),u&&!c&&(pi(l),Ai(l))}if(Ve?.has(e))return Ve.get(e);if((e.f&vt)!==0)throw e.v;return e.v}function Ai(e){if(e.f|=Ne,e.deps!==null)for(let t of e.deps)(t.reactions??=[]).push(e),(t.f&he)!==0&&(t.f&Ne)===0&&(pi(t),Ai(t))}function Ti(e){if(e.v===re)return!0;if(e.deps===null)return!1;for(let t of e.deps)if(et.has(t)||(t.f&he)!==0&&Ti(t))return!0;return!1}function wn(e){var t=Fe;try{return Fe=!0,e()}finally{Fe=t}}function el(e){$===null&&(O===null&&ws(),_s()),lt&&ys()}function tl(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Ke(e,t){var n=$;n!==null&&(n.f&Me)!==0&&(e|=Me);var r={ctx:me,deps:null,nodes:null,f:e|ce|Ne,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};R?.register_created_effect(r);var a=r;if((e&jt)!==0)Dt!==null?Dt.push(r):gt.ensure().schedule(r);else if(t!==null){try{Bt(r)}catch(l){throw pe(r),l}a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&Rt)===0&&(a=a.first,(e&Ue)!==0&&(e&pt)!==0&&a!==null&&(a.f|=pt))}if(a!==null&&(a.parent=n,n!==null&&tl(a,n),O!==null&&(O.f&he)!==0&&(e&nt)===0)){var i=O;(i.effects??=[]).push(a)}return r}function Qr(){return O!==null&&!Fe}function zn(e){let t=Ke(Fn,null);return te(t,le),t.teardown=e,t}function xe(e){el();var t=$.f,n=!O&&(t&ze)!==0&&me!==null&&!me.i;if(n){var r=me;(r.e??=[]).push(e)}else return $i(e)}function $i(e){return Ke(jt|hs,e)}function nl(e){gt.ensure();let t=Ke(nt|Rt,e);return()=>{pe(t)}}function rl(e){gt.ensure();let t=Ke(nt|Rt,e);return(n={})=>new Promise(r=>{n.outro?dn(t,()=>{pe(t),r(void 0)}):(pe(t),r(void 0))})}function ea(e){return Ke(jt,e)}function al(e){return Ke(Ut|Rt,e)}function Bn(e,t=0){return Ke(Fn|t,e)}function be(e,t=[],n=[],r=[]){di(r,t,n,a=>{Ke(Fn,()=>{e(...a.map(o))})})}function kn(e,t=0){var n=Ke(Ue|t,e);return n}function Ri(e,t=0){var n=Ke(Fr|t,e);return n}function He(e){return Ke(ze|Rt,e)}function Ii(e){var t=e.teardown;if(t!==null){let n=lt,r=O;Pa(!0),De(null);try{t.call(null)}catch(a){Je(a,e.parent)}finally{Pa(n),De(r)}}}function ta(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){let a=n.ac;a!==null&&Gt(()=>{a.abort(vn)});var r=n.next;(n.f&nt)!==0?n.parent=null:pe(n,t),n=r}}function il(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&ze)===0&&pe(t),t=n}}function pe(e,t=!0){var n=!1;(t||(e.f&ds)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Pi(e.nodes.start,e.nodes.end),n=!0),e.f|=Nn,ta(e,t&&!n),hn(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(let i of r)i.stop();Ii(e),e.f^=Nn,e.f|=$e;var a=e.parent;a!==null&&a.first!==null&&Oi(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Pi(e,t){for(;e!==null;){var n=e===t?null:at(e);e.remove(),e=n}}function Oi(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function dn(e,t,n=!0){var r=[];e.f|=jr,Li(e,r,!0);var a=()=>{n&&pe(e),t&&t()},i=r.length;if(i>0){var l=()=>--i||a();for(var s of r)s.out(l)}else a()}function Li(e,t,n){if((e.f&Me)===0){e.f^=Me;var r=e.nodes&&e.nodes.t;if(r!==null)for(let s of r)(s.is_global||n)&&t.push(s);for(var a=e.first;a!==null;){var i=a.next;if((a.f&nt)===0){var l=(a.f&pt)!==0||(a.f&ze)!==0&&(e.f&Ue)!==0;Li(a,t,l?n:!1)}a=i}}}function Na(e){e.f&=~jr,Ni(e,!0)}function Ni(e,t){if((e.f&jr)===0&&(e.f&Me)!==0){e.f^=Me,(e.f&le)===0&&(te(e,ce),gt.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,a=(n.f&pt)!==0||(n.f&ze)!==0;Ni(n,a?t:!1),n=r}var i=e.nodes&&e.nodes.t;if(i!==null)for(let l of i)(l.is_global||t)&&l.in()}}function Mi(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var a=n===r?null:at(n);t.append(n),n=a}}function ol(e){let t=0,n=yn(0),r;return()=>{Qr()&&(o(n),Bn(()=>(t===0&&(r=wn(()=>e(()=>fn(n)))),t+=1,()=>{Ze(()=>{t-=1,t===0&&(r?.(),r=void 0,fn(n))})})))}}function Ma(e){let t={get:n=>on(t.store)[n],set:(n,r)=>{typeof n=="string"?Object.assign(on(t.store),{[n]:r}):Object.assign(on(t.store),n),t.store.set(on(t.store))},store:Fs(e)};return t}function Hi(e,t,n,r={}){function a(i){if(r.capture||Ir.call(t,i),!i.cancelBubble)return Gt(()=>n?.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Ze(()=>{t.addEventListener(e,a,r)}):t.addEventListener(e,a,r),a}function se(e,t,n,r,a){var i={capture:r,passive:a},l=Hi(e,t,n,i);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&zn(()=>{t.removeEventListener(e,l,i)})}function Kn(e,t,n){(t[ln]??={})[e]=n}function Gn(e){for(var t=0;t<e.length;t++)Di.add(e[t]);for(var n of Rr)n(e)}function Ir(e){var t=this,n=t.ownerDocument,r=e.type,a=e.composedPath?.()||[],i=a[0]||e.target;vr=e,pr||(pr=!0,setTimeout(()=>{pr=!1,vr=null}));var l=0,s=vr===e&&e[ln];if(s){var u=a.indexOf(s);if(u!==-1&&(t===document||t===window)){e[ln]=t;return}var c=a.indexOf(t);if(c===-1)return;u<=c&&(l=u)}if(i=a[l]||e.target,i!==t){Ft(e,"currentTarget",{configurable:!0,get(){return i||n}});var d=O,h=$;De(null),rt(null);try{for(var p,g=[];i!==null&&i!==t;){try{var b=i[ln]?.[r];b!=null&&(!i.disabled||e.target===i)&&b.call(i,e)}catch(x){p?g.push(x):p=x}if(e.cancelBubble)break;l++,i=l<a.length?a[l]:null}if(p){for(let x of g)queueMicrotask(()=>{throw x});throw p}}finally{e[ln]=t,delete e.currentTarget,De(d),rt(h)}}}function ul(e){return cl?.createHTML(e)??e}function Ui(e){var t=Yr("template");return t.innerHTML=ul(e.replaceAll("<!>","<!---->")),t.content}function Re(e,t){var n=$;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function ee(e,t){var n=(t&Ts)!==0,r=(t&$s)!==0,a,i=!e.startsWith("<!>");return()=>{if(T)return Re(M,null),M;a===void 0&&(a=Ui(i?e:"<!>"+e),n||(a=Ee(a)));var l=r||ii?document.importNode(a,!0):a.cloneNode(!0);if(n){var s=Ee(l),u=l.lastChild;Re(s,u)}else Re(l,l);return l}}function fl(e,t,n="svg"){var r=!e.startsWith("<!>"),a=`<${n}>${r?e:"<!>"+e}</${n}>`,i;return()=>{if(T)return Re(M,null),M;if(!i){var l=Ui(a),s=Ee(l);i=Ee(s)}var u=i.cloneNode(!0);return Re(u,u),u}}function na(e,t){return fl(e,t,"svg")}function Tn(e=""){if(!T){var t=Be(e+"");return Re(t,t),t}var n=M;return n.nodeType!==gn?(n.before(n=Be()),we(n)):jn(n),Re(n,n),n}function Da(){if(T)return Re(M,null),M;var e=document.createDocumentFragment(),t=document.createComment(""),n=Be();return e.append(t,n),Re(t,n),e}function N(e,t){if(T){var n=$;((n.f&$t)===0||n.nodes.end===null)&&(n.nodes.end=M),Tt();return}e!==null&&e.before(t)}function dl(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}function vl(e){return hl.includes(e)}function gl(e){return e=e.toLowerCase(),pl[e]??e}function ml(e){return bl.includes(e)}function _l(e,t,n,r){new Pr(e,t,n,r)}function Xe(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[Er]??=e.nodeValue)&&(e[Er]=n,e.nodeValue=`${n}`)}function Vi(e,t){return Fi(e,t)}function wl(e,t){Cr(),t.intro=t.intro??!1;let n=t.target,r=T,a=M;try{for(var i=Ee(n);i&&(i.nodeType!==bn||i.data!==zr);)i=at(i);if(!i)throw At;Qe(!0),we(i);let l=Fi(e,{...t,anchor:i});return Qe(!1),l}catch(l){if(l instanceof Error&&l.message.split(`
`).some(s=>s.startsWith("https://svelte.dev/e/")))throw l;return l!==At&&console.warn("Failed to hydrate: ",l),t.recover===!1&&xs(),Cr(),Ds(n),Qe(!1),Vi(e,t)}finally{Qe(r),we(a)}}function Fi(e,{target:t,anchor:n,props:r={},events:a,context:i,intro:l=!0,transformError:s}){Cr();var u=void 0,c=rl(()=>{var d=n??t.appendChild(Be());_l(d,{pending:()=>{}},g=>{ct({});var b=me;if(i&&(b.c=i),a&&(r.$$events=a),T&&Re(g,null),u=e(g,r)||Br(),T&&($.nodes.end=M,M===null||M.nodeType!==bn||M.data!==Qa))throw mn(),At;ut()},s);var h=new Set,p=g=>{for(var b=0;b<g.length;b++){var x=g[b];if(!h.has(x)){h.add(x);var P=ml(x);for(let ne of[t,document]){var B=$n.get(ne);B===void 0&&(B=new Map,$n.set(ne,B));var V=B.get(x);V===void 0?(ne.addEventListener(x,Ir,{passive:P}),B.set(x,1)):B.set(x,V+1)}}}};return p(ss(Di)),Rr.add(p),()=>{for(var g of h)for(let P of[t,document]){var b=$n.get(P),x=b.get(g);--x==0?(P.removeEventListener(g,Ir),b.delete(g),b.size===0&&$n.delete(P)):b.set(g,x)}Rr.delete(p),d!==n&&d.parentNode?.removeChild(d)}});return Or.set(u,c),u}function kl(e,t){let n=Or.get(e);return n?(Or.delete(e),n(t)):Promise.resolve()}function xl(e,t,...n){var r=new Kt(e);kn(()=>{let a=t()??null;r.ensure(a,a&&(i=>a(i,...n)))},pt)}function ra(e){me===null&&bs(),xe(()=>{let t=wn(e);if(typeof t=="function")return t})}function oe(e,t,n=!1){var r;T&&(r=M,Tt());var a=new Kt(e),i=n?pt:0;function l(s,u){if(T){var c=ri(r);if(s!==parseInt(c.substring(1))){var d=Gr();we(d),a.anchor=d,Qe(!1),a.ensure(s,u),Qe(!0);return}}a.ensure(s,u)}kn(()=>{var s=!1;t((u,c=0)=>{s=!0,l(c,u)}),s||l(-1,null)},i)}function Sl(e,t,n){T&&Tt();var r=new Kt(e);kn(()=>{var a=t();a!==a&&(a=El),r.ensure(a,n)})}function ji(e,t,n=!1,r=!1,a=!1,i=!1){var l=e,s="";if(n){var u=e;T&&(l=we(Ee(u)))}be(()=>{var c=$;if(s===(s=t()??"")){T&&Tt();return}if(n&&!T){c.nodes=null,u.innerHTML=s,s!==""&&Re(Ee(u),u.lastChild);return}if(c.nodes!==null&&(Pi(c.nodes.start,c.nodes.end),c.nodes=null),s!==""){if(T){M.data;for(var d=Tt(),h=d;d!==null&&(d.nodeType!==bn||d.data!=="");)h=d,d=at(d);if(d===null)throw mn(),At;Re(M,h),l=we(d);return}var p=r?Rs:a?Is:void 0,g=Yr(r?"svg":a?"math":"template",p);g.innerHTML=s;var b=r||a?g:g.content;if(Re(Ee(b),b.lastChild),r||a)for(;Ee(b);)l.before(Ee(b));else l.before(b)}})}function Cl(e,t,n){var r;T&&(r=M,Tt());var a=new Kt(e);kn(()=>{var i=t()??null;if(T){var l=ri(r),s=l===zr,u=i!==null;if(s!==u){var c=Gr();we(c),a.anchor=c,Qe(!1),a.ensure(i,i&&(d=>n(d,i))),Qe(!0);return}}a.ensure(i,i&&(d=>n(d,i)))},pt)}function Al(e,t){var n=void 0,r;Ri(()=>{n!==(n=t())&&(r&&(pe(r),r=null),n&&(r=He(()=>{ea(()=>n(e))})))})}function zi(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=zi(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Tl(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=zi(e))&&(r&&(r+=" "),r+=t);return r}function $l(e){return typeof e=="object"?Tl(e):e??""}function Rl(e,t,n){var r=e==null?"":""+e;if(n){for(var a of Object.keys(n))if(n[a])r=r?r+" "+a:a;else if(r.length)for(var i=a.length,l=0;(l=r.indexOf(a,l))>=0;){var s=l+i;(l===0||Ha.includes(r[l-1]))&&(s===r.length||Ha.includes(r[s]))?r=(l===0?"":r.substring(0,l))+r.substring(s+1):l=s}}return r===""?null:r}function Ua(e,t=!1){var n=t?" !important;":";",r="";for(var a of Object.keys(e)){var i=e[a];i!=null&&i!==""&&(r+=" "+a+": "+i+n)}return r}function gr(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Il(e,t){if(t){var n="",r,a;if(Array.isArray(t)?(r=t[0],a=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var i=!1,l=0,s=!1,u=[];r&&u.push(...Object.keys(r).map(gr)),a&&u.push(...Object.keys(a).map(gr));var c=0,d=-1;let x=e.length;for(var h=0;h<x;h++){var p=e[h];if(s?p==="/"&&e[h-1]==="*"&&(s=!1):i?i===p&&(i=!1):p==="/"&&e[h+1]==="*"?s=!0:p==='"'||p==="'"?i=p:p==="("?l++:p===")"&&l--,!s&&i===!1&&l===0){if(p===":"&&d===-1)d=h;else if(p===";"||h===x-1){if(d!==-1){var g=gr(e.substring(c,d).trim());if(!u.includes(g)){p!==";"&&h++;var b=e.substring(c,h).trim();n+=" "+b+";"}}c=h+1,d=-1}}}}return r&&(n+=Ua(r)),a&&(n+=Ua(a,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Pl(e,t,n,r,a,i){var l=e[kr];if(T||l!==n||l===void 0){var s=Rl(n,r,i);(!T||s!==e.getAttribute("class"))&&(s==null?e.removeAttribute("class"):t?e.className=s:e.setAttribute("class",s)),e[kr]=n}else if(i&&a!==i)for(var u in i){var c=!!i[u];(a==null||c!==!!a[u])&&e.classList.toggle(u,c)}return i}function br(e,t={},n,r){for(var a in n){var i=n[a];t[a]!==i&&(n[a]==null?e.style.removeProperty(a):e.style.setProperty(a,i,r))}}function Ol(e,t,n,r){var a=e[xr];if(T||a!==t){var i=Il(t,r);(!T||i!==e.getAttribute("style"))&&(i==null?e.removeAttribute("style"):e.style.cssText=i),e[xr]=t}else r&&(Array.isArray(r)?(br(e,n?.[0],r[0]),br(e,n?.[1],r[1],"important")):br(e,n,r));return r}function Bi(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Va(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,Ki(e,!n||"__value"in e))}function Ki(e,t){var n=e.__defaultValue,r=e.multiple,a=r?n??[]:null;if(!(r&&!Vr(a))){var i=e.selectedIndex,l=t&&r?new Set(e.selectedOptions):null;for(var s of e.options){var u=Nr(s);Bi(s,r?a.includes(u):ai(u,n))}if(t)if(l!==null)for(s of e.options){var c=l.has(s);s.selected!==c&&(s.selected=c)}else e.selectedIndex!==i&&(e.selectedIndex=i)}}function Lr(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Vr(t))return Ns();for(var r of e.options)r.selected=t.includes(Nr(r));return}for(r of e.options){var a=Nr(r);if(ai(a,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Ll(e){var t=new MutationObserver(n=>{n.every(Nl)||("__defaultValue"in e&&Ki(e,!1),"__value"in e&&Lr(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),zn(()=>{t.disconnect()})}function Nr(e){return"__value"in e?e.__value:e.value}function Nl(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}function aa(e){if(T){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var r=e.value;H(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var a=e.checked;H(e,"checked",null),e.checked=a}}};e[cn]=n,Ze(n),fi()}}function Ul(e,t){var n=ia(e);n.value===(n.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==Hl)||(e.value=t??"")}function H(e,t,n,r){var a=ia(e);T&&(a[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName===Ml)||a[t]!==(a[t]=n)&&(t==="loading"&&(e[ps]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Wi(e).has(t)?e[t]=n:e.setAttribute(t,n))}function Vl(e,t,n,r,a=!1,i=!1){T&&a&&e.nodeName===Fa&&("defaultValue"in n||"defaultChecked"in n||aa(e));var l=ia(e),s=l[Gi],u=!l[Yi];let c=T&&s;c&&Qe(!1);var d=t||{},h=e.nodeName===Dl,p=e.nodeName===qi;for(var g in t)!(g in n)&&g[0]+g[1]!=="$$"&&(n[g]=null);n.class?n.class=$l(n.class):n[rn]&&(n.class=null),n[an]&&(n.style??=null);var b=Wi(e);if(e.nodeName===Fa&&"type"in n&&("value"in n||"__value"in n)){var x=n.type;(x!==d.type||x===void 0&&e.hasAttribute("type"))&&(d.type=x,H(e,"type",x))}for(let k in n){let L=n[k];if(h&&k==="value"&&L==null){e.value=e.__value="",d[k]=L;continue}if(k==="class"){var P=e.namespaceURI==="http://www.w3.org/1999/xhtml";Pl(e,P,L,r,t?.[rn],n[rn]),d[k]=L,d[rn]=n[rn];continue}if(k==="style"){Ol(e,L,t?.[an],n[an]),d[k]=L,d[an]=n[an];continue}var B=d[k];if(!(L===B&&!(L===void 0&&e.hasAttribute(k)))){d[k]=L;var V=k[0]+k[1];if(V!=="$$")if(V==="on"){let Z={},F="$$"+k,D=k.slice(2);var ne=vl(D);if(dl(D)&&(D=D.slice(0,-7),Z.capture=!0),!ne&&B){if(L!=null)continue;e.removeEventListener(D,d[F],Z),d[F]=null}if(ne)Kn(D,e,L),Gn([D]);else if(L!=null){let Ce=function(ge){d[k].call(this,ge)};var ie=Ce;d[F]=Hi(D,e,Ce,Z)}}else if(k==="style")H(e,k,L);else if(k==="autofocus")zs(e,!!L);else if(!s&&(k==="__value"||k==="value"&&L!=null))e.value=e.__value=L;else if(k==="selected"&&h)Bi(e,L);else{var z=k;u||(z=gl(z));var Ge=z==="defaultValue"||z==="defaultChecked";if(p&&z==="defaultValue")continue;if(L==null&&!s&&!Ge)if(l[k]=null,z==="value"||z==="checked"){let Z=e,F=t===void 0;if(z==="value"){let D=Z.defaultValue;Z.removeAttribute(z),Z.defaultValue=D,Z.value=Z.__value=F?D:null}else{let D=Z.defaultChecked;Z.removeAttribute(z),Z.defaultChecked=D,Z.checked=F?D:!1}}else e.removeAttribute(k);else Ge||(s||typeof L!="string")&&b.has(z)?(e[z]=L,z in l&&(l[z]=re)):typeof L!="function"&&H(e,z,L)}}}return c&&Qe(!0),d}function Yn(e,t,n=[],r=[],a=[],i,l=!1,s=!1){di(a,n,r,u=>{var c=void 0,d={},h=e.nodeName===qi,p=!1;if(Ri(()=>{var b=t(...u.map(o)),x=Vl(e,c,b,i,l,s);if(p&&h){var P=e;"defaultValue"in b&&Va(P,b.defaultValue),"value"in b&&Lr(P,b.value)}for(let V of Object.getOwnPropertySymbols(d))b[V]||pe(d[V]);for(let V of Object.getOwnPropertySymbols(b)){var B=b[V];V.description===Ps&&(!c||B!==c[V])&&(d[V]&&pe(d[V]),d[V]=He(()=>Al(e,()=>B))),x[V]=B}c=x}),h){var g=e;ea(()=>{var b=c;"defaultValue"in b&&Va(g,b.defaultValue),Lr(g,b.value,!0),Ll(g)})}p=!0})}function ia(e){return e[Wa]??={[Gi]:e.nodeName.includes("-"),[Yi]:e.namespaceURI===ei}}function Wi(e){var t=e.getAttribute("is")||e.nodeName,n=ja.get(t);if(n)return n;ja.set(t,n=new Set);for(var r,a=e,i=Element.prototype;i!==a;){r=ls(a);for(var l in r)r[l].set&&l!=="innerHTML"&&l!=="textContent"&&l!=="innerText"&&n.add(l);a=Ga(a)}return n}function Fl(e,t,n=t){var r=new WeakSet;Bs(e,"input",async a=>{var i=a?e.defaultValue:e.value;if(i=mr(e)?yr(i):i,n(i),R!==null&&r.add(R),await xt(),i!==(i=t())){var l=e.selectionStart,s=e.selectionEnd,u=e.value.length;if(e.value=i??"",s!==null){var c=e.value.length;l===s&&s===u&&c>u?(e.selectionStart=c,e.selectionEnd=c):(e.selectionStart=l,e.selectionEnd=Math.min(s,c))}}}),(T&&e.defaultValue!==e.value||wn(t)==null&&e.value)&&(n(mr(e)?yr(e.value):e.value),R!==null&&r.add(R)),Bn(()=>{var a=t();if(e===document.activeElement){var i=R;if(r.has(i))return}mr(e)&&a===yr(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function mr(e){var t=e.type;return t==="number"||t==="range"}function yr(e){return e===""?null:+e}function _r(e,t){return e===t||e?.[Vt]===t}function bt(e=Br(),t,n,r){var a=me.r,i=$;return ea(()=>{var l,s;return Bn(()=>{l=s,s=[],wn(()=>{_r(n(...s),e)||(t(e,...s),l&&_r(n(...l),e)&&t(null,...l))})}),()=>{let u=i;for(;u!==a&&u.parent!==null&&u.parent.f&Nn;)u=u.parent;let c=()=>{s&&_r(n(...s),e)&&t(null,...s)},d=u.teardown;u.teardown=()=>{c(),d?.()}}}),e}function qn(e,t,n){return new Proxy({props:e,exclude:t},jl)}function J(e,t,n,r){var a=r,i=!0,l=()=>(i&&(i=!1,a=r),a),s;s=e[t],s===void 0&&r!==void 0&&(s=l());var u;u=()=>{var p=e[t];return p===void 0?l():(i=!0,p)};var c=!1,d=Wr(()=>(c=!1,u())),h=$;return(function(p,g){if(arguments.length>0){let b=g?o(d):p;return _(d,b),c=!0,a!==void 0&&(a=b),p}return lt&&c||(h.f&$e)!==0?d.v:o(d)})}function zl(e){return new Mr(e)}function Pn(e,t,n,r){let a=n[e]?.type;if(t=a==="Boolean"&&typeof t!="boolean"?t!=null:t,!r||!n[e])return t;if(r==="toAttribute")switch(a){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(a){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function Bl(e){let t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}function mt(e,t,n,r,a,i){let l=class extends Xi{constructor(){super(e,n,a),this.$$p_d=t}static get observedAttributes(){return Ln(t).map(s=>(t[s].attribute||s).toLowerCase())}};return Ln(t).forEach(s=>{Ft(l.prototype,s,{get(){return this.$$c&&s in this.$$c?this.$$c[s]:this.$$d[s]},set(u){u=Pn(s,u,t),this.$$d[s]=u;var c=this.$$c;if(c){var d=Ht(c,s)?.get;d?c[s]=u:c.$set({[s]:u})}}})}),r.forEach(s=>{Ft(l.prototype,s,{get(){return this.$$c?.[s]}})}),e.element=l,l}function Ji(e,t){ct(t,!0);let n=J(t,"loading"),r=qn(t,Kl),a;function i(){a?.click()}var l={get loading(){return n()},set loading(d){n(d),G()}},s=Gl(),u=de(s);Yn(u,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),bt(u,d=>a=d,()=>a);var c=X(u,2);return Kr(2),ae(s),be(()=>H(s,"data-loading",n())),Kn("click",c,i),N(e,s),ut(l)}function Zi(e,t){ct(t,!0);let n=J(t,"loading"),r=qn(t,Yl);var a={get loading(){return n()},set loading(s){n(s),G()}},i=ql(),l=de(i);return Yn(l,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),Kr(2),ae(i),be(()=>H(i,"data-loading",n())),N(e,i),ut(a)}function oa(e,t){ct(t,!0);let n=J(t,"strings"),r="https://altcha.org";var a={get strings(){return n()},set strings(s){n(s),G()}},i=Wl(),l=de(i);return H(l,"href",r),ae(i),be(()=>H(l,"aria-label",n().ariaLinkLabel)),N(e,i),ut(a)}function Dr(e,t){ct(t,!0);let n=J(t,"logo"),r=J(t,"strings");var a={get logo(){return n()},set logo(c){n(c),G()},get strings(){return r()},set strings(c){r(c),G()}},i=Xl(),l=de(i);ji(l,()=>r().footer,!0),ae(l);var s=X(l,2);{var u=c=>{oa(c,{get strings(){return r()}})};oe(s,c=>{n()&&c(u)})}return ae(i),N(e,i),ut(a)}function Qi(e,t){ct(t,!0);let n=J(t,"loading"),r=qn(t,Jl),a;function i(){a?.click()}var l={get loading(){return n()},set loading(d){n(d),G()}},s=Zl(),u=de(s);Yn(u,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),bt(u,d=>a=d,()=>a);var c=X(u,2);return ae(s),be(()=>H(s,"data-loading",n())),Kn("click",c,i),N(e,s),ut(l)}function to(e,t){ct(t,!0);let n=J(t,"audioUrl"),r=J(t,"codeChallenge"),a=J(t,"config"),i=J(t,"imageUrl"),l=J(t,"onCancel"),s=J(t,"onReload"),u=J(t,"onSubmit"),c=J(t,"strings"),d=I(void 0),h=I(void 0),p=I(void 0),g=I(!1),b=I(""),x=I(!1);ra(()=>(a().disableAutoFocus||xt().then(()=>{o(p)?.focus()}),()=>{o(h)&&(o(h).pause(),_(h,void 0))}));function P(){_(d,ve.PAUSED,!0)}function B(S){_(d,ve.ERROR,!0)}function V(){_(d,ve.READY,!0)}function ne(){_(d,ve.LOADING,!0)}function ie(){_(d,ve.PLAYING,!0)}function z(){_(d,ve.PAUSED,!0)}function Ge(S){S.code==="Space"?(S.preventDefault(),S.stopPropagation(),Z()):S.code==="Escape"&&(S.preventDefault(),S.stopPropagation(),l()?.())}function k(S){S.preventDefault(),S.stopPropagation(),u()?.(o(b))}function L(S){S.play().catch(Y=>{if(!(Y instanceof DOMException&&Y.name==="AbortError"))throw Y})}function Z(){o(h)?o(d)===ve.LOADING||(o(h).paused?(n()&&o(h).src!==n()&&(o(h).src=n()),o(h).currentTime=0,L(o(h))):o(h).pause()):(_(x,!0),requestAnimationFrame(()=>{o(h)&&n()&&(o(h).src=n(),L(o(h)))}))}var F={get audioUrl(){return n()},set audioUrl(S){n(S),G()},get codeChallenge(){return r()},set codeChallenge(S){r(S),G()},get config(){return a()},set config(S){a(S),G()},get imageUrl(){return i()},set imageUrl(S){i(S),G()},get onCancel(){return l()},set onCancel(S){l(S),G()},get onReload(){return s()},set onReload(S){s(S),G()},get onSubmit(){return u()},set onSubmit(S){u(S),G()},get strings(){return c()},set strings(S){c(S),G()}},D=oc(),Ce=de(D),ge=de(Ce);{var Ie=S=>{var Y=Ql(),_t=Mt(Y,!0);be(()=>Xe(_t,c().verificationRequired)),N(S,Y)};oe(ge,S=>{a().codeChallengeDisplay!=="standard"&&S(Ie)})}var W=X(ge,2),it=Mt(W,!0),E=X(W,2),ue=X(E,2),Q=de(ue);aa(Q),Q.disabled=o(g),bt(Q,S=>_(p,S),()=>o(p));var m=X(Q,2);{var Xt=S=>{var Y=ac(),_t=de(Y);{var tn=ye=>{var qe=ec();N(ye,qe)},nr=ye=>{var qe=tc();N(ye,qe)},rr=ye=>{var qe=nc();N(ye,qe)},ar=ye=>{var qe=rc();N(ye,qe)};oe(_t,ye=>{o(d)===ve.LOADING?ye(tn):o(d)===ve.ERROR?ye(nr,1):o(d)===ve.PLAYING?ye(rr,2):ye(ar,-1)})}ae(Y),be(()=>{H(Y,"title",c().getAudioChallenge),Y.disabled=o(d)===ve.LOADING||o(d)===ve.ERROR,H(Y,"aria-label",o(d)===ve.LOADING?c().loading:c().getAudioChallenge)}),se("click",Y,()=>Z(),!0),N(S,Y)};oe(m,S=>{r().audio&&S(Xt)})}var Jt=X(m,2);ae(ue);var Ye=X(ue,2),Zt=de(Ye),En=Mt(Zt,!0),yt=X(Zt,2),Qt=Mt(yt,!0);ae(Ye),ae(Ce);var en=X(Ce,2);{var ke=S=>{var Y=ic();bt(Y,_t=>_(h,_t),()=>o(h)),se("error",Y,B),se("loadstart",Y,ne),se("canplay",Y,V),se("pause",Y,z),se("playing",Y,ie),se("ended",Y,P),N(S,Y)};oe(en,S=>{o(x)&&S(ke)})}return ae(D),be(()=>{Xe(it,c().enterCodeFromImage),H(E,"src",i()),H(Q,"minlength",r().length||1),H(Q,"maxlength",r().length),H(Q,"placeholder",c().enterCode),H(Q,"aria-label",o(d)===ve.LOADING?c().loading:o(d)===ve.PLAYING?"":c().enterCodeAria),H(Q,"aria-live",o(d)?"assertive":"polite"),H(Q,"aria-busy",o(d)===ve.LOADING),H(Jt,"title",c().reload),H(Jt,"aria-label",c().reload),H(Zt,"aria-label",c().verify),Xe(En,c().verify),H(yt,"aria-label",c().cancel),Xe(Qt,c().cancel)}),se("submit",Ce,k,!0),Kn("keydown",Q,Ge),Fl(Q,()=>o(b),S=>_(b,S)),se("click",Jt,()=>s()?.(),!0),se("click",yt,()=>l()?.(),!0),N(e,D),ut(F)}function Hr(e,t){ct(t,!0);let n=J(t,"anchor"),r=J(t,"children"),a=J(t,"display",7,"standard"),i=J(t,"backdrop",7,!1),l=J(t,"onClickOutside"),s=J(t,"onClickOutsideDelay",7,600),u=J(t,"onClose"),c=J(t,"placement",7,"auto"),d=J(t,"updateUISignal"),h=J(t,"variant",7,"neutral"),p=qn(t,sc),g=I(void 0),b=I(void 0),x=I(!1),P=I(0);xe(()=>{c()!=="auto"&&_(x,c()==="top")}),xe(()=>{d()&&z()}),ra(()=>{let E=a()==="bottomsheet"||a()==="overlay";return E&&(o(b)&&document.body.append(o(b)),o(g)&&document.body.append(o(g))),z(),xt().then(()=>{_(P,Date.now(),!0)}),()=>{E&&(o(b)&&document.body.removeChild(o(b)),o(g)&&document.body.removeChild(o(g)))}});function B(){u()?.()}function V(E){let ue=E.target;!o(g)?.contains(ue)&&(!s()||o(P)+s()<Date.now())&&l()?.()}function ne(){z()}function ie(){z()}function z(){if(n()&&c()==="auto"&&o(g)){let E=n().getBoundingClientRect(),Q=document.documentElement.clientHeight-(E.top+E.height)<o(g).clientHeight;o(x)!==Q&&_(x,Q)}}var Ge={get anchor(){return n()},set anchor(E){n(E),G()},get children(){return r()},set children(E){r(E),G()},get display(){return a()},set display(E="standard"){a(E),G()},get backdrop(){return i()},set backdrop(E=!1){i(E),G()},get onClickOutside(){return l()},set onClickOutside(E){l(E),G()},get onClickOutsideDelay(){return s()},set onClickOutsideDelay(E=600){s(E),G()},get onClose(){return u()},set onClose(E){u(E),G()},get placement(){return c()},set placement(E="auto"){c(E),G()},get updateUISignal(){return d()},set updateUISignal(E){d(E),G()},get variant(){return h()},set variant(E="neutral"){h(E),G()}},k=fc();se("click",Et,V,!0),se("resize",Et,ne),se("scroll",Et,ie);var L=Nt(k);{var Z=E=>{var ue=lc();bt(ue,Q=>_(b,Q),()=>o(b)),N(E,ue)};oe(L,E=>{i()&&E(Z)})}var F=X(L,2);Yn(F,()=>({...p,class:`altcha-popover ${(t.class||"")??""}`,"data-popover":!0,"data-variant":h(),"data-top":o(x),"data-display":a()}));var D=de(F);{var Ce=E=>{var ue=cc();N(E,ue)};oe(D,E=>{a()==="standard"&&E(Ce)})}var ge=X(D,2);{var Ie=E=>{var ue=uc();se("click",ue,B,!0),N(E,ue)};oe(ge,E=>{a()!=="standard"&&E(Ie)})}var W=X(ge,2),it=de(W);return xl(it,()=>r()??ht),ae(W),ae(F),bt(F,E=>_(g,E),()=>o(g)),N(e,k),ut(Ge)}function dc(e){return Array.from(new Uint8Array(e)).map(t=>t.toString(16).padStart(2,"0")).join("")}function hc(e,t="altcha-css",n){if(typeof document<"u"&&document&&!document.getElementById(t)){let r=document.createElement("style");r.id=t,r.textContent=e;let a=document.currentScript?.nonce??document.querySelector('meta[name="csp-nonce"]')?.content;a&&(r.nonce=a),document.head.appendChild(r)}}async function no(e){let{challenge:t,concurrency:n=navigator.hardwareConcurrency,controller:r=new AbortController,createWorker:a,onOutOfMemory:i=p=>p>1?Math.floor(p/2):0,counterMode:l,timeout:s}=e,u=Math.min(16,Math.max(1,n)),c=[],d=()=>{for(let p of c)p.terminate()};for(let p=0;p<u;p++)c.push(await a(t.parameters.algorithm));let h=null;try{h=await Promise.race(c.map((p,g)=>(r.signal.addEventListener("abort",()=>{p.postMessage({type:"abort"})}),new Promise((b,x)=>{p.addEventListener("error",P=>{x(P)}),p.addEventListener("message",P=>{if(P.data){for(let B of c)B!==p&&B.postMessage({type:"abort"});if(P.data.error)return x(new Error(P.data.error))}b(P.data)}),p.postMessage({challenge:t,counterMode:l,counterStart:g,counterStep:u,timeout:s,type:"work"})}))))}catch(p){if(p instanceof Error&&!!p?.message?.includes("Out of memory")&&i){d();let b=i(u);if(b)return no({...e,challenge:t,controller:r,concurrency:b,createWorker:a})}throw p}finally{d()}return r.signal.aborted?null:h||null}function kc(e,t){ct(t,!0);let n=()=>Ta(d,"$altchaDefaults",a),r=()=>Ta(b,"$altchaI18nStore",a),[a,i]=js(),l='input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])',s='input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])',u=["ar","fa","he","ur"],{isSecureContext:c}=globalThis,{store:d}=globalThis.$altcha.defaults,h=navigator.hardwareConcurrency||2,p=navigator.deviceMemory||0,g=p&&p<=4?Math.min(4,h):h,b=globalThis.$altcha.i18n.store,x=t.$$host,P=(f,v)=>{xt().then(()=>{x?.dispatchEvent(new CustomEvent(f,{detail:v}))})},B=null,V=I(st(new URL(location.origin))),ne=I(!1),ie=I(null),z=I(null),Ge=I(null),k=I(st(U.UNVERIFIED)),L=I(void 0),Z=I(void 0),F=I(null),D=I(void 0),Ce=I(null),ge=I(null),Ie=I(null),W=I(null),it=I(st([])),E=I(0),ue=I(st({})),Q=I(!0),m=_e(()=>({fetch:(f,v)=>fetch(f,v),audioChallengeLanguage:"",auto:"off",barPlacement:"bottom",challenge:"",codeChallenge:null,codeChallengeDisplay:"standard",credentials:null,debug:!1,disableAutoFocus:!1,display:"standard",floatingAnchor:"",floatingOffset:8,floatingPersist:!1,floatingPlacement:"auto",hideFooter:!1,hideLogo:!1,humanInteractionSignature:!0,language:"",mockError:!1,minDuration:500,overlayContent:"",name:"altcha",popoverPlacement:"auto",retryOnOutOfMemoryError:!0,setCookie:null,serverVerificationFields:!1,serverVerificationTimeZone:!1,test:!1,timeout:9e4,type:"checkbox",validationMessage:"",verifyFunction:null,verifyUrl:"",workers:g,...n(),...o(ue)})),Xt=_e(()=>`altcha-checkbox-${t.id||Math.floor(Math.random()*1e12).toString(16)}`),Jt=_e(()=>_o(o(m).type)),Ye=_e(()=>o(m).auto),Zt=_e(()=>o(k)===U.VERIFYING),En=_e(()=>!o(m).hideFooter),yt=_e(()=>!o(m).hideLogo&&o(m).display!=="bar"),Qt=_e(()=>wo(r(),[o(m).language,document.documentElement.lang,...navigator.languages])),en=_e(()=>u.includes(o(Qt).language)?"rtl":void 0),ke=_e(()=>({...o(Qt).strings})),S=_e(()=>o(ie)?.audio?.match(/^(https?:)?\//)?Sn(o(ie).audio,o(V),{language:o(m).audioChallengeLanguage||o(Qt).language}).toString():o(ie)?.audio),Y=_e(()=>o(ie)?.image?.match(/^(https?:)?\//)?Sn(o(ie).image,o(V)):o(ie)?.image);xe(()=>{nn({auto:t.auto,challenge:t.challenge,display:t.display,language:t.language,name:t.name,type:t.type,workers:t.workers})}),xe(()=>{t.theme?x?.setAttribute("theme",t.theme):x?.removeAttribute("theme")}),xe(()=>{if(t.configuration)try{nn(JSON.parse(t.configuration))}catch{K("unable to parse the `configuration` attribute (JSON expected)")}}),xe(()=>{o(Ge)!==o(m).display&&Cn(o(m).display)}),xe(()=>{o(ne)&&o(k)===U.VERIFYING&&_(ne,!1)}),xe(()=>{!o(ne)&&o(k)===U.VERIFIED&&_(ne,!0)}),xe(()=>{if(!o(ne)){let f=ir();f&&f.checked&&(f.checked=!1)}}),xe(()=>{o(k)===U.VERIFIED&&ir()?.setCustomValidity("")}),xe(()=>{if(o(Ye)==="onload"){let f=setTimeout(()=>{It()},10);return()=>{f&&clearTimeout(f)}}}),xe(()=>{o(ge)&&K("error:",o(ge))}),xe(()=>{o(W)&&o(m).setCookie&&Mo(o(W),o(m).setCookie)}),ra(()=>(K("mounted","3.5.0"),x&&globalThis.$altcha.instances.add(x),_(F,xo(),!0),o(F)?.addEventListener("reset",va),o(F)?.addEventListener("submit",pa,{capture:!0}),document.addEventListener("focusin",ha),_t(),o(m).humanInteractionSignature&&(K("human interaction signature enabled"),B=new Ur),P("load"),c||K("secure context (HTTPS) required"),()=>{nr(),x&&globalThis.$altcha.instances.delete(x),o(Ie)&&clearTimeout(o(Ie)),o(F)?.removeEventListener("reset",va),o(F)?.removeEventListener("submit",pa,{capture:!0}),document.removeEventListener("focusin",ha),B?.destroy()}));function _t(){_(it,[...globalThis.$altcha.plugins].map(f=>new f(x)),!0),K("activating plugins",o(it).map(f=>f.constructor.name));for(let f of o(it))f.activate()}async function tn(f,...v){let y;for(let w of o(it))y=await w[f].call(w,...v);return y}function nr(){for(let f of o(it))f.destroy()}function rr(f){let[v,y]=f.salt.split("?"),w={};if(y)try{Object.assign(w,Object.fromEntries(new URLSearchParams(y).entries()))}catch{}let A={codeChallenge:f.codeChallenge,parameters:{algorithm:f.algorithm,cost:1,data:w,expiresAt:w?.expires?parseInt(w.expires,10):void 0,keyLength:f.algorithm==="SHA-512"?64:f.algorithm==="SHA-384"?48:32,nonce:dc(new TextEncoder().encode(f.salt)),keyPrefix:f.challenge,salt:""},signature:f.signature};return Object.defineProperties(A,{_originalSalt:{enumerable:!1,value:f.salt,writable:!1},_version:{enumerable:!1,value:1,writable:!1}}),A}function ar(f,v){return{algorithm:f.parameters.algorithm,challenge:f.parameters.keyPrefix,number:v.counter,salt:"_originalSalt"in f?f._originalSalt:f.parameters.nonce,signature:f.signature,took:v.time||0}}async function ye(f){await new Promise(v=>setTimeout(v,f))}async function qe(f=o(m).challenge,v){let y=await tn("onFetchChallenge",f),w=null;if(y!==void 0)return y;if(typeof f=="string")if(f.startsWith("{")){K("parsing JSON challenge");try{w=JSON.parse(f)}catch{throw new Error("Unable to parse JSON challenge.")}}else{K("fetching challenge from",v?.method||"GET",f),_(V,new URL(f,location.origin),!0);let A=await o(m).fetch(f,{credentials:o(m).credentials||void 0,...v});await ba(A);let C=A.headers.get("x-altcha-config");C&&Oo(C);let j=await A.json();if(j&&"his"in j&&j.his){if(K("requested HIS"),!B)throw new Error("Server requested HIS data but collector is disabled.");return qe(Sn(j.his.url,o(V)),{body:JSON.stringify({his:B.export()}),headers:{"content-type":"application/json"},method:"POST"})}j&&"hisResult"in j&&j.hisResult&&K("HIS result",j.hisResult),w=j}else if(f&&typeof f=="object")try{w=JSON.parse(JSON.stringify(f))}catch{throw new Error("Unable to parse JSON challenge.")}if(mo(w)&&(w=rr(w)),!yo(w))throw new Error("Challenge validation failed.");return w}function mo(f){return f!==null&&typeof f=="object"&&"challenge"in f}function yo(f){return!!f&&typeof f=="object"&&"parameters"in f&&!!f.parameters&&typeof f.parameters=="object"&&"algorithm"in f.parameters&&"nonce"in f.parameters&&"salt"in f.parameters&&"keyPrefix"in f.parameters}function ir(){return document.getElementById(o(Xt))}function _o(f){switch(f){case"checkbox":return Ji;case"switch":return Qi;default:return Zi}}function wo(f,v){let y=Object.keys(f).map(A=>A.toLowerCase()),w=v.reduce((A,C)=>(C=C.toLowerCase(),A||(f[C]?C:null)||y.find(j=>C.split("-")[0]===j.split("-")[0])||null),null);return f[w||""]||(w="en"),{language:w,strings:f[w]}}function ko(f){switch(f){case"bar":return o(m).barPlacement||"bottom";case"floating":return o(m).floatingPlacement||"auto";default:return}}function xo(){if(t.form){let v=x?.getRootNode()?.getElementById?.(t.form);return v instanceof HTMLFormElement?v:null}return o(D)?.closest("form")??null}function da(f){return o(F)?Array.from(o(F).elements).filter(v=>v.matches(f)):[]}function Eo(f){return da(l).reduce((y,w)=>{let A=w.name,C=w.value;return A&&C&&(y[A]=/\n/.test(C)?C.replace(new RegExp("(?<!\\r)\\n","g"),`\r
`):C),y},{})}function So(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function Sn(f,v,y){let w=new URL(f,v);if(w.search||(w.search=v.search),y)for(let A in y)y[A]!==void 0&&y[A]!==null&&w.searchParams.set(A,y[A]);return w.toString()}function Co(f){!o(ne)&&f.currentTarget.checked?(f.preventDefault(),f.currentTarget.checked=!1,o(k)!==U.VERIFYING&&It()):f.currentTarget.checked||(f.preventDefault(),Pe())}function Ao(f){o(k)===U.VERIFYING?f.currentTarget.setCustomValidity(o(ke).waitAlert):o(m).validationMessage&&f.currentTarget.setCustomValidity(o(m).validationMessage)}function To(){Cn(o(m).display),Pe()}function $o(){An()}function Ro(f){let v=f.target;o(m).display==="floating"&&v&&!x?.contains(v)&&!v.hasAttribute("data-backdrop")&&!v.closest("[data-popover]")&&o(k)!==U.VERIFIED&&!o(m).floatingPersist&&or()}function ha(f){let v=f.target;o(Ye)==="onfocus"&&o(k)===U.UNVERIFIED&&o(F)&&v instanceof Element&&(o(F).contains(v)||v.form===o(F))&&It()}function va(){Cn(o(m).display),Pe()}function pa(f){f.target?.getAttribute("data-code-challenge")!=="true"&&o(Ye)==="onsubmit"&&o(k)===U.UNVERIFIED&&(f.preventDefault(),f.stopPropagation(),_(Ce,f.submitter,!0),sr(),It().then(y=>{y&&!o(ie)&&xt().then(()=>{ga(o(Ce))})}))}function Io(f){f.persisted&&(Cn(o(m).display),Pe())}function Po(){An()}function Oo(f){try{let v=JSON.parse(f);v&&typeof v=="object"&&nn({serverVerificationFields:v?.sentinel?.fields,serverVerificationTimeZone:v?.sentinel?.timeZone,verifyUrl:v.verifyurl,...v})}catch(v){K("unable to configure from x-altcha-config header",v)}}function Lo(f=20){if(!o(D))return;let v=o(m).floatingPlacement;if(!o(Z)&&(_(Z,(o(m).floatingAnchor instanceof HTMLElement?o(m).floatingAnchor:o(m).floatingAnchor?document.querySelector(o(m).floatingAnchor):da(s)[0])||o(F),!0),!o(Z))){K("unable to find floating anchor element");return}let y=parseInt(o(m).floatingOffset,10)||12,w=o(Z).getBoundingClientRect(),A=o(D).getBoundingClientRect(),C=document.documentElement.clientHeight,j=document.documentElement.clientWidth,Ae=!v||v==="auto"?w.bottom+A.height+y+f>C:v==="top",q=Math.max(f,Math.min(j-f-A.width,w.left+w.width/2-A.width/2));if(o(D).style.setProperty("--altcha-floating-left",`${q}px`),o(D).style.setProperty("--altcha-floating-top",Ae?`${w.top-(A.height+y)}px`:`${w.bottom+y}px`),o(D).setAttribute("data-floating-position",Ae?"top":"bottom"),o(L)){let fe=o(L).getBoundingClientRect();o(L).style.left=w.left-q+w.width/2-fe.width/2+"px"}}async function No(f,v){let y=await tn("onRequestServerVerification",f,v);if(y!==void 0)return y;if(K("requesting server verification from",o(m).verifyUrl),!o(m).verifyUrl)throw new Error("Parameter verifyUrl must be set for server verification.");let w=await o(m).fetch(Sn(o(m).verifyUrl,o(V)),{body:JSON.stringify({code:v,fields:o(m).serverVerificationFields?Eo():void 0,payload:f,timeZone:o(m).serverVerificationTimeZone?So():void 0}),credentials:o(m).credentials||void 0,headers:{"Content-Type":"application/json"},method:"POST"});await ba(w);let A=await w.json();return A&&typeof A=="object"&&"payload"in A&&A.payload&&P("serververification",A),A}function ga(f){o(F)&&"requestSubmit"in o(F)?o(F).requestSubmit(f):o(F)?.reportValidity()&&(f?f.click():o(F).submit())}function Mo(f,v={}){let{domain:y,name:w=o(m).name,maxAge:A,path:C,sameSite:j,secure:Ae}=v,q=`${encodeURIComponent(w)}=${encodeURIComponent(f)}`;y&&(q+=`; Domain=${y}`),A!=null&&(q+=`; Max-Age=${A}`),C&&(q+=`; Path=${C}`),j&&(q+=`; SameSite=${j}`),Ae&&(q+="; Secure"),document.cookie=q}function Cn(f){switch(f){case"bar":case"floating":case"overlay":or(),(!o(Ye)||o(Ye)==="off")&&(o(ue).auto="onsubmit");break;case"standard":sr()}o(Ge)!==f&&_(Ge,f,!0)}function Do(f){o(Ie)&&clearTimeout(o(Ie));let v=()=>{o(k)!==U.UNVERIFIED?(_(ne,!1),Oe(U.EXPIRED)):Pe(),P("expired")},y=f*1e3-Date.now();y>=1?_(Ie,setTimeout(v,y),!0):v()}async function ba(f){if(f.status>=400){if(f.headers.get("content-type")?.includes("/json")){let y;try{y=await f.json()}catch{}if(y&&"error"in y)throw new Error(`Server responded with ${f.status} - ${y.error}`)}throw new Error(`Server responded with ${f.status}.`)}let v=f.headers.get("content-type");if(!v||!v.includes("/json"))throw new Error(`Server responded with invalid content-type. Expected application/json, received ${v}.`)}async function ma(f){if(!o(W)){Oe(U.ERROR,"Cannot verify code challenge without PoW payload.");return}Oe(U.VERIFYING);let v=null;if(o(m).verifyUrl)v=await No(o(W),f);else if(o(m).verifyFunction)v=await o(m).verifyFunction(o(W),f);else{Oe(U.ERROR,"Parameter verifyUrl is required for code challenge verification.");return}v?.payload&&(_(W,v.payload,!0),K("server payload",o(W))),v?.verified===!0?(K("verified"),Oe(U.VERIFIED),P("verified",{payload:o(W)}),o(Ye)==="onsubmit"&&xt().then(()=>{ga(o(Ce))})):Oe(U.ERROR,v?.reason||"Verification failed."),o(m).disableAutoFocus||ir()?.focus()}function nn(f){Object.assign(o(ue),{...Object.fromEntries(Object.entries(f).filter(([v,y])=>y!==void 0))})}function Ho(){return{...o(m)}}function Uo(){return o(k)}function or(){_(Q,!1)}function K(...f){(o(m).debug||f.some(v=>v instanceof Error))&&console[f[0]instanceof Error?"error":"log"]("ALTCHA",`[name=${o(m).name}]`,...f)}function Pe(f=U.UNVERIFIED,v=null){_(ne,!1),_(ge,v,!0),_(W,null),o(z)&&o(z).abort(),o(Ie)&&(clearTimeout(o(Ie)),_(Ie,null)),Oe(f)}function Oe(f,v=null){_(k,f,!0),_(ge,v,!0),P("statechange",{payload:o(W),state:o(k)})}function sr(){_(Q,!0),xt().then(()=>{An()})}function An(){if(o(m).display==="floating")return Lo();_(E,o(E)+1)}async function It(f={}){let{concurrency:v=Math.max(1,o(m).workers),controller:y=new AbortController,minDuration:w=o(m).minDuration}=f,A=performance.now(),C=null,j=null,Ae=!1,q=await tn("onVerify",f);if(q!==void 0)return q;Pe(U.VERIFYING),_(z,y,!0);try{if(!c)throw new Error("Secure context (HTTPS) required.");if(o(m).mockError)throw new Error("Mock error.");if(o(m).test)return K("running test mode with null challenge"),await ye(Math.max(0,w-(performance.now()-A))),o(z)?.signal.aborted?(Pe(),null):(_(W,btoa(JSON.stringify({challenge:null,solution:null,test:!0})),!0),K("verified"),Oe(U.VERIFIED),P("verified",{payload:o(W)}),{payload:o(W)});if(C=await qe(),!C)throw new Error("Failed to fetch challenge.");K("challenge",C),"configuration"in C&&(K("re-configuring from challenge",C.configuration),nn(C.configuration)),C.parameters.expiresAt&&Do(C.parameters.expiresAt),Ae="_version"in C&&C._version===1;let fe=globalThis.$altcha.algorithms.get(C.parameters.algorithm);if(!fe)throw new Error(`Unsupported algorithm ${C.parameters.algorithm}.`);if(j=await no({challenge:C,concurrency:v,controller:y,createWorker:fe,counterMode:Ae?"string":"uint32",onOutOfMemory:ft=>{if(K("out of memory error received"),P("outofmemory"),o(m).retryOnOutOfMemoryError&&ft>1){let dt=Math.floor(ft/2);return K(`retrying with ${dt} workers...`),dt}},timeout:o(m).timeout}),o(z)?.signal.aborted)return Pe(),null;if(!j)throw new Error("Failed to find solution.");K("solution",j),await ye(Math.max(0,w-(performance.now()-A))),_(ie,C.codeChallenge||o(m).codeChallenge||null,!0),Ae?_(W,btoa(JSON.stringify(ar(C,j))),!0):_(W,btoa(JSON.stringify({challenge:{parameters:C.parameters,signature:C.signature},solution:j})),!0),o(ie)?(K("requesting code verification"),Oe(U.CODE),P("codechallenge",{codeChallenge:o(ie)})):o(m).verifyUrl?await ma():(K("verified"),Oe(U.VERIFIED),P("verified",{payload:o(W)}))}catch(fe){return K("verification failed",fe),Oe(U.ERROR,String(fe)),null}finally{_(z,null)}return{challenge:C,payload:o(W),solution:j}}var Vo={configure:nn,getConfiguration:Ho,getState:Uo,hide:or,log:K,reset:Pe,setState:Oe,show:sr,updateUI:An,verify:It},ya=wc();se("scroll",Sr,$o),se("click",Sr,Ro),se("pageshow",Et,Io),se("resize",Et,Po);var _a=Nt(ya);{var Fo=f=>{var v=vc();N(f,v)};oe(_a,f=>{o(m).display==="overlay"&&o(Q)&&f(Fo)})}var We=X(_a,2),wa=de(We);{var jo=f=>{var v=gc(),y=Nt(v),w=X(y,2);{var A=C=>{var j=pc();ji(j,()=>document.querySelector(o(m).overlayContent)?.innerHTML,!0),ae(j),N(C,j)};oe(w,C=>{o(m).overlayContent&&C(A)})}se("click",y,To,!0),N(f,v)};oe(wa,f=>{o(m).display==="overlay"&&o(Q)&&f(jo)})}var lr=X(wa,2),cr=de(lr),ur=de(cr),ka=de(ur);{let f=_e(()=>o(m).display==="standard"&&o(Ye)!=="onsubmit"||o(k)===U.VERIFYING);Cl(ka,()=>o(Jt),(v,y)=>{y(v,{get id(){return o(Xt)},get form(){return t.form},name:"",get required(){return o(f)},get loading(){return o(Zt)},get checked(){return o(ne)},onchange:Co,oninvalid:Ao})})}var fr=X(ka,2),zo=de(fr);{var Bo=f=>{var v=Tn();be(()=>Xe(v,o(ke).verificationRequired)),N(f,v)},Ko=f=>{var v=Tn();be(()=>Xe(v,o(ke).verifying)),N(f,v)},Go=f=>{var v=Tn();be(()=>Xe(v,o(ke).verified)),N(f,v)},Yo=f=>{var v=Tn();be(()=>Xe(v,o(ke).label)),N(f,v)};oe(zo,f=>{o(k)===U.CODE&&o(ie)?f(Bo):o(k)===U.VERIFYING?f(Ko,1):o(k)===U.VERIFIED?f(Go,2):f(Yo,-1)})}ae(fr),ae(ur);var qo=X(ur,2);{var Wo=f=>{oa(f,{get strings(){return o(ke)}})};oe(qo,f=>{o(yt)&&f(Wo)})}ae(cr);var xa=X(cr,2);{var Xo=f=>{{let v=_e(()=>o(m).display==="bar"&&o(yt));Dr(f,{get logo(){return o(v)},get strings(){return o(ke)}})}};oe(xa,f=>{o(En)&&f(Xo)})}var Ea=X(xa,2);{var Jo=f=>{var v=bc();bt(v,y=>_(L,y),()=>o(L)),N(f,v)};oe(Ea,f=>{o(m).display==="floating"&&f(Jo)})}var Zo=X(Ea,2);{var Qo=f=>{var v=mc();aa(v),be(()=>{H(v,"form",t.form),H(v,"name",o(m).name),Ul(v,o(W))}),N(f,v)};oe(Zo,f=>{o(m).setCookie||f(Qo)})}ae(lr);var es=X(lr,2);{var ts=f=>{Hr(f,{get anchor(){return o(D)},onClickOutside:()=>{c&&Pe()},get placement(){return o(m).popoverPlacement},role:"alert",variant:"error",get dir(){return o(en)},get updateUISignal(){return o(E)},children:(v,y)=>{var w=Da(),A=Nt(w);{var C=q=>{var fe=yc();N(q,fe)},j=q=>{var fe=za(),ft=Mt(fe,!0);be(()=>Xe(ft,o(ke).expired)),N(q,fe)},Ae=q=>{var fe=za(),ft=Mt(fe,!0);be(()=>{H(fe,"title",o(ge)),Xe(ft,o(ke).error)}),N(q,fe)};oe(A,q=>{!o(ge)&&!c?q(C):!o(ge)&&o(k)===U.EXPIRED?q(j,1):q(Ae,-1)})}N(v,w)},$$slots:{default:!0}})},ns=f=>{var v=Da(),y=Nt(v);Sl(y,()=>o(ie),w=>{{let A=_e(()=>o(m).codeChallengeDisplay!=="standard");Hr(w,{get anchor(){return o(D)},get backdrop(){return o(A)},get display(){return o(m).codeChallengeDisplay},onClose:()=>{Pe()},get placement(){return o(m).popoverPlacement},role:"dialog",get"aria-label"(){return o(ke).verificationRequired},get dir(){return o(en)},get updateUISignal(){return o(E)},children:(C,j)=>{var Ae=_c(),q=Nt(Ae);to(q,{get audioUrl(){return o(S)},get imageUrl(){return o(Y)},onCancel:()=>Pe(),onReload:()=>It(),onSubmit:dt=>ma(dt),get codeChallenge(){return o(ie)},get config(){return o(m)},get strings(){return o(ke)}});var fe=X(q,2);{var ft=dt=>{Dr(dt,{get logo(){return o(yt)},get strings(){return o(ke)}})};oe(fe,dt=>{o(En)&&o(m).codeChallengeDisplay!=="standard"&&dt(ft)})}N(C,Ae)},$$slots:{default:!0}})}}),N(f,v)};oe(es,f=>{o(ge)||o(k)===U.EXPIRED||!c?f(ts):o(ie)&&o(k)===U.CODE&&f(ns,1)})}ae(We),bt(We,f=>_(D,f),()=>o(D)),be(f=>{H(We,"data-state",o(k)),H(We,"data-display",o(m).display||void 0),H(We,"data-placement",f),H(We,"data-visible",o(Q)||void 0),H(We,"dir",o(en)),H(fr,"for",o(Xt)),We.dir=We.dir},[()=>ko(o(m).display)]),N(e,ya);var rs=ut(Vo);return i(),rs}function sa(e){let t;try{if(t=Ba&&(self.URL||self.webkitURL).createObjectURL(Ba),!t)throw"";let n=new Worker(t,{name:e?.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(ro),{name:e?.name})}}function la(e){let t;try{if(t=Ka&&(self.URL||self.webkitURL).createObjectURL(Ka),!t)throw"";let n=new Worker(t,{name:e?.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(ao),{name:e?.name})}}var Vr,os,On,ss,Ln,Ft,Ht,ls,cs,us,Ga,Sa,ht,he,jt,Fn,Fr,Ue,ze,nt,wr,jr,Ne,le,ce,je,Me,$e,$t,Nn,pt,Mn,ds,Rt,hs,Ct,Dn,Ut,vt,Vt,qa,vs,ps,Wa,kr,xr,Er,cn,vn,pn,gn,bn,Ts,$s,zr,Za,Ca,Qa,At,re,ei,Rs,Is,Ps,me,wt,T,M,Et,Sr,ii,oi,si,Vs,Ot,Ar,$a,sn,dr,Lt,R,Tr,Ve,$r,un,hr,Dt,Rn,Ra,Ws,gt,ot,Un,et,yi,In,lt,O,Fe,$,tt,Se,Te,Le,xi,kt,St,sl,ll,ln,Di,Rr,vr,pr,cl,hl,pl,bl,yl,Pr,$n,Or,Kt,El,Ha,rn,an,Gi,Yi,Ml,Fa,Dl,qi,Hl,ja,jl,Mr,Xi,Kl,Gl,Yl,ql,Wl,Xl,Jl,Zl,ve,eo,U,Ql,ec,tc,nc,rc,ac,ic,oc,sc,lc,cc,uc,fc,Ur,vc,pc,gc,bc,mc,yc,za,_c,wc,ro,Ba,ao,Ka,xc,io=Pt(()=>{Vr=Array.isArray,os=Array.prototype.indexOf,On=Array.prototype.includes,ss=Array.from,Ln=Object.keys,Ft=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,ls=Object.getOwnPropertyDescriptors,cs=Object.prototype,us=Array.prototype,Ga=Object.getPrototypeOf,Sa=Object.isExtensible,ht=()=>{};he=2,jt=4,Fn=8,Fr=1<<24,Ue=16,ze=32,nt=64,wr=128,jr=256,Ne=512,le=1024,ce=2048,je=4096,Me=8192,$e=16384,$t=32768,Nn=1<<25,pt=65536,Mn=1<<17,ds=1<<18,Rt=1<<19,hs=1<<20,Ct=65536,Dn=1<<21,Ut=1<<22,vt=1<<23,Vt=Symbol("$state"),qa=Symbol("component"),vs=Symbol("legacy props"),ps=Symbol(""),Wa=Symbol("attributes"),kr=Symbol("class"),xr=Symbol("style"),Er=Symbol("text"),cn=Symbol("form reset"),vn=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},pn=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml"),gn=3,bn=8;Ts=1,$s=2,zr="[",Za="[!",Ca="[?",Qa="]",At={},re=Symbol("uninitialized"),ei="http://www.w3.org/1999/xhtml",Rs="http://www.w3.org/2000/svg",Is="http://www.w3.org/1998/Math/MathML",Ps="@attach",me=null;wt=[];T=!1;Vs=-7169;Ot=[];Ar=Symbol("unmounted");$a=!1;sn=Symbol("obsolete");dr=null,Lt=null,R=null,Tr=null,Ve=null,$r=null,un=!1,hr=!1,Dt=null,Rn=null,Ra=0,Ws=1,gt=class e{id=Ws++;#e=!1;linked=!0;#t=null;#n=null;async_deriveds=new Map;current=new Map;previous=new Map;#l=new Set;#a=new Set;#o=0;#r=new Map;#s=null;#i=[];#p=[];#c=new Set;#u=new Set;#d=new Map;#g=new Set;is_fork=!1;#f=!1;constructor(){Lt===null?dr=Lt=this:(Lt.#n=this,this.#t=Lt),Lt=this}#y(){if(this.is_fork)return!0;for(let r of this.#r.keys()){for(var t=r,n=!1;t.parent!==null;){if(this.#d.has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1}skip_effect(t){this.#d.has(t)||this.#d.set(t,{d:[],m:[]}),this.#g.delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=this.#d.get(t);if(r){this.#d.delete(t);for(var a of r.d)te(a,ce),n(a);for(a of r.m)te(a,je),n(a)}this.#g.add(t)}#b(){this.#e=!0,Ra++>1e3&&(this.#v(),Xs());for(let u of this.#c)this.#u.delete(u),te(u,ce),this.schedule(u);for(let u of this.#u)te(u,je),this.schedule(u);let t=this.#i;this.#i=[],this.apply();var n=Dt=[],r=[],a=Rn=[];for(let u of t)try{this.#_(u,n,r)}catch(c){throw mi(u),this.#y()||this.discard(),c}if(R=null,a.length>0){var i=e.ensure();for(let u of a)i.schedule(u)}if(Dt=null,Rn=null,this.#y()){this.#h(r),this.#h(n);for(let[u,c]of this.#d)bi(u,c);a.length>0&&R.#b();return}let l=this.#w();if(l){this.#h(r),this.#h(n),l.#k(this);return}this.#c.clear(),this.#u.clear();for(let u of this.#l)u(this);this.#l.clear(),Tr=this,Ia(r),Ia(n),Tr=null,this.#s?.resolve();var s=R;if(this.#o===0&&(this.#i.length===0||s!==null)&&this.#v(),this.#i.length>0)if(s!==null){let u=s;u.#i.push(...this.#i.filter(c=>!u.#i.includes(c)))}else s=this;s!==null&&(et.clear(),s.#b())}#_(t,n,r){t.f^=le;for(var a=t.first;a!==null;){var i=a.f,l=(i&(ze|nt))!==0,s=l&&(i&le)!==0,u=s||(i&Me)!==0||this.#d.has(a);if(!u&&a.fn!==null){l?a.f^=le:(i&jt)!==0?n.push(a):_n(a)&&((i&Ue)!==0&&this.#u.add(a),Bt(a));var c=a.first;if(c!==null){a=c;continue}}for(;a!==null;){var d=a.next;if(d!==null){a=d;break}a=a.parent}}}#w(){for(var t=this.#t;t!==null;){if(!t.is_fork){for(let[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=t.#t}return null}#k(t){for(let[r,a]of t.current)!this.previous.has(r)&&t.previous.has(r)&&this.previous.set(r,t.previous.get(r)),this.current.set(r,a);for(let[r,a]of t.async_deriveds){let i=this.async_deriveds.get(r);i&&a.promise.then(i.resolve).catch(i.reject)}t.async_deriveds.clear(),this.transfer_effects(t.#c,t.#u);let n=r=>{var a=r.reactions;if(a!==null&&!((r.f&he)!==0&&(r.f&(ce|je))===0))for(let s of a){var i=s.f;if((i&he)!==0)n(s);else{var l=s;i&(Ut|Ue)&&!this.async_deriveds.has(l)&&(this.#u.delete(l),te(l,ce),this.schedule(l))}}};for(let r of this.current.keys())n(r);this.oncommit(()=>t.discard()),t.#v(),R=this,this.#b()}#h(t){for(var n=0;n<t.length;n+=1)ci(t[n],this.#c,this.#u)}capture(t,n,r=!1){t.v!==re&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&vt)===0&&(this.current.set(t,[n,r]),Ve?.set(t,n)),this.is_fork||(t.v=n)}activate(){R=this}deactivate(){R=null,Ve=null}flush(){try{hr=!0,R=this,this.#b()}finally{Ra=0,$r=null,Dt=null,Rn=null,hr=!1,R=null,Ve=null,et.clear()}}discard(){for(let t of this.#a)t(this);this.#a.clear();for(let t of this.async_deriveds.values())t.reject(sn);this.#v(),this.#s?.resolve()}register_created_effect(t){this.#p.push(t)}#m(){for(let h=dr;h!==null;h=h.#n){var t=h.id<this.id,n=[];for(let[p,[g,b]]of this.current){if(h.current.has(p)){var r=h.current.get(p)[0];if(t&&g!==r)h.current.set(p,[g,b]);else continue}n.push(p)}if(t)for(let[p,g]of this.async_deriveds){let b=h.async_deriveds.get(p);b&&g.promise.then(b.resolve).catch(b.reject)}var a=[...h.current.keys()].filter(p=>!h.current.get(p)[1]);if(!(!h.#e||a.length===0)){var i=a.filter(p=>!this.current.has(p));if(i.length===0)t&&h.discard();else if(n.length>0){if(t)for(let p of this.#g)h.unskip_effect(p,g=>{(g.f&(Ue|Ut))!==0?h.schedule(g):h.#h([g])});h.activate();var l=new Set,s=new Map;for(var u of n)gi(u,i,l,s);s=new Map;var c=[...h.current].filter(([p,g])=>{let b=this.current.get(p);return b?b[0]!==g[0]||b[1]!==g[1]:!0}).map(([p])=>p);if(c.length>0)for(let p of this.#p)(p.f&($e|Me|Mn))===0&&Jr(p,c,s)&&((p.f&(Ut|Ue))!==0?(te(p,ce),h.schedule(p)):h.#c.add(p));if(h.#i.length>0&&!h.#f){h.apply();for(var d of h.#i)h.#_(d,[],[]);h.#i=[]}h.deactivate()}}}}increment(t,n){if(this.#o+=1,t){let r=this.#r.get(n)??0;this.#r.set(n,r+1)}}decrement(t,n){if(this.#o-=1,t){let r=this.#r.get(n)??0;r===1?this.#r.delete(n):this.#r.set(n,r-1)}this.#f||(this.#f=!0,Ze(()=>{this.#f=!1,this.linked&&this.flush()}))}transfer_effects(t,n){for(let r of t)this.#c.add(r);for(let r of n)this.#u.add(r);t.clear(),n.clear()}oncommit(t){this.#l.add(t)}ondiscard(t){this.#a.add(t)}settled(){return(this.#s??=Ya()).promise}static ensure(){if(R===null){let t=R=new e;!hr&&!un&&Ze(()=>{t.#e||t.flush()})}return R}apply(){{Ve=null;return}}schedule(t){if($r=t,t.b?.is_pending&&(t.f&(jt|Fn|Fr))!==0&&(t.f&$t)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(Dt!==null&&n===$&&(O===null||(O.f&he)===0))return;if((r&(nt|ze))!==0){if((r&le)===0)return;n.f^=le}}this.#i.push(n)}#v(){if(this.linked){var t=this.#t,n=this.#n;t===null?dr=n:t.#n=n,n===null?Lt=t:n.#t=t,this.linked=!1}}};ot=null;Un=new Set,et=new Map,yi=!1;In=!1,lt=!1;O=null,Fe=!1;$=null;tt=null;Se=null,Te=0,Le=null;xi=1,kt=0,St=kt;globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:Ma({}),i18n:Ma({}),instances:new Set,plugins:new Set};sl={ariaLinkLabel:"Altcha (official website)",cancel:"Cancel",enterCode:"Enter code",enterCodeAria:"Enter code you hear. Press Space to play audio.",enterCodeFromImage:"To proceed, please enter the code from the image below.",error:"Verification failed. Try again later.",expired:"Verification expired. Try again.",footer:'Protected by <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (official website, opens in new tab)">ALTCHA</a>',getAudioChallenge:"Get an audio challenge",label:"I'm not a robot",loading:"Loading...",reload:"Reload",verify:"Verify",verificationRequired:"Verification required!",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait."};globalThis.$altcha.i18n.set("en",sl);ll="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(ll);ln=Symbol("events"),Di=new Set,Rr=new Set;vr=null,pr=!1;cl=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});hl=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];pl={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};bl=["touchstart","touchmove"];yl=pt|Rt;Pr=class{parent;is_pending=!1;transform_error;#e;#t=T?M:null;#n;#l;#a;#o=null;#r=null;#s=null;#i=null;#p=0;#c=0;#u=!1;#d=new Set;#g=new Set;#f=null;#y=ol(()=>(this.#f=yn(this.#p),()=>{this.#f=null}));constructor(t,n,r,a){this.#e=t,this.#n=n,this.#l=i=>{var l=$;l.b=this,l.f|=wr,r(i)},this.parent=$.b,this.transform_error=a??this.parent?.transform_error??(i=>i),this.#a=kn(()=>{if(T){let i=this.#t;Tt();let l=i.data===Za;if(i.data.startsWith(Ca)){let u=JSON.parse(i.data.slice(Ca.length));this.#_(u)}else l?this.#k():this.#b()}else this.#h()},yl),T&&(this.#e=M)}#b(){try{this.#o=He(()=>this.#l(this.#e))}catch(t){this.error(t)}}#_(t){let n=this.#n.failed,{reset:r,invoke_onerror:a}=this.#w(t);Ze(a),n&&(this.#s=He(()=>{n(this.#e,()=>t,()=>r)}))}#w(t){var n=!1,r=!1;let a=()=>{if(n){Ms();return}n=!0,r&&As(),this.#s!==null&&dn(this.#s,()=>{this.#s=null}),this.#v(()=>{this.#h()})};return{reset:a,invoke_onerror:()=>{try{r=!0,this.#n.onerror?.(t,a),r=!1}catch(l){Je(l,this.#a&&this.#a.parent)}}}}#k(){let t=this.#n.pending;t&&(this.is_pending=!0,this.#r=He(()=>t(this.#e)),Ze(()=>{var n=this.#i=document.createDocumentFragment(),r=Be(),a=!1;if(n.append(r),this.#o=this.#v(()=>{try{return He(()=>this.#l(r))}catch(i){try{this.error(i),a=!0}catch(l){Je(l,this.#a.parent)}return null}}),this.#o===null){this.#i=null,a&&this.#m(R);return}this.#c===0&&(this.#e.before(n),this.#i=null,dn(this.#r,()=>{this.#r=null}),this.#m(R))}))}#h(){try{if(this.is_pending=this.has_pending_snippet(),this.#c=0,this.#p=0,this.#o=He(()=>{this.#l(this.#e)}),this.#c>0){var t=this.#i=document.createDocumentFragment();Mi(this.#o,t);let n=this.#n.pending;this.#r=He(()=>n(this.#e))}else this.#m(R)}catch(n){this.error(n)}}#m(t){this.is_pending=!1,t.transfer_effects(this.#d,this.#g)}defer_effect(t){ci(t,this.#d,this.#g)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#n.pending}#v(t){var n=$,r=O,a=me;rt(this.#a),De(this.#a),zt(this.#a.ctx);try{return gt.ensure(),t()}finally{rt(n),De(r),zt(a)}}#x(t,n){if(!this.has_pending_snippet()){this.parent&&this.parent.#x(t,n);return}this.#c+=t,this.#c===0&&(this.#m(n),this.#r&&dn(this.#r,()=>{this.#r=null}),this.#i&&(this.#e.before(this.#i),this.#i=null))}update_pending_count(t,n){this.#x(t,n),this.#p+=t,!(!this.#f||this.#u)&&(this.#u=!0,Ze(()=>{this.#u=!1,this.#f&&Vn(this.#f,this.#p)}))}get_effect_pending(){return this.#y(),o(this.#f)}error(t){if(!this.#n.onerror&&!this.#n.failed)throw t;R?.is_fork?(this.#o&&R.skip_effect(this.#o),this.#r&&R.skip_effect(this.#r),this.#s&&R.skip_effect(this.#s),R.oncommit(()=>{this.#E(t)})):this.#E(t)}#E(t){this.#o&&(pe(this.#o),this.#o=null),this.#r&&(pe(this.#r),this.#r=null),this.#s&&(pe(this.#s),this.#s=null),T&&(we(this.#t),Kr(),we(Gr()));let n=this.#n.failed,r=a=>{let{reset:i,invoke_onerror:l}=this.#w(a);l(),n&&(this.#s=this.#v(()=>{try{return He(()=>{var s=$;s.b=this,s.f|=wr,n(this.#e,()=>a,()=>i)})}catch(s){return Je(s,this.#a.parent),null}}))};Ze(()=>{var a;try{a=this.transform_error(t)}catch(i){Je(i,this.#a&&this.#a.parent);return}a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(r,i=>Je(i,this.#a&&this.#a.parent)):r(a)})}};$n=new Map;Or=new WeakMap;Kt=class{anchor;#e=new Map;#t=new Map;#n=new Map;#l=new Set;#a=!0;constructor(t,n=!0){this.anchor=t,this.#a=n}#o=t=>{if(this.#e.has(t)){var n=this.#e.get(t),r=this.#t.get(n);if(r)Na(r),this.#l.delete(n);else{var a=this.#n.get(n);a&&(Na(a.effect),this.#t.set(n,a.effect),this.#n.delete(n),a.fragment.lastChild.remove(),this.anchor.before(a.fragment),r=a.effect)}for(let[i,l]of this.#e){if(this.#e.delete(i),i===t)break;let s=this.#n.get(l);s&&(pe(s.effect),this.#n.delete(l))}for(let[i,l]of this.#t){if(i===n||this.#l.has(i))continue;let s=()=>{if(Array.from(this.#e.values()).includes(i)){var c=document.createDocumentFragment();Mi(l,c),c.append(Be()),this.#n.set(i,{effect:l,fragment:c})}else pe(l);this.#l.delete(i),this.#t.delete(i)};this.#a||!r?(this.#l.add(i),dn(l,s,!1)):s()}}};#r=t=>{this.#e.delete(t);let n=Array.from(this.#e.values());for(let[r,a]of this.#n)n.includes(r)||(pe(a.effect),this.#n.delete(r))};ensure(t,n){var r=R,a=Hs();if(n&&!this.#t.has(t)&&!this.#n.has(t))if(a){var i=document.createDocumentFragment(),l=Be();i.append(l),this.#n.set(t,{effect:He(()=>n(l)),fragment:i})}else this.#t.set(t,He(()=>n(this.anchor)));if(this.#e.set(r,t),a){for(let[s,u]of this.#t)s===t?r.unskip_effect(u):r.skip_effect(u);for(let[s,u]of this.#n)s===t?r.unskip_effect(u.effect):r.skip_effect(u.effect);r.oncommit(this.#o),r.ondiscard(this.#r)}else T&&(this.anchor=M),this.#o(r)}};El=Symbol("NaN");Ha=[...` 	
\r\f\xA0\v\uFEFF`];rn=Symbol("class"),an=Symbol("style"),Gi=Symbol("is custom element"),Yi=Symbol("is html"),Ml=pn?"link":"LINK",Fa=pn?"input":"INPUT",Dl=pn?"option":"OPTION",qi=pn?"select":"SELECT",Hl=pn?"progress":"PROGRESS";ja=new Map;jl={get(e,t){if(!e.exclude.has(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.has(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.has(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.has(t))}};Mr=class{#e;#t;constructor(t){var n=new Map,r=(i,l)=>{var s=_i(l,!1,!1);return n.set(i,s),s};let a=new Proxy({...t.props||{},$$events:{}},{get(i,l){return o(n.get(l)??r(l,Reflect.get(i,l)))},has(i,l){return l===vs?!0:(o(n.get(l)??r(l,Reflect.get(i,l))),Reflect.has(i,l))},set(i,l,s){return _(n.get(l)??r(l,s),s),Reflect.set(i,l,s)}});this.#t=(t.hydrate?wl:Vi)(t.component,{target:t.target,anchor:t.anchor,props:a,context:t.context,intro:t.intro??!1,recover:t.recover,transformError:t.transformError}),(!t?.props?.$$host||t.sync===!1)&&G(),this.#e=a.$$events;for(let i of Object.keys(this.#t))i==="$set"||i==="$destroy"||i==="$on"||Ft(this,i,{get(){return this.#t[i]},set(l){this.#t[i]=l},enumerable:!0});this.#t.$set=i=>{Object.assign(a,i)},this.#t.$destroy=()=>{kl(this.#t)}}$set(t){this.#t.$set(t)}$on(t,n){this.#e[t]=this.#e[t]||[];let r=(...a)=>n.call(this,...a);return this.#e[t].push(r),()=>{this.#e[t]=this.#e[t].filter(a=>a!==r)}}$destroy(){this.#t.$destroy()}},Xi=class{};typeof HTMLElement=="function"&&(Xi=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;$$shadowRoot=null;constructor(e,t,n){super(),this.$$ctor=e,this.$$s=t,n&&(this.$$shadowRoot=this.attachShadow(n))}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){let r=this.$$c.$on(e,t);this.$$l_u.set(t,r)}super.addEventListener(e,t,n)}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){let r=this.$$l_u.get(t);r&&(r(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(a){return i=>{let l=Yr("slot");a!=="default"&&(l.name=a),N(i,l)}};var e=t;if(await Promise.resolve(),!this.$$cn||this.$$c)return;let n={},r=Bl(this);for(let a of this.$$s)a in r&&(a==="default"&&!this.$$d.children?(this.$$d.children=t(a),n.default=!0):n[a]=t(a));for(let a of this.attributes){let i=this.$$g_p(a.name);i in this.$$d||(this.$$d[i]=Pn(i,a.value,this.$$p_d,"toProp"))}for(let a in this.$$p_d)!(a in this.$$d)&&this[a]!==void 0&&(this.$$d[a]=this[a],delete this[a]);this.$$c=zl({component:this.$$ctor,target:this.$$shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=nl(()=>{Bn(()=>{this.$$r=!0;for(let a of Ln(this.$$c)){if(!this.$$p_d[a]?.reflect)continue;this.$$d[a]=this.$$c[a];let i=Pn(a,this.$$d[a],this.$$p_d,"toAttribute");i==null?this.removeAttribute(this.$$p_d[a].attribute||a):this.setAttribute(this.$$p_d[a].attribute||a,i)}this.$$r=!1})});for(let a in this.$$l)for(let i of this.$$l[a]){let l=this.$$c.$on(a,i);this.$$l_u.set(i,l)}this.$$l={}}}attributeChangedCallback(e,t,n){this.$$r||(e=this.$$g_p(e),this.$$d[e]=Pn(e,n,this.$$p_d,"toProp"),this.$$c?.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(e){return Ln(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});Kl=new Set(["$$slots","$$events","$$legacy","$$host","loading"]),Gl=ee('<div class="altcha-checkbox"><input/> <svg aria-hidden="true" width="12" height="9" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1"></polyline></svg> <div class="altcha-spinner altcha-checkbox-spinner" aria-hidden="true"></div></div>');Gn(["click"]);mt(Ji,{loading:{}},[],[],{mode:"open"});Yl=new Set(["$$slots","$$events","$$legacy","$$host","loading"]),ql=ee('<div class="altcha-checkbox-native"><input/> <div class="altcha-spinner altcha-checkbox-native-spinner"></div></div>');mt(Zi,{loading:{}},[],[],{mode:"open"});Wl=ee('<div><a target="_blank" rel="noopener" class="altcha-logo" aria-hidden="true" tabindex="-1"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>');mt(oa,{strings:{}},[],[],{mode:"open"});Xl=ee('<div class="altcha-footer"><p></p> <!></div>');mt(Dr,{logo:{},strings:{}},[],[],{mode:"open"});Jl=new Set(["$$slots","$$events","$$legacy","$$host","loading"]),Zl=ee('<div class="altcha-switch"><input/>  <div class="altcha-switch-toggle"><div class="altcha-spinner altcha-switch-spinner"></div></div></div>');Gn(["click"]);mt(Qi,{loading:{}},[],[],{mode:"open"});ve=(e=>(e.ERROR="error",e.LOADING="loading",e.PLAYING="playing",e.PAUSED="paused",e.READY="ready",e))(ve||{}),eo=(e=>(e.SHA_256="SHA-256",e.SHA_384="SHA-384",e.SHA_512="SHA-512",e))(eo||{}),U=(e=>(e.CODE="code",e.ERROR="error",e.VERIFIED="verified",e.VERIFYING="verifying",e.UNVERIFIED="unverified",e.EXPIRED="expired",e))(U||{}),Ql=ee('<div class="altcha-code-challenge-title"> </div>'),ec=ee('<div class="altcha-spinner"></div>'),tc=na('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'),nc=na('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'),rc=na('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'),ac=ee('<button type="button" class="altcha-button altcha-button-secondary"><!></button>'),ic=ee('<audio hidden="" autoplay=""></audio>'),oc=ee('<div class="altcha-code-challenge"><form data-code-challenge="true"><!> <div class="altcha-code-challenge-text"> </div> <img class="altcha-code-challenge-image" alt=""/> <div class="altcha-code-challenge-row"><input type="text" class="altcha-input" autocomplete="off" name="" required=""/> <!> <button type="button" class="altcha-button altcha-button-secondary"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <div class="altcha-code-challenge-buttons"><button type="submit" class="altcha-button"> </button> <button type="button" class="altcha-button altcha-button-secondary"> </button></div></form> <!></div>');Gn(["keydown"]);mt(to,{audioUrl:{},codeChallenge:{},config:{},imageUrl:{},onCancel:{},onReload:{},onSubmit:{},strings:{}},[],[],{mode:"open"});sc=new Set(["$$slots","$$events","$$legacy","$$host","anchor","children","display","backdrop","onClickOutside","onClickOutsideDelay","onClose","placement","updateUISignal","variant"]),lc=ee('<div class="altcha-popover-backdrop" data-backdrop=""></div>'),cc=ee('<div class="altcha-popover-arrow"></div>'),uc=ee('<div role="button" class="altcha-popover-close">&times;</div>'),fc=ee('<!> <div><!> <!> <div class="altcha-popover-content"><!></div></div>',1);mt(Hr,{anchor:{},children:{},display:{},backdrop:{},onClickOutside:{},onClickOutsideDelay:{},onClose:{},placement:{},updateUISignal:{},variant:{}},[],[],{mode:"open"});Object.values(eo);Ur=class{TAG_CODES={INPUT:1,TEXTAREA:2,SELECT:3,BUTTON:4,A:5,DETAILS:6,SUMMARY:7,IFRAME:8,VIDEO:9,AUDIO:10};maxSamples;sampleInterval;target;focusStartTime=0;focusInteraction=0;focusInteractionTimer=null;lastPointerSample=0;lastTouchSample=0;lastScrollSample=0;pendingPointer=null;pendingTouch=null;focus=[];pointer=[];scroll=[];touch=[];constructor(t={}){let{maxSamples:n=60,sampleInterval:r=50,target:a=window}=t;this.maxSamples=n,this.sampleInterval=r,this.target=a,this.attach()}destroy(){let t={capture:!0};this.target.removeEventListener("focusin",this.onFocus,t),this.target.removeEventListener("keydown",this.onInteraction,t),this.target.removeEventListener("pointerdown",this.onInteraction,t),this.target.removeEventListener("pointermove",this.onPointer,t),this.target.removeEventListener("scroll",this.onScroll,t),this.target.removeEventListener("touchmove",this.onTouchMove,t)}export(){return{focus:this.focus,maxTouchPoints:navigator.maxTouchPoints||0,pointer:this.pointer,scroll:this.scroll,time:Date.now(),touch:this.touch}}attach(){let t={passive:!0,capture:!0};this.target.addEventListener("focusin",this.onFocus,t),this.target.addEventListener("keydown",this.onInteraction,t),this.target.addEventListener("pointerdown",this.onInteraction,t),this.target.addEventListener("pointermove",this.onPointer,t),this.target.addEventListener("scroll",this.onScroll,t),this.target.addEventListener("touchmove",this.onTouchMove,t)}evict(t){t.length>this.maxSamples&&t.splice(0,t.length-this.maxSamples)}onFocus=t=>{if(this.focusInteraction===2)return;let n=t.target;if(!(n instanceof Element))return;let r=performance.now();this.focusStartTime===0&&(this.focusStartTime=r),this.focus.push([Math.round(r-this.focusStartTime),n.tabIndex,this.TAG_CODES[n.tagName]??0,this.focusInteraction?1:0]),this.evict(this.focus)};onInteraction=t=>{this.focusInteraction="keyCode"in t?1:2,this.focusInteractionTimer&&clearTimeout(this.focusInteractionTimer),this.focusInteractionTimer=setTimeout(()=>{this.focusInteraction=0},100)};onPointer=t=>{if(t.pointerType==="touch")return;let n=t.timeStamp||performance.now();this.pendingPointer=[Math.round(t.clientX),Math.round(t.clientY),Math.round(n)],n-this.lastPointerSample>=this.sampleInterval&&(this.pointer.push(this.pendingPointer),this.lastPointerSample=n,this.pendingPointer=null,this.evict(this.pointer))};onScroll=()=>{let t=performance.now();t-this.lastScrollSample<this.sampleInterval||(this.scroll.push([Math.round(window.scrollY),Math.round(t)]),this.lastScrollSample=t,this.evict(this.scroll))};onTouchMove=t=>{let n=t.timeStamp||performance.now(),r=t.touches[0];r&&(this.pendingTouch=[Math.round(r.clientX),Math.round(r.clientY),Math.round(n),Math.round(r.force*1e3)/1e3,Math.round(r.radiusX||0),Math.round(r.radiusY||0)],n-this.lastTouchSample>=this.sampleInterval&&(this.touch.push(this.pendingTouch),this.lastTouchSample=n,this.pendingTouch=null,this.evict(this.touch)))}},vc=ee('<div class="altcha-overlay-backdrop" data-backdrop=""></div>'),pc=ee('<div class="altcha-overlay-content"></div>'),gc=ee('<div role="button" class="altcha-overlay-close">&times;</div> <!>',1),bc=ee('<div class="altcha-floating-arrow"></div>'),mc=ee('<input type="hidden"/>'),yc=ee('<div class="altcha-error">Secure context (HTTPS) required.</div>'),za=ee('<div class="altcha-error"> </div>'),_c=ee("<!> <!>",1),wc=ee('<!> <div class="altcha"><!> <div class="altcha-main"><div><div class="altcha-checkbox-wrap"><!> <label><!></label></div> <!></div> <!> <!> <!></div> <!></div>',1);typeof window<"u"&&window.customElements&&!customElements.get("altcha-widget")&&customElements.define("altcha-widget",mt(kc,{auto:{type:"String"},challenge:{type:"String"},configuration:{type:"String"},display:{type:"String"},form:{type:"String"},language:{type:"String"},name:{type:"String"},theme:{type:"String"},type:{type:"String"},workers:{type:"Number"}},[],["configure","getConfiguration","getState","hide","log","reset","setState","show","updateUI","verify"]));ro=`(function() {
  "use strict";
  function assertAlgorithm(algorithm, allowed) {
    if (!allowed.includes(algorithm)) {
      throw new Error(
        \`Unsupported algorithm: \${String(algorithm)}. Expected one of: \${allowed.join(", ")}.\`
      );
    }
  }
  function bufferStartsWith(buffer, prefix) {
    if (prefix.length > buffer.length) {
      return false;
    }
    for (let i = 0; i < prefix.length; i++) {
      if (buffer[i] !== prefix[i]) {
        return false;
      }
    }
    return true;
  }
  function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function concatBuffers(a, b) {
    const out = new Uint8Array(a.length + b.length);
    out.set(a, 0);
    out.set(b, a.length);
    return out;
  }
  function hexToBuffer(hex) {
    if (hex.length % 2 !== 0) {
      throw new Error(\`Hex string must have an even length. Got: \${hex}\`);
    }
    if (!/^[0-9a-fA-F]*$/.test(hex)) {
      throw new Error("Hex string contains non-hex characters.");
    }
    const buffer = new Uint8Array(hex.length / 2);
    for (let i = 0; i < buffer.length; i++) {
      buffer[i] = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
    }
    return buffer;
  }
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
  }
  var HmacAlgorithm = /* @__PURE__ */ ((HmacAlgorithm2) => {
    HmacAlgorithm2["SHA_256"] = "SHA-256";
    HmacAlgorithm2["SHA_384"] = "SHA-384";
    HmacAlgorithm2["SHA_512"] = "SHA-512";
    return HmacAlgorithm2;
  })(HmacAlgorithm || {});
  Object.values(HmacAlgorithm);
  const MAX_COUNTER = {
    string: Number.MAX_SAFE_INTEGER,
    uint32: 4294967295
  };
  function isValidCounter(n, mode) {
    return Number.isInteger(n) && n >= 0 && n <= MAX_COUNTER[mode];
  }
  class PasswordBuffer {
    constructor(nonce, mode = "uint32") {
      this.nonce = nonce;
      this.mode = mode;
      this.buffer = new Uint8Array(this.nonce.length + this.COUNTER_BYTES);
      this.buffer.set(this.nonce, 0);
      this.dataView = new DataView(this.buffer.buffer);
    }
    nonce;
    mode;
    COUNTER_BYTES = 4;
    buffer;
    dataView;
    encoder = new TextEncoder();
    /**
     * Appends the counter to the nonce buffer.
     * In 'string' mode, encodes the counter as a UTF-8 string.
     * In 'uint32' mode, writes the counter as a big-endian 32-bit integer.
     * Throws a RangeError unless the counter is an integer the mode encodes exactly.
     */
    setCounter(n) {
      if (!isValidCounter(n, this.mode)) {
        throw new RangeError(
          \`counter must be an integer from 0 to \${MAX_COUNTER[this.mode]}. Got: \${n}\`
        );
      }
      if (this.mode === "string") {
        return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
      }
      this.dataView.setUint32(this.nonce.length, n, false);
      return this.buffer;
    }
  }
  function assertKeyPrefix(keyPrefix, keyLength) {
    if (typeof keyPrefix !== "string" || !/^[0-9a-fA-F]+$/.test(keyPrefix)) {
      throw new Error("keyPrefix must be a non-empty hex string.");
    }
    if (keyPrefix.length > keyLength * 2) {
      throw new Error(
        \`keyPrefix (\${keyPrefix.length} hex characters) must not be longer than the key (keyLength: \${keyLength} bytes).\`
      );
    }
  }
  async function solveChallenge(options) {
    const {
      challenge,
      controller,
      counterMode = "uint32",
      counterStart = 0,
      counterStep = 1,
      deriveKey: deriveKey2,
      timeout = 9e4
    } = options;
    const { nonce, keyLength = 32, keyPrefix, salt } = challenge.parameters;
    assertKeyPrefix(keyPrefix, keyLength);
    const nonceBuf = hexToBuffer(nonce);
    const saltBuf = hexToBuffer(salt);
    const keyPrefixHex = keyPrefix.toLowerCase();
    const keyPrefixBuf = keyPrefix.length % 2 === 0 ? hexToBuffer(keyPrefix) : null;
    const password = new PasswordBuffer(nonceBuf, counterMode);
    const start = performance.now();
    let counter = counterStart;
    let iterations = 0;
    let derivedKeyHex = "";
    let lastYield = start;
    while (true) {
      if (controller?.signal.aborted || timeout && iterations % 10 === 0 && performance.now() - start > timeout) {
        return null;
      }
      const { derivedKey } = await deriveKey2(
        challenge.parameters,
        saltBuf,
        password.setCounter(counter)
      );
      if (iterations % 10 === 0 && performance.now() - lastYield > 200) {
        await delay(0);
        lastYield = performance.now();
      }
      if (keyPrefixBuf ? bufferStartsWith(derivedKey, keyPrefixBuf) : bufferToHex(derivedKey).startsWith(keyPrefixHex)) {
        derivedKeyHex = bufferToHex(derivedKey);
        break;
      }
      counter = counter + counterStep;
      iterations = iterations + 1;
    }
    return {
      counter,
      derivedKey: derivedKeyHex,
      time: timeDuration(start)
    };
  }
  function handler(options) {
    const { deriveKey: deriveKey2 } = options;
    let controller = void 0;
    self.onmessage = async (message) => {
      const { challenge, counterMode, counterStart, counterStep, timeout, type } = message.data;
      if (type === "abort") {
        controller?.abort();
      } else if (type === "work") {
        controller = new AbortController();
        let solution;
        try {
          solution = await solveChallenge({
            challenge,
            controller,
            counterStart,
            counterStep,
            deriveKey: deriveKey2,
            counterMode,
            timeout
          });
        } catch (err) {
          return self.postMessage({ error: err });
        }
        self.postMessage(solution);
      }
    };
  }
  async function deriveKey(parameters, salt, password) {
    const { algorithm, cost, keyLength = 32 } = parameters;
    assertAlgorithm(algorithm, ["PBKDF2/SHA-256", "PBKDF2/SHA-384", "PBKDF2/SHA-512"]);
    const passwordKey = await crypto.subtle.importKey(
      "raw",
      password,
      { name: "PBKDF2" },
      false,
      ["deriveBits"]
    );
    const derivedBits = await crypto.subtle.deriveBits(
      {
        name: "PBKDF2",
        salt,
        iterations: cost,
        hash: algorithm.slice("PBKDF2/".length)
      },
      passwordKey,
      keyLength * 8
    );
    return {
      parameters: {},
      derivedKey: new Uint8Array(derivedBits)
    };
  }
  handler({
    deriveKey
  });
})();
`,Ba=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",ro],{type:"text/javascript;charset=utf-8"});ao=`(function() {
  "use strict";
  function assertAlgorithm(algorithm, allowed) {
    if (!allowed.includes(algorithm)) {
      throw new Error(
        \`Unsupported algorithm: \${String(algorithm)}. Expected one of: \${allowed.join(", ")}.\`
      );
    }
  }
  function bufferStartsWith(buffer, prefix) {
    if (prefix.length > buffer.length) {
      return false;
    }
    for (let i = 0; i < prefix.length; i++) {
      if (buffer[i] !== prefix[i]) {
        return false;
      }
    }
    return true;
  }
  function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function concatBuffers(a, b) {
    const out = new Uint8Array(a.length + b.length);
    out.set(a, 0);
    out.set(b, a.length);
    return out;
  }
  function hexToBuffer(hex) {
    if (hex.length % 2 !== 0) {
      throw new Error(\`Hex string must have an even length. Got: \${hex}\`);
    }
    if (!/^[0-9a-fA-F]*$/.test(hex)) {
      throw new Error("Hex string contains non-hex characters.");
    }
    const buffer = new Uint8Array(hex.length / 2);
    for (let i = 0; i < buffer.length; i++) {
      buffer[i] = parseInt(hex.substring(i * 2, i * 2 + 2), 16);
    }
    return buffer;
  }
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
  }
  var HmacAlgorithm = /* @__PURE__ */ ((HmacAlgorithm2) => {
    HmacAlgorithm2["SHA_256"] = "SHA-256";
    HmacAlgorithm2["SHA_384"] = "SHA-384";
    HmacAlgorithm2["SHA_512"] = "SHA-512";
    return HmacAlgorithm2;
  })(HmacAlgorithm || {});
  Object.values(HmacAlgorithm);
  const MAX_COUNTER = {
    string: Number.MAX_SAFE_INTEGER,
    uint32: 4294967295
  };
  function isValidCounter(n, mode) {
    return Number.isInteger(n) && n >= 0 && n <= MAX_COUNTER[mode];
  }
  class PasswordBuffer {
    constructor(nonce, mode = "uint32") {
      this.nonce = nonce;
      this.mode = mode;
      this.buffer = new Uint8Array(this.nonce.length + this.COUNTER_BYTES);
      this.buffer.set(this.nonce, 0);
      this.dataView = new DataView(this.buffer.buffer);
    }
    nonce;
    mode;
    COUNTER_BYTES = 4;
    buffer;
    dataView;
    encoder = new TextEncoder();
    /**
     * Appends the counter to the nonce buffer.
     * In 'string' mode, encodes the counter as a UTF-8 string.
     * In 'uint32' mode, writes the counter as a big-endian 32-bit integer.
     * Throws a RangeError unless the counter is an integer the mode encodes exactly.
     */
    setCounter(n) {
      if (!isValidCounter(n, this.mode)) {
        throw new RangeError(
          \`counter must be an integer from 0 to \${MAX_COUNTER[this.mode]}. Got: \${n}\`
        );
      }
      if (this.mode === "string") {
        return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
      }
      this.dataView.setUint32(this.nonce.length, n, false);
      return this.buffer;
    }
  }
  function assertKeyPrefix(keyPrefix, keyLength) {
    if (typeof keyPrefix !== "string" || !/^[0-9a-fA-F]+$/.test(keyPrefix)) {
      throw new Error("keyPrefix must be a non-empty hex string.");
    }
    if (keyPrefix.length > keyLength * 2) {
      throw new Error(
        \`keyPrefix (\${keyPrefix.length} hex characters) must not be longer than the key (keyLength: \${keyLength} bytes).\`
      );
    }
  }
  async function solveChallenge(options) {
    const {
      challenge,
      controller,
      counterMode = "uint32",
      counterStart = 0,
      counterStep = 1,
      deriveKey: deriveKey2,
      timeout = 9e4
    } = options;
    const { nonce, keyLength = 32, keyPrefix, salt } = challenge.parameters;
    assertKeyPrefix(keyPrefix, keyLength);
    const nonceBuf = hexToBuffer(nonce);
    const saltBuf = hexToBuffer(salt);
    const keyPrefixHex = keyPrefix.toLowerCase();
    const keyPrefixBuf = keyPrefix.length % 2 === 0 ? hexToBuffer(keyPrefix) : null;
    const password = new PasswordBuffer(nonceBuf, counterMode);
    const start = performance.now();
    let counter = counterStart;
    let iterations = 0;
    let derivedKeyHex = "";
    let lastYield = start;
    while (true) {
      if (controller?.signal.aborted || timeout && iterations % 10 === 0 && performance.now() - start > timeout) {
        return null;
      }
      const { derivedKey } = await deriveKey2(
        challenge.parameters,
        saltBuf,
        password.setCounter(counter)
      );
      if (iterations % 10 === 0 && performance.now() - lastYield > 200) {
        await delay(0);
        lastYield = performance.now();
      }
      if (keyPrefixBuf ? bufferStartsWith(derivedKey, keyPrefixBuf) : bufferToHex(derivedKey).startsWith(keyPrefixHex)) {
        derivedKeyHex = bufferToHex(derivedKey);
        break;
      }
      counter = counter + counterStep;
      iterations = iterations + 1;
    }
    return {
      counter,
      derivedKey: derivedKeyHex,
      time: timeDuration(start)
    };
  }
  function handler(options) {
    const { deriveKey: deriveKey2 } = options;
    let controller = void 0;
    self.onmessage = async (message) => {
      const { challenge, counterMode, counterStart, counterStep, timeout, type } = message.data;
      if (type === "abort") {
        controller?.abort();
      } else if (type === "work") {
        controller = new AbortController();
        let solution;
        try {
          solution = await solveChallenge({
            challenge,
            controller,
            counterStart,
            counterStep,
            deriveKey: deriveKey2,
            counterMode,
            timeout
          });
        } catch (err) {
          return self.postMessage({ error: err });
        }
        self.postMessage(solution);
      }
    };
  }
  async function deriveKey(parameters, salt, password) {
    const { algorithm, keyLength = 32 } = parameters;
    assertAlgorithm(algorithm, ["SHA-256", "SHA-384", "SHA-512"]);
    const iterations = Math.max(1, parameters.cost);
    let derivedKey = concatBuffers(salt, password);
    for (let i = 0; i < iterations; i++) {
      derivedKey = new Uint8Array(await crypto.subtle.digest(algorithm, derivedKey));
    }
    return {
      parameters: {},
      derivedKey: derivedKey.slice(0, keyLength)
    };
  }
  handler({
    deriveKey
  });
})();
`,Ka=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",ao],{type:"text/javascript;charset=utf-8"});xc=`:root {
  --altcha-border-color: var(--altcha-color-neutral);
  --altcha-border-width: 1px;
  --altcha-border-radius: 6px;
  --altcha-color-base: light-dark(oklch(100% 0.00011 271.152), oklch(20.904% 0.00002 271.152));
  --altcha-color-base-content: light-dark(
  	oklch(20.904% 0.00002 271.152),
  	oklch(100% 0.00011 271.152)
  );
  --altcha-color-error: oklch(51.284% 0.20527 28.678);
  --altcha-color-error-content: oklch(100% 0.00011 271.152);
  --altcha-color-neutral: light-dark(oklch(83.591% 0.0001 271.152), oklch(46.04% 0.00005 271.152));
  --altcha-color-neutral-content: light-dark(
  	oklch(46.76% 0.00005 271.152),
  	oklch(100% 0.00011 271.152)
  );
  --altcha-color-primary: oklch(40.279% 0.2449 268.131);
  --altcha-color-primary-content: oklch(100% 0.00011 271.152);
  --altcha-color-success: oklch(55.748% 0.18968 142.511);
  --altcha-color-success-content: oklch(100% 0.00011 271.152);
  --altcha-checkbox-border-color: light-dark(
  	oklch(66.494% 0.00233 15.434),
  	oklch(51.028% 0.00006 271.152)
  );
  --altcha-checkbox-border-radius: 5px;
  --altcha-checkbox-border-width: var(--altcha-border-width);
  --altcha-checkbox-outline: 2px solid var(--altcha-checkbox-outline-color);
  --altcha-checkbox-outline-color: -webkit-focus-ring-color;
  --altcha-checkbox-outline-offset: 2px;
  --altcha-checkbox-size: 22px;
  --altcha-checkbox-transition-duration: var(--altcha-transition-duration);
  --altcha-input-background-color: var(--altcha-color-base);
  --altcha-input-border-radius: 3px;
  --altcha-input-border-width: 1px;
  --altcha-input-color: var(--altcha-color-base-content);
  --altcha-max-width: 320px;
  --altcha-padding: 0.75rem;
  --altcha-popover-arrow-size: 6px;
  --altcha-popover-color: var(--altcha-border-color);
  --altcha-shadow: drop-shadow(3px 3px 6px oklch(0% 0 0 / 0.2));
  --altcha-spinner-color: var(--altcha-color-base-content);
  --altcha-switch-background-color: var(--altcha-color-neutral);
  --altcha-switch-border-radius: calc(infinity * 1px);
  --altcha-switch-height: var(--altcha-checkbox-size);
  --altcha-switch-padding: 0.25rem;
  --altcha-switch-width: calc(var(--altcha-checkbox-size) * 1.75);
  --altcha-switch-toggle-border-radius: 100%;
  --altcha-switch-toggle-color: var(--altcha-color-neutral-content);
  --altcha-switch-toggle-size: calc(
  	var(--altcha-switch-height) - calc(var(--altcha-switch-padding) * 2)
  );
  --altcha-transition-duration: 0.6s;
  --altcha-z-index: 99999999;
  --altcha-z-index-popover: 999999999;
}

@supports (-moz-appearance: none) {
  :root {
    --altcha-checkbox-outline-color: var(--altcha-color-primary);
  }
}
.altcha {
  all: revert-layer;
  display: none;
  font-family: inherit;
  font-size: inherit;
  position: relative;
}
.altcha[data-visible] {
  display: block;
}
.altcha-popover, .altcha-popover * {
  all: revert-layer;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.25;
}
.altcha * {
  all: revert-layer;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.25;
}
.altcha a, .altcha-popover a {
  color: currentColor;
  text-decoration: none;
}
.altcha a:hover, .altcha-popover a:hover {
  color: currentColor;
}
.altcha-main {
  align-items: start;
  background-color: var(--altcha-color-base);
  border: var(--altcha-border-width, 1px) solid var(--altcha-border-color);
  border-radius: var(--altcha-border-radius, 0);
  color: var(--altcha-color-base-content);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  padding: var(--altcha-padding);
  max-width: var(--altcha-max-width, 100%);
}
.altcha-main > * {
  display: flex;
  width: 100%;
}
.altcha-main > *:first-child {
  flex-grow: 1;
}
.altcha-checkbox-wrap {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  gap: 0.5rem;
}
.altcha-checkbox-wrap > * {
  display: flex;
}
.altcha-logo {
  opacity: 0.7;
}
.altcha-footer {
  align-items: center;
  display: flex;
  flex-grow: 1;
  gap: 0.5rem;
  justify-content: flex-end;
  font-size: 0.7rem;
  opacity: 0.7;
}
.altcha-footer p {
  margin: 0;
  padding: 0;
}
.altcha-error {
  font-size: 0.85rem;
}
.altcha-button {
  align-items: center;
  background: var(--altcha-color-primary);
  border: var(--altcha-input-border-width) solid var(--altcha-color-primary);
  border-radius: var(--altcha-input-border-radius);
  color: var(--altcha-color-primary-content);
  cursor: pointer;
  display: flex;
  font-size: 0.9rem;
  gap: 0.5rem;
  padding: 0.35rem;
}
.altcha-button:focus {
  border-color: var(--altcha-color-primary);
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-button > .altcha-spinner, .altcha-button > svg {
  height: 20px;
  width: 20px;
}
.altcha-button-secondary {
  background: transparent;
  border-color: var(--altcha-color-neutral);
  color: var(--altcha-color-neutral-content);
}
.altcha-input {
  background: var(--altcha-input-background-color);
  border: var(--altcha-input-border-width) solid var(--altcha-color-neutral);
  border-radius: var(--altcha-input-border-radius);
  color: var(--altcha-input-color);
  flex-grow: 1;
  font-size: 1rem;
  min-width: 0;
  padding: 0.25rem;
  width: auto;
}
.altcha-input:focus {
  border-color: var(--altcha-color-primary);
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-spinner {
  animation: altcha-rotate 0.6s linear infinite;
  border-radius: 100%;
  border: var(--altcha-checkbox-border-width) solid var(--altcha-spinner-color);
  border-bottom-color: transparent;
  border-right-color: transparent;
  opacity: 0.7;
}
.altcha-popover {
  background-color: var(--altcha-color-base);
  border: var(--altcha-border-width) solid var(--altcha-border-color);
  border-radius: var(--altcha-border-radius);
  color: var(--altcha-color-base-content);
  filter: var(--altcha-shadow);
  position: absolute;
  left: calc(var(--altcha-padding) / 2);
  max-width: calc(var(--altcha-max-width) - var(--altcha-padding));
  top: calc(var(--altcha-padding) + var(--altcha-checkbox-size) + var(--altcha-popover-arrow-size));
  z-index: var(--altcha-z-index-popover);
}
.altcha-popover-arrow {
  border: var(--altcha-popover-arrow-size) solid transparent;
  border-bottom-color: var(--altcha-popover-color);
  content: "";
  height: 0;
  left: calc(var(--altcha-checkbox-size) / 2);
  position: absolute;
  top: calc(var(--altcha-popover-arrow-size) * -2);
  width: 0;
}
.altcha-popover-content {
  max-height: 100dvh;
  overflow: auto;
  padding: var(--altcha-padding);
}
.altcha-popover[data-top=true][data-display=standard] {
  bottom: calc(100% - (var(--altcha-padding) - var(--altcha-popover-arrow-size)));
  top: auto;
}
.altcha-popover[data-top=true][data-display=standard] .altcha-popover-arrow {
  border-bottom-color: transparent;
  border-top-color: var(--altcha-popover-color);
  bottom: calc(var(--altcha-popover-arrow-size) * -2);
  top: auto;
}
.altcha-popover[data-variant=error] {
  --altcha-popover-color: var(--altcha-color-error);
  background-color: var(--altcha-color-error);
  border-color: var(--altcha-color-error);
  color: var(--altcha-color-error-content);
}
.altcha-popover[data-variant=error] .altcha-popover-content {
  padding: calc(var(--altcha-padding) / 1.5) var(--altcha-padding);
}
.altcha-popover[data-display=overlay] {
  animation: altcha-overlay-slidein 0.5s forwards;
  left: 50%;
  position: fixed;
  top: 45%;
  transform: translate(-50%, -50%);
  width: var(--altcha-max-width);
  z-index: var(--altcha-z-index);
}
.altcha-popover[data-display=bottomsheet] {
  animation: altcha-bottomsheet-slideup 0.5s forwards;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 0;
  bottom: -100%;
  left: 50%;
  position: fixed;
  top: auto;
  transform: translate(-50%, 0);
  width: var(--altcha-max-width);
  z-index: var(--altcha-z-index);
}
.altcha-popover[data-display=bottomsheet] .altcha-popover-content {
  padding-bottom: calc(var(--altcha-padding) * 2);
}
.altcha-popover-backdrop {
  background: var(--altcha-color-base-content);
  bottom: 0;
  left: 0;
  opacity: 0.1;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.5s;
  z-index: var(--altcha-z-index);
}
.altcha-popover-close {
  color: var(--altcha-color-base-content);
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  height: 1.25rem;
  line-height: 0.95;
  position: absolute;
  right: 0;
  text-align: center;
  text-shadow: 0 0 1px var(--altcha-color-base);
  top: -1.5rem;
  width: 1.25rem;
  z-index: var(--altcha-z-index);
}
[dir=rtl] .altcha-popover {
  left: auto;
  right: calc(var(--altcha-padding) / 2);
}
[dir=rtl] .altcha-popover-arrow {
  left: auto;
  right: calc(var(--altcha-checkbox-size) / 2);
}
[dir=rtl] .altcha-popover-close {
  left: 0;
  right: auto;
}
.altcha-popover[data-display=bottomsheet] .altcha-footer, .altcha-popover[data-display=overlay] .altcha-footer {
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  gap: 0.5rem;
}
.altcha-popover[data-display=bottomsheet] .altcha-footer svg, .altcha-popover[data-display=overlay] .altcha-footer svg {
  height: 18px;
  width: 18px;
  vertical-align: middle;
}
.altcha-code-challenge > form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.altcha-code-challenge-title {
  font-weight: 600;
}
.altcha-code-challenge-text {
  font-size: 0.85rem;
}
.altcha-code-challenge-image {
  background: white;
  border: var(--altcha-input-border-width) solid var(--altcha-color-neutral);
  border-radius: var(--altcha-input-border-radius);
  object-fit: contain;
  height: 50px;
}
.altcha-code-challenge-row {
  display: flex;
  gap: 0.5rem;
}
.altcha-code-challenge-buttons {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: var(--altcha-padding);
  justify-content: space-between;
}
.altcha-code-challenge-buttons button {
  justify-content: center;
  width: 100%;
}
.altcha-checkbox {
  cursor: pointer;
  height: var(--altcha-checkbox-size);
  position: relative;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox input {
  appearance: none;
  background: var(--altcha-input-background-color);
  border: var(--altcha-checkbox-border-width, 2px) solid var(--altcha-checkbox-border-color);
  border-radius: var(--altcha-checkbox-border-radius);
  cursor: pointer;
  height: var(--altcha-checkbox-size);
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
@supports (hanging-punctuation: first) and (font: -apple-system-body) and (-webkit-appearance: none) {
  .altcha-checkbox input {
    /* Safari-only: fixes focus outline */
  }
  .altcha-checkbox input:focus {
    outline-width: 2px;
    outline-style: solid;
  }
}
.altcha-checkbox input:before {
  border-radius: var(--altcha-checkbox-border-radius);
  content: "";
  width: 100%;
  height: 100%;
  background: var(--altcha-color-neutral);
  display: block;
  transform: scale(0);
}
.altcha-checkbox input:checked {
  background-color: var(--altcha-color-success);
  border-color: var(--altcha-color-success);
}
.altcha-checkbox input:checked::before {
  background-color: var(--altcha-color-success);
  opacity: 0;
  transform: scale(2.2);
  transition: all var(--altcha-checkbox-transition-duration) ease;
  transition-delay: 0.1s;
}
.altcha-checkbox svg {
  --altcha-radio-svg-size: calc(var(--altcha-checkbox-size) * 0.5);
  --altcha-radio-svg-offset: calc(var(--altcha-checkbox-size) * 0.25);
  fill: none;
  left: var(--altcha-radio-svg-offset);
  height: var(--altcha-radio-svg-size);
  opacity: 0;
  position: absolute;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  top: var(--altcha-radio-svg-offset);
  transform: translate3d(0, 0, 0);
  width: var(--altcha-radio-svg-size);
}
.altcha-checkbox input:checked + svg {
  color: var(--altcha-color-success-content);
  opacity: 1;
  stroke-dashoffset: 0;
  transition: all var(--altcha-checkbox-transition-duration) ease;
  transition-delay: 0.1s;
}
.altcha-checkbox-spinner {
  display: none;
  left: 0;
  height: var(--altcha-checkbox-size);
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox[data-loading=true] input {
  appearance: none;
  opacity: 0;
  pointer-events: none;
}
.altcha-checkbox[data-loading=true] .altcha-checkbox-spinner {
  display: block;
}
.altcha-checkbox-native {
  height: var(--altcha-checkbox-size);
  position: relative;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native input {
  height: var(--altcha-checkbox-size);
  margin: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native-spinner {
  display: none;
  left: 0;
  height: var(--altcha-checkbox-size);
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native[data-loading=true] input {
  appearance: none;
  opacity: 0;
  pointer-events: none;
}
.altcha-checkbox-native[data-loading=true] .altcha-checkbox-native-spinner {
  display: block;
}
.altcha-switch {
  align-items: center;
  border-radius: var(--altcha-switch-border-radius);
  background-color: var(--altcha-switch-background-color);
  display: flex;
  height: var(--altcha-switch-height);
  padding: var(--altcha-switch-padding);
  position: relative;
  width: var(--altcha-switch-width);
}
.altcha-switch:focus-within {
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-switch input {
  appearance: none;
  cursor: pointer;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.altcha-switch-toggle {
  align-items: center;
  background-color: var(--altcha-switch-toggle-color);
  border-radius: var(--altcha-switch-toggle-border-radius);
  cursor: pointer;
  display: flex;
  height: var(--altcha-switch-toggle-size);
  justify-content: center;
  left: var(--altcha-switch-padding);
  position: absolute;
  transition: width 150ms ease-out, left 150ms ease-out;
  width: var(--altcha-switch-toggle-size);
}
.altcha-switch-spinner {
  display: none;
  height: var(--altcha-switch-toggle-size);
  width: var(--altcha-switch-toggle-size);
}
.altcha-switch[data-loading=true] {
  pointer-events: none;
}
.altcha-switch[data-loading=true] .altcha-switch-spinner {
  display: block;
}
.altcha-switch[data-loading=true] .altcha-switch-toggle {
  background-color: transparent;
  left: calc(50% - var(--altcha-switch-toggle-size) / 2);
}
[data-state=verified] .altcha-switch {
  --altcha-switch-background-color: var(--altcha-color-success);
}
[data-state=verified] .altcha-switch-toggle {
  background-color: var(--altcha-color-success-content);
  left: calc(100% - var(--altcha-switch-height) + var(--altcha-switch-padding));
}
[dir=rtl] .altcha-switch-toggle {
  left: calc(100% - var(--altcha-switch-height) + var(--altcha-switch-padding));
}
[dir=rtl][data-state=verified] .altcha-switch-toggle {
  left: var(--altcha-switch-padding);
}
.altcha-floating-arrow {
  border: 6px solid transparent;
  border-bottom-color: var(--altcha-border-color);
  content: "";
  height: 0;
  left: 12px;
  position: absolute;
  top: -12px;
  width: 0;
}
.altcha-overlay-backdrop {
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity var(--altcha-transition-duration);
  z-index: var(--altcha-z-index);
}
.altcha-overlay-close {
  display: inline-block;
  color: currentColor;
  cursor: pointer;
  font-size: 1rem;
  height: 1rem;
  line-height: 0.85;
  position: absolute;
  right: 0;
  text-align: center;
  text-shadow: 0 0 1px var(--altcha-color-base);
  top: -1.5rem;
  width: 1rem;
  z-index: var(--altcha-z-index);
}
.altcha[data-display=overlay] {
  animation: altcha-overlay-slidein var(--altcha-transition-duration) forwards;
  filter: var(--altcha-shadow);
  left: 50%;
  opacity: 0;
  position: fixed;
  top: 45%;
  transform: translate(-50%, -50%);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=overlay] .altcha-main {
  width: var(--altcha-max-width);
}
.altcha[data-display=floating] {
  display: none;
  filter: var(--altcha-shadow);
  left: var(--altcha-floating-left, -100%);
  position: fixed;
  top: var(--altcha-floating-top, -100%);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=floating] .altcha-main {
  width: var(--altcha-max-width);
}
.altcha[data-display=floating][data-floating-position=top] .altcha-floating-arrow {
  border-bottom-color: transparent;
  border-top-color: var(--altcha-border-color);
  bottom: -12px;
  top: auto;
}
.altcha[data-display=floating][data-visible] {
  display: flex;
}
.altcha[data-display=bar] {
  bottom: -100%;
  filter: var(--altcha-shadow);
  left: 0;
  position: fixed;
  right: 0;
  transition: bottom var(--altcha-transition-duration), top var(--altcha-transition-duration);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=bar] .altcha-main {
  align-items: center;
  border-radius: 0;
  border-width: var(--altcha-border-width) 0 0 0;
  flex-direction: row;
  max-width: 100% !important;
}
.altcha[data-display=bar] .altcha-main > * {
  width: auto;
}
.altcha[data-display=bar][data-placement=top] {
  bottom: auto;
  top: -100%;
}
.altcha[data-display=bar][data-placement=top] .altcha-main {
  border-width: 0 0 var(--altcha-border-width) 0;
}
.altcha[data-display=bar][data-placement=bottom]:not([data-state=unverified]) {
  bottom: 0;
}
.altcha[data-display=bar][data-placement=top]:not([data-state=unverified]) {
  top: 0;
}
.altcha[data-display=invisible] {
  display: none;
}

@keyframes altcha-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes altcha-bottomsheet-slideup {
  100% {
    bottom: 0;
  }
}
@keyframes altcha-overlay-slidein {
  100% {
    opacity: 1;
    top: 50%;
  }
}`;hc(xc);$altcha.algorithms.set("SHA-256",()=>new la);$altcha.algorithms.set("SHA-384",()=>new la);$altcha.algorithms.set("SHA-512",()=>new la);$altcha.algorithms.set("PBKDF2/SHA-256",()=>new sa);$altcha.algorithms.set("PBKDF2/SHA-384",()=>new sa);$altcha.algorithms.set("PBKDF2/SHA-512",()=>new sa)});function Ec(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Sc(e,t,n){if(e==null)return t(void 0),Xn;let r=Ac(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}function Cc(e,t=Xn){let n=null,r=new Set;function a(s){if(Ec(e,s)&&(e=s,n)){let u=!Yt.length;for(let c of r)c[1](),Yt.push(c,e);if(u){for(let c=0;c<Yt.length;c+=2)Yt[c][0](Yt[c+1]);Yt.length=0}}}function i(s){a(s(e))}function l(s,u=Xn){let c=[s,u];return r.add(c),r.size===1&&(n=t(a,i)||Xn),s(e),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:a,update:i,subscribe:l}}function Wn(e){let t;return Sc(e,n=>t=n)(),t}function Ac(e){var t=ca;try{return ca=!0,e()}finally{ca=t}}function oo(e){let t={get:n=>Wn(t.store)[n],set:(n,r)=>{typeof n=="string"?Object.assign(Wn(t.store),{[n]:r}):Object.assign(Wn(t.store),n),t.store.set(Wn(t.store))},store:Cc(e)};return t}var Xn,Yt,ca,Tc,so=Pt(()=>{Xn=()=>{};Yt=[];ca=!1;globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:oo({}),i18n:oo({}),instances:new Set,plugins:new Set};Tc={ariaLinkLabel:"Altcha (offizielle Website)",enterCode:"Code eingeben",enterCodeAria:"Geben Sie den Code ein, den Sie h\xF6ren. Dr\xFCcken Sie die Leertaste, um die Audio abzuspielen.",error:"\xDCberpr\xFCfung fehlgeschlagen. Bitte versuchen Sie es sp\xE4ter erneut.",expired:"\xDCberpr\xFCfung abgelaufen. Bitte versuchen Sie es erneut.",footer:'Gesch\xFCtzt durch <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (offizielle Website, \xF6ffnet in neuem Tab)">ALTCHA</a>',getAudioChallenge:"Audio-Herausforderung anfordern",label:"Ich bin kein Roboter",loading:"Lade...",reload:"Neu laden",verify:"\xDCberpr\xFCfen",verificationRequired:"\xDCberpr\xFCfung erforderlich!",verified:"\xDCberpr\xFCft",verifying:"Wird \xFCberpr\xFCft...",waitAlert:"\xDCberpr\xFCfung l\xE4uft... bitte warten.",cancel:"Abbrechen",enterCodeFromImage:"Um fortzufahren, geben Sie bitte den Code aus dem Bild unten ein."};globalThis.$altcha.i18n.set("de",Tc)});function $c(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Rc(e,t,n){if(e==null)return t(void 0),Zn;let r=Pc(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}function Ic(e,t=Zn){let n=null,r=new Set;function a(s){if($c(e,s)&&(e=s,n)){let u=!qt.length;for(let c of r)c[1](),qt.push(c,e);if(u){for(let c=0;c<qt.length;c+=2)qt[c][0](qt[c+1]);qt.length=0}}}function i(s){a(s(e))}function l(s,u=Zn){let c=[s,u];return r.add(c),r.size===1&&(n=t(a,i)||Zn),s(e),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:a,update:i,subscribe:l}}function Jn(e){let t;return Rc(e,n=>t=n)(),t}function Pc(e){var t=ua;try{return ua=!0,e()}finally{ua=t}}function lo(e){let t={get:n=>Jn(t.store)[n],set:(n,r)=>{typeof n=="string"?Object.assign(Jn(t.store),{[n]:r}):Object.assign(Jn(t.store),n),t.store.set(Jn(t.store))},store:Ic(e)};return t}var Zn,qt,ua,Oc,co=Pt(()=>{Zn=()=>{};qt=[];ua=!1;globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:lo({}),i18n:lo({}),instances:new Set,plugins:new Set};Oc={ariaLinkLabel:"Altcha (offici\xEBle website)",enterCode:"Voer code in",enterCodeAria:"Voer de code in die je hoort. Druk op Spatie om de audio af te spelen.",error:"Verificatie mislukt. Probeer het later opnieuw.",expired:"Verificatie verlopen. Probeer het opnieuw.",footer:'Beschermd door <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (offici\xEBle website, opent in een nieuw tabblad)">ALTCHA</a>',getAudioChallenge:"Audio-uitdaging ontvangen",label:"Ik ben geen robot",loading:"Laden...",reload:"Herladen",verify:"Verifi\xEBren",verificationRequired:"Verificatie vereist!",verified:"Geverifieerd",verifying:"Bezig met verifi\xEBren...",waitAlert:"Bezig met verifi\xEBren... even geduld a.u.b.",cancel:"Annuleren",enterCodeFromImage:"Om door te gaan, voert u de code uit de onderstaande afbeelding in."};globalThis.$altcha.i18n.set("nl",Oc)});function Lc(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Nc(e,t,n){if(e==null)return t(void 0),er;let r=Dc(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}function Mc(e,t=er){let n=null,r=new Set;function a(s){if(Lc(e,s)&&(e=s,n)){let u=!Wt.length;for(let c of r)c[1](),Wt.push(c,e);if(u){for(let c=0;c<Wt.length;c+=2)Wt[c][0](Wt[c+1]);Wt.length=0}}}function i(s){a(s(e))}function l(s,u=er){let c=[s,u];return r.add(c),r.size===1&&(n=t(a,i)||er),s(e),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:a,update:i,subscribe:l}}function Qn(e){let t;return Nc(e,n=>t=n)(),t}function Dc(e){var t=fa;try{return fa=!0,e()}finally{fa=t}}function uo(e){let t={get:n=>Qn(t.store)[n],set:(n,r)=>{typeof n=="string"?Object.assign(Qn(t.store),{[n]:r}):Object.assign(Qn(t.store),n),t.store.set(Qn(t.store))},store:Mc(e)};return t}var er,Wt,fa,Hc,fo=Pt(()=>{er=()=>{};Wt=[];fa=!1;globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:uo({}),i18n:uo({}),instances:new Set,plugins:new Set};Hc={ariaLinkLabel:"Altcha (site officiel)",enterCode:"Entrez le code",enterCodeAria:"Entrez le code que vous entendez. Appuyez sur Espace pour \xE9couter l'audio.",error:"\xC9chec de la v\xE9rification. Essayez \xE0 nouveau plus tard.",expired:"La v\xE9rification a expir\xE9. Essayez \xE0 nouveau.",footer:'Prot\xE9g\xE9 par <a href="https://altcha.org/" target="_blank" rel="noopener" aria-label="Altcha (site officiel, s\u2019ouvre dans un nouvel onglet)">ALTCHA</a>',getAudioChallenge:"Obtenir un d\xE9fi audio",label:"Je ne suis pas un robot",loading:"Chargement...",reload:"Recharger",verify:"V\xE9rifier",verificationRequired:"V\xE9rification requise !",verified:"V\xE9rifi\xE9",verifying:"V\xE9rification en cours...",waitAlert:"V\xE9rification en cours... veuillez patienter.",cancel:"Annuler",enterCodeFromImage:"Pour continuer, veuillez entrer le code de l'image ci-dessous."};globalThis.$altcha.i18n.set("fr-fr",Hc)});var ho,vo,xn,po=Pt(()=>{(function(e){e.ERROR="error",e.LOADING="loading",e.PLAYING="playing",e.PAUSED="paused",e.READY="ready"})(ho||(ho={}));(function(e){e.SHA_256="SHA-256",e.SHA_384="SHA-384",e.SHA_512="SHA-512"})(vo||(vo={}));(function(e){e.CODE="code",e.ERROR="error",e.VERIFIED="verified",e.VERIFYING="verifying",e.UNVERIFIED="unverified",e.EXPIRED="expired"})(xn||(xn={}))});var go={};is(go,{default:()=>tr});var tr,bo=Pt(()=>{io();so();co();fo();po();tr=class extends window.PluginBaseClass{init(){this.el.addEventListener("statechange",this.onStateChange.bind(this))}onStateChange(t){"detail"in t&&[xn.VERIFYING,xn.VERIFIED].includes(t.detail.state)===!1&&this.el.classList.remove("d-none")}}});window.PluginManager.register("AltchaPlugin",()=>Promise.resolve().then(()=>(bo(),go)),"altcha-widget");})();
