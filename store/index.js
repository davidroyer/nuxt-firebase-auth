import Vuex from 'vuex'
import {Auth, GoogleAuthProvider} from '~/plugins/firebase-client-init.js'

function buildUserObject (authData) {
  let { email, displayName, uid, photoURL } = authData.user
  let user = {}
  user['email'] = email
  user['name'] = displayName
  user['uid'] = uid
  user['picture'] = photoURL
  return user
}

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
      loading: false
    },

    getters: {
      activeUser: (state, getters) => {
        return state.user
      },
      isLoading: (state, getters) => {
        return state.loading
      }
    },

    mutations: {
      setUser (state, payload) {
        state.user = payload
      },
      setLoading (state, payload) {
        state.loading = payload
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
      // Redirect doesn't work so well yet
      async signInWithGoogleRedirect ({commit}) {
        console.log('From signInWithGoogleRedirect:  ');
        commit('setLoading', true)
        Auth.signInWithRedirect(GoogleAuthProvider)

        let authData = await Auth.getRedirectResult()
        commit('setUser', buildUserObject(authData))
        commit('setLoading', false)
      },

      async signInWithGooglePopup ({commit}) {
        commit('setLoading', true)
        let authData = await Auth.signInWithPopup(GoogleAuthProvider)
        commit('setUser', buildUserObject(authData))
        commit('setLoading', false)
      },

      signOut ({commit}) {
        Auth.signOut().then(() => {
          commit('setUser', null)
        }).catch(err => console.log(error))
      }
    }
  })
}

export default createStore
