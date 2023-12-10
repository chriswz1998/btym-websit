'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
    Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage
} from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'

const edu = [ '高中以下', '高中', '1年大专', '2年大专', '3年以上大专或本科', '双专业（3年以上+1年以上）', '硕士学位或专业学位（如医学博士）', '博士学位' ]
const lan1 = [ '雅思', '思培(CELPIP)', 'TEF' ]

const FormSchema = z.object({
    matrimonial: z.enum([ '单身', '已婚或有伴侣' ], {
        required_error: '请选择状态.'
    }),
    age: z.string().min(1, { message: '请填写年龄' }),
    education: z.string().min(0, { message: '请填写想要咨询的目的地' }),
    lan1: z.string().min(0, { message: '请选择语言' }),
    lan2: z.string().min(0, { message: '请选择语言' }),
    workExpCa: z.string().min(0, { message: '请填写工作经验' }),
    workExp: z.string().min(0, { message: '请填写工作经验' }),
    provinceUp: z.enum([ '有', '没有' ], {
        required_error: '请选择状态'
    }),
    offer: z.enum([ '无', '我有00类的雇主Offer', '我有其他类的雇主Offer' ], {
        required_error: '请选择状态'
    }),
    eduCa: z.enum([ '无', '我有00类的雇主Offer', '我有其他类的雇主Offer' ], {
        required_error: '请选择状态'
    }),
    brother: z.enum([ '无', '有' ], {
        required_error: '请选择状态'
    })
})

export function EE(){
    const [ listen, setListen ] = React.useState('')
    const [ speak, setSpeak ] = React.useState('')
    const [ read, setRead ] = React.useState('')
    const [ write, setWrite ] = React.useState('')
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema)
    })

    const isListen = (e: React.ChangeEvent<HTMLInputElement>) => {
        setListen(e.target.value)
    }
    const isSpeak = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSpeak(e.target.value)
    }
    const isRead = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRead(e.target.value)
    }
    const isWrite = (e: React.ChangeEvent<HTMLInputElement>) => {
        setWrite(e.target.value)
    }

    function onSubmit(data: z.infer<typeof FormSchema>){
        const { lan1 } = data
        data.lan1 = `${ lan1 }: 听力-${ listen } 口语-${ speak } 阅读-${ read } 写作-${ write }`
        console.log(data)
    }


    return (<Form { ...form }>
        <form onSubmit={ form.handleSubmit(onSubmit) } className="py-10 w-[460px] mx-auto space-y-14">
            <FormField
                control={ form.control }
                name="matrimonial"
                render={ ({ field }) => (<FormItem className="space-y-3">
                    <FormLabel>婚姻状况</FormLabel>
                    <FormControl>
                        <RadioGroup
                            onValueChange={ field.onChange }
                            defaultValue={ field.value }
                            className="flex flex-col space-y-1"
                        >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <RadioGroupItem value="单身"/>
                                </FormControl>
                                <FormLabel className="font-normal">
                                    单身
                                </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <RadioGroupItem value="已婚或有伴侣"/>
                                </FormControl>
                                <FormLabel className="font-normal">
                                    已婚或有伴侣
                                </FormLabel>
                            </FormItem>
                        </RadioGroup>
                    </FormControl>
                </FormItem>) }
            />
            <FormField
                control={ form.control }
                name="age"
                render={ ({ field }) => (<FormItem>
                    <FormLabel>年龄</FormLabel>
                    <FormControl>
                        <Input placeholder={ '请输入年龄' }
                               { ...field } />
                    </FormControl>
                </FormItem>) }
            />

            <FormField
                control={ form.control }
                name="education"
                render={ ({ field }) => (<FormItem>
                    <FormLabel>教育情况</FormLabel>
                    <Select onValueChange={ field.onChange }>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="请选择学历状况"/>
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            { edu.map((item, index) => {
                                return (<SelectItem key={ index } value={ item }>{ item }</SelectItem>)
                            }) }
                        </SelectContent>
                    </Select>
                </FormItem>) }
            />

            <FormField
                control={ form.control }
                name="lan1"
                render={ ({ field }) => (<FormItem>
                    <FormLabel>第一语言</FormLabel>
                    <Select onValueChange={ field.onChange }>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="请选择第一语言"/>
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            { lan1.map((item, index) => {
                                return (<SelectItem key={ index } value={ item }>{ item }</SelectItem>)
                            }) }
                        </SelectContent>
                    </Select>
                    <FormDescription>
                        如果您第一语言选了英语，第二语言请选择法语
                    </FormDescription>
                    <Input placeholder={ '听力' }
                           onChange={ isListen }/>
                    <Input placeholder={ '口语' }
                           onChange={ isSpeak }/>
                    <Input placeholder={ '阅读' }
                           onChange={ isRead }/>
                    <Input placeholder={ '写作' }
                           onChange={ isWrite }/>
                </FormItem>) }
            />
            <FormField
                control={ form.control }
                name="lan2"
                render={ ({ field }) => (<FormItem>
                    <FormLabel>第二语言</FormLabel>
                    <Select onValueChange={ field.onChange }>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="请选择第二语言"/>
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            { lan1.map((item, index) => {
                                return (<SelectItem key={ index } value={ item }>{ item }</SelectItem>)
                            }) }
                        </SelectContent>

                    </Select>
                    <FormDescription>
                        如果您第一语言选了英语，第二语言请选择法语
                    </FormDescription>
                    <Input placeholder={ '听力' }
                           onChange={ isListen }/>
                    <Input placeholder={ '口语' }
                           onChange={ isSpeak }/>
                    <Input placeholder={ '阅读' }
                           onChange={ isRead }/>
                    <Input placeholder={ '写作' }
                           onChange={ isWrite }/>
                </FormItem>) }
            />

            <FormField
                control={ form.control }
                name="workExpCa"
                render={ ({ field }) => (<FormItem>
                    <FormLabel>加拿大工作经验(可以不连续)</FormLabel>
                    <FormControl>
                        <Input placeholder={ '请输入年限' }
                               { ...field } />
                    </FormControl>
                    <FormDescription>
                        工作经验需符合NOC的0/A/B类
                    </FormDescription>
                </FormItem>) }
            />
            <FormField
                control={ form.control }
                name="workExp"
                render={ ({ field }) => (<FormItem>
                    <FormLabel>非加拿大工作经验（可以不连续）</FormLabel>
                    <FormControl>
                        <Input placeholder={ '请输入年限' }
                               { ...field } />
                    </FormControl>
                    <FormDescription>
                        工作经验需符合NOC的0/A/B类
                    </FormDescription>
                </FormItem>) }
            />

            <FormField
                control={ form.control }
                name="provinceUp"
                render={ ({ field }) => (<FormItem className="space-y-3">
                    <FormLabel>省提名</FormLabel>
                    <FormControl>
                        <RadioGroup
                            onValueChange={ field.onChange }
                            defaultValue={ field.value }
                            className="flex flex-col space-y-1"
                        >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <RadioGroupItem value="有"/>
                                </FormControl>
                                <FormLabel className="font-normal">
                                    有
                                </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <RadioGroupItem value="没有"/>
                                </FormControl>
                                <FormLabel className="font-normal">
                                    没有
                                </FormLabel>
                            </FormItem>
                        </RadioGroup>
                    </FormControl>
                </FormItem>) }
            />

            <FormField
                control={ form.control }
                name="offer"
                render={ ({ field }) => (<FormItem className="space-y-3">
                    <FormLabel>雇主Offer(LMIA或者封闭式工签)</FormLabel>
                    <FormControl>
                        <RadioGroup
                            onValueChange={ field.onChange }
                            defaultValue={ field.value }
                            className="flex flex-col space-y-1"
                        >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <RadioGroupItem value="无"/>
                                </FormControl>
                                <FormLabel className="font-normal">
                                    无
                                </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <RadioGroupItem value="我有00类的雇主Offer"/>
                                </FormControl>
                                <FormLabel className="font-normal">
                                    我有00类的雇主Offer
                                </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <RadioGroupItem value="我有其他类的雇主Offer"/>
                                </FormControl>
                                <FormLabel className="font-normal">
                                    我有其他类的雇主Offer
                                </FormLabel>
                            </FormItem>
                        </RadioGroup>
                    </FormControl>
                </FormItem>) }
            />
            <FormField
                control={ form.control }
                name="eduCa"
                render={ ({ field }) => (<FormItem className="space-y-3">
                    <FormLabel>加拿大学历</FormLabel>
                    <FormControl>
                        <RadioGroup
                            onValueChange={ field.onChange }
                            defaultValue={ field.value }
                            className="flex flex-col space-y-1"
                        >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <RadioGroupItem value="无"/>
                                </FormControl>
                                <FormLabel className="font-normal">
                                    无
                                </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <RadioGroupItem value="我有00类的雇主Offer"/>
                                </FormControl>
                                <FormLabel className="font-normal">
                                    我有学制3年以上的加拿大学历，或加拿大的硕士、博士学历
                                </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <RadioGroupItem value="我有其他类的雇主Offer"/>
                                </FormControl>
                                <FormLabel className="font-normal">
                                    我有学制1-2年的的加拿大学历
                                </FormLabel>
                            </FormItem>
                        </RadioGroup>
                    </FormControl>
                </FormItem>) }
            />
            <FormField
                control={ form.control }
                name="brother"
                render={ ({ field }) => (<FormItem className="space-y-3">
                    <FormLabel>兄弟姐妹在加拿大</FormLabel>
                    <FormControl>
                        <RadioGroup
                            onValueChange={ field.onChange }
                            defaultValue={ field.value }
                            className="flex flex-col space-y-1"
                        >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <RadioGroupItem value="无"/>
                                </FormControl>
                                <FormLabel className="font-normal">
                                    无
                                </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                    <RadioGroupItem value="有"/>
                                </FormControl>
                                <FormLabel className="font-normal">
                                    有
                                </FormLabel>
                            </FormItem>
                        </RadioGroup>
                    </FormControl>
                </FormItem>) }
            />
            <Button type="submit" className={ 'w-full rounded-lg bg-[#E83328] hover:bg-default-blue' }>提交</Button>
        </form>
    </Form>)
}
