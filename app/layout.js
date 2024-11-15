"use client"
import { Inter,Outfit } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from '@/components/ui/sonner'
import { useState } from 'react'

const inter = Outfit({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const [isMember,setIsMember]=useState(false);
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}
        <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}
