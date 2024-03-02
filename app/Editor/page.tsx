'use client'
import dynamic from 'next/dynamic';

const DynamicEditor = dynamic(() => import('../../components/editors'), { ssr: false });

import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from '@/components/ui/select'
import {useNav} from "@/context/nav-context";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {CombinedSubSection, SubSectionLink} from "@/lib/model";
import useHttp from "@/hooks/useActions";


function Editors(){
    const { data, isLoading } = useNav();
    const [subSections, setSubSections] = useState<CombinedSubSection[] | undefined | null>(null)
    const [subSectionsLinks, setSubSectionsLinks] = useState<SubSectionLink[] | undefined | null>(null)
    const [subSectionsLinks_id, set_subSectionsLinks_id] = useState<number | null | undefined>(null)

    const [editorHtml, setEditorHtml] = useState('');

    const {data: postResult, isLoading:postResultIsLoading, execute} = useHttp('')

    const sectionSelected = (value: string) => {
        setSubSections(null)
        setSubSectionsLinks(null)
        setSubSections(data?.filter(item => item.name === value)[0].subSections)
    }
    const subSectionsSelected = (value: string) => {
        setSubSectionsLinks(null)
        setSubSectionsLinks(subSections?.filter(item => item.name === value)[0].links)
    }
    const subSectionLinksSelected = (value:string) => {
        set_subSectionsLinks_id(subSectionsLinks?.filter(item => item.name === value)[0].subSectionLinks_id)
    }
    const handleEditorHtmlChange = (newHtml: string) => {
        setEditorHtml(newHtml);
    };

    const submit = async () => {
        await execute('/api/postArticles', {
            method: 'POST',body: JSON.stringify({
                subSectionLinks_id: subSectionsLinks_id,
                html_content: editorHtml

            })
        })
        console.log(postResult)
    }

    return (<div className={ 'w-full h-full bg-amber-300 flex flex-col items-center justify-center' }>
        <div>
            <div className={ 'p-5 bg-amber-100 flex space-x-5' }>
                <Select onValueChange={(param) => sectionSelected(param)} disabled={isLoading}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="请选择导航栏项目"/>
                    </SelectTrigger>
                    <SelectContent>
                        {
                            data?.map((item, index) => {
                                return (
                                    <SelectItem value={item.name} key={index}>{item.name}</SelectItem>
                                )
                            })
                        }
                    </SelectContent>
                </Select>
                <Select disabled={!subSections} onValueChange={(param) => subSectionsSelected(param)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="请选择子项目"/>
                    </SelectTrigger>
                    <SelectContent>
                        {
                            subSections?.map((item, index) => {
                                return (
                                    <SelectItem value={item.name} key={index}>{item.name}</SelectItem>
                                )
                            })
                        }
                    </SelectContent>
                </Select>
                <Select disabled={!subSectionsLinks} onValueChange={(param) => subSectionLinksSelected(param)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="请选择具体链接"/>
                    </SelectTrigger>
                    <SelectContent>
                        {
                            subSectionsLinks?.map((item, index) => {
                                return (
                                    <SelectItem value={item.name} key={index}>{item.name}</SelectItem>
                                )
                            })
                        }
                    </SelectContent>
                </Select>
                <Button onClick={submit}>提交</Button>
            </div>
            <DynamicEditor onHtmlChange={handleEditorHtmlChange}/>
        </div>
    </div>)
}

export default Editors