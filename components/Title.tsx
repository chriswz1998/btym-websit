import React from 'react'
import { cn } from '@/lib/utils'

export const Title = ({ size, en_size, height, title, title_en, bold, center, className }: {
    size: number,
    en_size?: number,
    height?: number,
    title: string,
    title_en?: string,
    bold?: boolean,
    center?: boolean,
    className?: string
}) => {
    return (<div className={ cn(`w-full text-${ center ? 'center' : '' } space-y-36 py-${ height }`, className) }>
        <div>
            <p className={ `text-[${ size }px] font-${ bold ? 'bold' : '' }` }>{ title }</p>
            <p className={ `text-[${ en_size }px] text-description-text-color` }>{ title_en }</p>
        </div>
    </div>)
}