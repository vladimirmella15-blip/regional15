const CACHE = 'regional15-v2'
const STATIC_CACHE = 'regional15-static-v2'
const STATIC_URLS = [
  '/',
  '/offline',
  '/manifest.json',
  '/assets/img/Regional155.jpg',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE).then((cache) => cache.addAll(STATIC_URLS)),
      caches.open(STATIC_CACHE),
    ]).then(() => self.skipWaiting())
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== CACHE && k !== STATIC_CACHE)
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET and external requests
  if (request.method !== 'GET') return
  if (url.origin !== self.location.origin && !url.hostname.endsWith('.regional15.edu.do')) return

  // Navigation requests: network-first, fallback to offline page
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone()
          caches.open(CACHE).then((cache) => cache.put(request, clone))
          return response
        })
        .catch(() =>
          caches.match('/offline').then((offline) => offline || caches.match('/'))
        )
    )
    return
  }

  // API requests: network-only (no caching)
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request).catch(() => new Response(JSON.stringify({ error: 'offline' }), {
        status: 503,
        headers: { 'Content-Type': 'application/json' },
      }))
    )
    return
  }

  // Static assets: cache-first
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached
      return fetch(request).then((response) => {
        if (response.ok) {
          const clone = response.clone()
          caches.open(STATIC_CACHE).then((cache) => cache.put(request, clone))
        }
        return response
      }).catch(() => caches.match('/offline'))
    })
  )
})
