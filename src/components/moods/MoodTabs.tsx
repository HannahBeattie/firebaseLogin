import Mood from '@/components/moods/Mood'
import MoodDates from '@/components/moods/MoodDates'
import YourMoods from '@/components/moods/YourMoods'

import { Tabs, TabList, TabPanels, Tab, TabPanel, VStack, Container } from '@chakra-ui/react'
import OfNote from '../OfNote'
import RecentNotes from '../RecentNotes'

export default function MoodTabs() {
	return (
		<Container>
			<Tabs colorScheme={'red'} color={'red.600'}>
				<TabList>
					<Tab>How are you feeling today?</Tab>
					<Tab>Recent feelings</Tab>
					<Tab>Details</Tab>
					<Tab>Recent Notes</Tab>
				</TabList>

				<TabPanels>
					<TabPanel>
						<Mood />
						<OfNote />
					</TabPanel>
					<TabPanel>
						<YourMoods />
					</TabPanel>
					<TabPanel>
						<MoodDates />
					</TabPanel>
					<TabPanel>
						<RecentNotes />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Container>
	)
}
