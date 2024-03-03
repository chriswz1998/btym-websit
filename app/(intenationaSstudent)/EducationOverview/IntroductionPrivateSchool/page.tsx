'use client'

import Image from 'next/image'
import React from 'react'
import { Navbar } from '@/components/navbar'

function IntroductionPrivateSchool(){
    return (<div>
        <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image src={ '/SUV_cccd356739.jpg' } alt={ '/' } layout="fill"
                   className="absolute w-full h-full object-cover"/>
            <div
                className="absolute top-0 left-0 w-full h-full bg-v1-bg1 z-10 flex flex-col justify-center items-center space-y-5">
                <p className="text-white text-5xl font-bold">加拿大私立高中选择</p>
                <p className="text-white text-4xl font-bold">Private High School Education</p>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">私立学校介绍</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>详情介绍</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>根据加拿大权威机构菲沙研究所（Fraser institute）对加拿大各省教育部门的统计</p>
                    <p>加拿大共有1,935所中小学私立学校，占所有学校的7%。从近几年的趋势来看，越来越多的人选择私校。</p>
                    <p>比如在安省，近5年，就读私校的学生增长了15%。安省是私校大户，有954所私校，接下来卑诗省340所和魁省285所。</p>
                    <p>只有不到20%的私校同时提供小学和中学服务，约45%只提供小学服务，而略高于35%的私校只提供中学服务。</p>
                    <p>加拿大的私立高中是由加拿大私人组织或者个人出资，提供加拿大中学教育，学生毕业后可以获得加拿大高中毕业证。</p>
                    <p>私立学校有很大的招生自主权，它可以自己设定录取标准，学校在这些招生录取标准的高低设定，很大程度决定了私立学校中学生的构成。</p>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-100 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">三种类别的私立高中</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>详情介绍</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>顶级贵族学校</p>
                    <p> CAIS名校</p>
                    <p>和其他私校</p>
                    <p>CAIS全称是CanadianAccredited Independent School，也就加拿大独立学校认证协会</p>
                    <p> CAIS创立于1981年，是个独立而权威的全国性私校审查机构</p>
                    <p>它对待资格认证的私校有一百多项考核标准，并要求学校至少成立5年</p>
                    <p>能提供过去3年的学校运营细节、财务报表、学生学业状况，德育培养状况，连续考核2-3年，包括实地考察，才会最后发放资格证书</p>
                    <p>CAIS的私校认证名单里不包括国际学院，因为它主要是服务加拿大本地学生的</p>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">第一类私校</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>学校介绍</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>是华人常说的“顶级贵族学校”</p>
                    <p>这类私校入学要求最高、声誉卓著，约占所有私校的1%，比如StAndrew、UCC、Crescent等</p>
                    <p>除UTS（多大附中）外，全部是CAIS的会员</p>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-100 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">第二类私校</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>学校介绍</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>第二类是私校处在中间层，大约只包括100所优质私校</p>
                    <p>主要是CAIS认证的私校和少数优质百年私校，如Country Day School、Holy Trinity School</p>
                    <p>再外几所虽然未经认证但口碑很好的百年私校，如De La Salle College、St. Michael’s College School</p>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">第三类私校</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>学校介绍</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>第三类私校的范围最大、无论好坏，全部囊括其中，有近2000所私校</p>
                    <p>但值得注意的是有一些私校虽然没有经过CAIS认证，但是专注幼儿和小学教育，规模不大，教育质量很高，在家长中口碑也很好，例如位于Richmond
                        Hill的Richland Academy</p>
                    <p>第三类的私立高中差别较大，要仔细选择学校，了解学校的各种情况，不要因为学校宣传的很多，就轻易选择。优秀的私立高中，大多都会对国际学生比率有控制，而且在世界各国都有招生</p>
                </div>
            </div>
        </div>
    </div>)
}

export default IntroductionPrivateSchool