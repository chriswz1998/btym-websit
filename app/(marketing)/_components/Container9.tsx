import Image from 'next/image'

const Container9 = () => {
  return (
      <div className={ 'mt-20' }>
        <p className={ 'text-description-text-color2 text-[40px] font-bold text-center' }>我们的社交媒体</p>

        <div className={ 'flex justify-between py-36' }>
          <div className={ 'flex flex-col items-center' }>
            <Image src={ '/tiktok.svg' } alt={ '' } width={ 200 }
                   height={ 200 }/>
            <p className={ 'text-description-text-color1 text-[24px] mt-6' }>抖音</p>
          </div>
          <div className={ 'flex flex-col items-center' }>
            <Image src={ '/youtube.svg' } alt={ '' } width={ 200 }
                   height={ 200 }/>
            <p className={ 'text-description-text-color1 text-[24px] mt-6' }>youtube</p>
          </div>
          <div className={ 'flex flex-col items-center' }>
            <Image src={ '/facebook.svg' } alt={ '' } width={ 200 }
                   height={ 200 }/>
            <p className={ 'text-description-text-color1 text-[24px] mt-6' }>facebook</p>
          </div>
          <div className={ 'flex flex-col items-center' }>
            <Image src={ '/twitter.svg' } alt={ '' } width={ 200 }
                   height={ 200 }/>
            <p className={ 'text-description-text-color1 text-[24px] mt-6' }>twitter</p>
          </div>
        </div>
      </div>
  )
}

export default Container9
