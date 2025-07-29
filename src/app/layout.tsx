import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Soham Sandip Satre - Portfolio',
  description: 'Recent BCS graduate passionate about technology and eager to start my career in the IT sector',
  keywords: ['portfolio', 'BCS graduate', 'developer', 'java', 'python', 'fresh graduate', 'IT professional'],
  authors: [{ name: 'Soham Sandip Satre' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-white transition-colors">
        <ThemeProvider>
          <Header />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
