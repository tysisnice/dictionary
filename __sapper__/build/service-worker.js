!function(){"use strict";const e=["client/index.c8b12fdd.js","client/[slug].2db51f9c.js","client/index.859b4aac.js","client/index.cb5576b1.js","client/index.1eeb3ce5.js","client/index.2b791d3d.js","client/WordCard.a1abf7fb.js","client/index.67be9f06.js","client/index.0914f1d2.js","client/index.42551f14.js","client/client.93ef2dcf.js"].concat(["service-worker-index.html","assets/dictionary-data/dictionary.json","assets/dictionary-data/primary.txt","assets/dictionary-data/secondary.txt","favicon.png","global.css","great-success.png","logo-192.png","logo-512.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1594086301731").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1594086301731"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1594086301731").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();