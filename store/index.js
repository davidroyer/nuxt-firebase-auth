import Vuex from 'vuex'
import firebase from 'firebase'

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
      nuxtServerInit ({ state, commit }, { req }) {
        return new Promise((resolve, reject) => {
          firebase.auth().onAuthStateChanged(user => {
              if (user) {
                return resolve(commit('setUser', user))
                console.log('Fired from Plugin');
              }
              return resolve();
          });
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
