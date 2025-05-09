type Props = {
	part?: 'devices' | 'info' | 'payments' | 'subscriptions'
}

export const Devices = ({ part }: Props) => {
	if (part !== 'devices') {
		return null
	}

	return <div>Users devices</div>
}
