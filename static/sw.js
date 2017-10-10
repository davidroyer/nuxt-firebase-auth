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
    "url": "/_nuxt/app.c4fc2f61e5b3987dbb4d.js",
    "revision": "289df6cccc4ef273e5646e0af1b02651"
  },
  {
    "url": "/_nuxt/common.09031073810b20b594f1.js",
    "revision": "71385e61f53a42434d2a0e1cc629d827"
  },
  {
    "url": "/_nuxt/common.9559f513fa5a85b0120ffc093da42e3e.css",
    "revision": "0b5b8180c7bc0de0798c1d5d4c3af028"
  },
  {
    "url": "/_nuxt/layouts/default.6cd4b3dafa49c3f22d8d.js",
    "revision": "797b345b3da2c75b13a7ccd53a1e61ab"
  },
  {
    "url": "/_nuxt/manifest.33f966b8d4e2b8a51f2c.js",
    "revision": "43d5dd7a23e4c28715daf85cce1f409f"
  },
  {
    "url": "/_nuxt/pages/about.5b3a48ec084b73a59574.js",
    "revision": "0f4c86c3fb7d1e5f134056657a7280c3"
  },
  {
    "url": "/_nuxt/pages/admin.d5b71fd91033dc8182a7.js",
    "revision": "ce208c215861b9e8a37483d9de6e2778"
  },
  {
    "url": "/_nuxt/pages/admin/index.7f077549508ecf8248d1.js",
    "revision": "225ff08bfbb08bfb6429f740fe9c6f1f"
  },
  {
    "url": "/_nuxt/pages/admin/items.bb4acba5d19cb67471c8.js",
    "revision": "18044da5bd07cb2888e18fb0953bd7d9"
  },
  {
    "url": "/_nuxt/pages/admin/settings.8292058a910171a622d0.js",
    "revision": "fe278f02477ae3462ef0371e0aa805e4"
  },
  {
    "url": "/_nuxt/pages/firestore.d3eb1d2e39fcc4eb523b.js",
    "revision": "7b193c4cd5f8d2bf3ff8a9149224242f"
  },
  {
    "url": "/_nuxt/pages/index.3578050fccf66bad8839.js",
    "revision": "794f130c02c344304d510da79288a4dc"
  },
  {
    "url": "/_nuxt/pages/login.4346c5694241099117d4.js",
    "revision": "5b220bc6bda5de991c8c6cd95820c659"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-firebase-auth_0.0.1",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
