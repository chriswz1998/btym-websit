import React from 'react'
import Footer from '@/components/footer'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (<div
        suppressHydrationWarning={ true }>
        { children }
        <Footer/>
    </div>)
}

export default MainLayout
