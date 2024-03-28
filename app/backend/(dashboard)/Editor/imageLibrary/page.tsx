'use client'
import Image from 'next/image'
import * as React from 'react'
import useHttp from '@/hooks/useActions'
import { useEffect, useState } from 'react'
import ImageUpload from '@/app/backend/_components/Upload'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import toast from 'react-hot-toast'

function ImageLibrary(){
    const { execute, isLoading } = useHttp<null, { id: number, url: string }[]>()
    const [ res, setRes ] = useState<{ id: number, url: string }[]>()

    const getList = async() => {
        const resp = await execute('imageList', 'GET') as { id: number, url: string }[]
        setRes(resp)
    }

    const deleteImage = async(id: number) => {
        const resp = await execute('imageList', 'DELETE', { id })
        if(resp){
            toast.success('删除成功')
            await getList()
        }
    }
    useEffect(() => {
        getList()
    }, [])
    if(isLoading){
        return (<div>加载中</div>)
    }
    return (<div>

        <div className="flex flex-wrap items-center">
            <div className={ 'w-[200px] m-2' }>
                <ImageUpload getList={ getList }/>
            </div>

            { res?.map((item, index) => {
                return (<div key={ item.id } className="relative m-2" onMouseEnter={ () => {
                } } onMouseLeave={ () => {
                } }>
                    <Image src={ item.url } alt="/" width={ 200 } height={ 100 } layout="fixed"
                           className="transition-opacity duration-300 ease-in-out rounded-lg"/>
                    <div
                        className="rounded-lg absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 cursor-pointer">
                        <Button variant="destructive" size="icon" onClick={ () => deleteImage(item.id) }>
                            <Trash2 className="h-4 w-4"/>
                        </Button>
                    </div>
                </div>)
            }) }
        </div>
    </div>)
}

export default ImageLibrary
