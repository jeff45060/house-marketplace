import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDFzfbi33YcPppsUp4OCZTvWauTeepeynY',
  authDomain: 'house-marketplace-app-db6d8.firebaseapp.com',
  projectId: 'house-marketplace-app-db6d8',
  storageBucket: 'house-marketplace-app-db6d8.appspot.com',
  messagingSenderId: '1056295152226',
  appId: '1:1056295152226:web:cc370dc28a65917861ff3b',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
