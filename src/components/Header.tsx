import { useAuthContext } from '@/lib/AuthContext'
import { HStack } from '@chakra-ui/react'
import SignOut from './SignOut'

export default function Header() {
	const { user } = useAuthContext()
	return (
		<HStack bg={'pink.200'} height={50}>
			{user && <SignOut />}
		</HStack>
	)
}
