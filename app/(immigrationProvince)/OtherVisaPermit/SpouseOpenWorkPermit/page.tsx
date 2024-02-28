'use client'

import Image from 'next/image'
import React from 'react'
import { Navbar } from '../../../../components/navbar'

function SpouseOpenWorkPermit(){
    return (<div className="bg-[url('/Vancouver.webp')] bg-fixed bg-cover">
        <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image src={ '/SUV_cccd356739.jpg' } alt={ '/' } layout="fill"
                   className="absolute w-full h-full object-cover"/>
            <div
                className="absolute top-0 left-0 w-full h-full bg-v1-bg1 z-10 flex flex-col justify-center items-center space-y-5">
                <p className="text-white text-5xl font-bold">加拿大配偶工签</p>
                <p className="text-white text-4xl font-bold">Spouse Open Work Permit</p>
            </div>
        </div>

        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">项目介绍</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>什么是加拿大配偶工签？</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly ">
                <div className="bg-white p-4 shadow rounded-lg max-w-5xl">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        SOWP
                    </h3>
                    加拿大配偶工签（Spouse Open Work Permit，SOWP）又称配偶开放式工签或者同居工签，
                    是符合一定条件的留学生或工签持有者的配偶/合法伴侣可以申请的一种开放性工作签证。
                    无需任何雇主信(Job Offer) 或劳工市场影响评估许可 (LMIA)。
                    配偶工签的持有者可以在签证有效期内在加拿大境内合法工作，也可以有条件自雇。
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-white/30">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">加拿大配偶工签</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>配偶工签申请资格</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        基本条件
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">递交了夫妻团聚移民申请后，配偶或同居伴侣可以申请开放式工签；</li>
                        <li className="text-gray-600">配偶或同居伴侣是国际留学生，持有效的加拿大学签</li>
                        <li className="text-gray-600">配偶或同居伴侣持有效工签</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">开放式配偶工签的类型</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>配偶陪工工签</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        细节
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">配偶或同居伴侣持有为期超过6个月的工签，TEER类别 0、1、2、3、4 或
                            5皆可
                        </li>
                        <li className="text-gray-600">配偶或同居伴侣持有经济类永久居民工作许可证</li>
                        <li className="text-gray-600">大西洋移民计划申请人</li>
                        <li className="text-gray-600">符合 International Mobility Program
                            Plus资格的魁北克甄选证书持有人
                        </li>
                        <li className="text-gray-600">配偶或同居伴侣是外国代表</li>
                        <li className="text-gray-600">配偶或同居伴侣是在加拿大工作的外国军人</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">开放式配偶工签的类型</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>配偶陪读工签</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        细节
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">配偶或同居伴侣持有效的学习许可</li>
                        <li className="text-gray-600">公立专上学校，例如学院或大学，或魁北克的CEGEP</li>
                        <li className="text-gray-600">魁北克的私立大学水平学校</li>
                        <li className="text-gray-600">可以根据省级法律合法授予学位的加拿大私立学校（例如，学士、硕士或博士学位）</li>
                        <li className="text-gray-600">私立院校（除魁北克省）颁发的大专证书或文凭不符合配偶工签的申请条件</li>
                        <li className="text-gray-600">如果申请人自己已经是加拿大全日制学生，则无法申请配偶工签</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">配偶工签申请指南</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>申请材料</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        细节
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">申请表格 IMM5710</li>
                        <li className="text-gray-600">电子照片</li>
                        <li className="text-gray-600">结婚证或同居声明（Common-law declaration）</li>
                        <li className="text-gray-600">申请人有效护照或旅行证件，首页、签名页和每一个有签证或出入境章的页面</li>
                        <li className="text-gray-600">申请人目前在加拿大的身份证明复印件，例如旅游签证</li>
                        <li className="text-gray-600">配偶身份证明</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>)
}

export default SpouseOpenWorkPermit