import { useAuthContext } from '@/lib/AuthContext'
import { Avatar, Box, Heading, HStack, Image, VStack } from '@chakra-ui/react'

export default function SignedIn() {
	const { user } = useAuthContext()
	console.log('user is:', user?.displayName)
	const name = user?.displayName ?? ''
	const url = user?.photoURL ? user?.photoURL : ''
	return (
		<Box>
			<VStack flex={1} py={8} spacing={8}>
				{user && <Avatar size={'100'} src={url} />}
				<HStack>
					<Heading> Hello {name}</Heading>
				</HStack>
			</VStack>
		</Box>
	)
}
