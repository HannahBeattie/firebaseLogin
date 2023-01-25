import { getAppAuth, uiConfig } from '@/firebaseConfig'
import {
	Box,
	Button,
	HStack,
	Link,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Spacer,
	Text,
	Toast,
	useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

export default function Login() {
	const auth = getAppAuth()
	const [user, loading, error] = useAuthState(auth)
	const name = user?.displayName
	const text = name ? `Hello ${name}` : 'sign in'
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [signedOut, setSignedOut] = useState(false)

	if (!user && !loading) {
		return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
	}

	if (user && !signedOut) {
		return (
			<HStack flex={'1'} px={4}>
				<Text color={'Black'}>{text}</Text>
				<Spacer />
				<Link href={'/'}>
					<Button
						colorScheme={'red'}
						onClick={() => {
							auth.signOut()
							setSignedOut(true)
						}}
					>
						Sign-out
					</Button>
				</Link>
			</HStack>
		)
	}
}
