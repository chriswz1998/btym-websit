import React from 'react'
import { Navbar } from '@/components/navbar'
import Footer from '@/components/footer'
import { DialogCoverFrom } from '@/components/dialog'

const MainLayout = async( { children }: { children: React.ReactNode } ) => {
    return ( <div
            className={ 'min-h-screen font-[\'Maven Pro\']' }>
            <Navbar noBgModel={ true }/>
            { children }
            <div>
                <div
                    className={ 'w-full bg-mask-color5 text-white flex flex-col items-center justify-center' }>
                    <p className={ 'text-[48px] font-bold mt-24' }>移民项目太多，不知道哪个适合自己？</p>
                    <p className={ 'text-[48px] font-bold mb-16' }>博泰移民助力您的移民之路!</p>
                    <DialogCoverFrom dialog_model={ 'as' } variant={ 'destructive' }/>
                </div>
            </div>
            <Footer/>
        </div> )
}

export default MainLayout
