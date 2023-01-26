import SignOut from '@/components/SignOut'
import { app, getAppAuth } from '@/firebaseConfig'
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
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
// import { Firestore, getFirestore } from 'firebase/firestore'
// import { collection, doc, setDoc } from 'firebase/firestore'
import { useDbValue } from '@/lib/fbDatabase'

function useRedirectIfNotLoggedIn() {
	const auth = getAppAuth()

	const [user, loading, error] = useAuthState(auth)
	const router = useRouter()
	if (!user && !loading) {
		router.replace('/')
	}
}
// const messageRef = collection('messages')

export default function SignedIn() {
	useRedirectIfNotLoggedIn()
	const { user } = useAuthContext()
	// const auth = getAppAuth()
	const { value: hulloVal, loading } = useDbValue('hullo')

	console.log('user is:', user?.displayName)
	const name = user?.displayName ?? ''
	const url = user?.photoURL ? user?.photoURL : ''
	return (
		<VStack flex={1} py={10} spacing={10} bg={'pink.100'} color={'red'}>
			<Heading>Hullo is: {loading ? 'loading' : hulloVal}</Heading>
			{!user && (
				<VStack flex={1} justifyContent={'center'}>
					<Spinner
						thickness='4px'
						speed='0.65s'
						emptyColor='gray.200'
						color='red.500'
						size='xl'
					/>
				</VStack>
			)}
			{user && (
				<VStack spacing={10}>
					{url && <Avatar size={'8xl'} src={url} />}
					<HStack>
						<Heading> Welcome {name}</Heading>
					</HStack>
				</VStack>
			)}
		</VStack>
	)
}
