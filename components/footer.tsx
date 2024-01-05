import { Logo } from '@/app/(marketing)/_components/logo'
import { Title } from '@/components/Title'
import { LucideMailbox, MapPin, Phone } from 'lucide-react'
import { DropdownMenuItemEach_employers } from '@/lib/publicResuces'
import Link from 'next/link'

const Footer = ({ has_dialog }: { has_dialog?: boolean }) => {
    return (<div className={ 'bg-mask-color5 px-20 text-white flex space-x-20' }>
        <div className={ 'w-[500px] py-20' }>
            <Logo/>
            <p className={ 'mt-10' }>
                博泰移民（BoTai Immigration）
                <br/>
                是一家致力于为个人和家庭提供专业移民服务的领先机构。
                我们以多年的经验和深厚的专业知识，为客户提供全面的移民解决方案，助力他们实现全球范围内的移民梦想。
                <br/>
                选择博泰移民，意味着选择了专业、可信赖的移民合作伙伴。我们将竭诚为您提供卓越的移民服务，帮助您开启新的生活篇章。让博泰移民成为您实现全球梦想的助力，与您携手共创美好未来。
            </p>
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
                        <p className={ 'pb-4 ease-in-out duration-300' }>{ item.text }</p>
                    </Link>)
                }) }
            </div>
        </div>
    </div>)
}

export default Footer
