'use client'

import { useScrollTop } from '@/hooks/use-scrool-top'
import { cn } from '@/lib/utils'
import { Logo } from '@/app/(marketing)/_components/logo'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Globe, Globe2 } from 'lucide-react'

interface NavbarItem {
  label: string
  href: string
}

interface NavbarSocialMedia {
  src: string
  alt: string
}

const navbarItem: NavbarItem[] = [
  {
    label: '首页',
    href: '/'
  },
  {
    label: '打分工具',
    href: '/'
  }, {
    label: '关于我们',
    href: '/'
  },
  {
    label: '服务流程',
    href: '/'
  },
  {
    label: '客户案例',
    href: '/'
  },
  {
    label: '官方小程序',
    href: '/'
  },
  {
    label: '联系我们',
    href: '/'
  }
]

export const Navbar = () => {
  const scrolled = useScrollTop()
  return (
      <div>
        <div className={ 'flex items-center justify-between py-10' }>
          <div className={ 'flex items-center text-white' }>
            <Logo/>
            {
              navbarItem.map((item, index) => (
                  <div className={ 'text-[18px] px-6 ml-2 cursor-pointer' }
                       key={ index }>
                    { item.label }
                  </div>
              ))
            }
          </div>
          <div className={ 'flex items-center' }>
            <Button
                className={ 'text-[18px] px-12 py-6 text-default-blue bg-white hover:bg-white mr-10 font-light' }>登录</Button>
            <Button
                className={ 'bg-transparent hover:bg-transparent' }><Globe2/></Button>
          </div>
        </div>
      </div>
  )
}
