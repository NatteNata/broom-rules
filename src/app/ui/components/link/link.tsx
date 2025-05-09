import type * as React from 'react'

import NextLink from 'next/link'
import type { ComponentProps } from 'react'

type Props = {
	children: React.ReactNode
	className?: string
	href: string
} & ComponentProps<typeof NextLink>

export const Link = ({ children, className, href, ...props }: Props) => {
	return (
		<NextLink
			className={`inline-flex items-center justify-center ${className}`}
			href={href}
			{...props}
		>
			{children}
		</NextLink>
	)
}
