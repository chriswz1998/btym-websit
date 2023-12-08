import React from 'react'
import { cn } from '@/lib/utils'

export const Margin20_box = ({ children, className, border = false }: {
    children: React.ReactNode, className?: string, border?: boolean
}) => {
    return (<div className={ `${ border ? 'border-b' : '' }` }>
        <div className={ 'mx-auto px-24 min-[1980px]:w-[1980px] min-[1980px]:px-30' }>
            <div className={ cn(className) }>
                { children }
            </div>

        </div>
    </div>)
}