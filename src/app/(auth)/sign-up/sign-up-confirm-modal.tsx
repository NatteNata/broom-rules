type Props = {
	showModal: boolean
}

export const SignUpConfirmModal = ({ showModal }: Props) => {
	if (!showModal) {
		return null
	}
	return <div>Modal</div>
}
