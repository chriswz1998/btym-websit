import React from 'react'
import { Pr_way_item_des } from '@/app/(immigrationProvince)/province/_components/pr_way_item_des'
import { ResultSubItem } from '@/app/(immigrationProvince)/province/[privinceId]/page'
import { Title } from '@/components/Title'

export const PrWayItem = ({ item_detail, num, w, shadow }: {
    item_detail?: ResultSubItem, num?: number, w?: number, shadow?: boolean
}) => {
    return (<div
        className={ `bg-white w-[${ w ? w : 370 }px] max-w-[400px] p-6 space-y-10 rounded-lg ${ shadow ? 'shadow-md' : '' }` }>
        <div>
            <p className={ 'text-[#E83328] text-[40px] font-bold' }>{ `0${ num }` }</p>
            <Title size={ 20 } title={ item_detail?.title || '' } bold={ true }/>
        </div>
        { item_detail?.item.length ? (<div className={ 'space-y-5 h-[400px] overflow-auto' }>
            { item_detail?.item.map((item, index) => {
                return (<Pr_way_item_des key={ index } des={ item }/>)
            }) }
        </div>) : '' }

    </div>)
}