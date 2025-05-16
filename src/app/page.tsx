import { GoogleOAuth } from '@app/auth/(oauth)/google-oauth'
import { redirect } from 'next/navigation'

type Props = {
	searchParams: {
		code: string
	}
}

export default async function Home({ searchParams }: Props) {
	const code = searchParams.code

	if (code) {
		return <GoogleOAuth code={code} />
	}

	redirect('/feed')
}
