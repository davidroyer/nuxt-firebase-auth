import Vuex from 'vuex'
import firebase from 'firebase'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null
      // loggedIn: false
    },
    getters: {
      activeUser: (state, getters) => {
        return state.user
      }
    },
    mutations: {
      setUser (state, payload) {
        state.user = payload
      }
    },
    actions: {
      nuxtServerInit ({ commit }, { req }) {
        if (req.user) {
          console.log('RAN NUXT-SERVER-INIT');
          commit('setUser', req.user)
        }
      },
      autoSignIn ({commit}, payload) {
        commit('setUser', payload)
      },

      signInWithGoogle ({commit}) {
        // var provider = new firebase.auth.GithubAuthProvider();
        // firebase.auth().signInWithRedirect(provider);

        // firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
        return new Promise((resolve, reject) => {
          firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          resolve()
        })
      },

      signOut ({commit}) {
        firebase.auth().signOut().then(() => {
          commit('setUser', null)
        }).catch(err => console.log(error))
      }
    }
  })
}

export default createStore
