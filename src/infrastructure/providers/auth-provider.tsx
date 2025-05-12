'use client'

import { useMeQuery } from '@infrastructure/api'
import { type ReactNode, createContext, useContext } from 'react'

type AuthContextType = {
	isAuthed: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuthContext = () => {
	const context = useContext(AuthContext)

	if (!context) {
		throw new Error('useAuthContext must be defined')
	}
	return context
}

export function AuthProvider({ children }: { children: ReactNode }) {
	const { data: user } = useMeQuery()
	const isAuthed = !!user

	return (
		<AuthContext.Provider value={{ isAuthed }}>{children}</AuthContext.Provider>
	)
}
