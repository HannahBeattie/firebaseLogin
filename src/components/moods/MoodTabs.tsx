import Mood from '@/components/moods/Mood'
import MoodDates from '@/components/moods/MoodDates'
import YourMoods from '@/components/moods/YourMoods'

import { Tabs, TabList, TabPanels, Tab, TabPanel, VStack, Container } from '@chakra-ui/react'

export default function MoodTabs() {
	return (
		<Container>
			<Tabs colorScheme={'red'} color={'red.600'}>
				<TabList>
					<Tab>How are you feeling today?</Tab>
					<Tab>Recent feelings</Tab>
					<Tab>Details</Tab>
				</TabList>

				<TabPanels>
					<TabPanel>
						<Mood />
					</TabPanel>
					<TabPanel>
						<YourMoods />
					</TabPanel>
					<TabPanel>
						<MoodDates />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Container>
	)
}
