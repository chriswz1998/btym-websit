import {
    ArrowLeft, ArrowRight, AtSign, ChevronsRight, MapPinned, PhoneCall
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { CustomerApplicationFrom } from '@/components/custoemr.application.from'
import Link from 'next/link'
import { DropdownMenuItemEach_province } from '@/lib/publicResuces'
import { Case_item } from '@/app/(marketing)/_components/case_item'
import { Title } from '@/components/Title'
import { Center_box } from '@/components/center_box'
import { Margin20_box } from '@/components/margin20_box'
import { Cases_item } from '@/app/(profiles)/_components/cases_item'
import { Case_search_item } from '@/app/(marketing)/_components/case_search_item'
import { Business_card } from '@/app/(marketing)/_components/business_card'
import { Step_item } from '@/app/(marketing)/_components/steps_item'
import { Media_item } from '@/app/(marketing)/_components/media_item'
import { Navbar } from '@/components/navbar'
import { Province_banner } from '@/components/province_banner'

export default function MarketingPage(){
    return (

        <div>
            <Navbar noBgModel={ true }/>
            <Province_banner banner={ '/banner.png' }/>
            <div className={ 'flex justify-around flex-wrap p-10' }>
                <div className={ 'flex items-center bg-white p-3 rounded shadow w-[350px] space-x-2' }>
                    <Image src={ '/testSvg.svg' } alt={ '' } width={ 45 } height={ 45 }/>
                    <div>
                        <Title size={ 10 } bold={ true } title={ '申请条件自测' } en_size={ 8 }
                               title_en={ '1分钟速测，甄选适合您的移民项目' }/>
                    </div>
                </div>
                <div className={ 'flex items-center bg-white p-3 rounded shadow w-[350px] space-x-2' }>
                    <Image src={ '/testSvg.svg' } alt={ '' } width={ 45 } height={ 45 }/>
                    <div>
                        <Title size={ 10 } bold={ true } title={ '申请条件自测' } en_size={ 8 }
                               title_en={ '1分钟速测，甄选适合您的移民项目' }/>
                    </div>
                </div>
                <div className={ 'flex items-center bg-white p-3 rounded shadow w-[350px] space-x-2' }>
                    <Image src={ '/testSvg.svg' } alt={ '' } width={ 45 } height={ 45 }/>
                    <div>
                        <Title size={ 10 } bold={ true } title={ '申请条件自测' } en_size={ 8 }
                               title_en={ '1分钟速测，甄选适合您的移民项目' }/>
                    </div>
                </div>
                <div className={ 'flex items-center bg-white p-3 rounded shadow w-[350px] space-x-2' }>
                    <Image src={ '/testSvg.svg' } alt={ '' } width={ 45 } height={ 45 }/>
                    <div>
                        <Title size={ 10 } bold={ true } title={ '申请条件自测' } en_size={ 8 }
                               title_en={ '1分钟速测，甄选适合您的移民项目' }/>
                    </div>
                </div>
            </div>

            <div className={ 'text-center text-black text-[50px] font-semibold font-[\'Maven Pro\'] space-y-4' }>
                <span>每年有</span>
                <span className="text-red-600">2000+</span>
                <span>选择移民加拿大</span>
                <div
                    className="text-stone-500 text-[40px] font-normal font-['Noto Sans HK'] leading-10">
                    加拿大移民福利——不可拒绝的加拿大移民理由
                </div>
            </div>

            <div className={ 'py-16  flex flex-wrap justify-center' }>
                <div
                    className={ 'm-4 w-[370px] h-[230px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                    <Image src={ '/test2.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                    <div
                        className="text-stone-500 text-xl font-normal font-['Noto Sans HK'] leading-tight">福利完善多样津贴
                    </div>
                </div>
                <div
                    className={ 'm-4 w-[370px] h-[230px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                    <Image src={ '/test2.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                    <div
                        className="text-stone-500 text-xl font-normal font-['Noto Sans HK'] leading-tight">福利完善多样津贴
                    </div>
                </div>
                <div
                    className={ 'm-4 w-[370px] h-[230px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                    <Image src={ '/test2.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                    <div
                        className="text-stone-500 text-xl font-normal font-['Noto Sans HK'] leading-tight">福利完善多样津贴
                    </div>
                </div>
                <div
                    className={ 'm-4 w-[370px] h-[230px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                    <Image src={ '/test2.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                    <div
                        className="text-stone-500 text-xl font-normal font-['Noto Sans HK'] leading-tight">福利完善多样津贴
                    </div>
                </div>
                <div
                    className={ 'm-4 w-[370px] h-[230px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                    <Image src={ '/test2.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                    <div
                        className="text-stone-500 text-xl font-normal font-['Noto Sans HK'] leading-tight">福利完善多样津贴
                    </div>
                </div>
                <div
                    className={ 'm-4 w-[370px] h-[230px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                    <Image src={ '/test2.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                    <div
                        className="text-stone-500 text-xl font-normal font-['Noto Sans HK'] leading-tight">福利完善多样津贴
                    </div>
                </div>
            </div>

            <div className={ 'space-x-20 text-center' }>
                <Button
                    className={ 'bg-[#11437F] hover:bg-[#11437F] w-[300px] h-[66px] px-4 py-2.5 rounded-[10px] shadow' }>资深顾问全面解答</Button>
                <Button
                    className={ 'bg-[#E83328] hover:bg-[#E83328] w-[300px] h-[66px] px-4 py-2.5 rounded-[10px] shadow' }>了解更多福利</Button>
            </div>

            <div
                className={ 'mt-20 p-20 text-center text-black text-[50px] font-semibold font-[\'Maven Pro\'] space-y-4' }>
                <span>加拿大提供</span>
                <span className="text-red-600">80</span>
                <span>余种移民途径</span>
                <div
                    className="text-stone-500 text-[40px] font-normal font-['Noto Sans HK'] leading-10">
                    不管你是学生还是职场人、企业主，有才或有“财”都可以申请
                </div>
            </div>

            <div className={ 'bg-[url("/images121212.png")] bg-cover bg-no-repeat flex' }>
                <div className={ 'w-1/3 bg-v1-bg1 py-24 px-10 space-y-16' }>
                    <div className="text-center text-white text-[50px] font-semibold font-['Maven Pro']">技术类</div>
                    <div className="flex justify-between flex-wrap bg-white bg-opacity-50 rounded p-5 mb-5">
                        <div className={ 'text-white text-2xl font-normal font-[\'Maven Pro\']' }>省提名雇主担保</div>
                        <div className={ 'flex space-x-3' }>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        </div>
                    </div>
                    <div className="flex justify-between flex-wrap bg-white bg-opacity-50 rounded p-5 mb-5">
                        <div className={ 'text-white text-2xl font-normal font-[\'Maven Pro\']' }>省提名雇主担保</div>
                        <div className={ 'flex space-x-3' }>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        </div>
                    </div>
                    <div className="flex justify-between flex-wrap bg-white bg-opacity-50 rounded p-5 mb-5">
                        <div className={ 'text-white text-2xl font-normal font-[\'Maven Pro\']' }>省提名雇主担保</div>
                        <div className={ 'flex space-x-3' }>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        </div>
                    </div>
                </div>
                <div className={ 'w-1/3 bg-v1-bg2 py-24 px-10 space-y-16' }>
                    <div className="text-center text-white text-[50px] font-semibold font-['Maven Pro']">技术类</div>
                    <div className="flex justify-between flex-wrap bg-white bg-opacity-50 rounded p-5 mb-5">
                        <div className={ 'text-white text-2xl font-normal font-[\'Maven Pro\']' }>省提名雇主担保</div>
                        <div className={ 'flex space-x-3' }>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        </div>
                    </div>
                    <div className="flex justify-between flex-wrap bg-white bg-opacity-50 rounded p-5 mb-5">
                        <div className={ 'text-white text-2xl font-normal font-[\'Maven Pro\']' }>省提名雇主担保</div>
                        <div className={ 'flex space-x-3' }>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        </div>
                    </div>
                    <div className="flex justify-between flex-wrap bg-white bg-opacity-50 rounded p-5 mb-5">
                        <div className={ 'text-white text-2xl font-normal font-[\'Maven Pro\']' }>省提名雇主担保</div>
                        <div className={ 'flex space-x-3' }>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        </div>
                    </div>
                </div>
                <div className={ 'w-1/3 bg-v1-bg3 py-24 px-10 space-y-16' }>
                    <div className="text-center text-white text-[50px] font-semibold font-['Maven Pro']">技术类</div>
                    <div className="flex justify-between flex-wrap bg-white bg-opacity-50 rounded p-5 mb-5">
                        <div className={ 'text-white text-2xl font-normal font-[\'Maven Pro\']' }>省提名雇主担保</div>
                        <div className={ 'flex space-x-3' }>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        </div>
                    </div>
                    <div className="flex justify-between flex-wrap bg-white bg-opacity-50 rounded p-5 mb-5">
                        <div className={ 'text-white text-2xl font-normal font-[\'Maven Pro\']' }>省提名雇主担保</div>
                        <div className={ 'flex space-x-3' }>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        </div>
                    </div>
                    <div className="flex justify-between flex-wrap bg-white bg-opacity-50 rounded p-5 mb-5">
                        <div className={ 'text-white text-2xl font-normal font-[\'Maven Pro\']' }>省提名雇主担保</div>
                        <div className={ 'flex space-x-3' }>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                            <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={ 'mt-20 p-20 text-center text-black text-[50px] font-semibold font-[\'Maven Pro\'] space-y-4' }>
                <div>博泰专注加拿大移民</div>
                <div
                    className="text-stone-500 text-[40px] font-normal font-['Noto Sans HK'] leading-10">
                    致力于为中国申请人带来优质的加拿大移民服务
                </div>
            </div>

            <div className={ 'relative w-full h-[460px]' }>
                <div className={ 'absolute top-0 left-0 w-full h-full' }>
                    <Province_banner banner={ '/pki4492111.png' }/>
                </div>
                <div
                    className={ 'px-20 flex items-center justify-around text-white w-full h-full absolute left-0 top-0 bg-gradient-to-r from-[#062F7E] to-[#3B63B173]' }>
                    <div className={ 'space-y-4 text-center' }>
                        <span className="text-6xl font-bold">5</span>
                        <span className="text-3xl">家+</span>
                        <p className={ 'text-xl' }>加拿大直营公司</p>
                    </div>
                    <div className={ 'w-[1px] h-[110px] bg-white' }></div>
                    <div className={ 'space-y-4 text-center' }>
                        <span className="text-6xl font-bold">15</span>
                        <span className="text-3xl">年+</span>
                        <p className={ 'text-xl' }>加拿大本土移民服务经验</p>
                    </div>
                    <div className={ 'w-[1px] h-[110px] bg-white' }></div>
                    <div className={ 'space-y-4 text-center' }>
                        <span className="text-6xl font-bold">15</span>
                        <span className="text-3xl">位+</span>
                        <p className={ 'text-xl' }>加拿大持牌顾问供职</p>
                    </div>
                    <div className={ 'w-[1px] h-[110px] bg-white' }></div>
                    <div className={ 'space-y-4 text-center' }>
                        <span className="text-6xl font-bold">2000</span>
                        <span className="text-3xl">+</span>
                        <p className={ 'text-xl' }>成功案例</p>
                    </div>
                </div>
            </div>

            <Province_banner banner={ '/581703237163_.jpg' }/>

            <div className={ 'space-x-20 text-center' }>
                <Button
                    className={ 'bg-[#11437F] hover:bg-[#11437F] w-[300px] h-[66px] px-4 py-2.5 rounded-[10px] shadow' }>资深顾问全面解答</Button>
                <Button
                    className={ 'bg-[#E83328] hover:bg-[#E83328] w-[300px] h-[66px] px-4 py-2.5 rounded-[10px] shadow' }>了解更多福利</Button>
            </div>

            <div className={ 'relative  w-full h-[863px]' }>
                <div className={ 'absolute top-0 left-0 w-full h-full' }>
                    <Province_banner banner={ '/bg8dfw.png' }/>
                </div>
                <div
                    className={ 'absolute top-0 left-0 w-full h-full bg-v1-bg1 flex flex-col justify-center space-y-20' }>
                    <div className={ 'text-center text-white text-[40px] font-bold font-[\'Maven Pro\']' }>
                        博泰<span className="text-red-600">8</span>大服务保障
                        <p className={ 'text-[30px] font-light' }>加拿大移民福利——不可拒绝的加拿大移民理由</p>
                    </div>
                    <div className={ 'flex flex-wrap justify-center' }>
                        <div
                            className={ 'm-4 w-[300px] h-[190px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                            <Image src={ '/Group4591.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                            <p
                                className="text-black text-2xl font-bold">
                                量身定制方案
                            </p>
                        </div>
                        <div
                            className={ 'm-4 w-[300px] h-[190px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                            <Image src={ '/Group4592.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                            <p
                                className="text-black text-2xl font-bold">
                                量身定制方案
                            </p>
                        </div>
                        <div
                            className={ 'm-4 w-[300px] h-[190px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                            <Image src={ '/Group4593.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                            <p
                                className="text-black text-2xl font-bold">
                                量身定制方案
                            </p>
                        </div>
                        <div
                            className={ 'm-4 w-[300px] h-[190px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                            <Image src={ '/Group4594.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                            <p
                                className="text-black text-2xl font-bold">
                                量身定制方案
                            </p>
                        </div>
                        <div
                            className={ 'm-4 w-[300px] h-[190px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                            <Image src={ '/Group4595.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                            <p
                                className="text-black text-2xl font-bold">
                                量身定制方案
                            </p>
                        </div>
                        <div
                            className={ 'm-4 w-[300px] h-[190px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                            <Image src={ '/Group4596.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                            <p
                                className="text-black text-2xl font-bold">
                                量身定制方案
                            </p>
                        </div>
                        <div
                            className={ 'm-4 w-[300px] h-[190px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                            <Image src={ '/Group4597.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                            <p
                                className="text-black text-2xl font-bold">
                                量身定制方案
                            </p>
                        </div>
                        <div
                            className={ 'm-4 w-[300px] h-[190px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                            <Image src={ '/Group4598.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                            <p
                                className="text-black text-2xl font-bold">
                                量身定制方案
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={ 'w-full h-[855px] bg-default-blue' }>
                <div className={ 'relative w-full h-[557px]' }>
                    <div className={ 'absolute top-0 left-0 w-full h-full' }>
                        <Province_banner banner={ '/pki7947412.png' }/>
                    </div>
                    <div
                        className={ 'w-full h-full absolute left-0 top-0 bg-gradient-to-r from-[#451411] to-[#5F100B5E] space-y-20' }>
                        <div className={ 'text-center font-bold pt-10' }>
                            <span className="text-[#E83328] text-[150px]">2000+</span>
                            <p className={ 'text-6xl text-white font-light' }>申请人认可的移民服务品牌</p>
                        </div>
                        <div
                            className={ 'w-[1280px] h-[450px] bg-white mx-auto rounded-lg flex items-center space-x-6 p-6' }>
                            <ArrowLeft/>
                            <div className={ 'w-full flex space-x-4' }>
                                <Image src={ '/qdasdasdasdas.png' } alt={ '' } width={ 220 } height={ 400 }
                                       className={ 'shadow' }/>
                                <Image src={ '/qdasdasdasdas.png' } alt={ '' } width={ 220 } height={ 400 }
                                       className={ 'shadow' }/>
                                <Image src={ '/qdasdasdasdas.png' } alt={ '' } width={ 220 } height={ 400 }
                                       className={ 'shadow' }/>
                                <Image src={ '/qdasdasdasdas.png' } alt={ '' } width={ 220 } height={ 400 }
                                       className={ 'shadow' }/>
                                <Image src={ '/qdasdasdasdas.png' } alt={ '' } width={ 220 } height={ 400 }
                                       className={ 'shadow' }/>
                            </div>
                            <ArrowRight/>
                        </div>
                    </div>
                </div>
            </div>


            <Center_box col={ true }>
                <Title size={ 50 } height={ 20 } bold={ true } center={ true }
                       title={ '移民省份' }/>
                <div className={ 'w-full bg-[url("/5db84e.png")] bg-cover bg-no-repeat py-40' }>
                    <Margin20_box className={ 'p-6 bg-white rounded-lg flex justify-around' }>
                        { DropdownMenuItemEach_province.map((item, index) => {
                            return (<Link href={ `${ item.href }` } key={ index }>
                                <p className={ 'p-3 text-zinc-800 text-2xl font-normal font-[\'Maven Pro\'] leading-10 hover:text-default-blue transition' }>{ item.text }</p>
                            </Link>)
                        }) }
                    </Margin20_box>
                </div>
            </Center_box>

            <div>
                <Title size={ 50 } height={ 20 } bold={ true } center={ true }
                       title={ '我们的案例' }/>
                <Margin20_box>
                    <div className={ 'w-full flex justify-between flex-wrap' }>
                        <Cases_item url={ '/single_profile' } subject={ '雇主担保移民' } date={ '2023-01-01' }
                                    title={ '来自新疆的维吾尔族大哥,经历189天成功拿到工签,准备开启雇主担保移民之路' }
                                    dec={ '本案例由顾问Ken主理完成,在此感谢Ken的辛勤付出!' }/>
                    </div>
                </Margin20_box>
            </div>

            <div className={ 'w-full bg-[url("/5db84e.png")] bg-cover bg-no-repeat py-40' }>
                <Margin20_box className={ 'bg-white p-20 rounded-lg flex space-x-40 ' }>
                    <div className={ 'space-y-52' }>
                        <Title size={ 50 } bold={ true } title={ '位于温哥华的资深移民公司' } en_size={ 23 }
                               title_en={ '我们有着多年加拿大移民.留学经验,近年来移民与留学的难度越来越高我们扩展了一批优质切快速的移民留学通道,由专业的持牌顾问一对一咨询指导,保障您的梦想' }/>
                        <div>
                            <Link href={ '/all_profiles' }>
                                <Button
                                    className={ 'text-[24px] px-14 py-8 text-white bg-default-blue hover:bg-default-blue font-light' }>
                                    查看更多案例和评价
                                    <ChevronsRight className={ 'ml-2' }
                                    />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <Image src={ '/62035b84efeec66b4bc2008d.png' } alt={ '' } width={ 600 } height={ 400 }
                           className={ 'rounded-lg' }/>
                </Margin20_box>
            </div>

            <div>
                <Title size={ 50 } bold={ true } height={ 24 } center={ true } title={ '案例研究' } en_size={ 27 }
                       title_en={ '我们帮助客户在不断变化的环境中脱颖而出' }/>
                <Margin20_box className={ 'flex items-end justify-between mb-24' } border={ true }>
                    <Case_search_item url={ '/ic6.svg' } title={ '客户同比优势不足，我们将通过率提升至100%' }
                                      sub_title={ '100%与客户共同成长' }/>
                    <Case_search_item url={ '/ic7.svg' }
                                      center={ true }
                                      title={ '同比去年雇主担保通过率在三个月我们努力将客户服务做到最好，提升至3倍' }
                                      sub_title={ '3X我们的独门内功!' }/>
                    <Case_search_item url={ '/ic8.svg' } title={ '我们努力将客户服务做到最好，实现O差评!' }
                                      sub_title={ '客户优先,服务第一' }/>
                </Margin20_box>
            </div>

            <div>
                <Title size={ 50 } bold={ true } height={ 24 } center={ true } title={ '我们的持牌顾问' }/>
                <Margin20_box className={ 'flex flex-wrap justify-between' } border={ true }>
                    <Business_card url={ '/de9b3815.jpg' }
                                   des={ 'Tailwind CSS is the only framework that I seen scale, on large teams. It’s easy to customize, adapts to any design,and the build size is tiny.' }
                                   name={ 'Sarah Dayan' } job_title={ 'Staff Engineer, Algolia' }/>
                    <Business_card url={ '/de9b3815.jpg' }
                                   des={ 'Tailwind CSS is the only framework that I seen scale, on large teams. It’s easy to customize, adapts to any design,and the build size is tiny.' }
                                   name={ 'Sarah Dayan' } job_title={ 'Staff Engineer, Algolia' }/>
                    <Business_card url={ '/de9b3815.jpg' }
                                   des={ 'Tailwind CSS is the only framework that I seen scale, on large teams. It’s easy to customize, adapts to any design,and the build size is tiny.' }
                                   name={ 'Sarah Dayan' } job_title={ 'Staff Engineer, Algolia' }/>
                </Margin20_box>
            </div>

            <div>
                <div className={ 'py-24 w-full text-center' }>
                    <p className={ 'text-[50px] font-bold' }>
                        简单的<span className={ 'text-default-blue' }>三个步骤</span>,即刻开始改变!
                    </p>
                    <p className={ 'text-[23px] text-description-text-color' }>
                        致力于为中国申请人带来优质的加拿大移民服务
                    </p>
                </div>
                <Margin20_box className={ 'flex items-center justify-between mb-24' }>
                    <Step_item url={ '/ic10.svg' } title={ '登记信息' }
                               des={ '登记您的社交媒体或邮箱我们的持牌顾问会第一时间联系您，了解您的需求' }
                               num={ '01' }/>
                    <Step_item num={ '02' } des={ '根据您所在地区的时间安排会议或着消息沟通' } url={ '/ic2.svg' }
                               title={ '定制方案' }/>
                    <Step_item num={ '03' } des={ '我们的努力只有一个目标，那就是认可我们的方案' } url={ '/ic3.svg' }
                               title={ '方案认可' }/>
                </Margin20_box>
            </div>

            <div className={ 'bg-mask-color6' }>
                <Title size={ 50 } title={ '我们来谈谈' }
                       bold={ true } height={ 24 } en_size={ 22 } center={ true }
                       title_en={ '我们愿意与优秀的人交流。只要打个招呼，我们就能开始富有成效的合作。开始您自己的成功故事' }/>
                <Margin20_box className={ 'w-[500px] mx-auto mb-24' } border={ true }>
                    <CustomerApplicationFrom/>
                </Margin20_box>

            </div>
            <div>
                <Title size={ 50 } title={ '我们的社交媒体' }
                       bold={ true } height={ 24 } center={ true }/>
                <Margin20_box className={ 'flex justify-between mb-24' } border={ true }>
                    <Media_item title={ '抖音' } url={ '/tiktok.svg' }/>
                    <Media_item title={ 'youtube' } url={ '/youtube.svg' }/>
                    <Media_item url={ '/facebook.svg' } title={ 'facebook' }/>
                    <Media_item url={ '/twitter.svg' } title={ 'twitter' }/>
                </Margin20_box>
            </div>
        </div>)
}
