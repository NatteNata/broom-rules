import type { Metadata } from 'next'

import React from 'react'

import { AppHeader } from '@/components/header/AppHeader'
import { Wrapper } from '@/components/wrapper/Wrapper'

import '@/shared/styles/global.css'
import '@tornata/brooms-ui/style.css'

export const metadata: Metadata = {
  description: 'For a better world',
  title: 'Tornata | Be the change',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={'en'}>
      <body>
        <Wrapper className={'max-w-screen-2xl'}>
          <AppHeader />
          {children}
        </Wrapper>
      </body>
    </html>
  )
}
