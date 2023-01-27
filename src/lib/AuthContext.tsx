import { app } from '@/firebaseConfig'
import { getAuth, User } from 'firebase/auth'
import React, { FC, PropsWithChildren, useContext, useEffect, useState } from 'react'

export type UserType = User | null

type Ctx = {
	user: UserType
}

const auth = getAuth(app)
export const AuthContext = React.createContext<Ctx>({
	user: null,
})

export function useAuthContext() {
	return useContext(AuthContext)
}

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const [user, setUser] = useState<UserType>(null)

	useEffect(() => {
		auth.onAuthStateChanged(setUser)
	}, [])

	return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
}
