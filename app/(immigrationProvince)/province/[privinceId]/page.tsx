'use client'

import Image from 'next/image'
import { DialogCoverFrom } from '@/components/dialog'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Title } from '@/components/Title'
import { PrWayItem } from '@/app/(immigrationProvince)/province/_components/pr_way_item'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const data_url = [ {
    province: 'ontario', url: 'https://api.npoint.io/a265a7aba90f8338908e', img: 'https://i.ibb.co/2F7JSP6/Ontario.png'
}, {
    province: 'british-columbia',
    url: 'https://api.npoint.io/58cc1e846ee51aaf85cb',
    img: 'https://i.ibb.co/p1LzNvg/Pq-Gi2yhf-GWdej-Shit-Vb6w1j3-Xn-Xi8-KIue1gxx37k.png'
}, {
    province: 'quebec',
    url: 'https://api.npoint.io/a8bc0f552d86d304304c',
    img: 'https://i.ibb.co/dB83QHn/p-PP2t-TRb-JVXGVh5-FUm-Vu-Kb21dv0h-Q3-J6-Ymg31q95.png'
}, {
    province: 'prince-edward-island',
    url: 'https://api.npoint.io/f3a087658fd08ccf5938',
    img: 'https://i.ibb.co/9sDDzJH/QU4-R4-Jb-Fp-AOl72tqzqvj-NIXZk-Tp2-NHyo87-Nychqm.png'
}, {
    province: 'alberta',
    url: 'https://api.npoint.io/def67b6a4baabfd6a7e7',
    img: 'https://i.ibb.co/KW20tN3/r85cmaelsak-Hh-RASbvua-LXcf-Ya-Wt-NQVv4-QVNO9yu.png'
}, {
    province: 'saskatchewan',
    url: 'https://api.npoint.io/71091e716803024a1ee4',
    img: 'https://i.ibb.co/JQNwBkt/Og9-IZt-MMlw-IDJ1-Wv3od-Yb-Qn-Vra7j6b-X5-Ab-N9-Kdd-Q.png'
}, {
    province: 'nova-scotia',
    url: 'https://api.npoint.io/624b2ae9f8df2dc06f0e',
    img: 'https://i.ibb.co/LYJXzv2/1-N2kxrjz-KLs6-TZUYa2-B6xt8m-Yfp-CH7l0btn-Co-LDH.png'
}, {
    province: 'newfoundland-and-labrador',
    url: 'https://api.npoint.io/9a24886e7fb36d498837',
    img: 'https://i.ibb.co/2M8kBth/c2-Vb-QX87y-JOGGr4-Ri9-UMHm-BUf-NLks-QYMl-Lq5i-Uit.png'
}, {
    province: 'new-brunswick',
    url: 'https://api.npoint.io/58ec089dc80dadd04ab4',
    img: 'https://i.ibb.co/tMHWqkj/r0z-MAiq-XCLh6e-TBZXO5-QJXswr-BEIqlt-Yhrh-MSZc-A.png'
}, {
    province: 'manitoba',
    url: 'https://api.npoint.io/294ce4ca21ad2a335f19',
    img: 'https://i.ibb.co/sRs99sY/2-ELm-Xq9-Xm-FBWe-S5v-ZLbj-Cqa-Io-YRv-P71-Buop-Fra-Kh.png'
} ]

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

const ProvinceIdPage = ({ params }: { params: { privinceId: string } }) => {
    const [ pageResult, setPageResult ] = useState<ResultItem[]>([])
    const [ image, setImage ] = useState<string>('/ic1.svg')
    const [ title, setTitle ] = useState<string>('')
    const [ title_en, setTitle_en ] = useState<string>('')
    const [ title_description, setTitle_description ] = useState<string>('')
    const [ banner, setBanner ] = React.useState<string>('')

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

    const filter_banner = () => {
        data_url.map((item) => {
            if(item.province === params.privinceId){
                setBanner(item.img)
            }
        })
    }

    useEffect(() => {
        pageData()
        filter_banner()
    }, [ params.privinceId ])

    return (<div>
        <img src={ banner } alt={ '' } className={ 'w-full h-[450px] block' }/>
        <div className={ 'py-20 flex items-center justify-center space-x-16' }>
            <Image src={ image } alt={ '' } width={ 400 }
                   height={ 400 } className={ 'rounded-lg' }/>
            <div className={ 'space-y-16' }>
                <div>
                    <Title size={ 40 } bold={ true } title={ title }/>
                    <p className={ 'text-[40px] font-bold text-[#999999]' }>{ title_en }</p>
                </div>

                <p className={ 'text-[20px] text-[#858A8F] font-light w-[600px]' }>
                    { title_description }
                </p>
                <DialogCoverFrom text={ '预约顾问评估' } variant={ 'ghost' }
                                 className={ 'bg-[#11437F] hover:bg-[#11437F] w-[300px] h-[66px] text-white hover:text-white px-4 py-2.5 rounded-[10px] shadow' }/>
            </div>
        </div>

        { pageResult.map((item, index) => {
            return (<div className={ `${ index % 2 === 0 ? 'bg-mask-color6' : '' } pb-10` } key={ index }>
                <Title size={ 40 } title_en={ item.title_en } en_size={ 20 } height={ 10 } title={ item.title }
                       bold={ true }
                       center={ true }/>
                <div className={ 'flex justify-center items-center space-x-16' }>
                    { item.data.map((Item, Index) => {
                        return (<PrWayItem key={ Index } num={ Index + 1 } item_detail={ Item }/>)
                    }) }
                </div>
                <div className={ 'space-x-20 text-center mt-20' }>
                    <DialogCoverFrom text={ '预约顾问评估' } variant={ 'ghost' }
                                     className={ 'bg-[#11437F] hover:bg-[#11437F] w-[300px] h-[66px] text-white hover:text-white px-4 py-2.5 rounded-[10px] shadow' }/>
                    <Link href={ '/condition_self_test' }>
                        <Button
                            className={ 'bg-[#E83328] hover:bg-[#E83328] w-[300px] h-[66px] px-4 py-2.5 rounded-[10px] shadow' }>条件自测</Button>
                    </Link>

                </div>
            </div>)
        }) }
    </div>)
}

export default ProvinceIdPage
