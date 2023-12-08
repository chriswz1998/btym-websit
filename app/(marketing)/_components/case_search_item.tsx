import Image from 'next/image'

export const Case_search_item = ({ url, title, sub_title, center }: {
    url: string, title: string, sub_title: string, center?: boolean
}) => {
    return (<div>
        <div
            className={ center ? 'shadow-[0_6.42px_33px_rgba(61,53,255,0.4)] rounded-lg overflow-hidden bg-default-blue w-[460px] h-[440px] flex justify-center items-center' : 'rounded-lg overflow-hidden bg-mask-color1 w-[460px] h-[360px] flex justify-center items-center' }>
            <Image src={ url } width={ 460 } height={ 120 }
                   alt={ '' }/>
        </div>
        <p className={ 'max-w-[460px] pt-8 pb-5 text-description-text-color1 text-[20px]' }>{ title }</p>
        <p className={ 'text-default-blue font-bold text-[36px]' }>{ sub_title }</p>
    </div>)
}