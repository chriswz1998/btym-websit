'use client'
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import React, { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import { Button } from '@/components/ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



function Editors(){
    const [ editor, setEditor ] = useState<IDomEditor | null>(null)   // TS 语法
    const [ html, setHtml ] = useState('<p>hello</p>')

    const toolbarConfig: Partial<IToolbarConfig> = {}  // TS 语法
    const editorConfig: Partial<IEditorConfig> = {    // TS 语法
        placeholder: '请输入内容...'
    }
    useEffect(() => {
        return () => {
            if(editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [ editor ])

    return (<div className={ 'w-full h-full bg-amber-300 flex flex-col items-center justify-center' }>
        <div className="border w-3/5">
            <div className={ 'p-5 bg-amber-100 flex space-x-5' }>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Toolbar
                editor={ editor }
                defaultConfig={ toolbarConfig }
                mode="default"
                style={ { borderBottom: '1px solid #ccc' } }
            />
            <Editor
                defaultConfig={ editorConfig }
                value={ html }
                onCreated={ setEditor }
                onChange={ editor => setHtml(editor.getHtml()) }
                mode="default"
                style={ { height: '500px', overflowY: 'hidden' } }
            />
        </div>
        <div className="border w-3/5 mt-10 p-5">
            { html }
        </div>
    </div>)
}

export default Editors