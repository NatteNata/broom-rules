import { Sidebar } from 'lucide-react'
import type React from 'react'

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<div className='flex'>
				<Sidebar />
				{children}
			</div>
		</>
	)
}
