
import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers';
import { Header } from './components/header';


export const metadata: Metadata = {
  title: 'Mi Portafolio',
  description: 'Sobre mi.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className='dark'>
        <body>
          <Providers>{children}</Providers>
        </body>
      </html>
  )
}
