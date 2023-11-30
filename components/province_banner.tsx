'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import axios from 'axios'

interface Banner_item {
    createdAt: string
    id: number
    image: string
    province: string
}

export const Province_banner = ( { province }: { province: string } ) => {
    const [ banner, setBanner ] = React.useState<string>( '' )
    const getBanner = async() => {
        const response = await axios.get( `/api/province` )
        filter_banner( response.data )
    }

    const filter_banner = ( banner: Banner_item[] ) => {
        banner.map( ( item ) => {
            if( item.province === province ) {
                setBanner( item.image )
            }
        } )
    }

    useEffect( () => {
        getBanner()
    }, [ province ] )
    return ( <div className={ 'w-full flex items-center justify-center' }>
            <Image src={ banner } alt={ '' } width={ 0 }
                   height={ 0 }
                   sizes="100vw"
                   style={ { width: '100%', height: 'auto' } }/>
        </div> )
}

