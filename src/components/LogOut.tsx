import { getAppAuth } from '@/firebaseConfig'
import { Box, Button, HStack, Link, Spacer, Text, useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function LogOut() {
	const auth = getAppAuth()
	const [user, loading, error] = useAuthState(auth)
	const name = user?.displayName

	const { isOpen, onOpen, onClose } = useDisclosure()

	const [signedOut, setSignedOut] = useState(false)

	if (user && !loading) {
		return (
			<Box position={'relative'}>
				<Link href={'/'} position={'absolute'} bottom={0} right={0}>
					<Button
						onClick={() => {
							auth.signOut()
							setSignedOut(true)
						}}
					>
						Sign-out
					</Button>
				</Link>
			</Box>
		)
	}
	return <Text>{name}</Text>
}
