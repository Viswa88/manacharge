import type { Metadata, Viewport } from 'next'
import { Manrope, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.manacharge.in'),
  title: {
    default: 'ManaCharge — Powering Every Village',
    template: '%s | ManaCharge',
  },
  description:
    "Building India's largest Village EV Support Network through charging infrastructure, EV service support, solar energy, and local employment.",
  keywords: [
    'EV India',
    'rural EV',
    'village charging stations',
    'solar charging',
    'EV survey',
    'electric vehicle India',
    'ManaCharge',
  ],
  authors: [{ name: 'ManaCharge' }],
  openGraph: {
    title: 'ManaCharge — Powering Every Village',
    description:
      "Building India's Rural EV Ecosystem through Charging Infrastructure, EV Service Support, Solar Energy, and Local Employment.",
    url: 'https://www.manacharge.in',
    siteName: 'ManaCharge',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ManaCharge — Powering Every Village',
    description: "Building India's Rural EV Ecosystem.",
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body className={`${manrope.variable} ${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
