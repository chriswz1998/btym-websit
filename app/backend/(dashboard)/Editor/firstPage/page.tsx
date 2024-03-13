'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
    Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useNav } from '@/context/nav-context'
import { useState } from 'react'
import { CombinedSubSection, SubSectionLink } from '@/lib/model'

const FormSchema = z.object({
    banner_img_url: z.string().min(10, { message: 'banner_img_url must be at least 10 characters.' }),
    banner: z.object({
        title: z.string().min(1, 'Title is required'), subtitle: z.string().optional(), // 使二级标题可选
        description: z.string().optional(), link: z.string().optional()
    })
});

export default function EditFirstPage(){
    const { data, isLoading } = useNav();
    const [ subSections, setSubSections ] = useState<CombinedSubSection[] | undefined | null>(null)
    const [ subSectionsLinks, setSubSectionsLinks ] = useState<SubSectionLink[] | undefined | null>(null)

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema), defaultValues: {
            banner_img_url: '', banner: {
                title: '', subtitle: '', description: '', link: ''
            }
        }
    })

    const sectionSelected = (value: string) => {
        setSubSections(null)
        setSubSectionsLinks(null)
        setSubSections(data?.filter(item => item.name === value)[0].subSections)
    }
    const subSectionsSelected = (value: string) => {
        setSubSectionsLinks(null)
        setSubSectionsLinks(subSections?.filter(item => item.name === value)[0].links)
    }

    function onSubmit(data: z.infer<typeof FormSchema>){
        console.log(data)
    }

    return (<div className={ 'p-5 border' }>
        <Form { ...form }>
            <form onSubmit={ form.handleSubmit(onSubmit) } className="w-1/3 space-y-8">
                <FormField
                    control={ form.control }
                    name="banner_img_url"
                    render={ ({ field }) => (<FormItem>
                        <FormLabel>更换Banner图片</FormLabel>
                        <FormControl>
                            <Input placeholder="shadcn" { ...field } />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>) }
                />
                <FormField
                    control={ form.control }
                    name="banner.title"
                    render={ ({ field }) => (<FormItem>
                        <FormLabel>编辑Banner显示文字与导航链接</FormLabel>
                        <FormControl>
                            <Input placeholder="shadcn" { ...field } />
                        </FormControl>
                        <FormDescription>这里是一级标题</FormDescription>
                        <FormMessage/>
                    </FormItem>) }
                />
                <FormField
                    control={ form.control }
                    name="banner.subtitle"
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
                    name="banner.description"
                    render={ ({ field }) => (<FormItem>
                        <FormControl>
                            <Input placeholder="shadcn" { ...field } />
                        </FormControl>
                        <FormDescription>这里是三级标题</FormDescription>
                        <FormMessage/>
                    </FormItem>) }
                />
                <Select onValueChange={ (param) => sectionSelected(param) } disabled={ isLoading }>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="请选择导航栏项目"/>
                    </SelectTrigger>
                    <SelectContent>
                        { data?.map((item, index) => {
                            return (<SelectItem value={ item.name } key={ index }>{ item.name }</SelectItem>)
                        }) }
                    </SelectContent>
                </Select>
                <Select disabled={ !subSections } onValueChange={ (param) => subSectionsSelected(param) }>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="请选择子项目"/>
                    </SelectTrigger>
                    <SelectContent>
                        { subSections?.map((item, index) => {
                            return (<SelectItem value={ item.name } key={ index }>{ item.name }</SelectItem>)
                        }) }
                    </SelectContent>
                </Select>
                <FormField
                    control={ form.control }
                    name="banner.link"
                    render={ ({ field }) => (<FormItem>
                        <Select disabled={ !subSectionsLinks }
                                onValueChange={ (value) => {
                                    const link = subSectionsLinks?.filter(item => item.name === value)[0].link
                                    field.onChange(link)
                                } }
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="请选择具体链接"/>
                            </SelectTrigger>
                            <SelectContent>
                                { subSectionsLinks?.map((item, index) => {
                                    return (<SelectItem value={ item.name } key={ index }>{ item.name }</SelectItem>)
                                }) }
                            </SelectContent>
                        </Select>
                        <FormDescription>
                            这里是当前修改banner的点击链接, 请按照步骤逐级选择.
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>) }
                />
                <Button type="submit">提交</Button>
            </form>
        </Form>
    </div>)
}
