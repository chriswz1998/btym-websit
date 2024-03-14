'use client'
import dynamic from 'next/dynamic';

const DynamicEditor = dynamic(() => import('../../../../../components/editors'), { ssr: false });
import { useState } from 'react';
import useHttp from '@/hooks/useActions';
import { SelectNavData } from '@/app/backend/_components/select-nav-data'


function EditOther(){
    const [ editorHtml, setEditorHtml ] = useState('');
    const { data: postResult, isLoading: postResultIsLoading, execute } = useHttp()

    const handleEditorHtmlChange = (newHtml: string) => {
        setEditorHtml(newHtml);
    };
    const linkOnchange = (value: string) => {
        console.log(value)
    }

    const submit = async() => {
        console.log(postResult)
    }

    return (<div className={ 'w-full h-full bg-amber-300 flex flex-col items-center justify-center' }>
        <div>
            <SelectNavData onChange={ linkOnchange }/>
            <DynamicEditor onHtmlChange={ handleEditorHtmlChange }/>
        </div>
    </div>)
}

export default EditOther