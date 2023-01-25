import { getAppAuth, uiConfig } from '@/firebaseConfig'
import { Button, Text } from '@chakra-ui/react'

import { useAuthState } from 'react-firebase-hooks/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

export default function InOut() {
	const auth = getAppAuth()
	const [user, loading, error] = useAuthState(auth)
	const name = user?.displayName
	const text = name ? `Hello ${name}` : 'Sign in!'

	if (!user && !loading) {
		return (
			<div>
				<Text color={'red'} fontSize={'100'}>
					{text}
				</Text>
				<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
			</div>
		)
	}

	if (loading) {
		return (
			<div>
				<Text color={'red'} fontSize={'100'}>
					Loading!
				</Text>
			</div>
		)
	}
	return (
		<div>
			<Text>{text}, You are now signed-in!</Text>
			<Button onClick={() => auth.signOut()}>Sign-out</Button>
		</div>
	)
}
