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

						// const formatDate = (dateString: any) => {
						// 	const options: Intl.DateTimeFormatOptions = {
						// 		hour: 'numeric',
						// 		minute: 'numeric',
						// 		hourCycle: 'h12',
						// 		year: 'numeric',
						// 		month: 'long',
						// 		day: 'numeric',
						// 	}
						// 	return new Date(dateString).toLocaleDateString(undefined, options)
						// }

						// // console.log(formatDate(dateString))
						// let formattedDate = formatDate(dateString)

						// {
						// 	dateString && console.log(format(dateString, 'dd MMMM yyyy HH:mm'))
						// }
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
											<HStack>
												<DateFormatter dateString={dateString} />
												<Text>{noteData.entry}</Text>
											</HStack>
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
