import { Building2, Mailbox, PhoneCall } from 'lucide-react'

const Footer = () => {
  return (
      <div className={ 'border-t' }>
        <div className={ 'py-20' }>
          <div className={ 'text-center' }>
            <div className={ 'text-4xl font-bold' }>联系我们</div>
            <div className={ 'text-2xl font-bold mt-4' }>我们将竭诚为您服务</div>
          </div>
          <div className={ 'grid grid-cols-3 gap-10 mt-20' }>
            <div className={ 'flex flex-col items-center' }>
              <div
                  className={ 'flex justify-center items-center w-20 h-20 rounded-full bg-[#F4F4F4]' }>
                <PhoneCall size={ 40 }/>
              </div>
              <div className={ 'text-2xl font-bold mt-10' }>联系电话</div>
              <div className={ 'text-xl mt-5' }>400-123-4567</div>
            </div>
            <div className={ 'flex flex-col items-center' }>
              <div
                  className={ 'flex justify-center items-center w-20 h-20 rounded-full bg-[#F4F4F4]' }>
                <Building2 size={ 40 }/>
              </div>
              <div className={ 'text-2xl font-bold mt-10' }>联系地址</div>
              <div className={ 'text-xl mt-5' }>北京市海淀区中关村大街1号</div>
            </div>
            <div className={ 'flex flex-col items-center' }>
              <div
                  className={ 'flex justify-center items-center w-20 h-20 rounded-full bg-[#F4F4F4]' }>
                <Mailbox size={ 40 }/>
              </div>
              <div className={ 'text-2xl font-bold mt-10' }>联系邮箱</div>
              <div className={ 'text-xl mt-5' }>
                scissorwz@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Footer
