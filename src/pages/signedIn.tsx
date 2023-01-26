import GreetUser from '@/components/GreetUser'
import { useRedirectIfNotLoggedIn } from '@/components/hooks/UseRedirect'
import Mood from '@/components/Mood'
import { useAuthContext } from '@/lib/AuthContext'
import { getUid } from '@/lib/userData'
import { Avatar, Heading, HStack, Spinner, VStack } from '@chakra-ui/react'

export default function SignedIn() {
	useRedirectIfNotLoggedIn()
	const { user } = useAuthContext()
	const uid = getUid(user)
	const name = user?.displayName ?? ''
	const url = user?.photoURL ? user?.photoURL : ''
	// // console.log('user is:', user?.displayName, `(uid=${uid})`)

	return (
		<VStack flex={1} py={10} spacing={10} bg={'pink.100'} color={'red'}>
			<GreetUser url={url} name={name} user={user} />
		</VStack>
	)
}
