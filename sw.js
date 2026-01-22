self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

// Esto permite recibir eventos de fondo
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  event.waitUntil(
    self.registration.showNotification(data.title || "Nuevo Pedido", {
      body: data.body || "Tienes una nueva solicitud",
      icon: "https://cdn-icons-png.flaticon.com/512/290/290441.png",
      vibrate: [200, 100, 200]
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
