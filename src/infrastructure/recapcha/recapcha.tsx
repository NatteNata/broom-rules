import ReCAPTCHA from 'react-google-recaptcha'

export const Recapcha = ({
	onChange,
	returnToken,
}: {
	onChange: (status: boolean) => void
	returnToken: (token: string) => void
}) => {
	const key = process.env.NEXT_PUBLIC_RECAPCHA_SITE_KEY_LOCALHOST ?? ''

	const handleRecapchaToken = (token: string | null) => {
		if (token) {
			onChange(false)
			returnToken(token)
		}
		onChange(true)
	}

	return (
		<ReCAPTCHA
			sitekey={key}
			onChange={handleRecapchaToken}
			onExpired={() => onChange(true)}
			theme='dark'
			style={{ transform: 'scale(1.39)', transformOrigin: '0 0' }}
		/>
	)
}