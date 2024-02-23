'use client'

import Image from 'next/image'
import React from 'react'
import { Navbar } from '../../../../components/navbar'

function SINPEI(){
    return (<div className="bg-[url('/Vancouver.webp')] bg-fixed bg-cover">
        <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image src={'/SUV_cccd356739.jpg'} alt={'/'} layout="fill"
                   className="absolute w-full h-full object-cover"/>
            <div
                className="absolute top-0 left-0 w-full h-full bg-v1-bg1 z-10 flex flex-col justify-center items-center space-y-5">
                <p className="text-white text-5xl font-bold">纽芬兰和拉布拉多省提名国际企业家移民项目</p>
                <p className="text-white text-4xl font-bold">NLPNP – International Entrepreneur</p>
            </div>
        </div>

        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">项目介绍</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>NLPNP – International Entrepreneur</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly ">
                <div className="bg-white p-4 shadow rounded-lg max-w-5xl">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        纽芬兰和拉布拉多省提名国际企业家移民项目
                    </h3>
                    纽芬兰和拉布拉多省提名国际企业家移民项目（NLPNP – International Entrepreneur）
                    是NL省为了吸引来自其他国家的移民帮助该省解决其劳动力市场需求而设立的项目。
                    该项目的申请人需要符合申请标准，且必须在纽芬兰和拉布拉多定居，并有足够的英语或法语交流能力。
                    NLPNP国际企业家项目主要面向希望在纽芬兰和拉布拉多创办或收购企业，
                    并打算积极和持续参与日常管理和指导业务的企业主或高级企业经理。
                    国际企业家类别的主要特点是它是一个临时到永久居留计划。
                    获得批准的申请人持工作许可证在纽芬兰和拉布拉多经营和积极管理企业连续一年后，
                    拿到省提名并申请加拿大永久居民身份。
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-white/30">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">项目优势</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>2018年4月1日起启动永久性创业移民签证（Start-Up-Visa）项目</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        项目优势
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">对语言和年龄要求较低</li>
                        <li className="text-gray-600">适合想要在加拿大创业和长期居住的企业家</li>
                        <li className="text-gray-600">先批给临时居民身份，申请人全家可在加拿大境内等待永久居民身份的审批，可以提前享受加国福利</li>
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
                        <p>申请人的最低资格要求</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        最低条件
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">年龄至少在21至59岁之间</li>
                        <li className="text-gray-600">英语语言能力至少达到CLB 5</li>
                        <li className="text-gray-600">拥有600,000加币的未支配净业务和个人资产，可随时转移到纽芬兰和拉布拉多</li>
                        <li className="text-gray-600">在意向评估表格（EOI）中获得至少72分（满分120分）</li>
                        <li className="text-gray-600">能够投资至少20万加元的自有资金在纽芬兰和拉布拉多建立企业</li>
                        <li className="text-gray-600">在过去五年中具有至少两年积极管理和拥有企业的经验，或在过去十年中具有5年或以上的高级业务管理经验</li>
                        <li className="text-gray-600">如果开始新业务，申请人必须为纽芬兰和拉布拉多的加拿大公民或永久居民创造至少一个全职就业机会</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-white/30">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">申请流程</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>项目时长：15-24个月</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        流程如下
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">在线提交EOI表格</li>
                        <li className="text-gray-600">收到ITA邀请后提交资料</li>
                        <li className="text-gray-600">OIM评估申请</li>
                        <li className="text-gray-600">OIM发出In person面试邀请，面试成功后，申请人签署创业同意书Business Performance Agreement</li>
                        <li className="text-gray-600">申请工作签证，在工作签证申请通过后，申请人及家人在6个月之内登陆NL省创办企业</li>
                        <li className="text-gray-600">在NL省居住并经营企业一年后，申请省提名</li>
                        <li className="text-gray-600">收到提名信后开始PR申请</li>
                        <li className="text-gray-600">PR获批</li>
                    </ol>
                </div>
            </div>
        </div>

    </div>)
}

export default SINPEI