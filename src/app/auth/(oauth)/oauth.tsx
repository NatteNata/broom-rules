import { Link } from '@components'
import { IconGoogle } from '@tornata/penguin-ui'

const googleOAuthURL = `${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_URL}?
	redirect_uri=${process.env.NEXT_PUBLIC_BASE_URL}&
	client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&
	scope=openid%20email%20profile&
	response_type=code`

export const OAuth = () => {
	return (
		<div className={'flex items-center justify-center pt-6'}>
			<Link href={googleOAuthURL}>
				<IconGoogle width={36} height={36} />
			</Link>
		</div>
	)
}
