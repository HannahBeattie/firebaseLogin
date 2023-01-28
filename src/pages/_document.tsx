import { VStack } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='en'>
			<Head />
			<VStack
				as={'body'}
				minW={'100vw'}
				alignItems={'stretch'}
				flex={'1'}
				minH={'100vh'}
				padding={0}
				spacing={0}
			>
				<Main />
				<NextScript />
			</VStack>
		</Html>
	)
}
