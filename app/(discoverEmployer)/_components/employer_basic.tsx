import { Province_banner } from '@/components/province_banner'
import { Margin20_box } from '@/components/margin20_box'
import { Title } from '@/components/Title'
import { Center_box } from '@/components/center_box'
import { PrWayItem } from '@/app/(immigrationProvince)/province/_components/pr_way_item'
import { Result } from '@/app/(discoverEmployer)/employer/page'
import { Button } from '@/components/ui/button'
import { DialogCoverFrom } from '@/components/dialog'
import Link from 'next/link'

export const EmployerBasic = ({
    pageData: {
        img_url, title, title_en, title_description, detail_who_can_apply, normal_detail
    }
}: { pageData: Result }) => {
    return (<div>
        {/*<Province_banner banner={ _631b7f55e5 || '' }/>*/ }
        <img src={ img_url } alt={''} className={'w-full h-[600px] block'}/>
        <div className={ 'space-y-14 my-24 flex flex-col items-center' }>
            <Title size={ 50 } title={ title } center={ true } bold={ true } en_size={ 30 }
                   title_en={ title_en }/>
            <p className={ 'w-[660px] text-xl text-[#858A8F]' }>{ title_description }</p>
        </div>

        <div className={ 'bg-[#11437F] pb-20' }>
            <Title center={ true } height={ 20 } bold={ true } size={ 50 }
                   title={ detail_who_can_apply?.title || '' }
                   className={ 'text-white' }/>
            <div className={ 'flex flex-wrap items-center justify-center' }>
                { detail_who_can_apply?.des.map((item, index) => {
                    return (<div key={ index } className={ 'bg-white flex m-10 rounded-lg overflow-hidden' }>
                            <span
                                className={ 'bg-[#E1EFFF] p-3  text-[20px] text-[#1164C7] font-bold' }>0{ index + 1 }</span>
                        <Title className={ 'p-4 pr-10' } size={ 24 } height={ 4 } title={ item.title }
                               title_en={ item.detail }/>
                    </div>)
                }) }
            </div>
        </div>

        { normal_detail.map((item, index) => {
            return (<div className={ `${ index % 2 === 0 ? 'bg-mask-color6' : '' } p-20` } key={ index }>
                <Title size={ 50 } title_en={ item.title_en } en_size={ 24 } height={ 24 } title={ item.title }
                       bold={ true }
                       center={ true }/>
                <div className={ 'flex justify-center items-center space-x-16' }>
                    { item.data.map((Item, Index) => {
                        return (<PrWayItem key={ Index } num={ Index + 1 } item_detail={ Item }/>)
                    }) }
                </div>
                <div className={ 'space-x-20 text-center mt-20' }>
                    <DialogCoverFrom text={ '预约顾问评估' } variant={ 'ghost' }
                                     className={ 'bg-[#11437F] hover:bg-[#11437F] w-[300px] h-[66px] text-white hover:text-white px-4 py-2.5 rounded-[10px] shadow' }/>
                    <Link href={ '/condition_self_test' }>
                        <Button
                            className={ 'bg-[#E83328] hover:bg-[#E83328] w-[300px] h-[66px] px-4 py-2.5 rounded-[10px] shadow' }>条件自测</Button>
                    </Link>

                </div>
            </div>)
        }) }
    </div>)
}