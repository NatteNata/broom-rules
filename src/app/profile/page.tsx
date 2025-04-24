import { redirect } from 'next/navigation'

type Props = {
	params: {
		userId: string
	}
}

export default function ProfileRedirect({ params }: Props) {
	const { userId } = params

	const userAuthorized = true

	if (!userAuthorized) {
		redirect('/')
	} else {
		redirect(`/profile/${userId}`)
	}
}
