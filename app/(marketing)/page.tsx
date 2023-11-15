import { Navbar } from '@/app/(marketing)/_components/navbar'
import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  Car,
  Check, MessageCircle,
  MessagesSquare,
  ScrollText,
  Search
} from 'lucide-react'
import Image from 'next/image'
import smail from '@/public/smail.svg'
import shape_one from '@/public/shape_one.svg'
import shape_two from '@/public/shape_two.svg'
import vector from '@/public/Vector.png'
import ContainerO from '@/app/(marketing)/_components/ContainerO'
import ContainerT from '@/app/(marketing)/_components/ContainerT'
import Container3 from '@/app/(marketing)/_components/Container3'

interface CheckItem {
  icon: string
  text: string
}

const checkItem: CheckItem[] = [
  {
    icon: 'Check',
    text: '免费一对一咨询'
  },
  {
    icon: 'ScrollText',
    text: '签证方案提供'
  },
  {
    icon: 'Car',
    text: '登陆安家服务'
  }
]

export default function MarketingPage() {
  return (
      <div>
        <div
            className={ 'bg-[url("/bg1.jpeg")] bg-cover bg-no-repeat ' }>
          <div className={ 'bg-mask-bg w-full h-full' }>
            <div className={ 'px-20 min-[1980px]:w-[1980px] mx-auto' }>
              <Navbar/>
              <ContainerO/>
            </div>
          </div>
        </div>
        <div className={ 'px-20 min-[1980px]:w-[1980px] mx-auto' }>
          <ContainerT/>
          <Container3/>
        </div>
      </div>

  )
}
