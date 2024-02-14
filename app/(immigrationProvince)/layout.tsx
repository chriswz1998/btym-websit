import React from 'react'
import { Navbar } from '@/components/navbar'
import Footer from '@/components/footer'

const MainLayout = async({ children }: { children: React.ReactNode }) => {
    return (<div>
        { children }
        <Footer/>
    </div>)
}

export default MainLayout
