import { useUserData } from '@/lib/userData'
import { HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'

import { format, parseISO } from 'date-fns'
import DateFormatter from './DateFormatter'

export default function RecentNotes() {
	const userData = useUserData()

	return (
		<>
			<VStack alignItems={'stretch'}>
				{userData.value?.notes
					?.slice(0)
					.reverse()
					.map((noteData, idx) => {
						let dateString = noteData.timestamp

						return (
							<SimpleGrid key={`history-${idx}`} color={'red'} columns={1}>
								<VStack
									p={8}
									bg={'whiteAlpha.400'}
									alignItems={'stretch'}
									borderRadius={'lg'}
									boxShadow={'lg'}
									fontSize={'lg'}
									fontWeight={'bold'}
								>
									<HStack justifyContent={'space-between'}>
										<VStack alignItems={'stretch'}>
											<VStack flex={1} alignItems={'stretch'}>
												<DateFormatter dateString={dateString} />
												<Text>{noteData.entry}</Text>
											</VStack>
										</VStack>
									</HStack>
								</VStack>
							</SimpleGrid>
						)
					})}
			</VStack>
		</>
	)
}
