'use client'
import dynamic from 'next/dynamic';

const DynamicEditor = dynamic(() => import('../../components/editors'), { ssr: false });

import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from '@/components/ui/select'


function Editors(){
    return (<div className={ 'w-full h-full bg-amber-300 flex flex-col items-center justify-center' }>
        <div>
            <div className={ 'p-5 bg-amber-100 flex space-x-5' }>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme"/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <DynamicEditor/>
        </div>
    </div>)
}

export default Editors