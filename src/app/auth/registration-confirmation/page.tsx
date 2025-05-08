import { RegistrationConfirmationCard } from './registration-confirmation-card'

export default async function EmailConfirmationPage({
	searchParams,
}: { searchParams: Promise<{ code: string; email: string }> }) {
	const { code } = await searchParams

	return <RegistrationConfirmationCard code={code} />
}
