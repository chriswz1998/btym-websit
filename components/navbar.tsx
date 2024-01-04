'use client'

import { Logo } from '@/app/(marketing)/_components/logo'
import { Navigation } from '@/components/navigation'

export const Navbar = ({ noBgModel }: { noBgModel?: boolean | undefined }) => {
    return (<div className={ 'w-full bg-mask-color5' }>
            <div className={ `px-20 min-[1980px]:w-[1980px] mx-auto` }>
                <div
                    className={ `flex justify-between` }>
                    <div className={ `flex items-center text-white ` }>
                        <Logo/>
                        <Navigation/>
                    </div>
                </div>
            </div>
        </div>

    )
}
