import Vue from 'vue'
import Firebase from 'firebase'

const firebasePlugin = {
  install() {
    if (Vue.__nuxt_firebase_installed__) {
      return
    }
    Vue.__nuxt_firebase_installed__ = true

    if (!Vue.prototype.$firebase) {
      Vue.prototype.$firebase = Firebase.initializeApp({
        apiKey: "AIzaSyAzdoAjlM9YlQ-gl8VRayCxtJbnrl9qDsw",
        authDomain: "nuxt-firebase-auth.firebaseapp.com",
        databaseURL: "https://nuxt-firebase-auth.firebaseio.com",
        projectId: "nuxt-firebase-auth",
        storageBucket: "nuxt-firebase-auth.appspot.com",
        messagingSenderId: "316484287956"
      })
    }
  }
}

Vue.use(firebasePlugin)

export default (ctx) => {
  const {app, store, redirect} = ctx

  app.$firebase = Vue.prototype.$firebase
  ctx.$firebase = Vue.prototype.$firebase
  if (store) {

    store.$firebase = Vue.prototype.$firebase

    return new Promise((resolve, reject) => {
      Firebase.auth().onAuthStateChanged(user => {
        if (user) {
          resolve(store.commit('setUser', user))
          // app.router.push('/admin') // This works here
        }
        return resolve();
      });
    })
  }
}
