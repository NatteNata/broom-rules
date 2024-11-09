import { ReactNode } from 'react'

import { cn } from '../../../../broom-rules-ui/src/utils/merge-class-names'

type Props = {
  children?: ReactNode
  className?: string
}

export default function Wrapper({ children, className }: Props) {
  return <div className={cn('container mx-auto min-h-screen px-2', className)}>{children}</div>
}
