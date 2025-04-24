import { Devices } from '@/app/settings/devices/devices'
import { Info } from '@/app/settings/info/info'
import { Payments } from '@/app/settings/payments/payments'
import { Subscriptions } from '@/app/settings/subsrciptions/subscriptions'
import { redirect } from 'next/navigation'

type Props = {
	searchParams: {
		part?: 'devices' | 'info' | 'payments' | 'subscriptions'
	}
}

export default function SettingsPage({ searchParams }: Props) {
	const { part } = searchParams

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
