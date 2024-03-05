'use client'

import Image from 'next/image'
import React from 'react'
import { Navbar } from '../../../../components/navbar'

function UniversityApplication(){
    return (<div>
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
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">什么是实习工签</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>实习工签介绍</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>加拿大的留学生在持学签学习的时候有两种工作的可能</p>
                    <p>第一种是在学签的状态下，每周最多可以兼职20小时</p>
                    <p>第二种是，作为课程的一部分，在校外实习工作</p>
                    <p>第一种情况是不需要额外申请工作签证的。第二种情况是可以为制定的雇主全职工作，但是必须要申请「实习工签」</p>
                    <p>与其它开放式工签不同，「实习工签」是封闭工签，持有者只能为工签上所注明的雇主工作。并且该工作必须是作为其学习项目的必要环节</p>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-100 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">加拿大学校申请条件</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>研究生申请条件</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>硬件条件：大学成绩GPA、TOELF/IELTS、GMAT/GRE成绩、学位证书等（托福一般至少90以上，IELTS一般至少6.5以上。GRE只有部分学校的理科专业需要，
                        GMAT一般针对申请MBA/专业会计硕士/金融硕士的学生需要）</p>
                    <p> 语言成绩：IELTS的成绩在6.5-7.0分，听说读写不低于6.0，或者托福90以上，单项不低于22；GRE只有部分学校的理工科专业需要，1300以上；
                        GMAT一般针对申请MBA/专业会计硕士/金融硕士的学生，一般不低于550</p>
                    <p> 经济担保：30万以上
                    </p></div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">加拿大学校申请时间</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>大专</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p> 一般入学期为9月、1月和5月</p>
                    <p> 申请时间建议：建议提前一年准备。专科院校一般没有固定的截止日期，关键是要关注所申请专业名额情况，名额满了就会自动关闭申请
                    </p>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-100 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">加拿大学校申请时间</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>大学本科</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>一般入学期为9月和1月，少部分有5月</p>
                    <p> 申请时间建议：建议提前一年准备。加拿大直接录取一般在2、3月就截止申请。加拿大大学本科双录取一年有多次开心时间，因此本科双录取一年有几次机会。
                        申请平均周期为3-4个月。</p>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">加拿大学校申请时间</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>硕士</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p> 一般入学期为9月和1月，少部分有5月</p>
                    <p> 申请时间建议：建议提前一年准备。大四上学期的10月份准备第二年9月入学。 申请平均周期为4-8个月</p>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-100 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">签证申请流程</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>学校申请并取得 Offer (LOA) 中小学资料清单</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>A recent photo of the applicant taken in the last 12 months. –过去12个月照的照片</p>
                    <p>Picture page of the applicant’s Passport or Personal Identification. –护照首页</p>
                    <p>Certified or notarized School Records/Report Cards translated into English from the current
                        and previous year of study. –过去两年的成绩单翻译件或公证件</p>
                    <p>Picture page AND the signature page of the signing parent’s Passport or Personal
                        Identification. 父母的护照签字页和资料页</p>
                    <p>Signed and Notarized Declaration to Accompany Minor child in Elementary School. (once log-in,
                        you are able to download this form) 签字的陪读父母声明（如果年龄小于13周岁）</p>
                    <p>A recommendation letter from current teacher or principal 一封来自现任老师或校长的推荐信</p>
                    <p>Immunization (Vaccination) Record (preferably translated into English and notarized) 免疫疫苗记录翻译件
                    </p>
                    <p>$200CAD application fee (non-refundable). -200加币注册费（不返还）</p>
                    <p>监护人公证文件</p>
                </div>
            </div>
        </div>
    </div>)
}

export default UniversityApplication