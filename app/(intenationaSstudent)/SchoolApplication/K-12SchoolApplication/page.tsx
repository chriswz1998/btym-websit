'use client'

import Image from 'next/image'
import React from 'react'
import { Navbar } from '../../../../components/navbar'

function K12SchoolApplication(){
    return (<div>
        <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image src={ '/SUV_cccd356739.jpg' } alt={ '/' } layout="fill"
                   className="absolute w-full h-full object-cover"/>
            <div
                className="absolute top-0 left-0 w-full h-full bg-v1-bg1 z-10 flex flex-col justify-center items-center space-y-5">
                <p className="text-white text-5xl font-bold">中小学申请</p>
                <p className="text-white text-4xl font-bold">K-12 School Application</p>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">加拿大学校申请条件</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>小学一般没有硬性申请条件要求，而高中申请条件如下</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>公立高中：初二毕业以上，在校平均成绩在70%以上，语言无硬性要求</p>
                    <p>私立高中：最近三年各科平均成绩70%-80%，语言无硬性要求</p>
                    <p> 贵族高中：最近三年各科平均成绩80%以上，多数要求雅思5.5-6.5，同时需要提供SATT成绩</p>
                    <p> 经济担保：人民币60万以上</p>
                    <p> 面试：部分需要现场面试或SKYPE面试</p>
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
                        <p>加拿大高中和小学（留学时间根据学校性质而定）</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p> 公立高中和小学：（申请时间建议）9月入学人数相对最多，建议前一年10月开始准备，教育局普遍12月开始接受申请，申请周期2-8周（各省不同），5月底申请截止。2月份入学建议在前一年6月开始逐步，空压机普遍8月接受申请，周期2-8周（各省不同），11中旬申请截止</p>
                    <p> 普通私立学校高中和小学：入学期比较灵活，大概分为9月、一月、5月和7月入学</p>
                    <p> 贵族学校高中和小学：一般只有9月入学，申请时间建议至少提前一年开始准备，私校普遍10月开始接受申请，申请周期4-8周，12月底截止</p>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">签证申请流程</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>Contract Sample</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p> 学校申请并取得Offer (LOA) </p>
                    <p> 中小学资料清单： </p>
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
                        <p>ACADEMIC PROGRAM (CREDIT-BASED) Required documents -文件清单</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p> A recent photo of the applicant taken in the last 12 months. -过去12个月照的照片</p>
                    <p> Picture page of the applicant’s Passport or Personal Identification. -护照首页</p>
                    <p>Certified or notarized School Records/Report Cards translated into English from the current and
                        previous year of study. -过去两年的成绩单翻译件或公证件</p>
                    <p> Picture page AND the signature page of the signing parent’s Passport or Personal
                        Identification.父母的护照签字页和资料页</p>
                    <p> Signed and Notarized Declaration to Accompany Minor child in Elementary School. (once log-in,
                        youare able todownload this form) 签字的陪读父母声明（如果年龄小于13周岁）</p>
                    <p> A recommendation letter from current teacher or principal一封来自现任老师或校长的推荐信</p>
                    <p>Immunization (Vaccination) Record (preferably translated into English and
                        notarized)免疫疫苗记录翻译件</p>
                    <p>$200CAD application fee (non-refundable). -200加币注册费（不返还）</p>
                    <p>监护人公证文件</p>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">签证申请流程</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>签证申请</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p> 护照：有效期在回程日期算起九个月以上的护照，旧版须在护照末页签名，如有旧护照请一起提供。</p>
                    <p> 照片：1张近六个月相片，大小：35毫米X45毫米。</p>
                    <p> 身份证：身份证请用A4纸复印正反两面1份。</p>
                    <p> 户口本：本人户口本原件。 18岁以下需要来自父母及加拿大监护人的监护声明</p>
                    <p> 学校录取通知书： 加拿大学校录取 / 登记办公室的录取通知书复印件，显示申请人需的准确学费金额、预期的学习起止时
                        间及申请人最迟的可注册时间。且入学时间并未过期。 若魁北克省学习：
                        若计划在魁北克省学习，递交一份有效的魁北克省接受函(CAQ) </p>
                    <p> 体验报告：由指定体检医师提供的体检表格副本（如果体检已完成）</p>
                    <p> 高中公证： 高中毕业证书的公证件，以及高中登记办公室加盖公章的成绩单公证件。如高中在读，请提供在读证明公证件及成绩单公证件。在读证明需用学校正式信头纸打印，需包含以下信息：
                        申请人姓名、就读年级、学校的地址、联系方式，加盖学校公章；</p>
                    <p> 证件公证：所有毕业证书的公证件，资格证公证（如有）</p>
                    <p> 大学证书公证： 曾经获得的所有大学或学院学历的公证件，以及所有就读中的课程成绩单。如果仍未毕业，请注明预计毕业日
                        期以及其将获得何种学位、学历或证书。</p>
                    <p>无犯罪证明： 无犯罪证明的公证件。申请人年满18岁后，若在中国以外某国家或地区曾连续居住六个月或以上、均必须从此
                        国 / 地区获取警方无犯罪记录证明。</p>
                    <p> 学习计划：学习许可指南中提及的学习计划书。</p>
                    <p> 学费证明： 提供显示已经支付第一年学费的证明，或提供现有资金可支付第一年学费的存款证明。</p>
                    <p>亲属关系公证：如由父母提供资金，建议提供亲属关系公证书。</p>
                </div>
            </div>
        </div>
    </div>)
}

export default K12SchoolApplication