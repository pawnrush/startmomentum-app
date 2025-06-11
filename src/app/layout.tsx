// File: app/layout.tsx

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// This line configures the Inter font
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Startmomentum.app | Behavior Data Collection for Education',
  description: 'Empowering educators, clinicians, and families with precise, real-time behavior data.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* This className applies the Inter font to the whole site */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}