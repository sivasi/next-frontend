import './globals.css'
import { ReactNode } from 'react'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Blog Website',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-gray-50 dark:bg-gray-900'>
        <Navbar />
        <main className="container  mx-auto p-4">{children}</main>
      </body>
    </html>
  )
}
