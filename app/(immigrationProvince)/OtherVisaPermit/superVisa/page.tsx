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
                <p className="text-white text-5xl font-bold">探亲/超级签证</p>
                <p className="text-white text-4xl font-bold">super visa</p>
            </div>
        </div>

        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">项目介绍</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>super visa</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly ">
                <div className="bg-white p-4 shadow rounded-lg max-w-5xl">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        super visa
                    </h3>
                    所谓超级签证，是指加拿大公民或永久居民的父母或祖父母可以申请的一种签证。
                    超级签证代码PG-1，其持有者单次入境最多可住2年，最长有效期10年，并可多次往返
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-white/30">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">申请人要求</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>申请条件</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        基本条件
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">申请人是加拿大永久居民或公民的父母或祖父母</li>
                        <li className="text-gray-600">申请人的邀请人（子女或孙子女）的年收入达到CIC对当年要求的家庭最低收入，这个收入根据家庭人数的不同会有所不同。通过税务记录（NOA），雇主信和其它投资收入材料来证明</li>
                        <li className="text-gray-600">具备该工作职位要求的所有资质，包括培训/教育以及所需的执照或认证</li>
                        <li className="text-gray-600">为申请人购买境内至少1年有效的保额10万以上的个人保险。保险内容需要包括，医疗费用，住院及护理费用，返回原居住地的费用</li>
                        <li className="text-gray-600">申请人必须能够通过体检</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">申请材料</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>申请人需提供</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        最低条件
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">申请人的护照原件（要求有自返程日算起，有效期六个月以上）。如有旧版的护照，需要在末页签字，并且将旧护照一同提交</li>
                        <li className="text-gray-600">照片，最近六个月内拍摄的护照规格的照片
                            （白底彩照，3.5cm*4.5cm，脸部的高度为31mm-36mm）
                        </li>
                        <li className="text-gray-600">由加拿大公民或永久居民发出的邀请信（Letter of
                            invitation），信中需说明邀请人将负担申请人在加期间一切费用，附上邀请人的家庭成员名单，并签名
                        </li>
                        <li className="text-gray-600">证件复印件：1.身份证用A4纸将正反两面扫描。
                            2.结婚证复印件。3.退休证复印件（如果已经退休）。4.全家户口本复印件
                        </li>
                        <li className="text-gray-600">体检证明</li>
                        <li className="text-gray-600">医疗保险证明：能够证明保险自入境起至少1年有效，并且保额不低于10万，包括医疗，住院，旅行等方面的保障</li>
                        <li className="text-gray-600">收入证明：1.存折复印件及对应银行的存款证明。2.近半年的存款证明和银行流水清单。3.房产证，股权证明，理财产品证明，银行对帐单，汽车行驶证</li>
                        <li className="text-gray-600">如果申请人在职，则需提供以单位抬头纸开具的单位证明信，并加盖公章。（包括以下信息：申请人护照号，工资，工作时间，职位。批准旅行，旅行目的，单位为申请人保留职位及约定期限。公司负责人签字，注明其职位，姓名，并盖公章）</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">申请材料</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>邀请人需要提供</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        最低条件
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">邀请信（注明邀请人的地址，联系方式，护照信息。与申请人的关系，申请人的护照号，申请人的出生信息。申请人到访目的，居住时间，居住安排，行程安排，最后邀请人签字）</li>
                        <li className="text-gray-600">邀请人提供枫叶卡或加拿大护照信息，证明加拿大身份</li>
                        <li className="text-gray-600">邀请人和申请人的关系证明（出生证，亲自公证，户口本等）</li>
                        <li className="text-gray-600">申请人的邀请人（子女或孙子女）的年收入达到CIC对当年要求的家庭最低收入，这个收入根据家庭人数的不同会有所不同。通过税务记录（NOA），雇主信和其它投资收入材料来证明</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>)
}

export default superVisa