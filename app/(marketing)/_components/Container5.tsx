import { TrendingUp } from 'lucide-react'

const Container5 = () => {
  return (
      <div className={'mb-24'}>
        <div className={'mb-24'}>
          <h1 className={ 'text-[60px] font-bold' }>案例研究</h1>
          <p className={'text-description-text-color text-[27px] font-light'}>我们帮助客户在不断变化的环境中脱颖而出</p>
        </div>
        <div className={'flex items-center justify-between'}>
          <div>
            <div className={'rounded-lg overflow-hidden bg-mask-color1 w-[460px] h-[360px] flex justify-center items-center'}>
              <TrendingUp size={120}  className={'text-default-blue'}/>
            </div>
            <p className={'pt-8 pb-5 text-description-text-color1 text-[20px]'}>客户同比优势不足，我们将通过率提升至100%</p>
            <p className={'text-default-blue font-bold text-[36px]'}>100%与客户共同成长</p>
          </div>

          <div>
            <div className={'shadow-[0_6.42px_33px_rgba(61,53,255,0.4)] rounded-lg overflow-hidden bg-default-blue w-[460px] h-[440px] flex justify-center items-center'}>
              <TrendingUp size={120}  className={'text-white'}/>
            </div>
            <p className={'pt-8 pb-5 text-description-text-color1 text-[20px]'}>同比去年雇主担保通过率在三个月我们努力将客户服务做到最好，实内提升至3倍?</p>
            <p className={'text-default-blue font-bold text-[36px]'}>3X 我们的独门内功!</p>
          </div>

          <div>
            <div className={'rounded-lg overflow-hidden bg-mask-color1 w-[460px] h-[360px] flex justify-center items-center'}>
              <TrendingUp size={120}  className={'text-default-blue'}/>
            </div>
            <p className={'pt-8 pb-5 text-description-text-color1 text-[20px]'}>我们努力将客户服务做到最好，实现O差评!</p>
            <p className={'text-default-blue font-bold text-[36px]'}>客户优先,服务第一</p>
          </div>
        </div>
      </div>
  )
}

export default Container5
