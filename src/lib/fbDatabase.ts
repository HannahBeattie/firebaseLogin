import { getDatabase, onValue, ref } from 'firebase/database'
import { useEffect, useState } from 'react'

const database = () => getDatabase()

const hulloRef = ref(database(), `hullo`)

export function useDbValue(dbPath: string) {
	const [resp, setResp] = useState<{
		value: any
		loading: boolean
	}>({
		value: undefined,
		loading: true,
	})

	const dbRef = ref(database(), dbPath)

	useEffect(() => {
		// Subscribe to values for dbPath
		const unsubscribe = onValue(dbRef, (snap) => {
			const value = snap.val() // get the value off of the "database snapshot"
			console.log(`(useDbValue) New value for "${dbPath}":`, value)
			setResp({ value, loading: false }) // Update the "resp" state with the new value
		})

		// Return a function that will be fired when the component that is
		// using this hook is "dismounted" (no longer being rendered) — we unsubscribe
		// from listening to changes to the database
		return () => {
			console.log(`(useDbValue) Unsubscribing from value for "${dbPath}"`)
			unsubscribe()
		}
		/* eslint-disable react-hooks/exhaustive-deps */
	}, [])

	return resp
}
