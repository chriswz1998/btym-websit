import Image from 'next/image'

export const Step_item = ({ num, title, url, des }: {
    num: string, title: string, url: string, des: string

}) => {
    return (<div className={ 'flex flex-col items-center' }>
        <div className={ 'flex items-center' }>
                  <span
                      className={ 'text-[112px] text-mask-color2 font-bold' }>{ num }</span>
            <span
                className={ 'text-[28px] font-bold ml-2' }>{ title }</span>
        </div>
        <Image src={ url } width={ 350 } height={ 350 }
               alt={ '' }/>
        <div className={ 'flex items-center' }>
            <div
                className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
            <p className={ 'w-[400px] text-[20px] text-description-text-color' }>{ des }</p>
        </div>
    </div>)
}