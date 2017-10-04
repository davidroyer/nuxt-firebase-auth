import firebase from '@/fire/firebase.js'

export default (context) => {
  const {app, store, redirect} = context

  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        return resolve(store.dispatch('setActiveUser', user))
      }
      return resolve();
    });
  })

  // firebase.auth().onAuthStateChanged(user => {
  //   if (user != null) {
  //     store.dispatch('setActiveUser', user)
  //     // resolve(user)
  //   }
  //   // return resolve();
  // });
}
