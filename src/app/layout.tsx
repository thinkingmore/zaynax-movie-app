import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/Footer'



const montserrat = Montserrat({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
