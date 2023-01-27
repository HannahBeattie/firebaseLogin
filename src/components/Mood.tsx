import { useUserData } from '@/lib/userData'
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Container,
	Grid,
	Heading,
	HStack,
	Icon,
	Popover,
	PopoverCloseButton,
	PopoverContent,
	PopoverTrigger,
	SimpleGrid,
	Stack,
	TagLabel,
	Text,
	Tooltip,
	VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
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

export default function Mood() {
	const userData = useUserData()

	const iconProps = {
		fontSize: '5xl',
		_hover: { color: 'red.900' },
		cursor: 'pointer',
	}

	const historyProps = {
		fontSize: '5xl',
		color: 'red',
		bg: 'pink',
		borderRadius: '200',

		cursor: 'pointer',
	}
	const [clicked, setClicked] = useState<Mood>()

	return (
		<VStack spacing={4}>
			<Box>
				<HStack>
					{moods.map((mood, idx) => (
						<Box key={`icon${idx}`}>
							<Icon
								{...iconProps}
								as={mood.icon}
								onClick={() => setClicked(mood)}
								color={mood.label === clicked?.label ? 'red.700' : undefined}
							/>
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
								<HStack>
									<Icon {...historyProps} as={mood.icon} />
									{/* <Text fontSize={'xs'}>{moodData.label}</Text>
									<Text fontSize={'xs'}>{formattedDate}</Text> */}
								</HStack>
							) : (
								<Text>{moodData.label}</Text>
							)}
						</VStack>
					)
				})}
			</SimpleGrid>
		</VStack>
	)
}
