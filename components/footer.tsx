import { Logo } from '@/app/(marketing)/_components/logo'
import { Title } from '@/components/Title'
import { LucideMailbox, MapPin, Phone } from 'lucide-react'
import { DropdownMenuItemEach_employers } from '@/lib/publicResuces'
import Link from 'next/link'

const Footer = ({ has_dialog }: { has_dialog?: boolean }) => {
    return (<div className={ 'bg-mask-color5 px-20 text-white flex space-x-20' }>
        <div className={ 'w-[500px] py-20' }>
            <Logo/>
            <p className={ 'mt-10' }>我们是加拿大本土实力最强、规模最大的移民公司，专注于加拿大移民留学签证等服务。公司名下拥有12位华人持牌移民顾问，持牌移民顾问数量加拿大同行业首位；拥有10家直营公司，两家位于国内，另外八家在加拿大，横跨加拿大东西海岸，真正实现了加拿大移民留学全覆盖</p>
        </div>
        <div className={ 'w-[400px] py-20' }>
            <Title size={ 30 } title={ '联系我们' }/>
            <div className={ 'mt-16 space-y-6' }>
                <div className={ 'flex space-x-3 ' }>
                    <MapPin/>
                    <p>1174 Pembina Hwy Winnipeg, MB R3T 2A4,</p>
                </div>
                <div className={ 'flex space-x-3' }>
                    <LucideMailbox/>
                    <p>info@boatvisa.ca</p>
                </div>
                <div className={ 'flex space-x-3' }>
                    <Phone/>
                    <p>204-615-6555</p>
                </div>
            </div>
        </div>
        <div className={ 'w-[200px] py-20' }>
            <Title size={ 30 } title={ '热门项目' }/>
            <div className={ 'mt-16' }>
                { DropdownMenuItemEach_employers.map((item, index) => {
                    return (<Link key={ index } href={ item.href }>
                        <p className={'pb-4 ease-in-out duration-300'}>{ item.text }</p>
                    </Link>)
                }) }
            </div>
        </div>
    </div>)
}

export default Footer
