'use client'

import { DialogA } from 'penguin-ui'

type Props = {
	showModal: boolean
	setShowModal: string
	email: string
}

export const SentEmailModal = ({ showModal, email, setShowModal }: Props) => {
	const foo = JSON.parse(setShowModal)
	if (!showModal) {
		return null
	}

	return (
		<DialogA
			title='Email sent'
			open={showModal}
			description={`We have sent a link to confirm your email to ${email}.`}
			closeButtonTitle='OK'
			onOpenChange={prev => foo(!prev)}
		/>
	)
}
