export default function ({ store, redirect, error }) {
  if (!store.state.loggedIn) {
    redirect('/login')
  }
}
