import type { Metadata } from 'next'
import { i18n } from '@/i18n-config'
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import '../globals.css';
import { getDictionary } from '@/lib/dictionaries'
import { Locale } from '@/i18n-config'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  return {
    title: `${dict.personal.name} | ${dict.personal.title}`,
    description: dict.personal.summary,
  }
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: { locale: string }
}) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
