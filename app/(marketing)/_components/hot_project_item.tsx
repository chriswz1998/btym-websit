'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { DialogCoverFrom } from '@/components/dialog'

export const Hot_project_item = ({ url, text, href }: { url: string, text: string, href: string }) => {
    const storageName = (text: string) => {
        window.localStorage.setItem('employer_name', text)
    }
    return (<div className={ 'p-5' }>
        <div className='relative w-[170px] h-[100px]'>
            <Image src={ url } alt={ "" } fill className='rounded-lg'/>
        </div>
        <div
            className="text-center p-3 pt-6 font-bold text-slate-900">{ text }
        </div>
    </div>)
}
