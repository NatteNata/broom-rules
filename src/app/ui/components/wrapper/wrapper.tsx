import { JSX, type ReactNode } from 'react'
import IntrinsicElements = JSX.IntrinsicElements

import { cn } from '@utils'

type Props = {
	children?: ReactNode
	className?: string
	as?: keyof IntrinsicElements
}

export function Wrapper({ children, className, as: Tag = 'div' }: Props) {
	return (
		<Tag className={cn('flex items-center justify-start', className)}>
			{children}
		</Tag>
	)
}