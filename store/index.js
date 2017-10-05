import Vuex from 'vuex'
import firebase, { DB} from '@/fire/firebase.js';
import { firebaseMutations } from 'vuexfire'

const createStore = () => {
  return new Vuex.Store({
    state: {
      todos: [],
      user: null
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

      nuxtServerInit ({commit}) {
        // return new Promise((resolve, reject) => {
        //   firebase.auth().onAuthStateChanged((user) => {
        //
        //     // console.log('INIT: ', user);
        //     resolve(user)
        //     // console.log(user);
        //   }, (error) => {
        //     console.log(error)
        //   })
        // }).then(user => {
        //     console.log(firebase.auth().currentUser);
        //   console.log('then worked!', user);
        // })
      },

      checkForActiveUser ({commit}) {
        return new Promise((resolve, reject) => {
          firebase.auth().onAuthStateChanged((user) => {
            commit('setUser', user)
            resolve(user)
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
      },
      ...firebaseMutations
    }
  })
}

export default createStore
