import { getAppAuth } from '@/firebaseConfig'
import { Box, Button, HStack, Spacer, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavWrapper } from './LinkWrapper'

export default function Nav() {
	const router = useRouter()
	const auth = getAppAuth()
	const [user, loading, error] = useAuthState(auth)
	const name = user?.displayName
	const text = name ? `${name}` : 'sign in'
	const navItems = [
		{ page: 'Home', href: '/signedIn' },
		{ page: 'Mood Diary', href: '/moody' },
	]

	return (
		<HStack bg={'red.200'} height={50} px={4} fontWeight={'bold'}>
			<Link href={'/'}>
				<Text color={'red'} fontSize={'xl'}>
					{text}
				</Text>
			</Link>
			<Spacer />

			<HStack justify={'space-between'} flex={'1'}>
				{navItems.map(({ href, page }, idx) => (
					<Box key={`page index:${idx}`}>
						<NavWrapper href={href}>{page}</NavWrapper>
					</Box>
				))}

				<Button
					colorScheme={'red'}
					onClick={() => {
						router.push('/')
						auth.signOut()
					}}
				>
					Sign-out
				</Button>
			</HStack>
		</HStack>
	)
}
