const CACHE_NAME='padel-eight-v11-refactor';
const APP_SHELL=['./','./index.html','./manifest.json','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_SHELL)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(CACHE_NAME).then(x=>x.put('./index.html',c));return r}).catch(()=>caches.match('./index.html')));return}if(u.origin===self.location.origin){e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{const z=r.clone();caches.open(CACHE_NAME).then(x=>x.put(e.request,z));return r})))}});
