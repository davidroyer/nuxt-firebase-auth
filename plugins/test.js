import firebase from '~/plugins/firebase-client-init.js'

export default (context) => {
  const {store} = context

  firebase.auth().onAuthStateChanged(function (user) {
    if (user && !store.getters.activeUser) {
      store.commit('setUser', user)
    }
  })
}
