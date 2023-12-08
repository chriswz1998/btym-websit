import Image from 'next/image'

export const Media_item = ({ url, title }: {
    url: string, title: string
}) => {
    return (<div className={ 'flex flex-col items-center' }>
        <Image src={ url } alt={ '' } width={ 200 }
               height={ 200 }/>
        <p className={ 'text-description-text-color1 text-[24px] mt-6' }>{ title }</p>
    </div>)
}