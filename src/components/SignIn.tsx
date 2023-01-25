import { getAuth, signInWithPopup, GoogleAuthProvider, ProviderId } from 'firebase/auth'
import { Button, Text } from '@chakra-ui/react'
import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { app, getAppAuth } from '@/firebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth'

const uiConfig = {
	// Popup signin flow rather than redirect flow.
	signInFlow: 'popup',
	// Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
	signInSuccessUrl: '/signedIn',
	signInOptions: [GoogleAuthProvider.PROVIDER_ID],
}

export default function SignIn() {
	const auth = getAppAuth()
	const [user, loading, error] = useAuthState(auth)
	const name = user?.displayName
	const text = name ? `Hello ${name}` : 'Sign in!'

	return (
		<>
			<Text color={'red'} fontSize={'100'}>
				{text}
			</Text>
			<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
		</>
	)
}
