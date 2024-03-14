import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
    Card, CardContent, CardHeader, CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import toast from 'react-hot-toast'
import useHttp from '@/hooks/useActions'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
    file: z.instanceof(FileList).optional()
});

export default function ChangeImageUrlCard(){
    const { isLoading, execute } = useHttp()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    });

    const { reset } = form;
    const fileRef = form.register('file');

    const onSubmit = async(data: z.infer<typeof formSchema>) => {
        console.log(data)
        if( !data.file){
            toast.error('请选择照片!');
            return;
        }
        const formData = new FormData();
        formData.append('file', data.file[0]); // 从表单数据中获取文件

        const response = await execute('upload', 'POST', formData, { 'Content-Type': 'multipart/form-data' });
        if(response){
            toast.success('上传成功.');
            reset(); // 清空表单
        } else {
            toast.error('上传失败，请重试。');
        }
    };

    return (<Card className="w-full h-auto">
        <CardHeader>
            <CardTitle>修改首页Banner图片</CardTitle>
        </CardHeader>
        <CardContent>
            <Form { ...form }>
                <form onSubmit={ form.handleSubmit(onSubmit) } className="w-full space-y-2">
                    <FormField
                        control={ form.control }
                        name="file"
                        render={ ({ field }) => {
                            return (<FormItem>
                                <FormControl>
                                    <Input type="file" placeholder="shadcn" { ...fileRef } />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>);
                        } }
                    />
                    <Button type="submit" disabled={ isLoading }>提交</Button>
                </form>
            </Form>
        </CardContent>
    </Card>);
}
