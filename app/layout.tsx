import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CompAI - AI-Powered Property Comparison & Valuation Tool',
  description: 'Find Property Comps 10x Faster & Easier with AI. The data-driven way to calculate, compare, and close deals.',
  keywords: 'real estate, property comparison, AI valuation, comps, real estate agents, property analysis',
  authors: [{ name: 'CompAI Team' }],
  openGraph: {
    title: 'CompAI - AI-Powered Property Comparison & Valuation Tool',
    description: 'Find Property Comps 10x Faster & Easier with AI. The data-driven way to calculate, compare, and close deals.',
    url: 'https://compai.vercel.app',
    siteName: 'CompAI',
    images: [
      {
        url: 'https://compai.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CompAI - AI-Powered Property Comparison',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CompAI - AI-Powered Property Comparison & Valuation Tool',
    description: 'Find Property Comps 10x Faster & Easier with AI. The data-driven way to calculate, compare, and close deals.',
    images: ['https://compai.vercel.app/og-image.png'],
  },
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
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              duration: 5000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  )
}
