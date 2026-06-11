const CACHE_NAME = 'sentry-cache-v1';
const ASSETS = [
  './index.html',
  './verify.html',
  './manifest.json',
  'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4',
  'https://unpkg.com/html5-qrcode'
];

// Initialize and install system assets locally onto device storage
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

// Network Interception Pipeline
self.addEventListener('fetch', event => {
  // SECURITY BYPASS GUARD: Allow database API scripts to bypass the PWA cache entirely
  if (event.request.url.includes('script.google.com') || event.request.url.includes('script.googleusercontent.com')) {
    return; // Detach service worker tracking and force direct network passthrough
  }

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});const CACHE_NAME = 'sentry-cache-v1';
const ASSETS = [
  './verify.html',
  './manifest.json',
  'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4',
  'https://unpkg.com/html5-qrcode'
];

// Initialize and install system assets locally onto phone device storage
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
