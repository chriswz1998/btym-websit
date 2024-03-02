'use client'

import { useRouter } from 'next/navigation'
import {SubSection, SubSectionLink} from "@/lib/model";
import {Button} from "@/components/ui/button";

export const HoverCardContentDetails = ({ Data }: { Data: SubSection }) => {
    const route = useRouter()
    const jump = ({subSectionLinks_id, link}: SubSectionLink) => {
        // route.push(`${link}/${subSectionLinks_id}`)
        route.push(link)
    }
    return (<div className={ 'text-black space-y-4 p-5' }>
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[45px] w-[5px]"/>
                <div className={ 'space-y-2' }>
                    <div>{ Data.name }</div>
                    <div
                        className={ 'flex items-center space-x-2 text-xs font-semibold' }
                    >
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>{ Data.description }</p>
                    </div>
                </div>
            </div>
            <div className={ 'space-y-4' }>
                <div className={ 'text-sm space-y-4' }>
                    <div className={ 'text-xs space-y-1 flex flex-col' }>
                        { Data.links.map((subItems, subIndex) => {
                            return (<Button key={ subIndex } variant={'ghost'} className={ 'text-gray-600 flex justify-start' } onClick={ () => jump(subItems) }>
                                    { subItems.name }
                                    <span className={ 'text-blue-900 ml-3' }>
                                        { subItems.description }
                        </span>
                                </Button>);
                        }) }
                    </div>
                </div>
            </div>
        </div>);
};
