import Image from 'next/image'

const Container7 = () => {
  return (
      <div className={'mb-32'}>
        <div className={ 'mt-32 w-full flex justify-center' }>
          <p className={'text-[50px] font-bold'}>
            简单的<span className={'text-default-blue'}>三个步骤</span>,即刻开始改变!
          </p>
        </div>
        <div className={'w-full flex justify-center mt-4'}>
          <p className={'text-[23px] text-description-text-color'}>
            致力于为中国申请人带来优质的加拿大移民服务
          </p>
        </div>

        <div className={'flex justify-between mt-32'}>
          <div className={'flex flex-col items-center'}>
            <div className={'flex items-center'}>
              <span className={'text-[112px] text-mask-color2 font-bold'}>01</span>
              <span className={'text-[28px] font-bold ml-2'}>登记信息</span>
            </div>
            <Image src={'/ic1.svg'} width={350} height={350} alt={''}/>
            <div className={'flex items-center'}>
              <div className={'w-[15px] h-[15px] bg-default-blue rounded-full mr-4'} />
              <p className={'w-[400px] text-[20px] text-description-text-color'}>登记您的社交媒体或邮箱我们的持牌顾问会第一时间联系您，了解您的需求</p>
            </div>
          </div>
          <div className={'flex flex-col items-center'}>
            <div className={'flex items-center'}>
              <span className={'text-[112px] text-mask-color2 font-bold'}>02</span>
              <span className={'text-[28px] font-bold ml-2'}>定制方案</span>
            </div>
            <Image src={'/ic2.svg'} className={'pb-6'} width={350} height={350} alt={''}/>
            <div className={'flex items-center'}>
              <div className={'w-[15px] h-[15px] bg-default-blue rounded-full mr-4'} />
              <p className={'w-[400px] text-[20px] text-description-text-color'}>根据您所在地区的时间安排会议或着消息沟通</p>
            </div>
          </div>
          <div className={'flex flex-col items-center'}>
            <div className={'flex items-center'}>
              <span className={'text-[112px] text-mask-color2 font-bold'}>03</span>
              <span className={'text-[28px] font-bold ml-2'}>方案认可</span>
            </div>
            <Image src={'/ic3.svg'} width={350} height={350} alt={''}/>
            <div className={'flex items-center'}>
              <div className={'w-[15px] h-[15px] bg-default-blue rounded-full mr-4'} />
              <p className={'w-[400px] text-[20px] text-description-text-color'}>我们的努力只有一个目标，那就是认可我们的方案</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Container7
