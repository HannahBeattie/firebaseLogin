import { useAuthContext } from '@/lib/AuthContext'
import { useUserData } from '@/lib/userData'
import { Box, Button, HStack, Icon, IconProps, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { MdMoodBad } from 'react-icons/md'
import {
	TbMoodNervous,
	TbMoodCry,
	TbMoodConfuzed,
	TbMoodEmpty,
	TbMoodSuprised,
	TbMoodSmile,
	TbMoodHappy,
} from 'react-icons/tb'

const icons = [
	MdMoodBad,
	TbMoodNervous,
	TbMoodCry,
	TbMoodConfuzed,
	TbMoodEmpty,
	TbMoodSuprised,
	TbMoodSmile,
	TbMoodHappy,
]

export default function Moody() {
	const userData = useUserData()

	const iconProps = {
		fontSize: '5xl',
		_hover: { color: 'red.900' },
		cursor: 'pointer',
	}
	const [clicked, setClicked] = useState<number>()

	return (
		<VStack>
			<Text>How are you feeling today?</Text>

			{(clicked || clicked === 0) && (
				<HStack>
					<Text>You clicked</Text>
					<Icon {...iconProps} as={icons[clicked]} />
					<Button
						colorScheme='blue'
						variant='solid'
						onClick={() => {
							const prevMoods = userData.value?.moods ?? []
							const nextMoods = [
								...prevMoods,
								{
									label: 'no-labels-yet',
									idx: clicked,
									timestamp: +new Date(),
								},
							]
							console.log('<Mood> Saving to userData:', userData)
							userData.set({ ...userData.value, moods: nextMoods })
						}}
					>
						Save
					</Button>
				</HStack>
			)}

			<HStack>
				{icons.map((icon, idx) => (
					<Box key={`icon${idx}`}>
						<Icon {...iconProps} as={icon} onClick={() => setClicked(idx)} />
					</Box>
				))}
			</HStack>

			<VStack>
				{userData.value?.moods.map((mood, idx) => (
					<Text key={`history-${idx}`}>{JSON.stringify(mood, null, '    ')}</Text>
				))}
			</VStack>
		</VStack>
	)
}
