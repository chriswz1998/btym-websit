'use client'

import Image from 'next/image'
import React from 'react'
import { Navbar } from '../../../../components/navbar'

function coop(){
    return (<div className="bg-[url('/Vancouver.webp')] bg-fixed bg-cover">
        <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image src={ '/SUV_cccd356739.jpg' } alt={ '/' } layout="fill"
                   className="absolute w-full h-full object-cover"/>
            <div
                className="absolute top-0 left-0 w-full h-full bg-v1-bg1 z-10 flex flex-col justify-center items-center space-y-5">
                <p className="text-white text-5xl font-bold">留学生实习工作签证</p>
                <p className="text-white text-4xl font-bold">CO-OP</p>
            </div>
        </div>

        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">项目介绍</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>什么是实习工签？</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly ">
                <div className="bg-white p-4 shadow rounded-lg max-w-5xl">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        CO-OP
                    </h3>
                    加拿大的留学生在持学签学习的时候有两种工作的可能。第一种是在学签的状态下，每周最多可以兼职20小时。
                    第二种是，作为课程的一部分，在校外实习工作。第一种情况是不需要额外申请工作签证的。
                    第二种情况是可以为制定的雇主全职工作，但是必须要申请「实习工签」。与其它开放式工签不同，
                    「实习工签」是封闭工签，持有者只能为工签上所注明的雇主工作。并且该工作必须是作为其学习项目的必要环节。
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-white/30">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">如何申请实习工签?</div>
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
                        <li className="text-gray-600">必须持有有效的学习许可</li>
                        <li className="text-gray-600">打算进行的工作必须是学习项目的必要组成部分</li>
                        <li className="text-gray-600">工作作为学习的一部分必须获得学校的官方认可</li>
                        <li className="text-gray-600">实习工作不能超过学习项目的50%，不能是医疗实习，住院医师也不行（兽医除外）</li>
                        <li className="text-gray-600">学习英语、法语或者一般课课程的国际学生，不能申请实习工签</li>
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
                        <p>所需文件清单</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        细节
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">申请表格IMM5710</li>
                        <li className="text-gray-600">学校信介绍信：注明预期实习的时间并证明实习工作是学习必要的组成部分</li>
                        <li className="text-gray-600">护照或旅行证件，需要扫描首页、签名页和每一个有签证、有章的页面</li>
                        <li className="text-gray-600">电子照片</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>)
}

export default coop