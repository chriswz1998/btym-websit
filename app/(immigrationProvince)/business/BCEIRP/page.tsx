'use client'

import Image from 'next/image'
import React from 'react'
import { Navbar } from '../../../../components/navbar'

function BCEIRP(){
    return (<div className="bg-[url('/Vancouver.webp')] bg-fixed bg-cover">
        <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image src={ '/SUV_cccd356739.jpg' } alt={ '/' } layout="fill"
                   className="absolute w-full h-full object-cover"/>
            <div
                className="absolute top-0 left-0 w-full h-full bg-v1-bg1 z-10 flex flex-col justify-center items-center space-y-5">
                <p className="text-white text-5xl font-bold">BC省十万小镇试点项目</p>
                <p className="text-white text-4xl font-bold">Entrepreneur Immigration – Regional Pilot to
                    communities</p>
            </div>
        </div>

        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">BC省十万小镇试点项目</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>2019年，BC省企业家移民-区域试点项目开始实行</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        项目优势
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">投资门槛超低，仅需10万加币</li>
                        <li className="text-gray-600">对申请人资产要求低，最低资产要求仅需30万加币</li>
                        <li className="text-gray-600">审批时间特快。试点项目特案特审，相比现有的常规BCPNP企业家<br/>项目平均审理周期3.5年，新项目审理将大大提速
                        </li>
                    </ul>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        适合人群
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">有管理经验的企业家</li>
                        <li className="text-gray-600">可投入资金有限</li>
                        <li className="text-gray-600">愿意前往偏远地区生活工作</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-white/30">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">申请条件</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>对申请人要求</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        对申请人要求
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">个人净资产至少为30万加币，资金来源合法</li>
                        <li className="text-gray-600">过去5年内，有3年以上的企业主经验（持股10%以上）或过去5年内，有4年以上的高级管理经验，并且管理3个以上的全职雇员（持股不足10%，且职业为NOC
                            0或者1类）；或，一年企业主加两年高管经验
                        </li>
                        <li className="text-gray-600">大专学历以上；如果过去五年有三年以上的企业主经验，可以不要求学历</li>
                        <li className="text-gray-600">申请人英语水平需达到CLB4（即雅思听力4.5，阅读3.5，写作及口语4.0）以上</li>
                        <li className="text-gray-600">居住和生活在所申请的社区内</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">申请条件</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>对于创办的企业的要求</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        对于创办的企业的要求
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">只能是建立一个新的企业</li>
                        <li className="text-gray-600">需持有企业51%以上的股份</li>
                        <li className="text-gray-600">季节性的生意通常不符合要求，除非每年经营8个月以上</li>
                        <li className="text-gray-600">如果能证明所提议的连锁生意经营良好，具有扩展能力、有良好的财务记录，且运营至少
                            5 年，则连锁生意可能被视为符合条件的企业
                        </li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-white/30">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">申请条件</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>对投资和创造就业的要求</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        对投资和创造就业的要求
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">至少投资10万加币以上</li>
                        <li className="text-gray-600">至少为加拿大公民或加拿大永久居民创造一个全新，全职和永久的工作岗位</li>
                        <li className="text-gray-600">在提交省提名申请之前，已经持续雇佣员工6个月以上</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">申请流程</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>细节可咨询顾问</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        申请流程
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">确定社区，商务考察</li>
                        <li className="text-gray-600">获得社区支持信</li>
                        <li className="text-gray-600">在线注册，提交申请</li>
                        <li className="text-gray-600">收到邀请，提交完整材料</li>
                        <li className="text-gray-600">BCPNP审核</li>
                        <li className="text-gray-600">获得工作签证</li>
                        <li className="text-gray-600">前往社区建立经营企业</li>
                        <li className="text-gray-600">获得省提名</li>
                        <li className="text-gray-600">申请永居居民</li>
                        <li className="text-gray-600">PR获批</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>)
}

export default BCEIRP