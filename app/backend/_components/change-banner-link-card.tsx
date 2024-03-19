'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
    Form, FormControl, FormDescription, FormField, FormItem, FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { SelectNavData } from '@/app/backend/_components/select-nav-data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import * as React from 'react'
import useHttp from '@/hooks/useActions'
import { useEffect, useState } from 'react'
import { Banner } from '@/lib/model'
import { Images_select } from '@/app/backend/_components/images_selece'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import toast from 'react-hot-toast'

const FormSchema = z.object({
    backgroundImgUrl: z.string().optional(), bannerData: z.object({
        title: z.string().min(1, 'Title is required'), subTitle: z.string().optional(), // 使二级标题可选
        description: z.string().optional(), link: z.string().optional(), id: z.string()
    })
});

export default function ChangeBannerLinkCard(){
    const { isLoading, execute } = useHttp<null, any>()
    const [ res, setRes ] = useState<Banner | undefined>()

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema), defaultValues: {
            backgroundImgUrl: '', bannerData: {
                title: '', subTitle: '', description: '', link: '', id: ''
            }
        }
    })

    async function onSubmit(data: z.infer<typeof FormSchema>){
        const { code } = await execute('firstPage/banner', 'POST', data)
        if(code === 200){
            toast.success('修改成功')
        } else {
            toast.error('修改失败, 请重试')
        }
    }

    const getNavListData = async() => {
        const [ es ] = await execute('firstPage/banner', 'GET')
        setRes(es)
    }

    useEffect(() => {
        getNavListData()
    }, [])

    return (<div>
        { isLoading ? '加载中' : (<Card className="w-full h-auto">
            <CardHeader>
                <CardTitle>Banner</CardTitle>
            </CardHeader>
            <CardContent>
                <Form { ...form }>
                    <form onSubmit={ form.handleSubmit(onSubmit) } className="w-full space-y-2 relative">
                        <FormField
                            control={ form.control }
                            name="backgroundImgUrl"
                            render={ ({ field }) => (<FormItem>
                                <FormControl>
                                    <Images_select
                                        url={ res?.backgroundImgUrl || './' } { ...field }/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>) }
                        />
                        <FormField
                            control={ form.control }
                            name="bannerData.id"
                            render={ ({ field }) => (<FormItem>
                                <Select onValueChange={ field.onChange } defaultValue={ field.value }>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="请选择需要编辑项"/>
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        { res?.bannerData.map((item, index) => {
                                            return (<SelectItem key={ item.id }
                                                                value={ String(item.id) }>{ item.id }</SelectItem>)
                                        }) }
                                    </SelectContent>
                                </Select>
                                <FormMessage/>
                            </FormItem>) }
                        />
                        <FormField
                            control={ form.control }
                            name="bannerData.title"
                            render={ ({ field }) => (<FormItem>
                                <FormControl>
                                    <Input placeholder="shadcn" { ...field } />
                                </FormControl>
                                <FormDescription>这里是一级标题</FormDescription>
                                <FormMessage/>
                            </FormItem>) }
                        />
                        <FormField
                            control={ form.control }
                            name="bannerData.subTitle"
                            render={ ({ field }) => (<FormItem>
                                <FormControl>
                                    <Input placeholder="shadcn" { ...field } />
                                </FormControl>
                                <FormDescription>这里是二级标题</FormDescription>
                                <FormMessage/>
                            </FormItem>) }
                        />
                        <FormField
                            control={ form.control }
                            name="bannerData.description"
                            render={ ({ field }) => (<FormItem>
                                <FormControl>
                                    <Input placeholder="shadcn" { ...field } />
                                </FormControl>
                                <FormDescription>这里是三级标题</FormDescription>
                                <FormMessage/>
                            </FormItem>) }
                        />

                        <FormField
                            control={ form.control }
                            name="bannerData.link"
                            render={ ({ field }) => (<FormItem>
                                <SelectNavData { ...field }/>
                                <FormDescription>
                                    这里是当前修改banner的点击链接, 请按照步骤逐级选择.
                                </FormDescription>
                                <FormMessage/>
                            </FormItem>) }
                        />
                        <Button type="submit">提交</Button>
                    </form>
                </Form>
            </CardContent>
        </Card>) }
    </div>)
}
