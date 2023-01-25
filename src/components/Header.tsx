import { HStack } from '@chakra-ui/react'
import React from 'react'
import Login from './Login'

export default function Header() {
	return (
		<HStack bg={'pink.100'} height={50}>
			<Login />
		</HStack>
	)
}
