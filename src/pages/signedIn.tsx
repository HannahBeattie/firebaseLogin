import GreetUser from '@/components/GreetUser'
import { useRedirectIfNotLoggedIn } from '@/components/hooks/UseRedirect'
import MoodTabs from '@/components/moods/MoodTabs'
import OfNote from '@/components/OfNote'
import { useAuthContext } from '@/lib/AuthContext'
import { VStack } from '@chakra-ui/react'

export default function SignedIn() {
	useRedirectIfNotLoggedIn()
	const { user } = useAuthContext()
	const name = user?.displayName ?? ''
	const url = user?.photoURL ? user?.photoURL : ''
	// // console.log('user is:', user?.displayName)

	return (
		<VStack py={8} flex={'1'} bg={'pink.100'} spacing={8}>
			<GreetUser url={url} name={name} user={user} />
			<MoodTabs />
		</VStack>
	)
}
