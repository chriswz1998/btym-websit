'use client'

import { useScrollTop } from '@/hooks/use-scrool-top'
import { cn } from '@/lib/utils'
import { Logo } from '@/app/(marketing)/_components/logo'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

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
const navbarSocialMedia: NavbarSocialMedia[] = [
  {
    src: './twitter.svg',
    alt: 'twitter'
  },
  {
    src: './instagram.svg',
    alt: 'instagram'
  },
  {
    src: './facebook.svg',
    alt: 'facebook'
  }
]

export const Navbar = () => {
  const scrolled = useScrollTop()
  return (
      <div
          className={ 'flex justify-between py-6 sticky top-0 z-50 bg-white' }>
        <div className={ 'flex items-center' }>
          <Logo/>
          <div className="flex justify-center items-center ml-3">
            {
              navbarItem.map((item, index) => (
                  <Button variant="ghost" key={ index }>{ item.label }</Button>
              ))
            }
          </div>
        </div>
        <div className={ 'flex items-center' }>
          {
            navbarSocialMedia.map((item: NavbarSocialMedia, index: number) => {
              return (
                  <Button variant="ghost" key={ index }>{
                    <Image
                        key={ index }
                        src={ item.src }
                        alt={ item.alt }
                        width={ 20 }
                        height={ 20 }
                    />
                  }</Button>
              )
            })
          }
        </div>
      </div>
  )
}
