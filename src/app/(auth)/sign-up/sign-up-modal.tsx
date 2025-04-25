import { redirect } from 'next/navigation'
import { DialogA } from 'penguin-ui'

type Props = {
	showModal: boolean
	email: string
}

export const SignUpModal = ({ showModal, email }: Props) => {
	const redirectToSignIn = () => {
		redirect('/sign-in')
	}

	if (!showModal) {
		return null
	}
	return (
		<DialogA
			title='Email sent'
			open={showModal}
			description={`We have sent a link to confirm your email to ${email}.`}
			closeButtonTitle='OK'
			onOpenChange={redirectToSignIn}
		/>
	)
}
