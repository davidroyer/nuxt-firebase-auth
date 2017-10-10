export default function ({ store, redirect, route }) {
  store.state.user != null && route.name == 'login' ? redirect('/admin') : ''
  store.state.user == null && isAdminRoute(route) ? redirect('/login') : ''
}

function isAdminRoute(route) {
  if (route.matched.some(record => record.path == '/admin')) {
    return true
  }
}
