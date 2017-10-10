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
    "url": "/_nuxt/app.ec4cbab2e56093d15aff.js",
    "revision": "3e104f3c18be3b986f236a64e2b098f8"
  },
  {
    "url": "/_nuxt/common.9559f513fa5a85b0120ffc093da42e3e.css",
    "revision": "0b5b8180c7bc0de0798c1d5d4c3af028"
  },
  {
    "url": "/_nuxt/common.f3610e56422c9d29498a.js",
    "revision": "cfadd787a7f3d5154dab7a868b5bad7f"
  },
  {
    "url": "/_nuxt/layouts/default.49aee9ecb18d5361adf0.js",
    "revision": "51579c6421a910100aa1b07b78c892e5"
  },
  {
    "url": "/_nuxt/manifest.6bb10542018838026c34.js",
    "revision": "14d49b558d1bc2c2f9d2b6f704da5cc4"
  },
  {
    "url": "/_nuxt/pages/about.c16748884647a978066f.js",
    "revision": "b6fff259895706096699f5752e9cb4b2"
  },
  {
    "url": "/_nuxt/pages/admin.584928ffa550dd823a22.js",
    "revision": "1722ec6540cb0aa4920b322db9deb9bd"
  },
  {
    "url": "/_nuxt/pages/admin/index.f81382ba59d29b72db39.js",
    "revision": "5bb5bce20ebc2e82711619f8890e5607"
  },
  {
    "url": "/_nuxt/pages/admin/settings.fa01f98bb974fc82f8af.js",
    "revision": "f78614263149857b6fd531010173d446"
  },
  {
    "url": "/_nuxt/pages/firestore.9e0b0695731b9ec5c5c6.js",
    "revision": "a0cf5d87dfe5b3af7560fb3faf62a4cf"
  },
  {
    "url": "/_nuxt/pages/index.7ef89f50feac81a6a5d8.js",
    "revision": "8f71fc3a59c2cb18ff739b6cc303fa29"
  },
  {
    "url": "/_nuxt/pages/login.6354e6f361c24c6f5839.js",
    "revision": "51d239a1f91167f591abed87fce62951"
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
