// import Vue from 'vue'
// import Vue from 'vue'
import firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAzdoAjlM9YlQ-gl8VRayCxtJbnrl9qDsw",
  authDomain: "nuxt-firebase-auth.firebaseapp.com",
  databaseURL: "https://nuxt-firebase-auth.firebaseio.com",
  projectId: "nuxt-firebase-auth",
  storageBucket: "nuxt-firebase-auth.appspot.com",
  messagingSenderId: "316484287956"
};

const Fire = firebase.initializeApp(firebaseConfig);

// return new Promise((resolve, reject) => {
//   Fire.auth().onAuthStateChanged(user => {
//     if (user) {
//
//       resolve(store.dispatch('setActiveUser', user))
//       // app.router.push('/admin') // This works here
//     }
//     return resolve();
//   });
// })


export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const GithubProvider = new firebase.auth.GithubAuthProvider();
export const auth = Fire.auth();
export const DB = Fire.database();

export default (ctx) => {
  const {app, store, redirect} = ctx

  return new Promise((resolve, reject) => {
    Fire.auth().onAuthStateChanged(user => {
      if (user) {

        resolve(store.dispatch('setActiveUser', user))
        // app.router.push('/admin') // This works here
      }
      return resolve();
    });
  })
}




//
// export default (ctx) => {
//   const {app, store, redirect} = ctx
//
//   app.$firebase = Vue.prototype.$firebase
//   ctx.$firebase = Vue.prototype.$firebase
//   if (store) {
//
//     store.$firebase = Vue.prototype.$firebase
//
//     return new Promise((resolve, reject) => {
//       Firebase.auth().onAuthStateChanged(user => {
//         if (user) {
//           resolve(store.commit('setUser', user))
//           // app.router.push('/admin') // This works here
//         }
//         return resolve();
//       });
//     })
//   }
// }
