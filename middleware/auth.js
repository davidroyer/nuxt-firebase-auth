export default function ({store, redirect, isServer}) {
  console.log('FROM MIDDLEWARE');
  if (store.state.user == null) {
    return redirect('/login')
  }
}
