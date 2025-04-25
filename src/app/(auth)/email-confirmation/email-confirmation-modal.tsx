import { DialogA } from 'penguin-ui'

export const EmailConfirmationModal = () => {
	return (
		<>
			<DialogA
				title='Email sent'
				description='We have sent a link to confirm your email to epam@epam.com'
				closeButtonTitle='OK'
			/>
		</>
	)
}
