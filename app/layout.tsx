import type { Metadata } from 'next'
import './globals.css'

import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'ProfessionalTires: Los mejores neumáticos para tu vehículo',
  description: 'Calidad, seguridad y rendimiento para tu vehículo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
