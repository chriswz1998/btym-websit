'use client'

import Image from 'next/image'
import { DialogCoverFrom } from '@/components/dialog'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Province_banner } from '@/components/province_banner'
import toast from 'react-hot-toast'

const data_url = [ {
    province: 'ontario', url: 'https://api.npoint.io/a265a7aba90f8338908e'
}, {
    province: 'british-columbia', url: 'https://api.npoint.io/58cc1e846ee51aaf85cb'
} ]

interface ResultSubItem {
    title: string
    item: string[]
}

interface ResultItem {
    title: string
    title_en: string
    data: ResultSubItem[]
}

interface Result {
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
        const { status, data: PageData } = await axios.get( 'https://api.npoint.io/58cc1e846ee51aaf85cb' )
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

    useEffect( () => {
        filter_url()
        pageData()
    }, [ params.privinceId ] )

    return ( <div>
            <Province_banner province={ params.privinceId }/>
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
