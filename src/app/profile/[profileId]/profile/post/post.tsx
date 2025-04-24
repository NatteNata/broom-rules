type Props = {
	postId?: string
}

export const Post = ({ postId }: Props) => {
	if (!postId) {
		return null
	}

	return <div>Post {postId}</div>
}
