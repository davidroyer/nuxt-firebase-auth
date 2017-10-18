import Vuex from 'vuex'
import firebase, {auth, GoogleProvider} from '@/services/fireinit.js'

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
          // commit('SET_LOGGED_IN', true)
          // commit('SET_LOADING', false)
        } else {
          // commit('SET_LOADING', false)
        }
      },
      autoSignIn ({commit}, payload) {
        commit('setUser', payload)
      },

      signInWithGoogle ({commit}) {
        return new Promise((resolve, reject) => {
          auth.signInWithRedirect(GoogleProvider)
          resolve()
        })
      },

      signOut ({commit}) {
        auth.signOut().then(() => {
          commit('setUser', null)
        }).catch(err => console.log(error))
      }
    }
  })
}

export default createStore
