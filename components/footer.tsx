import { Building2, Mailbox, PhoneCall } from 'lucide-react'
import { Title } from '@/components/Title'
import { Margin20_box } from '@/components/margin20_box'
import { DialogCoverFrom } from '@/components/dialog'
import React from 'react'

const Footer = ({ has_dialog }: { has_dialog?: boolean }) => {
    return (<div>
        { has_dialog ? (<div className={ 'space-y-14 py-14 bg-[#11437F] text-center' }>
                <div>
                    <Title className={ 'text-white' } size={ 50 } bold={ true } center={ true }
                           title={ '移民项目太多，不知道哪个适合自己？' }/>
                    <Title className={ 'text-white' } size={ 50 } bold={ true } center={ true }
                           title={ '博泰移民助力您的移民之路!' }/>
                </div>
                <DialogCoverFrom dialog_model={ 'as' } variant={ 'destructive' }/>
            </div>) : null }


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
