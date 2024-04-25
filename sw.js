const CACHE_NAME = `temperature-converter-v1`;
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    cache.addAll([
      '/',
      '/converter.js',
      '/converter.css'
    ]);
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      ))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    const requestURL = new URL(event.request.url);

    if (requestURL.origin === location.origin && requestURL.pathname === '/') {
      return fetch(event.request);
    }

    const cache = await caches.open(CACHE_NAME);
    const cachedResponse = await cache.match(event.request);

    if (cachedResponse) {
      return cachedResponse;
    } else {
      try {
        const fetchResponse = await fetch(event.request);
        cache.put(event.request, fetchResponse.clone());
        return fetchResponse;
      } catch (e) {
        console.log(e.message);
      }
    }
  })());
});