import Image from 'next/image'
import React from 'react'

function FederalSelfEmployed(){
    return (<div className="max-w-[1280px] w-full mx-auto p-10">
        <div className="font-bold text-center space-y-5">
            <div className="text-4xl">联邦自雇移民</div>
            <div className="text-3xl">Federal Self-employed Program</div>
        </div>
        <div className="space-y-5 mt-10">
            <div className="text-2xl font-bold">项目介绍</div>
            <div>
                加拿大「联邦自雇移民」是针对文体行业、有自雇经验的杰出人才专门设定的专属移民通道。加拿大希望通过这个项目，
                吸引能为加拿大多元文化、体育与艺术做出贡献的优秀人才。在自雇移民项目中，移民部通过分数来选拔相对优秀的申请人。
                该项目对申请人没有净资产的要求，只需要申请人的资金有能力支付移民申请费用，来到加拿大后，
                还能够支持一段时间自己和家人的生活，并且足够支持自己去从事相关领域的事业。
                自2024年起，加拿大移民局在未来三年，每年为「联邦创业移民」项目和「联邦自雇移民」项目提供5000-8000个移民配额。
            </div>
        </div>
        <div className="space-y-5 mt-10">
            <div className="text-2xl font-bold">适合人群</div>
            <ul className="space-y-3 pl-10 text-blue-900">
                <li>从事文化活动相关人士，如：作家，画家，音乐家，舞蹈家，编剧，制片人，摄影家，新闻工作者，演员，大V网红等；</li>
                <li>从事体育活动相关的人士，例如：各类运动员，裁判，教练等；</li>
                <li>在上述领域有卓越成就的人士</li>
            </ul>
        </div>
        <div className="space-y-5 mt-10">
            <div className="text-2xl font-bold">如何评定卓越成就</div>
            <div>实际上，对于成就的要求并没有一个标准的量化概念。尤其涉及到网红时，移民部并没有说过一定要多少粉丝，
                才能够通过自雇移民。对于成就而言，有官方颁发的成就固然是好的，在世界级大赛中获奖，
                或者在国家范围内很有名望，这些都是极大的加分项。
            </div>
            <div>但自雇移民并不要求申请人有很高的专业成就，这点与美国的EB1A和NIW截然不同。
                申请人只需要证明自己是专业的，在自己的专业领域内能够养活自己，
                并有一定的专业追求和造诣即可；所以，并非最顶级的文体业者才能取胜，
                只要是行业平均水平以上都有机会
            </div>
        </div>

        <div className="space-y-5 mt-10">
            <div className="text-2xl font-bold">项目优势</div>
            <ul className="space-y-3 pl-10 text-blue-900">
                <li>文化、艺术、体育相关职业，类别广泛</li>
                <li>可以继续发展以往的事业</li>
                <li>无语言和资产的硬性要求</li>
            </ul>
        </div>
        <div className="space-y-5 mt-10">
            <div className="text-2xl font-bold">申请条件</div>
            <div className="text-1xl font-bold">
                在申请前的 过去5年中，申请人在文体类行业有个体经营（自雇）的工作经验，
                或者从事加拿大移民局认可的世界级别文艺，体育类活动的工作经验。
            </div>
            <div>
                <div>文化活动类别:</div>
                <ul className="space-y-3 pl-10 text-blue-900">
                    <li>累计有两年从事文化活动的个体经营（自雇）经验；</li>
                    <li>累计有两年参与世界级别文化活动的经验；</li>
                    <li>一年的自雇经验加一年的从事世界级别文化活动的经验。</li>
                </ul>
            </div>
            <div>
                <div>体育活动类别:</div>
                <ul className="space-y-3 pl-10 text-blue-900">
                    <li>累计有两年从事体育类项目的个体经营（自雇）经验；</li>
                    <li>累计有两年参与世界级别体育活动的经验；</li>
                    <li>一年的自雇经验加一年的从事世界级别体育活动的经验。</li>
                </ul>
            </div>
            <div className="text-blue-700">
                有意愿和能力在加拿大通过过去的工作经验，继续以自雇方式创造家庭收入
            </div>
            <div className="text-blue-700">
                在基于教育，工作经验，年龄，语言和适应力等背景的打分系统（满分100分）中，
                至少满足35分的基本要求（更新到2024-01-30，基准分数或发生变化，以最新官方信息为准
            </div>
        </div>

        <div className="sA2-21pace-y-5 mt-10">
            <div className="text-2xl font-bold">项目流程</div>
            <Image src={ '/A2-21.webp' } alt={ '/' } width={ 1100 } height={ 100 }/>
            <ul className="space-y-3 pl-10 text-blue-900">
                <li>签约评估</li>
                <li>准备材料</li>
                <li>撰写商业计划书</li>
                <li>提交申请</li>
                <li>联邦审核</li>
                <li>面试</li>
                <li>提交体检报告&无犯罪记录证明</li>
                <li>获批PR</li>
            </ul>
        </div>
    </div>)
}

export default FederalSelfEmployed