import Vuex from 'vuex'
import firebase, {auth, GoogleProvider} from '@/services/fireinit.js'

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
      }
    },
    actions: {
      // autoSignIn ({commit}, payload) {
      //   commit('setUser', payload)
      // },

      userSignUp ({commit}, payload) {
        auth.createUserWithEmailAndPassword(payload.email, payload.password)
        .then(firebaseUser => {
          commit('setUser', firebaseUser)
        })
        .catch(error => {
          console.log(error.message);
        })
      },

      signInWithEmail ({commit}, payload) {
        auth.signInWithEmailAndPassword(payload.email, payload.password)
        .then(firebaseUser => {
          commit('setUser', firebaseUser)
          this.app.router.push('/admin')
        })
        .catch(error => {
          console.log(error.message);
        })
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
