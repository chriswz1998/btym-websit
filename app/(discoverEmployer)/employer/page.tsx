'use client'

import React, { useEffect, useState } from 'react'
import { EmployerBasic } from '@/app/(discoverEmployer)/_components/employer_basic'
import axios from 'axios'
import { ResultItem } from '@/app/(immigrationProvince)/province/[privinceId]/page'

const employers = [ { name: 'BC雇主担保', url: 'https://api.npoint.io/a5b9d8ad4f7d37c595f4' }, {
    name: '萨省雇主担保', url: 'https://api.npoint.io/44c635256522c7449e96'
}, { name: '阿省雇主担保', url: 'https://api.npoint.io/151d8417254ee3912cc6' }, {
    name: 'NS省雇主担保', url: 'https://api.npoint.io/e92c09277d996850a2c4'
}, { name: '安省雇主担保', url: 'https://api.npoint.io/d6b7cf082d7ee3e901ad' } ]

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

    const clickItemToThis = async() => {
        const name = window.localStorage.getItem('employer_name')
        if( !name){
            await getDatas(employers[0].url)
            return
        }
        const index = employers.map((item, index) => {
            if(item.name === name){
                return index
            }
        }).filter(item => item !== undefined)[0]
        setIsTab(index || 0)
        await getDatas(employers[index || 0].url)
    }
    useEffect(() => {
        clickItemToThis()
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
