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
                    <Image src={'/weikf.png'} alt={''} height={100} width={100}/>
                    <span className={'pt-4 block'}>联系微信</span>
                </div>
                <div className={'text-center'}>
                    <Image src={'/wechat300x300.jpg'} alt={''} height={100} width={100}/>
                    <span className={'pt-4 block'}>博泰公众号</span>
                </div>
                <div className={'text-center'}>
                    <Image src={'/wechat300x300.jpg'} alt={''} height={100} width={100}/>
                    <span className={'pt-4 block'}>博泰小程序</span>
                </div>
            </div>


        </div>

        <div className='grid-cols-1 space-y-6'>
            <div className='font-bold text-4xl'>公司地址</div>
            <div className={'space-y-4'}>
                <div className={'space-y-3'}>
                    <div className='border-b pb-3'>
                        <p className='flex items-center text-sm'><MapPin size={15} className='mr-1'/> Vancouver:
                            5220-4000 No. 3Rd, Richmond, BC V6X 0C7, Canada</p>
                        <p className='flex items-center text-xs'><Phone size={15} className='mr-1'/> +1(604)780-8711</p>
                    </div>
                    <div className='border-b pb-3'>
                        <p className='flex items-center text-sm'><MapPin size={15} className='mr-1'/> Winnipeg:
                            1174 Pembina Hwy, Winnipeg, MB R3T 2A4, Canada</p>
                        <p className='flex items-center text-xs'><Phone size={15} className='mr-1'/> +1(204)615-6555</p>
                    </div>
                    <div className='border-b pb-3'>
                        <p className='flex items-center text-sm'><MapPin size={15} className='mr-1'/> Toronto:
                            Unit203-2750 14th Ave, Markham, ON L3R 0B6,Canada</p>
                        <p className='flex items-center text-xs'><Phone size={15} className='mr-1'/> +1(416)880-9868</p>
                    </div>
                </div>

            </div>
        </div>
    </div>)
}

export default Footer
