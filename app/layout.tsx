import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Soroban Explorer - Smart Contract Analytics for Stellar',
  description: 'Explore and analyze Soroban smart contracts on the Stellar network',
  keywords: ['stellar', 'soroban', 'blockchain', 'smart contracts', 'crypto'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
