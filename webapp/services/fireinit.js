import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyA-CScnayKslMm2sS77XniXS5voX7rv5h8',
  authDomain: 'compassflyfishing.firebaseapp.com',
  databaseURL: 'https://compassflyfishing.firebaseio.com',
  projectId: 'compassflyfishing',
  storageBucket: 'compassflyfishing.appspot.com',
  messagingSenderId: '489718884254'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export default firebase
