import Image from 'next/image'
import React from 'react'
import { Pr_way_item_des } from '@/app/(immigrationProvince)/province/_components/pr_way_item_des'

export const PrWayItem = ({ w, shadow }: { w?: number, shadow?: boolean }) => {
    return (
        <div className={ `bg-white w-[${ w ? w : 370 }px] p-6 space-y-10 rounded-lg ${ shadow ? 'shadow-md' : '' }` }>
            <div>
                <p className={ 'text-[#E83328] text-[40px] font-bold' }>01</p>
                <p className={ 'text-[40px] font-bold' }>国际留学生</p>
            </div>
            <div className={ 'space-y-5 h-[400px] overflow-auto' }>
                <Pr_way_item_des des={ '毕业2年之内，找到 0，A，B类全职雇主offer' }/>
                <Pr_way_item_des des={ '毕业2年之内，找到 0，A，B类全职雇主offer' }/>
                <Pr_way_item_des des={ '毕业2年之内，找到 0，A，B类全职雇主offer' }/>
                <Pr_way_item_des des={ '毕业2年之内，找到 0，A，B类全职雇主offer' }/>
                <Pr_way_item_des des={ '毕业2年之内，找到 0，A，B类全职雇主offer' }/>
                <Pr_way_item_des des={ '毕业2年之内，找到 0，A，B类全职雇主offer' }/>
                <Pr_way_item_des des={ '毕业2年之内，找到 0，A，B类全职雇主offer' }/>
            </div>
        </div>)
}