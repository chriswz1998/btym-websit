import Image from "next/image";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

export const Carousels = () => {
    return (
        <div>
            <div className='relative'>
                <Image src={'/Vancouver.webp'} alt={'/'} layout='fill'/>
                <Carousel plugins={[Autoplay({delay: 2000})]} className={'w-full h-full bg-v1-bg1'}>
                    <CarouselContent>
                        <CarouselItem className='flex items-center justify-center w-fit h-[550px] '>
                            <div className='text-center space-y-6 text-white'>
                                <p className='font-bold text-3xl'>BCPNP雇主担保技术移民</p>
                                <p className='font-bold text-2xl'>BCPNP - Employer</p>
                                <p className='w-[650px]'>最成熟稳定移民项目，全球最宜居省份 18-30 个月，配额充足，就业移民一举两得</p>
                            </div>
                        </CarouselItem>
                        <CarouselItem className='flex items-center justify-center w-fit h-[550px] '>
                            <div className='text-center space-y-6 text-white'>
                                <p className='font-bold text-3xl'>BCPNP雇主担保技术移民</p>
                                <p className='font-bold text-2xl'>BCPNP - Employer</p>
                                <p className='w-[650px]'>最成熟稳定移民项目，全球最宜居省份 18-30 个月，配额充足，就业移民一举两得</p>
                            </div>
                        </CarouselItem>
                        <CarouselItem className='flex items-center justify-center w-fit h-[550px] '>
                            <div className='text-center space-y-6 text-white'>
                                <p className='font-bold text-3xl'>BCPNP雇主担保技术移民</p>
                                <p className='font-bold text-2xl'>BCPNP - Employer</p>
                                <p className='w-[650px]'>最成熟稳定移民项目，全球最宜居省份 18-30 个月，配额充足，就业移民一举两得</p>
                            </div>
                        </CarouselItem>
                        <CarouselItem className='flex items-center justify-center w-fit h-[550px] '>
                            <div className='text-center space-y-6 text-white'>
                                <p className='font-bold text-3xl'>BCPNP雇主担保技术移民</p>
                                <p className='font-bold text-2xl'>BCPNP - Employer</p>
                                <p className='w-[650px]'>最成熟稳定移民项目，全球最宜居省份 18-30 个月，配额充足，就业移民一举两得</p>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}