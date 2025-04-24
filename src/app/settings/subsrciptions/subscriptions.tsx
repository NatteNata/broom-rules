type Props = {
	part?: 'devices' | 'info' | 'payments' | 'subscriptions'
}

export const Subscriptions = ({ part }: Props) => {
	if (part !== 'subscriptions') {
		return null
	}

	return <div>Users subscriptions</div>
}
