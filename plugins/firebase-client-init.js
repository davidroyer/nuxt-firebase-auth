import * as firebase from 'firebase/app'
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyAzdoAjlM9YlQ-gl8VRayCxtJbnrl9qDsw",
  authDomain: "nuxt-firebase-auth.firebaseapp.com",
  databaseURL: "https://nuxt-firebase-auth.firebaseio.com",
  projectId: "nuxt-firebase-auth",
  storageBucket: "nuxt-firebase-auth.appspot.com",
  messagingSenderId: "316484287956"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()
export const Auth = firebase.auth()
export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()
