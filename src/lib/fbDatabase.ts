import { getDatabase, onValue, ref } from 'firebase/database'

const database = () => getDatabase()

const hulloRef = ref(database(), `hullo`)

onValue(hulloRef, (snap) => {
	const value = snap.val()
	console.log('New value for "hullo":', value)
})
