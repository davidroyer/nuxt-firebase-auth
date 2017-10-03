import Vuex from 'vuex'
import firebase from 'firebase'
// const auth = firebase.auth()
const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null
    },
    mutations: {
      setUser (state, payload) {
        state.user = payload
      }
    },
    actions: {
      checkForActiveUser({commit}) {
        return new Promise((resolve, reject) => {
          firebase.auth().onAuthStateChanged((user) => {
            resolve(user)
            commit('setUser', user)
          }, (error) => {
            console.log(error)
          })
        })
      },
      async nuxtServerInit ({ state, commit, dispatch }, { req }) {
        return firebase.auth().onAuthStateChanged((user) => {
          console.log('nuxtServerInit', user);
          commit('setUser', user)
        })
      },

      autoSignIn ({commit}, payload) {
        commit('setUser', payload)
      },

      userSignUp ({commit}, payload) {
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(firebaseUser => {
          commit('setUser', firebaseUser)
          this.app.router.push('/admin')
        })
        .catch(error => {
          console.log(error.message);
        })
      },

      userSignIn ({commit}, payload) {
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(firebaseUser => {
          commit('setUser', firebaseUser)
          this.app.router.push('/admin')
        })
        .catch(error => {
          console.log(error.message);
        })
      },

      signInWithGoogle () {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithRedirect(provider).then((result) => {
          this.user = result.user
          this.app.router.push('/admin')
        }).catch(err => console.log(error))
      },

      userSignOut ({commit}) {
        firebase.auth().signOut().then(() => {
          commit('setUser', null)
          console.log('PUSH ROUTER TO HOME/ANOTHER PAGE');
        }).catch(err => console.log(error))
      }
    }
  })
}

export default createStore
