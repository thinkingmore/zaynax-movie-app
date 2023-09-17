import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Footer from '@/components/Footer'
import Head from 'next/head'



const montserrat = Montserrat({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic',],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dramatic',
  description: 'A movie searching app built with next.js and tmdb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <body className={montserrat.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
