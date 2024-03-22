import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
      <body className="bg-fixed bg-cover p-5 bg-[url('../public/images/computer-program-coding-screen.jpg')] backdrop-blur">
        {children}
      </body>
    </html>
  )
}
