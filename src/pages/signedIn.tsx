import SignOut from '@/components/SignOut'
import { getAppAuth } from '@/firebaseConfig'
import { useAuthContext } from '@/lib/AuthContext'
import {
	Avatar,
	Box,
	ButtonSpinner,
	Heading,
	HStack,
	Image,
	Spinner,
	Text,
	Toast,
	VStack,
} from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function SignedIn() {
	const { user } = useAuthContext()
	const auth = getAppAuth()
	const [loading, error] = useAuthState(auth)
	console.log('user is:', user?.displayName)
	const name = user?.displayName ?? ''
	const url = user?.photoURL ? user?.photoURL : ''
	return (
		<VStack flex={1} py={10} spacing={10}>
			{!user && (
				<VStack flex={1} justifyContent={'center'}>
					<Spinner
						thickness='4px'
						speed='0.65s'
						emptyColor='gray.200'
						color='blue.500'
						size='xl'
					/>
				</VStack>
			)}
			{user && (
				<VStack spacing={10}>
					{url && <Avatar size={'8xl'} src={url} />}
					<HStack>
						<Heading> Hello {name}</Heading>
					</HStack>
				</VStack>
			)}
		</VStack>
	)
}
