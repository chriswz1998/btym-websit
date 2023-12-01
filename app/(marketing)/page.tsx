import {
  AtSign, Blocks,
  BookText,
  ChevronsRight,
  Headphones,
  MapPinned, PhoneCall,
  Star,
  Zap
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { CustomerApplicationFrom } from '@/components/custoemr.application.from'
import Link from 'next/link'
import { DropdownMenuItemEach } from '@/components/dropDown'

export default function MarketingPage() {
  return (
      <div className={ 'px-20 min-[1980px]:w-[1980px] mx-auto' }>
        <div className={ 'border-b pb-20' }>
          <div className={ 'w-full pt-44 pb-20 flex justify-center' }>
            <h1 className={ 'text-[60px] font-bold' }>为客户提供最佳移民和留学解决方案</h1>
          </div>
          <div className={ 'flex justify-between items-center' }>
            <div className={ 'flex justify-center items-center' }>
              <Image src={ '/ic4.svg' } alt={ '' } width={ 200 }
                     height={ 300 }/>
              <div className={ 'ml-2' }>
                <p className={ 'p-4 text-[31.2px]' }>文案工作</p>
                <p className={ 'p-4 w-[338px] text-[19.5px] text-text-2 word-break: break-all' }>根据多年的咨询和案例经验，我们为每一位客户量身定制了文案顾问，在深入了解情况后书写量身定制的文案</p>
              </div>
            </div>
            <div className={ 'flex justify-center items-center' }>
              <Image src={ '/ic1.svg' } alt={ '' } width={ 200 }
                     height={ 300 }/>
              <div className={ 'ml-2' }>
                <p className={ 'p-4 text-[31.2px]' }>在线聆听你的需求</p>
                <p className={ 'p-4 w-[338px] text-[19.5px] text-text-2 word-break: break-all' }>问我们在中国、香港、台湾、加拿大均有分公以应对不同时区客户的需求、随时随地、们都能听见你的声音!</p>
              </div>
            </div>
            <div className={ 'flex justify-center items-center' }>
              <Image src={ '/ic9.svg' } alt={ '' } width={ 200 }
                     height={ 300 }/>
              <div className={ 'ml-2' }>
                <p className={ 'p-4 text-[31.2px]' }>社交媒体</p>
                <p className={ 'p-4 w-[338px] text-[19.5px] text-text-2 word-break: break-all' }>博泰移民在Youtube、X、Facebook等社交媒体均有官方营销账户，定期更新相关政策的变更和优秀案例</p>
              </div>
            </div>
          </div>
        </div>
        <div
            className={ `border-b pb-10` }>
          <div className={ 'w-full pt-44 pb-20 flex justify-center' }>
            <h1 className={ 'text-[60px] font-bold' }>移民省份</h1>
          </div>
          <div className={ 'flex flex-col justify-center items-center' }>
            { DropdownMenuItemEach.map((item, index) => {
              return (
                  <Link href={ `${ item.href }` } key={ index }>
                    <div
                        className={ 'w-[500px] flex justify-center items-center text-[26px] p-4 rounded-lg overflow-hidden group transition hover:text-white hover:bg-default-blue hover:shadow-[0_6.42px_33px_rgba(61,53,255,0.4)]' }>
                      <Blocks
                          className={ 'text-default-blue mr-3 transition group-hover:text-white' }
                          size={ 30 }/>
                      <p>{ item.text }</p>
                    </div>
                  </Link>
              )
            }) }


          </div>
          <div className={ 'w-full pt-44 pb-20 flex justify-center' }>
            <h1 className={ 'text-[60px] font-bold' }>我们的案例</h1>
          </div>
          <div className={ 'w-full flex justify-end pb-6' }>
            <Link href={ '/all_profiles' }>
              <Button variant={ 'link' }
                      className={ 'text-[22px] text-default-blue' }>查看更多</Button>
            </Link>
          </div>
          <div className={ 'w-full flex justify-between flex-wrap' }>
            <Link href={ '/single_profile' }>
              <div
                  className={ 'shadow-[0_6px_30px_rgba(0,0,0,0.12)] rounded-md overflow-hidden mb-20' }>
                <div
                    className={ 'flex items-center justify-between text-[20px] p-4 ' }>
                  <div className={ 'flex items-center' }>
                    <p className={ 'text-description-text-color3 font-bold' }>雇主担保移民</p>
                    <Star className={ 'ml-3 text-description-text-color4' }/>
                  </div>
                  <div className={ 'text-description-text-color5' }>
                    2023-01-01
                  </div>
                </div>
                <div
                    className={ 'bg-[url("https://i.ibb.co/Wk82R7C/PHO-STAGE-1290-Super-Adventure-R-M23-Model-Page-US-header-SEN-US-AEPI-V1.jpg")] bg-cover bg-no-repeat' }>
                  <div className={ 'pt-52 bg-mask-color3' }>
                    <p className={ 'text-white p-4 w-[550px] text-[20px]' }>来自新疆的维吾尔族大哥,
                      经历189天成功拿到工签,准备开启雇主担保移民之路</p>
                    <p className={ 'text-description-text-color6 px-4 pb-2 w-[500px] text-[16px]' }>
                      本案例由顾问Ken主理完成,在此感谢Ken的辛勤付出!
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className={ 'flex mb-40' }>
          <div className={ 'flex pt-52 pr-10' }>
            <div className={ 'w-full' }>
              <h1 className={ 'text-[60px] font-bold' }>位于温哥华的资深移民公司</h1>
              <p className={ 'text-description-text-color text-[24px] pr-44 pt-10 pb-20' }>我们有着多年加拿大移民、
                留学经验，近年来移民与留学的难度越来越高，
                我们扩展了一批优质切快速的移民留学通道,
                由专业的持牌顾问一对一咨询指导,保障您的梦想
              </p>
              <Link href={ '/all_profiles' }>
                <Button
                    className={ 'text-[24px] px-14 py-8 text-white bg-default-blue hover:bg-default-blue font-light' }>
                  查看更多案例和评价
                  <ChevronsRight className={ 'ml-2' }/>
                </Button>
              </Link>
            </div>
            <div
                className={ 'w-[550px] h-[400px] overflow-hidden rounded-lg bg-[url("/62035b84efeec66b4bc2008d.png")] bg-[length:560px_400px] bg-no-repeat' }>
              <div className={ 'bg-mask-color w-full h-full' }/>
            </div>
          </div>
          <div className={ 'pt-24' }>
            <div
                className={ 'w-[400px] h-[400px] overflow-hidden rounded-lg bg-[url("/62035b82e27e8c42e53e8e1e.png")] bg-[length:560px_400px] bg-no-repeat' }>
              <div className={ 'bg-mask-color w-full h-full' }/>
            </div>
            <div
                className={ 'mt-10 w-[400px] h-[200px] overflow-hidden rounded-lg bg-[url("/62035b839215f14aa6a16168.png")] bg-[length:560px_400px] bg-no-repeat' }>
              <div className={ 'bg-mask-color w-full h-full' }/>
            </div>
          </div>
        </div>
        <div className={ 'mb-24' }>
          <div className={ 'mb-24' }>
            <h1 className={ 'text-[60px] font-bold' }>案例研究</h1>
            <p className={ 'text-description-text-color text-[27px] font-light' }>我们帮助客户在不断变化的环境中脱颖而出</p>
          </div>
          <div className={ 'flex items-center justify-between' }>
            <div>
              <div
                  className={ 'rounded-lg overflow-hidden bg-mask-color1 w-[460px] h-[360px] flex justify-center items-center' }>
                <Image src={ 'ic6.svg' } width={ 460 } height={ 120 }
                       alt={ '' }/>
              </div>
              <p className={ 'max-w-[460px] pt-8 pb-5 text-description-text-color1 text-[20px]' }>客户同比优势不足，我们将通过率提升至100%</p>
              <p className={ 'text-default-blue font-bold text-[36px]' }>100%与客户共同成长</p>
            </div>

            <div>
              <div
                  className={ 'shadow-[0_6.42px_33px_rgba(61,53,255,0.4)] rounded-lg overflow-hidden bg-default-blue w-[460px] h-[440px] flex justify-center items-center' }>
                <Image src={ 'ic7.svg' } width={ 460 } height={ 120 }
                       alt={ '' }/>
              </div>
              <p className={ 'max-w-[460px] pt-8 pb-5 text-description-text-color1 text-[20px]' }>同比去年雇主担保通过率在三个月我们努力将客户服务做到最好，实内提升至3倍?</p>
              <p className={ 'text-default-blue font-bold text-[36px]' }>3X
                我们的独门内功!</p>
            </div>

            <div>
              <div
                  className={ 'rounded-lg overflow-hidden bg-mask-color1 w-[460px] h-[360px] flex justify-center items-center' }>
                <Image src={ 'ic8.svg' } width={ 460 } height={ 120 }
                       alt={ '' }/>
              </div>
              <p className={ 'max-w-[460px] pt-8 pb-5 text-description-text-color1 text-[20px]' }>我们努力将客户服务做到最好，实现O差评!</p>
              <p className={ 'text-default-blue font-bold text-[36px]' }>客户优先,服务第一</p>
            </div>
          </div>
        </div>
        <div className={ 'mb-32' }>
          <div className={ 'mt-32 w-full flex justify-center' }>
            <h1 className={ 'text-[64px] font-bold' }>我们的持牌顾问</h1>
          </div>
          <div className={ 'flex flex-wrap justify-between mt-32' }>
            <div
                className=" mb-20 w-[48%] flex rounded-xl p-0 shadow-[0_6px_30px_rgba(0,0,0,0.12)] overflow-hidden">
              <Image
                  className={ 'w-[280px] h-[360px]' }
                  src="/de9b3815.jpg" alt="" width={ 350 }
                  height={ 100 }/>
              <div className="p-8 text-left space-y-40">
                <blockquote>
                  <p className="text-lg font-medium">
                    Tailwind CSS is the only framework that I seen scale
                    on large teams. It’s easy to customize, adapts to any
                    design,
                    and the build size is tiny.
                  </p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-sky-500 dark:text-sky-400">
                    Sarah Dayan
                  </div>
                  <div className="text-slate-700 dark:text-slate-500">
                    Staff Engineer, Algolia
                  </div>
                </figcaption>
              </div>
            </div>
            <div
                className="mb-20 w-[48%] flex rounded-xl p-0 shadow-[0_6px_30px_rgba(0,0,0,0.12)] overflow-hidden">
              <Image
                  className={ 'w-[280px] h-[360px]' }
                  src="/de9b3815.jpg" alt="" width={ 350 }
                  height={ 100 }/>
              <div className="p-8 text-left space-y-40">
                <blockquote>
                  <p className="text-lg font-medium">
                    Tailwind CSS is the only framework that I seen scale
                    on large teams. It’s easy to customize, adapts to any
                    design,
                    and the build size is tiny.
                  </p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-sky-500 dark:text-sky-400">
                    Sarah Dayan
                  </div>
                  <div className="text-slate-700 dark:text-slate-500">
                    Staff Engineer, Algolia
                  </div>
                </figcaption>
              </div>
            </div>
            <div
                className="mb-20 w-[48%] flex rounded-xl p-0 shadow-[0_6px_30px_rgba(0,0,0,0.12)] overflow-hidden">
              <Image
                  className={ 'w-[280px] h-[360px]' }
                  src="/de9b3815.jpg" alt="" width={ 350 }
                  height={ 100 }/>
              <div className="p-8 text-left space-y-40">
                <blockquote>
                  <p className="text-lg font-medium">
                    “Tailwind CSS is the only framework that seen scale
                    on large teams. It’s easy to customize, adapts to any
                    design,
                    and the build size is tiny.”
                  </p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-sky-500 dark:text-sky-400">
                    Sarah Dayan
                  </div>
                  <div className="text-slate-700 dark:text-slate-500">
                    Staff Engineer, Algolia
                  </div>
                </figcaption>
              </div>
            </div>
          </div>
        </div>


        <div className={ 'mb-32' }>
          <div className={ 'mt-32 w-full flex justify-center' }>
            <p className={ 'text-[50px] font-bold' }>
              简单的<span className={ 'text-default-blue' }>三个步骤</span>,即刻开始改变!
            </p>
          </div>
          <div className={ 'w-full flex justify-center mt-4' }>
            <p className={ 'text-[23px] text-description-text-color' }>
              致力于为中国申请人带来优质的加拿大移民服务
            </p>
          </div>

          <div className={ 'flex justify-between mt-32' }>
            <div className={ 'flex flex-col items-center' }>
              <div className={ 'flex items-center' }>
                  <span
                      className={ 'text-[112px] text-mask-color2 font-bold' }>01</span>
                <span
                    className={ 'text-[28px] font-bold ml-2' }>登记信息</span>
              </div>
              <Image src={ '/ic10.svg' } width={ 350 } height={ 350 }
                     alt={ '' }/>
              <div className={ 'flex items-center' }>
                <div
                    className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                <p className={ 'w-[400px] text-[20px] text-description-text-color' }>登记您的社交媒体或邮箱我们的持牌顾问会第一时间联系您，了解您的需求</p>
              </div>
            </div>
            <div className={ 'flex flex-col items-center' }>
              <div className={ 'flex items-center' }>
                  <span
                      className={ 'text-[112px] text-mask-color2 font-bold' }>02</span>
                <span
                    className={ 'text-[28px] font-bold ml-2' }>定制方案</span>
              </div>
              <Image src={ '/ic2.svg' } className={ 'pb-6' } width={ 350 }
                     height={ 350 } alt={ '' }/>
              <div className={ 'flex items-center' }>
                <div
                    className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                <p className={ 'w-[400px] text-[20px] text-description-text-color' }>根据您所在地区的时间安排会议或着消息沟通</p>
              </div>
            </div>
            <div className={ 'flex flex-col items-center' }>
              <div className={ 'flex items-center' }>
                  <span
                      className={ 'text-[112px] text-mask-color2 font-bold' }>03</span>
                <span
                    className={ 'text-[28px] font-bold ml-2' }>方案认可</span>
              </div>
              <Image src={ '/ic3.svg' } width={ 350 } height={ 350 }
                     alt={ '' }/>
              <div className={ 'flex items-center' }>
                <div
                    className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                <p className={ 'w-[400px] text-[20px] text-description-text-color' }>我们的努力只有一个目标，那就是认可我们的方案</p>
              </div>
            </div>
          </div>
        </div>
        <div className={ 'w-full flex' }>
          <div
              className={ 'w-1/2 p-20 shadow-[0_6px_30px_rgba(0,0,0,0.12)] rounded-md overflow-hidden' }>
            <div>
              <p className={ 'text-[62px]' }>
                我们来谈谈
              </p>
              <p className={ 'w-[550px] text-[22px] font-light mt-5' }>
                我们愿意与优秀的人交流。只要打个招呼，我们就能开始富有成效的合作。开始您自己的成功故事
              </p>
            </div>
            <div className={ 'mt-80' }>
              <div className={ 'text-[27px]' }>
                <p className={ ' flex items-center' }>
                  <MapPinned className={ 'mr-4' }/>
                  公司地址:
                </p>
                <p className={ 'w-[600px]' }>
                  1234 Web Template Street Tech villeWebapi 54321 Virtual
                  World
                </p>
              </div>
              <div className={ 'h-[50px]' }/>
              <div className={ 'text-[27px]' }>
                <p className={ 'flex items-center' }>
                  <AtSign className={ 'mr-4' }/>
                  邮箱地址:
                </p>
                <p className={ 'w-[600px]' }>
                  scissorwz@gmail.com
                </p>
              </div>
              <div className={ 'h-[50px]' }/>
              <div className={ 'text-[27px]' }>
                <p className={ 'flex items-center' }>
                  <PhoneCall className={ 'mr-4' }/>
                  邮箱地址:
                </p>
                <p className={ 'w-[600px]' }>
                  scissorwz@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className={ 'w-[100px]' }/>
          <div
              className={ 'w-1/2 flex justify-center items-center shadow-[0_6px_30px_rgba(0,0,0,0.12)] rounded-md overflow-hidden' }>
            <div className={ 'bg-white w-2/3 p-14 rounded-lg' }>
              <CustomerApplicationFrom/>
            </div>
          </div>
        </div>
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
      </div>
  )
}
