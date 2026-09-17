import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'English Loop',
  description: 'Watch. Listen. Read. Speak. Grow.'
}

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body>{children}</body></html>
}
