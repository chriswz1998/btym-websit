'use client'

import Image from 'next/image'
import React from 'react'
import { Navbar } from '../../../../components/navbar'

function SpouseOrCommonLawPartner(){
    return (<div>
        <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image src={'/SUV_cccd356739.jpg'} alt={'/'} layout="fill"
                   className="absolute w-full h-full object-cover"/>
            <div
                className="absolute top-0 left-0 w-full h-full bg-v1-bg1 z-10 flex flex-col justify-center items-center space-y-5">
                <p className="text-white text-5xl font-bold">同居伴侣移民</p>
                <p className="text-white text-4xl font-bold">Common-law Partner</p>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">项目介绍</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>Common-law Partner</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly ">
                <div className="bg-white p-4 shadow rounded-lg max-w-5xl">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        同居伴侣移民
                    </h3>
                    在加拿大，除了普通的婚姻关系，还存在一种亲密关系叫同居伴侣关系，Common-law Partner，加拿大各省对于该Common
                    Law的关系定义不太相同。
                    如果伴侣中有一方是加拿大永久居民或者公民，并年龄超过18周岁，就可以担保其配偶申请加拿大永久居民身份（枫叶卡）。
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-100 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">申请条件</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>加拿大境内担保人和被担保人的条件</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        基本条件
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">担保人需为18周岁以上</li>
                        <li className="text-gray-600">担保人需是加拿大永久居民或者公民身份</li>
                        <li className="text-gray-600">若担保人为加拿大永久居民，则需要居住在加拿大；若是加拿大公民，则无地域限制</li>
                        <li className="text-gray-600">担保人在过去5年中没有担保过另外的配偶</li>
                        <li className="text-gray-600">担保人和被担保人无财产危机、牢狱之灾或者严重的刑事和人身伤害历史</li>
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
                        <p>加拿大境外担保人和被担保人的条件：</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        最低条件
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">担保人需为18周岁以上</li>
                        <li className="text-gray-600">担保人需是加拿大永久居民或者公民身份</li>
                        <li className="text-gray-600">担保人在过去5年中没有担保过另外的配偶</li>
                        <li className="text-gray-600">担保人和被担保人无财产危机、牢狱之灾或者严重的刑事和人身伤害历史</li>
                        <li className="text-gray-600">担保人与其配偶需为法定配偶关系，包括同居关系或者婚姻关系</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-100 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">材料清单</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>担保人准备：</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        材料清单
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">担保人加拿大枫叶卡或者是公民卡的正反面复印件</li>
                        <li className="text-gray-600">担保人护照所有页面的复印件</li>
                        <li className="text-gray-600">若双方有共同的孩子，并且孩子为加拿大身份，则需要孩子的出生证明、居民证或者护照</li>
                        <li className="text-gray-600">若担保人有前任伴侣，则需要离婚证书的翻译件和公证书；若前任伴侣去世，则需要死亡证明的翻译件和公证书</li>
                        <li className="text-gray-600">担保人过去5年的收入证明，包括报税单、工资单等</li>
                        <li className="text-gray-600">若该担保人不在加拿大工作，则需要解释信来说明其合法的收入来源，以及如何保障配偶未来在加拿大的生活</li>
                        <li className="text-gray-600">担保能力评估IMM1344E ，Common-law材料清单表</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">材料清单</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>被担保人准备：</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        材料清单
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">被担保人最新的护照所有页面的扫描件</li>
                        <li className="text-gray-600">若被担保人居住在加拿大，则需要加拿大签证的复印件</li>
                        <li className="text-gray-600">被担保人出生证明翻译件以及公证</li>
                        <li className="text-gray-600">被担保人身份证正反面的复印件</li>
                        <li className="text-gray-600">被担保人户口本的翻译件和公证</li>
                        <li className="text-gray-600">中国的结婚证翻译件和公证；或者加拿大结婚证复印件</li>
                        <li className="text-gray-600">若申请人有过婚史，需提供离婚证书的翻译和公证；若前任伴侣去世，则需要死亡证明的翻译件和公证书</li>
                        <li className="text-gray-600">若申请人被他人担保过移民，则需要提供解释信，以及前任担保人的姓名和出生日期</li>
                        <li className="text-gray-600">若担保人不是被担保人的孩子的法定监护人，未满18周岁的孩子需要取得监护人的同意书</li>
                        <li className="text-gray-600">若孩子无法离开父母独立生活，且年龄为22岁以上，则需要提供健康报告证明</li>
                        <li className="text-gray-600">若孩子是领养的，则需提供合法的领养相关文件</li>
                        <li className="text-gray-600">无犯罪记录证明，除加拿大外，包括所有居住超过六个月的国家和地区</li>
                        <li className="text-gray-600">2张符合加拿大签证照片要求的照片</li>
                        <li className="text-gray-600">等到加拿大移民局要求时，需提供申请人的移民体检报告</li>

                    </ol>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-100 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={'space-y-5 text-blue-950'}>
                    <div className="text-3xl font-bold">材料清单</div>
                    <div className={'flex items-center space-x-2 text-xl font-semibold'}>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>Common-law同居伴侣关系证明</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        要求如下
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">同居双方需要连续居住12个月以上，不能够有长时间的分别，其原因包括家庭成员生病、去世或者工作调整导致的短暂和临时性的分别</li>
                        <li className="text-gray-600">同居双方的关系必须是公开的</li>
                        <li className="text-gray-600">双方的往来证明，包括微信、电话、短信等社交媒体的互动信息截图</li>
                        <li className="text-gray-600">双方的共同资产</li>
                        <li className="text-gray-600">双方的租房证明，包括租房合约</li>
                        <li className="text-gray-600">双方的共同账户，包括银行、信用卡、电话、网络和水电等</li>
                        <li className="text-gray-600">任何官方的文件或信件证明双方居住在一起，包括汽车保险、政府信件地址等</li>
                        <li className="text-gray-600">共同出行的机票和车票单据</li>
                        <li className="text-gray-600">和双方亲朋好友的合照等</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>)
}

export default SpouseOrCommonLawPartner