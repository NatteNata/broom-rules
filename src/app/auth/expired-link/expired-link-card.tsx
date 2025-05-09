'use client'

import { SentEmailModal } from '@app/ui/components/modals/sent-email-modal'
import { TimeManagementRafiki, Wrapper } from '@components'
import { Typography } from 'penguin-ui'
import { useState } from 'react'

import { ExpiredLinkForm } from './expired-link-form'

export const ExpiredLinkCard = () => {
	const [showModal, setShowModal] = useState(false)
	const [email, setEmail] = useState('')

	const onFormSubmit = (formEmail: string) => {
		setShowModal(true)
		setEmail(formEmail)
	}

	return (
		<Wrapper className='m-0 flex-col'>
			<div className='max-w-76'>
				<Typography
					variant='h1'
					asElement='h1'
					className='mt-1.5 mb-5 text-center text-white'
				>
					Email verification link expired.
				</Typography>
				<Typography
					variant='regular_text_14'
					asElement='p'
					className='mb-8 text-center text-light-100'
				>
					Looks like the verification link has expired. Not to worry, we can
					send the link again.
				</Typography>
			</div>
			<ExpiredLinkForm onFormSubmit={onFormSubmit} />
			<div className='mt-16'>
				<TimeManagementRafiki />
			</div>
			<SentEmailModal
				showModal={showModal}
				email={email}
				setShowModalAction={setShowModal}
			/>
		</Wrapper>
	)
}