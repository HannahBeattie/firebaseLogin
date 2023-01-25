import Header from '@/components/Header'
import '@/styles/globals.css'
import { ChakraProvider, VStack } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<VStack minH={'100vh'} alignItems={'stretch'} spacing={0}>
				<Header />
				<Component {...pageProps} />
			</VStack>
		</ChakraProvider>
	)
}
