'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import { ToastProvider } from '@/components/providers/toast-privider'
import {NavProvider} from "@/context/nav-context";
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" suppressHydrationWarning={true}>
      <body className={ inter.className } suppressHydrationWarning={true}>
      <title>博泰移民</title>
          <ToastProvider/>
          <NavProvider>
              { children }
          </NavProvider>

      </body>
      </html>
  )
}
