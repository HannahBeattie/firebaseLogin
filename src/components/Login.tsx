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
		return (
			<HStack flex={'1'}>
				<Button onClick={onOpen} colorScheme={'red'}>
					{text}
				</Button>
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader textAlign={'center'}>Sign in</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
						</ModalBody>
					</ModalContent>
				</Modal>
			</HStack>
		)
	}

	if (user && signedOut === false) {
		return (
			<HStack flex={'1'}>
				<Text color={'red'}>{text}</Text>
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
