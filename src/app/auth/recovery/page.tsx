import { CreateNewPasswordCard } from './create-new-password-card'

export default async function RecoveryPasswordPage({
	searchParams,
}: {
	searchParams: Promise<{ code: string }>
}) {
	const { code } = await searchParams

	return <CreateNewPasswordCard code={code} />
}