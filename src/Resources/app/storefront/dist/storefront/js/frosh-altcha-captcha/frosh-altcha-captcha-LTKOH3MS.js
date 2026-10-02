(()=>{var ts=Object.defineProperty;var Ot=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(r){throw n=[r],r}};var ns=(e,t)=>{for(var n in t)ts(e,n,{get:t[n],enumerable:!0})};function ls(e){for(var t=0;t<e.length;t++)e[t]()}function Ya(){var e,t,n=new Promise((r,a)=>{e=r,t=a});return{promise:n,resolve:e,reject:t}}function Wa(e){return e===this.v}function Ja(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function hs(e){return!Ja(e,this.v)}function vs(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function ps(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function gs(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function bs(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ms(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ys(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ws(){throw new Error("https://svelte.dev/e/hydration_failed")}function _s(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ks(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function xs(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Es(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}function Ht(e){me=e}function ct(e,t=!1,n){me={p:me,i:!1,c:null,e:null,s:e,x:null,r:$,l:null}}function ut(e){var t=me,n=t.e;if(n!==null){t.e=null;for(var r of n)Ti(r)}return e!==void 0&&(t.x=e),t.i=!0,me=t.p,Br(e)}function Br(e={}){return zt(e,qa,{value:!0}),e}function ei(){return!0}function ti(){var e=_t;_t=[],ls(e)}function Xe(e){if(_t.length===0&&!un){var t=_t;queueMicrotask(()=>{t===_t&&ti()})}_t.push(e)}function Rs(){for(;_t.length>0;)ti()}function Is(){console.warn("https://svelte.dev/e/derived_inert")}function mn(e){console.warn("https://svelte.dev/e/hydration_mismatch")}function Os(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Ls(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Qe(e){T=e}function _e(e){if(e===null)throw mn(),At;return M=e}function Tt(){return _e(at(M))}function ae(e){if(T){if(at(M)!==null)throw mn(),At;M=e}}function Kr(e=1){if(T){for(var t=e,n=M;t--;)n=at(n);M=n}}function Yr(e=!0){for(var t=0,n=M;;){if(n.nodeType===bn){var r=n.data;if(r===Xa){if(t===0)return n;t-=1}else(r===Hr||r===Za||r[0]==="["&&!isNaN(Number(r.slice(1))))&&(t+=1)}var a=at(n);e&&n.remove(),n=a}}function ni(e){if(!e||e.nodeType!==bn)throw mn(),At;return e.data}function st(e){if(typeof e!="object"||e===null||Ft in e||qa in e)return e;let t=Ka(e);if(t!==os&&t!==ss)return e;var n=new Map,r=Fr(e),a=I(0),i=St,l=s=>{if(St===i)return s();var u=L,c=St;Ne(null),Oa(i);var d=s();return Ne(u),Oa(c),d};return r&&n.set("length",I(e.length)),new Proxy(e,{defineProperty(s,u,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&_s();var d=n.get(u);return d===void 0?l(()=>{var h=I(c.value);return n.set(u,h),h}):w(d,c.value,!0),!0},deleteProperty(s,u){var c=n.get(u);if(c===void 0){if(u in s){let d=l(()=>I(re));n.set(u,d),fn(a)}}else w(c,re),fn(a);return!0},get(s,u,c){if(u===Ft)return e;var d=n.get(u),h=u in s;if(d===void 0&&(!h||Vt(s,u)?.writable)&&(d=l(()=>{var g=st(h?s[u]:re),b=I(g);return b}),n.set(u,d)),d!==void 0){var v=o(d);return v===re?void 0:v}return Reflect.get(s,u,c)},getOwnPropertyDescriptor(s,u){var c=Reflect.getOwnPropertyDescriptor(s,u);if(c&&"value"in c){var d=n.get(u);d&&(c.value=o(d))}else if(c===void 0){var h=n.get(u),v=h?.v;if(h!==void 0&&v!==re)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return c},has(s,u){if(u===Ft)return!0;var c=n.get(u),d=c!==void 0&&c.v!==re||Reflect.has(s,u);if(c!==void 0||$!==null&&(!d||Vt(s,u)?.writable)){c===void 0&&(c=l(()=>{var v=d?st(s[u]):re,g=I(v);return g}),n.set(u,c));var h=o(c);if(h===re)return!1}return d},set(s,u,c,d){var h=n.get(u),v=u in s;if(r&&u==="length")for(var g=c;g<h.v;g+=1){var b=n.get(g+"");b!==void 0?w(b,re):g in s&&(b=l(()=>I(re)),n.set(g+"",b))}if(h===void 0)(!v||Vt(s,u)?.writable)&&(h=l(()=>I(void 0)),w(h,st(c)),n.set(u,h));else{v=h.v!==re;var x=l(()=>st(c));w(h,x)}var O=Reflect.getOwnPropertyDescriptor(s,u);if(O?.set&&O.set.call(d,c),!v){if(r&&typeof u=="string"){var B=n.get("length"),F=Number(u);Number.isInteger(F)&&F>=B.v&&w(B,F+1)}fn(a)}return!0},ownKeys(s){o(a);var u=Reflect.ownKeys(s).filter(h=>{var v=n.get(h);return v===void 0||v.v!==re});for(var[c,d]of n)d.v!==re&&!(c in s)&&u.push(c);return u},setPrototypeOf(){ks()}})}function Ca(e){try{if(e!==null&&typeof e=="object"&&Ft in e)return e[Ft]}catch{}return e}function ri(e,t){return Object.is(Ca(e),Ca(t))}function Cr(){if(Et===void 0){Et=window,Sr=document,ai=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;ii=Vt(t,"firstChild").get,oi=Vt(t,"nextSibling").get,Ea(e)&&(e[kr]=void 0,e[Ga]=null,e[xr]=void 0,e.__e=void 0),Ea(n)&&(n[Er]=void 0)}}function Be(e=""){return document.createTextNode(e)}function Ee(e){return ii.call(e)}function at(e){return oi.call(e)}function de(e,t){if(!T)return Ee(e);var n=Ee(M);if(n===null)n=M.appendChild(Be());else if(t&&n.nodeType!==gn){var r=Be();return n?.before(r),_e(r),r}return t&&jn(n),_e(n),n}function Dt(e,t=!1){if(!T){var n=Ee(e);return n instanceof Comment&&n.data===""?at(n):n}if(t){if(M?.nodeType!==gn){var r=Be();return M?.before(r),_e(r),r}jn(M)}return M}function Mt(e,t=!1){if(!T)return Ee(e);var n=de(e,t);return ae(e),n}function J(e,t=1,n=!1){let r=T?M:e;for(var a;t--;)a=r,r=at(r);if(!T)return r;if(n){if(r?.nodeType!==gn){var i=Be();return r===null?a?.after(i):r.before(i),_e(i),i}jn(r)}return _e(r),r}function Ps(e){e.textContent=""}function Ds(){return!1}function qr(e,t,n){return t==null||t===Qa?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function jn(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===gn;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function Ms(e){var t=$;if(t===null)return L.f|=vt,e;if((t.f&$t)===0&&(t.f&jt)===0)throw e;Ze(e,t)}function Ze(e,t){if(!(t!==null&&(t.f&$e)!==0)){for(;t!==null;){if((t.f&_r)!==0&&(t.f&($e|Dn))===0){if((t.f&$t)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function te(e,t){e.f=e.f&Ns|t}function Gr(e){(e.f&De)!==0||e.deps===null?te(e,le):te(e,je)}function si(e){if(e!==null)for(let t of e)(t.f&he)===0||(t.f&Ct)===0||(t.f^=Ct,si(t.deps))}function li(e,t,n){(e.f&ce)!==0?t.add(e):(e.f&je)!==0&&n.add(e),si(e.deps),te(e,le)}function ci(e,t,n){if(e==null)return t(void 0),ht;let r=_n(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}function Vs(e,t=ht){let n=null,r=new Set;function a(s){if(Ja(e,s)&&(e=s,n)){let u=!Lt.length;for(let c of r)c[1](),Lt.push(c,e);if(u){for(let c=0;c<Lt.length;c+=2)Lt[c][0](Lt[c+1]);Lt.length=0}}}function i(s){a(s(e))}function l(s,u=ht){let c=[s,u];return r.add(c),r.size===1&&(n=t(a,i)||ht),s(e),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:a,update:i,subscribe:l}}function on(e){let t;return ci(e,n=>t=n)(),t}function Aa(e,t,n){let r=n[t]??={store:null,source:yi(void 0),unsubscribe:ht};if(r.store!==e&&!(Ar in n))if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=ht;else{var a=!0;r.unsubscribe=ci(e,i=>{a?r.source.v=i:w(r.source,i)}),a=!1}return e&&Ar in n?on(e):o(r.source)}function Us(){let e={};function t(){Hn(()=>{for(var n in e)e[n].unsubscribe();zt(e,Ar,{enumerable:!1,value:!0})})}return[e,t]}function Fs(e,t){if(t){let n=document.body;e.autofocus=!0,Xe(()=>{document.activeElement===n&&e.focus()})}}function ui(){Ta||(Ta=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(let t of e.target.elements)t[cn]?.()})},{capture:!0}))}function Yt(e){var t=L,n=$;Ne(null),rt(null);try{return e()}finally{Ne(t),rt(n)}}function zs(e,t,n,r=n){e.addEventListener(t,()=>Yt(n));let a=e[cn];a?e[cn]=()=>{a(),r(!0)}:e[cn]=()=>r(!0),ui()}function fi(e,t,n,r){let a=Wr;var i=e.filter(g=>!g.settled),l=t.map(a);if(n.length===0&&i.length===0){r(l);return}var s=$,u=js(),c=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(g=>g.promise)):null;function d(g){if((s.f&$e)===0){u();try{r([...l,...g])}catch(b){Ze(b,s)}Vn()}}var h=di();if(n.length===0){c.then(()=>d([])).finally(h);return}function v(){Promise.all(n.map(g=>Hs(g))).then(d).catch(g=>Ze(g,s)).finally(h)}c?c.then(()=>{u(),v(),Vn()}):v()}function js(){var e=$,t=L,n=me,r=R;return function(i=!0){rt(e),Ne(t),Ht(n),i&&(e.f&$e)===0&&(r?.activate(),r?.apply())}}function Vn(e=!0){rt(null),Ne(null),Ht(null),e&&R?.deactivate()}function di(){var e=$,t=e.b,n=R,r=!!t?.is_rendered();return t?.update_pending_count(1,n),n.increment(r,e),()=>{t?.update_pending_count(-1,n),n.decrement(r,e)}}function Wr(e){var t=he|ce;return $!==null&&($.f|=Rt),{ctx:me,deps:null,effects:null,equals:Wa,f:t,fn:e,reactions:null,rv:0,v:re,wv:0,parent:$,ac:null}}function Hs(e,t,n){let r=$;r===null&&ps();var a=void 0,i=yn(re),l=!L,s=new Set;return tl(()=>{var u=$,c=Ya();a=c.promise;try{Promise.resolve(e()).then(c.resolve,g=>{g!==vn&&c.reject(g)}).finally(Vn)}catch(g){c.reject(g),Vn()}var d=R;if(l){if((u.f&$t)!==0)var h=di();if(r.b?.is_rendered())d.async_deriveds.get(u)?.reject(sn);else for(let g of s.values())g.reject(sn);s.add(c),d.async_deriveds.set(u,c)}let v=(g,b=void 0)=>{h?.(),s.delete(c),b!==sn&&(d.activate(),b?(i.f|=vt,Fn(i,b)):((i.f&vt)!==0&&(i.f^=vt),Fn(i,g)),d.deactivate())};c.promise.then(v,g=>v(null,g||"unknown"))}),Hn(()=>{for(let u of s)u.reject(sn)}),new Promise(u=>{function c(d){function h(){d===a?u(i):c(a)}d.then(h,h)}c(a)})}function we(e){let t=Wr(e);return _i(t),t}function Bs(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)pe(t[n])}}function Jr(e){var t,n=$,r=e.parent;if(!lt&&r!==null&&e.v!==re&&(r.f&($e|Me))!==0)return Is(),e.v;rt(r);try{e.f&=~Ct,Bs(e),t=Si(e)}finally{rt(n)}return t}function hi(e){var t=Jr(e);if(!e.equals(t)&&(e.wv=xi(),(!R?.is_fork||e.deps===null)&&(R!==null?(R.capture(e,t,!0),Tr?.capture(e,t,!0)):e.v=t,e.deps===null))){te(e,le);return}lt||(Fe!==null?(Qr()||R?.is_fork)&&Fe.set(e,t):Gr(e))}function Ks(e){if(e.effects!==null)for(let t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac!==null&&Yt(()=>{t.ac.abort(vn),t.ac=null}),t.fn!==null&&(t.teardown=ht),hn(t,0),ta(t))}function vi(e){if(e.effects!==null)for(let t of e.effects)t.teardown&&t.fn!==null&&Bt(t)}function Y(e){var t=un;un=!0;try{for(var n;;){if(Rs(),R===null)return n;R.flush()}}finally{un=t}}function qs(){try{ys()}catch(e){Ze(e,$r)}}function Ra(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&($e|Me))===0&&wn(r)&&(ot=new Set,Bt(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Oi(r),ot?.size>0)){et.clear();for(let a of ot){if((a.f&($e|Me))!==0)continue;let i=[a],l=a.parent;for(;l!==null;)ot.has(l)&&(ot.delete(l),i.push(l)),l=l.parent;for(let s=i.length-1;s>=0;s--){let u=i[s];(u.f&($e|Me))===0&&Bt(u)}}ot.clear()}}ot=null}}function pi(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(let a of e.reactions){let i=a.f;(i&he)!==0?pi(a,t,n,r):(i&(Ut|Ue))!==0&&(i&ce)===0&&Zr(a,t,r)&&(te(a,ce),Xr(a))}}function Zr(e,t,n){let r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(let a of e.deps){if(Ln.call(t,a))return!0;if((a.f&he)!==0&&Zr(a,t,n))return n.set(a,!0),!0}return n.set(e,!1),!1}function Xr(e){R.schedule(e)}function gi(e,t){if(!((e.f&He)!==0&&(e.f&le)!==0)){(e.f&ce)!==0?t.d.push(e):(e.f&je)!==0&&t.m.push(e),te(e,le);for(var n=e.first;n!==null;)gi(n,t),n=n.next}}function bi(e){te(e,le);for(var t=e.first;t!==null;)bi(t),t=t.next}function yn(e,t){var n={f:0,v:e,reactions:null,equals:Wa,rv:0,wv:0};return n}function I(e,t){let n=yn(e);return _i(n),n}function yi(e,t=!1,n=!0){let r=yn(e);return t||(r.equals=hs),r}function w(e,t,n=!1){L!==null&&(!ze||(L.f&Mn)!==0)&&ei()&&(L.f&(he|Ue|Ut|Mn))!==0&&(tt===null||!tt.has(e))&&xs();let r=n?st(t):t;return Fn(e,r,Rn)}function Fn(e,t,n=null){if(!e.equals(t)){lt?et.set(e,t):et.has(e)||et.set(e,e.v);var r=gt.ensure();if(r.capture(e,t),(e.f&he)!==0){let a=e;(e.f&ce)!==0&&Jr(a),Fe===null&&Gr(a)}e.wv=xi(),wi(e,ce,n),$!==null&&($.f&le)!==0&&($.f&(He|nt))===0&&(Pe===null?Ws([e]):Pe.push(e)),!r.is_fork&&Un.size>0&&!mi&&Gs()}return t}function Gs(){mi=!1;for(let e of Un){(e.f&le)!==0&&te(e,je);let t;try{t=wn(e)}catch{t=!0}t&&Bt(e)}Un.clear()}function fn(e){w(e,e.v+1)}function wi(e,t,n){var r=e.reactions;if(r!==null)for(var a=r.length,i=0;i<a;i++){var l=r[i],s=l.f,u=(s&ce)===0;if(u&&te(l,t),(s&Mn)!==0)Un.add(l);else if((s&he)!==0){var c=l;Fe?.delete(c),(s&Ct)===0&&(s&De&&($===null||($.f&Nn)===0)&&(l.f|=Ct),wi(c,je,n))}else if(u){var d=l;(s&Ue)!==0&&ot!==null&&ot.add(d),n!==null?n.push(d):Xr(d)}}}function Ia(e){lt=e}function Ne(e){L=e}function rt(e){$=e}function _i(e){L!==null&&(tt??=new Set).add(e)}function Ws(e){Pe=e}function Oa(e){St=e}function xi(){return++ki}function wn(e){var t=e.f;if((t&ce)!==0)return!0;if(t&he&&(e.f&=~Ct),(t&je)!==0){for(var n=e.deps,r=n.length,a=0;a<r;a++){var i=n[a];if(wn(i)&&hi(i),i.wv>e.wv)return!0}(t&De)!==0&&Fe===null&&te(e,le)}return!1}function Ei(e,t,n=!0){var r=e.reactions;if(r!==null&&!(tt!==null&&tt.has(e)))for(var a=0;a<r.length;a++){var i=r[a];(i.f&he)!==0?Ei(i,t,!1):t===i&&(n?te(i,ce):(i.f&le)!==0&&te(i,je),Xr(i))}}function Si(e){var t=Se,n=Te,r=Pe,a=L,i=tt,l=me,s=ze,u=St,c=e.f;Se=null,Te=0,Pe=null,L=(c&(He|nt))===0?e:null,tt=null,Ht(e.ctx),ze=!1,St=++kt,e.ac!==null&&(Yt(()=>{e.ac.abort(vn)}),e.ac=null);try{e.f|=Nn;var d=e.fn,h=d();e.f|=$t;var v=La(e);if(ei()&&Pe!==null&&!ze&&v!==null&&(e.f&(he|je|ce))===0)for(var g=0;g<Pe.length;g++)Ei(Pe[g],e);if(a!==null&&a!==e){if(kt++,a.deps!==null)for(let b=0;b<n;b+=1)a.deps[b].rv=kt;if(t!==null)for(let b of t)b.rv=kt;Pe!==null&&(r===null?r=Pe:r.push(...Pe))}return(e.f&vt)!==0&&(e.f^=vt),h}catch(b){return La(e),Ms(b)}finally{e.f^=Nn,Se=t,Te=n,Pe=r,L=a,tt=i,Ht(l),ze=s,St=u}}function La(e){var t=e.deps,n=R?.is_fork;if(Se!==null){var r;if(n||hn(e,Te),t!==null&&Te>0)for(t.length=Te+Se.length,r=0;r<Se.length;r++)t[Te+r]=Se[r];else e.deps=t=Se;if(Qr()&&(e.f&De)!==0)for(r=Te;r<t.length;r++)(t[r].reactions??=[]).push(e)}else!n&&t!==null&&Te<t.length&&(hn(e,Te),t.length=Te);return t}function Js(e,t){let n=t.reactions;if(n!==null){var r=rs.call(n,e);if(r!==-1){var a=n.length-1;a===0?n=t.reactions=null:(n[r]=n[a],n.pop())}}if(n===null&&(t.f&he)!==0&&(Se===null||!Ln.call(Se,t))){var i=t;(i.f&De)!==0&&(i.f^=De,i.f&=~Ct),i.v!==re&&Gr(i),i.ac!==null&&Yt(()=>{i.ac.abort(vn),i.ac=null,te(i,ce)}),Ks(i),hn(i,0)}}function hn(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Js(e,n[r])}function Bt(e){var t=e.f;if((t&$e)===0){te(e,le);var n=$,r=In;$=e,In=(t&(He|nt))===0;try{(t&(Ue|zr))!==0?nl(e):ta(e),Ri(e);var a=Si(e);e.teardown=typeof a=="function"?a:null,e.wv=ki;var i}finally{In=r,$=n}}}async function xt(){await Promise.resolve(),Y()}function o(e){var t=e.f,n=(t&he)!==0;if(L!==null&&!ze){var r=$!==null&&($.f&$e)!==0;if(!r&&(tt===null||!tt.has(e))){var a=L.deps;if((L.f&Nn)!==0)e.rv<kt&&(e.rv=kt,Se===null&&a!==null&&a[Te]===e?Te++:Se===null?Se=[e]:Se.push(e));else{L.deps??=[],Ln.call(L.deps,e)||L.deps.push(e);var i=e.reactions;i===null?e.reactions=[L]:Ln.call(i,L)||i.push(L)}}}if(lt&&et.has(e))return et.get(e);if(n){var l=e;if(lt){var s=l.v;return((l.f&le)===0&&l.reactions!==null||Ai(l))&&(s=Jr(l)),et.set(l,s),s}var u=(l.f&De)===0&&!ze&&L!==null&&(In||(L.f&De)!==0),c=(l.f&$t)===0;wn(l)&&(u&&(l.f|=De),hi(l)),u&&!c&&(vi(l),Ci(l))}if(Fe?.has(e))return Fe.get(e);if((e.f&vt)!==0)throw e.v;return e.v}function Ci(e){if(e.f|=De,e.deps!==null)for(let t of e.deps)(t.reactions??=[]).push(e),(t.f&he)!==0&&(t.f&De)===0&&(vi(t),Ci(t))}function Ai(e){if(e.v===re)return!0;if(e.deps===null)return!1;for(let t of e.deps)if(et.has(t)||(t.f&he)!==0&&Ai(t))return!0;return!1}function _n(e){var t=ze;try{return ze=!0,e()}finally{ze=t}}function Zs(e){$===null&&(L===null&&ms(),bs()),lt&&gs()}function Xs(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Ke(e,t){var n=$;n!==null&&(n.f&Me)!==0&&(e|=Me);var r={ctx:me,deps:null,nodes:null,f:e|ce|De,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};R?.register_created_effect(r);var a=r;if((e&jt)!==0)Nt!==null?Nt.push(r):gt.ensure().schedule(r);else if(t!==null){try{Bt(r)}catch(l){throw pe(r),l}a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&Rt)===0&&(a=a.first,(e&Ue)!==0&&(e&pt)!==0&&a!==null&&(a.f|=pt))}if(a!==null&&(a.parent=n,n!==null&&Xs(a,n),L!==null&&(L.f&he)!==0&&(e&nt)===0)){var i=L;(i.effects??=[]).push(a)}return r}function Qr(){return L!==null&&!ze}function Hn(e){let t=Ke(zn,null);return te(t,le),t.teardown=e,t}function xe(e){Zs();var t=$.f,n=!L&&(t&He)!==0&&me!==null&&!me.i;if(n){var r=me;(r.e??=[]).push(e)}else return Ti(e)}function Ti(e){return Ke(jt|us,e)}function Qs(e){gt.ensure();let t=Ke(nt|Rt,e);return()=>{pe(t)}}function el(e){gt.ensure();let t=Ke(nt|Rt,e);return(n={})=>new Promise(r=>{n.outro?dn(t,()=>{pe(t),r(void 0)}):(pe(t),r(void 0))})}function ea(e){return Ke(jt,e)}function tl(e){return Ke(Ut|Rt,e)}function Bn(e,t=0){return Ke(zn|t,e)}function be(e,t=[],n=[],r=[]){fi(r,t,n,a=>{Ke(zn,()=>{e(...a.map(o))})})}function kn(e,t=0){var n=Ke(Ue|t,e);return n}function $i(e,t=0){var n=Ke(zr|t,e);return n}function Ve(e){return Ke(He|Rt,e)}function Ri(e){var t=e.teardown;if(t!==null){let n=lt,r=L;Ia(!0),Ne(null);try{t.call(null)}catch(a){Ze(a,e.parent)}finally{Ia(n),Ne(r)}}}function ta(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){let a=n.ac;a!==null&&Yt(()=>{a.abort(vn)});var r=n.next;(n.f&nt)!==0?n.parent=null:pe(n,t),n=r}}function nl(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&He)===0&&pe(t),t=n}}function pe(e,t=!0){var n=!1;(t||(e.f&cs)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Ii(e.nodes.start,e.nodes.end),n=!0),e.f|=Dn,ta(e,t&&!n),hn(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(let i of r)i.stop();Ri(e),e.f^=Dn,e.f|=$e;var a=e.parent;a!==null&&a.first!==null&&Oi(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Ii(e,t){for(;e!==null;){var n=e===t?null:at(e);e.remove(),e=n}}function Oi(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function dn(e,t,n=!0){var r=[];e.f|=jr,Li(e,r,!0);var a=()=>{n&&pe(e),t&&t()},i=r.length;if(i>0){var l=()=>--i||a();for(var s of r)s.out(l)}else a()}function Li(e,t,n){if((e.f&Me)===0){e.f^=Me;var r=e.nodes&&e.nodes.t;if(r!==null)for(let s of r)(s.is_global||n)&&t.push(s);for(var a=e.first;a!==null;){var i=a.next;if((a.f&nt)===0){var l=(a.f&pt)!==0||(a.f&He)!==0&&(e.f&Ue)!==0;Li(a,t,l?n:!1)}a=i}}}function Pa(e){e.f&=~jr,Pi(e,!0)}function Pi(e,t){if((e.f&jr)===0&&(e.f&Me)!==0){e.f^=Me,(e.f&le)===0&&(te(e,ce),gt.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,a=(n.f&pt)!==0||(n.f&He)!==0;Pi(n,a?t:!1),n=r}var i=e.nodes&&e.nodes.t;if(i!==null)for(let l of i)(l.is_global||t)&&l.in()}}function Di(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var a=n===r?null:at(n);t.append(n),n=a}}function rl(e){let t=0,n=yn(0),r;return()=>{Qr()&&(o(n),Bn(()=>(t===0&&(r=_n(()=>e(()=>fn(n)))),t+=1,()=>{Xe(()=>{t-=1,t===0&&(r?.(),r=void 0,fn(n))})})))}}function Da(e){let t={get:n=>on(t.store)[n],set:(n,r)=>{typeof n=="string"?Object.assign(on(t.store),{[n]:r}):Object.assign(on(t.store),n),t.store.set(on(t.store))},store:Vs(e)};return t}function Ni(e,t,n,r={}){function a(i){if(r.capture||Ir.call(t,i),!i.cancelBubble)return Yt(()=>n?.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Xe(()=>{t.addEventListener(e,a,r)}):t.addEventListener(e,a,r),a}function se(e,t,n,r,a){var i={capture:r,passive:a},l=Ni(e,t,n,i);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Hn(()=>{t.removeEventListener(e,l,i)})}function Kn(e,t,n){(t[ln]??={})[e]=n}function Yn(e){for(var t=0;t<e.length;t++)Mi.add(e[t]);for(var n of Rr)n(e)}function Ir(e){var t=this,n=t.ownerDocument,r=e.type,a=e.composedPath?.()||[],i=a[0]||e.target;vr=e,pr||(pr=!0,setTimeout(()=>{pr=!1,vr=null}));var l=0,s=vr===e&&e[ln];if(s){var u=a.indexOf(s);if(u!==-1&&(t===document||t===window)){e[ln]=t;return}var c=a.indexOf(t);if(c===-1)return;u<=c&&(l=u)}if(i=a[l]||e.target,i!==t){zt(e,"currentTarget",{configurable:!0,get(){return i||n}});var d=L,h=$;Ne(null),rt(null);try{for(var v,g=[];i!==null&&i!==t;){try{var b=i[ln]?.[r];b!=null&&(!i.disabled||e.target===i)&&b.call(i,e)}catch(x){v?g.push(x):v=x}if(e.cancelBubble)break;l++,i=l<a.length?a[l]:null}if(v){for(let x of g)queueMicrotask(()=>{throw x});throw v}}finally{e[ln]=t,delete e.currentTarget,Ne(d),rt(h)}}}function sl(e){return ol?.createHTML(e)??e}function Vi(e){var t=qr("template");return t.innerHTML=sl(e.replaceAll("<!>","<!---->")),t.content}function Re(e,t){var n=$;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function ee(e,t){var n=(t&Ss)!==0,r=(t&Cs)!==0,a,i=!e.startsWith("<!>");return()=>{if(T)return Re(M,null),M;a===void 0&&(a=Vi(i?e:"<!>"+e),n||(a=Ee(a)));var l=r||ai?document.importNode(a,!0):a.cloneNode(!0);if(n){var s=Ee(l),u=l.lastChild;Re(s,u)}else Re(l,l);return l}}function ll(e,t,n="svg"){var r=!e.startsWith("<!>"),a=`<${n}>${r?e:"<!>"+e}</${n}>`,i;return()=>{if(T)return Re(M,null),M;if(!i){var l=Vi(a),s=Ee(l);i=Ee(s)}var u=i.cloneNode(!0);return Re(u,u),u}}function na(e,t){return ll(e,t,"svg")}function Tn(e=""){if(!T){var t=Be(e+"");return Re(t,t),t}var n=M;return n.nodeType!==gn?(n.before(n=Be()),_e(n)):jn(n),Re(n,n),n}function Ma(){if(T)return Re(M,null),M;var e=document.createDocumentFragment(),t=document.createComment(""),n=Be();return e.append(t,n),Re(t,n),e}function D(e,t){if(T){var n=$;((n.f&$t)===0||n.nodes.end===null)&&(n.nodes.end=M),Tt();return}e!==null&&e.before(t)}function cl(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}function fl(e){return ul.includes(e)}function hl(e){return e=e.toLowerCase(),dl[e]??e}function pl(e){return vl.includes(e)}function bl(e,t,n,r){new Or(e,t,n,r)}function Je(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[Er]??=e.nodeValue)&&(e[Er]=n,e.nodeValue=`${n}`)}function Ui(e,t){return Fi(e,t)}function ml(e,t){Cr(),t.intro=t.intro??!1;let n=t.target,r=T,a=M;try{for(var i=Ee(n);i&&(i.nodeType!==bn||i.data!==Hr);)i=at(i);if(!i)throw At;Qe(!0),_e(i);let l=Fi(e,{...t,anchor:i});return Qe(!1),l}catch(l){if(l instanceof Error&&l.message.split(`
`).some(s=>s.startsWith("https://svelte.dev/e/")))throw l;return l!==At&&console.warn("Failed to hydrate: ",l),t.recover===!1&&ws(),Cr(),Ps(n),Qe(!1),Ui(e,t)}finally{Qe(r),_e(a)}}function Fi(e,{target:t,anchor:n,props:r={},events:a,context:i,intro:l=!0,transformError:s}){Cr();var u=void 0,c=el(()=>{var d=n??t.appendChild(Be());bl(d,{pending:()=>{}},g=>{ct({});var b=me;if(i&&(b.c=i),a&&(r.$$events=a),T&&Re(g,null),u=e(g,r)||Br(),T&&($.nodes.end=M,M===null||M.nodeType!==bn||M.data!==Xa))throw mn(),At;ut()},s);var h=new Set,v=g=>{for(var b=0;b<g.length;b++){var x=g[b];if(!h.has(x)){h.add(x);var O=pl(x);for(let ne of[t,document]){var B=$n.get(ne);B===void 0&&(B=new Map,$n.set(ne,B));var F=B.get(x);F===void 0?(ne.addEventListener(x,Ir,{passive:O}),B.set(x,1)):B.set(x,F+1)}}}};return v(as(Mi)),Rr.add(v),()=>{for(var g of h)for(let O of[t,document]){var b=$n.get(O),x=b.get(g);--x==0?(O.removeEventListener(g,Ir),b.delete(g),b.size===0&&$n.delete(O)):b.set(g,x)}Rr.delete(v),d!==n&&d.parentNode?.removeChild(d)}});return Lr.set(u,c),u}function yl(e,t){let n=Lr.get(e);return n?(Lr.delete(e),n(t)):Promise.resolve()}function wl(e,t,...n){var r=new Kt(e);kn(()=>{let a=t()??null;r.ensure(a,a&&(i=>a(i,...n)))},pt)}function ra(e){me===null&&vs(),xe(()=>{let t=_n(e);if(typeof t=="function")return t})}function oe(e,t,n=!1){var r;T&&(r=M,Tt());var a=new Kt(e),i=n?pt:0;function l(s,u){if(T){var c=ni(r);if(s!==parseInt(c.substring(1))){var d=Yr();_e(d),a.anchor=d,Qe(!1),a.ensure(s,u),Qe(!0);return}}a.ensure(s,u)}kn(()=>{var s=!1;t((u,c=0)=>{s=!0,l(c,u)}),s||l(-1,null)},i)}function kl(e,t,n){T&&Tt();var r=new Kt(e);kn(()=>{var a=t();a!==a&&(a=_l),r.ensure(a,n)})}function zi(e,t,n=!1,r=!1,a=!1,i=!1){var l=e,s="";if(n){var u=e;T&&(l=_e(Ee(u)))}be(()=>{var c=$;if(s===(s=t()??"")){T&&Tt();return}if(n&&!T){c.nodes=null,u.innerHTML=s,s!==""&&Re(Ee(u),u.lastChild);return}if(c.nodes!==null&&(Ii(c.nodes.start,c.nodes.end),c.nodes=null),s!==""){if(T){M.data;for(var d=Tt(),h=d;d!==null&&(d.nodeType!==bn||d.data!=="");)h=d,d=at(d);if(d===null)throw mn(),At;Re(M,h),l=_e(d);return}var v=r?As:a?Ts:void 0,g=qr(r?"svg":a?"math":"template",v);g.innerHTML=s;var b=r||a?g:g.content;if(Re(Ee(b),b.lastChild),r||a)for(;Ee(b);)l.before(Ee(b));else l.before(b)}})}function xl(e,t,n){var r;T&&(r=M,Tt());var a=new Kt(e);kn(()=>{var i=t()??null;if(T){var l=ni(r),s=l===Hr,u=i!==null;if(s!==u){var c=Yr();_e(c),a.anchor=c,Qe(!1),a.ensure(i,i&&(d=>n(d,i))),Qe(!0);return}}a.ensure(i,i&&(d=>n(d,i)))},pt)}function El(e,t){var n=void 0,r;$i(()=>{n!==(n=t())&&(r&&(pe(r),r=null),n&&(r=Ve(()=>{ea(()=>n(e))})))})}function ji(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=ji(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Sl(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=ji(e))&&(r&&(r+=" "),r+=t);return r}function Cl(e){return typeof e=="object"?Sl(e):e??""}function Al(e,t,n){var r=e==null?"":""+e;if(n){for(var a of Object.keys(n))if(n[a])r=r?r+" "+a:a;else if(r.length)for(var i=a.length,l=0;(l=r.indexOf(a,l))>=0;){var s=l+i;(l===0||Na.includes(r[l-1]))&&(s===r.length||Na.includes(r[s]))?r=(l===0?"":r.substring(0,l))+r.substring(s+1):l=s}}return r===""?null:r}function Va(e,t=!1){var n=t?" !important;":";",r="";for(var a of Object.keys(e)){var i=e[a];i!=null&&i!==""&&(r+=" "+a+": "+i+n)}return r}function gr(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Tl(e,t){if(t){var n="",r,a;if(Array.isArray(t)?(r=t[0],a=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var i=!1,l=0,s=!1,u=[];r&&u.push(...Object.keys(r).map(gr)),a&&u.push(...Object.keys(a).map(gr));var c=0,d=-1;let x=e.length;for(var h=0;h<x;h++){var v=e[h];if(s?v==="/"&&e[h-1]==="*"&&(s=!1):i?i===v&&(i=!1):v==="/"&&e[h+1]==="*"?s=!0:v==='"'||v==="'"?i=v:v==="("?l++:v===")"&&l--,!s&&i===!1&&l===0){if(v===":"&&d===-1)d=h;else if(v===";"||h===x-1){if(d!==-1){var g=gr(e.substring(c,d).trim());if(!u.includes(g)){v!==";"&&h++;var b=e.substring(c,h).trim();n+=" "+b+";"}}c=h+1,d=-1}}}}return r&&(n+=Va(r)),a&&(n+=Va(a,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function $l(e,t,n,r,a,i){var l=e[kr];if(T||l!==n||l===void 0){var s=Al(n,r,i);(!T||s!==e.getAttribute("class"))&&(s==null?e.removeAttribute("class"):t?e.className=s:e.setAttribute("class",s)),e[kr]=n}else if(i&&a!==i)for(var u in i){var c=!!i[u];(a==null||c!==!!a[u])&&e.classList.toggle(u,c)}return i}function br(e,t={},n,r){for(var a in n){var i=n[a];t[a]!==i&&(n[a]==null?e.style.removeProperty(a):e.style.setProperty(a,i,r))}}function Rl(e,t,n,r){var a=e[xr];if(T||a!==t){var i=Tl(t,r);(!T||i!==e.getAttribute("style"))&&(i==null?e.removeAttribute("style"):e.style.cssText=i),e[xr]=t}else r&&(Array.isArray(r)?(br(e,n?.[0],r[0]),br(e,n?.[1],r[1],"important")):br(e,n,r));return r}function Hi(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Ua(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,Bi(e,!n||"__value"in e))}function Bi(e,t){var n=e.__defaultValue,r=e.multiple,a=r?n??[]:null;if(!(r&&!Fr(a))){var i=e.selectedIndex,l=t&&r?new Set(e.selectedOptions):null;for(var s of e.options){var u=Dr(s);Hi(s,r?a.includes(u):ri(u,n))}if(t)if(l!==null)for(s of e.options){var c=l.has(s);s.selected!==c&&(s.selected=c)}else e.selectedIndex!==i&&(e.selectedIndex=i)}}function Pr(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Fr(t))return Os();for(var r of e.options)r.selected=t.includes(Dr(r));return}for(r of e.options){var a=Dr(r);if(ri(a,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Il(e){var t=new MutationObserver(n=>{n.every(Ol)||("__defaultValue"in e&&Bi(e,!1),"__value"in e&&Pr(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Hn(()=>{t.disconnect()})}function Dr(e){return"__value"in e?e.__value:e.value}function Ol(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}function aa(e){if(T){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var r=e.value;U(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var a=e.checked;U(e,"checked",null),e.checked=a}}};e[cn]=n,Xe(n),ui()}}function Ml(e,t){var n=ia(e);n.value===(n.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==Dl)||(e.value=t??"")}function U(e,t,n,r){var a=ia(e);T&&(a[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName===Ll)||a[t]!==(a[t]=n)&&(t==="loading"&&(e[ds]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Gi(e).has(t)?e[t]=n:e.setAttribute(t,n))}function Nl(e,t,n,r,a=!1,i=!1){T&&a&&e.nodeName===Fa&&("defaultValue"in n||"defaultChecked"in n||aa(e));var l=ia(e),s=l[Ki],u=!l[Yi];let c=T&&s;c&&Qe(!1);var d=t||{},h=e.nodeName===Pl,v=e.nodeName===qi;for(var g in t)!(g in n)&&g[0]+g[1]!=="$$"&&(n[g]=null);n.class?n.class=Cl(n.class):n[rn]&&(n.class=null),n[an]&&(n.style??=null);var b=Gi(e);if(e.nodeName===Fa&&"type"in n&&("value"in n||"__value"in n)){var x=n.type;(x!==d.type||x===void 0&&e.hasAttribute("type"))&&(d.type=x,U(e,"type",x))}for(let k in n){let P=n[k];if(h&&k==="value"&&P==null){e.value=e.__value="",d[k]=P;continue}if(k==="class"){var O=e.namespaceURI==="http://www.w3.org/1999/xhtml";$l(e,O,P,r,t?.[rn],n[rn]),d[k]=P,d[rn]=n[rn];continue}if(k==="style"){Rl(e,P,t?.[an],n[an]),d[k]=P,d[an]=n[an];continue}var B=d[k];if(!(P===B&&!(P===void 0&&e.hasAttribute(k)))){d[k]=P;var F=k[0]+k[1];if(F!=="$$")if(F==="on"){let X={},H="$$"+k,N=k.slice(2);var ne=fl(N);if(cl(N)&&(N=N.slice(0,-7),X.capture=!0),!ne&&B){if(P!=null)continue;e.removeEventListener(N,d[H],X),d[H]=null}if(ne)Kn(N,e,P),Yn([N]);else if(P!=null){let Ce=function(ge){d[k].call(this,ge)};var ie=Ce;d[H]=Ni(N,e,Ce,X)}}else if(k==="style")U(e,k,P);else if(k==="autofocus")Fs(e,!!P);else if(!s&&(k==="__value"||k==="value"&&P!=null))e.value=e.__value=P;else if(k==="selected"&&h)Hi(e,P);else{var j=k;u||(j=hl(j));var Ye=j==="defaultValue"||j==="defaultChecked";if(v&&j==="defaultValue")continue;if(P==null&&!s&&!Ye)if(l[k]=null,j==="value"||j==="checked"){let X=e,H=t===void 0;if(j==="value"){let N=X.defaultValue;X.removeAttribute(j),X.defaultValue=N,X.value=X.__value=H?N:null}else{let N=X.defaultChecked;X.removeAttribute(j),X.defaultChecked=N,X.checked=H?N:!1}}else e.removeAttribute(k);else Ye||(s||typeof P!="string")&&b.has(j)?(e[j]=P,j in l&&(l[j]=re)):typeof P!="function"&&U(e,j,P)}}}return c&&Qe(!0),d}function qn(e,t,n=[],r=[],a=[],i,l=!1,s=!1){fi(a,n,r,u=>{var c=void 0,d={},h=e.nodeName===qi,v=!1;if($i(()=>{var b=t(...u.map(o)),x=Nl(e,c,b,i,l,s);if(v&&h){var O=e;"defaultValue"in b&&Ua(O,b.defaultValue),"value"in b&&Pr(O,b.value)}for(let F of Object.getOwnPropertySymbols(d))b[F]||pe(d[F]);for(let F of Object.getOwnPropertySymbols(b)){var B=b[F];F.description===$s&&(!c||B!==c[F])&&(d[F]&&pe(d[F]),d[F]=Ve(()=>El(e,()=>B))),x[F]=B}c=x}),h){var g=e;ea(()=>{var b=c;"defaultValue"in b&&Ua(g,b.defaultValue),Pr(g,b.value,!0),Il(g)})}v=!0})}function ia(e){return e[Ga]??={[Ki]:e.nodeName.includes("-"),[Yi]:e.namespaceURI===Qa}}function Gi(e){var t=e.getAttribute("is")||e.nodeName,n=za.get(t);if(n)return n;za.set(t,n=new Set);for(var r,a=e,i=Element.prototype;i!==a;){r=is(a);for(var l in r)r[l].set&&l!=="innerHTML"&&l!=="textContent"&&l!=="innerText"&&n.add(l);a=Ka(a)}return n}function Vl(e,t,n=t){var r=new WeakSet;zs(e,"input",async a=>{var i=a?e.defaultValue:e.value;if(i=mr(e)?yr(i):i,n(i),R!==null&&r.add(R),await xt(),i!==(i=t())){var l=e.selectionStart,s=e.selectionEnd,u=e.value.length;if(e.value=i??"",s!==null){var c=e.value.length;l===s&&s===u&&c>u?(e.selectionStart=c,e.selectionEnd=c):(e.selectionStart=l,e.selectionEnd=Math.min(s,c))}}}),(T&&e.defaultValue!==e.value||_n(t)==null&&e.value)&&(n(mr(e)?yr(e.value):e.value),R!==null&&r.add(R)),Bn(()=>{var a=t();if(e===document.activeElement){var i=R;if(r.has(i))return}mr(e)&&a===yr(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function mr(e){var t=e.type;return t==="number"||t==="range"}function yr(e){return e===""?null:+e}function wr(e,t){return e===t||e?.[Ft]===t}function bt(e=Br(),t,n,r){var a=me.r,i=$;return ea(()=>{var l,s;return Bn(()=>{l=s,s=[],_n(()=>{wr(n(...s),e)||(t(e,...s),l&&wr(n(...l),e)&&t(null,...l))})}),()=>{let u=i;for(;u!==a&&u.parent!==null&&u.parent.f&Dn;)u=u.parent;let c=()=>{s&&wr(n(...s),e)&&t(null,...s)},d=u.teardown;u.teardown=()=>{c(),d?.()}}}),e}function Gn(e,t,n){return new Proxy({props:e,exclude:t},Ul)}function Z(e,t,n,r){var a=r,i=!0,l=()=>(i&&(i=!1,a=r),a),s;s=e[t],s===void 0&&r!==void 0&&(s=l());var u;u=()=>{var v=e[t];return v===void 0?l():(i=!0,v)};var c=!1,d=Wr(()=>(c=!1,u())),h=$;return(function(v,g){if(arguments.length>0){let b=g?o(d):v;return w(d,b),c=!0,a!==void 0&&(a=b),v}return lt&&c||(h.f&$e)!==0?d.v:o(d)})}function Fl(e){return new Mr(e)}function On(e,t,n,r){let a=n[e]?.type;if(t=a==="Boolean"&&typeof t!="boolean"?t!=null:t,!r||!n[e])return t;if(r==="toAttribute")switch(a){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(a){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function zl(e){let t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}function mt(e,t,n,r,a,i){let l=class extends Wi{constructor(){super(e,n,a),this.$$p_d=t}static get observedAttributes(){return Pn(t).map(s=>(t[s].attribute||s).toLowerCase())}};return Pn(t).forEach(s=>{zt(l.prototype,s,{get(){return this.$$c&&s in this.$$c?this.$$c[s]:this.$$d[s]},set(u){u=On(s,u,t),this.$$d[s]=u;var c=this.$$c;if(c){var d=Vt(c,s)?.get;d?c[s]=u:c.$set({[s]:u})}}})}),r.forEach(s=>{zt(l.prototype,s,{get(){return this.$$c?.[s]}})}),e.element=l,l}function Ji(e,t){ct(t,!0);let n=Z(t,"loading"),r=Gn(t,jl),a;function i(){a?.click()}var l={get loading(){return n()},set loading(d){n(d),Y()}},s=Hl(),u=de(s);qn(u,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),bt(u,d=>a=d,()=>a);var c=J(u,2);return Kr(2),ae(s),be(()=>U(s,"data-loading",n())),Kn("click",c,i),D(e,s),ut(l)}function Zi(e,t){ct(t,!0);let n=Z(t,"loading"),r=Gn(t,Bl);var a={get loading(){return n()},set loading(s){n(s),Y()}},i=Kl(),l=de(i);return qn(l,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),Kr(2),ae(i),be(()=>U(i,"data-loading",n())),D(e,i),ut(a)}function oa(e,t){ct(t,!0);let n=Z(t,"strings"),r="https://altcha.org";var a={get strings(){return n()},set strings(s){n(s),Y()}},i=Yl(),l=de(i);return U(l,"href",r),ae(i),be(()=>U(l,"aria-label",n().ariaLinkLabel)),D(e,i),ut(a)}function Nr(e,t){ct(t,!0);let n=Z(t,"logo"),r=Z(t,"strings");var a={get logo(){return n()},set logo(c){n(c),Y()},get strings(){return r()},set strings(c){r(c),Y()}},i=ql(),l=de(i);zi(l,()=>r().footer,!0),ae(l);var s=J(l,2);{var u=c=>{oa(c,{get strings(){return r()}})};oe(s,c=>{n()&&c(u)})}return ae(i),D(e,i),ut(a)}function Xi(e,t){ct(t,!0);let n=Z(t,"loading"),r=Gn(t,Gl),a;function i(){a?.click()}var l={get loading(){return n()},set loading(d){n(d),Y()}},s=Wl(),u=de(s);qn(u,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),bt(u,d=>a=d,()=>a);var c=J(u,2);return ae(s),be(()=>U(s,"data-loading",n())),Kn("click",c,i),D(e,s),ut(l)}function Qi(e,t){ct(t,!0);let n=Z(t,"audioUrl"),r=Z(t,"codeChallenge"),a=Z(t,"config"),i=Z(t,"imageUrl"),l=Z(t,"onCancel"),s=Z(t,"onReload"),u=Z(t,"onSubmit"),c=Z(t,"strings"),d=I(void 0),h=I(void 0),v=I(void 0),g=I(!1),b=I(""),x=I(!1);ra(()=>(a().disableAutoFocus||xt().then(()=>{o(v)?.focus()}),()=>{o(h)&&(o(h).pause(),w(h,void 0))}));function O(){w(d,ve.PAUSED,!0)}function B(S){w(d,ve.ERROR,!0)}function F(){w(d,ve.READY,!0)}function ne(){w(d,ve.LOADING,!0)}function ie(){w(d,ve.PLAYING,!0)}function j(){w(d,ve.PAUSED,!0)}function Ye(S){S.code==="Space"?(S.preventDefault(),S.stopPropagation(),X()):S.code==="Escape"&&(S.preventDefault(),S.stopPropagation(),l()?.())}function k(S){S.preventDefault(),S.stopPropagation(),u()?.(o(b))}function P(S){S.play().catch(q=>{if(!(q instanceof DOMException&&q.name==="AbortError"))throw q})}function X(){o(h)?o(d)===ve.LOADING||(o(h).paused?(n()&&o(h).src!==n()&&(o(h).src=n()),o(h).currentTime=0,P(o(h))):o(h).pause()):(w(x,!0),requestAnimationFrame(()=>{o(h)&&n()&&(o(h).src=n(),P(o(h)))}))}var H={get audioUrl(){return n()},set audioUrl(S){n(S),Y()},get codeChallenge(){return r()},set codeChallenge(S){r(S),Y()},get config(){return a()},set config(S){a(S),Y()},get imageUrl(){return i()},set imageUrl(S){i(S),Y()},get onCancel(){return l()},set onCancel(S){l(S),Y()},get onReload(){return s()},set onReload(S){s(S),Y()},get onSubmit(){return u()},set onSubmit(S){u(S),Y()},get strings(){return c()},set strings(S){c(S),Y()}},N=rc(),Ce=de(N),ge=de(Ce);{var Ie=S=>{var q=Jl(),wt=Mt(q,!0);be(()=>Je(wt,c().verificationRequired)),D(S,q)};oe(ge,S=>{a().codeChallengeDisplay!=="standard"&&S(Ie)})}var W=J(ge,2),it=Mt(W,!0),E=J(W,2),ue=J(E,2),Q=de(ue);aa(Q),Q.disabled=o(g),bt(Q,S=>w(v,S),()=>o(v));var m=J(Q,2);{var Jt=S=>{var q=tc(),wt=de(q);{var tn=ye=>{var Ge=Zl();D(ye,Ge)},nr=ye=>{var Ge=Xl();D(ye,Ge)},rr=ye=>{var Ge=Ql();D(ye,Ge)},ar=ye=>{var Ge=ec();D(ye,Ge)};oe(wt,ye=>{o(d)===ve.LOADING?ye(tn):o(d)===ve.ERROR?ye(nr,1):o(d)===ve.PLAYING?ye(rr,2):ye(ar,-1)})}ae(q),be(()=>{U(q,"title",c().getAudioChallenge),q.disabled=o(d)===ve.LOADING||o(d)===ve.ERROR,U(q,"aria-label",o(d)===ve.LOADING?c().loading:c().getAudioChallenge)}),se("click",q,()=>X(),!0),D(S,q)};oe(m,S=>{r().audio&&S(Jt)})}var Zt=J(m,2);ae(ue);var qe=J(ue,2),Xt=de(qe),En=Mt(Xt,!0),yt=J(Xt,2),Qt=Mt(yt,!0);ae(qe),ae(Ce);var en=J(Ce,2);{var ke=S=>{var q=nc();bt(q,wt=>w(h,wt),()=>o(h)),se("error",q,B),se("loadstart",q,ne),se("canplay",q,F),se("pause",q,j),se("playing",q,ie),se("ended",q,O),D(S,q)};oe(en,S=>{o(x)&&S(ke)})}return ae(N),be(()=>{Je(it,c().enterCodeFromImage),U(E,"src",i()),U(Q,"minlength",r().length||1),U(Q,"maxlength",r().length),U(Q,"placeholder",c().enterCode),U(Q,"aria-label",o(d)===ve.LOADING?c().loading:o(d)===ve.PLAYING?"":c().enterCodeAria),U(Q,"aria-live",o(d)?"assertive":"polite"),U(Q,"aria-busy",o(d)===ve.LOADING),U(Zt,"title",c().reload),U(Zt,"aria-label",c().reload),U(Xt,"aria-label",c().verify),Je(En,c().verify),U(yt,"aria-label",c().cancel),Je(Qt,c().cancel)}),se("submit",Ce,k,!0),Kn("keydown",Q,Ye),Vl(Q,()=>o(b),S=>w(b,S)),se("click",Zt,()=>s()?.(),!0),se("click",yt,()=>l()?.(),!0),D(e,N),ut(H)}function Vr(e,t){ct(t,!0);let n=Z(t,"anchor"),r=Z(t,"children"),a=Z(t,"display",7,"standard"),i=Z(t,"backdrop",7,!1),l=Z(t,"onClickOutside"),s=Z(t,"onClickOutsideDelay",7,600),u=Z(t,"onClose"),c=Z(t,"placement",7,"auto"),d=Z(t,"updateUISignal"),h=Z(t,"variant",7,"neutral"),v=Gn(t,ac),g=I(void 0),b=I(void 0),x=I(!1),O=I(0);xe(()=>{c()!=="auto"&&w(x,c()==="top")}),xe(()=>{d()&&j()}),ra(()=>{let E=a()==="bottomsheet"||a()==="overlay";return E&&(o(b)&&document.body.append(o(b)),o(g)&&document.body.append(o(g))),j(),xt().then(()=>{w(O,Date.now(),!0)}),()=>{E&&(o(b)&&document.body.removeChild(o(b)),o(g)&&document.body.removeChild(o(g)))}});function B(){u()?.()}function F(E){let ue=E.target;!o(g)?.contains(ue)&&(!s()||o(O)+s()<Date.now())&&l()?.()}function ne(){j()}function ie(){j()}function j(){if(n()&&c()==="auto"&&o(g)){let E=n().getBoundingClientRect(),Q=document.documentElement.clientHeight-(E.top+E.height)<o(g).clientHeight;o(x)!==Q&&w(x,Q)}}var Ye={get anchor(){return n()},set anchor(E){n(E),Y()},get children(){return r()},set children(E){r(E),Y()},get display(){return a()},set display(E="standard"){a(E),Y()},get backdrop(){return i()},set backdrop(E=!1){i(E),Y()},get onClickOutside(){return l()},set onClickOutside(E){l(E),Y()},get onClickOutsideDelay(){return s()},set onClickOutsideDelay(E=600){s(E),Y()},get onClose(){return u()},set onClose(E){u(E),Y()},get placement(){return c()},set placement(E="auto"){c(E),Y()},get updateUISignal(){return d()},set updateUISignal(E){d(E),Y()},get variant(){return h()},set variant(E="neutral"){h(E),Y()}},k=lc();se("click",Et,F,!0),se("resize",Et,ne),se("scroll",Et,ie);var P=Dt(k);{var X=E=>{var ue=ic();bt(ue,Q=>w(b,Q),()=>o(b)),D(E,ue)};oe(P,E=>{i()&&E(X)})}var H=J(P,2);qn(H,()=>({...v,class:`altcha-popover ${(t.class||"")??""}`,"data-popover":!0,"data-variant":h(),"data-top":o(x),"data-display":a()}));var N=de(H);{var Ce=E=>{var ue=oc();D(E,ue)};oe(N,E=>{a()==="standard"&&E(Ce)})}var ge=J(N,2);{var Ie=E=>{var ue=sc();se("click",ue,B,!0),D(E,ue)};oe(ge,E=>{a()!=="standard"&&E(Ie)})}var W=J(ge,2),it=de(W);return wl(it,()=>r()??ht),ae(W),ae(H),bt(H,E=>w(g,E),()=>o(g)),D(e,k),ut(Ye)}function cc(e){return Array.from(new Uint8Array(e)).map(t=>t.toString(16).padStart(2,"0")).join("")}function uc(e,t="altcha-css",n){if(typeof document<"u"&&document&&!document.getElementById(t)){let r=document.createElement("style");r.id=t,r.textContent=e;let a=document.currentScript?.nonce??document.querySelector('meta[name="csp-nonce"]')?.content;a&&(r.nonce=a),document.head.appendChild(r)}}async function eo(e){let{challenge:t,concurrency:n=navigator.hardwareConcurrency,controller:r=new AbortController,createWorker:a,onOutOfMemory:i=v=>v>1?Math.floor(v/2):0,counterMode:l,timeout:s=9e4}=e,u=Math.min(16,Math.max(1,n)),c=[],d=()=>{for(let v of c)v.terminate()};for(let v=0;v<u;v++)c.push(await a(t.parameters.algorithm));let h=null;try{h=await Promise.race(c.map((v,g)=>(r.signal.addEventListener("abort",()=>{v.postMessage({type:"abort"})}),new Promise((b,x)=>{v.addEventListener("error",O=>{x(O)}),v.addEventListener("message",O=>{if(O.data){for(let B of c)B!==v&&B.postMessage({type:"abort"});if(O.data.error)return x(new Error(O.data.error))}b(O.data)}),v.postMessage({challenge:t,counterMode:l,counterStart:g,counterStep:u,timeout:s,type:"work"})}))))}catch(v){if(v instanceof Error&&!!v?.message?.includes("Out of memory")&&i){d();let b=i(u);if(b)return eo({...e,challenge:t,controller:r,concurrency:b,createWorker:a})}throw v}finally{d()}return r.signal.aborted?null:h||null}function yc(e,t){ct(t,!0);let n=()=>Aa(d,"$altchaDefaults",a),r=()=>Aa(b,"$altchaI18nStore",a),[a,i]=Us(),l='input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])',s='input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])',u=["ar","fa","he","ur"],{isSecureContext:c}=globalThis,{store:d}=globalThis.$altcha.defaults,h=navigator.hardwareConcurrency||2,v=navigator.deviceMemory||0,g=v&&v<=4?Math.min(4,h):h,b=globalThis.$altcha.i18n.store,x=t.$$host,O=(f,p)=>{xt().then(()=>{x?.dispatchEvent(new CustomEvent(f,{detail:p}))})},B=null,F=I(st(new URL(location.origin))),ne=I(!1),ie=I(null),j=I(null),Ye=I(null),k=I(st(V.UNVERIFIED)),P=I(void 0),X=I(void 0),H=I(null),N=I(void 0),Ce=I(null),ge=I(null),Ie=I(null),W=I(null),it=I(st([])),E=I(0),ue=I(st({})),Q=I(!0),m=we(()=>({fetch:(f,p)=>fetch(f,p),audioChallengeLanguage:"",auto:"off",barPlacement:"bottom",challenge:"",codeChallenge:null,codeChallengeDisplay:"standard",credentials:null,debug:!1,disableAutoFocus:!1,display:"standard",floatingAnchor:"",floatingOffset:8,floatingPersist:!1,floatingPlacement:"auto",hideFooter:!1,hideLogo:!1,humanInteractionSignature:!0,language:"",mockError:!1,minDuration:500,overlayContent:"",name:"altcha",popoverPlacement:"auto",retryOnOutOfMemoryError:!0,setCookie:null,serverVerificationFields:!1,serverVerificationTimeZone:!1,test:!1,timeout:9e4,type:"checkbox",validationMessage:"",verifyFunction:null,verifyUrl:"",workers:g,...n(),...o(ue)})),Jt=we(()=>`altcha-checkbox-${t.id||Math.floor(Math.random()*1e12).toString(16)}`),Zt=we(()=>mo(o(m).type)),qe=we(()=>o(m).auto),Xt=we(()=>o(k)===V.VERIFYING),En=we(()=>!o(m).hideFooter),yt=we(()=>!o(m).hideLogo&&o(m).display!=="bar"),Qt=we(()=>yo(r(),[o(m).language,document.documentElement.lang,...navigator.languages])),en=we(()=>u.includes(o(Qt).language)?"rtl":void 0),ke=we(()=>({...o(Qt).strings})),S=we(()=>o(ie)?.audio?.match(/^(https?:)?\//)?Sn(o(ie).audio,o(F),{language:o(m).audioChallengeLanguage||o(Qt).language}).toString():o(ie)?.audio),q=we(()=>o(ie)?.image?.match(/^(https?:)?\//)?Sn(o(ie).image,o(F)):o(ie)?.image);xe(()=>{nn({auto:t.auto,challenge:t.challenge,display:t.display,language:t.language,name:t.name,type:t.type,workers:t.workers})}),xe(()=>{t.theme?x?.setAttribute("theme",t.theme):x?.removeAttribute("theme")}),xe(()=>{if(t.configuration)try{nn(JSON.parse(t.configuration))}catch{K("unable to parse the `configuration` attribute (JSON expected)")}}),xe(()=>{o(Ye)!==o(m).display&&Cn(o(m).display)}),xe(()=>{o(ne)&&o(k)===V.VERIFYING&&w(ne,!1)}),xe(()=>{!o(ne)&&o(k)===V.VERIFIED&&w(ne,!0)}),xe(()=>{if(!o(ne)){let f=ir();f&&f.checked&&(f.checked=!1)}}),xe(()=>{o(k)===V.VERIFIED&&ir()?.setCustomValidity("")}),xe(()=>{if(o(qe)==="onload"){let f=setTimeout(()=>{It()},1);return()=>{f&&clearTimeout(f)}}}),xe(()=>{o(ge)&&K("error:",o(ge))}),xe(()=>{o(W)&&o(m).setCookie&&Lo(o(W),o(m).setCookie)}),ra(()=>(K("mounted","3.2.4"),x&&globalThis.$altcha.instances.add(x),w(H,o(N)?.closest("form"),!0),o(H)?.addEventListener("reset",ha),o(H)?.addEventListener("submit",va,{capture:!0}),o(H)?.addEventListener("focusin",da),wt(),o(m).humanInteractionSignature&&(K("human interaction signature enabled"),B=new Ur),O("load"),c||K("secure context (HTTPS) required"),()=>{nr(),x&&globalThis.$altcha.instances.delete(x),o(Ie)&&clearTimeout(o(Ie)),o(H)?.removeEventListener("reset",ha),o(H)?.removeEventListener("submit",va,{capture:!0}),o(H)?.removeEventListener("focusin",da),B?.destroy()}));function wt(){w(it,[...globalThis.$altcha.plugins].map(f=>new f(x)),!0),K("activating plugins",o(it).map(f=>f.constructor.name));for(let f of o(it))f.activate()}async function tn(f,...p){let y;for(let _ of o(it))y=await _[f].call(_,...p);return y}function nr(){for(let f of o(it))f.destroy()}function rr(f){let[p,y]=f.salt.split("?"),_={};if(y)try{Object.assign(_,Object.fromEntries(new URLSearchParams(y).entries()))}catch{}let A={codeChallenge:f.codeChallenge,parameters:{algorithm:f.algorithm,cost:1,data:_,expiresAt:_?.expires?parseInt(_.expires,10):void 0,keyLength:f.algorithm==="SHA-512"?64:f.algorithm==="SHA-384"?48:32,nonce:cc(new TextEncoder().encode(f.salt)),keyPrefix:f.challenge,salt:""},signature:f.signature};return Object.defineProperties(A,{_originalSalt:{enumerable:!1,value:f.salt,writable:!1},_version:{enumerable:!1,value:1,writable:!1}}),A}function ar(f,p){return{algorithm:f.parameters.algorithm,challenge:f.parameters.keyPrefix,number:p.counter,salt:"_originalSalt"in f?f._originalSalt:f.parameters.nonce,signature:f.signature,took:p.time||0}}async function ye(f){await new Promise(p=>setTimeout(p,f))}async function Ge(f=o(m).challenge,p){let y=await tn("onFetchChallenge",f),_=null;if(y!==void 0)return y;if(typeof f=="string")if(f.startsWith("{")){K("parsing JSON challenge");try{_=JSON.parse(f)}catch{throw new Error("Unable to parse JSON challenge.")}}else{K("fetching challenge from",p?.method||"GET",f),w(F,new URL(f,location.origin),!0);let A=await o(m).fetch(f,{credentials:o(m).credentials||void 0,...p});await ga(A);let C=A.headers.get("x-altcha-config");C&&Ro(C);let z=await A.json();if(z&&"his"in z&&z.his){if(K("requested HIS"),!B)throw new Error("Server requested HIS data but collector is disabled.");return Ge(Sn(z.his.url,o(F)),{body:JSON.stringify({his:B.export()}),headers:{"content-type":"application/json"},method:"POST"})}z&&"hisResult"in z&&z.hisResult&&K("HIS result",z.hisResult),_=z}else if(f&&typeof f=="object")try{_=JSON.parse(JSON.stringify(f))}catch{throw new Error("Unable to parse JSON challenge.")}if(go(_)&&(_=rr(_)),!bo(_))throw new Error("Challenge validation failed.");return _}function go(f){return typeof f=="object"&&"challenge"in f}function bo(f){return!!f&&typeof f=="object"&&"parameters"in f&&!!f.parameters&&typeof f.parameters=="object"&&"algorithm"in f.parameters&&"nonce"in f.parameters&&"salt"in f.parameters&&"keyPrefix"in f.parameters}function ir(){return document.getElementById(o(Jt))}function mo(f){switch(f){case"checkbox":return Ji;case"switch":return Xi;default:return Zi}}function yo(f,p){let y=Object.keys(f).map(A=>A.toLowerCase()),_=p.reduce((A,C)=>(C=C.toLowerCase(),A||(f[C]?C:null)||y.find(z=>C.split("-")[0]===z.split("-")[0])||null),null);return f[_||""]||(_="en"),{language:_,strings:f[_]}}function wo(f){switch(f){case"bar":return o(m).barPlacement||"bottom";case"floating":return o(m).floatingPlacement||"auto";default:return}}function _o(f){return[...o(H)?.querySelectorAll(l)||[]].reduce((y,_)=>{let A=_.name,C=_.value;return A&&C&&(y[A]=/\n/.test(C)?C.replace(new RegExp("(?<!\\r)\\n","g"),`\r
`):C),y},{})}function ko(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function Sn(f,p,y){let _=new URL(f,p);if(_.search||(_.search=p.search),y)for(let A in y)y[A]!==void 0&&y[A]!==null&&_.searchParams.set(A,y[A]);return _.toString()}function xo(f){!o(ne)&&f.currentTarget.checked?(f.preventDefault(),f.currentTarget.checked=!1,o(k)!==V.VERIFYING&&It()):f.currentTarget.checked||(f.preventDefault(),Oe())}function Eo(f){o(k)===V.VERIFYING?f.currentTarget.setCustomValidity(o(ke).waitAlert):o(m).validationMessage&&f.currentTarget.setCustomValidity(o(m).validationMessage)}function So(){Cn(o(m).display),Oe()}function Co(){An()}function Ao(f){let p=f.target;o(m).display==="floating"&&p&&!x?.contains(p)&&!p.hasAttribute("data-backdrop")&&!p.closest("[data-popover]")&&o(k)!==V.VERIFIED&&!o(m).floatingPersist&&or()}function da(f){o(qe)==="onfocus"&&o(k)===V.UNVERIFIED&&It()}function ha(){Cn(o(m).display),Oe()}function va(f){f.target?.getAttribute("data-code-challenge")!=="true"&&o(qe)==="onsubmit"&&o(k)===V.UNVERIFIED&&(f.preventDefault(),f.stopPropagation(),w(Ce,f.submitter,!0),sr(),It().then(y=>{y&&!o(ie)&&xt().then(()=>{pa(o(Ce))})}))}function To(f){f.persisted&&(Cn(o(m).display),Oe())}function $o(){An()}function Ro(f){try{let p=JSON.parse(f);p&&typeof p=="object"&&nn({serverVerificationFields:p?.sentinel?.fields,serverVerificationTimeZone:p?.sentinel?.timeZone,verifyUrl:p.verifyurl,...p})}catch(p){K("unable to configure from x-altcha-config header",p)}}function Io(f=20){if(!o(N))return;let p=o(m).floatingPlacement;if(!o(X)&&(w(X,(o(m).floatingAnchor instanceof HTMLElement?o(m).floatingAnchor:o(m).floatingAnchor?document.querySelector(o(m).floatingAnchor):o(H)?.querySelector(s))||o(H),!0),!o(X))){K("unable to find floating anchor element");return}let y=parseInt(o(m).floatingOffset,10)||12,_=o(X).getBoundingClientRect(),A=o(N).getBoundingClientRect(),C=document.documentElement.clientHeight,z=document.documentElement.clientWidth,Ae=!p||p==="auto"?_.bottom+A.height+y+f>C:p==="top",G=Math.max(f,Math.min(z-f-A.width,_.left+_.width/2-A.width/2));if(o(N).style.setProperty("--altcha-floating-left",`${G}px`),o(N).style.setProperty("--altcha-floating-top",Ae?`${_.top-(A.height+y)}px`:`${_.bottom+y}px`),o(N).setAttribute("data-floating-position",Ae?"top":"bottom"),o(P)){let fe=o(P).getBoundingClientRect();o(P).style.left=_.left-G+_.width/2-fe.width/2+"px"}}async function Oo(f,p){let y=await tn("onRequestServerVerification",f,p);if(y!==void 0)return y;if(K("requesting server verification from",o(m).verifyUrl),!o(m).verifyUrl)throw new Error("Parameter verifyUrl must be set for server verification.");let _=await o(m).fetch(Sn(o(m).verifyUrl,o(F)),{body:JSON.stringify({code:p,fields:o(m).serverVerificationFields?_o():void 0,payload:f,timeZone:o(m).serverVerificationTimeZone?ko():void 0}),credentials:o(m).credentials||void 0,headers:{"Content-Type":"application/json"},method:"POST"});await ga(_);let A=await _.json();return A&&typeof A=="object"&&"payload"in A&&A.payload&&O("serververification",A),A}function pa(f){o(H)&&"requestSubmit"in o(H)?o(H).requestSubmit(f):o(H)?.reportValidity()&&(f?f.click():o(H).submit())}function Lo(f,p={}){let{domain:y,name:_=o(m).name,maxAge:A,path:C,sameSite:z,secure:Ae}=p,G=`${encodeURIComponent(_)}=${encodeURIComponent(f)}`;y&&(G+=`; Domain=${y}`),A!=null&&(G+=`; Max-Age=${A}`),C&&(G+=`; Path=${C}`),z&&(G+=`; SameSite=${z}`),Ae&&(G+="; Secure"),document.cookie=G}function Cn(f){switch(f){case"bar":case"floating":case"overlay":or(),(!o(qe)||o(qe)==="off")&&(o(ue).auto="onsubmit");break;case"standard":sr()}o(Ye)!==f&&w(Ye,f,!0)}function Po(f){o(Ie)&&clearTimeout(o(Ie));let p=()=>{o(k)!==V.UNVERIFIED?(w(ne,!1),Le(V.EXPIRED)):Oe(),O("expired")},y=f*1e3-Date.now();y>=1?w(Ie,setTimeout(p,y),!0):p()}async function ga(f){if(f.status>=400){if(f.headers.get("content-type")?.includes("/json")){let y;try{y=await f.json()}catch{}if(y&&"error"in y)throw new Error(`Server responded with ${f.status} - ${y.error}`)}throw new Error(`Server responded with ${f.status}.`)}let p=f.headers.get("content-type");if(!p||!p.includes("/json"))throw new Error(`Server responded with invalid content-type. Expected application/json, received ${p}.`)}async function ba(f){if(!o(W)){Le(V.ERROR,"Cannot verify code challenge without PoW payload.");return}Le(V.VERIFYING);let p=null;if(o(m).verifyUrl)p=await Oo(o(W),f);else if(o(m).verifyFunction)p=await o(m).verifyFunction(o(W),f);else{Le(V.ERROR,"Parameter verifyUrl is required for code challenge verification.");return}p?.payload&&(w(W,p.payload,!0),K("server payload",o(W))),p?.verified===!0?(K("verified"),Le(V.VERIFIED),O("verified",{payload:o(W)}),o(qe)==="onsubmit"&&xt().then(()=>{pa(o(Ce))})):Le(V.ERROR,p?.reason||"Verification failed."),o(m).disableAutoFocus||ir()?.focus()}function nn(f){Object.assign(o(ue),{...Object.fromEntries(Object.entries(f).filter(([p,y])=>y!==void 0))})}function Do(){return{...o(m)}}function Mo(){return o(k)}function or(){w(Q,!1)}function K(...f){(o(m).debug||f.some(p=>p instanceof Error))&&console[f[0]instanceof Error?"error":"log"]("ALTCHA",`[name=${o(m).name}]`,...f)}function Oe(f=V.UNVERIFIED,p=null){w(ne,!1),w(ge,p,!0),w(W,null),o(j)&&o(j).abort(),o(Ie)&&(clearTimeout(o(Ie)),w(Ie,null)),Le(f)}function Le(f,p=null){w(k,f,!0),w(ge,p,!0),O("statechange",{payload:o(W),state:o(k)})}function sr(){w(Q,!0),xt().then(()=>{An()})}function An(){if(o(m).display==="floating")return Io();w(E,o(E)+1)}async function It(f={}){let{concurrency:p=Math.max(1,o(m).workers),controller:y=new AbortController,minDuration:_=o(m).minDuration}=f,A=performance.now(),C=null,z=null,Ae=!1,G=await tn("onVerify",f);if(G!==void 0)return G;Oe(V.VERIFYING),w(j,y,!0);try{if(!c)throw new Error("Secure context (HTTPS) required.");if(o(m).mockError)throw new Error("Mock error.");if(o(m).test)return K("running test mode with null challenge"),await ye(Math.max(0,_-(performance.now()-A))),o(j)?.signal.aborted?(Oe(),null):(w(W,btoa(JSON.stringify({challenge:null,solution:null,test:!0})),!0),K("verified"),Le(V.VERIFIED),O("verified",{payload:o(W)}),{payload:o(W)});if(C=await Ge(),!C)throw new Error("Failed to fetch challenge.");K("challenge",C),"configuration"in C&&(K("re-configuring from challenge",C.configuration),nn(C.configuration)),C.parameters.expiresAt&&Po(C.parameters.expiresAt),Ae="_version"in C&&C._version===1;let fe=globalThis.$altcha.algorithms.get(C.parameters.algorithm);if(!fe)throw new Error(`Unsupported algorithm ${C.parameters.algorithm}.`);if(z=await eo({challenge:C,concurrency:p,controller:y,createWorker:fe,counterMode:Ae?"string":"uint32",onOutOfMemory:ft=>{if(K("out of memory error received"),O("outofmemory"),o(m).retryOnOutOfMemoryError&&ft>1){let dt=Math.floor(ft/2);return K(`retrying with ${dt} workers...`),dt}},timeout:o(m).timeout}),o(j)?.signal.aborted)return Oe(),null;if(!z)throw new Error("Failed to find solution.");K("solution",z),await ye(Math.max(0,_-(performance.now()-A))),w(ie,C.codeChallenge||o(m).codeChallenge||null,!0),Ae?w(W,btoa(JSON.stringify(ar(C,z))),!0):w(W,btoa(JSON.stringify({challenge:{parameters:C.parameters,signature:C.signature},solution:z})),!0),o(ie)?(K("requesting code verification"),Le(V.CODE),O("codechallenge",{codeChallenge:o(ie)})):o(m).verifyUrl?await ba():(K("verified"),Le(V.VERIFIED),O("verified",{payload:o(W)}))}catch(fe){return K("verification failed",fe),Le(V.ERROR,String(fe)),null}finally{w(j,null)}return{challenge:C,payload:o(W),solution:z}}var No={configure:nn,getConfiguration:Do,getState:Mo,hide:or,log:K,reset:Oe,setState:Le,show:sr,updateUI:An,verify:It},ma=mc();se("scroll",Sr,Co),se("click",Sr,Ao),se("pageshow",Et,To),se("resize",Et,$o);var ya=Dt(ma);{var Vo=f=>{var p=fc();D(f,p)};oe(ya,f=>{o(m).display==="overlay"&&o(Q)&&f(Vo)})}var We=J(ya,2),wa=de(We);{var Uo=f=>{var p=hc(),y=Dt(p),_=J(y,2);{var A=C=>{var z=dc();zi(z,()=>document.querySelector(o(m).overlayContent)?.innerHTML,!0),ae(z),D(C,z)};oe(_,C=>{o(m).overlayContent&&C(A)})}se("click",y,So,!0),D(f,p)};oe(wa,f=>{o(m).display==="overlay"&&o(Q)&&f(Uo)})}var lr=J(wa,2),cr=de(lr),ur=de(cr),_a=de(ur);{let f=we(()=>o(m).display==="standard"&&o(qe)!=="onsubmit"||o(k)===V.VERIFYING);xl(_a,()=>o(Zt),(p,y)=>{y(p,{get id(){return o(Jt)},name:"",get required(){return o(f)},get loading(){return o(Xt)},get checked(){return o(ne)},onchange:xo,oninvalid:Eo})})}var fr=J(_a,2),Fo=de(fr);{var zo=f=>{var p=Tn();be(()=>Je(p,o(ke).verificationRequired)),D(f,p)},jo=f=>{var p=Tn();be(()=>Je(p,o(ke).verifying)),D(f,p)},Ho=f=>{var p=Tn();be(()=>Je(p,o(ke).verified)),D(f,p)},Bo=f=>{var p=Tn();be(()=>Je(p,o(ke).label)),D(f,p)};oe(Fo,f=>{o(k)===V.CODE&&o(ie)?f(zo):o(k)===V.VERIFYING?f(jo,1):o(k)===V.VERIFIED?f(Ho,2):f(Bo,-1)})}ae(fr),ae(ur);var Ko=J(ur,2);{var Yo=f=>{oa(f,{get strings(){return o(ke)}})};oe(Ko,f=>{o(yt)&&f(Yo)})}ae(cr);var ka=J(cr,2);{var qo=f=>{{let p=we(()=>o(m).display==="bar"&&o(yt));Nr(f,{get logo(){return o(p)},get strings(){return o(ke)}})}};oe(ka,f=>{o(En)&&f(qo)})}var xa=J(ka,2);{var Go=f=>{var p=vc();bt(p,y=>w(P,y),()=>o(P)),D(f,p)};oe(xa,f=>{o(m).display==="floating"&&f(Go)})}var Wo=J(xa,2);{var Jo=f=>{var p=pc();aa(p),be(()=>{U(p,"name",o(m).name),Ml(p,o(W))}),D(f,p)};oe(Wo,f=>{o(m).setCookie||f(Jo)})}ae(lr);var Zo=J(lr,2);{var Xo=f=>{Vr(f,{get anchor(){return o(N)},onClickOutside:()=>{c&&Oe()},get placement(){return o(m).popoverPlacement},role:"alert",variant:"error",get dir(){return o(en)},get updateUISignal(){return o(E)},children:(p,y)=>{var _=Ma(),A=Dt(_);{var C=G=>{var fe=gc();D(G,fe)},z=G=>{var fe=ja(),ft=Mt(fe,!0);be(()=>Je(ft,o(ke).expired)),D(G,fe)},Ae=G=>{var fe=ja(),ft=Mt(fe,!0);be(()=>{U(fe,"title",o(ge)),Je(ft,o(ke).error)}),D(G,fe)};oe(A,G=>{!o(ge)&&!c?G(C):!o(ge)&&o(k)===V.EXPIRED?G(z,1):G(Ae,-1)})}D(p,_)},$$slots:{default:!0}})},Qo=f=>{var p=Ma(),y=Dt(p);kl(y,()=>o(ie),_=>{{let A=we(()=>o(m).codeChallengeDisplay!=="standard");Vr(_,{get anchor(){return o(N)},get backdrop(){return o(A)},get display(){return o(m).codeChallengeDisplay},onClose:()=>{Oe()},get placement(){return o(m).popoverPlacement},role:"dialog",get"aria-label"(){return o(ke).verificationRequired},get dir(){return o(en)},get updateUISignal(){return o(E)},children:(C,z)=>{var Ae=bc(),G=Dt(Ae);Qi(G,{get audioUrl(){return o(S)},get imageUrl(){return o(q)},onCancel:()=>Oe(),onReload:()=>It(),onSubmit:dt=>ba(dt),get codeChallenge(){return o(ie)},get config(){return o(m)},get strings(){return o(ke)}});var fe=J(G,2);{var ft=dt=>{Nr(dt,{get logo(){return o(yt)},get strings(){return o(ke)}})};oe(fe,dt=>{o(En)&&o(m).codeChallengeDisplay!=="standard"&&dt(ft)})}D(C,Ae)},$$slots:{default:!0}})}}),D(f,p)};oe(Zo,f=>{o(ge)||o(k)===V.EXPIRED||!c?f(Xo):o(ie)&&o(k)===V.CODE&&f(Qo,1)})}ae(We),bt(We,f=>w(N,f),()=>o(N)),be(f=>{U(We,"data-state",o(k)),U(We,"data-display",o(m).display||void 0),U(We,"data-placement",f),U(We,"data-visible",o(Q)||void 0),U(We,"dir",o(en)),U(fr,"for",o(Jt)),We.dir=We.dir},[()=>wo(o(m).display)]),D(e,ma);var es=ut(No);return i(),es}function sa(e){let t;try{if(t=Ha&&(self.URL||self.webkitURL).createObjectURL(Ha),!t)throw"";let n=new Worker(t,{name:e?.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(to),{name:e?.name})}}function la(e){let t;try{if(t=Ba&&(self.URL||self.webkitURL).createObjectURL(Ba),!t)throw"";let n=new Worker(t,{name:e?.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(no),{name:e?.name})}}var Fr,rs,Ln,as,Pn,zt,Vt,is,os,ss,Ka,Ea,ht,he,jt,zn,zr,Ue,He,nt,_r,jr,De,le,ce,je,Me,$e,$t,Dn,pt,Mn,cs,Rt,us,Ct,Nn,Ut,vt,Ft,qa,fs,ds,Ga,kr,xr,Er,cn,vn,pn,gn,bn,Ss,Cs,Hr,Za,Sa,Xa,At,re,Qa,As,Ts,$s,me,_t,T,M,Et,Sr,ai,ii,oi,Ns,Lt,Ar,Ta,sn,dr,Pt,R,Tr,Fe,$r,un,hr,Nt,Rn,$a,Ys,gt,ot,Un,et,mi,In,lt,L,ze,$,tt,Se,Te,Pe,ki,kt,St,al,il,ln,Mi,Rr,vr,pr,ol,ul,dl,vl,gl,Or,$n,Lr,Kt,_l,Na,rn,an,Ki,Yi,Ll,Fa,Pl,qi,Dl,za,Ul,Mr,Wi,jl,Hl,Bl,Kl,Yl,ql,Gl,Wl,ve,V,Jl,Zl,Xl,Ql,ec,tc,nc,rc,ac,ic,oc,sc,lc,Ur,fc,dc,hc,vc,pc,gc,ja,bc,mc,to,Ha,no,Ba,wc,ro=Ot(()=>{Fr=Array.isArray,rs=Array.prototype.indexOf,Ln=Array.prototype.includes,as=Array.from,Pn=Object.keys,zt=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,is=Object.getOwnPropertyDescriptors,os=Object.prototype,ss=Array.prototype,Ka=Object.getPrototypeOf,Ea=Object.isExtensible,ht=()=>{};he=2,jt=4,zn=8,zr=1<<24,Ue=16,He=32,nt=64,_r=128,jr=256,De=512,le=1024,ce=2048,je=4096,Me=8192,$e=16384,$t=32768,Dn=1<<25,pt=65536,Mn=1<<17,cs=1<<18,Rt=1<<19,us=1<<20,Ct=65536,Nn=1<<21,Ut=1<<22,vt=1<<23,Ft=Symbol("$state"),qa=Symbol("component"),fs=Symbol("legacy props"),ds=Symbol(""),Ga=Symbol("attributes"),kr=Symbol("class"),xr=Symbol("style"),Er=Symbol("text"),cn=Symbol("form reset"),vn=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},pn=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml"),gn=3,bn=8;Ss=1,Cs=2,Hr="[",Za="[!",Sa="[?",Xa="]",At={},re=Symbol("uninitialized"),Qa="http://www.w3.org/1999/xhtml",As="http://www.w3.org/2000/svg",Ts="http://www.w3.org/1998/Math/MathML",$s="@attach",me=null;_t=[];T=!1;Ns=-7169;Lt=[];Ar=Symbol("unmounted");Ta=!1;sn=Symbol("obsolete");dr=null,Pt=null,R=null,Tr=null,Fe=null,$r=null,un=!1,hr=!1,Nt=null,Rn=null,$a=0,Ys=1,gt=class e{id=Ys++;#e=!1;linked=!0;#t=null;#n=null;async_deriveds=new Map;current=new Map;previous=new Map;#l=new Set;#a=new Set;#o=0;#r=new Map;#s=null;#i=[];#p=[];#c=new Set;#u=new Set;#d=new Map;#g=new Set;is_fork=!1;#f=!1;constructor(){Pt===null?dr=Pt=this:(Pt.#n=this,this.#t=Pt),Pt=this}#y(){if(this.is_fork)return!0;for(let r of this.#r.keys()){for(var t=r,n=!1;t.parent!==null;){if(this.#d.has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1}skip_effect(t){this.#d.has(t)||this.#d.set(t,{d:[],m:[]}),this.#g.delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=this.#d.get(t);if(r){this.#d.delete(t);for(var a of r.d)te(a,ce),n(a);for(a of r.m)te(a,je),n(a)}this.#g.add(t)}#b(){this.#e=!0,$a++>1e3&&(this.#v(),qs());for(let u of this.#c)this.#u.delete(u),te(u,ce),this.schedule(u);for(let u of this.#u)te(u,je),this.schedule(u);let t=this.#i;this.#i=[],this.apply();var n=Nt=[],r=[],a=Rn=[];for(let u of t)try{this.#w(u,n,r)}catch(c){throw bi(u),this.#y()||this.discard(),c}if(R=null,a.length>0){var i=e.ensure();for(let u of a)i.schedule(u)}if(Nt=null,Rn=null,this.#y()){this.#h(r),this.#h(n);for(let[u,c]of this.#d)gi(u,c);a.length>0&&R.#b();return}let l=this.#_();if(l){this.#h(r),this.#h(n),l.#k(this);return}this.#c.clear(),this.#u.clear();for(let u of this.#l)u(this);this.#l.clear(),Tr=this,Ra(r),Ra(n),Tr=null,this.#s?.resolve();var s=R;if(this.#o===0&&(this.#i.length===0||s!==null)&&this.#v(),this.#i.length>0)if(s!==null){let u=s;u.#i.push(...this.#i.filter(c=>!u.#i.includes(c)))}else s=this;s!==null&&(et.clear(),s.#b())}#w(t,n,r){t.f^=le;for(var a=t.first;a!==null;){var i=a.f,l=(i&(He|nt))!==0,s=l&&(i&le)!==0,u=s||(i&Me)!==0||this.#d.has(a);if(!u&&a.fn!==null){l?a.f^=le:(i&jt)!==0?n.push(a):wn(a)&&((i&Ue)!==0&&this.#u.add(a),Bt(a));var c=a.first;if(c!==null){a=c;continue}}for(;a!==null;){var d=a.next;if(d!==null){a=d;break}a=a.parent}}}#_(){for(var t=this.#t;t!==null;){if(!t.is_fork){for(let[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=t.#t}return null}#k(t){for(let[r,a]of t.current)!this.previous.has(r)&&t.previous.has(r)&&this.previous.set(r,t.previous.get(r)),this.current.set(r,a);for(let[r,a]of t.async_deriveds){let i=this.async_deriveds.get(r);i&&a.promise.then(i.resolve).catch(i.reject)}t.async_deriveds.clear(),this.transfer_effects(t.#c,t.#u);let n=r=>{var a=r.reactions;if(a!==null&&!((r.f&he)!==0&&(r.f&(ce|je))===0))for(let s of a){var i=s.f;if((i&he)!==0)n(s);else{var l=s;i&(Ut|Ue)&&!this.async_deriveds.has(l)&&(this.#u.delete(l),te(l,ce),this.schedule(l))}}};for(let r of this.current.keys())n(r);this.oncommit(()=>t.discard()),t.#v(),R=this,this.#b()}#h(t){for(var n=0;n<t.length;n+=1)li(t[n],this.#c,this.#u)}capture(t,n,r=!1){t.v!==re&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&vt)===0&&(this.current.set(t,[n,r]),Fe?.set(t,n)),this.is_fork||(t.v=n)}activate(){R=this}deactivate(){R=null,Fe=null}flush(){try{hr=!0,R=this,this.#b()}finally{$a=0,$r=null,Nt=null,Rn=null,hr=!1,R=null,Fe=null,et.clear()}}discard(){for(let t of this.#a)t(this);this.#a.clear();for(let t of this.async_deriveds.values())t.reject(sn);this.#v(),this.#s?.resolve()}register_created_effect(t){this.#p.push(t)}#m(){for(let h=dr;h!==null;h=h.#n){var t=h.id<this.id,n=[];for(let[v,[g,b]]of this.current){if(h.current.has(v)){var r=h.current.get(v)[0];if(t&&g!==r)h.current.set(v,[g,b]);else continue}n.push(v)}if(t)for(let[v,g]of this.async_deriveds){let b=h.async_deriveds.get(v);b&&g.promise.then(b.resolve).catch(b.reject)}var a=[...h.current.keys()].filter(v=>!h.current.get(v)[1]);if(!(!h.#e||a.length===0)){var i=a.filter(v=>!this.current.has(v));if(i.length===0)t&&h.discard();else if(n.length>0){if(t)for(let v of this.#g)h.unskip_effect(v,g=>{(g.f&(Ue|Ut))!==0?h.schedule(g):h.#h([g])});h.activate();var l=new Set,s=new Map;for(var u of n)pi(u,i,l,s);s=new Map;var c=[...h.current].filter(([v,g])=>{let b=this.current.get(v);return b?b[0]!==g[0]||b[1]!==g[1]:!0}).map(([v])=>v);if(c.length>0)for(let v of this.#p)(v.f&($e|Me|Mn))===0&&Zr(v,c,s)&&((v.f&(Ut|Ue))!==0?(te(v,ce),h.schedule(v)):h.#c.add(v));if(h.#i.length>0&&!h.#f){h.apply();for(var d of h.#i)h.#w(d,[],[]);h.#i=[]}h.deactivate()}}}}increment(t,n){if(this.#o+=1,t){let r=this.#r.get(n)??0;this.#r.set(n,r+1)}}decrement(t,n){if(this.#o-=1,t){let r=this.#r.get(n)??0;r===1?this.#r.delete(n):this.#r.set(n,r-1)}this.#f||(this.#f=!0,Xe(()=>{this.#f=!1,this.linked&&this.flush()}))}transfer_effects(t,n){for(let r of t)this.#c.add(r);for(let r of n)this.#u.add(r);t.clear(),n.clear()}oncommit(t){this.#l.add(t)}ondiscard(t){this.#a.add(t)}settled(){return(this.#s??=Ya()).promise}static ensure(){if(R===null){let t=R=new e;!hr&&!un&&Xe(()=>{t.#e||t.flush()})}return R}apply(){{Fe=null;return}}schedule(t){if($r=t,t.b?.is_pending&&(t.f&(jt|zn|zr))!==0&&(t.f&$t)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(Nt!==null&&n===$&&(L===null||(L.f&he)===0))return;if((r&(nt|He))!==0){if((r&le)===0)return;n.f^=le}}this.#i.push(n)}#v(){if(this.linked){var t=this.#t,n=this.#n;t===null?dr=n:t.#n=n,n===null?Pt=t:n.#t=t,this.linked=!1}}};ot=null;Un=new Set,et=new Map,mi=!1;In=!1,lt=!1;L=null,ze=!1;$=null;tt=null;Se=null,Te=0,Pe=null;ki=1,kt=0,St=kt;globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:Da({}),i18n:Da({}),instances:new Set,plugins:new Set};al={ariaLinkLabel:"Altcha (official website)",cancel:"Cancel",enterCode:"Enter code",enterCodeAria:"Enter code you hear. Press Space to play audio.",enterCodeFromImage:"To proceed, please enter the code from the image below.",error:"Verification failed. Try again later.",expired:"Verification expired. Try again.",footer:'Protected by <a href="https://altcha.org/" tabindex="-1" target="_blank" rel="noopener" aria-label="Altcha (official website)">ALTCHA</a>',getAudioChallenge:"Get an audio challenge",label:"I'm not a robot",loading:"Loading...",reload:"Reload",verify:"Verify",verificationRequired:"Verification required!",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait."};globalThis.$altcha.i18n.set("en",al);il="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(il);ln=Symbol("events"),Mi=new Set,Rr=new Set;vr=null,pr=!1;ol=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});ul=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];dl={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};vl=["touchstart","touchmove"];gl=pt|Rt;Or=class{parent;is_pending=!1;transform_error;#e;#t=T?M:null;#n;#l;#a;#o=null;#r=null;#s=null;#i=null;#p=0;#c=0;#u=!1;#d=new Set;#g=new Set;#f=null;#y=rl(()=>(this.#f=yn(this.#p),()=>{this.#f=null}));constructor(t,n,r,a){this.#e=t,this.#n=n,this.#l=i=>{var l=$;l.b=this,l.f|=_r,r(i)},this.parent=$.b,this.transform_error=a??this.parent?.transform_error??(i=>i),this.#a=kn(()=>{if(T){let i=this.#t;Tt();let l=i.data===Za;if(i.data.startsWith(Sa)){let u=JSON.parse(i.data.slice(Sa.length));this.#w(u)}else l?this.#k():this.#b()}else this.#h()},gl),T&&(this.#e=M)}#b(){try{this.#o=Ve(()=>this.#l(this.#e))}catch(t){this.error(t)}}#w(t){let n=this.#n.failed,{reset:r,invoke_onerror:a}=this.#_(t);Xe(a),n&&(this.#s=Ve(()=>{n(this.#e,()=>t,()=>r)}))}#_(t){var n=!1,r=!1;let a=()=>{if(n){Ls();return}n=!0,r&&Es(),this.#s!==null&&dn(this.#s,()=>{this.#s=null}),this.#v(()=>{this.#h()})};return{reset:a,invoke_onerror:()=>{try{r=!0,this.#n.onerror?.(t,a),r=!1}catch(l){Ze(l,this.#a&&this.#a.parent)}}}}#k(){let t=this.#n.pending;t&&(this.is_pending=!0,this.#r=Ve(()=>t(this.#e)),Xe(()=>{var n=this.#i=document.createDocumentFragment(),r=Be(),a=!1;if(n.append(r),this.#o=this.#v(()=>{try{return Ve(()=>this.#l(r))}catch(i){try{this.error(i),a=!0}catch(l){Ze(l,this.#a.parent)}return null}}),this.#o===null){this.#i=null,a&&this.#m(R);return}this.#c===0&&(this.#e.before(n),this.#i=null,dn(this.#r,()=>{this.#r=null}),this.#m(R))}))}#h(){try{if(this.is_pending=this.has_pending_snippet(),this.#c=0,this.#p=0,this.#o=Ve(()=>{this.#l(this.#e)}),this.#c>0){var t=this.#i=document.createDocumentFragment();Di(this.#o,t);let n=this.#n.pending;this.#r=Ve(()=>n(this.#e))}else this.#m(R)}catch(n){this.error(n)}}#m(t){this.is_pending=!1,t.transfer_effects(this.#d,this.#g)}defer_effect(t){li(t,this.#d,this.#g)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#n.pending}#v(t){var n=$,r=L,a=me;rt(this.#a),Ne(this.#a),Ht(this.#a.ctx);try{return gt.ensure(),t()}finally{rt(n),Ne(r),Ht(a)}}#x(t,n){if(!this.has_pending_snippet()){this.parent&&this.parent.#x(t,n);return}this.#c+=t,this.#c===0&&(this.#m(n),this.#r&&dn(this.#r,()=>{this.#r=null}),this.#i&&(this.#e.before(this.#i),this.#i=null))}update_pending_count(t,n){this.#x(t,n),this.#p+=t,!(!this.#f||this.#u)&&(this.#u=!0,Xe(()=>{this.#u=!1,this.#f&&Fn(this.#f,this.#p)}))}get_effect_pending(){return this.#y(),o(this.#f)}error(t){if(!this.#n.onerror&&!this.#n.failed)throw t;R?.is_fork?(this.#o&&R.skip_effect(this.#o),this.#r&&R.skip_effect(this.#r),this.#s&&R.skip_effect(this.#s),R.oncommit(()=>{this.#E(t)})):this.#E(t)}#E(t){this.#o&&(pe(this.#o),this.#o=null),this.#r&&(pe(this.#r),this.#r=null),this.#s&&(pe(this.#s),this.#s=null),T&&(_e(this.#t),Kr(),_e(Yr()));let n=this.#n.failed,r=a=>{let{reset:i,invoke_onerror:l}=this.#_(a);l(),n&&(this.#s=this.#v(()=>{try{return Ve(()=>{var s=$;s.b=this,s.f|=_r,n(this.#e,()=>a,()=>i)})}catch(s){return Ze(s,this.#a.parent),null}}))};Xe(()=>{var a;try{a=this.transform_error(t)}catch(i){Ze(i,this.#a&&this.#a.parent);return}a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(r,i=>Ze(i,this.#a&&this.#a.parent)):r(a)})}};$n=new Map;Lr=new WeakMap;Kt=class{anchor;#e=new Map;#t=new Map;#n=new Map;#l=new Set;#a=!0;constructor(t,n=!0){this.anchor=t,this.#a=n}#o=t=>{if(this.#e.has(t)){var n=this.#e.get(t),r=this.#t.get(n);if(r)Pa(r),this.#l.delete(n);else{var a=this.#n.get(n);a&&(Pa(a.effect),this.#t.set(n,a.effect),this.#n.delete(n),a.fragment.lastChild.remove(),this.anchor.before(a.fragment),r=a.effect)}for(let[i,l]of this.#e){if(this.#e.delete(i),i===t)break;let s=this.#n.get(l);s&&(pe(s.effect),this.#n.delete(l))}for(let[i,l]of this.#t){if(i===n||this.#l.has(i))continue;let s=()=>{if(Array.from(this.#e.values()).includes(i)){var c=document.createDocumentFragment();Di(l,c),c.append(Be()),this.#n.set(i,{effect:l,fragment:c})}else pe(l);this.#l.delete(i),this.#t.delete(i)};this.#a||!r?(this.#l.add(i),dn(l,s,!1)):s()}}};#r=t=>{this.#e.delete(t);let n=Array.from(this.#e.values());for(let[r,a]of this.#n)n.includes(r)||(pe(a.effect),this.#n.delete(r))};ensure(t,n){var r=R,a=Ds();if(n&&!this.#t.has(t)&&!this.#n.has(t))if(a){var i=document.createDocumentFragment(),l=Be();i.append(l),this.#n.set(t,{effect:Ve(()=>n(l)),fragment:i})}else this.#t.set(t,Ve(()=>n(this.anchor)));if(this.#e.set(r,t),a){for(let[s,u]of this.#t)s===t?r.unskip_effect(u):r.skip_effect(u);for(let[s,u]of this.#n)s===t?r.unskip_effect(u.effect):r.skip_effect(u.effect);r.oncommit(this.#o),r.ondiscard(this.#r)}else T&&(this.anchor=M),this.#o(r)}};_l=Symbol("NaN");Na=[...` 	
\r\f\xA0\v\uFEFF`];rn=Symbol("class"),an=Symbol("style"),Ki=Symbol("is custom element"),Yi=Symbol("is html"),Ll=pn?"link":"LINK",Fa=pn?"input":"INPUT",Pl=pn?"option":"OPTION",qi=pn?"select":"SELECT",Dl=pn?"progress":"PROGRESS";za=new Map;Ul={get(e,t){if(!e.exclude.has(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.has(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.has(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.has(t))}};Mr=class{#e;#t;constructor(t){var n=new Map,r=(i,l)=>{var s=yi(l,!1,!1);return n.set(i,s),s};let a=new Proxy({...t.props||{},$$events:{}},{get(i,l){return o(n.get(l)??r(l,Reflect.get(i,l)))},has(i,l){return l===fs?!0:(o(n.get(l)??r(l,Reflect.get(i,l))),Reflect.has(i,l))},set(i,l,s){return w(n.get(l)??r(l,s),s),Reflect.set(i,l,s)}});this.#t=(t.hydrate?ml:Ui)(t.component,{target:t.target,anchor:t.anchor,props:a,context:t.context,intro:t.intro??!1,recover:t.recover,transformError:t.transformError}),(!t?.props?.$$host||t.sync===!1)&&Y(),this.#e=a.$$events;for(let i of Object.keys(this.#t))i==="$set"||i==="$destroy"||i==="$on"||zt(this,i,{get(){return this.#t[i]},set(l){this.#t[i]=l},enumerable:!0});this.#t.$set=i=>{Object.assign(a,i)},this.#t.$destroy=()=>{yl(this.#t)}}$set(t){this.#t.$set(t)}$on(t,n){this.#e[t]=this.#e[t]||[];let r=(...a)=>n.call(this,...a);return this.#e[t].push(r),()=>{this.#e[t]=this.#e[t].filter(a=>a!==r)}}$destroy(){this.#t.$destroy()}},Wi=class{};typeof HTMLElement=="function"&&(Wi=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;$$shadowRoot=null;constructor(e,t,n){super(),this.$$ctor=e,this.$$s=t,n&&(this.$$shadowRoot=this.attachShadow(n))}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){let r=this.$$c.$on(e,t);this.$$l_u.set(t,r)}super.addEventListener(e,t,n)}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){let r=this.$$l_u.get(t);r&&(r(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(a){return i=>{let l=qr("slot");a!=="default"&&(l.name=a),D(i,l)}};var e=t;if(await Promise.resolve(),!this.$$cn||this.$$c)return;let n={},r=zl(this);for(let a of this.$$s)a in r&&(a==="default"&&!this.$$d.children?(this.$$d.children=t(a),n.default=!0):n[a]=t(a));for(let a of this.attributes){let i=this.$$g_p(a.name);i in this.$$d||(this.$$d[i]=On(i,a.value,this.$$p_d,"toProp"))}for(let a in this.$$p_d)!(a in this.$$d)&&this[a]!==void 0&&(this.$$d[a]=this[a],delete this[a]);this.$$c=Fl({component:this.$$ctor,target:this.$$shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=Qs(()=>{Bn(()=>{this.$$r=!0;for(let a of Pn(this.$$c)){if(!this.$$p_d[a]?.reflect)continue;this.$$d[a]=this.$$c[a];let i=On(a,this.$$d[a],this.$$p_d,"toAttribute");i==null?this.removeAttribute(this.$$p_d[a].attribute||a):this.setAttribute(this.$$p_d[a].attribute||a,i)}this.$$r=!1})});for(let a in this.$$l)for(let i of this.$$l[a]){let l=this.$$c.$on(a,i);this.$$l_u.set(i,l)}this.$$l={}}}attributeChangedCallback(e,t,n){this.$$r||(e=this.$$g_p(e),this.$$d[e]=On(e,n,this.$$p_d,"toProp"),this.$$c?.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(e){return Pn(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});jl=new Set(["$$slots","$$events","$$legacy","$$host","loading"]),Hl=ee('<div class="altcha-checkbox"><input/> <svg aria-hidden="true" width="12" height="9" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1"></polyline></svg> <div class="altcha-spinner altcha-checkbox-spinner" aria-hidden="true"></div></div>');Yn(["click"]);mt(Ji,{loading:{}},[],[],{mode:"open"});Bl=new Set(["$$slots","$$events","$$legacy","$$host","loading"]),Kl=ee('<div class="altcha-checkbox-native"><input/> <div class="altcha-spinner altcha-checkbox-native-spinner"></div></div>');mt(Zi,{loading:{}},[],[],{mode:"open"});Yl=ee('<div><a target="_blank" rel="noopener" class="altcha-logo" aria-hidden="true" tabindex="-1"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>');mt(oa,{strings:{}},[],[],{mode:"open"});ql=ee('<div class="altcha-footer"><p></p> <!></div>');mt(Nr,{logo:{},strings:{}},[],[],{mode:"open"});Gl=new Set(["$$slots","$$events","$$legacy","$$host","loading"]),Wl=ee('<div class="altcha-switch"><input/>  <div class="altcha-switch-toggle"><div class="altcha-spinner altcha-switch-spinner"></div></div></div>');Yn(["click"]);mt(Xi,{loading:{}},[],[],{mode:"open"});ve=(e=>(e.ERROR="error",e.LOADING="loading",e.PLAYING="playing",e.PAUSED="paused",e.READY="ready",e))(ve||{}),V=(e=>(e.CODE="code",e.ERROR="error",e.VERIFIED="verified",e.VERIFYING="verifying",e.UNVERIFIED="unverified",e.EXPIRED="expired",e))(V||{}),Jl=ee('<div class="altcha-code-challenge-title"> </div>'),Zl=ee('<div class="altcha-spinner"></div>'),Xl=na('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'),Ql=na('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'),ec=na('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'),tc=ee('<button type="button" class="altcha-button altcha-button-secondary"><!></button>'),nc=ee('<audio hidden="" autoplay=""></audio>'),rc=ee('<div class="altcha-code-challenge"><form data-code-challenge="true"><!> <div class="altcha-code-challenge-text"> </div> <img class="altcha-code-challenge-image" alt=""/> <div class="altcha-code-challenge-row"><input type="text" class="altcha-input" autocomplete="off" name="" required=""/> <!> <button type="button" class="altcha-button altcha-button-secondary"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <div class="altcha-code-challenge-buttons"><button type="submit" class="altcha-button"> </button> <button type="button" class="altcha-button altcha-button-secondary"> </button></div></form> <!></div>');Yn(["keydown"]);mt(Qi,{audioUrl:{},codeChallenge:{},config:{},imageUrl:{},onCancel:{},onReload:{},onSubmit:{},strings:{}},[],[],{mode:"open"});ac=new Set(["$$slots","$$events","$$legacy","$$host","anchor","children","display","backdrop","onClickOutside","onClickOutsideDelay","onClose","placement","updateUISignal","variant"]),ic=ee('<div class="altcha-popover-backdrop" data-backdrop=""></div>'),oc=ee('<div class="altcha-popover-arrow"></div>'),sc=ee('<div role="button" class="altcha-popover-close">&times;</div>'),lc=ee('<!> <div><!> <!> <div class="altcha-popover-content"><!></div></div>',1);mt(Vr,{anchor:{},children:{},display:{},backdrop:{},onClickOutside:{},onClickOutsideDelay:{},onClose:{},placement:{},updateUISignal:{},variant:{}},[],[],{mode:"open"});Ur=class{TAG_CODES={INPUT:1,TEXTAREA:2,SELECT:3,BUTTON:4,A:5,DETAILS:6,SUMMARY:7,IFRAME:8,VIDEO:9,AUDIO:10};maxSamples;sampleInterval;target;focusStartTime=0;focusInteraction=0;focusInteractionTimer=null;lastPointerSample=0;lastTouchSample=0;lastScrollSample=0;pendingPointer=null;pendingTouch=null;focus=[];pointer=[];scroll=[];touch=[];constructor(t={}){let{maxSamples:n=60,sampleInterval:r=50,target:a=window}=t;this.maxSamples=n,this.sampleInterval=r,this.target=a,this.attach()}destroy(){let t={capture:!0};this.target.removeEventListener("focusin",this.onFocus,t),this.target.removeEventListener("keydown",this.onInteraction,t),this.target.removeEventListener("pointerdown",this.onInteraction,t),this.target.removeEventListener("pointermove",this.onPointer,t),this.target.removeEventListener("scroll",this.onScroll,t),this.target.removeEventListener("touchmove",this.onTouchMove,t)}export(){return{focus:this.focus,maxTouchPoints:navigator.maxTouchPoints||0,pointer:this.pointer,scroll:this.scroll,time:Date.now(),touch:this.touch}}attach(){let t={passive:!0,capture:!0};this.target.addEventListener("focusin",this.onFocus,t),this.target.addEventListener("keydown",this.onInteraction,t),this.target.addEventListener("pointerdown",this.onInteraction,t),this.target.addEventListener("pointermove",this.onPointer,t),this.target.addEventListener("scroll",this.onScroll,t),this.target.addEventListener("touchmove",this.onTouchMove,t)}evict(t){t.length>this.maxSamples&&t.splice(0,t.length-this.maxSamples)}onFocus=t=>{if(this.focusInteraction===2)return;let n=t.target;if(!(n instanceof Element))return;let r=performance.now();this.focusStartTime===0&&(this.focusStartTime=r),this.focus.push([Math.round(r-this.focusStartTime),n.tabIndex,this.TAG_CODES[n.tagName]??0,this.focusInteraction?1:0]),this.evict(this.focus)};onInteraction=t=>{this.focusInteraction="keyCode"in t?1:2,this.focusInteractionTimer&&clearTimeout(this.focusInteractionTimer),this.focusInteractionTimer=setTimeout(()=>{this.focusInteraction=0},100)};onPointer=t=>{if(t.pointerType==="touch")return;let n=t.timeStamp||performance.now();this.pendingPointer=[Math.round(t.clientX),Math.round(t.clientY),Math.round(n)],n-this.lastPointerSample>=this.sampleInterval&&(this.pointer.push(this.pendingPointer),this.lastPointerSample=n,this.pendingPointer=null,this.evict(this.pointer))};onScroll=()=>{let t=performance.now();t-this.lastScrollSample<this.sampleInterval||(this.scroll.push([Math.round(window.scrollY),Math.round(t)]),this.lastScrollSample=t,this.evict(this.scroll))};onTouchMove=t=>{let n=t.timeStamp||performance.now(),r=t.touches[0];r&&(this.pendingTouch=[Math.round(r.clientX),Math.round(r.clientY),Math.round(n),Math.round(r.force*1e3)/1e3,Math.round(r.radiusX||0),Math.round(r.radiusY||0)],n-this.lastTouchSample>=this.sampleInterval&&(this.touch.push(this.pendingTouch),this.lastTouchSample=n,this.pendingTouch=null,this.evict(this.touch)))}},fc=ee('<div class="altcha-overlay-backdrop" data-backdrop=""></div>'),dc=ee('<div class="altcha-overlay-content"></div>'),hc=ee('<div role="button" class="altcha-overlay-close">&times;</div> <!>',1),vc=ee('<div class="altcha-floating-arrow"></div>'),pc=ee('<input type="hidden"/>'),gc=ee('<div class="altcha-error">Secure context (HTTPS) required.</div>'),ja=ee('<div class="altcha-error"> </div>'),bc=ee("<!> <!>",1),mc=ee('<!> <div class="altcha"><!> <div class="altcha-main"><div><div class="altcha-checkbox-wrap"><!> <label><!></label></div> <!></div> <!> <!> <!></div> <!></div>',1);typeof window<"u"&&window.customElements&&!customElements.get("altcha-widget")&&customElements.define("altcha-widget",mt(yc,{auto:{type:"String"},challenge:{type:"String"},configuration:{type:"String"},display:{type:"String"},language:{type:"String"},name:{type:"String"},theme:{type:"String"},type:{type:"String"},workers:{type:"Number"}},[],["configure","getConfiguration","getState","hide","log","reset","setState","show","updateUI","verify"]));to=`(function() {
  "use strict";
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
    const buffer = new ArrayBuffer(hex.length / 2);
    const view = new DataView(buffer);
    for (let i = 0; i < hex.length; i += 2) {
      const byteString = hex.substring(i, i + 2);
      const byteValue = parseInt(byteString, 16);
      view.setUint8(i / 2, byteValue);
    }
    return new Uint8Array(buffer);
  }
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
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
     */
    setCounter(n) {
      if (this.mode === "string") {
        return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
      }
      this.dataView.setUint32(this.nonce.length, n, false);
      return this.buffer;
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
    const { nonce, keyPrefix, salt } = challenge.parameters;
    const nonceBuf = hexToBuffer(nonce);
    const saltBuf = hexToBuffer(salt);
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
      if (keyPrefixBuf ? bufferStartsWith(derivedKey, keyPrefixBuf) : bufferToHex(derivedKey).startsWith(keyPrefix)) {
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
  function getDigest(algorithm) {
    switch (algorithm) {
      case "PBKDF2/SHA-512":
        return "SHA-512";
      case "PBKDF2/SHA-384":
        return "SHA-384";
      case "PBKDF2/SHA-256":
      default:
        return "SHA-256";
    }
  }
  async function deriveKey(parameters, salt, password) {
    const { algorithm, cost, keyLength = 32 } = parameters;
    const passwordKey = await crypto.subtle.importKey(
      "raw",
      password,
      { name: "PBKDF2" },
      false,
      ["deriveKey"]
    );
    const derivedKey = await crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt,
        iterations: cost,
        hash: getDigest(algorithm)
      },
      passwordKey,
      { name: "AES-GCM", length: keyLength * 8 },
      true,
      ["encrypt"]
    );
    return {
      derivedKey: new Uint8Array(await crypto.subtle.exportKey("raw", derivedKey))
    };
  }
  handler({
    deriveKey
  });
})();
`,Ha=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",to],{type:"text/javascript;charset=utf-8"});no=`(function() {
  "use strict";
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
    const buffer = new ArrayBuffer(hex.length / 2);
    const view = new DataView(buffer);
    for (let i = 0; i < hex.length; i += 2) {
      const byteString = hex.substring(i, i + 2);
      const byteValue = parseInt(byteString, 16);
      view.setUint8(i / 2, byteValue);
    }
    return new Uint8Array(buffer);
  }
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
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
     */
    setCounter(n) {
      if (this.mode === "string") {
        return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
      }
      this.dataView.setUint32(this.nonce.length, n, false);
      return this.buffer;
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
    const { nonce, keyPrefix, salt } = challenge.parameters;
    const nonceBuf = hexToBuffer(nonce);
    const saltBuf = hexToBuffer(salt);
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
      if (keyPrefixBuf ? bufferStartsWith(derivedKey, keyPrefixBuf) : bufferToHex(derivedKey).startsWith(keyPrefix)) {
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
    const iterations = Math.max(1, parameters.cost);
    let data = void 0;
    let derivedKey = void 0;
    for (let i = 0; i < iterations; i++) {
      if (i === 0) {
        data = concatBuffers(salt, password);
      } else {
        data = derivedKey;
      }
      derivedKey = new Uint8Array(
        (await crypto.subtle.digest(algorithm, data)).slice(0, keyLength)
      );
    }
    return {
      parameters: {},
      derivedKey
    };
  }
  handler({
    deriveKey
  });
})();
`,Ba=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",no],{type:"text/javascript;charset=utf-8"});wc=`:root {
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
}`;uc(wc);$altcha.algorithms.set("SHA-256",()=>new la);$altcha.algorithms.set("SHA-384",()=>new la);$altcha.algorithms.set("SHA-512",()=>new la);$altcha.algorithms.set("PBKDF2/SHA-256",()=>new sa);$altcha.algorithms.set("PBKDF2/SHA-384",()=>new sa);$altcha.algorithms.set("PBKDF2/SHA-512",()=>new sa)});function _c(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function kc(e,t,n){if(e==null)return t(void 0),Jn;let r=Ec(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}function xc(e,t=Jn){let n=null,r=new Set;function a(s){if(_c(e,s)&&(e=s,n)){let u=!qt.length;for(let c of r)c[1](),qt.push(c,e);if(u){for(let c=0;c<qt.length;c+=2)qt[c][0](qt[c+1]);qt.length=0}}}function i(s){a(s(e))}function l(s,u=Jn){let c=[s,u];return r.add(c),r.size===1&&(n=t(a,i)||Jn),s(e),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:a,update:i,subscribe:l}}function Wn(e){let t;return kc(e,n=>t=n)(),t}function Ec(e){var t=ca;try{return ca=!0,e()}finally{ca=t}}function ao(e){let t={get:n=>Wn(t.store)[n],set:(n,r)=>{typeof n=="string"?Object.assign(Wn(t.store),{[n]:r}):Object.assign(Wn(t.store),n),t.store.set(Wn(t.store))},store:xc(e)};return t}var Jn,qt,ca,Sc,io=Ot(()=>{Jn=()=>{};qt=[];ca=!1;globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:ao({}),i18n:ao({}),instances:new Set,plugins:new Set};Sc={ariaLinkLabel:"Altcha (offizielle Website)",enterCode:"Code eingeben",enterCodeAria:"Geben Sie den Code ein, den Sie h\xF6ren. Dr\xFCcken Sie die Leertaste, um die Audio abzuspielen.",error:"\xDCberpr\xFCfung fehlgeschlagen. Bitte versuchen Sie es sp\xE4ter erneut.",expired:"\xDCberpr\xFCfung abgelaufen. Bitte versuchen Sie es erneut.",footer:'Gesch\xFCtzt durch <a href="https://altcha.org/" tabindex="-1" target="_blank" rel="noopener" aria-label="Altcha (offizielle Website)">ALTCHA</a>',getAudioChallenge:"Audio-Herausforderung anfordern",label:"Ich bin kein Roboter",loading:"Lade...",reload:"Neu laden",verify:"\xDCberpr\xFCfen",verificationRequired:"\xDCberpr\xFCfung erforderlich!",verified:"\xDCberpr\xFCft",verifying:"Wird \xFCberpr\xFCft...",waitAlert:"\xDCberpr\xFCfung l\xE4uft... bitte warten.",cancel:"Abbrechen",enterCodeFromImage:"Um fortzufahren, geben Sie bitte den Code aus dem Bild unten ein."};globalThis.$altcha.i18n.set("de",Sc)});function Cc(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Ac(e,t,n){if(e==null)return t(void 0),Xn;let r=$c(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}function Tc(e,t=Xn){let n=null,r=new Set;function a(s){if(Cc(e,s)&&(e=s,n)){let u=!Gt.length;for(let c of r)c[1](),Gt.push(c,e);if(u){for(let c=0;c<Gt.length;c+=2)Gt[c][0](Gt[c+1]);Gt.length=0}}}function i(s){a(s(e))}function l(s,u=Xn){let c=[s,u];return r.add(c),r.size===1&&(n=t(a,i)||Xn),s(e),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:a,update:i,subscribe:l}}function Zn(e){let t;return Ac(e,n=>t=n)(),t}function $c(e){var t=ua;try{return ua=!0,e()}finally{ua=t}}function oo(e){let t={get:n=>Zn(t.store)[n],set:(n,r)=>{typeof n=="string"?Object.assign(Zn(t.store),{[n]:r}):Object.assign(Zn(t.store),n),t.store.set(Zn(t.store))},store:Tc(e)};return t}var Xn,Gt,ua,Rc,so=Ot(()=>{Xn=()=>{};Gt=[];ua=!1;globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:oo({}),i18n:oo({}),instances:new Set,plugins:new Set};Rc={ariaLinkLabel:"Altcha (offici\xEBle website)",enterCode:"Voer code in",enterCodeAria:"Voer de code in die je hoort. Druk op Spatie om de audio af te spelen.",error:"Verificatie mislukt. Probeer het later opnieuw.",expired:"Verificatie verlopen. Probeer het opnieuw.",footer:'Beschermd door <a href="https://altcha.org/" tabindex="-1" target="_blank" rel="noopener" aria-label="Altcha (offici\xEBle website)">ALTCHA</a>',getAudioChallenge:"Audio-uitdaging ontvangen",label:"Ik ben geen robot",loading:"Laden...",reload:"Herladen",verify:"Verifi\xEBren",verificationRequired:"Verificatie vereist!",verified:"Geverifieerd",verifying:"Bezig met verifi\xEBren...",waitAlert:"Bezig met verifi\xEBren... even geduld a.u.b.",cancel:"Annuleren",enterCodeFromImage:"Om door te gaan, voert u de code uit de onderstaande afbeelding in."};globalThis.$altcha.i18n.set("nl",Rc)});function Ic(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Oc(e,t,n){if(e==null)return t(void 0),er;let r=Pc(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}function Lc(e,t=er){let n=null,r=new Set;function a(s){if(Ic(e,s)&&(e=s,n)){let u=!Wt.length;for(let c of r)c[1](),Wt.push(c,e);if(u){for(let c=0;c<Wt.length;c+=2)Wt[c][0](Wt[c+1]);Wt.length=0}}}function i(s){a(s(e))}function l(s,u=er){let c=[s,u];return r.add(c),r.size===1&&(n=t(a,i)||er),s(e),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:a,update:i,subscribe:l}}function Qn(e){let t;return Oc(e,n=>t=n)(),t}function Pc(e){var t=fa;try{return fa=!0,e()}finally{fa=t}}function lo(e){let t={get:n=>Qn(t.store)[n],set:(n,r)=>{typeof n=="string"?Object.assign(Qn(t.store),{[n]:r}):Object.assign(Qn(t.store),n),t.store.set(Qn(t.store))},store:Lc(e)};return t}var er,Wt,fa,Dc,co=Ot(()=>{er=()=>{};Wt=[];fa=!1;globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:lo({}),i18n:lo({}),instances:new Set,plugins:new Set};Dc={ariaLinkLabel:"Altcha (site officiel)",enterCode:"Entrez le code",enterCodeAria:"Entrez le code que vous entendez. Appuyez sur Espace pour \xE9couter l'audio.",error:"\xC9chec de la v\xE9rification. Essayez \xE0 nouveau plus tard.",expired:"La v\xE9rification a expir\xE9. Essayez \xE0 nouveau.",footer:'Prot\xE9g\xE9 par <a href="https://altcha.org/" tabindex="-1" target="_blank" rel="noopener" aria-label="Altcha (site officiel)">ALTCHA</a>',getAudioChallenge:"Obtenir un d\xE9fi audio",label:"Je ne suis pas un robot",loading:"Chargement...",reload:"Recharger",verify:"V\xE9rifier",verificationRequired:"V\xE9rification requise !",verified:"V\xE9rifi\xE9",verifying:"V\xE9rification en cours...",waitAlert:"V\xE9rification en cours... veuillez patienter.",cancel:"Annuler",enterCodeFromImage:"Pour continuer, veuillez entrer le code de l'image ci-dessous."};globalThis.$altcha.i18n.set("fr-fr",Dc)});var uo,fo,xn,ho=Ot(()=>{(function(e){e.ERROR="error",e.LOADING="loading",e.PLAYING="playing",e.PAUSED="paused",e.READY="ready"})(uo||(uo={}));(function(e){e.SHA_256="SHA-256",e.SHA_384="SHA-384",e.SHA_512="SHA-512"})(fo||(fo={}));(function(e){e.CODE="code",e.ERROR="error",e.VERIFIED="verified",e.VERIFYING="verifying",e.UNVERIFIED="unverified",e.EXPIRED="expired"})(xn||(xn={}))});var vo={};ns(vo,{default:()=>tr});var tr,po=Ot(()=>{ro();io();so();co();ho();tr=class extends window.PluginBaseClass{init(){this.el.addEventListener("statechange",this.onStateChange.bind(this))}onStateChange(t){"detail"in t&&[xn.VERIFYING,xn.VERIFIED].includes(t.detail.state)===!1&&this.el.classList.remove("d-none")}}});window.PluginManager.register("AltchaPlugin",()=>Promise.resolve().then(()=>(po(),vo)),"altcha-widget");})();
