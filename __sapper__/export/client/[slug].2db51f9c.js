import{S as t,i as s,s as o,a,e,t as n,d as r,c as i,b as p,f as c,g as h,h as l,j as u,o as f,k as d}from"./index.0914f1d2.js";function m(t){var s,o,m,x,g,j,v=t.post.title+"",k=t.post.html+"";return document.title=s=t.post.title,{c(){o=a(),m=e("h1"),x=n(v),g=a(),j=e("div"),this.h()},l(t){o=r(t,"\r\n\r\n"),m=i(t,"H1",{},!1);var s=p(m);x=r(s,v),s.forEach(c),g=r(t,"\r\n\r\n"),j=i(t,"DIV",{class:!0},!1),p(j).forEach(c),this.h()},h(){h(j,"class","content svelte-dkhkxh")},m(t,s){l(t,o,s),l(t,m,s),u(m,x),l(t,g,s),l(t,j,s),j.innerHTML=k},p(t,o){t.post&&s!==(s=o.post.title)&&(document.title=s),t.post&&v!==(v=o.post.title+"")&&f(x,v),t.post&&k!==(k=o.post.html+"")&&(j.innerHTML=k)},i:d,o:d,d(t){t&&(c(o),c(m),c(g),c(j))}}}async function x({params:t,query:s}){const o=await this.fetch(`blog/${t.slug}.json`),a=await o.json();if(200===o.status)return{post:a};this.error(o.status,a.message)}function g(t,s,o){let{post:a}=s;return t.$set=t=>{"post"in t&&o("post",a=t.post)},{post:a}}export default class extends t{constructor(t){super(),s(this,t,g,m,o,["post"])}}export{x as preload};
