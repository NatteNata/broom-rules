import { CreatePost } from './profile/post/create-post'
import { Post } from './profile/post/post'
import { Profile } from './profile/profile'

export default async function ProfilePage({
	params,
	searchParams,
}: {
	params: Promise<{ profileId: string }>
	searchParams: Promise<{
		action: string
		postId: string
	}>
}) {
	const { profileId } = await params
	const { action, postId } = await searchParams

	return (
		<>
			<Profile profileId={profileId} />
			<Post postId={postId} />
			<CreatePost action={action} profileId={profileId} />
		</>
	)
}