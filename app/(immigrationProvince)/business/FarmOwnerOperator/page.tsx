'use client'

import Image from 'next/image'
import React from 'react'
import { Navbar } from '../../../../components/navbar'

function  FarmOwnerOperator(){
    return (<div>
        <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image src={'/SUV_cccd356739.jpg'} alt={'/'} layout="fill"
                   className="absolute w-full h-full object-cover"/>
            <div
                className="absolute top-0 left-0 w-full h-full bg-v1-bg1 z-10 flex flex-col justify-center items-center space-y-5">
                <p className="text-white text-5xl font-bold">萨省农场主移民</p>
                <p className="text-white text-4xl font-bold">Saskatchewan Farm Owner and Operator Category</p>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">项目介绍</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>SINP Farm Owner and Operator Category</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly ">
                <div className="bg-white p-4 shadow rounded-lg max-w-5xl">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        萨省农场主移民
                    </h3>
                    萨省农场主移民，SINP Farm Owner and Operator Category，
                    吸引和鼓励农业从业人员在萨省开展其农场经营策略，提升萨省农业生产的同时，
                    帮助申请人通过此项目获得萨省提名，并可以申请移民加拿大，
                    成为加拿大永久居民。此项目适用于具备农场生产管理经验及投资农场经营资本（至少50万加币），
                    并打算在萨省购买并经营农场的申请人（农场生产的产品仅限于农作物或牲畜）。这属于萨省投资移民。
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
                        <p>优势列表如下</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        项目优势
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">该移民项目对于申请人没有年龄以及英语语言能力的要求</li>
                        <li className="text-gray-600">萨省该项目的申请和审核速度较快，一般而言，申请人1至2年即可获得永久居民身份</li>
                        <li className="text-gray-600">该项目的申请人不需要担心名额不足的问题，萨省一年的农场主移民名额总有剩余</li>
                        <li className="text-gray-600">在申请人登陆加拿大之后，购买50万加币的农场，并在2年经营之后，验收合格即可申请移民</li>
                        <li className="text-gray-600">萨省的土地价格较低且保值，帮助农场主降低营业成本</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">萨省农场主总体要求</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>针对农场主的主要要求</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        最低条件
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">申请人必须提供财务文件，证明主申请人或夫妻双方名下具备净资产至少500000加币</li>
                        <li className="text-gray-600">申请人必须同意与萨省政府签署表现协议（Business Performance
                            Agreement），承诺会在萨省购买并积极经营农场，并支付保证金7.5万加币，一旦满足业绩协议中的条款，该保证金将会退还给申请人，如果在登陆萨省两年内没有满足业绩协议的条款，该存款将会被萨省政府没收
                        </li>
                        <li className="text-gray-600">申请人必须对萨省进行不少于五个工作日的全面考察访问，考察期间必须与一位萨省提名项目SINP代表会面</li>
                        <li className="text-gray-600">提供文件（如教育培训、工作经验、之前经营的财务文件）证明申请人拥有农场运营的知识和经验，如有需要，可能会在考察期间对申请人进行面试</li>
                        <li className="text-gray-600">申请人需提出切实可行并经过深思熟虑的在萨省进行农场项目的方案</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-100 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">青年农民类别的要求</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>针对青年农民的要求</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        最低要求
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">主申请人至少具备可确认的个人净资产300000加币，且证实个人净资产为合法所得</li>
                        <li className="text-gray-600">提交申请时年龄在40岁以下</li>
                        <li className="text-gray-600">具备至少三年农场主、农场管理或农场实践经验</li>
                        <li className="text-gray-600">提供书面的萨省农业项目运营方案，方案内容建议应基于对萨省农场和农业的调查、咨询和相关研究工作的，不可以是以休闲为目的经营的农场，农场建议应当是一个具有合理预期利润的商业项目，必须至少有10000加币的年收入；主申请人和其配偶具有市场运营的能力</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">不被受理的情况</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>以下一种或几种情况发生，将不符合申请要求</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        额外要素
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">不满足以上任意一点要求</li>
                        <li className="text-gray-600">申请人或其子女有严重的健康问题</li>
                        <li className="text-gray-600">申请人及其配偶或其18岁以上子女有过犯罪记录</li>
                        <li className="text-gray-600">申请人有仍在进行的监护权或子女抚养费纠纷</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-100 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">申请流程</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>细节请咨询顾问</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        流程如下
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">评估并准备申请文件</li>
                        <li className="text-gray-600">申请费2500加币，以及7.5万加币保证金</li>
                        <li className="text-gray-600">到萨省进行至少5个工作日的农场项目考察</li>
                        <li className="text-gray-600">提交文件，等待收据</li>
                        <li className="text-gray-600">如申请通过，按要求缴纳申请费</li>
                        <li className="text-gray-600">完成付费，等待面试；如面试和文件都合格，支付保证金，并签署企业表现协议</li>
                        <li className="text-gray-600">获得萨省省提名，可以申请永久居民。同时可以申请工签</li>
                        <li className="text-gray-600">联邦移民局会安排体检，无犯罪记录调查，面试等</li>
                        <li className="text-gray-600">抵达萨省后，参加萨省提名官员面试</li>
                        <li className="text-gray-600">加拿大联邦申请费主申请和配偶各1040加币，未成年孩子150加币/个</li>

                    </ol>
                </div>
            </div>
        </div>
    </div>)
}

export default FarmOwnerOperator