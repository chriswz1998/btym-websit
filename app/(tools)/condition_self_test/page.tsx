'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
    Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React, { ChangeEvent, useState } from 'react'

const edu = [ '高中以下', '高中', '1年大专', '2年大专', '3年以上大专或本科', '双专业（3年以上+1年以上）', '硕士学位或专业学位（如医学博士）', '博士学位' ]
const pro = [ '子女教育 ', ' 工作/教育', '  TZ置业 ', ' 居住环境' ]
const lan1 = [ '雅思', '思培(CELPIP)', 'TEF' ]

const FormSchema = z.object({
    age: z.string().min(1, { message: '请填写年龄' }),
    education: z.string().min(0, { message: '请选择教育情况' }),
    lan1: z.string().min(0, { message: '请选择语言' }),
    lan2: z.string().min(0, { message: '请选择语言' }),
    workExp: z.string().min(0, { message: '请填写工作经验' }),
    jobTitle: z.string().min(0, { message: '请填写工作岗位' }),
    whyComing: z.string().min(0, { message: '请填写咨询项目' }),
    phone: z.string().min(11, { message: '请填写电话号码' }),
    name: z.string().min(1, { message: '请填写称呼' })
})

export default function Condition_self_test(){
    const [ listen, setListen ] = useState('')
    const [ speak, setSpeak ] = useState('')
    const [ read, setRead ] = useState('')
    const [ write, setWrite ] = useState('')

    const [ listen1, setListen1 ] = useState('')
    const [ speak1, setSpeak1 ] = useState('')
    const [ read1, setRead1 ] = useState('')
    const [ write1, setWrite1 ] = useState('')

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema)
    })

    const isListen = (e: ChangeEvent<HTMLInputElement>) => setListen(e.target.value)
    const isSpeak = (e: ChangeEvent<HTMLInputElement>) => setSpeak(e.target.value)
    const isRead = (e: ChangeEvent<HTMLInputElement>) => setRead(e.target.value)
    const isWrite = (e: ChangeEvent<HTMLInputElement>) => setWrite(e.target.value)

    const isListen1 = (e: ChangeEvent<HTMLInputElement>) => setListen(e.target.value)
    const isSpeak1 = (e: ChangeEvent<HTMLInputElement>) => setSpeak(e.target.value)
    const isRead1 = (e: ChangeEvent<HTMLInputElement>) => setRead(e.target.value)
    const isWrite1 = (e: ChangeEvent<HTMLInputElement>) => setWrite(e.target.value)

    function onSubmit(data: z.infer<typeof FormSchema>){
        const { lan1 } = data
        data.lan1 = `${ lan1 }: 听力-${ listen } 口语-${ speak } 阅读-${ read } 写作-${ write }`
        data.lan2 = `${ lan1 }: 听力-${ listen } 口语-${ speak } 阅读-${ read } 写作-${ write }`
        console.log(data)
    }


    return (<iframe src="https://saas.qikebao.com/landingPage/detail/WVRf?from=QF1fQxc%3D"
                    width="100%"
                    height="1050px"
                    allowFullScreen
    ></iframe>)
}
