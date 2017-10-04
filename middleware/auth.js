export default function ({store, redirect, isServer}) {
  if (store.state.user == null) {
    return redirect('/login')
  }
}
