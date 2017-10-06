export default function ({app, store, redirect, isServer, route}) {
  if ((store.state.user != null) && (route.name == 'login')) {
    console.log('FROM ROUTER MIDDLEWARE');
    redirect('/admin')
  }



}
