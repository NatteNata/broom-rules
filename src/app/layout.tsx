import type { Metadata } from 'next'

import React from 'react'

import { Header } from '@/components/Header'

import '../styles/globals.css'
import 'broom-rules-ui/css'

export const metadata: Metadata = {
  description: 'Making every home sweet',
  title: 'My broom rules',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={'en'}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
