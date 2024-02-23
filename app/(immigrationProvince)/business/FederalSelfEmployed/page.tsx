'use client'

import Image from 'next/image'
import React from 'react'
import { Navbar } from '@/components/navbar'

function FederalSelfEmployed(){
    return (<div className="bg-[url('/Vancouver.webp')] bg-fixed bg-cover">
        <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image src={ '/SUV_cccd356739.jpg' } alt={ '/' } layout="fill"
                   className="absolute w-full h-full object-cover"/>
            <div
                className="absolute top-0 left-0 w-full h-full bg-v1-bg1 z-10 flex flex-col justify-center items-center space-y-5">
                <p className="text-white text-5xl font-bold">联邦自雇移民</p>
                <p className="text-white text-4xl font-bold">Federal Self Employed</p>
            </div>
        </div>

        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">项目介绍</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>适合申请联邦自雇项目的人群如下</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        影视媒体类
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">制片人 音乐家 歌手 演员</li>
                        <li className="text-gray-600">导演 电影及视频摄像师 剪辑及后期制作</li>
                        <li className="text-gray-600">舞蹈家 绘画技术员 广播技术员</li>
                        <li className="text-gray-600">摄影师 录音录像技术员 记者</li>
                        <li className="text-gray-600">指挥家 动画</li>
                        <li className="text-gray-600">作曲家 编曲人 钢琴家</li>
                        <li className="text-gray-600">广播及表演艺术方面的技术及协调人员等</li>
                    </ul>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        设计类
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">展览展示设计 博物馆设计 平面设计师</li>
                        <li className="text-gray-600">插图画家 室内设计师 室内装潢师</li>
                        <li className="text-gray-600">服装设计师 创意设计师 工艺品设计师等</li>
                    </ul>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        图书文献管理类
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">图书馆管理员 档案馆管理员</li>
                        <li className="text-gray-600">博物馆管理员等</li>
                    </ul>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        体育领域类
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">运动员 各运动项目教练员</li>
                        <li className="text-gray-600">裁判员 健身教练 室内装潢师</li>
                        <li className="text-gray-600">瑜伽教练 娱乐</li>
                        <li className="text-gray-600">体育和健身的项目负责人和导师等</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-white/30">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">项目优势与申请条件</div>
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
                        <li className="text-gray-600">无语言和学历要求，无创业要求</li>
                        <li className="text-gray-600">两年左右即可一步到位获得枫叶卡</li>
                        <li className="text-gray-600">居住要求-登陆后无定居地限制</li>
                        <li className="text-gray-600">无投资要求、申请费用低、成功率高</li>
                    </ul>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        申请条件
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">必须具备文化活动或体育方面的相关经验</li>
                        <li className="text-gray-600">参加过世界级的文化或体育活动，或为从事文化或体育活动的自雇人士</li>
                        <li className="text-gray-600">提交申请前5年具备至少2年的相关经验</li>
                        <li className="text-gray-600">2段一年期文化或体育活动自雇经验</li>
                        <li className="text-gray-600">或者2段一年期参加世界级文化或体育活动经验</li>
                        <li className="text-gray-600">或者在文化和体育活动方面具备一年自雇经验外加一年参加世界级活动经验</li>
                        <li className="text-gray-600">拥有至少6-8万加币的家庭净资产证明</li>
                        <li className="text-gray-600">申请人及其家人需通过体检，能够提供无犯罪证明，有足够的安家资金</li>
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
                        <li className="text-gray-600">准备资料，填写表格，提交申请</li>
                        <li className="text-gray-600">支付申请费用</li>
                        <li className="text-gray-600">补料或面试</li>
                        <li className="text-gray-600">申请通过，寄送护照至签证中心，签发永居签证</li>
                    </ol>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        项目费用
                    </h3>
                    <ul className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">公证费: RMB 2000 - 10000</li>
                        <li className="text-gray-600">联邦申请费: CAD 2140 (本人)</li>
                        <li className="text-gray-600">指纹费: CAD 85</li>
                        <li className="text-gray-600">体检: RMB 1450 / 人</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>)
}

export default FederalSelfEmployed