'use client'

import { Logo } from '@/app/(marketing)/_components/logo'
import { Button } from '@/components/ui/button'
import { Globe2 } from 'lucide-react'
import { Navigation } from '@/components/navigation'

export const Navbar = ( { noBgModel }: { noBgModel?: boolean | undefined } ) => {
    return ( <div className={ `${ noBgModel ? 'w-full bg-mask-color5' : '' }` }>
            <div className={ `${ noBgModel && 'px-20' } min-[1980px]:w-[1980px] mx-auto` }>
                <div
                    className={ `flex justify-between` }>
                    <div className={ `flex items-center text-white ` }>
                        <Logo/>
                        <Navigation/>
                    </div>
                    { noBgModel || ( <div className={ 'flex items-center' }>
                        <Button
                            className={ 'text-[18px] px-12 py-6 text-default-blue bg-white hover:bg-white mr-10 font-light' }>登录</Button>
                        <Button
                            className={ 'bg-transparent hover:bg-transparent' }><Globe2/></Button>
                    </div> ) }
                </div>
            </div>
        </div>

    )
}
