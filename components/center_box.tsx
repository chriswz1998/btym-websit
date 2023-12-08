import React from 'react'

export const Center_box = ({ children, col }: { children: React.ReactNode, col?: boolean }) => {
    return (<div className={ `flex flex-${ col ? 'col' : '' } justify-between items-center` }>
        { children }
    </div>)
}