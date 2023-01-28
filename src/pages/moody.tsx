import GreetUser from '@/components/GreetUser'
import MoodTabs from '@/components/moods/MoodTabs'
import { useAuthContext } from '@/lib/AuthContext'
import { useUserData } from '@/lib/userData'
import { VStack } from '@chakra-ui/react'
import React from 'react'

export default function Moody() {
	const { user } = useAuthContext()
	const name = user?.displayName ?? ''
	const url = user?.photoURL ? user?.photoURL : ''

	const userData = useUserData()
	return (
		<VStack py={8} flex={'1'} bg={'pink.100'} spacing={8}>
			<GreetUser url={url} name={name} user={user} />

			<MoodTabs />
		</VStack>
	)
}
