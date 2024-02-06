import Image from 'next/image'
import React from 'react'

function FederalStartUp(){
    return (<div className="max-w-[1280px] w-full mx-auto p-10">
        <div className="font-bold text-center space-y-5">
            <div className="text-4xl">联邦创业移民</div>
            <div className="text-3xl">Federal Start Up Visa</div>
        </div>
        <div className="space-y-5 mt-10">
            <div className="text-2xl font-bold">项目介绍</div>
            <div>
                「加拿大联邦创业移民（简称SUV）」，
                是加拿大移民部于2013年启动的试点移民项目，
                并于2017年被列为永久项目。该项目对申请人的背景条件要求较低，
                无需解释资产来源，雅思5分，无居住地限制，且可以最多5人组团（每个人都可带配偶和子女）申请。
                加拿大移民部重视该项目，2023年进行了重大改革，承诺未来将会允许所有参团者申请3年开放式工签，
                并进行了审理大提速。未来3年，
                加拿大移民部每年计划提供3000-6500名配额（含“联邦创业移民”和“联邦自雇移民”）！
            </div>
        </div>
        <div className="space-y-5 mt-10">
            <div className="text-2xl font-bold">适合人群</div>
            <div className="text-1xl font-bold">年龄18岁以上：</div>
            <ul className="space-y-3 pl-10 text-blue-900">
                <li>18-24：占4% 获批准的创业者；</li>
                <li>24-44：占77% 获批准的创业者；</li>
                <li>44 + ： 占19% 获批准的创业者；</li>
            </ul>
            <div className="text-blue-700">高中以上学历：获批创业者中，74%拥有本科或以上的专业学历</div>
            <div className="text-blue-700">愿意定居在魁北克省以外的省份；</div>
            <div className="text-blue-700">有一定语言基础的新创者和商业精英：</div>
            <div
                className="text-blue-700">具备创业者综合素质：开拓精神，宏观思维、执行力强、并追求国际新创接轨、高端教育、高品质生活的精英。
            </div>
            <div className="text-blue-700">创业项目具备创新性、可行性、扩展性、能制造工作机会、极高成长潜力、全球竞争性</div>
        </div>
        <div className="space-y-5 mt-10">
            <div className="text-2xl font-bold">项目优势</div>
            <div className="space-y-5">
                <div>
                    <span className="text-blue-900 font-bold">审批迅速：</span>
                    最快6-8个月即可入境加拿大温哥华；
                </div>
                <div>
                    <span className="text-blue-900 font-bold">条件宽松：</span>
                    无硬性的工作、创业、管理经验及学历要求（只需高中以上）；
                </div>
                <div>
                    <span className="text-blue-900 font-bold">材料简单：</span>
                    无需提供资产来源证明、收入证明、完税凭证；
                </div>
                <div>
                    <span className="text-blue-900 font-bold">性价比高：</span>
                    无具体投资金额要求，无须高额投资；
                </div>
                <div>
                    <span className="text-blue-900 font-bold">成功率高：</span>
                    预审合格后成功率96%以上；联邦项目，无需通过省提名，项目小众，申请人数相比较少，只需由移民局指定的机构出署“支持信”，即可凭此申请永居；
                </div>
                <div>
                    <span className="text-blue-900 font-bold">无居住地要求：</span>
                    可以在加拿大任何地方居住（魁北克以外即可），享受当地优厚福利；
                </div>
                <div>
                    <span className="text-blue-900 font-bold">支持多人同时申请：</span>
                    可同时让高达五位申请人携带家属，同时申请移民获取身份
                </div>
                <div>等待PR期间，所有申请人均申请3年开放式工签（该政策为移民部公告未来改动公告，尚未正式实施）；</div>
                <div>等待PR期间，持工签申请人的配偶配偶可申请相同有效期的配偶工签，持工签申请人子女可申请学签；</div>
                <div>创业成功与否不影响全家的永久居民身份！</div>
                <a href="/" className="block text-red-700">点击直达项目细节链接~</a>
            </div>
        </div>
        <div className="space-y-5 mt-10">
            <div className="text-2xl font-bold">申请条件</div>
            <div className="text-1xl font-bold">由加拿大指定机构决定筛选和推荐：</div>
            <ul className="space-y-3 pl-10 text-blue-900">
                <li>商业初创孵化器／加速器(Incubators / Accelerators)</li>
                <li>天使投资人／机构(Angels)</li>
                <li>风险投资组织(VC)</li>
            </ul>
            <div className="text-blue-700">语言要求：最低CLB 5</div>
            <div className="text-blue-700">按照家庭人数准备52周的足够安置金，以下为官网公布的2023年参考金额：</div>
            <Image src={ '/A2-19.webp' } alt={ '/' } width={ 1100 } height={ 100 }/>
            <div className="text-blue-700">在加拿大建立符合条件的公司：</div>
            <ul className="space-y-3 pl-10 text-blue-900">
                <li>在获得指定机构推荐时，每位申请者持有当时公司所有流通股10%以上（最多可有5人作为所有者提出申请）</li>
                <li>所有申请人和指定机构共同持有当时公司所有已发行股票50%以上</li>
                <li>在加拿大境内对该企业进行积极和持续的管理</li>
                <li>企业运营的重要部分在加拿大进行</li>
                <li>该企业在加拿大注册成立</li>
            </ul>
        </div>

        <div className="space-y-5 mt-10">
            <div className="text-2xl font-bold">项目流程</div>
            <Image src={ '/A2-20.webp' } alt={ '/' } width={ 1100 } height={ 100 }/>
            <ul className="space-y-3 pl-10 text-blue-900">
                <li>进行签约</li>
                <li>建立创业团队%以上</li>
                <li>通过投资机构面试或预审</li>
                <li>参加创业培训或通过投资机构路演（具体要求因不同类型投资机构而异）</li>
                <li>递交商业计划书</li>
                <li>在加拿大注册公司</li>
                <li>获得投资机构支持信（Letter of Support）</li>
                <li>递交PR申请</li>
                <li>递交工签申请（核心成员必须申请，非核心成员不强制要求）</li>
                <li>工签获批的申请人入境，并参与项目经营（配偶可享受开放式工签，未成年孩子可免费上公校）</li>
                <li>PR获批</li>
            </ul>
        </div>


    </div>)
}

export default FederalStartUp