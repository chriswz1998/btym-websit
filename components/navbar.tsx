'use client'

import { Logo } from '@/app/(marketing)/_components/logo'
import { Button } from '@/components/ui/button'
import { Globe2 } from 'lucide-react'
import Link from 'next/link'
import { DropdownMenuDemo } from '@/components/dropDown'

interface NavbarItem {
    label: string
    href: string
}

const navbarItem: NavbarItem[] = [ {
    label: '首页', href: '/'
}, {
    label: '客户案例', href: '/all_profiles'
}, {
    label: '移民省份', // 移民省份下先介绍省, 再介绍配套的移民项目
    href: ''
}, {
    label: '探索移民方式', // 移民省份下先介绍省, 再介绍配套的移民项目
    href: ''
}, {
    label: '打分工具', href: '/'
}, {
    label: '官方小程序', href: '/'
} ]

export const Navbar = ( { noBgModel }: { noBgModel?: boolean | undefined } ) => {
    return ( <div className={ `${ noBgModel ? 'w-full bg-mask-color5' : '' }` }>
            <div className={ `${ noBgModel && 'px-20' } min-[1980px]:w-[1980px] mx-auto` }>
                <div
                    className={ `flex justify-between` }>
                    <div className={ `flex items-center text-white ` }>
                        <Logo/>
                        { navbarItem.map( ( item, index ) => ( <blockquote key={ index }>
                                { item.label === '移民省份' ? ( <DropdownMenuDemo model={ 'province' }/> )
                                    : item.label === '探索移民方式' ? ( <DropdownMenuDemo model={ 'employers' }/> )
                                        : ( <Link href={ item?.href }>
                                    <Button
                                        className={ 'mr-6 text-[18px] font-light bg-transparent hover:bg-transparent hover:text-white border-0 hover:border-0' }
                                        variant={ 'outline' }> { item.label }
                                    </Button>
                                </Link> ) }
                            </blockquote>

                        ) ) }
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
