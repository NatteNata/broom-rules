'use client'

import { Tabs } from '@tornata/penguin-ui'


type Props = {
	profileId?: string
}

export const Profile = ({ profileId }: Props) => {
	return (
		<>
			<div>Profile page for user {profileId}</div>
			<Tabs.Root defaultValue={'genInfo'} onValueChange={(value: string) => {}} value={'genInfo'}>
				<Tabs.List>
					<Tabs.Trigger value={'genInfo'} >General Information</Tabs.Trigger>
					<Tabs.Trigger value={'devices'} >Devices</Tabs.Trigger>
					<Tabs.Trigger value={'account'} >Account Management</Tabs.Trigger>
					<Tabs.Trigger value={'payments'} >My Payments</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content value={'genInfo'} > Hello, here's general information for user {profileId}</Tabs.Content>
				<Tabs.Content value={'devices'} />
				<Tabs.Content value={'account'} />
				<Tabs.Content value={'payments'} />
			</Tabs.Root>
		</>
	)
}