'use client'

import { Button, Dialog, IconClose } from 'penguin-ui'

type Props = {
	showModal: boolean
	setShowModalAction: (show: boolean) => void
	email: string
}

export const SentEmailModal = ({
	showModal,
	email,
	setShowModalAction,
}: Props) => {
	if (!showModal) {
		return null
	}

	return (
		<Dialog.Root
			open={showModal}
			onOpenChange={() => setShowModalAction(!showModal)}
		>
			<Dialog.Portal>
				<Dialog.Overlay />
				<Dialog.Content>
					<div className='flex items-center justify-between border-dark-100 border-b px-6 py-4'>
						<Dialog.Title>Email sent</Dialog.Title>
						<Dialog.Close asChild={false}>
							<IconClose />
						</Dialog.Close>
					</div>
					<Dialog.Description>
						We have sent a link to confirm your email to {email}.
					</Dialog.Description>
					<div className='mt-8 mb-5 flex items-center justify-end space-x-6 px-6'>
						<Dialog.Close asChild>
							<Button variant={'primary'}>OK</Button>
						</Dialog.Close>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}