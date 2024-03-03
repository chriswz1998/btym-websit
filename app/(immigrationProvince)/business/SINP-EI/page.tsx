'use client'

import Image from 'next/image'
import React from 'react'
import { Navbar } from '../../../../components/navbar'

function SINPEI(){
    return (<div>
        <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image src={'/SUV_cccd356739.jpg'} alt={'/'} layout="fill"
                   className="absolute w-full h-full object-cover"/>
            <div
                className="absolute top-0 left-0 w-full h-full bg-v1-bg1 z-10 flex flex-col justify-center items-center space-y-5">
                <p className="text-white text-5xl font-bold">萨省企业家移民</p>
                <p className="text-white text-4xl font-bold">Saskatchewan Entrepreneur Category</p>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">项目介绍</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>「萨省企业家移民」是萨省省提名项目下的一分支项目</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly ">
                <div className="bg-white p-4 shadow rounded-lg max-w-5xl">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        萨省企业家移民
                    </h3>
                    「萨省企业家移民」是萨省省提名项目下的一分支项目，
                    是萨省政府为了吸引全球的创业人才而设立的项目。该项目提名的申请人需有企业家或高管经验，
                    符合申请要求，有意愿在萨省居住，且积极参与企业的经营管理。得益于当地经济的蓬勃发展，
                    投资门槛低，萨省现在已经成为北美地区最适合经营企业的地区之一。所以，对于中小企业家来说，
                    「萨省企业家移民」项目是近几年加拿大经济类移民类别中非常受欢迎，且门槛最低的项目之一。
                    同时，萨省移民局还会给予符合资质的申请人工签支持信，该工签允许申请人携全家入境加拿大，
                    配偶可以申请开放式工签，子女可以申请学习签证，且免费享受加拿大的中小学公校教育。
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
                        <li className="text-gray-600">EOI打分标准,适合中国企业家</li>
                        <li className="text-gray-600">申请门槛低,没有硬性的语言,年龄和学历要求</li>
                        <li className="text-gray-600">工签批复迅速,递交申请后会先获批工签,全家人可在境内等待加拿大PR,提前享福利</li>
                    </ul>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        适合人群
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">有意愿在萨省生活并经营企业的高管</li>
                        <li className="text-gray-600">有意愿到萨省生活</li>
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
                        <p>「萨省企业家移民」为打分制的移民项目，每次抽选只会邀请特定分数以上的候选人，此外申请人还需要满足才有资格入池</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        最低条件
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">至少有50万加币企业和个人净资产</li>
                        <li className="text-gray-600">过去10年内，至少拥有3年的相关企业管理或创业经验</li>
                        <li className="text-gray-600">计划在里贾纳（萨省省会）和萨斯卡通（萨省最大城市）投资至少30万加元，或计划在萨省其它城市或社区资至少20万加元</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-100 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">商业企划书要求</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>当申请人满足抽选分数并获邀后，须先递交正式的商业企划书，且需要满足以下条件：</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        商业企划书
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">商业企划书的企业投资额和投资方向必须和给自己打分时所填的信息一致</li>
                        <li className="text-gray-600">申请人至少拥有萨省一家企业三分之一（33%）的股权，除非投资总额达到或超过100万加元</li>
                        <li className="text-gray-600">申请人必须承诺会日常管理企业</li>
                        <li className="text-gray-600">如果是在里贾纳或萨斯卡通成立全新的企业，则至少需要为2个加拿大公民或永久居民创造就业机会，且这2个人不能和申请人有任何雇佣关系之外的联系</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
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
                        <li className="text-gray-600">咨询博泰，规划移民路径，与博泰签约</li>
                        <li className="text-gray-600">准备材料</li>
                        <li className="text-gray-600">申请商务考察签证，并赴萨省完成不少于5天的商务考察</li>
                        <li className="text-gray-600">在线注册萨省EOI账号，完成打分等待邀请</li>
                        <li className="text-gray-600">获得邀请，在规定的时间内完成资产材料的审核</li>
                        <li className="text-gray-600">资产审核通过，完成萨省移民局远程电话面试</li>
                        <li className="text-gray-600">面试通过，与萨省政府签署商业计划书，获得萨省省提名工签支持信</li>
                        <li className="text-gray-600">申请并获批全家工签或学签</li>
                        <li className="text-gray-600">抵达萨省开始履行商务投资计划</li>
                        <li className="text-gray-600">至少经营6个月并达成商业计划书条件后，递交萨省提名申请</li>
                        <li className="text-gray-600">获得萨省提名信，递交PR申请</li>
                        <li className="text-gray-600">PR获批</li>
                    </ol>
                </div>
            </div>
        </div>

    </div>)
}

export default SINPEI