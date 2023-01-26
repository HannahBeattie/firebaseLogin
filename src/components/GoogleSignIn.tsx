import { app, getAppAuth, uiConfig } from '@/firebaseConfig'
import { Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

export default function GoogleSignIn() {
	const auth = getAppAuth()
	const [user, loading, error] = useAuthState(auth)
	const router = useRouter()
	const name = user?.displayName
	const text = name ? `Hello ${name}` : 'sign in'

	if (loading) {
		return <Text>Please Wait</Text>
	}

	if (!user) {
		return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
	}

	return null
}
