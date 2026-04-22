import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'LUMIS Medical Aesthetics | Precision. Confidence. Transformation.',
  description:
    'Board-certified medical aesthetics across 3 Florida locations. Non-surgical treatments including injectables, laser, body sculpting, IV therapy, and more.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} bg-[#080810]`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
