'use client'

import { Spinner } from '@app/ui/components'
import { useMeQuery } from '@infrastructure/api'
import { useAuthContext } from '@infrastructure/providers'
import { redirect } from 'next/navigation'

export default function ProfileRedirect() {
	const { isAuthed } = useAuthContext()
	const { data: currentUser, isLoading, error } = useMeQuery(isAuthed)

	if (error) return <h2>Unable to get user. {error.message}</h2>
	if (isLoading) return <Spinner />

	redirect(`/profile/${currentUser?.userId}`)
}
