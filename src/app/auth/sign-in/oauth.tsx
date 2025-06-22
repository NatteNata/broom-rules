import { GithubOAuth } from './github-oauth'
import { GoogleOAuth } from './google-oauth'

export const OAuth = () => {
	return (
		<div className={'flex items-center justify-center gap-x-15 pt-6'}>
			<GoogleOAuth />
			<GithubOAuth />
		</div>
	)
}