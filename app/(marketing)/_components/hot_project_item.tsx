'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { DialogCoverFrom } from '@/components/dialog'

export const Hot_project_item = ({ url, text, href }: { url: string, text: string, href: string }) => {
    const storageName = (text: string) => {
        window.localStorage.setItem('employer_name', text)
    }
    return (<div className={ 'm-6 shadow w-[240px] rounded-lg overflow-hidden' }>
        <Image src={ url } alt={ '' } width={ 240 } height={ 400 }/>
        <div
            className="text-center p-3 pt-6 font-bold text-slate-900">{ text }
        </div>
        <div className={ 'flex justify-center' }>
            <Image src={ 'Starsasasas.svg' } alt={ '' } width={ 100 } height={ 100 }/>
        </div>
        <div className={ 'flex justify-around py-6' }>
            <Link href={ href }>
                <Button variant={ 'ghost' } onClick={ () => storageName(text) }>查看详情</Button>
            </Link>
            <DialogCoverFrom text={ '顾问解答' } variant={ 'ghost' }
                             className={ 'text-[#E83328] hover:text-[#E83328] ' }/>
        </div>

    </div>)
}