import {auth} from '@/services/fireinit.js'

export default (context) => {
  const {app, store, redirect} = context

  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {
      if (user) {
        return resolve(store.commit('setUser', user))
      }
      return resolve();
    });
  })

}
