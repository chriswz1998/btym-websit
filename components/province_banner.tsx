'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import axios from 'axios'

export interface Banner_item {
    createdAt: string
    id: number
    image: string
    province: string
}

export const Province_banner = ( { banner }: { banner: string } ) => {
    return ( <div className={ 'w-full flex items-center justify-center' }>
        <Image src={ banner } alt={ '' } width={ 0 }
               height={ 0 }
               sizes="100vw"
               style={ { width: '100%', height: 'auto' } }/>
    </div> )
}

