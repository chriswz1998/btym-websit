'use client'

import { Navbar } from '@/components/navbar'
import { Province_banner } from '@/components/province_banner'
import ReactPlayer from 'react-player'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutUsPage(){
    const storageName = (text: string) => {
        window.localStorage.setItem('employer_name', text)
    }
    return (<div>
        <Navbar noBgModel={ true }/>
        <Province_banner banner={ '/banner.png' }/>
        <div className={ 'flex p-20 items-center justify-center space-x-20' }>
            <div className={ 'w-[478px] space-y-6' }>
                <p className="text-black text-[50px] font-['Maven Pro']">博泰集团</p>
                <p className="text-stone-500 text-[40px] font-['Noto Sans HK'] ">Botai Leading</p>
                <p
                    className=" text-zinc-800 text-xl font-medium leading-[30px]">
                    博泰集团，位于加拿大的东部，面积约100万平方公里，是加拿大的首都渥太华所在地。
                    安大略是加拿大人口最多的省份，最大城市和省会为多伦多。安大略省不仅拥有最大的土地面积和最稠密的人口，
                    同时也是加拿大最大的高校聚集地，在安大略省的高等院校几乎是全国高校总数,例如多伦多大学、麦克马斯特大学、皇后大学、约克大学等。
                </p>
            </div>
            <ReactPlayer width="535px"
                         height="300px"
                         url={ 'https://www.youtube.com/watch?v=ckxHflanrPk' }/>
        </div>
        <div className={ 'relative' }>
            <Province_banner banner={ '/5daea7e521746123.png' }/>
            <div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFFB2] to-[#FFFFFF00] flex items-center justify-center space-x">
                <div
                    className="text-zinc-800 text-[50px] font-semibold font-['Maven Pro'] leading-[70px]">中加直营<br/>无第三方
                </div>

                <div className={ 'flex flex-wrap w-1/2' }>
                    <div className={ 'relative bg-sky-900 w-[340px] h-[150px] text-white p-6 rounded-lg m-6' }>
                        <div
                            className="absolute -top-[20px] left-[55px] rounded-full w-[230px] py-2 bg-red-600 text-center text-white">丰富的行业经验
                        </div>
                        <div className={ 'space-y-2' }>
                            <p>1.专注加拿大移民申请15年+</p>
                            <p>1.专注加拿大移民申请15年+</p>
                            <p>1.专注加拿大移民申请15年+</p>
                        </div>
                    </div>
                    <div className={ 'relative bg-sky-900 w-[340px] h-[150px] text-white p-6 rounded-lg m-6' }>
                        <div
                            className="absolute -top-[20px] left-[55px] rounded-full w-[230px] py-2 bg-red-600 text-center text-white">丰富的行业经验
                        </div>
                        <div className={ 'space-y-2' }>
                            <p>1.专注加拿大移民申请15年+</p>
                            <p>1.专注加拿大移民申请15年+</p>
                            <p>1.专注加拿大移民申请15年+</p>
                        </div>
                    </div>
                    <div className={ 'relative bg-sky-900 w-[340px] h-[150px] text-white p-6 rounded-lg m-6' }>
                        <div
                            className="absolute -top-[20px] left-[55px] rounded-full w-[230px] py-2 bg-red-600 text-center text-white">丰富的行业经验
                        </div>
                        <div className={ 'space-y-2' }>
                            <p>1.专注加拿大移民申请15年+</p>
                            <p>1.专注加拿大移民申请15年+</p>
                            <p>1.专注加拿大移民申请15年+</p>
                        </div>
                    </div>
                    <div className={ 'relative bg-sky-900 w-[340px] h-[150px] text-white p-6 rounded-lg m-6' }>
                        <div
                            className="absolute -top-[20px] left-[55px] rounded-full w-[230px] py-2 bg-red-600 text-center text-white">丰富的行业经验
                        </div>
                        <div className={ 'space-y-2' }>
                            <p>1.专注加拿大移民申请15年+</p>
                            <p>1.专注加拿大移民申请15年+</p>
                            <p>1.专注加拿大移民申请15年+</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={ 'p-20 space-y-16' }>
            <div className="text-black text-[50px] text-center font-semibold font-['Maven Pro']">博泰风采</div>
            <ReactPlayer width="100%"
                         height="600px"
                         url={ 'https://www.youtube.com/watch?v=ckxHflanrPk' }/>
        </div>
        <div className={ 'mb-20 space-y-10' }>
            <div className={ 'text-center text-black text-[50px] font-bold font-[\'Maven Pro\']' }>
                博泰推荐·
                <span className="text-red-600">热门项目推荐</span>
            </div>
            <div className={ 'flex' }>
                <div className={ 'w-1/5 relative' }>
                    <Province_banner banner={ '/1231223.png' }/>
                    <div
                        className={ 'absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center space-y-8 p-8 bg-black/20' }>
                        <div className="text-white text-3xl font-bold font-['Inter'] leading-[73px]">BC省雇主担保</div>
                        <div
                            className="text-center text-white text-2xl font-normal font-['Inter'] leading-[30px]">科技类人才高速通道<br/>快速定居温哥华
                        </div>
                        <Link href={ '/employer' }>
                            <Button variant={ 'destructive' } onClick={ () => storageName('BC省雇主担保') }
                                    className={ 'rounded-full px-10' }>查看详情</Button>
                        </Link>
                    </div>
                </div>
                <div className={ 'w-1/5 relative' }>
                    <Province_banner banner={ '/1231234.png' }/>
                    <div
                        className={ 'absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center space-y-8 p-8 bg-black/20' }>
                        <div className="text-white text-3xl font-bold font-['Inter'] leading-[73px]">萨省雇主担保</div>
                        <div
                            className="text-center text-white text-2xl font-normal font-['Inter'] leading-[30px]">审核速度快，更多岗位
                            选择
                        </div>
                        <Link href={ '/employer' }>
                            <Button variant={ 'destructive' } onClick={ () => storageName('萨省雇主担保') }
                                    className={ 'rounded-full px-10' }>查看详情</Button>
                        </Link>
                    </div>
                </div>
                <div className={ 'w-1/5 relative' }>
                    <Province_banner banner={ '/1231231234.png' }/>
                    <div
                        className={ 'absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center space-y-8 p-8 bg-black/20' }>
                        <div className="text-white text-3xl font-bold font-['Inter'] leading-[73px]">阿省雇主担保</div>
                        <div
                            className="text-center text-white text-2xl font-normal font-['Inter'] leading-[30px]">教育大省，生活成本低
                        </div>
                        <Link href={ '/employer' }>
                            <Button variant={ 'destructive' } onClick={ () => storageName('阿省雇主担保') }
                                    className={ 'rounded-full px-10' }>查看详情</Button>
                        </Link>
                    </div>
                </div>
                <div className={ 'w-1/5 relative' }>
                    <Province_banner banner={ '/124123123.png' }/>
                    <div
                        className={ 'absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center space-y-8 p-8 bg-black/20' }>
                        <div className="text-white text-3xl font-bold font-['Inter'] leading-[73px]">NS省雇主担保</div>
                        <div
                            className="text-center text-white text-2xl font-normal font-['Inter'] leading-[30px]">低语言学历要求，审批速度快
                        </div>
                        <Link href={ '/employer' }>
                            <Button variant={ 'destructive' } onClick={ () => storageName('NS省雇主担保') }
                                    className={ 'rounded-full px-10' }>查看详情</Button>
                        </Link>
                    </div>
                </div>
                <div className={ 'w-1/5 relative' }>
                    <Province_banner banner={ '/1231233434.png' }/>
                    <div
                        className={ 'absolute top-0 left-0 w-full h-full flex flex-col justify-end items-center space-y-8 p-8 bg-black/20' }>
                        <div className="text-white text-3xl font-bold font-['Inter'] leading-[73px]">联邦农业试点</div>
                        <div
                            className="text-center text-white text-2xl font-normal font-['Inter'] leading-[30px]">无硬性年龄及语言要求
                        </div>
                        <Link href={ '/employer' }>
                            <Button variant={ 'destructive' } onClick={ () => storageName('联邦农业试点') }
                                    className={ 'rounded-full px-10' }>查看详情</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
