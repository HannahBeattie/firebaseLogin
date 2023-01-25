import { useAuthContext } from '@/lib/AuthContext'
import { Box, Heading, Image, VStack } from '@chakra-ui/react'

export default function SignedIn() {
	const { user } = useAuthContext()
	console.log('user is:', user?.displayName)
	const name = user?.displayName ?? ''
	return (
		<Box>
			<VStack flex={1} py={8}>
				<Heading> Hello {name}</Heading>
				{user?.photoURL && <Image src={user.photoURL} alt='Your profile picture' />}
			</VStack>
		</Box>
	)
}
