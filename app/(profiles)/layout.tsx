import React from 'react'
import { Navbar } from '@/components/navbar'
import Footer from '@/components/footer'
import Image from 'next/image'
const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            suppressHydrationWarning={ true }
            className={ 'min-h-screen max-w-[1580px] mx-auto font-[\'Maven Pro\']' }>
            <Navbar noBgModel={ true }/>
            <div className={ 'w-full flex items-center justify-center' }>
                <Image src={ 'https://i.ibb.co/rQpsVHQ/ibg.png' } alt={ '' } width={ 0 }
                       height={ 0 }
                       sizes="100vw"
                       style={ { width: '100%', height: 'auto' } }/>
            </div>
            { children }
            <Footer has_dialog={true}/>
        </div>
    )
}

export default MainLayout
