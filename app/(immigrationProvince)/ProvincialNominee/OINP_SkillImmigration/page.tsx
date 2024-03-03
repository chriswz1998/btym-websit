'use client'

import Image from 'next/image'
import React from 'react'
import { Navbar } from '../../../../components/navbar'

function OINP_SkillImmigration(){
    return (<div>
        <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image src={ '/SUV_cccd356739.jpg' } alt={ '/' } layout="fill"
                   className="absolute w-full h-full object-cover"/>
            <div
                className="absolute top-0 left-0 w-full h-full bg-v1-bg1 z-10 flex flex-col justify-center items-center space-y-5">
                <p className="text-white text-5xl font-bold">安大略省企业家移民</p>
                <p className="text-white text-4xl font-bold">OINP Entrepreneur Stream</p>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">项目介绍</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>安省企业家移民申请分为两个阶段</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly ">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        第一阶段
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">EOI</li>
                        <li className="text-gray-600">受到邀请递交申请</li>
                        <li className="text-gray-600">参加OINP当面面试</li>
                        <li className="text-gray-600">与安省政府签署《商业营运协议》performance agreement</li>
                    </ul>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        第二阶段
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">安省签发工作签证支持信</li>
                        <li className="text-gray-600">投资通过OINP审核, 递交移民材料获取安省提名信</li>
                        <li className="text-gray-600">向联邦申请加拿大永久居民</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-100 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">项目要求</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>安省企业家移民对申请人的要求</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">经验</h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">在过去60个月内至少有24个月的全职商业经验</li>
                        <li className="text-gray-600">具有的经验必须是企业主或者高级经理</li>
                        <li className="text-gray-600">如果同时具有以上两种经验，申请时必须只选择其中的一种经验</li>
                    </ul>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">资产净值</h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">如果投资的业务位于大多伦多以内，至少拥有80万加币的净资产</li>
                        <li className="text-gray-600">如果投资的业务位于大多伦多以外，至少拥有40万加币的净资产</li>
                        <li className="text-gray-600">如果投资的业务属于资讯及通讯科技/数码通讯范畴，至少拥有40万加币净资产</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">项目要求</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>安省企业家移民对申请人的要求</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">投资额</h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">如果投资的业务位于大多伦多以内，至少要投资60万加币</li>
                        <li className="text-gray-600">如果投资的业务位于大多伦多以外，至少要投资20万加币</li>
                        <li className="text-gray-600">如果投资的业务属于资讯及通讯科技/数码通讯范畴，至少要投资20万加币</li>
                    </ul>
                </div>
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">其他要求</h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">必须持续积极参与生意的运作和管理</li>
                        <li className="text-gray-600">必须至少持股不少于1/3</li>
                        <li className="text-gray-600">大多以内的企业至少须创造2个永久全职工作职位，大多以外及资讯及通讯科技/数码通讯范畴的业务只须创造1个</li>
                        <li className="text-gray-600">如果收购现有企业，必须在最近1年内访问过安省</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-100 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">申请人要求</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
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
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">其他要求</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>安省企业家移民对所投资企业的要求</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        细节：
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">投资生意的目的必须是通过销售货物和（或者）服务从实际收入中获利，而不是从被动收入中获利</li>
                        <li className="text-gray-600">投资的生意必须遵守联邦、省或市的所适用的法律法规、监管或许可要求，这包括安省劳工法，包括但不限于就业标准、健康和安全以及劳工关系立法</li>
                        <li className="text-gray-600">所投资的生意必须在安省是永久的，项目化/季节性的业务是不合格的</li>
                        <li className="text-gray-600">投资的生意必须始终在安省有一个营业地点</li>
                        <li className="text-gray-600">第三方投资者必须是附表1或附表2银行或机构投资者</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-100 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">其他要求</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>安省企业家移民对收购现有企业的要求</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        细节：
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">购买之前的60个月内，现有企业必须由相同的owner持续经营（需有所有权证明和购买业务的意向书或销售协议）</li>
                        <li className="text-gray-600">购买之后，先前的owner不能保留企业的任何股份，必须100%地转移出股份</li>
                        <li className="text-gray-600">所收购的企业不能由当前或以前的OINP商业移民提名者拥有或经营</li>
                        <li className="text-gray-600">如果是大多以内的企业，收购以后必须保留现有的永久性全职工作职位，同时还须再创造2个永久全职的工作职位。必须将现有员工的当前工资水平和雇佣条款维持在最低水平</li>
                        <li className="text-gray-600">果是大多以外或ICT/数字通信的企业，收购以后必须保留现有的永久性全职工作职位，同时还须再创造1个永久全职的工作职位。必须将现有员工的当前工资水平和雇佣条款维持在最低水平</li>
                        <li className="text-gray-600">收购的企业必须表明会发展业务，不允许收购和持有不打算发展业务的商业计划</li>
                        <li className="text-gray-600">最低投资额中至少10%必须用于改善或扩大安省的业务</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">其他要求</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>安省企业家移民对申请省提名的要求</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        细节：
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">申请人在被提名之前，语言达到CLB 4（听5，读3.5，写4.0，说4.0）或以上</li>
                        <li className="text-gray-600">建立业务期间，申请人75%（每年9个月）的时间实际居住在安省</li>
                        <li className="text-gray-600">必须积极参与公司的日常管理经营</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>)
}

export default OINP_SkillImmigration