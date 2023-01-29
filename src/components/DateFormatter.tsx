import { Text } from '@chakra-ui/react'
import { parseISO, format } from 'date-fns'

type Props = {
	dateString: any
}

const DateFormatter = ({ dateString }: Props) => {
	const dateData = format(dateString, 'dd MMMM yy,  h : mm a')
	return <Text>{dateData} </Text>
}

export default DateFormatter
