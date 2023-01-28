import { MoodData, useUserData } from '@/lib/userData'
import {
	Alert,
	AlertIcon,
	AlertTitle,
	Box,
	Button,
	CloseButton,
	HStack,
	Icon,
	Spacer,
	Tooltip,
	useDisclosure,
	VStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import { IconType } from 'react-icons'
import { MdMoodBad } from 'react-icons/md'
import { FaRegAngry } from 'react-icons/fa'
import { TfiFaceSad } from 'react-icons/tfi'
import {
	TbMoodConfuzed,
	TbMoodCrazyHappy,
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
	{ label: 'Angry', icon: FaRegAngry },
	{ label: 'Sad', icon: TfiFaceSad },
	{ label: 'Nervous', icon: TbMoodNervous },
	{ label: 'Emotional', icon: TbMoodCry },
	{ label: 'Confused', icon: TbMoodConfuzed },
	{ label: 'Empty', icon: TbMoodEmpty },
	{ label: 'Suprised', icon: TbMoodSuprised },
	{ label: 'Manic', icon: TbMoodCrazyHappy },

	{ label: 'Happy', icon: TbMoodSmile },
	{ label: 'Amazing', icon: TbMoodHappy },
]

export default function Mood() {
	const userData = useUserData()

	const iconProps = {
		fontSize: { md: '5xl', base: '3xl' },
		color: 'red',
		_hover: { color: 'red.400' },
		cursor: 'pointer',
	}

	const [clicked, setClicked] = useState<Mood>()
	const { isOpen: isVisible, onClose, onOpen } = useDisclosure({ defaultIsOpen: false })

	return (
		<VStack>
			<Box>
				<HStack>
					{moods.map((mood, idx) => (
						<Box key={`icon${idx}`}>
							<Icon
								{...iconProps}
								as={mood.icon}
								onClick={() => setClicked(mood)}
								color={mood.label === clicked?.label ? 'red' : 'red.200'}
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
					<VStack py={4} height={250} spacing={4}>
						{isVisible && (
							<Alert
								status='success'
								bg={'whiteAlpha.600'}
								borderRadius={'200'}
								color={'red.600'}
							>
								<AlertIcon />

								<AlertTitle> Saved &apos;Feeling {clicked.label}&apos;</AlertTitle>
								<Spacer />
								<CloseButton
									position='relative'
									onClick={onClose}
									color={'cyan.300'}
								/>
							</Alert>
						)}
						<Icon {...iconProps} fontSize={'100'} as={clicked.icon} />

						<Tooltip label={'click to save'}>
							<Button
								color='red'
								outlineColor={'pink'}
								bg={''}
								_hover={{ bg: 'whiteAlpha.400' }}
								size={'sm'}
								onClick={() => {
									const newMood: MoodData = {
										label: clicked.label,
										timestamp: +new Date(),
									}

									if (!userData.value) {
										// console.log('First mood for new user!', newMood)
										userData.set({
											moods: [newMood],
											notes: [],
										})
										return
									}
									const prevMoods = userData.value?.moods ?? []
									const nextMoods = [...prevMoods, newMood]

									// console.log('<Mood> Saving to userData:', userData)
									userData.set({ ...userData.value, moods: nextMoods })
									{
										onOpen()
									}
								}}
							>
								You are currently feeling {clicked.label}
							</Button>
						</Tooltip>
					</VStack>
				)}
			</Box>
		</VStack>
	)
}
