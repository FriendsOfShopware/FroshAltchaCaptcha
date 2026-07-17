(()=>{var jo=Object.defineProperty;var Ot=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(r){throw n=[r],r}};var Ho=(e,t)=>{for(var n in t)jo(e,n,{get:t[n],enumerable:!0})};function Wo(e){for(var t=0;t<e.length;t++)e[t]()}function Na(){var e,t,n=new Promise((r,a)=>{e=r,t=a});return{promise:n,resolve:e,reject:t}}function Ua(e){return e===this.v}function Fa(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function es(e){return!Fa(e,this.v)}function ts(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function ns(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function rs(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function as(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function is(e){throw new Error("https://svelte.dev/e/effect_orphan")}function os(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ss(){throw new Error("https://svelte.dev/e/hydration_failed")}function ls(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function cs(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function us(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function fs(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}function jt(e){ke=e}function ot(e,t=!1,n){ke={p:ke,i:!1,c:null,e:null,s:e,x:null,r:$,l:null}}function st(e){var t=ke,n=t.e;if(n!==null){t.e=null;for(var r of n)mi(r)}return e!==void 0&&(t.x=e),t.i=!0,ke=t.p,e??{}}function Ba(){return!0}function Ka(){var e=_t;_t=[],Wo(e)}function rt(e){if(_t.length===0&&!an){var t=_t;queueMicrotask(()=>{t===_t&&Ka()})}_t.push(e)}function bs(){for(;_t.length>0;)Ka()}function ms(){console.warn("https://svelte.dev/e/derived_inert")}function hn(e){console.warn("https://svelte.dev/e/hydration_mismatch")}function ys(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function ws(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Je(e){R=e}function me(e){if(e===null)throw hn(),Tt;return M=e}function $t(){return me(et(M))}function G(e){if(R){if(et(M)!==null)throw hn(),Tt;M=e}}function Nr(e=1){if(R){for(var t=e,n=M;t--;)n=et(n);M=n}}function Vr(e=!0){for(var t=0,n=M;;){if(n.nodeType===dn){var r=n.data;if(r===ja){if(t===0)return n;t-=1}else(r===Mr||r===za||r[0]==="["&&!isNaN(Number(r.slice(1))))&&(t+=1)}var a=et(n);e&&n.remove(),n=a}}function Ya(e){if(!e||e.nodeType!==dn)throw hn(),Tt;return e.data}function nt(e){if(typeof e!="object"||e===null||Ut in e)return e;let t=Ma(e);if(t!==qo&&t!==Go)return e;var n=new Map,r=Da(e),a=O(0),i=St,c=s=>{if(St===i)return s();var u=V,l=St;Me(null),Ca(i);var d=s();return Me(u),Ca(l),d};return r&&n.set("length",O(e.length)),new Proxy(e,{defineProperty(s,u,l){(!("value"in l)||l.configurable===!1||l.enumerable===!1||l.writable===!1)&&ls();var d=n.get(u);return d===void 0?c(()=>{var v=O(l.value);return n.set(u,v),v}):_(d,l.value,!0),!0},deleteProperty(s,u){var l=n.get(u);if(l===void 0){if(u in s){let d=c(()=>O(ie));n.set(u,d),on(a)}}else _(l,ie),on(a);return!0},get(s,u,l){if(u===Ut)return e;var d=n.get(u),v=u in s;if(d===void 0&&(!v||Nt(s,u)?.writable)&&(d=c(()=>{var b=nt(v?s[u]:ie),g=O(b);return g}),n.set(u,d)),d!==void 0){var h=o(d);return h===ie?void 0:h}return Reflect.get(s,u,l)},getOwnPropertyDescriptor(s,u){var l=Reflect.getOwnPropertyDescriptor(s,u);if(l&&"value"in l){var d=n.get(u);d&&(l.value=o(d))}else if(l===void 0){var v=n.get(u),h=v?.v;if(v!==void 0&&h!==ie)return{enumerable:!0,configurable:!0,value:h,writable:!0}}return l},has(s,u){if(u===Ut)return!0;var l=n.get(u),d=l!==void 0&&l.v!==ie||Reflect.has(s,u);if(l!==void 0||$!==null&&(!d||Nt(s,u)?.writable)){l===void 0&&(l=c(()=>{var h=d?nt(s[u]):ie,b=O(h);return b}),n.set(u,l));var v=o(l);if(v===ie)return!1}return d},set(s,u,l,d){var v=n.get(u),h=u in s;if(r&&u==="length")for(var b=l;b<v.v;b+=1){var g=n.get(b+"");g!==void 0?_(g,ie):b in s&&(g=c(()=>O(ie)),n.set(b+"",g))}if(v===void 0)(!h||Nt(s,u)?.writable)&&(v=c(()=>O(void 0)),_(v,nt(l)),n.set(u,v));else{h=v.v!==ie;var E=c(()=>nt(l));_(v,E)}var T=Reflect.getOwnPropertyDescriptor(s,u);if(T?.set&&T.set.call(d,l),!h){if(r&&typeof u=="string"){var L=n.get("length"),oe=Number(u);Number.isInteger(oe)&&oe>=L.v&&_(L,oe+1)}on(a)}return!0},ownKeys(s){o(a);var u=Reflect.ownKeys(s).filter(v=>{var h=n.get(v);return h===void 0||h.v!==ie});for(var[l,d]of n)d.v!==ie&&!(l in s)&&u.push(l);return u},setPrototypeOf(){cs()}})}function ya(e){try{if(e!==null&&typeof e=="object"&&Ut in e)return e[Ut]}catch{}return e}function _s(e,t){return Object.is(ya(e),ya(t))}function kr(){if(Et===void 0){Et=window,_r=document,qa=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Ga=Nt(t,"firstChild").get,Wa=Nt(t,"nextSibling").get,ba(e)&&(e[mr]=void 0,e[Va]=null,e[yr]=void 0,e.__e=void 0),ba(n)&&(n[wr]=void 0)}}function He(e=""){return document.createTextNode(e)}function Ae(e){return Ga.call(e)}function et(e){return Wa.call(e)}function Q(e,t){if(!R)return Ae(e);var n=Ae(M);if(n===null)n=M.appendChild(He());else if(t&&n.nodeType!==fn){var r=He();return n?.before(r),me(r),r}return t&&Nn(n),me(n),n}function Dt(e,t=!1){if(!R){var n=Ae(e);return n instanceof Comment&&n.data===""?et(n):n}if(t){if(M?.nodeType!==fn){var r=He();return M?.before(r),me(r),r}Nn(M)}return M}function W(e,t=1,n=!1){let r=R?M:e;for(var a;t--;)a=r,r=et(r);if(!R)return r;if(n){if(r?.nodeType!==fn){var i=He();return r===null?a?.after(i):r.before(i),me(i),i}Nn(r)}return me(r),r}function ks(e){e.textContent=""}function xs(){return!1}function Ur(e,t,n){return document.createElementNS(t??Ha,e,void 0)}function Nn(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===fn;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function Ja(e){var t=$;if(t===null)return V.f|=dt,e;if((t.f&gt)===0&&(t.f&zt)===0)throw e;ut(e,t)}function ut(e,t){for(;t!==null;){if((t.f&gr)!==0){if((t.f&gt)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}function ne(e,t){e.f=e.f&Es|t}function Fr(e){(e.f&Le)!==0||e.deps===null?ne(e,ue):ne(e,Xe)}function Za(e){if(e!==null)for(let t of e)(t.f&ve)===0||(t.f&At)===0||(t.f^=At,Za(t.deps))}function Xa(e,t,n){(e.f&de)!==0?t.add(e):(e.f&Xe)!==0&&n.add(e),Za(e.deps),ne(e,ue)}function Qa(e,t,n){if(e==null)return t(void 0),ft;let r=gn(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}function Cs(e,t=ft){let n=null,r=new Set;function a(s){if(Fa(e,s)&&(e=s,n)){let u=!Lt.length;for(let l of r)l[1](),Lt.push(l,e);if(u){for(let l=0;l<Lt.length;l+=2)Lt[l][0](Lt[l+1]);Lt.length=0}}}function i(s){a(s(e))}function c(s,u=ft){let l=[s,u];return r.add(l),r.size===1&&(n=t(a,i)||ft),s(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:i,subscribe:c}}function tn(e){let t;return Qa(e,n=>t=n)(),t}function wa(e,t,n){let r=n[t]??={store:null,source:li(void 0),unsubscribe:ft};if(r.store!==e&&!(xr in n))if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=ft;else{var a=!0;r.unsubscribe=Qa(e,i=>{a?r.source.v=i:_(r.source,i)}),a=!1}return e&&xr in n?tn(e):o(r.source)}function Ss(){let e={};function t(){Un(()=>{for(var n in e)e[n].unsubscribe();ln(e,xr,{enumerable:!1,value:!0})})}return[e,t]}function Y(e){var t=an;an=!0;try{for(var n;;){if(bs(),I===null)return n;I.flush()}}finally{an=t}}function Ts(){try{os()}catch(e){ut(e,Cr)}}function ka(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(je|Pe))===0&&pn(r)&&(tt=new Set,Ht(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&ki(r),tt?.size>0)){Ct.clear();for(let a of tt){if((a.f&(je|Pe))!==0)continue;let i=[a],c=a.parent;for(;c!==null;)tt.has(c)&&(tt.delete(c),i.push(c)),c=c.parent;for(let s=i.length-1;s>=0;s--){let u=i[s];(u.f&(je|Pe))===0&&Ht(u)}}tt.clear()}}tt=null}}function ei(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(let a of e.reactions){let i=a.f;(i&ve)!==0?ei(a,t,n,r):(i&(Vt|Ue))!==0&&(i&de)===0&&zr(a,t,r)&&(ne(a,de),jr(a))}}function zr(e,t,n){let r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(let a of e.deps){if(Ft.call(t,a))return!0;if((a.f&ve)!==0&&zr(a,t,n))return n.set(a,!0),!0}return n.set(e,!1),!1}function jr(e){I.schedule(e)}function ti(e,t){if(!((e.f&Ze)!==0&&(e.f&ue)!==0)){(e.f&de)!==0?t.d.push(e):(e.f&Xe)!==0&&t.m.push(e),ne(e,ue);for(var n=e.first;n!==null;)ti(n,t),n=n.next}}function ni(e){ne(e,ue);for(var t=e.first;t!==null;)ni(t),t=t.next}function $s(e){let t=0,n=vn(0),r;return()=>{Kr()&&(o(n),Fn(()=>(t===0&&(r=gn(()=>e(()=>on(n)))),t+=1,()=>{rt(()=>{t-=1,t===0&&(r?.(),r=void 0,on(n))})})))}}function Is(e,t,n,r){new Sr(e,t,n,r)}function ri(e,t,n,r){let a=Hr;var i=e.filter(h=>!h.settled);if(n.length===0&&i.length===0){r(t.map(a));return}var c=$,s=Os(),u=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(h=>h.promise)):null;function l(h){if((c.f&je)===0){s();try{r(h)}catch(b){ut(b,c)}On()}}var d=ai();if(n.length===0){u.then(()=>l(t.map(a))).finally(d);return}function v(){Promise.all(n.map(h=>Ls(h))).then(h=>l([...t.map(a),...h])).catch(h=>ut(h,c)).finally(d)}u?u.then(()=>{s(),v(),On()}):v()}function Os(){var e=$,t=V,n=ke,r=I;return function(i=!0){Qe(e),Me(t),jt(n),i&&(e.f&je)===0&&(r?.activate(),r?.apply())}}function On(e=!0){Qe(null),Me(null),jt(null),e&&I?.deactivate()}function ai(){var e=$,t=e.b,n=I,r=t.is_rendered();return t.update_pending_count(1,n),n.increment(r,e),()=>{t.update_pending_count(-1,n),n.decrement(r,e)}}function Hr(e){var t=ve|de;return $!==null&&($.f|=Rt),{ctx:ke,deps:null,effects:null,equals:Ua,f:t,fn:e,reactions:null,rv:0,v:ie,wv:0,parent:$,ac:null}}function Ls(e,t,n){let r=$;r===null&&ns();var a=void 0,i=vn(ie),c=!V,s=new Set;return Ks(()=>{var u=$,l=Na();a=l.promise;try{Promise.resolve(e()).then(l.resolve,b=>{b!==Mn&&l.reject(b)}).finally(On)}catch(b){l.reject(b),On()}var d=I;if(c){if((u.f&gt)!==0)var v=ai();if(r.b.is_rendered())d.async_deriveds.get(u)?.reject(xn);else for(let b of s.values())b.reject(xn);s.add(l),d.async_deriveds.set(u,l)}let h=(b,g=void 0)=>{v?.(),s.delete(l),g!==xn&&(d.activate(),g?(i.f|=dt,Pn(i,g)):((i.f&dt)!==0&&(i.f^=dt),Pn(i,b)),d.deactivate())};l.promise.then(h,b=>h(null,b||"unknown"))}),Un(()=>{for(let u of s)u.reject(xn)}),new Promise(u=>{function l(d){function v(){d===a?u(i):l(a)}d.then(v,v)}l(a)})}function be(e){let t=Hr(e);return fi(t),t}function Ps(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)he(t[n])}}function Br(e){var t,n=$,r=e.parent;if(!it&&r!==null&&e.v!==ie&&(r.f&(je|Pe))!==0)return ms(),e.v;Qe(r);try{e.f&=~At,Ps(e),t=pi(e)}finally{Qe(n)}return t}function ii(e){var t=Br(e);if(!e.equals(t)&&(e.wv=hi(),(!I?.is_fork||e.deps===null)&&(I!==null?(I.capture(e,t,!0),Er?.capture(e,t,!0)):e.v=t,e.deps===null))){ne(e,ue);return}it||(Fe!==null?(Kr()||I?.is_fork)&&Fe.set(e,t):Fr(e))}function Ds(e){if(e.effects!==null)for(let t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac?.abort(Mn),t.fn!==null&&(t.teardown=ft),t.ac=null,cn(t,0),qr(t))}function oi(e){if(e.effects!==null)for(let t of e.effects)t.teardown&&t.fn!==null&&Ht(t)}function vn(e,t){var n={f:0,v:e,reactions:null,equals:Ua,rv:0,wv:0};return n}function O(e,t){let n=vn(e);return fi(n),n}function li(e,t=!1,n=!0){let r=vn(e);return t||(r.equals=es),r}function _(e,t,n=!1){V!==null&&(!ze||(V.f&Rn)!==0)&&Ba()&&(V.f&(ve|Ue|Vt|Rn))!==0&&(De===null||!Ft.call(De,e))&&us();let r=n?nt(t):t;return Pn(e,r,Sn)}function Pn(e,t,n=null){if(!e.equals(t)){Ct.set(e,it?t:e.v);var r=vt.ensure();if(r.capture(e,t),(e.f&ve)!==0){let a=e;(e.f&de)!==0&&Br(a),Fe===null&&Fr(a)}e.wv=hi(),ci(e,de,n),$!==null&&($.f&ue)!==0&&($.f&(Ze|at))===0&&(Oe===null?Us([e]):Oe.push(e)),!r.is_fork&&Ln.size>0&&!si&&Ms()}return t}function Ms(){si=!1;for(let e of Ln){(e.f&ue)!==0&&ne(e,Xe);let t;try{t=pn(e)}catch{t=!0}t&&Ht(e)}Ln.clear()}function on(e){_(e,e.v+1)}function ci(e,t,n){var r=e.reactions;if(r!==null)for(var a=r.length,i=0;i<a;i++){var c=r[i],s=c.f,u=(s&de)===0;if(u&&ne(c,t),(s&Rn)!==0)Ln.add(c);else if((s&ve)!==0){var l=c;Fe?.delete(l),(s&At)===0&&(s&Le&&($===null||($.f&In)===0)&&(c.f|=At),ci(l,Xe,n))}else if(u){var d=c;(s&Ue)!==0&&tt!==null&&tt.add(d),n!==null?n.push(d):jr(d)}}}function Ns(e,t){if(t){let n=document.body;e.autofocus=!0,rt(()=>{document.activeElement===n&&e.focus()})}}function ui(){xa||(xa=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(let t of e.target.elements)t[rn]?.()})},{capture:!0}))}function Vn(e){var t=V,n=$;Me(null),Qe(null);try{return e()}finally{Me(t),Qe(n)}}function Vs(e,t,n,r=n){e.addEventListener(t,()=>Vn(n));let a=e[rn];a?e[rn]=()=>{a(),r(!0)}:e[rn]=()=>r(!0),ui()}function Ea(e){it=e}function Me(e){V=e}function Qe(e){$=e}function fi(e){V!==null&&(De===null?De=[e]:De.push(e))}function Us(e){Oe=e}function Ca(e){St=e}function hi(){return++di}function pn(e){var t=e.f;if((t&de)!==0)return!0;if(t&ve&&(e.f&=~At),(t&Xe)!==0){for(var n=e.deps,r=n.length,a=0;a<r;a++){var i=n[a];if(pn(i)&&ii(i),i.wv>e.wv)return!0}(t&Le)!==0&&Fe===null&&ne(e,ue)}return!1}function vi(e,t,n=!0){var r=e.reactions;if(r!==null&&!(De!==null&&Ft.call(De,e)))for(var a=0;a<r.length;a++){var i=r[a];(i.f&ve)!==0?vi(i,t,!1):t===i&&(n?ne(i,de):(i.f&ue)!==0&&ne(i,Xe),jr(i))}}function pi(e){var t=_e,n=Ce,r=Oe,a=V,i=De,c=ke,s=ze,u=St,l=e.f;_e=null,Ce=0,Oe=null,V=(l&(Ze|at))===0?e:null,De=null,jt(e.ctx),ze=!1,St=++kt,e.ac!==null&&(Vn(()=>{e.ac.abort(Mn)}),e.ac=null);try{e.f|=In;var d=e.fn,v=d();e.f|=gt;var h=e.deps,b=I?.is_fork;if(_e!==null){var g;if(b||cn(e,Ce),h!==null&&Ce>0)for(h.length=Ce+_e.length,g=0;g<_e.length;g++)h[Ce+g]=_e[g];else e.deps=h=_e;if(Kr()&&(e.f&Le)!==0)for(g=Ce;g<h.length;g++)(h[g].reactions??=[]).push(e)}else!b&&h!==null&&Ce<h.length&&(cn(e,Ce),h.length=Ce);if(Ba()&&Oe!==null&&!ze&&h!==null&&(e.f&(ve|Xe|de))===0)for(g=0;g<Oe.length;g++)vi(Oe[g],e);if(a!==null&&a!==e){if(kt++,a.deps!==null)for(let E=0;E<n;E+=1)a.deps[E].rv=kt;if(t!==null)for(let E of t)E.rv=kt;Oe!==null&&(r===null?r=Oe:r.push(...Oe))}return(e.f&dt)!==0&&(e.f^=dt),v}catch(E){return Ja(E)}finally{e.f^=In,_e=t,Ce=n,Oe=r,V=a,De=i,jt(c),ze=s,St=u}}function Fs(e,t){let n=t.reactions;if(n!==null){var r=Bo.call(n,e);if(r!==-1){var a=n.length-1;a===0?n=t.reactions=null:(n[r]=n[a],n.pop())}}if(n===null&&(t.f&ve)!==0&&(_e===null||!Ft.call(_e,t))){var i=t;(i.f&Le)!==0&&(i.f^=Le,i.f&=~At),i.v!==ie&&Fr(i),Ds(i),cn(i,0)}}function cn(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Fs(e,n[r])}function Ht(e){var t=e.f;if((t&je)===0){ne(e,ue);var n=$,r=An;$=e,An=!0;try{(t&(Ue|Dr))!==0?Ys(e):qr(e),wi(e);var a=pi(e);e.teardown=typeof a=="function"?a:null,e.wv=di;var i}finally{An=r,$=n}}}async function xt(){await Promise.resolve(),Y()}function o(e){var t=e.f,n=(t&ve)!==0;if(V!==null&&!ze){var r=$!==null&&($.f&je)!==0;if(!r&&(De===null||!Ft.call(De,e))){var a=V.deps;if((V.f&In)!==0)e.rv<kt&&(e.rv=kt,_e===null&&a!==null&&a[Ce]===e?Ce++:_e===null?_e=[e]:_e.push(e));else{(V.deps??=[]).push(e);var i=e.reactions;i===null?e.reactions=[V]:Ft.call(i,V)||i.push(V)}}}if(it&&Ct.has(e))return Ct.get(e);if(n){var c=e;if(it){var s=c.v;return((c.f&ue)===0&&c.reactions!==null||bi(c))&&(s=Br(c)),Ct.set(c,s),s}var u=(c.f&Le)===0&&!ze&&V!==null&&(An||(V.f&Le)!==0),l=(c.f&gt)===0;pn(c)&&(u&&(c.f|=Le),ii(c)),u&&!l&&(oi(c),gi(c))}if(Fe?.has(e))return Fe.get(e);if((e.f&dt)!==0)throw e.v;return e.v}function gi(e){if(e.f|=Le,e.deps!==null)for(let t of e.deps)(t.reactions??=[]).push(e),(t.f&ve)!==0&&(t.f&Le)===0&&(oi(t),gi(t))}function bi(e){if(e.v===ie)return!0;if(e.deps===null)return!1;for(let t of e.deps)if(Ct.has(t)||(t.f&ve)!==0&&bi(t))return!0;return!1}function gn(e){var t=ze;try{return ze=!0,e()}finally{ze=t}}function zs(e){$===null&&(V===null&&is(),as()),it&&rs()}function js(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Be(e,t){var n=$;n!==null&&(n.f&Pe)!==0&&(e|=Pe);var r={ctx:ke,deps:null,nodes:null,f:e|de|Le,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};I?.register_created_effect(r);var a=r;if((e&zt)!==0)Mt!==null?Mt.push(r):vt.ensure().schedule(r);else if(t!==null){try{Ht(r)}catch(c){throw he(r),c}a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&Rt)===0&&(a=a.first,(e&Ue)!==0&&(e&ht)!==0&&a!==null&&(a.f|=ht))}if(a!==null&&(a.parent=n,n!==null&&js(a,n),V!==null&&(V.f&ve)!==0&&(e&at)===0)){var i=V;(i.effects??=[]).push(a)}return r}function Kr(){return V!==null&&!ze}function Un(e){let t=Be(Dn,null);return ne(t,ue),t.teardown=e,t}function Se(e){zs();var t=$.f,n=!V&&(t&Ze)!==0&&(t&gt)===0;if(n){var r=ke;(r.e??=[]).push(e)}else return mi(e)}function mi(e){return Be(zt|Zo,e)}function Hs(e){vt.ensure();let t=Be(at|Rt,e);return()=>{he(t)}}function Bs(e){vt.ensure();let t=Be(at|Rt,e);return(n={})=>new Promise(r=>{n.outro?sn(t,()=>{he(t),r(void 0)}):(he(t),r(void 0))})}function Yr(e){return Be(zt,e)}function Ks(e){return Be(Vt|Rt,e)}function Fn(e,t=0){return Be(Dn|t,e)}function pe(e,t=[],n=[],r=[]){ri(r,t,n,a=>{Be(Dn,()=>e(...a.map(o)))})}function bn(e,t=0){var n=Be(Ue|t,e);return n}function yi(e,t=0){var n=Be(Dr|t,e);return n}function Ve(e){return Be(Ze|Rt,e)}function wi(e){var t=e.teardown;if(t!==null){let n=it,r=V;Ea(!0),Me(null);try{t.call(null)}finally{Ea(n),Me(r)}}}function qr(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){let a=n.ac;a!==null&&Vn(()=>{a.abort(Mn)});var r=n.next;(n.f&at)!==0?n.parent=null:he(n,t),n=r}}function Ys(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&Ze)===0&&he(t),t=n}}function he(e,t=!0){var n=!1;(t||(e.f&Jo)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(_i(e.nodes.start,e.nodes.end),n=!0),ne(e,br),qr(e,t&&!n),cn(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(let i of r)i.stop();wi(e),e.f^=br,e.f|=je;var a=e.parent;a!==null&&a.first!==null&&ki(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function _i(e,t){for(;e!==null;){var n=e===t?null:et(e);e.remove(),e=n}}function ki(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function sn(e,t,n=!0){var r=[];xi(e,r,!0);var a=()=>{n&&he(e),t&&t()},i=r.length;if(i>0){var c=()=>--i||a();for(var s of r)s.out(c)}else a()}function xi(e,t,n){if((e.f&Pe)===0){e.f^=Pe;var r=e.nodes&&e.nodes.t;if(r!==null)for(let s of r)(s.is_global||n)&&t.push(s);for(var a=e.first;a!==null;){var i=a.next;if((a.f&at)===0){var c=(a.f&ht)!==0||(a.f&Ze)!==0&&(e.f&Ue)!==0;xi(a,t,c?n:!1)}a=i}}}function qs(e){Ei(e,!0)}function Ei(e,t){if((e.f&Pe)!==0){e.f^=Pe,(e.f&ue)===0&&(ne(e,de),vt.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,a=(n.f&ht)!==0||(n.f&Ze)!==0;Ei(n,a?t:!1),n=r}var i=e.nodes&&e.nodes.t;if(i!==null)for(let c of i)(c.is_global||t)&&c.in()}}function Ci(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var a=n===r?null:et(n);t.append(n),n=a}}function Sa(e){let t={get:n=>tn(t.store)[n],set:(n,r)=>{typeof n=="string"?Object.assign(tn(t.store),{[n]:r}):Object.assign(tn(t.store),n),t.store.set(tn(t.store))},store:Cs(e)};return t}function Ai(e,t,n,r={}){function a(i){if(r.capture||Tr.call(t,i),!i.cancelBubble)return Vn(()=>n?.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?rt(()=>{t.addEventListener(e,a,r)}):t.addEventListener(e,a,r),a}function ce(e,t,n,r,a){var i={capture:r,passive:a},c=Ai(e,t,n,i);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Un(()=>{t.removeEventListener(e,c,i)})}function zn(e,t,n){(t[nn]??={})[e]=n}function jn(e){for(var t=0;t<e.length;t++)Si.add(e[t]);for(var n of Ar)n(e)}function Tr(e){var t=this,n=t.ownerDocument,r=e.type,a=e.composedPath?.()||[],i=a[0]||e.target;Aa=e;var c=0,s=Aa===e&&e[nn];if(s){var u=a.indexOf(s);if(u!==-1&&(t===document||t===window)){e[nn]=t;return}var l=a.indexOf(t);if(l===-1)return;u<=l&&(c=u)}if(i=a[c]||e.target,i!==t){ln(e,"currentTarget",{configurable:!0,get(){return i||n}});var d=V,v=$;Me(null),Qe(null);try{for(var h,b=[];i!==null;){var g=i.assignedSlot||i.parentNode||i.host||null;try{var E=i[nn]?.[r];E!=null&&(!i.disabled||e.target===i)&&E.call(i,e)}catch(T){h?b.push(T):h=T}if(e.cancelBubble||g===t||g===null)break;i=g}if(h){for(let T of b)queueMicrotask(()=>{throw T});throw h}}finally{e[nn]=t,delete e.currentTarget,Me(d),Qe(v)}}}function Zs(e){return Js?.createHTML(e)??e}function Ti(e){var t=Ur("template");return t.innerHTML=Zs(e.replaceAll("<!>","<!---->")),t.content}function Te(e,t){var n=$;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function Z(e,t){var n=(t&ds)!==0,r=(t&hs)!==0,a,i=!e.startsWith("<!>");return()=>{if(R)return Te(M,null),M;a===void 0&&(a=Ti(i?e:"<!>"+e),n||(a=Ae(a)));var c=r||qa?document.importNode(a,!0):a.cloneNode(!0);if(n){var s=Ae(c),u=c.lastChild;Te(s,u)}else Te(c,c);return c}}function Xs(e,t,n="svg"){var r=!e.startsWith("<!>"),a=`<${n}>${r?e:"<!>"+e}</${n}>`,i;return()=>{if(R)return Te(M,null),M;if(!i){var c=Ti(a),s=Ae(c);i=Ae(s)}var u=i.cloneNode(!0);return Te(u,u),u}}function Gr(e,t){return Xs(e,t,"svg")}function En(e=""){if(!R){var t=He(e+"");return Te(t,t),t}var n=M;return n.nodeType!==fn?(n.before(n=He()),me(n)):Nn(n),Te(n,n),n}function Ta(){if(R)return Te(M,null),M;var e=document.createDocumentFragment(),t=document.createComment(""),n=He();return e.append(t,n),Te(t,n),e}function D(e,t){if(R){var n=$;((n.f&gt)===0||n.nodes.end===null)&&(n.nodes.end=M),$t();return}e!==null&&e.before(t)}function Qs(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}function tl(e){return el.includes(e)}function rl(e){return e=e.toLowerCase(),nl[e]??e}function il(e){return al.includes(e)}function We(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[wr]??=e.nodeValue)&&(e[wr]=n,e.nodeValue=`${n}`)}function $i(e,t){return Ri(e,t)}function ol(e,t){kr(),t.intro=t.intro??!1;let n=t.target,r=R,a=M;try{for(var i=Ae(n);i&&(i.nodeType!==dn||i.data!==Mr);)i=et(i);if(!i)throw Tt;Je(!0),me(i);let c=Ri(e,{...t,anchor:i});return Je(!1),c}catch(c){if(c instanceof Error&&c.message.split(`
`).some(s=>s.startsWith("https://svelte.dev/e/")))throw c;return c!==Tt&&console.warn("Failed to hydrate: ",c),t.recover===!1&&ss(),kr(),ks(n),Je(!1),$i(e,t)}finally{Je(r),me(a)}}function Ri(e,{target:t,anchor:n,props:r={},events:a,context:i,intro:c=!0,transformError:s}){kr();var u=void 0,l=Bs(()=>{var d=n??t.appendChild(He());Is(d,{pending:()=>{}},b=>{ot({});var g=ke;if(i&&(g.c=i),a&&(r.$$events=a),R&&Te(b,null),u=e(b,r)||{},R&&($.nodes.end=M,M===null||M.nodeType!==dn||M.data!==ja))throw hn(),Tt;st()},s);var v=new Set,h=b=>{for(var g=0;g<b.length;g++){var E=b[g];if(!v.has(E)){v.add(E);var T=il(E);for(let re of[t,document]){var L=Cn.get(re);L===void 0&&(L=new Map,Cn.set(re,L));var oe=L.get(E);oe===void 0?(re.addEventListener(E,Tr,{passive:T}),L.set(E,1)):L.set(E,oe+1)}}}};return h(Ko(Si)),Ar.add(h),()=>{for(var b of v)for(let T of[t,document]){var g=Cn.get(T),E=g.get(b);--E==0?(T.removeEventListener(b,Tr),g.delete(b),g.size===0&&Cn.delete(T)):g.set(b,E)}Ar.delete(h),d!==n&&d.parentNode?.removeChild(d)}});return $r.set(u,l),u}function sl(e,t){let n=$r.get(e);return n?($r.delete(e),n(t)):Promise.resolve()}function ll(e,t,...n){var r=new Bt(e);bn(()=>{let a=t()??null;r.ensure(a,a&&(i=>a(i,...n)))},ht)}function Wr(e){ke===null&&ts(),Se(()=>{let t=gn(e);if(typeof t=="function")return t})}function le(e,t,n=!1){var r;R&&(r=M,$t());var a=new Bt(e),i=n?ht:0;function c(s,u){if(R){var l=Ya(r);if(s!==parseInt(l.substring(1))){var d=Vr();me(d),a.anchor=d,Je(!1),a.ensure(s,u),Je(!0);return}}a.ensure(s,u)}bn(()=>{var s=!1;t((u,l=0)=>{s=!0,c(l,u)}),s||c(-1,null)},i)}function ul(e,t,n){R&&$t();var r=new Bt(e);bn(()=>{var a=t();a!==a&&(a=cl),r.ensure(a,n)})}function Ii(e,t,n=!1,r=!1,a=!1,i=!1){var c=e,s="";if(n){var u=e;R&&(c=me(Ae(u)))}pe(()=>{var l=$;if(s===(s=t()??"")){R&&$t();return}if(n&&!R){l.nodes=null,u.innerHTML=s,s!==""&&Te(Ae(u),u.lastChild);return}if(l.nodes!==null&&(_i(l.nodes.start,l.nodes.end),l.nodes=null),s!==""){if(R){M.data;for(var d=$t(),v=d;d!==null&&(d.nodeType!==dn||d.data!=="");)v=d,d=et(d);if(d===null)throw hn(),Tt;Te(M,v),c=me(d);return}var h=r?vs:a?ps:void 0,b=Ur(r?"svg":a?"math":"template",h);b.innerHTML=s;var g=r||a?b:b.content;if(Te(Ae(g),g.lastChild),r||a)for(;Ae(g);)c.before(Ae(g));else c.before(g)}})}function fl(e,t,n){var r;R&&(r=M,$t());var a=new Bt(e);bn(()=>{var i=t()??null;if(R){var c=Ya(r),s=c===Mr,u=i!==null;if(s!==u){var l=Vr();me(l),a.anchor=l,Je(!1),a.ensure(i,i&&(d=>n(d,i))),Je(!0);return}}a.ensure(i,i&&(d=>n(d,i)))},ht)}function dl(e,t){var n=void 0,r;yi(()=>{n!==(n=t())&&(r&&(he(r),r=null),n&&(r=Ve(()=>{Yr(()=>n(e))})))})}function Oi(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=Oi(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function hl(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=Oi(e))&&(r&&(r+=" "),r+=t);return r}function vl(e){return typeof e=="object"?hl(e):e??""}function pl(e,t,n){var r=e==null?"":""+e;if(n){for(var a of Object.keys(n))if(n[a])r=r?r+" "+a:a;else if(r.length)for(var i=a.length,c=0;(c=r.indexOf(a,c))>=0;){var s=c+i;(c===0||$a.includes(r[c-1]))&&(s===r.length||$a.includes(r[s]))?r=(c===0?"":r.substring(0,c))+r.substring(s+1):c=s}}return r===""?null:r}function Ra(e,t=!1){var n=t?" !important;":";",r="";for(var a of Object.keys(e)){var i=e[a];i!=null&&i!==""&&(r+=" "+a+": "+i+n)}return r}function fr(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function gl(e,t){if(t){var n="",r,a;if(Array.isArray(t)?(r=t[0],a=t[1]):r=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,c=0,s=!1,u=[];r&&u.push(...Object.keys(r).map(fr)),a&&u.push(...Object.keys(a).map(fr));var l=0,d=-1;let E=e.length;for(var v=0;v<E;v++){var h=e[v];if(s?h==="/"&&e[v-1]==="*"&&(s=!1):i?i===h&&(i=!1):h==="/"&&e[v+1]==="*"?s=!0:h==='"'||h==="'"?i=h:h==="("?c++:h===")"&&c--,!s&&i===!1&&c===0){if(h===":"&&d===-1)d=v;else if(h===";"||v===E-1){if(d!==-1){var b=fr(e.substring(l,d).trim());if(!u.includes(b)){h!==";"&&v++;var g=e.substring(l,v).trim();n+=" "+g+";"}}l=v+1,d=-1}}}}return r&&(n+=Ra(r)),a&&(n+=Ra(a,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function bl(e,t,n,r,a,i){var c=e[mr];if(R||c!==n||c===void 0){var s=pl(n,r,i);(!R||s!==e.getAttribute("class"))&&(s==null?e.removeAttribute("class"):t?e.className=s:e.setAttribute("class",s)),e[mr]=n}else if(i&&a!==i)for(var u in i){var l=!!i[u];(a==null||l!==!!a[u])&&e.classList.toggle(u,l)}return i}function dr(e,t={},n,r){for(var a in n){var i=n[a];t[a]!==i&&(n[a]==null?e.style.removeProperty(a):e.style.setProperty(a,i,r))}}function ml(e,t,n,r){var a=e[yr];if(R||a!==t){var i=gl(t,r);(!R||i!==e.getAttribute("style"))&&(i==null?e.removeAttribute("style"):e.style.cssText=i),e[yr]=t}else r&&(Array.isArray(r)?(dr(e,n?.[0],r[0]),dr(e,n?.[1],r[1],"important")):dr(e,n,r));return r}function Rr(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Da(t))return ys();for(var r of e.options)r.selected=t.includes(Ia(r));return}for(r of e.options){var a=Ia(r);if(_s(a,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function yl(e){var t=new MutationObserver(()=>{Rr(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Un(()=>{t.disconnect()})}function Ia(e){return"__value"in e?e.__value:e.value}function Jr(e){if(R){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var r=e.value;j(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var a=e.checked;j(e,"checked",null),e.checked=a}}};e[rn]=n,rt(n),ui()}}function Cl(e,t){var n=Zr(e);n.value===(n.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!==El)||(e.value=t??"")}function Sl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function j(e,t,n,r){var a=Zr(e);R&&(a[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName===wl)||a[t]!==(a[t]=n)&&(t==="loading"&&(e[Qo]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Di(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Al(e,t,n,r,a=!1,i=!1){if(R&&a&&e.nodeName===_l){var c=e,s=c.type==="checkbox"?"defaultChecked":"defaultValue";s in n||Jr(c)}var u=Zr(e),l=u[Li],d=!u[Pi];let v=R&&l;v&&Je(!1);var h=t||{},b=e.nodeName===kl;for(var g in t)g in n||(n[g]=null);n.class?n.class=vl(n.class):n[Qt]&&(n.class=null),n[en]&&(n.style??=null);var E=Di(e);for(let x in n){let P=n[x];if(b&&x==="value"&&P==null){e.value=e.__value="",h[x]=P;continue}if(x==="class"){var T=e.namespaceURI==="http://www.w3.org/1999/xhtml";bl(e,T,P,r,t?.[Qt],n[Qt]),h[x]=P,h[Qt]=n[Qt];continue}if(x==="style"){ml(e,P,t?.[en],n[en]),h[x]=P,h[en]=n[en];continue}var L=h[x];if(!(P===L&&!(P===void 0&&e.hasAttribute(x)))){h[x]=P;var oe=x[0]+x[1];if(oe!=="$$")if(oe==="on"){let ee={},U="$$"+x,N=x.slice(2);var re=tl(N);if(Qs(N)&&(N=N.slice(0,-7),ee.capture=!0),!re&&L){if(P!=null)continue;e.removeEventListener(N,h[U],ee),h[U]=null}if(re)zn(N,e,P),jn([N]);else if(P!=null){let Ne=function(ge){h[x].call(this,ge)};var se=Ne;h[U]=Ai(N,e,Ne,ee)}}else if(x==="style")j(e,x,P);else if(x==="autofocus")Ns(e,!!P);else if(!l&&(x==="__value"||x==="value"&&P!=null))e.value=e.__value=P;else if(x==="selected"&&b)Sl(e,P);else{var H=x;d||(H=rl(H));var Ke=H==="defaultValue"||H==="defaultChecked";if(P==null&&!l&&!Ke)if(u[x]=null,H==="value"||H==="checked"){let ee=e,U=t===void 0;if(H==="value"){let N=ee.defaultValue;ee.removeAttribute(H),ee.defaultValue=N,ee.value=ee.__value=U?N:null}else{let N=ee.defaultChecked;ee.removeAttribute(H),ee.defaultChecked=N,ee.checked=U?N:!1}}else e.removeAttribute(x);else Ke||E.includes(H)&&(l||typeof P!="string")?(e[H]=P,H in u&&(u[H]=ie)):typeof P!="function"&&j(e,H,P)}}}return v&&Je(!0),h}function Hn(e,t,n=[],r=[],a=[],i,c=!1,s=!1){ri(a,n,r,u=>{var l=void 0,d={},v=e.nodeName===xl,h=!1;if(yi(()=>{var g=t(...u.map(o)),E=Al(e,l,g,i,c,s);h&&v&&"value"in g&&Rr(e,g.value);for(let L of Object.getOwnPropertySymbols(d))g[L]||he(d[L]);for(let L of Object.getOwnPropertySymbols(g)){var T=g[L];L.description===gs&&(!l||T!==l[L])&&(d[L]&&he(d[L]),d[L]=Ve(()=>dl(e,()=>T))),E[L]=T}l=E}),v){var b=e;Yr(()=>{Rr(b,l.value,!0),yl(b)})}h=!0})}function Zr(e){return e[Va]??={[Li]:e.nodeName.includes("-"),[Pi]:e.namespaceURI===Ha}}function Di(e){var t=e.getAttribute("is")||e.nodeName,n=Oa.get(t);if(n)return n;Oa.set(t,n=[]);for(var r,a=e,i=Element.prototype;i!==a;){r=Yo(a);for(var c in r)r[c].set&&c!=="innerHTML"&&c!=="textContent"&&c!=="innerText"&&n.push(c);a=Ma(a)}return n}function Tl(e,t,n=t){var r=new WeakSet;Vs(e,"input",async a=>{var i=a?e.defaultValue:e.value;if(i=hr(e)?vr(i):i,n(i),I!==null&&r.add(I),await xt(),i!==(i=t())){var c=e.selectionStart,s=e.selectionEnd,u=e.value.length;if(e.value=i??"",s!==null){var l=e.value.length;c===s&&s===u&&l>u?(e.selectionStart=l,e.selectionEnd=l):(e.selectionStart=c,e.selectionEnd=Math.min(s,l))}}}),(R&&e.defaultValue!==e.value||gn(t)==null&&e.value)&&(n(hr(e)?vr(e.value):e.value),I!==null&&r.add(I)),Fn(()=>{var a=t();if(e===document.activeElement){var i=I;if(r.has(i))return}hr(e)&&a===vr(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function hr(e){var t=e.type;return t==="number"||t==="range"}function vr(e){return e===""?null:+e}function pr(e,t){return e===t||e?.[Ut]===t}function pt(e={},t,n,r){var a=ke.r,i=$;return Yr(()=>{var c,s;return Fn(()=>{c=s,s=[],gn(()=>{pr(n(...s),e)||(t(e,...s),c&&pr(n(...c),e)&&t(null,...c))})}),()=>{let u=i;for(;u!==a&&u.parent!==null&&u.parent.f&br;)u=u.parent;let l=()=>{s&&pr(n(...s),e)&&t(null,...s)},d=u.teardown;u.teardown=()=>{l(),d?.()}}}),e}function Bn(e,t,n){return new Proxy({props:e,exclude:t},$l)}function J(e,t,n,r){var a=r,i=!0,c=()=>(i&&(i=!1,a=r),a),s;s=e[t],s===void 0&&r!==void 0&&(s=c());var u;u=()=>{var h=e[t];return h===void 0?c():(i=!0,h)};var l=!1,d=Hr(()=>(l=!1,u())),v=$;return(function(h,b){if(arguments.length>0){let g=b?o(d):h;return _(d,g),l=!0,a!==void 0&&(a=g),h}return it&&l||(v.f&je)!==0?d.v:o(d)})}function Rl(e){return new Ir(e)}function Tn(e,t,n,r){let a=n[e]?.type;if(t=a==="Boolean"&&typeof t!="boolean"?t!=null:t,!r||!n[e])return t;if(r==="toAttribute")switch(a){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(a){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function Il(e){let t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}function bt(e,t,n,r,a,i){let c=class extends Mi{constructor(){super(e,n,a),this.$$p_d=t}static get observedAttributes(){return $n(t).map(s=>(t[s].attribute||s).toLowerCase())}};return $n(t).forEach(s=>{ln(c.prototype,s,{get(){return this.$$c&&s in this.$$c?this.$$c[s]:this.$$d[s]},set(u){u=Tn(s,u,t),this.$$d[s]=u;var l=this.$$c;if(l){var d=Nt(l,s)?.get;d?l[s]=u:l.$set({[s]:u})}}})}),r.forEach(s=>{ln(c.prototype,s,{get(){return this.$$c?.[s]}})}),e.element=c,c}function Ni(e,t){ot(t,!0);let n=J(t,"loading"),r=Bn(t,["$$slots","$$events","$$legacy","$$host","loading"]),a;function i(){a?.click()}var c={get loading(){return n()},set loading(d){n(d),Y()}},s=Ol(),u=Q(s);Hn(u,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),pt(u,d=>a=d,()=>a);var l=W(u,2);return Nr(2),G(s),pe(()=>j(s,"data-loading",n())),zn("click",l,i),D(e,s),st(c)}function Vi(e,t){ot(t,!0);let n=J(t,"loading"),r=Bn(t,["$$slots","$$events","$$legacy","$$host","loading"]);var a={get loading(){return n()},set loading(s){n(s),Y()}},i=Ll(),c=Q(i);return Hn(c,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),Nr(2),G(i),pe(()=>j(i,"data-loading",n())),D(e,i),st(a)}function Xr(e,t){ot(t,!0);let n=J(t,"strings"),r="https://altcha.org";var a={get strings(){return n()},set strings(s){n(s),Y()}},i=Pl(),c=Q(i);return j(c,"href",r),G(i),pe(()=>j(c,"aria-label",n().ariaLinkLabel)),D(e,i),st(a)}function Or(e,t){ot(t,!0);let n=J(t,"logo"),r=J(t,"strings");var a={get logo(){return n()},set logo(l){n(l),Y()},get strings(){return r()},set strings(l){r(l),Y()}},i=Dl(),c=Q(i);Ii(c,()=>r().footer,!0),G(c);var s=W(c,2);{var u=l=>{Xr(l,{get strings(){return r()}})};le(s,l=>{n()&&l(u)})}return G(i),D(e,i),st(a)}function Ui(e,t){ot(t,!0);let n=J(t,"loading"),r=Bn(t,["$$slots","$$events","$$legacy","$$host","loading"]),a;function i(){a?.click()}var c={get loading(){return n()},set loading(d){n(d),Y()}},s=Ml(),u=Q(s);Hn(u,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),pt(u,d=>a=d,()=>a);var l=W(u,2);return G(s),pe(()=>j(s,"data-loading",n())),zn("click",l,i),D(e,s),st(c)}function Fi(e,t){ot(t,!0);let n=J(t,"audioUrl"),r=J(t,"codeChallenge"),a=J(t,"config"),i=J(t,"imageUrl"),c=J(t,"onCancel"),s=J(t,"onReload"),u=J(t,"onSubmit"),l=J(t,"strings"),d=O(void 0),v=O(void 0),h=O(void 0),b=O(!1),g=O(""),E=O(!1);Wr(()=>(a().disableAutoFocus||xt().then(()=>{o(h)?.focus()}),()=>{o(v)&&(o(v).pause(),_(v,void 0))}));function T(){_(d,fe.PAUSED,!0)}function L(y){_(d,fe.ERROR,!0)}function oe(){_(d,fe.READY,!0)}function re(){_(d,fe.LOADING,!0)}function se(){_(d,fe.PLAYING,!0)}function H(){_(d,fe.PAUSED,!0)}function Ke(y){y.code==="Space"?(y.preventDefault(),y.stopPropagation(),P()):y.code==="Escape"&&(y.preventDefault(),y.stopPropagation(),c()?.())}function x(y){y.preventDefault(),y.stopPropagation(),u()?.(o(g))}function P(){o(v)?o(d)===fe.LOADING||(o(v).paused?(n()&&o(v).src!==n()&&(o(v).src=n()),o(v).currentTime=0,o(v).play()):o(v).pause()):(_(E,!0),requestAnimationFrame(()=>{o(v)&&n()&&(o(v).src=n(),o(v).play())}))}var ee={get audioUrl(){return n()},set audioUrl(y){n(y),Y()},get codeChallenge(){return r()},set codeChallenge(y){r(y),Y()},get config(){return a()},set config(y){a(y),Y()},get imageUrl(){return i()},set imageUrl(y){i(y),Y()},get onCancel(){return c()},set onCancel(y){c(y),Y()},get onReload(){return s()},set onReload(y){s(y),Y()},get onSubmit(){return u()},set onSubmit(y){u(y),Y()},get strings(){return l()},set strings(y){l(y),Y()}},U=Bl(),N=Q(U),Ne=Q(N);{var ge=y=>{var te=Nl(),wt=Q(te,!0);G(te),pe(()=>We(wt,l().verificationRequired)),D(y,te)};le(Ne,y=>{a().codeChallengeDisplay!=="standard"&&y(ge)})}var ye=W(Ne,2),X=Q(ye,!0);G(ye);var Ye=W(ye,2),C=W(Ye,2),B=Q(C);Jr(B),B.disabled=o(b),pt(B,y=>_(h,y),()=>o(h));var xe=W(B,2);{var m=y=>{var te=jl(),wt=Q(te);{var Qn=we=>{var qe=Vl();D(we,qe)},Zt=we=>{var qe=Ul();D(we,qe)},er=we=>{var qe=Fl();D(we,qe)},tr=we=>{var qe=zl();D(we,qe)};le(wt,we=>{o(d)===fe.LOADING?we(Qn):o(d)===fe.ERROR?we(Zt,1):o(d)===fe.PLAYING?we(er,2):we(tr,-1)})}G(te),pe(()=>{j(te,"title",l().getAudioChallenge),te.disabled=o(d)===fe.LOADING||o(d)===fe.ERROR,j(te,"aria-label",o(d)===fe.LOADING?l().loading:l().getAudioChallenge)}),ce("click",te,()=>P(),!0),D(y,te)};le(xe,y=>{r().audio&&y(m)})}var mt=W(xe,2);G(C);var yn=W(C,2),$e=Q(yn),Xn=Q($e,!0);G($e);var yt=W($e,2),Gt=Q(yt,!0);G(yt),G(yn),G(N);var Wt=W(N,2);{var Jt=y=>{var te=Hl();pt(te,wt=>_(v,wt),()=>o(v)),ce("error",te,L),ce("loadstart",te,re),ce("canplay",te,oe),ce("pause",te,H),ce("playing",te,se),ce("ended",te,T),D(y,te)};le(Wt,y=>{o(E)&&y(Jt)})}return G(U),pe(()=>{We(X,l().enterCodeFromImage),j(Ye,"src",i()),j(B,"minlength",r().length||1),j(B,"maxlength",r().length),j(B,"placeholder",l().enterCode),j(B,"aria-label",o(d)===fe.LOADING?l().loading:o(d)===fe.PLAYING?"":l().enterCodeAria),j(B,"aria-live",o(d)?"assertive":"polite"),j(B,"aria-busy",o(d)===fe.LOADING),j(mt,"title",l().reload),j(mt,"aria-label",l().reload),j($e,"aria-label",l().verify),We(Xn,l().verify),j(yt,"aria-label",l().cancel),We(Gt,l().cancel)}),ce("submit",N,x,!0),zn("keydown",B,Ke),Tl(B,()=>o(g),y=>_(g,y)),ce("click",mt,()=>s()?.(),!0),ce("click",yt,()=>c()?.(),!0),D(e,U),st(ee)}function Lr(e,t){ot(t,!0);let n=J(t,"anchor"),r=J(t,"children"),a=J(t,"display",7,"standard"),i=J(t,"backdrop",7,!1),c=J(t,"onClickOutside"),s=J(t,"onClickOutsideDelay",7,600),u=J(t,"onClose"),l=J(t,"placement",7,"auto"),d=J(t,"updateUISignal"),v=J(t,"variant",7,"neutral"),h=Bn(t,["$$slots","$$events","$$legacy","$$host","anchor","children","display","backdrop","onClickOutside","onClickOutsideDelay","onClose","placement","updateUISignal","variant"]),b=O(void 0),g=O(void 0),E=O(!1),T=O(0);Se(()=>{l()!=="auto"&&_(E,l()==="top")}),Se(()=>{d()&&H()}),Wr(()=>{let C=a()==="bottomsheet"||a()==="overlay";return C&&(o(g)&&document.body.append(o(g)),o(b)&&document.body.append(o(b))),H(),xt().then(()=>{_(T,Date.now(),!0)}),()=>{C&&(o(g)&&document.body.removeChild(o(g)),o(b)&&document.body.removeChild(o(b)))}});function L(){u()?.()}function oe(C){let B=C.target;!o(b)?.contains(B)&&(!s()||o(T)+s()<Date.now())&&c()?.()}function re(){H()}function se(){H()}function H(){if(n()&&l()==="auto"&&o(b)){let C=n().getBoundingClientRect(),xe=document.documentElement.clientHeight-(C.top+C.height)<o(b).clientHeight;o(E)!==xe&&_(E,xe)}}var Ke={get anchor(){return n()},set anchor(C){n(C),Y()},get children(){return r()},set children(C){r(C),Y()},get display(){return a()},set display(C="standard"){a(C),Y()},get backdrop(){return i()},set backdrop(C=!1){i(C),Y()},get onClickOutside(){return c()},set onClickOutside(C){c(C),Y()},get onClickOutsideDelay(){return s()},set onClickOutsideDelay(C=600){s(C),Y()},get onClose(){return u()},set onClose(C){u(C),Y()},get placement(){return l()},set placement(C="auto"){l(C),Y()},get updateUISignal(){return d()},set updateUISignal(C){d(C),Y()},get variant(){return v()},set variant(C="neutral"){v(C),Y()}},x=Gl();ce("click",Et,oe,!0),ce("resize",Et,re),ce("scroll",Et,se);var P=Dt(x);{var ee=C=>{var B=Kl();pt(B,xe=>_(g,xe),()=>o(g)),D(C,B)};le(P,C=>{i()&&C(ee)})}var U=W(P,2);Hn(U,()=>({...h,class:`altcha-popover ${(t.class||"")??""}`,"data-popover":!0,"data-variant":v(),"data-top":o(E),"data-display":a()}));var N=Q(U);{var Ne=C=>{var B=Yl();D(C,B)};le(N,C=>{a()==="standard"&&C(Ne)})}var ge=W(N,2);{var ye=C=>{var B=ql();ce("click",B,L,!0),D(C,B)};le(ge,C=>{a()!=="standard"&&C(ye)})}var X=W(ge,2),Ye=Q(X);return ll(Ye,()=>r()??ft),G(X),G(U),pt(U,C=>_(b,C),()=>o(b)),D(e,x),st(Ke)}function Wl(e){return Array.from(new Uint8Array(e)).map(t=>t.toString(16).padStart(2,"0")).join("")}function Jl(e,t="altcha-css",n){if(typeof document<"u"&&document&&!document.getElementById(t)){let r=document.createElement("style");r.id=t,r.textContent=e;let a=document.currentScript?.nonce??document.querySelector('meta[name="csp-nonce"]')?.content;a&&(r.nonce=a),document.head.appendChild(r)}}async function zi(e){let{challenge:t,concurrency:n=navigator.hardwareConcurrency,controller:r=new AbortController,createWorker:a,onOutOfMemory:i=h=>h>1?Math.floor(h/2):0,counterMode:c,timeout:s=9e4}=e,u=Math.min(16,Math.max(1,n)),l=[],d=()=>{for(let h of l)h.terminate()};for(let h=0;h<u;h++)l.push(await a(t.parameters.algorithm));let v=null;try{v=await Promise.race(l.map((h,b)=>(r.signal.addEventListener("abort",()=>{h.postMessage({type:"abort"})}),new Promise((g,E)=>{h.addEventListener("error",T=>{E(T)}),h.addEventListener("message",T=>{if(T.data){for(let L of l)L!==h&&L.postMessage({type:"abort"});if(T.data.error)return E(new Error(T.data.error))}g(T.data)}),h.postMessage({challenge:t,counterMode:c,counterStart:b,counterStep:u,timeout:s,type:"work"})}))))}catch(h){if(h instanceof Error&&!!h?.message?.includes("Out of memory")&&i){d();let g=i(u);if(g)return zi({...e,challenge:t,controller:r,concurrency:g,createWorker:a})}throw h}finally{d()}return r.signal.aborted?null:v||null}function sc(e,t){ot(t,!0);let n=()=>wa(d,"$altchaDefaults",a),r=()=>wa(g,"$altchaI18nStore",a),[a,i]=Ss(),c='input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])',s='input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])',u=["ar","fa","he","ur"],{isSecureContext:l}=globalThis,{store:d}=globalThis.$altcha.defaults,v=navigator.hardwareConcurrency||2,h=navigator.deviceMemory||0,b=h&&h<=4?Math.min(4,v):v,g=globalThis.$altcha.i18n.store,E=t.$$host,T=(f,p)=>{xt().then(()=>{E?.dispatchEvent(new CustomEvent(f,{detail:p}))})},L=null,oe=O(nt(new URL(location.origin))),re=O(!1),se=O(null),H=O(null),Ke=O(null),x=O(nt(F.UNVERIFIED)),P=O(void 0),ee=O(void 0),U=O(null),N=O(void 0),Ne=O(null),ge=O(null),ye=O(null),X=O(null),Ye=O(nt([])),C=O(0),B=O(nt({})),xe=O(!0),m=be(()=>({fetch:(f,p)=>fetch(f,p),audioChallengeLanguage:"",auto:"off",barPlacement:"bottom",challenge:"",codeChallenge:null,codeChallengeDisplay:"standard",credentials:null,debug:!1,disableAutoFocus:!1,display:"standard",floatingAnchor:"",floatingOffset:8,floatingPersist:!1,floatingPlacement:"auto",hideFooter:!1,hideLogo:!1,humanInteractionSignature:!0,language:"",mockError:!1,minDuration:500,overlayContent:"",name:"altcha",popoverPlacement:"auto",retryOnOutOfMemoryError:!0,setCookie:null,serverVerificationFields:!1,serverVerificationTimeZone:!1,test:!1,timeout:9e4,type:"checkbox",validationMessage:"",verifyFunction:null,verifyUrl:"",workers:b,...n(),...o(B)})),mt=be(()=>`altcha-checkbox-${t.id||Math.floor(Math.random()*1e12).toString(16)}`),yn=be(()=>ao(o(m).type)),$e=be(()=>o(m).auto),Xn=be(()=>o(x)===F.VERIFYING),yt=be(()=>!o(m).hideFooter),Gt=be(()=>!o(m).hideLogo&&o(m).display!=="bar"),Wt=be(()=>io(r(),[o(m).language,document.documentElement.lang,...navigator.languages])),Jt=be(()=>u.includes(o(Wt).language)?"rtl":void 0),y=be(()=>({...o(Wt).strings})),te=be(()=>o(se)?.audio?.match(/^(https?:)?\//)?wn(o(se).audio,o(oe),{language:o(m).audioChallengeLanguage||o(Wt).language}).toString():o(se)?.audio),wt=be(()=>o(se)?.image?.match(/^(https?:)?\//)?wn(o(se).image,o(oe)):o(se)?.image);Se(()=>{Xt({auto:t.auto,challenge:t.challenge,display:t.display,language:t.language,name:t.name,type:t.type,workers:t.workers})}),Se(()=>{if(t.configuration)try{Xt(JSON.parse(t.configuration))}catch{K("unable to parse the `configuration` attribute (JSON expected)")}}),Se(()=>{o(Ke)!==o(m).display&&_n(o(m).display)}),Se(()=>{o(re)&&o(x)===F.VERIFYING&&_(re,!1)}),Se(()=>{!o(re)&&o(x)===F.VERIFIED&&_(re,!0)}),Se(()=>{if(!o(re)){let f=nr();f&&f.checked&&(f.checked=!1)}}),Se(()=>{o(x)===F.VERIFIED&&nr()?.setCustomValidity("")}),Se(()=>{if(o($e)==="onload"){let f=setTimeout(()=>{It()},1);return()=>{f&&clearTimeout(f)}}}),Se(()=>{o(ge)&&K("error:",o(ge))}),Se(()=>{o(X)&&o(m).setCookie&&wo(o(X),o(m).setCookie)}),Wr(()=>(K("mounted","3.2.1"),E&&globalThis.$altcha.instances.add(E),_(U,o(N)?.closest("form"),!0),o(U)?.addEventListener("reset",oa),o(U)?.addEventListener("submit",sa,{capture:!0}),o(U)?.addEventListener("focusin",ia),Qn(),o(m).humanInteractionSignature&&(K("human interaction signature enabled"),L=new Pr),T("load"),l||K("secure context (HTTPS) required"),()=>{er(),E&&globalThis.$altcha.instances.delete(E),o(ye)&&clearTimeout(o(ye)),o(U)?.removeEventListener("reset",oa),o(U)?.removeEventListener("submit",sa,{capture:!0}),o(U)?.removeEventListener("focusin",ia),L?.destroy()}));function Qn(){_(Ye,[...globalThis.$altcha.plugins].map(f=>new f(E)),!0),K("activating plugins",o(Ye).map(f=>f.constructor.name));for(let f of o(Ye))f.activate()}async function Zt(f,...p){let w;for(let k of o(Ye))w=await k[f].call(k,...p);return w}function er(){for(let f of o(Ye))f.destroy()}function tr(f){let[p,w]=f.salt.split("?"),k={};if(w)try{Object.assign(k,Object.fromEntries(new URLSearchParams(w).entries()))}catch{}let A={codeChallenge:f.codeChallenge,parameters:{algorithm:f.algorithm,cost:1,data:k,expiresAt:k?.expires?parseInt(k.expires,10):void 0,keyLength:f.algorithm==="SHA-512"?64:f.algorithm==="SHA-384"?48:32,nonce:Wl(new TextEncoder().encode(f.salt)),keyPrefix:f.challenge,salt:""},signature:f.signature};return Object.defineProperties(A,{_originalSalt:{enumerable:!1,value:f.salt,writable:!1},_version:{enumerable:!1,value:1,writable:!1}}),A}function we(f,p){return{algorithm:f.parameters.algorithm,challenge:f.parameters.keyPrefix,number:p.counter,salt:"_originalSalt"in f?f._originalSalt:f.parameters.nonce,signature:f.signature,took:p.time||0}}async function qe(f){await new Promise(p=>setTimeout(p,f))}async function aa(f=o(m).challenge,p){let w=await Zt("onFetchChallenge",f),k=null;if(w!==void 0)return w;if(typeof f=="string")if(f.startsWith("{")){K("parsing JSON challenge");try{k=JSON.parse(f)}catch{throw new Error("Unable to parse JSON challenge.")}}else{K("fetching challenge from",p?.method||"GET",f),_(oe,new URL(f,location.origin),!0);let A=await o(m).fetch(f,{credentials:o(m).credentials||void 0,...p});await ca(A);let S=A.headers.get("x-altcha-config");S&&bo(S);let z=await A.json();if(z&&"his"in z&&z.his){if(K("requested HIS"),!L)throw new Error("Server requested HIS data but collector is disabled.");return aa(wn(z.his.url,o(oe)),{body:JSON.stringify({his:L.export()}),headers:{"content-type":"application/json"},method:"POST"})}z&&"hisResult"in z&&z.hisResult&&K("HIS result",z.hisResult),k=z}else if(f&&typeof f=="object")try{k=JSON.parse(JSON.stringify(f))}catch{throw new Error("Unable to parse JSON challenge.")}if(no(k)&&(k=tr(k)),!ro(k))throw new Error("Challenge validation failed.");return k}function no(f){return typeof f=="object"&&"challenge"in f}function ro(f){return!!f&&typeof f=="object"&&"parameters"in f&&!!f.parameters&&typeof f.parameters=="object"&&"algorithm"in f.parameters&&"nonce"in f.parameters&&"salt"in f.parameters&&"keyPrefix"in f.parameters}function nr(){return document.getElementById(o(mt))}function ao(f){switch(f){case"checkbox":return Ni;case"switch":return Ui;default:return Vi}}function io(f,p){let w=Object.keys(f).map(A=>A.toLowerCase()),k=p.reduce((A,S)=>(S=S.toLowerCase(),A||(f[S]?S:null)||w.find(z=>S.split("-")[0]===z.split("-")[0])||null),null);return f[k||""]||(k="en"),{language:k,strings:f[k]}}function oo(f){switch(f){case"bar":return o(m).barPlacement||"bottom";case"floating":return o(m).floatingPlacement||"auto";default:return}}function so(f){return[...o(U)?.querySelectorAll(c)||[]].reduce((w,k)=>{let A=k.name,S=k.value;return A&&S&&(w[A]=/\n/.test(S)?S.replace(new RegExp("(?<!\\r)\\n","g"),`\r
`):S),w},{})}function lo(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function wn(f,p,w){let k=new URL(f,p);if(k.search||(k.search=p.search),w)for(let A in w)w[A]!==void 0&&w[A]!==null&&k.searchParams.set(A,w[A]);return k.toString()}function co(f){!o(re)&&f.currentTarget.checked?(f.preventDefault(),f.currentTarget.checked=!1,o(x)!==F.VERIFYING&&It()):f.currentTarget.checked||(f.preventDefault(),Re())}function uo(f){o(x)===F.VERIFYING?f.currentTarget.setCustomValidity(o(y).waitAlert):o(m).validationMessage&&f.currentTarget.setCustomValidity(o(m).validationMessage)}function fo(){_n(o(m).display),Re()}function ho(){kn()}function vo(f){let p=f.target;o(m).display==="floating"&&p&&!E?.contains(p)&&!p.hasAttribute("data-backdrop")&&!p.closest("[data-popover]")&&o(x)!==F.VERIFIED&&!o(m).floatingPersist&&rr()}function ia(f){o($e)==="onfocus"&&o(x)===F.UNVERIFIED&&It()}function oa(){_n(o(m).display),Re()}function sa(f){f.target?.getAttribute("data-code-challenge")!=="true"&&o($e)==="onsubmit"&&o(x)===F.UNVERIFIED&&(f.preventDefault(),f.stopPropagation(),_(Ne,f.submitter,!0),ar(),It().then(w=>{w&&!o(se)&&xt().then(()=>{la(o(Ne))})}))}function po(f){f.persisted&&(_n(o(m).display),Re())}function go(){kn()}function bo(f){try{let p=JSON.parse(f);p&&typeof p=="object"&&Xt({serverVerificationFields:p?.sentinel?.fields,serverVerificationTimeZone:p?.sentinel?.timeZone,verifyUrl:p.verifyurl,...p})}catch(p){K("unable to configure from x-altcha-config header",p)}}function mo(f=20){if(!o(N))return;let p=o(m).floatingPlacement;if(!o(ee)&&(_(ee,(o(m).floatingAnchor instanceof HTMLElement?o(m).floatingAnchor:o(m).floatingAnchor?document.querySelector(o(m).floatingAnchor):o(U)?.querySelector(s))||o(U),!0),!o(ee))){K("unable to find floating anchor element");return}let w=parseInt(o(m).floatingOffset,10)||12,k=o(ee).getBoundingClientRect(),A=o(N).getBoundingClientRect(),S=document.documentElement.clientHeight,z=document.documentElement.clientWidth,Ee=!p||p==="auto"?k.bottom+A.height+w+f>S:p==="top",q=Math.max(f,Math.min(z-f-A.width,k.left+k.width/2-A.width/2));if(o(N).style.setProperty("--altcha-floating-left",`${q}px`),o(N).style.setProperty("--altcha-floating-top",Ee?`${k.top-(A.height+w)}px`:`${k.bottom+w}px`),o(N).setAttribute("data-floating-position",Ee?"top":"bottom"),o(P)){let ae=o(P).getBoundingClientRect();o(P).style.left=k.left-q+k.width/2-ae.width/2+"px"}}async function yo(f,p){let w=await Zt("onRequestServerVerification",f,p);if(w!==void 0)return w;if(K("requesting server verification from",o(m).verifyUrl),!o(m).verifyUrl)throw new Error("Parameter verifyUrl must be set for server verification.");let k=await o(m).fetch(wn(o(m).verifyUrl,o(oe)),{body:JSON.stringify({code:p,fields:o(m).serverVerificationFields?so():void 0,payload:f,timeZone:o(m).serverVerificationTimeZone?lo():void 0}),credentials:o(m).credentials||void 0,headers:{"Content-Type":"application/json"},method:"POST"});await ca(k);let A=await k.json();return A&&typeof A=="object"&&"payload"in A&&A.payload&&T("serververification",A),A}function la(f){o(U)&&"requestSubmit"in o(U)?o(U).requestSubmit(f):o(U)?.reportValidity()&&(f?f.click():o(U).submit())}function wo(f,p={}){let{domain:w,name:k=o(m).name,maxAge:A,path:S,sameSite:z,secure:Ee}=p,q=`${encodeURIComponent(k)}=${encodeURIComponent(f)}`;w&&(q+=`; Domain=${w}`),A!=null&&(q+=`; Max-Age=${A}`),S&&(q+=`; Path=${S}`),z&&(q+=`; SameSite=${z}`),Ee&&(q+="; Secure"),document.cookie=q}function _n(f){switch(f){case"bar":case"floating":case"overlay":rr(),(!o($e)||o($e)==="off")&&(o(B).auto="onsubmit");break;case"standard":ar()}o(Ke)!==f&&_(Ke,f,!0)}function _o(f){o(ye)&&clearTimeout(o(ye));let p=()=>{o(x)!==F.UNVERIFIED?(_(re,!1),Ie(F.EXPIRED)):Re(),T("expired")},w=f*1e3-Date.now();w>=1?_(ye,setTimeout(p,w),!0):p()}async function ca(f){if(f.status>=400){if(f.headers.get("content-type")?.includes("/json")){let w;try{w=await f.json()}catch{}if(w&&"error"in w)throw new Error(`Server responded with ${f.status} - ${w.error}`)}throw new Error(`Server responded with ${f.status}.`)}let p=f.headers.get("content-type");if(!p||!p.includes("/json"))throw new Error(`Server responded with invalid content-type. Expected application/json, received ${p}.`)}async function ua(f){if(!o(X)){Ie(F.ERROR,"Cannot verify code challenge without PoW payload.");return}Ie(F.VERIFYING);let p=null;if(o(m).verifyUrl)p=await yo(o(X),f);else if(o(m).verifyFunction)p=await o(m).verifyFunction(o(X),f);else{Ie(F.ERROR,"Parameter verifyUrl is required for code challenge verification.");return}p?.payload&&(_(X,p.payload,!0),K("server payload",o(X))),p?.verified===!0?(K("verified"),Ie(F.VERIFIED),T("verified",{payload:o(X)}),o($e)==="onsubmit"&&xt().then(()=>{la(o(Ne))})):Ie(F.ERROR,p?.reason||"Verification failed."),o(m).disableAutoFocus||nr()?.focus()}function Xt(f){Object.assign(o(B),{...Object.fromEntries(Object.entries(f).filter(([p,w])=>w!==void 0))})}function ko(){return{...o(m)}}function xo(){return o(x)}function rr(){_(xe,!1)}function K(...f){(o(m).debug||f.some(p=>p instanceof Error))&&console[f[0]instanceof Error?"error":"log"]("ALTCHA",`[name=${o(m).name}]`,...f)}function Re(f=F.UNVERIFIED,p=null){_(re,!1),_(ge,p,!0),_(X,null),o(H)&&o(H).abort(),o(ye)&&(clearTimeout(o(ye)),_(ye,null)),Ie(f)}function Ie(f,p=null){_(x,f,!0),_(ge,p,!0),T("statechange",{payload:o(X),state:o(x)})}function ar(){_(xe,!0),xt().then(()=>{kn()})}function kn(){if(o(m).display==="floating")return mo();_(C,o(C)+1)}async function It(f={}){let{concurrency:p=Math.max(1,o(m).workers),controller:w=new AbortController,minDuration:k=o(m).minDuration}=f,A=performance.now(),S=null,z=null,Ee=!1,q=await Zt("onVerify",f);if(q!==void 0)return q;Re(F.VERIFYING),_(H,w,!0);try{if(!l)throw new Error("Secure context (HTTPS) required.");if(o(m).mockError)throw new Error("Mock error.");if(o(m).test)return K("running test mode with null challenge"),await qe(Math.max(0,k-(performance.now()-A))),o(H)?.signal.aborted?(Re(),null):(_(X,btoa(JSON.stringify({challenge:null,solution:null,test:!0})),!0),K("verified"),Ie(F.VERIFIED),T("verified",{payload:o(X)}),{payload:o(X)});if(S=await aa(),!S)throw new Error("Failed to fetch challenge.");K("challenge",S),"configuration"in S&&(K("re-configuring from challenge",S.configuration),Xt(S.configuration)),S.parameters.expiresAt&&_o(S.parameters.expiresAt),Ee="_version"in S&&S._version===1;let ae=globalThis.$altcha.algorithms.get(S.parameters.algorithm);if(!ae)throw new Error(`Unsupported algorithm ${S.parameters.algorithm}.`);if(z=await zi({challenge:S,concurrency:p,controller:w,createWorker:ae,counterMode:Ee?"string":"uint32",onOutOfMemory:lt=>{if(K("out of memory error received"),T("outofmemory"),o(m).retryOnOutOfMemoryError&&lt>1){let ct=Math.floor(lt/2);return K(`retrying with ${ct} workers...`),ct}},timeout:o(m).timeout}),o(H)?.signal.aborted)return Re(),null;if(!z)throw new Error("Failed to find solution.");K("solution",z),await qe(Math.max(0,k-(performance.now()-A))),_(se,S.codeChallenge||o(m).codeChallenge||null,!0),Ee?_(X,btoa(JSON.stringify(we(S,z))),!0):_(X,btoa(JSON.stringify({challenge:{parameters:S.parameters,signature:S.signature},solution:z})),!0),o(se)?(K("requesting code verification"),Ie(F.CODE),T("codechallenge",{codeChallenge:o(se)})):o(m).verifyUrl?await ua():(K("verified"),Ie(F.VERIFIED),T("verified",{payload:o(X)}))}catch(ae){return K("verification failed",ae),Ie(F.ERROR,String(ae)),null}finally{_(H,null)}return{challenge:S,payload:o(X),solution:z}}var Eo={configure:Xt,getConfiguration:ko,getState:xo,hide:rr,log:K,reset:Re,setState:Ie,show:ar,updateUI:kn,verify:It},fa=oc();ce("scroll",_r,ho),ce("click",_r,vo),ce("pageshow",Et,po),ce("resize",Et,go);var da=Dt(fa);{var Co=f=>{var p=Zl();D(f,p)};le(da,f=>{o(m).display==="overlay"&&o(xe)&&f(Co)})}var Ge=W(da,2),ha=Q(Ge);{var So=f=>{var p=Ql(),w=Dt(p),k=W(w,2);{var A=S=>{var z=Xl();Ii(z,()=>document.querySelector(o(m).overlayContent)?.innerHTML,!0),G(z),D(S,z)};le(k,S=>{o(m).overlayContent&&S(A)})}ce("click",w,fo,!0),D(f,p)};le(ha,f=>{o(m).display==="overlay"&&o(xe)&&f(So)})}var ir=W(ha,2),or=Q(ir),sr=Q(or),va=Q(sr);{let f=be(()=>o(m).display==="standard"&&o($e)!=="onsubmit"||o(x)===F.VERIFYING);fl(va,()=>o(yn),(p,w)=>{w(p,{get id(){return o(mt)},name:"",get required(){return o(f)},get loading(){return o(Xn)},get checked(){return o(re)},onchange:co,oninvalid:uo})})}var lr=W(va,2),Ao=Q(lr);{var To=f=>{var p=En();pe(()=>We(p,o(y).verificationRequired)),D(f,p)},$o=f=>{var p=En();pe(()=>We(p,o(y).verifying)),D(f,p)},Ro=f=>{var p=En();pe(()=>We(p,o(y).verified)),D(f,p)},Io=f=>{var p=En();pe(()=>We(p,o(y).label)),D(f,p)};le(Ao,f=>{o(x)===F.CODE&&o(se)?f(To):o(x)===F.VERIFYING?f($o,1):o(x)===F.VERIFIED?f(Ro,2):f(Io,-1)})}G(lr),G(sr);var Oo=W(sr,2);{var Lo=f=>{Xr(f,{get strings(){return o(y)}})};le(Oo,f=>{o(Gt)&&f(Lo)})}G(or);var pa=W(or,2);{var Po=f=>{{let p=be(()=>o(m).display==="bar"&&o(Gt));Or(f,{get logo(){return o(p)},get strings(){return o(y)}})}};le(pa,f=>{o(yt)&&f(Po)})}var ga=W(pa,2);{var Do=f=>{var p=ec();pt(p,w=>_(P,w),()=>o(P)),D(f,p)};le(ga,f=>{o(m).display==="floating"&&f(Do)})}var Mo=W(ga,2);{var No=f=>{var p=tc();Jr(p),pe(()=>{j(p,"name",o(m).name),Cl(p,o(X))}),D(f,p)};le(Mo,f=>{o(m).setCookie||f(No)})}G(ir);var Vo=W(ir,2);{var Uo=f=>{Lr(f,{get anchor(){return o(N)},onClickOutside:()=>{l&&Re()},get placement(){return o(m).popoverPlacement},role:"alert",variant:"error",get dir(){return o(Jt)},get updateUISignal(){return o(C)},children:(p,w)=>{var k=Ta(),A=Dt(k);{var S=q=>{var ae=nc();D(q,ae)},z=q=>{var ae=rc(),lt=Q(ae,!0);G(ae),pe(()=>We(lt,o(y).expired)),D(q,ae)},Ee=q=>{var ae=ac(),lt=Q(ae,!0);G(ae),pe(()=>{j(ae,"title",o(ge)),We(lt,o(y).error)}),D(q,ae)};le(A,q=>{!o(ge)&&!l?q(S):!o(ge)&&o(x)===F.EXPIRED?q(z,1):q(Ee,-1)})}D(p,k)},$$slots:{default:!0}})},Fo=f=>{var p=Ta(),w=Dt(p);ul(w,()=>o(se),k=>{{let A=be(()=>o(m).codeChallengeDisplay!=="standard");Lr(k,{get anchor(){return o(N)},get backdrop(){return o(A)},get display(){return o(m).codeChallengeDisplay},onClose:()=>{Re()},get placement(){return o(m).popoverPlacement},role:"dialog",get"aria-label"(){return o(y).verificationRequired},get dir(){return o(Jt)},get updateUISignal(){return o(C)},children:(S,z)=>{var Ee=ic(),q=Dt(Ee);Fi(q,{get audioUrl(){return o(te)},get imageUrl(){return o(wt)},onCancel:()=>Re(),onReload:()=>It(),onSubmit:ct=>ua(ct),get codeChallenge(){return o(se)},get config(){return o(m)},get strings(){return o(y)}});var ae=W(q,2);{var lt=ct=>{Or(ct,{get logo(){return o(Gt)},get strings(){return o(y)}})};le(ae,ct=>{o(yt)&&o(m).codeChallengeDisplay!=="standard"&&ct(lt)})}D(S,Ee)},$$slots:{default:!0}})}}),D(f,p)};le(Vo,f=>{o(ge)||o(x)===F.EXPIRED||!l?f(Uo):o(se)&&o(x)===F.CODE&&f(Fo,1)})}G(Ge),pt(Ge,f=>_(N,f),()=>o(N)),pe(f=>{j(Ge,"data-state",o(x)),j(Ge,"data-display",o(m).display||void 0),j(Ge,"data-placement",f),j(Ge,"data-visible",o(xe)||void 0),j(Ge,"dir",o(Jt)),j(lr,"for",o(mt)),Ge.dir=Ge.dir},[()=>oo(o(m).display)]),D(e,fa);var zo=st(Eo);return i(),zo}function Qr(e){let t;try{if(t=La&&(self.URL||self.webkitURL).createObjectURL(La),!t)throw"";let n=new Worker(t,{name:e?.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(ji),{name:e?.name})}}function ea(e){let t;try{if(t=Pa&&(self.URL||self.webkitURL).createObjectURL(Pa),!t)throw"";let n=new Worker(t,{name:e?.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(Hi),{name:e?.name})}}var Da,Bo,Ft,Ko,$n,ln,Nt,Yo,qo,Go,Ma,ba,ft,ve,zt,Dn,Dr,Ue,Ze,at,gr,Le,ue,de,Xe,Pe,je,gt,br,ht,Rn,Jo,Rt,Zo,At,In,Vt,dt,Ut,Xo,Qo,Va,mr,yr,wr,rn,Mn,un,fn,dn,ds,hs,Mr,za,ma,ja,Tt,ie,Ha,vs,ps,gs,ke,_t,R,M,Et,_r,qa,Ga,Wa,Es,Lt,xr,cr,Pt,I,Er,Fe,Cr,an,ur,Mt,Sn,_a,As,vt,tt,Rs,Sr,xn,Ln,Ct,si,xa,An,it,V,ze,$,De,_e,Ce,Oe,di,kt,St,Gs,Ws,nn,Si,Ar,Aa,Js,el,nl,al,Cn,$r,Bt,cl,$a,Qt,en,Li,Pi,wl,_l,kl,xl,El,Oa,$l,Ir,Mi,Ol,Ll,Pl,Dl,Ml,fe,F,Nl,Vl,Ul,Fl,zl,jl,Hl,Bl,Kl,Yl,ql,Gl,Pr,Zl,Xl,Ql,ec,tc,nc,rc,ac,ic,oc,ji,La,Hi,Pa,lc,Bi=Ot(()=>{Da=Array.isArray,Bo=Array.prototype.indexOf,Ft=Array.prototype.includes,Ko=Array.from,$n=Object.keys,ln=Object.defineProperty,Nt=Object.getOwnPropertyDescriptor,Yo=Object.getOwnPropertyDescriptors,qo=Object.prototype,Go=Array.prototype,Ma=Object.getPrototypeOf,ba=Object.isExtensible,ft=()=>{};ve=2,zt=4,Dn=8,Dr=1<<24,Ue=16,Ze=32,at=64,gr=128,Le=512,ue=1024,de=2048,Xe=4096,Pe=8192,je=16384,gt=32768,br=1<<25,ht=65536,Rn=1<<17,Jo=1<<18,Rt=1<<19,Zo=1<<20,At=65536,In=1<<21,Vt=1<<22,dt=1<<23,Ut=Symbol("$state"),Xo=Symbol("legacy props"),Qo=Symbol(""),Va=Symbol("attributes"),mr=Symbol("class"),yr=Symbol("style"),wr=Symbol("text"),rn=Symbol("form reset"),Mn=new class extends Error{name="StaleReactionError";message="The reaction that called `getAbortSignal()` was re-run or destroyed"},un=!!globalThis.document?.contentType&&globalThis.document.contentType.includes("xml"),fn=3,dn=8;ds=1,hs=2,Mr="[",za="[!",ma="[?",ja="]",Tt={},ie=Symbol("uninitialized"),Ha="http://www.w3.org/1999/xhtml",vs="http://www.w3.org/2000/svg",ps="http://www.w3.org/1998/Math/MathML",gs="@attach",ke=null;_t=[];R=!1;Es=-7169;Lt=[];xr=Symbol("unmounted");cr=null,Pt=null,I=null,Er=null,Fe=null,Cr=null,an=!1,ur=!1,Mt=null,Sn=null,_a=0,As=1,vt=class e{id=As++;#e=!1;linked=!0;#t=null;#n=null;async_deriveds=new Map;current=new Map;previous=new Map;unblocked=new Set;#l=new Set;#r=new Set;#i=new Set;#a=0;#o=new Map;#d=null;#s=[];#v=[];#h=new Set;#c=new Set;#u=new Map;#f=new Set;is_fork=!1;#b=!1;#_(){if(this.is_fork)return!0;for(let r of this.#o.keys()){for(var t=r,n=!1;t.parent!==null;){if(this.#u.has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1}skip_effect(t){this.#u.has(t)||this.#u.set(t,{d:[],m:[]}),this.#f.delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=this.#u.get(t);if(r){this.#u.delete(t);for(var a of r.d)ne(a,de),n(a);for(a of r.m)ne(a,Xe),n(a)}this.#f.add(t)}#g(){if(this.#e=!0,_a++>1e3&&(this.#w(),Ts()),!this.#_()){for(let u of this.#h)this.#c.delete(u),ne(u,de),this.schedule(u);for(let u of this.#c)ne(u,Xe),this.schedule(u)}let t=this.#s;this.#s=[],this.apply();var n=Mt=[],r=[],a=Sn=[];for(let u of t)try{this.#k(u,n,r)}catch(l){throw ni(u),l}if(I=null,a.length>0){var i=e.ensure();for(let u of a)i.schedule(u)}if(Mt=null,Sn=null,this.#_()){this.#p(r),this.#p(n);for(let[u,l]of this.#u)ti(u,l);a.length>0&&I.#g();return}let c=this.#x();if(c){c.#m(this);return}this.#h.clear(),this.#c.clear();for(let u of this.#l)u(this);this.#l.clear(),Er=this,ka(r),ka(n),Er=null,this.#d?.resolve();var s=I;if(this.linked&&this.#a===0&&this.#w(),this.#s.length>0){s===null&&(s=this,this.#y());let u=s;u.#s.push(...this.#s.filter(l=>!u.#s.includes(l)))}s!==null&&s.#g()}#k(t,n,r){t.f^=ue;for(var a=t.first;a!==null;){var i=a.f,c=(i&(Ze|at))!==0,s=c&&(i&ue)!==0,u=s||(i&Pe)!==0||this.#u.has(a);if(!u&&a.fn!==null){c?a.f^=ue:(i&zt)!==0?n.push(a):pn(a)&&((i&Ue)!==0&&this.#c.add(a),Ht(a));var l=a.first;if(l!==null){a=l;continue}}for(;a!==null;){var d=a.next;if(d!==null){a=d;break}a=a.parent}}}#x(){for(var t=this.#t;t!==null;){if(!t.is_fork){for(let[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=t.#t}return null}#m(t){for(let[r,a]of t.current)!this.previous.has(r)&&t.previous.has(r)&&this.previous.set(r,t.previous.get(r)),this.current.set(r,a);for(let[r,a]of t.async_deriveds){let i=this.async_deriveds.get(r);i&&a.promise.then(i.resolve)}let n=r=>{var a=r.reactions;if(a!==null)for(let s of a){var i=s.f;if((i&ve)!==0)n(s);else{var c=s;i&(Vt|Ue)&&!this.async_deriveds.has(c)&&(this.#c.delete(c),ne(c,de),this.schedule(c))}}};for(let r of this.current.keys())n(r);this.oncommit(()=>t.discard()),t.#w(),I=this,this.#g()}#p(t){for(var n=0;n<t.length;n+=1)Xa(t[n],this.#h,this.#c)}capture(t,n,r=!1){t.v!==ie&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&dt)===0&&(this.current.set(t,[n,r]),Fe?.set(t,n)),this.is_fork||(t.v=n)}activate(){I=this}deactivate(){I=null,Fe=null}flush(){try{ur=!0,I=this,this.#g()}finally{_a=0,Cr=null,Mt=null,Sn=null,ur=!1,I=null,Fe=null,Ct.clear()}}discard(){for(let t of this.#r)t(this);this.#r.clear(),this.#i.clear(),this.#w()}register_created_effect(t){this.#v.push(t)}#E(){this.#w();for(let d=cr;d!==null;d=d.#n){var t=d.id<this.id,n=[];for(let[v,[h,b]]of this.current){if(d.current.has(v)){var r=d.current.get(v)[0];if(t&&h!==r)d.current.set(v,[h,b]);else continue}n.push(v)}if(t)for(let[v,h]of this.async_deriveds){let b=d.async_deriveds.get(v);b&&h.promise.then(b.resolve)}if(d.#e){var a=[...d.current.keys()].filter(v=>!this.current.has(v));if(a.length===0)t&&d.discard();else if(n.length>0){if(t)for(let v of this.#f)d.unskip_effect(v,h=>{(h.f&(Ue|Vt))!==0?d.schedule(h):d.#p([h])});d.activate();var i=new Set,c=new Map;for(var s of n)ei(s,a,i,c);c=new Map;var u=[...d.current.keys()].filter(v=>this.current.has(v)?this.current.get(v)[0]!==v.v:!0);if(u.length>0)for(let v of this.#v)(v.f&(je|Pe|Rn))===0&&zr(v,u,c)&&((v.f&(Vt|Ue))!==0?(ne(v,de),d.schedule(v)):d.#h.add(v));if(d.#s.length>0){d.apply();for(var l of d.#s)d.#k(l,[],[]);d.#s=[]}d.deactivate()}}}}increment(t,n){if(this.#a+=1,t){let r=this.#o.get(n)??0;this.#o.set(n,r+1)}}decrement(t,n){if(this.#a-=1,t){let r=this.#o.get(n)??0;r===1?this.#o.delete(n):this.#o.set(n,r-1)}this.#b||(this.#b=!0,rt(()=>{this.#b=!1,this.linked&&this.flush()}))}transfer_effects(t,n){for(let r of t)this.#h.add(r);for(let r of n)this.#c.add(r);t.clear(),n.clear()}oncommit(t){this.#l.add(t)}ondiscard(t){this.#r.add(t)}on_fork_commit(t){this.#i.add(t)}run_fork_commit_callbacks(){for(let t of this.#i)t(this);this.#i.clear()}settled(){return(this.#d??=Na()).promise}static ensure(){if(I===null){let t=I=new e;t.#y(),!ur&&!an&&rt(()=>{t.#e||t.flush()})}return I}apply(){{Fe=null;return}}schedule(t){if(Cr=t,t.b?.is_pending&&(t.f&(zt|Dn|Dr))!==0&&(t.f&gt)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(Mt!==null&&n===$&&(V===null||(V.f&ve)===0))return;if((r&(at|Ze))!==0){if((r&ue)===0)return;n.f^=ue}}this.#s.push(n)}#y(){Pt===null?cr=Pt=this:(Pt.#n=this,this.#t=Pt),Pt=this}#w(){var t=this.#t,n=this.#n;t===null?cr=n:t.#n=n,n===null?Pt=t:n.#t=t,this.linked=!1}};tt=null;Rs=ht|Rt;Sr=class{parent;is_pending=!1;transform_error;#e;#t=R?M:null;#n;#l;#r;#i=null;#a=null;#o=null;#d=null;#s=0;#v=0;#h=!1;#c=new Set;#u=new Set;#f=null;#b=$s(()=>(this.#f=vn(this.#s),()=>{this.#f=null}));constructor(t,n,r,a){this.#e=t,this.#n=n,this.#l=i=>{var c=$;c.b=this,c.f|=gr,r(i)},this.parent=$.b,this.transform_error=a??this.parent?.transform_error??(i=>i),this.#r=bn(()=>{if(R){let i=this.#t;$t();let c=i.data===za;if(i.data.startsWith(ma)){let u=JSON.parse(i.data.slice(ma.length));this.#g(u)}else c?this.#k():this.#_()}else this.#x()},Rs),R&&(this.#e=M)}#_(){try{this.#i=Ve(()=>this.#l(this.#e))}catch(t){this.error(t)}}#g(t){let n=this.#n.failed;n&&(this.#o=Ve(()=>{n(this.#e,()=>t,()=>()=>{})}))}#k(){let t=this.#n.pending;t&&(this.is_pending=!0,this.#a=Ve(()=>t(this.#e)),rt(()=>{var n=this.#d=document.createDocumentFragment(),r=He();n.append(r),this.#i=this.#p(()=>Ve(()=>this.#l(r))),this.#v===0&&(this.#e.before(n),this.#d=null,sn(this.#a,()=>{this.#a=null}),this.#m(I))}))}#x(){try{if(this.is_pending=this.has_pending_snippet(),this.#v=0,this.#s=0,this.#i=Ve(()=>{this.#l(this.#e)}),this.#v>0){var t=this.#d=document.createDocumentFragment();Ci(this.#i,t);let n=this.#n.pending;this.#a=Ve(()=>n(this.#e))}else this.#m(I)}catch(n){this.error(n)}}#m(t){this.is_pending=!1,t.transfer_effects(this.#c,this.#u)}defer_effect(t){Xa(t,this.#c,this.#u)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#n.pending}#p(t){var n=$,r=V,a=ke;Qe(this.#r),Me(this.#r),jt(this.#r.ctx);try{return vt.ensure(),t()}catch(i){return Ja(i),null}finally{Qe(n),Me(r),jt(a)}}#E(t,n){if(!this.has_pending_snippet()){this.parent&&this.parent.#E(t,n);return}this.#v+=t,this.#v===0&&(this.#m(n),this.#a&&sn(this.#a,()=>{this.#a=null}),this.#d&&(this.#e.before(this.#d),this.#d=null))}update_pending_count(t,n){this.#E(t,n),this.#s+=t,!(!this.#f||this.#h)&&(this.#h=!0,rt(()=>{this.#h=!1,this.#f&&Pn(this.#f,this.#s)}))}get_effect_pending(){return this.#b(),o(this.#f)}error(t){if(!this.#n.onerror&&!this.#n.failed)throw t;I?.is_fork?(this.#i&&I.skip_effect(this.#i),this.#a&&I.skip_effect(this.#a),this.#o&&I.skip_effect(this.#o),I.on_fork_commit(()=>{this.#y(t)})):this.#y(t)}#y(t){this.#i&&(he(this.#i),this.#i=null),this.#a&&(he(this.#a),this.#a=null),this.#o&&(he(this.#o),this.#o=null),R&&(me(this.#t),Nr(),me(Vr()));var n=this.#n.onerror;let r=this.#n.failed;var a=!1,i=!1;let c=()=>{if(a){ws();return}a=!0,i&&fs(),this.#o!==null&&sn(this.#o,()=>{this.#o=null}),this.#p(()=>{this.#x()})},s=u=>{try{i=!0,n?.(u,c),i=!1}catch(l){ut(l,this.#r&&this.#r.parent)}r&&(this.#o=this.#p(()=>{try{return Ve(()=>{var l=$;l.b=this,l.f|=gr,r(this.#e,()=>u,()=>c)})}catch(l){return ut(l,this.#r.parent),null}}))};rt(()=>{var u;try{u=this.transform_error(t)}catch(l){ut(l,this.#r&&this.#r.parent);return}u!==null&&typeof u=="object"&&typeof u.then=="function"?u.then(s,l=>ut(l,this.#r&&this.#r.parent)):s(u)})}};xn=Symbol("obsolete");Ln=new Set,Ct=new Map,si=!1;xa=!1;An=!1,it=!1;V=null,ze=!1;$=null;De=null;_e=null,Ce=0,Oe=null;di=1,kt=0,St=kt;globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:Sa({}),i18n:Sa({}),instances:new Set,plugins:new Set};Gs={ariaLinkLabel:"Altcha (official website)",cancel:"Cancel",enterCode:"Enter code",enterCodeAria:"Enter code you hear. Press Space to play audio.",enterCodeFromImage:"To proceed, please enter the code from the image below.",error:"Verification failed. Try again later.",expired:"Verification expired. Try again.",footer:'Protected by <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (official website)">ALTCHA</a>',getAudioChallenge:"Get an audio challenge",label:"I'm not a robot",loading:"Loading...",reload:"Reload",verify:"Verify",verificationRequired:"Verification required!",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait."};globalThis.$altcha.i18n.set("en",Gs);Ws="5";typeof window<"u"&&((window.__svelte??={}).v??=new Set).add(Ws);nn=Symbol("events"),Si=new Set,Ar=new Set;Aa=null;Js=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});el=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];nl={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};al=["touchstart","touchmove"];Cn=new Map;$r=new WeakMap;Bt=class{anchor;#e=new Map;#t=new Map;#n=new Map;#l=new Set;#r=!0;constructor(t,n=!0){this.anchor=t,this.#r=n}#i=t=>{if(this.#e.has(t)){var n=this.#e.get(t),r=this.#t.get(n);if(r)qs(r),this.#l.delete(n);else{var a=this.#n.get(n);a&&(this.#t.set(n,a.effect),this.#n.delete(n),a.fragment.lastChild.remove(),this.anchor.before(a.fragment),r=a.effect)}for(let[i,c]of this.#e){if(this.#e.delete(i),i===t)break;let s=this.#n.get(c);s&&(he(s.effect),this.#n.delete(c))}for(let[i,c]of this.#t){if(i===n||this.#l.has(i))continue;let s=()=>{if(Array.from(this.#e.values()).includes(i)){var l=document.createDocumentFragment();Ci(c,l),l.append(He()),this.#n.set(i,{effect:c,fragment:l})}else he(c);this.#l.delete(i),this.#t.delete(i)};this.#r||!r?(this.#l.add(i),sn(c,s,!1)):s()}}};#a=t=>{this.#e.delete(t);let n=Array.from(this.#e.values());for(let[r,a]of this.#n)n.includes(r)||(he(a.effect),this.#n.delete(r))};ensure(t,n){var r=I,a=xs();if(n&&!this.#t.has(t)&&!this.#n.has(t))if(a){var i=document.createDocumentFragment(),c=He();i.append(c),this.#n.set(t,{effect:Ve(()=>n(c)),fragment:i})}else this.#t.set(t,Ve(()=>n(this.anchor)));if(this.#e.set(r,t),a){for(let[s,u]of this.#t)s===t?r.unskip_effect(u):r.skip_effect(u);for(let[s,u]of this.#n)s===t?r.unskip_effect(u.effect):r.skip_effect(u.effect);r.oncommit(this.#i),r.ondiscard(this.#a)}else R&&(this.anchor=M),this.#i(r)}};cl=Symbol("NaN");$a=[...` 	
\r\f\xA0\v\uFEFF`];Qt=Symbol("class"),en=Symbol("style"),Li=Symbol("is custom element"),Pi=Symbol("is html"),wl=un?"link":"LINK",_l=un?"input":"INPUT",kl=un?"option":"OPTION",xl=un?"select":"SELECT",El=un?"progress":"PROGRESS";Oa=new Map;$l={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};Ir=class{#e;#t;constructor(t){var n=new Map,r=(i,c)=>{var s=li(c,!1,!1);return n.set(i,s),s};let a=new Proxy({...t.props||{},$$events:{}},{get(i,c){return o(n.get(c)??r(c,Reflect.get(i,c)))},has(i,c){return c===Xo?!0:(o(n.get(c)??r(c,Reflect.get(i,c))),Reflect.has(i,c))},set(i,c,s){return _(n.get(c)??r(c,s),s),Reflect.set(i,c,s)}});this.#t=(t.hydrate?ol:$i)(t.component,{target:t.target,anchor:t.anchor,props:a,context:t.context,intro:t.intro??!1,recover:t.recover,transformError:t.transformError}),(!t?.props?.$$host||t.sync===!1)&&Y(),this.#e=a.$$events;for(let i of Object.keys(this.#t))i==="$set"||i==="$destroy"||i==="$on"||ln(this,i,{get(){return this.#t[i]},set(c){this.#t[i]=c},enumerable:!0});this.#t.$set=i=>{Object.assign(a,i)},this.#t.$destroy=()=>{sl(this.#t)}}$set(t){this.#t.$set(t)}$on(t,n){this.#e[t]=this.#e[t]||[];let r=(...a)=>n.call(this,...a);return this.#e[t].push(r),()=>{this.#e[t]=this.#e[t].filter(a=>a!==r)}}$destroy(){this.#t.$destroy()}},Mi=class{};typeof HTMLElement=="function"&&(Mi=class extends HTMLElement{$$ctor;$$s;$$c;$$cn=!1;$$d={};$$r=!1;$$p_d={};$$l={};$$l_u=new Map;$$me;$$shadowRoot=null;constructor(e,t,n){super(),this.$$ctor=e,this.$$s=t,n&&(this.$$shadowRoot=this.attachShadow(n))}addEventListener(e,t,n){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){let r=this.$$c.$on(e,t);this.$$l_u.set(t,r)}super.addEventListener(e,t,n)}removeEventListener(e,t,n){if(super.removeEventListener(e,t,n),this.$$c){let r=this.$$l_u.get(t);r&&(r(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(a){return i=>{let c=Ur("slot");a!=="default"&&(c.name=a),D(i,c)}};var e=t;if(await Promise.resolve(),!this.$$cn||this.$$c)return;let n={},r=Il(this);for(let a of this.$$s)a in r&&(a==="default"&&!this.$$d.children?(this.$$d.children=t(a),n.default=!0):n[a]=t(a));for(let a of this.attributes){let i=this.$$g_p(a.name);i in this.$$d||(this.$$d[i]=Tn(i,a.value,this.$$p_d,"toProp"))}for(let a in this.$$p_d)!(a in this.$$d)&&this[a]!==void 0&&(this.$$d[a]=this[a],delete this[a]);this.$$c=Rl({component:this.$$ctor,target:this.$$shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=Hs(()=>{Fn(()=>{this.$$r=!0;for(let a of $n(this.$$c)){if(!this.$$p_d[a]?.reflect)continue;this.$$d[a]=this.$$c[a];let i=Tn(a,this.$$d[a],this.$$p_d,"toAttribute");i==null?this.removeAttribute(this.$$p_d[a].attribute||a):this.setAttribute(this.$$p_d[a].attribute||a,i)}this.$$r=!1})});for(let a in this.$$l)for(let i of this.$$l[a]){let c=this.$$c.$on(a,i);this.$$l_u.set(i,c)}this.$$l={}}}attributeChangedCallback(e,t,n){this.$$r||(e=this.$$g_p(e),this.$$d[e]=Tn(e,n,this.$$p_d,"toProp"),this.$$c?.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(e){return $n(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});Ol=Z('<div class="altcha-checkbox"><input/> <svg aria-hidden="true" width="12" height="9" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1"></polyline></svg> <div class="altcha-spinner altcha-checkbox-spinner" aria-hidden="true"></div></div>');jn(["click"]);bt(Ni,{loading:{}},[],[],{mode:"open"});Ll=Z('<div class="altcha-checkbox-native"><input/> <div class="altcha-spinner altcha-checkbox-native-spinner"></div></div>');bt(Vi,{loading:{}},[],[],{mode:"open"});Pl=Z('<div><a target="_blank" class="altcha-logo" aria-hidden="true" tabindex="-1"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>');bt(Xr,{strings:{}},[],[],{mode:"open"});Dl=Z('<div class="altcha-footer"><p></p> <!></div>');bt(Or,{logo:{},strings:{}},[],[],{mode:"open"});Ml=Z('<div class="altcha-switch"><input/>  <div class="altcha-switch-toggle"><div class="altcha-spinner altcha-switch-spinner"></div></div></div>');jn(["click"]);bt(Ui,{loading:{}},[],[],{mode:"open"});fe=(e=>(e.ERROR="error",e.LOADING="loading",e.PLAYING="playing",e.PAUSED="paused",e.READY="ready",e))(fe||{}),F=(e=>(e.CODE="code",e.ERROR="error",e.VERIFIED="verified",e.VERIFYING="verifying",e.UNVERIFIED="unverified",e.EXPIRED="expired",e))(F||{}),Nl=Z('<div class="altcha-code-challenge-title"> </div>'),Vl=Z('<div class="altcha-spinner"></div>'),Ul=Gr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'),Fl=Gr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'),zl=Gr('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'),jl=Z('<button type="button" class="altcha-button altcha-button-secondary"><!></button>'),Hl=Z('<audio hidden="" autoplay=""></audio>'),Bl=Z('<div class="altcha-code-challenge"><form data-code-challenge="true"><!> <div class="altcha-code-challenge-text"> </div> <img class="altcha-code-challenge-image" alt=""/> <div class="altcha-code-challenge-row"><input type="text" class="altcha-input" autocomplete="off" name="" required=""/> <!> <button type="button" class="altcha-button altcha-button-secondary"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <div class="altcha-code-challenge-buttons"><button type="submit" class="altcha-button"> </button> <button type="button" class="altcha-button altcha-button-secondary"> </button></div></form> <!></div>');jn(["keydown"]);bt(Fi,{audioUrl:{},codeChallenge:{},config:{},imageUrl:{},onCancel:{},onReload:{},onSubmit:{},strings:{}},[],[],{mode:"open"});Kl=Z('<div class="altcha-popover-backdrop" data-backdrop=""></div>'),Yl=Z('<div class="altcha-popover-arrow"></div>'),ql=Z('<div role="button" class="altcha-popover-close">&times;</div>'),Gl=Z('<!> <div><!> <!> <div class="altcha-popover-content"><!></div></div>',1);bt(Lr,{anchor:{},children:{},display:{},backdrop:{},onClickOutside:{},onClickOutsideDelay:{},onClose:{},placement:{},updateUISignal:{},variant:{}},[],[],{mode:"open"});Pr=class{TAG_CODES={INPUT:1,TEXTAREA:2,SELECT:3,BUTTON:4,A:5,DETAILS:6,SUMMARY:7,IFRAME:8,VIDEO:9,AUDIO:10};maxSamples;sampleInterval;target;focusStartTime=0;focusInteraction=0;focusInteractionTimer=null;lastPointerSample=0;lastTouchSample=0;lastScrollSample=0;pendingPointer=null;pendingTouch=null;focus=[];pointer=[];scroll=[];touch=[];constructor(t={}){let{maxSamples:n=60,sampleInterval:r=50,target:a=window}=t;this.maxSamples=n,this.sampleInterval=r,this.target=a,this.attach()}destroy(){let t={capture:!0};this.target.removeEventListener("focusin",this.onFocus,t),this.target.removeEventListener("keydown",this.onInteraction,t),this.target.removeEventListener("pointerdown",this.onInteraction,t),this.target.removeEventListener("pointermove",this.onPointer,t),this.target.removeEventListener("scroll",this.onScroll,t),this.target.removeEventListener("touchmove",this.onTouchMove,t)}export(){return{focus:this.focus,maxTouchPoints:navigator.maxTouchPoints||0,pointer:this.pointer,scroll:this.scroll,time:Date.now(),touch:this.touch}}attach(){let t={passive:!0,capture:!0};this.target.addEventListener("focusin",this.onFocus,t),this.target.addEventListener("keydown",this.onInteraction,t),this.target.addEventListener("pointerdown",this.onInteraction,t),this.target.addEventListener("pointermove",this.onPointer,t),this.target.addEventListener("scroll",this.onScroll,t),this.target.addEventListener("touchmove",this.onTouchMove,t)}evict(t){t.length>this.maxSamples&&t.splice(0,t.length-this.maxSamples)}onFocus=t=>{if(this.focusInteraction===2)return;let n=t.target;if(!(n instanceof Element))return;let r=performance.now();this.focusStartTime===0&&(this.focusStartTime=r),this.focus.push([Math.round(r-this.focusStartTime),n.tabIndex,this.TAG_CODES[n.tagName]??0,this.focusInteraction?1:0]),this.evict(this.focus)};onInteraction=t=>{this.focusInteraction="keyCode"in t?1:2,this.focusInteractionTimer&&clearTimeout(this.focusInteractionTimer),this.focusInteractionTimer=setTimeout(()=>{this.focusInteraction=0},100)};onPointer=t=>{if(t.pointerType==="touch")return;let n=t.timeStamp||performance.now();this.pendingPointer=[Math.round(t.clientX),Math.round(t.clientY),Math.round(n)],n-this.lastPointerSample>=this.sampleInterval&&(this.pointer.push(this.pendingPointer),this.lastPointerSample=n,this.pendingPointer=null,this.evict(this.pointer))};onScroll=()=>{let t=performance.now();t-this.lastScrollSample<this.sampleInterval||(this.scroll.push([Math.round(window.scrollY),Math.round(t)]),this.lastScrollSample=t,this.evict(this.scroll))};onTouchMove=t=>{let n=t.timeStamp||performance.now(),r=t.touches[0];r&&(this.pendingTouch=[Math.round(r.clientX),Math.round(r.clientY),Math.round(n),Math.round(r.force*1e3)/1e3,Math.round(r.radiusX||0),Math.round(r.radiusY||0)],n-this.lastTouchSample>=this.sampleInterval&&(this.touch.push(this.pendingTouch),this.lastTouchSample=n,this.pendingTouch=null,this.evict(this.touch)))}},Zl=Z('<div class="altcha-overlay-backdrop" data-backdrop=""></div>'),Xl=Z('<div class="altcha-overlay-content"></div>'),Ql=Z('<div role="button" class="altcha-overlay-close">&times;</div> <!>',1),ec=Z('<div class="altcha-floating-arrow"></div>'),tc=Z('<input type="hidden"/>'),nc=Z('<div class="altcha-error">Secure context (HTTPS) required.</div>'),rc=Z('<div class="altcha-error"> </div>'),ac=Z('<div class="altcha-error"> </div>'),ic=Z("<!> <!>",1),oc=Z('<!> <div class="altcha"><!> <div class="altcha-main"><div><div class="altcha-checkbox-wrap"><!> <label><!></label></div> <!></div> <!> <!> <!></div> <!></div>',1);typeof window<"u"&&window.customElements&&!customElements.get("altcha-widget")&&customElements.define("altcha-widget",bt(sc,{auto:{type:"String"},challenge:{type:"String"},configuration:{type:"String"},display:{type:"String"},language:{type:"String"},name:{type:"String"},theme:{type:"String"},type:{type:"String"},workers:{type:"Number"}},[],["configure","getConfiguration","getState","hide","log","reset","setState","show","updateUI","verify"]));ji=`(function() {
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
`,La=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",ji],{type:"text/javascript;charset=utf-8"});Hi=`(function() {
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
`,Pa=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",Hi],{type:"text/javascript;charset=utf-8"});lc=`:root {
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
}`;Jl(lc);$altcha.algorithms.set("SHA-256",()=>new ea);$altcha.algorithms.set("SHA-384",()=>new ea);$altcha.algorithms.set("SHA-512",()=>new ea);$altcha.algorithms.set("PBKDF2/SHA-256",()=>new Qr);$altcha.algorithms.set("PBKDF2/SHA-384",()=>new Qr);$altcha.algorithms.set("PBKDF2/SHA-512",()=>new Qr)});function cc(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function uc(e,t,n){if(e==null)return t(void 0),Yn;let r=dc(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}function fc(e,t=Yn){let n=null,r=new Set;function a(s){if(cc(e,s)&&(e=s,n)){let u=!Kt.length;for(let l of r)l[1](),Kt.push(l,e);if(u){for(let l=0;l<Kt.length;l+=2)Kt[l][0](Kt[l+1]);Kt.length=0}}}function i(s){a(s(e))}function c(s,u=Yn){let l=[s,u];return r.add(l),r.size===1&&(n=t(a,i)||Yn),s(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:i,subscribe:c}}function Kn(e){let t;return uc(e,n=>t=n)(),t}function dc(e){var t=ta;try{return ta=!0,e()}finally{ta=t}}function Ki(e){let t={get:n=>Kn(t.store)[n],set:(n,r)=>{typeof n=="string"?Object.assign(Kn(t.store),{[n]:r}):Object.assign(Kn(t.store),n),t.store.set(Kn(t.store))},store:fc(e)};return t}var Yn,Kt,ta,hc,Yi=Ot(()=>{Yn=()=>{};Kt=[];ta=!1;globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:Ki({}),i18n:Ki({}),instances:new Set,plugins:new Set};hc={ariaLinkLabel:"Altcha (offizielle Website)",enterCode:"Code eingeben",enterCodeAria:"Geben Sie den Code ein, den Sie h\xF6ren. Dr\xFCcken Sie die Leertaste, um die Audio abzuspielen.",error:"\xDCberpr\xFCfung fehlgeschlagen. Bitte versuchen Sie es sp\xE4ter erneut.",expired:"\xDCberpr\xFCfung abgelaufen. Bitte versuchen Sie es erneut.",footer:'Gesch\xFCtzt durch <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (offizielle Website)">ALTCHA</a>',getAudioChallenge:"Audio-Herausforderung anfordern",label:"Ich bin kein Roboter",loading:"Lade...",reload:"Neu laden",verify:"\xDCberpr\xFCfen",verificationRequired:"\xDCberpr\xFCfung erforderlich!",verified:"\xDCberpr\xFCft",verifying:"Wird \xFCberpr\xFCft...",waitAlert:"\xDCberpr\xFCfung l\xE4uft... bitte warten.",cancel:"Abbrechen",enterCodeFromImage:"Um fortzufahren, geben Sie bitte den Code aus dem Bild unten ein."};globalThis.$altcha.i18n.set("de",hc)});function vc(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function pc(e,t,n){if(e==null)return t(void 0),Gn;let r=bc(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}function gc(e,t=Gn){let n=null,r=new Set;function a(s){if(vc(e,s)&&(e=s,n)){let u=!Yt.length;for(let l of r)l[1](),Yt.push(l,e);if(u){for(let l=0;l<Yt.length;l+=2)Yt[l][0](Yt[l+1]);Yt.length=0}}}function i(s){a(s(e))}function c(s,u=Gn){let l=[s,u];return r.add(l),r.size===1&&(n=t(a,i)||Gn),s(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:i,subscribe:c}}function qn(e){let t;return pc(e,n=>t=n)(),t}function bc(e){var t=na;try{return na=!0,e()}finally{na=t}}function qi(e){let t={get:n=>qn(t.store)[n],set:(n,r)=>{typeof n=="string"?Object.assign(qn(t.store),{[n]:r}):Object.assign(qn(t.store),n),t.store.set(qn(t.store))},store:gc(e)};return t}var Gn,Yt,na,mc,Gi=Ot(()=>{Gn=()=>{};Yt=[];na=!1;globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:qi({}),i18n:qi({}),instances:new Set,plugins:new Set};mc={ariaLinkLabel:"Altcha (offici\xEBle website)",enterCode:"Voer code in",enterCodeAria:"Voer de code in die je hoort. Druk op Spatie om de audio af te spelen.",error:"Verificatie mislukt. Probeer het later opnieuw.",expired:"Verificatie verlopen. Probeer het opnieuw.",footer:'Beschermd door <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (offici\xEBle website)">ALTCHA</a>',getAudioChallenge:"Audio-uitdaging ontvangen",label:"Ik ben geen robot",loading:"Laden...",reload:"Herladen",verify:"Verifi\xEBren",verificationRequired:"Verificatie vereist!",verified:"Geverifieerd",verifying:"Bezig met verifi\xEBren...",waitAlert:"Bezig met verifi\xEBren... even geduld a.u.b.",cancel:"Annuleren",enterCodeFromImage:"Om door te gaan, voert u de code uit de onderstaande afbeelding in."};globalThis.$altcha.i18n.set("nl",mc)});function yc(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function wc(e,t,n){if(e==null)return t(void 0),Jn;let r=kc(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}function _c(e,t=Jn){let n=null,r=new Set;function a(s){if(yc(e,s)&&(e=s,n)){let u=!qt.length;for(let l of r)l[1](),qt.push(l,e);if(u){for(let l=0;l<qt.length;l+=2)qt[l][0](qt[l+1]);qt.length=0}}}function i(s){a(s(e))}function c(s,u=Jn){let l=[s,u];return r.add(l),r.size===1&&(n=t(a,i)||Jn),s(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:i,subscribe:c}}function Wn(e){let t;return wc(e,n=>t=n)(),t}function kc(e){var t=ra;try{return ra=!0,e()}finally{ra=t}}function Wi(e){let t={get:n=>Wn(t.store)[n],set:(n,r)=>{typeof n=="string"?Object.assign(Wn(t.store),{[n]:r}):Object.assign(Wn(t.store),n),t.store.set(Wn(t.store))},store:_c(e)};return t}var Jn,qt,ra,xc,Ji=Ot(()=>{Jn=()=>{};qt=[];ra=!1;globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:Wi({}),i18n:Wi({}),instances:new Set,plugins:new Set};xc={ariaLinkLabel:"Altcha (site officiel)",enterCode:"Entrez le code",enterCodeAria:"Entrez le code que vous entendez. Appuyez sur Espace pour \xE9couter l'audio.",error:"\xC9chec de la v\xE9rification. Essayez \xE0 nouveau plus tard.",expired:"La v\xE9rification a expir\xE9. Essayez \xE0 nouveau.",footer:'Prot\xE9g\xE9 par <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (site officiel)">ALTCHA</a>',getAudioChallenge:"Obtenir un d\xE9fi audio",label:"Je ne suis pas un robot",loading:"Chargement...",reload:"Recharger",verify:"V\xE9rifier",verificationRequired:"V\xE9rification requise !",verified:"V\xE9rifi\xE9",verifying:"V\xE9rification en cours...",waitAlert:"V\xE9rification en cours... veuillez patienter.",cancel:"Annuler",enterCodeFromImage:"Pour continuer, veuillez entrer le code de l'image ci-dessous."};globalThis.$altcha.i18n.set("fr-fr",xc)});var Zi,Xi,mn,Qi=Ot(()=>{(function(e){e.ERROR="error",e.LOADING="loading",e.PLAYING="playing",e.PAUSED="paused",e.READY="ready"})(Zi||(Zi={}));(function(e){e.SHA_256="SHA-256",e.SHA_384="SHA-384",e.SHA_512="SHA-512"})(Xi||(Xi={}));(function(e){e.CODE="code",e.ERROR="error",e.VERIFIED="verified",e.VERIFYING="verifying",e.UNVERIFIED="unverified",e.EXPIRED="expired"})(mn||(mn={}))});var eo={};Ho(eo,{default:()=>Zn});var Zn,to=Ot(()=>{Bi();Yi();Gi();Ji();Qi();Zn=class extends window.PluginBaseClass{init(){this.el.addEventListener("statechange",this.onStateChange.bind(this))}onStateChange(t){"detail"in t&&[mn.VERIFYING,mn.VERIFIED].includes(t.detail.state)===!1&&this.el.classList.remove("d-none")}}});window.PluginManager.register("AltchaPlugin",()=>Promise.resolve().then(()=>(to(),eo)),"altcha-widget");})();
