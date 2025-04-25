import { A } from '@/components'
import { Typography } from 'penguin-ui'

export const SignUpTerms = () => (
	<Typography asElement={'p'} variant={'small_text'}>
		I agree to the
		<A href={'/terms-of-service'}>
			<Typography asElement={'span'} className={'mx-1'} variant={'small_link'}>
				Terms of Service
			</Typography>
		</A>
		and
		<A href={'/privacy-policy'}>
			<Typography asElement={'span'} className={'mx-1'} variant={'small_link'}>
				Privacy Policy
			</Typography>
		</A>
	</Typography>
)