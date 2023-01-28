import { NoteData, useUserData } from '@/lib/userData'
import {
	ButtonGroup,
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
	const userData = useUserData()
	const [value, setValue] = useState('')

	return (
		<VStack bg={'whiteAlpha.400'} borderRadius={'lg'} boxShadow={'inner-xl'}>
			<Editable
				textAlign='center'
				defaultValue='Anything you want to say?'
				fontSize='xl'
				isPreviewFocusable={false}
				onSubmit={(e) => {
					const newNote: NoteData = {
						entry: value,
						timestamp: +new Date(),
					}
					if (!userData.value) {
						// console.log('First note for new user!', newNote)
						userData.set({
							moods: [],
							notes: [newNote],
						})
						return
					}
					const prevNotes = userData.value?.notes ?? []
					const nextNotes = [...prevNotes, newNote]
					console.log('nextNotes:', nextNotes)
					// console.log('<Note> Saving to userData:', userData)
					userData.set({ ...userData.value, notes: nextNotes })
				}}
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
		</VStack>
	)
}
