import { Typography } from 'penguin-ui'

import { TimeManagementRafiki, Wrapper } from '@components'

import { ExpiredLinkForm } from './expired-link-form'

export const ExpiredLinkCard = () => {
	return (
		<Wrapper className='m-0 flex-col'>
			<div className='max-w-76'>
				<Typography
					variant='h1'
					asElement='h1'
					className='mt-1.5 mb-5 text-center text-white'
				>
					Email verification link expired.
				</Typography>
				<Typography
					variant='regular_text_14'
					asElement='p'
					className='mb-14 text-center text-light-100'
				>
					Looks like the verification link has expired. Not to worry, we can
					send the link again.
				</Typography>
			</div>
			<ExpiredLinkForm />
			<div className='mt-16'>
				<TimeManagementRafiki />
			</div>
		</Wrapper>
	)
}