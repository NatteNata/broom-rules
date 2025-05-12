'use client'

import { Wrapper } from '@components'
import { Button, Typography } from '@tornata/penguin-ui'
import { useRouter } from 'next/navigation'
import { startTransition } from 'react'

export default function ErrorBoundary({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	console.log('ErrorBoundary', error, error.message)
	const router = useRouter()

	const reload = () => {
		startTransition(() => {
			router.refresh()
			reset()
		})
	}

	return (
		<Wrapper>
			<Typography
				as={'h2'}
				variant={'h3'}
				className={'my-12 text-start font-bold text-danger-500'}
			>
				`Something unexpected went wrong. Click button below to attempt
				recovery. /n ${error.message}`
			</Typography>
			<Button variant={'primary'} onClick={reload}>
				Reset
			</Button>
		</Wrapper>
	)
}