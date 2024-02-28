'use client'

import Image from 'next/image'
import React from 'react'
import { Navbar } from '../../../../components/navbar'

function superVisa(){
    return (<div className="bg-[url('/Vancouver.webp')] bg-fixed bg-cover">
        <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image src={ '/SUV_cccd356739.jpg' } alt={ '/' } layout="fill"
                   className="absolute w-full h-full object-cover"/>
            <div
                className="absolute top-0 left-0 w-full h-full bg-v1-bg1 z-10 flex flex-col justify-center items-center space-y-5">
                <p className="text-white text-5xl font-bold">商务考察签证</p>
                <p className="text-white text-4xl font-bold">Business Visit visa</p>
            </div>
        </div>

        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">项目介绍</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>Business Visit visa</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly ">
                <div className="bg-white p-4 shadow rounded-lg max-w-5xl">
                    商业考察人员是外籍人员进入到加拿大进行商业活动但不进入当地人力市场的人员。
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-white/30">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">跨境业务可包括</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>业务条件</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        基本条件
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">为外国企业或政府购买加拿大商品或服务</li>
                        <li className="text-gray-600">从加拿大订购商品或服务</li>
                        <li className="text-gray-600">去参加各种商务会议或贸易交易会等</li>
                        <li className="text-gray-600">提供售后服务（管理，不做实际操作）</li>
                        <li className="text-gray-600">提供售后服务（管理，不做实际操作）</li>
                        <li className="text-gray-600">培训外国公司或加拿大分公司的员工</li>
                        <li className="text-gray-600">参加向您出售设备或服务的加拿大公司培训</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">作为商务访问者，您必须证明</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>基本条件</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        细节
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">您计划逗留不到六个月</li>
                        <li className="text-gray-600">您不打算进入加拿大劳务市场</li>
                        <li className="text-gray-600">您在加拿大境外的主要业务地点，收入和利润来源</li>
                        <li className="text-gray-600">您有支持您的申请的文件</li>
                        <li className="text-gray-600">您符合加拿大的基本入学要求</li>
                        <li className="text-gray-600">持有效的旅行证件，如护照</li>
                        <li className="text-gray-600">有足够的支撑您在加拿大的生活和回国</li>
                        <li className="text-gray-600">计划在您访问结束时离开加拿大</li>
                        <li className="text-gray-600">不在加拿大进行违法犯罪活动</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>)
}

export default superVisa