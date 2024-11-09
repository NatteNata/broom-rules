import * as React from 'react'

import Link from 'next/link'

type Props = {
  children: React.ReactNode
  className?: string
  href: string
}

export const A = ({ children, className, href }: Props) => {
  return (
    <Link className={`inline-flex items-center justify-center ${className}`} href={href}>
      {children}
    </Link>
  )
}
