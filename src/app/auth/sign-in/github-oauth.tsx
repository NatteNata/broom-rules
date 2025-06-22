'use client'

import { useGithubOAuthQeury } from '@infrastructure/api'
import { IconGithub } from '@tornata/penguin-ui'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const githubOAuthURL = 'https://github.com/login/oauth/authorize'

export function GithubOAuth() {
	const [enabled, setEnabled] = useState(false)
	const router = useRouter()
	const { isSuccess } = useGithubOAuthQeury({
		redirect_url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
		enabled,
	})

	const handleClick = () => {
		console.log('click')
		setEnabled(true)
	}

	if (isSuccess) {
		router.push('/feed')
	}

	return (
		<div onClick={handleClick} onKeyDown={handleClick}>
			<IconGithub width={36} height={36} />
		</div>
	)
}