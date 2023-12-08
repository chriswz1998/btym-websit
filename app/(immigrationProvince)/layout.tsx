import React from 'react'
import { Navbar } from '@/components/navbar'
import Footer from '@/components/footer'
import { DialogCoverFrom } from '@/components/dialog'
import { Title } from '@/components/Title'

const MainLayout = async({ children }: { children: React.ReactNode }) => {
    return (<div
        className={ 'min-h-screen font-[\'Maven Pro\']' }>
        <Navbar noBgModel={ true }/>
        { children }
        <div
            className={ 'w-full bg-[#EBF2FC] text-center py-20 text-[#11437F] space-y-24' }>
            <div>
                <Title size={ 50 } bold={ true } center={ true } title={ '移民项目太多，不知道哪个适合自己' }/>
                <Title size={ 50 } bold={ true } center={ true } title={ '博泰移民助力您的移民之路!' }/>
            </div>
            <DialogCoverFrom dialog_model={ 'as' } variant={ 'destructive' }/>
        </div>
        <Footer/>
    </div>)
}

export default MainLayout
