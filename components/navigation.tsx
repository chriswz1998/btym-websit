'use client'

import * as React from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react';
import { HoverCardContentDetails } from '@/components/hoverCardContentDetails';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import {CombinedSection} from "@/lib/model";

export function Navigation({data }: {data:CombinedSection[] | null}){
    return (<div>
        <ul className="flex space-x-16">
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

            {data?.map((section, index) => (
                <li key={index} className="flex space-x-2 hover:cursor-pointer">
                    <HoverCard>
                        <HoverCardTrigger className="flex space-x-2">
                            <span>{section.name}</span>
                            <ChevronDown />
                        </HoverCardTrigger>
                        <HoverCardContent className="w-full grid grid-cols-4 gap-4">
                            {section.subSections.map((subSection, subIndex) => (
                                <HoverCardContentDetails key={subIndex} Data={subSection} />
                            ))}
                        </HoverCardContent>
                    </HoverCard>
                </li>
            ))}
        </ul>
    </div>)
}
