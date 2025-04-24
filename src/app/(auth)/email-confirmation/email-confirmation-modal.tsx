import { DialogComponent } from 'penguin-ui'

export const EmailConfirmationModal = () => {
	return (
		<>
			<DialogComponent
				title='Email sent'
				description='We have sent a link to confirm your email to epam@epam.com'
				buttonTitle='OK'
			/>
		</>
	)
}
