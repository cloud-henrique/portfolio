import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import { Layout } from '@/components'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://claudiohenrique.vercel.app'),
  title: 'Cláudio Henrique',
  description: 'Desenvolvedor front-end e mobile - Portfolio pessoal',
  keywords: ['desenvolvedor', 'front-end', 'mobile', 'react', 'next.js', 'typescript'],
  authors: [{ name: 'Cláudio Henrique' }],
  creator: 'Cláudio Henrique',
  icons: {
    icon: [
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/apple-icon-57x57.png', sizes: '57x57' },
      { url: '/favicons/apple-icon-60x60.png', sizes: '60x60' },
      { url: '/favicons/apple-icon-72x72.png', sizes: '72x72' },
      { url: '/favicons/apple-icon-76x76.png', sizes: '76x76' },
      { url: '/favicons/apple-icon-114x114.png', sizes: '114x114' },
      { url: '/favicons/apple-icon-120x120.png', sizes: '120x120' },
      { url: '/favicons/apple-icon-144x144.png', sizes: '144x144' },
      { url: '/favicons/apple-icon-152x152.png', sizes: '152x152' },
      { url: '/favicons/apple-icon-180x180.png', sizes: '180x180' },
    ],
    other: [{ rel: 'icon', url: '/favicons/android-icon-192x192.png', sizes: '192x192', type: 'image/png' }],
  },
  manifest: '/favicons/manifest.json',
  alternates: {
    canonical: 'https://claudiohenrique.vercel.app',
  },
  openGraph: {
    title: 'Cláudio Henrique',
    description: 'Desenvolvedor front-end e mobile',
    url: 'https://claudiohenrique.vercel.app',
    siteName: 'Cláudio Henrique Portfolio',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt-br' suppressHydrationWarning>
      <head>
        <meta name='theme-color' content='#ffffff' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
      </head>
      <body className={inter.className}>
        <ThemeProvider enableSystem attribute='class'>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}
