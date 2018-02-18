importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-firebase-auth",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.c6633c28a44a3c87cb5583240f546dec.css",
    "revision": "c6633c28a44a3c87cb5583240f546dec"
  },
  {
    "url": "/_nuxt/app.f2d08e5aa55180199f35.js",
    "revision": "650a2b21a948b70a73e8c20a386b05e0"
  },
  {
    "url": "/_nuxt/layouts/default.7aaeee9d41fb311d763c.js",
    "revision": "34c184ebf76297a9e323a1813698f807"
  },
  {
    "url": "/_nuxt/manifest.77406ca4d6b2c1d8cf04.js",
    "revision": "f0c91ff4a59d493f6b5a073725f0222c"
  },
  {
    "url": "/_nuxt/pages/about.02a553ca53bb7bd48979.js",
    "revision": "f4b1c004de477e2fe5fce04763e50699"
  },
  {
    "url": "/_nuxt/pages/admin.a56af347eeae272db047.js",
    "revision": "dfaebcc39b857a6cd823cc50e73b0670"
  },
  {
    "url": "/_nuxt/pages/admin/index.c5b3a4fae681a1973ded.js",
    "revision": "61e2e94d850f8620ee63d68d5c810778"
  },
  {
    "url": "/_nuxt/pages/admin/items.f8a0e89e2862afd811cf.js",
    "revision": "e223a40376b22bbaee5771a864453114"
  },
  {
    "url": "/_nuxt/pages/admin/settings.fc19131d4f8a344d7767.js",
    "revision": "bc780db7be66559e5e758e7806bd8278"
  },
  {
    "url": "/_nuxt/pages/index.84f949f16af3743ef543.js",
    "revision": "e4fd760ea9e9412a27c4c08e35813922"
  },
  {
    "url": "/_nuxt/pages/login.ad18eeac39f38d4f4b7f.js",
    "revision": "d0592c9b89fb30c73464a5dd7da140ab"
  },
  {
    "url": "/_nuxt/vendor.120fbac831a9cfb8eea1.js",
    "revision": "53242636d08ed243c78c0510aa5dc146"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

