'use client'

import { useGoogleOAuthMutations } from '@infrastructure/api'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

type Props = {
	code: string
}

export function GoogleOAuth({ code }: Props) {
	const { mutate: getGoogleAuth } = useGoogleOAuthMutations()
	const router = useRouter()

	useEffect(() => {
		if (code) {
			getGoogleAuth(
				{
					code,
					redirectUrl: `${process.env.NEXT_PUBLIC_BASE_URL}`,
				},
				{
					onSuccess: () => router.push('/feed'),
				},
			)
		}
	}, [code, getGoogleAuth, router])

	return null
}
