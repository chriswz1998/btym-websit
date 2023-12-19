import React from 'react'
import Footer from '@/components/footer'
import { Main_c } from '@/app/(marketing)/_components/main_c'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (<div
        suppressHydrationWarning={ true }
        className={ 'min-h-screen font-[\'Maven Pro\']' }>
        {/*<Main_c/>*/}
        { children }
        <Footer/>
    </div>)
}

export default MainLayout
