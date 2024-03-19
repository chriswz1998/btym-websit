'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
    Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { SelectNavData } from '@/app/backend/_components/select-nav-data'
import * as React from 'react'
import useHttp from '@/hooks/useActions'
import { Images_select } from '@/app/backend/_components/images_selece'
import toast from 'react-hot-toast'
import { CarouselDto } from '@/lib/model'

const FormSchema = z.object({
    url: z.string().optional(), text: z.string().min(1, 'Title is required'), link: z.string().optional()
});

export default function ChangeCarouselItems({ defaultData }: { defaultData?: CarouselDto }){
    const { isLoading, execute } = useHttp<null, any>()

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema), defaultValues: {
            url: '', text: '', link: ''
        }
    })

    async function onSubmit(data: z.infer<typeof FormSchema>){
        if( !data.url){
            data.url = defaultData?.url
        }
        const carousel = await execute('carousel', 'PUT', { ...data, id: defaultData?.id })
        if(carousel){
            toast.success('修改成功')
        } else {
            toast.error('修改失败, 请重试')
        }
    }

    return (<div>
        <Form { ...form }>
            <form onSubmit={ form.handleSubmit(onSubmit) } className="w-[250px] space-y-4 relative m-2">
                <FormField
                    control={ form.control }
                    name="url"
                    render={ ({ field }) => (<FormItem>
                        <FormLabel>{ defaultData?.text }</FormLabel>
                        <FormControl>
                            <Images_select
                                url={ defaultData?.url || 'https://myimagesforbtym.blob.core.windows.net/images/2ddb55dd-aa28-4c05-904d-762535a4e5de.jpeg' } { ...field }/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>) }
                />
                <FormField
                    control={ form.control }
                    name="text"
                    render={ ({ field }) => (<FormItem>
                        <FormLabel>标题.</FormLabel>
                        <FormControl>
                            <Input { ...field } />
                        </FormControl>
                        <FormDescription></FormDescription>
                        <FormMessage/>
                    </FormItem>) }
                />
                <FormField
                    control={ form.control }
                    name="link"
                    render={ ({ field }) => (<FormItem>
                        <FormLabel>修改链接, 请按照步骤逐级选择.</FormLabel>
                        <SelectNavData { ...field }/>
                        <FormMessage/>
                    </FormItem>) }
                />
                <Button type="submit" disabled={ isLoading }>提交</Button>
            </form>
        </Form>
    </div>)
}
