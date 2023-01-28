import {
	Alert,
	ButtonGroup,
	CheckboxIcon,
	CloseButton,
	Editable,
	EditableInput,
	EditablePreview,
	Flex,
	HStack,
	IconButton,
	Input,
	Text,
	useEditableControls,
	VStack,
} from '@chakra-ui/react'
import { useState } from 'react'
import { MdApproval, MdClose, MdEdit } from 'react-icons/md'

type Note = {
	entryTitle: string
	entry: string
}

const notes: Note[] = [{ entryTitle: 'title', entry: 'hello' }]

function EditableControls() {
	const { isEditing, getSubmitButtonProps, getCancelButtonProps, getEditButtonProps } =
		useEditableControls()

	return isEditing ? (
		<ButtonGroup justifyContent='center' color={'red'}>
			<IconButton
				aria-label='icon button'
				icon={<MdApproval />}
				{...getSubmitButtonProps()}
			/>
			<IconButton aria-label='icon button' icon={<MdClose />} {...getCancelButtonProps()} />
		</ButtonGroup>
	) : (
		<Flex justifyContent='center' color={'red'}>
			<IconButton
				aria-label='icon button'
				size='sm'
				icon={<MdEdit />}
				{...getEditButtonProps()}
			/>
		</Flex>
	)
}

export default function OfNote() {
	const [value, setValue] = useState('')
	return (
		<VStack bg={'whiteAlpha.400'} borderRadius={'lg'} boxShadow={'inner-xl'}>
			<Editable
				textAlign='center'
				defaultValue='of note'
				fontSize='xl'
				isPreviewFocusable={false}
				onSubmit={(e) => console.log('submitted value is:', value)}
			>
				<HStack p={2} px={4}>
					<EditableControls />
					<EditablePreview bg={'gray.100'} px={2} color={'red.400'} />
				</HStack>
				<Input
					color={'red'}
					as={EditableInput}
					value={value}
					onChange={(e) => setValue(e.currentTarget.value)}
				/>
			</Editable>
			<Text> {value}</Text>
		</VStack>
	)
}
