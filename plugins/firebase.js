// import * as firebase from 'firebase';
//
// const firebaseConfig = {
//   apiKey: "AIzaSyAzdoAjlM9YlQ-gl8VRayCxtJbnrl9qDsw",
//   authDomain: "nuxt-firebase-auth.firebaseapp.com",
//   databaseURL: "https://nuxt-firebase-auth.firebaseio.com",
//   projectId: "nuxt-firebase-auth",
//   storageBucket: "nuxt-firebase-auth.appspot.com",
//   messagingSenderId: "316484287956"
// };
//
// export default (context) => {
//   const {app, store, redirect} = context
//
//   // This is shortened version of normal if else statement (normal version is commented out below)
//   !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
//
//   // if (!firebase.apps.length) {
//   //   firebase.initializeApp(firebaseConfig)
//   // } else {
//   //   firebase.app();
//   // }
//
//   return new Promise((resolve, reject) => {
//     firebase.auth().onAuthStateChanged(user => {
//       if (user) {
//         store.dispatch('setActiveUser', user)
//         resolve(user)
//       }
//       return resolve();
//     });
//   })
// }
