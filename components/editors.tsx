import '@wangeditor/editor/dist/css/style.css' // 引入 css

import React, { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from '@/components/ui/select'



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
                onChange={ editor => setHtml(editor.getHtml()) }
                mode="default"
                style={ { height: '500px', overflowY: 'hidden' } }
            />
            <div
                className="border mt-10 p-5 bg-white"
                dangerouslySetInnerHTML={ { __html: html } }
            />
        </div>)
}

export default Editors