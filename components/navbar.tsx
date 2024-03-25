import { useNav } from '@/context/nav-context'
import { Logo } from '@/app/(marketing)/_components/logo'
import Link from 'next/link'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { ChevronDown, Menu } from 'lucide-react'
import * as React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { SubSectionLink } from '@/lib/model'
import {
    Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from '@/components/ui/accordion'
import {
    Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger
} from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'


export const Navbar = () => {
    const route = useRouter()

    const { data } = useNav();
    const jump = ({ subSectionLinks_id, link }: SubSectionLink) => {
        route.push(link)
    }

    return (<div className="w-full bg-mask-color5">
        <div className="px-4 md:px-20 mx-auto">
            <div className="flex justify-between items-center">
                <div className="flex items-center text-white">
                    <Logo/>
                    <Sheet>
                        <SheetTrigger>
                            <Button variant={ 'link' } className={ 'md:hidden text-white' }><Menu/> 菜单</Button>
                        </SheetTrigger>
                        <SheetContent side={ 'left' } className={ 'flex flex-col' }>
                            <SheetHeader>
                                <SheetTitle>
                                    博泰移民</SheetTitle>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>
                                            <Link href="/" passHref>
                                                首页
                                            </Link>
                                        </AccordionTrigger>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>
                                            <Link href="/aboutUs" passHref>
                                                博泰介绍
                                            </Link>
                                        </AccordionTrigger>
                                    </AccordionItem>
                                    { data?.map((item, index) => {
                                        return (<AccordionItem key={ index } value={ `item-${ index + 3 }` }>
                                            <AccordionTrigger>{ item.name }</AccordionTrigger>
                                            <AccordionContent className={ 'scroll-auto' }>
                                                <ScrollArea className="w-full h-[500px] rounded-md border p-4">
                                                    { item.subSections.map((Item, Index) => {
                                                        return (<div key={ Index }>
                                                            { Item.links.map((subItems, subIndex) => {
                                                                return (<div key={ subIndex } className={ 'flex' }>
                                                                    <Button
                                                                        variant={ 'ghost' }
                                                                        className={ 'text-gray-600' }
                                                                        onClick={ () => jump(subItems) }>
                                                                        { subItems.name }
                                                                    </Button>
                                                                </div>);
                                                            }) }
                                                        </div>)
                                                    }) }
                                                </ScrollArea>
                                            </AccordionContent>
                                        </AccordionItem>)
                                    }) }
                                </Accordion>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                    <ul className={ 'hidden md:flex items-center space-x-8 text-white' }>
                        <li>
                            <Link href="/" passHref>
                                首页
                            </Link>
                        </li>
                        <li>
                            <Link href="/aboutUs" passHref>
                                博泰介绍
                            </Link>
                        </li>
                        { data?.map((section, index) => (<li key={ index } className="relative">
                            <HoverCard>
                                <HoverCardTrigger className="flex space-x-2">
                                    <span className="text-white">{ section.name }</span>
                                    <ChevronDown className="text-white"/>
                                </HoverCardTrigger>
                                <HoverCardContent className="w-full max-w-7xl flex flex-wrap">
                                    { section.subSections.map((subSection, subIndex) => (
                                        <div key={ subIndex } className={ 'text-black space-y-4 p-5' }>
                                            <div className="flex space-x-4">
                                                <div className="bg-red-600 h-[45px] w-[5px]"/>
                                                <div className={ 'space-y-2' }>
                                                    <div>{ subSection.name }</div>
                                                    <div
                                                        className={ 'flex items-center space-x-2 text-xs font-semibold' }
                                                    >
                                                        <div className="w-[5px] h-[5px] bg-orange-500 "/>
                                                        <p>{ subSection.description }</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={ 'space-y-4' }>
                                                <div className={ 'text-sm space-y-4' }>
                                                    <div className={ 'text-xs space-y-1 flex flex-col' }>
                                                        { subSection.links.map((subItems, subIndex) => {
                                                            return (<Button key={ subIndex } variant={ 'ghost' }
                                                                            className={ 'text-gray-600 flex justify-start' }
                                                                            onClick={ () => jump(subItems) }>
                                                                { subItems.name }
                                                                <span className={ 'text-blue-900 ml-3' }>
                                                                         { subItems.description }
                                                                    </span>
                                                            </Button>);
                                                        }) }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)) }
                                </HoverCardContent>
                            </HoverCard>
                        </li>)) }
                    </ul>
                </div>
            </div>
        </div>
    </div>)
}
