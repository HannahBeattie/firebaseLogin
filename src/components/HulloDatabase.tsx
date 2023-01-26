import { useDbValue } from '@/lib/fbDatabase'
import { Button, HStack, Heading, Text } from '@chakra-ui/react'

export default function HulloDatabase() {
	const { value: hulloVal, loading, set: setHullo, error } = useDbValue<string>('hullo')

	return (
		<>
			{error && <Text>Error! {`${error}`}</Text>}
			<Heading color='purple.700'>{loading ? 'loading' : hulloVal}</Heading>
			<HStack>
				<Button variant='solid' colorScheme='blue' onClick={() => setHullo(hulloVal + '!')}>
					More excited!
				</Button>
				<Button
					variant='solid'
					colorScheme='orange'
					onClick={() => setHullo((hulloVal ?? '').replace(/!/, ''))}
				>
					Less excited!
				</Button>
			</HStack>
		</>
	)
}
