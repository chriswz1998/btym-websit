import React from 'react'
import { Navbar } from '@/components/navbar'
import Footer from '@/components/footer'

const MainLayout = async({ children }: { children: React.ReactNode }) => {
    return (<div
        className={ 'min-h-screen font-[\'Maven Pro\']' }>
        <Navbar noBgModel={ true }/>
        { children }
        <Footer has_dialog={ true }/>
    </div>)
}

export default MainLayout
