export default function ({ app, route, store, redirect, error, isClient }) {
    console.log(store.state.user);
      if (store.state.user == null) {
        redirect('/')
      }
}
