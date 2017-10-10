// **Currently not using this file. Testing using router-auth only
// export default function ({store, redirect, isServer}) {
//   if (store.state.user == null) {
//     return redirect('/login')
//   }
// }
export default function ({ store, redirect, route, app}) {
  store.state.user != null && route.name == 'login' ? redirect('/admin') : ''
  store.state.user == null && isAdminRoute(route) ? redirect('/login') : ''
}

function isAdminRoute(route) {
  if (route.matched.some(record => record.path == '/admin')) {
    return true
  }
}
