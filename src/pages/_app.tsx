import Nav from '@/components/Nav'
import '@/styles/globals.css'
import { ChakraProvider, VStack } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../lib/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<ChakraProvider>
				<VStack flex={1} minW={'100vw'} minH={'100vh'} spacing={0} alignItems={'stretch'}>
					{!(Component as any).noNav && <Nav />}
					<Component {...pageProps} />
				</VStack>
			</ChakraProvider>
		</AuthProvider>
	)
}
