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
			<div className='m-10 flex flex-col gap-4'>
				<div>Counter</div>
				<div className='m-10 flex gap-4'>
					<div className='h-32 w-32 bg-amber-300'>Post 1</div>
					<div className='h-32 w-32 bg-red-300'>Post 2</div>
					<div className='h-32 w-32 bg-gray-300'>Post 3</div>
					<div className='h-32 w-32 bg-cyan-300'>Post 4</div>
				</div>
			</div>
		</>
	)
}
