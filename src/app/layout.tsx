import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MenuPRO Landing Page',
  description: 'Modern restaurant menu management and ordering system',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/menupro-logo.png',
    apple: '/menupro-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
