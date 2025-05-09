'use client'

import { useMeQuery } from '@infrastructure/api'
import { redirect } from 'next/navigation'

export default function ProfileRedirect() {
	const { data: currentUser, isLoading, error } = useMeQuery()

	if (error) return <h2>Unable to get user. {error.message}</h2>
	if (isLoading) return <h2>Loading...</h2>

	redirect(`/profile/${currentUser?.userId}`)
}