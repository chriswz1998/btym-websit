'use client'

import Image from 'next/image'
import React from 'react'
import { Navbar } from '../../../../components/navbar'

function MPNP_SkillImmigration(){
    return (<div>
        <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image src={'/SUV_cccd356739.jpg'} alt={'/'} layout="fill"
                   className="absolute w-full h-full object-cover"/>
            <div
                className="absolute top-0 left-0 w-full h-full bg-v1-bg1 z-10 flex flex-col justify-center items-center space-y-5">
                <p className="text-white text-5xl font-bold">曼省技术移民</p>
                <p className="text-white text-4xl font-bold">SWM</p>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">项目介绍</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>曼省技术移民境内类别（SWM）</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly ">
                <div className="bg-white p-4 shadow rounded-lg max-w-5xl">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        SWM
                    </h3>
                    曼省技术移民境内类别是一个以当地雇主需求为基础的雇主驱动类别移民项目。MPNP筛选具有当地劳动力市场所需技能，并受过国际培训具备丰富经验的工人，提名他们获得加拿大永居签证以便其能够在曼省定居和工作。

                    该类别适用于具备持续工作与充分技能、教育与培训、工作经验和官方语言能力的申请人，申请人通过持续的曼省工作与该省建立起联系，从而有资格申请曼省提名。申请人群里包括曼省的临时外籍工人、曼省留学毕业生以及加拿大其他省份和地区留学毕业生。

                    持续的曼省工作意味着一家曼省公司在临时外籍工人或留学生完成至少六个月（连续）全职工作后，为其提供了一份长期、全职工作offer。

                    该类别无需满足曼省评分标准，只有通过和不通过之分。
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-100 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">申请人要求</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>临时外籍工人申请条件</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        基本条件
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">申请人持有效工签至少已为曼省雇主全职工作至少六个月，申请人为加拿大其他省份留学毕业生需至少已为曼省雇主全职工作一年</li>
                        <li className="text-gray-600">持有该雇主提供的长期工作offer</li>
                        <li className="text-gray-600">具备该工作职位要求的所有资质，包括培训/教育以及所需的执照或认证</li>
                        <li className="text-gray-600">具备满足工作职位要求的英语或法语能力</li>
                        <li className="text-gray-600">申请人通过就业与曼省建立的连续比其他省份更紧密</li>
                        <li className="text-gray-600">在定居计划中表明申请人有以永居居民身份在曼省生活、工作和构建工作和家庭生活的意愿</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">申请人要求</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>留学生申请条件</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        最低条件
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">申请人在曼省的公立或注册私立职业或高等教育机构接受授权的教育或培训（语言课程除外）</li>
                        <li className="text-gray-600">申请人在曼省所学课程为至少一年的全日制学术/职业课程</li>
                        <li className="text-gray-600">申请人已完成学业，并获得文凭、学位或证书</li>
                        <li className="text-gray-600">持有效毕业生工作签证已为提供长期工作offer的曼省雇主连续工作至少六个月</li>
                        <li className="text-gray-600">申请人通过就业与曼省建立起来的联系比其他省份更紧密</li>
                        <li className="text-gray-600">在定居计划中表明申请人有以永居居民身份在曼省生活、工作和构建工作和家庭生活的意愿</li>
                        <li className="text-gray-600">具备满足工作职位要求的英语或法语能力（C类或D类工作需具备至少CLB 4的英语或法语能力）</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>)
}

export default MPNP_SkillImmigration