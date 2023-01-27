import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

import { GoogleAuthProvider } from 'firebase/auth'

export const firebaseConfig = {
	apiKey: 'AIzaSyBLB4w0g4MDpez9Cficpm7RU1BEi_YWyS4',
	authDomain: 'typeme-d7a01.firebaseapp.com',
	databaseURL: 'https://typeme-d7a01-default-rtdb.asia-southeast1.firebasedatabase.app',
	projectId: 'typeme-d7a01',
	storageBucket: 'typeme-d7a01.appspot.com',
	messagingSenderId: '628433315898',
	appId: '1:628433315898:web:776dfa684ab3249aad2d03',
	measurementId: 'G-ZZ66KGMSHD',
}
export const app = initializeApp(firebaseConfig)
export const getAppAuth = () => getAuth(app)

export const uiConfig = {
	// Popup signin flow rather than redirect flow.
	signInFlow: 'popup',
	// Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
	signInSuccessUrl: '/signedIn',
	signInOptions: [GoogleAuthProvider.PROVIDER_ID],
	// callbacks: {
	// 	signInSuccessWithAuthResult: () => false,
	// },
}
