/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

;/*!
  * Bootstrap v4.0.0 (https://getbootstrap.com)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), require('popper.js')) :
	typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'popper.js'], factory) :
	(factory((global.bootstrap = {}),global.jQuery,global.Popper));
}(this, (function (exports,$,Popper) { 'use strict';

$ = $ && $.hasOwnProperty('default') ? $['default'] : $;
Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Util = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */
  var transition = false;
  var MAX_UID = 1000000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: transition.end,
      delegateType: transition.end,
      handle: function handle(event) {
        if ($$$1(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndTest() {
    if (typeof window !== 'undefined' && window.QUnit) {
      return false;
    }

    return {
      end: 'transitionend'
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $$$1(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    transition = transitionEndTest();
    $$$1.fn.emulateTransitionEnd = transitionEndEmulator;

    if (Util.supportsTransitionEnd()) {
      $$$1.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
  }

  function escapeId(selector) {
    // We escape IDs in case of special selectors (selector = '#myId:something')
    // $.escapeSelector does not exist in jQuery < 3
    selector = typeof $$$1.escapeSelector === 'function' ? $$$1.escapeSelector(selector).substr(1) : selector.replace(/(:|\.|\[|\]|,|=|@)/g, '\\$1');
    return selector;
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        selector = element.getAttribute('href') || '';
      } // If it's an ID


      if (selector.charAt(0) === '#') {
        selector = escapeId(selector);
      }

      try {
        var $selector = $$$1(document).find(selector);
        return $selector.length > 0 ? selector : null;
      } catch (err) {
        return null;
      }
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $$$1(element).trigger(transition.end);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(transition);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    }
  };
  setTransitionEndSupport();
  return Util;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Alert = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'alert';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var TRANSITION_DURATION = 150;
  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };
  var Event = {
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Alert =
  /*#__PURE__*/
  function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      element = element || this._element;

      var rootElement = this._getRootElement(element);

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $$$1.removeData(this._element, DATA_KEY);
      this._element = null;
    }; // Private


    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = $$$1(selector)[0];
      }

      if (!parent) {
        parent = $$$1(element).closest("." + ClassName.ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $$$1.Event(Event.CLOSE);
      $$$1(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $$$1(element).removeClass(ClassName.SHOW);

      if (!Util.supportsTransitionEnd() || !$$$1(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);

        return;
      }

      $$$1(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(TRANSITION_DURATION);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $$$1(element).detach().trigger(Event.CLOSED).remove();
    }; // Static


    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $$$1(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);
    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = Alert._jQueryInterface;
  $$$1.fn[NAME].Constructor = Alert;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  return Alert;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Button = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'button';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.button';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var ClassName = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };
  var Selector = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLE: '[data-toggle="buttons"]',
    INPUT: 'input',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };
  var Event = {
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY + DATA_API_KEY + " " + ("blur" + EVENT_KEY + DATA_API_KEY)
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Button =
  /*#__PURE__*/
  function () {
    function Button(element) {
      this._element = element;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $$$1(this._element).closest(Selector.DATA_TOGGLE)[0];

      if (rootElement) {
        var input = $$$1(this._element).find(Selector.INPUT)[0];

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && $$$1(this._element).hasClass(ClassName.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = $$$1(rootElement).find(Selector.ACTIVE)[0];

              if (activeElement) {
                $$$1(activeElement).removeClass(ClassName.ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
              return;
            }

            input.checked = !$$$1(this._element).hasClass(ClassName.ACTIVE);
            $$$1(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (addAriaPressed) {
        this._element.setAttribute('aria-pressed', !$$$1(this._element).hasClass(ClassName.ACTIVE));
      }

      if (triggerChangeEvent) {
        $$$1(this._element).toggleClass(ClassName.ACTIVE);
      }
    };

    _proto.dispose = function dispose() {
      $$$1.removeData(this._element, DATA_KEY);
      this._element = null;
    }; // Static


    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        if (!data) {
          data = new Button(this);
          $$$1(this).data(DATA_KEY, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);
    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    event.preventDefault();
    var button = event.target;

    if (!$$$1(button).hasClass(ClassName.BUTTON)) {
      button = $$$1(button).closest(Selector.BUTTON);
    }

    Button._jQueryInterface.call($$$1(button), 'toggle');
  }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    var button = $$$1(event.target).closest(Selector.BUTTON)[0];
    $$$1(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = Button._jQueryInterface;
  $$$1.fn[NAME].Constructor = Button;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Button._jQueryInterface;
  };

  return Button;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Carousel = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'carousel';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.carousel';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var TRANSITION_DURATION = 600;
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean'
  };
  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };
  var Event = {
    SLIDE: "slide" + EVENT_KEY,
    SLID: "slid" + EVENT_KEY,
    KEYDOWN: "keydown" + EVENT_KEY,
    MOUSEENTER: "mouseenter" + EVENT_KEY,
    MOUSELEAVE: "mouseleave" + EVENT_KEY,
    TOUCHEND: "touchend" + EVENT_KEY,
    LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item'
  };
  var Selector = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Carousel =
  /*#__PURE__*/
  function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this._config = this._getConfig(config);
      this._element = $$$1(element)[0];
      this._indicatorsElement = $$$1(this._element).find(Selector.INDICATORS)[0];

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $$$1(this._element).is(':visible') && $$$1(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if ($$$1(this._element).find(Selector.NEXT_PREV)[0] && Util.supportsTransitionEnd()) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = $$$1(this._element).find(Selector.ACTIVE_ITEM)[0];

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $$$1(this._element).one(Event.SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $$$1(this._element).off(EVENT_KEY);
      $$$1.removeData(this._element, DATA_KEY);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    }; // Private


    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $$$1(this._element).on(Event.KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $$$1(this._element).on(Event.MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(Event.MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });

        if ('ontouchstart' in document.documentElement) {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          $$$1(this._element).on(Event.TOUCHEND, function () {
            _this2.pause();

            if (_this2.touchTimeout) {
              clearTimeout(_this2.touchTimeout);
            }

            _this2.touchTimeout = setTimeout(function (event) {
              return _this2.cycle(event);
            }, TOUCHEVENT_COMPAT_WAIT + _this2._config.interval);
          });
        }
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;

        default:
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = $$$1.makeArray($$$1(element).parent().find(Selector.ITEM));
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex($$$1(this._element).find(Selector.ACTIVE_ITEM)[0]);

      var slideEvent = $$$1.Event(Event.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $$$1(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        $$$1(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $$$1(nextIndicator).addClass(ClassName.ACTIVE);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this3 = this;

      var activeElement = $$$1(this._element).find(Selector.ACTIVE_ITEM)[0];

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName.LEFT;
        orderClassName = ClassName.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName.RIGHT;
        orderClassName = ClassName.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $$$1(nextElement).hasClass(ClassName.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $$$1.Event(Event.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if (Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.SLIDE)) {
        $$$1(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $$$1(activeElement).addClass(directionalClassName);
        $$$1(nextElement).addClass(directionalClassName);
        $$$1(activeElement).one(Util.TRANSITION_END, function () {
          $$$1(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName.ACTIVE);
          $$$1(activeElement).removeClass(ClassName.ACTIVE + " " + orderClassName + " " + directionalClassName);
          _this3._isSliding = false;
          setTimeout(function () {
            return $$$1(_this3._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        $$$1(activeElement).removeClass(ClassName.ACTIVE);
        $$$1(nextElement).addClass(ClassName.ACTIVE);
        this._isSliding = false;
        $$$1(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    }; // Static


    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        var _config = _extends({}, Default, $$$1(this).data());

        if (typeof config === 'object') {
          _config = _extends({}, _config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $$$1(this).data(DATA_KEY, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $$$1(selector)[0];

      if (!target || !$$$1(target).hasClass(ClassName.CAROUSEL)) {
        return;
      }

      var config = _extends({}, $$$1(target).data(), $$$1(this).data());
      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($$$1(target), config);

      if (slideIndex) {
        $$$1(target).data(DATA_KEY).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);
    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);
  $$$1(window).on(Event.LOAD_DATA_API, function () {
    $$$1(Selector.DATA_RIDE).each(function () {
      var $carousel = $$$1(this);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = Carousel._jQueryInterface;
  $$$1.fn[NAME].Constructor = Carousel;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Carousel._jQueryInterface;
  };

  return Carousel;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Collapse = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'collapse';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.collapse';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var TRANSITION_DURATION = 600;
  var Default = {
    toggle: true,
    parent: ''
  };
  var DefaultType = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var Event = {
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };
  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };
  var Selector = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Collapse =
  /*#__PURE__*/
  function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = $$$1.makeArray($$$1("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var tabToggles = $$$1(Selector.DATA_TOGGLE);

      for (var i = 0; i < tabToggles.length; i++) {
        var elem = tabToggles[i];
        var selector = Util.getSelectorFromElement(elem);

        if (selector !== null && $$$1(selector).filter(element).length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if ($$$1(this._element).hasClass(ClassName.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $$$1(this._element).hasClass(ClassName.SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = $$$1.makeArray($$$1(this._parent).find(Selector.ACTIVES).filter("[data-parent=\"" + this._config.parent + "\"]"));

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $$$1(actives).not(this._selector).data(DATA_KEY);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $$$1.Event(Event.SHOW);
      $$$1(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($$$1(actives).not(this._selector), 'hide');

        if (!activesData) {
          $$$1(actives).data(DATA_KEY, null);
        }
      }

      var dimension = this._getDimension();

      $$$1(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length > 0) {
        $$$1(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $$$1(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $$$1(_this._element).trigger(Event.SHOWN);
      };

      if (!Util.supportsTransitionEnd()) {
        complete();
        return;
      }

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$$$1(this._element).hasClass(ClassName.SHOW)) {
        return;
      }

      var startEvent = $$$1.Event(Event.HIDE);
      $$$1(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $$$1(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);

      if (this._triggerArray.length > 0) {
        for (var i = 0; i < this._triggerArray.length; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $$$1(selector);

            if (!$elem.hasClass(ClassName.SHOW)) {
              $$$1(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $$$1(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
      };

      this._element.style[dimension] = '';

      if (!Util.supportsTransitionEnd()) {
        complete();
        return;
      }

      $$$1(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $$$1.removeData(this._element, DATA_KEY);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    }; // Private


    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $$$1(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent = null;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = $$$1(this._config.parent)[0];
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      $$$1(parent).find(selector).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      if (element) {
        var isOpen = $$$1(element).hasClass(ClassName.SHOW);

        if (triggerArray.length > 0) {
          $$$1(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
        }
      }
    }; // Static


    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? $$$1(selector)[0] : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $$$1(this);
        var data = $this.data(DATA_KEY);

        var _config = _extends({}, Default, $this.data(), typeof config === 'object' && config);

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);
    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $$$1(this);
    var selector = Util.getSelectorFromElement(this);
    $$$1(selector).each(function () {
      var $target = $$$1(this);
      var data = $target.data(DATA_KEY);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = Collapse._jQueryInterface;
  $$$1.fn[NAME].Constructor = Collapse;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Collapse._jQueryInterface;
  };

  return Collapse;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Dropdown = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'dropdown';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.dropdown';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY,
    KEYUP_DATA_API: "keyup" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    POSITION_STATIC: 'position-static'
  };
  var Selector = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled)'
  };
  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
  };
  var Default = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent'
  };
  var DefaultType = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Dropdown =
  /*#__PURE__*/
  function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $$$1(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this._element);

      var isActive = $$$1(this._menu).hasClass(ClassName.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $$$1.Event(Event.SHOW, relatedTarget);
      $$$1(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap dropdown require Popper.js (https://popper.js.org)');
        }

        var element = this._element; // For dropup with alignment we use the parent as popper container

        if ($$$1(parent).hasClass(ClassName.DROPUP)) {
          if ($$$1(this._menu).hasClass(ClassName.MENULEFT) || $$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
            element = parent;
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $$$1(parent).addClass(ClassName.POSITION_STATIC);
        }

        this._popper = new Popper(element, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $$$1(parent).closest(Selector.NAVBAR_NAV).length === 0) {
        $$$1('body').children().on('mouseover', null, $$$1.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $$$1(this._menu).toggleClass(ClassName.SHOW);
      $$$1(parent).toggleClass(ClassName.SHOW).trigger($$$1.Event(Event.SHOWN, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $$$1.removeData(this._element, DATA_KEY);
      $$$1(this._element).off(EVENT_KEY);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    }; // Private


    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $$$1(this._element).on(Event.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, this.constructor.Default, $$$1(this._element).data(), config);
      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        this._menu = $$$1(parent).find(Selector.MENU)[0];
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $$$1(this._element).parent();
      var placement = AttachmentMap.BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(ClassName.DROPUP)) {
        placement = AttachmentMap.TOP;

        if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($parentDropdown.hasClass(ClassName.DROPRIGHT)) {
        placement = AttachmentMap.RIGHT;
      } else if ($parentDropdown.hasClass(ClassName.DROPLEFT)) {
        placement = AttachmentMap.LEFT;
      } else if ($$$1(this._menu).hasClass(ClassName.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $$$1(this._element).closest('.navbar').length > 0;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var _this2 = this;

      var offsetConf = {};

      if (typeof this._config.offset === 'function') {
        offsetConf.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this2._config.offset(data.offsets) || {});
          return data;
        };
      } else {
        offsetConf.offset = this._config.offset;
      }

      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: offsetConf,
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return popperConfig;
    }; // Static


    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $$$1(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = $$$1.makeArray($$$1(Selector.DATA_TOGGLE));

      for (var i = 0; i < toggles.length; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $$$1(toggles[i]).data(DATA_KEY);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$$$1(parent).hasClass(ClassName.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $$$1.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $$$1.Event(Event.HIDE, relatedTarget);
        $$$1(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $$$1('body').children().off('mouseover', null, $$$1.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');
        $$$1(dropdownMenu).removeClass(ClassName.SHOW);
        $$$1(parent).removeClass(ClassName.SHOW).trigger($$$1.Event(Event.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = $$$1(selector)[0];
      }

      return parent || element.parentNode;
    }; // eslint-disable-next-line complexity


    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $$$1(event.target).closest(Selector.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $$$1(this).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $$$1(parent).hasClass(ClassName.SHOW);

      if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          var toggle = $$$1(parent).find(Selector.DATA_TOGGLE)[0];
          $$$1(toggle).trigger('focus');
        }

        $$$1(this).trigger('click');
        return;
      }

      var items = $$$1(parent).find(Selector.VISIBLE_ITEMS).get();

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }]);
    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + " " + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($$$1(this), 'toggle');
  }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = Dropdown._jQueryInterface;
  $$$1.fn[NAME].Constructor = Dropdown;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Dropdown._jQueryInterface;
  };

  return Dropdown;
}($, Popper);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Modal = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'modal';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.modal';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var TRANSITION_DURATION = 300;
  var BACKDROP_TRANSITION_DURATION = 150;
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    RESIZE: "resize" + EVENT_KEY,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top',
    NAVBAR_TOGGLER: '.navbar-toggler'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Modal =
  /*#__PURE__*/
  function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = $$$1(element).find(Selector.DIALOG)[0];
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._originalBodyPadding = 0;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isTransitioning || this._isShown) {
        return;
      }

      if (Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $$$1.Event(Event.SHOW, {
        relatedTarget: relatedTarget
      });
      $$$1(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      $$$1(document.body).addClass(ClassName.OPEN);

      this._setEscapeEvent();

      this._setResizeEvent();

      $$$1(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $$$1(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
        $$$1(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
          if ($$$1(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (this._isTransitioning || !this._isShown) {
        return;
      }

      var hideEvent = $$$1.Event(Event.HIDE);
      $$$1(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $$$1(document).off(Event.FOCUSIN);
      $$$1(this._element).removeClass(ClassName.SHOW);
      $$$1(this._element).off(Event.CLICK_DISMISS);
      $$$1(this._dialog).off(Event.MOUSEDOWN_DISMISS);

      if (transition) {
        $$$1(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      $$$1.removeData(this._element, DATA_KEY);
      $$$1(window, document, this._element, this._backdrop).off(EVENT_KEY);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    }; // Private


    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this3 = this;

      var transition = Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.scrollTop = 0;

      if (transition) {
        Util.reflow(this._element);
      }

      $$$1(this._element).addClass(ClassName.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $$$1.Event(Event.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this3._config.focus) {
          _this3._element.focus();
        }

        _this3._isTransitioning = false;
        $$$1(_this3._element).trigger(shownEvent);
      };

      if (transition) {
        $$$1(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this4 = this;

      $$$1(document).off(Event.FOCUSIN) // Guard against infinite focus loop
      .on(Event.FOCUSIN, function (event) {
        if (document !== event.target && _this4._element !== event.target && $$$1(_this4._element).has(event.target).length === 0) {
          _this4._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this5 = this;

      if (this._isShown && this._config.keyboard) {
        $$$1(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE) {
            event.preventDefault();

            _this5.hide();
          }
        });
      } else if (!this._isShown) {
        $$$1(this._element).off(Event.KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $$$1(window).on(Event.RESIZE, function (event) {
          return _this6.handleUpdate(event);
        });
      } else {
        $$$1(window).off(Event.RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this7 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $$$1(document.body).removeClass(ClassName.OPEN);

        _this7._resetAdjustments();

        _this7._resetScrollbar();

        $$$1(_this7._element).trigger(Event.HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $$$1(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this8 = this;

      var animate = $$$1(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

      if (this._isShown && this._config.backdrop) {
        var doAnimate = Util.supportsTransitionEnd() && animate;
        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName.BACKDROP;

        if (animate) {
          $$$1(this._backdrop).addClass(animate);
        }

        $$$1(this._backdrop).appendTo(document.body);
        $$$1(this._element).on(Event.CLICK_DISMISS, function (event) {
          if (_this8._ignoreBackdropClick) {
            _this8._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this8._config.backdrop === 'static') {
            _this8._element.focus();
          } else {
            _this8.hide();
          }
        });

        if (doAnimate) {
          Util.reflow(this._backdrop);
        }

        $$$1(this._backdrop).addClass(ClassName.SHOW);

        if (!callback) {
          return;
        }

        if (!doAnimate) {
          callback();
          return;
        }

        $$$1(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
      } else if (!this._isShown && this._backdrop) {
        $$$1(this._backdrop).removeClass(ClassName.SHOW);

        var callbackRemove = function callbackRemove() {
          _this8._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if (Util.supportsTransitionEnd() && $$$1(this._element).hasClass(ClassName.FADE)) {
          $$$1(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    }; // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------


    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this9 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        // Adjust fixed content padding
        $$$1(Selector.FIXED_CONTENT).each(function (index, element) {
          var actualPadding = $$$1(element)[0].style.paddingRight;
          var calculatedPadding = $$$1(element).css('padding-right');
          $$$1(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $$$1(Selector.STICKY_CONTENT).each(function (index, element) {
          var actualMargin = $$$1(element)[0].style.marginRight;
          var calculatedMargin = $$$1(element).css('margin-right');
          $$$1(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
        }); // Adjust navbar-toggler margin

        $$$1(Selector.NAVBAR_TOGGLER).each(function (index, element) {
          var actualMargin = $$$1(element)[0].style.marginRight;
          var calculatedMargin = $$$1(element).css('margin-right');
          $$$1(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) + _this9._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $$$1('body').css('padding-right');
        $$$1('body').data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      $$$1(Selector.FIXED_CONTENT).each(function (index, element) {
        var padding = $$$1(element).data('padding-right');

        if (typeof padding !== 'undefined') {
          $$$1(element).css('padding-right', padding).removeData('padding-right');
        }
      }); // Restore sticky content and navbar-toggler margin

      $$$1(Selector.STICKY_CONTENT + ", " + Selector.NAVBAR_TOGGLER).each(function (index, element) {
        var margin = $$$1(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $$$1(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $$$1('body').data('padding-right');

      if (typeof padding !== 'undefined') {
        $$$1('body').css('padding-right', padding).removeData('padding-right');
      }
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    }; // Static


    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        var _config = _extends({}, Modal.Default, $$$1(this).data(), typeof config === 'object' && config);

        if (!data) {
          data = new Modal(this, _config);
          $$$1(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);
    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var _this10 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = $$$1(selector)[0];
    }

    var config = $$$1(target).data(DATA_KEY) ? 'toggle' : _extends({}, $$$1(target).data(), $$$1(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $$$1(target).one(Event.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event.HIDDEN, function () {
        if ($$$1(_this10).is(':visible')) {
          _this10.focus();
        }
      });
    });

    Modal._jQueryInterface.call($$$1(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = Modal._jQueryInterface;
  $$$1.fn[NAME].Constructor = Modal;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Modal._jQueryInterface;
  };

  return Modal;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tooltip = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'tooltip';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.tooltip';
  var EVENT_KEY = "." + DATA_KEY;
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var TRANSITION_DURATION = 150;
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DefaultType = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent'
  };
  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    INSERTED: "inserted" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    FOCUSOUT: "focusout" + EVENT_KEY,
    MOUSEENTER: "mouseenter" + EVENT_KEY,
    MOUSELEAVE: "mouseleave" + EVENT_KEY
  };
  var ClassName = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };
  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Tooltip =
  /*#__PURE__*/
  function () {
    function Tooltip(element, config) {
      /**
       * Check for Popper dependency
       * Popper - https://popper.js.org
       */
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap tooltips require Popper.js (https://popper.js.org)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $$$1(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $$$1(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($$$1(this.getTipElement()).hasClass(ClassName.SHOW)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $$$1.removeData(this.element, this.constructor.DATA_KEY);
      $$$1(this.element).off(this.constructor.EVENT_KEY);
      $$$1(this.element).closest('.modal').off('hide.bs.modal');

      if (this.tip) {
        $$$1(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper !== null) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($$$1(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $$$1.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $$$1(this.element).trigger(showEvent);
        var isInTheDom = $$$1.contains(this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $$$1(tip).addClass(ClassName.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);
        var container = this.config.container === false ? document.body : $$$1(this.config.container);
        $$$1(tip).data(this.constructor.DATA_KEY, this);

        if (!$$$1.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $$$1(tip).appendTo(container);
        }

        $$$1(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, {
          placement: attachment,
          modifiers: {
            offset: {
              offset: this.config.offset
            },
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Selector.ARROW
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(data) {
            if (data.originalPlacement !== data.placement) {
              _this._handlePopperPlacementChange(data);
            }
          },
          onUpdate: function onUpdate(data) {
            _this._handlePopperPlacementChange(data);
          }
        });
        $$$1(tip).addClass(ClassName.SHOW); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $$$1('body').children().on('mouseover', null, $$$1.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $$$1(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this._leave(null, _this);
          }
        };

        if (Util.supportsTransitionEnd() && $$$1(this.tip).hasClass(ClassName.FADE)) {
          $$$1(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $$$1.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $$$1(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $$$1(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $$$1(tip).removeClass(ClassName.SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $$$1('body').children().off('mouseover', null, $$$1.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if (Util.supportsTransitionEnd() && $$$1(this.tip).hasClass(ClassName.FADE)) {
        $$$1(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    }; // Protected


    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $$$1(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $$$1(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $$$1(this.getTipElement());
      this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());
      $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      var html = this.config.html;

      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (html) {
          if (!$$$1(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($$$1(content).text());
        }
      } else {
        $element[html ? 'html' : 'text'](content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    }; // Private


    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this3 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $$$1(_this3.element).on(_this3.constructor.Event.CLICK, _this3.config.selector, function (event) {
            return _this3.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSEENTER : _this3.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSELEAVE : _this3.constructor.Event.FOCUSOUT;
          $$$1(_this3.element).on(eventIn, _this3.config.selector, function (event) {
            return _this3._enter(event);
          }).on(eventOut, _this3.config.selector, function (event) {
            return _this3._leave(event);
          });
        }

        $$$1(_this3.element).closest('.modal').on('hide.bs.modal', function () {
          return _this3.hide();
        });
      });

      if (this.config.selector) {
        this.config = _extends({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $$$1(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $$$1(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($$$1(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $$$1(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $$$1(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, this.constructor.Default, $$$1(this.element).data(), config);

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $$$1(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(data) {
      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(data.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $$$1(tip).removeClass(ClassName.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    }; // Static


    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $$$1(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }]);
    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $$$1.fn[NAME] = Tooltip._jQueryInterface;
  $$$1.fn[NAME].Constructor = Tooltip;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tooltip._jQueryInterface;
  };

  return Tooltip;
}($, Popper);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Popover = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'popover';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.popover';
  var EVENT_KEY = "." + DATA_KEY;
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var CLASS_PREFIX = 'bs-popover';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var Default = _extends({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });
  var DefaultType = _extends({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });
  var ClassName = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector = {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  };
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    INSERTED: "inserted" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    FOCUSOUT: "focusout" + EVENT_KEY,
    MOUSEENTER: "mouseenter" + EVENT_KEY,
    MOUSELEAVE: "mouseleave" + EVENT_KEY
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Popover =
  /*#__PURE__*/
  function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $$$1(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $$$1(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $$$1(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(Selector.TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(Selector.CONTENT), content);
      $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
    }; // Private


    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $$$1(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    }; // Static


    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /destroy|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $$$1(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }]);
    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $$$1.fn[NAME] = Popover._jQueryInterface;
  $$$1.fn[NAME].Constructor = Popover;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Popover._jQueryInterface;
  };

  return Popover;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var ScrollSpy = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'scrollspy';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.scrollspy';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var Default = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var Event = {
    ACTIVATE: "activate" + EVENT_KEY,
    SCROLL: "scroll" + EVENT_KEY,
    LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
  };
  var Selector = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    NAV_ITEMS: '.nav-item',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };
  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var ScrollSpy =
  /*#__PURE__*/
  function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + Selector.NAV_LINKS + "," + (this._config.target + " " + Selector.LIST_ITEMS + ",") + (this._config.target + " " + Selector.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $$$1(this._scrollElement).on(Event.SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = $$$1.makeArray($$$1(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = $$$1(targetSelector)[0];
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$$$1(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $$$1.removeData(this._element, DATA_KEY);
      $$$1(this._scrollElement).off(EVENT_KEY);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    }; // Private


    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, Default, config);

      if (typeof config.target !== 'string') {
        var id = $$$1(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME);
          $$$1(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(','); // eslint-disable-next-line arrow-body-style


      queries = queries.map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + (selector + "[href=\"" + target + "\"]");
      });
      var $link = $$$1(queries.join(','));

      if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
        $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
        $link.addClass(ClassName.ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(ClassName.ACTIVE); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_LINKS + ", " + Selector.LIST_ITEMS).addClass(ClassName.ACTIVE); // Handle special case when .nav-link is inside .nav-item

        $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_ITEMS).children(Selector.NAV_LINKS).addClass(ClassName.ACTIVE);
      }

      $$$1(this._scrollElement).trigger(Event.ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      $$$1(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
    }; // Static


    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $$$1(this).data(DATA_KEY);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $$$1(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);
    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(window).on(Event.LOAD_DATA_API, function () {
    var scrollSpys = $$$1.makeArray($$$1(Selector.DATA_SPY));

    for (var i = scrollSpys.length; i--;) {
      var $spy = $$$1(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = ScrollSpy._jQueryInterface;
  $$$1.fn[NAME].Constructor = ScrollSpy;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return ScrollSpy._jQueryInterface;
  };

  return ScrollSpy;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tab = function ($$$1) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'tab';
  var VERSION = '4.0.0';
  var DATA_KEY = 'bs.tab';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $$$1.fn[NAME];
  var TRANSITION_DURATION = 150;
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector = {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVE_UL: '> li > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Tab =
  /*#__PURE__*/
  function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $$$1(this._element).hasClass(ClassName.ACTIVE) || $$$1(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var target;
      var previous;
      var listElement = $$$1(this._element).closest(Selector.NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' ? Selector.ACTIVE_UL : Selector.ACTIVE;
        previous = $$$1.makeArray($$$1(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $$$1.Event(Event.HIDE, {
        relatedTarget: this._element
      });
      var showEvent = $$$1.Event(Event.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $$$1(previous).trigger(hideEvent);
      }

      $$$1(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = $$$1(selector)[0];
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $$$1.Event(Event.HIDDEN, {
          relatedTarget: _this._element
        });
        var shownEvent = $$$1.Event(Event.SHOWN, {
          relatedTarget: previous
        });
        $$$1(previous).trigger(hiddenEvent);
        $$$1(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $$$1.removeData(this._element, DATA_KEY);
      this._element = null;
    }; // Private


    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements;

      if (container.nodeName === 'UL') {
        activeElements = $$$1(container).find(Selector.ACTIVE_UL);
      } else {
        activeElements = $$$1(container).children(Selector.ACTIVE);
      }

      var active = activeElements[0];
      var isTransitioning = callback && Util.supportsTransitionEnd() && active && $$$1(active).hasClass(ClassName.FADE);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        $$$1(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $$$1(active).removeClass(ClassName.SHOW + " " + ClassName.ACTIVE);
        var dropdownChild = $$$1(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $$$1(dropdownChild).removeClass(ClassName.ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $$$1(element).addClass(ClassName.ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);
      $$$1(element).addClass(ClassName.SHOW);

      if (element.parentNode && $$$1(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
        var dropdownElement = $$$1(element).closest(Selector.DROPDOWN)[0];

        if (dropdownElement) {
          $$$1(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    }; // Static


    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $$$1(this);
        var data = $this.data(DATA_KEY);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);
    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $$$1(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($$$1(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $$$1.fn[NAME] = Tab._jQueryInterface;
  $$$1.fn[NAME].Constructor = Tab;

  $$$1.fn[NAME].noConflict = function () {
    $$$1.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tab._jQueryInterface;
  };

  return Tab;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function ($$$1) {
  if (typeof $$$1 === 'undefined') {
    throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
  }

  var version = $$$1.fn.jquery.split(' ')[0].split('.');
  var minMajor = 1;
  var ltMajor = 2;
  var minMinor = 9;
  var minPatch = 1;
  var maxMajor = 4;

  if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
    throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
  }
})($);

exports.Util = Util;
exports.Alert = Alert;
exports.Button = Button;
exports.Carousel = Carousel;
exports.Collapse = Collapse;
exports.Dropdown = Dropdown;
exports.Modal = Modal;
exports.Popover = Popover;
exports.Scrollspy = ScrollSpy;
exports.Tab = Tab;
exports.Tooltip = Tooltip;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bootstrap.js.map

;/*! v2.6.6-363caf5, 2018-02-14T14:22:17Z */
!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(b,c,d){"use strict";var e={};e.encode=function(a){for(var b=[],c=0;c<a.length;++c){var d=a.charCodeAt(c);d<128?b.push(d):d<2048?(b.push(192|d>>6),b.push(128|63&d)):d<65536?(b.push(224|d>>12),b.push(128|63&d>>6),b.push(128|63&d)):(b.push(240|d>>18),b.push(128|63&d>>12),b.push(128|63&d>>6),b.push(128|63&d))}return b},e.decode=function(a){for(var b=[],c=0;c<a.length;){var d=a[c++];d<128||(d<224?(d=(31&d)<<6,d|=63&a[c++]):d<240?(d=(15&d)<<12,d|=(63&a[c++])<<6,d|=63&a[c++]):(d=(7&d)<<18,d|=(63&a[c++])<<12,d|=(63&a[c++])<<6,d|=63&a[c++])),b.push(String.fromCharCode(d))}return b.join("")};var f={};!function(b){var c=function(a){for(var c=0,d=[],e=0|a.length/3;0<e--;){var f=(a[c]<<16)+(a[c+1]<<8)+a[c+2];c+=3,d.push(b.charAt(63&f>>18)),d.push(b.charAt(63&f>>12)),d.push(b.charAt(63&f>>6)),d.push(b.charAt(63&f))}if(2==a.length-c){var f=(a[c]<<16)+(a[c+1]<<8);d.push(b.charAt(63&f>>18)),d.push(b.charAt(63&f>>12)),d.push(b.charAt(63&f>>6)),d.push("=")}else if(1==a.length-c){var f=a[c]<<16;d.push(b.charAt(63&f>>18)),d.push(b.charAt(63&f>>12)),d.push("==")}return d.join("")},d=function(){for(var a=[],c=0;c<b.length;++c)a[b.charCodeAt(c)]=c;return a["=".charCodeAt(0)]=0,a}(),g=function(a){for(var b=0,c=[],e=0|a.length/4;0<e--;){var f=(d[a.charCodeAt(b)]<<18)+(d[a.charCodeAt(b+1)]<<12)+(d[a.charCodeAt(b+2)]<<6)+d[a.charCodeAt(b+3)];c.push(255&f>>16),c.push(255&f>>8),c.push(255&f),b+=4}return c&&("="==a.charAt(b-2)?(c.pop(),c.pop()):"="==a.charAt(b-1)&&c.pop()),c},h={};h.encode=function(a){for(var b=[],c=0;c<a.length;++c)b.push(a.charCodeAt(c));return b},h.decode=function(b){for(var c=0;c<s.length;++c)a[c]=String.fromCharCode(a[c]);return a.join("")},f.decodeArray=function(a){var b=g(a);return new Uint8Array(b)},f.encodeASCII=function(a){var b=h.encode(a);return c(b)},f.decodeASCII=function(a){var b=g(a);return h.decode(b)},f.encode=function(a){var b=e.encode(a);return c(b)},f.decode=function(a){var b=g(a);return e.decode(b)}}("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),void 0!==d&&(d.decode=f.decode,d.decodeArray=f.decodeArray,d.encode=f.encode)},{}],2:[function(a,b,c){"use strict";!function(a){var b={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499},c=function(a){var c=a;return b.hasOwnProperty(a)&&(c=b[a]),String.fromCharCode(c)},d=15,e=32,f={17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14},g={17:2,18:4,21:6,22:8,23:10,19:13,20:15},h={25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14},i={25:2,26:4,29:6,30:8,31:10,27:13,28:15},j=["white","green","blue","cyan","red","yellow","magenta","black","transparent"],k={verboseFilter:{DATA:3,DEBUG:3,INFO:2,WARNING:2,TEXT:1,ERROR:0},time:null,verboseLevel:0,setTime:function(a){this.time=a},log:function(a,b){var c=this.verboseFilter[a];this.verboseLevel>=c&&console.log(this.time+" ["+a+"] "+b)}},l=function(a){for(var b=[],c=0;c<a.length;c++)b.push(a[c].toString(16));return b},m=function(a,b,c,d,e){this.foreground=a||"white",this.underline=b||!1,this.italics=c||!1,this.background=d||"black",this.flash=e||!1};m.prototype={reset:function(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1},setStyles:function(a){for(var b=["foreground","underline","italics","background","flash"],c=0;c<b.length;c++){var d=b[c];a.hasOwnProperty(d)&&(this[d]=a[d])}},isDefault:function(){return"white"===this.foreground&&!this.underline&&!this.italics&&"black"===this.background&&!this.flash},equals:function(a){return this.foreground===a.foreground&&this.underline===a.underline&&this.italics===a.italics&&this.background===a.background&&this.flash===a.flash},copy:function(a){this.foreground=a.foreground,this.underline=a.underline,this.italics=a.italics,this.background=a.background,this.flash=a.flash},toString:function(){return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash}};var n=function(a,b,c,d,e,f){this.uchar=a||" ",this.penState=new m(b,c,d,e,f)};n.prototype={reset:function(){this.uchar=" ",this.penState.reset()},setChar:function(a,b){this.uchar=a,this.penState.copy(b)},setPenState:function(a){this.penState.copy(a)},equals:function(a){return this.uchar===a.uchar&&this.penState.equals(a.penState)},copy:function(a){this.uchar=a.uchar,this.penState.copy(a.penState)},isEmpty:function(){return" "===this.uchar&&this.penState.isDefault()}};var o=function(){this.chars=[];for(var a=0;a<e;a++)this.chars.push(new n);this.pos=0,this.currPenState=new m};o.prototype={equals:function(a){for(var b=!0,c=0;c<e;c++)if(!this.chars[c].equals(a.chars[c])){b=!1;break}return b},copy:function(a){for(var b=0;b<e;b++)this.chars[b].copy(a.chars[b])},isEmpty:function(){for(var a=!0,b=0;b<e;b++)if(!this.chars[b].isEmpty()){a=!1;break}return a},setCursor:function(a){this.pos!==a&&(this.pos=a),this.pos<0?(k.log("ERROR","Negative cursor position "+this.pos),this.pos=0):this.pos>e&&(k.log("ERROR","Too large cursor position "+this.pos),this.pos=e)},moveCursor:function(a){var b=this.pos+a;if(a>1)for(var c=this.pos+1;c<b+1;c++)this.chars[c].setPenState(this.currPenState);this.setCursor(b)},backSpace:function(){this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)},insertChar:function(a){a>=144&&this.backSpace();var b=c(a);if(this.pos>=e)return void k.log("ERROR","Cannot insert "+a.toString(16)+" ("+b+") at position "+this.pos+". Skipping it!");this.chars[this.pos].setChar(b,this.currPenState),this.moveCursor(1)},clearFromPos:function(a){var b;for(b=a;b<e;b++)this.chars[b].reset()},clear:function(){this.clearFromPos(0),this.pos=0,this.currPenState.reset()},clearToEndOfRow:function(){this.clearFromPos(this.pos)},getTextString:function(){for(var a=[],b=!0,c=0;c<e;c++){var d=this.chars[c].uchar;" "!==d&&(b=!1),a.push(d)}return b?"":a.join("")},setPenStyles:function(a){this.currPenState.setStyles(a),this.chars[this.pos].setPenState(this.currPenState)}};var p=function(){this.rows=[];for(var a=0;a<d;a++)this.rows.push(new o);this.currRow=d-1,this.nrRollUpRows=null,this.reset()};p.prototype={reset:function(){for(var a=0;a<d;a++)this.rows[a].clear();this.currRow=d-1},equals:function(a){for(var b=!0,c=0;c<d;c++)if(!this.rows[c].equals(a.rows[c])){b=!1;break}return b},copy:function(a){for(var b=0;b<d;b++)this.rows[b].copy(a.rows[b])},isEmpty:function(){for(var a=!0,b=0;b<d;b++)if(!this.rows[b].isEmpty()){a=!1;break}return a},backSpace:function(){this.rows[this.currRow].backSpace()},clearToEndOfRow:function(){this.rows[this.currRow].clearToEndOfRow()},insertChar:function(a){this.rows[this.currRow].insertChar(a)},setPen:function(a){this.rows[this.currRow].setPenStyles(a)},moveCursor:function(a){this.rows[this.currRow].moveCursor(a)},setCursor:function(a){k.log("INFO","setCursor: "+a),this.rows[this.currRow].setCursor(a)},setPAC:function(a){k.log("INFO","pacData = "+JSON.stringify(a));var b=a.row-1;this.nrRollUpRows&&b<this.nrRollUpRows-1&&(b=this.nrRollUpRows-1),this.currRow=b;var c=this.rows[this.currRow];if(null!==a.indent){var d=a.indent,e=Math.max(d-1,0);c.setCursor(a.indent),a.color=c.chars[e].penState.foreground}var f={foreground:a.color,underline:a.underline,italics:a.italics,background:"black",flash:!1};this.setPen(f)},setBkgData:function(a){k.log("INFO","bkgData = "+JSON.stringify(a)),this.backSpace(),this.setPen(a),this.insertChar(32)},setRollUpRows:function(a){this.nrRollUpRows=a},rollUp:function(){if(null===this.nrRollUpRows)return void k.log("DEBUG","roll_up but nrRollUpRows not set yet");k.log("TEXT",this.getDisplayText());var a=this.currRow+1-this.nrRollUpRows,b=this.rows.splice(a,1)[0];b.clear(),this.rows.splice(this.currRow,0,b),k.log("INFO","Rolling up")},getDisplayText:function(a){a=a||!1;for(var b=[],c="",e=-1,f=0;f<d;f++){var g=this.rows[f].getTextString();g&&(e=f+1,a?b.push("Row "+e+': "'+g+'"'):b.push(g.trim()))}return b.length>0&&(c=a?"["+b.join(" | ")+"]":b.join("\n")),c},getTextAndFormat:function(){return this.rows}};var q=function(a,b){this.chNr=a,this.outputFilter=b,this.mode=null,this.verbose=0,this.displayedMemory=new p,this.nonDisplayedMemory=new p,this.lastOutputScreen=new p,this.currRollUpRow=this.displayedMemory.rows[d-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null};q.prototype={modes:["MODE_ROLL-UP","MODE_POP-ON","MODE_PAINT-ON","MODE_TEXT"],reset:function(){this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.currRollUpRow=this.displayedMemory.rows[d-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.lastCueEndTime=null},getHandler:function(){return this.outputFilter},setHandler:function(a){this.outputFilter=a},setPAC:function(a){this.writeScreen.setPAC(a)},setBkgData:function(a){this.writeScreen.setBkgData(a)},setMode:function(a){a!==this.mode&&(this.mode=a,k.log("INFO","MODE="+a),"MODE_POP-ON"==this.mode?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset()),"MODE_ROLL-UP"!==this.mode&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=a)},insertChars:function(a){for(var b=0;b<a.length;b++)this.writeScreen.insertChar(a[b]);var c=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";k.log("INFO",c+": "+this.writeScreen.getDisplayText(!0)),"MODE_PAINT-ON"!==this.mode&&"MODE_ROLL-UP"!==this.mode||(k.log("TEXT","DISPLAYED: "+this.displayedMemory.getDisplayText(!0)),this.outputDataUpdate())},cc_RCL:function(){k.log("INFO","RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")},cc_BS:function(){k.log("INFO","BS - BackSpace"),"MODE_TEXT"!==this.mode&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())},cc_AOF:function(){},cc_AON:function(){},cc_DER:function(){k.log("INFO","DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()},cc_RU:function(a){k.log("INFO","RU("+a+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(a)},cc_FON:function(){k.log("INFO","FON - Flash On"),this.writeScreen.setPen({flash:!0})},cc_RDC:function(){k.log("INFO","RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")},cc_TR:function(){k.log("INFO","TR"),this.setMode("MODE_TEXT")},cc_RTD:function(){k.log("INFO","RTD"),this.setMode("MODE_TEXT")},cc_EDM:function(){k.log("INFO","EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate()},cc_CR:function(){k.log("CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate()},cc_ENM:function(){k.log("INFO","ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()},cc_EOC:function(){if(k.log("INFO","EOC - End Of Caption"),"MODE_POP-ON"===this.mode){var a=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=a,this.writeScreen=this.nonDisplayedMemory,k.log("TEXT","DISP: "+this.displayedMemory.getDisplayText())}this.outputDataUpdate()},cc_TO:function(a){k.log("INFO","TO("+a+") - Tab Offset"),this.writeScreen.moveCursor(a)},cc_MIDROW:function(a){var b={flash:!1};if(b.underline=a%2==1,b.italics=a>=46,b.italics)b.foreground="white";else{var c=Math.floor(a/2)-16,d=["white","green","blue","cyan","red","yellow","magenta"];b.foreground=d[c]}k.log("INFO","MIDROW: "+JSON.stringify(b)),this.writeScreen.setPen(b)},outputDataUpdate:function(){var a=k.time;null!==a&&this.outputFilter&&(this.outputFilter.updateData&&this.outputFilter.updateData(a,this.displayedMemory),null!==this.cueStartTime||this.displayedMemory.isEmpty()?this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,a,this.lastOutputScreen),this.cueStartTime=this.displayedMemory.isEmpty()?null:a):this.cueStartTime=a,this.lastOutputScreen.copy(this.displayedMemory))},cueSplitAtTime:function(a){this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,a,this.displayedMemory),this.cueStartTime=a))}};var r=function(a,b,c){this.field=a||1,this.outputs=[b,c],this.channels=[new q(1,b),new q(2,c)],this.currChNr=-1,this.lastCmdA=null,this.lastCmdB=null,this.bufferedData=[],this.startTime=null,this.lastTime=null,this.dataCounters={padding:0,char:0,cmd:0,other:0}};r.prototype={getHandler:function(a){return this.channels[a].getHandler()},setHandler:function(a,b){this.channels[a].setHandler(b)},addData:function(a,b){var c,d,e,f=!1;this.lastTime=a,k.setTime(a);for(var g=0;g<b.length;g+=2)if(d=127&b[g],e=127&b[g+1],d>=16&&d<=31&&d===this.lastCmdA&&e===this.lastCmdB)this.lastCmdA=null,this.lastCmdB=null,k.log("DEBUG","Repeated command ("+l([d,e])+") is dropped");else if(0!==d||0!==e){if(k.log("DATA","["+l([b[g],b[g+1]])+"] -> ("+l([d,e])+")"),c=this.parseCmd(d,e),c||(c=this.parseMidrow(d,e)),c||(c=this.parsePAC(d,e)),c||(c=this.parseBackgroundAttributes(d,e)),!c&&(f=this.parseChars(d,e)))if(this.currChNr&&this.currChNr>=0){var h=this.channels[this.currChNr-1];h.insertChars(f)}else k.log("WARNING","No channel found yet. TEXT-MODE?");c?this.dataCounters.cmd+=2:f?this.dataCounters.char+=2:(this.dataCounters.other+=2,k.log("WARNING","Couldn't parse cleaned data "+l([d,e])+" orig: "+l([b[g],b[g+1]])))}else this.dataCounters.padding+=2},parseCmd:function(a,b){var c=null,d=(20===a||21===a||28===a||29===a)&&32<=b&&b<=47,e=(23===a||31===a)&&33<=b&&b<=35;if(!d&&!e)return!1;c=20===a||21===a||23===a?1:2;var f=this.channels[c-1];return 20===a||21===a||28===a||29===a?32===b?f.cc_RCL():33===b?f.cc_BS():34===b?f.cc_AOF():35===b?f.cc_AON():36===b?f.cc_DER():37===b?f.cc_RU(2):38===b?f.cc_RU(3):39===b?f.cc_RU(4):40===b?f.cc_FON():41===b?f.cc_RDC():42===b?f.cc_TR():43===b?f.cc_RTD():44===b?f.cc_EDM():45===b?f.cc_CR():46===b?f.cc_ENM():47===b&&f.cc_EOC():f.cc_TO(b-32),this.lastCmdA=a,this.lastCmdB=b,this.currChNr=c,!0},parseMidrow:function(a,b){var c=null;if((17===a||25===a)&&32<=b&&b<=47){if((c=17===a?1:2)!==this.currChNr)return k.log("ERROR","Mismatch channel in midrow parsing"),!1;var d=this.channels[c-1];return d.insertChars([32]),d.cc_MIDROW(b),k.log("DEBUG","MIDROW ("+l([a,b])+")"),this.lastCmdA=a,this.lastCmdB=b,!0}return!1},parsePAC:function(a,b){var c=null,d=null,e=(17<=a&&a<=23||25<=a&&a<=31)&&64<=b&&b<=127,j=(16===a||24===a)&&64<=b&&b<=95;if(!e&&!j)return!1;c=a<=23?1:2,d=64<=b&&b<=95?1===c?f[a]:h[a]:1===c?g[a]:i[a];var k=this.interpretPAC(d,b);return this.channels[c-1].setPAC(k),this.lastCmdA=a,this.lastCmdB=b,this.currChNr=c,!0},interpretPAC:function(a,b){var c=b,d={color:null,italics:!1,indent:null,underline:!1,row:a};return c=b>95?b-96:b-64,d.underline=1==(1&c),c<=13?d.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(c/2)]:c<=15?(d.italics=!0,d.color="white"):d.indent=4*Math.floor((c-16)/2),d},parseChars:function(a,b){var d=null,e=null,f=null;if(a>=25?(d=2,f=a-8):(d=1,f=a),17<=f&&f<=19){var g=b;g=17===f?b+80:18===f?b+112:b+144,k.log("INFO","Special char '"+c(g)+"' in channel "+d),e=[g],this.lastCmdA=a,this.lastCmdB=b}else 32<=a&&a<=127&&(e=0===b?[a]:[a,b],this.lastCmdA=null,this.lastCmdB=null);if(e){var h=l(e);k.log("DEBUG","Char codes =  "+h.join(","))}return e},parseBackgroundAttributes:function(a,b){var c,d,e,f,g=(16===a||24===a)&&32<=b&&b<=47,h=(23===a||31===a)&&45<=b&&b<=47;return!(!g&&!h)&&(c={},16===a||24===a?(d=Math.floor((b-32)/2),c.background=j[d],b%2==1&&(c.background=c.background+"_semi")):45===b?c.background="transparent":(c.foreground="black",47===b&&(c.underline=!0)),e=a<24?1:2,f=this.channels[e-1],f.setBkgData(c),this.lastCmdA=a,this.lastCmdB=b,!0)},reset:function(){for(var a=0;a<this.channels.length;a++)this.channels[a]&&this.channels[a].reset();this.lastCmdA=null,this.lastCmdB=null},cueSplitAtTime:function(a){for(var b=0;b<this.channels.length;b++)this.channels[b]&&this.channels[b].cueSplitAtTime(a)}};var s=function(a,b,c){for(var d=0,e=b,f=[],g=function(a,b,c,d){if(4!==a||b<8)return null;var e=c.getUint8(d),f=c.getUint16(d+1),g=c.getUint32(d+3),h=c.getUint8(d+7);return 181==e&&49==f&&1195456820==g&&3==h};e<b+c;){if(d=a.getUint32(e),6===(31&a.getUint8(e+4)))for(var h=e+5,i=-1;h<e+4+d-1;){i=0;for(var j=255;255===j;)j=a.getUint8(h),i+=j,h++;var k=0;for(j=255;255===j;)j=a.getUint8(h),k+=j,h++;g(i,k,a,h)&&f.push([h,k]),h+=k}e+=d+4}return f},t=function(a,b){var c=b[0],d=[[],[]];c+=8;var e=31&a.getUint8(c);c+=2;for(var f=0;f<e;f++){var g=a.getUint8(c),h=4&g,i=3&g;c++;var j=a.getUint8(c);c++;var k=a.getUint8(c);c++,h&&(127&j)+(127&k)!=0&&(0===i?(d[0].push(j),d[0].push(k)):1===i&&(d[1].push(j),d[1].push(k)))}return d};a.logger=k,a.PenState=m,a.CaptionScreen=p,a.Cea608Parser=r,a.findCea608Nalus=s,a.extractCea608DataFromRange=t}(void 0===c?(void 0).cea608parser={}:c)},{}],3:[function(a,b,c){"use strict";function d(a){var b,c,d;for(b=[],d=0,c=a.length;d<c;d+=1)a[d].isRoot?b.push("root"):b.push(a[d].name);var e=function(a,b){var c;if(null!==a&&null!==b)for(c in a)a.hasOwnProperty(c)&&(b.hasOwnProperty(c)||(b[c]=a[c]))},f=function(a,b,c){var d,f,g,h,i;if(null!==a&&0!==a.length)for(d=0,f=a.length;d<f;d+=1)g=a[d],b.hasOwnProperty(g.name)&&(c.hasOwnProperty(g.name)?g.merge&&(h=b[g.name],i=c[g.name],"object"==typeof h&&"object"==typeof i?e(h,i):null!=g.mergeFunction?c[g.name]=g.mergeFunction(h,i):c[g.name]=h+i):c[g.name]=b[g.name])},g=function a(b,c){var d,e,g,h,i,j,k,l=b;if(null!==l.children&&0!==l.children.length)for(d=0,e=l.children.length;d<e;d+=1)if(j=l.children[d],c.hasOwnProperty(j.name))if(j.isArray)for(i=c[j.name+"_asArray"],g=0,h=i.length;g<h;g+=1)k=i[g],f(l.properties,c,k),a(j,k);else k=c[j.name],f(l.properties,c,k),a(j,k)};return{run:function c(d){var e,f,h,i,j,k,l;if(null===d)return d;if("object"!=typeof d)return d;for(e=0,f=b.length;e<f;e+=1)"root"===b[e]&&(j=a[e],k=d,g(j,k));for(i in d)if(d.hasOwnProperty(i)&&"__children"!=i){if(-1!==(h=b.indexOf(i)))if(j=a[h],j.isArray)for(l=d[i+"_asArray"],e=0,f=l.length;e<f;e+=1)k=l[e],g(j,k);else k=d[i],g(j,k);c(d[i])}return d}}}Object.defineProperty(c,"__esModule",{value:!0}),c.default=d,b.exports=c.default},{}],4:[function(a,b,c){"use strict";function d(a){function b(){void 0===a.escapeMode&&(a.escapeMode=!0),void 0===a.attributePrefix&&(a.attributePrefix="_"),a.arrayAccessForm=a.arrayAccessForm||"none",a.emptyNodeForm=a.emptyNodeForm||"text",void 0===a.enableToStringFunc&&(a.enableToStringFunc=!0),a.arrayAccessFormPaths=a.arrayAccessFormPaths||[],void 0===a.skipEmptyTextNodesForObj&&(a.skipEmptyTextNodesForObj=!0),void 0===a.stripWhitespaces&&(a.stripWhitespaces=!0),a.datetimeAccessFormPaths=a.datetimeAccessFormPaths||[],void 0===a.useDoubleQuotes&&(a.useDoubleQuotes=!1),a.xmlElementsFilter=a.xmlElementsFilter||[],a.jsonPropertiesFilter=a.jsonPropertiesFilter||[],void 0===a.keepCData&&(a.keepCData=!1),void 0===a.ignoreRoot&&(a.ignoreRoot=!1)}function c(){}function d(a){var b=a.localName;return null==b&&(b=a.baseName),null!=b&&""!=b||(b=a.nodeName),b}function e(a){return a.prefix}function f(a){return"string"==typeof a?a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;"):a}function g(a,b,c,d){for(var e=0;e<a.length;e++){var f=a[e];if("string"==typeof f){if(f==d)break}else if(f instanceof RegExp){if(f.test(d))break}else if("function"==typeof f&&f(b,c,d))break}return e!=a.length}function h(b,c,d){switch(a.arrayAccessForm){case"property":b[c]instanceof Array?b[c+"_asArray"]=b[c]:b[c+"_asArray"]=[b[c]]}!(b[c]instanceof Array)&&a.arrayAccessFormPaths.length>0&&g(a.arrayAccessFormPaths,b,c,d)&&(b[c]=[b[c]])}function i(a){var b=a.split(/[-T:+Z]/g),c=new Date(b[0],b[1]-1,b[2]),d=b[5].split(".");if(c.setHours(b[3],b[4],d[0]),d.length>1&&c.setMilliseconds(d[1]),b[6]&&b[7]){var e=60*b[6]+Number(b[7]);e=0+("-"==(/\d\d-\d\d:\d\d$/.test(a)?"-":"+")?-1*e:e),c.setMinutes(c.getMinutes()-e-c.getTimezoneOffset())}else-1!==a.indexOf("Z",a.length-1)&&(c=new Date(Date.UTC(c.getFullYear(),c.getMonth(),c.getDate(),c.getHours(),c.getMinutes(),c.getSeconds(),c.getMilliseconds())));return c}function j(b,c,d){if(a.datetimeAccessFormPaths.length>0){var e=d.split(".#")[0];return g(a.datetimeAccessFormPaths,b,c,e)?i(b):b}return b}function k(b,c,d,e){return!(c==z.ELEMENT_NODE&&a.xmlElementsFilter.length>0)||g(a.xmlElementsFilter,b,d,e)}function l(b,c){if(b.nodeType==z.DOCUMENT_NODE){for(var f=new Object,g=b.childNodes,i=0;i<g.length;i++){var m=g[i];if(m.nodeType==z.ELEMENT_NODE)if(a.ignoreRoot)f=l(m);else{f={};var n=d(m);f[n]=l(m)}}return f}if(b.nodeType==z.ELEMENT_NODE){var f=new Object;f.__cnt=0;for(var o=[],g=b.childNodes,i=0;i<g.length;i++){var m=g[i],n=d(m);if(m.nodeType!=z.COMMENT_NODE){var p=c+"."+n;if(k(f,m.nodeType,n,p))if(f.__cnt++,null==f[n]){var q=l(m,p);if("#text"!=n||/[^\s]/.test(q)){var r={};r[n]=q,o.push(r)}f[n]=q,h(f,n,p)}else{null!=f[n]&&(f[n]instanceof Array||(f[n]=[f[n]],h(f,n,p)));var q=l(m,p);if("#text"!=n||/[^\s]/.test(q)){var r={};r[n]=q,o.push(r)}f[n][f[n].length]=q}}}f.__children=o;for(var s=d(b),t=0;t<b.attributes.length;t++){var u=b.attributes[t];f.__cnt++;for(var v=u.value,w=0,x=a.matchers.length;w<x;w++){var y=a.matchers[w];y.test(u,s)&&(v=y.converter(u.value))}f[a.attributePrefix+u.name]=v}var A=e(b);return null!=A&&""!=A&&(f.__cnt++,f.__prefix=A),null!=f["#text"]&&(f.__text=f["#text"],f.__text instanceof Array&&(f.__text=f.__text.join("\n")),a.stripWhitespaces&&(f.__text=f.__text.trim()),delete f["#text"],"property"==a.arrayAccessForm&&delete f["#text_asArray"],f.__text=j(f.__text,n,c+"."+n)),null!=f["#cdata-section"]&&(f.__cdata=f["#cdata-section"],delete f["#cdata-section"],"property"==a.arrayAccessForm&&delete f["#cdata-section_asArray"]),0==f.__cnt&&"text"==a.emptyNodeForm?f="":1==f.__cnt&&null!=f.__text?f=f.__text:1!=f.__cnt||null==f.__cdata||a.keepCData?f.__cnt>1&&null!=f.__text&&a.skipEmptyTextNodesForObj&&(a.stripWhitespaces&&""==f.__text||""==f.__text.trim())&&delete f.__text:f=f.__cdata,delete f.__cnt,!a.enableToStringFunc||null==f.__text&&null==f.__cdata||(f.toString=function(){return(null!=this.__text?this.__text:"")+(null!=this.__cdata?this.__cdata:"")}),f}if(b.nodeType==z.TEXT_NODE||b.nodeType==z.CDATA_SECTION_NODE)return b.nodeValue}function m(b,c,d,e){var g="<"+(null!=b&&null!=b.__prefix?b.__prefix+":":"")+c;if(null!=d)for(var h=0;h<d.length;h++){var i=d[h],j=b[i];a.escapeMode&&(j=f(j)),g+=" "+i.substr(a.attributePrefix.length)+"=",a.useDoubleQuotes?g+='"'+j+'"':g+="'"+j+"'"}return g+=e?"/>":">"}function n(a,b){return"</"+(null!=a.__prefix?a.__prefix+":":"")+b+">"}function o(a,b){return-1!==a.indexOf(b,a.length-b.length)}function p(b,c){return!!("property"==a.arrayAccessForm&&o(c.toString(),"_asArray")||0==c.toString().indexOf(a.attributePrefix)||0==c.toString().indexOf("__")||b[c]instanceof Function)}function q(a){var b=0;if(a instanceof Object)for(var c in a)p(a,c)||b++;return b}function r(b,c,d){return 0==a.jsonPropertiesFilter.length||""==d||g(a.jsonPropertiesFilter,b,c,d)}function s(b){var c=[];if(b instanceof Object)for(var d in b)-1==d.toString().indexOf("__")&&0==d.toString().indexOf(a.attributePrefix)&&c.push(d);return c}function t(b){var c="";return null!=b.__cdata&&(c+="<![CDATA["+b.__cdata+"]]>"),null!=b.__text&&(a.escapeMode?c+=f(b.__text):c+=b.__text),c}function u(b){var c="";return b instanceof Object?c+=t(b):null!=b&&(a.escapeMode?c+=f(b):c+=b),c}function v(a,b){return""===a?b:a+"."+b}function w(a,b,c,d){var e="";if(0==a.length)e+=m(a,b,c,!0);else for(var f=0;f<a.length;f++)e+=m(a[f],b,s(a[f]),!1),e+=x(a[f],v(d,b)),e+=n(a[f],b);return e}function x(a,b){var c="";if(q(a)>0)for(var d in a)if(!p(a,d)&&(""==b||r(a,d,v(b,d)))){var e=a[d],f=s(e);if(null==e||void 0==e)c+=m(e,d,f,!0);else if(e instanceof Object)if(e instanceof Array)c+=w(e,d,f,b);else if(e instanceof Date)c+=m(e,d,f,!1),c+=e.toISOString(),c+=n(e,d);else{var g=q(e);g>0||null!=e.__text||null!=e.__cdata?(c+=m(e,d,f,!1),c+=x(e,v(b,d)),c+=n(e,d)):c+=m(e,d,f,!0)}else c+=m(e,d,f,!1),c+=u(e),c+=n(e,d)}return c+=u(a)}var y="1.2.0";a=a||{},b(),c();var z={ELEMENT_NODE:1,TEXT_NODE:3,CDATA_SECTION_NODE:4,COMMENT_NODE:8,DOCUMENT_NODE:9};this.parseXmlString=function(a){window.ActiveXObject||window;if(void 0===a)return null;var b;if(window.DOMParser){var c=new window.DOMParser;try{b=c.parseFromString(a,"text/xml"),b.getElementsByTagNameNS("*","parsererror").length>0&&(b=null)}catch(d){b=null}}else 0==a.indexOf("<?")&&(a=a.substr(a.indexOf("?>")+2)),b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a);return b},this.asArray=function(a){return void 0===a||null==a?[]:a instanceof Array?a:[a]},this.toXmlDateTime=function(a){return a instanceof Date?a.toISOString():"number"==typeof a?new Date(a).toISOString():null},this.asDateTime=function(a){return"string"==typeof a?i(a):a},this.xml2json=function(a){return l(a)},this.xml_str2json=function(a){var b=this.parseXmlString(a);return null!=b?this.xml2json(b):null},this.json2xml_str=function(a){return x(a,"")},this.json2xml=function(a){var b=this.json2xml_str(a);return this.parseXmlString(b)},this.getVersion=function(){return y}}Object.defineProperty(c,"__esModule",{value:!0}),c.default=d,b.exports=c.default},{}],5:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(c,"__esModule",{value:!0});var e=a(6),f=a(117),g=d(f),h=a(148),i=d(h),j=a(95),k=d(j);dashjs.Protection=i.default,dashjs.MetricsReporting=g.default,dashjs.MediaPlayerFactory=k.default,c.default=dashjs,c.MediaPlayer=e.MediaPlayer,c.Protection=i.default,c.MetricsReporting=g.default,c.MediaPlayerFactory=k.default},{117:117,148:148,6:6,95:95}],6:[function(a,b,c){(function(b){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(c,"__esModule",{value:!0});var e=a(93),f=d(e),g=a(51),h=d(g),i=a(52),j="undefined"!=typeof window&&window||b,k=j.dashjs;k||(k=j.dashjs={}),k.MediaPlayer=f.default,k.FactoryMaker=h.default,k.Version=(0,i.getVersionString)(),c.default=k,c.MediaPlayer=f.default,c.FactoryMaker=h.default}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{51:51,52:52,93:93}],7:[function(a,b,c){!function(a){"use strict";function b(a){var b=a.charCodeAt(0);return b===f||b===k?62:b===g||b===l?63:b<h?-1:b<h+10?b-h+26+26:b<j+26?b-j:b<i+26?b-i+26:void 0}function c(a){function c(a){j[l++]=a}var d,f,g,h,i,j;if(a.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var k=a.length;i="="===a.charAt(k-2)?2:"="===a.charAt(k-1)?1:0,j=new e(3*a.length/4-i),g=i>0?a.length-4:a.length;var l=0;for(d=0,f=0;d<g;d+=4,f+=3)h=b(a.charAt(d))<<18|b(a.charAt(d+1))<<12|b(a.charAt(d+2))<<6|b(a.charAt(d+3)),c((16711680&h)>>16),c((65280&h)>>8),c(255&h);return 2===i?(h=b(a.charAt(d))<<2|b(a.charAt(d+1))>>4,c(255&h)):1===i&&(h=b(a.charAt(d))<<10|b(a.charAt(d+1))<<4|b(a.charAt(d+2))>>2,c(h>>8&255),c(255&h)),j}function d(a){function b(a){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(a)}function c(a){return b(a>>18&63)+b(a>>12&63)+b(a>>6&63)+b(63&a)}var d,e,f,g=a.length%3,h="";for(d=0,f=a.length-g;d<f;d+=3)e=(a[d]<<16)+(a[d+1]<<8)+a[d+2],h+=c(e);switch(g){case 1:e=a[a.length-1],h+=b(e>>2),h+=b(e<<4&63),h+="==";break;case 2:e=(a[a.length-2]<<8)+a[a.length-1],h+=b(e>>10),h+=b(e>>4&63),h+=b(e<<2&63),h+="="}return h}var e="undefined"!=typeof Uint8Array?Uint8Array:Array,f="+".charCodeAt(0),g="/".charCodeAt(0),h="0".charCodeAt(0),i="a".charCodeAt(0),j="A".charCodeAt(0),k="-".charCodeAt(0),l="_".charCodeAt(0);a.toByteArray=c,a.fromByteArray=d}(void 0===c?this.base64js={}:c)},{}],8:[function(a,b,c){},{}],9:[function(a,b,c){function d(a){if(a&&!i(a))throw new Error("Unknown encoding: "+a)}function e(a){return a.toString(this.encoding)}function f(a){this.charReceived=a.length%2,this.charLength=this.charReceived?2:0}function g(a){this.charReceived=a.length%3,this.charLength=this.charReceived?3:0}var h=a(10).Buffer,i=h.isEncoding||function(a){switch(a&&a.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}},j=c.StringDecoder=function(a){switch(this.encoding=(a||"utf8").toLowerCase().replace(/[-_]/,""),d(a),this.encoding){case"utf8":this.surrogateSize=3;break;case"ucs2":case"utf16le":this.surrogateSize=2,this.detectIncompleteChar=f;break;case"base64":this.surrogateSize=3,this.detectIncompleteChar=g;break;default:return void(this.write=e)}this.charBuffer=new h(6),this.charReceived=0,this.charLength=0};j.prototype.write=function(a){for(var b="";this.charLength;){var c=a.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:a.length;if(a.copy(this.charBuffer,this.charReceived,0,c),this.charReceived+=c,this.charReceived<this.charLength)return"";a=a.slice(c,a.length),b=this.charBuffer.slice(0,this.charLength).toString(this.encoding);var d=b.charCodeAt(b.length-1);if(!(d>=55296&&d<=56319)){if(this.charReceived=this.charLength=0,0===a.length)return b;break}this.charLength+=this.surrogateSize,b=""}this.detectIncompleteChar(a);var e=a.length;this.charLength&&(a.copy(this.charBuffer,0,a.length-this.charReceived,e),e-=this.charReceived),b+=a.toString(this.encoding,0,e);var e=b.length-1,d=b.charCodeAt(e);if(d>=55296&&d<=56319){var f=this.surrogateSize;return this.charLength+=f,this.charReceived+=f,this.charBuffer.copy(this.charBuffer,f,0,f),a.copy(this.charBuffer,0,0,f),b.substring(0,e)}return b},j.prototype.detectIncompleteChar=function(a){for(var b=a.length>=3?3:a.length;b>0;b--){var c=a[a.length-b];if(1==b&&c>>5==6){this.charLength=2;break}if(b<=2&&c>>4==14){this.charLength=3;break}if(b<=3&&c>>3==30){this.charLength=4;break}}this.charReceived=b},j.prototype.end=function(a){var b="";if(a&&a.length&&(b=this.write(a)),this.charReceived){var c=this.charReceived,d=this.charBuffer,e=this.encoding;b+=d.slice(0,c).toString(e)}return b}},{10:10}],10:[function(a,b,c){(function(b){/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
"use strict";function d(){function a(){}try{var b=new Uint8Array(1);return b.foo=function(){return 42},b.constructor=a,42===b.foo()&&b.constructor===a&&"function"==typeof b.subarray&&0===b.subarray(1,1).byteLength}catch(c){return!1}}function e(){return f.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function f(a){return this instanceof f?(f.TYPED_ARRAY_SUPPORT||(this.length=0,this.parent=void 0),"number"==typeof a?g(this,a):"string"==typeof a?h(this,a,arguments.length>1?arguments[1]:"utf8"):i(this,a)):arguments.length>1?new f(a,arguments[1]):new f(a)}function g(a,b){if(a=p(a,b<0?0:0|q(b)),!f.TYPED_ARRAY_SUPPORT)for(var c=0;c<b;c++)a[c]=0;return a}function h(a,b,c){return"string"==typeof c&&""!==c||(c="utf8"),a=p(a,0|s(b,c)),a.write(b,c),a}function i(a,b){if(f.isBuffer(b))return j(a,b);if(Y(b))return k(a,b);if(null==b)throw new TypeError("must start with number, buffer, array or string");if("undefined"!=typeof ArrayBuffer){if(b.buffer instanceof ArrayBuffer)return l(a,b);if(b instanceof ArrayBuffer)return m(a,b)}return b.length?n(a,b):o(a,b)}function j(a,b){var c=0|q(b.length);return a=p(a,c),b.copy(a,0,0,c),a}function k(a,b){var c=0|q(b.length);a=p(a,c);for(var d=0;d<c;d+=1)a[d]=255&b[d];return a}function l(a,b){var c=0|q(b.length);a=p(a,c);for(var d=0;d<c;d+=1)a[d]=255&b[d];return a}function m(a,b){return f.TYPED_ARRAY_SUPPORT?(b.byteLength,a=f._augment(new Uint8Array(b))):a=l(a,new Uint8Array(b)),a}function n(a,b){var c=0|q(b.length);a=p(a,c);for(var d=0;d<c;d+=1)a[d]=255&b[d];return a}function o(a,b){var c,d=0;"Buffer"===b.type&&Y(b.data)&&(c=b.data,d=0|q(c.length)),a=p(a,d);for(var e=0;e<d;e+=1)a[e]=255&c[e];return a}function p(a,b){return f.TYPED_ARRAY_SUPPORT?(a=f._augment(new Uint8Array(b)),a.__proto__=f.prototype):(a.length=b,a._isBuffer=!0),0!==b&&b<=f.poolSize>>>1&&(a.parent=Z),a}function q(a){if(a>=e())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+e().toString(16)+" bytes");return 0|a}function r(a,b){if(!(this instanceof r))return new r(a,b);var c=new f(a,b);return delete c.parent,c}function s(a,b){"string"!=typeof a&&(a=""+a);var c=a.length;if(0===c)return 0;for(var d=!1;;)switch(b){case"ascii":case"binary":case"raw":case"raws":return c;case"utf8":case"utf-8":return R(a).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*c;case"hex":return c>>>1;case"base64":return U(a).length;default:if(d)return R(a).length;b=(""+b).toLowerCase(),d=!0}}function t(a,b,c){var d=!1;if(b|=0,c=void 0===c||c===1/0?this.length:0|c,a||(a="utf8"),b<0&&(b=0),c>this.length&&(c=this.length),c<=b)return"";for(;;)switch(a){case"hex":return F(this,b,c);case"utf8":case"utf-8":return B(this,b,c);case"ascii":return D(this,b,c);case"binary":return E(this,b,c);case"base64":return A(this,b,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return G(this,b,c);default:if(d)throw new TypeError("Unknown encoding: "+a);a=(a+"").toLowerCase(),d=!0}}function u(a,b,c,d){c=Number(c)||0;var e=a.length-c;d?(d=Number(d))>e&&(d=e):d=e;var f=b.length;if(f%2!=0)throw new Error("Invalid hex string");d>f/2&&(d=f/2);for(var g=0;g<d;g++){var h=parseInt(b.substr(2*g,2),16);if(isNaN(h))throw new Error("Invalid hex string");a[c+g]=h}return g}function v(a,b,c,d){return V(R(b,a.length-c),a,c,d)}function w(a,b,c,d){return V(S(b),a,c,d)}function x(a,b,c,d){return w(a,b,c,d)}function y(a,b,c,d){return V(U(b),a,c,d)}function z(a,b,c,d){return V(T(b,a.length-c),a,c,d)}function A(a,b,c){return 0===b&&c===a.length?W.fromByteArray(a):W.fromByteArray(a.slice(b,c))}function B(a,b,c){c=Math.min(a.length,c);for(var d=[],e=b;e<c;){var f=a[e],g=null,h=f>239?4:f>223?3:f>191?2:1;if(e+h<=c){var i,j,k,l;switch(h){case 1:f<128&&(g=f);break;case 2:i=a[e+1],128==(192&i)&&(l=(31&f)<<6|63&i)>127&&(g=l);break;case 3:i=a[e+1],j=a[e+2],128==(192&i)&&128==(192&j)&&(l=(15&f)<<12|(63&i)<<6|63&j)>2047&&(l<55296||l>57343)&&(g=l);break;case 4:i=a[e+1],j=a[e+2],k=a[e+3],128==(192&i)&&128==(192&j)&&128==(192&k)&&(l=(15&f)<<18|(63&i)<<12|(63&j)<<6|63&k)>65535&&l<1114112&&(g=l)}}null===g?(g=65533,h=1):g>65535&&(g-=65536,d.push(g>>>10&1023|55296),g=56320|1023&g),d.push(g),e+=h}return C(d)}function C(a){var b=a.length;if(b<=$)return String.fromCharCode.apply(String,a);for(var c="",d=0;d<b;)c+=String.fromCharCode.apply(String,a.slice(d,d+=$));return c}function D(a,b,c){var d="";c=Math.min(a.length,c);for(var e=b;e<c;e++)d+=String.fromCharCode(127&a[e]);return d}function E(a,b,c){var d="";c=Math.min(a.length,c);for(var e=b;e<c;e++)d+=String.fromCharCode(a[e]);return d}function F(a,b,c){var d=a.length;(!b||b<0)&&(b=0),(!c||c<0||c>d)&&(c=d);for(var e="",f=b;f<c;f++)e+=Q(a[f]);return e}function G(a,b,c){for(var d=a.slice(b,c),e="",f=0;f<d.length;f+=2)e+=String.fromCharCode(d[f]+256*d[f+1]);return e}function H(a,b,c){if(a%1!=0||a<0)throw new RangeError("offset is not uint");if(a+b>c)throw new RangeError("Trying to access beyond buffer length")}function I(a,b,c,d,e,g){if(!f.isBuffer(a))throw new TypeError("buffer must be a Buffer instance");if(b>e||b<g)throw new RangeError("value is out of bounds");if(c+d>a.length)throw new RangeError("index out of range")}function J(a,b,c,d){b<0&&(b=65535+b+1);for(var e=0,f=Math.min(a.length-c,2);e<f;e++)a[c+e]=(b&255<<8*(d?e:1-e))>>>8*(d?e:1-e)}function K(a,b,c,d){b<0&&(b=4294967295+b+1);for(var e=0,f=Math.min(a.length-c,4);e<f;e++)a[c+e]=b>>>8*(d?e:3-e)&255}function L(a,b,c,d,e,f){if(b>e||b<f)throw new RangeError("value is out of bounds");if(c+d>a.length)throw new RangeError("index out of range");if(c<0)throw new RangeError("index out of range")}function M(a,b,c,d,e){return e||L(a,b,c,4,3.4028234663852886e38,-3.4028234663852886e38),X.write(a,b,c,d,23,4),c+4}function N(a,b,c,d,e){return e||L(a,b,c,8,1.7976931348623157e308,-1.7976931348623157e308),X.write(a,b,c,d,52,8),c+8}function O(a){if(a=P(a).replace(aa,""),a.length<2)return"";for(;a.length%4!=0;)a+="=";return a}function P(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")}function Q(a){return a<16?"0"+a.toString(16):a.toString(16)}function R(a,b){b=b||1/0;for(var c,d=a.length,e=null,f=[],g=0;g<d;g++){if((c=a.charCodeAt(g))>55295&&c<57344){if(!e){if(c>56319){(b-=3)>-1&&f.push(239,191,189);continue}if(g+1===d){(b-=3)>-1&&f.push(239,191,189);continue}e=c;continue}if(c<56320){(b-=3)>-1&&f.push(239,191,189),e=c;continue}c=65536+(e-55296<<10|c-56320)}else e&&(b-=3)>-1&&f.push(239,191,189);if(e=null,c<128){if((b-=1)<0)break;f.push(c)}else if(c<2048){if((b-=2)<0)break;f.push(c>>6|192,63&c|128)}else if(c<65536){if((b-=3)<0)break;f.push(c>>12|224,c>>6&63|128,63&c|128)}else{if(!(c<1114112))throw new Error("Invalid code point");if((b-=4)<0)break;f.push(c>>18|240,c>>12&63|128,c>>6&63|128,63&c|128)}}return f}function S(a){for(var b=[],c=0;c<a.length;c++)b.push(255&a.charCodeAt(c));return b}function T(a,b){for(var c,d,e,f=[],g=0;g<a.length&&!((b-=2)<0);g++)c=a.charCodeAt(g),d=c>>8,e=c%256,f.push(e),f.push(d);return f}function U(a){return W.toByteArray(O(a))}function V(a,b,c,d){for(var e=0;e<d&&!(e+c>=b.length||e>=a.length);e++)b[e+c]=a[e];return e}var W=a(7),X=a(17),Y=a(27);c.Buffer=f,c.SlowBuffer=r,c.INSPECT_MAX_BYTES=50,f.poolSize=8192;var Z={};f.TYPED_ARRAY_SUPPORT=void 0!==b.TYPED_ARRAY_SUPPORT?b.TYPED_ARRAY_SUPPORT:d(),f.TYPED_ARRAY_SUPPORT?(f.prototype.__proto__=Uint8Array.prototype,f.__proto__=Uint8Array):(f.prototype.length=void 0,f.prototype.parent=void 0),f.isBuffer=function(a){return!(null==a||!a._isBuffer)},f.compare=function(a,b){if(!f.isBuffer(a)||!f.isBuffer(b))throw new TypeError("Arguments must be Buffers");if(a===b)return 0;for(var c=a.length,d=b.length,e=0,g=Math.min(c,d);e<g&&a[e]===b[e];)++e;return e!==g&&(c=a[e],d=b[e]),c<d?-1:d<c?1:0},f.isEncoding=function(a){switch(String(a).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(a,b){if(!Y(a))throw new TypeError("list argument must be an Array of Buffers.");if(0===a.length)return new f(0);var c;if(void 0===b)for(b=0,c=0;c<a.length;c++)b+=a[c].length;var d=new f(b),e=0;for(c=0;c<a.length;c++){var g=a[c];g.copy(d,e),e+=g.length}return d},f.byteLength=s,f.prototype.toString=function(){var a=0|this.length;return 0===a?"":0===arguments.length?B(this,0,a):t.apply(this,arguments)},f.prototype.equals=function(a){if(!f.isBuffer(a))throw new TypeError("Argument must be a Buffer");return this===a||0===f.compare(this,a)},f.prototype.inspect=function(){var a="",b=c.INSPECT_MAX_BYTES;return this.length>0&&(a=this.toString("hex",0,b).match(/.{2}/g).join(" "),this.length>b&&(a+=" ... ")),"<Buffer "+a+">"},f.prototype.compare=function(a){if(!f.isBuffer(a))throw new TypeError("Argument must be a Buffer");return this===a?0:f.compare(this,a)},f.prototype.indexOf=function(a,b){function c(a,b,c){for(var d=-1,e=0;c+e<a.length;e++)if(a[c+e]===b[-1===d?0:e-d]){if(-1===d&&(d=e),e-d+1===b.length)return c+d}else d=-1;return-1}if(b>2147483647?b=2147483647:b<-2147483648&&(b=-2147483648),b>>=0,0===this.length)return-1;if(b>=this.length)return-1;if(b<0&&(b=Math.max(this.length+b,0)),"string"==typeof a)return 0===a.length?-1:String.prototype.indexOf.call(this,a,b);if(f.isBuffer(a))return c(this,a,b);if("number"==typeof a)return f.TYPED_ARRAY_SUPPORT&&"function"===Uint8Array.prototype.indexOf?Uint8Array.prototype.indexOf.call(this,a,b):c(this,[a],b);throw new TypeError("val must be string, number or Buffer")},f.prototype.get=function(a){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(a)},f.prototype.set=function(a,b){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(a,b)},f.prototype.write=function(a,b,c,d){if(void 0===b)d="utf8",c=this.length,b=0;else if(void 0===c&&"string"==typeof b)d=b,c=this.length,b=0;else if(isFinite(b))b|=0,isFinite(c)?(c|=0,void 0===d&&(d="utf8")):(d=c,c=void 0);else{var e=d;d=b,b=0|c,c=e}var f=this.length-b;if((void 0===c||c>f)&&(c=f),a.length>0&&(c<0||b<0)||b>this.length)throw new RangeError("attempt to write outside buffer bounds");d||(d="utf8");for(var g=!1;;)switch(d){case"hex":return u(this,a,b,c);case"utf8":case"utf-8":return v(this,a,b,c);case"ascii":return w(this,a,b,c);case"binary":return x(this,a,b,c);case"base64":return y(this,a,b,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return z(this,a,b,c);default:if(g)throw new TypeError("Unknown encoding: "+d);d=(""+d).toLowerCase(),g=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var $=4096;f.prototype.slice=function(a,b){var c=this.length;a=~~a,b=void 0===b?c:~~b,a<0?(a+=c)<0&&(a=0):a>c&&(a=c),b<0?(b+=c)<0&&(b=0):b>c&&(b=c),b<a&&(b=a);var d;if(f.TYPED_ARRAY_SUPPORT)d=f._augment(this.subarray(a,b));else{var e=b-a;d=new f(e,void 0);for(var g=0;g<e;g++)d[g]=this[g+a]}return d.length&&(d.parent=this.parent||this),d},f.prototype.readUIntLE=function(a,b,c){a|=0,b|=0,c||H(a,b,this.length);for(var d=this[a],e=1,f=0;++f<b&&(e*=256);)d+=this[a+f]*e;return d},f.prototype.readUIntBE=function(a,b,c){a|=0,b|=0,c||H(a,b,this.length);for(var d=this[a+--b],e=1;b>0&&(e*=256);)d+=this[a+--b]*e;return d},f.prototype.readUInt8=function(a,b){return b||H(a,1,this.length),this[a]},f.prototype.readUInt16LE=function(a,b){return b||H(a,2,this.length),this[a]|this[a+1]<<8},f.prototype.readUInt16BE=function(a,b){return b||H(a,2,this.length),this[a]<<8|this[a+1]},f.prototype.readUInt32LE=function(a,b){return b||H(a,4,this.length),(this[a]|this[a+1]<<8|this[a+2]<<16)+16777216*this[a+3]},f.prototype.readUInt32BE=function(a,b){return b||H(a,4,this.length),16777216*this[a]+(this[a+1]<<16|this[a+2]<<8|this[a+3])},f.prototype.readIntLE=function(a,b,c){a|=0,b|=0,c||H(a,b,this.length);for(var d=this[a],e=1,f=0;++f<b&&(e*=256);)d+=this[a+f]*e;return e*=128,d>=e&&(d-=Math.pow(2,8*b)),d},f.prototype.readIntBE=function(a,b,c){a|=0,b|=0,c||H(a,b,this.length);for(var d=b,e=1,f=this[a+--d];d>0&&(e*=256);)f+=this[a+--d]*e;return e*=128,f>=e&&(f-=Math.pow(2,8*b)),f},f.prototype.readInt8=function(a,b){return b||H(a,1,this.length),128&this[a]?-1*(255-this[a]+1):this[a]},f.prototype.readInt16LE=function(a,b){b||H(a,2,this.length);var c=this[a]|this[a+1]<<8;return 32768&c?4294901760|c:c},f.prototype.readInt16BE=function(a,b){b||H(a,2,this.length);var c=this[a+1]|this[a]<<8;return 32768&c?4294901760|c:c},f.prototype.readInt32LE=function(a,b){return b||H(a,4,this.length),this[a]|this[a+1]<<8|this[a+2]<<16|this[a+3]<<24},f.prototype.readInt32BE=function(a,b){return b||H(a,4,this.length),this[a]<<24|this[a+1]<<16|this[a+2]<<8|this[a+3]},f.prototype.readFloatLE=function(a,b){return b||H(a,4,this.length),X.read(this,a,!0,23,4)},f.prototype.readFloatBE=function(a,b){return b||H(a,4,this.length),X.read(this,a,!1,23,4)},f.prototype.readDoubleLE=function(a,b){return b||H(a,8,this.length),X.read(this,a,!0,52,8)},f.prototype.readDoubleBE=function(a,b){return b||H(a,8,this.length),X.read(this,a,!1,52,8)},f.prototype.writeUIntLE=function(a,b,c,d){a=+a,b|=0,c|=0,d||I(this,a,b,c,Math.pow(2,8*c),0);var e=1,f=0;for(this[b]=255&a;++f<c&&(e*=256);)this[b+f]=a/e&255;return b+c},f.prototype.writeUIntBE=function(a,b,c,d){a=+a,b|=0,c|=0,d||I(this,a,b,c,Math.pow(2,8*c),0);var e=c-1,f=1;for(this[b+e]=255&a;--e>=0&&(f*=256);)this[b+e]=a/f&255;return b+c},f.prototype.writeUInt8=function(a,b,c){return a=+a,b|=0,c||I(this,a,b,1,255,0),f.TYPED_ARRAY_SUPPORT||(a=Math.floor(a)),this[b]=255&a,b+1},f.prototype.writeUInt16LE=function(a,b,c){return a=+a,b|=0,c||I(this,a,b,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[b]=255&a,this[b+1]=a>>>8):J(this,a,b,!0),b+2},f.prototype.writeUInt16BE=function(a,b,c){return a=+a,b|=0,c||I(this,a,b,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[b]=a>>>8,this[b+1]=255&a):J(this,a,b,!1),b+2},f.prototype.writeUInt32LE=function(a,b,c){return a=+a,b|=0,c||I(this,a,b,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[b+3]=a>>>24,this[b+2]=a>>>16,this[b+1]=a>>>8,this[b]=255&a):K(this,a,b,!0),b+4},f.prototype.writeUInt32BE=function(a,b,c){return a=+a,b|=0,c||I(this,a,b,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[b]=a>>>24,this[b+1]=a>>>16,this[b+2]=a>>>8,this[b+3]=255&a):K(this,a,b,!1),b+4},f.prototype.writeIntLE=function(a,b,c,d){if(a=+a,b|=0,!d){var e=Math.pow(2,8*c-1);I(this,a,b,c,e-1,-e)}var f=0,g=1,h=a<0?1:0;for(this[b]=255&a;++f<c&&(g*=256);)this[b+f]=(a/g>>0)-h&255;return b+c},f.prototype.writeIntBE=function(a,b,c,d){if(a=+a,b|=0,!d){var e=Math.pow(2,8*c-1);I(this,a,b,c,e-1,-e)}var f=c-1,g=1,h=a<0?1:0;for(this[b+f]=255&a;--f>=0&&(g*=256);)this[b+f]=(a/g>>0)-h&255;return b+c},f.prototype.writeInt8=function(a,b,c){return a=+a,b|=0,c||I(this,a,b,1,127,-128),f.TYPED_ARRAY_SUPPORT||(a=Math.floor(a)),a<0&&(a=255+a+1),this[b]=255&a,b+1},f.prototype.writeInt16LE=function(a,b,c){return a=+a,b|=0,c||I(this,a,b,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[b]=255&a,this[b+1]=a>>>8):J(this,a,b,!0),b+2},f.prototype.writeInt16BE=function(a,b,c){return a=+a,b|=0,c||I(this,a,b,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[b]=a>>>8,this[b+1]=255&a):J(this,a,b,!1),b+2},f.prototype.writeInt32LE=function(a,b,c){return a=+a,b|=0,c||I(this,a,b,4,2147483647,-2147483648),f.TYPED_ARRAY_SUPPORT?(this[b]=255&a,this[b+1]=a>>>8,this[b+2]=a>>>16,this[b+3]=a>>>24):K(this,a,b,!0),b+4},f.prototype.writeInt32BE=function(a,b,c){return a=+a,b|=0,c||I(this,a,b,4,2147483647,-2147483648),a<0&&(a=4294967295+a+1),f.TYPED_ARRAY_SUPPORT?(this[b]=a>>>24,this[b+1]=a>>>16,this[b+2]=a>>>8,this[b+3]=255&a):K(this,a,b,!1),b+4},f.prototype.writeFloatLE=function(a,b,c){return M(this,a,b,!0,c)},f.prototype.writeFloatBE=function(a,b,c){return M(this,a,b,!1,c)},f.prototype.writeDoubleLE=function(a,b,c){return N(this,a,b,!0,c)},f.prototype.writeDoubleBE=function(a,b,c){return N(this,a,b,!1,c)},f.prototype.copy=function(a,b,c,d){if(c||(c=0),d||0===d||(d=this.length),b>=a.length&&(b=a.length),b||(b=0),d>0&&d<c&&(d=c),d===c)return 0;if(0===a.length||0===this.length)return 0;if(b<0)throw new RangeError("targetStart out of bounds");if(c<0||c>=this.length)throw new RangeError("sourceStart out of bounds");if(d<0)throw new RangeError("sourceEnd out of bounds");d>this.length&&(d=this.length),a.length-b<d-c&&(d=a.length-b+c);var e,g=d-c;if(this===a&&c<b&&b<d)for(e=g-1;e>=0;e--)a[e+b]=this[e+c];else if(g<1e3||!f.TYPED_ARRAY_SUPPORT)for(e=0;e<g;e++)a[e+b]=this[e+c];else a._set(this.subarray(c,c+g),b);return g},f.prototype.fill=function(a,b,c){if(a||(a=0),b||(b=0),c||(c=this.length),c<b)throw new RangeError("end < start");if(c!==b&&0!==this.length){if(b<0||b>=this.length)throw new RangeError("start out of bounds");if(c<0||c>this.length)throw new RangeError("end out of bounds");var d;if("number"==typeof a)for(d=b;d<c;d++)this[d]=a;else{var e=R(a.toString()),f=e.length;for(d=b;d<c;d++)this[d]=e[d%f]}return this}},f.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(f.TYPED_ARRAY_SUPPORT)return new f(this).buffer;for(var a=new Uint8Array(this.length),b=0,c=a.length;b<c;b+=1)a[b]=this[b];return a.buffer}throw new TypeError("Buffer.toArrayBuffer not supported in this browser")};var _=f.prototype;f._augment=function(a){return a.constructor=f,a._isBuffer=!0,a._set=a.set,a.get=_.get,a.set=_.set,a.write=_.write,a.toString=_.toString,a.toLocaleString=_.toString,a.toJSON=_.toJSON,a.equals=_.equals,a.compare=_.compare,a.indexOf=_.indexOf,a.copy=_.copy,a.slice=_.slice,a.readUIntLE=_.readUIntLE,a.readUIntBE=_.readUIntBE,a.readUInt8=_.readUInt8,a.readUInt16LE=_.readUInt16LE,a.readUInt16BE=_.readUInt16BE,a.readUInt32LE=_.readUInt32LE,a.readUInt32BE=_.readUInt32BE,a.readIntLE=_.readIntLE,a.readIntBE=_.readIntBE,a.readInt8=_.readInt8,a.readInt16LE=_.readInt16LE,a.readInt16BE=_.readInt16BE,a.readInt32LE=_.readInt32LE,a.readInt32BE=_.readInt32BE,a.readFloatLE=_.readFloatLE,a.readFloatBE=_.readFloatBE,a.readDoubleLE=_.readDoubleLE,a.readDoubleBE=_.readDoubleBE,a.writeUInt8=_.writeUInt8,a.writeUIntLE=_.writeUIntLE,a.writeUIntBE=_.writeUIntBE,a.writeUInt16LE=_.writeUInt16LE,a.writeUInt16BE=_.writeUInt16BE,a.writeUInt32LE=_.writeUInt32LE,a.writeUInt32BE=_.writeUInt32BE,a.writeIntLE=_.writeIntLE,a.writeIntBE=_.writeIntBE,a.writeInt8=_.writeInt8,a.writeInt16LE=_.writeInt16LE,a.writeInt16BE=_.writeInt16BE,a.writeInt32LE=_.writeInt32LE,a.writeInt32BE=_.writeInt32BE,a.writeFloatLE=_.writeFloatLE,a.writeFloatBE=_.writeFloatBE,a.writeDoubleLE=_.writeDoubleLE,a.writeDoubleBE=_.writeDoubleBE,a.fill=_.fill,a.inspect=_.inspect,a.toArrayBuffer=_.toArrayBuffer,a};var aa=/[^+\/0-9A-Za-z-_]/g}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{17:17,27:27,7:7}],11:[function(a,b,c){/*! codem-isoboxer v0.3.5 https://github.com/madebyhiro/codem-isoboxer/blob/master/LICENSE.txt */
var d={};d.parseBuffer=function(a){return new e(a).parse()},d.addBoxProcessor=function(a,b){"string"==typeof a&&"function"==typeof b&&(f.prototype._boxProcessors[a]=b)},d.createFile=function(){return new e},d.createBox=function(a,b,c){var d=f.create(a);return b&&b.append(d,c),d},d.createFullBox=function(a,b,c){var e=d.createBox(a,b,c);return e.version=0,e.flags=0,e},d.Utils={},d.Utils.dataViewToString=function(a,b){var c=b||"utf-8";if("undefined"!=typeof TextDecoder)return new TextDecoder(c).decode(a);var d=[],e=0;if("utf-8"===c)for(;e<a.byteLength;){var f=a.getUint8(e++);f<128||(f<224?(f=(31&f)<<6,f|=63&a.getUint8(e++)):f<240?(f=(15&f)<<12,f|=(63&a.getUint8(e++))<<6,f|=63&a.getUint8(e++)):(f=(7&f)<<18,f|=(63&a.getUint8(e++))<<12,f|=(63&a.getUint8(e++))<<6,f|=63&a.getUint8(e++))),d.push(String.fromCharCode(f))}else for(;e<a.byteLength;)d.push(String.fromCharCode(a.getUint8(e++)));return d.join("")},d.Utils.utf8ToByteArray=function(a){var b,c;if("undefined"!=typeof TextEncoder)b=(new TextEncoder).encode(a);else for(b=[],c=0;c<a.length;++c){var d=a.charCodeAt(c);d<128?b.push(d):d<2048?(b.push(192|d>>6),b.push(128|63&d)):d<65536?(b.push(224|d>>12),b.push(128|63&d>>6),b.push(128|63&d)):(b.push(240|d>>18),b.push(128|63&d>>12),b.push(128|63&d>>6),b.push(128|63&d))}return b},d.Utils.appendBox=function(a,b,c){if(b._offset=a._cursor.offset,b._root=a._root?a._root:a,b._raw=a._raw,b._parent=a,-1!==c){if(void 0===c||null===c)return void a.boxes.push(b);var d,e=-1;if("number"==typeof c)e=c;else{if("string"==typeof c)d=c;else{if("object"!=typeof c||!c.type)return void a.boxes.push(b);d=c.type}for(var f=0;f<a.boxes.length;f++)if(d===a.boxes[f].type){e=f+1;break}}a.boxes.splice(e,0,b)}},void 0!==c&&(c.parseBuffer=d.parseBuffer,c.addBoxProcessor=d.addBoxProcessor,c.createFile=d.createFile,c.createBox=d.createBox,c.createFullBox=d.createFullBox,c.Utils=d.Utils),d.Cursor=function(a){this.offset=void 0===a?0:a};var e=function(a){this._cursor=new d.Cursor,this.boxes=[],a&&(this._raw=new DataView(a))};e.prototype.fetch=function(a){var b=this.fetchAll(a,!0);return b.length?b[0]:null},e.prototype.fetchAll=function(a,b){var c=[];return e._sweep.call(this,a,c,b),c},e.prototype.parse=function(){for(this._cursor.offset=0,this.boxes=[];this._cursor.offset<this._raw.byteLength;){var a=f.parse(this);if(void 0===a.type)break;this.boxes.push(a)}return this},e._sweep=function(a,b,c){this.type&&this.type==a&&b.push(this);for(var d in this.boxes){if(b.length&&c)return;e._sweep.call(this.boxes[d],a,b,c)}},e.prototype.write=function(){var a,b=0;for(a=0;a<this.boxes.length;a++)b+=this.boxes[a].getLength(!1);var c=new Uint8Array(b);for(this._rawo=new DataView(c.buffer),this.bytes=c,this._cursor.offset=0,a=0;a<this.boxes.length;a++)this.boxes[a].write();return c.buffer},e.prototype.append=function(a,b){d.Utils.appendBox(this,a,b)};var f=function(){this._cursor=new d.Cursor};f.parse=function(a){var b=new f;return b._offset=a._cursor.offset,b._root=a._root?a._root:a,b._raw=a._raw,b._parent=a,b._parseBox(),a._cursor.offset=b._raw.byteOffset+b._raw.byteLength,b},f.create=function(a){var b=new f;return b.type=a,b.boxes=[],b},f.prototype._boxContainers=["dinf","edts","mdia","meco","mfra","minf","moof","moov","mvex","stbl","strk","traf","trak","tref","udta","vttc","sinf","schi","encv","enca"],f.prototype._boxProcessors={},f.prototype._procField=function(a,b,c){this._parsing?this[a]=this._readField(b,c):this._writeField(b,c,this[a])},f.prototype._procFieldArray=function(a,b,c,d){var e;if(this._parsing)for(this[a]=[],e=0;e<b;e++)this[a][e]=this._readField(c,d);else for(e=0;e<this[a].length;e++)this._writeField(c,d,this[a][e])},f.prototype._procFullBox=function(){this._procField("version","uint",8),this._procField("flags","uint",24)},f.prototype._procEntries=function(a,b,c){var d;if(this._parsing)for(this[a]=[],d=0;d<b;d++)this[a].push({}),c.call(this,this[a][d]);else for(d=0;d<b;d++)c.call(this,this[a][d])},f.prototype._procSubEntries=function(a,b,c,d){var e;if(this._parsing)for(a[b]=[],e=0;e<c;e++)a[b].push({}),d.call(this,a[b][e]);else for(e=0;e<c;e++)d.call(this,a[b][e])},f.prototype._procEntryField=function(a,b,c,d){this._parsing?a[b]=this._readField(c,d):this._writeField(c,d,a[b])},f.prototype._procSubBoxes=function(a,b){var c;if(this._parsing)for(this[a]=[],c=0;c<b;c++)this[a].push(f.parse(this));else for(c=0;c<b;c++)this._rawo?this[a][c].write():this.size+=this[a][c].getLength()},f.prototype._readField=function(a,b){switch(a){case"uint":return this._readUint(b);case"int":return this._readInt(b);case"template":return this._readTemplate(b);case"string":return-1===b?this._readTerminatedString():this._readString(b);case"data":return this._readData(b);case"utf8":return this._readUTF8String();default:return-1}},f.prototype._readInt=function(a){var b=null,c=this._cursor.offset-this._raw.byteOffset;switch(a){case 8:b=this._raw.getInt8(c);break;case 16:b=this._raw.getInt16(c);break;case 32:b=this._raw.getInt32(c);break;case 64:var d=this._raw.getInt32(c),e=this._raw.getInt32(c+4);b=d*Math.pow(2,32)+e}return this._cursor.offset+=a>>3,b},f.prototype._readUint=function(a){var b,c,d=null,e=this._cursor.offset-this._raw.byteOffset;switch(a){case 8:d=this._raw.getUint8(e);break;case 16:d=this._raw.getUint16(e);break;case 24:b=this._raw.getUint16(e),c=this._raw.getUint8(e+2),d=(b<<8)+c;break;case 32:d=this._raw.getUint32(e);break;case 64:b=this._raw.getUint32(e),c=this._raw.getUint32(e+4),d=b*Math.pow(2,32)+c}return this._cursor.offset+=a>>3,d},f.prototype._readString=function(a){for(var b="",c=0;c<a;c++){var d=this._readUint(8);b+=String.fromCharCode(d)}return b},f.prototype._readTemplate=function(a){return this._readUint(a/2)+this._readUint(a/2)/Math.pow(2,a/2)},f.prototype._readTerminatedString=function(){for(var a="";this._cursor.offset-this._offset<this._raw.byteLength;){var b=this._readUint(8);if(0===b)break;a+=String.fromCharCode(b)}return a},f.prototype._readData=function(a){var b=a>0?a:this._raw.byteLength-(this._cursor.offset-this._offset);if(b>0){var c=new Uint8Array(this._raw.buffer,this._cursor.offset,b);return this._cursor.offset+=b,c}return null},f.prototype._readUTF8String=function(){var a=this._raw.byteLength-(this._cursor.offset-this._offset),b=null;return a>0&&(b=new DataView(this._raw.buffer,this._cursor.offset,a),this._cursor.offset+=a),b?d.Utils.dataViewToString(b):b},f.prototype._parseBox=function(){if(this._parsing=!0,this._cursor.offset=this._offset,this._offset+8>this._raw.buffer.byteLength)return void(this._root._incomplete=!0);switch(this._procField("size","uint",32),this._procField("type","string",4),1===this.size&&this._procField("largesize","uint",64),"uuid"===this.type&&this._procFieldArray("usertype",16,"uint",8),this.size){case 0:this._raw=new DataView(this._raw.buffer,this._offset,this._raw.byteLength-this._cursor.offset+8);break;case 1:this._offset+this.size>this._raw.buffer.byteLength?(this._incomplete=!0,this._root._incomplete=!0):this._raw=new DataView(this._raw.buffer,this._offset,this.largesize);break;default:this._offset+this.size>this._raw.buffer.byteLength?(this._incomplete=!0,this._root._incomplete=!0):this._raw=new DataView(this._raw.buffer,this._offset,this.size)}this._incomplete||(this._boxProcessors[this.type]&&this._boxProcessors[this.type].call(this),-1!==this._boxContainers.indexOf(this.type)?this._parseContainerBox():this._data=this._readData())},f.prototype._parseFullBox=function(){this.version=this._readUint(8),this.flags=this._readUint(24)},f.prototype._parseContainerBox=function(){for(this.boxes=[];this._cursor.offset-this._raw.byteOffset<this._raw.byteLength;)this.boxes.push(f.parse(this))},f.prototype.append=function(a,b){d.Utils.appendBox(this,a,b)},f.prototype.getLength=function(){if(this._parsing=!1,this._rawo=null,this.size=0,this._procField("size","uint",32),this._procField("type","string",4),1===this.size&&this._procField("largesize","uint",64),"uuid"===this.type&&this._procFieldArray("usertype",16,"uint",8),this._boxProcessors[this.type]&&this._boxProcessors[this.type].call(this),-1!==this._boxContainers.indexOf(this.type))for(var a=0;a<this.boxes.length;a++)this.size+=this.boxes[a].getLength();return this._data&&this._writeData(this._data),this.size},f.prototype.write=function(){switch(this._parsing=!1,this._cursor.offset=this._parent._cursor.offset,this.size){case 0:this._rawo=new DataView(this._parent._rawo.buffer,this._cursor.offset,this.parent._rawo.byteLength-this._cursor.offset);break;case 1:this._rawo=new DataView(this._parent._rawo.buffer,this._cursor.offset,this.largesize);break;default:this._rawo=new DataView(this._parent._rawo.buffer,this._cursor.offset,this.size)}if(this._procField("size","uint",32),this._procField("type","string",4),1===this.size&&this._procField("largesize","uint",64),"uuid"===this.type&&this._procFieldArray("usertype",16,"uint",8),this._boxProcessors[this.type]&&this._boxProcessors[this.type].call(this),-1!==this._boxContainers.indexOf(this.type))for(var a=0;a<this.boxes.length;a++)this.boxes[a].write();return this._data&&this._writeData(this._data),this._parent._cursor.offset+=this.size,this.size},f.prototype._writeInt=function(a,b){if(this._rawo){var c=this._cursor.offset-this._rawo.byteOffset;switch(a){case 8:this._rawo.setInt8(c,b);break;case 16:this._rawo.setInt16(c,b);break;case 32:this._rawo.setInt32(c,b);break;case 64:var d=Math.floor(b/Math.pow(2,32)),e=b-d*Math.pow(2,32);this._rawo.setUint32(c,d),this._rawo.setUint32(c+4,e)}this._cursor.offset+=a>>3}else this.size+=a>>3},f.prototype._writeUint=function(a,b){if(this._rawo){var c,d,e=this._cursor.offset-this._rawo.byteOffset;switch(a){case 8:this._rawo.setUint8(e,b);break;case 16:this._rawo.setUint16(e,b);break;case 24:c=(16776960&b)>>8,d=255&b,this._rawo.setUint16(e,c),this._rawo.setUint8(e+2,d);break;case 32:this._rawo.setUint32(e,b);break;case 64:c=Math.floor(b/Math.pow(2,32)),d=b-c*Math.pow(2,32),this._rawo.setUint32(e,c),this._rawo.setUint32(e+4,d)}this._cursor.offset+=a>>3}else this.size+=a>>3},f.prototype._writeString=function(a,b){for(var c=0;c<a;c++)this._writeUint(8,b.charCodeAt(c))},f.prototype._writeTerminatedString=function(a){if(0!==a.length){for(var b=0;b<a.length;b++)this._writeUint(8,a.charCodeAt(b));this._writeUint(8,0)}},f.prototype._writeTemplate=function(a,b){var c=Math.floor(b),d=(b-c)*Math.pow(2,a/2);this._writeUint(a/2,c),this._writeUint(a/2,d)},f.prototype._writeData=function(a){var b;if(a)if(this._rawo){if(a instanceof Array){for(var c=this._cursor.offset-this._rawo.byteOffset,b=0;b<a.length;b++)this._rawo.setInt8(c+b,a[b]);this._cursor.offset+=a.length}a instanceof Uint8Array&&(this._root.bytes.set(a,this._cursor.offset),this._cursor.offset+=a.length)}else this.size+=a.length},f.prototype._writeUTF8String=function(a){var b=d.Utils.utf8ToByteArray(a);if(this._rawo)for(var c=new DataView(this._rawo.buffer,this._cursor.offset,b.length),e=0;e<b.length;e++)c.setUint8(e,b[e]);else this.size+=b.length},f.prototype._writeField=function(a,b,c){switch(a){case"uint":this._writeUint(b,c);break;case"int":this._writeInt(b,c);break;case"template":this._writeTemplate(b,c);break;case"string":-1==b?this._writeTerminatedString(c):this._writeString(b,c);break;case"data":this._writeData(c);break;case"utf8":this._writeUTF8String(c)}},f.prototype._boxProcessors.avc1=f.prototype._boxProcessors.encv=function(){this._procFieldArray("reserved1",6,"uint",8),this._procField("data_reference_index","uint",16),this._procField("pre_defined1","uint",16),this._procField("reserved2","uint",16),this._procFieldArray("pre_defined2",3,"uint",32),this._procField("width","uint",16),this._procField("height","uint",16),this._procField("horizresolution","template",32),this._procField("vertresolution","template",32),this._procField("reserved3","uint",32),this._procField("frame_count","uint",16),this._procFieldArray("compressorname",32,"uint",8),this._procField("depth","uint",16),this._procField("pre_defined3","int",16),this._procField("config","data",-1)},f.prototype._boxProcessors.dref=function(){this._procFullBox(),this._procField("entry_count","uint",32),this._procSubBoxes("entries",this.entry_count)},f.prototype._boxProcessors.elst=function(){this._procFullBox(),this._procField("entry_count","uint",32),this._procEntries("entries",this.entry_count,function(a){this._procEntryField(a,"segment_duration","uint",1===this.version?64:32),this._procEntryField(a,"media_time","int",1===this.version?64:32),this._procEntryField(a,"media_rate_integer","int",16),this._procEntryField(a,"media_rate_fraction","int",16)})},f.prototype._boxProcessors.emsg=function(){this._procFullBox(),this._procField("scheme_id_uri","string",-1),this._procField("value","string",-1),this._procField("timescale","uint",32),this._procField("presentation_time_delta","uint",32),this._procField("event_duration","uint",32),this._procField("id","uint",32),this._procField("message_data","data",-1)},f.prototype._boxProcessors.free=f.prototype._boxProcessors.skip=function(){this._procField("data","data",-1)},f.prototype._boxProcessors.frma=function(){this._procField("data_format","uint",32)},f.prototype._boxProcessors.ftyp=f.prototype._boxProcessors.styp=function(){this._procField("major_brand","string",4),this._procField("minor_version","uint",32);var a=-1;this._parsing&&(a=(this._raw.byteLength-(this._cursor.offset-this._raw.byteOffset))/4),this._procFieldArray("compatible_brands",a,"string",4)},f.prototype._boxProcessors.hdlr=function(){this._procFullBox(),this._procField("pre_defined","uint",32),this._procField("handler_type","string",4),this._procFieldArray("reserved",3,"uint",32),this._procField("name","string",-1)},f.prototype._boxProcessors.mdat=function(){this._procField("data","data",-1)},f.prototype._boxProcessors.mdhd=function(){this._procFullBox(),this._procField("creation_time","uint",1==this.version?64:32),this._procField("modification_time","uint",1==this.version?64:32),this._procField("timescale","uint",32),this._procField("duration","uint",1==this.version?64:32),this._parsing||"string"!=typeof this.language||(this.language=this.language.charCodeAt(0)-96<<10|this.language.charCodeAt(1)-96<<5|this.language.charCodeAt(2)-96),this._procField("language","uint",16),this._parsing&&(this.language=String.fromCharCode(96+(this.language>>10&31),96+(this.language>>5&31),96+(31&this.language))),this._procField("pre_defined","uint",16)},f.prototype._boxProcessors.mehd=function(){this._procFullBox(),this._procField("fragment_duration","uint",1==this.version?64:32)},f.prototype._boxProcessors.mfhd=function(){this._procFullBox(),this._procField("sequence_number","uint",32)},f.prototype._boxProcessors.mfro=function(){this._procFullBox(),this._procField("mfra_size","uint",32)},f.prototype._boxProcessors.mp4a=f.prototype._boxProcessors.enca=function(){this._procFieldArray("reserved1",6,"uint",8),this._procField("data_reference_index","uint",16),this._procFieldArray("reserved2",2,"uint",32),this._procField("channelcount","uint",16),this._procField("samplesize","uint",16),this._procField("pre_defined","uint",16),this._procField("reserved3","uint",16),this._procField("samplerate","template",32),this._procField("esds","data",-1)},f.prototype._boxProcessors.mvhd=function(){this._procFullBox(),this._procField("creation_time","uint",1==this.version?64:32),this._procField("modification_time","uint",1==this.version?64:32),this._procField("timescale","uint",32),this._procField("duration","uint",1==this.version?64:32),this._procField("rate","template",32),this._procField("volume","template",16),this._procField("reserved1","uint",16),this._procFieldArray("reserved2",2,"uint",32),this._procFieldArray("matrix",9,"template",32),this._procFieldArray("pre_defined",6,"uint",32),this._procField("next_track_ID","uint",32)},f.prototype._boxProcessors.payl=function(){this._procField("cue_text","utf8")},f.prototype._boxProcessors.pssh=function(){this._procFullBox(),this._procFieldArray("SystemID",16,"uint",8),this._procField("DataSize","uint",32),this._procFieldArray("Data",this.DataSize,"uint",8)},f.prototype._boxProcessors.schm=function(){this._procFullBox(),this._procField("scheme_type","uint",32),this._procField("scheme_version","uint",32),1&this.flags&&this._procField("scheme_uri","string",-1)},f.prototype._boxProcessors.sdtp=function(){this._procFullBox();var a=-1;this._parsing&&(a=this._raw.byteLength-(this._cursor.offset-this._raw.byteOffset)),this._procFieldArray("sample_dependency_table",a,"uint",8)},f.prototype._boxProcessors.sidx=function(){this._procFullBox(),this._procField("reference_ID","uint",32),this._procField("timescale","uint",32),this._procField("earliest_presentation_time","uint",1==this.version?64:32),this._procField("first_offset","uint",1==this.version?64:32),this._procField("reserved","uint",16),this._procField("reference_count","uint",16),this._procEntries("references",this.reference_count,function(a){this._parsing||(a.reference=(1&a.reference_type)<<31,a.reference|=2147483647&a.referenced_size,a.sap=(1&a.starts_with_SAP)<<31,a.sap|=(3&a.SAP_type)<<28,a.sap|=268435455&a.SAP_delta_time),this._procEntryField(a,"reference","uint",32),this._procEntryField(a,"subsegment_duration","uint",32),this._procEntryField(a,"sap","uint",32),this._parsing&&(a.reference_type=a.reference>>31&1,a.referenced_size=2147483647&a.reference,a.starts_with_SAP=a.sap>>31&1,a.SAP_type=a.sap>>28&7,a.SAP_delta_time=268435455&a.sap)})},f.prototype._boxProcessors.smhd=function(){this._procFullBox(),this._procField("balance","uint",16),this._procField("reserved","uint",16)},f.prototype._boxProcessors.ssix=function(){this._procFullBox(),this._procField("subsegment_count","uint",32),this._procEntries("subsegments",this.subsegment_count,function(a){this._procEntryField(a,"ranges_count","uint",32),this._procSubEntries(a,"ranges",a.ranges_count,function(a){this._procEntryField(a,"level","uint",8),this._procEntryField(a,"range_size","uint",24)})})},f.prototype._boxProcessors.stsd=function(){this._procFullBox(),this._procField("entry_count","uint",32),this._procSubBoxes("entries",this.entry_count)},f.prototype._boxProcessors.subs=function(){this._procFullBox(),this._procField("entry_count","uint",32),this._procEntries("entries",this.entry_count,function(a){this._procEntryField(a,"sample_delta","uint",32),this._procEntryField(a,"subsample_count","uint",16),this._procSubEntries(a,"subsamples",a.subsample_count,function(a){this._procEntryField(a,"subsample_size","uint",1===this.version?32:16),this._procEntryField(a,"subsample_priority","uint",8),this._procEntryField(a,"discardable","uint",8),this._procEntryField(a,"codec_specific_parameters","uint",32)})})},f.prototype._boxProcessors.tenc=function(){this._procFullBox(),this._procField("default_IsEncrypted","uint",24),this._procField("default_IV_size","uint",8),this._procFieldArray("default_KID",16,"uint",8)},f.prototype._boxProcessors.tfdt=function(){this._procFullBox(),this._procField("baseMediaDecodeTime","uint",1==this.version?64:32)},f.prototype._boxProcessors.tfhd=function(){this._procFullBox(),this._procField("track_ID","uint",32),1&this.flags&&this._procField("base_data_offset","uint",64),2&this.flags&&this._procField("sample_description_offset","uint",32),8&this.flags&&this._procField("default_sample_duration","uint",32),16&this.flags&&this._procField("default_sample_size","uint",32),32&this.flags&&this._procField("default_sample_flags","uint",32)},f.prototype._boxProcessors.tfra=function(){this._procFullBox(),this._procField("track_ID","uint",32),this._parsing||(this.reserved=0,this.reserved|=(48&this.length_size_of_traf_num)<<4,this.reserved|=(12&this.length_size_of_trun_num)<<2,this.reserved|=3&this.length_size_of_sample_num),this._procField("reserved","uint",32),this._parsing&&(this.length_size_of_traf_num=(48&this.reserved)>>4,this.length_size_of_trun_num=(12&this.reserved)>>2,this.length_size_of_sample_num=3&this.reserved),this._procField("number_of_entry","uint",32),this._procEntries("entries",this.number_of_entry,function(a){this._procEntryField(a,"time","uint",1===this.version?64:32),this._procEntryField(a,"moof_offset","uint",1===this.version?64:32),this._procEntryField(a,"traf_number","uint",8*(this.length_size_of_traf_num+1)),this._procEntryField(a,"trun_number","uint",8*(this.length_size_of_trun_num+1)),this._procEntryField(a,"sample_number","uint",8*(this.length_size_of_sample_num+1))})},f.prototype._boxProcessors.tkhd=function(){this._procFullBox(),this._procField("creation_time","uint",1==this.version?64:32),this._procField("modification_time","uint",1==this.version?64:32),this._procField("track_ID","uint",32),this._procField("reserved1","uint",32),this._procField("duration","uint",1==this.version?64:32),this._procFieldArray("reserved2",2,"uint",32),this._procField("layer","uint",16),this._procField("alternate_group","uint",16),this._procField("volume","template",16),this._procField("reserved3","uint",16),this._procFieldArray("matrix",9,"template",32),this._procField("width","template",32),this._procField("height","template",32)},f.prototype._boxProcessors.trex=function(){this._procFullBox(),this._procField("track_ID","uint",32),this._procField("default_sample_description_index","uint",32),this._procField("default_sample_duration","uint",32),this._procField("default_sample_size","uint",32),this._procField("default_sample_flags","uint",32)},f.prototype._boxProcessors.trun=function(){this._procFullBox(),this._procField("sample_count","uint",32),1&this.flags&&this._procField("data_offset","int",32),4&this.flags&&this._procField("first_sample_flags","uint",32),this._procEntries("samples",this.sample_count,function(a){256&this.flags&&this._procEntryField(a,"sample_duration","uint",32),512&this.flags&&this._procEntryField(a,"sample_size","uint",32),1024&this.flags&&this._procEntryField(a,"sample_flags","uint",32),2048&this.flags&&this._procEntryField(a,"sample_composition_time_offset",1===this.version?"int":"uint",32)})},f.prototype._boxProcessors["url "]=f.prototype._boxProcessors["urn "]=function(){this._procFullBox(),"urn "===this.type&&this._procField("name","string",-1),this._procField("location","string",-1)},f.prototype._boxProcessors.vlab=function(){this._procField("source_label","utf8")},f.prototype._boxProcessors.vmhd=function(){this._procFullBox(),this._procField("graphicsmode","uint",16),this._procFieldArray("opcolor",3,"uint",16)},f.prototype._boxProcessors.vttC=function(){this._procField("config","utf8")},f.prototype._boxProcessors.vtte=function(){}},{}],12:[function(a,b,c){(function(a){function b(a){return Array.isArray?Array.isArray(a):"[object Array]"===q(a)}function d(a){return"boolean"==typeof a}function e(a){return null===a}function f(a){return null==a}function g(a){return"number"==typeof a}function h(a){return"string"==typeof a}function i(a){return"symbol"==typeof a}function j(a){return void 0===a}function k(a){return"[object RegExp]"===q(a)}function l(a){return"object"==typeof a&&null!==a}function m(a){return"[object Date]"===q(a)}function n(a){return"[object Error]"===q(a)||a instanceof Error}function o(a){return"function"==typeof a}function p(a){return null===a||"boolean"==typeof a||"number"==typeof a||"string"==typeof a||"symbol"==typeof a||void 0===a}function q(a){return Object.prototype.toString.call(a)}c.isArray=b,c.isBoolean=d,c.isNull=e,c.isNullOrUndefined=f,c.isNumber=g,c.isString=h,c.isSymbol=i,c.isUndefined=j,c.isRegExp=k,c.isObject=l,c.isDate=m,c.isError=n,c.isFunction=o,c.isPrimitive=p,c.isBuffer=a.isBuffer}).call(this,{isBuffer:a(26)})},{26:26}],13:[function(a,b,c){function d(a){return null===a||void 0===a}function e(a){return!(!a||"object"!=typeof a||"number"!=typeof a.length)&&("function"==typeof a.copy&&"function"==typeof a.slice&&!(a.length>0&&"number"!=typeof a[0]))}function f(a,b,c){var f,k;if(d(a)||d(b))return!1;if(a.prototype!==b.prototype)return!1;if(i(a))return!!i(b)&&(a=g.call(a),b=g.call(b),j(a,b,c));if(e(a)){if(!e(b))return!1;if(a.length!==b.length)return!1;for(f=0;f<a.length;f++)if(a[f]!==b[f])return!1;return!0}try{var l=h(a),m=h(b)}catch(n){return!1}if(l.length!=m.length)return!1;for(l.sort(),m.sort(),f=l.length-1;f>=0;f--)if(l[f]!=m[f])return!1;for(f=l.length-1;f>=0;f--)if(k=l[f],!j(a[k],b[k],c))return!1;return typeof a==typeof b}var g=Array.prototype.slice,h=a(15),i=a(14),j=b.exports=function(a,b,c){return c||(c={}),a===b||(a instanceof Date&&b instanceof Date?a.getTime()===b.getTime():!a||!b||"object"!=typeof a&&"object"!=typeof b?c.strict?a===b:a==b:f(a,b,c))}},{14:14,15:15}],14:[function(a,b,c){function d(a){return"[object Arguments]"==Object.prototype.toString.call(a)}function e(a){return a&&"object"==typeof a&&"number"==typeof a.length&&Object.prototype.hasOwnProperty.call(a,"callee")&&!Object.prototype.propertyIsEnumerable.call(a,"callee")||!1}var f="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();c=b.exports=f?d:e,c.supported=d,c.unsupported=e},{}],15:[function(a,b,c){function d(a){var b=[];for(var c in a)b.push(c);return b}c=b.exports="function"==typeof Object.keys?Object.keys:d,c.shim=d},{}],16:[function(a,b,c){function d(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function e(a){return"function"==typeof a}function f(a){return"number"==typeof a}function g(a){return"object"==typeof a&&null!==a}function h(a){return void 0===a}b.exports=d,d.EventEmitter=d,d.prototype._events=void 0,d.prototype._maxListeners=void 0,d.defaultMaxListeners=10,d.prototype.setMaxListeners=function(a){if(!f(a)||a<0||isNaN(a))throw TypeError("n must be a positive number");return this._maxListeners=a,this},d.prototype.emit=function(a){var b,c,d,f,i,j;if(this._events||(this._events={}),"error"===a&&(!this._events.error||g(this._events.error)&&!this._events.error.length)){if((b=arguments[1])instanceof Error)throw b;throw TypeError('Uncaught, unspecified "error" event.')}if(c=this._events[a],h(c))return!1;if(e(c))switch(arguments.length){case 1:c.call(this);break;case 2:c.call(this,arguments[1]);break;case 3:c.call(this,arguments[1],arguments[2]);break;default:for(d=arguments.length,f=new Array(d-1),i=1;i<d;i++)f[i-1]=arguments[i];c.apply(this,f)}else if(g(c)){for(d=arguments.length,f=new Array(d-1),i=1;i<d;i++)f[i-1]=arguments[i];for(j=c.slice(),d=j.length,i=0;i<d;i++)j[i].apply(this,f)}return!0},d.prototype.addListener=function(a,b){var c;if(!e(b))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",a,e(b.listener)?b.listener:b),this._events[a]?g(this._events[a])?this._events[a].push(b):this._events[a]=[this._events[a],b]:this._events[a]=b,g(this._events[a])&&!this._events[a].warned){var c;c=h(this._maxListeners)?d.defaultMaxListeners:this._maxListeners,c&&c>0&&this._events[a].length>c&&(this._events[a].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[a].length),"function"==typeof console.trace&&console.trace())}return this},d.prototype.on=d.prototype.addListener,d.prototype.once=function(a,b){function c(){this.removeListener(a,c),d||(d=!0,b.apply(this,arguments))}if(!e(b))throw TypeError("listener must be a function");var d=!1;return c.listener=b,this.on(a,c),this},d.prototype.removeListener=function(a,b){var c,d,f,h;if(!e(b))throw TypeError("listener must be a function");if(!this._events||!this._events[a])return this;if(c=this._events[a],f=c.length,d=-1,c===b||e(c.listener)&&c.listener===b)delete this._events[a],this._events.removeListener&&this.emit("removeListener",a,b);else if(g(c)){for(h=f;h-- >0;)if(c[h]===b||c[h].listener&&c[h].listener===b){d=h;break}if(d<0)return this;1===c.length?(c.length=0,delete this._events[a]):c.splice(d,1),this._events.removeListener&&this.emit("removeListener",a,b)}return this},d.prototype.removeAllListeners=function(a){var b,c;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[a]&&delete this._events[a],this;if(0===arguments.length){for(b in this._events)"removeListener"!==b&&this.removeAllListeners(b);return this.removeAllListeners("removeListener"),this._events={},this}if(c=this._events[a],e(c))this.removeListener(a,c);else for(;c.length;)this.removeListener(a,c[c.length-1]);return delete this._events[a],this},d.prototype.listeners=function(a){return this._events&&this._events[a]?e(this._events[a])?[this._events[a]]:this._events[a].slice():[]},d.listenerCount=function(a,b){return a._events&&a._events[b]?e(a._events[b])?1:a._events[b].length:0}},{}],17:[function(a,b,c){c.read=function(a,b,c,d,e){var f,g,h=8*e-d-1,i=(1<<h)-1,j=i>>1,k=-7,l=c?e-1:0,m=c?-1:1,n=a[b+l];for(l+=m,f=n&(1<<-k)-1,n>>=-k,k+=h;k>0;f=256*f+a[b+l],l+=m,k-=8);for(g=f&(1<<-k)-1,f>>=-k,k+=d;k>0;g=256*g+a[b+l],l+=m,k-=8);if(0===f)f=1-j;else{if(f===i)return g?NaN:1/0*(n?-1:1);g+=Math.pow(2,d),f-=j}return(n?-1:1)*g*Math.pow(2,f-d)},c.write=function(a,b,c,d,e,f){var g,h,i,j=8*f-e-1,k=(1<<j)-1,l=k>>1,m=23===e?Math.pow(2,-24)-Math.pow(2,-77):0,n=d?0:f-1,o=d?1:-1,p=b<0||0===b&&1/b<0?1:0;for(b=Math.abs(b),isNaN(b)||b===1/0?(h=isNaN(b)?1:0,g=k):(g=Math.floor(Math.log(b)/Math.LN2),b*(i=Math.pow(2,-g))<1&&(g--,i*=2),b+=g+l>=1?m/i:m*Math.pow(2,1-l),b*i>=2&&(g++,i/=2),g+l>=k?(h=0,g=k):g+l>=1?(h=(b*i-1)*Math.pow(2,e),g+=l):(h=b*Math.pow(2,l-1)*Math.pow(2,e),g=0));e>=8;a[c+n]=255&h,n+=o,h/=256,e-=8);for(g=g<<e|h,j+=e;j>0;a[c+n]=255&g,n+=o,g/=256,j-=8);a[c+n-o]|=128*p}},{}],18:[function(a,b,c){!function(a,b,c,d,e){function f(a){this.node=a}function g(){this.events=[],this.head=null,this.body=null}function h(){this.styling=null,this.layout=null}function i(){this.styles={}}function j(){this.id=null,this.styleAttrs=null,this.styleRefs=null}function k(){this.regions={}}function l(a){this.kind=a,this.begin=null,this.end=null,this.styleAttrs=null,this.regionID=null,this.sets=null,this.timeContainer=null}function m(){l.call(this,"body")}function n(){l.call(this,"div")}function o(){l.call(this,"p")}function p(){l.call(this,"span"),this.space=null}function q(){l.call(this,"span"),this.space=null,this.text=null}function r(){l.call(this,"br")}function s(){this.id=null,this.begin=null,this.end=null,this.styleAttrs=null,this.sets=null}function t(){this.begin=null,this.end=null,this.qname=null,this.value=null}function u(a){return a&&"xml:id"in a.attributes?a.attributes["xml:id"].value||null:null}function v(a){return a&&"region"in a.attributes?a.attributes.region.value:""}function w(a,b){var c=a&&"timeContainer"in a.attributes?a.attributes.timeContainer.value:null;return c&&"par"!==c?"seq"===c?"seq":(K(b,"Illegal value of timeContainer (assuming 'par')"),"par"):"par"}function x(a){return a&&"style"in a.attributes?a.attributes.style.value.split(" "):[]}function y(a,b){var c={};if(null!==a)for(var e in a.attributes){var f=a.attributes[e].uri+" "+a.attributes[e].local,g=d.byQName[f];if(void 0!==g){var h=g.parse(a.attributes[e].value);null!==h?(c[f]=h,g===d.byName.zIndex&&J(b,"zIndex attribute present but not used by IMSC1 since regions do not overlap")):K(b,"Cannot parse styling attribute "+f+" --\x3e "+a.attributes[e].value)}}return c}function z(a,b,c){for(var d in a.attributes)if(a.attributes[d].uri===b&&a.attributes[d].local===c)return a.attributes[d].value;return null}function A(a,b){var d=z(a,c.ns_ittp,"aspectRatio"),e=null;if(null!==d){var f=/(\d+) (\d+)/,g=f.exec(d);if(null!==g){var h=parseInt(g[1]),i=parseInt(g[2]);0!==h&&0!==i?e=h/i:K(b,"Illegal aspectRatio values (ignoring)")}else K(b,"Malformed aspectRatio attribute (ignoring)")}return e}function B(a,b){var d=z(a,c.ns_ttp,"cellResolution"),e=15,f=32;if(null!==d){var g=/(\d+) (\d+)/,h=g.exec(d);null!==h?(f=parseInt(h[1]),e=parseInt(h[2])):J(b,"Malformed cellResolution value (using initial value instead)")}return{w:f,h:e}}function C(a,b){var d,e=z(a,c.ns_ttp,"frameRate"),f=30;if(null!==e){d=/(\d+)/.exec(e),null!==d?f=parseInt(d[1]):J(b,"Malformed frame rate attribute (using initial value instead)")}
var g=z(a,c.ns_ttp,"frameRateMultiplier"),h=1;if(null!==g){d=/(\d+) (\d+)/.exec(g),null!==d?h=parseInt(d[1])/parseInt(d[2]):J(b,"Malformed frame rate multiplier attribute (using initial value instead)")}var i=h*f,j=1,k=z(a,c.ns_ttp,"tickRate");if(null===k)null!==e&&(j=i);else{d=/(\d+)/.exec(k),null!==d?j=parseInt(d[1]):J(b,"Malformed tick rate attribute (using initial value instead)")}return{effectiveFrameRate:i,tickRate:j}}function D(a,b){var d=z(a,c.ns_tts,"extent");if(null===d)return null;var f=d.split(" ");if(2!==f.length)return J(b,"Malformed extent (ignoring)"),null;var g=e.parseLength(f[0]),h=e.parseLength(f[1]);return h&&g?{h:h,w:g}:(J(b,"Malformed extent values (ignoring)"),null)}function E(a,b,c){var d,e=/^(\d{2,}):(\d\d):(\d\d(?:\.\d+)?)$/,f=/^(\d{2,}):(\d\d):(\d\d)\:(\d{2,})$/,g=/^(\d+(?:\.\d+)?)f$/,h=/^(\d+(?:\.\d+)?)t$/,i=/^(\d+(?:\.\d+)?)ms$/,j=/^(\d+(?:\.\d+)?)s$/,k=/^(\d+(?:\.\d+)?)h$/,l=/^(\d+(?:\.\d+)?)m$/,m=null;return null!==(d=g.exec(c))?null!==b&&(m=parseFloat(d[1])/b):null!==(d=h.exec(c))?null!==a&&(m=parseFloat(d[1])/a):null!==(d=i.exec(c))?m=parseFloat(d[1])/1e3:null!==(d=j.exec(c))?m=parseFloat(d[1]):null!==(d=k.exec(c))?m=3600*parseFloat(d[1]):null!==(d=l.exec(c))?m=60*parseFloat(d[1]):null!==(d=e.exec(c))?m=3600*parseInt(d[1])+60*parseInt(d[2])+parseFloat(d[3]):null!==(d=f.exec(c))&&null!==b&&(m=3600*parseInt(d[1])+60*parseInt(d[2])+parseInt(d[3])+(null===d[4]?0:parseInt(d[4])/b)),m}function F(a,b,c,d){var e=b&&"seq"===b.timeContainer,f=0;c&&"begin"in c.attributes&&null===(f=E(a.tickRate,a.effectiveFrameRate,c.attributes.begin.value))&&(J(d,"Malformed begin value "+c.attributes.begin.value+" (using 0)"),f=0);var g=e?0:null;c&&"dur"in c.attributes&&null===(g=E(a.tickRate,a.effectiveFrameRate,c.attributes.dur.value))&&J(d,"Malformed dur value "+c.attributes.dur.value+" (ignoring)");var h=null;c&&"end"in c.attributes&&null===(h=E(a.tickRate,a.effectiveFrameRate,c.attributes.end.value))&&J(d,"Malformed end value (ignoring)");var i=0;if(b&&(i=e&&"contents"in b&&b.contents.length>0?b.contents[b.contents.length-1].end:b.begin||0),f+=i,null!==g)h=f+g;else{var j=b&&"end"in b?b.end:Number.POSITIVE_INFINITY;h=null!==h?h+i:j}return{begin:f,end:h}}function G(a,b,c){for(;b.styleRefs.length>0;){var d=b.styleRefs.pop();d in a.styles?(G(a,a.styles[d],c),I(a.styles[d].styleAttrs,b.styleAttrs)):K(c,"Non-existant style id referenced")}}function H(a,b,c,d){for(var e=b.length-1;e>=0;e--){var f=b[e];f in a.styles?I(a.styles[f].styleAttrs,c):K(d,"Non-existant style id referenced")}}function I(a,b){for(var c in a)c in b||(b[c]=a[c])}function J(a,b){if(a&&a.warn&&a.warn(b))throw b}function K(a,b){if(a&&a.error&&a.error(b))throw b}function L(a,b){throw a&&a.fatal&&a.fatal(b),b}function M(a,b){for(var c,d=0,e=a.length-1;d<=e;){c=Math.floor((d+e)/2);var f=a[c];if(f<b)d=c+1;else{if(!(f>b))return{found:!0,index:c};e=c-1}}return{found:!1,index:d}}a.fromXML=function(a,d,e){var l=b.parser(!0,{xmlns:!0}),u=[],v=[],w=[],x=0,y=null;l.onclosetag=function(a){if(u[0]instanceof i)for(var b in u[0].styles)G(u[0],u[0].styles[b],d);else if(u[0]instanceof o||u[0]instanceof p){if(u[0].contents.length>1){var g,h=[u[0].contents[0]];for(g=1;g<u[0].contents.length;g++)u[0].contents[g]instanceof q&&h[h.length-1]instanceof q?h[h.length-1].text+=u[0].contents[g].text:h.push(u[0].contents[g]);u[0].contents=h}u[0]instanceof p&&1===u[0].contents.length&&u[0].contents[0]instanceof q&&null===u[0].text&&(u[0].text=u[0].contents[0].text,delete u[0].contents)}else u[0]instanceof f&&(u[0].node.uri===c.ns_tt&&"metadata"===u[0].node.local?x--:x>0&&e&&"onCloseTag"in e&&e.onCloseTag());w.shift(),v.shift(),u.shift()},l.ontext=function(a){if(void 0===u[0]);else if(u[0]instanceof p||u[0]instanceof o){var b=new q;b.initFromText(y,u[0],a,w[0],d),u[0].contents.push(b)}else u[0]instanceof f&&x>0&&e&&"onText"in e&&e.onText(a)},l.onopentag=function(a){var b=a.attributes["xml:space"];b?w.unshift(b.value):0===w.length?w.unshift("default"):w.unshift(w[0]);var l=a.attributes["xml:lang"];if(l?v.unshift(l.value):0===v.length?v.unshift(""):v.unshift(v[0]),a.uri===c.ns_tt)if("tt"===a.local)null!==y&&L("Two <tt> elements at ("+this.line+","+this.column+")"),y=new g,y.initFromNode(a,d),u.unshift(y);else if("head"===a.local)u[0]instanceof g||L("Parent of <head> element is not <tt> at ("+this.line+","+this.column+")"),null!==y.head&&L("Second <head> element at ("+this.line+","+this.column+")"),y.head=new h,u.unshift(y.head);else if("styling"===a.local)u[0]instanceof h||L("Parent of <styling> element is not <head> at ("+this.line+","+this.column+")"),null!==y.head.styling&&L("Second <styling> element at ("+this.line+","+this.column+")"),y.head.styling=new i,u.unshift(y.head.styling);else if("style"===a.local){var q;u[0]instanceof i?(q=new j,q.initFromNode(a,d),q.id?y.head.styling.styles[q.id]=q:K("<style> element missing @id attribute"),u.unshift(q)):u[0]instanceof s?(q=new j,q.initFromNode(a,d),I(q.styleAttrs,u[0].styleAttrs),u.unshift(q)):L(d,"Parent of <style> element is not <styling> or <region> at ("+this.line+","+this.column+")")}else if("layout"===a.local)u[0]instanceof h||L(d,"Parent of <layout> element is not <head> at "+this.line+","+this.column+")"),null!==y.head.layout&&L(d,"Second <layout> element at "+this.line+","+this.column+")"),y.head.layout=new k,u.unshift(y.head.layout);else if("region"===a.local){u[0]instanceof k||L(d,"Parent of <region> element is not <layout> at "+this.line+","+this.column+")");var z=new s;z.initFromNode(y,a,d),!z.id||z.id in y.head.layout.regions?K(d,"Ignoring <region> with duplicate or missing @id at "+this.line+","+this.column+")"):(y.head.layout.regions[z.id]=z,y._registerEvent(z)),u.unshift(z)}else if("body"===a.local){u[0]instanceof g||L(d,"Parent of <body> element is not <tt> at "+this.line+","+this.column+")"),null!==y.body&&L(d,"Second <body> element at "+this.line+","+this.column+")");var A=new m;A.initFromNode(y,a,d),y._registerEvent(A),y.body=A,u.unshift(A)}else if("div"===a.local){u[0]instanceof n||u[0]instanceof m||L(d,"Parent of <div> element is not <body> or <div> at "+this.line+","+this.column+")");var B=new n;B.initFromNode(y,u[0],a,d),y._registerEvent(B),u[0].contents.push(B),u.unshift(B)}else if("p"===a.local){u[0]instanceof n||L(d,"Parent of <p> element is not <div> at "+this.line+","+this.column+")");var C=new o;C.initFromNode(y,u[0],a,d),y._registerEvent(C),u[0].contents.push(C),u.unshift(C)}else if("span"===a.local){u[0]instanceof p||u[0]instanceof o||L(d,"Parent of <span> element is not <span> or <p> at "+this.line+","+this.column+")");var D=new p;D.initFromNode(y,u[0],a,w[0],d),y._registerEvent(D),u[0].contents.push(D),u.unshift(D)}else if("br"===a.local){u[0]instanceof p||u[0]instanceof o||L(d,"Parent of <br> element is not <span> or <p> at "+this.line+","+this.column+")");var E=new r;E.initFromNode(y,u[0],a,d),y._registerEvent(E),u[0].contents.push(E),u.unshift(E)}else if("set"===a.local){u[0]instanceof p||u[0]instanceof o||u[0]instanceof n||u[0]instanceof m||u[0]instanceof s||u[0]instanceof r||L(d,"Parent of <set> element is not a content element or a region at "+this.line+","+this.column+")");var F=new t;F.initFromNode(y,u[0],a,d),y._registerEvent(F),u[0].sets.push(F),u.unshift(F)}else u.unshift(new f(a));else u.unshift(new f(a));if(u[0]instanceof f)if(a.uri===c.ns_tt&&"metadata"===a.local)x++;else if(x>0&&e&&"onOpenTag"in e){var G=[];for(var H in a.attributes)G[a.attributes[H].uri+" "+a.attributes[H].local]={uri:a.attributes[H].uri,local:a.attributes[H].local,value:a.attributes[H].value};e.onOpenTag(a.uri,a.local,G)}},l.write(a).close(),null!==y.head?delete y.head.styling:y.head=new h,null===y.head.layout&&(y.head.layout=new k);var z=!1;for(var A in y.head.layout.regions){z=!0;break}if(!z){var B=s.createDefaultRegion();y.head.layout.regions[B.id]=B}return y},g.prototype.initFromNode=function(a,b){this.cellResolution=B(a,b);var d=C(a,b);this.effectiveFrameRate=d.effectiveFrameRate,this.tickRate=d.tickRate,this.aspectRatio=A(a,b);var e=z(a,c.ns_ttp,"timeBase");null!==e&&"media"!==e&&L(b,"Unsupported time base");var f=D(a,b);null===f?this.pxDimensions={h:480,w:640}:("px"===f.h.unit&&"px"===f.w.unit||L(b,"Extent on TT must be in px or absent"),this.pxDimensions={h:f.h.value,w:f.w.value})},g.prototype._registerEvent=function(a){if(!(a.end<=a.begin)){var b=M(this.events,a.begin);if(b.found||this.events.splice(b.index,0,a.begin),a.end!==Number.POSITIVE_INFINITY){var c=M(this.events,a.end);c.found||this.events.splice(c.index,0,a.end)}}},g.prototype.getMediaTimeRange=function(){return[this.events[0],this.events[this.events.length-1]]},g.prototype.getMediaTimeEvents=function(){return this.events},j.prototype.initFromNode=function(a,b){this.id=u(a),this.styleAttrs=y(a,b),this.styleRefs=x(a)},l.prototype.initFromNode=function(a,b,c,d){var e=F(a,b,c,d);this.begin=e.begin,this.end=e.end,this.styleAttrs=y(c,d),null!==a.head&&null!==a.head.styling&&H(a.head.styling,x(c),this.styleAttrs,d),this.regionID=v(c),this.sets=[],this.timeContainer=w(c,d)},m.prototype.initFromNode=function(a,b,c){l.prototype.initFromNode.call(this,a,null,b,c),this.contents=[]},n.prototype.initFromNode=function(a,b,c,d){l.prototype.initFromNode.call(this,a,b,c,d),this.contents=[]},o.prototype.initFromNode=function(a,b,c,d){l.prototype.initFromNode.call(this,a,b,c,d),this.contents=[]},p.prototype.initFromNode=function(a,b,c,d,e){l.prototype.initFromNode.call(this,a,b,c,e),this.space=d,this.contents=[]},q.prototype.initFromText=function(a,b,c,d,e){l.prototype.initFromNode.call(this,a,b,null,e),this.text=c,this.space=d},r.prototype.initFromNode=function(a,b,c,d){l.prototype.initFromNode.call(this,a,b,c,d)},s.createDefaultRegion=function(){var a=new s;return a.id="",a.begin=0,a.end=Number.POSITIVE_INFINITY,a.styleAttrs={},a.sets=[],a},s.prototype.initFromNode=function(a,b,c){this.id=u(b);var d=F(a,null,b,c);this.begin=d.begin,this.end=d.end,this.styleAttrs=y(b,c),this.sets=[],null!==a.head&&null!==a.head.styling&&H(a.head.styling,x(b),this.styleAttrs,c)},t.prototype.initFromNode=function(a,b,c,d){var e=F(a,b,c,d);this.begin=e.begin,this.end=e.end;var f=y(c,d);for(var g in f){if(this.qname){K(d,"More than one style specified on set");break}this.qname=g,this.value=f[g]}}}(void 0===c?this.imscDoc={}:c,"undefined"==typeof sax?a(45):sax,"undefined"==typeof imscNames?a(22):imscNames,"undefined"==typeof imscStyles?a(23):imscStyles,"undefined"==typeof imscUtils?a(24):imscUtils)},{22:22,23:23,24:24,45:45}],19:[function(a,b,c){!function(a,b,c){function d(a,b,h){var j;if("region"===h.kind?(j=document.createElement("div"),j.style.position="absolute"):"body"===h.kind?j=document.createElement("div"):"div"===h.kind?j=document.createElement("div"):"p"===h.kind?j=document.createElement("p"):"span"===h.kind?j=document.createElement("span"):"br"===h.kind&&(j=document.createElement("br")),!j)return void n(a.errorHandler,"Error processing ISD element kind: "+h.kind);j.style.margin="0";for(var k in o){var l=o[k],m=h.styleAttrs[l.qname];void 0!==m&&null!==l.map&&l.map(a,j,h,m)}var p=j,q=h.styleAttrs[c.byName.multiRowAlign.qname];if(q&&"auto"!==q){var r=document.createElement("span");r.style.display="inline-block",r.style.textAlign=q,j.appendChild(r),p=r,a.mra=q}var s=h.styleAttrs[c.byName.linePadding.qname];if(s&&s>0&&(a.lp=s),"span"===h.kind&&h.text)if(a.lp||a.mra)for(var t=0;t<h.text.length;t++){var u=document.createElement("span");u.textContent=h.text.charAt(t),j.appendChild(u)}else j.textContent=h.text;b.appendChild(j);for(var v in h.contents)d(a,p,h.contents[v]);if((a.lp||a.mra)&&"p"===h.kind){var w=[];f(p,w,"red"),i(w,a.lp*a.h),a.lp&&delete a.lp,a.mra&&delete a.mra}if("region"===h.kind){var x=[];g(p,x);var y=h.styleAttrs[c.byName.writingMode.qname];if(("lrtb"===y||"lr"===y||"rltb"===y||"rl"===y)&&a.enableRollUp&&h.contents.length>0&&"after"===h.styleAttrs[c.byName.displayAlign.qname]){var z=""===h.id?"_":h.id,A=new e(z,x);if(a.currentISDState[A.id]=A,a.previousISDState&&A.id in a.previousISDState&&a.previousISDState[A.id].plist.length>0&&A.plist.length>1&&A.plist[A.plist.length-2].text===a.previousISDState[A.id].plist[a.previousISDState[A.id].plist.length-1].text){var B=j.firstElementChild;B.style.bottom="-"+A.plist[A.plist.length-1].height+"px",B.style.transition="transform 0.4s",B.style.position="relative",B.style.transform="translateY(-"+A.plist[A.plist.length-1].height+"px)"}}}}function e(a,b){this.id=a,this.plist=b}function f(a,b,c){if(0===a.childElementCount)b.push({element:a,bgcolor:c});else for(var d=a.style.backgroundColor||c,e=a.firstChild;e;)e.nodeType===Node.ELEMENT_NODE&&f(e,b,d),e=e.nextSibling}function g(a,b){if(0===a.childElementCount&&"span"===a.localName){var c=a.getBoundingClientRect();0!==b.length&&h(c.top,c.height,b[b.length-1].top,b[b.length-1].height)?(c.top<b[b.length-1].top&&(b[b.length-1].top=c.top),c.height>b[b.length-1].height&&(b[b.length-1].height=c.height),b[b.length-1].text+=a.textContent):b.push({top:c.top,height:c.height,text:a.textContent})}else for(var d=a.firstChild;d;)d.nodeType===Node.ELEMENT_NODE&&g(d,b),d=d.nextSibling}function h(a,b,c,d){return a+b<c+d&&a>c||c+d<=a+b&&c>=a}function i(a,b){for(var c=null,d=!0,e=!1,f=0;f<=a.length;f++)if(f===a.length||"br"!==a[f].element.localName){if(null===c||f===a.length||!h(a[f].element.getBoundingClientRect().top,a[f].element.getBoundingClientRect().height,a[c].element.getBoundingClientRect().top,a[c].element.getBoundingClientRect().height)){if(b&&!d){for(;--f>=0;)if(0!==a[f].element.getBoundingClientRect().width){if(k(a[f].element,a[f].color,b),0!==a[f].element.getBoundingClientRect().width&&h(a[f].element.getBoundingClientRect().top,a[f].element.getBoundingClientRect().height,a[c].element.getBoundingClientRect().top,a[c].element.getBoundingClientRect().height))break;l(a[f].element)}d=!0;continue}if(f!==a.length&&null!==c&&!e){var g=document.createElement("br");a[f].element.parentElement.insertBefore(g,a[f].element),a.splice(f,0,{element:g}),e=!0;continue}if(f!==a.length&&b)for(;f<a.length;f++)if(0!==a[f].element.getBoundingClientRect().width){j(a[f].element,a[f].color,b);break}d=!1,e=!1,c=f}}else e=!0}function j(a,b,c){a.style.paddingLeft=c+"px",a.style.backgroundColor=b}function k(a,b,c){a.style.paddingRight=c+"px",a.style.backgroundColor=b}function l(a){a.style.paddingRight=null}function m(a,b){this.qname=a,this.map=b}function n(a,b){if(a&&a.error&&a.error(b))throw b}a.render=function(a,b,c,e,f,g,h,i,j){var k=e||b.clientHeight,l=f||b.clientWidth;if(null!==a.aspectRatio){var m=k*a.aspectRatio;m>l?k=Math.round(l/a.aspectRatio):l=m}var n=document.createElement("div");n.style.position="relative",n.style.width=l+"px",n.style.height=k+"px",n.style.margin="auto",n.style.top=0,n.style.bottom=0,n.style.left=0,n.style.right=0,n.style.zIndex=0;var o={h:k,w:l,regionH:null,regionW:null,imgResolver:c,displayForcedOnlyMode:g||!1,isd:a,errorHandler:h,previousISDState:i,enableRollUp:j||!1,currentISDState:{}};b.appendChild(n);for(var p in a.contents)d(o,n,a.contents[p]);return o.currentISDState};var o=[new m("http://www.w3.org/ns/ttml#styling backgroundColor",function(a,b,c,d){b.style.backgroundColor="rgba("+d[0].toString()+","+d[1].toString()+","+d[2].toString()+","+(d[3]/255).toString()+")"}),new m("http://www.w3.org/ns/ttml#styling color",function(a,b,c,d){b.style.color="rgba("+d[0].toString()+","+d[1].toString()+","+d[2].toString()+","+(d[3]/255).toString()+")"}),new m("http://www.w3.org/ns/ttml#styling direction",function(a,b,c,d){b.style.direction=d}),new m("http://www.w3.org/ns/ttml#styling display",function(a,b,c,d){}),new m("http://www.w3.org/ns/ttml#styling displayAlign",function(a,b,c,d){b.style.display="flex",b.style.flexDirection="column","before"===d?b.style.justifyContent="flex-start":"center"===d?b.style.justifyContent="center":"after"===d&&(b.style.justifyContent="flex-end")}),new m("http://www.w3.org/ns/ttml#styling extent",function(a,b,c,d){a.regionH=d.h*a.h,a.regionW=d.w*a.w;var e=0,f=0,g=c.styleAttrs["http://www.w3.org/ns/ttml#styling padding"];g&&(e=(g[0]+g[2])*a.h,f=(g[1]+g[3])*a.w),b.style.height=a.regionH-e+"px",b.style.width=a.regionW-f+"px"}),new m("http://www.w3.org/ns/ttml#styling fontFamily",function(a,b,c,d){var e=[];for(var f in d)"monospaceSerif"===d[f]?(e.push("Courier New"),e.push('"Liberation Mono"'),e.push("Courier"),e.push("monospace")):"proportionalSansSerif"===d[f]?(e.push("Arial"),e.push("Helvetica"),e.push('"Liberation Sans"'),e.push("sans-serif")):"monospace"===d[f]?e.push("monospace"):"sansSerif"===d[f]?e.push("sans-serif"):"serif"===d[f]?e.push("serif"):"monospaceSansSerif"===d[f]?(e.push("Consolas"),e.push("monospace")):"proportionalSerif"===d[f]?e.push("serif"):e.push(d[f]);b.style.fontFamily=e.join(",")}),new m("http://www.w3.org/ns/ttml#styling fontSize",function(a,b,c,d){b.style.fontSize=d*a.h+"px"}),new m("http://www.w3.org/ns/ttml#styling fontStyle",function(a,b,c,d){b.style.fontStyle=d}),new m("http://www.w3.org/ns/ttml#styling fontWeight",function(a,b,c,d){b.style.fontWeight=d}),new m("http://www.w3.org/ns/ttml#styling lineHeight",function(a,b,c,d){b.style.lineHeight="normal"===d?"normal":d*a.h+"px"}),new m("http://www.w3.org/ns/ttml#styling opacity",function(a,b,c,d){b.style.opacity=d}),new m("http://www.w3.org/ns/ttml#styling origin",function(a,b,c,d){b.style.top=d.h*a.h+"px",b.style.left=d.w*a.w+"px"}),new m("http://www.w3.org/ns/ttml#styling overflow",function(a,b,c,d){b.style.overflow=d}),new m("http://www.w3.org/ns/ttml#styling padding",function(a,b,c,d){var e=[];e[0]=d[0]*a.h+"px",e[1]=d[3]*a.w+"px",e[2]=d[2]*a.h+"px",e[3]=d[1]*a.w+"px",b.style.padding=e.join(" ")}),new m("http://www.w3.org/ns/ttml#styling showBackground",null),new m("http://www.w3.org/ns/ttml#styling textAlign",function(a,b,d,e){var f,g=d.styleAttrs[c.byName.direction.qname];f="start"===e?"rtl"===g?"right":"left":"end"===e?"rtl"===g?"left":"right":e,b.style.textAlign=f}),new m("http://www.w3.org/ns/ttml#styling textDecoration",function(a,b,c,d){b.style.textDecoration=d.join(" ").replace("lineThrough","line-through")}),new m("http://www.w3.org/ns/ttml#styling textOutline",function(a,b,c,d){b.style.textShadow="none"===d?"":"rgba("+d.color[0].toString()+","+d.color[1].toString()+","+d.color[2].toString()+","+(d.color[3]/255).toString()+") 0px 0px "+d.thickness*a.h+"px"}),new m("http://www.w3.org/ns/ttml#styling unicodeBidi",function(a,b,c,d){var e;e="bidiOverride"===d?"bidi-override":d,b.style.unicodeBidi=e}),new m("http://www.w3.org/ns/ttml#styling visibility",function(a,b,c,d){b.style.visibility=d}),new m("http://www.w3.org/ns/ttml#styling wrapOption",function(a,b,c,d){"wrap"===d?"preserve"===c.space?b.style.whiteSpace="pre-wrap":b.style.whiteSpace="normal":"preserve"===c.space?b.style.whiteSpace="pre":b.style.whiteSpace="noWrap"}),new m("http://www.w3.org/ns/ttml#styling writingMode",function(a,b,c,d){"lrtb"===d||"lr"===d?b.style.writingMode="horizontal-tb":"rltb"===d||"rl"===d?b.style.writingMode="horizontal-tb":"tblr"===d?b.style.writingMode="vertical-lr":"tbrl"!==d&&"tb"!==d||(b.style.writingMode="vertical-rl")}),new m("http://www.w3.org/ns/ttml#styling zIndex",function(a,b,c,d){b.style.zIndex=d}),new m("http://www.smpte-ra.org/schemas/2052-1/2010/smpte-tt backgroundImage",function(a,b,c,d){if(null!==a.imgResolver&&null!==d){var e=document.createElement("img"),f=a.imgResolver(d,e);f&&(e.src=f),e.height=a.regionH,e.width=a.regionW,b.appendChild(e)}}),new m("http://www.w3.org/ns/ttml/profile/imsc1#styling forcedDisplay",function(a,b,c,d){a.displayForcedOnlyMode&&!1===d&&(b.style.visibility="hidden")})],p={};for(var q in o)p[o[q].qname]=o[q]}(void 0===c?this.imscHTML={}:c,"undefined"==typeof imscNames?a(22):imscNames,"undefined"==typeof imscStyles?a(23):imscStyles)},{22:22,23:23}],20:[function(a,b,c){!function(a,b,c){function d(a,b,g,j,k,l,m,n){if(b<m.begin||b>=m.end)return null;var o="regionID"in m&&""!==m.regionID?m.regionID:l;if(null!==k&&o!==g.id&&(!("contents"in m)||"contents"in m&&0===m.contents.length||""!==o))return null;var p=new h(m);for(var q in m.sets)b<m.sets[q].begin||b>=m.sets[q].end||(p.styleAttrs[m.sets[q].qname]=m.sets[q].value);var r={};for(var s in p.styleAttrs)if(r[s]=!0,s===c.byName.writingMode.qname&&!(c.byName.direction.qname in p.styleAttrs)){var t=p.styleAttrs[s];"lrtb"===t||"lr"===t?p.styleAttrs[c.byName.direction.qname]="ltr":"rltb"!==t&&"rl"!==t||(p.styleAttrs[c.byName.direction.qname]="rtl")}if(null!==k)for(var u in c.all){var v=c.all[u];if(v.qname===c.byName.textDecoration.qname){var w=k.styleAttrs[v.qname],x=p.styleAttrs[v.qname],y=[];void 0===x?y=w:-1===x.indexOf("none")?((-1===x.indexOf("noUnderline")&&-1!==w.indexOf("underline")||-1!==x.indexOf("underline"))&&y.push("underline"),(-1===x.indexOf("noLineThrough")&&-1!==w.indexOf("lineThrough")||-1!==x.indexOf("lineThrough"))&&y.push("lineThrough"),(-1===x.indexOf("noOverline")&&-1!==w.indexOf("overline")||-1!==x.indexOf("overline"))&&y.push("overline")):y.push("none"),p.styleAttrs[v.qname]=y}else v.inherit&&v.qname in k.styleAttrs&&!(v.qname in p.styleAttrs)&&(p.styleAttrs[v.qname]=k.styleAttrs[v.qname])}for(var z in c.all){var A=c.all[z];A.qname in p.styleAttrs||("region"===p.kind||!1===A.inherit&&null!==A.initial)&&(p.styleAttrs[A.qname]=A.parse(A.initial),r[A.qname]=!0)}for(var B in c.all){var C=c.all[B];if(C.qname in r&&null!==C.compute){var D=C.compute(a,k,p,p.styleAttrs[C.qname]);null!==D?p.styleAttrs[C.qname]=D:i(n,"Style '"+C.qname+"' on element '"+p.kind+"' cannot be computed")}}if("none"===p.styleAttrs[c.byName.display.qname])return null;var E;null===k?E=null===j?[]:[j]:"contents"in m&&(E=m.contents);for(var F in E){var G=d(a,b,g,j,p,o,E[F]);null!==G&&p.contents.push(G.element)}for(var H in p.styleAttrs){-1===c.byQName[H].applies.indexOf(p.kind)&&delete p.styleAttrs[H]}if("span"===p.kind&&p.text&&"default"===p.space){var I=p.text.replace(/\s+/g," ");p.text=I}if("p"===p.kind){var J=[];e(p,J);for(var K=0,L="after_br",M=0;;)if("after_br"===L)K>=J.length||"br"===J[K].kind?(L="before_br",M=K,K--):("preserve"!==J[K].space&&(J[K].text=J[K].text.replace(/^\s+/g,"")),J[K].text.length>0?(L="looking_br",K++):J.splice(K,1));else if("before_br"===L)if(K<0||"br"===J[K].kind){if(L="after_br",(K=M+1)>=J.length)break}else if("preserve"!==J[K].space&&(J[K].text=J[K].text.replace(/\s+$/g,"")),J[K].text.length>0){if(L="after_br",(K=M+1)>=J.length)break}else J.splice(K,1),K--;else K>=J.length||"br"===J[K].kind?(L="before_br",M=K,K--):K++;f(p)}return"div"===p.kind&&c.byName.backgroundImage.qname in p.styleAttrs||"br"===p.kind||"contents"in p&&p.contents.length>0||"span"===p.kind&&null!==p.text||"region"===p.kind&&"always"===p.styleAttrs[c.byName.showBackground.qname]?{region_id:o,element:p}:null}function e(a,b){if("contents"in a)for(var c in a.contents)e(a.contents[c],b);else b.push(a)}function f(a){if("br"===a.kind)return!1;if("text"in a)return 0===a.text.length;if("contents"in a){for(var b=a.contents.length;b--;)f(a.contents[b])&&a.contents.splice(b,1);return 0===a.contents.length}}function g(a){this.contents=[],this.aspectRatio=a.aspectRatio}function h(a){this.kind=a.kind||"region",a.id&&(this.id=a.id),this.styleAttrs={};for(var b in a.styleAttrs)this.styleAttrs[b]=a.styleAttrs[b];"text"in a?this.text=a.text:"br"!==a.kind&&(this.contents=[]),"space"in a&&(this.space=a.space)}function i(a,b){if(a&&a.error&&a.error(b))throw b}a.generateISD=function(a,b,c){var e=new g(a);for(var f in a.head.layout.regions){var h=d(a,b,a.head.layout.regions[f],a.body,null,"",a.head.layout.regions[f],c);null!==h&&e.contents.push(h.element)}return e}}(void 0===c?this.imscISD={}:c,"undefined"==typeof imscNames?a(22):imscNames,"undefined"==typeof imscStyles?a(23):imscStyles)},{22:22,23:23}],21:[function(a,b,c){c.generateISD=a(20).generateISD,c.fromXML=a(18).fromXML,c.renderHTML=a(19).render},{18:18,19:19,20:20}],22:[function(a,b,c){!function(a){a.ns_tt="http://www.w3.org/ns/ttml",a.ns_tts="http://www.w3.org/ns/ttml#styling",a.ns_ttp="http://www.w3.org/ns/ttml#parameter",a.ns_xml="http://www.w3.org/XML/1998/namespace",a.ns_itts="http://www.w3.org/ns/ttml/profile/imsc1#styling",a.ns_ittp="http://www.w3.org/ns/ttml/profile/imsc1#parameter",a.ns_smpte="http://www.smpte-ra.org/schemas/2052-1/2010/smpte-tt",a.ns_ebutts="urn:ebu:tt:style"}(void 0===c?this.imscNames={}:c)},{}],23:[function(a,b,c){!function(a,b,c){function d(a,b,c,d,e,f,g,h){this.name=b,this.ns=a,this.qname=a+" "+b,this.inherit=e,this.animatable=f,this.initial=c,this.applies=d,this.parse=g,this.compute=h}a.all=[new d(b.ns_tts,"backgroundColor","transparent",["body","div","p","region","span"],!1,!0,c.parseColor,null),new d(b.ns_tts,"color","white",["span"],!0,!0,c.parseColor,null),new d(b.ns_tts,"direction","ltr",["p","span"],!0,!0,function(a){return a},null),new d(b.ns_tts,"display","auto",["body","div","p","region","span"],!1,!0,function(a){return a},null),new d(b.ns_tts,"displayAlign","before",["region"],!1,!0,function(a){return a},null),new d(b.ns_tts,"extent","auto",["tt","region"],!1,!0,function(a){if("auto"===a)return a;var b=a.split(" ");if(2!==b.length)return null;var d=c.parseLength(b[0]),e=c.parseLength(b[1]);return e&&d?{h:e,w:d}:null},function(a,b,c,d){var e,f;if("auto"===d)e=1;else if("%"===d.h.unit)e=d.h.value/100;else{if("px"!==d.h.unit)return null;e=d.h.value/a.pxDimensions.h}if("auto"===d)f=1;else if("%"===d.w.unit)f=d.w.value/100;else{if("px"!==d.w.unit)return null;f=d.w.value/a.pxDimensions.w}return{h:e,w:f}}),new d(b.ns_tts,"fontFamily","default",["span"],!0,!0,function(a){var b=a.split(","),c=[];for(var d in b)"'"!==b[d].charAt(0)&&'"'!==b[d].charAt(0)&&"default"===b[d]?c.push("monospaceSerif"):c.push(b[d]);return c},null),new d(b.ns_tts,"fontSize","1c",["span"],!0,!0,c.parseLength,function(b,c,d,e){var f;if("%"===e.unit)f=null!==c?c.styleAttrs[a.byName.fontSize.qname]*e.value/100:e.value/100/b.cellResolution.h;else if("em"===e.unit)f=null!==c?c.styleAttrs[a.byName.fontSize.qname]*e.value:e.value/b.cellResolution.h;else if("c"===e.unit)f=e.value/b.cellResolution.h;else{if("px"!==e.unit)return null;f=e.value/b.pxDimensions.h}return f}),new d(b.ns_tts,"fontStyle","normal",["span"],!0,!0,function(a){return a},null),new d(b.ns_tts,"fontWeight","normal",["span"],!0,!0,function(a){return a},null),new d(b.ns_tts,"lineHeight","normal",["p"],!0,!0,function(a){return"normal"===a?a:c.parseLength(a)},function(b,c,d,e){var f;if("normal"===e)f=e;else if("%"===e.unit)f=d.styleAttrs[a.byName.fontSize.qname]*e.value/100;else if("em"===e.unit)f=d.styleAttrs[a.byName.fontSize.qname]*e.value;else if("c"===e.unit)f=e.value/b.cellResolution.h;else{if("px"!==e.unit)return null;f=e.value/b.pxDimensions.h}return f}),new d(b.ns_tts,"opacity",1,["region"],!1,!0,parseFloat,null),new d(b.ns_tts,"origin","auto",["region"],!1,!0,function(a){if("auto"===a)return a;var b=a.split(" ");if(2!==b.length)return null;var d=c.parseLength(b[0]),e=c.parseLength(b[1]);return e&&d?{h:e,w:d}:null},function(a,b,c,d){var e,f;if("auto"===d)e=0;else if("%"===d.h.unit)e=d.h.value/100;else{if("px"!==d.h.unit)return null;e=d.h.value/a.pxDimensions.h}if("auto"===d)f=0;else if("%"===d.w.unit)f=d.w.value/100;else{if("px"!==d.w.unit)return null;f=d.w.value/a.pxDimensions.w}return{h:e,w:f}}),new d(b.ns_tts,"overflow","hidden",["region"],!1,!0,function(a){return a},null),new d(b.ns_tts,"padding","0px",["region"],!1,!0,function(a){var b=a.split(" ");if(b.length>4)return null;var d=[];for(var e in b){var f=c.parseLength(b[e]);if(!f)return null;d.push(f)}return d},function(b,c,d,e){var f;if(1===e.length)f=[e[0],e[0],e[0],e[0]];else if(2===e.length)f=[e[0],e[1],e[0],e[1]];else if(3===e.length)f=[e[0],e[1],e[2],e[1]];else{if(4!==e.length)return null;f=[e[0],e[1],e[2],e[3]]}var g=d.styleAttrs[a.byName.writingMode.qname];if("lrtb"===g||"lr"===g)f=[f[0],f[3],f[2],f[1]];else if("rltb"===g||"rl"===g)f=[f[0],f[1],f[2],f[3]];else if("tblr"===g)f=[f[3],f[0],f[1],f[2]];else{if("tbrl"!==g&&"tb"!==g)return null;f=[f[3],f[2],f[1],f[0]]}var h=[];for(var i in f)if(0===f[i].value)h[i]=0;else if("%"===f[i].unit)h[i]="0"===i||"2"===i?d.styleAttrs[a.byName.extent.qname].h*f[i].value/100:d.styleAttrs[a.byName.extent.qname].w*f[i].value/100;else if("em"===f[i].unit)h[i]=d.styleAttrs[a.byName.fontSize.qname]*f[i].value;else if("c"===f[i].unit)h[i]=f[i].value/b.cellResolution.h;else{if("px"!==f[i].unit)return null;h[i]=f[i].value/b.pxDimensions.h}return h}),new d(b.ns_tts,"showBackground","always",["region"],!1,!0,function(a){return a},null),new d(b.ns_tts,"textAlign","start",["p"],!0,!0,function(a){return a},function(a,b,c,d){return"left"===d?"start":"right"===d?"end":d}),new d(b.ns_tts,"textDecoration","none",["span"],!0,!0,function(a){return a.split(" ")},null),new d(b.ns_tts,"textOutline","none",["span"],!0,!0,function(a){if("none"===a)return a;var b={},d=a.split(" ");if(0===d.length||d.length>2)return null;var e=c.parseColor(d[0]);if(b.color=e,null!==e&&d.shift(),1!==d.length)return null;var f=c.parseLength(d[0]);return f?(b.thickness=f,b):null},function(b,c,d,e){if("none"===e)return e;var f={};if(null===e.color?f.color=d.styleAttrs[a.byName.color.qname]:f.color=e.color,"%"===e.thickness.unit)f.thickness=d.styleAttrs[a.byName.fontSize.qname]*e.thickness.value/100;else if("em"===e.thickness.unit)f.thickness=d.styleAttrs[a.byName.fontSize.qname]*e.thickness.value;else if("c"===e.thickness.unit)f.thickness=e.thickness.value/b.cellResolution.h;else{if("px"!==e.thickness.unit)return null;f.thickness=e.thickness.value/b.pxDimensions.h}return f}),new d(b.ns_tts,"unicodeBidi","normal",["span","p"],!1,!0,function(a){return a},null),new d(b.ns_tts,"visibility","visible",["body","div","p","region","span"],!0,!0,function(a){return a},null),new d(b.ns_tts,"wrapOption","wrap",["span"],!0,!0,function(a){return a},null),new d(b.ns_tts,"writingMode","lrtb",["region"],!1,!0,function(a){return a},null),new d(b.ns_tts,"zIndex","auto",["region"],!1,!0,function(a){var b;return"auto"===a?b=a:(b=parseInt(a),isNaN(b)&&(b=null)),b},null),new d(b.ns_ebutts,"linePadding","0c",["p"],!0,!1,c.parseLength,function(a,b,c,d){return"c"===d.unit?d.value/a.cellResolution.h:null}),new d(b.ns_ebutts,"multiRowAlign","auto",["p"],!0,!1,function(a){return a},null),new d(b.ns_smpte,"backgroundImage",null,["div"],!1,!1,function(a){return a},null),new d(b.ns_itts,"forcedDisplay","false",["body","div","p","region","span"],!0,!0,function(a){return"true"===a},null)],a.byQName={};for(var e in a.all)a.byQName[a.all[e].qname]=a.all[e];a.byName={};for(var f in a.all)a.byName[a.all[f].name]=a.all[f]}(void 0===c?this.imscStyles={}:c,"undefined"==typeof imscNames?a(22):imscNames,"undefined"==typeof imscUtils?a(24):imscUtils)},{22:22,24:24}],24:[function(a,b,c){!function(a){var b=/#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})?/,c=/rgb\((\d+),(\d+),(\d+)\)/,d=/rgba\((\d+),(\d+),(\d+),(\d+)\)/,e={transparent:[0,0,0,0],black:[0,0,0,255],silver:[192,192,192,255],gray:[128,128,128,255],white:[255,255,255,255],maroon:[128,0,0,255],red:[255,0,0,255],purple:[128,0,128,255],fuchsia:[255,0,255,255],magenta:[255,0,255,255],green:[0,128,0,255],lime:[0,255,0,255],olive:[128,128,0,255],yellow:[255,255,0,255],navy:[0,0,128,255],blue:[0,0,255,255],teal:[0,128,128,255],aqua:[0,255,255,255],cyan:[0,255,255,255]};a.parseColor=function(a){var f,g=null;return a in e?g=e[a]:null!==(f=b.exec(a))?g=[parseInt(f[1],16),parseInt(f[2],16),parseInt(f[3],16),void 0!==f[4]?parseInt(f[4],16):255]:null!==(f=c.exec(a))?g=[parseInt(f[1]),parseInt(f[2]),parseInt(f[3]),255]:null!==(f=d.exec(a))&&(g=[parseInt(f[1]),parseInt(f[2]),parseInt(f[3]),parseInt(f[4])]),g};var f=/^((?:\+|\-)?\d*(?:\.\d+)?)(px|em|c|%)$/;a.parseLength=function(a){var b,c=null;return null!==(b=f.exec(a))&&(c={value:parseFloat(b[1]),unit:b[2]}),c}}(void 0===c?this.imscUtils={}:c)},{}],25:[function(a,b,c){"function"==typeof Object.create?b.exports=function(a,b){a.super_=b,a.prototype=Object.create(b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}})}:b.exports=function(a,b){a.super_=b;var c=function(){};c.prototype=b.prototype,a.prototype=new c,
a.prototype.constructor=a}},{}],26:[function(a,b,c){function d(a){return!!a.constructor&&"function"==typeof a.constructor.isBuffer&&a.constructor.isBuffer(a)}function e(a){return"function"==typeof a.readFloatLE&&"function"==typeof a.slice&&d(a.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
b.exports=function(a){return null!=a&&(d(a)||e(a)||!!a._isBuffer)}},{}],27:[function(a,b,c){var d={}.toString;b.exports=Array.isArray||function(a){return"[object Array]"==d.call(a)}},{}],28:[function(a,b,c){(function(a){"use strict";function c(b,c,d,e){if("function"!=typeof b)throw new TypeError('"callback" argument must be a function');var f,g,h=arguments.length;switch(h){case 0:case 1:return a.nextTick(b);case 2:return a.nextTick(function(){b.call(null,c)});case 3:return a.nextTick(function(){b.call(null,c,d)});case 4:return a.nextTick(function(){b.call(null,c,d,e)});default:for(f=new Array(h-1),g=0;g<f.length;)f[g++]=arguments[g];return a.nextTick(function(){b.apply(null,f)})}}!a.version||0===a.version.indexOf("v0.")||0===a.version.indexOf("v1.")&&0!==a.version.indexOf("v1.8.")?b.exports=c:b.exports=a.nextTick}).call(this,a(29))},{29:29}],29:[function(a,b,c){function d(){throw new Error("setTimeout has not been defined")}function e(){throw new Error("clearTimeout has not been defined")}function f(a){if(l===setTimeout)return setTimeout(a,0);if((l===d||!l)&&setTimeout)return l=setTimeout,setTimeout(a,0);try{return l(a,0)}catch(b){try{return l.call(null,a,0)}catch(b){return l.call(this,a,0)}}}function g(a){if(m===clearTimeout)return clearTimeout(a);if((m===e||!m)&&clearTimeout)return m=clearTimeout,clearTimeout(a);try{return m(a)}catch(b){try{return m.call(null,a)}catch(b){return m.call(this,a)}}}function h(){q&&o&&(q=!1,o.length?p=o.concat(p):r=-1,p.length&&i())}function i(){if(!q){var a=f(h);q=!0;for(var b=p.length;b;){for(o=p,p=[];++r<b;)o&&o[r].run();r=-1,b=p.length}o=null,q=!1,g(a)}}function j(a,b){this.fun=a,this.array=b}function k(){}var l,m,n=b.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:d}catch(a){l=d}try{m="function"==typeof clearTimeout?clearTimeout:e}catch(a){m=e}}();var o,p=[],q=!1,r=-1;n.nextTick=function(a){var b=new Array(arguments.length-1);if(arguments.length>1)for(var c=1;c<arguments.length;c++)b[c-1]=arguments[c];p.push(new j(a,b)),1!==p.length||q||f(i)},j.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=k,n.addListener=k,n.once=k,n.off=k,n.removeListener=k,n.removeAllListeners=k,n.emit=k,n.prependListener=k,n.prependOnceListener=k,n.listeners=function(a){return[]},n.binding=function(a){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(a){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},{}],30:[function(a,b,c){b.exports=a(31)},{31:31}],31:[function(a,b,c){"use strict";function d(a){if(!(this instanceof d))return new d(a);j.call(this,a),k.call(this,a),a&&!1===a.readable&&(this.readable=!1),a&&!1===a.writable&&(this.writable=!1),this.allowHalfOpen=!0,a&&!1===a.allowHalfOpen&&(this.allowHalfOpen=!1),this.once("end",e)}function e(){this.allowHalfOpen||this._writableState.ended||g(f,this)}function f(a){a.end()}var g=a(28),h=Object.keys||function(a){var b=[];for(var c in a)b.push(c);return b};b.exports=d;var i=a(12);i.inherits=a(25);var j=a(33),k=a(35);i.inherits(d,j);for(var l=h(k.prototype),m=0;m<l.length;m++){var n=l[m];d.prototype[n]||(d.prototype[n]=k.prototype[n])}Object.defineProperty(d.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed&&this._writableState.destroyed)},set:function(a){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=a,this._writableState.destroyed=a)}}),d.prototype._destroy=function(a,b){this.push(null),this.end(),g(b,a)}},{12:12,25:25,28:28,33:33,35:35}],32:[function(a,b,c){"use strict";function d(a){if(!(this instanceof d))return new d(a);e.call(this,a)}b.exports=d;var e=a(34),f=a(12);f.inherits=a(25),f.inherits(d,e),d.prototype._transform=function(a,b,c){c(null,a)}},{12:12,25:25,34:34}],33:[function(a,b,c){(function(c,d){"use strict";function e(a){return L.from(a)}function f(a){return L.isBuffer(a)||a instanceof M}function g(a,b,c){if("function"==typeof a.prependListener)return a.prependListener(b,c);a._events&&a._events[b]?I(a._events[b])?a._events[b].unshift(c):a._events[b]=[c,a._events[b]]:a.on(b,c)}function h(b,c){H=H||a(31),b=b||{},this.objectMode=!!b.objectMode,c instanceof H&&(this.objectMode=this.objectMode||!!b.readableObjectMode);var d=b.highWaterMark,e=this.objectMode?16:16384;this.highWaterMark=d||0===d?d:e,this.highWaterMark=Math.floor(this.highWaterMark),this.buffer=new R,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.destroyed=!1,this.defaultEncoding=b.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,b.encoding&&(Q||(Q=a(47).StringDecoder),this.decoder=new Q(b.encoding),this.encoding=b.encoding)}function i(b){if(H=H||a(31),!(this instanceof i))return new i(b);this._readableState=new h(b,this),this.readable=!0,b&&("function"==typeof b.read&&(this._read=b.read),"function"==typeof b.destroy&&(this._destroy=b.destroy)),K.call(this)}function j(a,b,c,d,f){var g=a._readableState;if(null===b)g.reading=!1,p(a,g);else{var h;f||(h=l(g,b)),h?a.emit("error",h):g.objectMode||b&&b.length>0?("string"==typeof b||g.objectMode||Object.getPrototypeOf(b)===L.prototype||(b=e(b)),d?g.endEmitted?a.emit("error",new Error("stream.unshift() after end event")):k(a,g,b,!0):g.ended?a.emit("error",new Error("stream.push() after EOF")):(g.reading=!1,g.decoder&&!c?(b=g.decoder.write(b),g.objectMode||0!==b.length?k(a,g,b,!1):s(a,g)):k(a,g,b,!1))):d||(g.reading=!1)}return m(g)}function k(a,b,c,d){b.flowing&&0===b.length&&!b.sync?(a.emit("data",c),a.read(0)):(b.length+=b.objectMode?1:c.length,d?b.buffer.unshift(c):b.buffer.push(c),b.needReadable&&q(a)),s(a,b)}function l(a,b){var c;return f(b)||"string"==typeof b||void 0===b||a.objectMode||(c=new TypeError("Invalid non-string/buffer chunk")),c}function m(a){return!a.ended&&(a.needReadable||a.length<a.highWaterMark||0===a.length)}function n(a){return a>=U?a=U:(a--,a|=a>>>1,a|=a>>>2,a|=a>>>4,a|=a>>>8,a|=a>>>16,a++),a}function o(a,b){return a<=0||0===b.length&&b.ended?0:b.objectMode?1:a!==a?b.flowing&&b.length?b.buffer.head.data.length:b.length:(a>b.highWaterMark&&(b.highWaterMark=n(a)),a<=b.length?a:b.ended?b.length:(b.needReadable=!0,0))}function p(a,b){if(!b.ended){if(b.decoder){var c=b.decoder.end();c&&c.length&&(b.buffer.push(c),b.length+=b.objectMode?1:c.length)}b.ended=!0,q(a)}}function q(a){var b=a._readableState;b.needReadable=!1,b.emittedReadable||(P("emitReadable",b.flowing),b.emittedReadable=!0,b.sync?G(r,a):r(a))}function r(a){P("emit readable"),a.emit("readable"),y(a)}function s(a,b){b.readingMore||(b.readingMore=!0,G(t,a,b))}function t(a,b){for(var c=b.length;!b.reading&&!b.flowing&&!b.ended&&b.length<b.highWaterMark&&(P("maybeReadMore read 0"),a.read(0),c!==b.length);)c=b.length;b.readingMore=!1}function u(a){return function(){var b=a._readableState;P("pipeOnDrain",b.awaitDrain),b.awaitDrain&&b.awaitDrain--,0===b.awaitDrain&&J(a,"data")&&(b.flowing=!0,y(a))}}function v(a){P("readable nexttick read 0"),a.read(0)}function w(a,b){b.resumeScheduled||(b.resumeScheduled=!0,G(x,a,b))}function x(a,b){b.reading||(P("resume read 0"),a.read(0)),b.resumeScheduled=!1,b.awaitDrain=0,a.emit("resume"),y(a),b.flowing&&!b.reading&&a.read(0)}function y(a){var b=a._readableState;for(P("flow",b.flowing);b.flowing&&null!==a.read(););}function z(a,b){if(0===b.length)return null;var c;return b.objectMode?c=b.buffer.shift():!a||a>=b.length?(c=b.decoder?b.buffer.join(""):1===b.buffer.length?b.buffer.head.data:b.buffer.concat(b.length),b.buffer.clear()):c=A(a,b.buffer,b.decoder),c}function A(a,b,c){var d;return a<b.head.data.length?(d=b.head.data.slice(0,a),b.head.data=b.head.data.slice(a)):d=a===b.head.data.length?b.shift():c?B(a,b):C(a,b),d}function B(a,b){var c=b.head,d=1,e=c.data;for(a-=e.length;c=c.next;){var f=c.data,g=a>f.length?f.length:a;if(g===f.length?e+=f:e+=f.slice(0,a),0===(a-=g)){g===f.length?(++d,c.next?b.head=c.next:b.head=b.tail=null):(b.head=c,c.data=f.slice(g));break}++d}return b.length-=d,e}function C(a,b){var c=L.allocUnsafe(a),d=b.head,e=1;for(d.data.copy(c),a-=d.data.length;d=d.next;){var f=d.data,g=a>f.length?f.length:a;if(f.copy(c,c.length-a,0,g),0===(a-=g)){g===f.length?(++e,d.next?b.head=d.next:b.head=b.tail=null):(b.head=d,d.data=f.slice(g));break}++e}return b.length-=e,c}function D(a){var b=a._readableState;if(b.length>0)throw new Error('"endReadable()" called on non-empty stream');b.endEmitted||(b.ended=!0,G(E,b,a))}function E(a,b){a.endEmitted||0!==a.length||(a.endEmitted=!0,b.readable=!1,b.emit("end"))}function F(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1}var G=a(28);b.exports=i;var H,I=a(27);i.ReadableState=h;var J=(a(16).EventEmitter,function(a,b){return a.listeners(b).length}),K=a(38),L=a(44).Buffer,M=d.Uint8Array||function(){},N=a(12);N.inherits=a(25);var O=a(8),P=void 0;P=O&&O.debuglog?O.debuglog("stream"):function(){};var Q,R=a(36),S=a(37);N.inherits(i,K);var T=["error","close","destroy","pause","resume"];Object.defineProperty(i.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(a){this._readableState&&(this._readableState.destroyed=a)}}),i.prototype.destroy=S.destroy,i.prototype._undestroy=S.undestroy,i.prototype._destroy=function(a,b){this.push(null),b(a)},i.prototype.push=function(a,b){var c,d=this._readableState;return d.objectMode?c=!0:"string"==typeof a&&(b=b||d.defaultEncoding,b!==d.encoding&&(a=L.from(a,b),b=""),c=!0),j(this,a,b,!1,c)},i.prototype.unshift=function(a){return j(this,a,null,!0,!1)},i.prototype.isPaused=function(){return!1===this._readableState.flowing},i.prototype.setEncoding=function(b){return Q||(Q=a(47).StringDecoder),this._readableState.decoder=new Q(b),this._readableState.encoding=b,this};var U=8388608;i.prototype.read=function(a){P("read",a),a=parseInt(a,10);var b=this._readableState,c=a;if(0!==a&&(b.emittedReadable=!1),0===a&&b.needReadable&&(b.length>=b.highWaterMark||b.ended))return P("read: emitReadable",b.length,b.ended),0===b.length&&b.ended?D(this):q(this),null;if(0===(a=o(a,b))&&b.ended)return 0===b.length&&D(this),null;var d=b.needReadable;P("need readable",d),(0===b.length||b.length-a<b.highWaterMark)&&(d=!0,P("length less than watermark",d)),b.ended||b.reading?(d=!1,P("reading or ended",d)):d&&(P("do read"),b.reading=!0,b.sync=!0,0===b.length&&(b.needReadable=!0),this._read(b.highWaterMark),b.sync=!1,b.reading||(a=o(c,b)));var e;return e=a>0?z(a,b):null,null===e?(b.needReadable=!0,a=0):b.length-=a,0===b.length&&(b.ended||(b.needReadable=!0),c!==a&&b.ended&&D(this)),null!==e&&this.emit("data",e),e},i.prototype._read=function(a){this.emit("error",new Error("_read() is not implemented"))},i.prototype.pipe=function(a,b){function d(a,b){P("onunpipe"),a===m&&b&&!1===b.hasUnpiped&&(b.hasUnpiped=!0,f())}function e(){P("onend"),a.end()}function f(){P("cleanup"),a.removeListener("close",j),a.removeListener("finish",k),a.removeListener("drain",q),a.removeListener("error",i),a.removeListener("unpipe",d),m.removeListener("end",e),m.removeListener("end",l),m.removeListener("data",h),r=!0,!n.awaitDrain||a._writableState&&!a._writableState.needDrain||q()}function h(b){P("ondata"),s=!1,!1!==a.write(b)||s||((1===n.pipesCount&&n.pipes===a||n.pipesCount>1&&-1!==F(n.pipes,a))&&!r&&(P("false write response, pause",m._readableState.awaitDrain),m._readableState.awaitDrain++,s=!0),m.pause())}function i(b){P("onerror",b),l(),a.removeListener("error",i),0===J(a,"error")&&a.emit("error",b)}function j(){a.removeListener("finish",k),l()}function k(){P("onfinish"),a.removeListener("close",j),l()}function l(){P("unpipe"),m.unpipe(a)}var m=this,n=this._readableState;switch(n.pipesCount){case 0:n.pipes=a;break;case 1:n.pipes=[n.pipes,a];break;default:n.pipes.push(a)}n.pipesCount+=1,P("pipe count=%d opts=%j",n.pipesCount,b);var o=(!b||!1!==b.end)&&a!==c.stdout&&a!==c.stderr,p=o?e:l;n.endEmitted?G(p):m.once("end",p),a.on("unpipe",d);var q=u(m);a.on("drain",q);var r=!1,s=!1;return m.on("data",h),g(a,"error",i),a.once("close",j),a.once("finish",k),a.emit("pipe",m),n.flowing||(P("pipe resume"),m.resume()),a},i.prototype.unpipe=function(a){var b=this._readableState,c={hasUnpiped:!1};if(0===b.pipesCount)return this;if(1===b.pipesCount)return a&&a!==b.pipes?this:(a||(a=b.pipes),b.pipes=null,b.pipesCount=0,b.flowing=!1,a&&a.emit("unpipe",this,c),this);if(!a){var d=b.pipes,e=b.pipesCount;b.pipes=null,b.pipesCount=0,b.flowing=!1;for(var f=0;f<e;f++)d[f].emit("unpipe",this,c);return this}var g=F(b.pipes,a);return-1===g?this:(b.pipes.splice(g,1),b.pipesCount-=1,1===b.pipesCount&&(b.pipes=b.pipes[0]),a.emit("unpipe",this,c),this)},i.prototype.on=function(a,b){var c=K.prototype.on.call(this,a,b);if("data"===a)!1!==this._readableState.flowing&&this.resume();else if("readable"===a){var d=this._readableState;d.endEmitted||d.readableListening||(d.readableListening=d.needReadable=!0,d.emittedReadable=!1,d.reading?d.length&&q(this):G(v,this))}return c},i.prototype.addListener=i.prototype.on,i.prototype.resume=function(){var a=this._readableState;return a.flowing||(P("resume"),a.flowing=!0,w(this,a)),this},i.prototype.pause=function(){return P("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(P("pause"),this._readableState.flowing=!1,this.emit("pause")),this},i.prototype.wrap=function(a){var b=this._readableState,c=!1,d=this;a.on("end",function(){if(P("wrapped end"),b.decoder&&!b.ended){var a=b.decoder.end();a&&a.length&&d.push(a)}d.push(null)}),a.on("data",function(e){if(P("wrapped data"),b.decoder&&(e=b.decoder.write(e)),(!b.objectMode||null!==e&&void 0!==e)&&(b.objectMode||e&&e.length)){d.push(e)||(c=!0,a.pause())}});for(var e in a)void 0===this[e]&&"function"==typeof a[e]&&(this[e]=function(b){return function(){return a[b].apply(a,arguments)}}(e));for(var f=0;f<T.length;f++)a.on(T[f],d.emit.bind(d,T[f]));return d._read=function(b){P("wrapped _read",b),c&&(c=!1,a.resume())},d},i._fromList=z}).call(this,a(29),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{12:12,16:16,25:25,27:27,28:28,29:29,31:31,36:36,37:37,38:38,44:44,47:47,8:8}],34:[function(a,b,c){"use strict";function d(a){this.afterTransform=function(b,c){return e(a,b,c)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null,this.writeencoding=null}function e(a,b,c){var d=a._transformState;d.transforming=!1;var e=d.writecb;if(!e)return a.emit("error",new Error("write callback called multiple times"));d.writechunk=null,d.writecb=null,null!==c&&void 0!==c&&a.push(c),e(b);var f=a._readableState;f.reading=!1,(f.needReadable||f.length<f.highWaterMark)&&a._read(f.highWaterMark)}function f(a){if(!(this instanceof f))return new f(a);h.call(this,a),this._transformState=new d(this);var b=this;this._readableState.needReadable=!0,this._readableState.sync=!1,a&&("function"==typeof a.transform&&(this._transform=a.transform),"function"==typeof a.flush&&(this._flush=a.flush)),this.once("prefinish",function(){"function"==typeof this._flush?this._flush(function(a,c){g(b,a,c)}):g(b)})}function g(a,b,c){if(b)return a.emit("error",b);null!==c&&void 0!==c&&a.push(c);var d=a._writableState,e=a._transformState;if(d.length)throw new Error("Calling transform done when ws.length != 0");if(e.transforming)throw new Error("Calling transform done when still transforming");return a.push(null)}b.exports=f;var h=a(31),i=a(12);i.inherits=a(25),i.inherits(f,h),f.prototype.push=function(a,b){return this._transformState.needTransform=!1,h.prototype.push.call(this,a,b)},f.prototype._transform=function(a,b,c){throw new Error("_transform() is not implemented")},f.prototype._write=function(a,b,c){var d=this._transformState;if(d.writecb=c,d.writechunk=a,d.writeencoding=b,!d.transforming){var e=this._readableState;(d.needTransform||e.needReadable||e.length<e.highWaterMark)&&this._read(e.highWaterMark)}},f.prototype._read=function(a){var b=this._transformState;null!==b.writechunk&&b.writecb&&!b.transforming?(b.transforming=!0,this._transform(b.writechunk,b.writeencoding,b.afterTransform)):b.needTransform=!0},f.prototype._destroy=function(a,b){var c=this;h.prototype._destroy.call(this,a,function(a){b(a),c.emit("close")})}},{12:12,25:25,31:31}],35:[function(a,b,c){(function(c,d){"use strict";function e(a){var b=this;this.next=null,this.entry=null,this.finish=function(){A(b,a)}}function f(a){return H.from(a)}function g(a){return H.isBuffer(a)||a instanceof I}function h(){}function i(b,c){C=C||a(31),b=b||{},this.objectMode=!!b.objectMode,c instanceof C&&(this.objectMode=this.objectMode||!!b.writableObjectMode);var d=b.highWaterMark,f=this.objectMode?16:16384;this.highWaterMark=d||0===d?d:f,this.highWaterMark=Math.floor(this.highWaterMark),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var g=!1===b.decodeStrings;this.decodeStrings=!g,this.defaultEncoding=b.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(a){r(c,a)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new e(this)}function j(b){if(C=C||a(31),!(K.call(j,this)||this instanceof C))return new j(b);this._writableState=new i(b,this),this.writable=!0,b&&("function"==typeof b.write&&(this._write=b.write),"function"==typeof b.writev&&(this._writev=b.writev),"function"==typeof b.destroy&&(this._destroy=b.destroy),"function"==typeof b.final&&(this._final=b.final)),G.call(this)}function k(a,b){var c=new Error("write after end");a.emit("error",c),B(b,c)}function l(a,b,c,d){var e=!0,f=!1;return null===c?f=new TypeError("May not write null values to stream"):"string"==typeof c||void 0===c||b.objectMode||(f=new TypeError("Invalid non-string/buffer chunk")),f&&(a.emit("error",f),B(d,f),e=!1),e}function m(a,b,c){return a.objectMode||!1===a.decodeStrings||"string"!=typeof b||(b=H.from(b,c)),b}function n(a,b,c,d,e,f){if(!c){var g=m(b,d,e);d!==g&&(c=!0,e="buffer",d=g)}var h=b.objectMode?1:d.length;b.length+=h;var i=b.length<b.highWaterMark;if(i||(b.needDrain=!0),b.writing||b.corked){var j=b.lastBufferedRequest;b.lastBufferedRequest={chunk:d,encoding:e,isBuf:c,callback:f,next:null},j?j.next=b.lastBufferedRequest:b.bufferedRequest=b.lastBufferedRequest,b.bufferedRequestCount+=1}else o(a,b,!1,h,d,e,f);return i}function o(a,b,c,d,e,f,g){b.writelen=d,b.writecb=g,b.writing=!0,b.sync=!0,c?a._writev(e,b.onwrite):a._write(e,f,b.onwrite),b.sync=!1}function p(a,b,c,d,e){--b.pendingcb,c?(B(e,d),B(y,a,b),a._writableState.errorEmitted=!0,a.emit("error",d)):(e(d),a._writableState.errorEmitted=!0,a.emit("error",d),y(a,b))}function q(a){a.writing=!1,a.writecb=null,a.length-=a.writelen,a.writelen=0}function r(a,b){var c=a._writableState,d=c.sync,e=c.writecb;if(q(c),b)p(a,c,d,b,e);else{var f=v(c);f||c.corked||c.bufferProcessing||!c.bufferedRequest||u(a,c),d?D(s,a,c,f,e):s(a,c,f,e)}}function s(a,b,c,d){c||t(a,b),b.pendingcb--,d(),y(a,b)}function t(a,b){0===b.length&&b.needDrain&&(b.needDrain=!1,a.emit("drain"))}function u(a,b){b.bufferProcessing=!0;var c=b.bufferedRequest;if(a._writev&&c&&c.next){var d=b.bufferedRequestCount,f=new Array(d),g=b.corkedRequestsFree;g.entry=c;for(var h=0,i=!0;c;)f[h]=c,c.isBuf||(i=!1),c=c.next,h+=1;f.allBuffers=i,o(a,b,!0,b.length,f,"",g.finish),b.pendingcb++,b.lastBufferedRequest=null,g.next?(b.corkedRequestsFree=g.next,g.next=null):b.corkedRequestsFree=new e(b)}else{for(;c;){var j=c.chunk,k=c.encoding,l=c.callback;if(o(a,b,!1,b.objectMode?1:j.length,j,k,l),c=c.next,b.writing)break}null===c&&(b.lastBufferedRequest=null)}b.bufferedRequestCount=0,b.bufferedRequest=c,b.bufferProcessing=!1}function v(a){return a.ending&&0===a.length&&null===a.bufferedRequest&&!a.finished&&!a.writing}function w(a,b){a._final(function(c){b.pendingcb--,c&&a.emit("error",c),b.prefinished=!0,a.emit("prefinish"),y(a,b)})}function x(a,b){b.prefinished||b.finalCalled||("function"==typeof a._final?(b.pendingcb++,b.finalCalled=!0,B(w,a,b)):(b.prefinished=!0,a.emit("prefinish")))}function y(a,b){var c=v(b);return c&&(x(a,b),0===b.pendingcb&&(b.finished=!0,a.emit("finish"))),c}function z(a,b,c){b.ending=!0,y(a,b),c&&(b.finished?B(c):a.once("finish",c)),b.ended=!0,a.writable=!1}function A(a,b,c){var d=a.entry;for(a.entry=null;d;){var e=d.callback;b.pendingcb--,e(c),d=d.next}b.corkedRequestsFree?b.corkedRequestsFree.next=a:b.corkedRequestsFree=a}var B=a(28);b.exports=j;var C,D=!c.browser&&["v0.10","v0.9."].indexOf(c.version.slice(0,5))>-1?setImmediate:B;j.WritableState=i;var E=a(12);E.inherits=a(25);var F={deprecate:a(48)},G=a(38),H=a(44).Buffer,I=d.Uint8Array||function(){},J=a(37);E.inherits(j,G),i.prototype.getBuffer=function(){for(var a=this.bufferedRequest,b=[];a;)b.push(a),a=a.next;return b},function(){try{Object.defineProperty(i.prototype,"buffer",{get:F.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(a){}}();var K;"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(K=Function.prototype[Symbol.hasInstance],Object.defineProperty(j,Symbol.hasInstance,{value:function(a){return!!K.call(this,a)||a&&a._writableState instanceof i}})):K=function(a){return a instanceof this},j.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))},j.prototype.write=function(a,b,c){var d=this._writableState,e=!1,i=g(a)&&!d.objectMode;return i&&!H.isBuffer(a)&&(a=f(a)),"function"==typeof b&&(c=b,b=null),i?b="buffer":b||(b=d.defaultEncoding),"function"!=typeof c&&(c=h),d.ended?k(this,c):(i||l(this,d,a,c))&&(d.pendingcb++,e=n(this,d,i,a,b,c)),e},j.prototype.cork=function(){this._writableState.corked++},j.prototype.uncork=function(){var a=this._writableState;a.corked&&(a.corked--,a.writing||a.corked||a.finished||a.bufferProcessing||!a.bufferedRequest||u(this,a))},j.prototype.setDefaultEncoding=function(a){if("string"==typeof a&&(a=a.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((a+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+a);return this._writableState.defaultEncoding=a,this},j.prototype._write=function(a,b,c){c(new Error("_write() is not implemented"))},j.prototype._writev=null,j.prototype.end=function(a,b,c){var d=this._writableState;"function"==typeof a?(c=a,a=null,b=null):"function"==typeof b&&(c=b,b=null),null!==a&&void 0!==a&&this.write(a,b),d.corked&&(d.corked=1,this.uncork()),d.ending||d.finished||z(this,d,c)},Object.defineProperty(j.prototype,"destroyed",{get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(a){this._writableState&&(this._writableState.destroyed=a)}}),j.prototype.destroy=J.destroy,j.prototype._undestroy=J.undestroy,j.prototype._destroy=function(a,b){this.end(),b(a)}}).call(this,a(29),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{12:12,25:25,28:28,29:29,31:31,37:37,38:38,44:44,48:48}],36:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b,c){a.copy(b,c)}var f=a(44).Buffer;b.exports=function(){function a(){d(this,a),this.head=null,this.tail=null,this.length=0}return a.prototype.push=function(a){var b={data:a,next:null};this.length>0?this.tail.next=b:this.head=b,this.tail=b,++this.length},a.prototype.unshift=function(a){var b={data:a,next:this.head};0===this.length&&(this.tail=b),this.head=b,++this.length},a.prototype.shift=function(){if(0!==this.length){var a=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,a}},a.prototype.clear=function(){this.head=this.tail=null,this.length=0},a.prototype.join=function(a){if(0===this.length)return"";for(var b=this.head,c=""+b.data;b=b.next;)c+=a+b.data;return c},a.prototype.concat=function(a){if(0===this.length)return f.alloc(0);if(1===this.length)return this.head.data;for(var b=f.allocUnsafe(a>>>0),c=this.head,d=0;c;)e(c.data,b,d),d+=c.data.length,c=c.next;return b},a}()},{44:44}],37:[function(a,b,c){"use strict";function d(a,b){var c=this,d=this._readableState&&this._readableState.destroyed,e=this._writableState&&this._writableState.destroyed;if(d||e)return void(b?b(a):!a||this._writableState&&this._writableState.errorEmitted||g(f,this,a));this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(a||null,function(a){!b&&a?(g(f,c,a),c._writableState&&(c._writableState.errorEmitted=!0)):b&&b(a)})}function e(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)}function f(a,b){a.emit("error",b)}var g=a(28);b.exports={destroy:d,undestroy:e}},{28:28}],38:[function(a,b,c){b.exports=a(16).EventEmitter},{16:16}],39:[function(a,b,c){b.exports=a(40).PassThrough},{40:40}],40:[function(a,b,c){c=b.exports=a(33),c.Stream=c,c.Readable=c,c.Writable=a(35),c.Duplex=a(31),c.Transform=a(34),c.PassThrough=a(32)},{31:31,32:32,33:33,34:34,35:35}],41:[function(a,b,c){b.exports=a(40).Transform},{40:40}],42:[function(a,b,c){b.exports=a(35)},{35:35}],43:[function(a,b,c){var d=c.decimalAdjust=function(a,b,c){return void 0===c||0==+c?Math[a](b):(b=+b,c=+c,isNaN(b)||"number"!=typeof c||c%1!=0?NaN:(b=b.toString().split("e"),b=Math[a](+(b[0]+"e"+(b[1]?+b[1]-c:-c))),b=b.toString().split("e"),+(b[0]+"e"+(b[1]?+b[1]+c:c))))};b.exports={round10:function(a,b){return d("round",a,b)},floor10:function(a,b){return d("floor",a,b)},ceil10:function(a,b){return d("ceil",a,b)}},b.exports.polyfill=function(){Math.round10||(Math.round10=b.exports.round10),Math.floor10||(Math.floor10=b.exports.floor10),Math.ceil10||(Math.ceil10=b.exports.ceil10)}},{}],44:[function(a,b,c){function d(a,b){for(var c in a)b[c]=a[c]}function e(a,b,c){return g(a,b,c)}var f=a(10),g=f.Buffer;g.from&&g.alloc&&g.allocUnsafe&&g.allocUnsafeSlow?b.exports=f:(d(f,c),c.Buffer=e),d(g,e),e.from=function(a,b,c){if("number"==typeof a)throw new TypeError("Argument must not be a number");return g(a,b,c)},e.alloc=function(a,b,c){if("number"!=typeof a)throw new TypeError("Argument must be a number");var d=g(a);return void 0!==b?"string"==typeof c?d.fill(b,c):d.fill(b):d.fill(0),d},e.allocUnsafe=function(a){if("number"!=typeof a)throw new TypeError("Argument must be a number");return g(a)},e.allocUnsafeSlow=function(a){if("number"!=typeof a)throw new TypeError("Argument must be a number");return f.SlowBuffer(a)}},{10:10}],45:[function(a,b,c){(function(b){!function(c){function d(a,b){if(!(this instanceof d))return new d(a,b);var e=this;f(e),e.q=e.c="",e.bufferCheckPosition=c.MAX_BUFFER_LENGTH,e.opt=b||{},e.opt.lowercase=e.opt.lowercase||e.opt.lowercasetags,e.looseCase=e.opt.lowercase?"toLowerCase":"toUpperCase",e.tags=[],e.closed=e.closedRoot=e.sawRoot=!1,e.tag=e.error=null,e.strict=!!a,e.noscript=!(!a&&!e.opt.noscript),e.state=U.BEGIN,e.strictEntities=e.opt.strictEntities,e.ENTITIES=e.strictEntities?Object.create(c.XML_ENTITIES):Object.create(c.ENTITIES),e.attribList=[],e.opt.xmlns&&(e.ns=Object.create(P)),e.trackPosition=!1!==e.opt.position,e.trackPosition&&(e.position=e.line=e.column=0),n(e,"onready")}function e(a){for(var b=Math.max(c.MAX_BUFFER_LENGTH,10),d=0,e=0,f=D.length;e<f;e++){var g=a[D[e]].length;if(g>b)switch(D[e]){case"textNode":p(a);break;case"cdata":o(a,"oncdata",a.cdata),a.cdata="";break;case"script":o(a,"onscript",a.script),a.script="";break;default:r(a,"Max buffer length exceeded: "+D[e])}d=Math.max(d,g)}var h=c.MAX_BUFFER_LENGTH-d;a.bufferCheckPosition=h+a.position}function f(a){for(var b=0,c=D.length;b<c;b++)a[D[b]]=""}function g(a){p(a),""!==a.cdata&&(o(a,"oncdata",a.cdata),a.cdata=""),""!==a.script&&(o(a,"onscript",a.script),a.script="")}function h(a,b){return new i(a,b)}function i(a,b){if(!(this instanceof i))return new i(a,b);E.apply(this),this._parser=new d(a,b),this.writable=!0,this.readable=!0;var c=this;this._parser.onend=function(){c.emit("end")},this._parser.onerror=function(a){c.emit("error",a),c._parser.error=null},this._decoder=null,F.forEach(function(a){Object.defineProperty(c,"on"+a,{get:function(){return c._parser["on"+a]},set:function(b){if(!b)return c.removeAllListeners(a),c._parser["on"+a]=b,b;c.on(a,b)},enumerable:!0,configurable:!1})})}function j(a){return a.split("").reduce(function(a,b){return a[b]=!0,a},{})}function k(a){return"[object RegExp]"===Object.prototype.toString.call(a)}function l(a,b){return k(a)?!!b.match(a):a[b]}function m(a,b){return!l(a,b)}function n(a,b,c){a[b]&&a[b](c)}function o(a,b,c){a.textNode&&p(a),n(a,b,c)}function p(a){a.textNode=q(a.opt,a.textNode),a.textNode&&n(a,"ontext",a.textNode),a.textNode=""}function q(a,b){return a.trim&&(b=b.trim()),a.normalize&&(b=b.replace(/\s+/g," ")),b}function r(a,b){return p(a),a.trackPosition&&(b+="\nLine: "+a.line+"\nColumn: "+a.column+"\nChar: "+a.c),b=new Error(b),a.error=b,n(a,"onerror",b),a}function s(a){return a.sawRoot&&!a.closedRoot&&t(a,"Unclosed root tag"),a.state!==U.BEGIN&&a.state!==U.BEGIN_WHITESPACE&&a.state!==U.TEXT&&r(a,"Unexpected end"),p(a),a.c="",a.closed=!0,n(a,"onend"),d.call(a,a.strict,a.opt),a}function t(a,b){if("object"!=typeof a||!(a instanceof d))throw new Error("bad call to strictFail");a.strict&&r(a,b)}function u(a){a.strict||(a.tagName=a.tagName[a.looseCase]());var b=a.tags[a.tags.length-1]||a,c=a.tag={name:a.tagName,attributes:{}};a.opt.xmlns&&(c.ns=b.ns),a.attribList.length=0,o(a,"onopentagstart",c)}function v(a,b){var c=a.indexOf(":"),d=c<0?["",a]:a.split(":"),e=d[0],f=d[1];return b&&"xmlns"===a&&(e="xmlns",f=""),{prefix:e,local:f}}function w(a){if(a.strict||(a.attribName=a.attribName[a.looseCase]()),-1!==a.attribList.indexOf(a.attribName)||a.tag.attributes.hasOwnProperty(a.attribName))return void(a.attribName=a.attribValue="");if(a.opt.xmlns){var b=v(a.attribName,!0),c=b.prefix,d=b.local;if("xmlns"===c)if("xml"===d&&a.attribValue!==N)t(a,"xml: prefix must be bound to "+N+"\nActual: "+a.attribValue);else if("xmlns"===d&&a.attribValue!==O)t(a,"xmlns: prefix must be bound to "+O+"\nActual: "+a.attribValue);else{var e=a.tag,f=a.tags[a.tags.length-1]||a;e.ns===f.ns&&(e.ns=Object.create(f.ns)),e.ns[d]=a.attribValue}a.attribList.push([a.attribName,a.attribValue])}else a.tag.attributes[a.attribName]=a.attribValue,o(a,"onattribute",{name:a.attribName,value:a.attribValue});a.attribName=a.attribValue=""}function x(a,b){if(a.opt.xmlns){var c=a.tag,d=v(a.tagName);c.prefix=d.prefix,c.local=d.local,c.uri=c.ns[d.prefix]||"",c.prefix&&!c.uri&&(t(a,"Unbound namespace prefix: "+JSON.stringify(a.tagName)),c.uri=d.prefix);var e=a.tags[a.tags.length-1]||a;c.ns&&e.ns!==c.ns&&Object.keys(c.ns).forEach(function(b){o(a,"onopennamespace",{prefix:b,uri:c.ns[b]})});for(var f=0,g=a.attribList.length;f<g;f++){var h=a.attribList[f],i=h[0],j=h[1],k=v(i,!0),l=k.prefix,m=k.local,n=""===l?"":c.ns[l]||"",p={name:i,value:j,prefix:l,local:m,uri:n};l&&"xmlns"!==l&&!n&&(t(a,"Unbound namespace prefix: "+JSON.stringify(l)),p.uri=l),a.tag.attributes[i]=p,o(a,"onattribute",p)}a.attribList.length=0}a.tag.isSelfClosing=!!b,a.sawRoot=!0,a.tags.push(a.tag),o(a,"onopentag",a.tag),b||(a.noscript||"script"!==a.tagName.toLowerCase()?a.state=U.TEXT:a.state=U.SCRIPT,a.tag=null,a.tagName=""),a.attribName=a.attribValue="",a.attribList.length=0}function y(a){
if(!a.tagName)return t(a,"Weird empty close tag."),a.textNode+="</>",void(a.state=U.TEXT);if(a.script){if("script"!==a.tagName)return a.script+="</"+a.tagName+">",a.tagName="",void(a.state=U.SCRIPT);o(a,"onscript",a.script),a.script=""}var b=a.tags.length,c=a.tagName;a.strict||(c=c[a.looseCase]());for(var d=c;b--;){if(a.tags[b].name===d)break;t(a,"Unexpected close tag")}if(b<0)return t(a,"Unmatched closing tag: "+a.tagName),a.textNode+="</"+a.tagName+">",void(a.state=U.TEXT);a.tagName=c;for(var e=a.tags.length;e-- >b;){var f=a.tag=a.tags.pop();a.tagName=a.tag.name,o(a,"onclosetag",a.tagName);var g={};for(var h in f.ns)g[h]=f.ns[h];var i=a.tags[a.tags.length-1]||a;a.opt.xmlns&&f.ns!==i.ns&&Object.keys(f.ns).forEach(function(b){var c=f.ns[b];o(a,"onclosenamespace",{prefix:b,uri:c})})}0===b&&(a.closedRoot=!0),a.tagName=a.attribValue=a.attribName="",a.attribList.length=0,a.state=U.TEXT}function z(a){var b,c=a.entity,d=c.toLowerCase(),e="";return a.ENTITIES[c]?a.ENTITIES[c]:a.ENTITIES[d]?a.ENTITIES[d]:(c=d,"#"===c.charAt(0)&&("x"===c.charAt(1)?(c=c.slice(2),b=parseInt(c,16),e=b.toString(16)):(c=c.slice(1),b=parseInt(c,10),e=b.toString(10))),c=c.replace(/^0+/,""),e.toLowerCase()!==c?(t(a,"Invalid character entity"),"&"+a.entity+";"):String.fromCodePoint(b))}function A(a,b){"<"===b?(a.state=U.OPEN_WAKA,a.startTagPosition=a.position):m(G,b)&&(t(a,"Non-whitespace before first tag."),a.textNode=b,a.state=U.TEXT)}function B(a,b){var c="";return b<a.length&&(c=a.charAt(b)),c}function C(a){var b=this;if(this.error)throw this.error;if(b.closed)return r(b,"Cannot write after close. Assign an onready handler.");if(null===a)return s(b);"object"==typeof a&&(a=a.toString());for(var c=0,d="";;){if(d=B(a,c++),b.c=d,!d)break;switch(b.trackPosition&&(b.position++,"\n"===d?(b.line++,b.column=0):b.column++),b.state){case U.BEGIN:if(b.state=U.BEGIN_WHITESPACE,"\ufeff"===d)continue;A(b,d);continue;case U.BEGIN_WHITESPACE:A(b,d);continue;case U.TEXT:if(b.sawRoot&&!b.closedRoot){for(var f=c-1;d&&"<"!==d&&"&"!==d;)(d=B(a,c++))&&b.trackPosition&&(b.position++,"\n"===d?(b.line++,b.column=0):b.column++);b.textNode+=a.substring(f,c-1)}"<"!==d||b.sawRoot&&b.closedRoot&&!b.strict?(!m(G,d)||b.sawRoot&&!b.closedRoot||t(b,"Text data outside of root node."),"&"===d?b.state=U.TEXT_ENTITY:b.textNode+=d):(b.state=U.OPEN_WAKA,b.startTagPosition=b.position);continue;case U.SCRIPT:"<"===d?b.state=U.SCRIPT_ENDING:b.script+=d;continue;case U.SCRIPT_ENDING:"/"===d?b.state=U.CLOSE_TAG:(b.script+="<"+d,b.state=U.SCRIPT);continue;case U.OPEN_WAKA:if("!"===d)b.state=U.SGML_DECL,b.sgmlDecl="";else if(l(G,d));else if(l(Q,d))b.state=U.OPEN_TAG,b.tagName=d;else if("/"===d)b.state=U.CLOSE_TAG,b.tagName="";else if("?"===d)b.state=U.PROC_INST,b.procInstName=b.procInstBody="";else{if(t(b,"Unencoded <"),b.startTagPosition+1<b.position){var g=b.position-b.startTagPosition;d=new Array(g).join(" ")+d}b.textNode+="<"+d,b.state=U.TEXT}continue;case U.SGML_DECL:(b.sgmlDecl+d).toUpperCase()===L?(o(b,"onopencdata"),b.state=U.CDATA,b.sgmlDecl="",b.cdata=""):b.sgmlDecl+d==="--"?(b.state=U.COMMENT,b.comment="",b.sgmlDecl=""):(b.sgmlDecl+d).toUpperCase()===M?(b.state=U.DOCTYPE,(b.doctype||b.sawRoot)&&t(b,"Inappropriately located doctype declaration"),b.doctype="",b.sgmlDecl=""):">"===d?(o(b,"onsgmldeclaration",b.sgmlDecl),b.sgmlDecl="",b.state=U.TEXT):l(J,d)?(b.state=U.SGML_DECL_QUOTED,b.sgmlDecl+=d):b.sgmlDecl+=d;continue;case U.SGML_DECL_QUOTED:d===b.q&&(b.state=U.SGML_DECL,b.q=""),b.sgmlDecl+=d;continue;case U.DOCTYPE:">"===d?(b.state=U.TEXT,o(b,"ondoctype",b.doctype),b.doctype=!0):(b.doctype+=d,"["===d?b.state=U.DOCTYPE_DTD:l(J,d)&&(b.state=U.DOCTYPE_QUOTED,b.q=d));continue;case U.DOCTYPE_QUOTED:b.doctype+=d,d===b.q&&(b.q="",b.state=U.DOCTYPE);continue;case U.DOCTYPE_DTD:b.doctype+=d,"]"===d?b.state=U.DOCTYPE:l(J,d)&&(b.state=U.DOCTYPE_DTD_QUOTED,b.q=d);continue;case U.DOCTYPE_DTD_QUOTED:b.doctype+=d,d===b.q&&(b.state=U.DOCTYPE_DTD,b.q="");continue;case U.COMMENT:"-"===d?b.state=U.COMMENT_ENDING:b.comment+=d;continue;case U.COMMENT_ENDING:"-"===d?(b.state=U.COMMENT_ENDED,b.comment=q(b.opt,b.comment),b.comment&&o(b,"oncomment",b.comment),b.comment=""):(b.comment+="-"+d,b.state=U.COMMENT);continue;case U.COMMENT_ENDED:">"!==d?(t(b,"Malformed comment"),b.comment+="--"+d,b.state=U.COMMENT):b.state=U.TEXT;continue;case U.CDATA:"]"===d?b.state=U.CDATA_ENDING:b.cdata+=d;continue;case U.CDATA_ENDING:"]"===d?b.state=U.CDATA_ENDING_2:(b.cdata+="]"+d,b.state=U.CDATA);continue;case U.CDATA_ENDING_2:">"===d?(b.cdata&&o(b,"oncdata",b.cdata),o(b,"onclosecdata"),b.cdata="",b.state=U.TEXT):"]"===d?b.cdata+="]":(b.cdata+="]]"+d,b.state=U.CDATA);continue;case U.PROC_INST:"?"===d?b.state=U.PROC_INST_ENDING:l(G,d)?b.state=U.PROC_INST_BODY:b.procInstName+=d;continue;case U.PROC_INST_BODY:if(!b.procInstBody&&l(G,d))continue;"?"===d?b.state=U.PROC_INST_ENDING:b.procInstBody+=d;continue;case U.PROC_INST_ENDING:">"===d?(o(b,"onprocessinginstruction",{name:b.procInstName,body:b.procInstBody}),b.procInstName=b.procInstBody="",b.state=U.TEXT):(b.procInstBody+="?"+d,b.state=U.PROC_INST_BODY);continue;case U.OPEN_TAG:l(R,d)?b.tagName+=d:(u(b),">"===d?x(b):"/"===d?b.state=U.OPEN_TAG_SLASH:(m(G,d)&&t(b,"Invalid character in tag name"),b.state=U.ATTRIB));continue;case U.OPEN_TAG_SLASH:">"===d?(x(b,!0),y(b)):(t(b,"Forward-slash in opening tag not followed by >"),b.state=U.ATTRIB);continue;case U.ATTRIB:if(l(G,d))continue;">"===d?x(b):"/"===d?b.state=U.OPEN_TAG_SLASH:l(Q,d)?(b.attribName=d,b.attribValue="",b.state=U.ATTRIB_NAME):t(b,"Invalid attribute name");continue;case U.ATTRIB_NAME:"="===d?b.state=U.ATTRIB_VALUE:">"===d?(t(b,"Attribute without value"),b.attribValue=b.attribName,w(b),x(b)):l(G,d)?b.state=U.ATTRIB_NAME_SAW_WHITE:l(R,d)?b.attribName+=d:t(b,"Invalid attribute name");continue;case U.ATTRIB_NAME_SAW_WHITE:if("="===d)b.state=U.ATTRIB_VALUE;else{if(l(G,d))continue;t(b,"Attribute without value"),b.tag.attributes[b.attribName]="",b.attribValue="",o(b,"onattribute",{name:b.attribName,value:""}),b.attribName="",">"===d?x(b):l(Q,d)?(b.attribName=d,b.state=U.ATTRIB_NAME):(t(b,"Invalid attribute name"),b.state=U.ATTRIB)}continue;case U.ATTRIB_VALUE:if(l(G,d))continue;l(J,d)?(b.q=d,b.state=U.ATTRIB_VALUE_QUOTED):(t(b,"Unquoted attribute value"),b.state=U.ATTRIB_VALUE_UNQUOTED,b.attribValue=d);continue;case U.ATTRIB_VALUE_QUOTED:if(d!==b.q){"&"===d?b.state=U.ATTRIB_VALUE_ENTITY_Q:b.attribValue+=d;continue}w(b),b.q="",b.state=U.ATTRIB_VALUE_CLOSED;continue;case U.ATTRIB_VALUE_CLOSED:l(G,d)?b.state=U.ATTRIB:">"===d?x(b):"/"===d?b.state=U.OPEN_TAG_SLASH:l(Q,d)?(t(b,"No whitespace between attributes"),b.attribName=d,b.attribValue="",b.state=U.ATTRIB_NAME):t(b,"Invalid attribute name");continue;case U.ATTRIB_VALUE_UNQUOTED:if(m(K,d)){"&"===d?b.state=U.ATTRIB_VALUE_ENTITY_U:b.attribValue+=d;continue}w(b),">"===d?x(b):b.state=U.ATTRIB;continue;case U.CLOSE_TAG:if(b.tagName)">"===d?y(b):l(R,d)?b.tagName+=d:b.script?(b.script+="</"+b.tagName,b.tagName="",b.state=U.SCRIPT):(m(G,d)&&t(b,"Invalid tagname in closing tag"),b.state=U.CLOSE_TAG_SAW_WHITE);else{if(l(G,d))continue;m(Q,d)?b.script?(b.script+="</"+d,b.state=U.SCRIPT):t(b,"Invalid tagname in closing tag."):b.tagName=d}continue;case U.CLOSE_TAG_SAW_WHITE:if(l(G,d))continue;">"===d?y(b):t(b,"Invalid characters in closing tag");continue;case U.TEXT_ENTITY:case U.ATTRIB_VALUE_ENTITY_Q:case U.ATTRIB_VALUE_ENTITY_U:var h,i;switch(b.state){case U.TEXT_ENTITY:h=U.TEXT,i="textNode";break;case U.ATTRIB_VALUE_ENTITY_Q:h=U.ATTRIB_VALUE_QUOTED,i="attribValue";break;case U.ATTRIB_VALUE_ENTITY_U:h=U.ATTRIB_VALUE_UNQUOTED,i="attribValue"}";"===d?(b[i]+=z(b),b.entity="",b.state=h):l(b.entity.length?T:S,d)?b.entity+=d:(t(b,"Invalid character in entity name"),b[i]+="&"+b.entity+d,b.entity="",b.state=h);continue;default:throw new Error(b,"Unknown state: "+b.state)}}return b.position>=b.bufferCheckPosition&&e(b),b}c.parser=function(a,b){return new d(a,b)},c.SAXParser=d,c.SAXStream=i,c.createStream=h,c.MAX_BUFFER_LENGTH=65536;var D=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];c.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"],Object.create||(Object.create=function(a){function b(){}return b.prototype=a,new b}),Object.keys||(Object.keys=function(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b}),d.prototype={end:function(){s(this)},write:C,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){g(this)}};var E;try{E=a(46).Stream}catch(W){E=function(){}}var F=c.EVENTS.filter(function(a){return"error"!==a&&"end"!==a});i.prototype=Object.create(E.prototype,{constructor:{value:i}}),i.prototype.write=function(c){if("function"==typeof b&&"function"==typeof b.isBuffer&&b.isBuffer(c)){if(!this._decoder){var d=a(9).StringDecoder;this._decoder=new d("utf8")}c=this._decoder.write(c)}return this._parser.write(c.toString()),this.emit("data",c),!0},i.prototype.end=function(a){return a&&a.length&&this.write(a),this._parser.end(),!0},i.prototype.on=function(a,b){var c=this;return c._parser["on"+a]||-1===F.indexOf(a)||(c._parser["on"+a]=function(){var b=1===arguments.length?[arguments[0]]:Array.apply(null,arguments);b.splice(0,0,a),c.emit.apply(c,b)}),E.prototype.on.call(c,a,b)};var G="\r\n\t ",H="0124356789",I="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",J="'\"",K=G+">",L="[CDATA[",M="DOCTYPE",N="http://www.w3.org/XML/1998/namespace",O="http://www.w3.org/2000/xmlns/",P={xml:N,xmlns:O};G=j(G),H=j(H),I=j(I);var Q=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,R=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040\.\d-]/,S=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,T=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040\.\d-]/;J=j(J),K=j(K);var U=0;c.STATE={BEGIN:U++,BEGIN_WHITESPACE:U++,TEXT:U++,TEXT_ENTITY:U++,OPEN_WAKA:U++,SGML_DECL:U++,SGML_DECL_QUOTED:U++,DOCTYPE:U++,DOCTYPE_QUOTED:U++,DOCTYPE_DTD:U++,DOCTYPE_DTD_QUOTED:U++,COMMENT_STARTING:U++,COMMENT:U++,COMMENT_ENDING:U++,COMMENT_ENDED:U++,CDATA:U++,CDATA_ENDING:U++,CDATA_ENDING_2:U++,PROC_INST:U++,PROC_INST_BODY:U++,PROC_INST_ENDING:U++,OPEN_TAG:U++,OPEN_TAG_SLASH:U++,ATTRIB:U++,ATTRIB_NAME:U++,ATTRIB_NAME_SAW_WHITE:U++,ATTRIB_VALUE:U++,ATTRIB_VALUE_QUOTED:U++,ATTRIB_VALUE_CLOSED:U++,ATTRIB_VALUE_UNQUOTED:U++,ATTRIB_VALUE_ENTITY_Q:U++,ATTRIB_VALUE_ENTITY_U:U++,CLOSE_TAG:U++,CLOSE_TAG_SAW_WHITE:U++,SCRIPT:U++,SCRIPT_ENDING:U++},c.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"},c.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(c.ENTITIES).forEach(function(a){var b=c.ENTITIES[a],d="number"==typeof b?String.fromCharCode(b):b;c.ENTITIES[a]=d});for(var V in c.STATE)c.STATE[c.STATE[V]]=V;U=c.STATE,/*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
String.fromCodePoint||function(){var a=String.fromCharCode,b=Math.floor,c=function(){var c,d,e=16384,f=[],g=-1,h=arguments.length;if(!h)return"";for(var i="";++g<h;){var j=Number(arguments[g]);if(!isFinite(j)||j<0||j>1114111||b(j)!==j)throw RangeError("Invalid code point: "+j);j<=65535?f.push(j):(j-=65536,c=55296+(j>>10),d=j%1024+56320,f.push(c,d)),(g+1===h||f.length>e)&&(i+=a.apply(null,f),f.length=0)}return i};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:c,configurable:!0,writable:!0}):String.fromCodePoint=c}()}(void 0===c?this.sax={}:c)}).call(this,a(10).Buffer)},{10:10,46:46,9:9}],46:[function(a,b,c){function d(){e.call(this)}b.exports=d;var e=a(16).EventEmitter;a(25)(d,e),d.Readable=a(40),d.Writable=a(42),d.Duplex=a(30),d.Transform=a(41),d.PassThrough=a(39),d.Stream=d,d.prototype.pipe=function(a,b){function c(b){a.writable&&!1===a.write(b)&&j.pause&&j.pause()}function d(){j.readable&&j.resume&&j.resume()}function f(){k||(k=!0,a.end())}function g(){k||(k=!0,"function"==typeof a.destroy&&a.destroy())}function h(a){if(i(),0===e.listenerCount(this,"error"))throw a}function i(){j.removeListener("data",c),a.removeListener("drain",d),j.removeListener("end",f),j.removeListener("close",g),j.removeListener("error",h),a.removeListener("error",h),j.removeListener("end",i),j.removeListener("close",i),a.removeListener("close",i)}var j=this;j.on("data",c),a.on("drain",d),a._isStdio||b&&!1===b.end||(j.on("end",f),j.on("close",g));var k=!1;return j.on("error",h),a.on("error",h),j.on("end",i),j.on("close",i),a.on("close",i),a.emit("pipe",j),a}},{16:16,25:25,30:30,39:39,40:40,41:41,42:42}],47:[function(a,b,c){"use strict";function d(a){if(!a)return"utf8";for(var b;;)switch(a){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return a;default:if(b)return;a=(""+a).toLowerCase(),b=!0}}function e(a){var b=d(a);if("string"!=typeof b&&(s.isEncoding===t||!t(a)))throw new Error("Unknown encoding: "+a);return b||a}function f(a){this.encoding=e(a);var b;switch(this.encoding){case"utf16le":this.text=m,this.end=n,b=4;break;case"utf8":this.fillLast=j,b=4;break;case"base64":this.text=o,this.end=p,b=3;break;default:return this.write=q,void(this.end=r)}this.lastNeed=0,this.lastTotal=0,this.lastChar=s.allocUnsafe(b)}function g(a){return a<=127?0:a>>5==6?2:a>>4==14?3:a>>3==30?4:-1}function h(a,b,c){var d=b.length-1;if(d<c)return 0;var e=g(b[d]);return e>=0?(e>0&&(a.lastNeed=e-1),e):--d<c?0:(e=g(b[d]))>=0?(e>0&&(a.lastNeed=e-2),e):--d<c?0:(e=g(b[d]),e>=0?(e>0&&(2===e?e=0:a.lastNeed=e-3),e):0)}function i(a,b,c){if(128!=(192&b[0]))return a.lastNeed=0,"�".repeat(c);if(a.lastNeed>1&&b.length>1){if(128!=(192&b[1]))return a.lastNeed=1,"�".repeat(c+1);if(a.lastNeed>2&&b.length>2&&128!=(192&b[2]))return a.lastNeed=2,"�".repeat(c+2)}}function j(a){var b=this.lastTotal-this.lastNeed,c=i(this,a,b);return void 0!==c?c:this.lastNeed<=a.length?(a.copy(this.lastChar,b,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(a.copy(this.lastChar,b,0,a.length),void(this.lastNeed-=a.length))}function k(a,b){var c=h(this,a,b);if(!this.lastNeed)return a.toString("utf8",b);this.lastTotal=c;var d=a.length-(c-this.lastNeed);return a.copy(this.lastChar,0,d),a.toString("utf8",b,d)}function l(a){var b=a&&a.length?this.write(a):"";return this.lastNeed?b+"�".repeat(this.lastTotal-this.lastNeed):b}function m(a,b){if((a.length-b)%2==0){var c=a.toString("utf16le",b);if(c){var d=c.charCodeAt(c.length-1);if(d>=55296&&d<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=a[a.length-2],this.lastChar[1]=a[a.length-1],c.slice(0,-1)}return c}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=a[a.length-1],a.toString("utf16le",b,a.length-1)}function n(a){var b=a&&a.length?this.write(a):"";if(this.lastNeed){var c=this.lastTotal-this.lastNeed;return b+this.lastChar.toString("utf16le",0,c)}return b}function o(a,b){var c=(a.length-b)%3;return 0===c?a.toString("base64",b):(this.lastNeed=3-c,this.lastTotal=3,1===c?this.lastChar[0]=a[a.length-1]:(this.lastChar[0]=a[a.length-2],this.lastChar[1]=a[a.length-1]),a.toString("base64",b,a.length-c))}function p(a){var b=a&&a.length?this.write(a):"";return this.lastNeed?b+this.lastChar.toString("base64",0,3-this.lastNeed):b}function q(a){return a.toString(this.encoding)}function r(a){return a&&a.length?this.write(a):""}var s=a(44).Buffer,t=s.isEncoding||function(a){switch((a=""+a)&&a.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};c.StringDecoder=f,f.prototype.write=function(a){if(0===a.length)return"";var b,c;if(this.lastNeed){if(void 0===(b=this.fillLast(a)))return"";c=this.lastNeed,this.lastNeed=0}else c=0;return c<a.length?b?b+this.text(a,c):this.text(a,c):b||""},f.prototype.end=l,f.prototype.text=k,f.prototype.fillLast=function(a){if(this.lastNeed<=a.length)return a.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);a.copy(this.lastChar,this.lastTotal-this.lastNeed,0,a.length),this.lastNeed-=a.length}},{44:44}],48:[function(a,b,c){(function(a){function c(a,b){function c(){if(!e){if(d("throwDeprecation"))throw new Error(b);d("traceDeprecation")?console.trace(b):console.warn(b),e=!0}return a.apply(this,arguments)}if(d("noDeprecation"))return a;var e=!1;return c}function d(b){try{if(!a.localStorage)return!1}catch(d){return!1}var c=a.localStorage[b];return null!=c&&"true"===String(c).toLowerCase()}b.exports=c}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],49:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(){l=!0,m=!0,n=!1,o=(new Date).getTime()}function b(a){m=a}function c(a){n=a}function d(a){l=a}function e(){return l}function f(){var a="",b=null;m&&(b=(new Date).getTime(),a+="["+(b-o)+"]"),n&&this&&this.getClassName&&(a+="["+this.getClassName()+"]",this.getType&&(a+="["+this.getType()+"]")),a.length>0&&(a+=" "),Array.apply(null,arguments).forEach(function(b){a+=b+" "}),l&&console.log(a),j.trigger(i.default.LOG,{message:a})}var h=this.context,j=(0,g.default)(h).getInstance(),k=void 0,l=void 0,m=void 0,n=void 0,o=void 0;return k={log:f,setLogTimestampVisible:b,setCalleeNameVisible:c,setLogToBrowserConsole:d,getLogToBrowserConsole:e},a(),k}Object.defineProperty(c,"__esModule",{value:!0});var f=a(50),g=d(f),h=a(54),i=d(h),j=a(51),k=d(j);e.__dashjs_factory_name="Debug",c.default=k.default.getSingletonFactory(e),b.exports=c.default},{50:50,51:51,54:54}],50:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a,b,c){var e=arguments.length<=3||void 0===arguments[3]?h:arguments[3];if(!a)throw new Error("event type cannot be null or undefined");if(!b||"function"!=typeof b)throw new Error("listener must be a function: "+b);if(!(d(a,b,c)>=0)){f[a]=f[a]||[];var g={callback:b,scope:c,priority:e};f[a].some(function(b,c){if(b&&e>b.priority)return f[a].splice(c,0,g),!0})||f[a].push(g)}}function b(a,b,c){if(a&&b&&f[a]){var e=d(a,b,c);e<0||(f[a][e]=null)}}function c(a,b){if(a&&f[a]){if(b=b||{},b.hasOwnProperty("type"))throw new Error("'type' is a reserved word for event dispatching");b.type=a,f[a]=f[a].filter(function(a){return a}),f[a].forEach(function(a){return a&&a.callback.call(a.scope,b)})}}function d(a,b,c){var d=-1;return f[a]?(f[a].some(function(a,e){if(a&&a.callback===b&&(!c||c===a.scope))return d=e,!0}),d):d}function e(){f={}}var f={};return{on:a,off:b,trigger:c,reset:e}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f),h=0,i=5e3;e.__dashjs_factory_name="EventBus";var j=g.default.getSingletonFactory(e);j.EVENT_PRIORITY_LOW=h,j.EVENT_PRIORITY_HIGH=i,g.default.updateSingletonFactory(e.__dashjs_factory_name,j),c.default=j,b.exports=c.default},{51:51}],51:[function(a,b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d=function(){function a(a,b,c,d){var e=n(d);!e[a]&&b&&(e[a]={instance:b,override:c})}function b(a,b){for(var c in q){var d=q[c];if(d.context===a&&d.name===b)return d.instance}return null}function c(a,b,c){for(var d in q){var e=q[d];if(e.context===a&&e.name===b)return void(q[d].instance=c)}q.push({name:b,context:a,instance:c})}function d(a,b,c){for(var d in c){if(c[d].name===a)return void(c[d].factory=b)}c.push({name:a,factory:b})}function e(a,b){for(var c in b){if(b[c].name===a)return b[c].factory}return null}function f(a,b,c){for(var d in c){if(c[d].name===a)return void(c[d].factory=b)}}function g(a,b){f(a,b,s)}function h(a){return e(a,s)}function i(a){var b=e(a.__dashjs_factory_name,s);return b||(b=function(b){return void 0===b&&(b={}),{create:function(){return m(a.__dashjs_factory_name,a.apply({context:b},arguments),b,arguments)}}},d(a.__dashjs_factory_name,b,s)),b}function j(a,b){f(a,b,r)}function k(a){return e(a,r)}function l(a){var c=e(a.__dashjs_factory_name,r);return c||(c=function(c){var d=void 0;return void 0===c&&(c={}),{getInstance:function(){return d||(d=b(c,a.__dashjs_factory_name)),d||(d=m(a.__dashjs_factory_name,a.apply({context:c},arguments),c,arguments),q.push({name:a.__dashjs_factory_name,context:c,instance:d})),d}}},d(a.__dashjs_factory_name,c,r)),c}function m(a,b,c,d){b.getClassName=function(){return a};var e=n(c),f=e[a];if(f){var g=f.instance;if(!f.override)return g.apply({context:c,factory:o},d);g=g.apply({context:c,factory:o,parent:b},d);for(var h in g)b.hasOwnProperty(h)&&(b[h]=g[h])}return b}function n(a){var b=void 0;return p.forEach(function(c){c===a&&(b=c)}),b||(p.push(a),b=a),b}var o=void 0,p=[],q=[],r=[],s=[];return o={extend:a,getSingletonInstance:b,setSingletonInstance:c,getSingletonFactory:l,getSingletonFactoryByName:k,updateSingletonFactory:j,getClassFactory:i,getClassFactoryByName:h,updateClassFactory:g}}();c.default=d,b.exports=c.default},{}],52:[function(a,b,c){"use strict";function d(){return e}Object.defineProperty(c,"__esModule",{value:!0}),c.getVersionString=d;var e="2.6.6"},{}],53:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(c,"__esModule",{value:!0});var g=function(a,b,c){for(var d=!0;d;){var e=a,f=b,g=c;d=!1,null===e&&(e=Function.prototype);var h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var i=h.get;if(void 0===i)return;return i.call(g)}var j=Object.getPrototypeOf(e);if(null===j)return;a=j,b=f,c=g,d=!0,h=j=void 0}},h=a(55),i=d(h),j=function(a){function b(){e(this,b),g(Object.getPrototypeOf(b.prototype),"constructor",this).call(this),this.BUFFERING_COMPLETED="bufferingCompleted",this.BUFFER_CLEARED="bufferCleared",this.BUFFER_LEVEL_UPDATED="bufferLevelUpdated",this.BYTES_APPENDED="bytesAppended",this.CHECK_FOR_EXISTENCE_COMPLETED="checkForExistenceCompleted",this.CURRENT_TRACK_CHANGED="currentTrackChanged",this.DATA_UPDATE_COMPLETED="dataUpdateCompleted",this.DATA_UPDATE_STARTED="dataUpdateStarted",this.INITIALIZATION_LOADED="initializationLoaded",this.INIT_FRAGMENT_LOADED="initFragmentLoaded",this.INIT_REQUESTED="initRequested",this.INTERNAL_MANIFEST_LOADED="internalManifestLoaded",this.LIVE_EDGE_SEARCH_COMPLETED="liveEdgeSearchCompleted",this.LOADING_COMPLETED="loadingCompleted",this.LOADING_PROGRESS="loadingProgress",this.LOADING_ABANDONED="loadingAborted",this.MANIFEST_UPDATED="manifestUpdated",this.MEDIA_FRAGMENT_LOADED="mediaFragmentLoaded",this.QUOTA_EXCEEDED="quotaExceeded",this.REPRESENTATION_UPDATED="representationUpdated",this.SEGMENTS_LOADED="segmentsLoaded",this.SERVICE_LOCATION_BLACKLIST_ADD="serviceLocationBlacklistAdd",this.SERVICE_LOCATION_BLACKLIST_CHANGED="serviceLocationBlacklistChanged",this.SOURCEBUFFER_APPEND_COMPLETED="sourceBufferAppendCompleted",this.SOURCEBUFFER_REMOVE_COMPLETED="sourceBufferRemoveCompleted",this.STREAMS_COMPOSED="streamsComposed",this.STREAM_BUFFERING_COMPLETED="streamBufferingCompleted",this.STREAM_COMPLETED="streamCompleted",this.TEXT_TRACKS_QUEUE_INITIALIZED="textTracksQueueInitialized",this.TIMED_TEXT_REQUESTED="timedTextRequested",this.TIME_SYNCHRONIZATION_COMPLETED="timeSynchronizationComplete",this.URL_RESOLUTION_FAILED="urlResolutionFailed",this.VIDEO_CHUNK_RECEIVED="videoChunkReceived",this.WALLCLOCK_TIME_UPDATED="wallclockTimeUpdated",this.XLINK_ELEMENT_LOADED="xlinkElementLoaded",this.XLINK_READY="xlinkReady"}return f(b,a),b}(i.default);c.default=j,b.exports=c.default},{55:55}],54:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(c,"__esModule",{value:!0});var g=function(a,b,c){for(var d=!0;d;){var e=a,f=b,g=c;d=!1,null===e&&(e=Function.prototype);var h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var i=h.get;if(void 0===i)return;return i.call(g)}var j=Object.getPrototypeOf(e);if(null===j)return;a=j,b=f,c=g,d=!0,h=j=void 0}},h=a(53),i=d(h),j=function(a){function b(){e(this,b),g(Object.getPrototypeOf(b.prototype),"constructor",this).apply(this,arguments)}return f(b,a),b}(i.default),k=new j;c.default=k,b.exports=c.default},{53:53}],55:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=function(){function a(){d(this,a)}return e(a,[{key:"extend",value:function(a,b){if(a){var c=!!b&&b.override,d=!!b&&b.publicOnly;for(var e in a)!a.hasOwnProperty(e)||this[e]&&!c||d&&-1===a[e].indexOf("public_")||(this[e]=a[e])}}}]),a}();c.default=f,b.exports=c.default},{}],56:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(){L()}function b(a){a&&a.dashManifestModel&&(N=a.dashManifestModel)}function c(a,b){return b&&a?b.getRepresentationForQuality(a.quality):null}function d(a){return a&&a.streamInfo&&void 0!==a.streamInfo.id&&P[a.streamInfo.id]?P[a.streamInfo.id][a.index]:null}function e(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d];if(a.id===e.id)return e}return null}function f(a){var b=new i.default,c=a.adaptation.period.mpd.manifest.Period_asArray[a.adaptation.period.index].AdaptationSet_asArray[a.adaptation.index],d=N.getRepresentationFor(a.index,c);return b.id=a.id,b.quality=a.index,b.bandwidth=N.getBandwidth(d),b.DVRWindow=a.segmentAvailabilityRange,b.fragmentDuration=a.segmentDuration||(a.segments&&a.segments.length>0?a.segments[0].duration:NaN),b.MSETimeOffset=a.MSETimeOffset,b.useCalculatedLiveEdgeTime=a.useCalculatedLiveEdgeTime,b.mediaInfo=h(a.adaptation),b}function h(a){var b=new k.default,c=a.period.mpd.manifest.Period_asArray[a.period.index].AdaptationSet_asArray[a.index],d=void 0;return b.id=a.id,b.index=a.index,b.type=a.type,b.streamInfo=n(a.period),b.representationCount=N.getRepresentationCount(c),b.lang=N.getLanguageForAdaptation(c),d=N.getViewpointForAdaptation(c),b.viewpoint=d?d.value:void 0,b.accessibility=N.getAccessibilityForAdaptation(c).map(function(a){var c=a.value,d=c;return a.schemeIdUri&&a.schemeIdUri.search("cea-608")>=0&&void 0!==u.default&&(d=c?"cea-608:"+c:"cea-608",b.embeddedCaptions=!0),d}),b.audioChannelConfiguration=N.getAudioChannelConfigurationForAdaptation(c).map(function(a){return a.value}),b.roles=N.getRolesForAdaptation(c).map(function(a){return a.value}),b.codec=N.getCodec(c),b.mimeType=N.getMimeType(c),b.contentProtection=N.getContentProtectionData(c),b.bitrateList=N.getBitrateListForAdaptation(c),b.contentProtection&&b.contentProtection.forEach(function(a){a.KID=N.getKID(a)}),b.isText=N.getIsTextTrack(b.mimeType),b}function j(a,b,c){a.id=b,a.index=100+parseInt(b.substring(2,3)),a.type=g.default.EMBEDDED_TEXT,a.codec="cea-608-in-SEI",a.isText=!0,a.isEmbedded=!0,a.lang=b+" "+c,a.roles=["caption"]}function l(a){a.type=g.default.IMAGE}function n(a){var b=new m.default;return b.id=a.id,b.index=a.index,b.start=a.start,b.duration=a.duration,b.manifestInfo=p(a.mpd),b.isLast=1===a.mpd.manifest.Period_asArray.length||Math.abs(b.start+b.duration-b.manifestInfo.duration)<1,b}function p(a){var b=new o.default;return b.DVRWindowSize=a.timeShiftBufferDepth,b.loadedTime=a.manifest.loadedTime,b.availableFrom=a.availabilityStartTime,b.minBufferTime=a.manifest.minBufferTime,b.maxFragmentDuration=a.maxSegmentDuration,b.duration=N.getDuration(a.manifest),b.isDynamic=N.getIsDynamic(a.manifest),b}function r(a,b){if(0===O.length)return null;var c=O[0].mpd.manifest,d=N.getAdaptationForType(c,a.index,b,a);if(!d)return null;var f=e(a,O),g=f.id,i=N.getIndexForAdaptation(d,c,a.index);return P[g]=P[g]||N.getAdaptationsForPeriod(f),h(P[g][i])}function s(a,b,c){var d=O,f=c,i=[],k=void 0,m=void 0,n=void 0,o=void 0,p=void 0,q=void 0;if(f){t();var r=N.getMpd(f);d=N.getRegularPeriods(r)}else{if(!(O.length>0))return i;f=O[0].mpd.manifest}var s=e(a,d),u=s.id,v=N.getAdaptationsForType(f,a.index,b!==g.default.EMBEDDED_TEXT?b:g.default.VIDEO);if(!v)return i;for(P[u]=P[u]||N.getAdaptationsForPeriod(s),o=0,q=v.length;o<q;o++)if(k=v[o],n=N.getIndexForAdaptation(k,f,a.index),m=h(P[u][n]),b===g.default.EMBEDDED_TEXT){var w=m.accessibility.length;for(p=0;p<w;p++)if(m){var x=m.accessibility[p];if(0===x.indexOf("cea-608:")){var y=x.substring(8),z=y.split(";");if("CC"===z[0].substring(0,2))for(p=0;p<z.length;p++)m||(m=h.call(this,P[u][n])),j(m,z[p].substring(0,3),z[p].substring(4)),i.push(m),m=null;else for(p=0;p<z.length;p++)m||(m=h.call(this,P[u][n])),j(m,"CC"+(p+1),z[p]),i.push(m),m=null}else 0===x.indexOf("cea-608")&&(j(m,g.default.CC1,"eng"),i.push(m),m=null)}}else b===g.default.IMAGE?(l(m),i.push(m),m=null):m&&i.push(m);return i}function t(){if(!N||!N.hasOwnProperty("getMpd")||!N.hasOwnProperty("getRegularPeriods"))throw new Error("setConfig function has to be called previously")}function v(a){if(!a)return null;t();var b=N.getMpd(a);O=N.getRegularPeriods(b),P={}}function w(a){var b=[],c=O;if(a){t();var d=N.getMpd(a);c=N.getRegularPeriods(d)}for(var e=0;e<c.length;e++)b.push(n(c[e]));return b}function x(a){if(!(a&&a.hasOwnProperty("getRepresentationController")&&a.hasOwnProperty("getIndexHandler")&&a.hasOwnProperty("getMediaInfo")&&a.hasOwnProperty("getType")&&a.hasOwnProperty("getStreamInfo")))throw new Error("streamProcessor parameter is missing or malformed!")}function y(a){if(!a||!a.hasOwnProperty("getRepresentationForQuality")||!a.hasOwnProperty("getCurrentRepresentation"))throw new Error("representationController parameter is missing or malformed!")}function z(a){if(null===a||isNaN(a)||a%1!=0)throw new Error("quality argument is not an integer")}function A(a,b){var c=void 0,d=void 0,e=void 0;return x(a),z(b),c=a.getRepresentationController(),e=a.getIndexHandler(),d=c?c.getRepresentationForQuality(b):null,e?e.getInitRequest(d):null}function B(a,b){var d=void 0,e=void 0,f=void 0;return x(a),d=a.getRepresentationController(),e=c(b,d),f=a.getIndexHandler(),f?f.getNextSegmentRequest(e):null}function C(a,b,d,e){var f=void 0,g=void 0,h=void 0;return x(a),f=a.getRepresentationController(),g=c(b,f),h=a.getIndexHandler(),h?h.getSegmentRequestForTime(g,d,e):null}function D(a,b,d){var e=void 0,f=void 0,g=void 0;return x(a),e=a.getRepresentationController(),f=c(b,e),g=a.getIndexHandler(),g?g.generateSegmentRequestForTime(f,d):null}function E(a){x(a);var b=a.getIndexHandler();return b?b.getCurrentTime():NaN}function F(a,b){x(a);var c=a.getIndexHandler();c&&c.setCurrentTime(b)}function G(a){x(a);var b=e(a.getStreamInfo(),O),c=a.getMediaInfo(),f=d(c),g=a.getType(),h=void 0,i=void 0;h=c?c.id:null,O.length>0&&(i=h?N.getAdaptationForId(h,O[0].mpd.manifest,b.index):N.getAdaptationForIndex(c.index,O[0].mpd.manifest,b.index),a.getRepresentationController().updateData(i,f,g))}function H(a,b){y(a),z(b);var c=a.getRepresentationForQuality(b);return c?f(c):null}function I(a){y(a);var b=a.getCurrentRepresentation();return b?f(b):null}function J(a,b,c){if(!a||!b)return null;var d=new q.default,e=a.scheme_id_uri,f=a.value,g=a.timescale,h=a.presentation_time_delta,i=a.event_duration,j=a.id,k=a.message_data,l=c*g+h;return b[e]?(d.eventStream=b[e],d.eventStream.value=f,d.eventStream.timescale=g,d.duration=i,d.id=j,d.presentationTime=l,d.messageData=k,d.presentationTimeDelta=h,d):null}function K(a,b){var f=[];if(0===O.length)return f;var g=O[0].mpd.manifest;return a instanceof m.default?f=N.getEventsForPeriod(e(a,O)):a instanceof k.default?f=N.getEventStreamForAdaptationSet(g,d(a)):a instanceof i.default&&(f=N.getEventStreamForRepresentation(g,c(a,b.getRepresentationController()))),f}function L(){O=[],P={}}var M=void 0,N=void 0,O=void 0,P=void 0;return M={convertDataToRepresentationInfo:f,getDataForMedia:d,getStreamsInfo:w,getMediaInfoForType:r,getAllMediaInfoForType:s,getCurrentRepresentationInfo:I,getRepresentationInfoForQuality:H,updateData:G,getInitRequest:A,getNextFragmentRequest:B,getFragmentRequestForTime:C,generateFragmentRequestForTime:D,getIndexHandlerTime:E,setIndexHandlerTime:F,getEventsFor:K,getEvent:J,setConfig:b,updatePeriods:v,reset:L},a(),M}Object.defineProperty(c,"__esModule",{value:!0});var f=a(100),g=d(f),h=a(219),i=d(h),j=a(217),k=d(j),l=a(220),m=d(l),n=a(216),o=d(n),p=a(83),q=d(p),r=a(51),s=d(r),t=a(2),u=d(t);e.__dashjs_factory_name="DashAdapter",c.default=s.default.getSingletonFactory(e),b.exports=c.default},{100:100,2:2,216:216,217:217,219:219,220:220,51:51,83:83}],57:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){Z=(0,v.default)(O).getInstance().log.bind(Y),l(),R=c(a.mimeType)?(0,G.default)(O).getInstance():(0,E.default)(O).getInstance(),R.setConfig({baseURLController:X,metricsModel:U,mediaPlayerModel:V,errHandler:W}),P.on(p.default.INITIALIZATION_LOADED,M,Y),P.on(p.default.SEGMENTS_LOADED,N,Y)}function c(a){return"webm"===a.split("/")[1].toLowerCase()}function d(b){ca=b;var c=ca?ca.getStreamInfo().manifestInfo.isDynamic:null;R.initialize(),da=(0,C.default)(O).create(a,c)}function e(){return ca}function f(a){aa=a}function h(){return aa}function j(){return ba}function l(){$=-1,aa=0,ba=NaN,_=null,ca=null,da=null}function o(){l(),P.off(p.default.INITIALIZATION_LOADED,M,Y),P.off(p.default.SEGMENTS_LOADED,N,Y)}function q(a,b,c){var d=X.resolve(c.path),e=void 0,f=void 0;return d&&b!==d.url&&Q.isRelative(b)?(e=d.url,f=d.serviceLocation,b&&(e=Q.resolve(b,e))):e=b,!Q.isRelative(e)&&(a.url=e,a.serviceLocation=f,!0)}function s(a,b){var c=new k.default,d=a.adaptation.period,e=d.start,f=ca?ca.getStreamInfo().manifestInfo.isDynamic:null;if(c.mediaType=b,c.type=n.HTTPRequest.INIT_SEGMENT_TYPE,c.range=a.range,c.availabilityStartTime=S.calcAvailabilityStartTimeFromPresentationTime(e,d.mpd,f),c.availabilityEndTime=S.calcAvailabilityEndTimeFromPresentationTime(e+d.duration,d.mpd,f),c.quality=a.index,c.mediaInfo=ca?ca.getMediaInfo():null,c.representationId=a.id,q(c,a.initialization,a))return c}function t(a){var b=ca?ca.getType():null;return a?s(a,b):null}function u(a){var b=!1,c=ca?ca.getStreamInfo().manifestInfo.isDynamic:null;if(c||$!==a.availableSegmentsNumber){var d=(0,A.getSegmentByIndex)($,a);if(d){var e=parseFloat((d.presentationStartTime-a.adaptation.period.start).toFixed(5)),f=a.adaptation.period.duration;Z(a.segmentInfoType+": "+e+" / "+f),b=(a.segmentInfoType!==i.default.SEGMENT_TIMELINE||!c)&&e>=f}else Z("isMediaFinished - no segment found")}else b=!0;return b}function w(a){da.getSegments(a,_,$,y)}function y(a,b){var c=ca?ca.getStreamInfo().manifestInfo.isDynamic:null;if(a.segments=b,b&&b.length>0&&(ba=isNaN(ba)?b[0].presentationStartTime:Math.min(b[0].presentationStartTime,ba),c&&isNaN(S.getExpectedLiveEdge()))){var d=b[b.length-1],e=d.presentationStartTime,f=U.getMetricsFor(g.default.STREAM);S.setExpectedLiveEdge(e),U.updateManifestUpdateInfo(T.getCurrentManifestUpdate(f),{presentationStartTime:e})}}function B(a){if(!a)throw new Error("no representation");a.segments=null,w(a)}function D(a,b){var c=z.default.hasInitialization(a),d=z.default.hasSegments(a),e=ca?ca.getType():null,f=ca?ca.getStreamInfo().manifestInfo.isDynamic:null,g=void 0;if(a.segmentDuration||a.segments||B(a),a.segmentAvailabilityRange=null,a.segmentAvailabilityRange=S.calcSegmentAvailabilityRange(a,f),a.segmentAvailabilityRange.end<a.segmentAvailabilityRange.start&&!a.useCalculatedLiveEdgeTime)return g=new m.default(H,"no segments are available yet",{availabilityDelay:a.segmentAvailabilityRange.start-a.segmentAvailabilityRange.end}),void P.trigger(p.default.REPRESENTATION_UPDATED,{sender:this,representation:a,error:g});b||($=-1),a.segmentDuration&&B(a),c||R.loadInitialization(a),d||R.loadSegments(a,e,a.indexRange),c&&d&&P.trigger(p.default.REPRESENTATION_UPDATED,{sender:this,representation:a})}function F(a,b,c){var d=b.segments,e=d?d.length:null,f=-1,g=void 0,h=void 0,i=void 0,j=void 0,k=void 0;if(d&&e>0)for(c=void 0===c||null===c?V.getSegmentOverlapToleranceTime():c,k=0;k<e;k++)if(h=d[k],i=h.presentationStartTime,j=h.duration,g=void 0===c||null===c?j/2:c,a+g>=i&&a-g<i+j){f=h.availabilityIdx;break}return f}function I(a){if(null===a||void 0===a)return null;var b=new k.default,c=a.representation,d=c.adaptation.period.mpd.manifest.Period_asArray[c.adaptation.period.index].AdaptationSet_asArray[c.adaptation.index].Representation_asArray[c.index].bandwidth,e=a.media,f=ca?ca.getType():null;return e=(0,A.replaceTokenForTemplate)(e,"Number",a.replacementNumber),e=(0,A.replaceTokenForTemplate)(e,"Time",a.replacementTime),e=(0,A.replaceTokenForTemplate)(e,"Bandwidth",d),e=(0,A.replaceIDForTemplate)(e,c.id),e=(0,A.unescapeDollarsInTemplate)(e),b.mediaType=f,b.type=n.HTTPRequest.MEDIA_SEGMENT_TYPE,b.range=a.mediaRange,b.startTime=a.presentationStartTime,b.duration=a.duration,b.timescale=c.timescale,b.availabilityStartTime=a.availabilityStartTime,b.availabilityEndTime=a.availabilityEndTime,b.wallStartTime=a.wallStartTime,b.quality=c.index,b.index=a.availabilityIdx,b.mediaInfo=ca.getMediaInfo(),b.adaptationIndex=c.adaptation.index,q(b,e,c)?b:void 0}function J(a,b,c){var d=void 0,e=void 0,f=void 0,g=ca?ca.getType():null,h=ca?ca.getStreamInfo().manifestInfo.isDynamic:null,j=$,l=!!c&&c.keepIdx,m=c?c.timeThreshold:null,n=!(!c||!c.ignoreIsFinished);return a?(_!==b&&(_=b,Z("Getting the request for "+g+" time : "+b)),w(a),$=F(b,a,m),$<0&&(w(a),$=F(b,a,m)),$>0&&Z("Index for "+g+" time "+b+" is "+$),f=!n&&u(a),f?(d=new k.default,d.action=k.default.ACTION_COMPLETE,d.index=$,d.mediaType=g,d.mediaInfo=ca.getMediaInfo(),Z("Signal complete in getSegmentRequestForTime -",g)):(e=(0,A.getSegmentByIndex)($,a),d=I(e)),l&&j>=0&&($=a.segmentInfoType===i.default.SEGMENT_TIMELINE&&h?$:j),d):null}function K(a,b){var c=(a.segmentAvailabilityRange.end-a.segmentAvailabilityRange.start)/2;return a.segments=null,a.segmentAvailabilityRange={start:b-c,end:b+c},J(a,b,{keepIdx:!1,ignoreIsFinished:!0})}function L(a){var b=void 0,c=void 0,d=void 0,e=ca?ca.getType():null,f=ca?ca.getStreamInfo().manifestInfo.isDynamic:null;return a&&-1!==$?(_=null,$++,Z("Getting the next request at index: "+$+", type: "+e),!(0,A.getSegmentByIndex)($,a)&&f?(Z("No segment found at index: "+$+". Wait for next loop"),w(a),$--,null):(d=u(a),d?(b=new k.default,b.action=k.default.ACTION_COMPLETE,b.index=$,b.mediaType=e,b.mediaInfo=ca.getMediaInfo(),Z("Signal complete -",e)):(w(a),c=(0,A.getSegmentByIndex)($,a),b=I(c),!c&&f&&$--),b)):null}function M(a){var b=a.representation;b.segments&&P.trigger(p.default.REPRESENTATION_UPDATED,{sender:this,representation:b})}function N(a){var b=ca?ca.getType():null,c=ca?ca.getStreamInfo().manifestInfo.isDynamic:null;if(!a.error&&b===a.mediaType){var d=a.segments,e=a.representation,f=[],g=0,h=void 0,i=void 0,j=void 0,k=void 0;for(h=0,i=d.length;h<i;h++)j=d[h],k=(0,A.getTimeBasedSegment)(S,c,e,j.startTime,j.duration,j.timescale,j.media,j.mediaRange,g),f.push(k),k=null,g++;e.segmentAvailabilityRange={start:f[0].presentationStartTime,end:f[i-1].presentationStartTime},e.availableSegmentsNumber=i,y(e,f),z.default.hasInitialization(e)&&P.trigger(p.default.REPRESENTATION_UPDATED,{sender:this,representation:e})}}a=a||{};var O=this.context,P=(0,r.default)(O).getInstance(),Q=(0,x.default)(O).getInstance(),R=void 0,S=a.timelineConverter,T=a.dashMetrics,U=a.metricsModel,V=a.mediaPlayerModel,W=a.errHandler,X=a.baseURLController,Y=void 0,Z=void 0,$=void 0,_=void 0,aa=void 0,ba=void 0,ca=void 0,da=void 0;return Y={initialize:d,getStreamProcessor:e,getInitRequest:t,getSegmentRequestForTime:J,getNextSegmentRequest:L,generateSegmentRequestForTime:K,updateRepresentation:D,updateSegmentList:B,setCurrentTime:f,getCurrentTime:h,getEarliestTime:j,reset:o},b(),Y}Object.defineProperty(c,"__esModule",{value:!0});var f=a(100),g=d(f),h=a(61),i=d(h),j=a(213),k=d(j),l=a(211),m=d(l),n=a(230),o=a(54),p=d(o),q=a(50),r=d(q),s=a(51),t=d(s),u=a(49),v=d(u),w=a(206),x=d(w),y=a(87),z=d(y),A=a(77),B=a(76),C=d(B),D=a(59),E=d(D),F=a(60),G=d(F),H=1;e.__dashjs_factory_name="DashHandler";var I=t.default.getClassFactory(e);I.SEGMENTS_UNAVAILABLE_ERROR_CODE=H,t.default.updateClassFactory(e.__dashjs_factory_name,I),c.default=I,b.exports=c.default},{100:100,206:206,211:211,213:213,230:230,49:49,50:50,51:51,54:54,59:59,60:60,61:61,76:76,77:77,87:87}],58:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(a,b){var c=void 0;return c=w(A.getValue().Period_asArray[b],a),null===c?null:c.bandwidth}function c(a,b){return v(A.getValue().Period_asArray[b],a)}function d(a,b){return y(A.getValue().Period_asArray[b],a)}function e(a){return n(a,j.default.TRACK_SWITCH)}function g(a){return n(a,j.default.BUFFER_LEVEL)}function h(a){var b=g(a);return b?(0,k.round10)(b.level/1e3,-3):0}function i(a){return a?a.RequestsQueue:null}function l(a){if(!a)return null;var b=a.HttpList,c=null,d=void 0,e=void 0;if(!b||b.length<=0)return null;for(d=b.length,e=d-1;e>=0;){if(b[e].responsecode){c=b[e];break}e--}return c}function m(a){return a&&a.HttpList?a.HttpList:[]}function n(a,b){if(!a)return null;var c=a[b];if(!c)return null;var d=c.length;return d<=0?null:c[d-1]}function o(a){return n(a,j.default.DROPPED_FRAMES)}function p(a){return n(a,j.default.SCHEDULING_INFO)}function q(a){return n(a,j.default.MANIFEST_UPDATE)}function r(a){return n(a,j.default.DVR_INFO)}function s(a,b){var c={},d=void 0,e=void 0,g=void 0;for(d=m(a),g=d.length-1;g>=0;g--)if(e=d[g],e.type===f.HTTPRequest.MPD_TYPE){c=u(e._responseHeaders);break}return void 0===c[b]?null:c[b]}function t(a,b){var c={},d=l(a);return d&&(c=u(d._responseHeaders)),void 0===c[b]?null:c[b]}function u(a){var b={};if(!a)return b;for(var c=a.trim().split("\r\n"),d=0,e=c.length;d<e;d++){var f=c[d],g=f.indexOf(": ");g>0&&(b[f.substring(0,g)]=f.substring(g+2))}return b}function v(a,b){var c=w(a,b,!0);return null!==c?c:-1}function w(a,b,c){var d=void 0,e=void 0,f=void 0,g=void 0,h=void 0,i=void 0;if(a)for(e=a.AdaptationSet_asArray,h=0;h<e.length;h+=1)for(d=e[h],g=d.Representation_asArray,i=0;i<g.length;i+=1)if(f=g[i],
b===f.id)return c?i:f;return null}function x(a,b){return z.getIsTypeOf(a,b)}function y(a,b){var c=void 0,d=void 0,e=void 0,f=void 0;if(!a||!b)return-1;for(d=a.AdaptationSet_asArray,f=0;f<d.length;f+=1)if(c=d[f],e=c.Representation_asArray,x(c,b))return e.length;return-1}a=a||{};var z=a.dashManifestModel,A=a.manifestModel;return{getBandwidthForRepresentation:b,getIndexForRepresentation:c,getMaxIndexForBufferType:d,getCurrentRepresentationSwitch:e,getLatestBufferLevelVO:g,getCurrentBufferLevel:h,getCurrentHttpRequest:l,getHttpRequests:m,getCurrentDroppedFrames:o,getCurrentSchedulingInfo:p,getCurrentDVRInfo:r,getCurrentManifestUpdate:q,getLatestFragmentRequestHeaderValueByID:t,getLatestMPDRequestHeaderValueByID:s,getRequestsQueue:i}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(230),g=a(51),h=d(g),i=a(101),j=d(i),k=a(43);e.__dashjs_factory_name="DashMetrics",c.default=h.default.getSingletonFactory(e),b.exports=c.default},{101:101,230:230,43:43,51:51}],59:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(){w=(0,q.default)(p).getInstance(),y=(0,g.default)(p).getInstance(),C=(0,z.default)(p).create({errHandler:t,metricsModel:A,mediaPlayerModel:B,requestModifier:y})}function b(a){a.baseURLController&&(D=a.baseURLController),a.metricsModel&&(A=a.metricsModel),a.mediaPlayerModel&&(B=a.mediaPlayerModel),a.errHandler&&(t=a.errHandler)}function c(){if(!D||!D.hasOwnProperty("resolve"))throw new Error("setConfig function has to be called previously")}function d(a,b){c();var e=null,f=null,g=D.resolve(a.path),h=b||{init:!0,url:g?g.url:void 0,range:{start:0,end:1500},searching:!1,bytesLoaded:0,bytesToLoad:1500};r("Start searching for initialization.");var i=l(h),k=function(b){h.bytesLoaded=h.range.end,f=w.parse(b),e=j(f),e?(a.range=e,s.trigger(m.default.INITIALIZATION_LOADED,{representation:a})):(h.range.end=h.bytesLoaded+h.bytesToLoad,d(a,h))},n=function(){s.trigger(m.default.INITIALIZATION_LOADED,{representation:a})};C.load({request:i,success:k,error:n}),r("Perform init search: "+h.url)}function e(a,b,d,f,g){if(c(),d&&(void 0===d.start||void 0===d.end)){var i=d?d.toString().split("-"):null;d=i?{start:parseFloat(i[0]),end:parseFloat(i[1])}:null}g=g||n;var j=null,k=null,m=!!d,o=D.resolve(a.path),p={init:!1,url:o?o.url:void 0,range:m?d:{start:0,end:1500},searching:!m,bytesLoaded:f?f.bytesLoaded:0,bytesToLoad:1500},q=l(p),s=function(c){var d=p.bytesToLoad,f=c.byteLength;if(p.bytesLoaded=p.range.end-p.range.start,j=w.parse(c),(k=j.getBox("sidx"))&&k.isComplete){var i=k.references,l=void 0,m=void 0;null!==i&&void 0!==i&&i.length>0&&(l=1===i[0].reference_type),l?function(){r("Initiate multiple SIDX load."),p.range.end=p.range.start+k.size;var c=void 0,d=void 0,f=void 0,h=void 0,j=void 0,l=[],m=0,n=(k.offset||p.range.start)+k.size,o=function(c){c?(l=l.concat(c),++m>=d&&g(l,a,b)):g(null,a,b)};for(c=0,d=i.length;c<d;c++)f=n,h=n+i[c].referenced_size-1,n+=i[c].referenced_size,j={start:f,end:h},e(a,null,j,p,o)}():(r("Parsing segments from SIDX."),m=h(k,p),g(m,a,b))}else{if(k)p.range.start=k.offset||p.range.start,p.range.end=p.range.start+(k.size||d);else{if(f<p.bytesLoaded)return void g(null,a,b);var n=j.getLastBox();n&&n.size?(p.range.start=n.offset+n.size,p.range.end=p.range.start+d):p.range.end+=d}e(a,b,p.range,p,g)}},t=function(){g(null,a,b)};C.load({request:q,success:s,error:t}),r("Perform SIDX load: "+p.url)}function f(){C.abort(),C=null,t=null,w=null,y=null}function h(a,b){for(var c=a.references,d=c.length,e=a.timescale,f=a.earliest_presentation_time,g=b.range.start+a.offset+a.first_offset+a.size,h=[],j=void 0,k=void 0,l=void 0,m=void 0,n=0;n<d;n++)l=c[n].subsegment_duration,m=c[n].referenced_size,j=new i.default,j.duration=l,j.startTime=f,j.timescale=e,k=g+m-1,j.mediaRange=g+"-"+k,h.push(j),f+=l,g+=m;return h}function j(a){var b=a.getBox("ftyp"),c=a.getBox("moov"),d=null,e=void 0,f=void 0;return r("Searching for initialization."),c&&c.isComplete&&(e=b?b.offset:c.offset,f=c.offset+c.size-1,d=e+"-"+f,r("Found the initialization.  Range: "+d)),d}function l(a){if(a.url){var b=new x.default;return b.type=a.init?v.HTTPRequest.INIT_SEGMENT_TYPE:v.HTTPRequest.MEDIA_SEGMENT_TYPE,b.url=a.url,b.range=a.range.start+"-"+a.range.end,b}}function n(a,b,c){a?s.trigger(m.default.SEGMENTS_LOADED,{segments:a,representation:b,mediaType:c}):s.trigger(m.default.SEGMENTS_LOADED,{segments:null,representation:b,mediaType:c,error:new k.default(null,"error loading segments",null)})}var p=this.context,r=(0,u.default)(p).getInstance().log,s=(0,o.default)(p).getInstance(),t=void 0,w=void 0,y=void 0,A=void 0,B=void 0,C=void 0,D=void 0;return{setConfig:b,initialize:a,loadInitialization:d,loadSegments:e,reset:f}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(204),g=d(f),h=a(88),i=d(h),j=a(211),k=d(j),l=a(54),m=d(l),n=a(50),o=d(n),p=a(194),q=d(p),r=a(51),s=d(r),t=a(49),u=d(t),v=a(230),w=a(213),x=d(w),y=a(98),z=d(y);e.__dashjs_factory_name="SegmentBaseLoader",c.default=s.default.getSingletonFactory(e),b.exports=c.default},{194:194,204:204,211:211,213:213,230:230,49:49,50:50,51:51,54:54,88:88,98:98}],60:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(){z={EBML:{tag:440786851,required:!0},Segment:{tag:408125543,required:!0,SeekHead:{tag:290298740,required:!0},Info:{tag:357149030,required:!0,TimecodeScale:{tag:2807729,required:!0,parse:"getMatroskaUint"},Duration:{tag:17545,required:!0,parse:"getMatroskaFloat"}},Tracks:{tag:374648427,required:!0},Cues:{tag:475249515,required:!0,CuePoint:{tag:187,required:!0,CueTime:{tag:179,required:!0,parse:"getMatroskaUint"},CueTrackPositions:{tag:183,required:!0,CueTrack:{tag:247,required:!0,parse:"getMatroskaUint"},CueClusterPosition:{tag:241,required:!0,parse:"getMatroskaUint"}}}}},Void:{tag:236,required:!0}}}function b(){B=(0,q.default)(r).getInstance(),E=(0,x.default)(r).create({errHandler:A,metricsModel:C,mediaPlayerModel:D,requestModifier:B})}function c(a){if(!(a.baseURLController&&a.metricsModel&&a.mediaPlayerModel&&a.errHandler))throw new Error("Missing config parameter(s)");F=a.baseURLController,C=a.metricsModel,D=a.mediaPlayerModel,A=a.errHandler}function d(a){var b=[],c=void 0,d=void 0,e=(0,k.default)(r).create({data:a});for(e.consumeTagAndSize(z.Segment.Cues);e.moreData()&&e.consumeTagAndSize(z.Segment.Cues.CuePoint,!0);){for(c={},c.CueTime=e.parseTag(z.Segment.Cues.CuePoint.CueTime),c.CueTracks=[];e.moreData()&&e.consumeTag(z.Segment.Cues.CuePoint.CueTrackPositions,!0);){var f=e.getMatroskaCodedNum(),g=e.getPos();if(d={},d.Track=e.parseTag(z.Segment.Cues.CuePoint.CueTrackPositions.CueTrack),0===d.Track)throw new Error("Cue track cannot be 0");d.ClusterPosition=e.parseTag(z.Segment.Cues.CuePoint.CueTrackPositions.CueClusterPosition),c.CueTracks.push(d),e.setPos(g+f)}if(0===c.CueTracks.length)throw new Error("Mandatory cuetrack not found");b.push(c)}if(0===b.length)throw new Error("mandatory cuepoint not found");return b}function e(a,b,c,e){var f=void 0,g=void 0,h=void 0,i=void 0,j=void 0,k=void 0,l=void 0,m=void 0;for(g=d(a),h=[],j=0,k=g.length;j<k;j+=1)i=new s.default,f=0,f=j<g.length-1?g[j+1].CueTime-g[j].CueTime:e-g[j].CueTime,i.duration=f,i.startTime=g[j].CueTime,i.timescale=1e3,l=g[j].CueTracks[0].ClusterPosition+b,m=j<g.length-1?g[j+1].CueTracks[0].ClusterPosition+b-1:c-1,i.mediaRange=l+"-"+m,h.push(i);return u("Parsed cues: "+h.length+" cues."),h}function f(a,b,c,d){var f=(0,k.default)(r).create({data:a}),g=void 0,h=void 0,i=c.split("-"),j=null,l={url:b,range:{start:parseFloat(i[0]),end:parseFloat(i[1])},request:j},m=void 0,o=void 0;for(u("Parse EBML header: "+l.url),f.skipOverElement(z.EBML),f.consumeTag(z.Segment),m=f.getMatroskaCodedNum(),m+=f.getPos(),o=f.getPos();f.moreData()&&!f.consumeTagAndSize(z.Segment.Info,!0);)if(!(f.skipOverElement(z.Segment.SeekHead,!0)||f.skipOverElement(z.Segment.Tracks,!0)||f.skipOverElement(z.Segment.Cues,!0)||f.skipOverElement(z.Void,!0)))throw new Error("no valid top level element found");for(;void 0===g;){var p=f.getMatroskaCodedNum(!0),q=f.getMatroskaCodedNum();switch(p){case z.Segment.Info.Duration.tag:g=f[z.Segment.Info.Duration.parse](q);break;default:f.setPos(f.getPos()+q)}}j=n(l);var s=function(a){h=e(a,o,m,g),d(h)},t=function(){u("Download Error: Cues "+l.url),d(null)};E.load({request:j,success:s,error:t}),u("Perform cues load: "+l.url+" bytes="+l.range.start+"-"+l.range.end)}function h(){if(!F||!F.hasOwnProperty("resolve"))throw new Error("setConfig function has to be called previously")}function j(a,b){h();var c=null,d=F.resolve(a.path),e=d?d.url:void 0,f=a.range.split("-"),i=b||{range:{start:parseFloat(f[0]),end:parseFloat(f[1])},request:c,url:e,init:!0};u("Start loading initialization."),c=n(i);var j=function(){w.trigger(g.default.INITIALIZATION_LOADED,{representation:a})},k=function(){w.trigger(g.default.INITIALIZATION_LOADED,{representation:a})};E.load({request:c,success:j,error:k}),u("Perform init load: "+i.url)}function l(a,b,c,d){h();var e=null,g=F.resolve(a.path),i=g?g.url:void 0,j=8192,k={bytesLoaded:0,bytesToLoad:j,range:{start:0,end:j},request:e,url:i,init:!1};d=d||m,e=n(k),u("Parsing ebml header");var l=function(e){f(e,i,c,function(c){d(c,a,b)})},o=function(){d(null,a,b)};E.load({request:e,success:l,error:o})}function m(a,b,c){a?w.trigger(g.default.SEGMENTS_LOADED,{segments:a,representation:b,mediaType:c}):w.trigger(g.default.SEGMENTS_LOADED,{segments:null,representation:b,mediaType:c,error:new Error(null,"error loading segments",null)})}function n(a){var b=new v.default;return b.type=a.init?t.HTTPRequest.INIT_SEGMENT_TYPE:t.HTTPRequest.MEDIA_SEGMENT_TYPE,b.url=a.url,b.range=a.range.start+"-"+a.range.end,b}function p(){A=null,B=null,u=null}var r=this.context,u=(0,o.default)(r).getInstance().log,w=(0,i.default)(r).getInstance(),y=void 0,z=void 0,A=void 0,B=void 0,C=void 0,D=void 0,E=void 0,F=void 0;return y={setConfig:c,initialize:b,loadInitialization:j,loadSegments:l,reset:p},a(),y}Object.defineProperty(c,"__esModule",{value:!0});var f=a(54),g=d(f),h=a(50),i=d(h),j=a(198),k=d(j),l=a(51),m=d(l),n=a(49),o=d(n),p=a(204),q=d(p),r=a(88),s=d(r),t=a(230),u=a(213),v=d(u),w=a(98),x=d(w);e.__dashjs_factory_name="WebmSegmentBaseLoader",c.default=m.default.getSingletonFactory(e),b.exports=c.default},{198:198,204:204,213:213,230:230,49:49,50:50,51:51,54:54,88:88,98:98}],61:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=function(){function a(){d(this,a),this.init()}return e(a,[{key:"init",value:function(){this.BASE_URL="BaseURL",this.SEGMENT_BASE="SegmentBase",this.SEGMENT_TEMPLATE="SegmentTemplate",this.SEGMENT_LIST="SegmentList",this.SEGMENT_URL="SegmentURL",this.SEGMENT_TIMELINE="SegmentTimeline",this.SEGMENT_PROFILES="segmentProfiles",this.ADAPTATION_SET="AdaptationSet",this.REPRESENTATION="Representation",this.REPRESENTATION_INDEX="RepresentationIndex",this.SUB_REPRESENTATION="SubRepresentation",this.INITIALIZATION="Initialization",this.INITIALIZATION_MINUS="initialization",this.MPD="MPD",this.PERIOD="Period",this.ASSET_IDENTIFIER="AssetIdentifier",this.EVENT_STREAM="EventStream",this.ID="id",this.PROFILES="profiles",this.SERVICE_LOCATION="serviceLocation",this.RANGE="range",this.INDEX="index",this.MEDIA="media",this.BYTE_RANGE="byteRange",this.INDEX_RANGE="indexRange",this.MEDIA_RANGE="mediaRange",this.VALUE="value",this.CONTENT_TYPE="contentType",this.MIME_TYPE="mimeType",this.BITSTREAM_SWITCHING="BitstreamSwitching",this.BITSTREAM_SWITCHING_MINUS="bitstreamSwitching",this.CODECS="codecs",this.DEPENDENCY_ID="dependencyId",this.MEDIA_STREAM_STRUCTURE_ID="mediaStreamStructureId",this.METRICS="Metrics",this.METRICS_MINUS="metrics",this.REPORTING="Reporting",this.WIDTH="width",this.HEIGHT="height",this.SAR="sar",this.FRAMERATE="frameRate",this.AUDIO_SAMPLING_RATE="audioSamplingRate",this.MAXIMUM_SAP_PERIOD="maximumSAPPeriod",this.START_WITH_SAP="startWithSAP",this.MAX_PLAYOUT_RATE="maxPlayoutRate",this.CODING_DEPENDENCY="codingDependency",this.SCAN_TYPE="scanType",this.FRAME_PACKING="FramePacking",this.AUDIO_CHANNEL_CONFIGURATION="AudioChannelConfiguration",this.CONTENT_PROTECTION="ContentProtection",this.ESSENTIAL_PROPERTY="EssentialProperty",this.SUPPLEMENTAL_PROPERTY="SupplementalProperty",this.INBAND_EVENT_STREAM="InbandEventStream",this.ACCESSIBILITY="Accessibility",this.ROLE="Role",this.RATING="Rating",this.CONTENT_COMPONENT="ContentComponent",this.SUBSET="Subset",this.LANG="lang",this.VIEWPOINT="Viewpoint",this.ROLE_ASARRAY="Role_asArray",this.ACCESSIBILITY_ASARRAY="Accessibility_asArray",this.AUDIOCHANNELCONFIGURATION_ASARRAY="AudioChannelConfiguration_asArray",this.CONTENTPROTECTION_ASARRAY="ContentProtection_asArray",this.MAIN="main",this.DYNAMIC="dynamic",this.MEDIA_PRESENTATION_DURATION="mediaPresentationDuration",this.MINIMUM_UPDATE_PERIOD="minimumUpdatePeriod",this.CODEC_PRIVATE_DATA="codecPrivateData",this.BANDWITH="bandwidth",this.SOURCE_URL="sourceURL",this.TIMESCALE="timescale",this.DURATION="duration",this.START_NUMBER="startNumber",this.PRESENTATION_TIME_OFFSET="presentationTimeOffset",this.AVAILABILITY_START_TIME="availabilityStartTime",this.AVAILABILITY_END_TIME="availabilityEndTime",this.TIMESHIFT_BUFFER_DEPTH="timeShiftBufferDepth",this.MAX_SEGMENT_DURATION="maxSegmentDuration",this.PRESENTATION_TIME="presentationTime",this.MIN_BUFFER_TIME="minBufferTime",this.MAX_SUBSEGMENT_DURATION="maxSubsegmentDuration",this.START="start",this.CENC_DEFAULT_KID="cenc:default_KID",this.DVB_PRIORITY="dvb:priority",this.DVB_WEIGHT="dvb:weight"}}]),a}(),g=new f;c.default=g,b.exports=c.default},{}],62:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(){l(),H.on(o.default.QUALITY_CHANGE_REQUESTED,D,I),H.on(o.default.REPRESENTATION_UPDATED,A,I),H.on(o.default.WALLCLOCK_TIME_UPDATED,B,I),H.on(o.default.BUFFER_LEVEL_UPDATED,C,I),H.on(o.default.MANIFEST_VALIDITY_CHANGED,E,I)}function b(a){a.abrController&&(O=a.abrController),a.domStorage&&(S=a.domStorage),a.metricsModel&&(R=a.metricsModel),a.dashMetrics&&(V=a.dashMetrics),a.dashManifestModel&&(U=a.dashManifestModel),a.playbackController&&(Q=a.playbackController),a.timelineConverter&&(T=a.timelineConverter),a.manifestModel&&(X=a.manifestModel),a.streamProcessor&&(W=a.streamProcessor)}function c(){P=W.getIndexHandler()}function d(){return W}function e(){return J}function f(){return K}function h(){return L}function j(){return N}function l(){J=null,K=-1,L=!0,M=[],O=null,Q=null,R=null,S=null,T=null,U=null,V=null}function n(){H.off(o.default.QUALITY_CHANGE_REQUESTED,D,I),H.off(o.default.REPRESENTATION_UPDATED,A,I),H.off(o.default.WALLCLOCK_TIME_UPDATED,B,I),H.off(o.default.BUFFER_LEVEL_UPDATED,C,I),H.off(o.default.MANIFEST_VALIDITY_CHANGED,E,I),l()}function p(a,b,c){var d=W.getStreamInfo(),e=O.getTopQualityIndexFor(c,d.id),f=O.getMinAllowedIndexFor(c),h=void 0,i=void 0,j=null;if(L=!0,H.trigger(o.default.DATA_UPDATE_STARTED,{sender:this}),M=w(b),null!==J&&J.id==a.id||c===g.default.FRAGMENTED_TEXT?h=O.getQualityFor(c,d):(i=O.getThroughputHistory().getAverageThroughput(c),j=i||O.getInitialBitrateFor(c,d),h=O.getQualityForBitrate(W.getMediaInfo(),j)),void 0!==f&&h<f&&(h=f),h>e&&(h=e),N=t(h),J=a,c!==g.default.VIDEO&&c!==g.default.AUDIO&&c!==g.default.FRAGMENTED_TEXT)return L=!1,void H.trigger(o.default.DATA_UPDATE_COMPLETED,{sender:this,data:J,currentRepresentation:N});for(var k=0;k<M.length;k++)P.updateRepresentation(M[k],!0)}function q(){var a=new Date,b=j(),c=1e3*Q.getTime();R.addRepresentationSwitch(b.adaptation.type,a,c,b.id)}function r(){var a=W.getStreamInfo(),b=a?a.manifestInfo:null,c=b?b.isDynamic:null,d=T.calcSegmentAvailabilityRange(N,c);R.addDVRInfo(W.getType(),Q.getTime(),b,d)}function t(a){return M[a]}function u(a){return M.indexOf(a)}function v(){for(var a=0,b=M.length;a<b;a++){var c=M[a].segmentInfoType;if(null===M[a].segmentAvailabilityRange||!s.default.hasInitialization(M[a])||(c===i.default.SEGMENT_BASE||c===i.default.BASE_URL)&&!M[a].segments)return!1}return!0}function w(a){return K=U.getIndexForAdaptation(J,a.period.mpd.manifest,a.period.index),U.getRepresentationsForAdaptation(a)}function x(a){for(var b=void 0,c=0,d=M.length;c<d;c++)b=M[c],b.segmentAvailabilityRange=T.calcSegmentAvailabilityRange(b,a)}function y(){M.forEach(function(a){a.segmentAvailabilityRange=null})}function z(a){var b=a,c=function(){if(!h()){L=!0,H.trigger(o.default.DATA_UPDATE_STARTED,{sender:I}),y();for(var a=0;a<M.length;a++)P.updateRepresentation(M[a],!0)}};L=!1,H.trigger(o.default.AST_IN_FUTURE,{delay:b}),setTimeout(c,b)}function A(a){if(a.sender.getStreamProcessor()===W&&h()){var b=a.representation,c=R.getMetricsFor(g.default.STREAM),d=R.getMetricsFor(j().adaptation.type),e=V.getCurrentManifestUpdate(c),f=!1,l=0,m=void 0,n=void 0,p=void 0;if(b.adaptation.period.mpd.manifest.type===i.default.DYNAMIC&&!b.adaptation.period.mpd.manifest.ignorePostponeTimePeriod){var s=b.segmentAvailabilityRange.end-b.segmentAvailabilityRange.start;l=1e3*(Q.computeLiveDelay(N.segmentDuration,W.getStreamInfo().manifestInfo.DVRWindowSize)-s)}if(l>0)return r(),z(l),n=new k.default(F,"Segments update failed",null),void H.trigger(o.default.DATA_UPDATE_COMPLETED,{sender:this,data:J,currentRepresentation:N,error:n});if(e){for(var t=0;t<e.representationInfo.length;t++)if(m=e.representationInfo[t],m.index===b.index&&m.mediaType===W.getType()){f=!0;break}f||R.addManifestUpdateRepresentationInfo(e,b.id,b.index,b.adaptation.period.index,W.getType(),b.presentationTimeOffset,b.startNumber,b.segmentInfoType)}v()&&(L=!1,O.setPlaybackQuality(W.getType(),W.getStreamInfo(),u(N)),R.updateManifestUpdateInfo(e,{latency:N.segmentAvailabilityRange.end-Q.getTime()}),p=V.getCurrentRepresentationSwitch(d),p||q(),H.trigger(o.default.DATA_UPDATE_COMPLETED,{sender:this,data:J,currentRepresentation:N}))}}function B(a){a.isDynamic&&x(a.isDynamic)}function C(a){if(a.sender.getStreamProcessor()===W){X.getValue().doNotUpdateDVRWindowOnBufferUpdated||r()}}function D(a){if(a.mediaType===W.getType()&&W.getStreamInfo().id===a.streamInfo.id&&a.oldQuality!==a.newQuality){N=t(a.newQuality);var b=O.getThroughputHistory().getAverageThroughput(a.mediaType);isNaN(b)||S.setSavedBitrateSettings(a.mediaType,b),q()}}function E(a){if(a.newDuration){var b=j();if(b&&b.adaptation.period){b.adaptation.period.duration=a.newDuration}}}var F=1,G=this.context,H=(0,m.default)(G).getInstance(),I=void 0,J=void 0,K=void 0,L=void 0,M=void 0,N=void 0,O=void 0,P=void 0,Q=void 0,R=void 0,S=void 0,T=void 0,U=void 0,V=void 0,W=void 0,X=void 0;return I={initialize:c,setConfig:b,getData:e,getDataIndex:f,isUpdating:h,updateData:p,getStreamProcessor:d,getCurrentRepresentation:j,getRepresentationForQuality:t,reset:n},a(),I}Object.defineProperty(c,"__esModule",{value:!0});var f=a(100),g=d(f),h=a(61),i=d(h),j=a(211),k=d(j),l=a(50),m=d(l),n=a(54),o=d(n),p=a(51),q=d(p),r=a(87),s=d(r);e.__dashjs_factory_name="RepresentationController",c.default=q.default.getClassFactory(e),b.exports=c.default},{100:100,211:211,50:50,51:51,54:54,61:61,87:87}],63:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(a,b){var c=void 0,d=void 0,e=void 0,f=void 0,h=void 0,j=void 0,k=!1,l=!1;if(!a)throw new Error("adaptation is not defined");if(!b)throw new Error("type is not defined");if(a.hasOwnProperty("ContentComponent_asArray")&&(f=a.ContentComponent_asArray),h=b!==g.default.TEXT?new RegExp(b):new RegExp("(vtt|ttml)"),a.Representation_asArray&&a.Representation_asArray.length&&a.Representation_asArray.length>0&&a.Representation_asArray[0].hasOwnProperty(i.default.CODECS)&&(j=a.Representation_asArray[0].codecs,0===j.search(g.default.STPP)||0===j.search(g.default.WVTT)))return b===g.default.FRAGMENTED_TEXT;if(f){if(f.length>1)return b===g.default.MUXED;f[0]&&f[0].contentType===b&&(k=!0,l=!0)}if(a.hasOwnProperty(i.default.MIME_TYPE)&&(k=h.test(a.mimeType),l=!0),!l)for(c=0,d=a.Representation_asArray&&a.Representation_asArray.length?a.Representation_asArray.length:0;!l&&c<d;)e=a.Representation_asArray[c],e.hasOwnProperty(i.default.MIME_TYPE)&&(k=h.test(e.mimeType),l=!0),c++;return k}function c(a){return b(a,g.default.AUDIO)}function d(a){return b(a,g.default.VIDEO)}function e(a){return b(a,g.default.FRAGMENTED_TEXT)}function f(a){return b(a,g.default.TEXT)}function h(a){return b(a,g.default.MUXED)}function j(a){return b(a,g.default.IMAGE)}function l(a){return"text/vtt"===a||"application/ttml+xml"===a}function n(a){var b="";return a&&a.hasOwnProperty(i.default.LANG)&&(b=a.lang.replace(/[^A-Za-z0-9-]/g,"")),b}function p(a){return a&&a.hasOwnProperty(i.default.VIEWPOINT)?a.Viewpoint:null}function r(a){return a&&a.hasOwnProperty(i.default.ROLE_ASARRAY)?a.Role_asArray:[]}function t(a){return a&&a.hasOwnProperty(i.default.ACCESSIBILITY_ASARRAY)?a.Accessibility_asArray:[]}function v(a){return a&&a.hasOwnProperty(i.default.AUDIOCHANNELCONFIGURATION_ASARRAY)?a.AudioChannelConfiguration_asArray:[]}function x(a){return r(a).filter(function(a){return a.value===i.default.MAIN})[0]}function z(){return function(a,b){return a.bandwidth-b.bandwidth}}function B(a){return a&&void 0!==a.Representation_asArray&&null!==a.Representation_asArray&&a.Representation_asArray.sort(z()),a}function D(a,b,c){var d=b&&b.Period_asArray&&na(c)&&b.Period_asArray[c]?b.Period_asArray[c].AdaptationSet_asArray:[],e=void 0,f=void 0;for(e=0,f=d.length;e<f;e++)if(d[e].hasOwnProperty(i.default.ID)&&d[e].id===a)return d[e];return null}function E(a,b,c){var d=b&&b.Period_asArray&&na(c)&&b.Period_asArray[c]?b.Period_asArray[c].AdaptationSet_asArray:null;return d&&na(a)?d[a]:null}function F(a,b,c){var d=b&&b.Period_asArray&&na(c)&&b.Period_asArray[c]?b.Period_asArray[c].AdaptationSet_asArray:[],e=d.length;if(a)for(var f=0;f<e;f++){var g=(0,A.default)(ha).getInstance();if(g.areEqual(d[f],a))return f}return-1}function G(a,c,d){var e=a&&a.Period_asArray&&na(c)&&a.Period_asArray[c]?a.Period_asArray[c].AdaptationSet_asArray:[],f=void 0,g=void 0,h=[];for(f=0,g=e.length;f<g;f++)b(e[f],d)&&h.push(B(e[f]));return h}function H(a,b,c,d){var e=G(a,b,c);if(!e||0===e.length)return null;if(e.length>1&&d){for(var f=ja.getCurrentTrackFor(c,d),g=la.getAllMediaInfoForType(d,c),h=0,i=e.length;h<i;h++)if(f&&ja.isTracksEqual(f,g[h]))return e[h];for(var h=0,i=e.length;h<i;h++)if(x(e[h]))return e[h]}return e[0]}function I(a,b,c){if(a&&a.Representation_asArray&&a.Representation_asArray.length>0){var d=na(b)&&b>=0&&b<a.Representation_asArray.length?a.Representation_asArray[b]:a.Representation_asArray[0],e=d.mimeType+';codecs="'+d.codecs+'"';return c&&void 0!==d.width&&(e+=';width="'+d.width+'";height="'+d.height+'"'),e}return null}function J(a){return a&&a.Representation_asArray&&a.Representation_asArray.length>0?a.Representation_asArray[0].mimeType:null}function K(a){return a&&a.hasOwnProperty(i.default.CENC_DEFAULT_KID)?a[i.default.CENC_DEFAULT_KID]:null}function L(a){return a&&a.hasOwnProperty(i.default.CONTENTPROTECTION_ASARRAY)&&0!==a.ContentProtection_asArray.length?a.ContentProtection_asArray:null}function M(a){var b=!1;return a&&a.hasOwnProperty("type")&&(b=a.type===i.default.DYNAMIC),b}function N(a,b){var c=!1;return a&&a.profiles&&a.profiles.length>0&&(c=-1!==a.profiles.indexOf(b)),c}function O(a){return N(a,ma)}function P(a){return a&&a.hasOwnProperty(i.default.MEDIA_PRESENTATION_DURATION)?a.mediaPresentationDuration:Number.MAX_SAFE_INTEGER||Number.MAX_VALUE}function Q(a){return a&&a.bandwidth?a.bandwidth:NaN}function R(a){var b=arguments.length<=1||void 0===arguments[1]?0:arguments[1],c=NaN;return a&&a.hasOwnProperty(i.default.MINIMUM_UPDATE_PERIOD)&&(c=a.minimumUpdatePeriod),isNaN(c)?c:Math.max(c-b,1)}function S(a){return a&&a.Representation_asArray&&a.Representation_asArray.length?a.Representation_asArray.length:0}function T(a){return a&&a.Representation_asArray&&a.Representation_asArray.length?B(a).Representation_asArray.map(function(a){return{bandwidth:a.bandwidth,width:a.width||0,height:a.height||0,scanType:a.scanType||null}}):null}function U(a){return a&&a.EssentialProperty_asArray&&a.EssentialProperty_asArray.length?a.EssentialProperty_asArray.map(function(a){return{schemeIdUri:a.schemeIdUri,value:a.value}}):null}function V(a,b){return b&&b.Representation_asArray&&b.Representation_asArray.length>0&&na(a)?b.Representation_asArray[a]:null}function W(a){var b=[],c=void 0,d=void 0,e=void 0,f=void 0,g=void 0,h=void 0,j=void 0;if(a&&a.period&&na(a.period.index)){var m=a.period.mpd.manifest.Period_asArray[a.period.index];m&&m.AdaptationSet_asArray&&na(a.index)&&(f=B(m.AdaptationSet_asArray[a.index]))}if(f&&f.Representation_asArray)for(h=0;f&&h<f.Representation_asArray.length;h++)g=f.Representation_asArray[h],c=new k.default,c.index=h,c.adaptation=a,g.hasOwnProperty(i.default.ID)&&(c.id=g.id),g.hasOwnProperty(i.default.CODECS)&&(c.codecs=g.codecs),g.hasOwnProperty(i.default.CODEC_PRIVATE_DATA)&&(c.codecPrivateData=g.codecPrivateData),g.hasOwnProperty(i.default.BANDWITH)&&(c.bandwidth=g.bandwidth),g.hasOwnProperty(i.default.WIDTH)&&(c.width=g.width),g.hasOwnProperty(i.default.HEIGHT)&&(c.height=g.height),g.hasOwnProperty(i.default.SCAN_TYPE)&&(c.scanType=g.scanType),g.hasOwnProperty(i.default.MAX_PLAYOUT_RATE)&&(c.maxPlayoutRate=g.maxPlayoutRate),g.hasOwnProperty(i.default.SEGMENT_BASE)?(e=g.SegmentBase,c.segmentInfoType=i.default.SEGMENT_BASE):g.hasOwnProperty(i.default.SEGMENT_LIST)?(e=g.SegmentList,e.hasOwnProperty(i.default.SEGMENT_TIMELINE)?(c.segmentInfoType=i.default.SEGMENT_TIMELINE,j=e.SegmentTimeline.S_asArray[e.SegmentTimeline.S_asArray.length-1],(!j.hasOwnProperty("r")||j.r>=0)&&(c.useCalculatedLiveEdgeTime=!0)):(c.segmentInfoType=i.default.SEGMENT_LIST,c.useCalculatedLiveEdgeTime=!0)):g.hasOwnProperty(i.default.SEGMENT_TEMPLATE)?(e=g.SegmentTemplate,e.hasOwnProperty(i.default.SEGMENT_TIMELINE)?(c.segmentInfoType=i.default.SEGMENT_TIMELINE,j=e.SegmentTimeline.S_asArray[e.SegmentTimeline.S_asArray.length-1],(!j.hasOwnProperty("r")||j.r>=0)&&(c.useCalculatedLiveEdgeTime=!0)):c.segmentInfoType=i.default.SEGMENT_TEMPLATE,e.hasOwnProperty(i.default.INITIALIZATION_MINUS)&&(c.initialization=e.initialization.split("$Bandwidth$").join(g.bandwidth).split("$RepresentationID$").join(g.id))):c.segmentInfoType=i.default.BASE_URL,c.essentialProperties=U(g),e&&(e.hasOwnProperty(i.default.INITIALIZATION)?(d=e.Initialization,d.hasOwnProperty(i.default.SOURCE_URL)?c.initialization=d.sourceURL:d.hasOwnProperty(i.default.RANGE)&&(c.range=d.range)):g.hasOwnProperty(i.default.MIME_TYPE)&&l(g.mimeType)&&(c.range=0),e.hasOwnProperty(i.default.TIMESCALE)&&(c.timescale=e.timescale),e.hasOwnProperty(i.default.DURATION)&&(c.segmentDuration=e.duration/c.timescale),e.hasOwnProperty(i.default.MEDIA)&&(c.media=e.media),e.hasOwnProperty(i.default.START_NUMBER)&&(c.startNumber=e.startNumber),e.hasOwnProperty(i.default.INDEX_RANGE)&&(c.indexRange=e.indexRange),e.hasOwnProperty(i.default.PRESENTATION_TIME_OFFSET)&&(c.presentationTimeOffset=e.presentationTimeOffset/c.timescale)),c.MSETimeOffset=ka.calcMSETimeOffset(c),c.path=[a.period.index,a.index,h],b.push(c);return b}function X(a){var b=a&&na(a.index)?a.mpd.manifest.Period_asArray[a.index]:null,f=[],k=void 0,l=void 0,n=void 0;if(b&&b.AdaptationSet_asArray)for(n=0;n<b.AdaptationSet_asArray.length;n++)l=b.AdaptationSet_asArray[n],k=new m.default,l.hasOwnProperty(i.default.ID)&&(k.id=l.id),k.index=n,k.period=a,h(l)?k.type=g.default.MUXED:c(l)?k.type=g.default.AUDIO:d(l)?k.type=g.default.VIDEO:e(l)?k.type=g.default.FRAGMENTED_TEXT:j(l)?k.type=g.default.IMAGE:k.type=g.default.TEXT,f.push(k);return f}function Y(a){var b=!!a&&M(a.manifest),c=[],d=null,e=null,f=null,g=null,h=void 0,j=void 0;for(j=0,h=a&&a.manifest&&a.manifest.Period_asArray?a.manifest.Period_asArray.length:0;j<h;j++)e=a.manifest.Period_asArray[j],e.hasOwnProperty(i.default.START)?(g=new o.default,g.start=e.start):null!==d&&e.hasOwnProperty(i.default.DURATION)&&null!==f?(g=new o.default,g.start=parseFloat((f.start+f.duration).toFixed(5)),g.duration=e.duration):0!==j||b||(g=new o.default,g.start=0),null!==f&&isNaN(f.duration)&&(f.duration=parseFloat((g.start-f.start).toFixed(5))),null!==g&&(g.id=Z(e,j)),null!==g&&e.hasOwnProperty(i.default.DURATION)&&(g.duration=e.duration),null!==g&&(g.index=j,g.mpd=a,c.push(g),d=e,f=g),e=null,g=null;return 0===c.length?c:(null!==f&&isNaN(f.duration)&&(f.duration=parseFloat((_(f)-f.start).toFixed(5))),c)}function Z(a,b){if(!a)throw new Error("Period cannot be null or undefined");var c=o.default.DEFAULT_ID+"_"+b;return a.hasOwnProperty(i.default.ID)&&a.id.length>0&&"__proto__"!==a.id&&(c=a.id),c}function $(a){var b=new q.default;return a&&(b.manifest=a,a.hasOwnProperty(i.default.AVAILABILITY_START_TIME)?b.availabilityStartTime=new Date(a.availabilityStartTime.getTime()):b.availabilityStartTime=new Date(a.loadedTime.getTime()),a.hasOwnProperty(i.default.AVAILABILITY_END_TIME)&&(b.availabilityEndTime=new Date(a.availabilityEndTime.getTime())),a.hasOwnProperty(i.default.MINIMUM_UPDATE_PERIOD)&&(b.minimumUpdatePeriod=a.minimumUpdatePeriod),a.hasOwnProperty(i.default.MEDIA_PRESENTATION_DURATION)&&(b.mediaPresentationDuration=a.mediaPresentationDuration),a.hasOwnProperty(g.default.SUGGESTED_PRESENTATION_DELAY)&&(b.suggestedPresentationDelay=a.suggestedPresentationDelay),a.hasOwnProperty(i.default.TIMESHIFT_BUFFER_DEPTH)&&(b.timeShiftBufferDepth=a.timeShiftBufferDepth),a.hasOwnProperty(i.default.MAX_SEGMENT_DURATION)&&(b.maxSegmentDuration=a.maxSegmentDuration)),b}function _(a){var b=M(a.mpd.manifest),c=void 0;if(a.mpd.manifest.mediaPresentationDuration)c=a.mpd.manifest.mediaPresentationDuration;else if(a.duration)c=a.duration;else{if(!b)throw new Error("Must have @mediaPresentationDuratio on MPD or an explicit @duration on the last period.");c=Number.POSITIVE_INFINITY}return c}function aa(a){var b=a&&a.mpd&&a.mpd.manifest?a.mpd.manifest:null,c=b?b.Period_asArray:null,d=c&&a&&na(a.index)?c[a.index].EventStream_asArray:null,e=[],f=void 0,h=void 0;if(d)for(f=0;f<d.length;f++){var j=new y.default;if(j.period=a,j.timescale=1,!d[f].hasOwnProperty(g.default.SCHEME_ID_URI))throw new Error("Invalid EventStream. SchemeIdUri has to be set");for(j.schemeIdUri=d[f].schemeIdUri,d[f].hasOwnProperty(i.default.TIMESCALE)&&(j.timescale=d[f].timescale),d[f].hasOwnProperty(i.default.VALUE)&&(j.value=d[f].value),h=0;h<d[f].Event_asArray.length;h++){var k=new u.default;k.presentationTime=0,k.eventStream=j,d[f].Event_asArray[h].hasOwnProperty(i.default.PRESENTATION_TIME)&&(k.presentationTime=d[f].Event_asArray[h].presentationTime),d[f].Event_asArray[h].hasOwnProperty(i.default.DURATION)&&(k.duration=d[f].Event_asArray[h].duration),d[f].Event_asArray[h].hasOwnProperty(i.default.ID)&&(k.id=d[f].Event_asArray[h].id),e.push(k)}}return e}function ba(a,b){var c=[],d=void 0;if(!a)return c;for(d=0;d<a.length;d++){var e=new y.default;if(e.timescale=1,e.representation=b,!a[d].hasOwnProperty(g.default.SCHEME_ID_URI))throw new Error("Invalid EventStream. SchemeIdUri has to be set");e.schemeIdUri=a[d].schemeIdUri,a[d].hasOwnProperty(i.default.TIMESCALE)&&(e.timescale=a[d].timescale),a[d].hasOwnProperty(i.default.VALUE)&&(e.value=a[d].value),c.push(e)}return c}function ca(a,b){var c=void 0,d=void 0,e=void 0;return a&&a.Period_asArray&&b&&b.period&&na(b.period.index)&&(d=a.Period_asArray[b.period.index])&&d.AdaptationSet_asArray&&na(b.index)&&(e=d.AdaptationSet_asArray[b.index])&&(c=e.InbandEventStream_asArray),ba(c,null)}function da(a,b){var c=void 0,d=void 0,e=void 0,f=void 0
;return a&&a.Period_asArray&&b&&b.adaptation&&b.adaptation.period&&na(b.adaptation.period.index)&&(d=a.Period_asArray[b.adaptation.period.index])&&d.AdaptationSet_asArray&&na(b.adaptation.index)&&(e=d.AdaptationSet_asArray[b.adaptation.index])&&e.Representation_asArray&&na(b.index)&&(f=e.Representation_asArray[b.index])&&(c=f.InbandEventStream_asArray),ba(c,b)}function ea(a){var b=M(a),c=!!a&&a.hasOwnProperty(i.default.AVAILABILITY_START_TIME),d=a?a.UTCTiming_asArray:null,e=[];return(b||c)&&d&&d.forEach(function(a){var b=new s.default;a.hasOwnProperty(g.default.SCHEME_ID_URI)&&(b.schemeIdUri=a.schemeIdUri,a.hasOwnProperty(i.default.VALUE)&&(b.value=a.value.toString(),e.push(b)))}),e}function fa(a){var b=[],c=a.BaseURL_asArray||[a.baseUri],d=!1;return c.some(function(c){if(c){var e=new w.default,f=c.__text||c;return ia.isRelative(f)&&(d=!0,a.baseUri&&(f=ia.resolve(f,a.baseUri))),e.url=f,c.hasOwnProperty(i.default.SERVICE_LOCATION)&&c.serviceLocation.length?e.serviceLocation=c.serviceLocation:e.serviceLocation=f,c.hasOwnProperty(i.default.DVB_PRIORITY)&&(e.dvb_priority=c[i.default.DVB_PRIORITY]),c.hasOwnProperty(i.default.DVB_WEIGHT)&&(e.dvb_weight=c[i.default.DVB_WEIGHT]),b.push(e),d}}),b}function ga(a){if(a&&a.hasOwnProperty(g.default.LOCATION))return a.Location=a.Location_asArray[0],a.Location}a=a||{};var ha=this.context,ia=(0,C.default)(ha).getInstance(),ja=a.mediaController,ka=a.timelineConverter,la=a.adapter,ma="urn:dvb:dash:profile:dvb-dash:2014",na=Number.isInteger||function(a){return"number"==typeof a&&isFinite(a)&&Math.floor(a)===a};return{getIsTypeOf:b,getIsAudio:c,getIsVideo:d,getIsText:f,getIsMuxed:h,getIsTextTrack:l,getIsFragmentedText:e,getIsImage:j,getIsMain:x,getLanguageForAdaptation:n,getViewpointForAdaptation:p,getRolesForAdaptation:r,getAccessibilityForAdaptation:t,getAudioChannelConfigurationForAdaptation:v,getAdaptationForIndex:E,getIndexForAdaptation:F,getAdaptationForId:D,getAdaptationsForType:G,getAdaptationForType:H,getCodec:I,getMimeType:J,getKID:K,getContentProtectionData:L,getIsDynamic:M,getIsDVB:O,getDuration:P,getBandwidth:Q,getManifestUpdatePeriod:R,getRepresentationCount:S,getBitrateListForAdaptation:T,getRepresentationFor:V,getRepresentationsForAdaptation:W,getAdaptationsForPeriod:X,getRegularPeriods:Y,getMpd:$,getEventsForPeriod:aa,getEventStreamForAdaptationSet:ca,getEventStreamForRepresentation:da,getUTCTimingSources:ea,getBaseURLsFromElement:fa,getRepresentationSortFunction:z,getLocation:ga}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(100),g=d(f),h=a(61),i=d(h),j=a(87),k=d(j),l=a(81),m=d(l),n=a(86),o=d(n),p=a(85),q=d(p),r=a(89),s=d(r),t=a(83),u=d(t),v=a(82),w=d(v),x=a(84),y=d(x),z=a(203),A=d(z),B=a(206),C=d(B),D=a(51),E=d(D);e.__dashjs_factory_name="DashManifestModel",c.default=E.default.getSingletonFactory(e),b.exports=c.default},{100:100,203:203,206:206,51:51,61:61,81:81,82:82,83:83,84:84,85:85,86:86,87:87,89:89}],64:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){n=[new q.default,new s.default,new u.default,new o.default],p=new m.default({escapeMode:!1,attributePrefix:"",arrayAccessForm:"property",emptyNodeForm:"object",stripWhitespaces:!1,enableToStringFunc:!1,ignoreRoot:!0,matchers:n}),r=new k.default([new w.default,new y.default])}function c(){if(!j||!j.hasOwnProperty("manifestError"))throw new Error("Missing config parameter(s)")}function d(){return n}function e(){return r}function f(a){var b=void 0;c();try{var d=window.performance.now();if(!(b=p.xml_str2json(a)))throw new Error("parser error");var e=window.performance.now();r.run(b);var f=window.performance.now();h("Parsing complete: ( xml2json: "+(e-d).toPrecision(3)+"ms, objectiron: "+(f-e).toPrecision(3)+"ms, total: "+((f-d)/1e3).toPrecision(3)+"s)")}catch(g){return j.manifestError("parsing the manifest failed","parse",a,g),null}return b}a=a||{};var g=this.context,h=(0,i.default)(g).getInstance().log,j=a.errorHandler,l=void 0,n=void 0,p=void 0,r=void 0;return l={parse:f,getMatchers:d,getIron:e},b(),l}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f),h=a(49),i=d(h),j=a(3),k=d(j),l=a(4),m=d(l),n=a(73),o=d(n),p=a(71),q=d(p),r=a(70),s=d(r),t=a(72),u=d(t),v=a(67),w=d(v),x=a(68),y=d(x);e.__dashjs_factory_name="DashParser",c.default=g.default.getClassFactory(e),b.exports=c.default},{3:3,4:4,49:49,51:51,67:67,68:68,70:70,71:71,72:72,73:73}],65:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=function(){function a(b,c){d(this,a);var e=function(a){return a&&a.length&&a.charAt(0)===a.charAt(0).toUpperCase()};this._name=b,this._merge=void 0!==c?c:e(b)}return e(a,[{key:"name",get:function(){return this._name}},{key:"merge",get:function(){return this._merge}}]),a}();c.default=f,b.exports=c.default},{}],66:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var f=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),g=a(65),h=d(g),i=function(){function a(b,c,d,f,g){var i=this;e(this,a),this._name=b||"",this._properties=[],this._children=d||[],this._isRoot=f||!1,this._isArray=g||!0,Array.isArray(c)&&c.forEach(function(a){i._properties.push(new h.default(a))})}return f(a,[{key:"name",get:function(){return this._name}},{key:"isRoot",get:function(){return this._isRoot}},{key:"isArray",get:function(){return this._isArray}},{key:"children",get:function(){return this._children}},{key:"properties",get:function(){return this._properties}}]),a}();c.default=i,b.exports=c.default},{65:65}],67:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(c,"__esModule",{value:!0});var g=function(a,b,c){for(var d=!0;d;){var e=a,f=b,g=c;d=!1,null===e&&(e=Function.prototype);var h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var i=h.get;if(void 0===i)return;return i.call(g)}var j=Object.getPrototypeOf(e);if(null===j)return;a=j,b=f,c=g,d=!0,h=j=void 0}},h=a(66),i=d(h),j=a(61),k=d(j),l=function(a){function b(){e(this,b);var a=[k.default.PROFILES,k.default.WIDTH,k.default.HEIGHT,k.default.SAR,k.default.FRAMERATE,k.default.AUDIO_SAMPLING_RATE,k.default.MIME_TYPE,k.default.SEGMENT_PROFILES,k.default.CODECS,k.default.MAXIMUM_SAP_PERIOD,k.default.START_WITH_SAP,k.default.MAX_PLAYOUT_RATE,k.default.CODING_DEPENDENCY,k.default.SCAN_TYPE,k.default.FRAME_PACKING,k.default.AUDIO_CHANNEL_CONFIGURATION,k.default.CONTENT_PROTECTION,k.default.ESSENTIAL_PROPERTY,k.default.SUPPLEMENTAL_PROPERTY,k.default.INBAND_EVENT_STREAM];g(Object.getPrototypeOf(b.prototype),"constructor",this).call(this,k.default.ADAPTATION_SET,a,[new i.default(k.default.REPRESENTATION,a,[new i.default(k.default.SUB_REPRESENTATION,a)])])}return f(b,a),b}(i.default);c.default=l,b.exports=c.default},{61:61,66:66}],68:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(c,"__esModule",{value:!0});var g=function(a,b,c){for(var d=!0;d;){var e=a,f=b,g=c;d=!1,null===e&&(e=Function.prototype);var h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var i=h.get;if(void 0===i)return;return i.call(g)}var j=Object.getPrototypeOf(e);if(null===j)return;a=j,b=f,c=g,d=!0,h=j=void 0}},h=a(66),i=d(h),j=a(61),k=d(j),l=function(a){function b(){e(this,b);var a=[k.default.SEGMENT_BASE,k.default.SEGMENT_TEMPLATE,k.default.SEGMENT_LIST];g(Object.getPrototypeOf(b.prototype),"constructor",this).call(this,k.default.PERIOD,a,[new i.default(k.default.ADAPTATION_SET,a,[new i.default(k.default.REPRESENTATION,a)])])}return f(b,a),b}(i.default);c.default=l,b.exports=c.default},{61:61,66:66}],69:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=function(){function a(b,c){d(this,a),this._test=b,this._converter=c}return e(a,[{key:"test",get:function(){return this._test}},{key:"converter",get:function(){return this._converter}}]),a}();c.default=f,b.exports=c.default},{}],70:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(c,"__esModule",{value:!0});var g=function(a,b,c){for(var d=!0;d;){var e=a,f=b,g=c;d=!1,null===e&&(e=Function.prototype);var h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var i=h.get;if(void 0===i)return;return i.call(g)}var j=Object.getPrototypeOf(e);if(null===j)return;a=j,b=f,c=g,d=!0,h=j=void 0}},h=a(69),i=d(h),j=60,k=60,l=1e3,m=/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})(?::([0-9]*)(\.[0-9]*)?)?(?:([+-])([0-9]{2})(?::?)([0-9]{2}))?/,n=function(a){function b(){e(this,b),g(Object.getPrototypeOf(b.prototype),"constructor",this).call(this,function(a){return m.test(a.value)},function(a){var b=m.exec(a),c=void 0;if(c=Date.UTC(parseInt(b[1],10),parseInt(b[2],10)-1,parseInt(b[3],10),parseInt(b[4],10),parseInt(b[5],10),b[6]&&parseInt(b[6],10)||0,b[7]&&parseFloat(b[7])*l||0),b[9]&&b[10]){var d=parseInt(b[9],10)*k+parseInt(b[10],10);c+=("+"===b[8]?-1:1)*d*j*l}return new Date(c)})}return f(b,a),b}(i.default);c.default=n,b.exports=c.default},{69:69}],71:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(c,"__esModule",{value:!0});var g=function(a,b,c){for(var d=!0;d;){var e=a,f=b,g=c;d=!1,null===e&&(e=Function.prototype);var h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var i=h.get;if(void 0===i)return;return i.call(g)}var j=Object.getPrototypeOf(e);if(null===j)return;a=j,b=f,c=g,d=!0,h=j=void 0}},h=a(69),i=d(h),j=a(100),k=d(j),l=a(61),m=d(l),n=/^([-])?P(([\d.]*)Y)?(([\d.]*)M)?(([\d.]*)D)?T?(([\d.]*)H)?(([\d.]*)M)?(([\d.]*)S)?/,o=31536e3,p=2592e3,q=86400,r=3600,s=60,t=function(a){function b(){e(this,b),g(Object.getPrototypeOf(b.prototype),"constructor",this).call(this,function(a){for(var b=[m.default.MIN_BUFFER_TIME,m.default.MEDIA_PRESENTATION_DURATION,m.default.MINIMUM_UPDATE_PERIOD,m.default.TIMESHIFT_BUFFER_DEPTH,m.default.MAX_SEGMENT_DURATION,m.default.MAX_SUBSEGMENT_DURATION,k.default.SUGGESTED_PRESENTATION_DELAY,m.default.START,k.default.START_TIME,m.default.DURATION],c=b.length,d=0;d<c;d++)if(a.nodeName===b[d])return n.test(a.value);return!1},function(a){var b=n.exec(a),c=parseFloat(b[2]||0)*o+parseFloat(b[4]||0)*p+parseFloat(b[6]||0)*q+parseFloat(b[8]||0)*r+parseFloat(b[10]||0)*s+parseFloat(b[12]||0);return void 0!==b[1]&&(c=-c),c})}return f(b,a),b}(i.default);c.default=t,b.exports=c.default},{100:100,61:61,69:69}],72:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(c,"__esModule",{value:!0});var g=function(a,b,c){for(var d=!0;d;){var e=a,f=b,g=c;d=!1,null===e&&(e=Function.prototype);var h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var i=h.get;if(void 0===i)return;return i.call(g)}var j=Object.getPrototypeOf(e);if(null===j)return;a=j,b=f,c=g,d=!0,h=j=void 0}},h=a(69),i=d(h),j=/^[-+]?[0-9]+[.]?[0-9]*([eE][-+]?[0-9]+)?$/,k=function(a){function b(){e(this,b),g(Object.getPrototypeOf(b.prototype),"constructor",this).call(this,function(a){return j.test(a.value)},function(a){return parseFloat(a)})}return f(b,a),b}(i.default);c.default=k,b.exports=c.default},{69:69}],73:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function f(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function g(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(c,"__esModule",{value:!0});var h=function(a,b,c){for(var d=!0;d;){var e=a,f=b,g=c;d=!1,null===e&&(e=Function.prototype);var h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var i=h.get;if(void 0===i)return;return i.call(g)}var j=Object.getPrototypeOf(e);if(null===j)return;a=j,b=f,c=g,d=!0,h=j=void 0}},i=a(69),j=d(i),k=a(61),l=d(k),m=function(a){function b(){f(this,b),h(Object.getPrototypeOf(b.prototype),"constructor",this).call(this,function(a,b){var c,d=(c={},e(c,l.default.MPD,[l.default.ID,l.default.PROFILES]),e(c,l.default.PERIOD,[l.default.ID]),e(c,l.default.BASE_URL,[l.default.SERVICE_LOCATION,l.default.BYTE_RANGE]),e(c,l.default.SEGMENT_BASE,[l.default.INDEX_RANGE]),e(c,l.default.INITIALIZATION,[l.default.RANGE]),e(c,l.default.REPRESENTATION_INDEX,[l.default.RANGE]),e(c,l.default.SEGMENT_LIST,[l.default.INDEX_RANGE]),e(c,l.default.BITSTREAM_SWITCHING,[l.default.RANGE]),e(c,l.default.SEGMENT_URL,[l.default.MEDIA_RANGE,l.default.INDEX_RANGE]),e(c,l.default.SEGMENT_TEMPLATE,[l.default.INDEX_RANGE,l.default.MEDIA,l.default.INDEX,l.default.INITIALIZATION_MINUS,l.default.BITSTREAM_SWITCHING_MINUS]),e(c,l.default.ASSET_IDENTIFIER,[l.default.VALUE,l.default.ID]),e(c,l.default.EVENT_STREAM,[l.default.VALUE]),e(c,l.default.ADAPTATION_SET,[l.default.PROFILES,l.default.MIME_TYPE,l.default.SEGMENT_PROFILES,l.default.CODECS,l.default.CONTENT_TYPE]),e(c,l.default.FRAME_PACKING,[l.default.VALUE,l.default.ID]),e(c,l.default.AUDIO_CHANNEL_CONFIGURATION,[l.default.VALUE,l.default.ID]),e(c,l.default.CONTENT_PROTECTION,[l.default.VALUE,l.default.ID]),e(c,l.default.ESSENTIAL_PROPERTY,[l.default.VALUE,l.default.ID]),e(c,l.default.SUPPLEMENTAL_PROPERTY,[l.default.VALUE,l.default.ID]),e(c,l.default.INBAND_EVENT_STREAM,[l.default.VALUE,l.default.ID]),e(c,l.default.ACCESSIBILITY,[l.default.VALUE,l.default.ID]),e(c,l.default.ROLE,[l.default.VALUE,l.default.ID]),e(c,l.default.RATING,[l.default.VALUE,l.default.ID]),e(c,l.default.VIEWPOINT,[l.default.VALUE,l.default.ID]),e(c,l.default.CONTENT_COMPONENT,[l.default.CONTENT_TYPE]),e(c,l.default.REPRESENTATION,[l.default.ID,l.default.DEPENDENCY_ID,l.default.MEDIA_STREAM_STRUCTURE_ID]),e(c,l.default.SUBSET,[l.default.ID]),e(c,l.default.METRICS,[l.default.METRICS_MINUS]),e(c,l.default.REPORTING,[l.default.VALUE,l.default.ID]),c);if(d.hasOwnProperty(b)){var f=d[b];return void 0!==f&&f.indexOf(a.name)>=0}return!1},function(a){return String(a)})}return g(b,a),b}(j.default);c.default=m,b.exports=c.default},{61:61,69:69}],74:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a){a&&a.boxParser&&(d=a.boxParser)}function b(a){if(!d)throw new Error("boxParser is undefined");if(!a)return{sampleList:[],lastSequenceNumber:NaN,totalDuration:NaN,numSequences:NaN};var b=d.parse(a),c=b.getBoxes("moof"),e=b.getBoxes("mfhd"),f=void 0,g=void 0,h=void 0,i=void 0,j=void 0,k=void 0,l=void 0,m=void 0,n=void 0,o=void 0,p=void 0,q=void 0,r=void 0,s=void 0,t=void 0,u=void 0,v=void 0;u=b.getBoxes("moof").length,t=e[e.length-1].sequence_number,h=0,k=[];var w=-1,x=-1;for(p=0;p<c.length;p++){var y=c[p],z=y.getChildBoxes("traf");for(n=0;n<z.length;n++){var A=z[n],B=A.getChildBox("tfhd"),C=A.getChildBox("tfdt");j=C.baseMediaDecodeTime;var D=A.getChildBoxes("trun"),E=A.getChildBoxes("subs");for(o=0;o<D.length;o++){var F=D[o];for(h=F.sample_count,s=(B.base_data_offset||0)+(F.data_offset||0),m=0;m<h;m++){l=F.samples[m],f=void 0!==l.sample_duration?l.sample_duration:B.default_sample_duration,i=void 0!==l.sample_size?l.sample_size:B.default_sample_size,g=void 0!==l.sample_composition_time_offset?l.sample_composition_time_offset:0;var G={dts:j,cts:j+g,duration:f,offset:y.offset+s,size:i,subSizes:[i]};if(E)for(q=0;q<E.length;q++){var H=E[q];if(w<H.entry_count&&m>x&&(w++,x+=H.entries[w].sample_delta),m==x){G.subSizes=[];var I=H.entries[w];for(r=0;r<I.subsample_count;r++)G.subSizes.push(I.subsamples[r].subsample_size)}}k.push(G),s+=i,j+=f}}v=j-C.baseMediaDecodeTime}}return{sampleList:k,lastSequenceNumber:t,totalDuration:v,numSequences:u}}function c(a){if(!d)throw new Error("boxParser is undefined");var b=d.parse(a),c=b?b.getBox("mdhd"):void 0;return c?c.timescale:NaN}var d=void 0;return{getSamplesInfo:b,getMediaTimescaleFromMoov:c,setConfig:a}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f);e.__dashjs_factory_name="FragmentedTextBoxParser",c.default=g.default.getSingletonFactory(e),b.exports=c.default},{51:51}],75:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){function c(a,c,e,f){var g=a.adaptation.period.mpd.manifest.Period_asArray[a.adaptation.period.index].AdaptationSet_asArray[a.adaptation.index].Representation_asArray[a.index].SegmentList,i=g.SegmentURL_asArray.length,j=[],k=void 0,l=void 0,m=void 0,n=void 0,o=void 0,p=void 0,q=void 0;for(q=a.startNumber,n=(0,h.decideSegmentListRangeForTemplate)(d,b,a,c,e,f),o=Math.max(n.start,0),p=Math.min(n.end,g.SegmentURL_asArray.length-1),k=o;k<=p;k++)m=g.SegmentURL_asArray[k],l=(0,h.getIndexBasedSegment)(d,b,a,k),l.replacementTime=(q+k-1)*a.segmentDuration,l.media=m.media?m.media:"",l.mediaRange=m.mediaRange,l.index=m.index,l.indexRange=m.indexRange,j.push(l),l=null;return a.availableSegmentsNumber=i,j}a=a||{};var d=a.timelineConverter;return{getSegments:c}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f),h=a(77);e.__dashjs_factory_name="ListSegmentsGetter";var i=g.default.getClassFactory(e);c.default=i,b.exports=c.default},{51:51,77:77}],76:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){function c(){i=(0,k.default)(f).create(a,b),j=(0,m.default)(f).create(a,b),l=(0,o.default)(f).create(a,b)}function d(a,b,c,d,f){var h=void 0,k=a.segmentInfoType;k!==g.default.SEGMENT_BASE&&k!==g.default.BASE_URL&&e(a,c)?(k===g.default.SEGMENT_TIMELINE?h=i.getSegments(a,b,c,f):k===g.default.SEGMENT_TEMPLATE?h=j.getSegments(a,b,c,f):k===g.default.SEGMENT_LIST&&(h=l.getSegments(a,b,c,f)),d&&d(a,h)):h=a.segments}function e(a,b){var c=a.segments,d=!1,e=void 0,f=void 0;return c&&0!==c.length?(f=c[0].availabilityIdx,e=c[c.length-1].availabilityIdx,d=b<f||b>e):d=!0,d}var f=this.context,h=void 0,i=void 0,j=void 0,l=void 0;return h={getSegments:d},c(),h}Object.defineProperty(c,"__esModule",{value:!0});var f=a(61),g=d(f),h=a(51),i=d(h),j=a(80),k=d(j),l=a(78),m=d(l),n=a(75),o=d(n);e.__dashjs_factory_name="SegmentsGetter";var p=i.default.getClassFactory(e);c.default=p,b.exports=c.default},{51:51,61:61,75:75,78:78,80:80}],77:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){for(;a.length<b;)a="0"+a;return a}function f(a,b){return a.representation.startNumber+b}function g(a){return a?a.split("$$").join("$"):a}function h(a,b){if(!b||!a||-1===a.indexOf("$RepresentationID$"))return a;var c=b.toString();return a.split("$RepresentationID$").join(c)}function i(a,b,c){var d="%0",f=void 0,g=void 0,h=void 0,i=void 0,j=void 0,k=void 0,l=b.length,m=d.length;if(!a)return a;for(;;){if((f=a.indexOf("$"+b))<0)return a;if((g=a.indexOf("$",f+l))<0)return a;if((h=a.indexOf(d,f+l))>f&&h<g)switch(i=a.charAt(g-1),j=parseInt(a.substring(h+m,g-1),10),i){case"d":case"i":case"u":k=e(c.toString(),j);break;case"x":k=e(c.toString(16),j);break;case"X":k=e(c.toString(16),j).toUpperCase();break;case"o":k=e(c.toString(8),j);break;default:return a}else k=c;a=a.substring(0,f)+k+a.substring(g+1)}}function j(a,b,c,d){var e=void 0,g=void 0,h=void 0,i=void 0;return g=c.segmentDuration,isNaN(g)&&(g=c.adaptation.period.duration),h=parseFloat((c.adaptation.period.start+d*g).toFixed(5)),i=parseFloat((h+g).toFixed(5)),e=new o.default,e.representation=c,e.duration=g,e.presentationStartTime=h,e.mediaStartTime=a.calcMediaTimeFromPresentationTime(e.presentationStartTime,c),e.availabilityStartTime=a.calcAvailabilityStartTimeFromPresentationTime(e.presentationStartTime,c.adaptation.period.mpd,b),e.availabilityEndTime=a.calcAvailabilityEndTimeFromPresentationTime(i,c.adaptation.period.mpd,b),e.wallStartTime=a.calcWallTimeForSegment(e,b),e.replacementNumber=f(e,d),e.availabilityIdx=d,e}function k(a,b,c,d,e,g,h,j,k,l){var m=d/g,n=Math.min(e/g,c.adaptation.period.mpd.maxSegmentDuration),p=void 0,q=void 0,r=void 0;return p=a.calcPresentationTimeFromMediaTime(m,c),q=p+n,r=new o.default,r.representation=c,r.duration=n,r.mediaStartTime=m,r.presentationStartTime=p,r.availabilityStartTime=c.adaptation.period.mpd.manifest.loadedTime,r.availabilityEndTime=a.calcAvailabilityEndTimeFromPresentationTime(q,c.adaptation.period.mpd,b),r.wallStartTime=a.calcWallTimeForSegment(r,b),r.replacementTime=l||d,r.replacementNumber=f(r,k),h=i(h,"Number",r.replacementNumber),h=i(h,"Time",r.replacementTime),r.media=h,r.mediaRange=j,r.availabilityIdx=k,r}function l(a,b){if(!b||!b.segments)return null;var c=b.segments.length,d=void 0,e=void 0;if(a<c&&(d=b.segments[a])&&d.availabilityIdx===a)return d;for(e=0;e<c;e++)if((d=b.segments[e])&&d.availabilityIdx===a)return d;return null}function m(a,b,c,d,e,f){var g=c.segmentDuration,h=c.adaptation.period.mpd.manifest.minBufferTime,i=c.segmentAvailabilityRange,j={start:a.calcPeriodRelativeTimeFromMpdRelativeTime(c,i.start),end:a.calcPeriodRelativeTimeFromMpdRelativeTime(c,i.end)},k=c.segments,m=2*g,n=f||Math.max(2*h,10*g),o=NaN,p=null,q=void 0,r=void 0;return j.start=Math.max(j.start,0),b&&!a.isTimeSyncCompleted()?(q=Math.floor(j.start/g),r=Math.floor(j.end/g),{start:q,end:r}):(k&&k.length>0?(p=l(e,c),o=p?a.calcPeriodRelativeTimeFromMpdRelativeTime(c,p.presentationStartTime):e>0?e*g:a.calcPeriodRelativeTimeFromMpdRelativeTime(c,d)):o=e>0?e*g:b?j.end:j.start,q=Math.floor(Math.max(o-m,j.start)/g),r=Math.floor(Math.min(q+n/g,j.end/g)),{start:q,end:r})}Object.defineProperty(c,"__esModule",{value:!0}),c.unescapeDollarsInTemplate=g,c.replaceIDForTemplate=h,c.replaceTokenForTemplate=i,c.getIndexBasedSegment=j,c.getTimeBasedSegment=k,c.getSegmentByIndex=l,c.decideSegmentListRangeForTemplate=m;var n=a(88),o=d(n)},{88:88}],78:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){function c(a,c,e,f){var g=a.adaptation.period.mpd.manifest.Period_asArray[a.adaptation.period.index].AdaptationSet_asArray[a.adaptation.index].Representation_asArray[a.index].SegmentTemplate,i=a.segmentDuration,j=a.segmentAvailabilityRange,k=[],l=null,m=null,n=void 0,o=void 0,p=void 0,q=void 0,r=void 0;for(r=a.startNumber,n=isNaN(i)&&!b?{start:r,end:r}:(0,h.decideSegmentListRangeForTemplate)(d,b,a,c,e,f),p=n.start,q=n.end,o=p;o<=q;o++)m=(0,h.getIndexBasedSegment)(d,b,a,o),m.replacementTime=(r+o-1)*a.segmentDuration,l=g.media,l=(0,h.replaceTokenForTemplate)(l,"Number",m.replacementNumber),l=(0,h.replaceTokenForTemplate)(l,"Time",m.replacementTime),m.media=l,k.push(m),m=null;return isNaN(i)?a.availableSegmentsNumber=1:a.availableSegmentsNumber=Math.ceil((j.end-j.start)/i),k}var d=a.timelineConverter;return{getSegments:c}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f),h=a(77);e.__dashjs_factory_name="TemplateSegmentsGetter";var i=g.default.getClassFactory(e);c.default=i,b.exports=c.default},{51:51,77:77}],79:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(){u(),x.on(i.default.TIME_SYNCHRONIZATION_COMPLETED,s,this)}function b(){return z}function c(a){z=a}function d(){return y}function e(a){y=a}function f(){return A}function h(a){A=a}function j(a,b,c,d){return d?c&&b.timeShiftBufferDepth!=Number.POSITIVE_INFINITY?new Date(b.availabilityStartTime.getTime()+1e3*(a+b.timeShiftBufferDepth)):b.availabilityEndTime:c?new Date(b.availabilityStartTime.getTime()+1e3*(a-y)):b.availabilityStartTime}function k(a,b,c){return j.call(this,a,b,c)}function l(a,b,c){return j.call(this,a,b,c,!0)}function m(a,b){return(a.getTime()-b.mpd.availabilityStartTime.getTime()+1e3*y)/1e3}function n(a,b){return a+(b.adaptation.period.start-b.presentationTimeOffset)}function o(a,b){return a-b.adaptation.period.start+b.presentationTimeOffset}function p(a,b){var c=void 0,d=void 0,e=void 0;return b&&(c=a.representation.adaptation.period.mpd.suggestedPresentationDelay,d=a.presentationStartTime+c,e=new Date(a.availabilityStartTime.getTime()+1e3*d)),e}function q(a,b){var c=a.adaptation.period,d={start:c.start,end:c.start+c.duration};if(!b)return d;if(!z&&a.segmentAvailabilityRange)return a.segmentAvailabilityRange;var e=a.segmentDuration||(a.segments&&a.segments.length?a.segments[a.segments.length-1].duration:0),f=m(new Date,c),g=c.start+c.duration;return d.start=Math.max(f-c.mpd.timeShiftBufferDepth,c.start),d.end=f>=g&&f-e<g?g-e:f-e,d}function r(a,b){return b-a.adaptation.period.start}function s(a){z||void 0!==a.offset&&(e(a.offset/1e3),z=!0)}function t(a){var b=a.presentationTimeOffset;return a.adaptation.period.start-b}function u(){y=0,z=!1,A=NaN}function v(){x.off(i.default.TIME_SYNCHRONIZATION_COMPLETED,s,this),u()}var w=this.context,x=(0,g.default)(w).getInstance(),y=void 0,z=void 0,A=void 0;return{initialize:a,isTimeSyncCompleted:b,setTimeSyncCompleted:c,getClientTimeOffset:d,setClientTimeOffset:e,getExpectedLiveEdge:f,setExpectedLiveEdge:h,calcAvailabilityStartTimeFromPresentationTime:k,calcAvailabilityEndTimeFromPresentationTime:l,calcPresentationTimeFromWallTime:m,calcPresentationTimeFromMediaTime:n,calcPeriodRelativeTimeFromMpdRelativeTime:r,calcMediaTimeFromPresentationTime:o,calcSegmentAvailabilityRange:q,calcWallTimeForSegment:p,calcMSETimeOffset:t,reset:v}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(50),g=d(f),h=a(54),i=d(h),j=a(51),k=d(j);e.__dashjs_factory_name="TimelineConverter",c.default=k.default.getSingletonFactory(e),b.exports=c.default},{50:50,51:51,54:54}],80:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){function c(){if(!(e&&e.hasOwnProperty("calcMediaTimeFromPresentationTime")&&e.hasOwnProperty("calcSegmentAvailabilityRange")&&e.hasOwnProperty("calcMediaTimeFromPresentationTime")))throw new Error("Missing config parameter(s)")}function d(a,d,f,g){if(c(),!a)throw new Error("no representation");void 0===d&&(d=null);var i=a.adaptation.period.mpd.manifest.Period_asArray[a.adaptation.period.index].AdaptationSet_asArray[a.adaptation.index].Representation_asArray[a.index].SegmentTemplate||a.adaptation.period.mpd.manifest.Period_asArray[a.adaptation.period.index].AdaptationSet_asArray[a.adaptation.index].Representation_asArray[a.index].SegmentList,j=i.SegmentTimeline,k=i.SegmentURL_asArray,l=a.availableSegmentsNumber>0,m=void 0;m=g||(f>-1||null!==d?10:1/0);var n=0,o=0,p=-1,q=[],r=null,s=void 0,t=void 0,u=void 0,v=void 0,w=void 0,x=void 0,y=void 0,z=void 0,A=void 0,B=void 0,C=void 0,D=function(c,d){var f=i.media,g=c.mediaRange;return k&&(f=k[d].media||"",g=k[d].mediaRange),(0,h.getTimeBasedSegment)(e,b,a,n,c.d,C,f,g,p,c.tManifest)};for(C=a.timescale,s=j.S_asArray,B=f,null!==d&&(r=e.calcMediaTimeFromPresentationTime(d,a)),u=0,v=s.length;u<v;u++){if(t=s[u],x=0,t.hasOwnProperty("r")&&(x=t.r),t.hasOwnProperty("t")&&(n=t.t,o=n/C),x<0){if((z=s[u+1])&&z.hasOwnProperty("t"))y=z.t/C;else{var E=a.segmentAvailabilityRange?a.segmentAvailabilityRange.end:e.calcSegmentAvailabilityRange(a,b).end;y=e.calcMediaTimeFromPresentationTime(E,a),a.segmentDuration=t.d/C}x=Math.ceil((y-o)/(t.d/C))-1}if(A){if(l)break;p+=x+1}else for(w=0;w<=x;w++)if(p++,q.length>m){if(A=!0,l)break}else null!==r?o>=r-t.d/C*1.5&&q.push(D(t,p)):p>=B&&q.push(D(t,p)),n+=t.d,o=n/C}return l||(a.availableSegmentsNumber=p+1),q}a=a||{};var e=a.timelineConverter;return{getSegments:d}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f),h=a(77);e.__dashjs_factory_name="TimelineSegmentsGetter";var i=g.default.getClassFactory(e);c.default=i,b.exports=c.default},{51:51,77:77}],81:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.period=null,this.index=-1,this.type=null};c.default=e,b.exports=c.default},{}],82:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=1,f=1,g=function a(b,c,g,h){d(this,a),this.url=b||"",this.serviceLocation=c||b||"",this.dvb_priority=g||e,this.dvb_weight=h||f};g.DEFAULT_DVB_PRIORITY=e,g.DEFAULT_DVB_WEIGHT=f,c.default=g,b.exports=c.default},{}],83:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.duration=NaN,this.presentationTime=NaN,this.id=NaN,this.messageData="",this.eventStream=null,this.presentationTimeDelta=NaN};c.default=e,b.exports=c.default},{}],84:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.adaptionSet=null,this.representation=null,this.period=null,
this.timescale=1,this.value="",this.schemeIdUri=""};c.default=e,b.exports=c.default},{}],85:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.manifest=null,this.suggestedPresentationDelay=0,this.availabilityStartTime=null,this.availabilityEndTime=Number.POSITIVE_INFINITY,this.timeShiftBufferDepth=Number.POSITIVE_INFINITY,this.maxSegmentDuration=Number.POSITIVE_INFINITY,this.minimumUpdatePeriod=NaN,this.mediaPresentationDuration=NaN};c.default=e,b.exports=c.default},{}],86:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.id=null,this.index=-1,this.duration=NaN,this.start=NaN,this.mpd=null};e.DEFAULT_ID="defaultId",c.default=e,b.exports=c.default},{}],87:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var f=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),g=a(61),h=d(g),i=function(){function a(){e(this,a),this.id=null,this.index=-1,this.adaptation=null,this.segmentInfoType=null,this.initialization=null,this.codecs=null,this.codecPrivateData=null,this.segmentDuration=NaN,this.timescale=1,this.startNumber=1,this.indexRange=null,this.range=null,this.presentationTimeOffset=0,this.MSETimeOffset=NaN,this.segmentAvailabilityRange=null,this.availableSegmentsNumber=0,this.bandwidth=NaN,this.width=NaN,this.height=NaN,this.scanType=null,this.maxPlayoutRate=NaN}return f(a,null,[{key:"hasInitialization",value:function(a){return null!==a.initialization||(a.segmentInfoType===h.default.BASE_URL||a.segmentInfoType===h.default.SEGMENT_BASE)&&null!==a.range}},{key:"hasSegments",value:function(a){return a.segmentInfoType!==h.default.BASE_URL&&a.segmentInfoType!==h.default.SEGMENT_BASE&&!a.indexRange}}]),a}();c.default=i,b.exports=c.default},{61:61}],88:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.indexRange=null,this.index=null,this.mediaRange=null,this.media=null,this.duration=NaN,this.replacementTime=null,this.replacementNumber=NaN,this.mediaStartTime=NaN,this.presentationStartTime=NaN,this.availabilityStartTime=NaN,this.availabilityEndTime=NaN,this.availabilityIdx=NaN,this.wallStartTime=NaN,this.representation=null};c.default=e,b.exports=c.default},{}],89:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.schemeIdUri="",this.value=""};c.default=e,b.exports=c.default},{}],90:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){n=(0,g.default)(h).create({errHandler:a.errHandler,metricsModel:a.metricsModel,mediaPlayerModel:a.mediaPlayerModel,requestModifier:a.requestModifier})}function c(a){var b=function(b){j.trigger(o.default.CHECK_FOR_EXISTENCE_COMPLETED,{request:a,exists:b})};if(a){var c=new i.default(a.url);n.load({request:c,success:function(){b(!0)},error:function(){b(!1)}})}else b(!1)}function d(a){var b=function(b,c){j.trigger(o.default.LOADING_COMPLETED,{request:a,response:b||null,error:c||null,sender:l})};a?n.load({request:a,progress:function(){j.trigger(o.default.LOADING_PROGRESS,{request:a})},success:function(a){b(a)},error:function(a,c,d){b(void 0,new k.default(r,d,c))},abort:function(a,b){a&&0===b&&j.trigger(o.default.LOADING_ABANDONED,{request:a,mediaType:a.mediaType,sender:l})}}):b(void 0,new k.default(s,t))}function e(){n&&n.abort()}function f(){n&&(n.abort(),n=null)}a=a||{};var h=this.context,j=(0,m.default)(h).getInstance(),l=void 0,n=void 0;return l={checkForExistence:c,load:d,abort:e,reset:f},b(),l}Object.defineProperty(c,"__esModule",{value:!0});var f=a(98),g=d(f),h=a(214),i=d(h),j=a(211),k=d(j),l=a(50),m=d(l),n=a(54),o=d(n),p=a(51),q=d(p),r=1,s=2,t="request is null";e.__dashjs_factory_name="FragmentLoader";var u=q.default.getClassFactory(e);u.FRAGMENT_LOADER_ERROR_LOADING_FAILURE=r,u.FRAGMENT_LOADER_ERROR_NULL_REQUEST=s,q.default.updateClassFactory(e.__dashjs_factory_name,u),c.default=u,b.exports=c.default},{211:211,214:214,50:50,51:51,54:54,98:98}],91:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){j.on(v.default.XLINK_READY,c,s),u=(0,k.default)(h).create({errHandler:A,metricsModel:a.metricsModel,mediaPlayerModel:a.mediaPlayerModel,requestModifier:a.requestModifier}),w=(0,i.default)(h).create({errHandler:A,metricsModel:a.metricsModel,mediaPlayerModel:a.mediaPlayerModel,requestModifier:a.requestModifier}),x=null}function c(a){j.trigger(v.default.INTERNAL_MANIFEST_LOADED,{manifest:a.manifest})}function d(a){var b=null;return a.indexOf("SmoothStreamingMedia")>-1?(y?(b=y.createMssParser(),y.registerEvents()):A.manifestError("manifest type unsupported","createParser"),b):a.indexOf("MPD")>-1?(0,z.default)(h).create({errorHandler:A}):b}function e(a){var b=new o.default(a,r.HTTPRequest.MPD_TYPE);u.load({request:b,success:function(b,c,e){var f=void 0,h=void 0;if(e.responseURL&&e.responseURL!==a?(h=l.parseBaseUrl(e.responseURL),f=e.responseURL):(l.isRelative(a)&&(a=l.resolve(a,window.location.href)),h=l.parseBaseUrl(a)),null===x&&(x=d(b)),null===x)return void j.trigger(v.default.INTERNAL_MANIFEST_LOADED,{manifest:null,error:new q.default(C,"Failed detecting manifest type: "+a)});w.setMatchers(x.getMatchers()),w.setIron(x.getIron());var i=x.parse(b);i?(i.url=f||a,i.originalUrl||(i.originalUrl=i.url),i.hasOwnProperty(g.default.LOCATION)&&(h=l.parseBaseUrl(i.Location_asArray[0]),p("BaseURI set by Location to: "+h)),i.baseUri=h,i.loadedTime=new Date,w.resolveManifestOnLoad(i)):j.trigger(v.default.INTERNAL_MANIFEST_LOADED,{manifest:null,error:new q.default(C,E)})},error:function(b,c,d){j.trigger(v.default.INTERNAL_MANIFEST_LOADED,{manifest:null,error:new q.default(D,"Failed loading manifest: "+a+", "+d)})}})}function f(){j.off(v.default.XLINK_READY,c,s),w&&(w.reset(),w=null),u&&(u.abort(),u=null),y&&y.reset()}a=a||{};var h=this.context,j=(0,t.default)(h).getInstance(),l=(0,m.default)(h).getInstance(),n=(0,B.default)(h).getInstance(),p=n.log,s=void 0,u=void 0,w=void 0,x=void 0,y=a.mssHandler,A=a.errHandler;return s={load:e,reset:f},b(),s}Object.defineProperty(c,"__esModule",{value:!0});var f=a(100),g=d(f),h=a(116),i=d(h),j=a(98),k=d(j),l=a(206),m=d(l),n=a(221),o=d(n),p=a(211),q=d(p),r=a(230),s=a(50),t=d(s),u=a(54),v=d(u),w=a(51),x=d(w),y=a(64),z=d(y),A=a(49),B=d(A),C=1,D=2,E="parsing failed";e.__dashjs_factory_name="ManifestLoader";var F=x.default.getClassFactory(e);F.MANIFEST_LOADER_ERROR_PARSING_FAILURE=C,F.MANIFEST_LOADER_ERROR_LOADING_FAILURE=D,x.default.updateClassFactory(e.__dashjs_factory_name,F),c.default=F,b.exports=c.default},{100:100,116:116,206:206,211:211,221:221,230:230,49:49,50:50,51:51,54:54,64:64,98:98}],92:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a){a&&(a.manifestModel&&(z=a.manifestModel),a.dashManifestModel&&(A=a.dashManifestModel),a.mediaPlayerModel&&(B=a.mediaPlayerModel),a.manifestLoader&&(y=a.manifestLoader))}function b(){d(),t.on(i.default.STREAMS_COMPOSED,q,this),t.on(i.default.PLAYBACK_STARTED,o,this),t.on(i.default.PLAYBACK_PAUSED,p,this),t.on(i.default.INTERNAL_MANIFEST_LOADED,n,this)}function c(a){k(a)}function d(){u=NaN,x=!1,w=!0,f()}function e(){t.off(i.default.PLAYBACK_STARTED,o,this),t.off(i.default.PLAYBACK_PAUSED,p,this),t.off(i.default.STREAMS_COMPOSED,q,this),t.off(i.default.INTERNAL_MANIFEST_LOADED,n,this),d()}function f(){null!==v&&(clearInterval(v),v=null)}function h(){f(),isNaN(u)||(s("Refresh manifest in "+u+" seconds."),v=setTimeout(l,1e3*u))}function j(){x=!0;var a=z.getValue(),b=a.url,c=A.getLocation(a);c&&(b=c),y.load(b)}function k(a){z.setValue(a);var b=new Date,c=(b.getTime()-a.loadedTime.getTime())/1e3;u=A.getManifestUpdatePeriod(a,c),t.trigger(i.default.MANIFEST_UPDATED,{manifest:a}),s("Manifest has been refreshed at "+b+"["+b.getTime()/1e3+"] "),w||h()}function l(){w&&!B.getScheduleWhilePaused()||x||j()}function n(a){a.error||k(a.manifest)}function o(){w=!1,h()}function p(){w=!0,f()}function q(){x=!1}var r=this.context,s=(0,m.default)(r).getInstance().log,t=(0,g.default)(r).getInstance(),u=void 0,v=void 0,w=void 0,x=void 0,y=void 0,z=void 0,A=void 0,B=void 0;return{initialize:b,setManifest:c,refreshManifest:j,setConfig:a,reset:e}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(50),g=d(f),h=a(54),i=d(h),j=a(51),k=d(j),l=a(49),m=d(l);e.__dashjs_factory_name="ManifestUpdater",c.default=k.default.getClassFactory(e),b.exports=c.default},{49:49,50:50,51:51,54:54}],93:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(){Cc=!1,Dc=!1,Ec=!0,Ic=null,Bc=null,Lc=null,Y.default.extend($.default),Nc=(0,I.default)(vc).getInstance()}function b(a){a&&(a.capabilities&&(Pc=a.capabilities),a.streamController&&(Qc=a.streamController),a.playbackController&&(Rc=a.playbackController),a.mediaPlayerModel&&(Nc=a.mediaPlayerModel),a.abrController&&(Fc=a.abrController),a.mediaController&&(Hc=a.mediaController))}function c(a,b,c){if(Pc||(Pc=(0,w.default)(vc).getInstance()),Oc=(0,u.default)(vc).getInstance(),!Pc.supportsMediaSource())return void Oc.capabilityError("mediasource");Cc||(Cc=!0,Gc=(0,ja.default)(vc).getInstance(),Fc||(Fc=(0,M.default)(vc).getInstance()),Rc||(Rc=(0,m.default)(vc).getInstance()),Hc||(Hc=(0,q.default)(vc).getInstance()),Lc=(0,da.default)(vc).getInstance(),Tc=(0,fa.default)(vc).getInstance({mediaController:Hc,timelineConverter:Gc,adapter:Lc}),Uc=(0,G.default)(vc).getInstance(),Sc=(0,ha.default)(vc).getInstance({manifestModel:Uc,dashManifestModel:Tc}),Mc=(0,K.default)(vc).getInstance(),Wc=(0,C.default)(vc).getInstance(),Xc=(0,S.default)(vc).getInstance({mediaPlayerModel:Nc}),Lc.setConfig({dashManifestModel:Tc}),Mc.setConfig({adapter:Lc}),Za(),Ca(void 0===c||c),a&&Jb(a),b&&cc(b),yc("[dash.js "+j()+"] MediaPlayer has been initialized"))}function d(){cc(null),Jb(null),Bc=null,Ic&&(Ic.reset(),Ic=null),Jc&&(Jc.reset(),Jc=null)}function e(){return!!Vc&&!!Ac}function f(a,b,c){wc.on(a,b,c)}function h(a,b,c){wc.off(a,b,c)}function j(){return(0,ba.getVersionString)()}function l(){return xc}function n(){if(!Dc)throw qc;(!Ec||r()&&Dc)&&Rc.play()}function p(){if(!Dc)throw qc;Rc.pause()}function r(){if(!Dc)throw qc;return Rc.isPaused()}function t(a){if(!Dc)throw qc;if("number"!=typeof a||isNaN(a))throw uc;var b=Rc.getIsDynamic()?P(a):a;Rc.seek(b)}function v(){if(!Dc)throw qc;return Rc.isSeeking()}function x(){if(!Dc)throw qc;return Rc.getIsDynamic()}function z(a){if(!Vc)throw rc;Gb().playbackRate=a}function B(){if(!Vc)throw rc;return Gb().playbackRate}function D(a){if(!Vc)throw rc;Gb().muted=a}function F(){if(!Vc)throw rc;return Gb().muted}function H(a){if(!Vc)throw rc;Gb().volume=a}function J(){if(!Vc)throw rc;return Gb().volume}function L(a){var b=[g.default.VIDEO,g.default.AUDIO,g.default.FRAGMENTED_TEXT];if(a){if(-1!==b.indexOf(a)){var c=vb().getCurrentBufferLevel(wb(a));return c||NaN}return yc("Warning  - getBufferLength requested for invalid type"),NaN}var c=b.map(function(a){return Ob(a).length>0?vb().getCurrentBufferLevel(wb(a)):Number.MAX_VALUE}).reduce(function(a,b){return Math.min(a,b)});return c===Number.MAX_VALUE?NaN:c}function N(){var a=mc();return a?a.manifestInfo.DVRWindowSize:0}function P(a){var b=mc(),c=Rc.getLiveDelay();if(!b)return 0;var d=b.range.start+a;return d>b.range.end-c&&(d=b.range.end-c),d}function R(a){if(!Dc)throw qc;var b=Gb().currentTime;if(void 0!==a)b=Qc.getTimeRelativeToStreamId(b,a);else if(Rc.getIsDynamic()){var c=mc();b=null===c?0:T()-(c.range.end-c.time)}return b}function T(){if(!Dc)throw qc;var a=Gb().duration;if(Rc.getIsDynamic()){var b=mc(),c=void 0;if(!b)return 0;c=b.range.end-b.range.start,a=c<b.manifestInfo.DVRWindowSize?c:b.manifestInfo.DVRWindowSize}return a}function V(){if(!Dc)throw qc;return R()<0?NaN:nc(R())}function X(){if(!Dc)throw qc;return nc(T())}function Z(a,b){Fc.setMaxAllowedBitrateFor(a,b)}function _(a,b){Fc.setMinAllowedBitrateFor(a,b)}function ca(a){return Fc.getMaxAllowedBitrateFor(a)}function ea(a){return Fc.getMinAllowedBitrateFor(a)}function ga(a,b){Fc.setMaxAllowedRepresentationRatioFor(a,b)}function ia(a){return Fc.getMaxAllowedRepresentationRatioFor(a)}function la(a){if(!Dc)throw qc;if(a===g.default.IMAGE){var b=oc();if(!b)return-1;var c=b.getThumbnailController();return c?c.getCurrentTrackIndex():-1}return Fc.getQualityFor(a,Qc.getActiveStreamInfo())}function na(a,b){if(!Dc)throw qc;if(a===g.default.IMAGE){var c=oc();if(!c)return;var d=c.getThumbnailController();d&&d.setTrackByIndex(b)}Fc.setPlaybackQuality(a,Qc.getActiveStreamInfo(),b)}function pa(){Fc.setElementSize(),Fc.setWindowResizeEventCalled(!0)}function qa(){return Fc.getLimitBitrateByPortal()}function ra(a){Fc.setLimitBitrateByPortal(a)}function sa(){return Fc.getUsePixelRatioInLimitBitrateByPortal()}function ta(a){Fc.setUsePixelRatioInLimitBitrateByPortal(a)}function ua(a,b){Fc.setInitialBitrateFor(a,b)}function va(a){if(!Dc)throw qc;return Fc.getInitialBitrateFor(a)}function wa(a,b){Fc.setInitialRepresentationRatioFor(a,b)}function xa(a){return Fc.getInitialRepresentationRatioFor(a)}function ya(a){return Fc.getAutoSwitchBitrateFor(a)}function za(a,b){Fc.setAutoSwitchBitrateFor(a,b)}function Aa(){return Fc.getUseDeadTimeLatency()}function Ba(a){Fc.setUseDeadTimeLatency(a)}function Ca(a){Ec=a}function Da(){return Ec}function Ea(a){Nc.setLiveDelayFragmentCount(a)}function Fa(a){Nc.setLiveDelay(a)}function Ga(){return Nc.getLiveDelay()}function Ha(a){Nc.setUseSuggestedPresentationDelay(a)}function Ia(a,b){Nc.setLastBitrateCachingInfo(a,b)}function Ja(a,b){Nc.setLastMediaSettingsCachingInfo(a,b)}function Ka(a){Nc.setScheduleWhilePaused(a)}function La(){return Nc.getScheduleWhilePaused()}function Ma(a){Nc.setFastSwitchEnabled(a)}function Na(){return Nc.getFastSwitchEnabled()}function Oa(a){a===g.default.ABR_STRATEGY_DYNAMIC||a===g.default.ABR_STRATEGY_BOLA||a===g.default.ABR_STRATEGY_THROUGHPUT?Nc.setABRStrategy(a):yc("Warning: Ignoring setABRStrategy("+a+") - unknown value.")}function Pa(){return Nc.getABRStrategy()}function Qa(a){Nc.setUseDefaultABRRules(a)}function Ra(a,b,c){Nc.addABRCustomRule(a,b,c)}function Sa(a){Nc.removeABRCustomRule(a)}function Ta(){Nc.removeAllABRCustomRule()}function Ua(a){a===g.default.MOVING_AVERAGE_SLIDING_WINDOW||a===g.default.MOVING_AVERAGE_EWMA?Nc.setMovingAverageMethod(a):yc("Warning: Ignoring setMovingAverageMethod("+a+") - unknown value.")}function Va(){return Nc.getMovingAverageMethod()}function Wa(a,b){Xa(a,b);var c=new k.default;c.schemeIdUri=a,c.value=b,Nc.getUTCTimingSources().push(c)}function Xa(a,b){var c=Nc.getUTCTimingSources();c.forEach(function(d,e){d.schemeIdUri===a&&d.value===b&&c.splice(e,1)})}function Ya(){Nc.setUTCTimingSources([])}function Za(){Wa(I.default.DEFAULT_UTC_TIMING_SOURCE.scheme,I.default.DEFAULT_UTC_TIMING_SOURCE.value)}function $a(a){Nc.setUseManifestDateHeaderTimeSource(a)}function _a(a){Nc.setBufferToKeep(a)}function ab(a){Nc.setBufferAheadToKeep(a)}function bb(a){Nc.setBufferPruningInterval(a)}function cb(a){Nc.setStableBufferTime(a)}function db(){return Nc.getStableBufferTime()}function eb(a){Nc.setBufferTimeAtTopQuality(a)}function fb(){return Nc.getBufferTimeAtTopQuality()}function gb(a){Nc.setBufferTimeAtTopQualityLongForm(a)}function hb(){return Nc.getBufferTimeAtTopQualityLongForm()}function ib(a){Nc.setLongFormContentDurationThreshold(a)}function jb(a){Nc.setSegmentOverlapToleranceTime(a)}function kb(a,b){Nc.setCacheLoadThresholdForType(a,b)}function lb(a){Nc.setBandwidthSafetyFactor(a)}function mb(){return Nc.getBandwidthSafetyFactor()}function nb(a){var b=Fc.getThroughputHistory();return b?b.getAverageThroughput(a):0}function ob(a){Nc.setAbandonLoadTimeout(a)}function pb(a){Nc.setFragmentRetryAttempts(a)}function qb(a){Nc.setFragmentRetryInterval(a)}function rb(a){Nc.setManifestRetryAttempts(a)}function sb(a){Nc.setManifestRetryInterval(a)}function tb(a,b){Nc.setXHRWithCredentialsForType(a,b)}function ub(a){return Nc.getXHRWithCredentialsForType(a)}function vb(){return Sc}function wb(a){return Mc.getReadOnlyMetricsFor(a)}function xb(a){void 0===Wc&&(Wc=(0,C.default)(vc).getInstance()),Wc.setTextDefaultLanguage(a)}function yb(){return void 0===Wc&&(Wc=(0,C.default)(vc).getInstance()),Wc.getTextDefaultLanguage()}function zb(a){void 0===Wc&&(Wc=(0,C.default)(vc).getInstance()),Wc.setTextDefaultEnabled(a)}function Ab(){return void 0===Wc&&(Wc=(0,C.default)(vc).getInstance()),Wc.getTextDefaultEnabled()}function Bb(a){void 0===Wc&&(Wc=(0,C.default)(vc).getInstance()),Wc.enableText(a)}function Cb(){return void 0===Wc&&(Wc=(0,C.default)(vc).getInstance()),Wc.isTextEnabled()}function Db(a){if(!Dc)throw qc;void 0===Wc&&(Wc=(0,C.default)(vc).getInstance()),Wc.setTextTrack(a)}function Eb(){var a=NaN;return Wc&&(a=Wc.getCurrentTrackIdx()),a}function Fb(a){var b=(0,y.default)(vc).getInstance();b.setConfig({videoModel:Vc}),b.initialize(),b.displayCConTop(a)}function Gb(){if(!Vc)throw rc;return Vc.getElement()}function Hb(){return Vc?Vc.getVideoContainer():null}function Ib(a){if(!Vc)throw rc;Vc.setVideoContainer(a)}function Jb(a){if(!Cc)throw tc;Vc&&Vc.reset(),Vc=null,a&&(Vc=(0,Q.default)(vc).getInstance(),Vc.initialize(),Vc.setElement(a),jc(),kc(),lc()),gc()}function Kb(){return Vc?Vc.getTTMLRenderingDiv():null}function Lb(a){if(!Vc)throw rc;Vc.setTTMLRenderingDiv(a)}function Mb(a){if(!Dc)throw qc;var b=oc();return b?b.getBitrateListFor(a):[]}function Nb(a){if(!Dc)throw qc;return Lc.getStreamsInfo(a)}function Ob(a){if(!Dc)throw qc;var b=Qc.getActiveStreamInfo();return b?Hc.getTracksFor(a,b):[]}function Pb(a,b,c){if(!Dc)throw qc;return c=c||Lc.getStreamsInfo(b)[0],c?Lc.getAllMediaInfoForType(c,a,b):[]}function Qb(a){if(!Dc)throw qc;var b=Qc.getActiveStreamInfo();return b?Hc.getCurrentTrackFor(a,b):null}function Rb(a,b){if(!Cc)throw tc;Hc.setInitialSettings(a,b)}function Sb(a){if(!Cc)throw tc;return Hc.getInitialSettings(a)}function Tb(a){if(!Dc)throw qc;Hc.setTrack(a)}function Ub(a){if(!Cc)throw tc;return Hc.getSwitchMode(a)}function Vb(a,b){if(!Cc)throw tc;Hc.setSwitchMode(a,b)}function Wb(a){if(!Cc)throw tc;Hc.setSelectionModeForInitialTrack(a)}function Xb(){if(!Cc)throw tc;return Hc.getSelectionModeForInitialTrack()}function Yb(){return jc()}function Zb(a){Ic=a}function $b(a){Bc=a}function _b(a){if(a<0)return null;var b=Rc.getIsDynamic()?P(a):a,c=Qc.getStreamForTime(b);if(null===c)return null;var d=c.getThumbnailController(),e=c.getStreamInfo();if(!d||!e)return null;var f=Qc.getTimeRelativeToStreamId(b,c.getId());return d.get(f)}function ac(a,b){var c=ic(),d=this,e=function a(e){e.error?b(null,e.error):b(e.manifest),wc.off(Y.default.INTERNAL_MANIFEST_LOADED,a,d),c.reset()};wc.on(Y.default.INTERNAL_MANIFEST_LOADED,e,d);var f=(0,E.default)(vc).getInstance();f.initialize(),c.load(f.parseURI(a))}function bc(){if(!Ac)throw sc;return Ac}function cc(a){if(!Cc)throw tc;if("string"==typeof a){var b=(0,E.default)(vc).getInstance();b.initialize(),Ac=b.parseURI(a)}else Ac=a;gc()}function dc(a,b,c){var d=!(arguments.length<=3||void 0===arguments[3])&&arguments[3],e=new Date(1e3*a),f=e.toLocaleDateString(b),g=e.toLocaleTimeString(b,{hour12:c});return d?g+" "+f:g}function ec(a){a=Math.max(a,0);var b=Math.floor(a/3600),c=Math.floor(a%3600/60),d=Math.floor(a%3600%60);return(0===b?"":b<10?"0"+b.toString()+":":b.toString()+":")+(c<10?"0"+c.toString():c.toString())+":"+(d<10?"0"+d.toString():d.toString())}function fc(a,b,c){aa.default.extend(a,b,c,vc)}function gc(){Dc?(Dc=!1,Lc.reset(),Qc.reset(),Rc.reset(),Fc.reset(),Hc.reset(),Wc.reset(),Ic&&(Ic.reset(),Ic=null,jc()),e()&&pc()):e()&&pc()}function hc(){var a=ic(),b=(0,O.default)(vc).getInstance({textController:Wc});Qc||(Qc=(0,o.default)(vc).getInstance()),Hc.setConfig({errHandler:Oc,domStorage:Xc}),Qc.setConfig({capabilities:Pc,manifestLoader:a,manifestModel:Uc,dashManifestModel:Tc,mediaPlayerModel:Nc,protectionController:Ic,adapter:Lc,metricsModel:Mc,dashMetrics:Sc,errHandler:Oc,timelineConverter:Gc,videoModel:Vc,playbackController:Rc,domStorage:Xc,abrController:Fc,mediaController:Hc,textController:Wc,sourceBufferController:b}),Rc.setConfig({streamController:Qc,metricsModel:Mc,dashMetrics:Sc,manifestModel:Uc,mediaPlayerModel:Nc,dashManifestModel:Tc,adapter:Lc,videoModel:Vc}),Fc.setConfig({streamController:Qc,domStorage:Xc,mediaPlayerModel:Nc,metricsModel:Mc,dashMetrics:Sc,dashManifestModel:Tc,manifestModel:Uc,videoModel:Vc,adapter:Lc}),Fc.createAbrRulesCollection(),Wc.setConfig({errHandler:Oc,manifestModel:Uc,dashManifestModel:Tc,mediaController:Hc,streamController:Qc,videoModel:Vc}),Qc.initialize(Ec,Bc)}function ic(){return(0,s.default)(vc).create({errHandler:Oc,metricsModel:Mc,mediaPlayerModel:Nc,requestModifier:(0,A.default)(vc).getInstance(),mssHandler:Kc})}function jc(){if(Ic)return Ic;var a=dashjs.Protection;if("function"==typeof a){var b=a(vc).create();return Y.default.extend(a.events),$.default.extend(a.events,{publicOnly:!0}),Ic=b.createProtectionSystem({log:yc,errHandler:Oc,videoModel:Vc,capabilities:Pc,eventBus:wc,adapter:Lc,events:Y.default,BASE64:ma.default,constants:g.default})}return null}function kc(){if(!Jc){var a=dashjs.MetricsReporting;if("function"==typeof a){var b=a(vc).create();Jc=b.createMetricsReporting({log:yc,eventBus:wc,mediaElement:Gb(),dashManifestModel:Tc,metricsModel:Mc,events:Y.default,constants:g.default,metricsConstants:i.default})}}}function lc(){if(!Kc){var a=dashjs.MssHandler;"function"==typeof a&&(Kc=a(vc).create({eventBus:wc,mediaPlayerModel:Nc,metricsModel:Mc,playbackController:Rc,protectionController:Ic,errHandler:Oc,events:Y.default,constants:g.default,log:yc,initSegmentType:ka.HTTPRequest.INIT_SEGMENT_TYPE,BASE64:ma.default,ISOBoxer:oa.default}))}}function mc(){var a=Mc.getReadOnlyMetricsFor(g.default.VIDEO)||Mc.getReadOnlyMetricsFor(g.default.AUDIO);return Sc.getCurrentDVRInfo(a)}function nc(a){var b=mc(),c=void 0;return b?(c=b.manifestInfo.availableFrom.getTime()/1e3,a+(c+b.range.start)):0}function oc(){if(!Dc)throw qc;var a=Qc.getActiveStreamInfo();return a?Qc.getStreamById(a.id):null}function pc(){Dc||(hc(),Dc=!0,yc("Playback Initialized"),"string"==typeof Ac?Qc.load(Ac):Qc.loadWithManifest(Ac))}var qc="You must first call initialize() to init playback before calling this method",rc="You must first call attachView() to set the video element before calling this method",sc="You must first call attachSource() with a valid source before calling this method",tc="MediaPlayer not initialized!",uc="MediaPlayer Invalid Arguments!",vc=this.context,wc=(0,W.default)(vc).getInstance(),xc=(0,U.default)(vc).getInstance(),yc=xc.log,zc=void 0,Ac=void 0,Bc=void 0,Cc=void 0,Dc=void 0,Ec=void 0,Fc=void 0,Gc=void 0,Hc=void 0,Ic=void 0,Jc=void 0,Kc=void 0,Lc=void 0,Mc=void 0,Nc=void 0,Oc=void 0,Pc=void 0,Qc=void 0,Rc=void 0,Sc=void 0,Tc=void 0,Uc=void 0,Vc=void 0,Wc=void 0,Xc=void 0;return zc={initialize:c,setConfig:b,on:f,off:h,extend:fc,attachView:Jb,attachSource:cc,isReady:e,play:n,isPaused:r,pause:p,isSeeking:v,isDynamic:x,seek:t,setPlaybackRate:z,getPlaybackRate:B,setMute:D,isMuted:F,setVolume:H,getVolume:J,time:R,duration:T,timeAsUTC:V,durationAsUTC:X,getActiveStream:oc,getDVRWindowSize:N,getDVRSeekOffset:P,convertToTimeCode:ec,formatUTC:dc,getVersion:j,getDebug:l,getBufferLength:L,getVideoContainer:Hb,getTTMLRenderingDiv:Kb,getVideoElement:Gb,getSource:bc,setLiveDelayFragmentCount:Ea,setLiveDelay:Fa,getLiveDelay:Ga,useSuggestedPresentationDelay:Ha,enableLastBitrateCaching:Ia,enableLastMediaSettingsCaching:Ja,setMaxAllowedBitrateFor:Z,getMaxAllowedBitrateFor:ca,setMinAllowedBitrateFor:_,getMinAllowedBitrateFor:ea,setMaxAllowedRepresentationRatioFor:ga,getMaxAllowedRepresentationRatioFor:ia,setAutoPlay:Ca,getAutoPlay:Da,setScheduleWhilePaused:Ka,getScheduleWhilePaused:La,getDashMetrics:vb,getMetricsFor:wb,getQualityFor:la,setQualityFor:na,updatePortalSize:pa,getLimitBitrateByPortal:qa,setLimitBitrateByPortal:ra,getUsePixelRatioInLimitBitrateByPortal:sa,setUsePixelRatioInLimitBitrateByPortal:ta,setTextDefaultLanguage:xb,getTextDefaultLanguage:yb,setTextDefaultEnabled:zb,getTextDefaultEnabled:Ab,enableText:Bb,isTextEnabled:Cb,setTextTrack:Db,getBitrateInfoListFor:Mb,setInitialBitrateFor:ua,getInitialBitrateFor:va,setInitialRepresentationRatioFor:wa,getInitialRepresentationRatioFor:xa,getStreamsFromManifest:Nb,getTracksFor:Ob,getTracksForTypeFromManifest:Pb,getCurrentTrackFor:Qb,setInitialMediaSettingsFor:Rb,getInitialMediaSettingsFor:Sb,setCurrentTrack:Tb,getTrackSwitchModeFor:Ub,setTrackSwitchModeFor:Vb,setSelectionModeForInitialTrack:Wb,getSelectionModeForInitialTrack:Xb,setFastSwitchEnabled:Ma,getFastSwitchEnabled:Na,setMovingAverageMethod:Ua,getMovingAverageMethod:Va,getAutoSwitchQualityFor:ya,setAutoSwitchQualityFor:za,setABRStrategy:Oa,getABRStrategy:Pa,useDefaultABRRules:Qa,addABRCustomRule:Ra,removeABRCustomRule:Sa,removeAllABRCustomRule:Ta,setBandwidthSafetyFactor:lb,getBandwidthSafetyFactor:mb,getAverageThroughput:nb,setAbandonLoadTimeout:ob,retrieveManifest:ac,addUTCTimingSource:Wa,removeUTCTimingSource:Xa,clearDefaultUTCTimingSources:Ya,restoreDefaultUTCTimingSources:Za,setBufferToKeep:_a,setBufferAheadToKeep:ab,setBufferPruningInterval:bb,setStableBufferTime:cb,getStableBufferTime:db,setBufferTimeAtTopQuality:eb,getBufferTimeAtTopQuality:fb,setBufferTimeAtTopQualityLongForm:gb,getBufferTimeAtTopQualityLongForm:hb,setFragmentLoaderRetryAttempts:pb,setFragmentLoaderRetryInterval:qb,setManifestLoaderRetryAttempts:rb,setManifestLoaderRetryInterval:sb,setXHRWithCredentialsForType:tb,getXHRWithCredentialsForType:ub,setLongFormContentDurationThreshold:ib,setSegmentOverlapToleranceTime:jb,setCacheLoadThresholdForType:kb,getProtectionController:Yb,attachProtectionController:Zb,setProtectionData:$b,enableManifestDateHeaderTimeSource:$a,displayCaptionsOnTop:Fb,attachVideoContainer:Ib,attachTTMLRenderingDiv:Lb,getCurrentTextTrackIndex:Eb,getUseDeadTimeLatencyForAbr:Aa,setUseDeadTimeLatencyForAbr:Ba,getThumbnail:_b,reset:d},a(),zc}Object.defineProperty(c,"__esModule",{value:!0});var f=a(100),g=d(f),h=a(101),i=d(h),j=a(89),k=d(j),l=a(111),m=d(l),n=a(114),o=d(n),p=a(109),q=d(p),r=a(91),s=d(r),t=a(199),u=d(t),v=a(195),w=d(v),x=a(190),y=d(x),z=a(204),A=d(z),B=a(188),C=d(B),D=a(145),E=d(D),F=a(142),G=d(F),H=a(143),I=d(H),J=a(144),K=d(J),L=a(103),M=d(L),N=a(113),O=d(N),P=a(146),Q=d(P),R=a(197),S=d(R),T=a(49),U=d(T),V=a(50),W=d(V),X=a(54),Y=d(X),Z=a(94),$=d(Z),_=a(51),aa=d(_),ba=a(52),ca=a(56),da=d(ca),ea=a(63),fa=d(ea),ga=a(58),ha=d(ga),ia=a(79),ja=d(ia),ka=a(230),la=a(1),ma=d(la),na=a(11),oa=d(na);e.__dashjs_factory_name="MediaPlayer";var pa=aa.default.getClassFactory(e);pa.events=$.default,aa.default.updateClassFactory(e.__dashjs_factory_name,pa),c.default=pa,b.exports=c.default},{1:1,100:100,101:101,103:103,109:109,11:11,111:111,113:113,114:114,142:142,143:143,144:144,145:145,146:146,188:188,190:190,195:195,197:197,199:199,204:204,230:230,49:49,50:50,51:51,52:52,54:54,56:56,58:58,63:63,79:79,89:89,91:91,94:94}],94:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(c,"__esModule",{value:!0});var g=function(a,b,c){for(var d=!0;d;){var e=a,f=b,g=c;d=!1,null===e&&(e=Function.prototype);var h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var i=h.get;if(void 0===i)return;return i.call(g)}var j=Object.getPrototypeOf(e);if(null===j)return;a=j,b=f,c=g,d=!0,h=j=void 0}},h=a(55),i=d(h),j=function(a){function b(){e(this,b),g(Object.getPrototypeOf(b.prototype),"constructor",this).call(this),this.AST_IN_FUTURE="astInFuture",this.BUFFER_EMPTY="bufferStalled",this.BUFFER_LOADED="bufferLoaded",this.BUFFER_LEVEL_STATE_CHANGED="bufferStateChanged",this.ERROR="error",this.FRAGMENT_LOADING_COMPLETED="fragmentLoadingCompleted",this.FRAGMENT_LOADING_STARTED="fragmentLoadingStarted",this.FRAGMENT_LOADING_ABANDONED="fragmentLoadingAbandoned",this.LOG="log",this.MANIFEST_LOADED="manifestLoaded",this.METRICS_CHANGED="metricsChanged",this.METRIC_CHANGED="metricChanged",this.METRIC_ADDED="metricAdded",this.METRIC_UPDATED="metricUpdated",this.PERIOD_SWITCH_COMPLETED="periodSwitchCompleted",this.PERIOD_SWITCH_STARTED="periodSwitchStarted",this.QUALITY_CHANGE_REQUESTED="qualityChangeRequested",this.QUALITY_CHANGE_RENDERED="qualityChangeRendered",this.SOURCE_INITIALIZED="sourceInitialized",this.STREAM_INITIALIZED="streamInitialized",this.STREAM_TEARDOWN_COMPLETE="streamTeardownComplete",this.TEXT_TRACKS_ADDED="allTextTracksAdded",this.TEXT_TRACK_ADDED="textTrackAdded",this.CAN_PLAY="canPlay",this.PLAYBACK_ENDED="playbackEnded",this.PLAYBACK_ERROR="playbackError",this.PLAYBACK_NOT_ALLOWED="playbackNotAllowed",this.PLAYBACK_METADATA_LOADED="playbackMetaDataLoaded",this.PLAYBACK_PAUSED="playbackPaused",this.PLAYBACK_PLAYING="playbackPlaying",this.PLAYBACK_PROGRESS="playbackProgress",this.PLAYBACK_RATE_CHANGED="playbackRateChanged",this.PLAYBACK_SEEKED="playbackSeeked",this.PLAYBACK_SEEKING="playbackSeeking",this.PLAYBACK_SEEK_ASKED="playbackSeekAsked",this.PLAYBACK_STARTED="playbackStarted",this.PLAYBACK_TIME_UPDATED="playbackTimeUpdated",this.MANIFEST_VALIDITY_CHANGED="manifestValidityChanged"}return f(b,a),b}(i.default),k=new j;c.default=k,b.exports=c.default},{55:55}],95:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a,b,c){if(!a||"VIDEO"!==a.nodeName)return null;if(a._dashjs_player)return a._dashjs_player;var e=void 0,f=a.id||a.name||"video element";if(!(b=b||[].slice.call(a.querySelectorAll("source")).filter(function(a){return a.type==d})[0])&&a.src)b=document.createElement("source"),b.src=a.src;else if(!b&&!a.src)return null;return c=c||{},e=(0,i.default)(c).create(),e.initialize(a,b.src,a.autoplay),e.getDebug().log("Converted "+f+" to dash.js player and added content: "+b.src),a._dashjs_player=e,e}function b(b,e){var f=[];b=b||"[data-dashjs-player]",e=e||document;for(var g=e.querySelectorAll(b),h=0;h<g.length;h++){var i=a(g[h],null);f.push(i)}for(var j=e.querySelectorAll('source[type="'+d+'"]'),h=0;h<j.length;h++){var k=c(j[h]),i=a(k,null);f.push(i)}return f}function c(a){for(var b=!0;b;){var c=a;if(b=!1,"video"===c.nodeName.toLowerCase())return c;a=c.parentNode,b=!0}}var d="application/dash+xml";return{create:a,createAll:b}}function f(){window.removeEventListener("load",f),j.createAll()}function g(){window.dashjs&&(window.clearInterval(k),j.createAll())}Object.defineProperty(c,"__esModule",{value:!0});var h=a(93),i=d(h),j=e(),k=void 0;!("undefined"!=typeof window&&window&&window.dashjs&&window.dashjs.skipAutoCreate)&&"undefined"!=typeof window&&window&&window.addEventListener&&("complete"===window.document.readyState?window.dashjs?j.createAll():k=window.setInterval(g,500):window.addEventListener("load",f)),c.default=j,b.exports=c.default},{93:93}],96:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){f(),na=(0,
m.default)(R).create({mediaPlayerModel:W,metricsModel:aa,errHandler:$}),T.on(s.default.BUFFERING_COMPLETED,L,fa),T.on(s.default.DATA_UPDATE_COMPLETED,M,fa)}function c(a,b){ja=a,(ma=b)&&(T.on(s.default.KEY_ERROR,A,fa),T.on(s.default.SERVER_CERTIFICATE_UPDATED,A,fa),T.on(s.default.LICENSE_REQUEST_COMPLETE,A,fa),T.on(s.default.KEY_SYSTEM_SELECTED,A,fa),T.on(s.default.KEY_SESSION_CREATED,A,fa))}function d(a){ha||(T.on(s.default.CURRENT_TRACK_CHANGED,D,fa),G(a),ha=!0)}function e(){for(var a=ga?ga.length:0,b=0;b<a;b++){ga[b].getFragmentModel().removeExecutedRequestsBeforeTime(l()+j()),ga[b].reset()}ga=[],ha=!1,ia=!1,T.off(s.default.CURRENT_TRACK_CHANGED,D,fa)}function f(){e(),ja=null,ka={},la=!1}function h(){ca&&ca.pause(),na&&(na.reset(),na=null),f(),S=null,T.off(s.default.DATA_UPDATE_COMPLETED,M,fa),T.off(s.default.BUFFERING_COMPLETED,L,fa),T.off(s.default.KEY_ERROR,A,fa),T.off(s.default.SERVER_CERTIFICATE_UPDATED,A,fa),T.off(s.default.LICENSE_REQUEST_COMPLETE,A,fa),T.off(s.default.KEY_SYSTEM_SELECTED,A,fa),T.off(s.default.KEY_SESSION_CREATED,A,fa)}function j(){return ja?ja.duration:NaN}function l(){return ja?ja.start:NaN}function n(){return ja?ja.id:NaN}function p(){return ja}function r(){return pa}function t(){return na}function v(){return oa}function w(){if(!(ba&&ba.hasOwnProperty("getBitrateList")&&Y&&Y.hasOwnProperty("getAllMediaInfoForType")&&Y.hasOwnProperty("getEventsFor")))throw new Error("Missing config parameter(s)")}function x(a){if(w(),a===g.default.IMAGE)return oa?oa.getBitrateList():[];var b=J(a);return ba.getBitrateList(b)}function y(){pa&&pa.start()}function z(){pa&&pa.stop()}function A(a){a.error&&($.mediaKeySessionError(a.error),S(a.error),h())}function B(a){return a.type===g.default.TEXT?a.mimeType:a.type}function C(a){var b=a.type,c=void 0,d=void 0;if(b===g.default.MUXED&&a)return d="Multiplexed representations are intentionally not supported, as they are not compliant with the DASH-AVC/264 guidelines",S(d),$.manifestError(d,"multiplexedrep",U.getValue()),!1;if(b===g.default.TEXT||b===g.default.FRAGMENTED_TEXT||b===g.default.EMBEDDED_TEXT||b===g.default.IMAGE)return!0;if(c=a.codec,S(b+" codec: "+c),a.contentProtection&&!Z.supportsEncryptedMedia())$.capabilityError("encryptedmedia");else if(!Z.supportsCodec(c))return d=b+"Codec ("+c+") is not supported.",$.manifestError(d,"codec",U.getValue()),S(d),!1;return!0}function D(a){if(a.newMediaInfo.streamInfo.id===ja.id){var b=N(a.oldMediaInfo);if(b){var c=ca.getTime();S("Stream -  Process track changed at current time "+c);var d=a.newMediaInfo,e=U.getValue();S("Stream -  Update stream controller"),e.refreshManifestOnSwitchTrack?(S("Stream -  Refreshing manifest for switch track"),qa=a,X.refreshManifest()):(b.updateMediaInfo(d),d.type!==g.default.FRAGMENTED_TEXT&&(ba.updateTopQualityIndex(d),b.switchTrackAsked()))}}}function E(b,c,d,e){var f=(0,i.default)(R).create({type:B(b),mimeType:b.mimeType,timelineConverter:_,adapter:Y,manifestModel:U,dashManifestModel:V,mediaPlayerModel:W,metricsModel:aa,dashMetrics:a.dashMetrics,baseURLController:a.baseURLController,stream:fa,abrController:ba,domStorage:a.domStorage,playbackController:ca,mediaController:da,streamController:a.streamController,textController:ea,sourceBufferController:a.sourceBufferController,errHandler:$});if(f.initialize(d),ba.updateTopQualityIndex(b),e?(f.setBuffer(e.buffer),f.getIndexHandler().setCurrentTime(e.currentTime),ga[e.replaceIdx]=f):ga.push(f),!e||!e.ignoreMediaInfo)if(b.type===g.default.TEXT||b.type===g.default.FRAGMENTED_TEXT){for(var h=void 0,j=0;j<c.length;j++)c[j].index===b.index&&(h=j),f.updateMediaInfo(c[j]);b.type===g.default.FRAGMENTED_TEXT&&f.updateMediaInfo(c[h])}else f.updateMediaInfo(b)}function F(b,c){var d=Y.getAllMediaInfoForType(ja,b),e=null,f=void 0;if(!d||0===d.length)return void S("No "+b+" data.");for(var h=0,i=d.length;h<i;h++)if(e=d[h],b===g.default.EMBEDDED_TEXT)ea.addEmbeddedTrack(e);else{if(!C(e))continue;da.isMultiTrackSupportedByType(e.type)&&da.addTrack(e,ja)}if(b!==g.default.EMBEDDED_TEXT&&0!==da.getTracksFor(b,ja).length){if(b===g.default.IMAGE)return void(oa=(0,o.default)(R).create({dashManifestModel:V,adapter:Y,baseURLController:a.baseURLController,stream:fa}));da.checkInitialMediaSettingsForType(b,ja),f=da.getCurrentTrackFor(b,ja),E(f,d,c)}}function G(a){w();var b=void 0;if(pa||(pa=(0,k.default)(R).create(),pa.setConfig({manifestModel:U,manifestUpdater:X,playbackController:ca}),b=Y.getEventsFor(ja),pa.addInlineEvents(b)),la=!0,H(g.default.VIDEO),H(g.default.AUDIO),F(g.default.VIDEO,a),F(g.default.AUDIO,a),F(g.default.TEXT,a),F(g.default.FRAGMENTED_TEXT,a),F(g.default.EMBEDDED_TEXT,a),F(g.default.MUXED,a),F(g.default.IMAGE,a),K(),ia=!0,la=!1,0===ga.length){var c="No streams to play.";$.manifestError(c,"nostreams",U.getValue()),S(c)}else I()}function H(a){var b=V.getAdaptationForType(U.getValue(),ja.index,a,ja);if(!b||!Array.isArray(b.Representation_asArray))return null;b.Representation_asArray=b.Representation_asArray.filter(function(a,c){if(0===c)return!0;var d=V.getCodec(b,c,!0);return!!Z.supportsCodec(d)||(S("[Stream] codec not supported: "+d),!1)})}function I(){for(var a=ga.length,b=!!ka.audio||!!ka.video,c=b?new Error(Q,"Data update failed",null):null,d=0;d<a;d++)if(ga[d].isUpdating()||la)return;ia&&(ma&&ma.initialize(U.getValue(),J(g.default.AUDIO),J(g.default.VIDEO)),T.trigger(s.default.STREAM_INITIALIZED,{streamInfo:ja,error:c}))}function J(a){for(var b=ga.length,c=null,d=0;d<b;d++)if(c=ga[d],c.getType()===a)return c.getMediaInfo();return null}function K(){for(var a=0,b=ga.length;a<b;a++)ga[a].createBuffer()}function L(a){if(a.streamInfo===ja){var b=O(),c=b.length;if(0===c)return void S("[Stream] onBufferingCompleted - can't trigger STREAM_BUFFERING_COMPLETED because no streamProcessor is defined");for(var d=0;d<c;d++)if(!b[d].isBufferingCompleted()&&(b[d].getType()===g.default.AUDIO||b[d].getType()===g.default.VIDEO))return void S("[Stream] onBufferingCompleted - can't trigger STREAM_BUFFERING_COMPLETED because streamProcessor "+b[d].getType()+" is not buffering completed");S("[Stream] onBufferingCompleted - trigger STREAM_BUFFERING_COMPLETED"),T.trigger(s.default.STREAM_BUFFERING_COMPLETED,{streamInfo:ja})}}function M(a){var b=a.sender.getStreamProcessor();b.getStreamInfo()===ja&&(ka[b.getType()]=a.error,I())}function N(a){return!!a&&O().filter(function(b){return b.getType()===a.type})[0]}function O(){for(var a=ga.length,b=[],c=void 0,d=void 0,e=0;e<a;e++)d=ga[e],(c=d.getType())!==g.default.AUDIO&&c!==g.default.VIDEO&&c!==g.default.FRAGMENTED_TEXT||b.push(d);return b}function P(a){if(S("Manifest updated... updating data system wide."),ha=!1,la=!0,ja=a,pa){var b=Y.getEventsFor(ja);pa.addInlineEvents(b)}H(g.default.VIDEO),H(g.default.AUDIO);for(var c=0,d=ga.length;c<d;c++){var e=ga[c],f=Y.getMediaInfoForType(ja,e.getType());ba.updateTopQualityIndex(f),e.updateMediaInfo(f)}if(qa){var f=qa.newMediaInfo;if("fragmentedText"!==f.type){var h=N(qa.oldMediaInfo);if(!h)return;h.switchTrackAsked(),qa=void 0}}la=!1,I()}var Q=1;a=a||{};var R=this.context,S=(0,u.default)(R).getInstance().log,T=(0,q.default)(R).getInstance(),U=a.manifestModel,V=a.dashManifestModel,W=a.mediaPlayerModel,X=a.manifestUpdater,Y=a.adapter,Z=a.capabilities,$=a.errHandler,_=a.timelineConverter,aa=a.metricsModel,ba=a.abrController,ca=a.playbackController,da=a.mediaController,ea=a.textController,fa=void 0,ga=void 0,ha=void 0,ia=void 0,ja=void 0,ka=void 0,la=void 0,ma=void 0,na=void 0,oa=void 0,pa=void 0,qa=void 0;return fa={initialize:c,activate:d,deactivate:e,getDuration:j,getStartTime:l,getId:n,getStreamInfo:p,getFragmentController:t,getThumbnailController:v,getEventController:r,getBitrateListFor:x,startEventController:y,stopEventController:z,updateData:P,reset:h,getProcessors:O},b(),fa}Object.defineProperty(c,"__esModule",{value:!0});var f=a(100),g=d(f),h=a(97),i=d(h),j=a(107),k=d(j),l=a(108),m=d(l),n=a(191),o=d(n),p=a(50),q=d(p),r=a(54),s=d(r),t=a(49),u=d(t),v=a(51),w=d(v);e.__dashjs_factory_name="Stream",c.default=w.default.getClassFactory(e),b.exports=c.default},{100:100,107:107,108:108,191:191,49:49,50:50,51:51,54:54,97:97}],97:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){$&&$.getIsDynamic()&&(ma=(0,i.default)(P).create({timelineConverter:U,streamProcessor:ha})),j()}function c(b){Q=(0,u.default)(P).create({mimeType:T,timelineConverter:U,dashMetrics:fa,metricsModel:ea,mediaPlayerModel:X,baseURLController:a.baseURLController,errHandler:S}),Q.initialize(ha),Z.registerStreamType(R,ha),oa=Y.getFragmentController().getModel(R),oa.setStreamProcessor(ha),ka=O(R),la=(0,o.default)(P).create({type:R,metricsModel:ea,adapter:V,dashMetrics:fa,dashManifestModel:ga,timelineConverter:U,mediaPlayerModel:X,abrController:Z,playbackController:$,streamController:_,textController:ba,sourceBufferController:ca,streamProcessor:ha}),na=(0,q.default)(P).create(),na.setConfig({abrController:Z,domStorage:da,metricsModel:ea,dashMetrics:fa,dashManifestModel:ga,manifestModel:W,playbackController:$,timelineConverter:U,streamProcessor:ha}),ka.initialize(b),la.initialize(),na.initialize()}function d(a){pa.push(a)}function e(a){var b=pa.indexOf(a);-1!==b&&pa.splice(b,1)}function f(){return pa}function h(){pa=[]}function j(){ja=[],ia=null,h()}function l(a){Q.reset(),ka&&(ka.reset(a),ka=null),la&&(la.reset(),la=null),na&&(na.reset(),na=null),Z&&Z.unRegisterStreamType(R),pa.forEach(function(a){a.reset()}),j(),R=null,Y=null,ma&&(ma.reset(),ma=null)}function n(){return!!na&&na.isUpdating()}function p(){return R}function r(){return na}function s(){return Q}function t(){return Y?Y.getFragmentController():null}function v(){return ka.getBuffer()}function w(a){ka.setBuffer(a)}function x(){return ka}function y(){return oa}function z(){return ma}function A(){return Y?Y.getStreamInfo():null}function B(){return Y?Y.getEventController():null}function C(a){a===ia||a&&ia&&a.type!==ia.type||(ia=a),-1===ja.indexOf(a)&&ja.push(a),V.updateData(this)}function D(){return ja}function E(){return ia}function F(){return ka.getMediaSource()}function G(){return la}function H(){return V.getCurrentRepresentationInfo(na)}function I(a){return V.getRepresentationInfoForQuality(na,a)}function J(){return!!ka&&ka.getIsBufferingCompleted()}function K(){return ka.getBufferLevel()}function L(a){ka&&ka.switchInitData(A().id,a)}function M(){return ka.getBuffer()||ka.createBuffer(ia)}function N(){la.switchTrackAsked()}function O(a){return a===g.default.VIDEO||a===g.default.AUDIO?(0,k.default)(P).create({type:a,metricsModel:ea,mediaPlayerModel:X,manifestModel:W,sourceBufferController:ca,errHandler:S,streamController:_,mediaController:aa,adapter:V,textController:ba,abrController:Z,playbackController:$,streamProcessor:ha}):(0,m.default)(P).create({type:a,metricsModel:ea,mediaPlayerModel:X,manifestModel:W,sourceBufferController:ca,errHandler:S,streamController:_,mediaController:aa,adapter:V,textController:ba,abrController:Z,playbackController:$,streamProcessor:ha})}a=a||{};var P=this.context,Q=void 0,R=a.type,S=a.errHandler,T=a.mimeType,U=a.timelineConverter,V=a.adapter,W=a.manifestModel,X=a.mediaPlayerModel,Y=a.stream,Z=a.abrController,$=a.playbackController,_=a.streamController,aa=a.mediaController,ba=a.textController,ca=a.sourceBufferController,da=a.domStorage,ea=a.metricsModel,fa=a.dashMetrics,ga=a.dashManifestModel,ha=void 0,ia=void 0,ja=void 0,ka=void 0,la=void 0,ma=void 0,na=void 0,oa=void 0,pa=void 0;return ha={initialize:c,isUpdating:n,getType:p,getBufferController:x,getFragmentModel:y,getScheduleController:G,getLiveEdgeFinder:z,getEventController:B,getFragmentController:t,getRepresentationController:r,getIndexHandler:s,getCurrentRepresentationInfo:H,getRepresentationInfoForQuality:I,getBufferLevel:K,switchInitData:L,isBufferingCompleted:J,createBuffer:M,getStreamInfo:A,updateMediaInfo:C,switchTrackAsked:N,getMediaInfoArr:D,getMediaInfo:E,getMediaSource:F,getBuffer:v,setBuffer:w,registerExternalController:d,unregisterExternalController:e,getExternalControllers:f,unregisterAllExternalController:h,reset:l},b(),ha}Object.defineProperty(c,"__esModule",{value:!0});var f=a(100),g=d(f),h=a(202),i=d(h),j=a(106),k=d(j),l=a(187),m=d(l),n=a(112),o=d(n),p=a(62),q=d(p),r=a(51),s=d(r),t=a(57),u=d(t);e.__dashjs_factory_name="StreamProcessor",c.default=s.default.getClassFactory(e),b.exports=c.default},{100:100,106:106,112:112,187:187,202:202,51:51,57:57,62:62}],98:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function f(a){function b(){var a;n=[],o=[],p=[],a={},e(a,g.HTTPRequest.MPD_TYPE,k.default.DOWNLOAD_ERROR_ID_MANIFEST),e(a,g.HTTPRequest.XLINK_EXPANSION_TYPE,k.default.DOWNLOAD_ERROR_ID_XLINK),e(a,g.HTTPRequest.INIT_SEGMENT_TYPE,k.default.DOWNLOAD_ERROR_ID_INITIALIZATION),e(a,g.HTTPRequest.MEDIA_SEGMENT_TYPE,k.default.DOWNLOAD_ERROR_ID_CONTENT),e(a,g.HTTPRequest.INDEX_SEGMENT_TYPE,k.default.DOWNLOAD_ERROR_ID_CONTENT),e(a,g.HTTPRequest.BITSTREAM_SWITCHING_SEGMENT_TYPE,k.default.DOWNLOAD_ERROR_ID_CONTENT),e(a,g.HTTPRequest.OTHER_TYPE,k.default.DOWNLOAD_ERROR_ID_CONTENT),q=a}function c(a,b){var d=a.request,e=new XMLHttpRequest,f=[],k=!0,m=!0,r=new Date,s=r,t=0,u=function(a){m=!1,d.requestStartDate=r,d.requestEndDate=new Date,d.firstByteDate=d.firstByteDate||r,d.checkExistenceOnly||i.addHttpRequest(d.mediaType,null,d.type,d.url,e.responseURL||null,d.serviceLocation||null,d.range||null,d.requestStartDate,d.firstByteDate,d.requestEndDate,e.status,d.duration,e.getAllResponseHeaders(),a?f:null)},v=function(){-1!==n.indexOf(e)&&(n.splice(n.indexOf(e),1),m&&(u(!1),b>0?(b--,p.push(setTimeout(function(){c(a,b)},j.getRetryIntervalForType(d.type)))):(h.downloadError(q[d.type],d.url,d),a.error&&a.error(d,"error",e.statusText),a.complete&&a.complete(d,e.statusText))))},w=function(b){var c=new Date;k&&(k=!1,(!b.lengthComputable||b.lengthComputable&&b.total!==b.loaded)&&(d.firstByteDate=c)),b.lengthComputable&&(d.bytesLoaded=b.loaded,d.bytesTotal=b.total),f.push({s:s,d:c.getTime()-s.getTime(),b:[b.loaded?b.loaded-t:0]}),s=c,t=b.loaded,a.progress&&a.progress()},x=function(){e.status>=200&&e.status<=299&&(u(!0),a.success&&a.success(e.response,e.statusText,e),a.complete&&a.complete(d,e.statusText))},y=function(){a.abort&&a.abort(d,e.status)};if(!l||!i||!h)throw new Error("config object is not correct or missing");try{var z=l.modifyRequestURL(d.url),A=d.checkExistenceOnly?g.HTTPRequest.HEAD:g.HTTPRequest.GET;e.open(A,z,!0),d.responseType&&(e.responseType=d.responseType),d.range&&e.setRequestHeader("Range","bytes="+d.range),d.requestStartDate||(d.requestStartDate=r),e=l.modifyRequestHeader(e),e.withCredentials=j.getXHRWithCredentialsForType(d.type),e.onload=x,e.onloadend=v,e.onerror=v,e.onprogress=w,e.onabort=y;var B=(new Date).getTime();isNaN(d.delayLoadingTime)||B>=d.delayLoadingTime?(n.push(e),e.send()):function(){var a={xhr:e};o.push(a),a.delayTimeout=setTimeout(function(){if(-1!==o.indexOf(a)){o.splice(o.indexOf(a),1);try{r=new Date,s=r,n.push(a.xhr),a.xhr.send()}catch(b){a.xhr.onerror()}}},d.delayLoadingTime-B)}()}catch(C){e.onerror()}}function d(a){a.request&&c(a,j.getRetryAttemptsForType(a.request.type))}function f(){p.forEach(function(a){return clearTimeout(a)}),p=[],o.forEach(function(a){return clearTimeout(a.delayTimeout)}),o=[],n.forEach(function(a){a.onloadend=a.onerror=a.onprogress=void 0,a.abort()}),n=[]}a=a||{};var h=a.errHandler,i=a.metricsModel,j=a.mediaPlayerModel,l=a.requestModifier,m=void 0,n=void 0,o=void 0,p=void 0,q=void 0;return m={load:d,abort:f},b(),m}Object.defineProperty(c,"__esModule",{value:!0});var g=a(230),h=a(51),i=d(h),j=a(199),k=d(j);f.__dashjs_factory_name="XHRLoader";var l=i.default.getClassFactory(f);c.default=l,b.exports=c.default},{199:199,230:230,51:51}],99:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(a,b,c){var e=function(d,e){b.resolved=!0,b.resolvedContent=d||null,f.trigger(p.default.XLINK_ELEMENT_LOADED,{element:b,resolveObject:c,error:d||e?null:new g.default(s,"Failed loading Xlink element: "+a)})};if(a===d)e(null,!0);else{var i=new l.default(a,j.HTTPRequest.XLINK_TYPE);h.load({request:i,success:function(a){e(a)},error:function(){e(null)}})}}function c(){h&&(h.abort(),h=null)}a=a||{};var d="urn:mpeg:dash:resolve-to-zero:2013",e=this.context,f=(0,n.default)(e).getInstance(),h=(0,i.default)(e).create({errHandler:a.errHandler,metricsModel:a.metricsModel,mediaPlayerModel:a.mediaPlayerModel,requestModifier:a.requestModifier});return{load:b,reset:c}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(211),g=d(f),h=a(98),i=d(h),j=a(230),k=a(221),l=d(k),m=a(50),n=d(m),o=a(54),p=d(o),q=a(51),r=d(q),s=1;e.__dashjs_factory_name="XlinkLoader";var t=r.default.getClassFactory(e);t.XLINK_LOADER_ERROR_LOADING_FAILURE=s,r.default.updateClassFactory(e.__dashjs_factory_name,t),c.default=t,b.exports=c.default},{211:211,221:221,230:230,50:50,51:51,54:54,98:98}],100:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=function(){function a(){d(this,a),this.init()}return e(a,[{key:"init",value:function(){this.STREAM="stream",this.VIDEO="video",this.AUDIO="audio",this.TEXT="text",this.FRAGMENTED_TEXT="fragmentedText",this.EMBEDDED_TEXT="embeddedText",this.MUXED="muxed",this.IMAGE="image",this.LOCATION="Location",this.INITIALIZE="initialize",this.TEXT_SHOWING="showing",this.TEXT_HIDDEN="hidden",this.CC1="CC1",this.CC3="CC3",this.STPP="stpp",this.TTML="ttml",this.VTT="vtt",this.WVTT="wvtt",this.UTF8="utf-8",this.SUGGESTED_PRESENTATION_DELAY="suggestedPresentationDelay",this.SCHEME_ID_URI="schemeIdUri",this.START_TIME="starttime",this.ABR_STRATEGY_DYNAMIC="abrDynamic",this.ABR_STRATEGY_BOLA="abrBola",this.ABR_STRATEGY_THROUGHPUT="abrThroughput",this.MOVING_AVERAGE_SLIDING_WINDOW="slidingWindow",this.MOVING_AVERAGE_EWMA="ewma"}}]),a}(),g=new f;c.default=g,b.exports=c.default},{}],101:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=function(){function a(){d(this,a),this.init()}return e(a,[{key:"init",value:function(){this.TCP_CONNECTION="TcpList",this.HTTP_REQUEST="HttpList",this.TRACK_SWITCH="RepSwitchList",this.BUFFER_LEVEL="BufferLevel",this.BUFFER_STATE="BufferState",this.DVR_INFO="DVRInfo",this.DROPPED_FRAMES="DroppedFrames",this.SCHEDULING_INFO="SchedulingInfo",this.REQUESTS_QUEUE="RequestsQueue",this.MANIFEST_UPDATE="ManifestUpdate",this.MANIFEST_UPDATE_STREAM_INFO="ManifestUpdatePeriodInfo",this.MANIFEST_UPDATE_TRACK_INFO="ManifestUpdateRepresentationInfo",this.PLAY_LIST="PlayList",this.DVB_ERRORS="DVBErrors"}}]),a}(),g=new f;c.default=g,b.exports=c.default},{}],102:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=function(){function a(){d(this,a),this.init()}return e(a,[{key:"init",value:function(){this.CLEARKEY_KEYSTEM_STRING="org.w3.clearkey",this.WIDEVINE_KEYSTEM_STRING="com.widevine.alpha",this.PLAYREADY_KEYSTEM_STRING="com.microsoft.playready"}}]),a}(),g=new f;c.default=g,b.exports=c.default},{}],103:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(){ua=ra.log.bind(ta),e()}function b(a,b){Ra[a]=(0,A.default)(qa).create(),Ca[a]=b,Da[a]=Da[a]||{},Da[a].state=J,Ua[a]=!1,sa.on(s.default.LOADING_PROGRESS,pa,this),a==i.default.VIDEO&&(sa.on(s.default.QUALITY_CHANGE_RENDERED,j,this),Sa=(0,C.default)(qa).create(),na()),sa.on(s.default.METRIC_ADDED,l,this),Ta=(0,E.default)(qa).create({mediaPlayerModel:Oa})}function c(a){delete Ca[a]}function d(){va=(0,g.default)(qa).create({metricsModel:Va,dashMetrics:Wa,mediaPlayerModel:Oa,adapter:Ma}),va.initialize()}function e(){xa={video:!0,audio:!0},ya={},za={},Aa={},Ba={},Da={},Ca={},Ra={},Ua={},Fa=!1,Xa=!0,Ga=!1,void 0===Ha&&(Ha=!1),Qa=void 0,Sa=void 0,Ta=void 0,clearTimeout(Ea),Ea=null}function f(){e(),sa.off(s.default.LOADING_PROGRESS,pa,this),sa.off(s.default.QUALITY_CHANGE_RENDERED,j,this),sa.off(s.default.METRIC_ADDED,l,this),va&&va.reset()}function h(a){a&&(a.streamController&&(wa=a.streamController),a.domStorage&&(Pa=a.domStorage),a.mediaPlayerModel&&(Oa=a.mediaPlayerModel),a.metricsModel&&(Va=a.metricsModel),a.dashMetrics&&(Wa=a.dashMetrics),a.dashManifestModel&&(La=a.dashManifestModel),a.adapter&&(Ma=a.adapter),a.manifestModel&&(Ka=a.manifestModel),a.videoModel&&(Na=a.videoModel))}function j(a){a.mediaType===i.default.VIDEO&&(Qa=a.oldQuality,Sa.push(Qa,Na.getPlaybackQuality()))}function l(a){a.metric!==k.default.HTTP_REQUEST||!a.value||a.value.type!==F.HTTPRequest.MEDIA_SEGMENT_TYPE||a.mediaType!==i.default.AUDIO&&a.mediaType!==i.default.VIDEO||Ta.push(a.mediaType,a.value,Xa),a.metric!==k.default.BUFFER_LEVEL||a.mediaType!==i.default.AUDIO&&a.mediaType!==i.default.VIDEO||ca(a.mediaType,.001*a.value.level)}function n(a,b){var c=void 0;return ya[b]=ya[b]||{},ya[b].hasOwnProperty(a)||(ya[b][a]=0),c=ka(ya[b][a],a),c=la(c,a,ya[b][a]),c=oa(c,a)}function p(a){var b=Pa.getSavedBitrateSettings(a);if(!Aa.hasOwnProperty(a))if(Ba.hasOwnProperty(a)){var c=Ka.getValue(),d=La.getAdaptationForType(c,0,a).Representation;if(Array.isArray(d)){var e=Math.max(Math.round(d.length*Ba[a])-1,0);Aa[a]=d[e].bandwidth}else Aa[a]=0}else isNaN(b)?Aa[a]=a===i.default.VIDEO?K:L:Aa[a]=b;return Aa[a]}function r(a,b){Aa[a]=b}function t(a){return Ba.hasOwnProperty(a)?Ba[a]:null}function u(a,b){Ba[a]=b}function v(a){return Aa.hasOwnProperty("max")&&Aa.max.hasOwnProperty(a)?Aa.max[a]:NaN}function x(a){return Aa.hasOwnProperty("min")&&Aa.min.hasOwnProperty(a)?Aa.min[a]:NaN}function z(a,b){Aa.max=Aa.max||{},Aa.max[a]=b}function B(a,b){Aa.min=Aa.min||{},Aa.min[a]=b}function D(a){var b=v(a);return b?aa(Ca[a].getMediaInfo(),b):void 0}function G(a){var b=x(a);if(b){var c=ba(Ca[a].getMediaInfo()),d=aa(Ca[a].getMediaInfo(),b);return c[d]&&d<c.length-1&&c[d].bitrate<1e3*b&&d++,d}}function N(a){return Ba.hasOwnProperty("max")&&Ba.max.hasOwnProperty(a)?Ba.max[a]:1}function O(a,b){Ba.max=Ba.max||{},Ba.max[a]=b}function P(a){return xa[a]}function Q(a,b){xa[a]=b}function R(){return Fa}function S(a){Fa=a}function T(){return Ga}function U(a){Ga=a}function V(){return Xa}function W(a){Xa=a}function X(a){if(a&&Ca&&Ca[a]){var b=Ca[a].getStreamInfo(),c=b?b.id:null,d=ha(a),e=(0,w.default)(qa).create({abrController:ta,streamProcessor:Ca[a],currentValue:d,switchHistory:Ra[a],droppedFramesHistory:Sa,useBufferOccupancyABR:da(a)});if(Sa&&Sa.push(Qa,Na.getPlaybackQuality()),P(a)){var f=G(a),g=n(a,c),h=va.getMaxQuality(e),i=h.quality;if(void 0!==f&&i<f&&(i=f),i>g&&(i=g),Ra[a].push({oldValue:d,newValue:i}),i>y.default.NO_CHANGE&&i!=d)(Da[a].state===J||i>d)&&Z(a,d,i,g,h.reason);else if(ra.getLogToBrowserConsole()){var j=Wa.getCurrentBufferLevel(Va.getReadOnlyMetricsFor(a));ua("AbrController ("+a+") stay on "+d+"/"+g+" (buffer: "+j+")")}}}}function Y(a,b,c,d){var e=b.id,f=ha(a);if(null===c||isNaN(c)||c%1!=0)throw new Error("argument is not an integer");var g=n(a,e);c!==f&&c>=0&&c<=g&&Z(a,f,c,g,d)}function Z(a,b,c,d,e){if(a&&Ca[a]){var f=Ca[a].getStreamInfo(),g=f?f.id:null;if(ra.getLogToBrowserConsole()){var h=Wa.getCurrentBufferLevel(Va.getReadOnlyMetricsFor(a));ua("AbrController ("+a+") switch from "+b+" to "+c+"/"+d+" (buffer: "+h+") "+(e?JSON.stringify(e):"."))}ia(a,g,c),sa.trigger(s.default.QUALITY_CHANGE_REQUESTED,{mediaType:a,streamInfo:f,oldQuality:b,newQuality:c,reason:e})}}function $(a,b){Da[a].state=b}function _(a){return Da[a]?Da[a].state:null}function aa(a,b,c){if(Xa&&c&&Ca[a.type].getCurrentRepresentationInfo()&&Ca[a.type].getCurrentRepresentationInfo().fragmentDuration){c/=1e3;var d=Ca[a.type].getCurrentRepresentationInfo().fragmentDuration;if(c>d)return 0;b*=1-c/d}var e=ba(a);if(!e||0===e.length)return M;for(var f=e.length-1;f>=0;f--){if(1e3*b>=e[f].bitrate)return f}return 0}function ba(a){if(!a||!a.bitrateList)return null;for(var b=a.bitrateList,c=a.type,d=[],e=void 0,f=0,g=b.length;f<g;f++)e=new m.default,e.mediaType=c,e.qualityIndex=f,e.bitrate=b[f].bandwidth,e.width=b[f].width,e.height=b[f].height,e.scanType=b[f].scanType,d.push(e);return d}function ca(a,b){var c=Oa.getABRStrategy();if(c===i.default.ABR_STRATEGY_BOLA)return void(Ua[a]=!0);if(c===i.default.ABR_STRATEGY_THROUGHPUT)return void(Ua[a]=!1);var d=Oa.getStableBufferTime(),e=d,f=.5*d,g=Ua[a],h=b>(g?f:e);Ua[a]=h,h!==g&&ua(h?"AbrController ("+a+") switching from throughput to buffer occupancy ABR rule (buffer: "+b.toFixed(3)+").":"AbrController ("+a+") switching from buffer occupancy to throughput ABR rule (buffer: "+b.toFixed(3)+").")}function da(a){return Ua[a]}function ea(){return Ta}function fa(a){var b=a.type,c=a.streamInfo.id,d=a.representationCount-1;return ja(b,c,d),d}function ga(a){var b=a.id,c=ha(i.default.AUDIO),d=ha(i.default.VIDEO);return c===n(i.default.AUDIO,b)&&d===n(i.default.VIDEO,b)}function ha(a){if(a&&Ca[a]){var b=Ca[a].getStreamInfo(),c=b?b.id:null;if(c)return za[c]=za[c]||{},za[c].hasOwnProperty(a)||(za[c][a]=M),za[c][a]}return M}function ia(a,b,c){za[b]=za[b]||{},za[b][a]=c}function ja(a,b,c){ya[b]=ya[b]||{},ya[b][a]=c}function ka(a,b){var c=a;if(!Ca[b])return c;var d=G(b);void 0!==d&&(c=Math.max(a,d));var e=D(b);return void 0!==e&&(c=Math.min(c,e)),c}function la(a,b,c){var d=N(b);return isNaN(d)||d>=1||d<0?a:Math.min(a,Math.round(c*d))}function ma(a){Ha=a}function na(){var a=Ga&&window.hasOwnProperty("devicePixelRatio"),b=a?window.devicePixelRatio:1;Ia=Na.getClientWidth()*b,Ja=Na.getClientHeight()*b}function oa(a,b){if(b!==i.default.VIDEO||!Fa||!Ca[b])return a;Ha||na();var c=Ka.getValue(),d=La.getAdaptationForType(c,0,b).Representation,e=a;if(Ia>0&&Ja>0){for(;e>0&&d[e]&&Ia<d[e].width&&Ia-d[e-1].width<d[e].width-Ia;)e-=1;d.length-2>=e&&d[e].width===d[e+1].width&&(e=Math.min(a,e+1))}return e}function pa(a){var b=a.request.mediaType;if(P(b)){var c=Ca[b];if(!c)return;var d=(0,w.default)(qa).create({abrController:ta,streamProcessor:c,currentRequest:a.request,useBufferOccupancyABR:da(b)}),e=va.shouldAbandonFragment(d);if(e.quality>y.default.NO_CHANGE){var f=c.getFragmentModel();f.getRequests({state:o.default.FRAGMENT_MODEL_LOADING,index:a.request.index})[0]&&(f.abortRequests(),$(b,I),Ra[b].reset(),Ra[b].push({oldValue:ha(b,wa.getActiveStreamInfo()),newValue:e.quality,confidence:1,reason:e.reason}),Y(b,wa.getActiveStreamInfo(),e.quality,e.reason),clearTimeout(Ea),Ea=setTimeout(function(){$(b,J),Ea=null},Oa.getAbandonLoadTimeout()))}}}var qa=this.context,ra=(0,H.default)(qa).getInstance(),sa=(0,q.default)(qa).getInstance(),ta=void 0,ua=void 0,va=void 0,wa=void 0,xa=void 0,ya=void 0,za=void 0,Aa=void 0,Ba=void 0,Ca=void 0,Da=void 0,Ea=void 0,Fa=void 0,Ga=void 0,Ha=void 0,Ia=void 0,Ja=void 0,Ka=void 0,La=void 0,Ma=void 0,Na=void 0,Oa=void 0,Pa=void 0,Qa=void 0,Ra=void 0,Sa=void 0,Ta=void 0,Ua=void 0,Va=void 0,Wa=void 0,Xa=void 0;return ta={isPlayingAtTopQuality:ga,updateTopQualityIndex:fa,getThroughputHistory:ea,getBitrateList:ba,getQualityForBitrate:aa,getMaxAllowedBitrateFor:v,getMinAllowedBitrateFor:x,setMaxAllowedBitrateFor:z,setMinAllowedBitrateFor:B,getMaxAllowedIndexFor:D,getMinAllowedIndexFor:G,getMaxAllowedRepresentationRatioFor:N,setMaxAllowedRepresentationRatioFor:O,getInitialBitrateFor:p,setInitialBitrateFor:r,getInitialRepresentationRatioFor:t,setInitialRepresentationRatioFor:u,setAutoSwitchBitrateFor:Q,getAutoSwitchBitrateFor:P,getUseDeadTimeLatency:V,setUseDeadTimeLatency:W,setLimitBitrateByPortal:S,getLimitBitrateByPortal:R,getUsePixelRatioInLimitBitrateByPortal:T,setUsePixelRatioInLimitBitrateByPortal:U,getQualityFor:ha,getAbandonmentStateFor:_,setPlaybackQuality:Y,checkPlaybackQuality:X,getTopQualityIndexFor:n,setElementSize:na,setWindowResizeEventCalled:ma,createAbrRulesCollection:d,registerStreamType:b,unRegisterStreamType:c,setConfig:h,reset:f},a(),ta}Object.defineProperty(c,"__esModule",{value:!0});var f=a(176),g=d(f),h=a(100),i=d(h),j=a(101),k=d(j),l=a(210),m=d(l),n=a(141),o=d(n),p=a(50),q=d(p),r=a(54),s=d(r),t=a(51),u=d(t),v=a(172),w=d(v),x=a(173),y=d(x),z=a(174),A=d(z),B=a(171),C=d(B),D=a(175),E=d(D),F=a(230),G=a(49),H=d(G),I="abandonload",J="allowload",K=1e3,L=100,M=0;e.__dashjs_factory_name="AbrController";var N=u.default.getSingletonFactory(e);N.ABANDON_LOAD=I,N.QUALITY_DEFAULT=M,u.default.updateSingletonFactory(e.__dashjs_factory_name,N),c.default=N,b.exports=c.default},{100:100,101:101,141:141,171:171,172:172,173:173,174:174,175:175,176:176,210:210,230:230,49:49,50:50,51:51,54:54}],104:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a){r.invalidateSelectedIndexes(a.entry)}function b(){r=(0,g.default)(n).create(),t=(0,i.default)(n).create(),o.on(s.default.SERVICE_LOCATION_BLACKLIST_CHANGED,a,j)}function c(a){a.baseURLTreeModel&&(r=a.baseURLTreeModel),a.baseURLSelector&&(t=a.baseURLSelector),a.dashManifestModel&&(l=a.dashManifestModel)}function d(a){r.update(a),t.chooseSelectorFromManifest(a)}function e(a){var b=r.getForPath(a),c=b.reduce(function(a,b){var c=t.select(b);return c?(p.isRelative(c.url)?a.url=p.resolve(c.url,a.url):(a.url=c.url,a.serviceLocation=c.serviceLocation),a):new m.default},new m.default);if(!p.isRelative(c.url))return c}function f(){r.reset(),t.reset()}function h(a){r.setConfig({dashManifestModel:l}),t.setConfig({dashManifestModel:l}),d(a)}var j=void 0,l=void 0,n=this.context,o=(0,q.default)(n).getInstance(),p=(0,k.default)(n).getInstance(),r=void 0,t=void 0;return j={reset:f,initialize:h,resolve:e,setConfig:c},b(),j}Object.defineProperty(c,"__esModule",{value:!0});var f=a(140),g=d(f),h=a(193),i=d(h),j=a(206),k=d(j),l=a(82),m=d(l),n=a(51),o=d(n),p=a(50),q=d(p),r=a(54),s=d(r);e.__dashjs_factory_name="BaseURLController",c.default=o.default.getSingletonFactory(e),b.exports=c.default},{140:140,193:193,206:206,50:50,51:51,54:54,82:82}],105:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(a){return!!(g.length&&a&&a.length)&&-1!==g.indexOf(a)}function c(a){-1===g.indexOf(a)&&(g.push(a),h.trigger(j,{entry:a}))}function d(a){c(a.entry)}function e(){k&&h.on(k,d,this)}function f(){g=[]}a=a||{};var g=[],h=(0,i.default)(this.context).getInstance(),j=a.updateEventName,k=a.addBlacklistEventName;return e(),{add:c,contains:b,reset:f}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f),h=a(50),i=d(h);e.__dashjs_factory_name="BlackListController",c.default=g.default.getClassFactory(e),b.exports=c.default},{50:50,51:51}],106:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){za=(0,y.default)(ka).getInstance().log.bind(ya),Oa=(0,A.default)(ka).getInstance(),ia()}function c(){return G}function d(a){ea(a),Aa=ua.getQualityFor(wa,xa.getStreamInfo()),la.on(s.default.DATA_UPDATE_COMPLETED,V,this),la.on(s.default.INIT_FRAGMENT_LOADED,h,this),la.on(s.default.MEDIA_FRAGMENT_LOADED,l,this),la.on(s.default.QUALITY_CHANGE_REQUESTED,t,this),la.on(s.default.STREAM_COMPLETED,W,this),la.on(s.default.PLAYBACK_PROGRESS,H,this),
la.on(s.default.PLAYBACK_TIME_UPDATED,H,this),la.on(s.default.PLAYBACK_RATE_CHANGED,Z,this),la.on(s.default.PLAYBACK_SEEKING,v,this),la.on(s.default.WALLCLOCK_TIME_UPDATED,Y,this),la.on(s.default.CURRENT_TRACK_CHANGED,X,this,q.default.EVENT_PRIORITY_HIGH),la.on(s.default.SOURCEBUFFER_APPEND_COMPLETED,r,this),la.on(s.default.SOURCEBUFFER_REMOVE_COMPLETED,T,this)}function e(a){if(!a||!Ea||!xa)return null;var b=null;try{b=oa.createSourceBuffer(Ea,a),b&&b.hasOwnProperty(g.default.INITIALIZE)&&b.initialize(wa,xa)}catch(c){pa.mediaSourceError("Error creating "+wa+" source buffer.")}return ca(b),U(xa.getRepresentationInfoForQuality(Aa).MSETimeOffset),b}function f(){return!(!xa||!qa)&&xa.getStreamInfo().id===qa.getActiveStreamInfo().id}function h(a){a.fragmentModel===xa.getFragmentModel()&&(za("Init fragment finished loading saving to",wa+"'s init cache"),Oa.save(a.chunk),za("Append Init fragment",wa," with representationId:",a.chunk.representationId," and quality:",a.chunk.quality),n(a.chunk))}function j(a,b){var c=Oa.extract(a,b);c?(za("Append Init fragment",wa," with representationId:",c.representationId," and quality:",c.quality),n(c)):la.trigger(s.default.INIT_REQUESTED,{sender:ya})}function l(a){if(a.fragmentModel===xa.getFragmentModel()){var b=a.chunk,c=b.bytes,d=b.quality,e=xa.getRepresentationInfoForQuality(d),f=sa.getEventsFor(e.mediaInfo,xa),g=sa.getEventsFor(e,xa);if(f&&f.length>0||g&&g.length>0){var h=xa.getFragmentModel().getRequests({state:i.default.FRAGMENT_MODEL_EXECUTED,quality:d,index:b.index})[0],j=N(c,h,f,g);xa.getEventController().addInbandEvents(j)}n(b)}}function n(a){Ma=!0,Ja=a,oa.append(Ha,a),a.mediaInfo.type===g.default.VIDEO&&la.trigger(s.default.VIDEO_CHUNK_RECEIVED,{chunk:a})}function p(a){if(a&&a.length>0)for(var b=0,c=a.length;b<c;b++)za("Buffered Range for type:",wa,":",a.start(b)," - ",a.end(b))}function r(a){if(Ha===a.buffer){if(a.error){if(a.error.code===k.default.QUOTA_EXCEEDED_ERROR_CODE&&(Da=.8*oa.getTotalBufferedTime(Ha),za("Quota exceeded for type: "+wa+", Critical Buffer: "+Da),Da>0)){var b=Math.max(.2*Da,1),c=Da-b;na.setBufferToKeep(parseFloat(b).toFixed(5)),na.setBufferAheadToKeep(parseFloat(c).toFixed(5))}return void(a.error.code!==k.default.QUOTA_EXCEEDED_ERROR_CODE&&O()||(za("Clearing playback buffer to overcome quota exceed situation for type: "+wa),la.trigger(s.default.QUOTA_EXCEEDED,{sender:ya,criticalBufferLevel:Da}),w()))}Ja&&!isNaN(Ja.index)&&(Fa=Math.max(Ja.index,Fa),K());var d=oa.getAllRanges(Ha);p(d),H(),Ma=!1,Ja&&la.trigger(s.default.BYTES_APPENDED,{sender:ya,quality:Ja.quality,startTime:Ja.start,index:Ja.index,bufferedRanges:d})}}function t(a){Aa!==a.newQuality&&wa===a.mediaType&&xa.getStreamInfo().id===a.streamInfo.id&&(U(xa.getRepresentationInfoForQuality(a.newQuality).MSETimeOffset),Aa=a.newQuality)}function v(){Ba&&(Qa=!0,Ba=!1,Ga=Number.POSITIVE_INFINITY),wa!==g.default.FRAGMENTED_TEXT?w():H(),Pa=void 0}function w(){var a=x();a&&0!==a.length||H(),R(a)}function x(){var a=[];if(!Ha||!Ha.buffered||0===Ha.buffered.length)return a;var b=va.getTime(),c=Ha.buffered.end(Ha.buffered.length-1)+E,d=xa.getFragmentModel().getRequests({state:i.default.FRAGMENT_MODEL_EXECUTED,time:b,threshold:F})[0];if(d){var e={start:0,end:d.startTime-D},f=xa.getFragmentModel().getRequests({state:i.default.FRAGMENT_MODEL_EXECUTED,time:d.startTime-d.duration/2,threshold:F})[0];f&&f.startTime!=d.startTime&&(e.end=f.startTime),e.start<e.end&&e.end>Ha.buffered.start(0)&&a.push(e);var g={start:d.startTime+d.duration+D,end:c},h=xa.getFragmentModel().getRequests({state:i.default.FRAGMENT_MODEL_EXECUTED,time:d.startTime+d.duration+D,threshold:F})[0];h&&h.startTime!==d.startTime&&(g.start=h.startTime+h.duration+D),g.start<g.end&&g.start<c&&a.push(g)}else za("getAllRangesWithSafetyFactor for",wa,"- No request found in current time position, removing full buffer 0 -",c),a.push({start:0,end:c});return a}function z(){var a=va.getTime();if(Pa){var b=oa.getAllRanges(Ha);b&&b.length&&(a=Math.max(b.start(0),Pa))}return a}function H(){I(),J()}function I(){va&&(Ca=oa.getBufferLength(Ha,z()),la.trigger(s.default.BUFFER_LEVEL_UPDATED,{sender:ya,bufferLevel:Ca}),L())}function J(){f()&&(ma.addBufferState(wa,Ia,xa.getScheduleController().getBufferTarget()),ma.addBufferLevel(wa,new Date,1e3*Ca))}function K(){Fa>=Ga-1&&!Ba&&(Ba=!0,za("[BufferController]["+wa+"] checkIfBufferingCompleted trigger BUFFERING_COMPLETED"),la.trigger(s.default.BUFFERING_COMPLETED,{sender:ya,streamInfo:xa.getStreamInfo()}))}function L(){"audio"!==wa&&"video"!==wa||(Qa&&!Ba&&va&&va.getTimeToStreamEnd()-Ca<D&&(Qa=!1,Ba=!0,za("[BufferController]["+wa+"] checkIfSufficientBuffer trigger BUFFERING_COMPLETED"),la.trigger(s.default.BUFFERING_COMPLETED,{sender:ya,streamInfo:xa.getStreamInfo()})),Ca<D&&!Ba?M(C):(Ba||Ca>=na.getStableBufferTime())&&M(B))}function M(a){Ia===a||wa===g.default.FRAGMENTED_TEXT&&ta.getAllTracksAreDisabled()||(Ia=a,J(),la.trigger(s.default.BUFFER_LEVEL_STATE_CHANGED,{sender:ya,state:a,mediaType:wa,streamInfo:xa.getStreamInfo()}),la.trigger(a===B?s.default.BUFFER_LOADED:s.default.BUFFER_EMPTY,{mediaType:wa}),za(a===B?"Got enough buffer to start for "+wa:"Waiting for more buffer before starting playback for "+wa))}function N(a,b,c,d){for(var e=Math.max(isNaN(b.startTime)?0:b.startTime,0),f=[],g=[],h=c.concat(d),i=0,j=h.length;i<j;i++)f[h[i].schemeIdUri]=h[i];for(var k=(0,u.default)(ka).getInstance().parse(a),l=k.getBoxes("emsg"),i=0,j=l.length;i<j;i++){var m=sa.getEvent(l[i],f,e);m&&g.push(m)}return g}function O(){return oa.getTotalBufferedTime(Ha)<Da}function P(){Ha&&wa!==g.default.FRAGMENTED_TEXT&&(Ba||R(Q()))}function Q(){var a=[];if(!Ha||!Ha.buffered||0===Ha.buffered.length)return a;var b=va.getTime(),c=Ha.buffered,d={start:Math.max(0,b-na.getBufferToKeep()),end:b+na.getBufferAheadToKeep()},e=xa.getFragmentModel().getRequests({state:i.default.FRAGMENT_MODEL_EXECUTED,time:b,threshold:F})[0];if(e&&(d.start=Math.min(e.startTime,d.start),d.end=Math.max(e.startTime+e.duration,d.end)),za("getClearRanges for",wa,"- Remove buffer out of ",d.start," - ",d.end),c.start(0)<=d.start){for(var f={start:0,end:d.start},g=0;g<c.length&&c.end(g)<=d.start;g++)f.end=c.end(g);f.start<f.end&&a.push(f)}if(c.end(c.length-1)>=d.end){var h={start:d.end,end:c.end(c.length-1)+F};h.start<h.end&&a.push(h)}return a}function R(a){a&&Ha&&0!==a.length&&(Ra.push.apply(Ra,a),Na||S())}function S(){if(0!==Ra.length){var a=Ra.shift();za("Removing",wa,"buffer from:",a.start,"to",a.end),Na=!0;var b=va.getTime();b<a.end&&(Ba=!1,Fa=0,xa.getScheduleController().setSeekTarget(b),sa.setIndexHandlerTime(xa,b)),oa.remove(Ha,a.start,a.end,Ea)}}function T(a){if(Ha===a.buffer){za("Removed",wa,"buffer from:",a.from,"to",a.to);p(oa.getAllRanges(Ha)),0===Ra.length&&(Na=!1),Na?S():(I(),la.trigger(s.default.BUFFER_CLEARED,{sender:ya,from:a.from,to:a.to,hasEnoughSpaceToAppend:O()}))}}function U(a){Ha&&Ha.timestampOffset!==a&&!isNaN(a)&&(Ha.timestampOffset=a)}function V(a){a.sender.getStreamProcessor()!==xa||a.error||U(a.currentRepresentation.MSETimeOffset)}function W(a){a.fragmentModel===xa.getFragmentModel()&&(Ga=a.request.index,K())}function X(a){Ha&&a.newMediaInfo.type===wa&&a.newMediaInfo.streamInfo.id===xa.getStreamInfo().id&&ra.getSwitchMode(wa)===o.default.TRACK_SWITCH_MODE_ALWAYS_REPLACE&&Ha.buffered&&Ha.buffered.length>0&&(za("Clearing buffer because track changed - "+(Ha.buffered.end(Ha.buffered.length-1)+E)),R([{start:0,end:Ha.buffered.end(Ha.buffered.length-1)+E}]),Ga=Number.POSITIVE_INFINITY,xa.getFragmentModel().abortRequests())}function Y(){++Ka*(na.getWallclockTimeUpdateInterval()/1e3)>=na.getBufferPruningInterval()&&!Ma&&(Ka=0,P())}function Z(){L()}function $(){return wa}function _(){return xa}function aa(a){Pa=a}function ba(){return Ha}function ca(a){Ha=a}function da(){return Ca}function ea(a){Ea=a}function fa(){return Ea}function ga(){return Ba}function ha(){return Na}function ia(){Da=Number.POSITIVE_INFINITY,Ia=C,Aa=m.default.QUALITY_DEFAULT,Ga=Number.POSITIVE_INFINITY,Fa=0,Ja=null,La=!1,Ba=!1,Ma=!1,Na=!1,Qa=!1,Ca=0,Ka=0,Ra=[]}function ja(a){la.off(s.default.DATA_UPDATE_COMPLETED,V,this),la.off(s.default.QUALITY_CHANGE_REQUESTED,t,this),la.off(s.default.INIT_FRAGMENT_LOADED,h,this),la.off(s.default.MEDIA_FRAGMENT_LOADED,l,this),la.off(s.default.STREAM_COMPLETED,W,this),la.off(s.default.CURRENT_TRACK_CHANGED,X,this),la.off(s.default.PLAYBACK_PROGRESS,H,this),la.off(s.default.PLAYBACK_TIME_UPDATED,H,this),la.off(s.default.PLAYBACK_RATE_CHANGED,Z,this),la.off(s.default.PLAYBACK_SEEKING,v,this),la.off(s.default.WALLCLOCK_TIME_UPDATED,Y,this),la.off(s.default.SOURCEBUFFER_APPEND_COMPLETED,r,this),la.off(s.default.SOURCEBUFFER_REMOVE_COMPLETED,T,this),ia(),a||(oa.abort(Ea,Ha),oa.removeSourceBuffer(Ea,Ha)),Ha=null}a=a||{};var ka=this.context,la=(0,q.default)(ka).getInstance(),ma=a.metricsModel,na=a.mediaPlayerModel,oa=a.sourceBufferController,pa=a.errHandler,qa=a.streamController,ra=a.mediaController,sa=a.adapter,ta=a.textController,ua=a.abrController,va=a.playbackController,wa=a.type,xa=a.streamProcessor,ya=void 0,za=void 0,Aa=void 0,Ba=void 0,Ca=void 0,Da=void 0,Ea=void 0,Fa=void 0,Ga=void 0,Ha=void 0,Ia=void 0,Ja=void 0,Ka=void 0,La=void 0,Ma=void 0,Na=void 0,Oa=void 0,Pa=void 0,Qa=void 0,Ra=void 0;return ya={getBufferControllerType:c,initialize:d,createBuffer:e,getType:$,getStreamProcessor:_,setSeekStartTime:aa,getBuffer:ba,setBuffer:ca,getBufferLevel:da,setMediaSource:ea,getMediaSource:fa,getIsBufferingCompleted:ga,switchInitData:j,getIsPruningInProgress:ha,reset:ja},b(),ya}Object.defineProperty(c,"__esModule",{value:!0});var f=a(100),g=d(f),h=a(141),i=d(h),j=a(113),k=d(j),l=a(103),m=d(l),n=a(109),o=d(n),p=a(50),q=d(p),r=a(54),s=d(r),t=a(194),u=d(t),v=a(51),w=d(v),x=a(49),y=d(x),z=a(200),A=d(z),B="bufferLoaded",C="bufferStalled",D=.5,E=.5,F=.01,G="BufferController";e.__dashjs_factory_name=G;var H=w.default.getClassFactory(e);H.BUFFER_LOADED=B,H.BUFFER_EMPTY=C,w.default.updateClassFactory(e.__dashjs_factory_name,H),c.default=H,b.exports=c.default},{100:100,103:103,109:109,113:113,141:141,194:194,200:200,49:49,50:50,51:51,54:54}],107:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(){b()}function b(){G=!1,x={},y={},z={},A=null,B=100,C=B/1e3}function c(){if(!D||!E||!F)throw new Error("setConfig function has to be called previously")}function d(){null!==A&&G&&(clearInterval(A),A=null,G=!1)}function e(){c(),u("Start Event Controller"),G||isNaN(B)||(G=!0,A=setInterval(l,B))}function f(a){if(c(),x={},a)for(var b=0;b<a.length;b++){var d=a[b];x[d.id]=d,u("Add inline event with id "+d.id)}u("Added "+a.length+" inline events")}function g(a){c();for(var b=0;b<a.length;b++){var d=a[b];d.id in y?u("Repeated event with id "+d.id):(d.eventStream.schemeIdUri===r&&void 0===y[d.id]&&h(d),y[d.id]=d,u("Add inband event with id "+d.id))}}function h(a){if(a.eventStream.value==s){var b=a.eventStream.timescale||1,c=a.presentationTime/b,d=void 0;d=4294967295==a.presentationTime?NaN:(a.presentationTime+a.duration)/b,u("Manifest validity changed: Valid until: "+c+"; remaining duration: "+d),v.trigger(m.default.MANIFEST_VALIDITY_CHANGED,{id:a.id,validUntil:c,newDuration:d,newManifestValidAfter:NaN})}}function j(){if(z)for(var a=F.getTime(),b=Object.keys(z),c=0;c<b.length;c++){var d=b[c],e=z[d];null!==e&&(e.duration+e.presentationTime)/e.eventStream.timescale<a&&(u("Remove Event "+d+" at time "+a),e=null,delete z[d])}}function l(){o(y),o(x),j()}function n(){c(),E.refreshManifest()}function o(a){var b,c=F.getTime();if(a)for(var d=Object.keys(a),e=0;e<d.length;e++){var f=d[e],g=a[f];void 0!==g&&(0===(b=g.presentationTime/g.eventStream.timescale)||b<=c&&b+C>c)&&(u("Start Event "+f+" at "+c),g.duration>0&&(z[f]=g),g.eventStream.schemeIdUri==r&&g.eventStream.value==s?0===g.duration&&0===g.presentationTimeDelta||n():v.trigger(g.eventStream.schemeIdUri,{event:g}),delete a[f])}}function p(a){a&&(a.manifestModel&&(D=a.manifestModel),a.manifestUpdater&&(E=a.manifestUpdater),a.playbackController&&(F=a.playbackController))}function q(){d(),b()}var r="urn:mpeg:dash:event:2012",s=1,t=this.context,u=(0,i.default)(t).getInstance().log,v=(0,k.default)(t).getInstance(),w=void 0,x=void 0,y=void 0,z=void 0,A=void 0,B=void 0,C=void 0,D=void 0,E=void 0,F=void 0,G=void 0;return w={addInlineEvents:f,addInbandEvents:g,stop:d,start:e,setConfig:p,reset:q},a(),w}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f),h=a(49),i=d(h),j=a(50),k=d(j),l=a(54),m=d(l);e.__dashjs_factory_name="EventController",c.default=g.default.getClassFactory(e),b.exports=c.default},{49:49,50:50,51:51,54:54}],108:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){e(),q.on(t.default.FRAGMENT_LOADING_COMPLETED,k,w)}function c(a){var b=y[a];return b||(b=(0,l.default)(m).create({metricsModel:v,fragmentLoader:(0,n.default)(m).create({metricsModel:v,mediaPlayerModel:u,errHandler:s,requestModifier:(0,p.default)(m).getInstance()})}),y[a]=b),b}function d(a){return a&&a.type&&a.type===h.HTTPRequest.INIT_SEGMENT_TYPE}function e(){for(var a in y)y[a].reset();y={}}function f(){q.off(t.default.FRAGMENT_LOADING_COMPLETED,k,this),e()}function i(a,b,c){var d=new j.default;return d.streamId=c,d.mediaInfo=b.mediaInfo,d.segmentType=b.type,d.start=b.startTime,d.duration=b.duration,d.end=d.start+d.duration,d.bytes=a,d.index=b.index,d.quality=b.quality,d.representationId=b.representationId,d}function k(a){if(y[a.request.mediaType]===a.sender){var b=a.request,c=a.response,e=d(b),f=b.mediaInfo.streamInfo;if(a.error&&(a.request.mediaType!==g.default.AUDIO&&a.request.mediaType!==g.default.VIDEO||q.trigger(t.default.SERVICE_LOCATION_BLACKLIST_ADD,{entry:a.request.serviceLocation})),!c||!f)return void o("No "+b.mediaType+" bytes to push or stream is inactive.");var h=i(c,b,f.id);q.trigger(e?t.default.INIT_FRAGMENT_LOADED:t.default.MEDIA_FRAGMENT_LOADED,{chunk:h,fragmentModel:a.sender})}}a=a||{};var m=this.context,o=(0,x.default)(m).getInstance().log,q=(0,r.default)(m).getInstance(),s=a.errHandler,u=a.mediaPlayerModel,v=a.metricsModel,w=void 0,y=void 0;return w={getModel:c,isInitializationRequest:d,reset:f},b(),w}Object.defineProperty(c,"__esModule",{value:!0});var f=a(100),g=d(f),h=a(230),i=a(212),j=d(i),k=a(141),l=d(k),m=a(90),n=d(m),o=a(204),p=d(o),q=a(50),r=d(q),s=a(54),t=d(s),u=a(51),v=d(u),w=a(49),x=d(w);e.__dashjs_factory_name="FragmentController",c.default=v.default.getClassFactory(e),b.exports=c.default},{100:100,141:141,204:204,212:212,230:230,49:49,50:50,51:51,54:54,90:90}],109:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(){z()}function b(a,b){var c=l(a),e=d(a,b),f=[];if(a===g.default.FRAGMENTED_TEXT)return void h(e[0]);c||(c=P.getSavedMediaSettings(a),j(a,c)),e&&0!==e.length&&(c&&e.forEach(function(a){B(c,a)&&f.push(a)}),h(0===f.length?E(e):f.length>1?E(f):f[0]))}function c(a){var b=a?a.type:null,c=a?a.streamInfo.id:null,d=l(b);if(a&&w(b)){K[c]=K[c]||F();for(var f=K[c][b].list.length,g=0;g<f;g++)if(x(K[c][b].list[g],a))return;K[c][b].list.push(a),d&&B(d,a)&&!e(b,a.streamInfo)&&h(a)}}function d(a,b){if(!a||!b)return[];var c=b.id;return K[c]&&K[c][a]?K[c][a].list:[]}function e(a,b){return!a||!b||b&&!K[b.id]?null:K[b.id][a].current}function f(a){var b=a.type,c=a.streamInfo.id;return K[c]&&K[c][b]&&x(K[c][b].current,a)}function h(a){if(a){var b=a.type,c=a.streamInfo,d=c.id,f=e(b,c);if(K[d]&&K[d][b]&&(!f||!x(a,f))){K[d][b].current=a,f&&I.trigger(i.default.CURRENT_TRACK_CHANGED,{oldMediaInfo:f,newMediaInfo:a,switchMode:N[b]});var g=A(a);g&&K[d][b].storeLastSettings&&(g.roles&&(g.role=g.roles[0],delete g.roles),g.accessibility&&(g.accessibility=g.accessibility[0]),g.audioChannelConfiguration&&(g.audioChannelConfiguration=g.audioChannelConfiguration[0]),P.setSavedMediaSettings(b,g))}}}function j(a,b){a&&b&&(L[a]=b)}function l(a){return a?L[a]:null}function m(a,b){if(-1===Q.indexOf(b))return void H("track switch mode is not supported: "+b);N[a]=b}function n(a){return N[a]}function u(a){if(-1===R.indexOf(a))return void H("track selection mode is not supported: "+a);M=a}function v(){return M||t}function w(a){return a===g.default.AUDIO||a===g.default.VIDEO||a===g.default.TEXT||a===g.default.FRAGMENTED_TEXT||a===g.default.IMAGE}function x(a,b){var c=a.id===b.id,d=a.viewpoint===b.viewpoint,e=a.lang===b.lang,f=a.roles.toString()===b.roles.toString(),g=a.accessibility.toString()===b.accessibility.toString(),h=a.audioChannelConfiguration.toString()===b.audioChannelConfiguration.toString();return c&&d&&e&&f&&g&&h}function y(a){a&&(a.errHandler&&(O=a.errHandler),a.domStorage&&(P=a.domStorage))}function z(){K={},D(),C()}function A(a){var b={lang:a.lang,viewpoint:a.viewpoint,roles:a.roles,accessibility:a.accessibility,audioChannelConfiguration:a.audioChannelConfiguration};return b.lang||b.viewpoint||b.role&&b.role.length>0||b.accessibility&&b.accessibility.length>0||b.audioChannelConfiguration&&b.audioChannelConfiguration.length>0?b:null}function B(a,b){var c=!a.lang||a.lang===b.lang,d=!a.viewpoint||a.viewpoint===b.viewpoint,e=!a.role||!!b.roles.filter(function(b){return b===a.role})[0],f=!a.accessibility||!!b.accessibility.filter(function(b){return b===a.accessibility})[0],g=!a.audioChannelConfiguration||!!b.audioChannelConfiguration.filter(function(b){return b===a.audioChannelConfiguration})[0];return c&&d&&e&&f&&g}function C(){N={audio:q,video:p}}function D(){L={audio:null,video:null}}function E(a){var b=v(),c=[],d=function(a){var b=0,c=[],d=void 0;return a.forEach(function(a){d=Math.max.apply(Math,a.bitrateList.map(function(a){return a.bandwidth})),d>b?(b=d,c=[a]):d===b&&c.push(a)}),c},e=function(a){var b=0,c=[],d=void 0;return a.forEach(function(a){d=a.representationCount,d>b?(b=d,c=[a]):d===b&&c.push(a)}),c};switch(b){case r:c=d(a),c.length>1&&(c=e(c));break;case s:c=e(a),c.length>1&&(c=d(a));break;default:H("track selection mode is not supported: "+b)}return c[0]}function F(){return{audio:{list:[],storeLastSettings:!0,current:null},video:{list:[],storeLastSettings:!0,current:null},text:{list:[],storeLastSettings:!0,current:null},fragmentedText:{list:[],storeLastSettings:!0,current:null},image:{list:[],storeLastSettings:!0,current:null}}}var G=this.context,H=(0,o.default)(G).getInstance().log,I=(0,k.default)(G).getInstance(),J=void 0,K=void 0,L=void 0,M=void 0,N=void 0,O=void 0,P=void 0,Q=[q,p],R=[r,s];return J={checkInitialMediaSettingsForType:b,addTrack:c,getTracksFor:d,getCurrentTrackFor:e,isCurrentTrack:f,setTrack:h,setInitialSettings:j,getInitialSettings:l,setSwitchMode:m,getSwitchMode:n,setSelectionModeForInitialTrack:u,getSelectionModeForInitialTrack:v,isMultiTrackSupportedByType:w,isTracksEqual:x,setConfig:y,reset:z},a(),J}Object.defineProperty(c,"__esModule",{value:!0});var f=a(100),g=d(f),h=a(54),i=d(h),j=a(50),k=d(j),l=a(51),m=d(l),n=a(49),o=d(n),p="neverReplace",q="alwaysReplace",r="highestBitrate",s="widestRange",t=r;e.__dashjs_factory_name="MediaController";var u=m.default.getSingletonFactory(e);u.TRACK_SWITCH_MODE_NEVER_REPLACE=p,u.TRACK_SWITCH_MODE_ALWAYS_REPLACE=q,u.TRACK_SELECTION_MODE_HIGHEST_BITRATE=r,u.TRACK_SELECTION_MODE_WIDEST_RANGE=s,u.DEFAULT_INIT_TRACK_SELECTION_MODE=t,m.default.updateSingletonFactory(e.__dashjs_factory_name,u),c.default=u,b.exports=c.default},{100:100,49:49,50:50,51:51,54:54}],110:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(){var a="WebKitMediaSource"in window;return"MediaSource"in window?new MediaSource:a?new WebKitMediaSource:null}function b(a,b){var c=window.URL.createObjectURL(a);return b.setSource(c),c}function c(a){a.setSource(null)}function d(a,b){return a.duration!=b&&(a.duration=b),a.duration}function e(a,b,c){"function"==typeof a.setLiveSeekableRange&&"function"==typeof a.clearLiveSeekableRange&&"open"===a.readyState&&b>=0&&b<c&&(a.clearLiveSeekableRange(),a.setLiveSeekableRange(b,c))}function f(a){var b=a.sourceBuffers,c=b.length;if("open"===a.readyState){for(var d=0;d<c;d++){if(b[d].updating)return;if(0===b[d].buffered.length)return}a.endOfStream()}}return{createMediaSource:a,attachMediaSource:b,detachMediaSource:c,setDuration:d,setSeekable:e,signalEndOfStream:f}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f);e.__dashjs_factory_name="MediaSourceController",c.default=g.default.getSingletonFactory(e),b.exports=c.default},{51:51}],111:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(){A()}function b(a){ra=a,$(),sa=ra.manifestInfo.isDynamic,ma=ra.start,ca.on(o.default.DATA_UPDATE_COMPLETED,I,this),ca.on(o.default.BYTES_APPENDED,Y,this),ca.on(o.default.BUFFER_LEVEL_STATE_CHANGED,Z,this),ca.on(o.default.PERIOD_SWITCH_STARTED,c,this),ua&&(ua=!1,e())}function c(a){!sa&&a.fromStreamInfo&&void 0!==oa[a.fromStreamInfo.id]&&(delete qa[a.fromStreamInfo.id],delete oa[a.fromStreamInfo.id])}function d(){var a=D(!0),b=sa?a-ra.start:0;return parseFloat((a+(ra.duration-b)-n()).toFixed(5))}function e(){ka&&ka.getElement()?ka.play():ua=!0}function f(){return ka?ka.isPaused():null}function h(){ka&&ka.pause()}function j(){return ka?ka.isSeeking():null}function l(a){ka&&(ca.trigger(o.default.PLAYBACK_SEEK_ASKED),ba("Requesting seek to time: "+a),ka.setCurrentTime(a))}function n(){return ka?ka.getTime():null}function p(){return ka?ka.getPlaybackRate():null}function q(){return ka?ka.getPlayedRanges():null}function r(){return ka?ka.getEnded():null}function u(){return sa}function v(){return ea}function w(a){ma=a}function x(){return ma}function y(a,b){var c=ia.getMpd(ha.getValue()),d=void 0,e=void 0;if(d=ta.getUseSuggestedPresentationDelay()&&c.hasOwnProperty(g.default.SUGGESTED_PRESENTATION_DELAY)?c.suggestedPresentationDelay:ta.getLiveDelay()?ta.getLiveDelay():isNaN(a)?2*ra.manifestInfo.minBufferTime:a*ta.getLiveDelayFragmentCount(),b>0){var f=Math.max(b-10,b/2);e=Math.min(d,f)}else e=d;return pa=e,e}function z(){return pa}function A(){la=0,ma=NaN,na=null,ua=!1,oa={},pa=0,qa={},ka&&(ca.off(o.default.DATA_UPDATE_COMPLETED,I,this),ca.off(o.default.BUFFER_LEVEL_STATE_CHANGED,Z,this),ca.off(o.default.BYTES_APPENDED,Y,this),G(),_()),ka=null,ra=null,sa=null}function B(a){a&&(a.streamController&&(ea=a.streamController),a.metricsModel&&(fa=a.metricsModel),a.dashMetrics&&(ga=a.dashMetrics),a.manifestModel&&(ha=a.manifestModel),a.dashManifestModel&&(ia=a.dashManifestModel),a.mediaPlayerModel&&(ta=a.mediaPlayerModel),a.adapter&&(ja=a.adapter),a.videoModel&&(ka=a.videoModel))}function C(){var a=(0,k.default)(aa).getInstance().getURIFragmentData(),b=void 0;if(a){b={};var c=parseInt(a.r,10);c>=0&&ra&&c<ra.manifestInfo.DVRWindowSize&&null===a.t&&(a.t=Math.floor(Date.now()/1e3)-ra.manifestInfo.DVRWindowSize+c),b.fragS=parseInt(a.s,10),b.fragT=parseInt(a.t,10)}return b}function D(a,b){var c=void 0,d=NaN,e=C();if(d=e?a?ra.start:isNaN(e.fragS)?e.fragT:e.fragS:0,sa)isNaN(d)||((c=d-ra.manifestInfo.availableFrom.getTime()/1e3)>ma||c<(isNaN(b)?NaN:b-ra.manifestInfo.DVRWindowSize))&&(c=null),c=c||ma;else if(!isNaN(d)&&d<Math.max(ra.manifestInfo.duration,ra.duration)&&d>=0)c=d;else{var f=oa[ra.id];c=void 0!==f?Math.max(void 0!==f.audio?f.audio:0,void 0!==f.video?f.video:0,ra.start):ra.start}return c}function E(a){var b=fa.getReadOnlyMetricsFor(g.default.VIDEO)||fa.getReadOnlyMetricsFor(g.default.AUDIO),c=ga.getCurrentDVRInfo(b),d=c?c.range:null,e=void 0;if(!d)return NaN;if(a>d.end)e=Math.max(d.end-2*ra.manifestInfo.minBufferTime,d.start);else{if(!(a+.25<d.start))return a;e=d.start}return e}function F(){if(null===na){var a=function(){W()};na=setInterval(a,ta.getWallclockTimeUpdateInterval())}}function G(){clearInterval(na),na=null}function H(){if(!f()&&sa&&0!==ka.getReadyState()){var a=n(),b=E(a);!isNaN(b)&&b!==a&&l(b)}}function I(a){if(!a.error){var b=ja.convertDataToRepresentationInfo(a.currentRepresentation),c=b.mediaInfo.streamInfo;ra.id===c.id&&(ra=c,H())}}function J(){ca.trigger(o.default.CAN_PLAY)}function K(){ba("Native video element event: play"),H(),F(),ca.trigger(o.default.PLAYBACK_STARTED,{startTime:n()})}function L(){ba("Native video element event: playing"),ca.trigger(o.default.PLAYBACK_PLAYING,{playingTime:n()})}function M(){ba("Native video element event: pause"),ca.trigger(o.default.PLAYBACK_PAUSED,{ended:r()})}function N(){var a=n();ba("Seeking to: "+a),F(),ca.trigger(o.default.PLAYBACK_SEEKING,{seekTime:a})}function O(){ba("Native video element event: seeked"),ca.trigger(o.default.PLAYBACK_SEEKED)}function P(){var a=n();la=a,ca.trigger(o.default.PLAYBACK_TIME_UPDATED,{timeToEnd:d(),time:a})}function Q(){var a=Date.now();(!va||a>va+t)&&(va=a,P())}function R(){ca.trigger(o.default.PLAYBACK_PROGRESS)}function S(){var a=p();ba("Native video element event: ratechange: ",a),ca.trigger(o.default.PLAYBACK_RATE_CHANGED,{playbackRate:a})}function T(){ba("Native video element event: loadedmetadata"),ca.trigger(o.default.PLAYBACK_METADATA_LOADED),F()}function U(){ba("Native video element event: ended"),h(),G(),ca.trigger(o.default.PLAYBACK_ENDED)}function V(a){var b=a.target||a.srcElement;ca.trigger(o.default.PLAYBACK_ERROR,{error:b.error})}function W(){ca.trigger(o.default.WALLCLOCK_TIME_UPDATED,{isDynamic:sa,time:new Date}),u()&&f()&&Q()}function X(a,b){if(b&&b.length>0)for(var c=0,d=b.length;c<d;c++)if(a>=b.start(c)&&a<b.end(c))return!0;return!1}function Y(a){var b=void 0,c=void 0,d=a.bufferedRanges;if(d&&d.length&&(!oa[ra.id]||!0!==oa[ra.id].started)){var e=a.sender.getType();void 0===qa[ra.id]&&(qa[ra.id]=[]),qa[ra.id][e]=d,void 0===oa[ra.id]&&(oa[ra.id]=[],oa[ra.id].started=!1),void 0===oa[ra.id][e]&&(oa[ra.id][e]=Math.max(d.start(0),ra.start));var f=ea.isVideoTrackPresent(),g=ea.isAudioTrackPresent();c=D(!1),g&&f?isNaN(oa[ra.id].audio)||isNaN(oa[ra.id].video)||(oa[ra.id].audio<oa[ra.id].video?(b=oa[ra.id].video>c?oa[ra.id].video:c,d=qa[ra.id].audio):(b=oa[ra.id].audio>c?oa[ra.id].audio:c,d=qa[ra.id].video),X(b,d)&&(j()||l(b),oa[ra.id].started=!0)):oa[ra.id][e]&&(b=oa[ra.id][e]>c?oa[ra.id][e]:c,j()||l(b),oa[ra.id].started=!0)}}function Z(a){a.streamInfo.id===ra.id&&ka.setStallState(a.mediaType,a.state===i.default.BUFFER_EMPTY)}function $(){ka.addEventListener("canplay",J),ka.addEventListener("play",K),ka.addEventListener("playing",L),ka.addEventListener("pause",M),ka.addEventListener("error",V),ka.addEventListener("seeking",N),ka.addEventListener("seeked",O),ka.addEventListener("timeupdate",P),ka.addEventListener("progress",R),ka.addEventListener("ratechange",S),ka.addEventListener("loadedmetadata",T),ka.addEventListener("ended",U)}function _(){ka.removeEventListener("canplay",J),ka.removeEventListener("play",K),ka.removeEventListener("playing",L),ka.removeEventListener("pause",M),ka.removeEventListener("error",V),ka.removeEventListener("seeking",N),ka.removeEventListener("seeked",O),ka.removeEventListener("timeupdate",P),ka.removeEventListener("progress",R),ka.removeEventListener("ratechange",S),ka.removeEventListener("loadedmetadata",T),ka.removeEventListener("ended",U)}var aa=this.context,ba=(0,s.default)(aa).getInstance().log,ca=(0,m.default)(aa).getInstance(),da=void 0,ea=void 0,fa=void 0,ga=void 0,ha=void 0,ia=void 0,ja=void 0,ka=void 0,la=void 0,ma=void 0,na=void 0,oa=void 0,pa=void 0,qa=void 0,ra=void 0,sa=void 0,ta=void 0,ua=void 0,va=void 0;return da={initialize:b,setConfig:B,getStartTimeFromUriParameters:C,getStreamStartTime:D,getTimeToStreamEnd:d,getTime:n,getPlaybackRate:p,getPlayedRanges:q,getEnded:r,getIsDynamic:u,getStreamController:v,setLiveStartTime:w,getLiveStartTime:x,computeLiveDelay:y,getLiveDelay:z,play:e,isPaused:f,pause:h,isSeeking:j,seek:l,reset:A},a(),da}Object.defineProperty(c,"__esModule",{value:!0});var f=a(100),g=d(f),h=a(106),i=d(h),j=a(145),k=d(j),l=a(50),m=d(l),n=a(54),o=d(n),p=a(51),q=d(p),r=a(49),s=d(r),t=500;e.__dashjs_factory_name="PlaybackController",c.default=q.default.getSingletonFactory(e),b.exports=c.default},{100:100,106:106,145:145,49:49,50:50,51:51,54:54}],112:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){ra=(0,z.default)(ba).getInstance().log.bind(qa),_()}function c(){sa=pa.getFragmentModel(),Fa=ia.getScheduleWhilePaused(),Da=(0,n.default)(ba).create({abrController:ja,dashMetrics:fa,metricsModel:da,mediaPlayerModel:ia,textController:ma}),Ea=(0,p.default)(ba).create({adapter:ea,sourceBufferController:na,textController:ma}),ga.getIsTextTrack(oa)&&ca.on(v.default.TIMED_TEXT_REQUESTED,N,this),ca.on(v.default.QUALITY_CHANGE_REQUESTED,x,this),ca.on(v.default.DATA_UPDATE_STARTED,I,this),ca.on(v.default.DATA_UPDATE_COMPLETED,A,this),ca.on(v.default.FRAGMENT_LOADING_COMPLETED,E,this),ca.on(v.default.STREAM_COMPLETED,D,this),ca.on(v.default.STREAM_INITIALIZED,B,this),ca.on(v.default.BUFFER_LEVEL_STATE_CHANGED,K,this),ca.on(v.default.BUFFER_CLEARED,J,this),ca.on(v.default.BYTES_APPENDED,G,this),ca.on(v.default.INIT_REQUESTED,q,this),ca.on(v.default.QUOTA_EXCEEDED,L,this),ca.on(v.default.PLAYBACK_SEEKING,P,this),ca.on(v.default.PLAYBACK_STARTED,O,this),ca.on(v.default.PLAYBACK_RATE_CHANGED,Q,this),ca.on(v.default.PLAYBACK_TIME_UPDATED,F,this),ca.on(v.default.URL_RESOLUTION_FAILED,M,this),ca.on(v.default.FRAGMENT_LOADING_ABANDONED,H,this)}function d(){return!1===va}function e(){ta&&!pa.isBufferingCompleted()&&($(),va=!1,ua&&(ua=!1),o(0),ra("Schedule controller starting for "+oa))}function f(){va||(va=!0,clearTimeout(Ba),ra("Schedule controller stopping for "+oa))}function i(a,b){Ha[b]=Ha[b]||{};var c=ja.getTopQualityIndexFor(a,b);return Ha[b][a]!=c&&(ra("Top quality "+a+" index has changed from "+Ha[b][a]+" to "+c),Ha[b][a]=c,!0)}function k(){if(va||za||!pa.getBufferController()||ka.isPaused()&&!Fa)return void ra("ScheduleController "+oa+" - schedule stop!");m();var a=Ja.length>0,b=pa.getStreamInfo();if(Ka||a||i(ta.mediaInfo.type,b.id)||Da.execute(pa,oa,la.isVideoTrackPresent())){var c=function(){ra("ScheduleController - "+oa+" - getNextFragment");var a=pa.getFragmentController();if(Ka)ra("ScheduleController - "+oa+" - switch track has been asked, get init request for "+oa+" with representationid = "+ta.id),pa.switchInitData(ta.id),Ia=ta.quality,Ka=!1;else if(ta.quality!==Ia)ra("ScheduleController - "+oa+" - quality has changed, get init request for representationid = "+ta.id),Ia=ta.quality,pa.switchInitData(ta.id);else{var c=Ja.shift();if(a.isInitializationRequest(c))pa.switchInitData(c.representationId);else{var d=void 0;pa.getBufferController().getIsPruningInProgress()||!(d=Ea.execute(pa,c))&&b.manifestInfo&&b.manifestInfo.isDynamic&&ra("getNextFragment - "+oa+" - Playing at the bleeding live edge and frag is not available yet"),d?(ra("ScheduleController - "+oa+" - getNextFragment - request is "+d.url),sa.executeRequest(d)):(za=!1,o(500))}}};za=!0,a||Ka||ja.checkPlaybackQuality(oa),c()}else o(500)}function m(){var a=1.5*ta.fragmentDuration,b=sa.getRequests({state:r.default.FRAGMENT_MODEL_EXECUTED,time:ka.getTime()+a,threshold:0})[0];if(b&&-1===Ja.indexOf(b)&&!ga.getIsTextTrack(oa)){var c=ia.getFastSwitchEnabled(),d=pa.getBufferLevel(),e=ja.getAbandonmentStateFor(oa);c&&b.quality<ta.quality&&d>=a&&e!==j.default.ABANDON_LOAD?(w(b),ra("Reloading outdated fragment at index: ",b.index)):b.quality>ta.quality&&S(ka.getTime()+pa.getBufferLevel())}}function o(a){clearTimeout(Ba),Ba=setTimeout(k,a)}function q(a){a.sender&&a.sender.getStreamProcessor()===pa&&s(ta.quality)}function s(a){var b=ea.getInitRequest(pa,a);b&&(za=!0,sa.executeRequest(b))}function u(){Ka=!0}function w(a){Ja.push(a)}function x(a){if(oa===a.mediaType&&pa.getStreamInfo().id===a.streamInfo.id){if(null===(ta=pa.getRepresentationInfoForQuality(a.newQuality))||void 0===ta)throw new Error("Unexpected error! - currentRepresentationInfo is null or undefined");Z(new Date,h.PlayListTrace.REPRESENTATION_SWITCH_STOP_REASON),$()}}function y(a){if(ka&&sa){var b=sa.getRequests({state:r.default.FRAGMENT_MODEL_EXECUTED,time:ka.getTime(),threshold:0})[0]
;b&&ka.getTime()>=b.startTime&&(b.quality===Ga.quality&&b.adaptationIndex===Ga.adaptationIndex||!a||ca.trigger(v.default.QUALITY_CHANGE_RENDERED,{mediaType:oa,oldQuality:Ga.quality,newQuality:b.quality}),Ga={quality:b.quality,adaptationIndex:b.adaptationIndex})}}function A(a){a.error||a.sender.getStreamProcessor()!==pa||(ta=ea.convertDataToRepresentationInfo(a.currentRepresentation))}function B(a){a.error||pa.getStreamInfo().id!==a.streamInfo.id||(ta=pa.getCurrentRepresentationInfo(),ua&&(ka.getIsDynamic()?(ha.setTimeSyncCompleted(!0),C()):(Ca=ka.getStreamStartTime(!1),pa.getBufferController().setSeekStartTime(Ca))),va&&e())}function C(){var a=pa.getLiveEdgeFinder();if(a){var b=a.getLiveEdge(),c=ta.mediaInfo.streamInfo.manifestInfo.DVRWindowSize/2,d=b-ka.computeLiveDelay(ta.fragmentDuration,c),e=ea.getFragmentRequestForTime(pa,ta,d,{ignoreIsFinished:!0});ka.setLiveStartTime(e.startTime),Ca=ka.getStreamStartTime(!1,b),Ca>ta.mediaInfo.streamInfo.start+ta.mediaInfo.streamInfo.duration&&ka.seek(Ca);var f=fa.getCurrentManifestUpdate(da.getMetricsFor(g.default.STREAM));da.updateManifestUpdateInfo(f,{currentTime:Ca,presentationStartTime:b,latency:b-Ca,clientTimeOffset:ha.getClientTimeOffset()})}}function D(a){a.fragmentModel===sa&&(f(),za=!1,ra("[ScheduleController] Stream is complete"))}function E(a){a.sender===sa&&(ra("[ScheduleController] onFragmentLoadingCompleted for",oa),ga.getIsTextTrack(oa)&&(za=!1),a.error&&a.request.serviceLocation&&!va&&(w(a.request),za=!1,o(0)))}function F(){y(!0)}function G(a){a.sender.getStreamProcessor()===pa&&(za=!1,o(0))}function H(a){a.streamProcessor===pa&&(ra("[ScheduleController]["+oa+"] Request "+a.request.url+" has been aborted"),w(a.request),za=!1,o(0))}function I(a){a.sender.getStreamProcessor()===pa&&f()}function J(a){a.sender.getStreamProcessor()===pa&&(pa.getFragmentModel().syncExecutedRequestsWithBufferedRange(pa.getBufferController().getBuffer().buffered,pa.getStreamInfo().duration),a.hasEnoughSpaceToAppend&&va&&e())}function K(a){a.sender.getStreamProcessor()!==pa||a.state!==l.default.BUFFER_EMPTY||ka.isSeeking()||(ra("Buffer is empty! Stalling!"),Z(new Date,h.PlayListTrace.REBUFFERING_REASON))}function L(a){a.sender.getStreamProcessor()===pa&&(f(),za=!1)}function M(){sa.abortRequests(),f()}function N(a){a.sender.getStreamProcessor()===pa&&s(a.index)}function O(){!va&&Fa||e()}function P(a){Ca=a.seekTime,T(0),va&&e();var b=fa.getCurrentManifestUpdate(da.getMetricsFor(g.default.STREAM)),c=ta.DVRWindow&&ka?ta.DVRWindow.end-ka.getTime():NaN;da.updateManifestUpdateInfo(b,{latency:c}),za||o(0)}function Q(a){xa&&(xa.playbackspeed=a.playbackRate.toString())}function R(){return Ca}function S(a){Ca=a}function T(a){Aa=a}function U(){return Aa}function V(){return Da.getBufferTarget(pa,oa,la.isVideoTrackPresent())}function W(){return oa}function X(a){wa=a}function Y(a,b){Z(a,b),wa=null}function Z(a,b){if(wa&&!1===ya){var c=xa.start,d=a.getTime()-c.getTime();xa.duration=d,xa.stopreason=b,wa.trace.push(xa),ya=!0}}function $(){wa&&!0===ya&&ta&&(ya=!1,xa=new h.PlayListTrace,xa.representationid=ta.id,xa.start=new Date,xa.mstart=1e3*ka.getTime(),xa.playbackspeed=ka.getPlaybackRate().toString())}function _(){za=!1,Aa=0,Ca=NaN,wa=null,xa=null,ya=!0,ua=!0,Ia=NaN,Ga={quality:NaN,adaptationIndex:NaN},Ha={},Ja=[],va=!0,Ka=!0}function aa(){ca.off(v.default.DATA_UPDATE_STARTED,I,this),ca.off(v.default.DATA_UPDATE_COMPLETED,A,this),ca.off(v.default.BUFFER_LEVEL_STATE_CHANGED,K,this),ca.off(v.default.QUALITY_CHANGE_REQUESTED,x,this),ca.off(v.default.FRAGMENT_LOADING_COMPLETED,E,this),ca.off(v.default.STREAM_COMPLETED,D,this),ca.off(v.default.STREAM_INITIALIZED,B,this),ca.off(v.default.QUOTA_EXCEEDED,L,this),ca.off(v.default.BYTES_APPENDED,G,this),ca.off(v.default.BUFFER_CLEARED,J,this),ca.off(v.default.INIT_REQUESTED,q,this),ca.off(v.default.PLAYBACK_RATE_CHANGED,Q,this),ca.off(v.default.PLAYBACK_SEEKING,P,this),ca.off(v.default.PLAYBACK_STARTED,O,this),ca.off(v.default.PLAYBACK_TIME_UPDATED,F,this),ca.off(v.default.URL_RESOLUTION_FAILED,M,this),ca.off(v.default.FRAGMENT_LOADING_ABANDONED,H,this),ga.getIsTextTrack(oa)&&ca.off(v.default.TIMED_TEXT_REQUESTED,N,this),f(),y(!1),_()}a=a||{};var ba=this.context,ca=(0,t.default)(ba).getInstance(),da=a.metricsModel,ea=a.adapter,fa=a.dashMetrics,ga=a.dashManifestModel,ha=a.timelineConverter,ia=a.mediaPlayerModel,ja=a.abrController,ka=a.playbackController,la=a.streamController,ma=a.textController,na=a.sourceBufferController,oa=a.type,pa=a.streamProcessor,qa=void 0,ra=void 0,sa=void 0,ta=void 0,ua=void 0,va=void 0,wa=void 0,xa=void 0,ya=void 0,za=void 0,Aa=void 0,Ba=void 0,Ca=void 0,Da=void 0,Ea=void 0,Fa=void 0,Ga=void 0,Ha=void 0,Ia=void 0,Ja=void 0,Ka=void 0;return qa={initialize:c,getType:W,getSeekTarget:R,setSeekTarget:S,setTimeToLoadDelay:T,getTimeToLoadDelay:U,replaceRequest:w,switchTrackAsked:u,isStarted:d,start:e,stop:f,reset:aa,setPlayList:X,getBufferTarget:V,finalisePlayList:Y},b(),qa}Object.defineProperty(c,"__esModule",{value:!0});var f=a(100),g=d(f),h=a(232),i=a(103),j=d(i),k=a(106),l=d(k),m=a(183),n=d(m),o=a(184),p=d(o),q=a(141),r=d(q),s=a(50),t=d(s),u=a(54),v=d(u),w=a(51),x=d(w),y=a(49),z=d(y);e.__dashjs_factory_name="ScheduleController",c.default=x.default.getClassFactory(e),b.exports=c.default},{100:100,103:103,106:106,141:141,183:183,184:184,232:232,49:49,50:50,51:51,54:54}],113:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(a,b){var c=b.codec,d=null;try{if(c.match(/application\/mp4;\s*codecs="(stpp|wvtt).*"/i))throw new Error("not really supported");d=a.addSourceBuffer(c)}catch(e){if(!b.isText&&-1===c.indexOf('codecs="stpp')&&-1===c.indexOf('codecs="wvtt'))throw e;d=v.getTextSourceBuffer()}return d}function c(a,b){try{a.removeSourceBuffer(b)}catch(c){}}function d(a,b,c){var d=null,e=0,f=0,g=null,h=null,i=0,j=void 0,k=void 0,l=c||.15;try{d=a.buffered}catch(m){return null}if(null!==d&&void 0!==d){for(k=0,j=d.length;k<j;k++)if(e=d.start(k),f=d.end(k),null===g)i=Math.abs(e-b),b>=e&&b<f?(g=e,h=f):i<=l&&(g=e,h=f);else{if(!((i=e-h)<=l))break;h=f}if(null!==g)return{start:g,end:h}}return null}function e(a){try{return a.buffered}catch(b){return null}}function f(a){var b=e(a),c=0,d=void 0,f=void 0;if(!b)return c;for(f=0,d=b.length;f<d;f++)c+=b.end(f)-b.start(f);return c}function h(a,b,c){var e=void 0;return e=d(a,b,c),null===e?0:e.end-b}function j(a,b){if(!b)return null;var c=e(b),d=void 0,f=void 0,g=void 0,h=void 0,i=void 0,j=void 0,k=void 0,l=void 0,m=void 0;if(!c)return null;for(var n=0,o=c.length;n<o;n++){if(l=a.length>n,i=l?{start:a.start(n),end:a.end(n)}:null,d=c.start(n),f=c.end(n),!i)return m={start:d,end:f};if(g=i.start===d,h=i.end===f,!g||!h){if(g)m={start:i.end,end:f};else{if(!h)return m={start:d,end:f};m={start:d,end:i.start}}return j=a.length>n+1?{start:a.start(n+1),end:a.end(n+1)}:null,k=n+1<o?{start:c.start(n+1),end:c.end(n+1)}:null,!j||k&&k.start===j.start&&k.end===j.end||(m.end=j.start),m}}return null}function l(a,b){if(!a||!b)return void u.trigger(k.default.SOURCEBUFFER_APPEND_COMPLETED,{buffer:null,bytes:null,error:new g.default(o,q,null)});var c=b.bytes,d="append"in a?"append":"appendBuffer"in a?"appendBuffer":null,e="Object"===Object.prototype.toString.call(a).slice(8,-1);d&&s(a,function(){try{e?a[d](c,b):a[d](c),s(a,function(){u.trigger(k.default.SOURCEBUFFER_APPEND_COMPLETED,{buffer:a,bytes:c})})}catch(f){u.trigger(k.default.SOURCEBUFFER_APPEND_COMPLETED,{buffer:a,bytes:c,error:new g.default(f.code,f.message,null)})}})}function m(a,b,c,d){if(!a)return void u.trigger(k.default.SOURCEBUFFER_REMOVE_COMPLETED,{buffer:a,from:b,to:c,error:new g.default(p,r,null)});s(a,function(){try{b>=0&&c>b&&"ended"!==d.readyState&&a.remove(b,c),s(a,function(){u.trigger(k.default.SOURCEBUFFER_REMOVE_COMPLETED,{buffer:a,from:b,to:c})})}catch(e){u.trigger(k.default.SOURCEBUFFER_REMOVE_COMPLETED,{buffer:a,from:b,to:c,error:new g.default(e.code,e.message,null)})}})}function n(a,b){try{"open"===a.readyState?b.abort():b.resetEmbedded&&"ended"===a.readyState&&b.abort()}catch(c){}}function s(a,b){var c=void 0,d=50,e=function(){a.updating||(clearInterval(c),b())},f=function c(){a.updating||(a.removeEventListener("updateend",c,!1),b())};if(!a.updating)return void b();if("function"==typeof a.addEventListener)try{a.addEventListener("updateend",f,!1)}catch(g){c=setInterval(e,d)}else c=setInterval(e,d)}var t=this.context,u=(0,i.default)(t).getInstance(),v=a.textController;return{append:l,remove:m,abort:n,createSourceBuffer:b,removeSourceBuffer:c,getBufferRange:d,getAllRanges:e,getTotalBufferedTime:f,getBufferLength:h,getRangeDifference:j}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(211),g=d(f),h=a(50),i=d(h),j=a(54),k=d(j),l=a(51),m=d(l),n=22,o=1,p=2,q="buffer or chunk is not defined",r="buffer is not defined";e.__dashjs_factory_name="SourceBufferController";var s=m.default.getSingletonFactory(e);s.QUOTA_EXCEEDED_ERROR_CODE=n,m.default.updateSingletonFactory(e.__dashjs_factory_name,s),c.default=s,b.exports=c.default},{211:211,50:50,51:51,54:54}],114:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(){na=(0,F.default)(aa).getInstance(),oa=(0,H.default)(aa).getInstance(),ma=(0,J.default)(aa).getInstance(),ua=(0,z.default)(aa).getInstance(),va=(0,B.default)(aa).getInstance(),Z()}function b(a,b){T(),Ca=a,Ba=b,xa.initialize(),fa=(0,m.default)(aa).create(),fa.setConfig({manifestModel:ha,dashManifestModel:ia,mediaPlayerModel:Ja,manifestLoader:ga}),fa.initialize(),oa.setConfig({dashManifestModel:ia}),ca.on(q.default.TIME_SYNCHRONIZATION_COMPLETED,I,this),ca.on(q.default.PLAYBACK_SEEKING,d,this),ca.on(q.default.PLAYBACK_TIME_UPDATED,c,this),ca.on(q.default.PLAYBACK_ENDED,t,this),ca.on(q.default.PLAYBACK_ERROR,Q,this),ca.on(q.default.PLAYBACK_STARTED,e,this),ca.on(q.default.PLAYBACK_PAUSED,f,this),ca.on(q.default.MANIFEST_UPDATED,K,this),ca.on(q.default.STREAM_BUFFERING_COMPLETED,l,this),ca.on(q.default.MANIFEST_VALIDITY_CHANGED,X,this),ca.on(D.default.METRIC_ADDED,_,this)}function c(){if(M()){var a=Ha.getPlaybackQuality();a&&ka.addDroppedFrames(g.default.VIDEO,a)}}function d(a){var b=n(a.seekTime);Qa&&(h(),Pa=!1),b&&b!==za?(O(v.PlayListTrace.END_OF_PERIOD_STOP_REASON),w(za,b,a.seekTime)):O(v.PlayListTrace.USER_REQUEST_STOP_REASON),P(v.PlayList.SEEK_START_REASON)}function e(){ba("[StreamController][onPlaybackStarted]"),La?(La=!1,P(v.PlayList.INITIAL_PLAYOUT_START_REASON)):Ka&&(Ka=!1,P(v.PlayList.RESUME_FROM_PAUSE_START_REASON),j())}function f(a){ba("[StreamController][onPlaybackPaused]"),a.ended||(Ka=!0,O(v.PlayListTrace.USER_REQUEST_STOP_REASON),j())}function h(){ba("[StreamController][toggleEndPeriodTimer] stop end period timer."),clearTimeout(Qa),Qa=void 0}function j(){if(Pa)if(Qa)h();else{var a=Ia.getTimeToStreamEnd(),b=a>0?1e3*a:0;ba("[StreamController][toggleEndPeriodTimer] start-up of timer to notify PLAYBACK_ENDED event. It will be triggered in "+b+" milliseconds"),Qa=setTimeout(function(){ca.trigger(q.default.PLAYBACK_ENDED)},b)}}function l(){var a=R().isLast;Ga&&a?(ba("[StreamController][onStreamBufferingCompleted] calls signalEndOfStream of mediaSourceController."),ma.signalEndOfStream(Ga)):Ga&&void 0===Qa&&(ba("[StreamController][onStreamBufferingCompleted] end of period detected"),Pa=!0,!1===Ka&&j())}function n(a){var b=0,c=null,d=ya.length;d>0&&(b+=ya[0].getStartTime());for(var e=0;e<d;e++)if(c=ya[e],b=parseFloat((b+c.getDuration()).toFixed(5)),a<b)return c;return null}function p(a,b){for(var c=null,d=0,e=0,f=null,g=ya.length,h=0;h<g;h++){if(c=ya[h],e=c.getStartTime(),f=c.getDuration(),Number.isFinite(e)&&(d=e),c.getId()===b)return a-d;Number.isFinite(f)&&(d+=f)}return null}function r(){return za?za.getProcessors():[]}function t(){var a=u();a?(Oa=void 0,Na=void 0,w(za,a,NaN)):ba("StreamController no next stream found"),O(a?v.PlayListTrace.END_OF_PERIOD_STOP_REASON:v.PlayListTrace.END_OF_CONTENT_STOP_REASON),Qa=void 0,Pa=!1}function u(){if(za){var a=function(){var a=za.getStreamInfo().start,b=za.getStreamInfo().duration;return{v:ya.filter(function(c){return c.getStreamInfo().start===parseFloat((a+b).toFixed(5))})[0]}}();if("object"==typeof a)return a.v}}function w(a,b,c){!Da&&b&&a!==b&&(Da=!0,ca.trigger(q.default.PERIOD_SWITCH_STARTED,{fromStreamInfo:a?a.getStreamInfo():null,toStreamInfo:b.getStreamInfo()}),a&&(a.stopEventController(),a.deactivate()),za=b,Ia.initialize(za.getStreamInfo()),y(c,a))}function y(a,b){function c(){ba("MediaSource is open!"),window.URL.revokeObjectURL(d),Ga.removeEventListener("sourceopen",c),Ga.removeEventListener("webkitsourceopen",c),C(),A(a),b||ca.trigger(q.default.SOURCE_INITIALIZED)}var d=void 0;Ga?ma.detachMediaSource(Ha):Ga=ma.createMediaSource(),Ga.addEventListener("sourceopen",c,!1),Ga.addEventListener("webkitsourceopen",c,!1),d=ma.attachMediaSource(Ga,Ha),ba("MediaSource attached to element.  Waiting on open...")}function A(a){za.activate(Ga),Oa=N(g.default.AUDIO),Na=N(g.default.VIDEO),La||(isNaN(a)?function(){var a=Ia.getStreamStartTime(!0);za.getProcessors().forEach(function(b){ja.setIndexHandlerTime(b,a)})}():Ia.seek(a)),za.startEventController(),!Ca&&La||Ia.play(),Da=!1,ca.trigger(q.default.PERIOD_SWITCH_COMPLETED,{toStreamInfo:za.getStreamInfo()})}function C(){var a=za.getStreamInfo().manifestInfo.duration,b=ma.setDuration(Ga,a);ba("Duration successfully set to: "+b)}function E(a){for(var b=0,c=ya.length;b<c;b++)if(ya[b].getId()===a.id)return ya[b];return null}function G(){try{var a=ja.getStreamsInfo();if(0===a.length)throw new Error("There are no streams");var b=la.getCurrentManifestUpdate(ka.getMetricsFor(g.default.STREAM));ka.updateManifestUpdateInfo(b,{currentTime:Ia.getTime(),buffered:Ha.getBufferRange(),presentationStartTime:a[0].start,clientTimeOffset:xa.getClientTimeOffset()});for(var c=0,d=a.length;c<d;c++){var e=a[c],f=E(e);f?f.updateData(e):(f=(0,k.default)(aa).create({manifestModel:ha,dashManifestModel:ia,mediaPlayerModel:Ja,metricsModel:ka,dashMetrics:la,manifestUpdater:fa,adapter:ja,timelineConverter:xa,capabilities:ea,errHandler:wa,baseURLController:oa,domStorage:pa,abrController:qa,playbackController:Ia,mediaController:ra,textController:sa,sourceBufferController:ta,videoModel:Ha,streamController:da}),ya.push(f),f.initialize(e,Aa)),ka.addManifestUpdateStreamInfo(b,e.id,e.index,e.start,e.duration)}if(!za){var h=Ia.getStartTimeFromUriParameters(),i=null;if(h){i=n(isNaN(h.fragS)?h.fragT:h.fragS)}w(null,null!==i?i:ya[0],NaN)}ca.trigger(q.default.STREAMS_COMPOSED)}catch(j){wa.manifestError(j.message,"nostreamscomposed",ha.getValue()),Fa=!0,$()}}function I(){var a=ha.getValue();Aa&&(ca.trigger(q.default.PROTECTION_CREATED,{controller:Aa,manifest:a}),Aa.setMediaElement(Ha.getElement()),Ba&&Aa.setProtectionData(Ba)),G()}function K(a){a.error?(Fa=!0,$()):function(){var b=a.manifest;ja.updatePeriods(b);var c=ja.getStreamsInfo(b)[0],d=ja.getMediaInfoForType(c,g.default.VIDEO)||ja.getMediaInfoForType(c,g.default.AUDIO),e=void 0,f=void 0;d&&(e=ja.getDataForMedia(d),(f=ia.getRepresentationsForAdaptation(e)[0].useCalculatedLiveEdgeTime)&&(ba("SegmentTimeline detected using calculated Live Edge Time"),Ja.setUseManifestDateHeaderTimeSource(!1)));var h=ia.getUTCTimingSources(a.manifest),i=!ia.getIsDynamic(b)||f?h:h.concat(Ja.getUTCTimingSources()),j=va.isHTTPS(a.manifest.url);i.forEach(function(a){a.value.replace(/.*?:\/\//g,"")===s.default.DEFAULT_UTC_TIMING_SOURCE.value.replace(/.*?:\/\//g,"")&&(a.value=a.value.replace(j?new RegExp(/^(http:)?\/\//i):new RegExp(/^(https:)?\/\//i),j?"https://":"http://"),ba("Matching default timing source protocol to manifest protocol: ",a.value))}),oa.initialize(b),na.setConfig({metricsModel:ka,dashMetrics:la,baseURLController:oa}),na.initialize(i,Ja.getUseManifestDateHeaderTimeSource())}()}function L(){return Oa}function M(){return Na}function N(a){var b=!1;return za&&za.getProcessors().forEach(function(c){c.getMediaInfo().type===a&&(b=!0)}),b}function O(a,b){b=b||new Date,Ma&&(za&&za.getProcessors().forEach(function(c){var d=c.getScheduleController();d&&d.finalisePlayList(b,a)}),ka.addPlayList(Ma),Ma=null)}function P(a){Ma=new v.PlayList,Ma.start=new Date,Ma.mstart=1e3*Ia.getTime(),Ma.starttype=a,za&&za.getProcessors().forEach(function(a){var b=a.getScheduleController();b&&b.setPlayList(Ma)})}function Q(a){if(a.error){var b="";switch(a.error.code){case 1:b="MEDIA_ERR_ABORTED";break;case 2:b="MEDIA_ERR_NETWORK";break;case 3:b="MEDIA_ERR_DECODE";break;case 4:b="MEDIA_ERR_SRC_NOT_SUPPORTED";break;case 5:b="MEDIA_ERR_ENCRYPTED";break;default:b="UNKNOWN"}Ea=!0,a.error.message&&(b+=" ("+a.error.message+")"),a.error.msExtendedCode&&(b+=" (0x"+(a.error.msExtendedCode>>>0).toString(16).toUpperCase()+")"),ba("Video Element Error: "+b),a.error&&ba(a.error),wa.mediaSourceError(b),$()}}function R(){return za?za.getStreamInfo():null}function S(a){return ya.filter(function(b){return b.getId()===a})[0]}function T(){if(!(ga&&ga.hasOwnProperty("load")&&xa&&xa.hasOwnProperty("initialize")&&xa.hasOwnProperty("reset")&&xa.hasOwnProperty("getClientTimeOffset")))throw new Error("setConfig function has to be called previously")}function U(){if(!fa||!fa.hasOwnProperty("setManifest"))throw new Error("initialize function has to be called previously")}function V(a){T(),ga.load(a)}function W(a){U(),fa.setManifest(a)}function X(a){isNaN(a.newDuration)||C(a.newDuration)}function Y(a){a&&(a.capabilities&&(ea=a.capabilities),a.manifestLoader&&(ga=a.manifestLoader),a.manifestModel&&(ha=a.manifestModel),a.dashManifestModel&&(ia=a.dashManifestModel),a.mediaPlayerModel&&(Ja=a.mediaPlayerModel),a.protectionController&&(Aa=a.protectionController),a.adapter&&(ja=a.adapter),a.metricsModel&&(ka=a.metricsModel),a.dashMetrics&&(la=a.dashMetrics),a.errHandler&&(wa=a.errHandler),a.timelineConverter&&(xa=a.timelineConverter),a.videoModel&&(Ha=a.videoModel),a.playbackController&&(Ia=a.playbackController),a.domStorage&&(pa=a.domStorage),a.abrController&&(qa=a.abrController),a.mediaController&&(ra=a.mediaController),a.textController&&(sa=a.textController),a.sourceBufferController&&(ta=a.sourceBufferController))}function Z(){ya=[],Aa=null,Da=!1,za=null,Ea=!1,Fa=!1,Na=void 0,Oa=void 0,La=!0,Ka=!1,Ca=!0,Ma=null,Qa=void 0,Pa=!1}function $(){T(),na.reset(),O(Ea||Fa?v.PlayListTrace.FAILURE_STOP_REASON:v.PlayListTrace.USER_REQUEST_STOP_REASON);for(var a=0,b=ya?ya.length:0;a<b;a++){ya[a].reset(Ea)}ca.off(q.default.PLAYBACK_TIME_UPDATED,c,this),ca.off(q.default.PLAYBACK_SEEKING,d,this),ca.off(q.default.PLAYBACK_ERROR,Q,this),ca.off(q.default.PLAYBACK_STARTED,e,this),ca.off(q.default.PLAYBACK_PAUSED,f,this),ca.off(q.default.PLAYBACK_ENDED,t,this),ca.off(q.default.MANIFEST_UPDATED,K,this),ca.off(q.default.STREAM_BUFFERING_COMPLETED,l,this),ca.off(D.default.METRIC_ADDED,_,this),ca.off(q.default.MANIFEST_VALIDITY_CHANGED,X,this),oa.reset(),fa.reset(),ka.clearAllCurrentMetrics(),ha.setValue(null),ga.reset(),xa.reset(),ua.reset(),Ga&&(ma.detachMediaSource(Ha),Ga=null),Ha=null,Aa&&(Aa.setMediaElement(null),Aa=null,Ba=null,ha.getValue()&&ca.trigger(q.default.PROTECTION_DESTROYED,{data:ha.getValue().url})),ca.trigger(q.default.STREAM_TEARDOWN_COMPLETE),Z()}function _(a){a.metric===i.default.DVR_INFO&&a.mediaType===g.default.AUDIO&&ma.setSeekable(Ga,a.value.range.start,a.value.range.end)}var aa=this.context,ba=(0,x.default)(aa).getInstance().log,ca=(0,o.default)(aa).getInstance(),da=void 0,ea=void 0,fa=void 0,ga=void 0,ha=void 0,ia=void 0,ja=void 0,ka=void 0,la=void 0,ma=void 0,na=void 0,oa=void 0,pa=void 0,qa=void 0,ra=void 0,sa=void 0,ta=void 0,ua=void 0,va=void 0,wa=void 0,xa=void 0,ya=void 0,za=void 0,Aa=void 0,Ba=void 0,Ca=void 0,Da=void 0,Ea=void 0,Fa=void 0,Ga=void 0,Ha=void 0,Ia=void 0,Ja=void 0,Ka=void 0,La=void 0,Ma=void 0,Na=void 0,Oa=void 0,Pa=void 0,Qa=void 0;return da={initialize:b,getActiveStreamInfo:R,isVideoTrackPresent:M,isAudioTrackPresent:L,getStreamById:S,getStreamForTime:n,getTimeRelativeToStreamId:p,load:V,loadWithManifest:W,getActiveStreamProcessors:r,setConfig:Y,reset:$},a(),da}Object.defineProperty(c,"__esModule",{value:!0});var f=a(100),g=d(f),h=a(101),i=d(h),j=a(96),k=d(j),l=a(92),m=d(l),n=a(50),o=d(n),p=a(54),q=d(p),r=a(143),s=d(r),t=a(51),u=d(t),v=a(232),w=a(49),x=d(w),y=a(200),z=d(y),A=a(206),B=d(A),C=a(94),D=d(C),E=a(115),F=d(E),G=a(104),H=d(G),I=a(110),J=d(I);e.__dashjs_factory_name="StreamController",c.default=u.default.getSingletonFactory(e),b.exports=c.default},{100:100,101:101,104:104,110:110,115:115,143:143,200:200,206:206,232:232,49:49,50:50,51:51,54:54,92:92,94:94,96:96}],115:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a,b){K=b,H=0,I=!1,J=!1,L={"urn:mpeg:dash:utc:http-head:2014":y,"urn:mpeg:dash:utc:http-xsdate:2014":x.bind(null,o),"urn:mpeg:dash:utc:http-iso:2014":x.bind(null,p),"urn:mpeg:dash:utc:direct:2014":w,"urn:mpeg:dash:utc:http-head:2012":y,"urn:mpeg:dash:utc:http-xsdate:2012":x.bind(null,o),"urn:mpeg:dash:utc:http-iso:2012":x.bind(null,p),"urn:mpeg:dash:utc:direct:2012":w,"urn:mpeg:dash:utc:http-ntp:2014":s,"urn:mpeg:dash:utc:ntp:2014":s,"urn:mpeg:dash:utc:sntp:2014":s},e()||(B(a),f(!0))}function b(a){a&&(a.metricsModel&&(M=a.metricsModel),a.dashMetrics&&(N=a.dashMetrics),a.baseURLController&&(O=a.baseURLController))}function c(){return k()}function d(a){I=a}function e(){return I}function f(a){J=a}function h(a){H=a}function k(){return H}function m(a){var b=1e3,c=/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})(?::([0-9]*)(\.[0-9]*)?)?(?:([+\-])([0-9]{2})([0-9]{2}))?/,d=void 0,e=void 0,f=c.exec(a);return d=Date.UTC(parseInt(f[1],10),parseInt(f[2],10)-1,parseInt(f[3],10),parseInt(f[4],10),parseInt(f[5],10),f[6]&&(parseInt(f[6],10)||0),f[7]&&parseFloat(f[7])*b||0),f[9]&&f[10]&&(e=60*parseInt(f[9],10)+parseInt(f[10],10),d+=("+"===f[8]?-1:1)*e*60*b),new Date(d).getTime()}function o(a){var b=Date.parse(a);return isNaN(b)&&(b=m(a)),b}function p(a){return Date.parse(a)}function q(a){return Date.parse(a)}function s(a,b,c){c()}function w(a,b,c){var d=o(a);if(!isNaN(d))return void b(d);c()}function x(a,b,c,d,e){var f=void 0,g=void 0,h=!1,i=new XMLHttpRequest,k=e?j.HTTPRequest.HEAD:j.HTTPRequest.GET,l=b.match(/\S+/g);if(b=l.shift(),f=function(){h||(h=!0,l.length?x(a,l.join(" "),c,d,e):d())},g=function(){var b=void 0,d=void 0;200===i.status&&(b=e?i.getResponseHeader("Date"):i.response,d=a(b),isNaN(d)||(c(d),h=!0))},G.isRelative(b)){var m=O.resolve();m&&(b=G.resolve(b,m.url))}i.open(k,b),i.timeout=v||0,i.onload=g,i.onloadend=f,i.send()}function y(a,b,c){x(q,a,b,c,!0)}function z(){var a=M.getReadOnlyMetricsFor(g.default.STREAM),b=N.getLatestMPDRequestHeaderValueByID(a,"Date"),c=null!==b?new Date(b).getTime():Number.NaN;isNaN(c)?A(!0):(h(c-(new Date).getTime()),A(!1,c/1e3,H))}function A(a,b,c){d(!1),F.trigger(n.default.TIME_SYNCHRONIZATION_COMPLETED,{time:b,offset:c,error:a?new i.default(u):null})}function B(a,b){var c=b||0,e=a[c],f=function(a,b){var c=!a||!b;c&&K?z():A(c,a,b)};d(!0),e?L.hasOwnProperty(e.schemeIdUri)?L[e.schemeIdUri](e.value,function(a){var b=(new Date).getTime(),c=a-b;h(c),E("Local time:      "+new Date(b)),E("Server time:     "+new Date(a)),E("Difference (ms): "+c),f(a,c)},function(){B(a,c+1)}):B(a,c+1):(h(0),f())}function C(){f(!1),d(!1)}var D=this.context,E=(0,r.default)(D).getInstance().log,F=(0,l.default)(D).getInstance(),G=(0,t.default)(D).getInstance(),H=void 0,I=void 0,J=void 0,K=void 0,L=void 0,M=void 0,N=void 0,O=void 0;return{initialize:a,getOffsetToDeviceTimeMs:c,setConfig:b,reset:C}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(100),g=d(f),h=a(211),i=d(h),j=a(230),k=a(50),l=d(k),m=a(54),n=d(m),o=a(51),p=d(o),q=a(49),r=d(q),s=a(206),t=d(s),u=1,v=5e3;e.__dashjs_factory_name="TimeSyncController";var w=p.default.getSingletonFactory(e);w.TIME_SYNC_FAILED_ERROR_CODE=u,w.HTTP_TIMEOUT_MS=v,p.default.updateSingletonFactory(e.__dashjs_factory_name,w),c.default=w,b.exports=c.default},{100:100,206:206,211:211,230:230,49:49,50:50,51:51,54:54}],116:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){A.on(k.default.XLINK_ELEMENT_LOADED,j,C),H=(0,g.default)(z).create({errHandler:a.errHandler,metricsModel:a.metricsModel,mediaPlayerModel:a.mediaPlayerModel,requestModifier:a.requestModifier})}function c(a){a&&(D=a)}function d(a){a&&(E=a)}function e(a){var b=void 0;G=new o.default({escapeMode:!1,attributePrefix:"",arrayAccessForm:"property",emptyNodeForm:"object",stripWhitespaces:!1,enableToStringFunc:!1,ignoreRoot:!0,matchers:D}),F=a,b=m(F.Period_asArray,F,t,r),h(b,t,r)}function f(){A.off(k.default.XLINK_ELEMENT_LOADED,j,C),H&&(H.reset(),H=null)}function h(a,b,c){var d={},e=void 0,f=void 0;d.elements=a,d.type=b,d.resolveType=c,0===d.elements.length&&l(d);for(var g=0;g<d.elements.length;g++)e=d.elements[g],f=B.isHTTPURL(e.url)?e.url:e.originalContent.BaseURL+e.url,H.load(f,e,d)}function j(a){var b=void 0,c=void 0,d="";if(b=a.element,c=a.resolveObject,b.resolvedContent){var e=0;0===b.resolvedContent.indexOf("<?xml")&&(e=b.resolvedContent.indexOf("?>")+2),d=b.resolvedContent.substr(0,e)+"<response>"+b.resolvedContent.substr(e)+"</response>",b.resolvedContent=G.xml_str2json(d)}x(c)&&l(c)}function l(a){var b=[],c=void 0,d=void 0;if(n(a),a.resolveType===s&&A.trigger(k.default.XLINK_READY,{manifest:F}),a.resolveType===r)switch(a.type){case t:for(c=0;c<F[t+"_asArray"].length;c++)d=F[t+"_asArray"][c],d.hasOwnProperty(u+"_asArray")&&(b=b.concat(m(d[u+"_asArray"],d,u,r))),d.hasOwnProperty(v+"_asArray")&&(b=b.concat(m(d[v+"_asArray"],d,v,r)));h(b,u,r);break;case u:A.trigger(k.default.XLINK_READY,{manifest:F})}}function m(a,b,c,d){var e=[],f=void 0,g=void 0,h=void 0;for(g=a.length-1;g>=0;g--)f=a[g],f.hasOwnProperty("xlink:href")&&f["xlink:href"]===w&&a.splice(g,1);for(g=0;g<a.length;g++)f=a[g],f.hasOwnProperty("xlink:href")&&f.hasOwnProperty("xlink:actuate")&&f["xlink:actuate"]===d&&(h=p(f["xlink:href"],b,c,g,d,f),e.push(h));return e}function n(a){var b=[],c=void 0,d=void 0,e=void 0,f=void 0,g=void 0,h=void 0;for(f=a.elements.length-1;f>=0;f--){if(c=a.elements[f],d=c.type+"_asArray",!c.resolvedContent||y())delete c.originalContent["xlink:actuate"],delete c.originalContent["xlink:href"],b.push(c.originalContent);else if(c.resolvedContent)for(g=0;g<c.resolvedContent[d].length;g++)e=c.resolvedContent[d][g],b.push(e);for(c.parentElement[d].splice(c.index,1),h=0;h<b.length;h++)c.parentElement[d].splice(c.index+h,0,b[h]);b=[]}a.elements.length>0&&E.run(F)}function p(a,b,c,d,e,f){return{url:a,parentElement:b,type:c,index:d,resolveType:e,originalContent:f,resolvedContent:null,resolved:!1}}function x(a){var b=void 0,c=void 0;for(b=0;b<a.elements.length;b++)if(c=a.elements[b],!1===c.resolved)return!1;return!0}function y(){return!1}a=a||{};var z=this.context,A=(0,i.default)(z).getInstance(),B=(0,q.default)(z).getInstance(),C=void 0,D=void 0,E=void 0,F=void 0,G=void 0,H=void 0;return C={resolveManifestOnLoad:e,setMatchers:c,setIron:d,reset:f},b(),C}Object.defineProperty(c,"__esModule",{value:!0});var f=a(99),g=d(f),h=a(50),i=d(h),j=a(54),k=d(j),l=a(51),m=d(l),n=a(4),o=d(n),p=a(206),q=d(p),r="onLoad",s="onActuate",t="Period",u="AdaptationSet",v="EventStream",w="urn:mpeg:dash:resolve-to-zero:2013";e.__dashjs_factory_name="XlinkController",c.default=m.default.getClassFactory(e),b.exports=c.default},{206:206,4:4,50:50,51:51,54:54,99:99}],117:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a){return e=(0,g.default)(d).getInstance({eventBus:a.eventBus,metricsModel:a.metricsModel,metricsConstants:a.metricsConstants,events:a.events}),(0,k.default)(d).create(a)}function b(){return(0,o.default)(d).getInstance()}function c(){return(0,m.default)(d).getInstance()}var d=this.context,e=void 0;return{createMetricsReporting:a,getReportingFactory:b,getMetricsHandlerFactory:c}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(131),g=d(f),h=a(118),i=d(h),j=a(119),k=d(j),l=a(124),m=d(l),n=a(129),o=d(n);e.__dashjs_factory_name="MetricsReporting";var p=dashjs.FactoryMaker.getClassFactory(e);p.events=i.default,dashjs.FactoryMaker.updateClassFactory(e.__dashjs_factory_name,p),c.default=p,b.exports=c.default},{118:118,119:119,124:124,129:129,131:131}],118:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(c,"__esModule",{value:!0});var g=function(a,b,c){for(var d=!0;d;){var e=a,f=b,g=c;d=!1,null===e&&(e=Function.prototype);var h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var i=h.get;if(void 0===i)return;return i.call(g)}var j=Object.getPrototypeOf(e);if(null===j)return;a=j,b=f,c=g,d=!0,h=j=void 0}},h=a(55),i=d(h),j=function(a){function b(){e(this,b),g(Object.getPrototypeOf(b.prototype),"constructor",this).call(this),this.METRICS_INITIALISATION_COMPLETE="internal_metricsReportingInitialized",this.BECAME_REPORTING_PLAYER="internal_becameReportingPlayer"}return f(b,a),b}(i.default),k=new j;c.default=k,b.exports=c.default},{55:55}],119:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(b){if(!b.error){var c=Object.keys(f);(0,i.default)(h).getInstance({dashManifestModel:a.dashManifestModel,constants:a.constants}).getMetrics(b.manifest).forEach(function(b){var d=JSON.stringify(b);if(f.hasOwnProperty(d))c.splice(d,1);else try{var e=(0,g.default)(h).create(a);e.initialize(b),f[d]=e}catch(b){}}),c.forEach(function(a){f[a].reset(),delete f[a]}),j.trigger(k.default.METRICS_INITIALISATION_COMPLETE)}}function c(){Object.keys(f).forEach(function(a){f[a].reset()}),f={}}function d(){j.on(l.MANIFEST_UPDATED,b),j.on(l.STREAM_TEARDOWN_COMPLETE,c)}function e(){j.off(l.MANIFEST_UPDATED,b),j.off(l.STREAM_TEARDOWN_COMPLETE,c)}a=a||{};var f={},h=this.context,j=a.eventBus,l=a.events;return d(),{reset:e}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(120),g=d(f),h=a(133),i=d(h),j=a(118),k=d(j);e.__dashjs_factory_name="MetricsCollectionController",c.default=dashjs.FactoryMaker.getClassFactory(e),b.exports=c.default},{118:118,120:120,133:133}],120:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(b){try{f=(0,g.default)(h).create({mediaElement:a.mediaElement}),f.initialize(b.Range),e=(0,i.default)(h).create({log:a.log,metricsConstants:a.metricsConstants}),e.initialize(b.Reporting,f),d=(0,k.default)(h).create({log:a.log,eventBus:a.eventBus,metricsConstants:a.metricsConstants,events:a.events}),d.initialize(b.metrics,e)}catch(j){throw c(),j}}function c(){d&&d.reset(),e&&e.reset(),f&&f.reset()}a=a||{};var d=void 0,e=void 0,f=void 0,h=this.context;return{initialize:b,reset:c}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(122),g=d(f),h=a(123),i=d(h),j=a(121),k=d(j);e.__dashjs_factory_name="MetricsController",c.default=dashjs.FactoryMaker.getClassFactory(e),b.exports=c.default},{121:121,122:122,123:123}],121:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(a){e.forEach(function(b){b.handleNewMetric(a.metric,a.value,a.mediaType)})}function c(a,c){a.split(",").forEach(function(a,b,d){var f=void 0;if(-1!==a.indexOf("(")&&-1===a.indexOf(")")){var g=d[b+1];g&&-1===g.indexOf("(")&&-1!==g.indexOf(")")&&(a+=","+g,delete d[b+1])}(f=k.create(a,c))&&e.push(f)}),i.on(j.METRIC_ADDED,b,f),i.on(j.METRIC_UPDATED,b,f)}function d(){i.off(j.METRIC_ADDED,b,f),i.off(j.METRIC_UPDATED,b,f),e.forEach(function(a){return a.reset()}),e=[]}a=a||{};var e=[],f=void 0,h=this.context,i=a.eventBus,j=a.events,k=(0,g.default)(h).getInstance({log:a.log,eventBus:a.eventBus,
metricsConstants:a.metricsConstants});return f={initialize:c,reset:d}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(124),g=d(f);e.__dashjs_factory_name="MetricsHandlersController",c.default=dashjs.FactoryMaker.getClassFactory(e),b.exports=c.default},{124:124}],122:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(a){a&&a.length&&(a.forEach(function(a){var b=a.starttime,c=b+a.duration;j.add(b,c)}),f=!!a[0]._useWallClockTime)}function c(){j.clear()}function d(){j=(0,g.default)(h).create()}function e(){var a=j.length,b=void 0;if(!a)return!0;b=f?(new Date).getTime()/1e3:k.currentTime;for(var c=0;c<a;c+=1){var d=j.start(c),e=j.end(c);if(d<=b&&b<e)return!0}return!1}a=a||{};var f=!1,h=this.context,i=void 0,j=void 0,k=a.mediaElement;return i={initialize:b,reset:c,isEnabled:e},d(),i}Object.defineProperty(c,"__esModule",{value:!0});var f=a(196),g=d(f);e.__dashjs_factory_name="RangeController",c.default=dashjs.FactoryMaker.getClassFactory(e),b.exports=c.default},{196:196}],123:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(a,b){a.some(function(a){var c=f.create(a,b);if(c)return e.push(c),!0})}function c(){e.forEach(function(a){return a.reset()}),e=[]}function d(a,b){e.forEach(function(c){return c.report(a,b)})}var e=[],f=(0,g.default)(this.context).getInstance(a);return{initialize:b,reset:c,report:d}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(129),g=d(f);e.__dashjs_factory_name="ReportingController",c.default=dashjs.FactoryMaker.getClassFactory(e),b.exports=c.default},{129:129}],124:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(b,c){var d,g=b.match(f);if(g){try{d=j[g[1]](h).create({eventBus:a.eventBus,metricsConstants:a.metricsConstants}),d.initialize(g[1],c,g[3],g[5])}catch(i){d=null,e("MetricsHandlerFactory: Could not create handler for type "+g[1]+" with args "+g[3]+", "+g[5]+" ("+i.message+")")}return d}}function c(a,b){j[a]=b}function d(a){delete j[a]}a=a||{};var e=a.log,f=/([a-zA-Z]*)(\(([0-9]*)(\,\s*([a-zA-Z]*))?\))?/,h=this.context,j={BufferLevel:g.default,DVBErrors:i.default,HttpList:k.default,PlayList:m.default,RepSwitchList:m.default,TcpList:m.default};return{create:b,register:c,unregister:d}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(125),g=d(f),h=a(126),i=d(h),j=a(128),k=d(j),l=a(127),m=d(l);e.__dashjs_factory_name="MetricsHandlerFactory",c.default=dashjs.FactoryMaker.getSingletonFactory(e),b.exports=c.default},{125:125,126:126,127:127,128:128}],125:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){try{return Object.keys(o).map(function(a){return o[a]}).reduce(function(a,b){return a.level<b.level?a:b})}catch(a){return}}function c(){var a=b();a&&l!==a.t&&(l=a.t,h.report(j,a))}function d(a,b,d){b&&(i=n.validateN(d),h=b,j=n.reconstructFullMetricName(a,d),k=setInterval(c,i))}function e(){clearInterval(k),k=null,i=0,h=null,l=null}function f(a,b,c){a===p.BUFFER_LEVEL&&(o[c]=b)}a=a||{};var h=void 0,i=void 0,j=void 0,k=void 0,l=void 0,m=this.context,n=(0,g.default)(m).getInstance(),o=[],p=a.metricsConstants;return{initialize:d,reset:e,handleNewMetric:f}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(132),g=d(f);e.__dashjs_factory_name="BufferLevelHandler",c.default=dashjs.FactoryMaker.getClassFactory(e),b.exports=c.default},{132:132}],126:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){h.off(g.default.METRICS_INITIALISATION_COMPLETE,b,this),h.trigger(g.default.BECAME_REPORTING_PLAYER)}function c(a,c){c&&(f=c,h.on(g.default.METRICS_INITIALISATION_COMPLETE,b,this))}function d(){f=null}function e(a,b){a===i.DVB_ERRORS&&f&&f.report(a,b)}a=a||{};var f=void 0,h=a.eventBus,i=a.metricsConstants;return{initialize:c,reset:d,handleNewMetric:e}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(118),g=d(f);c.default=dashjs.FactoryMaker.getClassFactory(e),b.exports=c.default},{118:118}],127:[function(a,b,c){"use strict";function d(){function a(a,b){d=a,e=b}function b(){e=null,d=void 0}function c(a,b){a===d&&e&&e.report(d,b)}var d=void 0,e=void 0;return{initialize:a,reset:b,handleNewMetric:c}}Object.defineProperty(c,"__esModule",{value:!0}),d.__dashjs_factory_name="GenericMetricHandler",c.default=dashjs.FactoryMaker.getClassFactory(d),b.exports=c.default},{}],128:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){var a=l;a.length&&f&&f.report(j,a),l=[]}function c(a,c,d,e){c&&(h=m.validateN(d),f=c,e&&e.length&&(i=e),j=m.reconstructFullMetricName(a,d,e),k=setInterval(b,h))}function d(){clearInterval(k),k=null,h=null,i=null,l=[],f=null}function e(a,b){a===n.HTTP_REQUEST&&(i&&i!==b.type||l.push(b))}a=a||{};var f=void 0,h=void 0,i=void 0,j=void 0,k=void 0,l=[],m=(0,g.default)(this.context).getInstance(),n=a.metricsConstants;return{initialize:c,reset:d,handleNewMetric:e}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(132),g=d(f);e.__dashjs_factory_name="HttpListHandler",c.default=dashjs.FactoryMaker.getClassFactory(e),b.exports=c.default},{132:132}],129:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(a,b){var c=void 0;try{c=e[a.schemeIdUri](f).create({metricsConstants:i}),c.initialize(a,b)}catch(d){c=null,h("ReportingFactory: could not create Reporting with schemeIdUri "+a.schemeIdUri+" ("+d.message+")")}return c}function c(a,b){e[a]=b}function d(a){delete e[a]}a=a||{};var e={"urn:dvb:dash:reporting:2014":g.default},f=this.context,h=a.log,i=a.metricsConstants;return{create:b,register:c,unregister:d}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(130),g=d(f);e.__dashjs_factory_name="ReportingFactory",c.default=dashjs.FactoryMaker.getSingletonFactory(e),b.exports=c.default},{130:130}],130:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(a,b,c){var d=new XMLHttpRequest,e=function(){var a=q.indexOf(d);-1!==a&&(q.splice(a,1),d.status>=200&&d.status<300?b&&b():c&&c())};q.push(d);try{d.open("GET",a),d.onloadend=e,d.onerror=e,d.send()}catch(f){d.onerror()}}function c(a,c){Array.isArray(c)||(c=[c]),l&&o.isEnabled()&&c.forEach(function(c){var d=h.serialise(c);k&&a!==r.DVB_ERRORS&&(d="metricname="+a+"&"+d),d=n+"?"+d,b(d,null,function(){l=!1})})}function d(a,b){var c=void 0;if(o=b,!(n=a["dvb:reportingUrl"]))throw new Error("required parameter missing (dvb:reportingUrl)");m||(c=a["dvb:probability"]||a["dvb:priority"]||0,c&&(1e3===c||c/1e3>=j.random())&&(l=!0),m=!0)}function e(){p||(q.forEach(function(a){return a.abort()}),q=[]),m=!1,l=!1,n=null,o=null}a=a||{};var f=this.context,h=(0,g.default)(f).getInstance(),j=(0,i.default)(f).getInstance(),k=!0,l=!1,m=!1,n=null,o=null,p=!0,q=[],r=a.metricsConstants;return{report:c,initialize:d,reset:e}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(134),g=d(f),h=a(135),i=d(h);e.__dashjs_factory_name="DVBReporting",c.default=dashjs.FactoryMaker.getClassFactory(e),b.exports=c.default},{134:134,135:135}],131:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(a){var b=new g.default;if(p){for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);b.mpdurl||(b.mpdurl=p.originalUrl||p.url),b.terror||(b.terror=new Date),o.addDVBErrors(b)}}function c(a){a.error||(p=a.manifest)}function d(a){b({errorcode:g.default.BASE_URL_CHANGED,servicelocation:a.entry})}function e(){b({errorcode:g.default.BECAME_REPORTER})}function f(a){(0===a.responsecode||a.responsecode>=400||a.responsecode<100||a.responsecode>=600)&&b({errorcode:a.responsecode||g.default.CONNECTION_ERROR,url:a.url,terror:a.tresponse,servicelocation:a._serviceLocation})}function h(a){switch(a.metric){case q.HTTP_REQUEST:f(a.value)}}function j(a){var c=a.error?a.error.code:0,d=void 0;switch(c){case MediaError.MEDIA_ERR_NETWORK:d=g.default.CONNECTION_ERROR;break;case MediaError.MEDIA_ERR_DECODE:d=g.default.CORRUPT_MEDIA_OTHER;break;default:return}b({errorcode:d})}function k(){n.on(r.MANIFEST_UPDATED,c,m),n.on(r.SERVICE_LOCATION_BLACKLIST_CHANGED,d,m),n.on(r.METRIC_ADDED,h,m),n.on(r.METRIC_UPDATED,h,m),n.on(r.PLAYBACK_ERROR,j,m),n.on(i.default.BECAME_REPORTING_PLAYER,e,m)}function l(){n.off(r.MANIFEST_UPDATED,c,m),n.off(r.SERVICE_LOCATION_BLACKLIST_CHANGED,d,m),n.off(r.METRIC_ADDED,h,m),n.off(r.METRIC_UPDATED,h,m),n.off(r.PLAYBACK_ERROR,j,m),n.off(i.default.BECAME_REPORTING_PLAYER,e,m)}a=a||{};var m=void 0,n=a.eventBus,o=a.metricsModel,p=void 0,q=a.metricsConstants,r=a.events;return m={initialise:k,reset:l},k(),m}Object.defineProperty(c,"__esModule",{value:!0});var f=a(136),g=d(f),h=a(118),i=d(h);e.__dashjs_factory_name="DVBErrorsTranslator",c.default=dashjs.FactoryMaker.getSingletonFactory(e),b.exports=c.default},{118:118,136:136}],132:[function(a,b,c){"use strict";function d(){return{reconstructFullMetricName:function(a,b,c){var d=a;return b&&(d+="("+b,c&&c.length&&(d+=","+c),d+=")"),d},validateN:function(a){if(!a)throw new Error("missing n");if(isNaN(a))throw new Error("n is NaN");if(a<0)throw new Error("n must be positive");return a}}}Object.defineProperty(c,"__esModule",{value:!0}),d.__dashjs_factory_name="HandlerHelpers",c.default=dashjs.FactoryMaker.getSingletonFactory(d),b.exports=c.default},{}],133:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(a,b,c){var f,g,h=d.getMpd(a),i=0;return b?i=h.availabilityStartTime.getTime()/1e3:(f=this.getRegularPeriods(h),f.length&&(i=f[0].start)),g=i,c&&c.hasOwnProperty(e.START_TIME)&&(g+=c.starttime),g}function c(a){var c=[];return a.Metrics_asArray&&a.Metrics_asArray.forEach(function(f){var h=new g.default,j=d.getIsDynamic(a);f.hasOwnProperty("metrics")&&(h.metrics=f.metrics,f.Range_asArray&&f.Range_asArray.forEach(function(c){var e=new i.default;e.starttime=b(a,j,c),c.hasOwnProperty("duration")?e.duration=c.duration:e.duration=d.getDuration(a),e._useWallClockTime=j,h.Range.push(e)}),f.Reporting_asArray&&(f.Reporting_asArray.forEach(function(a){var b=new k.default;if(a.hasOwnProperty(e.SCHEME_ID_URI)){b.schemeIdUri=a.schemeIdUri;for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);h.Reporting.push(b)}}),c.push(h)))}),c}a=a||{};var d=a.dashManifestModel,e=a.constants;return{getMetrics:c}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(137),g=d(f),h=a(138),i=d(h),j=a(139),k=d(j);e.__dashjs_factory_name="ManifestParsing",c.default=dashjs.FactoryMaker.getSingletonFactory(e),b.exports=c.default},{137:137,138:138,139:139}],134:[function(a,b,c){"use strict";function d(){function a(b){var c=[],d=[],e=void 0,f=void 0;for(e in b)if(b.hasOwnProperty(e)&&0!==e.indexOf("_")){if(f=b[e],void 0!==f&&null!==f||(f=""),Array.isArray(f)){if(!f.length)continue;d=[],f.forEach(function(b){var c="Object"!==Object.prototype.toString.call(b).slice(8,-1);d.push(c?b:a(b))}),f=d.map(encodeURIComponent).join(",")}else"string"==typeof f?f=encodeURIComponent(f):f instanceof Date?f=f.toISOString():"number"==typeof f&&(f=Math.round(f));c.push(e+"="+f)}return c.join("&")}return{serialise:a}}Object.defineProperty(c,"__esModule",{value:!0}),d.__dashjs_factory_name="MetricSerialiser",c.default=dashjs.FactoryMaker.getSingletonFactory(d),b.exports=c.default},{}],135:[function(a,b,c){"use strict";function d(){function a(){c&&(g||(g=new d(f)),c.getRandomValues(g),h=0)}function b(b,d){var f=void 0;return b||(b=0),d||(d=1),c?(h===g.length&&a(),f=g[h]/e,h+=1):f=Math.random(),f*(d-b)+b}var c=window.crypto||window.msCrypto,d=Uint32Array,e=Math.pow(2,8*d.BYTES_PER_ELEMENT)-1,f=10,g=void 0,h=void 0,i=void 0;return i={random:b},a(),i}Object.defineProperty(c,"__esModule",{value:!0}),d.__dashjs_factory_name="RNG",c.default=dashjs.FactoryMaker.getSingletonFactory(d),b.exports=c.default},{}],136:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.mpdurl=null,this.errorcode=null,this.terror=null,this.url=null,this.ipaddress=null,this.servicelocation=null};e.SSL_CONNECTION_FAILED_PREFIX="SSL",e.DNS_RESOLUTION_FAILED="C00",e.HOST_UNREACHABLE="C01",e.CONNECTION_REFUSED="C02",e.CONNECTION_ERROR="C03",e.CORRUPT_MEDIA_ISOBMFF="M00",e.CORRUPT_MEDIA_OTHER="M01",e.BASE_URL_CHANGED="F00",e.BECAME_REPORTER="S00",c.default=e,b.exports=c.default},{}],137:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.metrics="",this.Range=[],this.Reporting=[]};c.default=e,b.exports=c.default},{}],138:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.starttime=0,this.duration=1/0,this._useWallClockTime=!1};c.default=e,b.exports=c.default},{}],139:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.schemeIdUri="",this.value=""};c.default=e,b.exports=c.default},{}],140:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(){function a(){i()}function b(a){a.dashManifestModel&&(o=a.dashManifestModel)}function c(a,b,c){var d=o.getBaseURLsFromElement(c);a[b]?q.areEqual(d,a[b].data.baseUrls)||(a[b].data.baseUrls=d,a[b].data.selectedIdx=k):a[b]=new l(d)}function d(a){var b=o.getBaseURLsFromElement(a);q.areEqual(b,n.data.baseUrls)||(n.data.baseUrls=b,n.data.selectedIdx=k),a.Period_asArray&&a.Period_asArray.forEach(function(a,b){c(n.children,b,a),a.AdaptationSet_asArray&&a.AdaptationSet_asArray.forEach(function(a,d){c(n.children[b].children,d,a),a.Representation_asArray&&a.Representation_asArray.sort(o.getRepresentationSortFunction()).forEach(function(a,e){c(n.children[b].children[d].children,e,a)})})})}function e(a,b){var c=b||n;a(c.data),c.children&&c.children.forEach(function(b){return e(a,b)})}function f(a){e(function(b){isNaN(b.selectedIdx)||a===b.baseUrls[b.selectedIdx].serviceLocation&&(b.selectedIdx=k)})}function g(a){d(a)}function i(){n=new l}function j(a){var b=n,c=[b.data];return a&&a.forEach(function(a){(b=b.children[a])&&c.push(b.data)}),c.filter(function(a){return a.baseUrls.length})}var m=void 0,n=void 0,o=void 0,p=this.context,q=(0,h.default)(p).getInstance();return m={reset:i,update:g,getForPath:j,invalidateSelectedIndexes:f,setConfig:b},a(),m}Object.defineProperty(c,"__esModule",{value:!0});var g=a(203),h=d(g),i=a(51),j=d(i),k=NaN,l=function a(b,c){e(this,a),this.data={baseUrls:b||null,selectedIdx:c||k},this.children=[]};f.__dashjs_factory_name="BaseURLTreeModel",c.default=j.default.getClassFactory(f),b.exports=c.default},{203:203,51:51}],141:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){B(),F.on(i.default.LOADING_COMPLETED,z,I),F.on(i.default.LOADING_ABANDONED,A,I)}function c(a){J=a}function d(){return J}function e(a){var b=function(a,b){return a.url===b.url},c=function(a,b){return a.action===m.default.ACTION_COMPLETE&&a.action===b.action},d=function(a,b){return!isNaN(a.index)&&a.startTime===b.startTime&&a.adaptationIndex===b.adaptationIndex},e=function(a,b){return isNaN(a.index)&&isNaN(b.index)&&a.quality===b.quality},f=function(f){var g=!1;return f.some(function(f){if(b(a,f)&&(d(a,f)||e(a,f)||c(a,f)))return g=!0}),g};return!!a&&f(K)}function f(a){var b=!1,c=0,d=void 0;if(!(b=e(a)))for(c=0;c<L.length;c++)d=L[c],a.url===d.url&&a.startTime===d.startTime&&(b=!0);return b}function h(a){var b=a?a.state instanceof Array?a.state:[a.state]:[],c=[];return b.forEach(function(b){var d=x(b);c=c.concat(w(d,a))}),c}function j(a){return isNaN(a.duration)?.25:a.duration/8}function k(a){K=K.filter(function(b){var c=j(b);return!(!isNaN(b.startTime)&&void 0===a)&&b.startTime>=a-c})}function l(a,b){b<=a+.5||(K=K.filter(function(c){var d=j(c);return isNaN(c.startTime)||c.startTime>=b-d||isNaN(c.duration)||c.startTime+c.duration<=a+d}))}function n(a,b){if(!a||0===a.length)return void(K=[]);for(var c=0,d=0,e=a.length;d<e;d++)l(c,a.start(d)),c=a.end(d);b>0&&l(c,b)}function r(){H.abort(),L=[]}function t(a){switch(a.action){case m.default.ACTION_COMPLETE:K.push(a),y(a,q),E("[FragmentModel] executeRequest trigger STREAM_COMPLETED"),F.trigger(i.default.STREAM_COMPLETED,{request:a,fragmentModel:this});break;case m.default.ACTION_DOWNLOAD:y(a,p),L.push(a),u(a);break;default:E("Unknown request action.")}}function u(a){F.trigger(i.default.FRAGMENT_LOADING_STARTED,{sender:I,request:a}),H.load(a)}function v(a,b,c){for(var d=a.length-1,e=d;e>=0;e--){var f=a[e],g=f.startTime,h=g+f.duration;if(c=isNaN(c)?j(f):c,!isNaN(g)&&!isNaN(h)&&b+c>=g&&b-c<h||isNaN(g)&&isNaN(b))return f}return null}function w(a,b){return b.hasOwnProperty("time")?[v(a,b.time,b.threshold)]:a.filter(function(a){for(var c in b)if("state"!==c&&b.hasOwnProperty(c)&&a[c]!=b[c])return!1;return!0})}function x(a){var b=void 0;switch(a){case p:b=L;break;case q:b=K;break;default:b=[]}return b}function y(a,b){G.addSchedulingInfo(a.mediaType,new Date,a.type,a.startTime,a.availabilityStartTime,a.duration,a.quality,a.range,b),G.addRequestsQueue(a.mediaType,L,K)}function z(a){a.sender===H&&(L.splice(L.indexOf(a.request),1),a.response&&!a.error&&K.push(a.request),y(a.request,a.error?s:q),F.trigger(i.default.FRAGMENT_LOADING_COMPLETED,{request:a.request,response:a.response,error:a.error,sender:this}))}function A(a){a.sender===H&&F.trigger(i.default.FRAGMENT_LOADING_ABANDONED,{streamProcessor:this.getStreamProcessor(),request:a.request,mediaType:a.mediaType})}function B(){K=[],L=[]}function C(){F.off(i.default.LOADING_COMPLETED,z,this),F.off(i.default.LOADING_ABANDONED,A,this),H&&H.reset(),B()}a=a||{};var D=this.context,E=(0,o.default)(D).getInstance().log,F=(0,g.default)(D).getInstance(),G=a.metricsModel,H=a.fragmentLoader,I=void 0,J=void 0,K=void 0,L=void 0;return I={setStreamProcessor:c,getStreamProcessor:d,getRequests:h,isFragmentLoaded:e,isFragmentLoadedOrPending:f,removeExecutedRequestsBeforeTime:k,syncExecutedRequestsWithBufferedRange:n,abortRequests:r,executeRequest:t,reset:C},b(),I}Object.defineProperty(c,"__esModule",{value:!0});var f=a(50),g=d(f),h=a(54),i=d(h),j=a(51),k=d(j),l=a(213),m=d(l),n=a(49),o=d(n),p="loading",q="executed",r="canceled",s="failed";e.__dashjs_factory_name="FragmentModel";var t=k.default.getClassFactory(e);t.FRAGMENT_MODEL_LOADING=p,t.FRAGMENT_MODEL_EXECUTED=q,t.FRAGMENT_MODEL_CANCELED=r,t.FRAGMENT_MODEL_FAILED=s,k.default.updateClassFactory(e.__dashjs_factory_name,t),c.default=t,b.exports=c.default},{213:213,49:49,50:50,51:51,54:54}],142:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(){return e}function b(a){e=a,a&&d.trigger(i.default.MANIFEST_LOADED,{data:a})}var c=this.context,d=(0,g.default)(c).getInstance(),e=void 0;return{getValue:a,setValue:b}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(50),g=d(f),h=a(54),i=d(h),j=a(51),k=d(j);e.__dashjs_factory_name="ManifestModel",c.default=k.default.getSingletonFactory(e),b.exports=c.default},{50:50,51:51,54:54}],143:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function f(){function a(){var a,b;Ta=[],Sa=!1,Ra=!0,Wa=!0,kb=k.default.ABR_STRATEGY_DYNAMIC,lb=!0,nb=!1,$a={enabled:!0,ttl:n},_a={enabled:!0,ttl:o},Ua=m,Va=void 0,Xa=r,Ya=s,Za=t,ab=NaN,bb=w,cb=x,db=y,eb=z,fb=p,gb=q,jb=I,mb={default:J},ob=[],pb=k.default.MOVING_AVERAGE_SLIDING_WINDOW,a={},e(a,i.HTTPRequest.MPD_TYPE,E),e(a,i.HTTPRequest.XLINK_EXPANSION_TYPE,G),e(a,i.HTTPRequest.MEDIA_SEGMENT_TYPE,C),e(a,i.HTTPRequest.INIT_SEGMENT_TYPE,C),e(a,i.HTTPRequest.BITSTREAM_SWITCHING_SEGMENT_TYPE,C),e(a,i.HTTPRequest.INDEX_SEGMENT_TYPE,C),e(a,i.HTTPRequest.OTHER_TYPE,C),hb=a,b={},e(b,i.HTTPRequest.MPD_TYPE,F),e(b,i.HTTPRequest.XLINK_EXPANSION_TYPE,H),e(b,i.HTTPRequest.MEDIA_SEGMENT_TYPE,D),e(b,i.HTTPRequest.INIT_SEGMENT_TYPE,D),e(b,i.HTTPRequest.BITSTREAM_SWITCHING_SEGMENT_TYPE,D),e(b,i.HTTPRequest.INDEX_SEGMENT_TYPE,D),e(b,i.HTTPRequest.OTHER_TYPE,D),ib=b,qb={},qb[k.default.VIDEO]=A,qb[k.default.AUDIO]=B}function b(a){kb=a}function c(){return kb}function d(a){lb=a}function f(){return lb}function g(a){var b=void 0;for(b=0;b<ob.length;b++)if(ob[b].rulename===a)return b;return-1}function h(){return ob}function j(a,b,c){var d=g(b);-1===d?ob.push({type:a,rulename:b,rule:c}):(ob[d].type=a,ob[d].rule=c)}function l(a){var b=g(a);-1!==b&&ob.splice(b,1)}function K(){ob=[]}function L(a){fb=a}function M(){return fb}function N(a){gb=a}function O(){return gb}function P(a){ab=a}function Q(){return isNaN(ab)?nb?v:u:ab}function R(a){bb=a}function S(){return bb}function T(a){cb=a}function U(){return cb}function V(a){db=a}function W(){return db}function X(a){eb=a}function Y(){return eb}function Z(a,b){qb[a]=b}function $(a){return qb[a]}function _(a){Xa=a}function aa(){return Xa}function ba(a){Ya=a}function ca(){return Ya}function da(a,b){$a.enabled=a,void 0===b||isNaN(b)||"number"!=typeof b||($a.ttl=b)}function ea(){return $a}function fa(a,b){_a.enabled=a,void 0===b||isNaN(b)||"number"!=typeof b||(_a.ttl=b)}function ga(){return _a}function ha(a){Za=a}function ia(){return Za}function ja(a){hb[i.HTTPRequest.MEDIA_SEGMENT_TYPE]=a}function ka(a){hb[i.HTTPRequest.MPD_TYPE]=a}function la(a,b){hb[a]=b}function ma(){return hb[i.HTTPRequest.MEDIA_SEGMENT_TYPE]}function na(){return hb[i.HTTPRequest.MPD_TYPE]}function oa(a){return hb[a]}function pa(a){ib[i.HTTPRequest.MEDIA_SEGMENT_TYPE]=a}function qa(a){ib[i.HTTPRequest.MPD_TYPE]=a}function ra(a,b){ib[a]=b}function sa(){return ib[i.HTTPRequest.MEDIA_SEGMENT_TYPE]}function ta(){return ib[i.HTTPRequest.MPD_TYPE]}function ua(a){return ib[a]}function va(a){jb=a}function wa(){return jb}function xa(a){Wa=a}function ya(){return Wa}function za(a){Ua=a}function Aa(a){Va=a}function Ba(){return Ua}function Ca(){return Va}function Da(a){Ra=a}function Ea(){return Ra}function Fa(a){Sa=a}function Ga(){return Sa}function Ha(a){Ta=a}function Ia(){return Ta}function Ja(a,b){a?mb[a]=!!b:Object.keys(mb).forEach(function(a){Ja(a,b)})}function Ka(a){var b=mb[a];return void 0===b?mb.default:b}function La(){return nb}function Ma(a){nb=a}function Na(a){pb=a}function Oa(){return pb}function Pa(){}var Qa=void 0,Ra=void 0,Sa=void 0,Ta=void 0,Ua=void 0,Va=void 0,Wa=void 0,Xa=void 0,Ya=void 0,Za=void 0,$a=void 0,_a=void 0,ab=void 0,bb=void 0,cb=void 0,db=void 0,eb=void 0,fb=void 0,gb=void 0,hb=void 0,ib=void 0,jb=void 0,kb=void 0,lb=void 0,mb=void 0,nb=void 0,ob=void 0,pb=void 0,qb=void 0;return Qa={setABRStrategy:b,getABRStrategy:c,setUseDefaultABRRules:d,getUseDefaultABRRules:f,getABRCustomRules:h,addABRCustomRule:j,removeABRCustomRule:l,removeAllABRCustomRule:K,setBandwidthSafetyFactor:L,getBandwidthSafetyFactor:M,setAbandonLoadTimeout:N,getAbandonLoadTimeout:O,setLastBitrateCachingInfo:da,getLastBitrateCachingInfo:ea,setLastMediaSettingsCachingInfo:fa,getLastMediaSettingsCachingInfo:ga,setStableBufferTime:P,getStableBufferTime:Q,setBufferTimeAtTopQuality:R,getBufferTimeAtTopQuality:S,setBufferTimeAtTopQualityLongForm:T,getBufferTimeAtTopQualityLongForm:U,setLongFormContentDurationThreshold:V,getLongFormContentDurationThreshold:W,setSegmentOverlapToleranceTime:X,getSegmentOverlapToleranceTime:Y,getCacheLoadThresholdForType:$,setCacheLoadThresholdForType:Z,setBufferToKeep:_,getBufferToKeep:aa,setBufferAheadToKeep:ba,getBufferAheadToKeep:ca,setBufferPruningInterval:ha,getBufferPruningInterval:ia,setFragmentRetryAttempts:ja,getFragmentRetryAttempts:ma,setManifestRetryAttempts:ka,getManifestRetryAttempts:na,setRetryAttemptsForType:la,getRetryAttemptsForType:oa,setFragmentRetryInterval:pa,getFragmentRetryInterval:sa,setManifestRetryInterval:qa,getManifestRetryInterval:ta,setRetryIntervalForType:ra,getRetryIntervalForType:ua,setWallclockTimeUpdateInterval:va,getWallclockTimeUpdateInterval:wa,setScheduleWhilePaused:xa,getScheduleWhilePaused:ya,getUseSuggestedPresentationDelay:Ga,setUseSuggestedPresentationDelay:Fa,setLiveDelayFragmentCount:za,getLiveDelayFragmentCount:Ba,getLiveDelay:Ca,setLiveDelay:Aa,setUseManifestDateHeaderTimeSource:Da,getUseManifestDateHeaderTimeSource:Ea,setUTCTimingSources:Ha,getUTCTimingSources:Ia,setXHRWithCredentialsForType:Ja,getXHRWithCredentialsForType:Ka,setFastSwitchEnabled:Ma,getFastSwitchEnabled:La,setMovingAverageMethod:Na,getMovingAverageMethod:Oa,reset:Pa},a(),Qa}Object.defineProperty(c,"__esModule",{value:!0});var g=a(51),h=d(g),i=a(230),j=a(100),k=d(j),l={scheme:"urn:mpeg:dash:utc:http-xsdate:2014",value:"http://time.akamai.com/?iso"},m=4,n=36e4,o=36e4,p=.9,q=1e4,r=20,s=80,t=10,u=12,v=20,w=30,x=60,y=600,z=.05,A=50,B=5,C=3,D=1e3,E=3,F=500,G=1,H=500,I=50,J=!1;f.__dashjs_factory_name="MediaPlayerModel";var K=h.default.getSingletonFactory(f);K.DEFAULT_UTC_TIMING_SOURCE=l,h.default.updateSingletonFactory(f.__dashjs_factory_name,K),c.default=K,b.exports=c.default},{100:100,230:230,51:51}],144:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(){W={}}function b(a){a&&a.adapter&&(V=a.adapter)}function c(){T.trigger(G.default.METRICS_CHANGED)}function d(a){T.trigger(G.default.METRIC_CHANGED,{mediaType:a}),c()}function e(a,b,c){T.trigger(G.default.METRIC_UPDATED,{mediaType:a,metric:b,value:c}),d(a)}function f(a,b,c){T.trigger(G.default.METRIC_ADDED,{mediaType:a,metric:b,value:c}),d(a)}function h(a){delete W[a],d(a)}function j(){W={},c()}function l(a){return W.hasOwnProperty(a)?W[a]:null}function o(a){var b=void 0;return W.hasOwnProperty(a)?b=W[a]:(b=new k.default,W[a]=b),b}function q(a,b,c){var d=o(a);d[b].push(c),d[b].length>R&&d[b].shift()}function s(a,b,c,d,e,f){var g=new m.default;return g.tcpid=b,g.dest=c,g.topen=d,g.tclose=e,g.tconnect=f,B(a,i.default.TCP_CONNECTION,g),g}function u(a,b,c,d){var e=new n.HTTPRequestTrace;return e.s=b,e.d=c,e.b=d,a.trace.push(e),a.interval||(a.interval=0),a.interval+=c,e}function w(a,b,c,d,e,f,g,h,j,k,l,m,o,p){var q=new n.HTTPRequest;return e&&e!==d&&(w(a,null,c,d,null,null,g,h,null,null,null,m,null,null),q.actualurl=e),q.tcpid=b,q.type=c,q.url=d,q.range=g,q.trequest=h,q.tresponse=j,q.responsecode=l,q._tfinish=k,q._stream=a,q._mediaduration=m,q._responseHeaders=o,q._serviceLocation=f,p?p.forEach(function(a){u(q,a.s,a.d,a.b)}):(delete q.interval,delete q.trace),B(a,i.default.HTTP_REQUEST,q),q}function z(a,b,c,d,e){var f=new p.default;return f.t=b,f.mt=c,f.to=d,e?f.lto=e:delete f.lto,B(a,i.default.TRACK_SWITCH,f),f}function B(a,b,c){q(a,b,c),f(a,b,c)}function D(a,b,c){var d=new r.default;return d.t=b,d.level=c,B(a,i.default.BUFFER_LEVEL,d),d}function F(a,b,c){var d=new t.default;return d.target=c,d.state=b,B(a,i.default.BUFFER_STATE,d),d}function H(a,b,c,d){var e=new v.default;return e.time=b,e.range=d,e.manifestInfo=c,B(a,i.default.DVR_INFO,e),e}function I(a,b){var c=new x.default,d=o(a).DroppedFrames;return c.time=b.creationTime,c.droppedFrames=b.droppedVideoFrames,d.length>0&&d[d.length-1]==c?d[d.length-1]:(B(a,i.default.DROPPED_FRAMES,c),c)}function J(a,b,c,d,e,f,g,h,j){var k=new A.default;return k.mediaType=a,k.t=b,k.type=c,k.startTime=d,k.availabilityStartTime=e,k.duration=f,k.quality=g,k.range=h,k.state=j,B(a,i.default.SCHEDULING_INFO,k),k}function K(a,b,c){var d=new E.default;d.loadingRequests=b,d.executedRequests=c,o(a).RequestsQueue=d,f(a,i.default.REQUESTS_QUEUE,d)}function L(a,b,c,d,e,h,j,k,l,m){var n=new y.ManifestUpdate;return n.mediaType=a,n.type=b,n.requestTime=c,n.fetchTime=d,n.availabilityStartTime=e,n.presentationStartTime=h,n.clientTimeOffset=j,n.currentTime=k,n.buffered=l,n.latency=m,q(g.default.STREAM,i.default.MANIFEST_UPDATE,n),f(a,i.default.MANIFEST_UPDATE,n),n}function M(a,b){if(a){for(var c in b)a[c]=b[c];e(a.mediaType,i.default.MANIFEST_UPDATE,a)}}function N(a,b,c,d,f){if(a){var g=new y.ManifestUpdateStreamInfo;return g.id=b,g.index=c,g.start=d,g.duration=f,a.streamInfo.push(g),e(a.mediaType,i.default.MANIFEST_UPDATE_STREAM_INFO,a),g}return null}function O(a,b,c,d,f,g,h,j){if(a){var k=new y.ManifestUpdateRepresentationInfo;return k.id=b,k.index=c,k.streamIndex=d,k.mediaType=f,k.startNumber=h,k.fragmentInfoType=j,k.presentationTimeOffset=g,a.representationInfo.push(k),e(a.mediaType,i.default.MANIFEST_UPDATE_TRACK_INFO,a),k}return null}function P(a){var b=g.default.STREAM;return a.trace&&Array.isArray(a.trace)?a.trace.forEach(function(a){a.hasOwnProperty("subreplevel")&&!a.subreplevel&&delete a.subreplevel}):delete a.trace,B(b,i.default.PLAY_LIST,a),a}function Q(a){return B(g.default.STREAM,i.default.DVB_ERRORS,a),a}var R=1e3,S=this.context,T=(0,C.default)(S).getInstance(),U=void 0,V=void 0,W=void 0;return U={clearCurrentMetricsForType:h,clearAllCurrentMetrics:j,getReadOnlyMetricsFor:l,getMetricsFor:o,addTcpConnection:s,addHttpRequest:w,addRepresentationSwitch:z,addBufferLevel:D,addBufferState:F,addDVRInfo:H,addDroppedFrames:I,addSchedulingInfo:J,addRequestsQueue:K,addManifestUpdate:L,updateManifestUpdateInfo:M,addManifestUpdateStreamInfo:N,addManifestUpdateRepresentationInfo:O,addPlayList:P,addDVBErrors:Q,setConfig:b},a(),U}Object.defineProperty(c,"__esModule",{value:!0});var f=a(100),g=d(f),h=a(101),i=d(h),j=a(218),k=d(j),l=a(236),m=d(l),n=a(230),o=a(233),p=d(o),q=a(226),r=d(q),s=a(227),t=d(s),u=a(228),v=d(u),w=a(229),x=d(w),y=a(231),z=a(235),A=d(z),B=a(50),C=d(B),D=a(234),E=d(D),F=a(54),G=d(F),H=a(51),I=d(H);e.__dashjs_factory_name="MetricsModel",c.default=I.default.getSingletonFactory(e),b.exports=c.default},{100:100,101:101,218:218,226:226,227:227,228:228,229:229,230:230,231:231,233:233,234:234,235:235,236:236,50:50,51:51,54:54}],145:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(){f=new g.default,h=[],i=!1}function b(){return f}function c(){return h}function d(){return i}function e(a){function b(a,b,c,d){var e=d[0].split(/[=]/);return d.push({key:e[0],value:e[1]}),d.shift(),d}function c(a,b,c){return b>0&&(k&&0===h.length?h=c[b].split(/[&]/):l&&(d=c[b].split(/[&]/))),c}if(!a)return null;var d=[],e=new RegExp(/[?]/),g=new RegExp(/[#]/),j=new RegExp(/^(https:)?\/\//i),k=e.test(a),l=g.test(a);return i=j.test(a),a.split(/[?#]/).map(c),h.length>0&&(h=h.reduce(b,null)),d.length>0&&(d=d.reduce(b,null),d.forEach(function(a){f[a.key]=a.value})),a}var f=void 0,h=void 0,i=void 0;return{initialize:a,parseURI:e,getURIFragmentData:b,getURIQueryData:c,isManifestHTTPS:d}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(225),g=d(f),h=a(51),i=d(h);e.__dashjs_factory_name="URIQueryAndFragmentModel",c.default=i.default.getSingletonFactory(e),b.exports=c.default},{225:225,51:51}],146:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(){X=[],_.on(k.default.PLAYBACK_PLAYING,v,this)}function b(){_.off(k.default.PLAYBACK_PLAYING,v,this)}function c(){U.playbackRate=Y||1,U.removeEventListener("canplay",c)}function d(a){U&&(U.readyState<=2&&a>0?U.addEventListener("canplay",c):U.playbackRate=a)}function e(a){if(U.currentTime!=a)try{U.currentTime=a}catch(b){0===U.readyState&&b.code===b.INVALID_STATE_ERR&&setTimeout(function(){U.currentTime=a},400)}}function f(){return U}function g(a){U=a,U.preload="auto"}function h(a){a?U.src=a:(U.removeAttribute("src"),U.load())}function j(){return U.src}function l(){return W}function n(a){W=a}function o(){return V}function p(a){V=a,V.style.position="absolute",V.style.display="flex",V.style.overflow="hidden",V.style.pointerEvents="none",V.style.top=0,V.style.left=0}function q(a,b){u(a,b)}function r(){
return X.length>0}function s(a){var b=void 0;null===a||U.seeking||-1!==X.indexOf(a)||(X.push(a),1===X.length&&(b=document.createEvent("Event"),b.initEvent("waiting",!0,!1),Y=U.playbackRate,d(0),U.dispatchEvent(b)))}function t(a){var b=X.indexOf(a),c=void 0;null!==a&&(-1!==b&&X.splice(b,1),!1===r()&&0===U.playbackRate&&(d(Y||1),U.paused||(c=document.createEvent("Event"),c.initEvent("playing",!0,!1),U.dispatchEvent(c))))}function u(a,b){b?s(a):t(a)}function v(){if(U&&r()&&0===U.playbackRate){var a=document.createEvent("Event");a.initEvent("waiting",!0,!1),U.dispatchEvent(a)}}function w(){var a="webkitDroppedFrameCount"in U&&"webkitDecodedFrameCount"in U,b="getVideoPlaybackQuality"in U,c=null;return b?c=U.getVideoPlaybackQuality():a&&(c={droppedVideoFrames:U.webkitDroppedFrameCount,totalVideoFrames:U.webkitDroppedFrameCount+U.webkitDecodedFrameCount,creationTime:new Date}),c}function x(){if(U){U.autoplay=!0;var a=U.play();a&&"undefined"!=typeof Promise&&a instanceof Promise&&a.catch(function(a){"NotAllowedError"===a.name&&_.trigger(k.default.PLAYBACK_NOT_ALLOWED),$("Caught pending play exception - continuing ("+a+")")})}}function y(){return U?U.paused:null}function z(){U&&(U.pause(),U.autoplay=!1)}function A(){return U?U.seeking:null}function B(){return U?U.currentTime:null}function C(){return U?U.playbackRate:null}function D(){return U?U.played:null}function E(){return U?U.ended:null}function F(a,b){U&&U.addEventListener(a,b)}function G(a,b){U&&U.removeEventListener(a,b)}function H(){return U?U.readyState:NaN}function I(){return U?U.buffered:null}function J(){return U?U.clientWidth:NaN}function K(){return U?U.clientHeight:NaN}function L(){return U?U.videoWidth:NaN}function M(){return U?U.videoHeight:NaN}function N(){return U&&U.parentNode?U.getBoundingClientRect().top-U.parentNode.getBoundingClientRect().top:NaN}function O(){return U&&U.parentNode?U.getBoundingClientRect().left-U.parentNode.getBoundingClientRect().left:NaN}function P(){return U?U.textTracks:[]}function Q(a,b,c,d,e){if(U)for(var f=0;f<U.textTracks.length;f++)if(U.textTracks[f].kind===a&&(!b||U.textTracks[f].label==b)&&U.textTracks[f].language===c&&U.textTracks[f].isTTML===d&&U.textTracks[f].isEmbedded===e)return U.textTracks[f];return null}function R(a,b,c){return U?U.addTextTrack(a,b,c):null}function S(a){U&&(U.appendChild(a),void 0!==a.isTTML&&(U.textTracks[U.textTracks.length-1].isTTML=a.isTTML,U.textTracks[U.textTracks.length-1].isEmbedded=a.isEmbedded))}function T(a){U&&U.removeChild(a)}var U=void 0,V=void 0,W=void 0,X=void 0,Y=void 0,Z=this.context,$=(0,m.default)(Z).getInstance().log,_=(0,i.default)(Z).getInstance();return{initialize:a,setCurrentTime:e,play:x,isPaused:y,pause:z,isSeeking:A,getTime:B,getPlaybackRate:C,getPlayedRanges:D,getEnded:E,setStallState:q,getElement:f,setElement:g,setSource:h,getSource:j,getVideoContainer:l,setVideoContainer:n,getTTMLRenderingDiv:o,setTTMLRenderingDiv:p,getPlaybackQuality:w,addEventListener:F,removeEventListener:G,getReadyState:H,getBufferRange:I,getClientWidth:J,getClientHeight:K,getTextTracks:P,getTextTrack:Q,addTextTrack:R,appendChild:S,removeChild:T,getVideoWidth:L,getVideoHeight:M,getVideoRelativeOffsetTop:N,getVideoRelativeOffsetLeft:O,reset:b}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f),h=a(50),i=d(h),j=a(54),k=d(j),l=a(49),m=d(l);e.__dashjs_factory_name="VideoModel",c.default=g.default.getSingletonFactory(e),b.exports=c.default},{49:49,50:50,51:51,54:54}],147:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=function(){function a(){d(this,a)}return e(a,null,[{key:"findCencContentProtection",value:function(a){for(var b=null,c=0;c<a.length;++c){var d=a[c];"urn:mpeg:dash:mp4protection:2011"===d.schemeIdUri.toLowerCase()&&"cenc"===d.value.toLowerCase()&&(b=d)}return b}},{key:"getPSSHData",value:function(a){var b=8,c=new DataView(a),d=c.getUint8(b);return b+=20,d>0&&(b+=4+16*c.getUint32(b)),b+=4,a.slice(b)}},{key:"getPSSHForKeySystem",value:function(b,c){var d=a.parsePSSHList(c);return d.hasOwnProperty(b.uuid.toLowerCase())?d[b.uuid.toLowerCase()]:null}},{key:"parseInitDataFromContentProtection",value:function(a,b){return"pssh"in a?b.decodeArray(a.pssh.__text).buffer:null}},{key:"parsePSSHList",value:function(a){if(null===a)return[];for(var b=new DataView(a.buffer||a),c=!1,d={},e=0;!c;){var f=void 0,g=void 0,h=void 0,i=void 0,j=e;if(e>=b.buffer.byteLength)break;if(f=b.getUint32(e),g=e+f,e+=4,1886614376===b.getUint32(e))if(e+=4,0===(h=b.getUint8(e))||1===h){e++,e+=3,i="";var k=void 0,l=void 0;for(k=0;k<4;k++)l=b.getUint8(e+k).toString(16),i+=1===l.length?"0"+l:l;for(e+=4,i+="-",k=0;k<2;k++)l=b.getUint8(e+k).toString(16),i+=1===l.length?"0"+l:l;for(e+=2,i+="-",k=0;k<2;k++)l=b.getUint8(e+k).toString(16),i+=1===l.length?"0"+l:l;for(e+=2,i+="-",k=0;k<2;k++)l=b.getUint8(e+k).toString(16),i+=1===l.length?"0"+l:l;for(e+=2,i+="-",k=0;k<6;k++)l=b.getUint8(e+k).toString(16),i+=1===l.length?"0"+l:l;e+=6,i=i.toLowerCase(),b.getUint32(e),e+=4,d[i]=b.buffer.slice(j,g),e=g}else e=g;else e=g}return d}}]),a}();c.default=f,b.exports=c.default},{}],148:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a){var c=null,e=(0,i.default)(d).getInstance();e.setConfig({log:a.log,BASE64:a.BASE64}),e.initialize();var f=b(a);return!c&&f&&(c=(0,g.default)(d).create({protectionModel:f,protectionKeyController:e,adapter:a.adapter,eventBus:a.eventBus,log:a.log,events:a.events,BASE64:a.BASE64,Constants:a.Constants}),a.capabilities.setEncryptedMediaSupported(!0)),c}function b(a){var b=a.log,e=a.eventBus,f=a.errHandler,g=a.videoModel.getElement();return void 0!==g.onencrypted&&void 0!==g.mediaKeys&&void 0!==navigator.requestMediaKeySystemAccess&&"function"==typeof navigator.requestMediaKeySystemAccess?(b("EME detected on this user agent! (ProtectionModel_21Jan2015)"),(0,m.default)(d).create({log:b,eventBus:e,events:a.events})):c(g,s)?(b("EME detected on this user agent! (ProtectionModel_3Feb2014)"),(0,o.default)(d).create({log:b,eventBus:e,events:a.events,api:c(g,s)})):c(g,r)?(b("EME detected on this user agent! (ProtectionModel_01b)"),(0,q.default)(d).create({log:b,eventBus:e,errHandler:f,events:a.events,api:c(g,r)})):(b("No supported version of EME detected on this user agent! - Attempts to play encrypted content will fail!"),null)}function c(a,b){for(var c=0;c<b.length;c++){var d=b[c];if("function"==typeof a[d[Object.keys(d)[0]]])return d}return null}var d=this.context;return{createProtectionSystem:a}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(150),g=d(f),h=a(151),i=d(h),j=a(149),k=d(j),l=a(157),m=d(l),n=a(158),o=d(n),p=a(156),q=d(p),r=[{generateKeyRequest:"generateKeyRequest",addKey:"addKey",cancelKeyRequest:"cancelKeyRequest",needkey:"needkey",keyerror:"keyerror",keyadded:"keyadded",keymessage:"keymessage"},{generateKeyRequest:"webkitGenerateKeyRequest",addKey:"webkitAddKey",cancelKeyRequest:"webkitCancelKeyRequest",needkey:"webkitneedkey",keyerror:"webkitkeyerror",keyadded:"webkitkeyadded",keymessage:"webkitkeymessage"}],s=[{setMediaKeys:"setMediaKeys",MediaKeys:"MediaKeys",release:"close",needkey:"needkey",error:"keyerror",message:"keymessage",ready:"keyadded",close:"keyclose"},{setMediaKeys:"msSetMediaKeys",MediaKeys:"MSMediaKeys",release:"close",needkey:"msneedkey",error:"mskeyerror",message:"mskeymessage",ready:"mskeyadded",close:"mskeyclose"}];e.__dashjs_factory_name="Protection";var t=dashjs.FactoryMaker.getClassFactory(e);t.events=k.default,dashjs.FactoryMaker.updateClassFactory(e.__dashjs_factory_name,t),c.default=t,b.exports=c.default},{149:149,150:150,151:151,156:156,157:157,158:158}],149:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(c,"__esModule",{value:!0});var g=function(a,b,c){for(var d=!0;d;){var e=a,f=b,g=c;d=!1,null===e&&(e=Function.prototype);var h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var i=h.get;if(void 0===i)return;return i.call(g)}var j=Object.getPrototypeOf(e);if(null===j)return;a=j,b=f,c=g,d=!0,h=j=void 0}},h=a(55),i=d(h),j=function(a){function b(){e(this,b),g(Object.getPrototypeOf(b.prototype),"constructor",this).call(this),this.INTERNAL_KEY_MESSAGE="internalKeyMessage",this.INTERNAL_KEY_SYSTEM_SELECTED="internalKeySystemSelected",this.KEY_ADDED="public_keyAdded",this.KEY_ERROR="public_keyError",this.KEY_MESSAGE="public_keyMessage",this.KEY_SESSION_CLOSED="public_keySessionClosed",this.KEY_SESSION_CREATED="public_keySessionCreated",this.KEY_SESSION_REMOVED="public_keySessionRemoved",this.KEY_STATUSES_CHANGED="public_keyStatusesChanged",this.KEY_SYSTEM_ACCESS_COMPLETE="keySystemAccessComplete",this.KEY_SYSTEM_SELECTED="public_keySystemSelected",this.LICENSE_REQUEST_COMPLETE="public_licenseRequestComplete",this.NEED_KEY="needkey",this.PROTECTION_CREATED="public_protectioncreated",this.PROTECTION_DESTROYED="public_protectiondestroyed",this.SERVER_CERTIFICATE_UPDATED="serverCertificateUpdated",this.TEARDOWN_COMPLETE="protectionTeardownComplete",this.VIDEO_ELEMENT_SELECTED="videoElementSelected"}return f(b,a),b}(i.default),k=new j;c.default=k,b.exports=c.default},{55:55}],150:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){H=[],L=!1,M="temporary",N=""}function c(a,b,c){if(!L){var d=void 0;b||c||(d=A.getStreamsInfo()[0]),I=b||(d?A.getMediaInfoForType(d,F.AUDIO):null),J=c||(d?A.getMediaInfoForType(d,F.VIDEO):null);var e=J||I,f=y.getSupportedKeySystemsFromContentProtection(e.contentProtection);f&&f.length>0&&t(f,!0),L=!0}}function d(a){return y.getSupportedKeySystemsFromContentProtection(a)}function e(a,b){var c=g.default.getPSSHForKeySystem(O,a),d=r(O);if(c){for(var e=z.getAllInitData(),f=0;f<e.length;f++)if(y.initDataEquals(c,e[f]))return void D("DRM: Ignoring initData because we have already seen it!");try{z.createKeySession(c,d,M,b)}catch(h){B.trigger(C.KEY_SESSION_CREATED,{data:null,error:"Error creating key session! "+h.message})}}else a?z.createKeySession(a,d,M,b):B.trigger(C.KEY_SESSION_CREATED,{data:null,error:"Selected key system is "+O.systemString+".  needkey/encrypted event contains no initData corresponding to that key system!"})}function f(a){z.loadKeySession(a)}function h(a){z.removeKeySession(a)}function j(a){z.closeKeySession(a)}function l(a){z.setServerCertificate(a)}function m(a){a?(z.setMediaElement(a),B.on(C.NEED_KEY,w,this),B.on(C.INTERNAL_KEY_MESSAGE,v,this)):null===a&&(z.setMediaElement(a),B.off(C.NEED_KEY,w,this),B.off(C.INTERNAL_KEY_MESSAGE,v,this))}function n(a){M=a}function o(a){N=a}function p(a){K=a,y.setProtectionData(a)}function q(){m(null),O=void 0,z&&(z.reset(),z=null)}function r(a){var b=null,c=a.systemString;return K&&(b=c in K?K[c]:null),b}function s(a){var b=r(a),c=[],d=[],e=b&&b.audioRobustness&&b.audioRobustness.length>0?b.audioRobustness:N,f=b&&b.videoRobustness&&b.videoRobustness.length>0?b.videoRobustness:N;return I&&c.push(new i.default(I.codec,e)),J&&d.push(new i.default(J.codec,f)),new k.default(c,d,"optional","temporary"===M?"optional":"required",[M])}function t(a,b){var c=this,d=[],f=void 0;if(O){for(f=0;f<a.length;f++)if(O===a[f].ks){var g=function(){d.push({ks:a[f].ks,configs:[s(O)]});var g=function d(g){B.off(C.KEY_SYSTEM_ACCESS_COMPLETE,d,c),g.error?b||B.trigger(C.KEY_SYSTEM_SELECTED,{error:"DRM: KeySystem Access Denied! -- "+g.error}):(D("DRM: KeySystem Access Granted"),B.trigger(C.KEY_SYSTEM_SELECTED,{data:g.data}),e(a[f].initData,a[f].cdmData))};return B.on(C.KEY_SYSTEM_ACCESS_COMPLETE,g,c),z.requestKeySystemAccess(d),"break"}();if("break"===g)break}}else if(void 0===O){var h;!function(){O=null,H.push(a);for(var g=0;g<a.length;g++)d.push({ks:a[g].ks,configs:[s(a[g].ks)]});var i=void 0,j=function a(d){B.off(C.KEY_SYSTEM_ACCESS_COMPLETE,a,c),d.error?(O=void 0,B.off(C.INTERNAL_KEY_SYSTEM_SELECTED,h,c),b||B.trigger(C.KEY_SYSTEM_SELECTED,{data:null,error:"DRM: KeySystem Access Denied! -- "+d.error})):(i=d.data,D("DRM: KeySystem Access Granted ("+i.keySystem.systemString+")!  Selecting key system..."),z.selectKeySystem(i))};h=function a(d){if(B.off(C.INTERNAL_KEY_SYSTEM_SELECTED,a,c),B.off(C.KEY_SYSTEM_ACCESS_COMPLETE,j,c),d.error)O=void 0,b||B.trigger(C.KEY_SYSTEM_SELECTED,{data:null,error:"DRM: Error selecting key system! -- "+d.error});else{O=z.getKeySystem(),B.trigger(C.KEY_SYSTEM_SELECTED,{data:i});var g=r(O);g&&g.serverCertificate&&g.serverCertificate.length>0&&z.setServerCertificate(E.decodeArray(g.serverCertificate).buffer);for(var h=0;h<H.length;h++)for(f=0;f<H[h].length;f++)if(O===H[h][f].ks){if(null===H[h][f].initData&&g&&g.hasOwnProperty("clearkeys")){var k={kids:Object.keys(g.clearkeys)};H[h][f].initData=(new TextEncoder).encode(JSON.stringify(k))}e(H[h][f].initData,H[h][f].cdmData);break}}},B.on(C.INTERNAL_KEY_SYSTEM_SELECTED,h,c),B.on(C.KEY_SYSTEM_ACCESS_COMPLETE,j,c),z.requestKeySystemAccess(d)}()}else H.push(a)}function u(a,b){B.trigger(C.LICENSE_REQUEST_COMPLETE,{data:a,error:b})}function v(a){if(D("DRM: onKeyMessage"),a.error)return void D(a.error);var b=a.data;B.trigger(C.KEY_MESSAGE,{data:b});var c=b.messageType?b.messageType:"license-request",d=b.message,e=b.sessionToken,f=r(O),h=O.systemString,i=y.getLicenseServer(O,f,c),j={sessionToken:e,messageType:c};if(!i)return D("DRM: License server request not required for this message (type = "+a.data.messageType+").  Session ID = "+e.getSessionID()),void u(j);if(y.isClearKey(O)){var k=y.processClearKeyLicenseRequest(O,f,d);if(k)return D("DRM: ClearKey license request handled by application!"),u(j),void z.updateKeySession(e,k)}var l=new XMLHttpRequest,m=null;if(f&&f.serverURL){var n=f.serverURL;"string"==typeof n&&""!==n?m=n:"object"==typeof n&&n.hasOwnProperty(c)&&(m=n[c])}else f&&f.laURL&&""!==f.laURL?m=f.laURL:(m=O.getLicenseServerURLFromInitData(g.default.getPSSHData(e.initData)))||(m=a.data.laURL);if(!(m=i.getServerURLFromMessage(m,d,c)))return void u(j,"DRM: No license server URL specified!");var o=function(a,b,c,d){var e=a.response?i.getErrorResponse(a.response,c,d):"NONE";u(b,"DRM: "+c+' update, XHR complete. status is "'+a.statusText+'" ('+a.status+"), readyState is "+a.readyState+".  Response is "+e)};l.open(i.getHTTPMethod(c),m,!0),l.responseType=i.getResponseType(h,c),l.onload=function(){if(200==this.status){var a=i.getLicenseMessage(this.response,h,c);null!==a?(u(j),z.updateKeySession(e,a)):o(this,j,h,c)}else o(this,j,h,c)},l.onabort=function(){u(j,"DRM: "+h+' update, XHR aborted. status is "'+this.statusText+'" ('+this.status+"), readyState is "+this.readyState)},l.onerror=function(){u(j,"DRM: "+h+' update, XHR error. status is "'+this.statusText+'" ('+this.status+"), readyState is "+this.readyState)};var p=function(a){if(a)for(var b in a)"authorization"===b.toLowerCase()&&(l.withCredentials=!0),l.setRequestHeader(b,a[b])};f&&p(f.httpRequestHeaders),p(O.getRequestHeadersFromMessage(d)),f&&"boolean"==typeof f.withCredentials&&(l.withCredentials=f.withCredentials),l.send(O.getLicenseRequestFromMessage(d))}function w(a){if(D("DRM: onNeedKey"),"cenc"!==a.key.initDataType)return void D("DRM:  Only 'cenc' initData is supported!  Ignoring initData of type: "+a.key.initDataType);var b=a.key.initData;if(ArrayBuffer.isView(b)&&(b=b.buffer),O){var c=g.default.getPSSHForKeySystem(O,b);if(c)for(var d=z.getAllInitData(),e=0;e<d.length;e++)if(y.initDataEquals(c,d[e]))return void D("DRM: Ignoring initData because we have already seen it!")}D("DRM: initData:",String.fromCharCode.apply(null,new Uint8Array(b)));var f=y.getSupportedKeySystems(b,K);if(0===f.length)return void D("DRM: Received needkey event with initData, but we don't support any of the key systems!");t(f,!1)}function x(){return y?y.getKeySystems():[]}a=a||{};var y=a.protectionKeyController,z=a.protectionModel,A=a.adapter,B=a.eventBus,C=a.events,D=a.log,E=a.BASE64,F=a.Constants,G=void 0,H=void 0,I=void 0,J=void 0,K=void 0,L=void 0,M=void 0,N=void 0,O=void 0;return G={initialize:c,createKeySession:e,loadKeySession:f,removeKeySession:h,closeKeySession:j,setServerCertificate:l,setMediaElement:m,setSessionType:n,setRobustnessLevel:o,setProtectionData:p,getSupportedKeySystemsFromContentProtection:d,getKeySystems:x,reset:q},b(),G}Object.defineProperty(c,"__esModule",{value:!0});var f=a(147),g=d(f),h=a(169),i=d(h),j=a(168),k=d(j);e.__dashjs_factory_name="ProtectionController",c.default=dashjs.FactoryMaker.getClassFactory(e),b.exports=c.default},{147:147,168:168,169:169}],151:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a){a&&(a.log&&(t=a.log),a.BASE64&&(x=a.BASE64))}function b(){v=[];var a=void 0;a=(0,o.default)(r).getInstance({BASE64:x}),v.push(a),a=(0,m.default)(r).getInstance({BASE64:x}),v.push(a),a=(0,i.default)(r).getInstance({BASE64:x}),v.push(a),z=a,a=(0,k.default)(r).getInstance({BASE64:x,log:t}),v.push(a),A=a}function c(){return v}function d(a){for(var b=0;b<v.length;b++)if(v[b].systemString===a)return v[b];return null}function e(a){return a===z||a===A}function f(a,b){if(a.byteLength===b.byteLength){for(var c=new Uint8Array(a),d=new Uint8Array(b),e=0;e<c.length;e++)if(c[e]!==d[e])return!1;return!0}return!1}function h(a){var b=void 0,c=void 0,d=void 0,e=void 0,f=[];if(a)for(d=0;d<v.length;++d)for(c=v[d],e=0;e<a.length;++e)if(b=a[e],b.schemeIdUri.toLowerCase()===c.schemeIdURI){var g=c.getInitData(b);g?f.push({ks:v[d],initData:g,cdmData:c.getCDMData()}):this.isClearKey(c)&&f.push({ks:c,initData:null})}return f}function j(a,b){for(var c=[],d=g.default.parsePSSHList(a),e=0;e<v.length;++e){var f=v[e].systemString,h=!b||f in b;v[e].uuid in d&&h&&c.push({ks:v[e],initData:d[v[e].uuid]})}return c}function l(a,b,c){if("license-release"===c||"individualization-request"===c)return null;var d=null;return b&&b.hasOwnProperty("drmtoday")?d=(0,q.default)(r).getInstance({BASE64:x}):a.systemString===y.default.WIDEVINE_KEYSTEM_STRING?d=(0,u.default)(r).getInstance():a.systemString===y.default.PLAYREADY_KEYSTEM_STRING?d=(0,s.default)(r).getInstance():a.systemString===y.default.CLEARKEY_KEYSTEM_STRING&&(d=(0,w.default)(r).getInstance()),d}function n(a,b,c){try{return a.getClearKeysFromProtectionData(b,c)}catch(d){return t("Failed to retrieve clearkeys from ProtectionData"),null}}function p(a){for(var b=(function(b){var c=null;return a&&(c=b in a?a[b]:null),c}),c=0;c<v.length;c++){var d=v[c];d.hasOwnProperty("init")&&d.init(b(d.systemString))}}var r=this.context,t=void 0,v=void 0,x=void 0,z=void 0,A=void 0;return{initialize:b,setProtectionData:p,isClearKey:e,initDataEquals:f,getKeySystems:c,getKeySystemBySystemString:d,getSupportedKeySystemsFromContentProtection:h,getSupportedKeySystems:j,getLicenseServer:l,processClearKeyLicenseRequest:n,setConfig:a}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(147),g=d(f),h=a(152),i=d(h),j=a(154),k=d(j),l=a(155),m=d(l),n=a(153),o=d(n),p=a(160),q=d(p),r=a(161),s=d(r),t=a(162),u=d(t),v=a(159),w=d(v),x=a(102),y=d(x);e.__dashjs_factory_name="ProtectionKeyController",c.default=dashjs.FactoryMaker.getSingletonFactory(e),b.exports=c.default},{102:102,147:147,152:152,153:153,154:154,155:155,159:159,160:160,161:161,162:162}],152:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(a,b){var c=null;if(a){for(var d=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(b))),e=[],f=0;f<d.kids.length;f++){var h=d.kids[f],j=a.clearkeys&&a.clearkeys.hasOwnProperty(h)?a.clearkeys[h]:null;if(!j)throw new Error("DRM: ClearKey keyID ("+h+") is not known!");e.push(new g.default(h,j))}c=new i.default(e)}return c}function c(a){return k.default.parseInitDataFromContentProtection(a,j)}function d(){return null}function e(a){return new Uint8Array(a)}function f(){return null}function h(){return null}a=a||{};var j=a.BASE64;return{uuid:n,schemeIdURI:p,systemString:o,getInitData:c,getRequestHeadersFromMessage:d,getLicenseRequestFromMessage:e,getLicenseServerURLFromInitData:f,getCDMData:h,getClearKeysFromProtectionData:b}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(166),g=d(f),h=a(163),i=d(h),j=a(147),k=d(j),l=a(102),m=d(l),n="e2719d58-a985-b3c9-781a-b030af78d30e",o=m.default.CLEARKEY_KEYSTEM_STRING,p="urn:uuid:"+n;e.__dashjs_factory_name="KeySystemClearKey",c.default=dashjs.FactoryMaker.getSingletonFactory(e),b.exports=c.default},{102:102,147:147,163:163,166:166}],153:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){if(!q||!q.hasOwnProperty("decodeArray")||!q.hasOwnProperty("decodeArray"))throw new Error("Missing config parameter(s)")}function c(a){var b=void 0,c=void 0,d={},e=new DOMParser,f="utf16"===p?new Uint16Array(a):new Uint8Array(a);b=String.fromCharCode.apply(null,f),c=e.parseFromString(b,"application/xml");for(var g=c.getElementsByTagName("name"),h=c.getElementsByTagName("value"),i=0;i<g.length;i++)d[g[i].childNodes[0].nodeValue]=h[i].childNodes[0].nodeValue;return d.hasOwnProperty("Content")&&(d["Content-Type"]=d.Content,delete d.Content),d}function d(a){var c=void 0,d=void 0,e=null,f=new DOMParser,g="utf16"===p?new Uint16Array(a):new Uint8Array(a);if(b(),c=String.fromCharCode.apply(null,g),d=f.parseFromString(c,"application/xml"),d.getElementsByTagName("Challenge")[0]){var h=d.getElementsByTagName("Challenge")[0].childNodes[0].nodeValue;h&&(e=q.decode(h))}return e}function e(a){if(a)for(var b=new DataView(a),c=b.getUint16(4,!0),d=6,e=new DOMParser,f=0;f<c;f++){var g=b.getUint16(d,!0);d+=2;var h=b.getUint16(d,!0);if(d+=2,1===g){var i=a.slice(d,d+h),j=String.fromCharCode.apply(null,new Uint16Array(i)),k=e.parseFromString(j,"application/xml");if(k.getElementsByTagName("LA_URL")[0]){var l=k.getElementsByTagName("LA_URL")[0].childNodes[0].nodeValue;if(l)return l}if(k.getElementsByTagName("LUI_URL")[0]){var m=k.getElementsByTagName("LUI_URL")[0].childNodes[0].nodeValue;if(m)return m}}else d+=h}return null}function f(a){var c=new Uint8Array([112,115,115,104,0,0,0,0]),d=new Uint8Array([154,4,240,121,152,64,66,134,171,146,230,91,224,136,95,149]),e=0,f=null,h=void 0,i=void 0,j=void 0,k=void 0,l=void 0;if(b(),"pssh"in a)return g.default.parseInitDataFromContentProtection(a,q);if("pro"in a)f=q.decodeArray(a.pro.__text);else{if(!("prheader"in a))return null;f=q.decodeArray(a.prheader.__text)}return h=f.length,i=4+c.length+d.length+4+h,j=new ArrayBuffer(i),k=new Uint8Array(j),l=new DataView(j),l.setUint32(e,i),e+=4,k.set(c,e),e+=c.length,k.set(d,e),e+=d.length,l.setUint32(e,h),e+=4,k.set(f,e),e+=h,k.buffer}function h(a){if("utf8"!==a&&"utf16"!==a)throw new Error("Illegal PlayReady message format! -- "+a);p=a}function i(a){a&&(n=a)}function o(){var a=void 0,c=void 0,d=void 0,e=void 0;if(b(),n&&n.cdmData){for(a=[],e=0;e<n.cdmData.length;++e)a.push(n.cdmData.charCodeAt(e)),a.push(0);for(a=String.fromCharCode.apply(null,a),a=q.encode(a),c=m.replace("%CUSTOMDATA%",a),d=[],e=0;e<c.length;++e)d.push(c.charCodeAt(e)),d.push(0);return new Uint8Array(d).buffer}return null}a=a||{};var p="utf16",q=a.BASE64;return{uuid:j,schemeIdURI:l,systemString:k,getInitData:f,getRequestHeadersFromMessage:c,getLicenseRequestFromMessage:d,getLicenseServerURLFromInitData:e,getCDMData:o,setPlayReadyMessageFormat:h,init:i}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(147),g=d(f),h=a(102),i=d(h),j="9a04f079-9840-4286-ab92-e65be0885f95",k=i.default.PLAYREADY_KEYSTEM_STRING,l="urn:uuid:"+j,m='<PlayReadyCDMData type="LicenseAcquisition"><LicenseAcquisition version="1.0" Proactive="false"><CustomData encoding="base64encoded">%CUSTOMDATA%</CustomData></LicenseAcquisition></PlayReadyCDMData>',n=void 0;e.__dashjs_factory_name="KeySystemPlayReady",c.default=dashjs.FactoryMaker.getSingletonFactory(e),b.exports=c.default},{102:102,147:147}],154:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(a,b){var c=null;if(a){for(var d=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(b))),e=[],f=0;f<d.kids.length;f++){var h=d.kids[f],j=a.clearkeys&&a.clearkeys.hasOwnProperty(h)?a.clearkeys[h]:null;if(!j)throw new Error("DRM: ClearKey keyID ("+h+") is not known!");e.push(new g.default(h,j))}c=new i.default(e),l("Warning: ClearKey schemeIdURI is using W3C Common PSSH systemID (1077efec-c0b2-4d02-ace3-3c1e52e2fb4b) in Content Protection. See DASH-IF IOP v4.1 section 7.6.2.4")}return c}function c(a){return k.default.parseInitDataFromContentProtection(a,j)}function d(){return null}function e(a){return new Uint8Array(a)}function f(){return null}function h(){return null}var j=a.BASE64,l=a.log;return{uuid:n,schemeIdURI:p,systemString:o,getInitData:c,getRequestHeadersFromMessage:d,getLicenseRequestFromMessage:e,getLicenseServerURLFromInitData:f,getCDMData:h,getClearKeysFromProtectionData:b}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(166),g=d(f),h=a(163),i=d(h),j=a(147),k=d(j),l=a(102),m=d(l),n="1077efec-c0b2-4d02-ace3-3c1e52e2fb4b",o=m.default.CLEARKEY_KEYSTEM_STRING,p="urn:uuid:"+n;e.__dashjs_factory_name="KeySystemW3CClearKey",c.default=dashjs.FactoryMaker.getSingletonFactory(e),b.exports=c.default},{102:102,147:147,163:163,166:166}],155:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(a){a&&(m=a)}function c(a,b){var c=void 0,d=!0,e=16,f=void 0,g=void 0,h=void 0;for(c=new Uint8Array(a),g=0;g<=c.length-(e+2);g++)if(18===c[g]&&16===c[g+1]){for(f=g+2,h=f;h<f+e;h++)if(255!==c[h]){d=!1;break}break}return d&&c.set(b,f),c.buffer}function d(a){var b=null;return b=m&&m.pssh?n.decodeArray(m.pssh).buffer:g.default.parseInitDataFromContentProtection(a,n),b&&(b=c(b,a["cenc:default_KID"])),b}function e(){return null}function f(a){return new Uint8Array(a)}function h(){return null}function i(){return null}a=a||{};var m=null,n=a.BASE64;return{uuid:j,schemeIdURI:l,systemString:k,init:b,getInitData:d,getRequestHeadersFromMessage:e,getLicenseRequestFromMessage:f,getLicenseServerURLFromInitData:h,getCDMData:i}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(147),g=d(f),h=a(102),i=d(h),j="edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",k=i.default.WIDEVINE_KEYSTEM_STRING,l="urn:uuid:"+j;e.__dashjs_factory_name="KeySystemWidevine",c.default=dashjs.FactoryMaker.getSingletonFactory(e),b.exports=c.default},{102:102,147:147}],156:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){E=null,F=null,H=[],I=[],G=(0,g.default)(x).getInstance(),K=u()}function c(){E&&w();for(var a=0;a<I.length;a++)p(I[a]);y.trigger(z.TEARDOWN_COMPLETE)}function d(){return F}function e(){for(var a=[],b=0;b<H.length;b++)a.push(H[b].initData);for(var b=0;b<I.length;b++)a.push(I[b].initData);return a}function f(a){var b=E;b||(b=document.createElement("video"));for(var c=!1,d=0;d<a.length;d++)for(var e=a[d].ks.systemString,f=a[d].configs,g=null,h=null,i=0;i<f.length;i++){var j=f[i].videoCapabilities;if(j&&0!==j.length){h=[];for(var k=0;k<j.length;k++)""!==b.canPlayType(j[k].contentType,e)&&h.push(j[k])}if(!(!g&&!h||g&&0===g.length||h&&0===h.length)){c=!0;var l=new o.default(g,h),m=G.getKeySystemBySystemString(e);y.trigger(z.KEY_SYSTEM_ACCESS_COMPLETE,{data:new q.default(m,l)});break}}c||y.trigger(z.KEY_SYSTEM_ACCESS_COMPLETE,{error:"Key system access denied! -- No valid audio/video content configurations detected!"})}function h(a){F=a.keySystem,y.trigger(z.INTERNAL_KEY_SYSTEM_SELECTED)}function j(a){E!==a&&(E&&w(),(E=a)&&(E.addEventListener(B.keyerror,K),E.addEventListener(B.needkey,K),E.addEventListener(B.keymessage,K),E.addEventListener(B.keyadded,K),y.trigger(z.VIDEO_ELEMENT_SELECTED)))}function l(a){if(!F)throw new Error("Can not create sessions until you have selected a key system");if(J||0===I.length){var b={sessionID:null,initData:a,getSessionID:function(){return this.sessionID},getExpirationTime:function(){return NaN},getSessionType:function(){return"temporary"}};return H.push(b),E[B.generateKeyRequest](F.systemString,new Uint8Array(a)),b}throw new Error("Multiple sessions not allowed!")}function n(a,b){var c=a.sessionID;if(G.isClearKey(F))for(var d=0;d<b.keyPairs.length;d++)E[B.addKey](F.systemString,b.keyPairs[d].key,b.keyPairs[d].keyID,c);else E[B.addKey](F.systemString,new Uint8Array(b),new Uint8Array(a.initData),c)}function p(a){E[B.cancelKeyRequest](F.systemString,a.sessionID)}function r(){}function s(){}function t(){}function u(){return{handleEvent:function(a){var b=null;switch(a.type){case B.needkey:var c=ArrayBuffer.isView(a.initData)?a.initData.buffer:a.initData;y.trigger(z.NEED_KEY,{key:new i.default(c,"cenc")});break;case B.keyerror:if(b=v(I,a.sessionId),b||(b=v(H,a.sessionId)),b){var d="";switch(a.errorCode.code){case 1:d+="MEDIA_KEYERR_UNKNOWN - An unspecified error occurred. This value is used for errors that don't match any of the other codes.";break;case 2:d+="MEDIA_KEYERR_CLIENT - The Key System could not be installed or updated.";break;case 3:d+="MEDIA_KEYERR_SERVICE - The message passed into update indicated an error from the license service.";break;case 4:d+="MEDIA_KEYERR_OUTPUT - There is no available output device with the required characteristics for the content protection system.";break;case 5:d+="MEDIA_KEYERR_HARDWARECHANGE - A hardware configuration change caused a content protection error.";break;case 6:d+="MEDIA_KEYERR_DOMAIN - An error occurred in a multi-device domain licensing configuration. The most common error is a failure to join the domain."}d+="  System Code = "+a.systemCode,y.trigger(z.KEY_ERROR,{data:new k.default(b,d)})}else A("No session token found for key error");break;case B.keyadded:b=v(I,a.sessionId),b||(b=v(H,a.sessionId)),b?(A("DRM: Key added."),y.trigger(z.KEY_ADDED,{data:b})):A("No session token found for key added");break;case B.keymessage:if(J=null!==a.sessionId&&void 0!==a.sessionId,J?!(b=v(I,a.sessionId))&&H.length>0&&(b=H.shift(),I.push(b),b.sessionID=a.sessionId):H.length>0&&(b=H.shift(),I.push(b),0!==H.length&&C.mediaKeyMessageError("Multiple key sessions were creates with a user-agent that does not support sessionIDs!! Unpredictable behavior ahead!")),b){var e=ArrayBuffer.isView(a.message)?a.message.buffer:a.message;b.keyMessage=e,y.trigger(z.INTERNAL_KEY_MESSAGE,{data:new m.default(b,e,a.defaultURL)})}else A("No session token found for key message")}}}}function v(a,b){if(b&&a){for(var c=a.length,d=0;d<c;d++)if(a[d].sessionID==b)return a[d];return null}return null}function w(){E.removeEventListener(B.keyerror,K),E.removeEventListener(B.needkey,K),E.removeEventListener(B.keymessage,K),E.removeEventListener(B.keyadded,K)}a=a||{};var x=this.context,y=a.eventBus,z=a.events,A=a.log,B=a.api,C=a.errHandler,D=void 0,E=void 0,F=void 0,G=void 0,H=void 0,I=void 0,J=void 0,K=void 0;return D={getAllInitData:e,requestKeySystemAccess:f,getKeySystem:d,selectKeySystem:h,setMediaElement:j,createKeySession:l,updateKeySession:n,closeKeySession:p,setServerCertificate:r,loadKeySession:s,removeKeySession:t,reset:c},b(),D}Object.defineProperty(c,"__esModule",{value:!0});var f=a(151),g=d(f),h=a(170),i=d(h),j=a(164),k=d(j),l=a(165),m=d(l),n=a(168),o=d(n),p=a(167),q=d(p);e.__dashjs_factory_name="ProtectionModel_01b",c.default=dashjs.FactoryMaker.getClassFactory(e),b.exports=c.default},{151:151,164:164,165:165,167:167,168:168,170:170}],157:[function(a,b,c){"use strict";function d(a){
return a&&a.__esModule?a:{default:a}}function e(a){function b(){E=null,F=null,G=null,H=[],J=(0,g.default)(z).getInstance(),I=w()}function c(){var a=H.length,b=void 0;0!==a?function(){for(var c=function(a){x(a),0===H.length&&(F?(F.removeEventListener("encrypted",I),F.setMediaKeys(null).then(function(){A.trigger(B.TEARDOWN_COMPLETE)})):A.trigger(B.TEARDOWN_COMPLETE))},d=0;d<a;d++)b=H[d],function(a){b.session.closed.then(function(){c(a)}),v(b).catch(function(){c(a)})}(b)}():A.trigger(B.TEARDOWN_COMPLETE)}function d(){return E}function e(){for(var a=[],b=0;b<H.length;b++)a.push(H[b].initData);return a}function f(a){u(a,0)}function h(a){a.mksa.createMediaKeys().then(function(b){E=a.keySystem,G=b,F&&F.setMediaKeys(G).then(function(){A.trigger(B.INTERNAL_KEY_SYSTEM_SELECTED)})}).catch(function(){A.trigger(B.INTERNAL_KEY_SYSTEM_SELECTED,{error:"Error selecting keys system ("+a.keySystem.systemString+")! Could not create MediaKeys -- TODO"})})}function j(a){F!==a&&(F&&(F.removeEventListener("encrypted",I),F.setMediaKeys(null)),(F=a)&&(F.addEventListener("encrypted",I),G&&F.setMediaKeys(G)))}function l(a){if(!E||!G)throw new Error("Can not set server certificate until you have selected a key system");G.setServerCertificate(a).then(function(){C("DRM: License server certificate successfully updated."),A.trigger(B.SERVER_CERTIFICATE_UPDATED)}).catch(function(a){A.trigger(B.SERVER_CERTIFICATE_UPDATED,{error:"Error updating server certificate -- "+a.name})})}function n(a,b,c){if(!E||!G)throw new Error("Can not create sessions until you have selected a key system");var d=G.createSession(c),e=y(d,a,c),f=this.getKeySystem(),g=f.systemString===q.default.CLEARKEY_KEYSTEM_STRING&&b&&b.clearkeys?"keyids":"cenc";d.generateRequest(g,a).then(function(){C("DRM: Session created.  SessionID = "+e.getSessionID()),A.trigger(B.KEY_SESSION_CREATED,{data:e})}).catch(function(a){x(e),A.trigger(B.KEY_SESSION_CREATED,{data:null,error:"Error generating key request -- "+a.name})})}function p(a,b){var c=a.session;J.isClearKey(E)&&(b=b.toJWK()),c.update(b).catch(function(b){A.trigger(B.KEY_ERROR,{data:new k.default(a,"Error sending update() message! "+b.name)})})}function r(a){if(!E||!G)throw new Error("Can not load sessions until you have selected a key system");var b=G.createSession();b.load(a).then(function(c){if(c){var d=y(b);C("DRM: Session created.  SessionID = "+d.getSessionID()),A.trigger(B.KEY_SESSION_CREATED,{data:d})}else A.trigger(B.KEY_SESSION_CREATED,{data:null,error:"Could not load session! Invalid Session ID ("+a+")"})}).catch(function(b){A.trigger(B.KEY_SESSION_CREATED,{data:null,error:"Could not load session ("+a+")! "+b.name})})}function s(a){a.session.remove().then(function(){C("DRM: Session removed.  SessionID = "+a.getSessionID()),A.trigger(B.KEY_SESSION_REMOVED,{data:a.getSessionID()})},function(b){A.trigger(B.KEY_SESSION_REMOVED,{data:null,error:"Error removing session ("+a.getSessionID()+"). "+b.name})})}function t(a){v(a).catch(function(b){x(a),A.trigger(B.KEY_SESSION_CLOSED,{data:null,error:"Error closing session ("+a.getSessionID()+") "+b.name})})}function u(a,b){!function(b){var c=a[b].ks,d=a[b].configs;navigator.requestMediaKeySystemAccess(c.systemString,d).then(function(a){var b="function"==typeof a.getConfiguration?a.getConfiguration():null,d=new o.default(c,b);d.mksa=a,A.trigger(B.KEY_SYSTEM_ACCESS_COMPLETE,{data:d})}).catch(function(){++b<a.length?u(a,b):A.trigger(B.KEY_SYSTEM_ACCESS_COMPLETE,{error:"Key system access denied!"})})}(b)}function v(a){var b=a.session;return b.removeEventListener("keystatuseschange",a),b.removeEventListener("message",a),b.close()}function w(){return{handleEvent:function(a){switch(a.type){case"encrypted":if(a.initData){var b=ArrayBuffer.isView(a.initData)?a.initData.buffer:a.initData;A.trigger(B.NEED_KEY,{key:new i.default(b,a.initDataType)})}}}}}function x(a){for(var b=0;b<H.length;b++)if(H[b]===a){H.splice(b,1);break}}function y(a,b,c){var d={session:a,initData:b,handleEvent:function(a){switch(a.type){case"keystatuseschange":A.trigger(B.KEY_STATUSES_CHANGED,{data:this});break;case"message":var b=ArrayBuffer.isView(a.message)?a.message.buffer:a.message;A.trigger(B.INTERNAL_KEY_MESSAGE,{data:new m.default(this,b,void 0,a.messageType)})}},getSessionID:function(){return a.sessionId},getExpirationTime:function(){return a.expiration},getKeyStatuses:function(){return a.keyStatuses},getSessionType:function(){return c}};return a.addEventListener("keystatuseschange",d),a.addEventListener("message",d),a.closed.then(function(){x(d),C("DRM: Session closed.  SessionID = "+d.getSessionID()),A.trigger(B.KEY_SESSION_CLOSED,{data:d.getSessionID()})}),H.push(d),d}a=a||{};var z=this.context,A=a.eventBus,B=a.events,C=a.log,D=void 0,E=void 0,F=void 0,G=void 0,H=void 0,I=void 0,J=void 0;return D={getAllInitData:e,requestKeySystemAccess:f,getKeySystem:d,selectKeySystem:h,setMediaElement:j,setServerCertificate:l,createKeySession:n,updateKeySession:p,loadKeySession:r,removeKeySession:s,closeKeySession:t,reset:c},b(),D}Object.defineProperty(c,"__esModule",{value:!0});var f=a(151),g=d(f),h=a(170),i=d(h),j=a(164),k=d(j),l=a(165),m=d(l),n=a(167),o=d(n),p=a(102),q=d(p);e.__dashjs_factory_name="ProtectionModel_21Jan2015",c.default=dashjs.FactoryMaker.getClassFactory(e),b.exports=c.default},{102:102,151:151,164:164,165:165,167:167,170:170}],158:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){D=null,E=null,F=null,G=null,H=[],J=(0,g.default)(x).getInstance(),I=u()}function c(){try{for(var a=0;a<H.length;a++)p(H[a]);D&&D.removeEventListener(B.needkey,I),y.trigger(z.TEARDOWN_COMPLETE)}catch(b){y.trigger(z.TEARDOWN_COMPLETE,{error:"Error tearing down key sessions and MediaKeys! -- "+b.message})}}function d(){return E}function e(){for(var a=[],b=0;b<H.length;b++)a.push(H[b].initData);return a}function f(a){for(var b=!1,c=0;c<a.length;c++)for(var d=a[c].ks.systemString,e=a[c].configs,f=null,g=null,h=0;h<e.length;h++){var i=e[h].audioCapabilities,j=e[h].videoCapabilities;if(i&&0!==i.length){f=[];for(var k=0;k<i.length;k++)window[B.MediaKeys].isTypeSupported(d,i[k].contentType)&&f.push(i[k])}if(j&&0!==j.length){g=[];for(var l=0;l<j.length;l++)window[B.MediaKeys].isTypeSupported(d,j[l].contentType)&&g.push(j[l])}if(!(!f&&!g||f&&0===f.length||g&&0===g.length)){b=!0;var m=new o.default(f,g),n=J.getKeySystemBySystemString(d);y.trigger(z.KEY_SYSTEM_ACCESS_COMPLETE,{data:new q.default(n,m)});break}}b||y.trigger(z.KEY_SYSTEM_ACCESS_COMPLETE,{error:"Key system access denied! -- No valid audio/video content configurations detected!"})}function h(a){try{F=a.mediaKeys=new window[B.MediaKeys](a.keySystem.systemString),E=a.keySystem,G=a,D&&v(),y.trigger(z.INTERNAL_KEY_SYSTEM_SELECTED)}catch(b){y.trigger(z.INTERNAL_KEY_SYSTEM_SELECTED,{error:"Error selecting keys system ("+E.systemString+")! Could not create MediaKeys -- TODO"})}}function j(a){D!==a&&(D&&D.removeEventListener(B.needkey,I),(D=a)&&(D.addEventListener(B.needkey,I),F&&v()))}function l(a,b,c,d){if(!E||!F||!G)throw new Error("Can not create sessions until you have selected a key system");var e=null;if(null!==G.ksConfiguration.videoCapabilities&&G.ksConfiguration.videoCapabilities.length>0&&(e=G.ksConfiguration.videoCapabilities[0]),null===e&&null!==G.ksConfiguration.audioCapabilities&&G.ksConfiguration.audioCapabilities.length>0&&(e=G.ksConfiguration.audioCapabilities[0]),null===e)throw new Error("Can not create sessions for unknown content types.");var f=e.contentType,g=F.createSession(f,new Uint8Array(a),d?new Uint8Array(d):null),h=w(g,a);g.addEventListener(B.error,h),g.addEventListener(B.message,h),g.addEventListener(B.ready,h),g.addEventListener(B.close,h),H.push(h),A("DRM: Session created.  SessionID = "+h.getSessionID()),y.trigger(z.KEY_SESSION_CREATED,{data:h})}function n(a,b){var c=a.session;J.isClearKey(E)?c.update(new Uint8Array(b.toJWK())):c.update(new Uint8Array(b))}function p(a){var b=a.session;b.removeEventListener(B.error,a),b.removeEventListener(B.message,a),b.removeEventListener(B.ready,a),b.removeEventListener(B.close,a);for(var c=0;c<H.length;c++)if(H[c]===a){H.splice(c,1);break}b[B.release]()}function r(){}function s(){}function t(){}function u(){return{handleEvent:function(a){switch(a.type){case B.needkey:if(a.initData){var b=ArrayBuffer.isView(a.initData)?a.initData.buffer:a.initData;y.trigger(z.NEED_KEY,{key:new i.default(b,"cenc")})}}}}}function v(){var a=null,b=function(){D.removeEventListener("loadedmetadata",a),D[B.setMediaKeys](F),y.trigger(z.VIDEO_ELEMENT_SELECTED)};D.readyState>=1?b():(a=b.bind(this),D.addEventListener("loadedmetadata",a))}function w(a,b){return{session:a,initData:b,getSessionID:function(){return this.session.sessionId},getExpirationTime:function(){return NaN},getSessionType:function(){return"temporary"},handleEvent:function(a){switch(a.type){case B.error:y.trigger(z.KEY_ERROR,{data:new k.default(this,"KeyError")});break;case B.message:var b=ArrayBuffer.isView(a.message)?a.message.buffer:a.message;y.trigger(z.INTERNAL_KEY_MESSAGE,{data:new m.default(this,b,a.destinationURL)});break;case B.ready:A("DRM: Key added."),y.trigger(z.KEY_ADDED);break;case B.close:A("DRM: Session closed.  SessionID = "+this.getSessionID()),y.trigger(z.KEY_SESSION_CLOSED,{data:this.getSessionID()})}}}}a=a||{};var x=this.context,y=a.eventBus,z=a.events,A=a.log,B=a.api,C=void 0,D=void 0,E=void 0,F=void 0,G=void 0,H=void 0,I=void 0,J=void 0;return C={getAllInitData:e,requestKeySystemAccess:f,getKeySystem:d,selectKeySystem:h,setMediaElement:j,createKeySession:l,updateKeySession:n,closeKeySession:p,setServerCertificate:r,loadKeySession:s,removeKeySession:t,reset:c},b(),C}Object.defineProperty(c,"__esModule",{value:!0});var f=a(151),g=d(f),h=a(170),i=d(h),j=a(164),k=d(j),l=a(165),m=d(l),n=a(168),o=d(n),p=a(167),q=d(p);e.__dashjs_factory_name="ProtectionModel_3Feb2014",c.default=dashjs.FactoryMaker.getClassFactory(e),b.exports=c.default},{151:151,164:164,165:165,167:167,168:168,170:170}],159:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a,b){var c=JSON.parse(String.fromCharCode.apply(null,new Uint8Array(b)));a+="/?";for(var d=0;d<c.kids.length;d++)a+=c.kids[d]+"&";return a=a.substring(0,a.length-1)}function b(){return"GET"}function c(){return"json"}function d(a){if(!a.hasOwnProperty("keys"))return null;for(var b=[],c=0;c<a.keys.length;c++){var d=a.keys[c],e=d.kid.replace(/=/g,""),f=d.k.replace(/=/g,"");b.push(new g.default(e,f))}return new i.default(b)}function e(a){return String.fromCharCode.apply(null,new Uint8Array(a))}return{getServerURLFromMessage:a,getHTTPMethod:b,getResponseType:c,getLicenseMessage:d,getErrorResponse:e}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(166),g=d(f),h=a(163),i=d(h);e.__dashjs_factory_name="ClearKey",c.default=dashjs.FactoryMaker.getSingletonFactory(e),b.exports=c.default},{163:163,166:166}],160:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){if(!i||!i.hasOwnProperty("decodeArray"))throw new Error("Missing config parameter(s)")}function c(a){return a}function d(){return"POST"}function e(a){return j[a].responseType}function f(a,c){return b(),j[c].getLicenseMessage(a)}function h(a,b){return j[b].getErrorResponse(a)}a=a||{};var i=a.BASE64,j={};j[g.default.WIDEVINE_KEYSTEM_STRING]={responseType:"json",getLicenseMessage:function(a){return i.decodeArray(a.license)},getErrorResponse:function(a){return a}},j[g.default.PLAYREADY_KEYSTEM_STRING]={responseType:"arraybuffer",getLicenseMessage:function(a){return a},getErrorResponse:function(a){return String.fromCharCode.apply(null,new Uint8Array(a))}};return{getServerURLFromMessage:c,getHTTPMethod:d,getResponseType:e,getLicenseMessage:f,getErrorResponse:h}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(102),g=d(f);e.__dashjs_factory_name="DRMToday",c.default=dashjs.FactoryMaker.getSingletonFactory(e),b.exports=c.default},{102:102}],161:[function(a,b,c){"use strict";function d(){function a(a){var b=String.fromCharCode.apply(null,new Uint8Array(a));return decodeURIComponent(escape(b))}function b(b){if(window.DOMParser){var c=a(b),d=new window.DOMParser,e=d.parseFromString(c,"text/xml"),f=e?e.getElementsByTagNameNS(i,"Envelope")[0]:null,g=f?f.getElementsByTagNameNS(i,"Body")[0]:null;if(g?g.getElementsByTagNameNS(i,"Fault")[0]:null)return null}return b}function c(b){var c="",d="",e="",f=-1,g=-1;if(window.DOMParser){var h=a(b),j=new window.DOMParser,k=j.parseFromString(h,"text/xml"),l=k?k.getElementsByTagNameNS(i,"Envelope")[0]:null,m=l?l.getElementsByTagNameNS(i,"Body")[0]:null,n=m?m.getElementsByTagNameNS(i,"Fault")[0]:null,o=n?n.getElementsByTagName("detail")[0]:null,p=o?o.getElementsByTagName("Exception")[0]:null,q=null;if(null===n)return h;q=n.getElementsByTagName("faultstring")[0].firstChild,c=q?q.nodeValue:null,null!==p&&(q=p.getElementsByTagName("StatusCode")[0],d=q?q.firstChild.nodeValue:null,q=p.getElementsByTagName("Message")[0],e=q?q.firstChild.nodeValue:null,f=e?e.lastIndexOf("[")+1:-1,g=e?e.indexOf("]"):-1,e=e?e.substring(f,g):"")}var r="code: "+d+", name: "+c;return e&&(r+=", message: "+e),r}function d(a){return a}function e(){return"POST"}function f(){return"arraybuffer"}function g(a){return b.call(this,a)}function h(a){return c.call(this,a)}var i="http://schemas.xmlsoap.org/soap/envelope/";return{getServerURLFromMessage:d,getHTTPMethod:e,getResponseType:f,getLicenseMessage:g,getErrorResponse:h}}Object.defineProperty(c,"__esModule",{value:!0}),d.__dashjs_factory_name="PlayReady",c.default=dashjs.FactoryMaker.getSingletonFactory(d),b.exports=c.default},{}],162:[function(a,b,c){"use strict";function d(){function a(a){return a}function b(){return"POST"}function c(){return"arraybuffer"}function d(a){return a}function e(a){return String.fromCharCode.apply(null,new Uint8Array(a))}return{getServerURLFromMessage:a,getHTTPMethod:b,getResponseType:c,getLicenseMessage:d,getErrorResponse:e}}Object.defineProperty(c,"__esModule",{value:!0}),d.__dashjs_factory_name="Widevine",c.default=dashjs.FactoryMaker.getSingletonFactory(d),b.exports=c.default},{}],163:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=function(){function a(b,c){if(d(this,a),c&&"persistent"!==c&&"temporary"!==c)throw new Error("Invalid ClearKey key set type!  Must be one of 'persistent' or 'temporary'");this.keyPairs=b,this.type=c}return e(a,[{key:"toJWK",value:function(){var a=void 0,b=this.keyPairs.length,c={keys:[]};for(a=0;a<b;a++){var d={kty:"oct",alg:"A128KW",kid:this.keyPairs[a].keyID,k:this.keyPairs[a].key};c.keys.push(d)}this.type&&(c.type=this.type);var e=JSON.stringify(c),f=e.length,g=new ArrayBuffer(f),h=new Uint8Array(g);for(a=0;a<f;a++)h[a]=e.charCodeAt(a);return g}}]),a}();c.default=f,b.exports=c.default},{}],164:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(b,c){d(this,a),this.sessionToken=b,this.error=c};c.default=e,b.exports=c.default},{}],165:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(b,c,e,f){d(this,a),this.sessionToken=b,this.message=c,this.defaultURL=e,this.messageType=f||"license-request"};c.default=e,b.exports=c.default},{}],166:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(b,c){d(this,a),this.keyID=b,this.key=c};c.default=e,b.exports=c.default},{}],167:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(b,c){d(this,a),this.keySystem=b,this.ksConfiguration=c};c.default=e,b.exports=c.default},{}],168:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(b,c,e,f,g){d(this,a),this.initDataTypes=["cenc"],b&&b.length&&(this.audioCapabilities=b),c&&c.length&&(this.videoCapabilities=c),this.distinctiveIdentifier=e,this.persistentState=f,this.sessionTypes=g};c.default=e,b.exports=c.default},{}],169:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(b,c){d(this,a),this.contentType=b,this.robustness=c};c.default=e,b.exports=c.default},{}],170:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(b,c){d(this,a),this.initData=b,this.initDataType=c};c.default=e,b.exports=c.default},{}],171:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a,b){var c=b.droppedVideoFrames-e;e=b.droppedVideoFrames;var g=b.totalVideoFrames-f;f=b.totalVideoFrames,isNaN(a)||(d[a]?(d[a].droppedVideoFrames+=c,d[a].totalVideoFrames+=g):d[a]={droppedVideoFrames:c,totalVideoFrames:g})}function b(){return d}function c(a){d=[],e=a.droppedVideoFrames,f=a.totalVideoFrames}var d=[],e=0,f=0;return{push:a,getFrameHistory:b,reset:c}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f);e.__dashjs_factory_name="DroppedFramesHistory";var h=g.default.getClassFactory(e);c.default=h,b.exports=c.default},{51:51}],172:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){return n.mediaInfo.type}function c(){return n.mediaInfo.streamInfo}function d(){return n.mediaInfo}function e(){return n}function f(){return m}function g(){return l}function h(){return o}function i(){return p}function j(){return q}function k(){return r}a=a||{};var l=a.abrController,m=a.streamProcessor,n=a.streamProcessor.getCurrentRepresentationInfo(),o=a.switchHistory,p=a.droppedFramesHistory,q=a.currentRequest,r=a.useBufferOccupancyABR;return{getMediaType:b,getMediaInfo:d,getDroppedFramesHistory:i,getCurrentRequest:j,getSwitchHistory:h,getStreamInfo:c,getStreamProcessor:f,getAbrController:g,getRepresentationInfo:e,useBufferOccupancyABR:k}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f);e.__dashjs_factory_name="RulesContext",c.default=g.default.getClassFactory(e),b.exports=c.default},{51:51}],173:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b,c){function d(a){var b=i.DEFAULT;return a!==i.DEFAULT&&a!==i.STRONG&&a!==i.WEAK||(b=a),b}var e=void 0,f=void 0,g=void 0;return e=void 0===a?h:a,f=d(c),g=void 0===b?null:b,{quality:e,reason:g,priority:f}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f),h=-1,i={DEFAULT:.5,STRONG:1,WEAK:0};e.__dashjs_factory_name="SwitchRequest";var j=g.default.getClassFactory(e);j.NO_CHANGE=h,j.PRIORITY=i,g.default.updateClassFactory(e.__dashjs_factory_name,j),c.default=j,b.exports=c.default},{51:51}],174:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a){a.newValue===i.default.NO_CHANGE&&(a.newValue=a.oldValue),d[a.oldValue]||(d[a.oldValue]={noDrops:0,drops:0,dropSize:0});var b=a.newValue-a.oldValue,c=b<0?1:0,f=c?-b:0,g=c?0:1;if(d[a.oldValue].drops+=c,d[a.oldValue].dropSize+=f,d[a.oldValue].noDrops+=g,e.push({idx:a.oldValue,noDrop:g,drop:c,dropSize:f}),e.length>j){var h=e.shift();d[h.idx].drops-=h.drop,d[h.idx].dropSize-=h.dropSize,d[h.idx].noDrops-=h.noDrop}}function b(){return d}function c(){d=[],e=[]}var d=[],e=[];return{push:a,getSwitchRequests:b,reset:c}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f),h=a(173),i=d(h),j=8;e.__dashjs_factory_name="SwitchRequestHistory";var k=g.default.getClassFactory(e);c.default=k,b.exports=c.default},{173:173,51:51}],175:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){F={throughputHalfLife:{fast:x,slow:w},latencyHalfLife:{fast:z,slow:y}},p()}function c(a,b,c){return a===g.default.VIDEO?c<A.getCacheLoadThresholdForType(g.default.VIDEO):a===g.default.AUDIO?c<A.getCacheLoadThresholdForType(g.default.AUDIO):void 0}function d(a,b,d){if(b.trace&&b.trace.length){var f=b.tresponse.getTime()-b.trequest.getTime()||1,g=b._tfinish.getTime()-b.tresponse.getTime()||1,h=b.trace.reduce(function(a,b){return a+b.b[0]},0),i=d?g:f+g,j=Math.round(8*h/i);if(n(a),c(a,f,g)){if(B[a].length>0&&!B[a].hasCachedEntries)return;B[a].hasCachedEntries=!0}else B[a]&&B[a].hasCachedEntries&&o(a);B[a].push(j),B[a].length>q&&B[a].shift(),C[a].push(f),C[a].length>q&&C[a].shift(),e(D[a],j,.001*g,F.throughputHalfLife),e(E[a],f,1,F.latencyHalfLife)}}function e(a,b,c,d){var e=Math.pow(.5,c/d.fast);a.fastEstimate=(1-e)*b+e*a.fastEstimate;var f=Math.pow(.5,c/d.slow);a.slowEstimate=(1-f)*b+f*a.slowEstimate,a.totalWeight+=c}function f(a,b,c){var d=void 0,e=void 0;if(a?(d=B[b],e=c?r:s):(d=C[b],e=t),d){if(e>=d.length)e=d.length;else if(a)for(var f=1;f<e;++f){var g=d[-f]/d[-f-1];if((g>=v||g<=1/u)&&(e+=1)===d.length)break}}else e=0;return e}function h(a,b,c){return A.getMovingAverageMethod()!==g.default.MOVING_AVERAGE_SLIDING_WINDOW?j(a,b):i(a,b,c)}function i(a,b,c){var d=f(a,b,c),e=a?B:C,g=e[b];return 0!==d&&g&&0!==g.length?(g=g.slice(-d),g.reduce(function(a,b){return a+b})/g.length):NaN}function j(a,b){var c=a?F.throughputHalfLife:F.latencyHalfLife,d=a?D[b]:E[b];if(!d||d.totalWeight<=0)return NaN;var e=d.fastEstimate/(1-Math.pow(.5,d.totalWeight/c.fast)),f=d.slowEstimate/(1-Math.pow(.5,d.totalWeight/c.slow));return a?Math.min(e,f):Math.max(e,f)}function k(a,b){return h(!0,a,b)}function l(a,b){var c=k(a,b);return isNaN(c)||(c*=A.getBandwidthSafetyFactor()),c}function m(a){return h(!1,a)}function n(a){B[a]=B[a]||[],C[a]=C[a]||[],D[a]=D[a]||{fastEstimate:0,slowEstimate:0,totalWeight:0},E[a]=E[a]||{fastEstimate:0,slowEstimate:0,totalWeight:0}}function o(a){delete B[a],delete C[a],delete D[a],delete E[a],n(a)}function p(){B={},C={},D={},E={}}a=a||{};var q=20,r=3,s=4,t=4,u=1.3,v=1.3,w=8,x=3,y=2,z=1,A=a.mediaPlayerModel,B=void 0,C=void 0,D=void 0,E=void 0,F=void 0,G={push:d,getAverageThroughput:k,getSafeAverageThroughput:l,getAverageLatency:m,reset:p};return b(),G}Object.defineProperty(c,"__esModule",{value:!0});var f=a(100),g=d(f),h=a(51),i=d(h);e.__dashjs_factory_name="ThroughputHistory",c.default=i.default.getClassFactory(e),b.exports=c.default},{100:100,51:51}],176:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){r=[],s=[],l.getUseDefaultABRRules()&&(r.push((0,q.default)(j).create({metricsModel:n,dashMetrics:p,mediaPlayerModel:l})),r.push((0,g.default)(j).create({metricsModel:n,dashMetrics:p})),r.push((0,i.default)(j).create({metricsModel:n,dashMetrics:p})),r.push((0,o.default)(j).create()),r.push((0,m.default)(j).create()),s.push((0,k.default)(j).create({metricsModel:n,dashMetrics:p,mediaPlayerModel:l}))),l.getABRCustomRules().forEach(function(a){a.type===v&&r.push(a.rule(j).create()),a.type===w&&s.push(a.rule(j).create())})}function c(a){return a.filter(function(a){return a.quality>u.default.NO_CHANGE})}function d(a){var b={},c=void 0,d=void 0,e=void 0,f=void 0,g=void 0;if(0!==a.length){for(b[u.default.PRIORITY.STRONG]=u.default.NO_CHANGE,b[u.default.PRIORITY.WEAK]=u.default.NO_CHANGE,b[u.default.PRIORITY.DEFAULT]=u.default.NO_CHANGE,c=0,d=a.length;c<d;c+=1)e=a[c],e.quality!==u.default.NO_CHANGE&&(b[e.priority]=b[e.priority]>u.default.NO_CHANGE?Math.min(b[e.priority],e.quality):e.quality);return b[u.default.PRIORITY.WEAK]!==u.default.NO_CHANGE&&(f=b[u.default.PRIORITY.WEAK]),b[u.default.PRIORITY.DEFAULT]!==u.default.NO_CHANGE&&(f=b[u.default.PRIORITY.DEFAULT]),b[u.default.PRIORITY.STRONG]!==u.default.NO_CHANGE&&(f=b[u.default.PRIORITY.STRONG]),f!==u.default.NO_CHANGE&&(g=f),(0,u.default)(j).create(g)}}function e(a){return d(c(r.map(function(b){return b.getMaxIndex(a)})))||(0,u.default)(j).create()}function f(a){return d(c(s.map(function(b){return b.shouldAbandon(a)})))||(0,u.default)(j).create()}function h(){[r,s].forEach(function(a){a&&a.length&&a.forEach(function(a){return a.reset&&a.reset()})}),r=[],s=[]}a=a||{};var j=this.context,l=a.mediaPlayerModel,n=a.metricsModel,p=a.dashMetrics,r=void 0,s=void 0;return{initialize:b,reset:h,getMaxQuality:e,shouldAbandonFragment:f}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(182),g=d(f),h=a(180),i=d(h),j=a(177),k=d(j),l=a(179),m=d(l),n=a(181),o=d(n),p=a(178),q=d(p),r=a(51),s=d(r),t=a(173),u=d(t),v="qualitySwitchRules",w="abandonFragmentRules";e.__dashjs_factory_name="ABRRulesCollection";var x=s.default.getClassFactory(e);x.QUALITY_SWITCH_RULES=v,x.ABANDON_FRAGMENT_RULES=w,s.default.updateSingletonFactory(e.__dashjs_factory_name,x),c.default=x,b.exports=c.default},{173:173,177:177,178:178,179:179,180:180,181:181,182:182,51:51}],177:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){h()}function c(a,b){r[a]=r[a]||{},r[a][b]=r[a][b]||{}}function d(a,b){t[a]=t[a]||[],t[a].push(b)}function f(a){var b=(0,g.default)(m).create(g.default.NO_CHANGE,{name:e.__dashjs_factory_name});if(!(a&&a.hasOwnProperty("getMediaInfo")&&a.hasOwnProperty("getMediaType")&&a.hasOwnProperty("getCurrentRequest")&&a.hasOwnProperty("getRepresentationInfo")&&a.hasOwnProperty("getAbrController")))return b;var f=a.getMediaInfo(),h=a.getMediaType(),k=a.getCurrentRequest();if(!isNaN(k.index)){c(h,k.index);var u=o.getStableBufferTime();if(q.getCurrentBufferLevel(p.getReadOnlyMetricsFor(h))>u)return b;var v=r[h][k.index];if(null===v||null===k.firstByteDate||s.hasOwnProperty(v.id))return b;if(void 0===v.firstByteTime&&(t[h]=[],v.firstByteTime=k.firstByteDate.getTime(),v.segmentDuration=k.duration,v.bytesTotal=k.bytesTotal,v.id=k.index),v.bytesLoaded=k.bytesLoaded,v.elapsedTime=(new Date).getTime()-v.firstByteTime,v.bytesLoaded>0&&v.elapsedTime>0&&d(h,Math.round(8*v.bytesLoaded/v.elapsedTime)),t[h].length>=l&&v.elapsedTime>j&&v.bytesLoaded<v.bytesTotal){var w=t[h].reduce(function(a,b){return a+b},0);if(v.measuredBandwidthInKbps=Math.round(w/t[h].length),v.estimatedTimeOfDownload=+(8*v.bytesTotal/v.measuredBandwidthInKbps/1e3).toFixed(2),v.estimatedTimeOfDownload<v.segmentDuration*i||0===a.getRepresentationInfo().quality)return b;if(!s.hasOwnProperty(v.id)){var x=a.getAbrController(),y=v.bytesTotal-v.bytesLoaded,z=x.getBitrateList(f),A=x.getQualityForBitrate(f,v.measuredBandwidthInKbps*o.getBandwidthSafetyFactor());y>v.bytesTotal*z[A].bitrate/z[x.getQualityFor(h,f.streamInfo)].bitrate&&(b.quality=A,b.reason.throughput=v.measuredBandwidthInKbps,b.reason.fragmentID=v.id,s[v.id]=v,n("AbandonRequestsRule ( ",h,"frag id",v.id,") is asking to abandon and switch to quality to ",A," measured bandwidth was",v.measuredBandwidthInKbps),delete r[h][v.id])}}else v.bytesLoaded===v.bytesTotal&&delete r[h][v.id]}return b}function h(){r={},s={},t=[]}a=a||{};var i=1.8,j=500,l=5,m=this.context,n=(0,k.default)(m).getInstance().log,o=a.mediaPlayerModel,p=a.metricsModel,q=a.dashMetrics,r=void 0,s=void 0,t=void 0,u={shouldAbandon:f,reset:h};return b(),u}Object.defineProperty(c,"__esModule",{value:!0});var f=a(173),g=d(f),h=a(51),i=d(h),j=a(49),k=d(j);e.__dashjs_factory_name="AbandonRequestsRule",c.default=i.default.getClassFactory(e),b.exports=c.default},{173:173,49:49,51:51}],178:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){H(),O.on(p.default.BUFFER_EMPTY,y,P),O.on(p.default.PLAYBACK_SEEKING,z,P),O.on(p.default.PERIOD_SWITCH_STARTED,A,P),O.on(p.default.MEDIA_FRAGMENT_LOADED,B,P),O.on(p.default.METRIC_ADDED,C,P),O.on(p.default.QUALITY_CHANGE_REQUESTED,E,P),O.on(p.default.FRAGMENT_LOADING_ABANDONED,F,P)}function c(a){return a.map(function(a){return Math.log(a)})}function d(a,b,c){var d=c.reduce(function(a,b,d){return b>c[a]?d:a},0);if(0===d)return null;var e=Math.max(a,v+w*b.length),f=(c[d]-1)/(e/v-1);return{gp:f,Vp:v/f}}function e(a){var b={},e=a.getMediaInfo(),g=e.bitrateList.map(function(a){return a.bandwidth}),h=c(g);h=h.map(function(a){return a-h[0]+1});var i=N.getStableBufferTime(),j=d(i,g,h);return j?(b.state=t,b.bitrates=g,b.utilities=h,b.stableBufferTime=i,b.Vp=j.Vp,b.gp=j.gp,b.lastQuality=0,f(b)):b.state=s,b}function f(a){a.placeholderBuffer=0,a.mostAdvancedSegmentStart=NaN,a.lastSegmentWasReplacement=!1,a.lastSegmentStart=NaN,a.lastSegmentDurationS=NaN,a.lastSegmentRequestTimeMs=NaN,a.lastSegmentFinishTimeMs=NaN}function h(a,b){var c=N.getStableBufferTime();if(a.stableBufferTime!==c){var e=d(c,a.bitrates,a.utilities);if(e.Vp!==a.Vp||e.gp!==a.gp){var f=L.getCurrentBufferLevel(M.getReadOnlyMetricsFor(b)),g=f+a.placeholderBuffer;g-=v,g*=e.Vp/a.Vp,g+=v,a.stableBufferTime=c,a.Vp=e.Vp,a.gp=e.gp,a.placeholderBuffer=Math.max(0,g-f)}}}function j(a){var b=a.getMediaType(),c=Q[b];return c?c.state!==s&&h(c,b):(c=e(a),Q[b]=c),c}function k(a,b){for(var c=a.bitrates.length,d=NaN,e=NaN,f=0;f<c;++f){var g=(a.Vp*(a.utilities[f]+a.gp)-b)/a.bitrates[f];(isNaN(e)||g>=e)&&(e=g,d=f)}return d}function m(a,b){return a.Vp*(a.utilities[b]+a.gp)}function o(a,b){for(var c=a.bitrates[b],d=a.utilities[b],e=0,f=b-1;f>=0;--f)if(a.utilities[f]<a.utilities[b]){var g=a.bitrates[f],h=a.utilities[f],i=a.Vp*(a.gp+(c*h-g*d)/(c-g));e=Math.max(e,i)}return e}function q(a,b){var c=Date.now();if(isNaN(a.lastSegmentFinishTimeMs)){if(!isNaN(a.lastCallTimeMs)){var d=.001*(c-a.lastCallTimeMs);a.placeholderBuffer+=Math.max(0,d)}}else{var d=.001*(c-a.lastSegmentFinishTimeMs);a.placeholderBuffer+=Math.max(0,d)}a.lastCallTimeMs=c,a.lastSegmentStart=NaN,a.lastSegmentRequestTimeMs=NaN,a.lastSegmentFinishTimeMs=NaN,h(a,b)}function y(){for(var a in Q)Q.hasOwnProperty(a)&&Q[a].state===u&&(Q[a].placeholderBuffer=0)}function z(){for(var a in Q)if(Q.hasOwnProperty(a)){var b=Q[a];b.state!==s&&(b.state=t,f(b))}}function A(){}function B(a){if(a&&a.chunk&&a.chunk.mediaInfo){var b=Q[a.chunk.mediaInfo.type];if(b&&b.state!==s){var c=a.chunk.start;isNaN(b.mostAdvancedSegmentStart)||c>b.mostAdvancedSegmentStart?(b.mostAdvancedSegmentStart=c,b.lastSegmentWasReplacement=!1):b.lastSegmentWasReplacement=!0,b.lastSegmentStart=c,b.lastSegmentDurationS=a.chunk.duration,b.lastQuality=a.chunk.quality,D(b,a.chunk.mediaInfo.type)}}}function C(a){if(a&&a.metric===g.default.HTTP_REQUEST&&a.value&&a.value.type===l.HTTPRequest.MEDIA_SEGMENT_TYPE&&a.value.trace&&a.value.trace.length){var b=Q[a.mediaType];b&&b.state!==s&&(b.lastSegmentRequestTimeMs=a.value.trequest.getTime(),b.lastSegmentFinishTimeMs=a.value._tfinish.getTime(),D(b,a.mediaType))}}function D(a,b){if(!isNaN(a.lastSegmentStart)&&!isNaN(a.lastSegmentRequestTimeMs)&&!isNaN(a.placeholderBuffer)){if(a.placeholderBuffer*=x,!isNaN(a.lastSegmentFinishTimeMs)){var c=L.getCurrentBufferLevel(M.getReadOnlyMetricsFor(b)),d=c+.001*(a.lastSegmentFinishTimeMs-a.lastSegmentRequestTimeMs),e=m(a,a.lastQuality),f=Math.max(0,e-d);a.placeholderBuffer=Math.min(f,a.placeholderBuffer)}a.lastSegmentWasReplacement&&!isNaN(a.lastSegmentDurationS)&&(a.placeholderBuffer+=a.lastSegmentDurationS),a.lastSegmentStart=NaN,a.lastSegmentRequestTimeMs=NaN}}function E(a){if(a){var b=Q[a.mediaType];b&&b.state!==s&&(b.abrQuality=a.newQuality)}}function F(a){if(a){var b=Q[a.mediaType];if(b&&b.state!==s){var c=L.getCurrentBufferLevel(M.getReadOnlyMetricsFor(a.mediaType)),d=void 0;d=b.abrQuality>0?o(b,b.abrQuality):v;var e=Math.max(0,d-c)
;b.placeholderBuffer=Math.min(b.placeholderBuffer,e)}}}function G(a){var b=a.getMediaInfo(),c=a.getMediaType(),d=M.getReadOnlyMetricsFor(c),e=a.getStreamProcessor(),g=a.getStreamInfo(),h=a.getAbrController(),l=h.getThroughputHistory(),n=g?g.id:null,p=g&&g.manifestInfo&&g.manifestInfo.isDynamic,r=a.useBufferOccupancyABR(),v=(0,i.default)(J).create();if(v.reason=v.reason||{},!r)return v;e.getScheduleController().setTimeToLoadDelay(0);var w=j(a);if(w.state===s)return K("BOLA ABR rule invoked for media type '"+c+"' with only one bitrate."),v;var x=L.getCurrentBufferLevel(d),y=l.getAverageThroughput(c,p),z=l.getSafeAverageThroughput(c,p),A=l.getAverageLatency(c),B=void 0;if(v.reason.state=w.state,v.reason.throughput=y,v.reason.latency=A,isNaN(y))return v;switch(w.state){case t:B=h.getQualityForBitrate(b,z,A),v.quality=B,v.reason.throughput=z,w.placeholderBuffer=Math.max(0,o(w,B)-x),w.lastQuality=B,!isNaN(w.lastSegmentDurationS)&&x>=w.lastSegmentDurationS&&(w.state=u);break;case u:q(w,c),B=k(w,x+w.placeholderBuffer);var C=h.getQualityForBitrate(b,z,A);B>w.lastQuality&&B>C&&(B=Math.max(C,w.lastQuality));var D=Math.max(0,x+w.placeholderBuffer-m(w,B));D<=w.placeholderBuffer?(w.placeholderBuffer-=D,D=0):(D-=w.placeholderBuffer,w.placeholderBuffer=0,B<h.getTopQualityIndexFor(c,n)?e.getScheduleController().setTimeToLoadDelay(1e3*D):D=0),v.quality=B,v.reason.throughput=y,v.reason.latency=A,v.reason.bufferLevel=x,v.reason.placeholderBuffer=w.placeholderBuffer,v.reason.delay=D,w.lastQuality=B;break;default:K("BOLA ABR rule invoked in bad state."),v.quality=h.getQualityForBitrate(b,z,A),v.reason.state=w.state,v.reason.throughput=z,v.reason.latency=A,w.state=t,f(w)}return v}function H(){Q={}}function I(){H(),O.off(p.default.BUFFER_EMPTY,y,P),O.off(p.default.PLAYBACK_SEEKING,z,P),O.off(p.default.PERIOD_SWITCH_STARTED,A,P),O.off(p.default.MEDIA_FRAGMENT_LOADED,B,P),O.off(p.default.METRIC_ADDED,C,P),O.off(p.default.QUALITY_CHANGE_REQUESTED,E,P),O.off(p.default.FRAGMENT_LOADING_ABANDONED,F,P)}a=a||{};var J=this.context,K=(0,r.default)(J).getInstance().log,L=a.dashMetrics,M=a.metricsModel,N=a.mediaPlayerModel,O=(0,n.default)(J).getInstance(),P=void 0,Q=void 0;return P={getMaxIndex:G,reset:I},b(),P}Object.defineProperty(c,"__esModule",{value:!0});var f=a(101),g=d(f),h=a(173),i=d(h),j=a(51),k=d(j),l=a(230),m=a(50),n=d(m),o=a(54),p=d(o),q=a(49),r=d(q),s=0,t=1,u=2,v=10,w=2,x=.99;e.__dashjs_factory_name="BolaRule",c.default=k.default.getClassFactory(e),b.exports=c.default},{101:101,173:173,230:230,49:49,50:50,51:51,54:54}],179:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a){var f=a.getDroppedFramesHistory();if(f){for(var g=f.getFrameHistory(),h=0,j=0,k=i.default.NO_CHANGE,l=1;l<g.length;l++)if(g[l]&&(h=g[l].droppedVideoFrames,(j=g[l].totalVideoFrames)>e&&h/j>d)){k=l-1,c("DroppedFramesRule, index: "+k+" Dropped Frames: "+h+" Total Frames: "+j);break}return(0,i.default)(b).create(k,{droppedFrames:h})}return(0,i.default)(b).create()}var b=this.context,c=(0,k.default)(b).getInstance().log,d=.15,e=375;return{getMaxIndex:a}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f),h=a(173),i=d(h),j=a(49),k=d(j);e.__dashjs_factory_name="DroppedFramesRule",c.default=g.default.getClassFactory(e),b.exports=c.default},{173:173,49:49,51:51}],180:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){f(),p.on(k.default.PLAYBACK_SEEKING,h,t)}function c(){if(!(r&&r.hasOwnProperty("getReadOnlyMetricsFor")&&s&&s.hasOwnProperty("getCurrentBufferLevel")))throw new Error("Missing config parameter(s)")}function d(a){var b=(0,q.default)(m).create();if(!a||!a.hasOwnProperty("getMediaType"))return b;c();var d=a.getMediaType(),f=r.getReadOnlyMetricsFor(d),h=f.BufferState.length>0?f.BufferState[f.BufferState.length-1]:null,i=a.getRepresentationInfo(),j=i.fragmentDuration;if(!h||!e(d,h)||!j)return b;if(h.state===g.default.BUFFER_EMPTY)n("Switch to index 0; buffer is empty."),b.quality=0,b.reason="InsufficientBufferRule: Buffer is empty";else{var k=a.getMediaInfo(),o=a.getAbrController(),p=o.getThroughputHistory(),t=s.getCurrentBufferLevel(f),u=p.getAverageThroughput(d),v=p.getAverageLatency(d),w=u*(t/j)*l;b.quality=o.getQualityForBitrate(k,w,v),b.reason="InsufficientBufferRule: being conservative to avoid immediate rebuffering"}return b}function e(a,b){u[a]=u[a]||{};var c=!1;return u[a].firstBufferLoadedEvent?c=!0:b&&b.state===g.default.BUFFER_LOADED&&(u[a].firstBufferLoadedEvent=!0,c=!0),c}function f(){u={}}function h(){f()}function j(){f(),p.off(k.default.PLAYBACK_SEEKING,h,t)}a=a||{};var l=.5,m=this.context,n=(0,o.default)(m).getInstance().log,p=(0,i.default)(m).getInstance(),r=a.metricsModel,s=a.dashMetrics,t=void 0,u=void 0;return t={getMaxIndex:d,reset:j},b(),t}Object.defineProperty(c,"__esModule",{value:!0});var f=a(106),g=d(f),h=a(50),i=d(h),j=a(54),k=d(j),l=a(51),m=d(l),n=a(49),o=d(n),p=a(173),q=d(p);e.__dashjs_factory_name="InsufficientBufferRule",c.default=m.default.getClassFactory(e),b.exports=c.default},{106:106,173:173,49:49,50:50,51:51,54:54}],181:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a){for(var f=a?a.getSwitchHistory():null,g=f?f.getSwitchRequests():[],h=0,i=0,j=0,l=(0,k.default)(b).create(),m=0;m<g.length;m++)if(void 0!==g[m]&&(h+=g[m].drops,i+=g[m].noDrops,j+=g[m].dropSize,h+i>=e&&h/i>d)){l.quality=m>0&&g[m].drops>0?m-1:m,l.reason={index:l.quality,drops:h,noDrops:i,dropSize:j},c("Switch history rule index: "+l.quality+" samples: "+(h+i)+" drops: "+h);break}return l}var b=this.context,c=(0,i.default)(b).getInstance().log,d=.075,e=6;return{getMaxIndex:a}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f),h=a(49),i=d(h),j=a(173),k=d(j);e.__dashjs_factory_name="SwitchHistoryRule",c.default=g.default.getClassFactory(e),b.exports=c.default},{173:173,49:49,51:51}],182:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){if(!h||!h.hasOwnProperty("getReadOnlyMetricsFor"))throw new Error("Missing config parameter(s)")}function c(a){var c=(0,o.default)(e).create();if(!(a&&a.hasOwnProperty("getMediaInfo")&&a.hasOwnProperty("getMediaType")&&a.hasOwnProperty("useBufferOccupancyABR")&&a.hasOwnProperty("getAbrController")&&a.hasOwnProperty("getStreamProcessor")))return c;b();var d=a.getMediaInfo(),j=a.getMediaType(),k=h.getReadOnlyMetricsFor(j),l=a.getStreamProcessor(),m=a.getAbrController(),n=a.getStreamInfo(),p=n&&n.manifestInfo?n.manifestInfo.isDynamic:null,q=m.getThroughputHistory(),r=q.getSafeAverageThroughput(j,p),s=q.getAverageLatency(j),t=k.BufferState.length>0?k.BufferState[k.BufferState.length-1]:null,u=a.useBufferOccupancyABR();return!k||isNaN(r)||!t||u?c:(m.getAbandonmentStateFor(j)!==i.default.ABANDON_LOAD&&(t.state===g.default.BUFFER_LOADED||p)&&(c.quality=m.getQualityForBitrate(d,r,s),l.getScheduleController().setTimeToLoadDelay(0),f("ThroughputRule requesting switch to index: ",c.quality,"type: ",j,"Average throughput",Math.round(r),"kbps"),c.reason={throughput:r,latency:s}),c)}function d(){}a=a||{};var e=this.context,f=(0,m.default)(e).getInstance().log,h=a.metricsModel;return{getMaxIndex:c,reset:d}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(106),g=d(f),h=a(103),i=d(h),j=a(51),k=d(j),l=a(49),m=d(l),n=a(173),o=d(n);e.__dashjs_factory_name="ThroughputRule",c.default=k.default.getClassFactory(e),b.exports=c.default},{103:103,106:106,173:173,49:49,51:51}],183:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){}function c(a,b,c){return e.getCurrentBufferLevel(f.getReadOnlyMetricsFor(b))<d(a,b,c)}function d(a,b,c){var d=NaN,k=a.getCurrentRepresentationInfo();if(b===g.default.FRAGMENTED_TEXT)d=i.getAllTracksAreDisabled()?0:k.fragmentDuration;else if(b===g.default.AUDIO&&c){var l=e.getCurrentBufferLevel(f.getReadOnlyMetricsFor(g.default.VIDEO));d=isNaN(k.fragmentDuration)?l:Math.max(l,k.fragmentDuration)}else{var m=k.mediaInfo.streamInfo;if(j.isPlayingAtTopQuality(m)){var n=m.manifestInfo.duration>=h.getLongFormContentDurationThreshold();d=n?h.getBufferTimeAtTopQualityLongForm():h.getBufferTimeAtTopQuality()}else d=h.getStableBufferTime()}return d}a=a||{};var e=a.dashMetrics,f=a.metricsModel,h=a.mediaPlayerModel,i=a.textController,j=a.abrController,k={execute:c,getBufferTarget:d};return b(),k}Object.defineProperty(c,"__esModule",{value:!0});var f=a(100),g=d(f),h=a(51),i=d(h);e.__dashjs_factory_name="BufferLevelRule",c.default=i.default.getClassFactory(e),b.exports=c.default},{100:100,51:51}],184:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(a,b){var c=a.getCurrentRepresentationInfo(),i=c.mediaInfo,j=i.type,k=a.getScheduleController(),l=k.getSeekTarget(),n=!isNaN(l),o=a.getBuffer(),p=n?l:e.getIndexHandlerTime(a);if(isNaN(p)||j===g.default.FRAGMENTED_TEXT&&h.getAllTracksAreDisabled())return null;if(n&&k.setSeekTarget(NaN),o){var q=f.getBufferRange(o,p);null!==q&&(d("Prior to making a request for time, NextFragmentRequestRule is aligning index handler's currentTime with bufferedRange.end for",j,".",p,"was changed to",q.end),p=q.end)}var r=void 0;if(b)p=b.startTime+b.duration/2,r=e.getFragmentRequestForTime(a,c,p,{timeThreshold:0,ignoreIsFinished:!0});else{for(r=e.getFragmentRequestForTime(a,c,p,{keepIdx:!n});r&&r.action!==m.default.ACTION_COMPLETE&&a.getFragmentModel().isFragmentLoaded(r);)r=e.getNextFragmentRequest(a,c);r&&(isNaN(r.startTime+r.duration)||e.setIndexHandlerTime(a,r.startTime+r.duration),r.delayLoadingTime=(new Date).getTime()+k.getTimeToLoadDelay(),k.setTimeToLoadDelay(0))}return r}a=a||{};var c=this.context,d=(0,i.default)(c).getInstance().log,e=a.adapter,f=a.sourceBufferController,h=a.textController;return{execute:b}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(100),g=d(f),h=a(49),i=d(h),j=a(51),k=d(j),l=a(213),m=d(l);e.__dashjs_factory_name="NextFragmentRequestRule",c.default=k.default.getClassFactory(e),b.exports=c.default},{100:100,213:213,49:49,51:51}],185:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a){for(var b="",c=0;c<a.length;++c){b+=a[c].uchar}return b.length-b.replace(/^\s+/,"").length}function b(a){return"left: "+3.125*a.x+"%; top: "+6.66*a.y1+"%; width: "+(100-3.125*a.x)+"%; height: "+6.66*Math.max(a.y2-1-a.y1,1)+"%; align-items: flex-start; overflow: visible; -webkit-writing-mode: horizontal-tb;"}function c(a){return"red"===a?"rgb(255, 0, 0)":"green"===a?"rgb(0, 255, 0)":"blue"===a?"rgb(0, 0, 255)":"cyan"===a?"rgb(0, 255, 255)":"magenta"===a?"rgb(255, 0, 255)":"yellow"===a?"rgb(255, 255, 0)":"white"===a?"rgb(255, 255, 255)":"black"===a?"rgb(0, 0, 0)":a}function d(a,b){var d=a.videoHeight/15;return b?"font-size: "+d+"px; font-family: Menlo, Consolas, 'Cutive Mono', monospace; color: "+(b.foreground?c(b.foreground):"rgb(255, 255, 255)")+"; font-style: "+(b.italics?"italic":"normal")+"; text-decoration: "+(b.underline?"underline":"none")+"; white-space: pre; background-color: "+(b.background?c(b.background):"transparent")+";":"font-size: "+d+"px; font-family: Menlo, Consolas, 'Cutive Mono', monospace; justify-content: flex-start; text-align: left; color: rgb(255, 255, 255); font-style: normal; white-space: pre; line-height: normal; font-weight: normal; text-decoration: none; width: 100%; display: flex;"}function e(a){return a.replace(/^\s+/g,"")}function f(a){return a.replace(/\s+$/g,"")}function g(c,g,i,j){var k=null,l=null,m=!1,n=-1,o={start:g,end:i,spans:[]},p="style_cea608_white_black",q={},r={},s=[],t=void 0,u=void 0;for(t=0;t<15;++t){var v=j.rows[t],w="",x=null;if(!1===v.isEmpty()){var y=a(v.chars);null===k&&(k={x:y,y1:t,y2:t+1,p:[]}),y!==n&&m&&(k.p.push(o),o={start:g,end:i,spans:[]},k.y2=t,k.name="region_"+k.x+"_"+k.y1+"_"+k.y2,!1===q.hasOwnProperty(k.name)?(s.push(k),q[k.name]=k):(l=q[k.name],l.p.contat(k.p)),k={x:y,y1:t,y2:t+1,p:[]});for(var z=0;z<v.chars.length;++z){var A=v.chars[z],B=A.penState;if(null===x||!B.equals(x)){w.trim().length>0&&(o.spans.push({name:p,line:w,row:t}),w="");var C="style_cea608_"+B.foreground+"_"+B.background;B.underline&&(C+="_underline"),B.italics&&(C+="_italics"),r.hasOwnProperty(C)||(r[C]=JSON.parse(JSON.stringify(B))),x=B,p=C}w+=A.uchar}w.trim().length>0&&o.spans.push({name:p,line:w,row:t}),m=!0,n=y}else m=!1,n=-1,k&&(k.p.push(o),o={start:g,end:i,spans:[]},k.y2=t,k.name="region_"+k.x+"_"+k.y1+"_"+k.y2,!1===q.hasOwnProperty(k.name)?(s.push(k),q[k.name]=k):(l=q[k.name],l.p.contat(k.p)),k=null)}k&&(k.p.push(o),k.y2=t+1,k.name="region_"+k.x+"_"+k.y1+"_"+k.y2,!1===q.hasOwnProperty(k.name)?(s.push(k),q[k.name]=k):(l=q[k.name],l.p.contat(k.p)),k=null);var D=[];for(t=0;t<s.length;++t){var E=s[t],F="sub_cea608_"+h++,G=document.createElement("div");G.id=F;var H=b(E);G.style.cssText="position: absolute; margin: 0; display: flex; box-sizing: border-box; pointer-events: none;"+H;var I=document.createElement("div");I.className="paragraph bodyStyle",I.style.cssText=d(c);var J=document.createElement("div");J.className="cueUniWrapper",J.style.cssText="unicode-bidi: normal; direction: ltr;";for(var K=0;K<E.p.length;++K){var L=E.p[K],M=0;for(u=0;u<L.spans.length;++u){var N=L.spans[u];if(N.line.length>0){if(0!==u&&M!=N.row){var O=document.createElement("br");O.className="lineBreak",J.appendChild(O)}var P=!1;M===N.row&&(P=!0),M=N.row;var Q=r[N.name],R=document.createElement("span");R.className="spanPadding "+N.name+" customSpanColor",R.style.cssText=d(c,Q),0!==u&&P?u===L.spans.length-1?R.textContent=f(N.line):R.textContent=N.line:L.spans.length>1&&u<L.spans.length-1&&N.row===L.spans[u+1].row?R.textContent=e(N.line):R.textContent=N.line.trim(),J.appendChild(R)}}}I.appendChild(J),G.appendChild(I);var S={bodyStyle:["%",90]};for(u in r)r.hasOwnProperty(u)&&(S[u]=["%",90]);D.push({type:"html",start:g,end:i,cueHTMLElement:G,cueID:F,cellResolution:[32,15],isFromCEA608:!0,regions:s,regionID:E.name,videoHeight:c.videoHeight,videoWidth:c.videoWidth,fontSize:S,lineHeight:{},linePadding:{}})}return D}var h=0;return{createHTMLCaptionsFromScreen:g}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f);e.__dashjs_factory_name="EmbeddedTextHtmlRender",c.default=g.default.getSingletonFactory(e),b.exports=c.default},{51:51}],186:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){G=!1,H=null,I=null,K=null,F=!1,z.on(k.default.DATA_UPDATE_COMPLETED,v,this),z.on(k.default.INIT_FRAGMENT_LOADED,w,this)}function c(){return p}function d(a){l(a),K=D.getRepresentationController(),L=(0,o.default)(y).getInstance()}function e(a){try{I=A.createSourceBuffer(H,a),G||(I.hasOwnProperty(g.default.INITIALIZE)&&I.initialize(C,D),G=!0)}catch(b){B.mediaSourceError("Error creating "+C+" source buffer.")}return I}function f(){return C}function h(){return I}function j(a){I=a}function l(a){H=a}function m(){return H}function n(){return D}function q(a){J=a}function r(){return J}function s(){return 0}function t(){return F}function u(a){z.off(k.default.DATA_UPDATE_COMPLETED,v,this),z.off(k.default.INIT_FRAGMENT_LOADED,w,this),a||(A.abort(H,I),A.removeSourceBuffer(H,I))}function v(a){a.sender.getStreamProcessor()===D&&z.trigger(k.default.TIMED_TEXT_REQUESTED,{index:0,sender:a.sender})}function w(a){a.fragmentModel===D.getFragmentModel()&&a.chunk.bytes&&(L.save(a.chunk),A.append(I,a.chunk))}function x(a,b){var c=L.extract(a,b);c?A.append(I,c):z.trigger(k.default.INIT_REQUESTED,{sender:E})}a=a||{};var y=this.context,z=(0,i.default)(y).getInstance(),A=a.sourceBufferController,B=a.errHandler,C=a.type,D=a.streamProcessor,E=void 0,F=void 0,G=void 0,H=void 0,I=void 0,J=void 0,K=void 0,L=void 0;return E={getBufferControllerType:c,initialize:d,createBuffer:e,getType:f,getStreamProcessor:n,setSeekStartTime:q,getSeekStartTime:r,getBuffer:h,setBuffer:j,getBufferLevel:s,setMediaSource:l,getMediaSource:m,getIsBufferingCompleted:t,switchInitData:x,reset:u},b(),E}Object.defineProperty(c,"__esModule",{value:!0});var f=a(100),g=d(f),h=a(50),i=d(h),j=a(54),k=d(j),l=a(51),m=d(l),n=a(200),o=d(n),p="NotFragmentedTextBufferController";e.__dashjs_factory_name=p,c.default=m.default.getClassFactory(e),b.exports=c.default},{100:100,200:200,50:50,51:51,54:54}],187:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){v=a.type===g.default.FRAGMENTED_TEXT?(0,k.default)(u).create({type:a.type,metricsModel:a.metricsModel,mediaPlayerModel:a.mediaPlayerModel,manifestModel:a.manifestModel,sourceBufferController:a.sourceBufferController,errHandler:a.errHandler,streamController:a.streamController,mediaController:a.mediaController,adapter:a.adapter,textController:a.textController,abrController:a.abrController,playbackController:a.playbackController,streamProcessor:a.streamProcessor}):(0,m.default)(u).create({type:a.type,errHandler:a.errHandler,sourceBufferController:a.sourceBufferController,streamProcessor:a.streamProcessor})}function c(){return v.getBufferControllerType()}function d(a,b){return v.initialize(a,b)}function e(a){return v.createBuffer(a)}function f(){return v.getType()}function h(){return v.getBuffer()}function i(a){v.setBuffer(a)}function j(){return v.getMediaSource()}function l(a){v.setMediaSource(a)}function n(){v.getStreamProcessor()}function o(a){v.setSeekStartTime(a)}function p(){return v.getBufferLevel()}function q(a){v.reset(a)}function r(){return v.getIsBufferingCompleted()}function s(a,b){v.switchInitData(a,b)}function t(){return v.getIsPruningInProgress()}a=a||{};var u=this.context,v=void 0,w=void 0;return w={getBufferControllerType:c,initialize:d,createBuffer:e,getType:f,getStreamProcessor:n,setSeekStartTime:o,getBuffer:h,setBuffer:i,getBufferLevel:p,setMediaSource:l,getMediaSource:j,getIsBufferingCompleted:r,getIsPruningInProgress:t,switchInitData:s,reset:q},b(),w}Object.defineProperty(c,"__esModule",{value:!0});var f=a(100),g=d(f),h=a(51),i=d(h),j=a(106),k=d(j),l=a(186),m=d(l);e.__dashjs_factory_name="TextBufferController",c.default=i.default.getClassFactory(e),b.exports=c.default},{100:100,106:106,186:186,51:51}],188:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(){K="",L=-1,M=!0,G=(0,m.default)(x).getInstance(),H=(0,o.default)(x).getInstance(),I=(0,q.default)(x).getInstance(),z=(0,k.default)(x).getInstance(),J=(0,s.default)(x).getInstance(),G.initialize(),J.on(u.default.TEXT_TRACKS_QUEUE_INITIALIZED,i,y),v()}function b(a){a&&(a.errHandler&&(A=a.errHandler),a.dashManifestModel&&(B=a.dashManifestModel),a.manifestModel&&(C=a.manifestModel),a.mediaController&&(D=a.mediaController),a.videoModel&&(E=a.videoModel),a.streamController&&(F=a.streamController),a.textTracks&&(G=a.textTracks),a.vttParser&&(H=a.vttParser),a.ttmlParser&&(I=a.ttmlParser),z.setConfig({errHandler:A,dashManifestModel:B,manifestModel:C,mediaController:D,videoModel:E,streamController:F,textTracks:G,vttParser:H,ttmlParser:I}))}function c(){return z}function d(){return N}function e(a){z.addEmbeddedTrack(a)}function f(a){"string"==typeof a&&(K=a)}function h(){return K}function i(a){var b=a.tracks,c=a.index,d=b.findIndex(function(a){return a.lang===K});-1!==d&&(this.setTextTrack(d),c=d),M||this.setTextTrack(-1),L=c,J.trigger(u.default.TEXT_TRACKS_ADDED,{enabled:!N,index:c,tracks:b})}function j(a){"boolean"==typeof a&&(M=a)}function l(){return M}function n(a){if("boolean"==typeof a){!N!==a&&(a&&this.setTextTrack(L),a||(L=this.getCurrentTrackIdx(),this.setTextTrack(-1)))}}function p(){return!N}function r(a){var b=z.getConfig(),c=b.fragmentModel,d=b.fragmentedTracks,e=G.getCurrentTrackIdx();if(e!==a){G.setModeForTrackIdx(e,g.default.TEXT_HIDDEN),G.setCurrentTrackIdx(a),G.setModeForTrackIdx(a,g.default.TEXT_SHOWING);var f=G.getCurrentTrackInfo();if(f&&f.isFragmented&&!f.isEmbedded)for(var h=0;h<d.length;h++){var i=d[h];if(f.lang===i.lang&&f.index===i.index&&(!f.label||f.label===i.id)){var j=D.getCurrentTrackFor(g.default.FRAGMENTED_TEXT,F.getActiveStreamInfo());i!==j&&(c.abortRequests(),c.removeExecutedRequestsBeforeTime(),z.remove(),G.deleteCuesFromTrackIdx(e),D.setTrack(i),z.setCurrentFragmentedTrackIdx(h))}}}N=-1===a}function t(){return G.getCurrentTrackIdx()}function v(){N=!1}function w(){v(),z.resetEmbedded()}var x=this.context,y=void 0,z=void 0,A=void 0,B=void 0,C=void 0,D=void 0,E=void 0,F=void 0,G=void 0,H=void 0,I=void 0,J=void 0,K=void 0,L=void 0,M=void 0,N=void 0;return y={setConfig:b,getTextSourceBuffer:c,getAllTracksAreDisabled:d,addEmbeddedTrack:e,getTextDefaultLanguage:h,setTextDefaultLanguage:f,setTextDefaultEnabled:j,getTextDefaultEnabled:l,enableText:n,isTextEnabled:p,setTextTrack:r,getCurrentTrackIdx:t,reset:w},a(),y}Object.defineProperty(c,"__esModule",{value:!0});var f=a(100),g=d(f),h=a(51),i=d(h),j=a(189),k=d(j),l=a(190),m=d(l),n=a(207),o=d(n),p=a(205),q=d(p),r=a(50),s=d(r),t=a(54),u=d(t);e.__dashjs_factory_name="TextController",c.default=i.default.getSingletonFactory(e),b.exports=c.default},{100:100,189:189,190:190,205:205,207:207,50:50,51:51,54:54}],189:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a,b){if(K=null,R=null,S=!1,T=NaN,U=[],X=null,C||d(),O=b.getMediaInfoArr(),P.setConfig({videoModel:V}),P.initialize(),Q=!H.getIsTextTrack(a),E=(0,n.default)(w).getInstance(),N=(0,l.default)(w).getInstance(),N.setConfig({boxParser:E}),Q){R=b.getFragmentModel(),this.buffered=(0,p.default)(w).create(),U=J.getTracksFor(g.default.FRAGMENTED_TEXT,W.getActiveStreamInfo());for(var c=J.getCurrentTrackFor(g.default.FRAGMENTED_TEXT,W.getActiveStreamInfo()),e=0;e<U.length;e++)if(U[e]===c){Y=e;break}}}function b(){P.deleteAllTextTracks(),K=null,N=null,O=null,P=null,Q=!1,R=null,S=!1,T=NaN,U=[],V=null,W=null,C=!1,Z=null}function c(a){var b=a.chunk;b.mediaInfo.embeddedCaptions&&o(b.bytes,b)}function d(){Z=[],O=[],P=(0,v.default)(w).getInstance(),P.setConfig({videoModel:V}),P.initialize(),E=(0,n.default)(w).getInstance(),N=(0,l.default)(w).getInstance(),N.setConfig({boxParser:E}),Q=!1,Y=null,$=!1,_=0,ca=[],ba=[],aa=null,C=!0,da=(0,x.default)(w).getInstance(),A.on(F.default.VIDEO_CHUNK_RECEIVED,c,this)}function e(){A.off(F.default.VIDEO_CHUNK_RECEIVED,c,this),P&&P.deleteAllTextTracks(),C=!1,Z=[],ca=[null,null],ba=[],aa=null}function f(a){C||d(),a.id===g.default.CC1||a.id===g.default.CC3?Z.push(a):y("Warning: Embedded track "+a.id+" not supported!")}function i(a){a&&(a.errHandler&&(G=a.errHandler),a.dashManifestModel&&(H=a.dashManifestModel),a.manifestModel&&(I=a.manifestModel),a.mediaController&&(J=a.mediaController),a.videoModel&&(V=a.videoModel),a.streamController&&(W=a.streamController),a.textTracks&&(P=a.textTracks),a.vttParser&&(L=a.vttParser),a.ttmlParser&&(M=a.ttmlParser))}function k(){return{errHandler:G,dashManifestModel:H,mediaController:J,videoModel:V,fragmentModel:R,streamController:W,textTracks:P,isFragmented:Q,embeddedTracks:Z,fragmentedTracks:U}}function m(a){Y=a}function o(a,b){function c(a,b){var c=new j.default,d={subtitle:"subtitles",caption:"captions"},e=function(){var a=b.roles.length>0?d[b.roles[0]]:d.caption;return a=a===d.caption||a===d.subtitle?a:d.caption},f=function(){var a=!1;return b.codec&&b.codec.search(g.default.STPP)>=0&&(a=!0),b.mimeType&&b.mimeType.search(g.default.TTML)>=0&&(a=!0),a};c.captionData=a,c.lang=b.lang,c.label=b.id,c.index=b.index,c.isTTML=f(),c.defaultTrack=r(b),c.isFragmented=Q,c.isEmbedded=!!b.isEmbedded,c.kind=e(),c.roles=b.roles;var h=(O?O.length:0)+Z.length;P.addTextTrack(c,h)}var d=void 0,e=void 0,f=void 0,i=void 0,k=void 0,l=void 0,m=void 0,n=b.mediaInfo,o=n.type,p=n.mimeType,t=n.codec||p;if(!t)return void y("No text type defined");if(o===g.default.FRAGMENTED_TEXT)if(S)if(l=N.getSamplesInfo(a),e=l.sampleList,!X&&e.length>0&&(X=e[0].cts-b.start*T),t.search(g.default.STPP)>=0)for(K=null!==K?K:s(t),f=0;f<e.length;f++){var u=e[f],v=u.cts,w=v-X;this.buffered.add(w/T,(w+u.duration)/T);var x=new DataView(a,u.offset,u.subSizes[0]);m=z.default.Utils.dataViewToString(x,g.default.UTF8);var A=[],C=u.offset+u.subSizes[0];for(i=1;i<u.subSizes.length;i++){var D=new Uint8Array(a,C,u.subSizes[i]),E=String.fromCharCode.apply(null,D);A.push(E),C+=u.subSizes[i]}try{var F=I.getValue(),H=F.ttmlTimeIsRelative?v/T:0;d=K.parse(m,H,v/T,(v+u.duration)/T,A),P.addCaptions(Y,X/T,d)}catch(na){y("TTML parser error: "+na.message)}}else{var J=[];for(f=0;f<e.length;f++){var u=e[f];u.cts-=X,this.buffered.add(u.cts/T,(u.cts+u.duration)/T);var L=a.slice(u.offset,u.offset+u.size),M=z.default.parseBuffer(L);for(i=0;i<M.boxes.length;i++){var R=M.boxes[i];if(y("VTT box1: "+R.type),"vtte"!==R.type&&"vttc"===R.type)for(y("VTT vttc boxes.length = "+R.boxes.length),k=0;k<R.boxes.length;k++){var U=R.boxes[k];if(y("VTT box2: "+U.type),"payl"===U.type){var W=U.cue_text;y("VTT cue_text = "+W);var $=u.cts/T,ea=(u.cts+u.duration)/T;J.push({start:$,end:ea,data:W,styles:{}}),y("VTT "+$+"-"+ea+" : "+W)}}}}J.length>0&&P.addCaptions(Y,0,J)}else{for(S=!0,f=0;f<O.length;f++)c(null,O[f]);T=N.getMediaTimescaleFromMoov(a)}else if(o===g.default.TEXT){var x=new DataView(a,0,a.byteLength);m=z.default.Utils.dataViewToString(x,g.default.UTF8);try{d=s(t).parse(m,0),c(d,n)}catch(na){G.timedTextError(na,"parse",m)}}else if(o===g.default.VIDEO)if(b.segmentType===h.HTTPRequest.INIT_SEGMENT_TYPE){if(0===_)for(_=N.getMediaTimescaleFromMoov(a),f=0;f<Z.length;f++)c(null,Z[f])}else{if(0===_)return void y("CEA-608: No timescale for embeddedTextTrack yet");var fa=function(a,b){function c(a,c,d){var e=null;if(V.getTTMLRenderingDiv())e=da.createHTMLCaptionsFromScreen(V.getElement(),a,c,d);else{e=[{start:a,end:c,data:d.getDisplayText(),styles:{}}]}e&&P.addCaptions(b,0,e)}return c};l=N.getSamplesInfo(a);var ga=l.lastSequenceNumber;if(!ca[0]&&!ca[1]){var ha=void 0,ia=void 0;for(f=0;f<Z.length;f++){if(Z[f].id===g.default.CC1?(0,ia=P.getTrackIdxForId(g.default.CC1)):Z[f].id===g.default.CC3&&(1,ia=P.getTrackIdxForId(g.default.CC3)),-1===ia)return void y("CEA-608: data before track is ready.");ha=fa(this,ia),ca[f]=new B.default.Cea608Parser(f,{newCue:ha},null)}}if(_&&-1==ba.indexOf(ga)){if(null!==aa&&ga!==aa+l.numSequences)for(f=0;f<ca.length;f++)ca[f]&&ca[f].reset();for(var ja=q(a,l.sampleList),ka=0;ka<ca.length;ka++){var la=ja.fields[ka],ma=ca[ka];if(ma)for(f=0;f<la.length;f++)ma.addData(la[f][0]/_,la[f][1])}aa=ga,ba.push(ga)}}}function q(a,b){if(0===b.length)return null;for(var c={splits:[],fields:[[],[]]},d=new DataView(a),e=0;e<b.length;e++)for(var f=b[e],g=B.default.findCea608Nalus(d,f.offset,f.size),h=null,i=0,j=0;j<g.length;j++)for(var k=B.default.extractCea608DataFromRange(d,g[j]),l=0;l<2;l++)k[l].length>0&&(f.cts!==h?i=0:i+=1,c.fields[l].push([f.cts,k[l],i]),h=f.cts);return c.fields.forEach(function(a){a.sort(function(a,b){return a[0]===b[0]?a[2]-b[2]:a[0]-b[0]})}),c}function r(a){var b=!1;return Z.length>1&&a.isEmbedded?b=a.id&&a.id===g.default.CC1:1===Z.length?a.id&&"CC"===a.id.substring(0,2)&&(b=!0):0===Z.length&&(b=a.index===O[0].index),b}function s(a){var b=void 0;return a.search(g.default.VTT)>=0?b=L:(a.search(g.default.TTML)>=0||a.search(g.default.STPP)>=0)&&(b=M),b}function u(a,b){void 0===a&&a===b&&(a=this.buffered.start(0),b=this.buffered.end(this.buffered.length-1)),this.buffered.remove(a,b)}var w=this.context,y=(0,t.default)(w).getInstance().log,A=(0,D.default)(w).getInstance(),C=!1,E=void 0,G=void 0,H=void 0,I=void 0,J=void 0,K=void 0,L=void 0,M=void 0,N=void 0,O=void 0,P=void 0,Q=void 0,R=void 0,S=void 0,T=void 0,U=void 0,V=void 0,W=void 0,X=void 0,Y=void 0,Z=void 0,$=void 0,_=void 0,aa=void 0,ba=void 0,ca=void 0,da=void 0;return{initialize:a,append:o,abort:b,addEmbeddedTrack:f,resetEmbedded:e,setConfig:i,getConfig:k,setCurrentFragmentedTrackIdx:m,remove:u}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(100),g=d(f),h=a(230),i=a(222),j=d(i),k=a(74),l=d(k),m=a(194),n=d(m),o=a(196),p=d(o),q=a(51),r=d(q),s=a(49),t=d(s),u=a(190),v=d(u),w=a(185),x=d(w),y=a(11),z=d(y),A=a(2),B=d(A),C=a(50),D=d(C),E=a(54),F=d(E);e.__dashjs_factory_name="TextSourceBuffer",c.default=r.default.getSingletonFactory(e),b.exports=c.default},{100:100,11:11,185:185,190:190,194:194,196:196,2:2,222:222,230:230,49:49,50:50,51:51,54:54,74:74}],190:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(){"undefined"!=typeof window&&"undefined"!=typeof navigator&&(G=window.VTTCue||window.TextTrackCue,I=[],J=[],K=-1,L=0,M=0,N=0,O=0,P=null,Q=null,T=!1,V=2147483647,U=null,R=!!navigator.userAgent.match(/Chrome/)&&!navigator.userAgent.match(/Edge/),void 0!==document.fullscreenElement?S="fullscreenElement":void 0!==document.webkitIsFullScreen?S="webkitIsFullScreen":document.msFullscreenElement?S="msFullscreenElement":document.mozFullScreen&&(S="mozFullScreen"))}function b(a){var b=I[a].kind,c=void 0!==I[a].label?I[a].label:I[a].lang,d=I[a].lang,e=I[a].isTTML,f=I[a].isEmbedded,g=R?document.createElement("track"):H.addTextTrack(b,c,d);return R&&(g.kind=b,g.label=c,g.srclang=d),g.isEmbedded=f,g.isTTML=e,g}function c(a){T=a,P&&!document[S]&&(P.style.zIndex=a?V:null)}function d(a,c){if(I.length===c)return void F("Trying to add too many tracks.");if(I.push(a),I.length===c){I.sort(function(a,b){return a.index-b.index}),P=H.getTTMLRenderingDiv();for(var d=-1,e=0;e<I.length;e++){var f=b.call(this,e);J.push(f),I[e].defaultTrack&&(f.default=!0,d=e),R&&H.appendChild(f);var h=m(e);h&&(h.mode=g.default.TEXT_SHOWING,P&&(I[e].isTTML||I[e].isEmbedded)?h.renderingType="html":h.renderingType="default"),this.addCaptions(e,0,I[e].captionData),E.trigger(k.default.TEXT_TRACK_ADDED)}if(r.call(this,d),d>=0)for(var i=0;i<I.length;i++){var j=m(i);j&&(j.mode=i===d?g.default.TEXT_SHOWING:g.default.TEXT_HIDDEN)}E.trigger(k.default.TEXT_TRACKS_QUEUE_INITIALIZED,{index:K,tracks:I})}}function e(a,b,c,d,e,f){var g=a/b,h=c/d,i=0,j=0;g>h?(j=b,i=j/d*c):(i=a,j=i/c*d);var k=0,l=0,m=0,n=0;return i/j>e?(n=j,m=j*e):(m=i,n=i/e),k=(a-m)/2,l=(b-n)/2,f?{x:k+.1*m,y:l+.1*n,w:.8*m,h:.8*n}:{x:k,y:l,w:m,h:n}}function f(a,b){var c=H.getClientWidth(),d=H.getClientHeight(),f=H.getVideoWidth(),g=H.getVideoHeight(),h=H.getVideoRelativeOffsetTop(),i=H.getVideoRelativeOffsetLeft(),j=f/g,k=!1;a.isFromCEA608&&(j=3.5/3,k=!0);var l=e.call(this,c,d,f,g,j,k),m=l.w,n=l.h,o=l.x,p=l.y;if(m!=N||n!=O||o!=L||p!=M||b){L=o+i,M=p+h,N=m,O=n,P.style.left=L+"px",P.style.top=M+"px",P.style.width=N+"px",P.style.height=O+"px";for(var q=0;a.activeCues&&q<a.activeCues.length;++q){var r=a.activeCues[q];r.scaleCue(r)}S&&document[S]||T?P.style.zIndex=V:P.style.zIndex=null}}function h(a){var b=N,c=O,d=void 0,e=void 0,f=void 0,g=void 0,h=void 0;if(a.cellResolution){var i=[b/a.cellResolution[0],c/a.cellResolution[1]];if(a.linePadding)for(d in a.linePadding)if(a.linePadding.hasOwnProperty(d)){var k=a.linePadding[d];e=(k*i[0]).toString();for(var l=document.getElementsByClassName("spanPadding"),m=0;m<l.length;m++)l[m].style.cssText=l[m].style.cssText.replace(/(padding-left\s*:\s*)[\d.,]+(?=\s*px)/gi,"$1"+e),l[m].style.cssText=l[m].style.cssText.replace(/(padding-right\s*:\s*)[\d.,]+(?=\s*px)/gi,"$1"+e)}if(a.fontSize){for(d in a.fontSize)if(a.fontSize.hasOwnProperty(d)){"%"===a.fontSize[d][0]?f=a.fontSize[d][1]/100:"c"===a.fontSize[d][0]&&(f=a.fontSize[d][1]),e=(f*i[1]).toString(),h="defaultFontSize"!==d?document.getElementsByClassName(d):document.getElementsByClassName("paragraph");for(var n=0;n<h.length;n++)h[n].style.cssText=h[n].style.cssText.replace(/(font-size\s*:\s*)[\d.,]+(?=\s*px)/gi,"$1"+e)}if(a.lineHeight)for(d in a.lineHeight)if(a.lineHeight.hasOwnProperty(d)){"%"===a.lineHeight[d][0]?g=a.lineHeight[d][1]/100:"c"===a.fontSize[d][0]&&(g=a.lineHeight[d][1]),e=(g*i[1]).toString(),h=document.getElementsByClassName(d);for(var o=0;o<h.length;o++)h[o].style.cssText=h[o].style.cssText.replace(/(line-height\s*:\s*)[\d.,]+(?=\s*px)/gi,"$1"+e)}}}if(a.isd){var p=document.getElementById(a.cueID);p&&P.removeChild(p),j(a)}}function j(a){var b=document.createElement("div")
;P.appendChild(b),U=(0,p.renderHTML)(a.isd,b,function(b){var c=/^(urn:)(mpeg:[a-z0-9][a-z0-9-]{0,31}:)(subs:)([0-9]+)$/,d=/^#(.*)$/;if(c.test(b)){var e=c.exec(b),f=parseInt(e[4],10)-1,g=btoa(a.images[f]),h="data:image/png;base64,"+g;return h}if(d.test(b)){var e=d.exec(b),f=e[1],h="data:image/png;base64,"+a.embeddedImages[f];return h}return null},P.clientHeight,P.clientWidth,!1,function(a){F("[TextTracks][renderCaption]",a)},U,!0),b.id=a.cueID}function l(a,b,c){var d=m(a),e=this;if(d&&c&&0!==c.length)for(var f in c){var i=void 0,k=c[f];d.cellResolution=k.cellResolution,d.isFromCEA608=k.isFromCEA608,"html"===k.type?(i=new G(k.start-b,k.end-b,""),i.cueHTMLElement=k.cueHTMLElement,i.isd=k.isd,i.images=k.images,i.embeddedImages=k.embeddedImages,i.cueID=k.cueID,i.scaleCue=h.bind(e),i.cellResolution=k.cellResolution,i.lineHeight=k.lineHeight,i.linePadding=k.linePadding,i.fontSize=k.fontSize,P.style.left=L+"px",P.style.top=M+"px",P.style.width=N+"px",P.style.height=O+"px",i.onenter=function(){d.mode===g.default.TEXT_SHOWING&&(this.isd?(j(this),F("Cue enter id:"+this.cueID)):(P.appendChild(this.cueHTMLElement),h.call(e,this)))},i.onexit=function(){for(var a=P.childNodes,b=0;b<a.length;++b)a[b].id===this.cueID&&(F("Cue exit id:"+a[b].id),P.removeChild(a[b]))}):(i=new G(k.start-b,k.end-b,k.data),k.styles&&(void 0!==k.styles.align&&"align"in i&&(i.align=k.styles.align),void 0!==k.styles.line&&"line"in i&&(i.line=k.styles.line),void 0!==k.styles.position&&"position"in i&&(i.position=k.styles.position),void 0!==k.styles.size&&"size"in i&&(i.size=k.styles.size))),d.addCue(i)}}function m(a){return a>=0&&I[a]?H.getTextTrack(I[a].kind,I[a].label,I[a].lang,I[a].isTTML,I[a].isEmbedded):null}function n(){return K}function q(a){for(var b=-1,c=0;c<I.length;c++)if(I[c].label===a){b=c;break}return b}function r(a){if(a!==K){K=a;var b=m(K);s.call(this,b),Q&&(clearInterval(Q),Q=null),b&&"html"===b.renderingType&&(f.call(this,b,!0),Q=setInterval(f.bind(this,b),500))}}function s(a){z.call(this),a&&"html"===a.renderingType?x.call(this):y.call(this)}function t(a){if(a.cues)for(var b=a.cues,c=b.length-1,d=c;d>=0;d--)a.removeCue(b[d])}function u(a){var b=m(a);b&&t(b)}function v(){for(var a=J?J.length:0,b=0;b<a;b++)if(R)H.removeChild(J[b]);else{var c=m(b);c&&(t.call(this,c),c.mode="disabled")}J=[],I=[],Q&&(clearInterval(Q),Q=null),K=-1,z.call(this)}function w(a){H.removeChild(J[a]),J.splice(a,1)}function x(){if(R){var a=document.getElementById("native-cue-style");if(!a){a=document.createElement("style"),a.id="native-cue-style",document.head.appendChild(a);var b=a.sheet,c=H.getElement();c&&(c.id?b.insertRule("#"+c.id+"::cue {background: transparent}",0):0!==c.classList.length?b.insertRule("."+c.className+"::cue {background: transparent}",0):b.insertRule("video::cue {background: transparent}",0))}}}function y(){if(R){var a=document.getElementById("native-cue-style");a&&document.head.removeChild(a)}}function z(){if(P)for(;P.firstChild;)P.removeChild(P.firstChild)}function A(a){a&&a.videoModel&&(H=a.videoModel)}function B(a,b){var c=m(a);c&&c.mode!==b&&(c.mode=b)}function C(){return I[K]}var D=this.context,E=(0,i.default)(D).getInstance(),F=(0,o.default)(D).getInstance().log,G=void 0,H=void 0,I=void 0,J=void 0,K=void 0,L=void 0,M=void 0,N=void 0,O=void 0,P=void 0,Q=void 0,R=void 0,S=void 0,T=void 0,U=void 0,V=void 0;return{initialize:a,displayCConTop:c,addTextTrack:d,addCaptions:l,getCurrentTrackIdx:n,setCurrentTrackIdx:r,getTrackIdxForId:q,getCurrentTrackInfo:C,setModeForTrackIdx:B,deleteCuesFromTrackIdx:u,deleteAllTextTracks:v,deleteTextTrack:w,setConfig:A}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(100),g=d(f),h=a(50),i=d(h),j=a(54),k=d(j),l=a(51),m=d(l),n=a(49),o=d(n),p=a(21);e.__dashjs_factory_name="TextTracks",c.default=m.default.getSingletonFactory(e),b.exports=c.default},{100:100,21:21,49:49,50:50,51:51,54:54}],191:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){h(),n=(0,m.default)(j).create({dashManifestModel:a.dashManifestModel,adapter:a.adapter,baseURLController:a.baseURLController,stream:a.stream})}function c(a){var b=n.getCurrentTrack();if(!b||b.segmentDuration<=0)return null;var c=Math.floor(a/b.segmentDuration),e=a%b.segmentDuration,f=Math.floor(e*b.tilesHor*b.tilesVert/b.segmentDuration),g=new k.default;return g.url=d(b,c),g.width=Math.floor(b.widthPerTile),g.height=Math.floor(b.heightPerTile),g.x=Math.floor(f%b.tilesHor)*b.widthPerTile,g.y=Math.floor(f/b.tilesHor)*b.heightPerTile,g}function d(a,b){var c=b+a.startNumber,d=(0,p.replaceTokenForTemplate)(a.templateUrl,"Number",c);return d=(0,p.replaceTokenForTemplate)(d,"Time",(c-1)*a.segmentDuration),d=(0,p.replaceTokenForTemplate)(d,"Bandwidth",a.bandwidth),(0,p.unescapeDollarsInTemplate)(d)}function e(a){n.setTrackByIndex(a)}function f(){return n.getCurrentTrackIndex()}function g(){var a=n.getTracks();if(!a||0===a.length)return[];var b=0;return a.map(function(a){var c=new o.default;return c.mediaType=i.default.IMAGE,c.qualityIndex=b++,c.bitrate=a.bitrate,c.width=a.width,c.height=a.height,c})}function h(){n&&n.reset()}var j=this.context,l=void 0,n=void 0;return l={get:c,setTrackByIndex:e,getCurrentTrackIndex:f,getBitrateList:g,reset:h},b(),l}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f),h=a(100),i=d(h),j=a(223),k=d(j),l=a(192),m=d(l),n=a(210),o=d(n),p=a(77);e.__dashjs_factory_name="ThumbnailController",c.default=g.default.getClassFactory(e),b.exports=c.default},{100:100,192:192,210:210,223:223,51:51,77:77}],192:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){l(),c()}function c(){if(u&&r&&s){var a=u?u.getStreamInfo():null;if(a){var b=s.getMediaInfoForType(a,g.default.IMAGE);if(b){var c=s.getDataForMedia(b);if(c){var e=r.getRepresentationsForAdaptation(c);e&&e.length>0&&e.forEach(function(a){a.segmentInfoType===i.default.SEGMENT_TEMPLATE&&a.segmentDuration>0&&a.media&&d(a)}),x.length>0&&(x.sort(function(a,b){return a.bitrate-b.bitrate}),y=x.length-1)}}}}}function d(a){var b=new m.default;b.id=a.id,b.bitrate=a.bandwidth,b.width=a.width,b.height=a.height,b.tilesHor=1,b.tilesVert=1,b.startNumber=a.startNumber,b.segmentDuration=a.segmentDuration,b.timescale=a.timescale,b.templateUrl=e(a),a.essentialProperties&&a.essentialProperties.forEach(function(a){if(a.schemeIdUri===q&&a.value){var c=a.value.split("x");2!==c.length||isNaN(c[0])||isNaN(c[1])||(b.tilesHor=parseInt(c[0],10),b.tilesVert=parseInt(c[1],10))}}),b.tilesHor>0&&b.tilesVert>0&&(b.widthPerTile=b.width/b.tilesHor,b.heightPerTile=b.height/b.tilesVert,x.push(b))}function e(a){var b=v.isRelative(a.media)?v.resolve(a.media,t.resolve(a.path).url):a.media;return b?(0,p.replaceIDForTemplate)(b,a.id):""}function f(){return x}function h(){return y}function j(){return y<0?null:x[y]}function k(a){x&&0!==x.length&&(a>=x.length&&(a=x.length-1),y=a)}function l(){x=[],y=-1}var n=this.context,r=a.dashManifestModel,s=a.adapter,t=a.baseURLController,u=a.stream,v=(0,o.default)(n).getInstance(),w=void 0,x=void 0,y=void 0;return w={initialize:b,getTracks:f,reset:l,setTrackByIndex:k,getCurrentTrack:j,getCurrentTrackIndex:h},b(),w}Object.defineProperty(c,"__esModule",{value:!0});var f=a(100),g=d(f),h=a(61),i=d(h),j=a(51),k=d(j),l=a(224),m=d(l),n=a(206),o=d(n),p=a(77),q="http://dashif.org/thumbnail_tile";e.__dashjs_factory_name="ThumbnailTracks",c.default=k.default.getClassFactory(e),b.exports=c.default},{100:100,206:206,224:224,51:51,61:61,77:77}],193:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(){p=(0,k.default)(h).create({updateEventName:i.default.SERVICE_LOCATION_BLACKLIST_CHANGED,addBlacklistEventName:i.default.SERVICE_LOCATION_BLACKLIST_ADD}),q=(0,o.default)(h).create({blacklistController:p}),t=(0,m.default)(h).create({blacklistController:p}),u=q}function b(a){a.selector&&(u=a.selector),a.dashManifestModel&&(l=a.dashManifestModel)}function c(){if(!l||!l.hasOwnProperty("getIsDVB"))throw new Error("Missing config parameter(s)")}function d(a){c(),u=l.getIsDVB(a)?t:q}function e(a){var b=a.baseUrls,c=a.selectedIdx;if(!isNaN(c))return b[c];var d=u.select(b);return d?(a.selectedIdx=b.indexOf(d),d):void j.trigger(i.default.URL_RESOLUTION_FAILED,{error:new Error(r,s)})}function f(){p.reset()}var h=this.context,j=(0,g.default)(h).getInstance(),l=void 0,n=void 0,p=void 0,q=void 0,t=void 0,u=void 0;return n={chooseSelectorFromManifest:d,select:e,reset:f,setConfig:b},a(),n}Object.defineProperty(c,"__esModule",{value:!0});var f=a(50),g=d(f),h=a(54),i=d(h),j=a(105),k=d(j),l=a(209),m=d(l),n=a(208),o=d(n),p=a(51),q=d(p),r=1,s="Failed to resolve a valid URL";e.__dashjs_factory_name="BaseURLSelector";var t=q.default.getClassFactory(e);t.URL_RESOLUTION_FAILED_GENERIC_ERROR_CODE=r,t.URL_RESOLUTION_FAILED_GENERIC_ERROR_MESSAGE=s,q.default.updateClassFactory(e.__dashjs_factory_name,t),c.default=t,b.exports=c.default},{105:105,208:208,209:209,50:50,51:51,54:54}],194:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a){if(!a)return null;void 0===a.fileStart&&(a.fileStart=0);var c=k.default.parseBuffer(a),d=(0,g.default)(b).create();return d.setData(c),d}var b=this.context;return{parse:a}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(201),g=d(f),h=a(51),i=d(h),j=a(11),k=d(j);e.__dashjs_factory_name="BoxParser",c.default=i.default.getSingletonFactory(e),b.exports=c.default},{11:11,201:201,51:51}],195:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(){g=!1}function b(){var a="WebKitMediaSource"in window,b="MediaSource"in window;return a||b}function c(){return g}function d(a){g=a}function e(a){return!!("MediaSource"in window&&MediaSource.isTypeSupported(a))||!!("WebKitMediaSource"in window&&WebKitMediaSource.isTypeSupported(a))}var f=void 0,g=void 0;return f={supportsMediaSource:b,supportsEncryptedMedia:c,supportsCodec:e,setEncryptedMediaSupported:d},a(),f}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f);e.__dashjs_factory_name="Capabilities",c.default=g.default.getSingletonFactory(e),b.exports=c.default},{51:51}],196:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a,b){var c=0;for(c=0;c<this.customTimeRangeArray.length&&a>this.customTimeRangeArray[c].start;c++);for(this.customTimeRangeArray.splice(c,0,{start:a,end:b}),c=0;c<this.customTimeRangeArray.length-1;c++)this.mergeRanges(c,c+1)&&c--;this.length=this.customTimeRangeArray.length}function b(){this.customTimeRangeArray=[],this.length=0}function c(a,b){for(var c=0;c<this.customTimeRangeArray.length;c++)if(a<=this.customTimeRangeArray[c].start&&b>=this.customTimeRangeArray[c].end)this.customTimeRangeArray.splice(c,1),c--;else{if(a>this.customTimeRangeArray[c].start&&b<this.customTimeRangeArray[c].end){this.customTimeRangeArray.splice(c+1,0,{start:b,end:this.customTimeRangeArray[c].end}),this.customTimeRangeArray[c].end=a;break}a>this.customTimeRangeArray[c].start&&a<this.customTimeRangeArray[c].end?this.customTimeRangeArray[c].end=a:b>this.customTimeRangeArray[c].start&&b<this.customTimeRangeArray[c].end&&(this.customTimeRangeArray[c].start=b)}this.length=this.customTimeRangeArray.length}function d(a,b){var c=this.customTimeRangeArray[a],d=this.customTimeRangeArray[b];return c.start<=d.start&&d.start<=c.end&&c.end<=d.end?(c.end=d.end,this.customTimeRangeArray.splice(b,1),!0):d.start<=c.start&&c.start<=d.end&&d.end<=c.end?(c.start=d.start,this.customTimeRangeArray.splice(b,1),!0):d.start<=c.start&&c.start<=d.end&&c.end<=d.end?(this.customTimeRangeArray.splice(a,1),!0):c.start<=d.start&&d.start<=c.end&&d.end<=c.end&&(this.customTimeRangeArray.splice(b,1),!0)}function e(a){if(null===a||isNaN(a)||a%1!=0)throw new Error("index argument is not an integer")}function f(a){return e(a),a>=this.customTimeRangeArray.length||a<0?NaN:this.customTimeRangeArray[a].start}function g(a){return e(a),a>=this.customTimeRangeArray.length||a<0?NaN:this.customTimeRangeArray[a].end}return{customTimeRangeArray:[],length:0,add:a,clear:b,remove:c,mergeRanges:d,start:f,end:g}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f);e.__dashjs_factory_name="CustomTimeRanges",c.default=g.default.getClassFactory(e),b.exports=c.default},{51:51}],197:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(a){if(void 0!==x)return x;x=!1;var b="1",c="1",d=void 0;try{"undefined"!=typeof window&&(d=window[a])}catch(e){return u("Warning: DOMStorage access denied: "+e.message),x}if(!d||a!==m&&a!==n)return x;try{d.setItem(b,c),d.removeItem(b),x=!0}catch(e){u("Warning: DOMStorage is supported, but cannot be used: "+e.message)}return x}function c(){b(m)&&j.forEach(function(a){var b=localStorage.getItem(a.oldKey);if(b){localStorage.removeItem(a.oldKey);try{localStorage.setItem(a.newKey,b)}catch(c){u(c.message)}}})}function d(){c()}function e(){var a=6e5;return Math.round((new Date).getTime()/a)*a}function f(a,c){return b(a)&&v["get"+c+"CachingInfo"]().enabled}function g(){if(!v||!v.hasOwnProperty("getLastMediaSettingsCachingInfo"))throw new Error("Missing config parameter(s)")}function h(a){if(g(),!f(m,p))return null;var b=null,c=l.replace(/\?/,a);try{var d=JSON.parse(localStorage.getItem(c))||{},e=(new Date).getTime()-parseInt(d.timestamp,10)>=v.getLastMediaSettingsCachingInfo().ttl||!1;b=d.settings,e&&(localStorage.removeItem(c),b=null)}catch(h){return null}return b}function q(a){var b=NaN;if(g(),f(m,o)){var c=k.replace(/\?/,a);try{var d=JSON.parse(localStorage.getItem(c))||{},e=(new Date).getTime()-parseInt(d.timestamp,10)>=v.getLastMediaSettingsCachingInfo().ttl||!1,h=parseFloat(d.bitrate);isNaN(h)||e?e&&localStorage.removeItem(c):(b=h,u("Last saved bitrate for "+a+" was "+h))}catch(i){return null}}return b}function r(a,b){if(f(m,p)){var c=l.replace(/\?/,a);try{localStorage.setItem(c,JSON.stringify({settings:b,timestamp:e()}))}catch(d){u(d.message)}}}function s(a,b){if(f(m,o)&&b){var c=k.replace(/\?/,a);try{localStorage.setItem(c,JSON.stringify({bitrate:b.toFixed(3),timestamp:e()}))}catch(d){u(d.message)}}}a=a||{};var t=this.context,u=(0,i.default)(t).getInstance().log,v=a.mediaPlayerModel,w=void 0,x=void 0;return w={getSavedBitrateSettings:q,setSavedBitrateSettings:s,getSavedMediaSettings:h,setSavedMediaSettings:r},d(),w}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f),h=a(49),i=d(h),j=[{oldKey:"dashjs_vbitrate",newKey:"dashjs_video_bitrate"},{oldKey:"dashjs_abitrate",newKey:"dashjs_audio_bitrate"},{oldKey:"dashjs_vsettings",newKey:"dashjs_video_settings"},{oldKey:"dashjs_asettings",newKey:"dashjs_audio_settings"}],k="dashjs_?_bitrate",l="dashjs_?_settings",m="localStorage",n="sessionStorage",o="LastBitrate",p="LastMediaSettings";e.__dashjs_factory_name="DOMStorage";var q=g.default.getSingletonFactory(e);c.default=q,b.exports=c.default},{49:49,51:51}],198:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){return n}function c(a){n=a}function d(a,b){var c=!0,d=0,e=void 0,f=void 0;if(void 0===b&&(b=!1),a.tag>16777215?(m.getUint32(n)!==a.tag&&(c=!1),d=4):a.tag>65535?(e=m.getUint16(n),f=m.getUint8(n+2),256*e+f!==a.tag&&(c=!1),d=3):a.tag>255?(m.getUint16(n)!==a.tag&&(c=!1),d=2):(m.getUint8(n)!==a.tag&&(c=!1),d=1),!c&&a.required&&!b)throw new Error("required tag not found");return c&&(n+=d),c}function e(a,b){var c=d(a,b);return c&&h(),c}function f(a){var b=void 0;return d(a),b=h(),l[a.parse](b)}function g(a,b){var c=d(a,b),e=void 0;return c&&(e=h(),n+=e),c}function h(a){var b=1,c=128,d=8,e=-1,f=0,g=m.getUint8(n),h=0;for(h=0;h<d;h+=1){if((g&c)===c){f=void 0===a?g&~c:g,e=h;break}c>>=1}for(h=0;h<e;h+=1,b+=1)f=f<<8|255&m.getUint8(n+b);return n+=b,f}function i(a){var b=void 0;switch(a){case 4:b=m.getFloat32(n),n+=4;break;case 8:b=m.getFloat64(n),n+=8}return b}function j(a){for(var b=0,c=0;c<a;c+=1)b<<=8,b|=255&m.getUint8(n+c);return n+=a,b}function k(){return n<m.byteLength}a=a||{};var l=void 0,m=new DataView(a.data),n=0;return l={getPos:b,setPos:c,consumeTag:d,consumeTagAndSize:e,parseTag:f,skipOverElement:g,getMatroskaCodedNum:h,getMatroskaFloat:i,getMatroskaUint:j,moreData:k}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f);e.__dashjs_factory_name="EBMLParser",c.default=g.default.getClassFactory(e),b.exports=c.default},{51:51}],199:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a){k.trigger(i.default.ERROR,{error:"capability",event:a})}function b(a,b,c){k.trigger(i.default.ERROR,{error:"download",event:{id:a,url:b,request:c}})}function c(a,b,c,d){k.trigger(i.default.ERROR,{error:"manifestError",event:{message:a,id:b,manifest:c,event:d}})}function d(a,b,c){k.trigger(i.default.ERROR,{error:"cc",event:{message:a,id:b,cc:c}})}function e(a){k.trigger(i.default.ERROR,{error:"mediasource",event:a})}function f(a){k.trigger(i.default.ERROR,{error:"key_session",event:a})}function h(a){k.trigger(i.default.ERROR,{error:"key_message",event:a})}var j=this.context,k=(0,g.default)(j).getInstance();return{capabilityError:a,downloadError:b,manifestError:c,timedTextError:d,mediaSourceError:e,mediaKeySessionError:f,mediaKeyMessageError:h}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(50),g=d(f),h=a(54),i=d(h),j=a(51),k=d(j),l="mediasource",m="mediakeys",n="manifest",o="SIDX",p="content",q="initialization",r="xlink",s="codec",t="parse",u="nostreams",v="parse";e.__dashjs_factory_name="ErrorHandler";var w=k.default.getSingletonFactory(e);w.CAPABILITY_ERROR_MEDIASOURCE=l,w.CAPABILITY_ERROR_MEDIAKEYS=m,w.DOWNLOAD_ERROR_ID_MANIFEST=n,w.DOWNLOAD_ERROR_ID_SIDX=o,w.DOWNLOAD_ERROR_ID_CONTENT=p,w.DOWNLOAD_ERROR_ID_INITIALIZATION=q,w.DOWNLOAD_ERROR_ID_XLINK=r,w.MANIFEST_ERROR_ID_CODEC=s,w.MANIFEST_ERROR_ID_PARSE=t,w.MANIFEST_ERROR_ID_NOSTREAMS=u,w.TIMED_TEXT_ERROR_ID_PARSE=v,k.default.updateSingletonFactory(e.__dashjs_factory_name,w),c.default=w,b.exports=c.default},{50:50,51:51,54:54}],200:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a){var b=a.streamId,c=a.representationId;d[b]=d[b]||{},d[b][c]=a}function b(a,b){return d&&d[a]&&d[a][b]?d[a][b]:null}function c(){d={}}var d={};return{save:a,extract:b,reset:c}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f);e.__dashjs_factory_name="InitCache",c.default=g.default.getSingletonFactory(e),b.exports=c.default},{51:51}],201:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a){return a&&f&&f.boxes&&0!==f.boxes.length&&"function"==typeof f.fetch?e(f.fetch(a)):null}function b(a){var b=[];if(!a||!f||"function"!=typeof f.fetchAll)return b;for(var c=f.fetchAll(a),d=void 0,g=0,h=c.length;g<h;g++)(d=e(c[g]))&&b.push(d);return b}function c(a){f=a}function d(){if(!f||!f.boxes||!f.boxes.length)return null;var a=f.boxes[f.boxes.length-1].type,c=b(a);return c.length>0?c[c.length-1]:null}function e(a){if(!a)return null;var b=new g.default(a);return a.hasOwnProperty("_incomplete")&&(b.isComplete=!a._incomplete),b}var f=void 0;return{getBox:a,getBoxes:b,setData:c,getLastBox:d}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(215),g=d(f),h=a(51),i=d(h);e.__dashjs_factory_name="IsoFile",c.default=i.default.getClassFactory(e),b.exports=c.default},{215:215,51:51}],202:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(){if(!(e&&e.hasOwnProperty("getExpectedLiveEdge")&&f&&f.hasOwnProperty("getCurrentRepresentationInfo")))throw new Error("Missing config parameter(s)")}function c(){b();var a=f.getCurrentRepresentationInfo(),c=a.DVRWindow.end;return a.useCalculatedLiveEdgeTime&&(c=e.getExpectedLiveEdge(),e.setClientTimeOffset(c-a.DVRWindow.end)),c}function d(){e=null,f=null}a=a||{};var e=a.timelineConverter,f=a.streamProcessor;return{getLiveEdge:c,reset:d}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f);e.__dashjs_factory_name="LiveEdgeFinder",c.default=g.default.getClassFactory(e),b.exports=c.default},{51:51}],203:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a,b){return(0,i.default)(a,b)}return{areEqual:a}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f),h=a(13),i=d(h);e.__dashjs_factory_name="ObjectUtils",c.default=g.default.getSingletonFactory(e),b.exports=c.default},{13:13,51:51}],204:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(a){return a}function b(a){return a}return{modifyRequestURL:a,modifyRequestHeader:b}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f);e.__dashjs_factory_name="RequestModifier",c.default=g.default.getSingletonFactory(e),b.exports=c.default},{51:51}],205:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(){var a="cue_TTML_"+g;return g++,a}function b(b,c,d,f,g){var h=void 0,i=void 0,k="",l=[],m=void 0,n=void 0,o={},p="",q="",r={onOpenTag:function(a,b,c){if("image"===b&&"http://www.smpte-ra.org/schemas/2052-1/2010/smpte-tt"===a){if(!c[" imagetype"]||"PNG"!==c[" imagetype"].value)return void e("Warning: smpte-tt imagetype != PNG. Discarded");p=c["http://www.w3.org/XML/1998/namespace id"].value}},onCloseTag:function(){p&&(o[p]=q.trim()),q="",p=""},onText:function(a){p&&(q+=a)}};if(!b)throw k="no ttml data to parse",new Error(k);var s=(0,j.fromXML)(b,function(a){k=a},r),t=s.getMediaTimeEvents();for(h=0;h<t.length;h++){var u=(0,j.generateISD)(s,t[h],function(a){k=a});for(i=0;i<u.contents.length;i++)u.contents[i].contents.length>=1&&(m=t[h]+c<d?d:t[h]+c,n=t[h+1]+c>f?f:t[h+1]+c,m<n&&l.push({start:m,end:n,type:"html",cueID:a(),isd:u,images:g,embeddedImages:o}))}if(""!==k&&e(k),l.length>0)return l;throw new Error(k)}function c(){}var d=this.context,e=(0,i.default)(d).getInstance().log,f=void 0,g=0;return f={parse:b},c(),f}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f),h=a(49),i=d(h),j=a(21);e.__dashjs_factory_name="TTMLParser",c.default=g.default.getSingletonFactory(e),b.exports=c.default},{21:21,49:49,51:51}],206:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(){try{new window.URL("x","http://y");k=p}catch(a){}finally{k=k||q}}function b(a){var b=a.indexOf("/"),c=a.lastIndexOf("/");return-1!==b?c===b+1?a:(-1!==a.indexOf("?")&&(a=a.substring(0,a.indexOf("?"))),a.substring(0,c+1)):""}function c(a){var b=a.match(o);return b?b[1]:""}function d(a){var b=a.match(l);return b?b[0]:""}function e(a){return!l.test(a)}function f(a){return e(a)&&"/"===a.charAt(0)}function g(a){return 0===a.indexOf("//")}function h(a){return m.test(a)}function i(a){return n.test(a)}function j(a,b){return k(a,b)}var k=void 0,l=/^[a-z][a-z0-9+\-.]*:/i,m=/^https?:\/\//i,n=/^https:\/\//i,o=/^([a-z][a-z0-9+\-.]*:\/\/[^\/]+)\/?/i,p=function(a,b){try{return new window.URL(a,b).toString()}catch(c){return a}},q=function(a,h){var i=b;if(!h)return a;if(!e(a))return a;f(a)&&(i=c),g(a)&&(i=d);var j=i(h);return[j,a].join("/"!==j.charAt(j.length-1)&&"/"!==a.charAt(0)?"/":"")};return a(),{parseBaseUrl:b,parseOrigin:c,parseScheme:d,isRelative:e,isPathAbsolute:f,isSchemeRelative:g,isHTTPURL:h,isHTTPS:i,resolve:j}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f);e.__dashjs_factory_name="URLUtils",c.default=g.default.getSingletonFactory(e),b.exports=c.default},{51:51}],207:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(){function a(){l=/(?:\r\n|\r|\n)/gm,m=/-->/,n=/(^[\s]+|[\s]+$)/g,o=/\s\b/g}function b(a){var b=[],e=void 0,g=void 0;if(!a)return b;a=a.split(l),e=a.length,g=-1;for(var i=0;i<e;i++){var k=a[i];if(k.length>0&&k!==j&&k.match(m)){var o=d(k),p=o.cuePoints,q=o.styles,r=f(a,i+1),s=c(p[0].replace(n,"")),t=c(p[1].replace(n,""));!isNaN(s)&&!isNaN(t)&&s>=g&&t>s?""!==r?(g=s,b.push({start:s,end:t,data:r,styles:q})):h("Skipping cue due to empty/malformed cue text"):h("Skipping cue due to incorrect cue timing")}}return b}function c(a){var b=a.split(":"),c=b.length-1;return a=60*parseInt(b[c-1],10)+parseFloat(b[c]),2===c&&(a+=3600*parseInt(b[0],10)),a}function d(a){var b=a.split(m),c=b[1].split(o);return c.shift(),b[1]=c[0],c.shift(),{cuePoints:b,styles:e(c)}}function e(a){var b={};return a.forEach(function(a){if(a.split(/:/).length>1){var c=a.split(/:/)[1];c&&-1!=c.search(/%/)&&(c=parseInt(c.replace(/%/,""),10)),(a.match(/align/)||a.match(/A/))&&(b.align=c),(a.match(/line/)||a.match(/L/))&&(b.line=c),(a.match(/position/)||a.match(/P/))&&(b.position=c),(a.match(/size/)||a.match(/S/))&&(b.size=c)}}),b}function f(a,b){for(var c=b,d="",e="",f=void 0;""!==a[c]&&c<a.length;)c++;if((f=c-b)>1)for(var g=0;g<f;g++){if(e=a[b+g],e.match(m)){d="";break}d+=e,g!==f-1&&(d+="\n")}else e=a[b],e.match(m)||(d=e);return d}var g=this.context,h=(0,i.default)(g).getInstance().log,k=void 0,l=void 0,m=void 0,n=void 0,o=void 0;return k={parse:b},a(),k}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f),h=a(49),i=d(h),j="WEBVTT";e.__dashjs_factory_name="VTTParser",c.default=g.default.getSingletonFactory(e),b.exports=c.default},{49:49,51:51}],208:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(a){var b=0,d=void 0;return a&&a.some(function(a,d){return b=d,!c.contains(a.serviceLocation)})&&(d=a[b]),d}a=a||{};var c=a.blacklistController;return{select:b}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f);e.__dashjs_factory_name="BasicSelector",c.default=g.default.getClassFactory(e),b.exports=c.default},{51:51}],209:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a){function b(a){var b=[],c=function(a){return!b.length||!a.dvb_priority||-1===b.indexOf(a.dvb_priority)},d=function(a){return!e.contains(a.serviceLocation)||(a.dvb_priority&&b.push(a.dvb_priority),!1)};return a.filter(d).filter(c)}function c(a){var b=function(a,b){var c=a.dvb_priority-b.dvb_priority;return isNaN(c)?0:c},c=function(a,b,c){return!b||c[0].dvb_priority&&a.dvb_priority&&c[0].dvb_priority===a.dvb_priority},d=0,e=[],f=0,g=void 0,h=void 0;if(h=a.sort(b).filter(c),h.length)return h.length>1&&(h.forEach(function(a){d+=a.dvb_weight,e.push(d)}),g=Math.floor(Math.random()*(d-1)),e.every(function(a,b){return f=b,!(g<a)})),h[f]}function d(a){return a&&c(b(a))}a=a||{};var e=a.blacklistController;return{select:d}}Object.defineProperty(c,"__esModule",{value:!0});var f=a(51),g=d(f);e.__dashjs_factory_name="DVBSelector",c.default=g.default.getClassFactory(e),b.exports=c.default},{51:51}],210:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.mediaType=null,this.bitrate=null,this.width=null,this.height=null,this.scanType=null,this.qualityIndex=NaN};c.default=e,b.exports=c.default},{}],211:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(b,c,e){d(this,a),this.code=b||null,this.message=c||null,this.data=e||null};c.default=e,b.exports=c.default},{}],212:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.streamId=null,this.mediaInfo=null,this.segmentType=null,this.quality=NaN,this.index=NaN,this.bytes=null,this.start=NaN,this.end=NaN,this.duration=NaN,this.representationId=null};c.default=e,b.exports=c.default},{}],213:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.action=a.ACTION_DOWNLOAD,this.startTime=NaN,this.mediaType=null,this.mediaInfo=null,this.type=null,this.duration=NaN,this.timescale=NaN,this.range=null,this.url=null,this.serviceLocation=null,this.requestStartDate=null,this.firstByteDate=null,this.requestEndDate=null,this.quality=NaN,this.index=NaN,this.availabilityStartTime=null,this.availabilityEndTime=null,this.wallStartTime=null,this.bytesLoaded=NaN,this.bytesTotal=NaN,this.delayLoadingTime=NaN,this.responseType="arraybuffer",this.representationId=null};e.ACTION_DOWNLOAD="download",e.ACTION_COMPLETE="complete",c.default=e,b.exports=c.default},{}],214:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(c,"__esModule",{value:!0});var g=function(a,b,c){for(var d=!0;d;){var e=a,f=b,g=c;d=!1,null===e&&(e=Function.prototype);var h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var i=h.get;if(void 0===i)return;return i.call(g)}var j=Object.getPrototypeOf(e);if(null===j)return;a=j,b=f,c=g,d=!0,h=j=void 0}},h=a(213),i=d(h),j=function(a){function b(a){e(this,b),g(Object.getPrototypeOf(b.prototype),"constructor",this).call(this),this.url=a||null,this.checkForExistenceOnly=!0}return f(b,a),b}(i.default);c.default=j,b.exports=c.default},{213:213}],215:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),f=function(){function a(b){if(d(this,a),this.offset=b._offset,this.type=b.type,this.size=b.size,this.boxes=[],b.boxes)for(var c=0;c<b.boxes.length;c++)this.boxes.push(new a(b.boxes[c]));switch(this.isComplete=!0,b.type){case"sidx":if(this.timescale=b.timescale,this.earliest_presentation_time=b.earliest_presentation_time,this.first_offset=b.first_offset,this.references=b.references,b.references){this.references=[];for(var c=0;c<b.references.length;c++){var e={reference_type:b.references[c].reference_type,referenced_size:b.references[c].referenced_size,subsegment_duration:b.references[c].subsegment_duration};this.references.push(e)}}break;case"emsg":this.id=b.id,this.value=b.value,this.timescale=b.timescale,this.scheme_id_uri=b.scheme_id_uri,this.presentation_time_delta=b.presentation_time_delta,this.event_duration=b.event_duration,this.message_data=b.message_data;break;case"mdhd":this.timescale=b.timescale;break;case"mfhd":this.sequence_number=b.sequence_number;break;case"subs":this.entry_count=b.entry_count,this.entries=b.entries;break;case"tfhd":this.base_data_offset=b.base_data_offset,this.sample_description_index=b.sample_description_index,this.default_sample_duration=b.default_sample_duration,this.default_sample_size=b.default_sample_size,this.default_sample_flags=b.default_sample_flags,this.flags=b.flags;break;case"tfdt":this.version=b.version,this.baseMediaDecodeTime=b.baseMediaDecodeTime,this.flags=b.flags;break;case"trun":if(this.sample_count=b.sample_count,this.first_sample_flags=b.first_sample_flags,this.data_offset=b.data_offset,this.flags=b.flags,this.samples=b.samples,b.samples){this.samples=[];for(var c=0,f=b.samples.length;c<f;c++){var g={sample_size:b.samples[c].sample_size,sample_duration:b.samples[c].sample_duration,
sample_composition_time_offset:b.samples[c].sample_composition_time_offset};this.samples.push(g)}}}}return e(a,[{key:"getChildBox",value:function(a){for(var b=0;b<this.boxes.length;b++)if(this.boxes[b].type===a)return this.boxes[b]}},{key:"getChildBoxes",value:function(a){for(var b=[],c=0;c<this.boxes.length;c++)this.boxes[c].type===a&&b.push(this.boxes[c]);return b}}]),a}();c.default=f,b.exports=c.default},{}],216:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.DVRWindowSize=NaN,this.loadedTime=null,this.availableFrom=null,this.minBufferTime=NaN,this.duration=NaN,this.isDynamic=!1,this.maxFragmentDuration=null};c.default=e,b.exports=c.default},{}],217:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.id=null,this.index=null,this.type=null,this.streamInfo=null,this.representationCount=0,this.lang=null,this.viewpoint=null,this.accessibility=null,this.audioChannelConfiguration=null,this.roles=null,this.codec=null,this.mimeType=null,this.contentProtection=null,this.isText=!1,this.KID=null,this.bitrateList=null};c.default=e,b.exports=c.default},{}],218:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.TcpList=[],this.HttpList=[],this.RepSwitchList=[],this.BufferLevel=[],this.BufferState=[],this.PlayList=[],this.DroppedFrames=[],this.SchedulingInfo=[],this.DVRInfo=[],this.ManifestUpdate=[],this.RequestsQueue=null,this.DVBErrors=[]};c.default=e,b.exports=c.default},{}],219:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.id=null,this.quality=null,this.DVRWindow=null,this.fragmentDuration=null,this.mediaInfo=null,this.MSETimeOffset=null};c.default=e,b.exports=c.default},{}],220:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.id=null,this.index=null,this.start=NaN,this.duration=NaN,this.manifestInfo=null,this.isLast=!0};c.default=e,b.exports=c.default},{}],221:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}Object.defineProperty(c,"__esModule",{value:!0});var g=function(a,b,c){for(var d=!0;d;){var e=a,f=b,g=c;d=!1,null===e&&(e=Function.prototype);var h=Object.getOwnPropertyDescriptor(e,f);if(void 0!==h){if("value"in h)return h.value;var i=h.get;if(void 0===i)return;return i.call(g)}var j=Object.getPrototypeOf(e);if(null===j)return;a=j,b=f,c=g,d=!0,h=j=void 0}},h=a(100),i=d(h),j=a(213),k=d(j),l=function(a){function b(a,c){e(this,b),g(Object.getPrototypeOf(b.prototype),"constructor",this).call(this),this.url=a||null,this.type=c||null,this.mediaType=i.default.STREAM,this.responseType=""}return f(b,a),b}(k.default);c.default=l,b.exports=c.default},{100:100,213:213}],222:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.captionData=null,this.label=null,this.lang=null,this.defaultTrack=!1,this.kind=null,this.isFragmented=!1,this.isEmbedded=!1};c.default=e,b.exports=c.default},{}],223:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.url=null,this.width=null,this.height=null,this.x=null,this.y=null};c.default=e,b.exports=c.default},{}],224:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.bitrate=0,this.width=0,this.height=0,this.tilesHor=0,this.tilesVert=0,this.widthPerTile=0,this.heightPerTile=0,this.startNumber=0,this.segmentDuration=0,this.timescale=0,this.templateUrl="",this.id=""};c.default=e,b.exports=c.default},{}],225:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.t=null,this.xywh=null,this.track=null,this.id=null,this.s=null,this.r=null};c.default=e,b.exports=c.default},{}],226:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.t=null,this.level=null};c.default=e,b.exports=c.default},{}],227:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var f=a(106),g=d(f),h=function a(){e(this,a),this.target=null,this.state=g.default.BUFFER_EMPTY};c.default=h,b.exports=c.default},{106:106}],228:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.time=null,this.range=null,this.manifestInfo=null};c.default=e,b.exports=c.default},{}],229:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.time=null,this.droppedFrames=null};c.default=e,b.exports=c.default},{}],230:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.tcpid=null,this.type=null,this.url=null,this.actualurl=null,this.range=null,this.trequest=null,this.tresponse=null,this.responsecode=null,this.interval=null,this.trace=[],this._stream=null,this._tfinish=null,this._mediaduration=null,this._responseHeaders=null,this._serviceLocation=null},f=function a(){d(this,a),this.s=null,this.d=null,this.b=[]};e.GET="GET",e.HEAD="HEAD",e.MPD_TYPE="MPD",e.XLINK_EXPANSION_TYPE="XLinkExpansion",e.INIT_SEGMENT_TYPE="InitializationSegment",e.INDEX_SEGMENT_TYPE="IndexSegment",e.MEDIA_SEGMENT_TYPE="MediaSegment",e.BITSTREAM_SWITCHING_SEGMENT_TYPE="BitstreamSwitchingSegment",e.OTHER_TYPE="other",c.HTTPRequest=e,c.HTTPRequestTrace=f},{}],231:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.mediaType=null,this.type=null,this.requestTime=null,this.fetchTime=null,this.availabilityStartTime=null,this.presentationStartTime=0,this.clientTimeOffset=0,this.currentTime=null,this.buffered=null,this.latency=0,this.streamInfo=[],this.representationInfo=[]},f=function a(){d(this,a),this.id=null,this.index=null,this.start=null,this.duration=null},g=function a(){d(this,a),this.id=null,this.index=null,this.mediaType=null,this.streamIndex=null,this.presentationTimeOffset=null,this.startNumber=null,this.fragmentInfoType=null};c.ManifestUpdate=e,c.ManifestUpdateStreamInfo=f,c.ManifestUpdateRepresentationInfo=g},{}],232:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.start=null,this.mstart=null,this.starttype=null,this.trace=[]};e.INITIAL_PLAYOUT_START_REASON="initial_playout",e.SEEK_START_REASON="seek",e.RESUME_FROM_PAUSE_START_REASON="resume",e.METRICS_COLLECTION_START_REASON="metrics_collection_start";var f=function a(){d(this,a),this.representationid=null,this.subreplevel=null,this.start=null,this.mstart=null,this.duration=null,this.playbackspeed=null,this.stopreason=null};f.REPRESENTATION_SWITCH_STOP_REASON="representation_switch",f.REBUFFERING_REASON="rebuffering",f.USER_REQUEST_STOP_REASON="user_request",f.END_OF_PERIOD_STOP_REASON="end_of_period",f.END_OF_CONTENT_STOP_REASON="end_of_content",f.METRICS_COLLECTION_STOP_REASON="metrics_collection_end",f.FAILURE_STOP_REASON="failure",c.PlayList=e,c.PlayListTrace=f},{}],233:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.t=null,this.mt=null,this.to=null,this.lto=null};c.default=e,b.exports=c.default},{}],234:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.loadingRequests=[],this.executedRequests=[]};c.default=e,b.exports=c.default},{}],235:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.mediaType=null,this.t=null,this.type=null,this.startTime=null,this.availabilityStartTime=null,this.duration=null,this.quality=null,this.range=null,this.state=null};c.default=e,b.exports=c.default},{}],236:[function(a,b,c){"use strict";function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var e=function a(){d(this,a),this.tcpid=null,this.dest=null,this.topen=null,this.tclose=null,this.tconnect=null};c.default=e,b.exports=c.default},{}]},{},[5]);
//# sourceMappingURL=dash.all.min.js.map
;
//# sourceMappingURL=scripts.bundle.js.map