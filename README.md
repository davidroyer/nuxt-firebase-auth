# Nuxt.js Firebase Auth

**Demo**

[https://nuxt-firebase-auth.firebaseapp.com](https://nuxt-firebase-auth.firebaseapp.com)
> Nuxt.js project

Nuxt.js in SPA mode using Firebase Authentication

The Admin page and any of its children (subroutes) are protected by the authentication.

There are 4 files that are doing most of the heavy lifting for this to work.
1. `middleware/auth.js` - Middleware

2. `middleware/router-auth.js` : Middleware

3. `services/fireinit.js` : Creates Firebase Instance
4. `plugins/fireauth.js` : Initializes firebase auth listener

If you have worked with Firebase Authentication with Vue.js, you might have encountered a few common scenarios:

1. You get a message about an app instance already existing
2. Firebase's recommended strategy for listening for auth changes is by using `firebase.auth().onAuthStateChanged`. but it causes routes to attempt to enter before firebase's listener was finished which led to the scenario that a user is already logged in on page load but is redirected as if he/she isn't.

After a lot of trial and error, I found what seems to be a working solution.


## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
