import { useUserData } from '@/lib/userData'
import { Heading, HStack, Icon, SimpleGrid, Text, VStack } from '@chakra-ui/react'
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

const moods: Mood[] = [
	{ label: 'Bad', icon: MdMoodBad },
	{ label: 'Nervous', icon: TbMoodNervous },
	{ label: 'Emotional', icon: TbMoodCry },
	{ label: 'Confused', icon: TbMoodConfuzed },
	{ label: 'Empty', icon: TbMoodEmpty },
	{ label: 'Suprised', icon: TbMoodSuprised },
	{ label: 'Happy', icon: TbMoodSmile },
	{ label: 'Amazing', icon: TbMoodHappy },
]

export default function MoodDates() {
	const historyProps = {
		fontSize: { md: '5xl', base: '3xl' },
		color: 'red',
		bg: 'pink',
		borderRadius: '200',
	}
	const userData = useUserData()

	return (
		<>
			<SimpleGrid columns={3} columnGap={4} rowGap={4} alignItems={'stretch'} flex={1}>
				{userData.value?.moods.map((moodData, idx) => {
					const mood = moods.find(({ label }) => label === moodData.label)

					let dateString = moodData.timestamp
					const formatDate = (dateString: any) => {
						const options = { year: 'numeric', month: 'long', day: 'numeric' }
						return new Date(dateString).toLocaleDateString(undefined, options)
					}

					console.log(formatDate(dateString))
					let formattedDate = formatDate(dateString)

					return (
						<VStack key={`history-${idx}`}>
							{mood ? (
								<HStack flex={1} width={'100%'}>
									<Icon {...historyProps} as={mood.icon} />
									<VStack>
										<Text fontSize={'xs'}>On {formattedDate}</Text>
										<Text fontSize={'xs'}>You felt: {moodData.label}</Text>
									</VStack>
								</HStack>
							) : (
								<Text>{moodData.label}</Text>
							)}
						</VStack>
					)
				})}
			</SimpleGrid>
		</>
	)
}
