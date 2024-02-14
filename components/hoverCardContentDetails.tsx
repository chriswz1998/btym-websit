'use client'

import { NavigationItem } from '@/lib/publicResuces';
import { useRouter } from 'next/navigation'

export const HoverCardContentDetails = ({ Data }: { Data: NavigationItem }) => {
    const route = useRouter()
    const jump = (link: string) => {
        route.push(link)
        console.log(1111)
    }
    return (<div className={ 'text-black space-y-4 p-5' }>
            <div className="flex space-x-4">
                <div className="bg-red-600 h-[45px] w-[5px]"/>
                <div className={ 'space-y-2' }>
                    <div>{ Data.title }</div>
                    <div
                        className={ 'flex items-center space-x-2 text-xs font-semibold' }
                    >
                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                        <p>{ Data.engDes }</p>
                    </div>
                </div>
            </div>
            <div className={ 'space-y-4' }>
                <div className={ 'text-sm space-y-4' }>
                    <div className={ 'font-bold text-blue-900' }>
                        { Data.subItem.subTitle || null }
                    </div>
                    <div className={ 'text-xs space-y-2' }>
                        { Data.subItem.items.map((subItems, subIndex) => {
                            return (<p key={ subIndex } className={ 'text-gray-600 text-xs' } onClick={ () => jump(subItems.link) }>
                                    { subItems.productName }
                                    <span className={ 'text-blue-900' }>
                          { ' ' }
                                        { subItems.productDes }
                        </span>
                                </p>);
                        }) }
                    </div>
                </div>
            </div>
        </div>);
};
