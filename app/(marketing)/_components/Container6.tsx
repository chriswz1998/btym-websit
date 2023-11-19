import Image from 'next/image'

const Container6 = () => {
  return (
      <div className={'mb-32'}>
        <div className={ 'mt-32 w-full flex justify-center' }>
          <h1 className={ 'text-[64px] font-bold' }>我们的持牌顾问</h1>
        </div>

        <div className={ 'flex justify-between p-48 mt-28 shadow-[0_6px_30px_rgba(0,0,0,0.12)] rounded-md overflow-hidden' }>
          <div className={'relative'}>
            <div className={'absolute -bottom-[45px] -right-[35px] -z-10'}>
              <Image src={ '/shape_one.svg' } width={ '200' } height={ '200' }
                     alt={ '' }/>
              <Image src={ '/shape_two.svg' } width={ '50' } height={ '50' }
                     alt={ '' } className={'absolute top-0 right-0'} />
            </div>
            <div className={'z-50'}>
              <Image src={ '/vector.png' } width={ '450' } height={ '450' }
                     alt={ '' }/>
            </div>
          </div>

          <div>
            <p
                className="w-[597px] text-description-text-color text-2xl font-['Maven Pro'] leading-10">
              I recently engaged with this global marketing consulting agency,
              and their expertise is evident. As a top-rated online marketing
              agency in New York, they offer user-friendly, innovative solutions
              that have boosted our online presence. They excel at making global
              marketing accessible. A fantastic partner for expanding your
              brand!
            </p>
            <p className="mt-16 text-[22px] font-bold font-['Maven Pro'] leading-[35px]">顾问1</p>
            <p className="mt-2 font-normal font-['Maven Pro']">博泰移民资深顾问,
              CEO</p>
          </div>
        </div>

        <div className={ 'flex justify-between p-48 mt-28 shadow-[0_6px_30px_rgba(0,0,0,0.12)] rounded-md overflow-hidden' }>
          <div>
            <p
                className="w-[597px] text-2xl text-description-text-color font-['Maven Pro'] leading-10">
              I recently engaged with this global marketing consulting agency,
              and their expertise is evident. As a top-rated online marketing
              agency in New York, they offer user-friendly, innovative solutions
              that have boosted our online presence. They excel at making global
              marketing accessible. A fantastic partner for expanding your
              brand!
            </p>
            <p className="mt-16 text-[22px] font-bold font-['Maven Pro'] leading-[35px]">顾问1</p>
            <p className="mt-2 font-normal font-['Maven Pro']">博泰移民资深顾问,
              CEO</p>
          </div>

          <div className={'relative'}>
            <div className={'absolute -bottom-[45px] -right-[35px] -z-10'}>
              <Image src={ '/shape_one.svg' } width={ '200' } height={ '200' }
                     alt={ '' }/>
              <Image src={ '/shape_two.svg' } width={ '50' } height={ '50' }
                     alt={ '' } className={'absolute top-0 right-0'} />
            </div>
            <div className={'z-50'}>
              <Image src={ '/vector1.png' } width={ '450' } height={ '450' }
                     alt={ '' }/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Container6
