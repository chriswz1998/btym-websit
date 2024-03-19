'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import * as React from 'react'
import ChangeCarouselItems from '@/app/backend/_components/change-carousel-items'
import { CarouselDto } from '@/lib/model'
import { useEffect, useState } from 'react'
import useHttp from '@/hooks/useActions'

export default function ChangeCarousel(){
    const [ carousel, setCarousel ] = useState<CarouselDto[]>()
    const { isLoading, execute } = useHttp<null, CarouselDto[]>()

    const getDate = async() => {
        const carousel = await execute('carousel', 'GET') as unknown as CarouselDto[];
        setCarousel(carousel)
    }
    useEffect(() => {
        getDate()
    }, [])

    return (<Card className="w-full h-auto">
        <CardHeader>
            <CardTitle>Carousel</CardTitle>
        </CardHeader>
        <CardContent className={ 'flex flex-wrap' }>
            { carousel?.map((item, index) => {
                return (<ChangeCarouselItems key={ index } defaultData={ item }/>)
            }) }

        </CardContent>
    </Card>)
}
