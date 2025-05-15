'use client'

import { Wrapper } from '@components'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@tornata/penguin-ui'
import { useState } from 'react'

type Props = {
	profileId?: string
}

export const Profile = ({ profileId }: Props) => {
	const [currentValue, setCurrentValue] = useState('genInfo')

	return (
		<Tabs
			defaultValue={'genInfo'}
			onValueChange={setCurrentValue}
			value={currentValue}
			activationMode={'automatic'}
		>
			<TabsList>
				<TabsTrigger value={'genInfo'}>General Information</TabsTrigger>
				<TabsTrigger value={'devices'}>Devices</TabsTrigger>
				<TabsTrigger value={'account'}>Account Management</TabsTrigger>
				<TabsTrigger value={'payments'}>My Payments</TabsTrigger>
			</TabsList>
			<TabsContent value={'genInfo'}>
				<Wrapper
					className={
						'flex w-full flex-col items-center justify-center gap-4 p-12'
					}
					as={'section'}
				>
					<div>Profile page for user {profileId}</div>
					<div>Hello, here's general information for user {profileId}.</div>
				</Wrapper>
			</TabsContent>
			<TabsContent value={'devices'}>
				<Wrapper
					className={
						'flex w-full flex-col items-center justify-center gap-4 p-12'
					}
					as={'section'}
				>
					<div>Here's the list of devices registered for user {profileId}.</div>
				</Wrapper>
			</TabsContent>
			<TabsContent value={'account'}>
				<Wrapper
					className={
						'flex w-full flex-col items-center justify-center gap-4 p-12'
					}
					as={'section'}
				>
					<div>Information necessary for managing user's account.</div>
				</Wrapper>
			</TabsContent>
			<TabsContent value={'payments'}>
				<Wrapper
					className={
						'flex w-full flex-col items-center justify-center gap-4 p-12'
					}
					as={'section'}
				>
					<div>Scheduled payments for the user.</div>
				</Wrapper>
			</TabsContent>
		</Tabs>
	)
}
