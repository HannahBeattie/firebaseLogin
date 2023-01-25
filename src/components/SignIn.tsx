import { getAppAuth, uiConfig } from '@/firebaseConfig'
import { Text } from '@chakra-ui/react'

import { useAuthState } from 'react-firebase-hooks/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

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
