'use client'

import { useMeQuery } from '@infrastructure/api'
import { useRouter } from 'next/navigation'

type Props = {
	params: {
		userId: string
	}
}

export default function ProfileRedirect({ params }: Props) {
	const router = useRouter()
	const { data: currentUser, isLoading, error } = useMeQuery()

	if (error) return <h2>Unable to get user. {error.message}</h2>
	if (isLoading) return <h2>Loading...</h2>

	router.push(`/profile/${currentUser?.userId}`)
}
