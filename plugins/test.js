import firebase from '~/plugins/firebase-client-init.js'

export default (context) => {
  const {store, app, redirect} = context
  console.log('FROM TEST: RUNNING');

  firebase.auth().onAuthStateChanged(function (user) {
    console.log('FROM TEST: ', user);
    store.commit('setUser', user)
    // resolve(user)
  })
  // return new Promise(function (resolve, reject) {
  //   firebase.auth().onAuthStateChanged(function (user) {
  //     console.log('FROM TEST: ', user);
  //     store.commit('setUser', user)
  //     resolve(user)
  //   })
  // })

}



  // const getUserStatus = function (store) {
  //   // store.dispatch('CHECK_USER_STATUS');
  //
  //   return new Promise(function (resolve, reject) {
  //     firebaseApp.auth().onAuthStateChanged(function (user) {
  //       if (user) {
  //         store.dispatch('LOGIN_SUCCESS', user.uid);
  //         resolve(user);
  //       } else {
  //         store.dispatch('LOGIN_FAIL');
  //         reject(Error('It broke'));
  //       }
  //     });
  //   });
  // };
