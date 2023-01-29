import { Link, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Component, ReactComponentElement } from 'react'

type LinkProps = {
	href: any
	props?: any
	children: any
}
export function NavWrapper({ children, props, href }: LinkProps) {
	const router = useRouter()
	const currentRoute = router.pathname
	const isCurrent = href === currentRoute

	return (
		<NextLink href={href} passHref legacyBehavior>
			<Link
				_hover={{
					textDecoration: 'none',
				}}
				textTransform={'uppercase'}
				fontWeight={isCurrent ? '900' : '800'}
				color={isCurrent ? 'red' : 'red.600'}
				bg={isCurrent ? 'red.100' : ''}
				p={2}
				borderRadius={'lg'}
				{...props}
			>
				{children}
			</Link>
		</NextLink>
	)
}

export function LinkWrapper({ children, props, href }: LinkProps) {
	return (
		<NextLink href={href} passHref legacyBehavior>
			<Link
				_hover={{
					textDecoration: 'none',
				}}
				{...props}
			>
				{children}
			</Link>
		</NextLink>
	)
}
