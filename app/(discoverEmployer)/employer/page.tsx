'use client'

import React from 'react'
import Image from 'next/image'
import { DialogCoverFrom } from '@/components/dialog'
import { Tabs, TabsTrigger, TabsList, TabsContent } from '@/components/ui/tabs'

const Employer = () => {
    return ( <div>
        <Tabs defaultValue="bc">
            <TabsList className={ 'w-full p-12' }>
                <TabsTrigger className={ 'text-[20px] p-3 ' } value="bc">BC雇主担保</TabsTrigger>
                <TabsTrigger className={ 'text-[20px] p-3 ' } value="ss">萨省雇主担保</TabsTrigger>
                <TabsTrigger className={ 'text-[20px] p-3 ' } value="as">阿省雇主担保</TabsTrigger>
                <TabsTrigger className={ 'text-[20px] p-3 ' } value="ns">NS省雇主担保</TabsTrigger>
                <TabsTrigger className={ 'text-[20px] p-3 ' } value="ans">安省雇主担保</TabsTrigger>
            </TabsList>
            <TabsContent value="bc">
                <div className={ 'w-full flex items-center justify-center' }>
                    <Image src={ '/bcemp1.png' } alt={ '' } width={ 0 }
                           height={ 0 }
                           sizes="100vw"
                           style={ { width: '70%', height: 'auto', display: 'block' } }/>
                </div>
                <div className={ 'py-20 flex flex-col items-center border-b' }>
                    <p className={ 'text-[32px] font-bold' }>BC省雇主担保</p>
                    <p className={ 'text-[20px] text-default-blue' }>BCPNP- Skilled Worker</p>
                    <p className={ 'w-[660px] mt-12' }>
                        BC省雇主担保移民是由BC省政府和联邦移民部协议共同运作的省提名(PNP)移民项目，
                        旨在帮助BC省的企业雇佣并保留拥有所需技能的合资格的外国技术工人。
                        加拿大BC省雇主担保移民，首先由企业筛选合格的申请人，并同意给申请人下发offer，
                        通过省提名计划支持申请人申请永久居留，申请人的配偶、子女也都将同时获得永居。
                    </p>
                </div>
                <div className={ 'text-center py-20' }>
                    <p className={ 'text-[32px] font-bold pb-12' }>
                        哪些人适合申请 <span className={ 'text-default-blue' }>BC省提名雇主担保</span> ？
                    </p>
                    <div className={ 'w-full flex items-center justify-center' }>
                        <Image src={ '/who.png' } alt={ '' } width={ 0 }
                               height={ 0 }
                               sizes="100vw"
                               style={ { width: '100%', height: 'auto', display: 'block' } }/>
                    </div>
                </div>
                <div className={ 'px-20 min-[1980px]:w-[1980px] mx-auto mb-28' }>
                    <p className={ 'text-[32px] font-bold pb-12 text-center' }>
                        多样化申请渠道· <span className={ 'text-default-blue' }>适配不同人群</span>
                    </p>
                    <div className={ 'flex justify-between' }>
                        <div>
                            <div className={ 'flex items-center' }>
                                <span className={ 'text-[56px] text-default-blue font-bold' }>01</span>
                                <span className={ 'text-[28px] font-bold ml-2' }>常规技术工人</span>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>大专及以上学历</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>雅思建议CLB5以上</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>至少2年或以上工作经验</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>BC省雇主提供的全职长期的雇佣Offer</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>打分达到每次邀请的最低分数</p>
                            </div>
                        </div>
                        <div>
                            <div className={ 'flex items-center' }>
                                <span className={ 'text-[56px] text-default-blue font-bold' }>02</span>
                                <span className={ 'text-[28px] font-bold ml-2' }>技术工人快速通道</span>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>大专及以上学历</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>雅思要求CLB 7</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>至少2年或以上工作经验</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>BC省雇主提供的全职长期的雇佣Offer</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>达到每次邀请的最低分，同时需要满足EE(FSW)打分67分的要求</p>
                            </div>
                        </div>
                        <div>
                            <div className={ 'flex items-center' }>
                                <span className={ 'text-[56px] text-default-blue font-bold' }>03</span>
                                <span className={ 'text-[28px] font-bold ml-2' }>国际毕业生</span>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>当前在加拿大境内拥有合法身份</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>加拿大境内获得高中以上的学历(毕业不超过两年)</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>雅思至少CLB4以上</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>BC省雇主提供的全职长期的雇佣Offer(TEER
                                    0，1，2，3)</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>达到每次邀请的最低分</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ 'px-20 min-[1980px]:w-[1980px] mx-auto mb-28' }>
                    <p className={ 'text-[32px] font-bold pb-12 text-center' }>
                        BC省提名技术移民· <span className={ 'text-default-blue' }>优先职位类别</span>
                    </p>
                    <div className={ 'flex justify-between' }>
                        <div>
                            <div className={ 'flex items-center' }>
                                <span className={ 'text-[56px] text-default-blue font-bold' }>01</span>
                                <span className={ 'text-[28px] font-bold ml-2' }>科技类</span>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>大专及以上学历</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>工作职位属于35种优先职业之一</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>语言要求建议CLB5以上</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>需要满足2年以上全职的相关工作经验</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>需要获得BC省雇主offer</p>
                            </div>
                        </div>
                        <div>
                            <div className={ 'flex items-center' }>
                                <span className={ 'text-[56px] text-default-blue font-bold' }>02</span>
                                <span className={ 'text-[28px] font-bold ml-2' }>幼儿教育类</span>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>大专及以上学历</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>雅思要求CLB6</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>考取ECEA或者ECE职业资格证书</p>
                            </div>
                        </div>
                        <div>
                            <div className={ 'flex items-center' }>
                                <span className={ 'text-[56px] text-default-blue font-bold' }>03</span>
                                <span className={ 'text-[28px] font-bold ml-2' }>医疗保健类</span>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>须在某个公共卫生机构获得全职工作</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>拥有公共卫生当局规定的教育、培训、经验和资格，还必须满足提供的职位在BC省工作所需的任何认证、许可或注册等</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>最低语言要求(建议CLB5以上)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className={ 'text-[32px] font-bold pb-12 text-center' }>
                        项目流程
                    </p>
                    <Image src={ '/pb.jpg' } alt={ '' } width={ 0 }
                           height={ 0 }
                           sizes="100vw"
                           style={ { width: '100%', height: 'auto', display: 'block' } }/>
                </div>

            </TabsContent>
            <TabsContent value="ss">
                <div className={ 'w-full flex items-center justify-center' }>
                    <Image src={ '/ss.png' } alt={ '' } width={ 0 }
                           height={ 0 }
                           sizes="100vw"
                           style={ { width: '70%', height: 'auto', display: 'block' } }/>
                </div>
                <div className={ 'py-20 flex flex-col items-center border-b' }>
                    <p className={ 'text-[32px] font-bold' }>萨省雇主担保</p>
                    <p className={ 'w-[660px] mt-12' }>
                        萨省雇主担保移民是萨省为发展经济而引进急需、
                        短缺的专业技术人才而给予特许提名的技术移民途径，
                        主要针对技术工人，专业人员或者管理类人员，该项目属于优先处理类别，
                        申请处理时间相比其他移民类别要快，而且申请要求宽松，适合急需获得身份的申请人。
                    </p>
                </div>
                <div className={ 'py-20' }>
                    <p className={ 'text-[32px] font-bold pb-12 text-center' }>
                        适合申请<span className={ 'text-default-blue' }>萨省提名雇主担保项目</span>的人群
                    </p>
                    <div className={ 'px-20 min-[1980px]:w-[1980px] mx-auto mb-28' }>
                        <div className={ 'flex justify-center items-center' }>
                            <div className={ 'w-1/4 flex items-center justify-center mb-3' }>
                                <div
                                    className={ 'w-[30px] h-[30px] bg-default-blue rounded-full mr-4 text-white flex items-center justify-center font-bold text-[20px]' }>1
                                </div>
                                <div
                                    className={ 'w-[450px] text-[20px] text-description-text-color text-center' }>有一定语言基础的申请人
                                </div>
                            </div>
                            <div className={ 'w-1/4 flex items-center justify-center mb-3' }>
                                <div
                                    className={ 'w-[30px] h-[30px] bg-default-blue rounded-full mr-4 text-white flex items-center justify-center font-bold text-[20px]' }>2
                                </div>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color text-center' }>短期内想快速获得身份的申请人</p>
                            </div>
                            <div className={ ' w-1/4 flex items-center justify-center mb-3' }>
                                <div
                                    className={ 'w-[30px] h-[30px] bg-default-blue rounded-full mr-4 text-white flex items-center justify-center font-bold text-[20px]' }>3
                                </div>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color text-center' }>专业技术人员或管理类工作的申请人</p>
                            </div>
                            <div className={ ' w-1/4 flex items-center justify-center mb-3' }>
                                <div
                                    className={ 'w-[30px] h-[30px] bg-default-blue rounded-full mr-4 text-white flex items-center justify-center font-bold text-[20px]' }>4
                                </div>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color text-center' }>资金来源庞杂的申请人</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={ 'px-20 min-[1980px]:w-[1980px] mx-auto mb-28' }>
                    <p className={ 'text-[32px] font-bold pb-12 text-center' }>
                        会计、行政、管理· <span className={ 'text-default-blue' }>专业人才的黄金通道</span>
                    </p>
                    <div className={ 'flex justify-center' }>
                        <div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>高中及以上学历，雅思成绩不低于CLB5</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>具有相应工作经验1年以上</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>满足萨省打分表60分要求</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>持有萨省雇主提供的长期、全职工作offer</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>持有效的SINP工作批准函(JAL)</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={ 'px-20 min-[1980px]:w-[1980px] mx-auto mb-28' }>
                    <p className={ 'text-[32px] font-bold pb-12 text-center' }>
                        项目优势&申请流程
                    </p>
                    <div className={ 'flex flex-col items-center' }>
                        <div className={ 'mb-20' }>
                            <div className={ 'flex items-center' }>
                                <span className={ 'text-[56px] text-default-blue font-bold' }>01</span>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>无资产要求，无需解释资金来源</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>语言学历要求较低</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>周期短，1年左右即可完成</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>萨省政府审批，可免面试</p>
                            </div>
                        </div>
                        <div>
                            <div className={ 'flex items-center' }>
                                <span className={ 'text-[56px] text-default-blue font-bold' }>02</span>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>递交简历进行评估</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>匹配雇主
                                    雇主获批JAL</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>获得Offer
                                    在线递交申请</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>获得省提名
                                    工签支持信</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>递交联邦</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>体检 获得登陆信</p>
                            </div>
                        </div>
                    </div>
                </div>
            </TabsContent>
            <TabsContent value="as">
                <div className={ 'w-full flex items-center justify-center' }>
                    <Image src={ '/abl.png' } alt={ '' } width={ 0 }
                           height={ 0 }
                           sizes="100vw"
                           style={ { width: '70%', height: 'auto', display: 'block' } }/>
                </div>
                <div className={ 'py-20 flex flex-col items-center border-b' }>
                    <p className={ 'text-[32px] font-bold' }>阿省雇主担保</p>
                    <p className={ 'text-[20px] text-default-blue' }>Alberta Opportunity Stream</p>
                    <p className={ 'w-[660px] mt-12' }>
                        阿尔伯塔省优势移民计划 (AAIP) 前身为阿尔伯塔省移民提名计划，是一项经济移民计划。
                        阿尔伯塔省机会类别 (Alberta Opportunity Stream,也可称雇主担保移民)，
                        属于阿尔伯塔省优势移民计划，在阿省生活和工作并获得阿省雇主提供的工作机会的合格候选人可以向阿省移民局申请AAIP提名。
                    </p>
                </div>
                <div className={ 'py-20' }>
                    <p className={ 'text-[32px] font-bold pb-12 text-center' }>
                        <span className={ 'text-default-blue' }>◉ 阿省雇主项目优势</span>
                    </p>
                    <div className={ 'px-20 min-[1980px]:w-[1980px] mx-auto mb-28' }>
                        <div className={ 'flex justify-center items-center' }>
                            <div className={ 'w-1/5 flex items-center justify-center mb-3' }>
                                <div
                                    className={ 'w-[40px] h-[40px] bg-default-blue rounded-full mr-4 text-white flex items-center justify-center font-bold text-[20px]' }>1
                                </div>
                                <div
                                    className={ 'w-[450px] text-[20px] text-description-text-color text-center' }>申请流程简单
                                </div>
                            </div>
                            <div className={ 'w-1/5 flex items-center justify-center mb-3' }>
                                <div
                                    className={ 'w-[40px] h-[40px] bg-default-blue rounded-full mr-4 text-white flex items-center justify-center font-bold text-[20px]' }>2
                                </div>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color text-center' }>语言要求低</p>
                            </div>
                            <div className={ ' w-1/5 flex items-center justify-center mb-3' }>
                                <div
                                    className={ 'w-[40px] h-[40px] bg-default-blue rounded-full mr-4 text-white flex items-center justify-center font-bold text-[20px]' }>3
                                </div>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color text-center' }>申请周期短</p>
                            </div>
                            <div className={ ' w-1/5 flex items-center justify-center mb-3' }>
                                <div
                                    className={ 'w-[40px] h-[40px] bg-default-blue rounded-full mr-4 text-white flex items-center justify-center font-bold text-[20px]' }>4
                                </div>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color text-center' }>职位种类多</p>
                            </div>
                            <div className={ ' w-1/5 flex items-center justify-center mb-3' }>
                                <div
                                    className={ 'w-[40px] h-[40px] bg-default-blue rounded-full mr-4 text-white flex items-center justify-center font-bold text-[20px]' }>4
                                </div>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color text-center' }>生活教育福利</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={ 'px-20 min-[1980px]:w-[1980px] mx-auto mb-28' }>
                    <p className={ 'text-[32px] font-bold pb-12 text-center' }>
                        <span className={ 'text-default-blue' }>◉ 申请条件 </span>
                    </p>
                    <div className={ 'flex justify-center' }>
                        <div>
                            <div className={ 'flex items-center' }>
                                <span className={ 'text-[56px] text-default-blue font-bold' }>01</span>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>大专及以上学历</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>NOC
                                    0、A、B类岗位雅思至少CLB5 / NOC C、D类岗位雅思至少CLB4</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>过去的18个月中在阿尔伯塔省至有12个月的全职工作经验，
                                    或者过去30个月内在省外或海外至少有24个月的全职工作经验 /
                                    毕业工签持有者要求在过去18个月中拥有6个月全职工作经验（当前工作）。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ 'px-20 min-[1980px]:w-[1980px] mx-auto mb-28' }>
                    <p className={ 'text-[32px] font-bold pb-12 text-center' }>
                        <span className={ 'text-default-blue' }>◉ 申请流程</span>
                    </p>
                    <div className={ 'flex justify-center' }>
                        <div>
                            <div className={ 'flex items-center' }>
                                <span className={ 'text-[56px] text-default-blue font-bold' }>01</span>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>评估申请条件</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>收集申请材料</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>匹配雇主</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>申请LMIA及工签</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>登陆工作</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>申请省提名</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>递交联邦</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className={ 'text-[32px] font-bold pb-12 text-center' }>
                        关于阿尔伯塔
                    </p>
                    <Image src={ '/ablb.jpeg' } alt={ '' } width={ 0 }
                           height={ 0 }
                           sizes="100vw"
                           style={ { width: '100%', height: 'auto', display: 'block' } }/>
                </div>
            </TabsContent>
            <TabsContent value="ns">
                <div className={ 'w-full flex items-center justify-center' }>
                    <Image src={ '/ns.png' } alt={ '' } width={ 0 }
                           height={ 0 }
                           sizes="100vw"
                           style={ { width: '70%', height: 'auto', display: 'block' } }/>
                </div>
                <div className={ 'py-20 flex flex-col items-center border-b' }>
                    <p className={ 'text-[32px] font-bold' }>新斯科舍省提名技术工人</p>
                    <p className={ 'text-[20px] text-default-blue' }>NSNP-Skilled Worker</p>
                    <p className={ 'w-[660px] mt-12' }>
                        新斯科舍省雇主担保移民项目(Nova Scotia Provincial NomineeProgram)，
                        简称NSNP，分为技术工人类别 (Skilled Worker) 和NS省紧缺职业类别 (Occupation in Demand)。
                        作为一个经济类移民项目，主要针对于具备NS省所需的技能、经验和符合资格的申请人。
                        该项目为促进本省经济发展的外国工人和本省留学生提供移民途径。
                        如果申请人有在NS省定居的打算,可以通过NS省省提名获得永居身份。
                        并且获得省提名后,其配偶和子女有资格向联邦提交签证申请,获得枫叶卡。
                    </p>
                </div>

                <div className={ 'py-20' }>
                    <p className={ 'text-[32px] font-bold pb-12 text-center' }>
                        哪类人适合申请<span className={ 'text-default-blue' }>NS雇主担保</span>?
                    </p>
                    <div className={ 'px-20 min-[1980px]:w-[1980px] mx-auto mb-28' }>
                        <div className={ 'flex justify-center items-center' }>
                            <div className={ 'w-1/5 flex items-center justify-center mb-3' }>
                                <div
                                    className={ 'w-[40px] h-[40px] bg-default-blue rounded-full mr-4 text-white flex items-center justify-center font-bold text-[20px]' }>1
                                </div>
                                <div
                                    className={ 'w-[450px] text-[20px] text-description-text-color text-center' }>工作时间较短
                                </div>
                            </div>
                            <div className={ 'w-1/5 flex items-center justify-center mb-3' }>
                                <div
                                    className={ 'w-[40px] h-[40px] bg-default-blue rounded-full mr-4 text-white flex items-center justify-center font-bold text-[20px]' }>2
                                </div>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color text-center' }>不想长久等待</p>
                            </div>
                            <div className={ ' w-1/5 flex items-center justify-center mb-3' }>
                                <div
                                    className={ 'w-[40px] h-[40px] bg-default-blue rounded-full mr-4 text-white flex items-center justify-center font-bold text-[20px]' }>3
                                </div>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color text-center' }>学历语言能力比较弱</p>
                            </div>
                            <div className={ ' w-1/5 flex items-center justify-center mb-3' }>
                                <div
                                    className={ 'w-[40px] h-[40px] bg-default-blue rounded-full mr-4 text-white flex items-center justify-center font-bold text-[20px]' }>4
                                </div>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color text-center' }>不想扎推热门城市</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={ 'px-20 min-[1980px]:w-[1980px] mx-auto mb-28' }>
                    <p className={ 'text-[32px] font-bold pb-12 text-center' }>
                        <span className={ 'text-default-blue' }>◉ 申请条件 </span>
                    </p>
                    <div className={ 'flex justify-center' }>
                        <div>
                            <div className={ 'flex items-center' }>
                                <span className={ 'text-[56px] text-default-blue font-bold' }>01</span>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>21-54周岁,
                                    高中及以上学历</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>过去5年内，有1年相关工作经验，该工作经历必须和申请职业相关(申请职位为TEER
                                    4/5类别的，必须已经为雇主工作至少六个月)</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>必职业属于TEER
                                    0/1/2/3 语言能力不低于CLB5必职业属于TEER 4/5 语言能力不低于CLB 4</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>获得NS省雇主提供的长期全职工作Offer</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>有足够的资金支持您和您的家人在NS省的短期生活</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ 'px-20 min-[1980px]:w-[1980px] mx-auto mb-28' }>
                    <p className={ 'text-[32px] font-bold pb-12 text-center' }>
                        <span className={ 'text-default-blue' }>◉ 申请流程</span>
                    </p>
                    <div className={ 'flex justify-center' }>
                        <div>
                            <div className={ 'flex items-center' }>
                                <span className={ 'text-[56px] text-default-blue font-bold' }>01</span>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>评估申请条件</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>收集申请材料</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>匹配雇主</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>申请LMIA及工签</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>登陆工作</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>申请省提名</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>递交联邦</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className={ 'text-[32px] font-bold pb-12 text-center' }>
                        申请流程
                    </p>
                    <Image src={ '/stream.png' } alt={ '' } width={ 0 }
                           height={ 0 }
                           sizes="100vw"
                           style={ { width: '80%', height: 'auto', margin: 'auto', display: 'block' } }/>
                </div>
            </TabsContent>
            <TabsContent value="ans">
                <div className={ 'w-full flex items-center justify-center' }>
                    <Image src={ '/asss.png' } alt={ '' } width={ 0 }
                           height={ 0 }
                           sizes="100vw"
                           style={ { width: '70%', height: 'auto', display: 'block' } }/>
                </div>
                <div className={ 'py-20 flex flex-col items-center border-b' }>
                    <p className={ 'text-[32px] font-bold' }>安省雇主担保</p>
                    <p className={ 'text-[20px] text-default-blue' }></p>
                    <p className={ 'w-[660px] mt-12' }>
                        安省雇主担保项目是由加拿大安省雇主单位主动向安省移民局提出申请，
                        担保其潜在雇员获得加拿大永居身份的一种移民方式。这是安省特有的雇主福利，
                        加拿大移民局会根据雇主企业的规模，给到相对应的提名配额，
                        以便企业能招聘到合适的技术人才。目前安省提名雇主的担保项目采用EOI打分形式，
                        申请人只要满足岗位要求，获得雇主offer，即可入池等待获邀
                    </p>
                </div>

                <div className={ 'px-20 min-[1980px]:w-[1980px] mx-auto mb-28' }>
                    <p className={ 'text-[32px] font-bold pb-12 text-center' }>
                        <span className={ 'text-default-blue' }>◉ 申请条件 </span>
                    </p>
                    <div className={ 'flex justify-center' }>
                        <div>
                            <div className={ 'flex items-center' }>
                                <span className={ 'text-[56px] text-default-blue font-bold' }>01</span>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>大专及以上学历</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>雅思至少CLB5</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>过去5年中至少有2年工作经验</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>获得安省雇主全职雇佣OFFER</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>无犯罪记录</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ 'px-20 min-[1980px]:w-[1980px] mx-auto mb-28' }>
                    <p className={ 'text-[32px] font-bold pb-12 text-center' }>
                        <span className={ 'text-default-blue' }>◉ 申请流程</span>
                    </p>
                    <div className={ 'flex justify-center' }>
                        <div>
                            <div className={ 'flex items-center' }>
                                <span className={ 'text-[56px] text-default-blue font-bold' }>01</span>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>创建EOI意愿表达档案</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>候选人进入EOI人才库，等候抽选</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>安省省提名办公室根据 项目要求和分数筛选</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>候选人收到加拿大移民邀请函(ITA)</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>候选人完善移民资料并提交</p>
                            </div>
                            <div className={ 'flex items-center mb-3' }>
                                <div className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                <p className={ 'w-[450px] text-[20px] text-description-text-color' }>申请接受审核获批，获得安省省提名</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'mb-20'}>
                    <p className={ 'text-[32px] font-bold pb-12 text-center' }>
                        热门申请岗位
                    </p>
                    <Image src={ '/job.png' } alt={ '' } width={ 0 }
                           height={ 0 }
                           sizes="100vw"
                           style={ { width: '80%', height: 'auto', margin: 'auto', display: 'block' } }/>
                </div>
            </TabsContent>
        </Tabs>


    </div> )
}

export default Employer
