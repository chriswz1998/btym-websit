import React from 'react'
// import { Navbar } from '@/app/(marketing)/_components/navbar'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
      <main className={ 'min-h-screen' }>
        { children }
      </main>
  )
}

export default MainLayout
