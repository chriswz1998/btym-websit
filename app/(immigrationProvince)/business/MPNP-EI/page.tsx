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
                <p className="text-white text-5xl font-bold">曼省企业家移民</p>
                <p className="text-white text-4xl font-bold">MPNP-Entrepreneur Pathway</p>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">项目介绍</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>曼省企业家项目（Entrepreneur Pathway）</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly ">
                <div className="bg-white p-4 shadow rounded-lg max-w-5xl">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        曼省企业家项目
                    </h3>
                    曼省企业家项目（Entrepreneur Pathway）替代了原来的商业项目，
                    它允许曼省招募和提名海外的符合条件的商业人士来曼省新建一个生意，
                    或购买一个现存的生意。申请人在抵达加拿大的前24个月内，
                    持有工作签证到曼尼托巴省创办企业、购买企业或成为现有企业的合伙人。
                    在满足创业要求后，可获得曼省省提名，进而可到加拿大联邦移民局申请永久居民。
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-100 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">项目详情,优势与适合人群</div>
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
                        <li className="text-gray-600">申请人可以在一年左右快速登陆曼省，先批给临时居民身份，方便申请人全家在加拿大境内等待永久居民身份的审批，可以提前享受加国福利</li>
                        <li className="text-gray-600">子女免费入读当地公立学校</li>
                        <li className="text-gray-600">旧政客户的商务考察仍然是一年有效，可以优先递交新政申请</li>
                        <li className="text-gray-600">投资金额低，容易起步；而同类工签移民项目BC省/安省/萨省/育空投资额要求高</li>
                        <li className="text-gray-600">曼省城市大人口多，华人移民成规模，有利于商业生意开展和快速融入当地社会</li>
                    </ul>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-red-600">
                        适合人群
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">希望能投资，定居在曼省的企业家或高管</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">申请条件</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>申请条件如下</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        最低条件
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">近5年内至少3年作为企业主或高管全职工作。 企业主必须要至少1/3或33
                            %的所有权
                        </li>
                        <li className="text-gray-600">英语语言能力至少达到CLB 5（即雅思阅读４，听力，写作及口语５.0），或，法语语言能力达到NCLC
                            5
                        </li>
                        <li className="text-gray-600">至少等同于加拿大高中文凭</li>
                        <li className="text-gray-600">如果生意建立在曼省主要城市区，需要至少投资25万加币</li>
                        <li className="text-gray-600">如果生意建立在曼省主要城市区以外，需要至少投资15万加币</li>
                        <li className="text-gray-600">拟议的生意必须新建或维持至少一个工作给加拿大公民或PR，不包括企业主或及其亲属</li>
                        <li className="text-gray-600">商务考察必须在提交EOI申请前的一年内完成</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-100 border-b">
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
                        商业企划书
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">完成曼省政府提供自我评估表（Self-Assessment
                            Form），初步判断是否符合申请标准
                        </li>
                        <li className="text-gray-600">市场调研和商务考察</li>
                        <li className="text-gray-600">提交 EOI申请</li>
                        <li className="text-gray-600">收到邀请函LAA，提交完整申请</li>
                        <li className="text-gray-600">MPNP审核</li>
                        <li className="text-gray-600">获取工签</li>
                        <li className="text-gray-600">登陆曼省，建立和经营企业</li>
                        <li className="text-gray-600">获得提名信</li>
                        <li className="text-gray-600">申请永居居民</li>
                        <li className="text-gray-600">PR获批</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>)
}

export default SINPEI