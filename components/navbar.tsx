'use client'

import { useScrollTop } from '@/hooks/use-scrool-top'
import { Logo } from '@/app/(marketing)/_components/logo'
import { Button } from '@/components/ui/button'
import { Globe2 } from 'lucide-react'
import Link from 'next/link'

interface NavbarItem {
  label: string
  href: string
}

const navbarItem: NavbarItem[] = [
  {
    label: '首页',
    href: '/'
  },
  {
    label: '客户案例',
    href: '/all_profiles'
  },
  {
    label: '移民省份', // 移民省份下先介绍省, 再介绍配套的移民项目
    href: '/'
  },
  {
    label: '打分工具',
    href: '/'
  },
  // {
  //   label: '关于我们',
  //   href: '/'
  // },
  {
    label: '官方小程序',
    href: '/'
  }
]

export const Navbar = ({ noBgModel }: { noBgModel?: boolean | undefined }) => {
  return (
      <div
          className={ `${ noBgModel
                          ? 'py-1 bg-mask-color4 flex items-center'
                          : 'py-6' }` }>
        <div className={ `${ noBgModel &&
        'max-[1980px]:w-[1980px] mx-auto' } flex justify-between` }>
          <div className={ `flex items-center text-white` }>
            <Logo/>
            {
              navbarItem.map((item, index) => (
                  <Link href={ item.href } key={ index }>
                    <div className={ 'text-[18px] px-6 ml-2 cursor-pointer' }>
                      { item.label }
                    </div>
                  </Link>

              ))
            }
          </div>
          {
              noBgModel || (<div className={ 'flex items-center' }>
                <Button
                    className={ 'text-[18px] px-12 py-6 text-default-blue bg-white hover:bg-white mr-10 font-light' }>登录</Button>
                <Button
                    className={ 'bg-transparent hover:bg-transparent' }><Globe2/></Button>
              </div>)
          }
        </div>
      </div>
  )
}
