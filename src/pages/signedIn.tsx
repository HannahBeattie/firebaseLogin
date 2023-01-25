import { AuthContext } from '@/lib/AuthContext'
import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import { useContext } from 'react'

export default function SignedIn() {
	const { user } = useContext(AuthContext)
	console.log('user is:', user.displayName)
	const name = user.displayName
	return (
		<Box>
			<VStack flex={1} py={8}>
				<Heading> Hello {name}</Heading>
			</VStack>
		</Box>
	)
}
