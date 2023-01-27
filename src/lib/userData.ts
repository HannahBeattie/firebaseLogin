import { getAppAuth } from '@/firebaseConfig'
import { User } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useAuthContext, UserType } from './AuthContext'
import { useDbValue } from './fbDatabase'

//
// Firebase auth data
//

// // I think these are broken!
// export function getProviderData(user: UserType) {
// 	return user?.providerData.find((data) => data.providerId === user?.providerId)
// }

// export function getUid(user: UserType) {
// 	const providerData = getProviderData(user)
// 	return providerData?.uid
// }

//
// User-specific app data stored in the database
//
export type Mood = {
	label: string

	idx?: number

	/** timestamp is in milliseconds since epoch
	 * - use `+new Date()` to assign the current timestamp
	 * - use `new Date(mood.timestamp) to convert back to a javascript date object
	 */
	timestamp: number
}

export type UserData = {
	moods: Mood[]
}

export function useUserData() {
	// const { user } = useAuthContext()
	const [user] = useAuthState(getAppAuth())
	const id = user?.uid
	const dbPath = id ? `users/${id}` : undefined
	console.log(`(useUserData) dbPath=${dbPath}`)
	return useDbValue<UserData>(dbPath)
}
