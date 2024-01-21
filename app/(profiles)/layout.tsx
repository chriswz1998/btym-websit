import React from 'react'
import { Navbar } from '@/components/navbar'
import Footer from '@/components/footer'
const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            suppressHydrationWarning={ true }
            className={ 'min-h-screen max-w-[1580px] mx-auto font-[\'Maven Pro\']' }>
            <Navbar noBgModel={ true }/>
            <div className={ 'w-full flex items-center justify-center' }>
                <img src={ 'https://i.ibb.co/rQpsVHQ/ibg.png' } alt={ '' } className={ 'w-full h-[600px] block' }/>

            </div>
            { children }
            <Footer has_dialog={ true }/>
        </div>
    )
}

export default MainLayout
