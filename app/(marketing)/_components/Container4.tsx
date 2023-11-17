import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronsRight, MessageSquare } from 'lucide-react'

const Container4 = () => {
  return (
      <div className={'flex mb-40'}>
        <div className={'flex pt-52 pr-10'}>
          <div className={'w-full'}>
            <h1 className={ 'text-[60px] font-bold' }>位于温哥华的资深移民公司</h1>
            <p className={'text-description-text-color text-[24px] pr-44 pt-10 pb-20'}>我们有着多年加拿大移民、
              留学经验，近年来移民与留学的难度越来越高，
              我们扩展了一批优质切快速的移民留学通道,
              由专业的持牌顾问一对一咨询指导,保障您的梦想
            </p>
            <Button
                className={ 'text-[24px] px-14 py-8 text-white bg-default-blue hover:bg-default-blue font-light' }>
              查看更多案例和评价
              <ChevronsRight className={ 'ml-2' }/>
            </Button>
          </div>
          <div className={'w-[550px] h-[400px] overflow-hidden rounded-lg bg-[url("/62035b84efeec66b4bc2008d.png")] bg-[length:560px_400px] bg-no-repeat'}>
            <div className={'bg-mask-color w-full h-full'} />
          </div>
        </div>
        <div className={'pt-24'}>
          <div className={'w-[400px] h-[400px] overflow-hidden rounded-lg bg-[url("/62035b82e27e8c42e53e8e1e.png")] bg-[length:560px_400px] bg-no-repeat'}>
            <div className={'bg-mask-color w-full h-full'} />
          </div>
          <div className={'mt-10 w-[400px] h-[200px] overflow-hidden rounded-lg bg-[url("/62035b839215f14aa6a16168.png")] bg-[length:560px_400px] bg-no-repeat'}>
            <div className={'bg-mask-color w-full h-full'} />
          </div>
        </div>
      </div>

  )
}

export default Container4
