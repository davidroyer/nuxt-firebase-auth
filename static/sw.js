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
    "url": "/_nuxt/app.bf1d15fce2b0eee9b8c2.js",
    "revision": "f07b72561c63f6c983a15b7e2365973b"
  },
  {
    "url": "/_nuxt/common.290d9a515277eef9a7ee.js",
    "revision": "43f478b236cdcdd60832f9f673d17e3d"
  },
  {
    "url": "/_nuxt/common.872e737efc4cc1dcbd846ecda25d89a6.css",
    "revision": "f20a4f78856a99613c9a0192c2724a71"
  },
  {
    "url": "/_nuxt/layouts/default.3861c047f60e19d8c482.js",
    "revision": "6bfe77792a9c6a7670ba144b1a46dd8f"
  },
  {
    "url": "/_nuxt/manifest.04362aa77c7bb2f54791.js",
    "revision": "9a71b4decde5e6096eb6460adba4da54"
  },
  {
    "url": "/_nuxt/pages/about.9e3bd611e19ed7c59f10.js",
    "revision": "0c97495b3629a5164b7b19570d05b200"
  },
  {
    "url": "/_nuxt/pages/admin.9daa5064a13fbe7b19f4.js",
    "revision": "5495c0e97390235ba751fc5894d1eb6c"
  },
  {
    "url": "/_nuxt/pages/admin/index.005c8a263373928c5f48.js",
    "revision": "075a202b3bbf780d0c63533e367c93cf"
  },
  {
    "url": "/_nuxt/pages/admin/settings.9383526583eb30493727.js",
    "revision": "cffa9fe194d9ae4961b6d2349435abd2"
  },
  {
    "url": "/_nuxt/pages/index.1857b483b6d912b11a34.js",
    "revision": "3759853730b0a5b29d0b917429e4d943"
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
