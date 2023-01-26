import { app } from '@/firebaseConfig'
import { getAuth } from 'firebase/auth'
import React, { FC, PropsWithChildren, useContext, useEffect, useState } from 'react'
import { UserType, getUid } from './userData'

type Ctx = {
	user: UserType
	uid?: string
}

const auth = getAuth(app)
export const AuthContext = React.createContext<Ctx>({
	user: null,
	uid: undefined,
})

export function useAuthContext() {
	return useContext(AuthContext)
}

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [user, setUser] = useState<UserType>(null)
	const uid = getUid(user)

	useEffect(() => {
		auth.onAuthStateChanged(setUser)
	}, [])

	return <AuthContext.Provider value={{ user, uid }}>{children}</AuthContext.Provider>
}
