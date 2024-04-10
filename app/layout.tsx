import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Modal from './components/Modal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Curriculum Vitae',
  description: 'CV realizado en Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-fixed bg-cover bg-[url('../public/images/background.jpg')] backdrop-blur max-lg:p-0">
        {children}
      </body>
    </html>
  )
}
