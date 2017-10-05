import firebase from '@/services/fireinit.js'

export default (context) => {
  const {app, store, redirect} = context

  app.router.beforeEach((to, from, next) => {
    console.log('each ran');
    next()
  })

  firebase.auth().onAuthStateChanged(user => {
    if (user != null) {
      store.commit('setUser', user)
    }
  });
}
