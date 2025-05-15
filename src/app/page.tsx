import { GoogleAuth } from '@app/auth/google-auth/google-auth'
import { redirect } from 'next/navigation'

type Props = {
	searchParams: {
		code: string
	}
}

export default async function Home({ searchParams }: Props) {
	const code = searchParams.code

	if (code) {
		return <GoogleAuth code={code} />
	}

	redirect('/feed')
}