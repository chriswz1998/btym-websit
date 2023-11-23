import { AtSign, MapPinned, PhoneCall } from 'lucide-react'
import { CustomerApplicationFrom } from '@/components/custoemr.application.from'

const Container8 = () => {

  return (
      <div
          className={ 'w-full flex' }>
        <div className={ 'w-1/2 p-20 shadow-[0_6px_30px_rgba(0,0,0,0.12)] rounded-md overflow-hidden' }>
          <div>
            <p className={ 'text-[62px]' }>
              我们来谈谈
            </p>
            <p className={ 'w-[550px] text-[22px] font-light mt-5' }>
              我们愿意与优秀的人交流。只要打个招呼，我们就能开始富有成效的合作。开始您自己的成功故事
            </p>
          </div>
          <div className={ 'mt-80' }>
            <div className={ 'text-[27px]' }>
              <p className={ ' flex items-center' }>
                <MapPinned className={ 'mr-4' }/>
                公司地址:
              </p>
              <p className={ 'w-[600px]' }>
                1234 Web Template Street Tech villeWebapi 54321 Virtual World
              </p>
            </div>
            <div className={ 'h-[50px]' }/>
            <div className={ 'text-[27px]' }>
              <p className={ 'flex items-center' }>
                <AtSign className={ 'mr-4' }/>
                邮箱地址:
              </p>
              <p className={ 'w-[600px]' }>
                scissorwz@gmail.com
              </p>
            </div>
            <div className={ 'h-[50px]' }/>
            <div className={ 'text-[27px]' }>
              <p className={ 'flex items-center' }>
                <PhoneCall className={ 'mr-4' }/>
                邮箱地址:
              </p>
              <p className={ 'w-[600px]' }>
                scissorwz@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className={'w-[100px]'}/>
        <div
            className={ 'w-1/2 flex justify-center items-center shadow-[0_6px_30px_rgba(0,0,0,0.12)] rounded-md overflow-hidden' }>
          <div className={ 'bg-white w-2/3 p-14 rounded-lg' }>
            <CustomerApplicationFrom/>
          </div>
        </div>
      </div>
  )
}

export default Container8
