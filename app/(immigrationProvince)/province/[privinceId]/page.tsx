'use client'

import Image from 'next/image'
import { DialogCoverFrom } from '@/components/dialog'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Banner_item, Province_banner } from '@/components/province_banner'
import toast from 'react-hot-toast'

const data_url = [
    {
    province: 'ontario', url: 'https://api.npoint.io/a265a7aba90f8338908e'
}, {
    province: 'british-columbia', url: 'https://api.npoint.io/58cc1e846ee51aaf85cb'
}, {
    province: 'quebec', url: 'https://api.npoint.io/a8bc0f552d86d304304c'
}, {
    province: 'prince-edward-island', url: 'https://api.npoint.io/f3a087658fd08ccf5938'
}, {
    province: 'alberta', url: 'https://api.npoint.io/def67b6a4baabfd6a7e7'
}, {
    province: 'saskatchewan', url: 'https://api.npoint.io/71091e716803024a1ee4'
}, {
    province: 'nova-scotia', url: 'https://api.npoint.io/624b2ae9f8df2dc06f0e'
}, {
    province: 'newfoundland-and-labrador', url: 'https://api.npoint.io/9a24886e7fb36d498837'
}, {
    province: 'new-brunswick', url: 'https://api.npoint.io/58ec089dc80dadd04ab4'
}, {
    province: 'manitoba', url: 'https://api.npoint.io/294ce4ca21ad2a335f19'
} ]

interface ResultSubItem {
    title: string
    item: string[]
}

export interface ResultItem {
    title: string
    title_en: string
    data: ResultSubItem[]
}

export interface Result {
    title: string
    img_url: string
    title_en: string
    title_description: string
    detail: ResultItem[]
}

const ProvinceIdPage = ( { params }: { params: { privinceId: string } } ) => {
    const [ pageResult, setPageResult ] = useState<ResultItem[]>( [] )
    const [ image, setImage ] = useState<string>( '/ic1.svg' )
    const [ title, setTitle ] = useState<string>( '' )
    const [ title_en, setTitle_en ] = useState<string>( '' )
    const [ title_description, setTitle_description ] = useState<string>( '' )
    const pageData = async() => {
        const { status, data: PageData } = await axios.get( filter_url() )
        if( status !== 200 ) {
            return toast.error( '数据获取失败' )
        }
        const {
            title, img_url, title_en, title_description, detail
        }: Result = PageData

        setTitle( title )
        setImage( img_url )
        setTitle_en( title_en )
        setTitle_description( title_description )
        setPageResult( detail )
    }
    const filter_url = () => {
        const [ data ] = data_url.filter( ( item ) => item.province === params.privinceId )
        return data.url
    }

    const [ banner, setBanner ] = React.useState<string>( '' )
    const getBanner = async() => {
        const response = await axios.get( `/api/province` )
        filter_banner( response.data )
    }

    const filter_banner = ( banner: Banner_item[] ) => {
        banner.map( ( item ) => {
            if( item.province === params.privinceId ) {
                setBanner( item.image )
            }
        } )
    }

    useEffect( () => {
        pageData()
        getBanner()
    }, [ params.privinceId ] )

    return ( <div>
        <Province_banner banner={ banner }/>
        <div className={ 'px-20 min-[1980px]:w-[1980px] mx-auto' }>
            <div className={ 'py-28 flex items-center justify-center' }>
                <Image src={ image } alt={ '' } width={ 500 }
                       height={ 400 }/>
                <div className={ 'space-y-36 p-10' }>
                    <div>
                        <p className={ 'text-[30px] font-bold' }>{ title }</p>
                        <p className={ 'text-[24px] text-default-blue' }>{ title_en }</p>
                    </div>

                    <p className={ 'text-[20px] font-light mt-10 w-[600px]' }>
                        { title_description }
                    </p>
                    <DialogCoverFrom dialog_model={ 'normal' }/>
                </div>
            </div>
            { pageResult?.map( ( item, index ) => {
                return ( <div key={ index }
                              className={ 'border-b mb-20 last:border-0' }>
                    <div className={ 'w-full text-center' }>
                        <p className={ 'text-[30px] font-bold' }>{ item.title }</p>
                        <p className={ 'text-[20px] text-description-text-color3' }>{ item.title_en }</p>
                    </div>
                    <div className={ 'flex justify-around mb-32 mt-20' }>
                        { item.data.map( ( Item: any, Index: number ) => {
                            return ( <div key={ Index }>
                                <div className={ 'flex items-center' }>
                  <span
                      className={ 'text-[56px] text-default-blue font-bold' }>0{ Index + 1 }</span>
                                    <span
                                        className={ 'text-[28px] font-bold ml-2' }>{ Item.title }</span>
                                </div>
                                { Item.item.map( ( ITem: string, Indexs: number ) => {
                                    return ( <div
                                        className={ 'flex items-center mb-3' }
                                        key={ Indexs }>
                                        <div
                                            className={ 'w-[15px] h-[15px] bg-default-blue rounded-full mr-4' }/>
                                        <p className={ 'w-[450px] text-[20px] text-description-text-color' }>{ ITem }</p>
                                    </div> )
                                } ) }
                            </div> )
                        } ) }
                    </div>
                </div> )
            } ) }

        </div>
    </div> )
}

export default ProvinceIdPage
