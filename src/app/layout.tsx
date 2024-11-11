import type { Metadata } from 'next'

import React from 'react'

import { AppHeader } from '@/components/header/AppHeader'
import { Wrapper } from '@/components/wrapper/Wrapper'

import '@tornata/brooms-ui/style.css'
import '@/styles/globals.css'

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
        <Wrapper>
          <AppHeader />
          {children}
        </Wrapper>
      </body>
    </html>
  )
}
