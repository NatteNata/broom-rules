import { A } from '@/components'
import { cn } from '@/use-cases/utils'

export function Sidebar() {
	return (
		<aside className={'flex w-56 flex-col items-center gap-2'}>
			<nav
				className={cn('mx-2 mt-4 flex w-full items-center justify-items-start')}
			>
				<ul className={'flex list-none flex-col gap-8'}>
					<li>
						<A href={'/sign-up'}>Sign up</A>
					</li>
					<li>
						<A href={'/sign-in'}>Sign in</A>
					</li>
					<li>
						<A href={'/forgot-password'}>Forgot password</A>
					</li>
					<li>
						<A href={'/create-new-password'}>Create new password</A>
					</li>
					<li>
						<A href={'/expired-link'}>Expired link</A>
					</li>
					<li>
						<A href={'/terms-of-service'}>Terms of Service</A>
					</li>
					<li>
						<A href={'/privacy-policy'}>Privacy Policy</A>
					</li>
				</ul>
			</nav>
		</aside>
	)
}
