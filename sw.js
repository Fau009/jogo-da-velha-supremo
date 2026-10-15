/* Deixa o site instalável e dá sobrevida offline. Rede primeiro; revalida arquivos
   para nunca misturar versão nova com antiga. Cache próprio desta pasta. */
const PREFIXO = 'fs-jogo-da-velha-supremo-';
const CACHE = PREFIXO + 'v1';
const PASTA = new URL(self.registration.scope).pathname;
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./'])).catch(() => {})); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith(PREFIXO) && k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin || !url.pathname.startsWith(PASTA)) return;
  const estatico = req.mode === 'navigate' || ['document','style','script','image','font','manifest'].includes(req.destination);
  if (!estatico) return;
  e.respondWith(
    fetch(req, req.mode === 'navigate' ? undefined : { cache: 'no-cache' }).then(resp => {
      if (resp.ok) { const copia = resp.clone(); caches.open(CACHE).then(c => c.put(req, copia)).catch(() => {}); }
      return resp;
    }).catch(() => caches.open(CACHE).then(c => c.match(req).then(r => r || (req.mode === 'navigate' ? c.match('./') : undefined))))
  );
});
