type Props = {
	part?: 'devices' | 'info' | 'payments' | 'subscriptions'
}

export const Info = ({ part }: Props) => {
	if (part && part !== 'info') {
		return null
	}

	return <div>Users info</div>
}
