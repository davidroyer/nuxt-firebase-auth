importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.958c25d3c5b9d1c6c5b3.js",
    "revision": "302d83c62f7d75e4bcb82709755c822d"
  },
  {
    "url": "/_nuxt/app.befb363a830a9ba56dba600f655c15ce.css",
    "revision": "befb363a830a9ba56dba600f655c15ce"
  },
  {
    "url": "/_nuxt/layouts/default.ed07cbfe31cb8f640461.js",
    "revision": "ce92ce6d82832bce379ad0ccdd726dd8"
  },
  {
    "url": "/_nuxt/manifest.2b145708a9fe977a75c5.js",
    "revision": "f161713ab57f518fe7837bd7a4e28195"
  },
  {
    "url": "/_nuxt/pages/about.e33c85093c4da475f5c4.js",
    "revision": "a414c5817b26c16c09689c8e28ae8bbc"
  },
  {
    "url": "/_nuxt/pages/admin.c06203c44bed1fa6fe77.js",
    "revision": "e98b6aff55e932c1f9c6cf5773c9e873"
  },
  {
    "url": "/_nuxt/pages/admin/index.3965fdba414ff4534985.js",
    "revision": "28a83d31f63069ffe8e91c97724fa02b"
  },
  {
    "url": "/_nuxt/pages/admin/items.57cc33524c0ca3a4bac9.js",
    "revision": "8b1cce81c568d5c6ab13e48de171d3c1"
  },
  {
    "url": "/_nuxt/pages/admin/settings.fc19131d4f8a344d7767.js",
    "revision": "bc780db7be66559e5e758e7806bd8278"
  },
  {
    "url": "/_nuxt/pages/index.e908b3ee4e435207ee9e.js",
    "revision": "7a6fdd187f18f9061ddf2078fd1a23d4"
  },
  {
    "url": "/_nuxt/pages/login.ff9d66083f90ac7a5ea5.js",
    "revision": "1415dc0d7cd8198304b16dbe3b84a29e"
  },
  {
    "url": "/_nuxt/vendor.5282f7ed0b9c3cedac78.js",
    "revision": "3b01f2de20732d71a93b5dbd77e3e933"
  }
], {
  "cacheId": "nuxt-firebase-auth",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





