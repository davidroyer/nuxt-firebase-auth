import firebase from '~/plugins/firebase-client-init.js'

export default (context) => {
  const {store, app, redirect} = context

  firebase.auth().addAuthTokenListener(function (idToken) {

    var hadSessionCookie = document.cookie.indexOf('__session=') !== -1;
    document.cookie = '__session=' + idToken + ';max-age=' + (idToken ? 3600 : 0);

    // Not 100% Working yet
    // if (!hadSessionCookie && idToken) {
    //   let user = firebase.auth().currentUser
    //   console.log('COMMITING FROM AUTH-COOKIE PLUGIN', user);
    //   store.commit('SET_USER', user)
    //   store.commit('SET_LOGGED_IN', true)
    //   store.commit('SET_LOADING', false)
    // }

    if ((!hadSessionCookie && idToken) || (hadSessionCookie && !idToken)) {
      // NOTE: I think this is where I need to get cookie and set store
      // console.log('WINDOW RELOAD ABOUT TO HAPPEN');
      // store.commit('setTestUser', )
      window.location.reload(true);
    }
  });
}
