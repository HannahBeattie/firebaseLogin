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
import DateFormatter from '../DateFormatter'

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

		borderRadius: '200',
	}
	const userData = useUserData()
	const cardProps = {
		p: 8,
		bg: 'whiteAlpha.400',
		alignItems: 'stretch',
		borderRadius: 'lg',
		boxShadow: 'lg',
		fontWeight: 'bold',
	}

	return (
		<>
			<VStack alignItems={'stretch'}>
				{userData.value?.moods
					.slice(0)
					.reverse()
					.map((moodData, idx) => {
						const mood = moods.find(({ label }) => label === moodData.label)
						let dateString = moodData.timestamp

						return (
							<SimpleGrid key={`history-${idx}`} color={'red'} columns={1}>
								{mood ? (
									<VStack {...cardProps}>
										<HStack justifyContent={'space-between'}>
											<Icon {...historyProps} as={mood.icon} />
											<VStack alignItems={'stretch'}>
												<DateFormatter dateString={dateString} />
												<HStack>
													<Text fontWeight={'light'}>You felt:</Text>
													<Text>{moodData.label}</Text>
												</HStack>
											</VStack>
										</HStack>
									</VStack>
								) : (
									<Text>{moodData.label}</Text>
								)}
							</SimpleGrid>
						)
					})}
			</VStack>
		</>
	)
}
