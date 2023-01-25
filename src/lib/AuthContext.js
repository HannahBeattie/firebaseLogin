import { getAuth } from 'firebase/auth'
import React, { useEffect, useState } from 'react'

const auth = getAuth()
export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)

	useEffect(() => {
		auth.onAuthStateChanged(setUser)
	}, [])

	return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
}
