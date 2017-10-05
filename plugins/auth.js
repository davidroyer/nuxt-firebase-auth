import firebase from '@/fire/firebase.js'

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
  // return new Promise((resolve, reject) => {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       return resolve(store.commit('setUser', user))
  //     }
  //     return resolve();
  //   });
  // })
}
