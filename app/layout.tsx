import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import PremiumToggle from '@/components/PremiumToggle'

export const metadata: Metadata = {
  title: 'CrazyGames Premium Demo',
  description: 'Interactive demo showcasing CrazyGames Premium subscription model',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900">
        <Header />
        {children}
        <PremiumToggle />
      </body>
    </html>
  )
}
