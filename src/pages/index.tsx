import InOut from '@/components/InOut'
import SignIn from '@/components/SignIn'
import { VStack } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<VStack flex={1} py={8} bg={'pink.100'}>
				{/* <SignIn /> */}
				<InOut />
			</VStack>
		</>
	)
}
