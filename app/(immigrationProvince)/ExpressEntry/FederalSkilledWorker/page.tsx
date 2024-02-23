'use client'

import Image from 'next/image'
import React from 'react'
import { Navbar } from '../../../../components/navbar'

function FederalSkilledWorker(){
    return (<div className="bg-[url('/Vancouver.webp')] bg-fixed bg-cover">
        <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image src={'/SUV_cccd356739.jpg'} alt={'/'} layout="fill"
                   className="absolute w-full h-full object-cover"/>
            <div
                className="absolute top-0 left-0 w-full h-full bg-v1-bg1 z-10 flex flex-col justify-center items-center space-y-5">
                <p className="text-white text-5xl font-bold">联邦技术移民</p>
                <p className="text-white text-4xl font-bold">Federal Skilled Worker</p>
            </div>
        </div>

        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">项目介绍</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>Federal Skilled Worker，简称FSW或FSWP</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly ">
                <div className="bg-white p-4 shadow rounded-lg max-w-5xl">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        联邦技术移民
                    </h3>
                    加拿大联邦技术移民， Federal Skilled Worker，简称FSW或FSWP，
                    是加拿大主要的联邦经济类移民项目之一。 项目自1967年启动以来一直是加拿大吸收全球各地人才的主要方式，
                    2023年大概有3.5万人通过该项目成功移民加拿大。
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
                        <p>加拿大联邦和各省政府共同推动的项目</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        项目优势
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">可以在加拿大境外申请</li>
                        <li className="text-gray-600">不要求本地工作经验</li>
                        <li className="text-gray-600">不要求巨额投资，满足安家资金要求即可</li>
                        <li className="text-gray-600">花费低，审理速度快，性价比高</li>
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
                        <p>根据加拿大联邦政府的要求，候选人必须满足工作、语言能力、学历等方面的最低要求，并在该计划的100分的总分中获得至少67分，才有资格申请联邦技术移民</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        最低条件
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">计划在魁北克省以外的地方生活和工作</li>
                        <li className="text-gray-600">加拿大语言基准（CLB）7级以上，即雅思4个6</li>
                        <li className="text-gray-600">工作经验要求：在过去10年，在国家职业分类NOC TEER
                            0/1/2/3类岗位，连续带薪工作1年以上
                        </li>
                        <li className="text-gray-600">学历要求：高中以上。国外学历需要进行WES学历认证</li>
                        <li className="text-gray-600">满足67分入池门槛</li>
                        <li className="text-gray-600">需有足够的安家资金证明申请人能够支持自己及家人在加拿大的生活，除非已持有工签及加拿大本地雇主的工作聘用书</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-white/60">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">申请材料</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>入池阶段</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        细节如下
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">语言成绩单（英语要求雅思G类、思培；法语要求TEF或TCF）</li>
                        <li className="text-gray-600">学历或专业技能证明。海外学历需要ECA认证，如WES</li>
                        <li className="text-gray-600">签署的申请表</li>
                        <li className="text-gray-600">政府费用的缴费单据</li>
                        <li className="text-gray-600">身份证件，包括护照、签证等</li>
                        <li className="text-gray-600">工作经验证明，需要计入分数的工作经验都需要提供相关证明</li>
                        <li className="text-gray-600">LMIA（如适用）</li>
                        <li className="text-gray-600">加拿大家庭关系证明（如适用）</li>
                        <li className="text-gray-600">所得税相关文件（如适用）</li>
                        <li className="text-gray-600">出生证明</li>
                        <li className="text-gray-600">无犯罪记录证明</li>
                        <li className="text-gray-600">IRCC认可机构体检证明</li>
                        <li className="text-gray-600">资金证明</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">申请流程</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>联邦技术移民使用联邦快速通道Express Entry 申请管理系统，申请步骤与流程与加拿大经验类移民、联邦技工移民相似</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        流程如下
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">访问快速通道在线申请网站（https://onlineservices-servicesenligne.cic.gc.ca/c2c/eapp）</li>
                        <li className="text-gray-600">回答问卷调查，查看是否符合联邦技术移民的申请标准</li>
                        <li className="text-gray-600">如果有资格申请FSWP，进入加拿大移民局官网注册IRCC安全帐户，完善用户信息，完成EE入池</li>
                        <li className="text-gray-600">等待获邀。如果申请人的CRS分数高于EE抽签分数，IRCC会给申请人发送ITA</li>
                        <li className="text-gray-600">获邀后的60天内提交完整申请</li>
                        <li className="text-gray-600">递交完整申请后，六个月内获得永久居留身份，移居加拿大</li>
                    </ol>
                </div>
            </div>
        </div>

    </div>)
}

export default FederalSkilledWorker