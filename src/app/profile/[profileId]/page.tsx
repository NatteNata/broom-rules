import { CreatePost } from '@/app/profile/[profileId]/profile/post/create-post'
import { Post } from '@/app/profile/[profileId]/profile/post/post'
import { Profile } from '@/app/profile/[profileId]/profile/profile'

type Props = {
	params: {
		profileId: string
	}
	searchParams: {
		action?: string
		postId?: string
	}
}

// : Promise<{
// 	params: {
// 		profileId: string
// 	}
// 	searchParams: {
// 		action?: string
// 		postId?: string
// 	}
// }>

export default async function ProfilePage({ params, searchParams }: Props) {
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
