"use strict";(()=>{var $t=Object.create;var Pe=Object.defineProperty;var Kt=Object.getOwnPropertyDescriptor;var jt=Object.getOwnPropertyNames;var Zt=Object.getPrototypeOf,qt=Object.prototype.hasOwnProperty;var Jt=(t,e,r)=>e in t?Pe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var Qt=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var er=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of jt(e))!qt.call(t,o)&&o!==r&&Pe(t,o,{get:()=>e[o],enumerable:!(n=Kt(e,o))||n.enumerable});return t};var qe=(t,e,r)=>(r=t!=null?$t(Zt(t)):{},er(e||!t||!t.__esModule?Pe(r,"default",{value:t,enumerable:!0}):r,t));var Q=(t,e,r)=>(Jt(t,typeof e!="symbol"?e+"":e,r),r);var Ke=Qt((We,$e)=>{(function(t,e){typeof We=="object"&&typeof $e<"u"?$e.exports=e():typeof define=="function"&&define.amd?define(e):(t=t||self).RBush=e()})(We,function(){"use strict";function t(s,a,u,m,_){(function f(h,v,w,T,C){for(;T>w;){if(T-w>600){var A=T-w+1,M=v-w+1,q=Math.log(A),V=.5*Math.exp(2*q/3),z=.5*Math.sqrt(q*V*(A-V)/A)*(M-A/2<0?-1:1),Y=Math.max(w,Math.floor(v-M*V/A+z)),Wt=Math.min(T,Math.floor(v+(A-M)*V/A+z));f(h,v,Y,Wt,C)}var oe=h[v],J=w,I=T;for(e(h,w,v),C(h[T],oe)>0&&e(h,w,T);J<I;){for(e(h,J,I),J++,I--;C(h[J],oe)<0;)J++;for(;C(h[I],oe)>0;)I--}C(h[w],oe)===0?e(h,w,I):e(h,++I,T),I<=v&&(w=I+1),v<=I&&(T=I-1)}})(s,a,u||0,m||s.length-1,_||r)}function e(s,a,u){var m=s[a];s[a]=s[u],s[u]=m}function r(s,a){return s<a?-1:s>a?1:0}var n=function(s){s===void 0&&(s=9),this._maxEntries=Math.max(4,s),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),this.clear()};function o(s,a,u){if(!u)return a.indexOf(s);for(var m=0;m<a.length;m++)if(u(s,a[m]))return m;return-1}function i(s,a){l(s,0,s.children.length,a,s)}function l(s,a,u,m,_){_||(_=x(null)),_.minX=1/0,_.minY=1/0,_.maxX=-1/0,_.maxY=-1/0;for(var f=a;f<u;f++){var h=s.children[f];c(_,s.leaf?m(h):h)}return _}function c(s,a){return s.minX=Math.min(s.minX,a.minX),s.minY=Math.min(s.minY,a.minY),s.maxX=Math.max(s.maxX,a.maxX),s.maxY=Math.max(s.maxY,a.maxY),s}function p(s,a){return s.minX-a.minX}function y(s,a){return s.minY-a.minY}function d(s){return(s.maxX-s.minX)*(s.maxY-s.minY)}function R(s){return s.maxX-s.minX+(s.maxY-s.minY)}function P(s,a){return s.minX<=a.minX&&s.minY<=a.minY&&a.maxX<=s.maxX&&a.maxY<=s.maxY}function g(s,a){return a.minX<=s.maxX&&a.minY<=s.maxY&&a.maxX>=s.minX&&a.maxY>=s.minY}function x(s){return{children:s,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function N(s,a,u,m,_){for(var f=[a,u];f.length;)if(!((u=f.pop())-(a=f.pop())<=m)){var h=a+Math.ceil((u-a)/m/2)*m;t(s,h,a,u,_),f.push(a,h,h,u)}}return n.prototype.all=function(){return this._all(this.data,[])},n.prototype.search=function(s){var a=this.data,u=[];if(!g(s,a))return u;for(var m=this.toBBox,_=[];a;){for(var f=0;f<a.children.length;f++){var h=a.children[f],v=a.leaf?m(h):h;g(s,v)&&(a.leaf?u.push(h):P(s,v)?this._all(h,u):_.push(h))}a=_.pop()}return u},n.prototype.collides=function(s){var a=this.data;if(!g(s,a))return!1;for(var u=[];a;){for(var m=0;m<a.children.length;m++){var _=a.children[m],f=a.leaf?this.toBBox(_):_;if(g(s,f)){if(a.leaf||P(s,f))return!0;u.push(_)}}a=u.pop()}return!1},n.prototype.load=function(s){if(!s||!s.length)return this;if(s.length<this._minEntries){for(var a=0;a<s.length;a++)this.insert(s[a]);return this}var u=this._build(s.slice(),0,s.length-1,0);if(this.data.children.length)if(this.data.height===u.height)this._splitRoot(this.data,u);else{if(this.data.height<u.height){var m=this.data;this.data=u,u=m}this._insert(u,this.data.height-u.height-1,!0)}else this.data=u;return this},n.prototype.insert=function(s){return s&&this._insert(s,this.data.height-1),this},n.prototype.clear=function(){return this.data=x([]),this},n.prototype.remove=function(s,a){if(!s)return this;for(var u,m,_,f=this.data,h=this.toBBox(s),v=[],w=[];f||v.length;){if(f||(f=v.pop(),m=v[v.length-1],u=w.pop(),_=!0),f.leaf){var T=o(s,f.children,a);if(T!==-1)return f.children.splice(T,1),v.push(f),this._condense(v),this}_||f.leaf||!P(f,h)?m?(u++,f=m.children[u],_=!1):f=null:(v.push(f),w.push(u),u=0,m=f,f=f.children[0])}return this},n.prototype.toBBox=function(s){return s},n.prototype.compareMinX=function(s,a){return s.minX-a.minX},n.prototype.compareMinY=function(s,a){return s.minY-a.minY},n.prototype.toJSON=function(){return this.data},n.prototype.fromJSON=function(s){return this.data=s,this},n.prototype._all=function(s,a){for(var u=[];s;)s.leaf?a.push.apply(a,s.children):u.push.apply(u,s.children),s=u.pop();return a},n.prototype._build=function(s,a,u,m){var _,f=u-a+1,h=this._maxEntries;if(f<=h)return i(_=x(s.slice(a,u+1)),this.toBBox),_;m||(m=Math.ceil(Math.log(f)/Math.log(h)),h=Math.ceil(f/Math.pow(h,m-1))),(_=x([])).leaf=!1,_.height=m;var v=Math.ceil(f/h),w=v*Math.ceil(Math.sqrt(h));N(s,a,u,w,this.compareMinX);for(var T=a;T<=u;T+=w){var C=Math.min(T+w-1,u);N(s,T,C,v,this.compareMinY);for(var A=T;A<=C;A+=v){var M=Math.min(A+v-1,C);_.children.push(this._build(s,A,M,m-1))}}return i(_,this.toBBox),_},n.prototype._chooseSubtree=function(s,a,u,m){for(;m.push(a),!a.leaf&&m.length-1!==u;){for(var _=1/0,f=1/0,h=void 0,v=0;v<a.children.length;v++){var w=a.children[v],T=d(w),C=(A=s,M=w,(Math.max(M.maxX,A.maxX)-Math.min(M.minX,A.minX))*(Math.max(M.maxY,A.maxY)-Math.min(M.minY,A.minY))-T);C<f?(f=C,_=T<_?T:_,h=w):C===f&&T<_&&(_=T,h=w)}a=h||a.children[0]}var A,M;return a},n.prototype._insert=function(s,a,u){var m=u?s:this.toBBox(s),_=[],f=this._chooseSubtree(m,this.data,a,_);for(f.children.push(s),c(f,m);a>=0&&_[a].children.length>this._maxEntries;)this._split(_,a),a--;this._adjustParentBBoxes(m,_,a)},n.prototype._split=function(s,a){var u=s[a],m=u.children.length,_=this._minEntries;this._chooseSplitAxis(u,_,m);var f=this._chooseSplitIndex(u,_,m),h=x(u.children.splice(f,u.children.length-f));h.height=u.height,h.leaf=u.leaf,i(u,this.toBBox),i(h,this.toBBox),a?s[a-1].children.push(h):this._splitRoot(u,h)},n.prototype._splitRoot=function(s,a){this.data=x([s,a]),this.data.height=s.height+1,this.data.leaf=!1,i(this.data,this.toBBox)},n.prototype._chooseSplitIndex=function(s,a,u){for(var m,_,f,h,v,w,T,C=1/0,A=1/0,M=a;M<=u-a;M++){var q=l(s,0,M,this.toBBox),V=l(s,M,u,this.toBBox),z=(_=q,f=V,h=void 0,v=void 0,w=void 0,T=void 0,h=Math.max(_.minX,f.minX),v=Math.max(_.minY,f.minY),w=Math.min(_.maxX,f.maxX),T=Math.min(_.maxY,f.maxY),Math.max(0,w-h)*Math.max(0,T-v)),Y=d(q)+d(V);z<C?(C=z,m=M,A=Y<A?Y:A):z===C&&Y<A&&(A=Y,m=M)}return m||u-a},n.prototype._chooseSplitAxis=function(s,a,u){var m=s.leaf?this.compareMinX:p,_=s.leaf?this.compareMinY:y;this._allDistMargin(s,a,u,m)<this._allDistMargin(s,a,u,_)&&s.children.sort(m)},n.prototype._allDistMargin=function(s,a,u,m){s.children.sort(m);for(var _=this.toBBox,f=l(s,0,a,_),h=l(s,u-a,u,_),v=R(f)+R(h),w=a;w<u-a;w++){var T=s.children[w];c(f,s.leaf?_(T):T),v+=R(f)}for(var C=u-a-1;C>=a;C--){var A=s.children[C];c(h,s.leaf?_(A):A),v+=R(h)}return v},n.prototype._adjustParentBBoxes=function(s,a,u){for(var m=u;m>=0;m--)c(a[m],s)},n.prototype._condense=function(s){for(var a=s.length-1,u=void 0;a>=0;a--)s[a].children.length===0?a>0?(u=s[a-1].children).splice(u.indexOf(s[a]),1):this.clear():i(s[a],this.toBBox)},n})});var de,b,rt,tr,ee,Je,nt,se={},ot=[],rr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function F(t,e){for(var r in e)t[r]=e[r];return t}function it(t){var e=t.parentNode;e&&e.removeChild(t)}function E(t,e,r){var n,o,i,l={};for(i in e)i=="key"?n=e[i]:i=="ref"?o=e[i]:l[i]=e[i];if(arguments.length>2&&(l.children=arguments.length>3?de.call(arguments,2):r),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)l[i]===void 0&&(l[i]=t.defaultProps[i]);return ie(t,l,n,o,null)}function ie(t,e,r,n,o){var i={type:t,props:e,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++rt};return o==null&&b.vnode!=null&&b.vnode(i),i}function H(t){return t.children}function D(t,e){this.props=t,this.context=e}function X(t,e){if(e==null)return t.__?X(t.__,t.__.__k.indexOf(t)+1):null;for(var r;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null)return r.__e;return typeof t.type=="function"?X(t):null}function st(t){var e,r;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((r=t.__k[e])!=null&&r.__e!=null){t.__e=t.__c.base=r.__e;break}return st(t)}}function Ee(t){(!t.__d&&(t.__d=!0)&&ee.push(t)&&!ae.__r++||Je!==b.debounceRendering)&&((Je=b.debounceRendering)||setTimeout)(ae)}function ae(){for(var t;ae.__r=ee.length;)t=ee.sort(function(e,r){return e.__v.__b-r.__v.__b}),ee=[],t.some(function(e){var r,n,o,i,l,c;e.__d&&(l=(i=(r=e).__v).__e,(c=r.__P)&&(n=[],(o=F({},i)).__v=i.__v+1,we(c,i,o,r.__n,c.ownerSVGElement!==void 0,i.__h!=null?[l]:null,n,l??X(i),i.__h),ut(n,i),i.__e!=l&&st(i)))})}function at(t,e,r,n,o,i,l,c,p,y){var d,R,P,g,x,N,s,a=n&&n.__k||ot,u=a.length;for(r.__k=[],d=0;d<e.length;d++)if((g=r.__k[d]=(g=e[d])==null||typeof g=="boolean"?null:typeof g=="string"||typeof g=="number"||typeof g=="bigint"?ie(null,g,null,null,g):Array.isArray(g)?ie(H,{children:g},null,null,null):g.__b>0?ie(g.type,g.props,g.key,null,g.__v):g)!=null){if(g.__=r,g.__b=r.__b+1,(P=a[d])===null||P&&g.key==P.key&&g.type===P.type)a[d]=void 0;else for(R=0;R<u;R++){if((P=a[R])&&g.key==P.key&&g.type===P.type){a[R]=void 0;break}P=null}we(t,g,P=P||se,o,i,l,c,p,y),x=g.__e,(R=g.ref)&&P.ref!=R&&(s||(s=[]),P.ref&&s.push(P.ref,null,g),s.push(R,g.__c||x,g)),x!=null?(N==null&&(N=x),typeof g.type=="function"&&g.__k===P.__k?g.__d=p=lt(g,p,t):p=dt(t,g,P,a,x,p),typeof r.type=="function"&&(r.__d=p)):p&&P.__e==p&&p.parentNode!=t&&(p=X(P))}for(r.__e=N,d=u;d--;)a[d]!=null&&(typeof r.type=="function"&&a[d].__e!=null&&a[d].__e==r.__d&&(r.__d=X(n,d+1)),pt(a[d],a[d]));if(s)for(d=0;d<s.length;d++)ct(s[d],s[++d],s[++d])}function lt(t,e,r){for(var n,o=t.__k,i=0;o&&i<o.length;i++)(n=o[i])&&(n.__=t,e=typeof n.type=="function"?lt(n,e,r):dt(r,n,n,o,n.__e,e));return e}function dt(t,e,r,n,o,i){var l,c,p;if(e.__d!==void 0)l=e.__d,e.__d=void 0;else if(r==null||o!=i||o.parentNode==null)e:if(i==null||i.parentNode!==t)t.appendChild(o),l=null;else{for(c=i,p=0;(c=c.nextSibling)&&p<n.length;p+=2)if(c==o)break e;t.insertBefore(o,i),l=i}return l!==void 0?l:o.nextSibling}function nr(t,e,r,n,o){var i;for(i in r)i==="children"||i==="key"||i in e||le(t,i,null,r[i],n);for(i in e)o&&typeof e[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||r[i]===e[i]||le(t,i,e[i],r[i],n)}function Qe(t,e,r){e[0]==="-"?t.setProperty(e,r):t[e]=r==null?"":typeof r!="number"||rr.test(e)?r:r+"px"}function le(t,e,r,n,o){var i;e:if(e==="style")if(typeof r=="string")t.style.cssText=r;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)r&&e in r||Qe(t.style,e,"");if(r)for(e in r)n&&r[e]===n[e]||Qe(t.style,e,r[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=r,r?n||t.addEventListener(e,i?tt:et,i):t.removeEventListener(e,i?tt:et,i);else if(e!=="dangerouslySetInnerHTML"){if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=r??"";break e}catch{}typeof r=="function"||(r!=null&&(r!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,r):t.removeAttribute(e))}}function et(t){this.l[t.type+!1](b.event?b.event(t):t)}function tt(t){this.l[t.type+!0](b.event?b.event(t):t)}function we(t,e,r,n,o,i,l,c,p){var y,d,R,P,g,x,N,s,a,u,m,_,f,h=e.type;if(e.constructor!==void 0)return null;r.__h!=null&&(p=r.__h,c=e.__e=r.__e,e.__h=null,i=[c]),(y=b.__b)&&y(e);try{e:if(typeof h=="function"){if(s=e.props,a=(y=h.contextType)&&n[y.__c],u=y?a?a.props.value:y.__:n,r.__c?N=(d=e.__c=r.__c).__=d.__E:("prototype"in h&&h.prototype.render?e.__c=d=new h(s,u):(e.__c=d=new D(s,u),d.constructor=h,d.render=ir),a&&a.sub(d),d.props=s,d.state||(d.state={}),d.context=u,d.__n=n,R=d.__d=!0,d.__h=[]),d.__s==null&&(d.__s=d.state),h.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=F({},d.__s)),F(d.__s,h.getDerivedStateFromProps(s,d.__s))),P=d.props,g=d.state,R)h.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(h.getDerivedStateFromProps==null&&s!==P&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(s,u),!d.__e&&d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(s,d.__s,u)===!1||e.__v===r.__v){d.props=s,d.state=d.__s,e.__v!==r.__v&&(d.__d=!1),d.__v=e,e.__e=r.__e,e.__k=r.__k,e.__k.forEach(function(v){v&&(v.__=e)}),d.__h.length&&l.push(d);break e}d.componentWillUpdate!=null&&d.componentWillUpdate(s,d.__s,u),d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(P,g,x)})}if(d.context=u,d.props=s,d.__v=e,d.__P=t,m=b.__r,_=0,"prototype"in h&&h.prototype.render)d.state=d.__s,d.__d=!1,m&&m(e),y=d.render(d.props,d.state,d.context);else do d.__d=!1,m&&m(e),y=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++_<25);d.state=d.__s,d.getChildContext!=null&&(n=F(F({},n),d.getChildContext())),R||d.getSnapshotBeforeUpdate==null||(x=d.getSnapshotBeforeUpdate(P,g)),f=y!=null&&y.type===H&&y.key==null?y.props.children:y,at(t,Array.isArray(f)?f:[f],e,r,n,o,i,l,c,p),d.base=e.__e,e.__h=null,d.__h.length&&l.push(d),N&&(d.__E=d.__=null),d.__e=!1}else i==null&&e.__v===r.__v?(e.__k=r.__k,e.__e=r.__e):e.__e=or(r.__e,e,r,n,o,i,l,p);(y=b.diffed)&&y(e)}catch(v){e.__v=null,(p||i!=null)&&(e.__e=c,e.__h=!!p,i[i.indexOf(c)]=null),b.__e(v,e,r)}}function ut(t,e){b.__c&&b.__c(e,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(n){n.call(r)})}catch(n){b.__e(n,r.__v)}})}function or(t,e,r,n,o,i,l,c){var p,y,d,R=r.props,P=e.props,g=e.type,x=0;if(g==="svg"&&(o=!0),i!=null){for(;x<i.length;x++)if((p=i[x])&&"setAttribute"in p==!!g&&(g?p.localName===g:p.nodeType===3)){t=p,i[x]=null;break}}if(t==null){if(g===null)return document.createTextNode(P);t=o?document.createElementNS("http://www.w3.org/2000/svg",g):document.createElement(g,P.is&&P),i=null,c=!1}if(g===null)R===P||c&&t.data===P||(t.data=P);else{if(i=i&&de.call(t.childNodes),y=(R=r.props||se).dangerouslySetInnerHTML,d=P.dangerouslySetInnerHTML,!c){if(i!=null)for(R={},x=0;x<t.attributes.length;x++)R[t.attributes[x].name]=t.attributes[x].value;(d||y)&&(d&&(y&&d.__html==y.__html||d.__html===t.innerHTML)||(t.innerHTML=d&&d.__html||""))}if(nr(t,P,R,o,c),d)e.__k=[];else if(x=e.props.children,at(t,Array.isArray(x)?x:[x],e,r,n,o&&g!=="foreignObject",i,l,i?i[0]:r.__k&&X(r,0),c),i!=null)for(x=i.length;x--;)i[x]!=null&&it(i[x]);c||("value"in P&&(x=P.value)!==void 0&&(x!==t.value||g==="progress"&&!x||g==="option"&&x!==R.value)&&le(t,"value",x,R.value,!1),"checked"in P&&(x=P.checked)!==void 0&&x!==t.checked&&le(t,"checked",x,R.checked,!1))}return t}function ct(t,e,r){try{typeof t=="function"?t(e):t.current=e}catch(n){b.__e(n,r)}}function pt(t,e,r){var n,o;if(b.unmount&&b.unmount(t),(n=t.ref)&&(n.current&&n.current!==t.__e||ct(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(i){b.__e(i,e)}n.base=n.__P=null}if(n=t.__k)for(o=0;o<n.length;o++)n[o]&&pt(n[o],e,typeof t.type!="function");r||t.__e==null||it(t.__e),t.__e=t.__d=void 0}function ir(t,e,r){return this.constructor(t,r)}function ht(t,e,r){var n,o,i;b.__&&b.__(t,e),o=(n=typeof r=="function")?null:r&&r.__k||e.__k,i=[],we(e,t=(!n&&r||e).__k=E(H,null,[t]),o||se,se,e.ownerSVGElement!==void 0,!n&&r?[r]:o?null:e.firstChild?de.call(e.childNodes):null,i,!n&&r?r:o?o.__e:e.firstChild,n),ut(i,t)}function ft(t,e){var r={__c:e="__cC"+nt++,__:t,Consumer:function(n,o){return n.children(o)},Provider:function(n){var o,i;return this.getChildContext||(o=[],(i={})[e]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(l){this.props.value!==l.value&&o.some(Ee)},this.sub=function(l){o.push(l);var c=l.componentWillUnmount;l.componentWillUnmount=function(){o.splice(o.indexOf(l),1),c&&c.call(l)}}),n.children}};return r.Provider.__=r.Consumer.contextType=r}de=ot.slice,b={__e:function(t,e,r,n){for(var o,i,l;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(t)),l=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,n||{}),l=o.__d),l)return o.__E=o}catch(c){t=c}throw t}},rt=0,tr=function(t){return t!=null&&t.constructor===void 0},D.prototype.setState=function(t,e){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=F({},this.state),typeof t=="function"&&(t=t(F({},r),this.props)),t&&F(r,t),t!=null&&this.__v&&(e&&this.__h.push(e),Ee(this))},D.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Ee(this))},D.prototype.render=H,ee=[],ae.__r=0,nt=0;var S=class extends Error{code;isIntlError=!0;constructor(e,r){super(`${e} ${r}`),this.code=e}static is(e){return e?.isIntlError===!0}};Q(S,"FORMAT_UNAVAILABLE","FormatUnavailable"),Q(S,"INVALID_PARAMETER","InvalidParameter"),Q(S,"KEY_NOT_FOUND","KeyNotFound"),Q(S,"PARSE_ERROR","KeyNotFound");function xt(t,e,r){for(let n in t){if(n.startsWith("$"))continue;let o=t[n];switch(typeof o){case"string":e[r+n]=o;break;case"object":o!==null&&xt(o,e,`${r}${n}.`)}}return e}function sr(t){return xt(t,{},"")}function Te(t,e){let r={};for(let n in t)if(Object.prototype.hasOwnProperty.call(t,n)){let o=e(t[n],n);o!=null&&(r[n]=o)}return r}function Ce(t){return t[1]??"variable"}function Me(t,e){let r=t[0];return e!==void 0&&Object.prototype.hasOwnProperty.call(e,r)?""+e[r]:r}function ke(t,e){let{length:r}=e,n=Ce(t);if(t.length-2>r)throw new S(S.INVALID_PARAMETER,`too many parameters for format '${n}'`);for(let o=0;o<r;++o)e[o].call(null,t[2+o],n,o)}function ar(t,e,r){typeof t!="string"&&vt("an identifier",e,r)}function lr(t,e,r){dr(t)&&Array.isArray(ur(t))||vt("a map of messages",e,r)}function dr(t){return t!==null&&typeof t=="object"}function ur(t){for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function vt(t,e,r){throw new S(S.INVALID_PARAMETER,`expected parameter ${r+1} of format '${e}' to be ${t}`)}var cr={y(t,e){let r=t.getFullYear();return e===2&&(r%=100),L(r,e)},M(t,e,{monthsLong:r,monthsShort:n}){let o=t.getMonth();switch(e){case 1:case 2:return L(o+1,e);case 3:return te(n),n[o];case 4:return te(r),r[o];default:throw mt()}},d:(t,e)=>L(t.getDate(),e),E(t,e,{weekdaysLong:r,weekdaysShort:n}){let o=t.getDay();switch(e){case 1:case 2:case 3:return te(n),n[o];case 4:return te(r),r[o];default:throw mt()}},a:(t,e,{dayPeriod:r})=>(te(r),r[t.getHours()>=12?1:0]),h(t,e){let r=t.getHours()%12;return L(r===0?12:r,e)},H:(t,e)=>L(t.getHours(),e),m:(t,e)=>L(t.getMinutes(),e),s:(t,e)=>L(t.getSeconds(),e),X(t,e){let r=t.getTimezoneOffset();if(r===0)return"Z";let n=Math.floor(Math.abs(r)/60),o=Math.abs(r)%60;return(r<0?"-":"+")+L(n)+(o!==0||e>1?(e>2?":":"")+L(o):"")}};function te(t){if(t==null)throw new S(S.FORMAT_UNAVAILABLE,"Cannot use some DateTime formats; Required translations are missing.")}function mt(){return new S(S.FORMAT_UNAVAILABLE,"DateTime format not supported.")}function L(t,e=2){return(""+t).padStart(e,"0")}function pr(t,e,r){let n;switch(typeof e){case"number":case"string":n=new Date(e);break;case"object":if(e!==null&&e instanceof Date){n=e;break}default:throw new S(S.INVALID_PARAMETER,"invalid date")}let o,i="",l=0;for(;l<t.length;)o=t[l++],i+=typeof o=="function"?o(n,t[l++],r):o;return i}function hr(t){let e=[],{length:r}=t;if(r===0)return()=>"";let n=0,o=0,i=!1,l=t.charCodeAt(0),c=y=>{let d=e.length-1;d>=0&&typeof e[d]=="string"?e[d]+=y:e.push(y)},p=()=>{let y=t.slice(o,n);if(i)c(y||"'");else if(l>=65&&l<=90||l>=97&&l<=122){let d=cr[y[0]];d&&e.push(d,y.length)}else c(y);o=n};for(;n<r;){let y=t.charCodeAt(n);y===39?(p(),t.charCodeAt(n+1)===39?(c("'"),o+=2,++n):(i=!i,++o)):i||y===l||p(),l=y,++n}return p(),pr.bind(null,e)}var fr=[ar],yt=t=>{let e=Te(t.formats,hr);return r=>{ke(r,fr);let n=e[r[2]];if(!n)throw new S(S.INVALID_PARAMETER,`DateTime format '${r[2]}' is not configured.`);return o=>n(Me(r,o),t)}},mr=[lr],yr=()=>(t,e)=>{ke(t,mr);let r=t[2];if(!r.other)throw new S(S.INVALID_PARAMETER,`messages of format '${Ce(t)}' must contain the key 'other'`);let n={};for(let o in r)n[o]=e.interpret(r[o]);return o=>(n[Me(t,o)]??n.other)(o)},_r=[],gr=()=>t=>(ke(t,_r),e=>Me(t,e)),xr={select:yr,variable:gr,date:yt,time:yt},G=class extends S{input;at;constructor(e,r,n){super(S.PARSE_ERROR,e),this.input=r,this.at=n}toString(){let e=Math.max(this.input.lastIndexOf(`
`,this.at-1),0)+1,r=this.input.indexOf(`
`,this.at+1);r===-1?r=this.input.length:this.input[r-1]==="\r"&&--r;let n=`${this.input.slice(e,r)}
${" ".repeat(this.at-e)}^`;return`${this.message} at pos ${this.at}:

${n}

${this.stack}`}};function bt(t){return t===32||t>=9&&t<=13||t===133||t===160||t===6158||t>=8192&&t<=8205||t===8232||t===8233||t===8239||t===8287||t===8288||t===12288||t===65279}function B(t,e){let{length:r}=t,n=e;for(;n<r&&bt(t.charCodeAt(n));)++n;return n}function re(t,e){let{length:r}=t,n,o=e;for(;o<r&&(n=t[o],n!=="{"&&n!=="}"&&n!==","&&n!=="#"&&n!=="'"&&n!==":"&&!bt(n.charCodeAt(0)));)++o;if(e===o)throw new G(`expected an identifier but ${n?`saw '${n}'`:"saw the end of pattern"} instead`,t,e);return t.slice(e,o)}function _t(t,e,r){let{length:n}=t,o,i=e,l=e,c="";for(;l<n&&(o=t[l],!(o==="{"||o==="}"||r&&o==="#"));){if(o==="'"){if(o=t[++l],o==="'")c+=t.slice(i,l),i=l+1;else if(o==="{"||o==="}"||r&&o==="#"){for(c+=t.slice(i,l-1),i=l;++l<n;)if(o=t[l],o==="'"){if(o=t[l+1],o!=="'")break;c+=t.slice(i,++l),i=l+1}c+=t.slice(i,l),i=++l}}++l}return c+=t.slice(i,l),c}function Pt(t,e,r,n){let{length:o}=t,i={};r.push(i);let l,c=n,p=[],y=Re(t,e,p,!0);for(i[c]=p;y<o&&(y=B(t,y),l=t[y],l!==","&&l!=="}");){if(c=re(t,y),y=B(t,y+c.length),l=t[y],l!=="{")throw new G("expected '{'",t,y);p=[],y=Re(t,y+1,p,!0),i[c]=p}return y}function vr(t,e,r,n){let{length:o}=t,i={};r.push(i);let l,c=n,p=B(t,e),y=re(t,p);for(p+=y.length,i[c]=y;p<o&&(p=B(t,p),l=t[p],l!==","&&l!=="}");){if(c=re(t,p),p=B(t,p+c.length),l=t[p],l==="{")return Pt(t,p+1,r,c);if(l!==":")throw new G("expected ':' or '{'",t,p);p=B(t,p+1),y=re(t,p),p+=y.length,i[c]=y}return p}function br(t,e,r){let n=e,o=t[n];if(o==="#")return r.push("#"),n+1;if(o!=="{")throw new G("expected '#' or '{'",t,n);let{length:i}=t;do{n=B(t,n+1);let l=re(t,n);switch(n=B(t,n+l.length),o=t[n],o){case",":case"}":r.push(l);break;case"{":if(r.length<2)throw new G("expected an identifier but saw a message instead",t,n);n=Pt(t,n+1,r,l),o=t[n];break;case":":if(r.length<2)throw new G("expected an identifier but saw an attribute instead",t,n);n=vr(t,n+1,r,l),o=t[n];break;default:throw new G(`unexpected character '${o}'`,t,n)}}while(n<i&&o!=="}");return n+1}function Re(t,e,r,n){let o,i=e,l=_t(t,i,n);l&&(r.push(l),i+=l.length);let{length:c}=t;for(;i<c;){if(o=t[i],o==="}"){if(!n)throw new G("unexpected '}'",t,i);++i;break}let p=[];i=br(t,i,p),r.push(p),l=_t(t,i,n),l&&(r.push(l),i+=l.length)}return i}function gt(t){let e=[];return Re(t,0,e,!1),e}var Se=class{formatProvider;constructor(e){this.formatProvider=e}interpret(e,r){let{length:n}=e;if(n===1)return this.interpretElement(e[0],r);let o=new Array(n);for(let i=0;i<n;++i)o[i]=this.interpretElement(e[i],r);return Pr.bind(null,o)}interpretElement(e,r){if(typeof e=="string")return()=>e;let n=e;if(n.length===1&&n[0]==="#"){if(r===void 0)return()=>"#";n=[r]}return this.formatProvider.getFormat(n)(n,this)}};function Pr(t,e){let r="";for(let n=0;n<t.length;++n)r+=t[n](e);return r}var Ae=class{formatMap;constructor(e){this.formatMap=e}getFormat(e){let r=Ce(e),n=this.formatMap[r];if(!n)throw new S(S.FORMAT_UNAVAILABLE,r);return n}},W;(function(t){t[t.Eager=0]="Eager",t[t.Lazy=1]="Lazy",t[t.Off=2]="Off"})(W||(W={}));var $=class{cacheMode;expansions;interpreter;constructor({cacheMode:e,interpreter:r,translations:n}){this.cacheMode=e??W.Lazy,this.interpreter=r,this.expansions=sr(n),e===W.Eager&&(this.expansions=Te(this.expansions,o=>r.interpret(gt(o))))}expand(e,r){let n=this.expansions[e];if(n===void 0)throw new S(S.KEY_NOT_FOUND,e);return typeof n=="string"&&(n=this.interpreter.interpret(gt(n)),this.cacheMode!==W.Off&&(this.expansions[e]=n)),n(r)}static fromLocale(e,r=xr){let n=Te(r,(i,l)=>!e.$format?.[l]&&i.length>0?null:i(e.$format?.[l])),o=new Ae(n);return new $({cacheMode:W.Lazy,interpreter:new Se(o),translations:e})}};var Mt,k,Ie,Et,De=0,kt=[],ue=[],wt=b.__b,Tt=b.__r,Rt=b.diffed,St=b.__c,At=b.unmount;function Er(t,e){b.__h&&b.__h(k,t,De||e),De=0;var r=k.__H||(k.__H={__:[],__h:[]});return t>=r.__.length&&r.__.push({__V:ue}),r.__[t]}function Ne(t){return De=1,wr(It,t)}function wr(t,e,r){var n=Er(Mt++,2);return n.t=t,n.__c||(n.__=[r?r(e):It(void 0,e),function(o){var i=n.t(n.__[0],o);n.__[0]!==i&&(n.__=[i,n.__[1]],n.__c.setState({}))}],n.__c=k),n.__}function Tr(){for(var t;t=kt.shift();)if(t.__P)try{t.__H.__h.forEach(ce),t.__H.__h.forEach(Ge),t.__H.__h=[]}catch(e){t.__H.__h=[],b.__e(e,t.__v)}}b.__b=function(t){k=null,wt&&wt(t)},b.__r=function(t){Tt&&Tt(t),Mt=0;var e=(k=t.__c).__H;e&&(Ie===k?(e.__h=[],k.__h=[],e.__.forEach(function(r){r.__V=ue,r.u=void 0})):(e.__h.forEach(ce),e.__h.forEach(Ge),e.__h=[])),Ie=k},b.diffed=function(t){Rt&&Rt(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(kt.push(e)!==1&&Et===b.requestAnimationFrame||((Et=b.requestAnimationFrame)||function(r){var n,o=function(){clearTimeout(i),Ct&&cancelAnimationFrame(n),setTimeout(r)},i=setTimeout(o,100);Ct&&(n=requestAnimationFrame(o))})(Tr)),e.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.__V!==ue&&(r.__=r.__V),r.u=void 0,r.__V=ue})),Ie=k=null},b.__c=function(t,e){e.some(function(r){try{r.__h.forEach(ce),r.__h=r.__h.filter(function(n){return!n.__||Ge(n)})}catch(n){e.some(function(o){o.__h&&(o.__h=[])}),e=[],b.__e(n,r.__v)}}),St&&St(t,e)},b.unmount=function(t){At&&At(t);var e,r=t.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{ce(n)}catch(o){e=o}}),e&&b.__e(e,r.__v))};var Ct=typeof requestAnimationFrame=="function";function ce(t){var e=k,r=t.__c;typeof r=="function"&&(t.__c=void 0,r()),k=e}function Ge(t){var e=k;t.__c=t.__(),k=e}function It(t,e){return typeof e=="function"?e(t):e}function Dt(t){return"⚠️ "+t}var Le={isLoading:!0,t:()=>""},Rr={isLoading:!1,t:()=>Dt("LocaleFetchError")},Sr=ft(Le);var K=class extends D{state=Le;pendingFetch;componentDidMount(){this.fetchLocale()}componentDidUpdate(e){let r=this.props;e.url!==r.url&&this.fetchLocale()}componentWillUnmount(){this.pendingFetch?.abort()}render(){return E(Sr.Provider,{children:this.props.children,value:this.state})}async fetchLocale(){try{this.setState(Le),this.pendingFetch=new AbortController;let e=await fetch(this.props.url,{credentials:this.props.fetchCredentials,headers:this.props.fetchHeaders,method:"GET",signal:this.pendingFetch.signal});if(!e.ok)throw new Error(`unexpected HTTP response ${e.status} - ${e.statusText}`);let r=await e.json(),n=$.fromLocale(r,this.props.formats);this.setState({isLoading:!1,t:Ar.bind(null,n)})}catch(e){this.setState(Rr),this.props.onError?.(e)}finally{this.pendingFetch=void 0}}};function Ar(t,e,r,n){let o,i,l;if(typeof e=="string")o=e,typeof r=="string"?l=r:(i=r,l=n);else{if(function(c){return typeof c.text=="string"}(e))return e.text;o=e.key,i=e.vars,l=e.fallbackText}try{return t.expand(o,i)}catch(c){return l===void 0?Dt(S.is(c)?c.message:"UnknownError"):l}}function pe(){let{length:t}=arguments,e="";for(let r,n=0;n<t;++n)(r=arguments[n])&&(e+=(e&&" ")+r);return e}function Gt(t){let e="";for(let r in t)if(Object.prototype.hasOwnProperty.call(t,r)){let n=t[r];(n||n===0)&&(e+=`--${r}: ${t[r]};`)}return e}var Fe=({class:t,glyph:e,type:r="button",...n})=>E("button",{...n,class:pe("button","button--icon",t),type:r},e);var Be=({onChange:t,value:e})=>E("div",{class:"text-input"},E("input",{class:"text-input__input",type:"text",onChange:r=>t(r.target.value),value:e}));var he=[{key:"circle",points:[.85,0,.821,-.22,.736,-.425,.601,-.601,.425,-.736,.22,-.821,0,-.85,-.22,-.821,-.425,-.736,-.601,-.601,-.736,-.425,-.821,-.22,-.85,-0,-.821,.22,-.736,.425,-.601,.601,-.425,.736,-.22,.821,-0,.85,.22,.821,.425,.736,.601,.601,.736,.425,.821,.22]},{key:"square",points:[.85,-.85,-.85,-.85,-.85,.85,.85,.85]},{key:"diamond",points:[1,0,0,-1,-1,-0,-0,1]},{key:"triangle",points:[1,-.85,-1,-.85,-0,.85]},{key:"star",points:[.577,0,.866,-.5,.289,-.5,0,-1,-.289,-.5,-.866,-.5,-.577,-0,-.866,.5,-.289,.5,-0,1,.289,.5,.866,.5]}];var ni=new Array(25).fill(0).map((t,e)=>({value:e+1}));function j(t){return()=>E(H,null,t)}var kr=({onChange:t,value:e})=>E(Fe,{class:"array-field__add-button",glyph:"➕",onClick:()=>t(e?.concat(null)??[null])}),Nt=({depth:t=0,field:e,key:r,rows:n,title:o,value:i,onChange:l,pushRows:c})=>{n.push({kind:"custom",key:`${r}._begin`,depth:t,content:j("["),title:o}),i?.forEach((p,y)=>c({depth:t+1,field:e.items,key:`${r}.${y}`,rows:n,value:p,title:`[${y}]`,pushRows:c,onChange(d){let R=i.slice();R[y]=d,l(R)}})),n.push({kind:"editor",key:`${r}._add`,depth:t,editor:kr,value:i,onChange:l}),n.push({kind:"custom",key:`${r}._end`,depth:t,content:j("]")})};var Lt=({depth:t=0,field:e,key:r,rows:n,title:o,value:i,pushRows:l,onChange:c})=>{n.push({kind:"custom",key:`${r}._begin`,depth:t,content:j("{"),title:o}),e.props.forEach(p=>l({depth:t+1,field:p,key:`${r}.${p.key}`,rows:n,value:i?.[p.key],title:p.title??p.key,pushRows:l,onChange:y=>c({...i,[p.key]:y})})),n.push({kind:"custom",key:`${r}._end`,depth:t,content:j("}")})};function Ft(t){return({depth:e,key:r,rows:n,title:o,value:i,onChange:l})=>{n.push({kind:"editor",key:r,depth:e,editor:t,title:o,value:i,onChange:l})}}var Bt=({editors:t,field:e,value:r,onChange:n})=>{let o=l=>t[l.field.kind]?.(l),i={depth:0,field:e,key:"root",rows:[],value:r,pushRows:o,onChange:n};return o(i),E("div",{class:"field-editor"},i.rows.map(l=>E("div",{key:l.key,class:"field-editor__row",style:Gt({depth:l.depth})},l.title&&E("span",{class:"field-editor__row__title"},l.title),l.kind==="editor"&&E(l.editor,l),l.kind==="custom"&&E(l.content,null))))};var Ir={object:Lt,array:Nt,string:Ft(Be)},Ve={};Object.assign(Ve,{kind:"object",props:[{kind:"string",key:"aaa"},{kind:"array",key:"bbb",items:Ve}]});var Ot=()=>{let[t,e]=Ne(null);return console.log(t),E(K,{url:"./locale/en.json"},E(Bt,{editors:Ir,field:Ve,value:t,onChange:e}))};function U(){this.t=[]}function O(){this.i=new Set,this.u=[]}U.prototype.o=null,U.prototype.h=function(){return this.o||(this.o=this.t.slice()),this.o},U.prototype.l=function(t){this.t.push(t),this.o=null},U.prototype.g=function(){return this.t.length!==0&&(this.t=[],this.o=null,!0)},U.prototype.m=function(){return this.t.length},U.prototype.P=function(t){let{t:e}=this,r,n=e.length-1;for(;n>=0&&(r=e[n],r!==t&&r.p!==t);)--n;return n!==-1&&(this.t.splice(n,1),this.o=null,!0)},U.prototype.v=function(t){let e=this.t.lastIndexOf(t);e!==-1&&(this.t.splice(e,1),this.o=null)},O.prototype.o=null,O.prototype.h=function(){return this.o||(this.o=Array.from(this.i.values()).concat(this.u)),this.o},O.prototype.l=function(t){if(t.p){if(this.i.has(t.p))return;this.u.push(t)}else this.i.add(t),this.A(t);this.o=null},O.prototype.g=function(){return!!this.m()&&(this.i.clear(),this.u=[],this.o=null,!0)},O.prototype.m=function(){return this.i.size+this.u.length},O.prototype.P=function(t){return this.i.delete(t)?(this.o=null,!0):this.A(t)},O.prototype.v=function(t){let e=this.u.lastIndexOf(t);e!==-1&&(this.u.splice(e,1),this.o=null)},O.prototype.A=function(t){let e=this.u.length-1;for(;e>=0;){if(this.u[e].p===t)return this.u.splice(e,1),this.o=null,!0;--e}return!1};var xs=window.devicePixelRatio||1;var Zs=1/12;var qs=Math.PI*2;var Ha=window.devicePixelRatio||1;var Z=class{constructor(e){this.alphabet=e;let r=e.length;if(r===0)throw new Error("Alphabet cannot be empty.");if(r&r-1)throw new Error("Alphabet length must be a power of two.");this.shift=Math.trunc(Math.log(r)/Math.LN2),this.mask=Math.trunc(r-1)}shift;mask;index=0;next(){let e="",r=this.index++;do e=this.alphabet[r&this.mask]+e,r>>=this.shift;while(r>0);return e}static createBase32(){return new Z("0123456789abcdefghijklmnopqrstuv")}};function Xe(t,e){if(!t)return!1;let r=t.indexOf(e);return r===-1?!1:(t.splice(r,1),!0)}var Ht=qe(Ke()),fe=class extends Ht.default{toBBox({source:e,destination:r}){return{maxX:Math.max(e.x,r.x),minX:Math.min(e.x,r.x),maxY:Math.max(e.y,r.y),minY:Math.min(e.y,r.y)}}compareMinX(e,r){return Math.min(e.source.x,e.destination.x)-Math.min(r.source.x,r.destination.x)}compareMinY(e,r){return Math.min(e.source.y,e.destination.y)-Math.min(r.source.y,r.destination.y)}};var Ut=qe(Ke()),me=class extends Ut.default{toBBox({x:e,y:r}){return{maxX:e,minX:e,maxY:r,minY:r}}compareMinX(e,r){return e.x-r.x}compareMinY(e,r){return e.y-r.y}};function ye(t,e,r=t,n=e,o=Number.EPSILON){return{maxX:r+o,minX:t-o,maxY:n+o,minY:e-o}}var _e=class{identity;edges=new Set;edgeTree=new fe;nodes=new Set;nodeTree=new me;constructor(e){this.identity=e.identity}getOrCreateNodeAt(e,r){let n=this.getNodeAt(e,r);return n||(n={id:this.identity.next(),x:e,y:r},this.nodes.add(n),this.nodeTree.insert(n)),n}removeNode(e){return this.nodes.delete(e)?(e.edges?.forEach(r=>this.removeEdge(r)),this.nodeTree.remove(e),!0):!1}getOrCreateEdge(e,r){if(!this.nodes.has(e)||!this.nodes.has(r))throw new Error("Src and dst nodes must be part of the same graph to form a connection.");let n=this.findEdge(e,r);return n||(n={source:e,destination:r},(e.edges??=[]).push(n),(r.edges??=[]).push(n),this.edges.add(n),this.edgeTree.insert(n)),n}removeEdge(e){return this.edges.delete(e)?(Xe(e.source.edges,e),Xe(e.destination.edges,e),!0):!1}beginMoveNodes(e){let r=new Set;for(let n of e)this.nodeTree.remove(n),n.edges?.forEach(o=>r.add(o));r.forEach(n=>this.edgeTree.remove(n))}endMoveNodes(e){let r=new Set;for(let{ref:n,x:o,y:i}of e){if(n.x=o,n.y=i,this.getNodeAt(n.x,n.y))throw new Error("Attempted to move a node to an occupied cell!");this.nodeTree.insert(n),n.edges?.forEach(l=>r.add(l))}this.edgeTree.load(Array.from(r))}getNodeAt(e,r){let n=this.nodeTree.search(ye(e,r));if(n.length>1)throw new Error(`More than one node found at [ ${e}, ${r} ]`);return n.length>0?n[0]:null}getNodesWithin(e,r,n,o){return this.nodeTree.search(ye(e,r,n,o))}getEdgesWithin(e,r,n,o){return this.edgeTree.search(ye(e,r,n,o))}};var ge=class extends _e{constructor(e){super(e)}findEdge(e,r){let n=e.edges,o=r.edges;return n&&o&&(n.length<o.length?n.find(i=>i.destination===r):o.find(i=>i.source===e))}};var je=new ge({identity:Z.createBase32()});function zt(t,e){return Math.round(t+Math.random()*(e-t))}function ve(t,e){return Math.trunc(t+Math.random()*(e-t))}var Xt=1e5,zr=1e4,xe=Math.sqrt(Xt),Ze=[],be=0;for(;be<Xt;){let t=zt(-xe,xe),e=zt(-xe,xe);if(je.getNodeAt(t,e))continue;let r=je.getOrCreateNodeAt(t,e);r.color=ve(0,16777215+1),r.shape=he[ve(0,he.length)].key,Ze.push(r),++be}var Yt=0;for(;Yt<zr;){let t=ve(0,be),e=ve(0,be);je.getOrCreateEdge(Ze[t],Ze[e]),++Yt}ht(E(Ot,null),document.getElementById("root"));})();
