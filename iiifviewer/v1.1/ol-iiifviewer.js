/* IiifViewer; Copyright (C) 2014 - Klokan Technologies GmbH; Powered by OpenLayers 3 */
(function() {var h,aa=aa||{},m=this;function ba(){}
function n(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ca(a){var b=n(a);return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}var da="closure_uid_"+(1E9*Math.random()>>>0),ea=0;function fa(a,b,c){return a.call.apply(a.bind,arguments)}
function ga(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function r(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?fa:ga;return r.apply(null,arguments)}
function t(a,b){var c=a.split("."),d=m;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b}function u(a,b){function c(){}c.prototype=b.prototype;a.qa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ia=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g)}};var ha=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function w(a,b){return-1!=a.indexOf(b)}function ia(a,b){return a<b?-1:a>b?1:0};var ja=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ka=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},la=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,
b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e};function ma(a){var b;a:{b=na;for(var c=a.length,d=p(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:p(a)?a.charAt(b):a[b]}function oa(a){return Array.prototype.concat.apply(Array.prototype,arguments)}function pa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var x;a:{var ra=m.navigator;if(ra){var sa=ra.userAgent;if(sa){x=sa;break a}}x=""};function ta(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1}function ua(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function va(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function wa(a){return null!==a&&"withCredentials"in a}function xa(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return c}var ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function za(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ya.length;f++)c=ya[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var Aa=w(x,"Opera")||w(x,"OPR"),A=w(x,"Trident")||w(x,"MSIE"),Ba=w(x,"Edge"),C=w(x,"Gecko")&&!(w(x.toLowerCase(),"webkit")&&!w(x,"Edge"))&&!(w(x,"Trident")||w(x,"MSIE"))&&!w(x,"Edge"),E=w(x.toLowerCase(),"webkit")&&!w(x,"Edge");function Ca(){var a=x;if(C)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ba)return/Edge\/([\d\.]+)/.exec(a);if(A)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(E)return/WebKit\/(\S+)/.exec(a)}function Da(){var a=m.document;return a?a.documentMode:void 0}
var Ea=function(){if(Aa&&m.opera){var a;var b=m.opera.version;try{a=b()}catch(c){a=b}return a}a="";(b=Ca())&&(a=b?b[1]:"");return A&&(b=Da(),b>parseFloat(a))?String(b):a}(),Fa={};
function F(a){var b;if(!(b=Fa[a])){b=0;for(var c=ha(String(Ea)).split("."),d=ha(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"",D=RegExp("(\\d*)(\\D*)","g"),y=RegExp("(\\d*)(\\D*)","g");do{var q=D.exec(g)||["","",""],l=y.exec(k)||["","",""];if(0==q[0].length&&0==l[0].length)break;b=ia(0==q[1].length?0:parseInt(q[1],10),0==l[1].length?0:parseInt(l[1],10))||ia(0==q[2].length,0==l[2].length)||ia(q[2],l[2])}while(0==b)}b=Fa[a]=0<=b}return b}
var Ga=m.document,Ha=Ga&&A?Da()||("CSS1Compat"==Ga.compatMode?parseInt(Ea,10):5):void 0;var Ia=!A||9<=Ha,Ja=A&&!F("9");!E||F("528");C&&F("1.9b")||A&&F("8")||Aa&&F("9.5")||E&&F("528");C&&!F("8")||A&&F("9");function Ka(){0!=La&&(this[da]||(this[da]=++ea));this.Y=this.Y;this.Ea=this.Ea}var La=0;Ka.prototype.Y=!1;function G(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.B=!1;this.pa=!0}G.prototype.stopPropagation=function(){this.B=!0};G.prototype.preventDefault=function(){this.defaultPrevented=!0;this.pa=!1};function Ma(a){Ma[" "](a);return a}Ma[" "]=ba;function H(a,b){G.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.J=this.state=null;if(a){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;if(e){if(C){var f;a:{try{Ma(e.nodeName);f=!0;break a}catch(g){}f=
!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.offsetX=E||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=E||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,
this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.J=a;a.defaultPrevented&&this.preventDefault()}}u(H,G);H.prototype.stopPropagation=function(){H.qa.stopPropagation.call(this);this.J.stopPropagation?this.J.stopPropagation():this.J.cancelBubble=!0};
H.prototype.preventDefault=function(){H.qa.preventDefault.call(this);var a=this.J;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ja)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var I="closure_listenable_"+(1E6*Math.random()|0),Na=0;function Oa(a,b,c,d,e){this.listener=a;this.P=null;this.src=b;this.type=c;this.H=!!d;this.M=e;this.key=++Na;this.G=this.L=!1}function Pa(a){a.G=!0;a.listener=null;a.P=null;a.src=null;a.M=null};function J(a){this.src=a;this.i={};this.T=0}J.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.i[f];a||(a=this.i[f]=[],this.T++);var g=Qa(a,b,d,e);-1<g?(b=a[g],c||(b.L=!1)):(b=new Oa(b,this.src,f,!!d,e),b.L=c,a.push(b));return b};J.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.i))return!1;var e=this.i[a];b=Qa(e,b,c,d);return-1<b?(Pa(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.i[a],this.T--),!0):!1};
function Ra(a,b){var c=b.type;if(c in a.i){var d=a.i[c],e=ja(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(Pa(b),0==a.i[c].length&&(delete a.i[c],a.T--))}}J.prototype.$=function(a,b,c,d){a=this.i[a.toString()];var e=-1;a&&(e=Qa(a,b,c,d));return-1<e?a[e]:null};J.prototype.hasListener=function(a,b){var c=void 0!==a,d=c?a.toString():"",e=void 0!==b;return ta(this.i,function(a){for(var g=0;g<a.length;++g)if(!(c&&a[g].type!=d||e&&a[g].H!=b))return!0;return!1})};
function Qa(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.G&&f.listener==b&&f.H==!!c&&f.M==d)return e}return-1};var Sa="closure_lm_"+(1E6*Math.random()|0),Ta={},Ua=0;function Va(a,b,c,d,e){if("array"==n(b))for(var f=0;f<b.length;f++)Va(a,b[f],c,d,e);else c=Wa(c),a&&a[I]?a.u.add(String(b),c,!1,d,e):Xa(a,b,c,!1,d,e)}
function Xa(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,k=K(a);k||(a[Sa]=k=new J(a));c=k.add(b,c,d,e,f);if(!c.P){d=Ya();c.P=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent(Za(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");Ua++}}function Ya(){var a=$a,b=Ia?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}
function ab(a,b,c,d,e){if("array"==n(b))for(var f=0;f<b.length;f++)ab(a,b[f],c,d,e);else c=Wa(c),a&&a[I]?a.u.add(String(b),c,!0,d,e):Xa(a,b,c,!0,d,e)}function bb(a,b,c,d,e){if("array"==n(b))for(var f=0;f<b.length;f++)bb(a,b[f],c,d,e);else c=Wa(c),a&&a[I]?a.u.remove(String(b),c,d,e):a&&(a=K(a))&&(b=a.$(b,c,!!d,e))&&cb(b)}
function cb(a){if("number"!=typeof a&&a&&!a.G){var b=a.src;if(b&&b[I])Ra(b.u,a);else{var c=a.type,d=a.P;b.removeEventListener?b.removeEventListener(c,d,a.H):b.detachEvent&&b.detachEvent(Za(c),d);Ua--;(c=K(b))?(Ra(c,a),0==c.T&&(c.src=null,b[Sa]=null)):Pa(a)}}}function Za(a){return a in Ta?Ta[a]:Ta[a]="on"+a}function db(a,b,c,d){var e=!0;if(a=K(a))if(b=a.i[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.H==c&&!f.G&&(f=eb(f,d),e=e&&!1!==f)}return e}
function eb(a,b){var c=a.listener,d=a.M||a.src;a.L&&cb(a);return c.call(d,b)}
function $a(a,b){if(a.G)return!0;if(!Ia){var c;if(!(c=b))a:{c=["window","event"];for(var d=m,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new H(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(D){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.currentTarget;f;f=f.parentNode)e.push(f);for(var f=a.type,g=e.length-1;!c.B&&0<=g;g--){c.currentTarget=e[g];var k=db(e[g],f,!0,c),d=d&&k}for(g=0;!c.B&&g<e.length;g++)c.currentTarget=
e[g],k=db(e[g],f,!1,c),d=d&&k}return d}return eb(a,new H(b,this))}function K(a){a=a[Sa];return a instanceof J?a:null}var fb="__closure_events_fn_"+(1E9*Math.random()>>>0);function Wa(a){if("function"==n(a))return a;a[fb]||(a[fb]=function(b){return a.handleEvent(b)});return a[fb]};function gb(a){for(var b=a.wa,c=a.xa||"jpg",d=a.Ja||"native",e=a.width,f=a.height,g=a.tileSize||256,k=Math.max(Math.ceil(Math.log(e/g)/Math.LN2),Math.ceil(Math.log(f/g)/Math.LN2)),D=[],y=0;y<=k;y++){var q=Math.pow(2,k-y);D.push([Math.ceil(Math.ceil(e/q)/g),Math.ceil(Math.ceil(f/q)/g)])}var l=Math.min(window.devicePixelRatio||1,4),y=g/l,q=1==l?a.resolutions:la(a.resolutions,function(a){return a*l});ol.source.TileImage.call(this,{tilePixelRatio:l,tileGrid:new ol.tilegrid.TileGrid({resolutions:q.reverse(),
origin:[0,0],tileSize:y}),tileUrlFunction:function(a){var z=a[0];if(!(k<z)){var v=D[z];if(v){var q=a[1];a=-a[2]-1;if(!(0>q||v[0]<=q||0>a||v[1]<=a)){var v=Math.pow(2,k-z),B=g*v,l=q*B,y=a*B,qa=Math.min(l+B,e),B=Math.min(y+B,f),qa=v*Math.floor(qa/v),B=v*Math.floor(B/v),v="/"+l+","+y+","+(qa-l)+","+(B-y)+"/pct:"+100/v+"/0/"+d+"."+c;"array"==n(b)?(l=b.length,z=((q<<z)+a)%l,z=b[0>z*l?z+l:z]):z=b;return z+v}}}},crossOrigin:a.crossOrigin});ol.has.CANVAS&&this.setTileLoadFunction(function(a,b){var c=a.getImage();
ab(c,"load",function(){if(0<c.naturalWidth&&(c.naturalWidth!=g||c.naturalHeight!=g)){var b=document.createElement(hb);b.width=g;b.height=g;b.getContext("2d").drawImage(c,0,0);var d=xa(a,function(a){return a==c});d&&(a[d]=b)}},!0);c.src=b})}u(gb,ol.source.TileImage);function ib(a){if(a.l&&"function"==typeof a.l)return a.l();if(p(a))return a.split("");if(ca(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return ua(a)}
function jb(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(ca(a)||p(a))ka(a,b,c);else{var d;if(a.getKeys&&"function"==typeof a.getKeys)d=a.getKeys();else if(a.l&&"function"==typeof a.l)d=void 0;else if(ca(a)||p(a)){d=[];for(var e=a.length,f=0;f<e;f++)d.push(f)}else d=va(a);for(var e=ib(a),f=e.length,g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}};function L(a,b){this.f={};this.g=[];this.b=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)}h=L.prototype;h.ga=function(){return this.b};h.l=function(){M(this);for(var a=[],b=0;b<this.g.length;b++)a.push(this.f[this.g[b]]);return a};h.getKeys=function(){M(this);return this.g.concat()};h.I=function(a){return N(this.f,a)};
h.equals=function(a,b){if(this===a)return!0;if(this.b!=a.ga())return!1;var c=b||kb;M(this);for(var d,e=0;d=this.g[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};function kb(a,b){return a===b}h.isEmpty=function(){return 0==this.b};h.clear=function(){this.f={};this.b=this.g.length=0};h.remove=function(a){return N(this.f,a)?(delete this.f[a],this.b--,this.g.length>2*this.b&&M(this),!0):!1};
function M(a){if(a.b!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];N(a.f,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.b!=a.g.length){for(var e={},c=b=0;b<a.g.length;)d=a.g[b],N(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}h.get=function(a,b){return N(this.f,a)?this.f[a]:b};h.set=function(a,b){N(this.f,a)||(this.b++,this.g.push(a));this.f[a]=b};h.addAll=function(a){var b;a instanceof L?(b=a.getKeys(),a=a.l()):(b=va(a),a=ua(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};
h.forEach=function(a,b){for(var c=this.getKeys(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new L(this)};function N(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var lb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function mb(a,b){if(a)for(var c=a.split("\x26"),d=0;d<c.length;d++){var e=c[d].indexOf("\x3d"),f=null,g=null;0<=e?(f=c[d].substring(0,e),g=c[d].substring(e+1)):f=c[d];b(f,g?decodeURIComponent(g.replace(/\+/g," ")):"")}};function O(a,b){this.w=this.C=this.v="";this.F=null;this.A=this.o="";this.j=this.Ca=!1;var c;if(a instanceof O)this.j=void 0!==b?b:a.j,nb(this,a.v),c=a.C,P(this),this.C=c,Q(this,a.w),ob(this,a.F),c=a.o,P(this),this.o=c,pb(this,a.s.clone()),c=a.A,P(this),this.A=c;else if(a&&(c=String(a).match(lb))){this.j=!!b;nb(this,c[1]||"",!0);var d=c[2]||"";P(this);this.C=R(d);Q(this,c[3]||"",!0);ob(this,c[4]);d=c[5]||"";P(this);this.o=R(d,!0);pb(this,c[6]||"",!0);c=c[7]||"";P(this);this.A=R(c)}else this.j=!!b,
this.s=new S(null,0,this.j)}O.prototype.toString=function(){var a=[],b=this.v;b&&a.push(T(b,qb,!0),":");var c=this.w;if(c||"file"==b)a.push("//"),(b=this.C)&&a.push(T(b,qb,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.F,null!=c&&a.push(":",String(c));if(c=this.o)this.w&&"/"!=c.charAt(0)&&a.push("/"),a.push(T(c,"/"==c.charAt(0)?rb:sb,!0));(c=this.s.toString())&&a.push("?",c);(c=this.A)&&a.push("#",T(c,tb));return a.join("")};
O.prototype.resolve=function(a){var b=this.clone(),c=!!a.v;c?nb(b,a.v):c=!!a.C;if(c){var d=a.C;P(b);b.C=d}else c=!!a.w;c?Q(b,a.w):c=null!=a.F;d=a.o;if(c)ob(b,a.F);else if(c=!!a.o){if("/"!=d.charAt(0))if(this.w&&!this.o)d="/"+d;else{var e=b.o.lastIndexOf("/");-1!=e&&(d=b.o.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(w(e,"./")||w(e,"/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],g=0;g<e.length;){var k=e[g++];"."==k?d&&g==e.length&&f.push(""):".."==k?((1<f.length||1==f.length&&
""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?(P(b),b.o=d):c=""!==a.s.toString();c?pb(b,R(a.s.toString())):c=!!a.A;c&&(a=a.A,P(b),b.A=a);return b};O.prototype.clone=function(){return new O(this)};function nb(a,b,c){P(a);a.v=c?R(b,!0):b;a.v&&(a.v=a.v.replace(/:$/,""))}function Q(a,b,c){P(a);a.w=c?R(b,!0):b}function ob(a,b){P(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.F=b}else a.F=null}
function pb(a,b,c){P(a);b instanceof S?(a.s=b,a.s.da(a.j)):(c||(b=T(b,ub)),a.s=new S(b,0,a.j))}function P(a){if(a.Ca)throw Error("Tried to modify a read-only Uri");}O.prototype.da=function(a){this.j=a;this.s&&this.s.da(a);return this};function R(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function T(a,b,c){return p(a)?(a=encodeURI(a).replace(b,vb),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}
function vb(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var qb=/[#\/\?@]/g,sb=/[\#\?:]/g,rb=/[\#\?]/g,ub=/[\#\?@]/g,tb=/#/g;function S(a,b,c){this.b=this.c=null;this.h=a||null;this.j=!!c}function U(a){a.c||(a.c=new L,a.b=0,a.h&&mb(a.h,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))}h=S.prototype;h.ga=function(){U(this);return this.b};h.add=function(a,b){U(this);this.h=null;a=V(this,a);var c=this.c.get(a);c||this.c.set(a,c=[]);c.push(b);this.b++;return this};
h.remove=function(a){U(this);a=V(this,a);return this.c.I(a)?(this.h=null,this.b-=this.c.get(a).length,this.c.remove(a)):!1};h.clear=function(){this.c=this.h=null;this.b=0};h.isEmpty=function(){U(this);return 0==this.b};h.I=function(a){U(this);a=V(this,a);return this.c.I(a)};h.getKeys=function(){U(this);for(var a=this.c.l(),b=this.c.getKeys(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
h.l=function(a){U(this);var b=[];if(p(a))this.I(a)&&(b=oa(b,this.c.get(V(this,a))));else{a=this.c.l();for(var c=0;c<a.length;c++)b=oa(b,a[c])}return b};h.set=function(a,b){U(this);this.h=null;a=V(this,a);this.I(a)&&(this.b-=this.c.get(a).length);this.c.set(a,[b]);this.b++;return this};h.get=function(a,b){var c=a?this.l(a):[];return 0<c.length?String(c[0]):b};
h.toString=function(){if(this.h)return this.h;if(!this.c)return"";for(var a=[],b=this.c.getKeys(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.l(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="\x3d"+encodeURIComponent(String(d[f])));a.push(g)}return this.h=a.join("\x26")};h.clone=function(){var a=new S;a.h=this.h;this.c&&(a.c=this.c.clone(),a.b=this.b);return a};function V(a,b){var c=String(b);a.j&&(c=c.toLowerCase());return c}
h.da=function(a){a&&!this.j&&(U(this),this.h=null,this.c.forEach(function(a,c){var d=c.toLowerCase();c!=d&&(this.remove(c),this.remove(d),0<a.length&&(this.h=null,this.c.set(V(this,d),pa(a)),this.b+=a.length))},this));this.j=a};h.extend=function(a){for(var b=0;b<arguments.length;b++)jb(arguments[b],function(a,b){this.add(b,a)},this)};!C&&!A||A&&9<=Ha||C&&F("1.9.1");A&&F("9");var hb="CANVAS";function wb(){}wb.prototype.fa=null;function xb(a){return a.fa||(a.fa=a.ka())};var yb;function W(){}u(W,wb);W.prototype.W=function(){var a=zb(this);return a?new ActiveXObject(a):new XMLHttpRequest};W.prototype.ka=function(){var a={};zb(this)&&(a[0]=!0,a[1]=!0);return a};
function zb(a){if(!a.ia&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.ia=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.ia}yb=new W;function Ab(){}u(Ab,wb);Ab.prototype.W=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new Bb;throw Error("Unsupported browser");};Ab.prototype.ka=function(){return{}};
function Bb(){this.m=new XDomainRequest;this.readyState=0;this.responseText=this.onreadystatechange=null;this.status=-1;this.statusText=this.responseXML=null;this.m.onload=r(this.za,this);this.m.onerror=r(this.ha,this);this.m.onprogress=r(this.Aa,this);this.m.ontimeout=r(this.Ba,this)}h=Bb.prototype;h.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.m.open(a,b)};
h.send=function(a){if(a)if("string"==typeof a)this.m.send(a);else throw Error("Only string data is supported");else this.m.send()};h.abort=function(){this.m.abort()};h.setRequestHeader=function(){};h.getResponseHeader=function(a){return"content-type"==a.toLowerCase()?this.m.contentType:""};h.za=function(){this.status=200;this.responseText=this.m.responseText;Cb(this,4)};h.ha=function(){this.status=500;this.responseText=null;Cb(this,4)};h.Ba=function(){this.ha()};
h.Aa=function(){this.status=200;Cb(this,1)};function Cb(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()}h.getAllResponseHeaders=function(){return"content-type: "+this.m.contentType};function X(){Ka.call(this);this.u=new J(this);this.ua=this;this.na=null}u(X,Ka);X.prototype[I]=!0;h=X.prototype;h.addEventListener=function(a,b,c,d){Va(this,a,b,c,d)};h.removeEventListener=function(a,b,c,d){bb(this,a,b,c,d)};
h.dispatchEvent=function(a){var b,c=this.na;if(c)for(b=[];c;c=c.na)b.push(c);var c=this.ua,d=a.type||a;if(p(a))a=new G(a,c);else if(a instanceof G)a.target=a.target||c;else{var e=a;a=new G(d,c);za(a,e)}var e=!0,f;if(b)for(var g=b.length-1;!a.B&&0<=g;g--)f=a.currentTarget=b[g],e=Db(f,d,!0,a)&&e;a.B||(f=a.currentTarget=c,e=Db(f,d,!0,a)&&e,a.B||(e=Db(f,d,!1,a)&&e));if(b)for(g=0;!a.B&&g<b.length;g++)f=a.currentTarget=b[g],e=Db(f,d,!1,a)&&e;return e};
function Db(a,b,c,d){b=a.u.i[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.G&&g.H==c){var k=g.listener,D=g.M||g.src;g.L&&Ra(a.u,g);e=!1!==k.call(D,d)&&e}}return e&&0!=d.pa}h.$=function(a,b,c,d){return this.u.$(String(a),b,c,d)};h.hasListener=function(a,b){return this.u.hasListener(void 0!==a?String(a):void 0,b)};function Eb(a,b,c){if("function"==n(a))c&&(a=r(a,c));else if(a&&"function"==typeof a.handleEvent)a=r(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:m.setTimeout(a,b||0)};function Fb(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);};function Gb(a){X.call(this);this.headers=new L;this.V=a||null;this.D=!1;this.U=this.a=null;this.O=this.ba="";this.K=this.aa=this.N=this.Z=!1;this.S=0;this.R=null;this.oa=Hb;this.ea=this.Ga=this.Ha=!1}u(Gb,X);var Hb="",Ib=/^https?$/i,Jb=["POST","PUT"];h=Gb.prototype;
h.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request\x3d"+this.ba+"; newUri\x3d"+a);b=b?b.toUpperCase():"GET";this.ba=a;this.O="";this.Z=!1;this.D=!0;this.a=this.V?this.V.W():yb.W();this.U=this.V?xb(this.V):xb(yb);this.a.onreadystatechange=r(this.ma,this);this.Ga&&"onprogress"in this.a&&(this.a.onprogress=r(function(a){this.la(a,!0)},this),this.a.upload&&(this.a.upload.onprogress=r(this.la,this)));try{this.aa=!0,this.a.open(b,String(a),!0),this.aa=
!1}catch(f){Kb(this,f);return}a=c||"";var e=this.headers.clone();d&&jb(d,function(a,b){e.set(b,a)});d=ma(e.getKeys());c=m.FormData&&a instanceof m.FormData;!(0<=ja(Jb,b))||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset\x3dutf-8");e.forEach(function(a,b){this.a.setRequestHeader(b,a)},this);this.oa&&(this.a.responseType=this.oa);wa(this.a)&&(this.a.withCredentials=this.Ha);try{Lb(this),0<this.S&&((this.ea=Mb(this.a))?(this.a.timeout=this.S,this.a.ontimeout=r(this.ra,this)):this.R=
Eb(this.ra,this.S,this)),this.N=!0,this.a.send(a),this.N=!1}catch(f){Kb(this,f)}};function Mb(a){return A&&F(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout}function na(a){return"content-type"==a.toLowerCase()}h.ra=function(){"undefined"!=typeof aa&&this.a&&(this.O="Timed out after "+this.S+"ms, aborting",this.dispatchEvent("timeout"),this.abort(8))};function Kb(a,b){a.D=!1;a.a&&(a.K=!0,a.a.abort(),a.K=!1);a.O=b;Nb(a);Ob(a)}
function Nb(a){a.Z||(a.Z=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}h.abort=function(){this.a&&this.D&&(this.D=!1,this.K=!0,this.a.abort(),this.K=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Ob(this))};h.ma=function(){this.Y||(this.aa||this.N||this.K?Pb(this):this.Fa())};h.Fa=function(){Pb(this)};
function Pb(a){if(a.D&&"undefined"!=typeof aa&&(!a.U[1]||4!=Y(a)||2!=Qb(a)))if(a.N&&4==Y(a))Eb(a.ma,0,a);else if(a.dispatchEvent("readystatechange"),4==Y(a)){a.D=!1;try{if(Rb(a))a.dispatchEvent("complete"),a.dispatchEvent("success");else{var b;try{b=2<Y(a)?a.a.statusText:""}catch(c){b=""}a.O=b+" ["+Qb(a)+"]";Nb(a)}}finally{Ob(a)}}}h.la=function(a,b){this.dispatchEvent(Sb(a,"progress"));this.dispatchEvent(Sb(a,b?"downloadprogress":"uploadprogress"))};
function Sb(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}}function Ob(a){if(a.a){Lb(a);var b=a.a,c=a.U[0]?ba:null;a.a=null;a.U=null;a.dispatchEvent("ready");try{b.onreadystatechange=c}catch(d){}}}function Lb(a){a.a&&a.ea&&(a.a.ontimeout=null);"number"==typeof a.R&&(m.clearTimeout(a.R),a.R=null)}
function Rb(a){var b=Qb(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=String(a.ba).match(lb)[1]||null,!a&&m.self&&m.self.location&&(a=m.self.location.protocol,a=a.substr(0,a.length-1)),b=!Ib.test(a?a.toLowerCase():"");c=b}return c}function Y(a){return a.a?a.a.readyState:0}function Qb(a){try{return 2<Y(a)?a.a.status:-1}catch(b){return-1}}
h.getResponseHeader=function(a){return this.a&&4==Y(this)?this.a.getResponseHeader(a):void 0};h.getAllResponseHeaders=function(){return this.a&&4==Y(this)?this.a.getAllResponseHeaders():""};function Z(a,b,c,d,e){var f=document;a=p(a)?f.getElementById(a):a;if(!a)throw Error("Invalid element");this.Da=a;this.X=this.f=null;this.sa=1==d;this.ca=e||null;this.ja=c||null;this.ya=p(b)?b.substring(0,b.lastIndexOf("/")):null;Tb(this,b)}Z.prototype.getMap=function(){return this.f};
function Ub(a,b){var c=b.width,d=b.height,e=b["@id"];if(!e){var f=b.image_host,g=b.identifier;f&&g&&(e=f+g)}e||(e=a.ya);if(!e)throw Error("Unable to determine base url");if((f=b.domains)&&0<f.length){var k=new O(e),e=[];ka(f,function(a){Q(k,a);e.push(k.toString())})}g=(b.tiles||[{}])[0];f=new ol.proj.Projection({code:"IIIF",units:"pixels",extent:[0,-d,c,0]});g=new gb({wa:e,width:c,height:d,resolutions:b.scale_factors||g.scaleFactors,xa:(b.formats||[])[0],tileSize:b.tile_width||g.width||void 0,projection:f,
crossOrigin:a.sa?"":void 0});g=new ol.layer.Tile({source:g});a.ta=1.1;a.f=new ol.Map({layers:[g],target:a.Da,renderer:a.sa?"webgl":void 0,view:new ol.View({projection:f,extent:[0,-d,c,0],zoomFactor:a.ta}),interactions:ol.interaction.defaults({mouseWheelZoom:null==a.ca,zoomDelta:Math.LN2/Math.log(a.ta)}),controls:[],logo:!1});a.ca&&a.f.addInteraction(a.ca);d=window.location.hash;if(0<d.length&&(0<d.indexOf("lat\x3d")||0<d.indexOf("x\x3d"))){c=[];d=d.split("\x26");d[0]=d[0].substring(1);for(f=0;f<d.length;f++)g=
d[f].split("\x3d"),c[g[0]]=g[1];void 0!==c.zoom?(a.f.getView().setCenter([parseFloat(c.lon),parseFloat(c.lat)-a.X.height]),a.f.getView().setZoom(c.zoom)):(a.f.getView().setCenter([parseFloat(c.y),-parseFloat(c.x)]),a.f.getView().setResolution(c.res))}else a.f.getView().fit(f.getExtent(),a.f.getSize()||null);a.ja&&a.ja(a)}function Tb(a,b){if(p(b)){var c=new Gb(new Ab);Va(c,"complete",function(){if(Rb(c)){var a;a=c.a?Fb(c.a.responseText):void 0;Tb(this,a)}},!1,a);c.send(b)}else a.X=b,Ub(a,b)}
Z.prototype.va=function(a){if(!1!==a){var b=null!=a.accuracy?a.accuracy:4,c=this.X.height;this.f.on("moveend",function(){var d=this.getView(),e=d.getCenter(),f="",f=parseFloat(e[1]);null!=a.geoFormat&&!1===a.geoFormat?f="res\x3d"+d.getResolution()+"\x26x\x3d"+Math.abs(f.toFixed(b))+"\x26y\x3d"+e[0].toFixed(b):(f+=c,f="zoom\x3d"+d.getZoom()+"\x26lat\x3d"+f.toFixed(b)+"\x26lon\x3d"+e[0].toFixed(b));null!=a.addToEnd&&(f+="\x26"+a.addToEnd);window.location.hash=f})}};t("IiifViewer",Z);t("IiifViewer.prototype.getMap",Z.prototype.getMap);t("IiifViewer.prototype.addPermalink",Z.prototype.va);t("IiifSource",gb);})();
