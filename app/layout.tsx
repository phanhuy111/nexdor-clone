import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { I18nProvider } from "./providers/i18n-provider"
import FixedActionButtons from "@/components/ui/fixed-action-buttons"
import './globals.css'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nexdor Solutions",
  description: "Growth-driven value for your business",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <I18nProvider>
          {children}
          <FixedActionButtons />
        </I18nProvider>
      </body>
    </html>
  )
}


