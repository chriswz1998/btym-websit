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
import { Upload } from '@/app/backend/_components/Upload'

const FormSchema = z.object({
    background_img_url: z.string().optional(), banner_data: z.object({
        title: z.string().min(1, 'Title is required'), subtitle: z.string().optional(), // 使二级标题可选
        description: z.string().optional(), link: z.string().optional()
    })
});

export default function ChangeBannerLinkCard(){
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema), defaultValues: {
            background_img_url: '', banner_data: {
                title: '', subtitle: '', description: '', link: ''
            }
        }
    })

    function onSubmit(data: z.infer<typeof FormSchema>){
        console.log(data)
    }

    return (<Card className="w-full h-auto">
        <CardHeader>
            <CardTitle>修改首页Banner标题与链接</CardTitle>
        </CardHeader>
        <CardContent>
            <Form { ...form }>
                <form onSubmit={ form.handleSubmit(onSubmit) } className="w-full space-y-2">
                    <FormField
                        control={ form.control }
                        name="background_img_url"
                        render={ ({ field }) => (<FormItem>
                            <FormControl>
                                <Upload { ...field }/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>) }
                    />
                    <FormField
                        control={ form.control }
                        name="banner_data.title"
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
                        name="banner_data.subtitle"
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
                        name="banner_data.description"
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
                        name="banner_data.link"
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
    </Card>)
}
