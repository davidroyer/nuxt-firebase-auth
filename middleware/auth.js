// **Currently not using this file. Testing using router-auth only
export default function ({store, redirect, isServer}) {
  if (store.state.user == null) {
    return redirect('/login')
  }
}
