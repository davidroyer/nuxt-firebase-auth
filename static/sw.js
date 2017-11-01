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
    "url": "/_nuxt/app.3e9566adee20c0fc7202.js",
    "revision": "6b2224d6414f4adb7aeaab3f0dcd803b"
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
    "url": "/_nuxt/manifest.87a4146cd5b368552d62.js",
    "revision": "5161fd95dce79a8f9ae8342297e38059"
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
    "url": "/_nuxt/pages/index.aea0548410c626dd1529.js",
    "revision": "a7692d034144ee950172eadea659af0e"
  },
  {
    "url": "/_nuxt/pages/login.09cb4d5f945555ab4567.js",
    "revision": "d3e3bc097f3a476ab9176a9dabd56711"
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
