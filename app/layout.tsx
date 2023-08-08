import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import { cn } from '@/lib/utils'

import Providers from '../components/Provider'
import { cn } from '../lib/utils'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'We Been Asked.',
  description: 'Explore and ace your interviews',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className )} >
        <Providers>
          <Navbar />

           {children}

        </Providers>

        
        </body>
    </html>
  )
}
