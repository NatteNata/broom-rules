import { ReactNode } from 'react'

import { cn } from '@/utils'

type Props = {
  children?: ReactNode
  className?: string
}

export function Wrapper({ children, className }: Props) {
  return <div className={cn('container mx-auto min-h-screen px-2', className)}>{children}</div>
}
