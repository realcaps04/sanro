/* SANRO image cache — stores original files only (no re-encoding / quality loss). */
const CACHE = 'sanro-images-v1'
const IMAGE_PATHS = ['/images/', '/madebysanro/', '/favicon.png']

function isImageRequest(url) {
  if (url.origin !== self.location.origin) return false
  return IMAGE_PATHS.some((prefix) => url.pathname === prefix || url.pathname.startsWith(prefix))
}

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting())
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.filter((key) => key.startsWith('sanro-') && key !== CACHE).map((key) => caches.delete(key)))
      await self.clients.claim()
    })(),
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET') return

  let url
  try {
    url = new URL(request.url)
  } catch {
    return
  }

  if (!isImageRequest(url)) return

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE)
      const cached = await cache.match(request)
      if (cached) return cached

      try {
        const response = await fetch(request)
        if (response.ok) {
          cache.put(request, response.clone())
        }
        return response
      } catch (error) {
        if (cached) return cached
        throw error
      }
    })(),
  )
})
