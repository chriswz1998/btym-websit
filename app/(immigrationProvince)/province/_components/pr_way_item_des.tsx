import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export const Pr_way_item_des = ({ des, className }: { des: string, className?: string }) => {
    return (<div className={ 'flex items-center space-x-5' }>
        <Image src={ '/Checkmark-5.svg' } alt={ '' } width={ 30 } height={ 30 }/>
        <p className={ cn('text-[#858A8F] text-xl', className) }>{ des }</p>
    </div>)
}