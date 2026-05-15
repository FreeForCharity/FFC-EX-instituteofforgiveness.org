import type { Metadata } from 'next'
import './globals.css'
import Header from './../components/header'
import Footer from './../components/footer'
import CookieConsent from './../components/cookie-consent'
import GoogleTagManager, { GoogleTagManagerNoScript } from './../components/google-tag-manager'
import {
  openSans,
  lato,
  raleway,
  faustina,
  cantataOne,
  faunaOne,
  montserrat,
  cinzel,
} from '@/lib/fonts'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  metadataBase: new URL('https://instituteofforgiveness.org'),
  title: {
    default: 'Institute of Forgiveness | Ending Mass Incarceration Through Forgiveness',
    template: '%s | Institute of Forgiveness',
  },
  description:
    'The Institute of Forgiveness is a Richmond, Virginia mentoring institute working toward juvenile and criminal justice reform — providing trade training, re-entry services, and startup assistance for those with current or previous justice involvement.',
  keywords: [
    'Institute of Forgiveness',
    'criminal justice reform',
    'juvenile justice reform',
    're-entry services',
    'Richmond Virginia nonprofit',
    'Sheba Williams',
    'Nolef Turns',
    'barbering trade program',
    'mentoring',
    'recidivism',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://instituteofforgiveness.org/',
    siteName: 'Institute of Forgiveness',
    title: 'Institute of Forgiveness | Ending Mass Incarceration Through Forgiveness',
    description:
      'Mentoring, trade training, and re-entry services for those with juvenile and criminal justice involvement in Richmond, VA.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Institute of Forgiveness',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ioforgiveness',
    title: 'Institute of Forgiveness',
    description:
      'Mentoring, trade training, and re-entry services for those with juvenile and criminal justice involvement.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: '32x32' },
      { url: `${basePath}/icon.png`, type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: `${basePath}/apple-icon.png`, sizes: '180x180', type: 'image/png' }],
  },
  manifest: `${basePath}/site.webmanifest`,
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://donorbox.org" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://donorbox.org" />

        <GoogleTagManager />
      </head>
      <body
        className={[
          'antialiased',
          openSans.variable,
          lato.variable,
          raleway.variable,
          faustina.variable,
          cantataOne.variable,
          faunaOne.variable,
          montserrat.variable,
          cinzel.variable,
        ].join(' ')}
        suppressHydrationWarning={true}
      >
        <GoogleTagManagerNoScript />
        <Header />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
}
