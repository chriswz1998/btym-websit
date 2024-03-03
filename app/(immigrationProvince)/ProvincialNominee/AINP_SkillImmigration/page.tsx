'use client'

import Image from 'next/image'
import React from 'react'
import { Navbar } from '../../../../components/navbar'

function AINP_SkillImmigration(){
    return (<div>
        <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image src={'/SUV_cccd356739.jpg'} alt={'/'} layout="fill"
                   className="absolute w-full h-full object-cover"/>
            <div
                className="absolute top-0 left-0 w-full h-full bg-v1-bg1 z-10 flex flex-col justify-center items-center space-y-5">
                <p className="text-white text-5xl font-bold">阿省省提名-小镇企业家移民</p>
                <p className="text-white text-4xl font-bold">Alberta Advantage Immigration Program (AAIP) — Rural Entrepreneur Stream</p>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">项目介绍</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>Rural Entrepreneur Stream</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly ">
                <div className="bg-white p-4 shadow rounded-lg max-w-5xl">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        阿省小镇企业家移民
                    </h3>
                    阿省小镇企业家移民项目即乡村企业家移民类别 Rural Entrepreneur Stream，
                    如果您计划在阿省偏远地区的社区开展或者购买一个商业项目，就可以通过这个省提名项目申请加拿大永久居民。
                    <br/>
                    加拿大时间2023年4月3日，阿省移民局官宣：阿省省提名项目(AAIP)旗下的乡村企业家类别(Rural Entrepreneur Stream，简称RES)
                    的最低投资额从原来的20万加元降至10万加元——这一举措直接对标BC省企业家投资-偏远地区试点类项目，显示出阿省对于吸引商业投资的渴望和积极态度。
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
                        <p>最低要求</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        基本条件
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">雅思CLB4即可</li>
                        <li className="text-gray-600">投资自由，行业没有限制</li>
                        <li className="text-gray-600">一人申请移民，全家枫叶卡</li>
                        <li className="text-gray-600">快速登陆加拿大</li>
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
                        <li className="text-gray-600">投资的地点须在卡尔加里都市区和埃德蒙顿都市区以外，人口少于10万的社区，该社区获准参与这个移民项目</li>
                        <li className="text-gray-600">过去10年内至少有3年的企业家经验，或者至少有4年的企业高管经验</li>
                        <li className="text-gray-600">学历背景至少为高中毕业，非加拿大学历须做学历认证</li>
                        <li className="text-gray-600">语言至少达到CLB4</li>
                        <li className="text-gray-600">家庭净资产至少达到30万加元</li>
                        <li className="text-gray-600">至少会在阿尔伯塔投资10万加元</li>
                        <li className="text-gray-600">如果创建新生意，至少需占股51%，剩余股份须由加拿大PR或者公民持有；如果购买现有生意，则须持股100%</li>
                        <li className="text-gray-600">须获得投资社区的支持信</li>
                        <li className="text-gray-600">购买现有商业</li>
                        <li className="text-gray-600">年龄在21-49岁之间</li>
                        <li className="text-gray-600">配偶有至少一年的高等教育或者英文或法语至少达到CLB 4</li>
                        <li className="text-gray-600">申请人或配偶在阿省有父母孩子或亲兄弟姐妹</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-100 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">项目流程</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>流程如下</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        细节：
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">签约，评估并准备材料，准备商业计划书，准备商业考察</li>
                        <li className="text-gray-600">商业考察</li>
                        <li className="text-gray-600">递交商业计划，获得社区支持信</li>
                        <li className="text-gray-600">递交EOI，等待邀请</li>
                        <li className="text-gray-600">获得邀请函，递交省提名全套材料，申请工作签证</li>
                        <li className="text-gray-600">获得工签后，登陆加拿大，开始经营公司</li>
                        <li className="text-gray-600">经营生意，投资做生意12个月以上，解除条件</li>
                        <li className="text-gray-600">省提名获批，准备资料递交联邦</li>
                        <li className="text-gray-600">联邦移民申请获批，体检，获取移民纸，换取枫叶卡</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>)
}

export default AINP_SkillImmigration