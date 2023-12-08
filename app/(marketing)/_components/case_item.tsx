import Image from 'next/image'
import { Title } from '@/components/Title'

export const Case_item = ({ url, title, dec }: { url: string, title: string, dec: string }) => {
    return (<div className={ 'flex justify-center items-center' }>
        <Image src={ url } alt={ '' } width={ 200 }
               height={ 300 }/>
        <div className={ 'ml-2 space-y-10' }>
            <Title size={30} title={title}/>
            <p className={ 'w-[338px] text-[17px] text-text-2 word-break: break-all' }>{ dec }</p>
        </div>
    </div>)
}