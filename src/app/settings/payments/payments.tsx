type Props = {
	part?: 'devices' | 'info' | 'payments' | 'subscriptions'
}

export const Payments = ({ part }: Props) => {
	if (part !== 'payments') {
		return null
	}

	return <div>Users payments</div>
}
