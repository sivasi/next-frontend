import './globals.css'
import { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import React, { Suspense } from 'react';
import Loading from '@/components/loading';

export const metadata = {
  title: 'Blog Website',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-gray-50 dark:bg-gray-900'>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <main className="container  mx-auto p-4">{children}</main>
        </Suspense>
      </body>
    </html>
  )
}
