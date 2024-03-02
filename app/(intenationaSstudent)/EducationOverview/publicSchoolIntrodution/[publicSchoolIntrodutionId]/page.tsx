'use client'

import Image from 'next/image'
import React from 'react'
import { Navbar } from '../../../../../components/navbar'
import useHttp from "@/hooks/useActions";
import {json} from "node:stream/consumers";

function PublicSchoolIntrodution({ params }: { params: { id: string } }){


    const {data, isLoading} = useHttp(`/api/postArticles?id=${23}`, {
        method:'GET'
    }, true)
    console.log(data)


    return (<div className="bg-[url('/Vancouver.webp')] bg-fixed bg-cover">
        <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image src={'/SUV_cccd356739.jpg'} alt={'/'} layout="fill"
                   className="absolute w-full h-full object-cover"/>
            <div
                className="absolute top-0 left-0 w-full h-full bg-v1-bg1 z-10 flex flex-col justify-center items-center space-y-5">
                <p className="text-white text-5xl font-bold">BC省十万小镇试点项目</p>
                <p className="text-white text-4xl font-bold">Entrepreneur Immigration – Regional Pilot to
                    communities</p>
            </div>
        </div>
        <div style={{marginTop: '15px'}}>

        </div>
    </div>)
}

export default PublicSchoolIntrodution