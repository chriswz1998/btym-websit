import React from 'react'
import { Navbar } from '@/components/navbar'
import Footer from '@/components/footer'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { DialogCoverFrom } from '@/components/dialog'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
      <div
          suppressHydrationWarning={ true }
          className={ 'min-h-screen font-[\'Maven Pro\']' }>
        <Navbar noBgModel={ true }/>
        <div className={ 'w-full flex items-center justify-center' }>
          <Image src={ '/banner.png' } alt={ '' } width={ 0 }
                 height={ 0 }
                 sizes="100vw"
                 style={ { width: '100%', height: 'auto' } }/>
        </div>
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
      </div>
  )
}

export default MainLayout
