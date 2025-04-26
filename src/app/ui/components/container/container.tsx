import { JSX, type ReactNode } from 'react'
import IntrinsicElements = JSX.IntrinsicElements

import { cn } from '@/use-cases/utils'

type Props = {
	children?: ReactNode
	className?: string
	as?: keyof IntrinsicElements
	fullHeight?: boolean
}

export function Container({
	children,
	className,
	as: Tag = 'section',
	fullHeight = true,
}: Props) {
	return (
		<Tag
			className={cn(
				'm-auto w-full p-4',
				'max-w-screen-xl',
				fullHeight && 'min-h-screen',
				className,
			)}
		>
			{children}
		</Tag>
	)
}