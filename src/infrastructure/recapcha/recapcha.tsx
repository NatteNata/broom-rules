import ReCAPTCHA from 'react-google-recaptcha'

export const Recapcha = ({
	returnToken,
}: {
	returnToken: (token: string) => void
}) => {
	const key = process.env.NEXT_PUBLIC_RECAPCHA_SITE_KEY ?? ''

	const handleToken = (token: string | null) => {
		if (!token) {
			return null
		}
		returnToken(token)
	}

	return (
		<ReCAPTCHA
			sitekey={key}
			onChange={handleToken}
			theme='dark'
			style={{ transform: 'scale(1.39)', transformOrigin: '0 0' }}
		/>
	)
}
