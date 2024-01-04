import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Title } from '@/components/Title'
import { Navbar } from '@/components/navbar'
import { Province_banner } from '@/components/province_banner'
import { Hot_project_item } from '@/app/(marketing)/_components/hot_project_item'
import { how_item_res } from '@/lib/publicResuces'
import Link from 'next/link'
import { DialogCoverFrom } from '@/components/dialog'

export default function MarketingPage(){
    return (<div>
        <Navbar noBgModel={ true }/>
        <Province_banner banner={ '/banner.png' }/>
        {/*申请条件自测*/ }
        <div className={ 'flex justify-around flex-wrap p-10' }>
            <div className={ 'flex items-center bg-white p-3 rounded shadow w-[350px] space-x-2' }>
                <Image src={ '/testSvg.svg' } alt={ '' } width={ 45 } height={ 45 }/>
                <div>
                    <Title size={ 20 } bold={ true } title={ '申请条件自测' } en_size={ 8 }
                           title_en={ '1分钟速测，甄选适合您的移民项目' }/>
                </div>
            </div>
            <div className={ 'flex items-center bg-white p-3 rounded shadow w-[350px] space-x-2' }>
                <Image src={ '/testSvg.svg' } alt={ '' } width={ 45 } height={ 45 }/>
                <div>
                    <Title size={ 20 } bold={ true } title={ '技术移民打分' } en_size={ 8 }
                           title_en={ '自己算太麻烦，试试自动打分吧' }/>
                </div>
            </div>
            <div className={ 'flex items-center bg-white p-3 rounded shadow w-[350px] space-x-2' }>
                <Image src={ '/testSvg.svg' } alt={ '' } width={ 45 } height={ 45 }/>
                <div>
                    <Title size={ 20 } bold={ true } title={ '申请费用计算' } en_size={ 8 }
                           title_en={ '费用问题，计算一下更有底' }/>
                </div>
            </div>
            <div className={ 'flex items-center bg-white p-3 rounded shadow w-[350px] space-x-2' }>
                <Image src={ '/testSvg.svg' } alt={ '' } width={ 45 } height={ 45 }/>
                <div>
                    <Title size={ 20 } bold={ true } title={ '免费资料获取' } en_size={ 8 }
                           title_en={ '获取详细项目资料和费用清单' }/>
                </div>
            </div>
        </div>
        {/*每年有2000+选择移民加拿大*/ }
        <div className={ 'mt-20 text-center text-black text-[50px] font-semibold font-[\'Maven Pro\'] space-y-4' }>
            <span>每年有</span>
            <span className="text-red-600">2000+</span>
            <span>选择移民加拿大</span>
            <div
                className="text-stone-500 text-[40px] font-normal font-['Noto Sans HK'] leading-10">
                加拿大移民福利——不可拒绝的加拿大移民理由
            </div>
        </div>

        <div className={ 'py-16  flex flex-wrap justify-center' }>
            { how_item_res.map((item, index) => {
                return (<Hot_project_item url={ item.url } href={ item.href } text={ item.text } key={ index }/>)
            }) }
        </div>

        <div className={ 'space-x-20 text-center' }>
            <DialogCoverFrom text={'资深顾问全面解答'} variant={'ghost'} className={'bg-[#11437F] hover:bg-[#11437F] w-[300px] h-[66px] text-white hover:text-white px-4 py-2.5 rounded-[10px] shadow'}/>
            <Link href={ '/employer' }>
                <Button
                    className={ 'bg-[#E83328] hover:bg-[#E83328] w-[300px] h-[66px] px-4 py-2.5 rounded-[10px] shadow' }>了解更多福利</Button>
            </Link>

        </div>

        {/*加拿大提供80余种移民途径*/ }
        <div
            className={ 'mt-20 p-20 text-center text-black text-[50px] font-semibold font-[\'Maven Pro\'] space-y-4' }>
            <span>加拿大提供</span>
            <span className="text-red-600">80</span>
            <span>余种移民途径</span>
            <div
                className="text-stone-500 text-[40px] font-normal font-['Noto Sans HK'] leading-10">
                不管你是学生还是职场人、企业主，有才或有“财”都可以申请
            </div>
        </div>

        <div className={ 'bg-[url("/images121212.png")] bg-cover bg-no-repeat flex' }>
            <div className={ 'w-1/3 bg-v1-bg1 py-24 px-10 space-y-16' }>
                <div className="text-center text-white text-[50px] font-semibold font-['Maven Pro']">技术类</div>
                <div className="flex justify-between flex-wrap bg-white bg-opacity-50 rounded p-5 mb-5">
                    <div className={ 'text-white text-2xl font-normal font-[\'Maven Pro\']' }>省提名雇主担保</div>
                    <div className={ 'flex space-x-3' }>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                    </div>
                </div>
                <div className="flex justify-between flex-wrap bg-white bg-opacity-50 rounded p-5 mb-5">
                    <div className={ 'text-white text-2xl font-normal font-[\'Maven Pro\']' }>联邦快速通道</div>
                    <div className={ 'flex space-x-3' }>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                    </div>
                </div>
                <div className="flex justify-between flex-wrap bg-white bg-opacity-50 rounded p-5 mb-5">
                    <div className={ 'text-white text-2xl font-normal font-[\'Maven Pro\']' }>联邦北部试点</div>
                    <div className={ 'flex space-x-3' }>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                    </div>
                </div>
            </div>
            <div className={ 'w-1/3 bg-v1-bg2 py-24 px-10 space-y-16' }>
                <div className="text-center text-white text-[50px] font-semibold font-['Maven Pro']">商业类</div>
                <div className="flex justify-between flex-wrap bg-white bg-opacity-50 rounded p-5 mb-5">
                    <div className={ 'text-white text-2xl font-normal font-[\'Maven Pro\']' }>萨省企业家移民</div>
                    <div className={ 'flex space-x-3' }>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                    </div>
                </div>
                <div className="flex justify-between flex-wrap bg-white bg-opacity-50 rounded p-5 mb-5">
                    <div className={ 'text-white text-2xl font-normal font-[\'Maven Pro\']' }>BC企业家试点</div>
                    <div className={ 'flex space-x-3' }>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                    </div>
                </div>
                <div className="flex justify-between flex-wrap bg-white bg-opacity-50 rounded p-5 mb-5">
                    <div className={ 'text-white text-2xl font-normal font-[\'Maven Pro\']' }>联邦创投</div>
                    <div className={ 'flex space-x-3' }>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                    </div>
                </div>
            </div>
            <div className={ 'w-1/3 bg-v1-bg1 py-24 px-10 space-y-16' }>
                <div className="text-center text-white text-[50px] font-semibold font-['Maven Pro']">留学类</div>
                <div className="flex justify-between flex-wrap bg-white bg-opacity-50 rounded p-5 mb-5">
                    <div className={ 'text-white text-2xl font-normal font-[\'Maven Pro\']' }>曼省留学移民</div>
                    <div className={ 'flex space-x-3' }>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                    </div>
                </div>
                <div className="flex justify-between flex-wrap bg-white bg-opacity-50 rounded p-5 mb-5">
                    <div className={ 'text-white text-2xl font-normal font-[\'Maven Pro\']' }>BC省留学移民</div>
                    <div className={ 'flex space-x-3' }>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                    </div>
                </div>
                <div className="flex justify-between flex-wrap bg-white bg-opacity-50 rounded p-5 mb-5">
                    <div className={ 'text-white text-2xl font-normal font-[\'Maven Pro\']' }>安省留学移民</div>
                    <div className={ 'flex space-x-3' }>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                        <Image src={ 'Star.svg' } alt={ '' } width={ 25 } height={ 25 }/>
                    </div>
                </div>
            </div>
        </div>

        {/*博泰专注加拿大移民*/ }
        <div
            className={ 'bg-[#EBF3FC] p-20 pt-30 text-center text-black text-[50px] font-semibold font-[\'Maven Pro\'] space-y-4' }>
            <div>博泰专注加拿大移民</div>
            <div
                className="text-stone-500 text-[40px] font-normal font-['Noto Sans HK'] leading-10">
                致力于为中国申请人带来优质的加拿大移民服务
            </div>
        </div>

        <div className={ 'relative w-full h-[460px]' }>
            <div className={ 'absolute top-0 left-0 w-full h-full' }>
                <Province_banner banner={ '/pki4492111.png' }/>
            </div>
            <div
                className={ 'px-20 flex items-center justify-around text-white w-full h-full absolute left-0 top-0 bg-gradient-to-r from-[#062F7E] to-[#3B63B173]' }>
                <div className={ 'space-y-4 text-center' }>
                    <span className="text-6xl font-bold">5</span>
                    <span className="text-3xl">家+</span>
                    <p className={ 'text-xl' }>加拿大直营公司</p>
                </div>
                <div className={ 'w-[1px] h-[110px] bg-white' }></div>
                <div className={ 'space-y-4 text-center' }>
                    <span className="text-6xl font-bold">15</span>
                    <span className="text-3xl">年+</span>
                    <p className={ 'text-xl' }>加拿大本土移民服务经验</p>
                </div>
                <div className={ 'w-[1px] h-[110px] bg-white' }></div>
                <div className={ 'space-y-4 text-center' }>
                    <span className="text-6xl font-bold">15</span>
                    <span className="text-3xl">位+</span>
                    <p className={ 'text-xl' }>加拿大持牌顾问供职</p>
                </div>
                <div className={ 'w-[1px] h-[110px] bg-white' }></div>
                <div className={ 'space-y-4 text-center' }>
                    <span className="text-6xl font-bold">2000</span>
                    <span className="text-3xl">+</span>
                    <p className={ 'text-xl' }>成功案例</p>
                </div>
            </div>
        </div>
        <Province_banner banner={ '/581703237163_.jpg' }/>
        <div className={ 'bg-[#EBF3FC] py-20 space-x-20 text-center' }>
            <Button
                className={ 'bg-[#11437F] hover:bg-[#11437F] w-[300px] h-[66px] px-4 py-2.5 rounded-[10px] shadow' }>移民专家在线解答</Button>
            <DialogCoverFrom text={'预约顾问评估'} variant={'ghost'} className={'bg-[#E83328] hover:bg-[#E83328] w-[300px] h-[66px] text-white hover:text-white px-4 py-2.5 rounded-[10px] shadow'}/>
        </div>

        {/*博泰8大服务保障*/ }
        <div className={ 'relative  w-full h-[863px]' }>
            <div className={ 'absolute top-0 left-0 w-full h-full' }>
                <Province_banner banner={ '/bg8dfw.png' }/>
            </div>
            <div
                className={ 'absolute top-0 left-0 w-full h-full bg-v1-bg1 flex flex-col justify-center space-y-20' }>
                <div className={ 'text-center text-white text-[40px] font-bold font-[\'Maven Pro\']' }>
                    博泰<span className="text-red-600">8</span>大服务保障
                    <p className={ 'text-[30px] font-light' }>加拿大移民福利——不可拒绝的加拿大移民理由</p>
                </div>
                <div className={ 'flex flex-wrap justify-center' }>
                    <div
                        className={ 'm-4 w-[300px] h-[190px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                        <Image src={ '/Group4591.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                        <p
                            className="text-black text-2xl font-bold">
                            量身定制方案
                        </p>
                    </div>
                    <div
                        className={ 'm-4 w-[300px] h-[190px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                        <Image src={ '/Group4592.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                        <p
                            className="text-black text-2xl font-bold">
                            中加两地直营
                        </p>
                    </div>
                    <div
                        className={ 'm-4 w-[300px] h-[190px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                        <Image src={ '/Group4593.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                        <p
                            className="text-black text-2xl font-bold">
                            本土团队
                        </p>
                    </div>
                    <div
                        className={ 'm-4 w-[300px] h-[190px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                        <Image src={ '/Group4594.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                        <p
                            className="text-black text-2xl font-bold">
                            多重材料审核
                        </p>
                    </div>
                    <div
                        className={ 'm-4 w-[300px] h-[190px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                        <Image src={ '/Group4595.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                        <p
                            className="text-black text-2xl font-bold">
                            成功后再收费
                        </p>
                    </div>
                    <div
                        className={ 'm-4 w-[300px] h-[190px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                        <Image src={ '/Group4596.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                        <p
                            className="text-black text-2xl font-bold">
                            协助拒签复议
                        </p>
                    </div>
                    <div
                        className={ 'm-4 w-[300px] h-[190px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                        <Image src={ '/Group4597.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                        <p
                            className="text-black text-2xl font-bold">
                            登陆面试指导
                        </p>
                    </div>
                    <div
                        className={ 'm-4 w-[300px] h-[190px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4' }>
                        <Image src={ '/Group4598.svg' } alt={ '' } width={ 70 } height={ 70 }/>
                        <p
                            className="text-black text-2xl font-bold">
                            安家生活服务
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className={ 'w-full h-[855px] mt-20' }>
            <div className={ 'relative w-full h-[557px]' }>
                <div className={ 'absolute top-0 left-0 w-full h-full' }>
                    <Province_banner banner={ '/pki7947412.png' }/>
                </div>
                <div
                    className={ 'w-full h-full absolute left-0 top-0 bg-gradient-to-r from-[#451411] to-[#5F100B5E] space-y-20' }>
                    <div className={ 'text-center font-bold pt-10' }>
                        <span className="text-[#E83328] text-[150px]">2000+</span>
                        <p className={ 'text-6xl text-white font-light' }>申请人认可的移民服务品牌</p>
                    </div>
                    <div
                        className={ 'w-[1280px] h-[450px] bg-white mx-auto rounded-lg flex items-center space-x-6 p-6' }>
                        <ArrowLeft/>
                        <div className={ 'w-full flex space-x-4' }>
                            <Image src={ '/qdasdasdasdas.png' } alt={ '' } width={ 220 } height={ 400 }
                                   className={ 'shadow' }/>
                            <Image src={ '/qdasdasdasdas.png' } alt={ '' } width={ 220 } height={ 400 }
                                   className={ 'shadow' }/>
                            <Image src={ '/qdasdasdasdas.png' } alt={ '' } width={ 220 } height={ 400 }
                                   className={ 'shadow' }/>
                            <Image src={ '/qdasdasdasdas.png' } alt={ '' } width={ 220 } height={ 400 }
                                   className={ 'shadow' }/>
                            <Image src={ '/qdasdasdasdas.png' } alt={ '' } width={ 220 } height={ 400 }
                                   className={ 'shadow' }/>
                        </div>
                        <ArrowRight/>
                    </div>
                </div>
            </div>
        </div>
        <div
            className="text-[50px] font-bold text-center font-['Maven Pro']">中加两地专业服务团队·带给申请人高标准的移民体验
        </div>
        <div
            className={ 'w-[1280px] h-[450px] bg-white mx-auto rounded-lg flex items-center space-x-6 p-6' }>
            <ArrowLeft/>
            <div className={ 'w-full flex justify-center space-x-10' }>
                <div className={ 'shadow w-[240px] rounded-lg overflow-hidden relative' }>
                    <Image src={ '/151704349688.jpg' } alt={ '' } width={ 240 } height={ 400 }/>
                    <div
                        className="p-3 pt-6 text-slate-900">介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
                    </div>
                    <div className={ 'pb-3 pl-3' }>
                        <Image src={ 'Starsasasas.svg' } alt={ '' } width={ 100 } height={ 100 }/>
                    </div>
                    <span
                        className={ 'bg-white absolute top-[180px] left-[12px] border border-[#E83328] px-6 py-1 text-[#E83328] rounded-md text-[12px]' }>
                            创始人
                        </span>
                </div>
                <div className={ 'shadow w-[240px] rounded-lg overflow-hidden relative' }>
                    <Image src={ '/151704349688.jpg' } alt={ '' } width={ 240 } height={ 400 }/>
                    <div
                        className="p-3 pt-6 text-slate-900">介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
                    </div>
                    <div className={ 'pb-3 pl-3' }>
                        <Image src={ 'Starsasasas.svg' } alt={ '' } width={ 100 } height={ 100 }/>
                    </div>
                    <span
                        className={ 'bg-white absolute top-[180px] left-[12px] border border-[#E83328] px-6 py-1 text-[#E83328] rounded-md text-[12px]' }>
                            创始人
                        </span>
                </div>
                <div className={ 'shadow w-[240px] rounded-lg overflow-hidden relative' }>
                    <Image src={ '/151704349688.jpg' } alt={ '' } width={ 240 } height={ 400 }/>
                    <div
                        className="p-3 pt-6 text-slate-900">介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
                    </div>
                    <div className={ 'pb-3 pl-3' }>
                        <Image src={ 'Starsasasas.svg' } alt={ '' } width={ 100 } height={ 100 }/>
                    </div>
                    <span
                        className={ 'bg-white absolute top-[180px] left-[12px] border border-[#E83328] px-6 py-1 text-[#E83328] rounded-md text-[12px]' }>
                            创始人
                        </span>
                </div>
            </div>
            <ArrowRight/>
        </div>
    </div>)
}
