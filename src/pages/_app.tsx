import '@/styles/globals.css'
import { ChakraProvider, VStack } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<VStack alignItems={'stretch'} flex={1} minH={'100vh'}>
				<Component {...pageProps} />
			</VStack>
		</ChakraProvider>
	)
}
