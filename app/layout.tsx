import type { Metadata } from 'next'
import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'

const sans = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans-var',
  display: 'swap',
})

const mono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-mono-var',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zachariah Dellimore · Software Engineer',
  description:
    'Software engineer at Telus Digital. Backend services, side projects, and the occasional Game Boy emulator. Richmond, VA.',
  openGraph: {
    title: 'Zachariah Dellimore · Software Engineer',
    description:
      'Software engineer at Telus Digital. Backend services, side projects, and the occasional Game Boy emulator.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
