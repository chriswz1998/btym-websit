'use client'

import Image from 'next/image'
import React from 'react'
import { Navbar } from '../../../../components/navbar'

function BCPNPEI(){
    return (<div>
        <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image src={ '/SUV_cccd356739.jpg' } alt={ '/' } layout="fill"
                   className="absolute w-full h-full object-cover"/>
            <div
                className="absolute top-0 left-0 w-full h-full bg-v1-bg1 z-10 flex flex-col justify-center items-center space-y-5">
                <p className="text-white text-5xl font-bold">BC卑诗省企业家移民</p>
                <p className="text-white text-4xl font-bold">BC PN PEI</p>
            </div>
        </div>

        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">BC卑诗省企业家移民</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>该类别适用于能够支持BC省创新和经济增长的企业家，申请人必须具备企业家经验，满足一定的投资要求</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">申请条件</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>一般提名要求</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">一般提名要求</h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">申请人必须证明正在积极的管理BC省的企业，即在BC省当地的营业场所负责企业的日常运营</li>
                        <li className="text-gray-600">申请人必须证明在BC省居住地在其所经营的企业50公里之内，并且有至少75%的持工作许可时间是居住在BC省的</li>
                        <li className="text-gray-600">申请人在提交最终报告之时，需达到英语/法语CLB 4的语言水平</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">申请条件</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>对申请人的要求</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">对申请人的要求</h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">申请人在目前的居住国有合法身份</li>
                        <li className="text-gray-600">申请人至少具备60万加币的个人净资产，并且资产为合法所得且能够被核实</li>
                        <li className="text-gray-600">具备3年以上积极运营企业主管理经验</li>
                        <li className="text-gray-600">或者4年以上高级管理经验</li>
                        <li className="text-gray-600">又或者至少1年积极运营企业主管理经验和至少2年高管经验组合</li>
                        <li className="text-gray-600">企业主管理经验要求在过去的10年中申请人在控股10%以上的企业管理和运营中发挥积极作用</li>
                        <li className="text-gray-600">高管经验要求在过去的10年中申请人在企业中担任高级管理人员</li>
                        <li className="text-gray-600">至少有3名全职下属</li>
                        <li className="text-gray-600">所从事的职业属于NOC 0或A类</li>
                        <li className="text-gray-600">提供能够证明完成最高教育水平的信息 包括:</li>
                        <li className="text-gray-600">高等教育证书</li>
                        <li className="text-gray-600">在过去的5年中至少有3年在100%持股的企业中作为企业主从事管理工作</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">申请条件</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>对企业的要求</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">对企业的要求</h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">申请人在BC省创建或购买的企业需有助于该省的经济增长，拟议企业必须是以提供产品和/或服务赚取利润为目的的，拟议企业必须在注册表单中用完整的六位数NAICS代码标识，对于合作伙伴，必须在注册时确定合作伙伴及其所有权百分比（总所有权必须达到100%），对于收购现有企业，必须在注册中指明具体的目标企业，企业必须已经由当前经营者至少经营了60个月</li>
                        <li className="text-gray-600">申请人在企业中至少持股三分之一，如持股少于三分之一则必须至少投资100万加币</li>
                        <li className="text-gray-600">如申请人能够证明拟议特许经营企业是完善的（即扩展能力、良好的财务记录以及运营至少60个月），则特许经营企业也可被视为符合条件的企业</li>
                        <li className="text-gray-600">如申请人有意在BC省创建新的农场/农业企业，或购买现有农场/农业企业，所从事的农业活动需以农业部编写的初创农场经营规划手册为蓝本，申请人需提供一份可行性声明，表明移民企业如何具有经济意义，该声明需由有资格为BC省农业商业规划和BC省土著农业发展计划申请者提供服务的合格商业顾问准备；商业计划必须证明申请人已经彻底研究了其农业经营的可行性，并已与可以为其企业提供支持的相关当地利益相关者（例如供应商和服务提供商）建立了联系</li>
                        <li className="text-gray-600">季节性企业的商业计划不被认可，除非申请人可以证明将实际在BC省并将全年担任积极的管理角色，并满足其他要求</li>
                        <li className="text-gray-600">如申请人的拟议企业属于高度监管行业，则需证明申请人知晓并能够满足当地、省和联邦的监管要求</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">申请条件</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>最低投资要求</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">最低投资要求</h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">申请人必须证明在持工作许可到达BC省610天（大约20个月）之内，至少在拟议企业中投资20万加币，该资金必须来自申请人的个人净资产</li>
                        <li className="text-gray-600">BCPNP不认可申请人在受邀申请前进行的任何投资</li>
                        <li className="text-gray-600">申请人可使用业务合作伙伴或金融机构的外部融资进行超出最低要求部分的投资</li>
                    </ol>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">申请流程</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>详情可咨询顾问</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">申请流程</h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl max-w-5xl">
                        <li className="text-gray-600">创建BCPNP在线账户，BCPNP要求提供申请人的个人电子邮箱地址，以确保申请人能够收到所有相关文件，账户创建完成后，点击Entrepreneur
                            Immigration stream按钮，继续注册程序
                        </li>
                        <li className="text-gray-600">点击按钮后，申请人将被引导到My Dashboard，在这里完成注册信息填写；
                        </li>
                        <li className="text-gray-600">填写完成后，选择提交注册表，系统将根据申请人提交的信息计算各部分的分数，商业理念部分将由BCPNP单独计算，如每一部分的分数都能达到最低分要求，申请人将被要求电子支付300加币注册费；BCPNP将在6周内提供总分数，申请人将收到分数的电子邮件以及是否能够进入候选池的通知，此时My
                            Dashboard将出现更新的最终注册分
                        </li>
                        <li className="text-gray-600">BCPNP按照高分原则邀请最高分注册人提交申请，获邀申请人将收到电子邮件确认函，申请人的注册将被移出候选池，申请人需在120天之内提交完整申请，包括净资产核查报告、所有的支持文件及全面商业计划</li>
                        <li className="text-gray-600">申请必须通过BCPNP在线账户提交，申请最多可以附带50个附件，每个附件不得超过3M</li>
                        <li className="text-gray-600">支付3500加币申请处理费，每增加一个关键员工申请，需额外支付1000加币申请处理费，BCPNP对申请进行审理，审理过程中申请人有可能会被要求参加面试</li>
                        <li className="text-gray-600">申请获批后，申请人将被要求与BC省签署一份履约协议，BCPNP将会为申请人出具一份工作许可支持信，申请人需在90天之内向IRCC申请一个2年期的工作许可，以便申请人及其家人能够移居BC省并开展商业计划</li>
                        <li className="text-gray-600">在获得工作许可支持信后，申请人必须持有效工作许可在365天之内抵达BC省，在登陆BC省60天之内，申请人必须向BCPNP提交抵达报告，报告内容包括申请人在BC省的联系方式、工作许可以及是否把必要的资金转移到了BC省的金融机构</li>
                        <li className="text-gray-600">在申请人持有效工作许可抵达BC省后610天之内，申请人需完成商业计划，积极管理企业，以及满足签署的履约协议的预期</li>
                        <li className="text-gray-600">在抵达BC省550-610天之间，申请人需提交最终报告给BCPNP，证明已满足履约协议中的要求，BCPNP对申请人的最终报告进行审核和评估，一旦条件满足，BCPNP将向申请人出具提名确认函</li>
                        <li className="text-gray-600">省提名获批后，申请人必须在180天之内向IRCC提交永居签证申请，IRCC批准后，获签</li>

                    </ul>
                </div>
            </div>
        </div>

    </div>)
}

export default BCPNPEI