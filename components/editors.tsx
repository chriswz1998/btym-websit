import '@wangeditor/editor/dist/css/style.css' // 引入 css

import React, { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from '@/components/ui/select'



function Editors({ onHtmlChange }: {onHtmlChange: (html:string) => void}){
    const [ editor, setEditor ] = useState<IDomEditor | null>(null)   // TS 语法
    const [ html, setHtml ] = useState('')

    const handleEditorChange = (newHtml: string) => {
        setHtml(newHtml);
        // 调用父组件传递的回调函数，将 HTML 值传递给父组件
        onHtmlChange(newHtml);
    };

    const toolbarConfig: Partial<IToolbarConfig> = {}  // TS 语法
    const editorConfig: Partial<IEditorConfig> = {}

    useEffect(() => {
        return () => {
            if(editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [ editor ])

    return (<div>
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
                onChange={ editor => handleEditorChange(editor.getHtml()) }
                mode="default"
                style={ { height: '500px', overflowY: 'hidden' } }
            />
        </div>)
}

export default Editors