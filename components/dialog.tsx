'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle, DialogTrigger
} from '@/components/ui/dialog'
import React, { useState } from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel, FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import toast from 'react-hot-toast'
import { MessageSquare } from 'lucide-react'

const FormSchema = z.object({
  name: z.string().min(2, {
    message: '请完整填写姓名'
  }),
  email: z.string().min(8, {
    message: '请完整填写邮箱'
  }),
  title: z.string().min(0),
  content: z.string().min(0)
})

export const DialogCoverFrom = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      title: '',
      content: ''
    }
  })
  const [open, setOpen] = useState(false)

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const response = await axios.post('/api/UserApplicationFrom', data)
      if (response.status === 200) {
        toast.success('提交成功')
        setOpen(false)
      }
    } catch (e) {
      toast.error('提交失败')
    }
  }

  return (
      <Dialog open={ open } onOpenChange={ setOpen }>
        <DialogTrigger asChild>
          <Button
              className={ 'text-[28px] px-14 py-8 bg-default-blue  text-white hover:bg-default-blue font-light ' }>
            <MessageSquare className={ 'mr-2' }/>
            开始咨询
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>快速申请</DialogTitle>
            <DialogDescription>
              留下您的称呼和联系方式，我们会尽快联系您
            </DialogDescription>
          </DialogHeader>

          <Form { ...form }>
            <form onSubmit={ form.handleSubmit(onSubmit) }
                  className="w-full space-y-12">
              <FormField
                  control={ form.control }
                  name="name"
                  render={ ({ field }) => (
                      <FormItem>
                        <FormLabel
                            className={ 'text-[22px] text-description-text-color1 font-light' }>姓名</FormLabel>
                        <FormControl>
                          <Input
                              placeholder={ '张先生/女士' }
                              className={ 'h-[65px]' } { ...field } />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                  ) }
              />
              <FormField
                  control={ form.control }
                  name="email"
                  render={ ({ field }) => (
                      <FormItem>
                        <FormLabel
                            className={ 'text-[22px] text-description-text-color1 font-light' }>邮箱</FormLabel>
                        <FormControl>
                          <Input placeholder={ 'botavisa@botavisa.com' }
                                 className={ 'h-[65px]' } { ...field } />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                  ) }
              />
              <FormField
                  name={ 'title' }
                  render={ ({ field }) => (
                      <FormItem>
                        <FormLabel
                            className={ 'text-[22px] text-description-text-color1 font-light' }>主题</FormLabel>
                        <FormControl>
                          <Input placeholder="雇主担保/联邦EE"
                                 className={ 'h-[65px]' } { ...field } />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                  ) }
              />
              <FormField
                  name="content"
                  render={ ({ field }) => (
                      <FormItem>
                        <FormLabel
                            className={ 'text-[22px] text-description-text-color1 font-light' }>细节描述</FormLabel>
                        <FormControl>
                          <Textarea
                              placeholder="告诉我们更多细节"
                              className={ 'h-[230px]' }
                              { ...field }
                          />
                        </FormControl>
                        <FormMessage/>
                      </FormItem>
                  ) }
              />
              <Button
                  className={ 'w-full rounded-lg bg-default-blue hover:bg-default-blue' }
                  type="submit">
                提交
              </Button>
            </form>
          </Form>

        </DialogContent>
      </Dialog>
  )
}
