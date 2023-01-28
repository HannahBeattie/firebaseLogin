import { useDbValue } from '@/lib/fbDatabase'
import { Button, HStack, Heading, Text, Spinner } from '@chakra-ui/react'

export default function Welcome() {
	const { value: hulloVal, loading, set: setHullo, error } = useDbValue<string>('hullo')

	return (
		<>
			{error && <Text>Error! {`${error}`}</Text>}
			<Heading fontSize={'8xl'}>{loading ? 'Loading' : hulloVal}</Heading>
			<HStack>
				<Button
					variant='solid'
					bg={'red.400'}
					color={'white'}
					_hover={{ bg: 'whiteAlpha.800', color: 'red' }}
					onClick={() => setHullo(hulloVal + '!')}
				>
					More excited!
				</Button>
				<Button
					variant='solid'
					bg={'blue.300'}
					color={'white'}
					_hover={{ bg: 'whiteAlpha.800', color: 'blue.300' }}
					onClick={() => setHullo((hulloVal ?? '').replace(/!/, ''))}
				>
					Less excited!
				</Button>
			</HStack>
		</>
	)
}
