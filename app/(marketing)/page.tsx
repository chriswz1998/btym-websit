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
      <div className={ 'w-full px-20' }>
        <Navbar/>
        <div className={ 'flex py-40' }>
          <div className={ 'w-1/2 relative' }>
            <Image src={ smail } alt={ 'smail' }
                   className={ 'absolute -top-20 -left-[60px]' }/>
            <div
                className="text-sky-500 text-[68px] font-semibold leading-[75px]">
              博泰移民
            </div>
            <div
                className="text-black text-[68px] font-semibold leading-[75px]">
              签证、留学、伙伴
            </div>
            <div
                className="mt-4 text-black text-opacity-80 text-2xl font-normal leading-10">
              完整签证解决方案提供方
            </div>
            <div className={ 'flex items-center pt-40' }>
              <Button className="bg-sky-500 hover:bg-sky-600 font-normal">
                开始顾问咨询
              </Button>
              <div className={ 'w-20' }/>
              <Button
                  className={ 'bg-transparent hover:bg-gray-100 font-normal text-black border' }>
                了解更多
                <ArrowRight className={ 'ml-4' }/>
              </Button>
            </div>

            <div className="pt-20">
              {
                checkItem.map((item: CheckItem, index: number) => {
                  return (
                      <div className={ 'flex items-center py-4 text-xl' }
                           key={ index }>
                        {
                          item.icon === 'Check'
                          ? (<Check
                              className={ 'mr-4  p-1  rounded-full bg-sky-300 text-sky-600' }/>)
                          : item.icon === 'ScrollText' ? (
                              <ScrollText
                                  className={ 'mr-4 p-1 rounded-full bg-sky-300 text-sky-600' }/>
                          ) : item.icon === 'Car' ? (
                              <Car
                                  className={ 'mr-4 p-1 rounded-full bg-sky-300 text-sky-600' }/>
                          ) : ''
                        }
                        <span>{ item.text }</span>
                      </div>
                  )
                })
              }
            </div>

          </div>
          <div className={ 'w-1/2 relative flex items-center justify-center' }>
            <Image src={ shape_one }
                   alt={ 'shape_one' }
                   className={ 'absolute top-10 left-10' }
            />
            <Image src={ shape_one }
                   alt={ 'shape_one' }
                   className={ 'absolute -bottom-20 right-40' }
            />
            <Image src={ shape_two }
                   alt={ 'shape_two' }
                   className={ 'absolute top-10 left-48 z-9' }
            />
            <Image src={ vector }
                   alt={ 'shape_three' }
                   className={ 'w-[700px] h-[700px] z-20' }
            />
            <div className={ 'absolute z-30' }>
              <div
                  className={ 'flex items-center bg-white px-3 py-2 border rounded-full mb-8' }>
                <Check
                    className={ 'mr-4  p-1  rounded-full bg-rose-500 text-white' }/>
                <span>微信、会议、短信咨询</span>
              </div>
              <div
                  className={ 'flex items-center bg-white px-3 py-2 border rounded-full mb-12 ml-8' }>
                <Search
                    className={ 'mr-4  p-1  rounded-full bg-yellow-400 text-white' }/>
                <span>微信、会议、短信咨询</span>
              </div>
              <div
                  className={ 'flex items-center bg-white px-3 py-2 border rounded-full' }>
                <MessageCircle
                    className={ 'mr-4  p-1  rounded-full bg-sky-500 text-white' }/>
                <span>微信、会议、短信咨询</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
