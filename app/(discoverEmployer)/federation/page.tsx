'use client'

import React, { useEffect, useState } from 'react'
import { EmployerBasic } from '@/app/(discoverEmployer)/_components/employer_basic'
import axios from 'axios'
import { ResultItem } from '@/app/(immigrationProvince)/province/[privinceId]/page'

const employers = [ { name: '联邦EE', url: 'https://api.npoint.io/9c0cda156eff9e0b03a0' }, {
    name: '联邦自雇', url: 'https://api.npoint.io/425945ad69f068f53501'
}, { name: '联邦护理', url: 'https://api.npoint.io/09187c2807967956855e' }, {
    name: '农业试点', url: 'https://api.npoint.io/5a9601d05368c6866b43'
}, { name: '联邦创业(SUV)', url: 'https://api.npoint.io/1c654eaaabc454e19abf' }, {
    name: '小镇试点(RNIP)', url: 'https://api.npoint.io/1bba1666cc193e2b682b'
} ]

export interface Result{
    title: string
    img_url: string
    title_en: string
    title_description: string
    detail_who_can_apply: Result_items
    normal_detail: ResultItem[]
}

interface Result_items{
    title: string
    title_en: string
    des: Des[]

}

interface Des{
    title: string
    detail: string
}

const Employer = () => {
    const [ isTab, setIsTab ] = useState(0)
    const [ pageData, setPageData ] = useState<Result>({
        title: '', img_url: '', title_en: '', title_description: '', detail_who_can_apply: {
            title: '', title_en: '', des: []
        }, normal_detail: []
    })
    const select_tab = async(index?: number) => {
        setIsTab(index || 0)
        await getDatas(employers[index || 0].url)
    }

    const getDatas = async(url: string) => {
        const { data } = await axios.get<Result>(url)
        setPageData(data)
    }
    useEffect(() => {
        getDatas(employers[0].url).then()
    }, [])
    return (<div>
        <div>
            <ul className={ 'flex items-center justify-center space-x-16 py-6' }>
                { employers.map((item, index) => {
                    return (<li onClick={ () => select_tab(index) }
                                key={ index }
                                className={ ` text-lg font-bold leading-snug px-8 py-2 ${ isTab === index ? ' rounded-full bg-mask-color6 text-[#11437F]' : 'text-gray-400' }` }
                    >{ item.name }</li>)
                }) }
            </ul>
        </div>
        <EmployerBasic pageData={ pageData }/>
    </div>)
}

export default Employer
