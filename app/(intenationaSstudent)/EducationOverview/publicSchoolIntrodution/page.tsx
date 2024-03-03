'use client'

import Image from 'next/image'
import React from 'react'
import { Navbar } from '@/components/navbar'

function publicSchoolIntrodution(){
    return (<div>
        <Navbar/>
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image src={ '/SUV_cccd356739.jpg' } alt={ '/' } layout="fill"
                   className="absolute w-full h-full object-cover"/>
            <div
                className="absolute top-0 left-0 w-full h-full bg-v1-bg1 z-10 flex flex-col justify-center items-center space-y-5">
                <p className="text-white text-5xl font-bold">加拿大高中教育体系解析</p>
                <p className="text-white text-4xl font-bold">High School Education System</p>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">公立与私立学校</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>详情介绍</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>加拿大安省的高中分为公立学校（Public school）、教会学校（Catholic School）和私立学校（Private
                        school）。</p>
                    <p>教会学校则由每个城市或行政区的天主教教育局（Catholic School
                        Board）来管理和统一招生。需要注意的是教会高中录取时对于孩子信不信教是没有要求。</p>
                    <p>除了和公立学校同样丰富业余活动，天主教学校因为宗教原因，管理较为严格，治学严谨。严格控制招收国际生的质量，对于希望专心读书，
                        并要求有良好的学习和英语语言环境的中国学生，天主教高中是非常好的选择。</p>
                    <p>再来说说私立学校
                        ，私立学校是私人机构资助或开办的。收以培养学生考取知名大学以精英化教育为主要教学内容。</p>
                    <p> 好的私立学校，不仅需要正规有资质，还需要看存在时间。同时无论是师资力量，教学设备，还是学校声望都应该是非常优秀的。</p>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-100 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">下面以安省高中来分析</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>先了解一下什么是OSSD</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>OSSD (Ontario Secondary School Diploma)
                        加拿大安大略省中学学历，是世界名列前茅的先进中学课程体系，受到了包括加拿大、美国、英国、澳大利亚等国际大学的认可，是进入世界顶级大学的通用文凭。</p>
                    <p>加拿大安大略省高中设置是9-12年级,
                        采用学分制，每门课记1个学分，需修满30个学分。多数学校都实行学期制，即1学年2个学期，每个学期各安排4门课，记4个学分，全年修8个学分。30个学分包括18个必修学分，12个选修学分。对于不及格的科目，如果又是必修的，学生则需利用暑假重修，或等到新学年时重修该门课。</p>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">9年级和10年级的课程分为三类</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>课程介绍</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>U(University Preparation)：大学预备课（想要申请大学推荐上U结尾的课）</p>
                    <p> M(University/College)：大学及大学专通用</p>
                    <p> C(College)：大专，不可用于申请大学，选课时需注意</p>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-100 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">OSSD课程学分要求</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>18个必修学分课程</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>英语、数学、科学、法语（或中文）、加拿大地理、体育、公民和职业教育、加拿大历史、第三外语 / 历史 / 社会科学
                        / 实习、艺术 / 音乐 / 戏剧、艺术/ 商业 / 体育 / 实习、技术 / 科学 / 电脑 / 实习。</p>
                    <p> 4分 作为母语的英语或法语 (from Grade 9 – 12，每年级各一个学分)</p>
                    <p> 3分 数学（至少有1分为十一或十二年级的数学课程)</p>
                    <p> 2分 科学 (Grade 9、Grade 10各1分)</p>
                    <p> 1分 加拿大历史 (Grade 9/10)</p>
                    <p> 1分 加拿大地理 (Grade 9/10）</p>
                    <p> 1分 艺术课</p>
                    <p> 1分 健康与体育</p>
                    <p> 1分 作为外语的法语或者英语</p>
                    <p> 0.5分职业教育 (Grade 10）</p>
                    <p> 0.5分公民课 (Grade 10）</p>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">另外3个必修学分要在以下每个组合里各得一分</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>必修学分如下</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>Group 1: 第二语言、第一民族语言、其他外语、社会与人文、加拿大与世界、职业教育、合作教育</p>
                    <p>Group 2: 健康与体育、艺术、商业学习、合作教育</p>
                    <p>Group 3: 科学、科技教育、合作教育</p>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-100 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">12个选修学分课程</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>修学分如下</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>第三外语 / 历史 / 社会科学 / 实习、艺术 / 音乐 / 戏剧、艺术 / 商业 / 体育 / 实习、技术 / 科学 / 电脑
                        / 实习。</p>
                    <p>不过需要注意的是，学生在高中的第一年 (Grade 9）第二年(Grade 10) 第三年 (Grade 11)，每年必须完成8个学分，在第四年
                        (Grade 12) 完成剩下的6个学分，这6个学分需要根据您所报要报考大学的要求选择预科课程。</p>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-50 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">获得OSSD的条件</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>条件如下</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>学生在高中阶段修满30个学分，其中包括18个必修课学分和12个选修课学分</p>
                    <p>通过安大略省读写能力素质考核(OSSLT)：满分400, 300分以上视为通过</p>
                    <p>完成40小时社区服务</p>
                </div>
            </div>
        </div>
        <div className="p-10 space-y-10 bg-gray-100 border-b">
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[80px] w-[5px]"/>
                <div className={ 'space-y-5 text-blue-950' }>
                    <div className="text-3xl font-bold">国内转学安省高中</div>
                    <div className={ 'flex items-center space-x-2 text-xl font-semibold' }>
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>条件如下</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-evenly">
                <div className="w-full bg-white p-4 shadow rounded-lg space-y-4">
                    <p>中国初二毕业，一般入读安省9年级，无法转学分</p>
                    <p>中国初三毕业，一般入读安省10年级，最多转8个学分</p>
                    <p> 中国高一毕业，一般入读安省11年级，最多可以转16个学分</p>
                    <p> 中国高二毕业，一般入读安省12年级，最多可以转22个学分</p>
                    <p> 中国高三毕业，安省最多转24个学分，需要补齐6个学分，获得安省教育厅颁发的高中毕业证书，获得与安省学生同样的申请大学资格（也可以用国内成绩直接申请大学)</p>
                </div>
            </div>
        </div>
    </div>)
}

export default publicSchoolIntrodution