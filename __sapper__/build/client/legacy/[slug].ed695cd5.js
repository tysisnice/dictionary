import{_ as t,a as s,b as n,c as r,i as a,s as e,d as o,S as i,f as c,e as u,t as p,j as f,g as h,h as l,k as m,l as d,m as v,o as x,u as b,p as j}from"./index.dc3c69b2.js";import{_ as k,a as g}from"./asyncToGenerator.81cd8351.js";function y(t){var s,n,r,a,e,o,i=t.post.title+"",k=t.post.html+"";return document.title=s=t.post.title,{c:function(){n=c(),r=u("h1"),a=p(i),e=c(),o=u("div"),this.h()},l:function(t){n=f(t,"\r\n\r\n"),r=h(t,"H1",{},!1);var s=l(r);a=f(s,i),s.forEach(m),e=f(t,"\r\n\r\n"),o=h(t,"DIV",{class:!0},!1),l(o).forEach(m),this.h()},h:function(){d(o,"class","content svelte-dkhkxh")},m:function(t,s){v(t,n,s),v(t,r,s),x(r,a),v(t,e,s),v(t,o,s),o.innerHTML=k},p:function(t,n){t.post&&s!==(s=n.post.title)&&(document.title=s),t.post&&i!==(i=n.post.title+"")&&b(a,i),t.post&&k!==(k=n.post.html+"")&&(o.innerHTML=k)},i:j,o:j,d:function(t){t&&(m(n),m(r),m(e),m(o))}}}function H(t){return T.apply(this,arguments)}function T(){return(T=k(g.mark((function t(s){var n,r,a;return g.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.params,s.query,t.next=3,this.fetch("blog/".concat(n.slug,".json"));case 3:return r=t.sent,t.next=6,r.json();case 6:if(a=t.sent,200!==r.status){t.next=11;break}return t.abrupt("return",{post:a});case 11:this.error(r.status,a.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function w(t,s,n){var r=s.post;return t.$set=function(t){"post"in t&&n("post",r=t.post)},{post:r}}var E=function(c){function u(t){var i;return s(this,u),i=n(this,r(u).call(this)),a(o(i),t,w,y,e,["post"]),i}return t(u,i),u}();export default E;export{H as preload};