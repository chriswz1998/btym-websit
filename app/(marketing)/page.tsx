import {
    AtSign, ChevronsRight, MapPinned, PhoneCall
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { CustomerApplicationFrom } from '@/components/custoemr.application.from'
import Link from 'next/link'
import { DropdownMenuItemEach_province } from '@/lib/publicResuces'
import { Case_item } from '@/app/(marketing)/_components/case_item'
import { Title } from '@/components/Title'
import { Center_box } from '@/components/center_box'
import { Margin20_box } from '@/components/margin20_box'
import { Cases_item } from '@/app/(profiles)/_components/cases_item'
import { Case_search_item } from '@/app/(marketing)/_components/case_search_item'
import { Business_card } from '@/app/(marketing)/_components/business_card'
import { Step_item } from '@/app/(marketing)/_components/steps_item'
import { Media_item } from '@/app/(marketing)/_components/media_item'

export default function MarketingPage(){
    return (

        <div>
            <Margin20_box border={ true } className={ 'mb-24' }>
                <div>
                    <Title size={ 50 } height={ 20 } bold={ true } center={ true }
                           title={ '为客户提供最佳移民和留学解决方案' }/>
                    <Center_box>
                        <Case_item
                            dec={ '根据多年的咨询和案例经验，我们为每一位客户量身定制了文案顾问，在深入了解情况后书写量身定制的文案' }
                            url={ '/ic4.svg' } title={ '文案工作' }/>
                        <Case_item
                            dec={ '我们在中国、香港、台湾、加拿大均有分公以应对不同时区客户的需求、随时随地、们都能听见你的声音!' }
                            url={ '/ic1.svg' } title={ '在线聆听你的需求' }/>
                        <Case_item
                            dec={ '博泰移民在Youtube、X、Facebook等社交媒体均有官方营销账户，定期更新相关政策的变更和优秀案例' }
                            url={ '/ic9.svg' } title={ '社交媒体' }/>
                    </Center_box>
                </div>
            </Margin20_box>

            <Center_box col={ true }>
                <Title size={ 50 } height={ 20 } bold={ true } center={ true }
                       title={ '移民省份' }/>
                <div className={ 'w-full bg-[url("/5db84e.png")] bg-cover bg-no-repeat py-40' }>
                    <Margin20_box className={ 'p-6 bg-white rounded-lg flex justify-around' }>
                        { DropdownMenuItemEach_province.map((item, index) => {
                            return (<Link href={ `${ item.href }` } key={ index }>
                                <p className={ 'p-3 text-zinc-800 text-2xl font-normal font-[\'Maven Pro\'] leading-10 hover:text-default-blue transition' }>{ item.text }</p>
                            </Link>)
                        }) }
                    </Margin20_box>
                </div>
            </Center_box>

            <div>
                <Title size={ 50 } height={ 20 } bold={ true } center={ true }
                       title={ '我们的案例' }/>
                <Margin20_box>
                    <div className={ 'w-full flex justify-between flex-wrap' }>
                        <Cases_item url={ '/single_profile' } subject={ '雇主担保移民' } date={ '2023-01-01' }
                                    title={ '来自新疆的维吾尔族大哥,经历189天成功拿到工签,准备开启雇主担保移民之路' }
                                    dec={ '本案例由顾问Ken主理完成,在此感谢Ken的辛勤付出!' }/>
                    </div>
                </Margin20_box>
            </div>

            <div className={ 'w-full bg-[url("/5db84e.png")] bg-cover bg-no-repeat py-40' }>
                <Margin20_box className={ 'bg-white p-20 rounded-lg flex space-x-40 ' }>
                    <div className={ 'space-y-52' }>
                        <Title size={ 50 } bold={ true } title={ '位于温哥华的资深移民公司' } en_size={ 23 }
                               title_en={ '我们有着多年加拿大移民.留学经验,近年来移民与留学的难度越来越高我们扩展了一批优质切快速的移民留学通道,由专业的持牌顾问一对一咨询指导,保障您的梦想' }/>
                        <div>
                            <Link href={ '/all_profiles' }>
                                <Button
                                    className={ 'text-[24px] px-14 py-8 text-white bg-default-blue hover:bg-default-blue font-light' }>
                                    查看更多案例和评价
                                    <ChevronsRight className={ 'ml-2' }
                                    />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <Image src={ '/62035b84efeec66b4bc2008d.png' } alt={ '' } width={ 600 } height={ 400 }
                           className={ 'rounded-lg' }/>
                </Margin20_box>
            </div>

            <div>
                <Title size={ 50 } bold={ true } height={ 24 } center={ true } title={ '案例研究' } en_size={ 27 }
                       title_en={ '我们帮助客户在不断变化的环境中脱颖而出' }/>
                <Margin20_box className={ 'flex items-end justify-between mb-24' } border={ true }>
                    <Case_search_item url={ '/ic6.svg' } title={ '客户同比优势不足，我们将通过率提升至100%' }
                                      sub_title={ '100%与客户共同成长' }/>
                    <Case_search_item url={ '/ic7.svg' }
                                      center={ true }
                                      title={ '同比去年雇主担保通过率在三个月我们努力将客户服务做到最好，提升至3倍' }
                                      sub_title={ '3X我们的独门内功!' }/>
                    <Case_search_item url={ '/ic8.svg' } title={ '我们努力将客户服务做到最好，实现O差评!' }
                                      sub_title={ '客户优先,服务第一' }/>
                </Margin20_box>
            </div>

            <div>
                <Title size={ 50 } bold={ true } height={ 24 } center={ true } title={ '我们的持牌顾问' }/>
                <Margin20_box className={ 'flex flex-wrap justify-between' } border={ true }>
                    <Business_card url={ '/de9b3815.jpg' }
                                   des={ 'Tailwind CSS is the only framework that I seen scale, on large teams. It’s easy to customize, adapts to any design,and the build size is tiny.' }
                                   name={ 'Sarah Dayan' } job_title={ 'Staff Engineer, Algolia' }/>
                    <Business_card url={ '/de9b3815.jpg' }
                                   des={ 'Tailwind CSS is the only framework that I seen scale, on large teams. It’s easy to customize, adapts to any design,and the build size is tiny.' }
                                   name={ 'Sarah Dayan' } job_title={ 'Staff Engineer, Algolia' }/>
                    <Business_card url={ '/de9b3815.jpg' }
                                   des={ 'Tailwind CSS is the only framework that I seen scale, on large teams. It’s easy to customize, adapts to any design,and the build size is tiny.' }
                                   name={ 'Sarah Dayan' } job_title={ 'Staff Engineer, Algolia' }/>
                </Margin20_box>
            </div>

            <div>
                <div className={ 'py-24 w-full text-center' }>
                    <p className={ 'text-[50px] font-bold' }>
                        简单的<span className={ 'text-default-blue' }>三个步骤</span>,即刻开始改变!
                    </p>
                    <p className={ 'text-[23px] text-description-text-color' }>
                        致力于为中国申请人带来优质的加拿大移民服务
                    </p>
                </div>
                <Margin20_box className={ 'flex items-center justify-between mb-24' }>
                    <Step_item url={ '/ic10.svg' } title={ '登记信息' }
                               des={ '登记您的社交媒体或邮箱我们的持牌顾问会第一时间联系您，了解您的需求' }
                               num={ '01' }/>
                    <Step_item num={ '02' } des={ '根据您所在地区的时间安排会议或着消息沟通' } url={ '/ic2.svg' }
                               title={ '定制方案' }/>
                    <Step_item num={ '03' } des={ '我们的努力只有一个目标，那就是认可我们的方案' } url={ '/ic3.svg' }
                               title={ '方案认可' }/>
                </Margin20_box>
            </div>

            <div className={ 'bg-mask-color6' }>
                <Title size={ 50 } title={ '我们来谈谈' }
                       bold={ true } height={ 24 } en_size={ 22 } center={ true }
                       title_en={ '我们愿意与优秀的人交流。只要打个招呼，我们就能开始富有成效的合作。开始您自己的成功故事' }/>
                <Margin20_box className={ 'w-[500px] mx-auto mb-24' } border={ true }>
                    <CustomerApplicationFrom/>
                </Margin20_box>

            </div>
            <div>
                <Title size={ 50 } title={ '我们的社交媒体' }
                       bold={ true } height={ 24 } center={ true }/>
                <Margin20_box className={ 'flex justify-between mb-24' } border={true}>
                    <Media_item title={ '抖音' } url={ '/tiktok.svg' }/>
                    <Media_item title={ 'youtube' } url={ '/youtube.svg' }/>
                    <Media_item url={ '/facebook.svg' } title={ 'facebook' }/>
                    <Media_item url={ '/twitter.svg' } title={ 'twitter' }/>
                </Margin20_box>
            </div>
        </div>)
}
