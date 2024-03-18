import { Button } from '@/components/ui/button'
import {
    Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger
} from '@/components/ui/dialog'
import Image from 'next/image'
import * as React from 'react'
import useHttp from '@/hooks/useActions'
import { forwardRef, useEffect, useState } from 'react'

interface image_select_Props{
    url: string,
    onChange: (value: string) => void,
}

// eslint-disable-next-line react/display-name
export const Images_select = forwardRef<HTMLDivElement, image_select_Props>((props, ref) => {
    const { execute, data } = useHttp<null, { id: number, url: string }[]>()
    const [ dialogOpen, setDialogOpen ] = useState(false)
    const [ imageUrl, setImageUrl ] = useState<string | null>(null)

    const selectList = async(value: string) => {
        props.onChange(value)
        setImageUrl(value)
        setDialogOpen(false)
    }

    const getList = async() => {
        await execute('imageList', 'GET')
    }

    useEffect(() => {
        getList()
    }, [])
    return (<div ref={ ref }>
        <Dialog open={ dialogOpen }>
            <DialogTrigger asChild>
                <Image src={ imageUrl || props.url } alt={ '/' } width={ 400 } height={ 100 }
                       onClick={ () => setDialogOpen(true) }/>
            </DialogTrigger>
            <DialogContent className="max-w-7xl">
                <DialogHeader>
                    <DialogTitle>图片选择</DialogTitle>
                    <DialogDescription>
                        请在一下图片中选择一张, 也可自行上传.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-wrap items-center">
                    { data?.map((item, index) => {
                        return (<Image key={ index } src={ item.url || '/' } alt={ '/' } width={ 200 } height={ 100 }
                                       onClick={ () => selectList(item.url) } className={ 'm-2' }/>)
                    }) }
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            关闭
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </div>)
})
