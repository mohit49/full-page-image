// Service Worker implementation

self.addEventListener('install', function(event) {
    
    event.waitUntil(
        caches.open('simple-pwa-cache').then(function(cache) {
            return cache.addAll([
                './',
                './index.html',
                './ico.png', // Update with your icon file
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});