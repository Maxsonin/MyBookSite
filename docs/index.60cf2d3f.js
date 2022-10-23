var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&s+1<t.length&&56320==(64512&t.charCodeAt(s+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++s)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},n={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let e=0;e<t.length;e+=3){const i=t[e],r=e+1<t.length,o=r?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,h=i>>2,u=(3&i)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(l=64)),s.push(n[h],n[u],n[l],n[d])}return s.join("")},encodeString(t,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(t):this.encodeByteArray(e(t),n)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((31&i)<<6|63&r)}else if(i>239&&i<365){const r=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[s++]=String.fromCharCode(55296+(r>>10)),e[s++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&i)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],r=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==r||null==o||null==a)throw Error();const c=i<<2|r>>4;if(s.push(c),64!==o){const t=r<<4&240|o>>2;if(s.push(t),64!==a){const t=o<<6&192|a;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},s=function(t){return function(t){const s=e(t);return n.encodeByteArray(s,!0)}(t).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class i{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r(){return"object"==typeof indexedDB}class o extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,o.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,a.prototype.create)}}class a{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],r=i?function(t,e){return t.replace(c,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(i,n):"Error",a=`${this.serviceName}: ${r} (${s}).`;return new o(s,a,n)}}const c=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const n=t[i],r=e[i];if(u(n)&&u(r)){if(!h(n,r))return!1}else if(n!==r)return!1}for(const t of s)if(!n.includes(t))return!1;return!0}function u(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(t){return t&&t._delegate?t._delegate:t}class d{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class f{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,"[DEFAULT]"===s?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var s;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class g{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new f(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=[];var m,y;(y=m||(m={}))[y.DEBUG=0]="DEBUG",y[y.VERBOSE=1]="VERBOSE",y[y.INFO=2]="INFO",y[y.WARN=3]="WARN",y[y.ERROR=4]="ERROR",y[y.SILENT=5]="SILENT";const v={debug:m.DEBUG,verbose:m.VERBOSE,info:m.INFO,warn:m.WARN,error:m.ERROR,silent:m.SILENT},w=m.INFO,E={[m.DEBUG]:"log",[m.VERBOSE]:"log",[m.INFO]:"info",[m.WARN]:"warn",[m.ERROR]:"error"},b=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),i=E[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${s}]  ${t.name}:`,...n)};class T{constructor(t){this.name=t,this._logLevel=w,this._logHandler=b,this._userLogHandler=null,p.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in m))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?v[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,m.DEBUG,...t),this._logHandler(this,m.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,m.VERBOSE,...t),this._logHandler(this,m.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,m.INFO,...t),this._logHandler(this,m.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,m.WARN,...t),this._logHandler(this,m.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,m.ERROR,...t),this._logHandler(this,m.ERROR,...t)}}let I,C;const S=new WeakMap,A=new WeakMap,D=new WeakMap,_=new WeakMap,N=new WeakMap;let k={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return A.get(t);if("objectStoreNames"===e)return t.objectStoreNames||D.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return x(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function L(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(C||(C=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(O(this),e),x(S.get(this))}:function(...e){return x(t.apply(O(this),e))}:function(e,...n){const s=t.call(O(this),e,...n);return D.set(s,e.sort?e.sort():[e]),x(s)}}function R(t){return"function"==typeof t?L(t):(t instanceof IDBTransaction&&function(t){if(A.has(t))return;const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",r),t.removeEventListener("abort",r)},i=()=>{e(),s()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",r),t.addEventListener("abort",r)}));A.set(t,e)}(t),e=t,(I||(I=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,k):t);var e}function x(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",r)},i=()=>{e(x(t.result)),s()},r=()=>{n(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&S.set(e,t)})).catch((()=>{})),N.set(e,t),e}(t);if(_.has(t))return _.get(t);const e=R(t);return e!==t&&(_.set(t,e),N.set(e,t)),e}const O=t=>N.get(t);function M(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=x(o);return s&&o.addEventListener("upgradeneeded",(t=>{s(x(o.result),t.oldVersion,t.newVersion,x(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{r&&t.addEventListener("close",(()=>r())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const V=["get","getKey","getAll","getAllKeys","count"],P=["put","add","delete","clear"],F=new Map;function U(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(F.get(e))return F.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=P.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!i&&!V.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,i?"readwrite":"readonly");let o=r.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&r.done]))[0]};return F.set(e,r),r}k=(t=>({...t,get:(e,n,s)=>U(e,n)||t.get(e,n,s),has:(e,n)=>!!U(e,n)||t.has(e,n)}))(k);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class B{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const q=new T("@firebase/app"),j={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},K=new Map,H=new Map;function $(t,e){try{t.container.addComponent(e)}catch(n){q.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function G(t){const e=t.name;if(H.has(e))return q.debug(`There were multiple attempts to register component ${e}.`),!1;H.set(e,t);for(const e of K.values())$(e,t);return!0}function z(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const W=new a("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Q{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new d("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw W.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="[DEFAULT]"){const e=K.get(t);if(!e)throw W.create("no-app",{appName:t});return e}function X(t,e,n){var s;let i=null!==(s=j[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${i}" with version "${e}":`];return r&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void q.warn(t.join(" "))}G(new d(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}let J=null;function Z(){return J||(J=M("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore("firebase-heartbeat-store")}}).catch((t=>{throw W.create("idb-open",{originalErrorMessage:t.message})}))),J}async function tt(t,e){var n;try{const n=(await Z()).transaction("firebase-heartbeat-store","readwrite"),s=n.objectStore("firebase-heartbeat-store");return await s.put(e,et(t)),n.done}catch(t){if(t instanceof o)q.warn(t.message);else{const e=W.create("idb-set",{originalErrorMessage:null===(n=t)||void 0===n?void 0:n.message});q.warn(e.message)}}}function et(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new it(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=st();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=st(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let s=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),rt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rt(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),i=s(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function st(){return(new Date).toISOString().substring(0,10)}class it{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!r()&&new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){var e;try{return(await Z()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(et(t))}catch(t){if(t instanceof o)q.warn(t.message);else{const n=W.create("idb-get",{originalErrorMessage:null===(e=t)||void 0===e?void 0:e.message});q.warn(n.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return tt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return tt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function rt(t){return s(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot;ot="",G(new d("platform-logger",(t=>new B(t)),"PRIVATE")),G(new d("heartbeat",(t=>new nt(t)),"PRIVATE")),X("@firebase/app","0.7.33",ot),X("@firebase/app","0.7.33","esm2017"),X("fire-js","");var at,ct="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},ht={},ut=ut||{},lt=ct||self;function dt(){}function ft(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function gt(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var pt="closure_uid_"+(1e9*Math.random()>>>0),mt=0;function yt(t,e,n){return t.call.apply(t.bind,arguments)}function vt(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function wt(t,e,n){return(wt=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?yt:vt).apply(null,arguments)}function Et(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function bt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function Tt(){this.s=this.s,this.o=this.o}var It={};Tt.prototype.s=!1,Tt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,pt)&&t[pt]||(t[pt]=++mt)}(this);delete It[t]}},Tt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ct=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function St(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function At(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(ft(n)){const e=t.length||0,s=n.length||0;t.length=e+s;for(let i=0;i<s;i++)t[e+i]=n[i]}else t.push(n)}}function Dt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Dt.prototype.h=function(){this.defaultPrevented=!0};var _t=function(){if(!lt.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{lt.addEventListener("test",dt,e),lt.removeEventListener("test",dt,e)}catch(t){}return t}();function Nt(t){return/^[\s\xa0]*$/.test(t)}var kt=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Lt(t,e){return t<e?-1:t>e?1:0}function Rt(){var t=lt.navigator;return t&&(t=t.userAgent)?t:""}function xt(t){return-1!=Rt().indexOf(t)}function Ot(t){return Ot[" "](t),t}Ot[" "]=dt;var Mt,Vt,Pt=xt("Opera"),Ft=xt("Trident")||xt("MSIE"),Ut=xt("Edge"),Bt=Ut||Ft,qt=xt("Gecko")&&!(-1!=Rt().toLowerCase().indexOf("webkit")&&!xt("Edge"))&&!(xt("Trident")||xt("MSIE"))&&!xt("Edge"),jt=-1!=Rt().toLowerCase().indexOf("webkit")&&!xt("Edge");function Kt(){var t=lt.document;return t?t.documentMode:void 0}t:{var Ht="",$t=(Vt=Rt(),qt?/rv:([^\);]+)(\)|;)/.exec(Vt):Ut?/Edge\/([\d\.]+)/.exec(Vt):Ft?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Vt):jt?/WebKit\/(\S+)/.exec(Vt):Pt?/(?:Version)[ \/]?(\S+)/.exec(Vt):void 0);if($t&&(Ht=$t?$t[1]:""),Ft){var Gt=Kt();if(null!=Gt&&Gt>parseFloat(Ht)){Mt=String(Gt);break t}}Mt=Ht}var zt,Wt={};function Qt(){return function(t){var e=Wt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=kt(String(Mt)).split("."),n=kt("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=Lt(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||Lt(0==i[2].length,0==r[2].length)||Lt(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(lt.document&&Ft){var Yt=Kt();zt=Yt||(parseInt(Mt,10)||void 0)}else zt=void 0;var Xt=zt;function Jt(t,e){if(Dt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(qt){t:{try{Ot(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Zt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Jt.X.h.call(this)}}bt(Jt,Dt);var Zt={2:"touch",3:"pen",4:"mouse"};Jt.prototype.h=function(){Jt.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var te="closure_listenable_"+(1e6*Math.random()|0),ee=0;function ne(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++ee,this.ba=this.ea=!1}function se(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ie(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function re(t){const e={};for(const n in t)e[n]=t[n];return e}const oe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ae(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<oe.length;e++)n=oe[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ce(t){this.src=t,this.g={},this.h=0}function he(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=Ct(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(se(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ue(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}ce.prototype.add=function(t,e,n,s,i){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=ue(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new ne(e,this.src,r,!!s,i)).ea=n,t.push(e)),e};var le="closure_lm_"+(1e6*Math.random()|0),de={};function fe(t,e,n,s,i){if(s&&s.once)return pe(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)fe(t,e[r],n,s,i);return null}return n=Te(n),t&&t[te]?t.N(e,n,gt(s)?!!s.capture:!!s,i):ge(t,e,n,!1,s,i)}function ge(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=gt(i)?!!i.capture:!!i,a=Ee(t);if(a||(t[le]=a=new ce(t)),(n=a.add(e,n,s,o,r)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}const e=we;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)_t||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(ve(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function pe(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)pe(t,e[r],n,s,i);return null}return n=Te(n),t&&t[te]?t.O(e,n,gt(s)?!!s.capture:!!s,i):ge(t,e,n,!0,s,i)}function me(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)me(t,e[r],n,s,i);else s=gt(s)?!!s.capture:!!s,n=Te(n),t&&t[te]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=ue(r=t.g[e],n,s,i))&&(se(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Ee(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ue(e,n,s,i)),(n=-1<t?e[t]:null)&&ye(n))}function ye(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[te])he(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(ve(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Ee(e))?(he(n,t),0==n.h&&(n.src=null,e[le]=null)):se(t)}}}function ve(t){return t in de?de[t]:de[t]="on"+t}function we(t,e){if(t.ba)t=!0;else{e=new Jt(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&ye(t),t=n.call(s,e)}return t}function Ee(t){return(t=t[le])instanceof ce?t:null}var be="__closure_events_fn_"+(1e9*Math.random()>>>0);function Te(t){return"function"==typeof t?t:(t[be]||(t[be]=function(e){return t.handleEvent(e)}),t[be])}function Ie(){Tt.call(this),this.i=new ce(this),this.P=this,this.I=null}function Ce(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"==typeof e)e=new Dt(e,t);else if(e instanceof Dt)e.target=e.target||t;else{var i=e;ae(e=new Dt(s,t),i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Se(o,s,!0,e)&&i}if(i=Se(o=e.g=t,s,!0,e)&&i,i=Se(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)i=Se(o=e.g=n[r],s,!1,e)&&i}function Se(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&he(t.i,o),i=!1!==a.call(c,s)&&i}}return i&&!s.defaultPrevented}bt(Ie,Tt),Ie.prototype[te]=!0,Ie.prototype.removeEventListener=function(t,e,n,s){me(this,t,e,n,s)},Ie.prototype.M=function(){if(Ie.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)se(n[s]);delete e.g[t],e.h--}}this.I=null},Ie.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},Ie.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var Ae=lt.JSON.stringify;function De(){var t=Oe;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var _e,Ne=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new ke),(t=>t.reset()));class ke{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Le(t){lt.setTimeout((()=>{throw t}),0)}function Re(t,e){_e||function(){var t=lt.Promise.resolve(void 0);_e=function(){t.then(Me)}}(),xe||(_e(),xe=!0),Oe.add(t,e)}var xe=!1,Oe=new class{constructor(){this.h=this.g=null}add(t,e){const n=Ne.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function Me(){for(var t;t=De();){try{t.h.call(t.g)}catch(t){Le(t)}var e=Ne;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xe=!1}function Ve(t,e){Ie.call(this),this.h=t||1,this.g=e||lt,this.j=wt(this.kb,this),this.l=Date.now()}function Pe(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Fe(t,e,n){if("function"==typeof t)n&&(t=wt(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=wt(t.handleEvent,t)}return 2147483647<Number(e)?-1:lt.setTimeout(t,e||0)}function Ue(t){t.g=Fe((()=>{t.g=null,t.i&&(t.i=!1,Ue(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}bt(Ve,Ie),(at=Ve.prototype).ca=!1,at.R=null,at.kb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ce(this,"tick"),this.ca&&(Pe(this),this.start()))}},at.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},at.M=function(){Ve.X.M.call(this),Pe(this),delete this.g};class Be extends Tt{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ue(this)}M(){super.M(),this.g&&(lt.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qe(t){Tt.call(this),this.h=t,this.g={}}bt(qe,Tt);var je=[];function Ke(t,e,n,s){Array.isArray(n)||(n&&(je[0]=n.toString()),n=je);for(var i=0;i<n.length;i++){var r=fe(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function He(t){ie(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ye(t)}),t),t.g={}}function $e(){this.g=!0}function Ge(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return Ae(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}qe.prototype.M=function(){qe.X.M.call(this),He(this)},qe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},$e.prototype.Aa=function(){this.g=!1},$e.prototype.info=function(){};var ze={},We=null;function Qe(){return We=We||new Ie}function Ye(t){Dt.call(this,ze.Oa,t)}function Xe(t){const e=Qe();Ce(e,new Ye(e,t))}function Je(t,e){Dt.call(this,ze.STAT_EVENT,t),this.stat=e}function Ze(t){const e=Qe();Ce(e,new Je(e,t))}function tn(t,e){Dt.call(this,ze.Pa,t),this.size=e}function en(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return lt.setTimeout((function(){t()}),e)}ze.Oa="serverreachability",bt(Ye,Dt),ze.STAT_EVENT="statevent",bt(Je,Dt),ze.Pa="timingevent",bt(tn,Dt);var nn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,La:7,TIMEOUT:8,Cb:9},sn={qb:"complete",Mb:"success",Ma:"error",La:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function rn(){}function on(t){return t.h||(t.h=t.i())}function an(){}rn.prototype.h=null;var cn,hn={OPEN:"a",pb:"b",Ma:"c",Bb:"d"};function un(){Dt.call(this,"d")}function ln(){Dt.call(this,"c")}function dn(){}function fn(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new qe(this),this.O=pn,t=Bt?125:void 0,this.T=new Ve(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new gn}function gn(){this.i=null,this.g="",this.h=!1}bt(un,Dt),bt(ln,Dt),bt(dn,rn),dn.prototype.g=function(){return new XMLHttpRequest},dn.prototype.i=function(){return{}},cn=new dn;var pn=45e3,mn={},yn={};function vn(t,e,n){t.K=1,t.v=Pn(Rn(e)),t.s=n,t.P=!0,wn(t,null)}function wn(t,e){t.F=Date.now(),In(t),t.A=Rn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Yn(n.i,"t",s),t.C=0,n=t.l.H,t.h=new gn,t.g=Qs(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Be(wt(t.Ka,t,t.g),t.N)),Ke(t.S,t.g,"readystatechange",t.hb),e=t.H?re(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Xe(1),function(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var u=h[0];h=h[1];var l=u.split("_");o=2<=l.length&&"type"==l[1]?o+(u+"=")+h+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function En(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function bn(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=Tn(t,n),s==yn){4==e&&(t.o=4,Ze(14),i=!1),Ge(t.j,t.m,null,"[Incomplete Response]");break}if(s==mn){t.o=4,Ze(15),Ge(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Ge(t.j,t.m,s,null),_n(t,s)}En(t)&&s!=yn&&s!=mn&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Ze(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),qs(e),e.K=!0,Ze(11))):(Ge(t.j,t.m,n,"[Invalid Chunked Response]"),Dn(t),An(t))}function Tn(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?yn:(n=Number(e.substring(n,s)),isNaN(n)?mn:(s+=1)+n>e.length?yn:(e=e.substr(s,n),t.C=s+n,e))}function In(t){t.V=Date.now()+t.O,Cn(t,t.O)}function Cn(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=en(wt(t.fb,t),e)}function Sn(t){t.B&&(lt.clearTimeout(t.B),t.B=null)}function An(t){0==t.l.G||t.I||Hs(t.l,t)}function Dn(t){Sn(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Pe(t.T),He(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function _n(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||ns(n.h,t)))if(!t.J&&ns(n.h,t)&&3==n.G){try{var s=n.Fa.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ks(n),xs(n)}Bs(n),Ze(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=en(wt(n.bb,n),6e3));if(1>=es(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else Gs(n,11)}else if((t.J||n.g==t)&&Ks(n),!Nt(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let h=i[e];if(n.T=h[0],h=h[1],2==n.G)if("c"==h[0]){n.I=h[1],n.ka=h[2];const e=h[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const i=h[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const u=h[5];null!=u&&"number"==typeof u&&0<u&&(s=1.5*u,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.h;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(ss(r,r.h),r.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.za=t,Vn(s.F,s.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((s=n).sa=Ws(s,s.H?s.ka:null,s.V),o.J){is(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Sn(a),In(a)),s.g=o}else Us(s);0<n.i.length&&Ms(n)}else"stop"!=h[0]&&"close"!=h[0]||Gs(n,7);else 3==n.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?Gs(n,7):Rs(n):"noop"!=h[0]&&n.l&&n.l.wa(h),n.A=0)}Xe(4)}catch(t){}}function Nn(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(ft(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(ft(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}(t),s=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(ft(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}(at=fn.prototype).setTimeout=function(t){this.O=t},at.hb=function(t){t=t.target;const e=this.L;e&&3==As(t)?e.l():this.Ka(t)},at.Ka=function(t){try{if(t==this.g)t:{const u=As(this.g);var e=this.g.Ea();const l=this.g.aa();if(!(3>u)&&(3!=u||Bt||this.g&&(this.h.h||this.g.fa()||Ds(this.g)))){this.I||4!=u||7==e||Xe(8==e||0>=l?3:2),Sn(this);var n=this.g.aa();this.Y=n;e:if(En(this)){var s=Ds(this.g);t="";var i=s.length,r=4==As(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Dn(this),An(this);var o="";break e}this.h.i=new lt.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Nt(a)){var h=a;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,Ze(12),Dn(this),An(this);break t}Ge(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,_n(this,n)}this.P?(bn(this,u,o),Bt&&this.i&&3==u&&(Ke(this.S,this.T,"tick",this.gb),this.T.start())):(Ge(this.j,this.m,o,null),_n(this,o)),4==u&&Dn(this),this.i&&!this.I&&(4==u?Hs(this.l,this):(this.i=!1,In(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Ze(12)):(this.o=0,Ze(13)),Dn(this),An(this)}}}catch(t){}},at.gb=function(){if(this.g){var t=As(this.g),e=this.g.fa();this.C<e.length&&(Sn(this),bn(this,t,e),this.i&&4!=t&&In(this))}},at.cancel=function(){this.I=!0,Dn(this)},at.fb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Xe(3),Ze(17)),Dn(this),this.o=2,An(this)):Cn(this,this.V-t)};var kn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ln(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ln){this.h=void 0!==e?e:t.h,xn(this,t.j),this.s=t.s,this.g=t.g,On(this,t.m),this.l=t.l,e=t.i;var n=new Gn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Mn(this,n),this.o=t.o}else t&&(n=String(t).match(kn))?(this.h=!!e,xn(this,n[1]||"",!0),this.s=Fn(n[2]||""),this.g=Fn(n[3]||"",!0),On(this,n[4]),this.l=Fn(n[5]||"",!0),Mn(this,n[6]||"",!0),this.o=Fn(n[7]||"")):(this.h=!!e,this.i=new Gn(null,this.h))}function Rn(t){return new Ln(t)}function xn(t,e,n){t.j=n?Fn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function On(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Mn(t,e,n){e instanceof Gn?(t.i=e,function(t,e){e&&!t.j&&(zn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Wn(this,e),Yn(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Un(e,Hn)),t.i=new Gn(e,t.h))}function Vn(t,e,n){t.i.set(e,n)}function Pn(t){return Vn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Fn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Un(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Bn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Bn(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Ln.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Un(e,qn,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Un(e,qn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Un(n,"/"==n.charAt(0)?Kn:jn,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Un(n,$n)),t.join("")};var qn=/[#\/\?@]/g,jn=/[#\?:]/g,Kn=/[#\?]/g,Hn=/[#\?@]/g,$n=/#/g;function Gn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function zn(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Wn(t,e){zn(t),e=Xn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Qn(t,e){return zn(t),e=Xn(t,e),t.g.has(e)}function Yn(t,e,n){Wn(t,e),0<n.length&&(t.i=null,t.g.set(Xn(t,e),St(n)),t.h+=n.length)}function Xn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(at=Gn.prototype).add=function(t,e){zn(this),this.i=null,t=Xn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},at.forEach=function(t,e){zn(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},at.oa=function(){zn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let t=0;t<i.length;t++)n.push(e[s])}return n},at.W=function(t){zn(this);let e=[];if("string"==typeof t)Qn(this,t)&&(e=e.concat(this.g.get(Xn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},at.set=function(t,e){return zn(this),this.i=null,Qn(this,t=Xn(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},at.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},at.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;""!==o[s]&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Jn(t){this.l=t||Zn,lt.PerformanceNavigationTiming?t=0<(t=lt.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(lt.g&&lt.g.Ga&&lt.g.Ga()&&lt.g.Ga().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Zn=10;function ts(t){return!!t.h||!!t.g&&t.g.size>=t.j}function es(t){return t.h?1:t.g?t.g.size:0}function ns(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ss(t,e){t.g?t.g.add(e):t.h=e}function is(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function rs(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return St(t.i)}function os(){}function as(){this.g=new os}function cs(t,e,n){const s=n||"";try{Nn(t,(function(t,n){let i=t;gt(t)&&(i=Ae(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function hs(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(t){}}function us(t){this.l=t.$b||null,this.j=t.ib||!1}function ls(t,e){Ie.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ds,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Jn.prototype.cancel=function(){if(this.i=rs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},os.prototype.stringify=function(t){return lt.JSON.stringify(t,void 0)},os.prototype.parse=function(t){return lt.JSON.parse(t,void 0)},bt(us,rn),us.prototype.g=function(){return new ls(this.l,this.j)},us.prototype.i=function(t){return function(){return t}}({}),bt(ls,Ie);var ds=0;function fs(t){t.j.read().then(t.Sa.bind(t)).catch(t.ga.bind(t))}function gs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ps(t)}function ps(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(at=ls.prototype).open=function(t,e){if(this.readyState!=ds)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ps(this)},at.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||lt).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ga.bind(this))},at.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,gs(this)),this.readyState=ds},at.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ps(this)),this.g&&(this.readyState=3,ps(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ga.bind(this));else if(void 0!==lt.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fs(this)}else t.text().then(this.Ua.bind(this),this.ga.bind(this))},at.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?gs(this):ps(this),3==this.readyState&&fs(this)}},at.Ua=function(t){this.g&&(this.response=this.responseText=t,gs(this))},at.Ta=function(t){this.g&&(this.response=t,gs(this))},at.ga=function(){this.g&&gs(this)},at.setRequestHeader=function(t,e){this.v.append(t,e)},at.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},at.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(ls.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var ms=lt.JSON.parse;function ys(t){Ie.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=vs,this.K=this.L=!1}bt(ys,Ie);var vs="",ws=/^https?$/i,Es=["POST","PUT"];function bs(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ts(t),Cs(t)}function Ts(t){t.D||(t.D=!0,Ce(t,"complete"),Ce(t,"error"))}function Is(t){if(t.h&&void 0!==ut&&(!t.C[1]||4!=As(t)||2!=t.aa()))if(t.v&&4==As(t))Fe(t.Ha,0,t);else if(Ce(t,"readystatechange"),4==As(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===a){var i=String(t.H).match(kn)[1]||null;if(!i&&lt.self&&lt.self.location){var r=lt.self.location.protocol;i=r.substr(0,r.length-1)}s=!ws.test(i?i.toLowerCase():"")}n=s}if(n)Ce(t,"complete"),Ce(t,"success");else{t.m=6;try{var o=2<As(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.aa()+"]",Ts(t)}}finally{Cs(t)}}}function Cs(t,e){if(t.g){Ss(t);const n=t.g,s=t.C[0]?dt:null;t.g=null,t.C=null,e||Ce(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function Ss(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(lt.clearTimeout(t.A),t.A=null)}function As(t){return t.g?t.g.readyState:0}function Ds(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case vs:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function _s(t){let e="";return ie(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Ns(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=_s(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Vn(t,e,n))}function ks(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ls(t){this.Ca=0,this.i=[],this.j=new $e,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.$a=this.U=0,this.Ya=ks("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Wa=ks("baseRetryDelayMs",5e3,t),this.ab=ks("retryDelaySeedMs",1e4,t),this.Za=ks("forwardChannelMaxRetries",2,t),this.ta=ks("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Yb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Jn(t&&t.concurrentRequestLimit),this.Fa=new as,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Xa=t&&t.Wb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Rs(t){if(Os(t),3==t.G){var e=t.U++,n=Rn(t.F);Vn(n,"SID",t.I),Vn(n,"RID",e),Vn(n,"TYPE","terminate"),Ps(t,n),(e=new fn(t,t.j,e,void 0)).K=2,e.v=Pn(Rn(n)),n=!1,lt.navigator&&lt.navigator.sendBeacon&&(n=lt.navigator.sendBeacon(e.v.toString(),"")),!n&&lt.Image&&((new Image).src=e.v,n=!0),n||(e.g=Qs(e.l,null),e.g.da(e.v)),e.F=Date.now(),In(e)}zs(t)}function xs(t){t.g&&(qs(t),t.g.cancel(),t.g=null)}function Os(t){xs(t),t.u&&(lt.clearTimeout(t.u),t.u=null),Ks(t),t.h.cancel(),t.m&&("number"==typeof t.m&&lt.clearTimeout(t.m),t.m=null)}function Ms(t){ts(t.h)||t.m||(t.m=!0,Re(t.Ja,t),t.C=0)}function Vs(t,e){var n;n=e?e.m:t.U++;const s=Rn(t.F);Vn(s,"SID",t.I),Vn(s,"RID",n),Vn(s,"AID",t.T),Ps(t,s),t.o&&t.s&&Ns(s,t.o,t.s),n=new fn(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Fs(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ss(t.h,n),vn(n,s,e)}function Ps(t,e){t.ia&&ie(t.ia,(function(t,n){Vn(e,n,t)})),t.l&&Nn({},(function(t,n){Vn(e,n,t)}))}function Fs(t,e,n){n=Math.min(t.i.length,n);var s=t.l?wt(t.l.Qa,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{cs(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,s}function Us(t){t.g||t.u||(t.Z=1,Re(t.Ia,t),t.A=0)}function Bs(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=en(wt(t.Ia,t),$s(t,t.A)),t.A++,!0)}function qs(t){null!=t.B&&(lt.clearTimeout(t.B),t.B=null)}function js(t){t.g=new fn(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=Rn(t.sa);Vn(e,"RID","rpc"),Vn(e,"SID",t.I),Vn(e,"CI",t.L?"0":"1"),Vn(e,"AID",t.T),Vn(e,"TYPE","xmlhttp"),Ps(t,e),t.o&&t.s&&Ns(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Pn(Rn(e)),n.s=null,n.P=!0,wn(n,t)}function Ks(t){null!=t.v&&(lt.clearTimeout(t.v),t.v=null)}function Hs(t,e){var n=null;if(t.g==e){Ks(t),qs(t),t.g=null;var s=2}else{if(!ns(t.h,e))return;n=e.D,is(t.h,e),s=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;Ce(s=Qe(),new tn(s,n,e,i)),Ms(t)}else Us(t);else if(3==(i=e.o)||0==i&&0<t.pa||!(1==s&&function(t,e){return!(es(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Ya?0:t.Za)||(t.m=en(wt(t.Ja,t,e),$s(t,t.C)),t.C++,0)))}(t,e)||2==s&&Bs(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Gs(t,5);break;case 4:Gs(t,10);break;case 3:Gs(t,6);break;default:Gs(t,2)}}function $s(t,e){let n=t.Wa+Math.floor(Math.random()*t.ab);return t.l||(n*=2),n*e}function Gs(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var s=wt(t.jb,t);n||(n=new Ln("//www.google.com/images/cleardot.gif"),lt.location&&"http"==lt.location.protocol||xn(n,"https"),Pn(n)),function(t,e){const n=new $e;if(lt.Image){const s=new Image;s.onload=Et(hs,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Et(hs,n,s,"TestLoadImage: error",!1,e),s.onabort=Et(hs,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Et(hs,n,s,"TestLoadImage: timeout",!1,e),lt.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else Ze(2);t.G=0,t.l&&t.l.va(e),zs(t),Os(t)}function zs(t){if(t.G=0,t.la=[],t.l){const e=rs(t.h);0==e.length&&0==t.i.length||(At(t.la,e),At(t.la,t.i),t.h.i.length=0,St(t.i),t.i.length=0),t.l.ua()}}function Ws(t,e,n){var s=n instanceof Ln?Rn(n):new Ln(n,void 0);if(""!=s.g)e&&(s.g=e+"."+s.g),On(s,s.m);else{var i=lt.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Ln(null,void 0);s&&xn(r,s),e&&(r.g=e),i&&On(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Vn(s,n,e),Vn(s,"VER",t.ma),Ps(t,s),s}function Qs(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new ys(new us({ib:!0})):new ys(t.ra)).L=t.H,e}function Ys(){}function Xs(){if(Ft&&!(10<=Number(Xt)))throw Error("Environmental error: no available transport.")}function Js(t,e){Ie.call(this),this.g=new Ls(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Xb)&&!Nt(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Nt(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new ei(this)}function Zs(t){un.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function ti(){ln.call(this),this.status=1}function ei(t){this.g=t}(at=ys.prototype).da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():cn.g(),this.C=this.u?on(this.u):on(cn),this.g.onreadystatechange=wt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void bs(this,t)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=lt.FormData&&t instanceof lt.FormData,!(0<=Ct(Es,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ss(this),0<this.B&&((this.K=function(t){return Ft&&Qt()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=wt(this.qa,this)):this.A=Fe(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){bs(this,t)}},at.qa=function(){void 0!==ut&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ce(this,"timeout"),this.abort(8))},at.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ce(this,"complete"),Ce(this,"abort"),Cs(this))},at.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Cs(this,!0)),ys.X.M.call(this)},at.Ha=function(){this.s||(this.F||this.v||this.l?Is(this):this.eb())},at.eb=function(){Is(this)},at.aa=function(){try{return 2<As(this)?this.g.status:-1}catch(t){return-1}},at.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},at.Ra=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),ms(e)}},at.Ea=function(){return this.m},at.Na=function(){return"string"==typeof this.j?this.j:String(this.j)},(at=Ls.prototype).ma=8,at.G=1,at.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new fn(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=re(r),ae(r,this.S)):r=this.S),null!==this.o||this.N||(i.H=r,r=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var s=this.i[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Fs(this,i,e),Vn(n=Rn(this.F),"RID",t),Vn(n,"CVER",22),this.D&&Vn(n,"X-HTTP-Session-Id",this.D),Ps(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(_s(r)))+"&"+e:this.o&&Ns(n,this.o,r)),ss(this.h,i),this.Xa&&Vn(n,"TYPE","init"),this.O?(Vn(n,"$req",e),Vn(n,"SID","null"),i.Z=!0,vn(i,n,null)):vn(i,n,e),this.G=2}}else 3==this.G&&(t?Vs(this,t):0==this.i.length||ts(this.h)||Vs(this))},at.Ia=function(){if(this.u=null,js(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=en(wt(this.cb,this),t)}},at.cb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ze(10),xs(this),js(this))},at.bb=function(){null!=this.v&&(this.v=null,xs(this),Bs(this),Ze(19))},at.jb=function(t){t?(this.j.info("Successfully pinged google.com"),Ze(2)):(this.j.info("Failed to ping google.com"),Ze(1))},(at=Ys.prototype).xa=function(){},at.wa=function(){},at.va=function(){},at.ua=function(){},at.Qa=function(){},Xs.prototype.g=function(t,e){return new Js(t,e)},bt(Js,Ie),Js.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ze(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Ws(t,null,t.V),Ms(t)},Js.prototype.close=function(){Rs(this.g)},Js.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=Ae(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.$a++,t)),3==e.G&&Ms(e)},Js.prototype.M=function(){this.g.l=null,delete this.j,Rs(this.g),delete this.g,Js.X.M.call(this)},bt(Zs,un),bt(ti,ln),bt(ei,Ys),ei.prototype.xa=function(){Ce(this.g,"a")},ei.prototype.wa=function(t){Ce(this.g,new Zs(t))},ei.prototype.va=function(t){Ce(this.g,new ti(t))},ei.prototype.ua=function(){Ce(this.g,"b")},Xs.prototype.createWebChannel=Xs.prototype.g,Js.prototype.send=Js.prototype.u,Js.prototype.open=Js.prototype.m,Js.prototype.close=Js.prototype.close,nn.NO_ERROR=0,nn.TIMEOUT=8,nn.HTTP_ERROR=6,sn.COMPLETE="complete",an.EventType=hn,hn.OPEN="a",hn.CLOSE="b",hn.ERROR="c",hn.MESSAGE="d",Ie.prototype.listen=Ie.prototype.N,ys.prototype.listenOnce=ys.prototype.O,ys.prototype.getLastError=ys.prototype.Na,ys.prototype.getLastErrorCode=ys.prototype.Ea,ys.prototype.getStatus=ys.prototype.aa,ys.prototype.getResponseJson=ys.prototype.Ra,ys.prototype.getResponseText=ys.prototype.fa,ys.prototype.send=ys.prototype.da;var ni,si,ii=ht.createWebChannelTransport=function(){return new Xs},ri=ht.getStatEventTarget=function(){return Qe()},oi=ht.ErrorCode=nn,ai=ht.EventType=sn,ci=ht.Event=ze,hi=ht.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},ui=ht.FetchXmlHttpFactory=us,li=ht.WebChannel=an,di=ht.XhrIo=ys,fi={};function gi(){throw new Error("setTimeout has not been defined")}function pi(){throw new Error("clearTimeout has not been defined")}function mi(t){if(ni===setTimeout)return setTimeout(t,0);if((ni===gi||!ni)&&setTimeout)return ni=setTimeout,setTimeout(t,0);try{return ni(t,0)}catch(e){try{return ni.call(null,t,0)}catch(e){return ni.call(this,t,0)}}}!function(){try{ni="function"==typeof setTimeout?setTimeout:gi}catch(t){ni=gi}try{si="function"==typeof clearTimeout?clearTimeout:pi}catch(t){si=pi}}();var yi,vi=[],wi=!1,Ei=-1;function bi(){wi&&yi&&(wi=!1,yi.length?vi=yi.concat(vi):Ei=-1,vi.length&&Ti())}function Ti(){if(!wi){var t=mi(bi);wi=!0;for(var e=vi.length;e;){for(yi=vi,vi=[];++Ei<e;)yi&&yi[Ei].run();Ei=-1,e=vi.length}yi=null,wi=!1,function(t){if(si===clearTimeout)return clearTimeout(t);if((si===pi||!si)&&clearTimeout)return si=clearTimeout,clearTimeout(t);try{si(t)}catch(e){try{return si.call(null,t)}catch(e){return si.call(this,t)}}}(t)}}function Ii(t,e){this.fun=t,this.array=e}function Ci(){}fi.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];vi.push(new Ii(t,e)),1!==vi.length||wi||mi(Ti)},Ii.prototype.run=function(){this.fun.apply(null,this.array)},fi.title="browser",fi.browser=!0,fi.env={},fi.argv=[],fi.version="",fi.versions={},fi.on=Ci,fi.addListener=Ci,fi.once=Ci,fi.off=Ci,fi.removeListener=Ci,fi.removeAllListeners=Ci,fi.emit=Ci,fi.prependListener=Ci,fi.prependOnceListener=Ci,fi.listeners=function(t){return[]},fi.binding=function(t){throw new Error("process.binding is not supported")},fi.cwd=function(){return"/"},fi.chdir=function(t){throw new Error("process.chdir is not supported")},fi.umask=function(){return 0};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Si{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Si.UNAUTHENTICATED=new Si(null),Si.GOOGLE_CREDENTIALS=new Si("google-credentials-uid"),Si.FIRST_PARTY=new Si("first-party-uid"),Si.MOCK_USER=new Si("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ai="9.10.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=new T("@firebase/firestore");function _i(){return Di.logLevel}function Ni(t,...e){if(Di.logLevel<=m.DEBUG){const n=e.map(Ri);Di.debug(`Firestore (${Ai}): ${t}`,...n)}}function ki(t,...e){if(Di.logLevel<=m.ERROR){const n=e.map(Ri);Di.error(`Firestore (${Ai}): ${t}`,...n)}}function Li(t,...e){if(Di.logLevel<=m.WARN){const n=e.map(Ri);Di.warn(`Firestore (${Ai}): ${t}`,...n)}}function Ri(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(t="Unexpected state"){const e=`FIRESTORE (${Ai}) INTERNAL ASSERTION FAILED: `+t;throw ki(e),new Error(e)}function Oi(t,e){t||xi()}function Mi(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Pi extends o{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Bi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Si.UNAUTHENTICATED)))}shutdown(){}}class qi{constructor(t){this.t=t,this.currentUser=Si.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Fi;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Fi,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{Ni("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Ni("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Fi)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ni("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Oi("string"==typeof e.accessToken),new Ui(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Oi(null===t||"string"==typeof t),new Si(t)}}class ji{constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s,this.type="FirstParty",this.user=Si.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Oi(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Ki{constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s}getToken(){return Promise.resolve(new ji(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(Si.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Hi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $i{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&Ni("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,Ni("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{Ni("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?s(t):Ni("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Oi("string"==typeof t.token),this.A=t.token,new Hi(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gi(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=Gi(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function Wi(t,e){return t<e?-1:t>e?1:0}function Qi(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yi{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Pi(Vi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Pi(Vi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Pi(Vi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Pi(Vi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Yi.fromMillis(Date.now())}static fromDate(t){return Yi.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Yi(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Wi(this.nanoseconds,t.nanoseconds):Wi(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Xi(t)}static min(){return new Xi(new Yi(0,0))}static max(){return new Xi(new Yi(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(t,e,n){void 0===e?e=0:e>t.length&&xi(),void 0===n?n=t.length-e:n>t.length-e&&xi(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Ji.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ji?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Zi extends Ji{construct(t,e,n){return new Zi(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Pi(Vi.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Zi(e)}static emptyPath(){return new Zi([])}}const tr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class er extends Ji{construct(t,e,n){return new er(t,e,n)}static isValidIdentifier(t){return tr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),er.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new er(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new Pi(Vi.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new Pi(Vi.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Pi(Vi.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new Pi(Vi.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new er(e)}static emptyPath(){return new er([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t){this.path=t}static fromPath(t){return new nr(Zi.fromString(t))}static fromName(t){return new nr(Zi.fromString(t).popFirst(5))}static empty(){return new nr(Zi.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Zi.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Zi.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new nr(new Zi(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}sr.UNKNOWN_ID=-1;function ir(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Xi.fromTimestamp(1e9===s?new Yi(n+1,0):new Yi(n,s));return new or(i,nr.empty(),e)}function rr(t){return new or(t.readTime,t.key,-1)}class or{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new or(Xi.min(),nr.empty(),-1)}static max(){return new or(Xi.max(),nr.empty(),-1)}}function ar(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=nr.comparator(t.documentKey,e.documentKey),0!==n?n:Wi(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ur(t){if(t.code!==Vi.FAILED_PRECONDITION||t.message!==cr)throw t;Ni("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&xi(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new lr(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof lr?e:lr.resolve(e)}catch(t){return lr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):lr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):lr.reject(e)}static resolve(t){return new lr(((e,n)=>{e(t)}))}static reject(t){return new lr(((e,n)=>{n(t)}))}static waitFor(t){return new lr(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=lr.resolve(!1);for(const n of t)e=e.next((t=>t?lr.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new lr(((n,s)=>{const i=t.length,r=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{r[c]=t,++o,o===i&&n(r)}),(t=>s(t)))}}))}static doWhile(t,e){return new lr(((n,s)=>{const i=()=>{!0===t()?e().next((()=>{i()}),s):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function pr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fr.at=-1;class yr{constructor(t,e){this.comparator=t,this.root=e||wr.EMPTY}insert(t,e){return new yr(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,wr.BLACK,null,null))}remove(t){return new yr(this.comparator,this.root.remove(t,this.comparator).copy(null,null,wr.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new vr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new vr(this.root,t,this.comparator,!1)}getReverseIterator(){return new vr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new vr(this.root,t,this.comparator,!0)}}class vr{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class wr{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:wr.RED,this.left=null!=s?s:wr.EMPTY,this.right=null!=i?i:wr.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new wr(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return wr.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return wr.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,wr.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,wr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw xi();if(this.right.isRed())throw xi();const t=this.left.check();if(t!==this.right.check())throw xi();return t+(this.isRed()?0:1)}}wr.EMPTY=null,wr.RED=!0,wr.BLACK=!1,wr.EMPTY=new class{constructor(){this.size=0}get key(){throw xi()}get value(){throw xi()}get color(){throw xi()}get left(){throw xi()}get right(){throw xi()}copy(t,e,n,s,i){return this}insert(t,e,n){return new wr(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Er{constructor(t){this.comparator=t,this.data=new yr(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new br(this.data.getIterator())}getIteratorFrom(t){return new br(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Er))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Er(this.comparator);return e.data=t,e}}class br{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tr{constructor(t){this.fields=t,t.sort(er.comparator)}static empty(){return new Tr([])}unionWith(t){let e=new Er(er.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new Tr(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Qi(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ir{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Ir(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ir(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Wi(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ir.EMPTY_BYTE_STRING=new Ir("");const Cr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sr(t){if(Oi(!!t),"string"==typeof t){let e=0;const n=Cr.exec(t);if(Oi(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ar(t.seconds),nanos:Ar(t.nanos)}}function Ar(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Dr(t){return"string"==typeof t?Ir.fromBase64String(t):Ir.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Nr(t){const e=t.mapValue.fields.__previous_value__;return _r(e)?Nr(e):e}function kr(t){const e=Sr(t.mapValue.fields.__local_write_time__.timestampValue);return new Yi(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Rr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Rr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Rr&&t.projectId===this.projectId&&t.database===this.database}}function xr(t){return null==t}function Or(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_r(t)?4:Qr(t)?9007199254740991:10:xi()}function Pr(t,e){if(t===e)return!0;const n=Vr(t);if(n!==Vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return kr(t).isEqual(kr(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Sr(t.timestampValue),s=Sr(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Dr(t.bytesValue).isEqual(Dr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ar(t.geoPointValue.latitude)===Ar(e.geoPointValue.latitude)&&Ar(t.geoPointValue.longitude)===Ar(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ar(t.integerValue)===Ar(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ar(t.doubleValue),s=Ar(e.doubleValue);return n===s?Or(n)===Or(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return Qi(t.arrayValue.values||[],e.arrayValue.values||[],Pr);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(gr(n)!==gr(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!Pr(n[t],s[t])))return!1;return!0}(t,e);default:return xi()}}function Fr(t,e){return void 0!==(t.values||[]).find((t=>Pr(t,e)))}function Ur(t,e){if(t===e)return 0;const n=Vr(t),s=Vr(e);if(n!==s)return Wi(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Wi(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ar(t.integerValue||t.doubleValue),s=Ar(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return Br(t.timestampValue,e.timestampValue);case 4:return Br(kr(t),kr(e));case 5:return Wi(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Dr(t),s=Dr(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=Wi(n[t],s[t]);if(0!==e)return e}return Wi(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Wi(Ar(t.latitude),Ar(e.latitude));return 0!==n?n:Wi(Ar(t.longitude),Ar(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=Ur(n[t],s[t]);if(e)return e}return Wi(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Mr.mapValue&&e===Mr.mapValue)return 0;if(t===Mr.mapValue)return 1;if(e===Mr.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let t=0;t<s.length&&t<r.length;++t){const e=Wi(s[t],r[t]);if(0!==e)return e;const o=Ur(n[s[t]],i[r[t]]);if(0!==o)return o}return Wi(s.length,r.length)}(t.mapValue,e.mapValue);default:throw xi()}}function Br(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Wi(t,e);const n=Sr(t),s=Sr(e),i=Wi(n.seconds,s.seconds);return 0!==i?i:Wi(n.nanos,s.nanos)}function qr(t){return jr(t)}function jr(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Sr(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Dr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,nr.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=jr(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${jr(t.fields[i])}`;return n+"}"}(t.mapValue):xi()}function Kr(t){return!!t&&"integerValue"in t}function Hr(t){return!!t&&"arrayValue"in t}function $r(t){return!!t&&"nullValue"in t}function Gr(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zr(t){return!!t&&"mapValue"in t}function Wr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return pr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Wr(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Wr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Qr(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yr{constructor(t){this.value=t}static empty(){return new Yr({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!zr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Wr(e)}setAll(t){let e=er.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=Wr(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());zr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Pr(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];zr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){pr(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Yr(Wr(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xr{constructor(t,e,n,s,i,r){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.data=i,this.documentState=r}static newInvalidDocument(t){return new Xr(t,0,Xi.min(),Xi.min(),Yr.empty(),0)}static newFoundDocument(t,e,n){return new Xr(t,1,e,Xi.min(),n,0)}static newNoDocument(t,e){return new Xr(t,2,e,Xi.min(),Yr.empty(),0)}static newUnknownDocument(t,e){return new Xr(t,3,e,Xi.min(),Yr.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Yr.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Yr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Xi.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Xr&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Xr(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.ht=null}}function Zr(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Jr(t,e,n,s,i,r,o)}function to(t){const e=Mi(t);if(null===e.ht){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{var e;return(e=t).field.canonicalString()+e.op.toString()+qr(e.value)})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),xr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>qr(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>qr(t))).join(",")),e.ht=t}return e.ht}function eo(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!po(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!Pr(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!yo(t.startAt,e.startAt)&&yo(t.endAt,e.endAt)}function no(t){return nr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class so extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.lt(t,e,n):new io(t,e,n):"array-contains"===e?new co(t,n):"in"===e?new ho(t,n):"not-in"===e?new uo(t,n):"array-contains-any"===e?new lo(t,n):new so(t,e,n)}static lt(t,e,n){return"in"===e?new ro(t,n):new oo(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.ft(Ur(e,this.value)):null!==e&&Vr(this.value)===Vr(e)&&this.ft(Ur(e,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return xi()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class io extends so{constructor(t,e,n){super(t,e,n),this.key=nr.fromName(n.referenceValue)}matches(t){const e=nr.comparator(t.key,this.key);return this.ft(e)}}class ro extends so{constructor(t,e){super(t,"in",e),this.keys=ao("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class oo extends so{constructor(t,e){super(t,"not-in",e),this.keys=ao("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ao(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>nr.fromName(t.referenceValue)))}class co extends so{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Hr(e)&&Fr(e.arrayValue,this.value)}}class ho extends so{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Fr(this.value.arrayValue,e)}}class uo extends so{constructor(t,e){super(t,"not-in",e)}matches(t){if(Fr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Fr(this.value.arrayValue,e)}}class lo extends so{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Hr(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Fr(this.value.arrayValue,t)))}}class fo{constructor(t,e){this.position=t,this.inclusive=e}}class go{constructor(t,e="asc"){this.field=t,this.dir=e}}function po(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function mo(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?nr.comparator(nr.fromName(o.referenceValue),n.key):Ur(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function yo(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pr(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function wo(t,e,n,s,i,r,o,a){return new vo(t,e,n,s,i,r,o,a)}function Eo(t){return new vo(t)}function bo(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function To(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Io(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Co(t){return null!==t.collectionGroup}function So(t){const e=Mi(t);if(null===e._t){e._t=[];const t=Io(e),n=To(e);if(null!==t&&null===n)t.isKeyField()||e._t.push(new go(t)),e._t.push(new go(er.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e._t.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new go(er.keyField(),t))}}}return e._t}function Ao(t){const e=Mi(t);if(!e.wt)if("F"===e.limitType)e.wt=Zr(e.path,e.collectionGroup,So(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of So(e)){const e="desc"===n.dir?"asc":"desc";t.push(new go(n.field,e))}const n=e.endAt?new fo(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new fo(e.startAt.position,e.startAt.inclusive):null;e.wt=Zr(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.wt}function Do(t,e,n){return new vo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function _o(t,e){return eo(Ao(t),Ao(e))&&t.limitType===e.limitType}function No(t){return`${to(Ao(t))}|lt:${t.limitType}`}function ko(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{var e;return`${(e=t).field.canonicalString()} ${e.op} ${qr(e.value)}`})).join(", ")}]`),xr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>qr(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>qr(t))).join(",")),`Target(${e})`}(Ao(t))}; limitType=${t.limitType})`}function Lo(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):nr.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=mo(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,So(t),e))&&!(t.endAt&&!function(t,e,n){const s=mo(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,So(t),e))}(t,e)}function Ro(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xo(t){return(e,n)=>{let s=!1;for(const i of So(t)){const t=Oo(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function Oo(t,e,n){const s=t.field.isKeyField()?nr.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?Ur(s,i):xi()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return xi()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Or(e)?"-0":e}}function Vo(t){return{integerValue:""+t}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(){this._=void 0}}function Fo(t,e,n){return t instanceof qo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof jo?Ko(t,e):t instanceof Ho?$o(t,e):function(t,e){const n=Bo(t,e),s=zo(n)+zo(t.yt);return Kr(n)&&Kr(t.yt)?Vo(s):Mo(t.It,s)}(t,e)}function Uo(t,e,n){return t instanceof jo?Ko(t,e):t instanceof Ho?$o(t,e):n}function Bo(t,e){var n;return t instanceof Go?Kr(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null}class qo extends Po{}class jo extends Po{constructor(t){super(),this.elements=t}}function Ko(t,e){const n=Wo(e);for(const e of t.elements)n.some((t=>Pr(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Ho extends Po{constructor(t){super(),this.elements=t}}function $o(t,e){let n=Wo(e);for(const e of t.elements)n=n.filter((t=>!Pr(t,e)));return{arrayValue:{values:n}}}class Go extends Po{constructor(t,e){super(),this.It=t,this.yt=e}}function zo(t){return Ar(t.integerValue||t.doubleValue)}function Wo(t){return Hr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Qo}static exists(t){return new Qo(void 0,t)}static updateTime(t){return new Qo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Yo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Xo{}function Jo(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new aa(t.key,Qo.none()):new na(t.key,t.data,Qo.none());{const n=t.data,s=Yr.empty();let i=new Er(er.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),i=i.add(t)}return new sa(t.key,s,new Tr(i.toArray()),Qo.none())}}function Zo(t,e,n){t instanceof na?function(t,e,n){const s=t.value.clone(),i=ra(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof sa?function(t,e,n){if(!Yo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=ra(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(ia(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function ta(t,e,n,s){return t instanceof na?function(t,e,n,s){if(!Yo(t.precondition,e))return n;const i=t.value.clone(),r=oa(t.fieldTransforms,s,e);return i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,s):t instanceof sa?function(t,e,n,s){if(!Yo(t.precondition,e))return n;const i=oa(t.fieldTransforms,s,e),r=e.data;return r.setAll(ia(t)),r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return Yo(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function ea(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Qi(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof jo&&e instanceof jo||t instanceof Ho&&e instanceof Ho?Qi(t.elements,e.elements,Pr):t instanceof Go&&e instanceof Go?Pr(t.yt,e.yt):t instanceof qo&&e instanceof qo}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class na extends Xo{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class sa extends Xo{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ia(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function ra(t,e,n){const s=new Map;Oi(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Uo(o,a,n[i]))}return s}function oa(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,Fo(t,r,e))}return s}class aa extends Xo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ca{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ha,ua;function la(t){if(void 0===t)return ki("GRPC error has no .code"),Vi.UNKNOWN;switch(t){case ha.OK:return Vi.OK;case ha.CANCELLED:return Vi.CANCELLED;case ha.UNKNOWN:return Vi.UNKNOWN;case ha.DEADLINE_EXCEEDED:return Vi.DEADLINE_EXCEEDED;case ha.RESOURCE_EXHAUSTED:return Vi.RESOURCE_EXHAUSTED;case ha.INTERNAL:return Vi.INTERNAL;case ha.UNAVAILABLE:return Vi.UNAVAILABLE;case ha.UNAUTHENTICATED:return Vi.UNAUTHENTICATED;case ha.INVALID_ARGUMENT:return Vi.INVALID_ARGUMENT;case ha.NOT_FOUND:return Vi.NOT_FOUND;case ha.ALREADY_EXISTS:return Vi.ALREADY_EXISTS;case ha.PERMISSION_DENIED:return Vi.PERMISSION_DENIED;case ha.FAILED_PRECONDITION:return Vi.FAILED_PRECONDITION;case ha.ABORTED:return Vi.ABORTED;case ha.OUT_OF_RANGE:return Vi.OUT_OF_RANGE;case ha.UNIMPLEMENTED:return Vi.UNIMPLEMENTED;case ha.DATA_LOSS:return Vi.DATA_LOSS;default:return xi()}}(ua=ha||(ha={}))[ua.OK=0]="OK",ua[ua.CANCELLED=1]="CANCELLED",ua[ua.UNKNOWN=2]="UNKNOWN",ua[ua.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ua[ua.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ua[ua.NOT_FOUND=5]="NOT_FOUND",ua[ua.ALREADY_EXISTS=6]="ALREADY_EXISTS",ua[ua.PERMISSION_DENIED=7]="PERMISSION_DENIED",ua[ua.UNAUTHENTICATED=16]="UNAUTHENTICATED",ua[ua.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ua[ua.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ua[ua.ABORTED=10]="ABORTED",ua[ua.OUT_OF_RANGE=11]="OUT_OF_RANGE",ua[ua.UNIMPLEMENTED=12]="UNIMPLEMENTED",ua[ua.INTERNAL=13]="INTERNAL",ua[ua.UNAVAILABLE=14]="UNAVAILABLE",ua[ua.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class da{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){pr(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return mr(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=new yr(nr.comparator);function ga(){return fa}const pa=new yr(nr.comparator);function ma(...t){let e=pa;for(const n of t)e=e.insert(n.key,n);return e}function ya(t){let e=pa;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function va(){return Ea()}function wa(){return Ea()}function Ea(){return new da((t=>t.toString()),((t,e)=>t.isEqual(e)))}new yr(nr.comparator);const ba=new Er(nr.comparator);function Ta(...t){let e=ba;for(const n of t)e=e.add(n);return e}const Ia=new Er(Wi);function Ca(){return Ia}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Aa.createSynthesizedTargetChangeForCurrentChange(t,e)),new Sa(Xi.min(),n,Ca(),ga(),Ta())}}class Aa{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Aa(Ir.EMPTY_BYTE_STRING,e,Ta(),Ta(),Ta())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t,e,n,s){this.Tt=t,this.removedTargetIds=e,this.key=n,this.Et=s}}class _a{constructor(t,e){this.targetId=t,this.At=e}}class Na{constructor(t,e,n=Ir.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class ka{constructor(){this.Rt=0,this.bt=xa(),this.Pt=Ir.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=Ta(),e=Ta(),n=Ta();return this.bt.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:xi()}})),new Aa(this.Pt,this.vt,t,e,n)}Nt(){this.Vt=!1,this.bt=xa()}kt(t,e){this.Vt=!0,this.bt=this.bt.insert(t,e)}Mt(t){this.Vt=!0,this.bt=this.bt.remove(t)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class La{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=ga(),this.qt=Ra(),this.Kt=new Er(Wi)}Gt(t){for(const e of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(e,t.Et):this.jt(e,t.key,t.Et);for(const e of t.removedTargetIds)this.jt(e,t.key,t.Et)}Wt(t){this.forEachTarget(t,(e=>{const n=this.zt(e);switch(t.state){case 0:this.Ht(e)&&n.Ct(t.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(t.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(e);break;case 3:this.Ht(e)&&(n.$t(),n.Ct(t.resumeToken));break;case 4:this.Ht(e)&&(this.Jt(e),n.Ct(t.resumeToken));break;default:xi()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Lt.forEach(((t,n)=>{this.Ht(n)&&e(n)}))}Yt(t){const e=t.targetId,n=t.At.count,s=this.Xt(e);if(s){const t=s.target;if(no(t))if(0===n){const n=new nr(t.path);this.jt(e,n,Xr.newNoDocument(n,Xi.min()))}else Oi(1===n);else this.Zt(e)!==n&&(this.Jt(e),this.Kt=this.Kt.add(e))}}te(t){const e=new Map;this.Lt.forEach(((n,s)=>{const i=this.Xt(s);if(i){if(n.current&&no(i.target)){const e=new nr(i.target.path);null!==this.Ut.get(e)||this.ee(s,e)||this.jt(s,e,Xr.newNoDocument(e,t))}n.Dt&&(e.set(s,n.xt()),n.Nt())}}));let n=Ta();this.qt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.Xt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.Ut.forEach(((e,n)=>n.setReadTime(t)));const s=new Sa(t,e,this.Kt,this.Ut,n);return this.Ut=ga(),this.qt=Ra(),this.Kt=new Er(Wi),s}Qt(t,e){if(!this.Ht(t))return;const n=this.ee(t,e.key)?2:0;this.zt(t).kt(e.key,n),this.Ut=this.Ut.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ne(e.key).add(t))}jt(t,e,n){if(!this.Ht(t))return;const s=this.zt(t);this.ee(t,e)?s.kt(e,1):s.Mt(e),this.qt=this.qt.insert(e,this.ne(e).delete(t)),n&&(this.Ut=this.Ut.insert(e,n))}removeTarget(t){this.Lt.delete(t)}Zt(t){const e=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.zt(t).Ot()}zt(t){let e=this.Lt.get(t);return e||(e=new ka,this.Lt.set(t,e)),e}ne(t){let e=this.qt.get(t);return e||(e=new Er(Wi),this.qt=this.qt.insert(t,e)),e}Ht(t){const e=null!==this.Xt(t);return e||Ni("WatchChangeAggregator","Detected inactive target",t),e}Xt(t){const e=this.Lt.get(t);return e&&e.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new ka),this.Bt.getRemoteKeysForTarget(t).forEach((e=>{this.jt(t,e,null)}))}ee(t,e){return this.Bt.getRemoteKeysForTarget(t).has(e)}}function Ra(){return new yr(nr.comparator)}function xa(){return new yr(nr.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa={asc:"ASCENDING",desc:"DESCENDING"},Ma={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Va{constructor(t,e){this.databaseId=t,this.gt=e}}function Pa(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Fa(t,e){return t.gt?e.toBase64():e.toUint8Array()}function Ua(t){return Oi(!!t),Xi.fromTimestamp(function(t){const e=Sr(t);return new Yi(e.seconds,e.nanos)}(t))}function Ba(t,e){return function(t){return new Zi(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function qa(t){const e=Zi.fromString(t);return Oi(sc(e)),e}function ja(t,e){const n=qa(e);if(n.get(1)!==t.databaseId.projectId)throw new Pi(Vi.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Pi(Vi.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new nr(Ga(n))}function Ka(t,e){return Ba(t.databaseId,e)}function Ha(t){const e=qa(t);return 4===e.length?Zi.emptyPath():Ga(e)}function $a(t){return new Zi(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ga(t){return Oi(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function za(t,e){return{documents:[Ka(t,e.path)]}}function Wa(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=Ka(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ka(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Gr(t.value))return{unaryFilter:{field:Za(t.field),op:"IS_NAN"}};if($r(t.value))return{unaryFilter:{field:Za(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Gr(t.value))return{unaryFilter:{field:Za(t.field),op:"IS_NOT_NAN"}};if($r(t.value))return{unaryFilter:{field:Za(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Za(t.field),op:Ja(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Za(t.field),direction:Xa(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.gt||xr(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Qa(t){let e=Ha(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){Oi(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=Ya(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new go(tc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,xr(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new fo(n,e)}(n.startAt));let h=null;return n.endAt&&(h=function(t){const e=!t.before,n=t.values||[];return new fo(n,e)}(n.endAt)),wo(e,i,o,r,a,"F",c,h)}function Ya(t){return t?void 0!==t.unaryFilter?[nc(t)]:void 0!==t.fieldFilter?[ec(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Ya(t))).reduce(((t,e)=>t.concat(e))):xi():[]}function Xa(t){return Oa[t]}function Ja(t){return Ma[t]}function Za(t){return{fieldPath:t.canonicalString()}}function tc(t){return er.fromServerFormat(t.fieldPath)}function ec(t){return so.create(tc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return xi()}}(t.fieldFilter.op),t.fieldFilter.value)}function nc(t){switch(t.unaryFilter.op){case"IS_NAN":const e=tc(t.unaryFilter.field);return so.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=tc(t.unaryFilter.field);return so.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=tc(t.unaryFilter.field);return so.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=tc(t.unaryFilter.field);return so.create(i,"!=",{nullValue:"NULL_VALUE"});default:return xi()}}function sc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],rc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],oc=rc;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ac{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&Zo(s,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=ta(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=ta(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=wa();return this.mutations.forEach((s=>{const i=t.get(s.key),r=i.overlayedDocument;let o=this.applyToLocalView(r,i.mutatedFields);o=e.has(s.key)?null:o;const a=Jo(r,o);null!==a&&n.set(s.key,a),r.isValidDocument()||r.convertToNoDocument(Xi.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Ta())}isEqual(t){return this.batchId===t.batchId&&Qi(this.mutations,t.mutations,((t,e)=>ea(t,e)))&&Qi(this.baseMutations,t.baseMutations,((t,e)=>ea(t,e)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(t,e,n,s,i=Xi.min(),r=Xi.min(),o=Ir.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new hc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new hc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new hc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(t){this.re=t}}function lc(t){const e=Qa({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Do(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(){}ce(t,e){this.ae(t,e),e.he()}ae(t,e){if("nullValue"in t)this.le(e,5);else if("booleanValue"in t)this.le(e,10),e.fe(t.booleanValue?1:0);else if("integerValue"in t)this.le(e,15),e.fe(Ar(t.integerValue));else if("doubleValue"in t){const n=Ar(t.doubleValue);isNaN(n)?this.le(e,13):(this.le(e,15),Or(n)?e.fe(0):e.fe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.le(e,20),"string"==typeof n?e.de(n):(e.de(`${n.seconds||""}`),e.fe(n.nanos||0))}else if("stringValue"in t)this._e(t.stringValue,e),this.we(e);else if("bytesValue"in t)this.le(e,30),e.me(Dr(t.bytesValue)),this.we(e);else if("referenceValue"in t)this.ge(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.le(e,45),e.fe(n.latitude||0),e.fe(n.longitude||0)}else"mapValue"in t?Qr(t)?this.le(e,Number.MAX_SAFE_INTEGER):(this.ye(t.mapValue,e),this.we(e)):"arrayValue"in t?(this.pe(t.arrayValue,e),this.we(e)):xi()}_e(t,e){this.le(e,25),this.Ie(t,e)}Ie(t,e){e.de(t)}ye(t,e){const n=t.fields||{};this.le(e,55);for(const t of Object.keys(n))this._e(t,e),this.ae(n[t],e)}pe(t,e){const n=t.values||[];this.le(e,50);for(const t of n)this.ae(t,e)}ge(t,e){this.le(e,37),nr.fromName(t).path.forEach((t=>{this.le(e,60),this.Ie(t,e)}))}le(t,e){t.fe(e)}we(t){t.fe(2)}}dc.Te=new dc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fc{constructor(){this.Ye=new gc}addToCollectionParentIndex(t,e){return this.Ye.add(e),lr.resolve()}getCollectionParents(t,e){return lr.resolve(this.Ye.getEntries(e))}addFieldIndex(t,e){return lr.resolve()}deleteFieldIndex(t,e){return lr.resolve()}getDocumentsMatchingTarget(t,e){return lr.resolve(null)}getIndexType(t,e){return lr.resolve(0)}getFieldIndexes(t,e){return lr.resolve([])}getNextCollectionGroupToUpdate(t){return lr.resolve(null)}getMinOffset(t,e){return lr.resolve(or.min())}getMinOffsetFromCollectionGroup(t,e){return lr.resolve(or.min())}updateCollectionGroup(t,e,n){return lr.resolve()}updateIndexEntries(t,e){return lr.resolve()}}class gc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Er(Zi.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Er(Zi.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class pc{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new pc(t,pc.DEFAULT_COLLECTION_PERCENTILE,pc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pc.DEFAULT_COLLECTION_PERCENTILE=10,pc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pc.DEFAULT=new pc(41943040,pc.DEFAULT_COLLECTION_PERCENTILE,pc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pc.DISABLED=new pc(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mc{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new mc(0)}static vn(){return new mc(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yc{constructor(){this.changes=new da((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Xr.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?lr.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vc{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&ta(n.mutation,t,Tr.empty(),Yi.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Ta()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Ta()){const s=va();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=ma();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=va();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Ta())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let i=ga();const r=Ea(),o=Ea();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof sa)?i=i.insert(e.key,e):void 0!==o&&(r.set(e.key,o.mutation.getFieldMask()),ta(o.mutation,e,o.mutation.getFieldMask(),Yi.now()))})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new vc(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Ea();let s=new yr(((t,e)=>t-e)),i=Ta();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||Tr.empty();o=i.applyToLocalView(r,o),n.set(t,o);const a=(s.get(i.batchId)||Ta()).add(t);s=s.insert(i.batchId,a)}))})).next((()=>{const r=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,h=wa();c.forEach((t=>{if(!i.has(t)){const s=Jo(e.get(t),n.get(t));null!==s&&h.set(t,s),i=i.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,h))}return lr.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return nr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Co(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const r=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):lr.resolve(va());let o=-1,a=i;return r.next((e=>lr.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?lr.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Ta()))).next((t=>({batchId:o,changes:ya(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new nr(e)).next((t=>{let e=ma();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let i=ma();return this.indexManager.getCollectionParents(t,s).next((r=>lr.forEach(r,(r=>{const o=function(t,e){return new vo(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===s.get(n)&&(s=s.insert(n,Xr.newInvalidDocument(n)))}));let n=ma();return s.forEach(((s,i)=>{const r=t.get(s);void 0!==r&&ta(r.mutation,i,Tr.empty(),Yi.now()),Lo(e,i)&&(n=n.insert(s,i))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):lr.resolve(Xr.newInvalidDocument(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return lr.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:Ua(n.createTime)}),lr.resolve()}getNamedQuery(t,e){return lr.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:lc(t.bundledQuery),readTime:Ua(t.readTime)}}(e)),lr.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(){this.overlays=new yr(nr.comparator),this.es=new Map}getOverlay(t,e){return lr.resolve(this.overlays.get(e))}getOverlays(t,e){const n=va();return lr.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.ue(t,e,s)})),lr.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.es.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),lr.resolve()}getOverlaysForCollection(t,e,n){const s=va(),i=e.length+1,r=new nr(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return lr.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new yr(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=va(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=va(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=s)););return lr.resolve(o)}ue(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.es.get(s.largestBatchId).delete(n.key);this.es.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new cc(e,n));let i=this.es.get(e);void 0===i&&(i=Ta(),this.es.set(e,i)),this.es.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(){this.ns=new Er(Ic.ss),this.rs=new Er(Ic.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new Ic(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new Ic(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new nr(new Zi([])),n=new Ic(e,t),s=new Ic(e,t+1),i=[];return this.rs.forEachInRange([n,s],(t=>{this.cs(t),i.push(t.key)})),i}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new nr(new Zi([])),n=new Ic(e,t),s=new Ic(e,t+1);let i=Ta();return this.rs.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Ic(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Ic{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return nr.comparator(t.key,e.key)||Wi(t._s,e._s)}static os(t,e){return Wi(t._s,e._s)||nr.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new Er(Ic.ss)}checkEmpty(t){return lr.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new ac(i,e,n,s);this.mutationQueue.push(r);for(const e of s)this.gs=this.gs.add(new Ic(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return lr.resolve(r)}lookupMutationBatch(t,e){return lr.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.ps(n),i=s<0?0:s;return lr.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return lr.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return lr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ic(e,0),s=new Ic(e,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,s],(t=>{const e=this.ys(t._s);i.push(e)})),lr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Er(Wi);return e.forEach((t=>{const e=new Ic(t,0),s=new Ic(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,s],(t=>{n=n.add(t._s)}))})),lr.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;nr.isDocumentKey(i)||(i=i.child(""));const r=new Ic(new nr(i),0);let o=new Er(Wi);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t._s)),!0)}),r),lr.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Oi(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return lr.forEach(e.mutations,(s=>{const i=new Ic(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new Ic(e,0),s=this.gs.firstAfterOrEqual(n);return lr.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,lr.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(t){this.Es=t,this.docs=new yr(nr.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return lr.resolve(n?n.document.mutableCopy():Xr.newInvalidDocument(e))}getEntries(t,e){let n=ga();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Xr.newInvalidDocument(t))})),lr.resolve(n)}getAllFromCollection(t,e,n){let s=ga();const i=new nr(e.child("")),r=this.docs.getIteratorFrom(i);for(;r.hasNext();){const{key:t,value:{document:i}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||ar(rr(i),n)<=0||(s=s.insert(i.key,i.mutableCopy()))}return lr.resolve(s)}getAllFromCollectionGroup(t,e,n,s){xi()}As(t,e){return lr.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Ac(this)}getSize(t){return lr.resolve(this.size)}}class Ac extends yc{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Yn.addEntry(t,s)):this.Yn.removeEntry(n)})),lr.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(t){this.persistence=t,this.Rs=new da((t=>to(t)),eo),this.lastRemoteSnapshotVersion=Xi.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Tc,this.targetCount=0,this.vs=mc.Pn()}forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),lr.resolve()}getLastRemoteSnapshotVersion(t){return lr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return lr.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),lr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),lr.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new mc(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,lr.resolve()}updateTargetData(t,e){return this.Dn(e),lr.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,lr.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Rs.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),lr.waitFor(i).next((()=>s))}getTargetCount(t){return lr.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return lr.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),lr.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),lr.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),lr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return lr.resolve(n)}containsKey(t,e){return lr.resolve(this.Ps.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new fr(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Dc(this),this.indexManager=new fc,this.remoteDocumentCache=function(t){return new Sc(t)}((t=>this.referenceDelegate.xs(t))),this.It=new uc(e),this.Ns=new Ec(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new bc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new Cc(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){Ni("MemoryPersistence","Starting transaction:",t);const s=new Nc(this.Ss.next());return this.referenceDelegate.ks(),n(s).next((t=>this.referenceDelegate.Ms(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Os(t,e){return lr.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}}class Nc extends hr{constructor(t){super(),this.currentSequenceNumber=t}}class kc{constructor(t){this.persistence=t,this.Fs=new Tc,this.$s=null}static Bs(t){return new kc(t)}get Ls(){if(this.$s)return this.$s;throw xi()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),lr.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),lr.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),lr.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Ms(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return lr.forEach(this.Ls,(n=>{const s=nr.fromPath(n);return this.Us(t,s).next((t=>{t||e.removeEntry(s,Xi.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.Us(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}Us(t,e){return lr.or([()=>lr.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Os(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lc{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=s}static Ci(t,e){let n=Ta(),s=Ta();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new Lc(t,e.fromCache,n,s)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,s){return this.ki(t,e).next((i=>i||this.Mi(t,e,s,n))).next((n=>n||this.Oi(t,e)))}ki(t,e){if(bo(e))return lr.resolve(null);let n=Ao(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=Do(e,null,"F"),n=Ao(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const i=Ta(...s);return this.Ni.getDocuments(t,i).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const r=this.Fi(e,s);return this.$i(e,r,i,n.readTime)?this.ki(t,Do(e,null,"F")):this.Bi(t,r,e,n)}))))})))))}Mi(t,e,n,s){return bo(e)||s.isEqual(Xi.min())?this.Oi(t,e):this.Ni.getDocuments(t,n).next((i=>{const r=this.Fi(e,i);return this.$i(e,r,n,s)?this.Oi(t,e):(_i()<=m.DEBUG&&Ni("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ko(e)),this.Bi(t,r,e,ir(s,-1)))}))}Fi(t,e){let n=new Er(xo(t));return e.forEach(((e,s)=>{Lo(t,s)&&(n=n.add(s))})),n}$i(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Oi(t,e){return _i()<=m.DEBUG&&Ni("QueryEngine","Using full collection scan to execute query:",ko(e)),this.Ni.getDocumentsMatchingQuery(t,e,or.min())}Bi(t,e,n,s){return this.Ni.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,e,n,s){this.persistence=t,this.Li=e,this.It=s,this.Ui=new yr(Wi),this.qi=new da((t=>to(t)),eo),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new wc(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ui)))}}function Oc(t,e,n,s){return new xc(t,e,n,s)}async function Mc(t,e){const n=Mi(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((i=>(s=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=Ta();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function Vc(t){const e=Mi(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function Pc(t,e,n){let s=Ta(),i=Ta();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=ga();return n.forEach(((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),r.isNoDocument()&&r.version.isEqual(Xi.min())?(e.removeEntry(n,r.readTime),s=s.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),s=s.insert(n,r)):Ni("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{Wi:s,zi:i}}))}function Fc(t,e){const n=Mi(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Cs.getTargetData(t,e).next((i=>i?(s=i,lr.resolve(s)):n.Cs.allocateTargetId(t).next((i=>(s=new hc(e,i,0,t.currentSequenceNumber),n.Cs.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.Ui.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(t.targetId,t),n.qi.set(e,t.targetId)),t}))}async function Uc(t,e,n){const s=Mi(t),i=s.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!dr(t))throw t;Ni("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.Ui=s.Ui.remove(e),s.qi.delete(i.target)}function Bc(t,e,n){const s=Mi(t);let i=Xi.min(),r=Ta();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=Mi(t),i=s.qi.get(n);return void 0!==i?lr.resolve(s.Ui.get(i)):s.Cs.getTargetData(e,n)}(s,t,Ao(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Li.getDocumentsMatchingQuery(t,e,n?i:Xi.min(),n?r:Ta()))).next((t=>(qc(s,Ro(e),t),{documents:t,Hi:r})))))}function qc(t,e,n){let s=Xi.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Ki.set(e,s)}class jc{constructor(){this.activeTargetIds=Ca()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Kc{constructor(){this.Lr=new jc,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,e,n){this.Ur[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new jc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{qr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Ni("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){Ni("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(t,e,n,s,i){const r=this.ao(t,e);Ni("RestConnection","Sending: ",r,n);const o={};return this.ho(o,s,i),this.lo(t,r,o,n).then((t=>(Ni("RestConnection","Received: ",t),t)),(e=>{throw Li("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}fo(t,e,n,s,i,r){return this.co(t,e,n,s,i)}ho(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ai,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ao(t,e){const n=Gc[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,e,n,s){return new Promise(((i,r)=>{const o=new di;o.listenOnce(ai.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case oi.NO_ERROR:const e=o.getResponseJson();Ni("Connection","XHR received:",JSON.stringify(e)),i(e);break;case oi.TIMEOUT:Ni("Connection",'RPC "'+t+'" timed out'),r(new Pi(Vi.DEADLINE_EXCEEDED,"Request time out"));break;case oi.HTTP_ERROR:const n=o.getStatus();if(Ni("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Vi).indexOf(e)>=0?e:Vi.UNKNOWN}(t.status);r(new Pi(e,t.message))}else r(new Pi(Vi.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new Pi(Vi.UNAVAILABLE,"Connection failed."));break;default:xi()}}finally{Ni("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}_o(t,e,n){const s=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=ii(),r=ri(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new ui({})),this.ho(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=s.join("");Ni("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let h=!1,u=!1;const l=new zc({Hr:t=>{u?Ni("Connection","Not sending because WebChannel is closed:",t):(h||(Ni("Connection","Opening WebChannel transport."),c.open(),h=!0),Ni("Connection","WebChannel sending:",t),c.send(t))},Jr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,li.EventType.OPEN,(()=>{u||Ni("Connection","WebChannel transport opened.")})),d(c,li.EventType.CLOSE,(()=>{u||(u=!0,Ni("Connection","WebChannel transport closed"),l.io())})),d(c,li.EventType.ERROR,(t=>{u||(u=!0,Li("Connection","WebChannel transport errored:",t),l.io(new Pi(Vi.UNAVAILABLE,"The operation could not be completed")))})),d(c,li.EventType.MESSAGE,(t=>{var e;if(!u){const n=t.data[0];Oi(!!n);const s=n,i=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(i){Ni("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=ha[t];if(void 0!==e)return la(e)}(t),n=i.message;void 0===e&&(e=Vi.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),u=!0,l.io(new Pi(e,n)),c.close()}else Ni("Connection","WebChannel received:",n),l.ro(n)}})),d(r,ci.STAT_EVENT,(t=>{t.stat===hi.PROXY?Ni("Connection","Detected buffering proxy"):t.stat===hi.NOPROXY&&Ni("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.so()}),0),l}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(t){return new Va(t,!0)}class Xc{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Hs=t,this.timerId=e,this.wo=n,this.mo=s,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const e=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),s=Math.max(0,e-n);s>0&&Ni("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,s,(()=>(this.To=Date.now(),t()))),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t,e,n,s,i,r,o,a){this.Hs=t,this.Po=n,this.vo=s,this.Vo=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Xc(t,e)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,(()=>this.$o())))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===Vi.RESOURCE_EXHAUSTED?(ki(e.toString()),ki("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):e&&e.code===Vi.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}qo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.So===e&&this.Go(t,n)}),(e=>{t((()=>{const t=new Pi(Vi.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)}))}))}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.Qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Mo(){this.state=5,this.xo.Ao((async()=>{this.state=0,this.start()}))}Qo(t){return Ni("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget((()=>this.So===t?e():(Ni("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Zc extends Jc{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.It=i}jo(t,e){return this.Vo._o("Listen",t,e)}onMessage(t){this.xo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:xi()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.gt?(Oi(void 0===e||"string"==typeof e),Ir.fromBase64String(e||"")):(Oi(void 0===e||e instanceof Uint8Array),Ir.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Vi.UNKNOWN:la(t.code);return new Pi(e,t.message||"")}(o);n=new Na(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=ja(t,s.document.name),r=Ua(s.document.updateTime),o=new Yr({mapValue:{fields:s.document.fields}}),a=Xr.newFoundDocument(i,r,o),c=s.targetIds||[],h=s.removedTargetIds||[];n=new Da(c,h,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=ja(t,s.document),r=s.readTime?Ua(s.readTime):Xi.min(),o=Xr.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Da([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=ja(t,s.document),r=s.removedTargetIds||[];n=new Da([],r,i,null)}else{if(!("filter"in e))return xi();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new ca(s),r=t.targetId;n=new _a(r,i)}}return n}(this.It,t),n=function(t){if(!("targetChange"in t))return Xi.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Xi.min():e.readTime?Ua(e.readTime):Xi.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=$a(this.It),e.addTarget=function(t,e){let n;const s=e.target;return n=no(s)?{documents:za(t,s)}:{query:Wa(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Fa(t,e.resumeToken):e.snapshotVersion.compareTo(Xi.min())>0&&(n.readTime=Pa(t,e.snapshotVersion.toTimestamp())),n}(this.It,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return xi()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.It,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=$a(this.It),e.removeTarget=t,this.Bo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class th extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.Vo=n,this.It=s,this.nu=!1}su(){if(this.nu)throw new Pi(Vi.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.Vo.co(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Vi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Pi(Vi.UNKNOWN,t.toString())}))}fo(t,e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.Vo.fo(t,e,n,i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Vi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Pi(Vi.UNKNOWN,t.toString())}))}terminate(){this.nu=!0}}class eh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(ki(e),this.ou=!1):Ni("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.qr((t=>{n.enqueueAndForget((async()=>{lh(this)&&(Ni("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Mi(t);e._u.add(4),await ih(e),e.gu.set("Unknown"),e._u.delete(4),await sh(e)}(this))}))})),this.gu=new eh(n,s)}}async function sh(t){if(lh(t))for(const e of t.wu)await e(!0)}async function ih(t){for(const e of t.wu)await e(!1)}function rh(t,e){const n=Mi(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),uh(n)?hh(n):wh(n).ko()&&ah(n,e))}function oh(t,e){const n=Mi(t),s=wh(n);n.du.delete(e),s.ko()&&ch(n,e),0===n.du.size&&(s.ko()?s.Fo():lh(n)&&n.gu.set("Unknown"))}function ah(t,e){t.yu.Ot(e.targetId),wh(t).zo(e)}function ch(t,e){t.yu.Ot(e),wh(t).Ho(e)}function hh(t){t.yu=new La({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),wh(t).start(),t.gu.uu()}function uh(t){return lh(t)&&!wh(t).No()&&t.du.size>0}function lh(t){return 0===Mi(t)._u.size}function dh(t){t.yu=void 0}async function fh(t){t.du.forEach(((e,n)=>{ah(t,e)}))}async function gh(t,e){dh(t),uh(t)?(t.gu.hu(e),hh(t)):t.gu.set("Unknown")}async function ph(t,e,n){if(t.gu.set("Online"),e instanceof Na&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.du.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.du.delete(s),t.yu.removeTarget(s))}(t,e)}catch(n){Ni("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await mh(t,n)}else if(e instanceof Da?t.yu.Gt(e):e instanceof _a?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(Xi.min()))try{const e=await Vc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.te(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.du.get(s);i&&t.du.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(Ir.EMPTY_BYTE_STRING,n.snapshotVersion)),ch(t,e);const s=new hc(n.target,e,1,n.sequenceNumber);ah(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Ni("RemoteStore","Failed to raise snapshot:",e),await mh(t,e)}}async function mh(t,e,n){if(!dr(e))throw e;t._u.add(1),await ih(t),t.gu.set("Offline"),n||(n=()=>Vc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Ni("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await sh(t)}))}async function yh(t,e){const n=Mi(t);n.asyncQueue.verifyOperationInProgress(),Ni("RemoteStore","RemoteStore received new credentials");const s=lh(n);n._u.add(3),await ih(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await sh(n)}async function vh(t,e){const n=Mi(t);e?(n._u.delete(2),await sh(n)):e||(n._u.add(2),await ih(n),n.gu.set("Unknown"))}function wh(t){return t.pu||(t.pu=function(t,e,n){const s=Mi(t);return s.su(),new Zc(e,s.Vo,s.authCredentials,s.appCheckCredentials,s.It,n)}(t.datastore,t.asyncQueue,{Yr:fh.bind(null,t),Zr:gh.bind(null,t),Wo:ph.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Oo(),uh(t)?hh(t):t.gu.set("Unknown")):(await t.pu.stop(),dh(t))}))),t.pu}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eh{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Fi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new Eh(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Pi(Vi.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bh(t,e){if(ki("AsyncQueue",`${e}: ${t}`),dr(t))return new Pi(Vi.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t){this.comparator=t?(e,n)=>t(e,n)||nr.comparator(e.key,n.key):(t,e)=>nr.comparator(t.key,e.key),this.keyedMap=ma(),this.sortedSet=new yr(this.comparator)}static emptySet(t){return new Th(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Th))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Th;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(){this.Tu=new yr(nr.comparator)}track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):xi():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Ch{constructor(t,e,n,s,i,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new Ch(t,e,Th.emptySet(e),i,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&_o(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(){this.Au=void 0,this.listeners=[]}}class Ah{constructor(){this.queries=new da((t=>No(t)),_o),this.onlineState="Unknown",this.Ru=new Set}}async function Dh(t,e){const n=Mi(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Sh),i)try{r.Au=await n.onListen(s)}catch(t){const n=bh(t,`Initialization of query '${ko(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&Lh(n)}async function _h(t,e){const n=Mi(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Nh(t,e){const n=Mi(t);let s=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.Pu(t)&&(s=!0);i.Au=t}}s&&Lh(n)}function kh(t,e,n){const s=Mi(t),i=s.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);s.queries.delete(e)}function Lh(t){t.Ru.forEach((t=>{t.next()}))}class Rh{constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Ch(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.Nu&&n||t.docs.isEmpty()&&"Offline"!==e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=Ch.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Vu=!0,this.vu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xh{constructor(t){this.key=t}}class Oh{constructor(t){this.key=t}}class Mh{constructor(t,e){this.query=t,this.Lu=e,this.Uu=null,this.current=!1,this.qu=Ta(),this.mutatedKeys=Ta(),this.Ku=xo(t),this.Gu=new Th(this.Ku)}get Qu(){return this.Lu}ju(t,e){const n=e?e.Wu:new Ih,s=e?e.Gu:this.Gu;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const h=s.get(t),u=Lo(this.query,e)?e:null,l=!!h&&this.mutatedKeys.has(h.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;h&&u?h.data.isEqual(u.data)?l!==d&&(n.track({type:3,doc:u}),f=!0):this.zu(h,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Ku(u,a)>0||c&&this.Ku(u,c)<0)&&(o=!0)):!h&&u?(n.track({type:0,doc:u}),f=!0):h&&!u&&(n.track({type:1,doc:h}),f=!0,(a||c)&&(o=!0)),f&&(u?(r=r.add(u),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Gu:r,Wu:n,$i:o,mutatedKeys:i}}zu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const i=t.Wu.Eu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return xi()}};return n(t)-n(e)}(t.type,e.type)||this.Ku(t.doc,e.doc))),this.Hu(n);const r=e?this.Ju():[],o=0===this.qu.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==i.length||a?{snapshot:new Ch(this.query,t.Gu,s,i,t.mutatedKeys,0===o,a,!1),Yu:r}:{Yu:r}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new Ih,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach((t=>this.Lu=this.Lu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Lu=this.Lu.delete(t))),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.qu;this.qu=Ta(),this.Gu.forEach((t=>{this.Xu(t.key)&&(this.qu=this.qu.add(t.key))}));const e=[];return t.forEach((t=>{this.qu.has(t)||e.push(new Oh(t))})),this.qu.forEach((n=>{t.has(n)||e.push(new xh(n))})),e}Zu(t){this.Lu=t.Hi,this.qu=Ta();const e=this.ju(t.documents);return this.applyChanges(e,!0)}tc(){return Ch.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.Uu)}}class Vh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Ph{constructor(t){this.key=t,this.ec=!1}}class Fh{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.nc={},this.sc=new da((t=>No(t)),_o),this.ic=new Map,this.rc=new Set,this.oc=new yr(nr.comparator),this.uc=new Map,this.cc=new Tc,this.ac={},this.hc=new Map,this.lc=mc.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function Uh(t,e){const n=Zh(t);let s,i;const r=n.sc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const t=await Fc(n.localStore,Ao(e));n.isPrimaryClient&&rh(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await Bh(n,e,s,"current"===r)}return i}async function Bh(t,e,n,s){t.dc=(e,n,s)=>async function(t,e,n,s){let i=e.view.ju(n);i.$i&&(i=await Bc(t.localStore,e.query,!1).then((({documents:t})=>e.view.ju(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return zh(t,e.targetId,o.Yu),o.snapshot}(t,e,n,s);const i=await Bc(t.localStore,e,!0),r=new Mh(e,i.Hi),o=r.ju(i.documents),a=Aa.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState),c=r.applyChanges(o,t.isPrimaryClient,a);zh(t,n,c.Yu);const h=new Vh(e,n,r);return t.sc.set(e,h),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function qh(t,e){const n=Mi(t),s=n.sc.get(e),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter((t=>!_o(t,e)))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Uc(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),oh(n.remoteStore,s.targetId),$h(n,s.targetId)})).catch(ur)):($h(n,s.targetId),await Uc(n.localStore,s.targetId,!0))}async function jh(t,e){const n=Mi(t);try{const t=await function(t,e){const n=Mi(t),s=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const o=[];e.targetChanges.forEach(((r,a)=>{const c=i.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,r.addedDocuments,a))));let h=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?h=h.withResumeToken(Ir.EMPTY_BYTE_STRING,Xi.min()).withLastLimboFreeSnapshotVersion(Xi.min()):r.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(r.resumeToken,s)),i=i.insert(a,h),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,h,r)&&o.push(n.Cs.updateTargetData(t,h))}));let a=ga(),c=Ta();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(Pc(t,r,e.documentUpdates).next((t=>{a=t.Wi,c=t.zi}))),!s.isEqual(Xi.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return lr.waitFor(o).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ui=i,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.uc.get(e);s&&(Oi(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.ec=!0:t.modifiedDocuments.size>0?Oi(s.ec):t.removedDocuments.size>0&&(Oi(s.ec),s.ec=!1))})),await Yh(n,t,e)}catch(t){await ur(t)}}function Kh(t,e,n){const s=Mi(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.sc.forEach(((n,s)=>{const i=s.view.bu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Mi(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.bu(e)&&(s=!0)})),s&&Lh(n)}(s.eventManager,e),t.length&&s.nc.Wo(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Hh(t,e,n){const s=Mi(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.uc.get(e),r=i&&i.key;if(r){let t=new yr(nr.comparator);t=t.insert(r,Xr.newNoDocument(r,Xi.min()));const n=Ta().add(r),i=new Sa(Xi.min(),new Map,new Er(Wi),t,n);await jh(s,i),s.oc=s.oc.remove(r),s.uc.delete(e),Qh(s)}else await Uc(s.localStore,e,!1).then((()=>$h(s,e,n))).catch(ur)}function $h(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc._c(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach((e=>{t.cc.containsKey(e)||Gh(t,e)}))}function Gh(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);null!==n&&(oh(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Qh(t))}function zh(t,e,n){for(const s of n)s instanceof xh?(t.cc.addReference(s.key,e),Wh(t,s)):s instanceof Oh?(Ni("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||Gh(t,s.key)):xi()}function Wh(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(Ni("SyncEngine","New document in limbo: "+n),t.rc.add(s),Qh(t))}function Qh(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new nr(Zi.fromString(e)),s=t.lc.next();t.uc.set(s,new Ph(n)),t.oc=t.oc.insert(n,s),rh(t.remoteStore,new hc(Ao(Eo(n.path)),s,2,fr.at))}}async function Yh(t,e,n){const s=Mi(t),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach(((t,a)=>{o.push(s.dc(a,e,n).then((t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Lc.Ci(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.nc.Wo(i),await async function(t,e){const n=Mi(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>lr.forEach(e,(e=>lr.forEach(e.Si,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>lr.forEach(e.Di,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!dr(t))throw t;Ni("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Ui.get(e),s=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(s);n.Ui=n.Ui.insert(e,i)}}}(s.localStore,r))}async function Xh(t,e){const n=Mi(t);if(!n.currentUser.isEqual(e)){Ni("SyncEngine","User change. New user:",e.toKey());const t=await Mc(n.localStore,e);n.currentUser=e,function(t,e){t.hc.forEach((t=>{t.forEach((t=>{t.reject(new Pi(Vi.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.hc.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Yh(n,t.ji)}}function Jh(t,e){const n=Mi(t),s=n.uc.get(e);if(s&&s.ec)return Ta().add(s.key);{let t=Ta();const s=n.ic.get(e);if(!s)return t;for(const e of s){const s=n.sc.get(e);t=t.unionWith(s.view.Qu)}return t}}function Zh(t){const e=Mi(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jh.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Hh.bind(null,e),e.nc.Wo=Nh.bind(null,e.eventManager),e.nc._c=kh.bind(null,e.eventManager),e}class tu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=Yc(t.databaseInfo.databaseId),this.sharedClientState=this.mc(t),this.persistence=this.gc(t),await this.persistence.start(),this.localStore=this.yc(t),this.gcScheduler=this.Ic(t,this.localStore),this.indexBackfillerScheduler=this.Tc(t,this.localStore)}Ic(t,e){return null}Tc(t,e){return null}yc(t){return Oc(this.persistence,new Rc,t.initialUser,this.It)}gc(t){return new _c(kc.Bs,this.It)}mc(t){return new Kc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class eu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Kh(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xh.bind(null,this.syncEngine),await vh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Ah}createDatastore(t){const e=Yc(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new Wc(s));var s;return function(t,e,n,s){return new th(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){var e,n,s,i,r;return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>Kh(this.syncEngine,t,0),r=$c.C()?new $c:new Hc,new nh(e,n,s,i,r)}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new Fh(t,e,n,s,i,r);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Mi(t);Ni("RemoteStore","RemoteStore shutting down."),e._u.add(5),await ih(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nu{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ac(this.observer.next,t)}error(t){this.observer.error?this.Ac(this.observer.error,t):ki("Uncaught Error in snapshot listener:",t)}Rc(){this.muted=!0}Ac(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class su{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Si.UNAUTHENTICATED,this.clientId=zi.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Ni("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Ni("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Pi(Vi.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Fi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=bh(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function iu(t,e){t.asyncQueue.verifyOperationInProgress(),Ni("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await Mc(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function ru(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ou(t);Ni("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>yh(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>yh(e.remoteStore,n))),t.onlineComponents=e}async function ou(t){return t.offlineComponents||(Ni("FirestoreClient","Using default OfflineComponentProvider"),await iu(t,new tu)),t.offlineComponents}async function au(t){return t.onlineComponents||(Ni("FirestoreClient","Using default OnlineComponentProvider"),await ru(t,new eu)),t.onlineComponents}async function cu(t){const e=await au(t),n=e.eventManager;return n.onListen=Uh.bind(null,e.syncEngine),n.onUnlisten=qh.bind(null,e.syncEngine),n}function hu(t,e,n={}){const s=new Fi;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new nu({next:n=>{e.enqueueAndForget((()=>_h(t,o))),n.fromCache&&"server"===s.source?i.reject(new Pi(Vi.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Rh(n,r,{includeMetadataChanges:!0,Nu:!0});return Dh(t,o)}(await cu(t),t.asyncQueue,e,n,s))),s.promise}const uu=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(t,e,n){if(!n)throw new Pi(Vi.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function du(t){if(nr.isDocumentKey(t))throw new Pi(Vi.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fu(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":xi()}function gu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Pi(Vi.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fu(t);throw new Pi(Vi.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pu{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Pi(Vi.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Pi(Vi.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,s){if(!0===e&&!0===s)throw new Pi(Vi.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Pi(Vi.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Pi(Vi.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pu(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Bi;switch(t.type){case"gapi":const e=t.client;return new Ki(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Pi(Vi.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=uu.get(t);e&&(Ni("ComponentProvider","Removing Datastore"),uu.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yu{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wu(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new yu(this.firestore,t,this._key)}}class vu{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new vu(this.firestore,t,this._query)}}class wu extends vu{constructor(t,e,n){super(t,e,Eo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new yu(this.firestore,null,new nr(t))}withConverter(t){return new wu(this.firestore,t,this._path)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eu{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new Xc(this,"async_queue_retry"),this.jc=()=>{const t=Qc();t&&Ni("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.bo()};const t=Qc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Wc(),this.zc(t)}enterRestrictedMode(t){if(!this.Lc){this.Lc=!0,this.Gc=t||!1;const e=Qc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.jc)}}enqueue(t){if(this.Wc(),this.Lc)return new Promise((()=>{}));const e=new Fi;return this.zc((()=>this.Lc&&this.Gc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Bc.push(t),this.Hc())))}async Hc(){if(0!==this.Bc.length){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(t){if(!dr(t))throw t;Ni("AsyncQueue","Operation failed with retryable error: "+t)}this.Bc.length>0&&this.xo.Ao((()=>this.Hc()))}}zc(t){const e=this.$c.then((()=>(this.Kc=!0,t().catch((t=>{this.qc=t,this.Kc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t);throw ki("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Kc=!1,t))))));return this.$c=e,e}enqueueAfterDelay(t,e,n){this.Wc(),this.Qc.indexOf(t)>-1&&(e=0);const s=Eh.createAndSchedule(this,t,e,n,(t=>this.Jc(t)));return this.Uc.push(s),s}Wc(){this.qc&&xi()}verifyOperationInProgress(){}async Yc(){let t;do{t=this.$c,await t}while(t!==this.$c)}Xc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}Zc(t){return this.Yc().then((()=>{this.Uc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Yc()}))}ta(t){this.Qc.push(t)}Jc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}}class bu extends mu{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Eu,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Iu(this),this._firestoreClient.terminate()}}function Tu(t){return t._firestoreClient||Iu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Iu(t){var e;const n=t._freezeSettings(),s=function(t,e,n,s){return new Lr(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new su(t._authCredentials,t._appCheckCredentials,t._queue,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cu{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Pi(Vi.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new er(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Su{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Su(Ir.fromBase64String(t))}catch(t){throw new Pi(Vi.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Su(Ir.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Au{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Pi(Vi.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Pi(Vi.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Wi(this._lat,t._lat)||Wi(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=new RegExp("[~\\*/\\[\\]]");function _u(t,e,n){if(e.search(Du)>=0)throw Nu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Cu(...e.split("."))._internalPath}catch(s){throw Nu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Nu(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new Pi(Vi.INVALID_ARGUMENT,a+t+c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ku{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new yu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Lu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ru("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Lu extends ku{data(){return super.data()}}function Ru(t,e){return"string"==typeof e?_u(t,e):e instanceof Cu?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ou extends ku{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Mu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ru("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Mu extends Ou{data(t={}){return super.data(t)}}class Vu{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new xu(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Mu(this._firestore,this._userDataWriter,n.key,n,new xu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Pi(Vi.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new Mu(t._firestore,t._userDataWriter,n.doc.key,n.doc,new xu(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new Mu(t._firestore,t._userDataWriter,e.doc.key,e.doc,new xu(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:Pu(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Pu(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return xi()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fu(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Pi(Vi.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uu{convertValue(t,e="none"){switch(Vr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ar(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Dr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw xi()}}convertObject(t,e){const n={};return pr(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new Au(Ar(t.latitude),Ar(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Nr(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(kr(t));default:return null}}convertTimestamp(t){const e=Sr(t);return new Yi(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Zi.fromString(t);Oi(sc(n));const s=new Rr(n.get(1),n.get(3)),i=new nr(n.popFirst(5));return s.isEqual(e)||ki(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu extends Uu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Su(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new yu(this.firestore,null,e)}}function qu(t){t=gu(t,vu);const e=gu(t.firestore,bu),n=Tu(e),s=new Bu(e);return Fu(t._query),hu(n,t._query).then((n=>new Vu(e,s,t,n)))}!function(t,e=!0){Ai="9.10.0",G(new d("firestore",((t,{instanceIdentifier:n,options:s})=>{const i=t.getProvider("app").getImmediate(),r=new bu(new qi(t.getProvider("auth-internal")),new $i(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Pi(Vi.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rr(t.options.projectId,e)}(i,n),i);return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r}),"PUBLIC").setMultipleInstances(!0)),X("@firebase/firestore","3.5.0",t),X("@firebase/firestore","3.5.0","esm2017")}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
X("firebase","9.10.0","app");const ju=function(t,e,...n){if(t=l(t),lu("collection","path",e),t instanceof mu){const s=Zi.fromString(e,...n);return du(s),new wu(t,null,s)}{if(!(t instanceof yu||t instanceof wu))throw new Pi(Vi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Zi.fromString(e,...n));return du(s),new wu(t.firestore,null,s)}}(function(t,e){const n="string"==typeof t?t:e||"(default)";return z("object"==typeof t?t:Y(),"firestore").getImmediate({identifier:n})}(function(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),s=n.name;if("string"!=typeof s||!s)throw W.create("bad-app-name",{appName:String(s)});const i=K.get(s);if(i){if(h(t,i.options)&&h(n,i.config))return i;throw W.create("duplicate-app",{appName:s})}const r=new g(s);for(const t of H.values())r.addComponent(t);const o=new Q(t,n,r);return K.set(s,o),o}({apiKey:"AIzaSyAFFFghylDTtJk0grEO-2UTxbgshHXuOII",authDomain:"mybook-80fda.firebaseapp.com",projectId:"mybook-80fda",storageBucket:"mybook-80fda.appspot.com",messagingSenderId:"252249825985",appId:"1:252249825985:web:e868aaa8480e2f47f92a40"})),"BookRoot"),Ku=t=>`<li class="cardInProgressBookItemActive"id ="${t.id}">\n  <img class="bookInProgresCardImg" src="${t.img}" alt="bookPic">\n  <div class="inProgressInfo">\n      <b><p class="cardBookInProgresName">${t.title}</p></b>\n      <p class="cardInProgresWriterTitle"><b>${t.writer}</b></p>\n      <p class="inProgresAbout">${t.about}</p>\n      <a class="bookSite" href="${t.video}"><button class="cardVideoBtn">Дізнатися більше</button></a>\n  </div>\n  </li>`,Hu=(t,e)=>`<li class="cardBookItem ${e?"Stock":"outOfStock"}" id ="${t.id}" >\n  <img class="bookCardImg" src=" ${t.img}" alt="bookPic">\n  <b><p class="cardBookName">${t.title}</p></b>\n  <p class="cardWriterTitle">${t.writer}</p>\n  <a class="bookSite" href="${t.video}"><button class="cardVideoBtn">Дізнатися більше</button></a>\n  </li>`;const $u=document.querySelector(".popList"),Gu=document.querySelector(".libraryBooksList"),zu=document.querySelector(".bookOfMonthUl");const Wu=document.querySelector(".toTop");window.addEventListener("scroll",(()=>{window.pageYOffset>100?Wu.classList.add("active"):Wu.classList.remove("active")})),async function(){const t=[];return(await qu(ju)).forEach((e=>{t.push({...e.data(),id:e.id})})),t}().then((t=>{!function(t){t.forEach((t=>{const e=t.BookInStock;t.popBook?$u.innerHTML+=Hu(t,e):Gu.innerHTML+=Hu(t,e),t.BookOfMonth&&(zu.innerHTML+=Ku(t)),console.log(Ku)}))}(t)}));