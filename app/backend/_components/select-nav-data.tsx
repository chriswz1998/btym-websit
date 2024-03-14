import { forwardRef, useState } from 'react'
import { CombinedSubSection, SubSectionLink } from '@/lib/model'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import * as React from 'react'
import { useNav } from '@/context/nav-context'

interface SelectNavDataProps{
    onChange: (value: any) => void
}

// eslint-disable-next-line react/display-name
export const SelectNavData = forwardRef<HTMLDivElement, SelectNavDataProps>((props, ref) => {
    const { data, isLoading } = useNav();

    const [ subSections, setSubSections ] = useState<CombinedSubSection[] | undefined | null>(null)
    const [ subSectionsLinks, setSubSectionsLinks ] = useState<SubSectionLink[] | undefined | null>(null)

    const sectionSelected = (value: string) => {
        setSubSections(null)
        setSubSectionsLinks(null)
        setSubSections(data?.filter(item => item.name === value)[0].subSections)
    }
    const subSectionsSelected = (value: string) => {
        setSubSectionsLinks(null)
        setSubSectionsLinks(subSections?.filter(item => item.name === value)[0].links)
    }
    const subSectionLinksSelected = (value: string) => {
        const selectedLink = subSectionsLinks?.filter(item => item.name === value)[0].link
        console.log(selectedLink)
        if(selectedLink){
            console.log(1)
            props.onChange(selectedLink);
        }
    }
    return (<div className={ 'w-full space-y-2' }>
        <Select onValueChange={ (param) => sectionSelected(param) } disabled={ isLoading }>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="请选择导航栏项目"/>
            </SelectTrigger>
            <SelectContent>
                { data?.map((item, index) => {
                    return (<SelectItem value={ item.name } key={ index }>{ item.name }</SelectItem>)
                }) }
            </SelectContent>
        </Select>
        <Select disabled={ !subSections } onValueChange={ (param) => subSectionsSelected(param) }>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="请选择子项目"/>
            </SelectTrigger>
            <SelectContent>
                { subSections?.map((item, index) => {
                    return (<SelectItem value={ item.name } key={ index }>{ item.name }</SelectItem>)
                }) }
            </SelectContent>
        </Select>
        <Select disabled={ !subSectionsLinks } onValueChange={ (param) => subSectionLinksSelected(param) }>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="请选择具体链接"/>
            </SelectTrigger>
            <SelectContent>
                { subSectionsLinks?.map((item, index) => {
                    return (<SelectItem value={ item.name } key={ index }>{ item.name }</SelectItem>)
                }) }
            </SelectContent>
        </Select>
    </div>)
})