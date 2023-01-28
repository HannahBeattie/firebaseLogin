import { useUserData } from '@/lib/userData'
import { HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'

type typeTest = {
	justSpecificWords: 'just' | 'specific' | 'words'
}

export default function RecentNotes() {
	const userData = useUserData()

	return (
		<>
			<VStack alignItems={'stretch'}>
				{userData.value?.notes?.map((noteData, idx) => {
					let dateString = noteData.timestamp
					const formatDate = (dateString: any) => {
						const options: Intl.DateTimeFormatOptions = {
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						}
						return new Date(dateString).toLocaleDateString(undefined, options)
					}

					// console.log(formatDate(dateString))
					let formattedDate = formatDate(dateString)

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
										<Text fontWeight={'light'}> {formattedDate}</Text>
										<HStack>
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
