import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'English Loop',
  description: 'Watch. Listen. Read. Speak. Grow.',
  manifest: '/manifest.webmanifest'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `if ('serviceWorker' in navigator) { window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js')) }`
          }}
        />
      </body>
    </html>
  )
}
