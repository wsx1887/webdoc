(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fb4ef40"],{1169:function(t,e,n){var r=n("2d95");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"11e9":function(t,e,n){var r=n("52a7"),i=n("4630"),o=n("6821"),c=n("6a99"),a=n("69a8"),f=n("c69a"),s=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?s:function(t,e){if(t=o(t),e=c(e,!0),f)try{return s(t,e)}catch(n){}if(a(t,e))return i(!r.f.call(t,e),t[e])}},"2fdb":function(t,e,n){"use strict";var r=n("5ca1"),i=n("d2c8"),o="includes";r(r.P+r.F*n("5147")(o),"String",{includes:function(t){return!!~i(this,t,o).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"37c8":function(t,e,n){e.f=n("2b4c")},"3a72":function(t,e,n){var r=n("7726"),i=n("8378"),o=n("2d00"),c=n("37c8"),a=n("86cc").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:c.f(t)})}},"3e46":function(t,e,n){},5147:function(t,e,n){var r=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(i){}}return!0}},6762:function(t,e,n){"use strict";var r=n("5ca1"),i=n("c366")(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"67ab":function(t,e,n){var r=n("ca5a")("meta"),i=n("d3f4"),o=n("69a8"),c=n("86cc").f,a=0,f=Object.isExtensible||function(){return!0},s=!n("79e5")(function(){return f(Object.preventExtensions({}))}),u=function(t){c(t,r,{value:{i:"O"+ ++a,w:{}}})},l=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!f(t))return"F";if(!e)return"E";u(t)}return t[r].i},h=function(t,e){if(!o(t,r)){if(!f(t))return!0;if(!e)return!1;u(t)}return t[r].w},d=function(t){return s&&y.NEED&&f(t)&&!o(t,r)&&u(t),t},y=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:h,onFreeze:d}},"7bbc":function(t,e,n){var r=n("6821"),i=n("9093").f,o={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return i(t)}catch(e){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==o.call(t)?a(t):i(r(t))}},"8a81":function(t,e,n){"use strict";var r=n("7726"),i=n("69a8"),o=n("9e1e"),c=n("5ca1"),a=n("2aba"),f=n("67ab").KEY,s=n("79e5"),u=n("5537"),l=n("7f20"),h=n("ca5a"),d=n("2b4c"),y=n("37c8"),v=n("3a72"),b=n("d4c0"),p=n("1169"),w=n("cb7c"),g=n("d3f4"),m=n("4bf8"),S=n("6821"),O=n("6a99"),L=n("4630"),x=n("2aeb"),E=n("7bbc"),P=n("11e9"),T=n("2621"),k=n("86cc"),A=n("0d58"),j=P.f,M=k.f,N=E.f,D=r.Symbol,F=r.JSON,z=F&&F.stringify,C="prototype",_=d("_hidden"),G=d("toPrimitive"),I={}.propertyIsEnumerable,R=u("symbol-registry"),V=u("symbols"),J=u("op-symbols"),H=Object[C],B="function"==typeof D&&!!T.f,K=r.QObject,W=!K||!K[C]||!K[C].findChild,Y=o&&s(function(){return 7!=x(M({},"a",{get:function(){return M(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=j(H,e);r&&delete H[e],M(t,e,n),r&&t!==H&&M(H,e,r)}:M,$=function(t){var e=V[t]=x(D[C]);return e._k=t,e},q=B&&"symbol"==typeof D.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof D},Q=function(t,e,n){return t===H&&Q(J,e,n),w(t),e=O(e,!0),w(n),i(V,e)?(n.enumerable?(i(t,_)&&t[_][e]&&(t[_][e]=!1),n=x(n,{enumerable:L(0,!1)})):(i(t,_)||M(t,_,L(1,{})),t[_][e]=!0),Y(t,e,n)):M(t,e,n)},U=function(t,e){w(t);var n,r=b(e=S(e)),i=0,o=r.length;while(o>i)Q(t,n=r[i++],e[n]);return t},X=function(t,e){return void 0===e?x(t):U(x(t),e)},Z=function(t){var e=I.call(this,t=O(t,!0));return!(this===H&&i(V,t)&&!i(J,t))&&(!(e||!i(this,t)||!i(V,t)||i(this,_)&&this[_][t])||e)},tt=function(t,e){if(t=S(t),e=O(e,!0),t!==H||!i(V,e)||i(J,e)){var n=j(t,e);return!n||!i(V,e)||i(t,_)&&t[_][e]||(n.enumerable=!0),n}},et=function(t){var e,n=N(S(t)),r=[],o=0;while(n.length>o)i(V,e=n[o++])||e==_||e==f||r.push(e);return r},nt=function(t){var e,n=t===H,r=N(n?J:S(t)),o=[],c=0;while(r.length>c)!i(V,e=r[c++])||n&&!i(H,e)||o.push(V[e]);return o};B||(D=function(){if(this instanceof D)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),e=function(n){this===H&&e.call(J,n),i(this,_)&&i(this[_],t)&&(this[_][t]=!1),Y(this,t,L(1,n))};return o&&W&&Y(H,t,{configurable:!0,set:e}),$(t)},a(D[C],"toString",function(){return this._k}),P.f=tt,k.f=Q,n("9093").f=E.f=et,n("52a7").f=Z,T.f=nt,o&&!n("2d00")&&a(H,"propertyIsEnumerable",Z,!0),y.f=function(t){return $(d(t))}),c(c.G+c.W+c.F*!B,{Symbol:D});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),it=0;rt.length>it;)d(rt[it++]);for(var ot=A(d.store),ct=0;ot.length>ct;)v(ot[ct++]);c(c.S+c.F*!B,"Symbol",{for:function(t){return i(R,t+="")?R[t]:R[t]=D(t)},keyFor:function(t){if(!q(t))throw TypeError(t+" is not a symbol!");for(var e in R)if(R[e]===t)return e},useSetter:function(){W=!0},useSimple:function(){W=!1}}),c(c.S+c.F*!B,"Object",{create:X,defineProperty:Q,defineProperties:U,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:nt});var at=s(function(){T.f(1)});c(c.S+c.F*at,"Object",{getOwnPropertySymbols:function(t){return T.f(m(t))}}),F&&c(c.S+c.F*(!B||s(function(){var t=D();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))})),"JSON",{stringify:function(t){var e,n,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(n=e=r[1],(g(e)||void 0!==t)&&!q(t))return p(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!q(e))return e}),r[1]=e,z.apply(F,r)}}),D[C][G]||n("32e9")(D[C],G,D[C].valueOf),l(D,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},9093:function(t,e,n){var r=n("ce10"),i=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},a682:function(t,e,n){"use strict";var r=n("3e46"),i=n.n(r);i.a},aae3:function(t,e,n){var r=n("d3f4"),i=n("2d95"),o=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},ac4d:function(t,e,n){n("3a72")("asyncIterator")},ac6a:function(t,e,n){for(var r=n("cadf"),i=n("0d58"),o=n("2aba"),c=n("7726"),a=n("32e9"),f=n("84f2"),s=n("2b4c"),u=s("iterator"),l=s("toStringTag"),h=f.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},y=i(d),v=0;v<y.length;v++){var b,p=y[v],w=d[p],g=c[p],m=g&&g.prototype;if(m&&(m[u]||a(m,u,h),m[l]||a(m,l,p),f[p]=h,w))for(b in r)m[b]||o(m,b,r[b],!0)}},d2c8:function(t,e,n){var r=n("aae3"),i=n("be13");t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}},d4c0:function(t,e,n){var r=n("0d58"),i=n("2621"),o=n("52a7");t.exports=function(t){var e=r(t),n=i.f;if(n){var c,a=n(t),f=o.f,s=0;while(a.length>s)f.call(t,c=a[s++])&&e.push(c)}return e}},fc91:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"snake"}},[n("canvas",{attrs:{id:"canvas"}})])}],o=(n("ac4d"),n("8a81"),n("ac6a"),n("6762"),n("2fdb"),{methods:{gaming:function(){var t=document.getElementById("canvas"),e=300;t.height=t.width=e;for(var n=t.getContext("2d"),r=10,i=new Array(e/r),o=0;o<e/r;o++){i[o]=new Array(e/r);for(var c=0;c<e/r;c++)i[o][c]=new l(o,c)}var a={body:[new l(0,10),new l(1,10),new l(2,10)],direction:"right",move:function(){var t=this.body[this.body.length-1].x,n=this.body[this.body.length-1].y;if("right"===this.direction?t++:"left"===this.direction?t--:"up"===this.direction?n--:"down"===this.direction&&n++,t<0||t>=e/r||n<0||n>=e/r||this.body.includes(i[t][n]))d();else if(this.body.push(i[t][n]),i[t][n].draw(),i[t][n]!==f){var o=this.body.shift();o.clearDraw()}else f=h(),f.draw()},draw:function(){var t=!0,e=!1,n=void 0;try{for(var r,i=this.body[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var o=r.value;o.draw()}}catch(c){e=!0,n=c}finally{try{t||null==i.return||i.return()}finally{if(e)throw n}}}},f=h();f.draw(),a.draw(),window.addEventListener("keydown",function(t){if("ArrowRight"===t.key){if("left"===a.direction)return;a.direction="right"}else if("ArrowDown"===t.key){if("up"===a.direction)return;a.direction="down"}else if("ArrowLeft"===t.key){if("right"===a.direction)return;a.direction="left"}else if("ArrowUp"===t.key){if("down"===a.direction)return;a.direction="up"}});var s=300,u=window.setInterval(function(){a.move()},s);function l(t,e){this.x=t,this.y=e,this.size=r,this.clearDraw=function(){n.clearRect(this.x*this.size,this.y*this.size,this.size,this.size)},this.draw=function(){n.fillRect(this.x*this.size,this.y*this.size,this.size,this.size)}}function h(){for(var t=[],n=0;n<e/r;n++)for(var o=0;o<e/r;o++)a.body.includes(i[n][o])||t.push(i[n][o]);var c=Math.floor(Math.random()*t.length);return t[c]}function d(){n.font="30px serif",n.textAlign="center",n.textBaseline="middle",n.fillText("Gamve Over!",t.width/2,t.height/2),window.clearInterval(u)}}},mounted:function(){this.gaming()}}),c=o,a=(n("a682"),n("2877")),f=Object(a["a"])(c,r,i,!1,null,"6c6c9acc",null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2fb4ef40.6cc173a9.js.map