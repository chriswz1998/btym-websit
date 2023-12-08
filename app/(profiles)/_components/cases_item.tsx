import { Star } from 'lucide-react'
import Link from 'next/link'

export const Cases_item = ({ url, subject, date, title, dec }: {
    url: string, subject: string, date: string, title: string, dec: string
}) => {
    return (<Link href={ url }>
        <div
            className={ 'shadow-[0_6px_30px_rgba(0,0,0,0.12)] rounded-md overflow-hidden mb-20' }>
            <div
                className={ 'flex items-center justify-between text-[20px] p-4 ' }>
                <div className={ 'flex items-center' }>
                    <p className={ 'text-description-text-color3 font-bold' }>{ subject }</p>
                    <Star className={ 'ml-3 text-description-text-color4' }/>
                </div>
                <div className={ 'text-description-text-color5' }>
                    { date }
                </div>
            </div>
            <div
                className={ 'bg-[url("https://i.ibb.co/Wk82R7C/PHO-STAGE-1290-Super-Adventure-R-M23-Model-Page-US-header-SEN-US-AEPI-V1.jpg")] bg-cover bg-no-repeat' }>
                <div className={ 'pt-52 bg-mask-color3' }>
                    <p className={ 'text-white p-4 w-[550px] text-[20px]' }>{ title }</p>
                    <p className={ 'text-description-text-color6 px-4 pb-2 w-[500px] text-[16px]' }>
                        { dec }
                    </p>
                </div>
            </div>
        </div>
    </Link>)
}