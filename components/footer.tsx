import { Building2, Mailbox, PhoneCall } from 'lucide-react'
import { Title } from '@/components/Title'
import { Margin20_box } from '@/components/margin20_box'

const Footer = () => {
    return (<div>
        <Title size={ 50 } title={ '联系我们' } title_en={ '我们将竭诚为您服务' } en_size={ 24 } center={ true }
               height={ 24 } bold={ true }/>
        <Margin20_box className={ 'mb-24 flex justify-between' }>
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
        </Margin20_box>

    </div>)
}

export default Footer
