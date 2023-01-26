import SignIn from '@/components/SignIn'
import { useDbValue } from '@/lib/fbDatabase'
import { Button, Heading, HStack, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
	const { value: hulloVal, loading, set: setHullo } = useDbValue('hullo')

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<VStack flex={1} bg={'pink.200'} color={'red'} pt={16} spacing={8}>
				<Heading fontSize={'8xl'}>Welcome</Heading>
				<Text fontSize={'xl'}>Please Log-in to continue</Text>
				<SignIn />

				<Heading color='purple.700'>Hullo is: {loading ? 'loading' : hulloVal}</Heading>
				<HStack>
					<Button
						variant='solid'
						colorScheme='blue'
						onClick={() => setHullo(hulloVal + '!')}
					>
						More excited!
					</Button>
					<Button
						variant='solid'
						colorScheme='orange'
						onClick={() => setHullo(hulloVal.replace(/!/, ''))}
					>
						Less excited!
					</Button>
				</HStack>

				<Spacer />
				<Image src={'/ground.png'} alt={'An image of a grassy hill'} />
			</VStack>
		</>
	)
}

Home.noHeader = true
