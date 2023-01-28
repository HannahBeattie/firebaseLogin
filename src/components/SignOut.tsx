import { getAppAuth } from '@/firebaseConfig'
import { Button, HStack, Link, Spacer, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function SignOut() {
	const router = useRouter()
	const auth = getAppAuth()
	const [user, loading, error] = useAuthState(auth)
	const name = user?.displayName
	const text = name ? `${name}` : 'sign in'

	return (
		<HStack flex={'1'} spacing={4}>
			<Link href={'/'}>
				<Text color={'red'} fontSize={'xl'}>
					{text}
				</Text>
			</Link>

			<Button
				colorScheme={'red'}
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
