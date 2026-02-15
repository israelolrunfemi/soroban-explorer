import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Soroban Explorer | Premium Smart Contract Analytics',
  description: 'The most advanced explorer for Soroban smart contracts on Stellar. Discover, analyze, and interact with Web3 contracts.',
  keywords: ['stellar', 'soroban', 'blockchain', 'smart contracts', 'web3', 'defi'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  )
}
