importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/app.9370c8eb2759a5f0f9d1.js",
    "revision": "98382d240945c40b278479e5287a4d15"
  },
  {
    "url": "/_nuxt/common.872e737efc4cc1dcbd846ecda25d89a6.css",
    "revision": "f20a4f78856a99613c9a0192c2724a71"
  },
  {
    "url": "/_nuxt/common.f3610e56422c9d29498a.js",
    "revision": "cfadd787a7f3d5154dab7a868b5bad7f"
  },
  {
    "url": "/_nuxt/layouts/default.9f9fbcee89ee4198774e.js",
    "revision": "789f1d5e8e2d7da3a8e5d1e354bc29cc"
  },
  {
    "url": "/_nuxt/manifest.c3590326bdd223335f69.js",
    "revision": "91d93c7016d44bd1001fefa4d80835c8"
  },
  {
    "url": "/_nuxt/pages/about.c16748884647a978066f.js",
    "revision": "b6fff259895706096699f5752e9cb4b2"
  },
  {
    "url": "/_nuxt/pages/admin.e62e9ebb6d52bf3af835.js",
    "revision": "534f1b56832a4d9df563118dbe2ecd1c"
  },
  {
    "url": "/_nuxt/pages/admin/index.9c8eab5690a16ea8fe59.js",
    "revision": "fb644a2377aed8dc58e03f5924f6ba75"
  },
  {
    "url": "/_nuxt/pages/admin/items.327fb9755d778f00b3c2.js",
    "revision": "02acd2efb464038c62d4c859e6598499"
  },
  {
    "url": "/_nuxt/pages/admin/settings.fa01f98bb974fc82f8af.js",
    "revision": "f78614263149857b6fd531010173d446"
  },
  {
    "url": "/_nuxt/pages/index.d6d5d99adb0c10ddedb3.js",
    "revision": "df066968dd7166b319e2eea1d26bee6c"
  },
  {
    "url": "/_nuxt/pages/login.439c1d7a7206d4a6ff1b.js",
    "revision": "d6e223f50c21ba919e9d7ecb38ec12b3"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-firebase-auth_0.0.2",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
