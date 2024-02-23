'use client'

import Image from 'next/image'
import React from 'react'
import { Navbar } from '../../../../components/navbar'

function ChildOrOtherDependent(){
    return (<div className="bg-[url('/Vancouver.webp')] bg-fixed bg-cover">
        <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image src={'/SUV_cccd356739.jpg'} alt={'/'} layout="fill"
                   className="absolute w-full h-full object-cover"/>
            <div
                className="absolute top-0 left-0 w-full h-full bg-v1-bg1 z-10 flex flex-col justify-center items-center space-y-5">
                <p className="text-white text-5xl font-bold">子女团聚移民</p>
                <p className="text-white text-4xl font-bold">Dependent Child Sponsorship</p>
            </div>
        </div>

        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">项目介绍</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>Dependent Child Sponsorship</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly ">
                <div className="bg-white p-4 shadow rounded-lg max-w-5xl">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        父母和祖父母担保移民
                    </h3>
                    子女团聚移民用于担保人担保自己的子女通过家庭担保移民方式移民加拿大。在加拿大移民系统中，
                    子女团聚属于配偶团聚类移民。自2017年10月24日起，加拿大移民局把未成年子女的年龄从19岁提高到了22岁。
                    该项目要求，父母双方至少一方需要作为加拿大公民或永久居民，子女须为22岁以下且无配偶或同居伴侣。
                    <br/>
                    如果被担保人年龄大于22岁，但是由于身体或者精神原因完全需要依赖父母经济的支持来生活
                    （比如，残疾或心里缺陷）也可以被认为是「非独立」子女，在移民方面被予以未成年子女相同的处理。
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-white/30">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">申请条件</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>担保人条件（加拿大籍父母方）</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        基本条件
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">18 周岁以上的加拿大民或永久居民（PR）</li>
                        <li className="text-gray-600">具有足够的经济担保能力，承诺义务承担父母到达加拿大后至少 10 年的基本生活开销</li>
                        <li className="text-gray-600">没有刑事犯罪</li>
                        <li className="text-gray-600">已完成其他担保义务（例如原先担保过其他人）</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">申请条件</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>被担保人（主申请人）</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        最低条件
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">是担保人的子女</li>
                        <li className="text-gray-600">身体符合加拿大体格检查要求</li>
                        <li className="text-gray-600">无犯罪记录或者已经达到豁免期并能够通过安全检查</li>
                        <li className="text-gray-600">22 周岁以下，未婚；或</li>
                        <li className="text-gray-600">22 周岁之前已经结婚，结婚后到现在一直在大专院校全日制读书，并且经济上依靠父母</li>
                        <li className="text-gray-600">22 周岁以上，22 周岁之前开始进入政府承认的大专院校全日制读书一直到现在，并且经济上依靠父母</li>
                        <li className="text-gray-600">因为身体或者疾病原因没有劳动能力，并且从 22 岁之前起经济上依靠父母</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>)
}

export default ChildOrOtherDependent