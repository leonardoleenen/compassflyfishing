import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'
import 'firebase/firestore'

// let firebaseApp = null

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

const db = firebase.firestore()
const storage = firebase.storage()

export { firebase, storage, db }
