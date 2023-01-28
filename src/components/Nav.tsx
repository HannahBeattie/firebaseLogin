import { getAppAuth } from '@/firebaseConfig'
import { Button, HStack, Spacer, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function Nav() {
	const router = useRouter()
	const auth = getAppAuth()
	const [user, loading, error] = useAuthState(auth)
	const name = user?.displayName
	const text = name ? `${name}` : 'sign in'
	let currentPath = router.asPath

	return (
		<HStack bg={'red.200'} height={50} px={4} fontWeight={'bold'}>
			href === currentPath ? (
			<motion.div
				style={{
					position: 'absolute',
					bottom: '-1px',
					left: '0px',
					right: 0,
					height: '2.px',
					background: 'red',
					zIndex: 0,
				}}
			/>
			) : null
			<Link href={'/'}>
				<Text color={'red'} fontSize={'xl'}>
					{text}
				</Text>
			</Link>
			<Spacer />
			<HStack justify={'space-between'} flex={'1'}>
				<Link href={'/signedIn'}>Home</Link>
				<Link href={'/moody'}>Mood Diary</Link>

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
