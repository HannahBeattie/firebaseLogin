import {
	Alert,
	AlertIcon,
	AlertTitle,
	Box,
	Button,
	CloseButton,
	useDisclosure,
	VisuallyHidden,
} from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
	children?: ReactNode
	val: 'hi!'
}

function AllertSaved({ children, val, ...props }: Props) {
	const { isOpen: isVisible, onClose, onOpen } = useDisclosure({ defaultIsOpen: true })

	return isVisible ? (
		<Alert status='success'>
			<AlertIcon />
			<Box>
				<AlertTitle> saved!</AlertTitle>
			</Box>
			<CloseButton
				alignSelf='flex-start'
				position='relative'
				right={-1}
				top={-1}
				onClick={onClose}
			/>
		</Alert>
	) : (
		<VisuallyHidden onClick={onOpen} {...props}>
			{children}
		</VisuallyHidden>
	)
}
