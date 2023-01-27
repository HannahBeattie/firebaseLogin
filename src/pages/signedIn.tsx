import GreetUser from '@/components/GreetUser'
import { useRedirectIfNotLoggedIn } from '@/components/hooks/UseRedirect'
import Mood from '@/components/Mood'
import { useAuthContext } from '@/lib/AuthContext'
import { VStack } from '@chakra-ui/react'

export default function SignedIn() {
	useRedirectIfNotLoggedIn()
	const { user } = useAuthContext()
	const name = user?.displayName ?? ''
	const url = user?.photoURL ? user?.photoURL : ''
	// // console.log('user is:', user?.displayName)

	return (
		<VStack flex={1} py={10} spacing={10} bg={'pink.100'} color={'red'}>
			<GreetUser url={url} name={name} user={user} />
			<Mood />
		</VStack>
	)
}
