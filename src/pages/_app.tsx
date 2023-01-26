import Header from '@/components/Header'
import '@/styles/globals.css'
import { ChakraProvider, VStack } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../lib/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<ChakraProvider>
				<VStack minH={'100vh'} alignItems={'stretch'} spacing={0}>
					{!(Component as any).noHeader && <Header />}
					<Component {...pageProps} />
				</VStack>
			</ChakraProvider>
		</AuthProvider>
	)
}
