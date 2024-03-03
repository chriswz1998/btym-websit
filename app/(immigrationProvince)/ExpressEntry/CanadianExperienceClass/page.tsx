'use client'

import Image from 'next/image'
import React from 'react'
import { Navbar } from '../../../../components/navbar'

function CanadianExperienceClass(){
    return (<div>
        <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image src={'/SUV_cccd356739.jpg'} alt={'/'} layout="fill"
                   className="absolute w-full h-full object-cover"/>
            <div
                className="absolute top-0 left-0 w-full h-full bg-v1-bg1 z-10 flex flex-col justify-center items-center space-y-5">
                <p className="text-white text-5xl font-bold">加拿大经验类移民</p>
                <p className="text-white text-4xl font-bold">Canadian Experience Class</p>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">项目介绍</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>加拿大经验类移民的全称是Canadian Experience Class，简称CEC</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly ">
                <div className="bg-white p-4 shadow rounded-lg max-w-5xl">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        经验类移民
                    </h3>
                    加拿大经验类移民的全称是Canadian Experience Class，简称CEC，
                    适合已经持有加拿大合法临时身份，且获得一年以上加拿大境内工作经验的申请人。
                    它的核心要求是：“一年加拿大境内工作经验”。
                    对于已经获得加拿大工作经验的临时外国工人和国际毕业生来说，CEC是移民加拿大的重要选择。
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-100 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">项目优势</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>加拿大经验类移民是加拿大联邦和各省政府共同推动的项目，旨在鼓励更多的临时外国工人和国际学生在加拿大建立自己的未来</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        项目优势
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">整体周期短，递交后6个月即可获批永居</li>
                        <li className="text-gray-600">移民费用低</li>
                        <li className="text-gray-600">凭分数邀请，公平、透明</li>
                        <li className="text-gray-600">移民配额多，加拿大移民局一直在不遗余力的拓展CEC移民配额，吸引他们认为的最优秀、最适应、最有前途的新移民</li>
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
                        <p>申请人的最低资格要求</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        最低条件
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">工作经验要求：在申请之日起36个月内在加拿大获得至少一年的熟练、专业或技术工作经验。请注意，在全日制学习期间获得的自雇经验和工作经验（例如，在带薪实习期）不计入CEC工作经验中</li>
                        <li className="text-gray-600">语言成绩要求：从事NOC TEER 2/3类工作，需要达到加拿大语言基准 CLB
                            5；从事NOC TEER 0/1类工作，需要达到加拿大语言基准 CLB7
                        </li>
                        <li className="text-gray-600">计划在魁北克省以外的地方生活和工作</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-100 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">如果你是国际留学生</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>从符合资格的加拿大教育项目毕业的国际留学生是通过加拿大经验类移民获得永久居留权的主要群体。
                            国际留学毕业生申请CEC需要满足以下条件</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        细节如下
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">在加拿大指定学习机构DLI完成教育课程</li>
                        <li className="text-gray-600">持有效毕业工签(PGWP)</li>
                        <li className="text-gray-600">在申请前的3年内，拥有至少一年的全职工作经验，或等同小时数量的兼职工作经验</li>
                        <li className="text-gray-600">参加IRCC指定的英语或法语语言测试，即雅思或思培，并获得最低加拿大语言基准（CLB）要求（NOC
                            TEER 0/1类工作要求CLB 7，NOC TEER 2/3类工作要求CLB 5）
                        </li>
                        <li className="text-gray-600">进入Express Entry池，CRS分数达到EE邀请分数线</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">如果你是临时外国工人</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>临时外国工人在积累加拿大一年专业工作经验后，也有资格申请加拿大经验类移民。具体需要满足以下条件</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        细节如下
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">持有效加拿大工作许可证，大多数是LMIA工签</li>
                        <li className="text-gray-600">持有效毕业工签(PGWP)</li>
                        <li className="text-gray-600">在申请前的3年内，拥有至少一年的全职工作经验，或等同小时数量的兼职工作经验</li>
                        <li className="text-gray-600">参加IRCC指定的英语或法语语言测试，并获得最低加拿大语言基准 (CLB)
                            要求（NOC 0 和 A 工作经验为 CLB 7，NOC B 工作经验为 CLB 5）
                        </li>
                        <li className="text-gray-600">进入Express Entry池，CRS分数达到EE邀请分数线</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-100 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">CEC申请流程</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>流程细节请咨询顾问</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        流程如下
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">确保符合CEC的资格标准</li>
                        <li className="text-gray-600">在IRCC的网站上提交快联邦快速通道档案，详情请参考《手把手教你如何在线申请快速通道EE》。随后，候选人将收到综合排名系统（CRS）分数</li>
                        <li className="text-gray-600">等待获邀。移民局会不定期举行Express Entry抽签，根据CRS分数由高到低，邀请候选人申请永久居留权。目前需要CRS分数高于500分，才有机会获邀</li>
                        <li className="text-gray-600">获邀后提交完整申请。递交申请后，候选人有望在六个月内获得永久居留身份，移居加拿大</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>)
}

export default CanadianExperienceClass