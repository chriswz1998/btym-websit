'use client'

import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Province_banner } from '@/components/province_banner'
import { Hot_project_item } from '@/app/(marketing)/_components/hot_project_item'
import { how_item_res } from '@/lib/publicResuces'
import Link from 'next/link'
import { DialogCoverFrom } from '@/components/dialog'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import React from 'react'
import {Carousels} from "@/app/(marketing)/_components/carousel";


export default function MarketingPage(){
    return (<div>
        <Navbar/>
        <Carousels/>
        <div className={'flex items-center flex-wrap py-5'}>
            <div className='flex items-center bg-green-200 p-5 md:mx-auto'>
                <ArrowLeft/>
                移民行业旗舰 品牌信誉保证
            </div>
            <div className='flex items-center bg-green-200 p-5 md:mx-auto'>
                <ArrowLeft/>
                移民行业旗舰 品牌信誉保证
            </div>
            <div className='flex items-center bg-green-200 p-5 md:mx-auto'>
                <ArrowLeft/>
                移民行业旗舰 品牌信誉保证
            </div>
            <div className='flex items-center bg-green-200 p-5 md:mx-auto'>
                <ArrowLeft/>
                移民行业旗舰 品牌信誉保证
            </div>
        </div>

        {/*每年有2000+选择移民加拿大*/}
        <div className={ 'py-16  flex flex-wrap justify-center' }>
            { how_item_res.map((item, index) => {
                return (<Hot_project_item url={ item.url } href={ item.href } text={ item.text } key={ index }/>)
            }) }
        </div>

        <div className={ 'space-x-20 text-center' }>
            <DialogCoverFrom text={ '资深顾问全面解答' } variant={ 'ghost' }
                             className={ 'bg-[#11437F] hover:bg-[#11437F] w-[300px] h-[66px] text-white hover:text-white px-4 py-2.5 rounded-[10px] shadow' }/>
            <Link href={ '/employer' }>
                <Button
                    className={ 'bg-[#E83328] hover:bg-[#E83328] w-[300px] h-[66px] px-4 py-2.5 rounded-[10px] shadow' }>了解更多福利</Button>
            </Link>

        </div>

        {/*博泰专注加拿大移民*/ }
        <div
            className={ 'p-20 pt-30 text-center text-black text-[50px] font-semibold font-[\'Maven Pro\'] space-y-4' }>
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
                    <span className="text-6xl font-bold">3</span>
                    <span className="text-3xl">家+</span>
                    <p className={ 'text-xl' }>加拿大直营公司,
                        <br/>
                   加拿大东部，中部，西部项目全覆盖</p>
                </div>
                <div className={ 'w-[1px] h-[110px] bg-white' }></div>
                <div className={ 'space-y-4 text-center' }>
                    <span className="text-6xl font-bold">10</span>
                    <span className="text-3xl">年+</span>
                    <p className={ 'text-xl' }>加拿大本土移民服务经验</p>
                </div>
                <div className={ 'w-[1px] h-[110px] bg-white' }></div>
                <div className={ 'space-y-4 text-center' }>
                    <span className="text-6xl font-bold">4</span>
                    <span className="text-3xl">位+</span>
                    <p className={ 'text-xl' }>加拿大持牌移民顾问</p>
                </div>
                <div className={ 'w-[1px] h-[110px] bg-white' }></div>
                <div className={ 'space-y-4 text-center' }>
                    <span className="text-6xl font-bold">200</span>
                    <span className="text-3xl">+</span>
                    <p className={ 'text-xl' }>大量真实成功案例</p>
                </div>
            </div>
        </div>
        <Province_banner banner={ '/581703237163_.jpg' }/>
        <div className={ 'bg-[#EBF3FC] py-20 space-x-20 text-center' }>
            <Button
                className={ 'bg-[#11437F] hover:bg-[#11437F] w-[300px] h-[66px] px-4 py-2.5 rounded-[10px] shadow' }>移民专家在线解答</Button>
            <DialogCoverFrom text={ '预约顾问评估' } variant={ 'ghost' }
                             className={ 'bg-[#E83328] hover:bg-[#E83328] w-[300px] h-[66px] text-white hover:text-white px-4 py-2.5 rounded-[10px] shadow' }/>
        </div>

        {/*博泰8大服务保障*/ }
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
                            中加两地直营
                        </p>
                    </div>
                    <div
                        className={ 'm-4 w-[300px] h-[190px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                        <Image src={ '/Group4593.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                        <p
                            className="text-black text-2xl font-bold">
                            本土团队
                        </p>
                    </div>
                    <div
                        className={ 'm-4 w-[300px] h-[190px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                        <Image src={ '/Group4594.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                        <p
                            className="text-black text-2xl font-bold">
                            多重材料审核
                        </p>
                    </div>
                    <div
                        className={ 'm-4 w-[300px] h-[190px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                        <Image src={ '/Group4595.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                        <p
                            className="text-black text-2xl font-bold">
                            成功后再收费
                        </p>
                    </div>
                    <div
                        className={ 'm-4 w-[300px] h-[190px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                        <Image src={ '/Group4596.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                        <p
                            className="text-black text-2xl font-bold">
                            协助拒签复议
                        </p>
                    </div>
                    <div
                        className={ 'm-4 w-[300px] h-[190px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                        <Image src={ '/Group4597.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                        <p
                            className="text-black text-2xl font-bold">
                            登陆面试指导
                        </p>
                    </div>
                    <div
                        className={ 'm-4 w-[300px] h-[190px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                        <Image src={ '/Group4598.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                        <p
                            className="text-black text-2xl font-bold">
                            安家生活服务
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className={ 'w-full h-[855px] mt-20' }>
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
                        className={ 'w-[1280px] h-[450px] bg-white mx-auto rounded-lg flex flex-col items-center justify-center space-x-6 p-6' }>
                        <div className={ 'w-full flex space-x-4' }>
                            <Image src={ '/161704431045_.pic.jpg' } alt={ '' } width={ 233 } height={300}
                                 className={ 'shadow' }/>
                            <Image src={ '/171704431045_.pic.jpg' } alt={ '' } width={ 233 } height={300}
                                 className={ 'shadow' }/>
                            <Image src={ '/181704431045_.pic.jpg' } alt={ '' } width={ 233 } height={300}
                                 className={ 'shadow' }/>
                            <Image src={ '/191704431045_.pic.jpg' } alt={ '' } width={ 233 } height={300}
                                 className={ 'shadow' }/>
                            <Image src={ '/201704431045_.pic.jpg' } alt={ '' } width={ 233 } height={300}
                                 className={ 'shadow' }/>
                        </div>
                        <Link href={ '/all_profiles' }>
                            <Button className={ 'm-6' } variant={ 'ghost' }>查看更多案例</Button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    </div>)
}
