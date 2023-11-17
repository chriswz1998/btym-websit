import { BookText, Headphones, Zap } from 'lucide-react'
import Image from 'next/image'

const Container3 = () => {
  return (
      <div className={ 'border-b pb-10' }>
        <div className={ 'w-full pt-44 pb-20 flex justify-center' }>
          <h1 className={ 'text-[60px] font-bold' }>移民分类</h1>
        </div>
        <div className={ 'flex justify-between items-center' }>
          <div className={ 'flex justify-center items-center' }>
            <div className={ 'bg-icon-1 p-10 rounded-full text-text-1 mr-7' }>
              <BookText/>
            </div>
            <div>
              <p className={ 'p-4 text-[31.2px]' }>雇主担保</p>
              <p className={ 'p-4 w-[338px] text-[19.5px] text-text-2 word-break: break-all' }>根据多年的咨询和案例经验，我们为每一位客户量身定制了文案顾问，在深入了解情况后书写量身定制的文案</p>
            </div>
          </div>
          <div className={ 'flex justify-center items-center' }>
            <div className={ 'bg-icon-2 p-10 rounded-full text-text-3 mr-7' }>
              <Zap/>
            </div>
            <div>
              <p className={ 'p-4 text-[31.2px]' }>省提名</p>
              <p className={ 'p-4 w-[338px] text-[19.5px] text-text-2 word-break: break-all' }>问我们在中国、香港、台湾、加拿大均有分公以应对不同时区客户的需求、随时随地、们都能听见你的声音!</p>
            </div>
          </div>
          <div className={ 'flex justify-center items-center' }>
            <div
                className={ 'bg-icon-4 p-10 rounded-full text-default-blue mr-7' }>
              <Headphones/>
            </div>
            <div>
              <p className={ 'p-4 text-[31.2px]' }>联邦提名</p>
              <p className={ 'p-4 w-[338px] text-[19.5px] text-text-2 word-break: break-all' }>博泰移民在Youtube、X、Facebook等社交媒体均有官方营销账户，定期更新相关政策的变更和优秀案例</p>
            </div>
          </div>
        </div>
        <div className={ 'w-full pt-44 pb-20 flex justify-center' }>
          <h1 className={ 'text-[60px] font-bold' }>我们的案例</h1>
        </div>
        <div className={ 'flex justify-between flex-wrap' }>
          <div className={ 'pb-4 w-[400px] shadow-[0_6px_30px_rgba(0,0,0,0.12)] rounded-md overflow-hidden mb-20' }>
            <div>
              <Image src={ '/9.jpg' } width={ '400' } height={ '400' } alt={ '' }/>
            </div>
            <div className={ 'p-6' }>
              <p className={ 'text-[24px] text-default-text-color' }>雇主担保案例</p>
              <p className={ 'pt-2 pb-4 text-[15px] text-description-text-color' }>周先生</p>
              <div className={ 'text-[16px] text-description-text-color text-ellipsis overflow-hidden' }>
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
              </div>
            </div>
          </div>
          <div className={ 'pb-4 w-[400px] shadow-[0_6px_30px_rgba(0,0,0,0.12)] rounded-md overflow-hidden mb-20' }>
            <div>
              <Image src={ '/9.jpg' } width={ '400' } height={ '400' } alt={ '' }/>
            </div>
            <div className={ 'p-6' }>
              <p className={ 'text-[24px] text-default-text-color' }>雇主担保案例</p>
              <p className={ 'pt-2 pb-4 text-[15px] text-description-text-color' }>周先生</p>
              <div className={ 'text-[16px] text-description-text-color text-ellipsis overflow-hidden' }>
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
              </div>
            </div>
          </div>
          <div className={ 'pb-4 w-[400px] shadow-[0_6px_30px_rgba(0,0,0,0.12)] rounded-md overflow-hidden mb-20' }>
            <div>
              <Image src={ '/9.jpg' } width={ '400' } height={ '400' } alt={ '' }/>
            </div>
            <div className={ 'p-6' }>
              <p className={ 'text-[24px] text-default-text-color' }>雇主担保案例</p>
              <p className={ 'pt-2 pb-4 text-[15px] text-description-text-color' }>周先生</p>
              <div className={ 'text-[16px] text-description-text-color text-ellipsis overflow-hidden' }>
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
              </div>
            </div>
          </div>
          <div className={ 'pb-4 w-[400px] shadow-[0_6px_30px_rgba(0,0,0,0.12)] rounded-md overflow-hidden mb-20' }>
            <div>
              <Image src={ '/9.jpg' } width={ '400' } height={ '400' } alt={ '' }/>
            </div>
            <div className={ 'p-6' }>
              <p className={ 'text-[24px] text-default-text-color' }>雇主担保案例</p>
              <p className={ 'pt-2 pb-4 text-[15px] text-description-text-color' }>周先生</p>
              <div className={ 'text-[16px] text-description-text-color text-ellipsis overflow-hidden' }>
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
              </div>
            </div>
          </div>
          <div className={ 'pb-4 w-[400px] shadow-[0_6px_30px_rgba(0,0,0,0.12)] rounded-md overflow-hidden mb-20' }>
            <div>
              <Image src={ '/9.jpg' } width={ '400' } height={ '400' } alt={ '' }/>
            </div>
            <div className={ 'p-6' }>
              <p className={ 'text-[24px] text-default-text-color' }>雇主担保案例</p>
              <p className={ 'pt-2 pb-4 text-[15px] text-description-text-color' }>周先生</p>
              <div className={ 'text-[16px] text-description-text-color text-ellipsis overflow-hidden' }>
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
              </div>
            </div>
          </div>
          <div className={ 'pb-4 w-[400px] shadow-[0_6px_30px_rgba(0,0,0,0.12)] rounded-md overflow-hidden mb-20' }>
            <div>
              <Image src={ '/9.jpg' } width={ '400' } height={ '400' } alt={ '' }/>
            </div>
            <div className={ 'p-6' }>
              <p className={ 'text-[24px] text-default-text-color' }>雇主担保案例</p>
              <p className={ 'pt-2 pb-4 text-[15px] text-description-text-color' }>周先生</p>
              <div className={ 'text-[16px] text-description-text-color text-ellipsis overflow-hidden' }>
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
              </div>
            </div>
          </div>
          <div className={ 'pb-4 w-[400px] shadow-[0_6px_30px_rgba(0,0,0,0.12)] rounded-md overflow-hidden mb-20' }>
            <div>
              <Image src={ '/9.jpg' } width={ '400' } height={ '400' } alt={ '' }/>
            </div>
            <div className={ 'p-6' }>
              <p className={ 'text-[24px] text-default-text-color' }>雇主担保案例</p>
              <p className={ 'pt-2 pb-4 text-[15px] text-description-text-color' }>周先生</p>
              <div className={ 'text-[16px] text-description-text-color text-ellipsis overflow-hidden' }>
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
              </div>
            </div>
          </div>
          <div className={ 'pb-4 w-[400px] shadow-[0_6px_30px_rgba(0,0,0,0.12)] rounded-md overflow-hidden mb-20' }>
            <div>
              <Image src={ '/9.jpg' } width={ '400' } height={ '400' } alt={ '' }/>
            </div>
            <div className={ 'p-6' }>
              <p className={ 'text-[24px] text-default-text-color' }>雇主担保案例</p>
              <p className={ 'pt-2 pb-4 text-[15px] text-description-text-color' }>周先生</p>
              <div className={ 'text-[16px] text-description-text-color text-ellipsis overflow-hidden' }>
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
                为了借助社交产品的流量，让用户主动分享APP中的内容到社交平台来达到拉新和促活的目的，市场上绝大多数APP
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Container3
