'use client'
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Banner } from '@/lib/model'

export const Carousels = ({ banner }: { banner: Banner | undefined | null }) => {
    const route = useRouter()
    return (<div className="relative w-full h-[220px] md:h-[600px] overflow-hidden">
        <Image src={ banner?.backgroundImgUrl || '' } alt={ '/' } fill
               className="absolute w-full h-full object-cover"/>
        <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center">
            <Carousel plugins={ [ Autoplay({ delay: 2000 }) ] } className={ 'w-full h-full bg-v1-bg1' }>
                <CarouselContent>
                    { banner?.bannerData?.map((item, index) => {
                        return (<CarouselItem key={ index }
                                              className="flex items-center justify-center w-fit h-[220px] md:h-[550px] ">
                            <div className="md:text-center md:space-y-6 space-y-2 text-white"
                                 onClick={ () => route.push(item.link) }>
                                <p className="font-bold text-xl md:text-3xl">{ item.title }</p>
                                <p className="md:font-bold text-lg md:text-2xl">{ item.subTitle }</p>
                                <p className="w-[200px] md:w-[650px]">{ item.description }</p>
                            </div>
                        </CarouselItem>)
                    }) }
                </CarouselContent>
            </Carousel>
        </div>
    </div>)
}