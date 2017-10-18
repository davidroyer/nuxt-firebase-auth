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
          commit('setUser', req.user)
        }
      },
      autoSignIn ({commit}, payload) {
        commit('setUser', payload)
      },

      signInWithGoogle ({commit}) {
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
