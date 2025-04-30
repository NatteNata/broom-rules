import { Link } from '@app/ui/components'
import { cn } from '@utils'

export function Sidebar() {
	return (
		<aside className={'flex w-56 flex-col items-center gap-2'}>
			<nav
				className={cn('mx-2 mt-4 flex w-full items-center justify-items-start')}
			>
				<ul className={'flex list-none flex-col gap-8'}>
					<li>
						<Link href={'/auth/sign-up'}>Sign up</Link>
					</li>
					<li>
						<Link href={'/auth/sign-in'}>Sign in</Link>
					</li>
					<li>
						<Link href={'/auth/forgot-password'}>Forgot password</Link>
					</li>
					<li>
						<Link href={'/auth/create-new-password'}>Create new password</Link>
					</li>
					<li>
						<Link href={'/auth/expired-link'}>Expired link</Link>
					</li>
					<li>
						<Link href={'/auth/terms-of-service'}>Terms of Service</Link>
					</li>
					<li>
						<Link href={'/auth/privacy-policy'}>Privacy Policy</Link>
					</li>
				</ul>
			</nav>
		</aside>
	)
}