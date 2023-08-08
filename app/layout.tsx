import Footer from '@/components/footer'
import './globals.css'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import Navbar from '@/components/navbar'
import { cn } from '@/lib/utils'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ecommerce-front-2',
  description: 'store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(font.className, "bg-slate-400")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
