import React from 'react'
import Footer from '@/components/footer'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (<div
        suppressHydrationWarning={ true }
        className={ 'min-h-screen max-w-[1580px] mx-auto font-[\'Maven Pro\']' }>
        { children }
        <Footer/>
    </div>)
}

export default MainLayout
