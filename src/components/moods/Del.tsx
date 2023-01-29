import { useUserData } from '@/lib/userData'
import { Button, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'

import DateFormatter from '../DateFormatter'

export default function Del() {
	const userData = useUserData()
	const [selected, setSelected] = useState({})

	return (
		<>
			<VStack alignItems={'stretch'}>
				{userData.value?.notes
					?.slice(0)
					.reverse()
					.map((noteData, idx) => {
						let dateString = noteData.timestamp
						// console.log(`noteData is ${idx}`)
						console.log('selected is', selected)

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
												<Button
													onClick={() => setSelected(idx)}
													bg={selected === idx ? 'red.100' : 'white'}
												>
													{selected === idx ? 'selected' : 'select me'}
												</Button>

												<Button>Delete</Button>
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
