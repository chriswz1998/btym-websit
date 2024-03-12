'use client'
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';
import { useRouter } from 'next/navigation';

export const Carousels = () => {
    const route = useRouter()
    return (<div className="relative w-full h-[600px] overflow-hidden">
        <Image src={ '/Vancouver.webp' } alt={ '/' } layout="fill"
               className="absolute w-full h-full object-cover"/>
        <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center">
            <Carousel plugins={ [ Autoplay({ delay: 2000 }) ] } className={ 'w-full h-full bg-v1-bg1' }>
                <CarouselContent>
                    <CarouselItem className="flex items-center justify-center w-fit h-[550px] ">
                        <div className="text-center space-y-6 text-white"
                             onClick={ () => route.push('/business/BCPNP-EI') }>
                            <p className="font-bold text-3xl">BCPNP-EI BC企业家移民</p>
                            <p className="font-bold text-2xl">BCPNP-EI</p>
                            <p className="w-[650px]">最成熟稳定移民项目，全球最宜居省份 18-30
                                个月，配额充足，就业移民一举两得</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="flex items-center justify-center w-fit h-[550px] ">
                        <div className="text-center space-y-6 text-white"
                             onClick={ () => route.push('/business/SINP-EI') }>
                            <p className="font-bold text-3xl">萨省企业家移民</p>
                            <p className="font-bold text-2xl">Saskatchewan Entrepreneur Category</p>
                            <p className="w-[650px]">成熟稳定移民项目，全球最宜居省份 18-30
                                个月，配额充足，就业移民一举两得</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="flex items-center justify-center w-fit h-[550px] ">
                        <div className="text-center space-y-6 text-white"
                             onClick={ () => route.push('/business/MPNP-EI') }>
                            <p className="font-bold text-3xl">曼省企业家移民</p>
                            <p className="font-bold text-2xl">MPNP-Entrepreneur Pathway</p>
                            <p className="w-[650px]">最成熟稳定移民项目，全球最宜居省份 18-30
                                个月，配额充足，就业移民一举两得</p>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="flex items-center justify-center w-fit h-[550px] ">
                        <div className="text-center space-y-6 text-white"
                             onClick={ () => route.push('/business/NLPNP-EI') }>
                            <p className="font-bold text-3xl">纽芬兰和拉布拉多省提名国际企业家移民项目</p>
                            <p className="font-bold text-2xl">NLPNP – International Entrepreneur</p>
                            <p className="w-[650px]">最成熟稳定移民项目，全球最宜居省份 18-30
                                个月，配额充足，就业移民一举两得</p>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    </div>)
}