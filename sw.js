self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // Básico: solo responde a las peticiones de red
  e.respondWith(fetch(e.request));
});
