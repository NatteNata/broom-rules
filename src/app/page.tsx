import { GoogleOAuthCallback } from '@app/auth/sign-in/google-oauth-callback'
import { redirect } from 'next/navigation'

type Props = {
	searchParams: {
		code: string
	}
}

export default async function Home({ searchParams }: Props) {
	const code = searchParams.code

	if (code) {
		return <GoogleOAuthCallback code={code} />
	}

	redirect('/feed')
}