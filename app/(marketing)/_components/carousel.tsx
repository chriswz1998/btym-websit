'use client'
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Banner } from '@/lib/model'

export const Carousels = ({ banner }: { banner: Banner | undefined | null }) => {
    const route = useRouter()
    return (<div className="relative w-full h-[600px] overflow-hidden">
        <Image src={ banner?.backgroundImgUrl || '' } alt={ '/' } fill
               className="absolute w-full h-full object-cover"/>
        <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center">
            <Carousel plugins={ [ Autoplay({ delay: 2000 }) ] } className={ 'w-full h-full bg-v1-bg1' }>
                <CarouselContent>
                    { banner?.bannerData?.map((item, index) => {
                        return (
                            <CarouselItem key={ index } className="flex items-center justify-center w-fit h-[550px] ">
                                <div className="text-center space-y-6 text-white"
                                     onClick={ () => route.push('/business/BCPNP-EI') }>
                                    <p className="font-bold text-3xl">{ item.title }</p>
                                    <p className="font-bold text-2xl">{ item.subTitle }</p>
                                    <p className="w-[650px]">{ item.description }</p>
                                </div>
                            </CarouselItem>)
                    }) }
                </CarouselContent>
            </Carousel>
        </div>
    </div>)
}