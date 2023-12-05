import {
    Blocks
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuShortcut, DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useRouter } from 'next/navigation'
import { DropdownMenuItemEach_employers, DropdownMenuItemEach_province } from '@/lib/publicResuces'

export function DropdownMenuDemo( { model }: { model?: string } ) {
    const router = useRouter()
    return ( <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant={ 'outline' }
                    className={ 'mr-6 text-[18px] font-light bg-transparent hover:bg-transparent hover:text-white border-0 hover:border-0' }>
                { model === 'province' ? '移民省份' : '探索移民方式' }
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[300px] ">
            <DropdownMenuGroup className={ 'p-2' }>
                { model === 'province' ? DropdownMenuItemEach_province.map( ( item, index ) => {
                    return ( <DropdownMenuItem className={ 'text-[18px]' }
                                               key={ index }
                                               onClick={ () => router.push( `${ item.href }` ) }>
                            <Blocks size={ 22 } className="mr-2"/>
                            <span>{ item.text }</span>
                            <DropdownMenuShortcut
                                className={ 'text-[18px]' }>⇧</DropdownMenuShortcut>
                        </DropdownMenuItem>

                    )
                } ) : DropdownMenuItemEach_employers.map( ( item, index ) => {
                    return ( <DropdownMenuItem className={ 'text-[18px]' }
                                               key={ index }
                                               onClick={ () => router.push( `${ item.href }` ) }>
                            <Blocks size={ 22 } className="mr-2"/>
                            <span>{ item.text }</span>
                            <DropdownMenuShortcut
                                className={ 'text-[18px]' }>⇧</DropdownMenuShortcut>
                        </DropdownMenuItem>

                    )
                } ) }
            </DropdownMenuGroup>
        </DropdownMenuContent>
    </DropdownMenu> )
}
