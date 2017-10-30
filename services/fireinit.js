import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

var config = {
  apiKey: "AIzaSyAzdoAjlM9YlQ-gl8VRayCxtJbnrl9qDsw",
  authDomain: "nuxt-firebase-auth.firebaseapp.com",
  databaseURL: "https://nuxt-firebase-auth.firebaseio.com",
  projectId: "nuxt-firebase-auth",
  storageBucket: "nuxt-firebase-auth.appspot.com",
  messagingSenderId: "316484287956"
};

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const DB = firebase.database();
export default firebase
