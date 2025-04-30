import { DialogA } from 'penguin-ui'

type Props = {
	showModal: boolean
	setShowModal: (showModal: boolean) => void
	email: string
}

export const SignUpModal = ({ showModal, email, setShowModal }: Props) => {
	if (!showModal) {
		return null
	}

	return (
		<DialogA
			title='Email sent'
			open={showModal}
			description={`We have sent a link to confirm your email to ${email}.`}
			closeButtonTitle='OK'
			onOpenChange={setShowModal}
		/>
	)
}