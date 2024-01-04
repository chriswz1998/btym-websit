'use client'

import * as React from 'react'
import Link from 'next/link'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import {
    DropdownMenuItemEach_employers, DropdownMenuItemEach_province, DropdownMenuItemEach_tools
} from '@/lib/publicResuces'

export function Navigation(){
    return (<NavigationMenu>
        <NavigationMenuList className={ 'space-x-12' }>
            <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={ 'bg-transparent hover:bg-transparent' }>
                        首页
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/aboutUs" legacyBehavior passHref>
                    <NavigationMenuLink className={ 'bg-transparent hover:bg-transparent' }>
                        博泰介绍
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/all_profiles" legacyBehavior passHref>
                    <NavigationMenuLink className={ 'bg-transparent hover:bg-transparent' }>
                        客户案例
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger
                    className={ 'bg-transparent text-[16px]' }>移民省份</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        { DropdownMenuItemEach_province.map((item, index) => {
                            return (<li key={ index }>
                                <Link href={ item.href } legacyBehavior passHref>
                                    <NavigationMenuLink asChild>
                                        <div
                                            className={ 'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground' }
                                        >
                                            <div className="text-sm font-medium leading-none">{ item.text }</div>
                                            <div
                                                className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                { item.description }
                                            </div>
                                        </div>
                                    </NavigationMenuLink>
                                </Link>
                            </li>)
                        }) }
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger
                    className={ 'bg-transparent text-[16px]' }>探索移民方式</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        { DropdownMenuItemEach_employers.map((item, index) => {
                            return (<li key={ index }>
                                <Link href={ item.href } legacyBehavior passHref>
                                    <NavigationMenuLink asChild>
                                        <div
                                            className={ 'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground' }
                                        >
                                            <div className="text-sm font-medium leading-none">{ item.text }</div>
                                            <div
                                                className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                { item.description }
                                            </div>
                                        </div>
                                    </NavigationMenuLink>
                                </Link>
                            </li>)
                        }) }
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger
                    className={ 'bg-transparent text-[16px]' }>打分工具</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        { DropdownMenuItemEach_tools.map((item, index) => {
                            return (<li key={ index }>
                                <Link href={ item.href } legacyBehavior passHref>
                                    <NavigationMenuLink asChild>
                                        <div
                                            className={ 'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground' }
                                        >
                                            <div className="text-sm font-medium leading-none">{ item.text }</div>
                                            <div
                                                className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                { item.description }
                                            </div>
                                        </div>
                                    </NavigationMenuLink>
                                </Link>
                            </li>)
                        }) }
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>)
}
