import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import DemoControls from '@/components/DemoControls'

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
      <body className="bg-bg-primary">
        <Header />
        {children}
        <DemoControls />
      </body>
    </html>
  )
}
