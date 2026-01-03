import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CrazyGames Premium Demo',
  description: 'Static clickthrough demo for CrazyGames Premium conversion flow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black m-0 p-0" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
