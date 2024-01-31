'use client'

import * as React from 'react'
import Link from 'next/link'
import {ChevronDown} from "lucide-react";
import {HoverCardContentDetails} from "@/components/hoverCardContentDetails";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";

export function Navigation(){
    return (<div>
        <ul className='flex space-x-16'>
            <li>
                <Link href="/" legacyBehavior passHref>
                首页
                </Link>
            </li>
            <li>
                <Link href="/aboutUs" legacyBehavior passHref>
                    博泰介绍
                </Link>
            </li>
            <li className='flex space-x-2 hover:'>
                <HoverCard>
                    <HoverCardTrigger className={'flex space-x-2'}>
                        <span>加拿大移民</span>
                        <ChevronDown/>
                    </HoverCardTrigger>
                    <HoverCardContent className={'w-full  grid grid-cols-4 gap-4'}>
                        <HoverCardContentDetails/>
                        <HoverCardContentDetails/>
                        <HoverCardContentDetails/>
                        <HoverCardContentDetails/>
                        <HoverCardContentDetails/>
                        <HoverCardContentDetails/>
                        <HoverCardContentDetails/>
                    </HoverCardContent>
                </HoverCard>
            </li>
            <li className='flex space-x-2'>
                <HoverCard>
                    <HoverCardTrigger className={'flex space-x-2'}>
                        <span>加拿大留学</span>
                        <ChevronDown/>
                    </HoverCardTrigger>
                    <HoverCardContent className={'w-full  grid grid-cols-4 gap-4'}>
                        <HoverCardContentDetails/>
                        <HoverCardContentDetails/>
                        <HoverCardContentDetails/>
                        <HoverCardContentDetails/>
                        <HoverCardContentDetails/>
                        <HoverCardContentDetails/>
                        <HoverCardContentDetails/>
                    </HoverCardContent>
                </HoverCard>
            </li>
            <li className='flex space-x-2'>
                <HoverCard>
                    <HoverCardTrigger className={'flex space-x-2'}>
                        <span>加拿大资讯</span>
                        <ChevronDown/>
                    </HoverCardTrigger>
                    <HoverCardContent className={'w-full  grid grid-cols-4 gap-4'}>
                        <HoverCardContentDetails/>
                        <HoverCardContentDetails/>
                        <HoverCardContentDetails/>
                        <HoverCardContentDetails/>
                        <HoverCardContentDetails/>
                        <HoverCardContentDetails/>
                        <HoverCardContentDetails/>
                    </HoverCardContent>
                </HoverCard>
            </li>
        </ul>
    </div>)
}
