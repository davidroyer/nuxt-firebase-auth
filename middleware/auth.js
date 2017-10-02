export default function ({ app, route, store, redirect, error, isClient }) {
  store.dispatch('checkForActiveUser').then(() => {
    console.log('firebase-auth: ', store.state.user);
    if (store.state.user == null) {
      return redirect('/')
    }
  })
    // console.log('Middleware: ', store.state.user);
    // if (isClient) {
    //   if (store.state.user == null) {
    //     return redirect('/')
    //   } else {
    //     return
    //   }
    // }

}
