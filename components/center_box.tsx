import React from 'react'
import { cn } from '@/lib/utils'

export const Center_box = ({ children, col, className }: {
    children: React.ReactNode, col?: boolean, className?: string
}) => {
    return (<div className={ cn(`flex flex-${ col ? 'col' : '' } justify-between items-center`, className) }>
        { children }
    </div>)
}