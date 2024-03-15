import { Input } from '@/components/ui/input'
import * as React from 'react'
import useHttp from '@/hooks/useActions'
import toast from 'react-hot-toast'
import { ChangeEvent, forwardRef } from 'react'

interface UploadProps{
    onChange: (value: string) => void
}

// eslint-disable-next-line react/display-name
export const Upload = forwardRef<HTMLDivElement, UploadProps>((props, ref) => {
    const { execute } = useHttp()


    const handleFileChange = async(event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if(files && files[0]){
            const formData = new FormData();
            formData.append('file', files[0]);

            const response = await execute('upload', 'POST', formData, {
                'Content-Type': 'multipart/form-data'
            });

            if(response){
                toast.success('上传成功.');
                props.onChange(response); // Call the onChange prop with the response
            } else {
                toast.error('上传失败，请重试。');
            }
        } else {
            toast.error('请选择照片!');
        }
    };

    return (<div>
        <Input
            type="file"
            placeholder="上传文件"
            onChange={ handleFileChange } // Call handleFileChange when the file is selected
        />
    </div>)
})