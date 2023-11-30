import {
  Blocks
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useRouter } from 'next/navigation'

export const DropdownMenuItemEach = [
  {
    text: '安大略省',
    href: '/province/ontario'
  },
  {
    text: '不列颠哥伦比亚省',
    href: '/province/british-columbia'
  },
  {
    text: '魁北克省',
    href: '/province/quebec'
  },
  {
    text: '爱德华王子岛省',
    href: '/province/prince-edward-island'
  },
  {
    text: '艾尔伯塔省',
    href: '/province/alberta'
  },
  {
    text: '曼尼托巴省',
    href: '/province/manitoba'
  },
  {
    text: '萨斯喀彻温省',
    href: '/province/saskatchewan'
  },
  {
    text: '新斯科舍省',
    href: '/province/nova-scotia'
  },
  {
    text: '纽芬兰和拉布拉多省',
    href: '/province/newfoundland-and-labrador'

  },
  {
    text: '新不伦瑞克省',
    href: '/province/new-brunswick'
  }
]

export function DropdownMenuDemo() {
  const router = useRouter()
  return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={ 'outline' }
                  className={ 'mr-6 text-[18px] font-light bg-transparent hover:bg-transparent hover:text-white border-0 hover:border-0' }>移民省份</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[300px] ">
          <DropdownMenuGroup className={ 'p-2' }>
            {
              DropdownMenuItemEach.map((item, index) => {
                return (

                    <DropdownMenuItem className={ 'text-[18px]' }
                                      key={ index }
                                      onClick={ () => router.push(
                                          `${ item.href }`) }>
                      <Blocks size={ 22 } className="mr-2"/>
                      <span>{ item.text }</span>
                      <DropdownMenuShortcut
                          className={ 'text-[18px]' }>⇧</DropdownMenuShortcut>
                    </DropdownMenuItem>

                )
              })
            }
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
  )
}
