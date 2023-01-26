import { getAppAuth } from '@/firebaseConfig'
import { Button, HStack, Spacer, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function SignOut() {
	const router = useRouter()
	const auth = getAppAuth()
	const [user, loading, error] = useAuthState(auth)
	const name = user?.displayName
	const text = name ? `${name}` : 'sign in'

	return (
		<HStack flex={'1'} px={4}>
			<Text color={'red'} fontSize={'xl'}>
				{text}
			</Text>
			<Spacer />
			<Button
				colorScheme={'white'}
				onClick={() => {
					router.push('/')
					auth.signOut()
				}}
			>
				Sign-out
			</Button>
		</HStack>
	)
}
