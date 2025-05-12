'use client'

import { useLogoutMutation, useMeQuery } from '@infrastructure/api'
import {
	IconBookmarkOutline,
	IconHomeOutline,
	IconLogOut,
	IconMessageCircleOutline,
	IconPersonOutline,
	IconPlusSquareOutline,
	IconSearch,
	IconTrendingUp,
	Sidebar as SidebarComp,
	Typography,
} from '@tornata/penguin-ui'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { ReactNode } from 'react'

type RouteLinks = {
	label: string
	href: string
	id: string
	icon: ReactNode
}[]

const publicRoutesLinks: RouteLinks = [
	{
		label: 'Feed',
		href: '/feed',
		id: 'feed',
		icon: <IconHomeOutline />,
	},
	{
		label: 'Create',
		href: '/create',
		id: 'create',
		icon: <IconPlusSquareOutline />,
	},
	{
		label: 'My Profile',
		href: '/profile',
		id: 'profile',
		icon: <IconPersonOutline />,
	},
	{
		label: 'Messenger',
		href: '/feed',
		id: 'messenger',
		icon: <IconMessageCircleOutline />,
	},
	{ label: 'Search', href: '/feed', id: 'search', icon: <IconSearch /> },
]

const privateRoutesLinks: RouteLinks = [
	{
		label: 'Statistics',
		href: '/profile',
		id: 'statistics',
		icon: <IconTrendingUp />,
	},
	{
		label: 'Favourites',
		href: '/profile',
		id: 'favourites',
		icon: <IconBookmarkOutline />,
	},
]

export function Sidebar() {
	const router = useRouter()
	const { data } = useMeQuery()
	const isAuthed = !!data

	const { mutate: logout, isPending, error } = useLogoutMutation()

	const onClick = () => {
		logout(undefined, {
			onSuccess: () => router.push('/auth/sign-in'),
		})
	}

	return (
		<SidebarComp.Root defaultActiveItem='feed'>
			<SidebarComp.Menu>
				<SidebarComp.Group>
					{publicRoutesLinks.map(({ label, href, id, icon }) => {
						return (
							<SidebarComp.Item id={id} asChild key={id}>
								<Link href={href}>
									{icon}
									<span>{label}</span>
								</Link>
							</SidebarComp.Item>
						)
					})}
				</SidebarComp.Group>
				{isAuthed && (
					<SidebarComp.Group>
						{privateRoutesLinks.map(({ label, href, id, icon }) => {
							return (
								<SidebarComp.Item id={id} asChild key={id}>
									<Link href={href}>
										{icon}
										<span>{label}</span>
									</Link>
								</SidebarComp.Item>
							)
						})}
					</SidebarComp.Group>
				)}
				<SidebarComp.Group className='pt-32'>
					{isAuthed && (
						<SidebarComp.Item
							id='logout'
							disabled={isPending}
							onClick={onClick}
						>
							<IconLogOut />
							<span>Log out</span>
						</SidebarComp.Item>
					)}
					{error && (
						<Typography
							as={'p'}
							variant={'h3'}
							className={'py-4 text-center text-danger-500'}
						>
							{error.message}
						</Typography>
					)}
				</SidebarComp.Group>
			</SidebarComp.Menu>
		</SidebarComp.Root>
	)
}