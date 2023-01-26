import { User } from 'firebase/auth'
import { useDbValue } from './fbDatabase'

//
// Firebase auth data
//
export type UserType = User | null

export function getProviderData(user: UserType) {
	return user?.providerData.find((data) => data.providerId === user?.providerId)
}

export function getUid(user: UserType) {
	const providerData = getProviderData(user)
	return providerData?.uid
}

//
// User-specific app data stored in the database
//
export type UserData = {
	name: string
	photoURL?: string
}

export function useUserData(id: string) {
	return useDbValue<UserData>(`users/${id}`)
}
