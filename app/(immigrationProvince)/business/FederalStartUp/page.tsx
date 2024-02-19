'use client'

import Image from 'next/image'
import React from 'react'
import { Navbar } from '@/components/navbar'

function FederalStartUp(){
    return (<div>
        <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image src={ '/SUV_cccd356739.jpg' } alt={ '/' } layout="fill"
                   className="absolute w-full h-full object-cover"/>
            <div
                className="absolute top-0 left-0 w-full h-full bg-v1-bg1 z-10 flex flex-col justify-center items-center space-y-5">
                <p className="text-white text-5xl font-bold">联邦创业移民</p>
                <p className="text-white text-4xl font-bold">Federal Start Up Visa</p>
            </div>
        </div>

        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">加拿大联邦创业移民项目（SUV）</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>于2013年正式开启。该项目以具有技能和潜力在加拿大创立企业的企业家为目标，所创办的企业需符合以下条件：</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        企业要求
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">1. 创新企业</li>
                        <li className="text-gray-600">2. 可以为加拿大人创造就业</li>
                        <li className="text-gray-600">3. 可以在全球范围内竞争</li>
                    </ul>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        资金要求
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">1. 风险投资基金：必须获得风险投资集团至少20万加币的投资</li>
                        <li className="text-gray-600">2. 天使投资集团：必须获得天使投资集团至少75000加币的投资</li>
                        <li className="text-gray-600">3. 企业孵化器：必须被接受参与企业孵化器的项目</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">项目详情,优势与申请条件</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
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
                        <li className="text-gray-600">周期短-永居申请仅需12-16个月</li>
                        <li className="text-gray-600">要求简单-语言要求较低且无高资产要求，无需准备繁杂的资金来源证明</li>
                        <li className="text-gray-600">居住要求-登陆后无定居地限制</li>
                        <li className="text-gray-600">风险-创业成功与否，均不影响身份</li>
                    </ul>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        申请条件
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">大专或以上学历</li>
                        <li className="text-gray-600">英语通过加拿大语言标准（CLB5或雅思G类5分）</li>
                        <li className="text-gray-600">具有5年创业的生意相关的商务及管理经验</li>
                        <li className="text-gray-600">拥有符合要求的定居资金</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">申请流程与项目费用</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>详细信息请与顾问沟通</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        申请流程
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">评估客户背景后，签订加拿大联邦项目合同</li>
                        <li className="text-gray-600">准备材料，完成商业计划书</li>
                        <li className="text-gray-600">递交联邦SUV材料的申请</li>
                        <li className="text-gray-600">接受SUV材料的审批及面试</li>
                        <li className="text-gray-600">拿到SUV材料的支持信</li>
                        <li className="text-gray-600">递交工签和移民签证申请</li>
                        <li className="text-gray-600">联邦移民局审核并拿到移民和体检</li>
                        <li className="text-gray-600">登录成功加拿大永久居民</li>
                    </ol>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        项目费用
                    </h3>
                    <ul className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">投资额: 不少于CAD 200,000</li>
                        <li className="text-gray-600">雇主费: CAD 230</li>
                        <li className="text-gray-600">联邦申请费: CAD 2140 (本人)</li>
                        <li className="text-gray-600">工签: CAD 150</li>
                        <li className="text-gray-600">指纹费: CAD 85</li>
                        <li className="text-gray-600">公证文件费用: RMB 2000 - 10000</li>
                        <li className="text-gray-600">体检: RMB 1450 / 人</li>

                    </ul>
                </div>
            </div>
        </div>

    </div>)
}

export default FederalStartUp