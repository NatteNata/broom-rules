import { redirect } from 'next/navigation'

import { Devices } from './devices/devices'
import { Info } from './info/info'
import { Payments } from './payments/payments'
import { Subscriptions } from './subsrciptions/subscriptions'

export default async function SettingsPage({
	searchParams,
}: {
	searchParams: Promise<{
		part?: 'devices' | 'info' | 'payments' | 'subscriptions'
	}>
}) {
	const { part } = await searchParams

	if (!searchParams) {
		redirect('/settings?part=info')
	}

	return (
		<>
			<Info part={part} />
			<Devices part={part} />
			<Subscriptions part={part} />
			<Payments part={part} />
		</>
	)
}