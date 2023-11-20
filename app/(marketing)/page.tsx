import { Navbar } from '@/app/(marketing)/_components/navbar'
import ContainerO from '@/app/(marketing)/_components/ContainerO'
import ContainerT from '@/app/(marketing)/_components/ContainerT'
import Container3 from '@/app/(marketing)/_components/Container3'
import Container4 from '@/app/(marketing)/_components/Container4'
import Container5 from '@/app/(marketing)/_components/Container5'
import Container6 from '@/app/(marketing)/_components/Container6'
import Container7 from '@/app/(marketing)/_components/Container7'
import Container8 from '@/app/(marketing)/_components/Container8'
import Container9 from '@/app/(marketing)/_components/Container9'
import Container10 from '@/app/(marketing)/_components/Container10'

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
          <Container4/>
          <Container5/>
          <Container6/>
          <Container7/>
          <Container8/>
          <Container9/>
          <Container10/>
        </div>
      </div>

  )
}
