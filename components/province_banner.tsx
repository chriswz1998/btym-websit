'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import axios from 'axios'

export interface Banner_item{
    createdAt: string
    id: number
    image: string
    province: string
}

export const Province_banner = ({ banner, height, round }: { banner: string, height?: number, round?: boolean }) => {
    return (<Image src={ banner } alt={ '' } width={ 0 }
                   height={ 0 }
                   sizes="100vw"
                   className={ `block ${ round ? 'rounded-lg' : '' }` }
                   style={ { width: '100%', height: `${ height ? height : 'auto' }` } }/>)
}

