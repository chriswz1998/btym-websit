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
import { ChangeEvent, useState } from 'react'

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


    return (<Form { ...form }>
        <form onSubmit={ form.handleSubmit(onSubmit) } className="py-10 w-[460px] mx-auto space-y-14">
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
                           onChange={ isListen1 }/>
                    <Input placeholder={ '口语' }
                           onChange={ isSpeak1 }/>
                    <Input placeholder={ '阅读' }
                           onChange={ isRead1 }/>
                    <Input placeholder={ '写作' }
                           onChange={ isWrite1 }/>
                </FormItem>) }
            />

            <FormField
                control={ form.control }
                name="workExp"
                render={ ({ field }) => (<FormItem>
                    <FormLabel>工作行业</FormLabel>
                    <FormControl>
                        <Input placeholder={ '请输入工作行业' }
                               { ...field } />
                    </FormControl>
                </FormItem>) }
            />

            <FormField
                control={ form.control }
                name="jobTitle"
                render={ ({ field }) => (<FormItem>
                    <FormLabel>工作岗位</FormLabel>
                    <FormControl>
                        <Input placeholder={ '请输入工作岗位' }
                               { ...field } />
                    </FormControl>
                </FormItem>) }
            />

            <FormField
                control={ form.control }
                name="whyComing"
                render={ ({ field }) => (<FormItem>
                    <FormLabel>咨询项目</FormLabel>
                    <Select onValueChange={ field.onChange }>
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="请选择咨询项目"/>
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            { pro.map((item, index) => {
                                return (<SelectItem key={ index } value={ item }>{ item }</SelectItem>)
                            }) }
                        </SelectContent>
                    </Select>
                </FormItem>) }
            />

            <FormField
                control={ form.control }
                name="phone"
                render={ ({ field }) => (<FormItem>
                    <FormLabel>联系方式</FormLabel>
                    <FormControl>
                        <Input placeholder={ '请输入联系方式' }
                               { ...field } />
                    </FormControl>
                </FormItem>) }
            />
            <FormField
                control={ form.control }
                name="name"
                render={ ({ field }) => (<FormItem>
                    <FormLabel>称呼</FormLabel>
                    <FormControl>
                        <Input placeholder={ '请输入您的称呼' }
                               { ...field } />
                    </FormControl>
                    <FormMessage/>
                </FormItem>) }
            />

            <Button type="submit" className={ 'w-full rounded-lg bg-[#E83328] hover:bg-[#E83328]' }>提交</Button>
        </form>
    </Form>)
}
