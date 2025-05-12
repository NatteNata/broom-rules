import { Link } from '@components'
import { Typography } from '@tornata/penguin-ui'

export const SignUpTerms = () => (
	<Typography asElement={'p'} variant={'small_text'}>
		I agree to the
		<Link href={'/auth/terms-of-service'}>
			<Typography asElement={'span'} className={'mx-1'} variant={'small_link'}>
				Terms of Service
			</Typography>
		</Link>
		and
		<Link href={'/auth/privacy-policy'}>
			<Typography asElement={'span'} className={'mx-1'} variant={'small_link'}>
				Privacy Policy
			</Typography>
		</Link>
	</Typography>
)
