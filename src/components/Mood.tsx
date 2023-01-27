import { useUserData } from '@/lib/userData'
import {
	Box,
	Button,
	Container,
	Grid,
	Heading,
	HStack,
	Icon,
	SimpleGrid,
	Stack,
	TagLabel,
	Text,
	Tooltip,
	VStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import { IconType } from 'react-icons'
import { MdMoodBad } from 'react-icons/md'
import {
	TbMoodConfuzed,
	TbMoodCry,
	TbMoodEmpty,
	TbMoodHappy,
	TbMoodNervous,
	TbMoodSmile,
	TbMoodSuprised,
} from 'react-icons/tb'

type Mood = {
	label: string
	icon: IconType
}

const icons: Mood[] = [
	{ label: 'Bad', icon: MdMoodBad },
	{ label: 'Nervous', icon: TbMoodNervous },
	{ label: 'Emotional', icon: TbMoodCry },
	{ label: 'Confused', icon: TbMoodConfuzed },
	{ label: 'Empty', icon: TbMoodEmpty },
	{ label: 'Suprised', icon: TbMoodSuprised },
	{ label: 'Happy', icon: TbMoodSmile },
	{ label: 'Amazing', icon: TbMoodHappy },
]

export default function Mood() {
	const userData = useUserData()

	const iconProps = {
		fontSize: '5xl',
		_hover: { color: 'red.900' },
		cursor: 'pointer',
	}
	const [clicked, setClicked] = useState<Mood>()

	return (
		<VStack spacing={4}>
			<Box>
				<HStack>
					{icons.map((mood, idx) => (
						<Box key={`icon${idx}`}>
							<Icon {...iconProps} as={mood.icon} onClick={() => setClicked(mood)} />
						</Box>
					))}
				</HStack>

				{!clicked && (
					<VStack height={250} justify={'center'}>
						<Tooltip label={'click a face'}>
							<Button color='red' variant='outline' outlineColor={'pink'}>
								How are you feeling today?
							</Button>
						</Tooltip>
					</VStack>
				)}
				{clicked && (
					<VStack py={8} height={250} spacing={4}>
						<Icon {...iconProps} fontSize={'100'} as={clicked.icon} />
						<Tooltip label={'click to save'}>
							<Button
								color='red'
								variant='outline'
								outlineColor={'pink'}
								size={'sm'}
								onClick={() => {
									const prevMoods = userData.value?.moods ?? []
									const nextMoods = [
										...prevMoods,
										{
											label: clicked.label,
											timestamp: +new Date(),
											// icon: clicked.icon,
										},
									]
									console.log('<Mood> Saving to userData:', userData)
									userData.set({ ...userData.value, moods: nextMoods })
								}}
							>
								You are currently feeling {clicked.label}
							</Button>
						</Tooltip>
					</VStack>
				)}
			</Box>
			<Text>You have recently felt:</Text>
			<SimpleGrid columns={6} flex={1} columnGap={4} rowGap={4}>
				{userData.value?.moods.map((mood, idx) => (
					// <Text key={`history-${idx}`}>{JSON.stringify(mood.label, null, '    ')}</Text>
					<Text
						key={`history-${idx}`}
						textAlign={'center'}
						bg={'red.500'}
						color={'white'}
						fontWeight={'400'}
						textTransform={'uppercase'}
						p={2}
						borderRadius={'md'}
					>
						{' '}
						{mood.label}
					</Text>
				))}
			</SimpleGrid>
		</VStack>
	)
}
