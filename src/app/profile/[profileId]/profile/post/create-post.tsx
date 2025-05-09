type Props = {
	action?: string
	profileId?: string
}

export const CreatePost = ({ action, profileId }: Props) => {
	if (!action || action !== 'create') {
		return null
	}

	return <div>Create post for {profileId}</div>
}
