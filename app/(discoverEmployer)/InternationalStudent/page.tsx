'use client'

import Image from 'next/image'
import { DialogCoverFrom } from '@/components/dialog'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Banner_item, Province_banner } from '@/components/province_banner'
import toast from 'react-hot-toast'
import { Margin20_box } from '@/components/margin20_box'
import { Title } from '@/components/Title'
import { PrWayItem } from '@/app/(immigrationProvince)/province/_components/pr_way_item'

export interface ResultSubItem{
    title: string
    item: string[]
}

export interface ResultItem{
    title: string
    title_en: string
    data: ResultSubItem[]
}

export interface Result{
    title: string
    img_url: string
    title_en: string
    title_description: string
    detail: ResultItem[]
}

const FederationPage = () => {
    const [ pageResult, setPageResult ] = useState<ResultItem[]>([])
    const [ image, setImage ] = useState<string>('/ic1.svg')
    const [ title, setTitle ] = useState<string>('')
    const [ title_en, setTitle_en ] = useState<string>('')
    const [ title_description, setTitle_description ] = useState<string>('')

    const pageData = async() => {
        const { status, data: PageData } = await axios.get('https://api.npoint.io/e7e19a998e04b3692ecc')
        if(status !== 200){
            return toast.error('数据获取失败')
        }
        const {
            title, img_url, title_en, title_description, detail
        }: Result = PageData
        setTitle(title)
        setImage(img_url)
        setTitle_en(title_en)
        setTitle_description(title_description)
        setPageResult(detail)
        console.log(detail)
    }

    useEffect(() => {
        pageData()
    }, [])

    return (<div>
        <Province_banner banner={ 'https://i.ibb.co/jz4Svzp/12313123123123.png' }/>
        <Margin20_box>
            <div className={ 'py-20 flex items-center justify-center space-x-16' }>
                <Image src={ image } alt={ '' } width={ 500 }
                       height={ 400 } className={ 'rounded-lg' }/>
                <div className={ 'space-y-28' }>
                    <div>
                        <Title size={ 50 } bold={ true } title={ title }/>
                        <p className={ 'text-[40px] font-bold text-[#999999]' }>{ title_en }</p>
                    </div>

                    <p className={ 'text-[20px] text-[#858A8F] font-light w-[600px]' }>
                        { title_description }
                    </p>
                    <DialogCoverFrom dialog_model={ 'normal' }/>
                </div>
            </div>
        </Margin20_box>

        { pageResult.map((item, index) => {
            return (<div className={ `${ index % 2 === 0 ? 'bg-mask-color6' : '' }` } key={ index }>
                <Margin20_box className={ 'pb-24' }>
                    <Title size={ 50 } title_en={ item.title_en } en_size={ 24 } height={ 24 } title={ item.title }
                           bold={ true }
                           center={ true }/>
                    <div className={ 'flex justify-center items-center space-x-16' }>
                        { item.data.map((Item, Index) => {
                            return (<PrWayItem key={ Index } num={ Index + 1 } item_detail={ Item }/>)
                        }) }
                    </div>
                </Margin20_box>
            </div>)
        }) }
    </div>)
}

export default FederationPage
