import { Logo } from '@/app/(marketing)/_components/logo'
import { LucideMailbox, MapPin, Phone } from 'lucide-react'
import Image from "next/image";

const Footer = () => {
    return (<div className={ 'bg-mask-color5 grid grid-cols-3 text-white px-10 py-20' }>
        <div className='grid-cols-1 px-5 space-y-4'>
            <Logo/>
            <p>
                博泰移民 ( BoTa Visa )
                <br/>
                是一家致力于为个人和家庭提供专业移民服务的领先机构。
                我们以多年的经验和深厚的专业知识，为客户提供全面的移民解决方案，助力他们实现全球范围内的移民梦想。
            </p>
        </div>

        <div className='grid-cols-1 space-y-6'>
            <div className='font-bold text-4xl'>联系我们</div>

            <div className='flex space-x-8'>
                <div className={'text-center'}>
                    <Image src={'/qrcoe1.webp'} alt={''} height={100} width={100}/>
                    <span className={'pt-4 block'}>联系微信</span>
                </div>
                <div className={'text-center'}>
                    <Image src={'/qrcoe1.webp'} alt={''} height={100} width={100}/>
                    <span className={'pt-4 block'}>博泰公众号</span>
                </div>
                <div className={'text-center'}>
                    <Image src={'/qrcoe1.webp'} alt={''} height={100} width={100}/>
                    <span className={'pt-4 block'}>博泰小程序</span>
                </div>
            </div>


        </div>

        <div className='grid-cols-1 space-y-6'>
            <div className='font-bold text-4xl'>公司地址</div>
            <div className={'space-y-4'}>
                <div className={'flex space-x-3 '}>
                    <MapPin/>
                    <span>1174 Pembina Hwy Winnipeg, MB R3T 2A4,</span>
                </div>
                <div className={'flex space-x-3'}>
                    <LucideMailbox/>
                    <span>info@boatvisa.ca</span>
                </div>
                <div className={'flex space-x-3'}>
                    <Phone/>
                    <span>204-615-6555</span>
                </div>
            </div>
        </div>
    </div>)
}

export default Footer
