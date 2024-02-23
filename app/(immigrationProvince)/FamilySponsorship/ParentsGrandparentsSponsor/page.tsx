'use client'

import Image from 'next/image'
import React from 'react'
import { Navbar } from '../../../../components/navbar'

function ParentsGrandparentsSponsor(){
    return (<div className="bg-[url('/Vancouver.webp')] bg-fixed bg-cover">
        <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image src={'/SUV_cccd356739.jpg'} alt={'/'} layout="fill"
                   className="absolute w-full h-full object-cover"/>
            <div
                className="absolute top-0 left-0 w-full h-full bg-v1-bg1 z-10 flex flex-col justify-center items-center space-y-5">
                <p className="text-white text-5xl font-bold">父母和祖父母担保移民</p>
                <p className="text-white text-4xl font-bold">Parents Grandparents Sponsor</p>
            </div>
        </div>

        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">项目介绍</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>Family Sponsorship Parents and Grandparents</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly ">
                <div className="bg-white p-4 shadow rounded-lg max-w-5xl">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        父母和祖父母担保移民
                    </h3>
                    Family Sponsorship Parents and Grandparents 父母和曾祖父母担保移民适用于符合条件的申请人担保自己的父母或祖父母来到加拿大的移民项目
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-white/30">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">担保人要求</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>担保人基本条件</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        基本条件
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">至少18岁</li>
                        <li className="text-gray-600">加拿大公民或加拿大PR持有人或加拿大注册印第安人</li>
                        <li className="text-gray-600">证明拥有足够资金支持担保的亲属</li>
                        <li className="text-gray-600">需提供收入证明</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">不合格担保人</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>条件如下</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        最低条件
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">年龄不到18岁</li>
                        <li className="text-gray-600">提出担保申请时以及被担保人获得加拿大PR时，担保人不能在加拿大境内居住</li>
                        <li className="text-gray-600">从申请到签发之间担保人的主要居住地址必须为加拿大境内</li>
                        <li className="text-gray-600">非加拿大公民、PR持有人或加拿大注册印第安人</li>
                        <li className="text-gray-600">在加拿大处于临时居住身份的担保人（旅签、学签、工签持有人）</li>
                        <li className="text-gray-600">PR申请还未批准的担保人</li>
                        <li className="text-gray-600">资金证明不合格的申请人</li>
                        <li className="text-gray-600">在看守所、监狱或教改中心</li>
                        <li className="text-gray-600">未履行诺言为曾经担保过的被担保人提供经济支持</li>
                        <li className="text-gray-600">有未撤销的破产的担保人</li>
                        <li className="text-gray-600">非残疾原因需要社会协助的担保人</li>
                        <li className="text-gray-600">加拿大境内或境外有过对亲属的暴力、性侵或其他犯罪行为</li>
                        <li className="text-gray-600">因为收到离境令无法合法在加拿大居留的担保人</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-white/30">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">被担保人要求</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>条件如下</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        细节：
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">被担保人可以是担保人的父母或祖父母（血缘关系或领养关系）</li>
                        <li className="text-gray-600">如果存在离异或分居，担保人可以担保自己的父母、祖父母及其配偶，或是担保人的同居伴侣</li>
                        <li className="text-gray-600">申请中担保人不可以担保自己的兄弟或姐妹除非他们是未独立子女</li>
                        <li className="text-gray-600">申请人可以担保1个以上的被担保人，但收入需符合相关要求</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>)
}

export default ParentsGrandparentsSponsor