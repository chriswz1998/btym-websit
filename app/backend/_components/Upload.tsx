import {
    UploadCloud
} from 'lucide-react';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Input } from '@/components/ui/input'
import useHttp from '@/hooks/useActions'
import toast from 'react-hot-toast'

interface FileUploadProgress{
    progress: number;
    File: File
}

export default function ImageUpload({ getList }: { getList: () => Promise<void> }){
    const { execute } = useHttp<any, string>()

    const [ filesToUpload, setFilesToUpload ] = useState<FileUploadProgress[]>([]);

    const uploadImageToCloudinary = async(formData: FormData) => {
        return await execute('upload', 'POST', formData, {
            'Content-Type': 'multipart/form-data'
        });
    };

    const onDrop = useCallback(async(acceptedFiles: File[]) => {
        setFilesToUpload((prevUploadProgress) => {
            return [ ...prevUploadProgress, ...acceptedFiles.map((file) => {
                return {
                    progress: 0, File: file, source: null
                };
            }) ];
        });
        const fileUploadBatch = acceptedFiles.map((file) => {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', process.env.NEXT_PUBLIC_UPLOAD_PRESET as string);
            return uploadImageToCloudinary(formData);
        });

        try{
            await Promise.all(fileUploadBatch);
            await getList()
            toast.success('图片上传成功')
        } catch(error) {
            console.error('Error uploading files: ', error);
        }
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (<div>
        <div>
            <label
                { ...getRootProps() }
                className="relative flex flex-col items-center justify-center w-full py-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
            >
                <div className=" text-center space-y-4">
                    <div className=" border p-2 rounded-md max-w-min mx-auto">
                        <UploadCloud size={ 20 }/>
                    </div>
                    <p className="text-xl text-gray-500">
                        点击上传图片
                    </p>
                </div>
            </label>
            <Input
                { ...getInputProps() }
                id="dropzone-file"
                accept="image/png, image/jpeg"
                type="file"
                className="hidden"
            />
        </div>
    </div>);
}