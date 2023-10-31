'use client'

import { useScrollTop } from '@/hooks/use-scrool-top'
import { cn } from '@/lib/utils'
import { Logo } from '@/app/(marketing)/_components/logo'
import { Button } from '@/components/ui/button'

interface NavbarItem {
  label: string
  href: string
}

const navbarItem: NavbarItem[] = [
  {
    label: '主页',
    href: '/'
  },
  {
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
    label: '官方微博',
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
      <div className={ cn(
          'z-50 bg-blue-300 fixed top-0 flex items-center p-8 ',
          scrolled && 'border-b shadow-sm'
      ) }>
        <Logo/>
        <div className="flex justify-center items-center ml-3">
          {
            navbarItem.map((item, index) => (
                <Button variant="ghost" key={ index }>{ item.label }</Button>
            ))
          }
        </div>
      </div>
  )
}
