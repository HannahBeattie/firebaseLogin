import { getAppAuth, uiConfig } from '@/firebaseConfig'
import { Link, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

export default function SignIn() {
	const auth = getAppAuth()
	const [user, loading, error] = useAuthState(auth)
	const router = useRouter()
	const name = user?.displayName
	const text = name ? `Hello ${name}` : 'sign in'

	if (loading) {
		return <Text fontSize={'8xl'}>...</Text>
	}

	if (!user) {
		return (
			<VStack spacing={0}>
				<Text>Please log in to continue</Text>
				<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
			</VStack>
		)
	}

	return (
		<Link href={'/signedIn'}>
			<Text fontSize={'xl'}>Signed in as: {text}</Text>
		</Link>
	)
}
