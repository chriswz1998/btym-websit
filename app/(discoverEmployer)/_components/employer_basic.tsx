import { Province_banner } from '@/components/province_banner'
import { Margin20_box } from '@/components/margin20_box'
import { Title } from '@/components/Title'
import { Center_box } from '@/components/center_box'
import { PrWayItem } from '@/app/(immigrationProvince)/province/_components/pr_way_item'
import { Result } from '@/app/(discoverEmployer)/employer/page'

export const EmployerBasic = ({
    pageData: {
        img_url, title, title_en, title_description, detail_who_can_apply, normal_detail
    }
}: { pageData: Result }) => {
    return (<div>
        <Margin20_box>
            <Province_banner round={ true } banner={ '/bcemp1.png' }/>
        </Margin20_box>
        <Center_box col={ true } className={ 'space-y-14 my-24' }>
            <Title size={ 50 } title={ title } center={ true } bold={ true } en_size={ 30 }
                   title_en={ title_en }/>
            <p className={ 'w-[660px] text-xl text-[#858A8F]' }>{ title_description }</p>
        </Center_box>

        <div className={ 'bg-[#11437F]' }>
            <Margin20_box className={ 'pb-20' }>
                <Title center={ true } height={ 20 } bold={ true } size={ 50 }
                       title={ detail_who_can_apply?.title || '' }
                       className={ 'text-white' }/>
                <div className={ 'flex flex-wrap items-center justify-between' }>
                    { detail_who_can_apply?.des.map((item, index) => {
                        return (<div key={ index } className={ 'bg-white flex m-10 rounded-lg overflow-hidden' }>
                            <span
                                className={ 'bg-[#E1EFFF] p-3  text-[20px] text-[#1164C7] font-bold' }>0{ index + 1 }</span>
                            <Title className={ 'p-4 pr-10' } size={ 24 } height={ 4 } title={ item.title }
                                   title_en={ item.detail }/>
                        </div>)
                    }) }
                </div>
            </Margin20_box>
        </div>

        { normal_detail.map((item, index) => {
            return (<div className={ `${ index % 2 === 0 ? 'bg-mask-color6' : '' }` } key={ index }>
                <Margin20_box className={ 'pb-24' }>
                    <Title size={ 50 } title_en={ item.title_en } en_size={ 24 } height={ 24 } title={ item.title }
                           bold={ true }
                           center={ true }/>
                    <div className={ 'flex justify-center items-center space-x-16' }>
                        { item.data.map((Item, Index) => {
                            return (<PrWayItem key={ Index } num={ Index + 1 } item_detail={ Item }/>)
                        }) }
                    </div>
                </Margin20_box>
            </div>)
        }) }
    </div>)
}