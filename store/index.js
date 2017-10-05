import Vuex from 'vuex'
import firebase from 'firebase'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null
    },
    getters: {
      activeUser: (state, getters) => {
        return state.user
      }
    },
    mutations: {
      setUser (state, payload) {
        state.user = payload
      },
      setLoggedInUser (state, payload) {
        state.user = payload
        this.app.router.push('/admin')
      }
    },
    actions: {
      setActiveUser ({commit}, firebaseUser) {
        commit('setUser', firebaseUser)
      },

      async nuxtServerInit ({commit}) {
        console.log('from nuxtServerInit: ', firebase.auth().currentUser);
        let user = firebase.auth().currentUser
        console.log(user);
        commit('setUser', user)
      },

      checkForActiveUser ({commit}) {
        return new Promise((resolve, reject) => {
          firebase.auth().onAuthStateChanged((user) => {
            resolve(user)
            commit('setUser', user)
          }, (error) => {
            console.log(error)
          })
        })
      },

      autoSignIn ({commit}, payload) {
        commit('setUser', payload)
      },

      userSignUp ({commit}, payload) {
        firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(firebaseUser => {
          commit('setUser', firebaseUser)
        })
        .catch(error => {
          console.log(error.message);
        })
      },

      signInWithEmail ({commit}, payload) {
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(firebaseUser => {
          commit('setUser', firebaseUser)
          this.app.router.push('/admin')
        })
        .catch(error => {
          console.log(error.message);
        })
      },

      signInWithGoogle ({commit}) {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithRedirect(provider)
      },

      userSignOut ({commit}) {
        firebase.auth().signOut()
        .then(() => {
          commit('setUser', null)
          console.log('PUSH ROUTER TO HOME/ANOTHER PAGE');
        }).catch(err => console.log(error))
      }
    }
  })
}

export default createStore
