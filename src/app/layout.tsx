import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MenuPRO - Digital Menu Platform for Restaurants | QR Code Ordering System',
  description: 'Transform your restaurant with MenuPRO\'s digital ordering solution. No commission fees, just $19/month. QR code ordering, real-time management, and analytics for modern restaurants.',
  keywords: 'digital menu, QR code ordering, restaurant technology, digital ordering system, restaurant management, no commission fees, restaurant POS, online ordering',
  authors: [{ name: 'MenuPRO Team' }],
  creator: 'MenuPRO',
  publisher: 'MenuPRO',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://menupro.app',
    siteName: 'MenuPRO',
    title: 'MenuPRO - Digital Menu Platform for Restaurants',
    description: 'Transform your restaurant with MenuPRO\'s digital ordering solution. No commission fees, just $19/month. QR code ordering, real-time management, and analytics.',
    images: [
      {
        url: '/menupro-logo.png',
        width: 1200,
        height: 630,
        alt: 'MenuPRO Digital Menu Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MenuPRO - Digital Menu Platform for Restaurants',
    description: 'Transform your restaurant with MenuPRO\'s digital ordering solution. No commission fees, just $19/month.',
    images: ['/menupro-logo.png'],
    creator: '@menupro',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
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
