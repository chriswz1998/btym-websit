import React from 'react'
import { Navbar } from '@/components/navbar'
import Footer from '@/components/footer'

const MainLayout = async({ children }: { children: React.ReactNode }) => {
    return (<div
        className={ 'min-h-screen  max-w-[1580px] mx-auto font-[\'Maven Pro\']' }>
        <Navbar/>
        { children }
        <Footer/>
    </div>)
}

export default MainLayout
