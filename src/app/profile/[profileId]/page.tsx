import { Profile } from './profile/profile'

export default async function ProfilePage({
	params,
}: {
	params: Promise<{ profileId: string }>
}) {
	const { profileId } = await params

	return <Profile profileId={profileId} />
}
