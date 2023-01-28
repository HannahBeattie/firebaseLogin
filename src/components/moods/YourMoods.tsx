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

export default function YourMoods() {
	const historyProps = {
		fontSize: { md: '5xl', base: '3xl' },
		color: 'red',

		borderRadius: '200',
	}
	const userData = useUserData()

	return (
		<>
			<SimpleGrid columns={8} columnGap={4} rowGap={4}>
				{userData.value?.moods
					.slice(0)
					.reverse()
					.map((moodData, idx) => {
						const mood = moods.find(({ label }) => label === moodData.label)

						return (
							<VStack key={`history-${idx}`}>
								{mood ? (
									<HStack>
										<Icon {...historyProps} as={mood.icon} />
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
