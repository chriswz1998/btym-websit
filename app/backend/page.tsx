'use client'

import { ModelSelectBar } from '@/app/backend/_components/model-select-bar'
import EditFirstPage from '@/app/backend/(dashboard)/Editor/firstPage/page'
import { useState } from 'react'
import EditAboutUs from '@/app/backend/(dashboard)/Editor/aboutUs/page'
import EditOther from '@/app/backend/(dashboard)/Editor/EditOther/page'
import { ImageLibrary } from '@/app/backend/(dashboard)/Editor/imageLibrary/page'

export default function BackendPages(){
    const [ showOnePage, setShowOnePage ] = useState('firstPage')
    return (<div className="w-full h-full">
        <div className="max-w-7xl mx-auto space-y-4 p-5">
            <div className="flex items-center border p-5 space-x-4 rounded">
                <span>请选择要编辑的模块:</span>
                <ModelSelectBar setShowOnePage={ setShowOnePage }/>
            </div>
            { showOnePage === 'firstPage' ? <EditFirstPage/> : showOnePage === 'aboutUs' ?
                <EditAboutUs/> : showOnePage === 'imageLibrary' ? <ImageLibrary/> : <EditOther/> }

        </div>
    </div>)
}