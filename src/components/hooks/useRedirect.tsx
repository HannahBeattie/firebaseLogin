import { getAppAuth } from '@/firebaseConfig'
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'

export function useRedirectIfNotLoggedIn() {
	const auth = getAppAuth()
	const [user, loading, error] = useAuthState(auth)
	const router = useRouter()
	if (!user && !loading) {
		router.replace('/')
	}
}
