'use client'

import Image from 'next/image'
import React from 'react'
import { Navbar } from '../../../../components/navbar'

function PostGraduateWorkPermit(){
    return (<div className="bg-[url('/Vancouver.webp')] bg-fixed bg-cover">
        <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image src={ '/SUV_cccd356739.jpg' } alt={ '/' } layout="fill"
                   className="absolute w-full h-full object-cover"/>
            <div
                className="absolute top-0 left-0 w-full h-full bg-v1-bg1 z-10 flex flex-col justify-center items-center space-y-5">
                <p className="text-white text-5xl font-bold">留学生毕业工作签证</p>
                <p className="text-white text-4xl font-bold">PGWP</p>
            </div>
        </div>

        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">项目介绍</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>什么是毕业工签？</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly ">
                <div className="bg-white p-4 shadow rounded-lg max-w-5xl">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        PGWP
                    </h3>
                    首先，留学生毕业后，一定一定要提前申请毕业后工作签证(Post graduate work
                    permit。近年来，加拿大移民局（IRCC）把本地留学生作为吸纳新移民的首选。本地留学生的优势显示易见：年轻、好学、英语或法语好、有本地学习和生活经验，具备将来在加拿大工作的基本能力，结婚生子更是能为加拿大创造人口，提升经济活力，改良老龄化社会结构。
                    <br/>
                    因此，为了留住本地留学生人才，移民局特别推出“毕业生工作许可”计划。根据该计划，持有工作许可证的留学生，毕业后能够为加拿大任意行业的任何雇主工作。“工作许可”会在完成学业后签发，其长度与留学的持续时间相当，最长可达三年。通常来说，在符合资格的加拿大院校留学完成两年以上课程的毕业生，有机会获得三年工作许可（也叫毕业工签）。这样，加上学习时间，可允许本科生在加拿大停留长达七年时间，硕士博士还有望更长时间。
                    <br/>
                    留学生获得工签的条件，必须是在符合标准的加拿大高等教育机构完成学业。更有吸引力的是，留学生在申请毕业工签时，无需证明已获得加拿大的工作offer。
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-white/30">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">获得工签需满足的条件?</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>在以下类型的加拿大全日制教育机构留学至少八个月以上</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        基本条件
                    </h3>
                    <ul className="list-disc pl-5 space-y-4 text-lg max-w-5xl">
                        <li className="text-gray-600">公立高等学校，如大专、大学或魁北克大专教育学院(CEGEP学院)</li>
                        <li className="text-gray-600">按照与公共机构相同的规则和条例运作的加拿大私立高等教育机构</li>
                        <li className="text-gray-600">在私立学校或大专院校（仅魁北克省）接受900小时或更长时间的合格课程，可获得职业学习文凭（DVS）或职业专业认证（AVS）</li>
                        <li className="text-gray-600">根据各省法规授权授予学位（即学士学位，硕士学位，博士学位）的加拿大私立教育机构，但前提是该学生注册的是一项获得该省授权的正式学位课程，而不是在私人机构提供的研究计划</li>
                        <li className="text-gray-600">留学生必须在180天内申请毕业后工作许可证</li>
                        <li className="text-gray-600">申请人必须年满18周岁</li>
                        <li className="text-gray-600">申请人必须有学校发放的证明文件（毕业证、证书等），确认其通过了相关课程学习</li>
                        <li className="text-gray-600">申请工作许可证时，必须持有有效的学习许可证</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">工签的注意事项</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>注意事项如下</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="bg-white p-4 shadow rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-red-600">
                        细节
                    </h3>
                    <ol className="list-decimal pl-5 space-y-4 text-lg">
                        <li className="text-gray-600">留学生在加拿大的课程学习至少要超过两年，毕业生才能申请获得长达三年的毕业后工作许可证。但是，如果该课程计划不到两年但超过八个月，毕业生仍可获得与课程持续时间相同的工作许可期限</li>
                        <li className="text-gray-600">如果留学生在成功获得受当地认可的加拿大大专学历或文凭后两年内，从另一家受当地认可的教育机构获得一年制的学位或文凭，那么他或她也有资格获得长达三年的工作许可</li>
                        <li className="text-gray-600">如果留学生符合所有条件，除了没有在他们学习计划的最后一学期全职完成课程，那该学生仍可申请“毕业后工作许可证计划”。例如，如果该留学生在学校的最后一学期，只需完成两门课程就可结束学业，但先前所有的课程都已经脱产全职完成，那么他或她仍然可以申请开放工作签证（open work permit）</li>
                        <li className="text-gray-600">毕业工签的有效期是根据学校制定学习项目的长短来决定（而不是申请者实际学习时间的长短）</li>
                        <li className="text-gray-600">目前毕业工签的审理时间较长，需要4-5个月，但留学生在递交申请，等待毕业工签的这段时间内是可以合法工作的</li>
                        <li className="text-gray-600">学习项目时间小于8个月不得申请毕业工签</li>
                        <li className="text-gray-600">学习项目时间8个月以上且小于2年，毕业工签有效期和学习项目时间相同</li>
                        <li className="text-gray-600">学习项目时间大于等于2年，毕业工签有效期为3年（最长3年）</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>)
}

export default PostGraduateWorkPermit