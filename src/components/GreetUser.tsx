import { Avatar, Heading, HStack, Spinner, VStack } from '@chakra-ui/react'

interface Props {
	user: object | null
	url: string
	name: string
}

export default function GreetUser(props: Props) {
	const { name, user, url } = props
	return (
		<>
			{!user && (
				<VStack flex={1} justifyContent={'center'}>
					<Spinner
						thickness='4px'
						speed='0.65s'
						emptyColor='gray.200'
						color='red.500'
						size='xl'
					/>
				</VStack>
			)}
			{user && (
				<VStack spacing={10}>
					{url && <Avatar size={'8xl'} src={url} />}
					<HStack>
						<Heading> Hello {name}!</Heading>
					</HStack>
				</VStack>
			)}
		</>
	)
}
