'use client'

import Image from 'next/image'
import { DialogCoverFrom } from '@/components/dialog'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Banner_item, Province_banner } from '@/components/province_banner'
import toast from 'react-hot-toast'
import { Margin20_box } from '@/components/margin20_box'
import { Title } from '@/components/Title'
import { Blocks, Check } from 'lucide-react'
import { PrWayItem } from '@/app/(immigrationProvince)/province/_components/pr_way_item'
import { Pr_way_item_des } from '@/app/(immigrationProvince)/province/_components/pr_way_item_des'

const data_url = [ {
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

interface ResultSubItem{
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

const ProvinceIdPage = ({ params }: { params: { privinceId: string } }) => {
    const [ pageResult, setPageResult ] = useState<ResultItem[]>([])
    const [ image, setImage ] = useState<string>('/ic1.svg')
    const [ title, setTitle ] = useState<string>('')
    const [ title_en, setTitle_en ] = useState<string>('')
    const [ title_description, setTitle_description ] = useState<string>('')
    const pageData = async() => {
        const { status, data: PageData } = await axios.get(filter_url())
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
    }
    const filter_url = () => {
        const [ data ] = data_url.filter((item) => item.province === params.privinceId)
        return data.url
    }

    const [ banner, setBanner ] = React.useState<string>('')
    const getBanner = async() => {
        const response = await axios.get(`/api/province`)
        filter_banner(response.data)
    }

    const filter_banner = (banner: Banner_item[]) => {
        banner.map((item) => {
            if(item.province === params.privinceId){
                setBanner(item.image)
            }
        })
    }

    useEffect(() => {
        pageData()
        getBanner()
    }, [ params.privinceId ])

    return (<div>
        <Province_banner banner={ banner }/>
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

        <div className={ 'bg-mask-color6' }>
            <Margin20_box className={ 'pb-24' }>
                <Title size={ 50 } height={ 24 } title={ '安省提名·雇主担保类别' } bold={ true } center={ true }/>
                <div className={ 'flex justify-center items-center space-x-16' }>
                    <PrWayItem/>
                    <PrWayItem/>
                    <PrWayItem/>
                </div>
            </Margin20_box>
        </div>

        <Margin20_box className={ 'mb-24' }>
            <Title size={ 50 } height={ 24 } title={ '安省特快入境' } bold={ true } center={ true }/>
            <div className={ 'flex justify-center items-center space-x-16' }>
                <PrWayItem w={ 400 } shadow={ true }/>
                <PrWayItem w={ 400 } shadow={ true }/>
            </div>
        </Margin20_box>

        <div className={ 'w-full bg-[url("/Image-18.png")] bg-cover bg-no-repeat flex' }>
            <div className={ 'bg-mask-bg h-full text-white w-1/2 flex items-center justify-center' }>
                <div className={ 'p-20 space-y-14' }>
                    <Title size={ 50 } title={ '安省企业家创业' }/>
                    <div className={ 'space-y-10' }>
                        <Pr_way_item_des
                            className={ 'text-white text-xl w-[500px]' }
                            des={ '过去60个月内至少拥有36个月的全职商业运营经验，并且在过去12个月中参与公司的行政管理或者参与将计划在安省开创生意类型相关的商业管理' }/>
                        <Pr_way_item_des
                            className={ 'text-white text-xl w-[500px] ' }
                            des={ '过去60个月内至少拥有36个月的全职商业运营经验，并且在过去12个月中参与公司的行政管理或者参与将计划在安省开创生意类型相关的商业管理' }/>
                        <Pr_way_item_des
                            className={ 'text-white text-xl w-[500px] ' }
                            des={ '过去60个月内至少拥有36个月的全职商业运营经验，并且在过去12个月中参与公司的行政管理或者参与将计划在安省开创生意类型相关的商业管理' }/>
                        <Pr_way_item_des
                            className={ 'text-white text-xl w-[500px] ' }
                            des={ '过去60个月内至少拥有36个月的全职商业运营经验，并且在过去12个月中参与公司的行政管理或者参与将计划在安省开创生意类型相关的商业管理' }/>
                        <Pr_way_item_des
                            className={ 'text-white text-xl w-[500px] ' }
                            des={ '过去60个月内至少拥有36个月的全职商业运营经验，并且在过去12个月中参与公司的行政管理或者参与将计划在安省开创生意类型相关的商业管理' }/>
                        <Pr_way_item_des
                            className={ 'text-white text-xl w-[500px] ' }
                            des={ '过去60个月内至少拥有36个月的全职商业运营经验，并且在过去12个月中参与公司的行政管理或者参与将计划在安省开创生意类型相关的商业管理' }/>
                        <Pr_way_item_des
                            className={ 'text-white text-xl w-[500px] ' }
                            des={ '过去60个月内至少拥有36个月的全职商业运营经验，并且在过去12个月中参与公司的行政管理或者参与将计划在安省开创生意类型相关的商业管理' }/>
                    </div>
                </div>
            </div>

            <div className={ 'bg-mask-color7 h-full text-white w-1/2 flex items-center justify-center' }>
                <div className={ 'p-20 space-y-14' }>
                    <Title size={ 50 } title={ '安省企业家创业' }/>
                    <div className={ 'space-y-10' }>
                        <Pr_way_item_des
                            className={ 'text-white text-xl w-[500px]' }
                            des={ '过去60个月内至少拥有36个月的全职商业运营经验，并且在过去12个月中参与公司的行政管理或者参与将计划在安省开创生意类型相关的商业管理' }/>
                        <Pr_way_item_des
                            className={ 'text-white text-xl w-[500px] ' }
                            des={ '过去60个月内至少拥有36个月的全职商业运营经验，并且在过去12个月中参与公司的行政管理或者参与将计划在安省开创生意类型相关的商业管理' }/>
                        <Pr_way_item_des
                            className={ 'text-white text-xl w-[500px] ' }
                            des={ '过去60个月内至少拥有36个月的全职商业运营经验，并且在过去12个月中参与公司的行政管理或者参与将计划在安省开创生意类型相关的商业管理' }/>
                        <Pr_way_item_des
                            className={ 'text-white text-xl w-[500px] ' }
                            des={ '过去60个月内至少拥有36个月的全职商业运营经验，并且在过去12个月中参与公司的行政管理或者参与将计划在安省开创生意类型相关的商业管理' }/>
                        <Pr_way_item_des
                            className={ 'text-white text-xl w-[500px] ' }
                            des={ '过去60个月内至少拥有36个月的全职商业运营经验，并且在过去12个月中参与公司的行政管理或者参与将计划在安省开创生意类型相关的商业管理' }/>
                        <Pr_way_item_des
                            className={ 'text-white text-xl w-[500px] ' }
                            des={ '过去60个月内至少拥有36个月的全职商业运营经验，并且在过去12个月中参与公司的行政管理或者参与将计划在安省开创生意类型相关的商业管理' }/>
                        <Pr_way_item_des
                            className={ 'text-white text-xl w-[500px] ' }
                            des={ '过去60个月内至少拥有36个月的全职商业运营经验，并且在过去12个月中参与公司的行政管理或者参与将计划在安省开创生意类型相关的商业管理' }/>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default ProvinceIdPage
