'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Hot_project_item } from '@/app/(marketing)/_components/hot_project_item'
import Link from 'next/link'
import { DialogCoverFrom } from '@/components/dialog'
import React, { useEffect, useState } from 'react'
import { Carousels } from '@/app/(marketing)/_components/carousel';
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Footer from '@/components/footer';
import useHttp from '@/hooks/useActions'
import { Banner, CarouselDto } from '@/lib/model'

export default function MarketingPage(){
    const [ banner, setBanner ] = useState<Banner>()
    const [ carousel, setCarousel ] = useState<CarouselDto[]>()
    const { isLoading, execute } = useHttp<null, Banner>()

    const getDate = async() => {
        const response = await execute('firstPage/banner', 'GET') as unknown as [ Banner ];
        const carousel = await execute('carousel', 'GET') as unknown as CarouselDto[];
        const [ res ] = response;
        setBanner(res)
        setCarousel(carousel)
    }
    useEffect(() => {
        getDate()
    }, [])

    if(isLoading){
        return (<div className={ 'w-full h-full bg-mask-color5 flex flex-col justify-center items-center' }>
            <h1 className={ 'text-white font-bold text-3xl' }>将要访问博泰移民，请稍后...</h1>
            <Image src={ '/logo.png' } alt={ '' } width={ 300 } height={ 100 }/>
        </div>)
    }

    return (<div className="w-full overflow-hidden">
        <Navbar/>
        <Carousels banner={ banner }/>
        <div className={ 'md:flex items-center flex-wrap p-2.5 md:p-5' }>
            <div
                className="flex items-center bg-mask-color/10 rounded-lg p-2.5 m-2.5 md:m-0 md:p-5 md:mx-auto md:space-x-4">
                <Image src={ '/icon131-1.svg' } alt={ '' } height={ 30 } width={ 30 }/>
                <span className={ 'ml-5 font-bold text-blue-900' }>移民行业旗舰 品牌信誉保证</span>
            </div>
            <div
                className="flex items-center bg-mask-color/10 rounded-lg p-2.5 m-2.5 md:m-0 md:p-5 md:mx-auto md:space-x-4">
                <Image src={ '/icon131.svg' } alt={ '' } height={ 30 } width={ 30 }/>
                <span className={ 'ml-5 font-bold text-blue-900' }>加国精英团队 提供专业服务</span>
            </div>
            <div
                className="flex items-center bg-mask-color/10 rounded-lg p-2.5 m-2.5 md:m-0 md:p-5 md:mx-auto md:space-x-4">
                <Image src={ '/icon131-2.svg' } alt={ '' } height={ 30 } width={ 30 }/>
                <span className={ 'ml-5 font-bold text-blue-900' }>CICC持牌移民顾问亲审文案</span>
            </div>
            <div
                className="flex items-center bg-mask-color/10 rounded-lg p-2.5 m-2.5 md:m-0 md:p-5 md:mx-auto md:space-x-4">
                <Image src={ '/icon131-3.svg' } alt={ '' } height={ 30 } width={ 30 }/>
                <span className={ 'ml-5 font-bold text-blue-900' }>全程一站式无忧服务</span>
            </div>
        </div>
        <div className={ 'px-5 md:p-0' }>
            <Carousel
                opts={ {
                    align: 'start'
                } }
                className="w-4/5 mx-auto md:my-10"
            >
                <CarouselContent>
                    { carousel?.map((item, index) => {
                        return (
                            <Hot_project_item url={ item.url } href={ item.link } text={ item.text } key={ index }/>)
                    }) }
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
        <div className={ 'md:space-x-20 text-center' }>
            <DialogCoverFrom text={ '资深顾问全面解答' } variant={ 'ghost' }
                             className={ 'bg-[#11437F] hover:bg-[#11437F] w-[180px] h-[46px] md:w-[300px] md:h-[66px] text-white hover:text-white rounded-[10px] shadow' }/>
            <Button
                className={ 'ml-3 md:m-0 bg-[#E83328] hover:bg-[#E83328] w-[180px] h-[46px] md:w-[300px] md:h-[66px] rounded-[10px] shadow' }>
                <Link href={ '/employer' }>
                    了解更多福利
                </Link>
            </Button>
        </div>
        <div
            className={ 'md:p-20 md:pt-30 pt-10 text-center text-black text-4xl md:text-[50px] font-semibold space-y-4' }>
            <div>博泰专注加拿大移民</div>
            <div
                className="text-stone-500 md:text-[40px] text-2xl font-normal">
                致力于为中国申请人带来优质的加拿大移民服务
            </div>
        </div>
        <div className={ 'relative w-full h-[150px] md:h-[460px]' }>
            <Image src={ '/581703237163_.jpg' } alt={ '/' } fill/>
        </div>
        <div className={ 'md:space-x-20 text-center bg-[#EBF3FC] py-7 md:py-20' }>
            <DialogCoverFrom text={ '预约顾问评估' } variant={ 'ghost' }
                             className={ 'bg-[#11437F] hover:bg-[#11437F] w-[180px] h-[46px] md:w-[300px] md:h-[66px] text-white hover:text-white rounded-[10px] shadow' }/>
            <Button
                className={ 'ml-3 md:m-0 bg-[#E83328] hover:bg-[#E83328] w-[180px] h-[46px] md:w-[300px] md:h-[66px] rounded-[10px] shadow' }>
                <Link href={ '/employer' }>
                    移民专家在线解答
                </Link>
            </Button>
        </div>

        <div className={ 'relative  w-full  md:h-[863px]' }>
            <div className={ 'absolute top-0 left-0 w-full h-full hidden md:block' }>
                <Image src={ '/bg8dfw.png' } alt={ '/' } fill/>
            </div>
            <div
                className={ 'p-2.5 md:p-0 md:absolute top-0 left-0 w-full h-full bg-v1-bg1 flex flex-col justify-center md:space-y-20' }>
                <div
                    className={ 'py-10 md:p-0 text-center text-white text-4xl md:text-[40px] font-bold space-y-2 md:space-y-10' }>
                    <p>博泰<span className="text-red-600">8</span>大服务保障</p>
                    <p className={ 'text-2xl md:text-[30px] font-light' }>加拿大移民福利——不可拒绝的加拿大移民理由</p>
                </div>
                <div className={ 'flex flex-col overflow-hidden md:grid grid-cols-4' }>
                    <div
                        className={ 'p-5 md:py-5 m-2.5 md:m-5 bg-white rounded-lg shadow-lg md:space-y-4 flex md:flex-col md:justify-center items-center' }>
                        <Image src={ '/Group4591.svg' } alt={ '' } width={ 70 } height={ 70 }
                               className={ 'hidden md:block' }/>
                        <Image src={ '/Group4591.svg' } alt={ '' } width={ 30 } height={ 30 }
                               className={ 'block md:hidden' }/>
                        <p
                            className="text-black text-lg md:text-2xl md:font-bold ml-5 md:m-0">
                            量身定制方案
                        </p>
                    </div>
                    <div
                        className={ 'p-5 md:py-5 m-2.5 md:m-5 bg-white rounded-lg shadow-lg md:space-y-4 flex md:flex-col md:justify-center items-center' }>
                        <Image src={ '/Group4592.svg' } alt={ '' } width={ 70 } height={ 70 }
                               className={ 'hidden md:block' }/>
                        <Image src={ '/Group4592.svg' } alt={ '' } width={ 30 } height={ 30 }
                               className={ 'block md:hidden' }/>
                        <p
                            className="text-black text-lg md:text-2xl md:font-bold ml-5 md:m-0">
                            中加两地直营
                        </p>
                    </div>
                    <div
                        className={ 'p-5 md:py-5 m-2.5 md:m-5 bg-white rounded-lg shadow-lg md:space-y-4 flex md:flex-col md:justify-center items-center' }>
                        <Image src={ '/Group4593.svg' } alt={ '' } width={ 70 } height={ 70 }
                               className={ 'hidden md:block' }/>
                        <Image src={ '/Group4593.svg' } alt={ '' } width={ 30 } height={ 30 }
                               className={ 'block md:hidden' }/>
                        <p
                            className="text-black text-lg md:text-2xl md:font-bold ml-5 md:m-0">
                            本土团队
                        </p>
                    </div>
                    <div
                        className={ 'p-5 md:py-5 m-2.5 md:m-5 bg-white rounded-lg shadow-lg md:space-y-4 flex md:flex-col md:justify-center items-center' }>
                        <Image src={ '/Group4594.svg' } alt={ '' } width={ 70 } height={ 70 }
                               className={ 'hidden md:block' }/>
                        <Image src={ '/Group4594.svg' } alt={ '' } width={ 30 } height={ 30 }
                               className={ 'block md:hidden' }/>
                        <p
                            className="text-black text-lg md:text-2xl md:font-bold ml-5 md:m-0">
                            多重材料审核
                        </p>
                    </div>
                    <div
                        className={ 'p-5 md:py-5 m-2.5 md:m-5 bg-white rounded-lg shadow-lg md:space-y-4 flex md:flex-col md:justify-center items-center' }>
                        <Image src={ '/Group4595.svg' } alt={ '' } width={ 70 } height={ 70 }
                               className={ 'hidden md:block' }/>
                        <Image src={ '/Group4595.svg' } alt={ '' } width={ 30 } height={ 30 }
                               className={ 'block md:hidden' }/>
                        <p
                            className="text-black text-lg md:text-2xl md:font-bold ml-5 md:m-0">
                            成功后再收费
                        </p>
                    </div>
                    <div
                        className={ 'p-5 md:py-5 m-2.5 md:m-5 bg-white rounded-lg shadow-lg md:space-y-4 flex md:flex-col md:justify-center items-center' }>
                        <Image src={ '/Group4596.svg' } alt={ '' } width={ 70 } height={ 70 }
                               className={ 'hidden md:block' }/>
                        <Image src={ '/Group4596.svg' } alt={ '' } width={ 30 } height={ 30 }
                               className={ 'block md:hidden' }/>
                        <p
                            className="text-black text-lg md:text-2xl md:font-bold ml-5 md:m-0">
                            协助拒签复议
                        </p>
                    </div>
                    <div
                        className={ 'p-5 md:py-5 m-2.5 md:m-5 bg-white rounded-lg shadow-lg md:space-y-4 flex md:flex-col md:justify-center items-center' }>
                        <Image src={ '/Group4597.svg' } alt={ '' } width={ 70 } height={ 70 }
                               className={ 'hidden md:block' }/>
                        <Image src={ '/Group4597.svg' } alt={ '' } width={ 30 } height={ 30 }
                               className={ 'block md:hidden' }/>
                        <p
                            className="text-black text-lg md:text-2xl md:font-bold ml-5 md:m-0">
                            登陆面试指导
                        </p>
                    </div>
                    <div
                        className={ 'p-5 md:py-5 m-2.5 md:m-5 bg-white rounded-lg shadow-lg md:space-y-4 flex md:flex-col md:justify-center items-center' }>
                        <Image src={ '/Group4598.svg' } alt={ '' } width={ 70 } height={ 70 }
                               className={ 'hidden md:block' }/>
                        <Image src={ '/Group4598.svg' } alt={ '' } width={ 30 } height={ 30 }
                               className={ 'block md:hidden' }/>
                        <p
                            className="text-black text-lg md:text-2xl md:font-bold ml-5 md:m-0">
                            安家生活服务
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className={ 'w-full h-[855px] mt-20 hidden md:block' }>
            <div className={ 'relative w-full h-[557px]' }>
                <div className={ 'absolute top-0 left-0 w-full h-full' }>
                    <Image src={ '/pki7947412.png' } alt={ '/' } fill/>
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
                            <Image src={ '/161704431045_.pic.jpg' } alt={ '' } width={ 233 } height={ 300 }
                                   className={ 'shadow' }/>
                            <Image src={ '/171704431045_.pic.jpg' } alt={ '' } width={ 233 } height={ 300 }
                                   className={ 'shadow' }/>
                            <Image src={ '/181704431045_.pic.jpg' } alt={ '' } width={ 233 } height={ 300 }
                                   className={ 'shadow' }/>
                            <Image src={ '/191704431045_.pic.jpg' } alt={ '' } width={ 233 } height={ 300 }
                                   className={ 'shadow' }/>
                            <Image src={ '/201704431045_.pic.jpg' } alt={ '' } width={ 233 } height={ 300 }
                                   className={ 'shadow' }/>
                        </div>
                        <Link href={ '/all_profiles' }>
                            <Button className={ 'm-6' } variant={ 'ghost' }>查看更多案例</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>)
}
