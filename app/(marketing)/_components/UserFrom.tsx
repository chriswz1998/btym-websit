'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { Textarea } from '@/components/ui/textarea'

const FormSchema = z.object({
  name: z.string().min(2, {
    message: '请完整填写姓名'
  }),
  email: z.string().min(8, {
    message: '请完整填写邮箱'
  }),
  subject: z.string().min(0),
  detail: z.string().min(0)
})

export function UserForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      detail: ''
    }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('🚀 ~ file: UserFrom.tsx ~ line 40 --->', data)
  }

  return (
      <Form { ...form }>
        <form onSubmit={ form.handleSubmit(onSubmit) }
              className="w-2/3 space-y-12 bg-white p-12 rounded-2xl">
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
                          className={ 'h-[65px] bg-mask-color2' } { ...field } />
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
                             className={ 'h-[65px] bg-mask-color2' } { ...field } />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
              ) }
          />
          <FormField
              name={ 'subject' }
              render={ ({ field }) => (
                  <FormItem>
                    <FormLabel
                        className={ 'text-[22px] text-description-text-color1 font-light' }>主题</FormLabel>
                    <FormControl>
                      <Input placeholder="雇主担保/联邦EE"
                             className={ 'h-[65px] bg-mask-color2' } { ...field } />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
              ) }
          />
          <FormField
              name="detail"
              render={ ({ field }) => (
                  <FormItem>
                    <FormLabel
                        className={ 'text-[22px] text-description-text-color1 font-light' }>细节描述</FormLabel>
                    <FormControl>
                      <Textarea
                          placeholder="告诉我们更多细节"
                          className={ 'h-[230px] bg-mask-color2' }
                          { ...field }
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
              ) }
          />
          <Button
              className={ 'w-full rounded-full bg-default-blue hover:bg-default-blue' }
              type="submit">
            提交
          </Button>
        </form>
      </Form>
  )
}
