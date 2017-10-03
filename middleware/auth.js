export default function ({store, redirect}) {
  if (store.state.user == null) {
    return redirect('/login')
  }
}
